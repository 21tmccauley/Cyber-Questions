import React from 'react';
import { AssessmentProvider } from '@/context/AssessmentContext';
import Header from '@/components/Header';
import ProgressBar from '@/components/ProgressBar';
import Navigation from '@/components/Navigation';
import MainContent from '@/components/MainContent';
import SummaryModal from '@/components/SummaryModal';

function App() {
  return (
    <AssessmentProvider>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Header />
          <ProgressBar />
          <Navigation />
          <MainContent />
          <SummaryModal />
        </div>
      </div>
    </AssessmentProvider>
  );
}

export default App;
