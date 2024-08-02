
import React from 'react';

interface LearnMoreModalProps {
  isOpen: boolean;
  ad: Ads | null;
  onClose: () => void;
}

interface Ads {
  id: number;
  title: string;
  description: string;
  image: string;
}

const LearnMoreModal: React.FC<LearnMoreModalProps> = ({ isOpen, ad, onClose }) => {
  if (!isOpen || !ad) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
        <h2 className="text-xl font-bold">{ad.title}</h2>
        <p className="mt-2">{ad.description}</p>
        <img src={ad.image} alt={ad.title} className="mt-4 w-full h-auto rounded-md" />
        <div className="flex justify-center mt-4"> {/* Centering the button */}
          <button onClick={onClose} className="px-4 py-2 bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearnMoreModal;
