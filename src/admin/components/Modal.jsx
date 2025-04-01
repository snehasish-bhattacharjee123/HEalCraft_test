import React from 'react';
import { X } from 'lucide-react';

export function Modal({ isOpen, onClose, title, children }) {
  console.log('[Modal] Rendering with isOpen:', isOpen, 'title:', title);
  
  if (!isOpen) {
    console.log('[Modal] Modal is closed, not rendering content');
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
      onClick={() => {
        console.log('[Modal] Backdrop clicked, closing modal');
        onClose();
      }}
    >
      <div 
        className="bg-white rounded-xl w-full max-w-2xl transform transition-all animate-slideIn shadow-[0_0_50px_rgba(0,0,0,0.2)]"
        onClick={(e) => {
          console.log('[Modal] Modal content clicked, stopping propagation');
          e.stopPropagation();
        }}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <button
            onClick={() => {
              console.log('[Modal] Close button clicked');
              onClose();
            }}
            className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6 max-h-[calc(100vh-200px)] overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
}