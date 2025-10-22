import React from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  currentSection: number;
  totalSections: number;
  onPrevious: () => void;
  onNext: () => void;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  currentSection,
  totalSections,
  onPrevious,
  onNext
}) => {
  const isFirstSection = currentSection === 0;
  const isLastSection = currentSection === totalSections - 1;

  return (
    <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        
        <div className="flex items-center space-x-3">
          <button
            onClick={onPrevious}
            disabled={isFirstSection}
            className={`btn btn-secondary ${
              isFirstSection ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </button>
          
          <button
            onClick={onNext}
            className="btn btn-primary"
          >
            {isLastSection ? (
              <>
                <Check className="h-4 w-4 mr-1" />
                Complete Assessment
              </>
            ) : (
              <>
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
