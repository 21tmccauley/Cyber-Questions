import jsPDF from 'jspdf';

export interface ExportData {
  assessmentData: any;
  score: any;
  stats: any;
  highRiskItems: any[];
  incompleteItems: any[];
  naAnalysis: any;
  sections: any[];
}

export class AssessmentExporter {
  private data: ExportData;

  constructor(data: ExportData) {
    this.data = data;
  }

  // Enhanced JSON Export
  exportJSON(): void {
    const exportData = {
      metadata: {
        clientName: this.data.assessmentData.clientName || 'Not specified',
        assessmentDate: this.data.assessmentData.assessmentDate || new Date().toISOString().split('T')[0],
        assessorName: this.data.assessmentData.assessorName || 'Not specified',
        exportDate: new Date().toISOString(),
        version: '2.0'
      },
      summary: {
        overallScore: this.data.score.overall,
        completionRate: this.data.stats.completionRate,
        totalQuestions: this.data.stats.totalQuestions,
        completedQuestions: this.data.stats.completedQuestions,
        riskDistribution: this.data.score.riskCounts,
        sectionScores: this.data.score.sectionScores
      },
      findings: {
        highRiskItems: this.data.highRiskItems,
        incompleteItems: this.data.incompleteItems,
        naAnalysis: this.data.naAnalysis
      },
      detailedResponses: this.data.assessmentData.sections,
      recommendations: this.generateRecommendations()
    };

    const dataStr = JSON.stringify(exportData, null, 2);
    this.downloadFile(dataStr, 'application/json', 'cybersecurity-assessment-detailed.json');
  }

  // PDF Export
  exportPDF(): void {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    let yPosition = 20;

    // Helper function to add text with word wrapping
    const addText = (text: string, x: number, y: number, maxWidth: number, fontSize: number = 10) => {
      doc.setFontSize(fontSize);
      const lines = doc.splitTextToSize(text, maxWidth);
      doc.text(lines, x, y);
      return y + (lines.length * (fontSize * 0.4));
    };

    // Helper function to add new page if needed
    const checkPageBreak = (requiredSpace: number) => {
      if (yPosition + requiredSpace > pageHeight - 20) {
        doc.addPage();
        yPosition = 20;
        return true;
      }
      return false;
    };

    // Title
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    yPosition = addText('Cybersecurity Assessment Report', 20, yPosition, pageWidth - 40, 20);
    yPosition += 10;

    // Client Information
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    yPosition = addText('Assessment Information', 20, yPosition, pageWidth - 40, 12);
    yPosition += 5;

    doc.setFont('helvetica', 'normal');
    yPosition = addText(`Client: ${this.data.assessmentData.clientName || 'Not specified'}`, 20, yPosition, pageWidth - 40);
    yPosition = addText(`Date: ${this.data.assessmentData.assessmentDate || 'Not specified'}`, 20, yPosition, pageWidth - 40);
    yPosition = addText(`Assessor: ${this.data.assessmentData.assessorName || 'Not specified'}`, 20, yPosition, pageWidth - 40);
    yPosition += 15;

    // Executive Summary
    checkPageBreak(50);
    doc.setFont('helvetica', 'bold');
    yPosition = addText('Executive Summary', 20, yPosition, pageWidth - 40, 14);
    yPosition += 5;

    doc.setFont('helvetica', 'normal');
    const overallScore = this.data.score.overall;
    let summaryText = '';
    if (overallScore >= 80) {
      summaryText = 'The organization demonstrates a strong cybersecurity posture with comprehensive security controls in place.';
    } else if (overallScore >= 60) {
      summaryText = 'The organization has a good foundation of security controls with some areas requiring attention.';
    } else if (overallScore >= 40) {
      summaryText = 'The organization has significant security gaps that require immediate attention and improvement.';
    } else {
      summaryText = 'The organization has critical security vulnerabilities that require immediate remediation.';
    }

    yPosition = addText(summaryText, 20, yPosition, pageWidth - 40);
    yPosition += 10;

    // Security Score
    checkPageBreak(30);
    doc.setFont('helvetica', 'bold');
    yPosition = addText('Security Score Overview', 20, yPosition, pageWidth - 40, 12);
    yPosition += 5;

    doc.setFont('helvetica', 'normal');
    yPosition = addText(`Overall Security Score: ${overallScore}/100`, 20, yPosition, pageWidth - 40);
    yPosition = addText(`Completion Rate: ${this.data.stats.completionRate}%`, 20, yPosition, pageWidth - 40);
    yPosition = addText(`Total Questions: ${this.data.stats.totalQuestions}`, 20, yPosition, pageWidth - 40);
    yPosition = addText(`Completed Questions: ${this.data.stats.completedQuestions}`, 20, yPosition, pageWidth - 40);
    yPosition += 10;

    // Risk Distribution
    checkPageBreak(40);
    doc.setFont('helvetica', 'bold');
    yPosition = addText('Risk Distribution', 20, yPosition, pageWidth - 40, 12);
    yPosition += 5;

    doc.setFont('helvetica', 'normal');
    yPosition = addText(`High Risk Items: ${this.data.score.riskCounts.high}`, 20, yPosition, pageWidth - 40);
    yPosition = addText(`Medium Risk Items: ${this.data.score.riskCounts.medium}`, 20, yPosition, pageWidth - 40);
    yPosition = addText(`Low Risk Items: ${this.data.score.riskCounts.low}`, 20, yPosition, pageWidth - 40);
    yPosition = addText(`Informational Items: ${this.data.score.riskCounts.informational}`, 20, yPosition, pageWidth - 40);
    yPosition += 15;

    // Section Scores
    checkPageBreak(60);
    doc.setFont('helvetica', 'bold');
    yPosition = addText('Section Scores', 20, yPosition, pageWidth - 40, 12);
    yPosition += 5;

    doc.setFont('helvetica', 'normal');
    Object.entries(this.data.score.sectionScores).forEach(([, sectionScore]: [string, any]) => {
      checkPageBreak(15);
      yPosition = addText(`${sectionScore.name}: ${sectionScore.score}%`, 20, yPosition, pageWidth - 40);
    });
    yPosition += 15;

    // High Risk Items
    if (this.data.highRiskItems.length > 0) {
      checkPageBreak(60);
      doc.setFont('helvetica', 'bold');
      yPosition = addText('High Risk Items Requiring Attention', 20, yPosition, pageWidth - 40, 12);
      yPosition += 5;

      doc.setFont('helvetica', 'normal');
      this.data.highRiskItems.forEach((item, index) => {
        checkPageBreak(30);
        yPosition = addText(`${index + 1}. ${item.question}`, 20, yPosition, pageWidth - 40);
        yPosition = addText(`   Findings: ${item.findings}`, 20, yPosition, pageWidth - 40);
        yPosition += 5;
      });
      yPosition += 10;
    }

    // Recommendations
    checkPageBreak(80);
    doc.setFont('helvetica', 'bold');
    yPosition = addText('Recommendations', 20, yPosition, pageWidth - 40, 12);
    yPosition += 5;

    doc.setFont('helvetica', 'normal');
    const recommendations = this.generateRecommendations();
    recommendations.forEach((rec, index) => {
      checkPageBreak(15);
      yPosition = addText(`${index + 1}. ${rec}`, 20, yPosition, pageWidth - 40);
    });
    yPosition += 15;

    // Footer
    const totalPages = doc.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setFont('helvetica', 'normal');
      doc.text(`Page ${i} of ${totalPages}`, pageWidth - 30, pageHeight - 10);
      doc.text(`Generated on ${new Date().toLocaleDateString()}`, 20, pageHeight - 10);
    }

    // Download the PDF
    const fileName = `cybersecurity-assessment-${this.data.assessmentData.clientName || 'client'}-${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(fileName);
  }

  // HTML Export
  exportHTML(): void {
    const htmlContent = this.generateHTMLReport();
    this.downloadFile(htmlContent, 'text/html', 'cybersecurity-assessment-report.html');
  }

  // CSV Export
  exportCSV(): void {
    const csvContent = this.generateCSVReport();
    this.downloadFile(csvContent, 'text/csv', 'cybersecurity-assessment-data.csv');
  }

  private generateHTMLReport(): string {
    const overallScore = this.data.score.overall;
    const scoreColor = overallScore >= 80 ? '#10b981' : overallScore >= 60 ? '#f59e0b' : overallScore >= 40 ? '#f97316' : '#ef4444';
    
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cybersecurity Assessment Report</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8fafc;
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px;
            border-radius: 12px;
            margin-bottom: 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 2.5rem;
            font-weight: 700;
        }
        .header p {
            margin: 10px 0 0 0;
            opacity: 0.9;
            font-size: 1.1rem;
        }
        .card {
            background: white;
            border-radius: 12px;
            padding: 30px;
            margin-bottom: 30px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            border: 1px solid #e5e7eb;
        }
        .score-overview {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        .score-card {
            background: linear-gradient(135deg, ${scoreColor}20, ${scoreColor}10);
            border: 2px solid ${scoreColor}40;
            border-radius: 12px;
            padding: 25px;
            text-align: center;
        }
        .score-number {
            font-size: 3rem;
            font-weight: 700;
            color: ${scoreColor};
            margin-bottom: 10px;
        }
        .score-label {
            font-size: 1rem;
            color: #6b7280;
            font-weight: 500;
        }
        .risk-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
            margin: 20px 0;
        }
        .risk-item {
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            font-weight: 600;
        }
        .risk-high { background: #fef2f2; border: 1px solid #fecaca; color: #dc2626; }
        .risk-medium { background: #fffbeb; border: 1px solid #fed7aa; color: #d97706; }
        .risk-low { background: #f0fdf4; border: 1px solid #bbf7d0; color: #16a34a; }
        .risk-info { background: #f8fafc; border: 1px solid #d1d5db; color: #6b7280; }
        .section-score {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px;
            background: #f8fafc;
            border-radius: 8px;
            margin: 10px 0;
        }
        .progress-bar {
            width: 200px;
            height: 8px;
            background: #e5e7eb;
            border-radius: 4px;
            overflow: hidden;
        }
        .progress-fill {
            height: 100%;
            border-radius: 4px;
            transition: width 0.3s ease;
        }
        .high-risk-item {
            background: #fef2f2;
            border: 1px solid #fecaca;
            border-radius: 8px;
            padding: 20px;
            margin: 15px 0;
        }
        .recommendations {
            background: #eff6ff;
            border: 1px solid #bfdbfe;
            border-radius: 8px;
            padding: 20px;
        }
        .recommendations ul {
            margin: 0;
            padding-left: 20px;
        }
        .recommendations li {
            margin: 8px 0;
        }
        h2 {
            color: #1f2937;
            font-size: 1.5rem;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
        }
        h3 {
            color: #374151;
            font-size: 1.25rem;
            margin-bottom: 15px;
        }
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            background: #f8fafc;
            padding: 20px;
            border-radius: 8px;
        }
        .info-item {
            display: flex;
            flex-direction: column;
        }
        .info-label {
            font-weight: 600;
            color: #6b7280;
            font-size: 0.875rem;
        }
        .info-value {
            color: #1f2937;
            font-size: 1rem;
            margin-top: 4px;
        }
        @media print {
            body { background: white; }
            .card { box-shadow: none; border: 1px solid #e5e7eb; }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Cybersecurity Assessment Report</h1>
        <p>Comprehensive Security Analysis & Recommendations</p>
    </div>

    <div class="card">
        <h2>Assessment Information</h2>
        <div class="info-grid">
            <div class="info-item">
                <span class="info-label">Client</span>
                <span class="info-value">${this.data.assessmentData.clientName || 'Not specified'}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Assessment Date</span>
                <span class="info-value">${this.data.assessmentData.assessmentDate || 'Not specified'}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Assessor</span>
                <span class="info-value">${this.data.assessmentData.assessorName || 'Not specified'}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Report Generated</span>
                <span class="info-value">${new Date().toLocaleDateString()}</span>
            </div>
        </div>
    </div>

    <div class="card">
        <h2>Security Score Overview</h2>
        <div class="score-overview">
            <div class="score-card">
                <div class="score-number">${overallScore}</div>
                <div class="score-label">Overall Security Score</div>
            </div>
            <div class="score-card">
                <div class="score-number">${this.data.stats.completionRate}%</div>
                <div class="score-label">Completion Rate</div>
            </div>
            <div class="score-card">
                <div class="score-number">${this.data.stats.totalQuestions}</div>
                <div class="score-label">Total Questions</div>
            </div>
            <div class="score-card">
                <div class="score-number">${this.data.stats.completedQuestions}</div>
                <div class="score-label">Completed</div>
            </div>
        </div>
    </div>

    <div class="card">
        <h2>Risk Distribution</h2>
        <div class="risk-grid">
            <div class="risk-item risk-high">
                <div style="font-size: 1.5rem; font-weight: 700;">${this.data.score.riskCounts.high}</div>
                <div>High Risk</div>
            </div>
            <div class="risk-item risk-medium">
                <div style="font-size: 1.5rem; font-weight: 700;">${this.data.score.riskCounts.medium}</div>
                <div>Medium Risk</div>
            </div>
            <div class="risk-item risk-low">
                <div style="font-size: 1.5rem; font-weight: 700;">${this.data.score.riskCounts.low}</div>
                <div>Low Risk</div>
            </div>
            <div class="risk-item risk-info">
                <div style="font-size: 1.5rem; font-weight: 700;">${this.data.score.riskCounts.informational}</div>
                <div>Informational</div>
            </div>
        </div>
    </div>

    <div class="card">
        <h2>Section Scores</h2>
        ${Object.entries(this.data.score.sectionScores).map(([, sectionScore]: [string, any]) => `
            <div class="section-score">
                <span style="font-weight: 600;">${sectionScore.name}</span>
                <div style="display: flex; align-items: center; gap: 15px;">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${sectionScore.score}%; background: ${sectionScore.score >= 80 ? '#10b981' : sectionScore.score >= 60 ? '#f59e0b' : sectionScore.score >= 40 ? '#f97316' : '#ef4444'};"></div>
                    </div>
                    <span style="font-weight: 700; color: ${sectionScore.score >= 80 ? '#10b981' : sectionScore.score >= 60 ? '#f59e0b' : sectionScore.score >= 40 ? '#f97316' : '#ef4444'};">${sectionScore.score}%</span>
                </div>
            </div>
        `).join('')}
    </div>

    ${this.data.highRiskItems.length > 0 ? `
    <div class="card">
        <h2 style="color: #dc2626;">High Risk Items Requiring Attention</h2>
        ${this.data.highRiskItems.map((item, index) => `
            <div class="high-risk-item">
                <h3>${index + 1}. ${item.question}</h3>
                <p><strong>Findings:</strong> ${item.findings}</p>
            </div>
        `).join('')}
    </div>
    ` : ''}

    <div class="card">
        <h2>Recommendations</h2>
        <div class="recommendations">
            <ul>
                ${this.generateRecommendations().map(rec => `<li>${rec}</li>`).join('')}
            </ul>
        </div>
    </div>

    ${this.data.incompleteItems.length > 0 ? `
    <div class="card">
        <h2 style="color: #d97706;">Incomplete Items</h2>
        <p>The following items were not completed during the assessment:</p>
        <ul>
            ${this.data.incompleteItems.slice(0, 10).map(item => `<li>${item}</li>`).join('')}
            ${this.data.incompleteItems.length > 10 ? `<li>... and ${this.data.incompleteItems.length - 10} more items</li>` : ''}
        </ul>
    </div>
    ` : ''}

    ${this.data.naAnalysis.totalNA > 0 ? `
    <div class="card">
        <h2>Not Applicable Items Analysis</h2>
        <p><strong>Total N/A Items:</strong> ${this.data.naAnalysis.totalNA}</p>
        <p><strong>Critical N/A Items:</strong> ${this.data.naAnalysis.criticalNA}</p>
        <p><strong>Technology-Specific N/A Items:</strong> ${this.data.naAnalysis.technologyNA}</p>
        <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin-top: 15px;">
            <h3>Best Practices for N/A Items:</h3>
            <ul>
                <li>Document the reason why the item is not applicable</li>
                <li>Consider if these technologies should be part of your roadmap</li>
                <li>Review N/A items during annual security reviews</li>
                <li>Ensure N/A decisions align with business objectives</li>
            </ul>
        </div>
    </div>
    ` : ''}
</body>
</html>`;
  }

  private generateCSVReport(): string {
    const headers = ['Question ID', 'Question Text', 'Answer', 'Risk Level', 'Findings', 'Section'];
    const rows = [headers.join(',')];

    this.data.sections.forEach((section: any) => {
      section.subsections.forEach((subsection: any) => {
        subsection.questions.forEach((question: any) => {
          const data = this.data.assessmentData.sections[question.id];
          if (data) {
            const row = [
              question.id,
              `"${question.text.replace(/"/g, '""')}"`,
              data.answer || '',
              data.risk || '',
              `"${(data.findings || '').replace(/"/g, '""')}"`,
              section.title
            ];
            rows.push(row.join(','));
          }
        });
      });
    });

    return rows.join('\n');
  }

  private generateRecommendations(): string[] {
    const score = this.data.score.overall;
    const recommendations = [];
    
    if (score < 40) {
      recommendations.push("🚨 CRITICAL: Immediate security improvements required");
      recommendations.push("• Implement basic security controls immediately");
      recommendations.push("• Conduct comprehensive security training");
      recommendations.push("• Establish incident response procedures");
      recommendations.push("• Implement multi-factor authentication");
      recommendations.push("• Regular security assessments and monitoring");
    } else if (score < 60) {
      recommendations.push("⚠️ HIGH PRIORITY: Significant security gaps identified");
      recommendations.push("• Address high-risk items first");
      recommendations.push("• Implement missing security controls");
      recommendations.push("• Regular security assessments recommended");
      recommendations.push("• Enhance employee security awareness training");
      recommendations.push("• Implement continuous monitoring");
    } else if (score < 80) {
      recommendations.push("✅ GOOD: Solid security foundation with room for improvement");
      recommendations.push("• Focus on medium-risk items");
      recommendations.push("• Enhance existing security measures");
      recommendations.push("• Regular monitoring and updates needed");
      recommendations.push("• Consider advanced security measures");
      recommendations.push("• Implement security metrics and KPIs");
    } else {
      recommendations.push("🎉 EXCELLENT: Strong security posture");
      recommendations.push("• Maintain current security practices");
      recommendations.push("• Continue regular assessments");
      recommendations.push("• Consider advanced security measures");
      recommendations.push("• Share best practices with other organizations");
      recommendations.push("• Implement security automation and AI");
    }

    return recommendations;
  }

  private downloadFile(content: string, mimeType: string, filename: string): void {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}
