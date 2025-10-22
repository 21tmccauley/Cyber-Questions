import React from 'react';
import { Save, Download } from 'lucide-react';

interface SectionFooterProps {
  onSave: () => void;
  onExport: () => void;
}

const SectionFooter: React.FC<SectionFooterProps> = ({ onSave, onExport }) => {
  return (
    <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
      <div className="flex justify-end space-x-3">
        <button
          onClick={onSave}
          className="btn btn-success"
        >
          <Save className="h-4 w-4 mr-2" />
          Save Progress
        </button>
        
        <button
          onClick={onExport}
          className="btn btn-info"
        >
          <Download className="h-4 w-4 mr-2" />
          Export Assessment
        </button>
      </div>
    </div>
  );
};

export default SectionFooter;
