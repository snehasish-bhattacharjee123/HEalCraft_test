import React, { useState, useRef } from 'react';
import { Upload, Check, X } from 'lucide-react';

const ProfileUpload = ({ currentImage, onImageUpdate }) => {
  console.log('[ProfileUpload] Initializing with currentImage:', currentImage?.substring(0, 30) + '...');
  const [previewImage, setPreviewImage] = useState(currentImage);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    console.log('[ProfileUpload] File selection initiated');
    const file = e.target.files[0];
    if (!file) {
      console.log('[ProfileUpload] No file selected');
      return;
    }

    console.log('[ProfileUpload] File selected:', file.name, 'type:', file.type, 'size:', (file.size / 1024).toFixed(2) + 'KB');

    // Check if file is an image
    if (!file.type.match('image.*')) {
      console.error('[ProfileUpload] Error: Not an image file');
      setUploadError('Please select an image file');
      return;
    }

    // Check file size (limit to 2MB)
    if (file.size > 2 * 1024 * 1024) {
      console.error('[ProfileUpload] Error: File size exceeds 2MB limit');
      setUploadError('Image size should be less than 2MB');
      return;
    }

    console.log('[ProfileUpload] File validation passed, beginning upload process');
    setIsUploading(true);
    setUploadError(false);

    // Create a preview
    const reader = new FileReader();
    reader.onload = (event) => {
      console.log('[ProfileUpload] Preview image created');
      setPreviewImage(event.target.result);
    };
    reader.readAsDataURL(file);

    // Simulate upload process
    setTimeout(() => {
      console.log('[ProfileUpload] Upload simulation complete');
      setIsUploading(false);
      setUploadSuccess(true);
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        console.log('[ProfileUpload] Resetting success status');
        setUploadSuccess(false);
      }, 3000);

      // In a real application, you would upload the file to a server here
      // For this demo, we'll just pass the file object to the parent component
      console.log('[ProfileUpload] Updating parent component with new image');
      onImageUpdate(file, URL.createObjectURL(file));
    }, 1500);
  };

  const triggerFileInput = () => {
    console.log('[ProfileUpload] Upload button clicked');
    fileInputRef.current.click();
  };

  return (
    <div className="profile-upload">
      <div className="relative inline-block">
        {/* Profile Image */}
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-red-700 shadow-lg mx-auto mb-4">
          <img
            src={previewImage || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
            alt="Profile"
            className="w-full h-full object-cover"
            onLoad={() => console.log('[ProfileUpload] Profile image loaded')}
            onError={() => console.error('[ProfileUpload] Error loading profile image')}
          />
        </div>

        {/* Upload Button */}
        <button
          onClick={triggerFileInput}
          className="absolute bottom-4 right-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center border-2 border-white shadow-md hover:bg-red-700 transition-colors"
          title="Upload profile picture"
        >
          <Upload size={16} className="text-white" />
        </button>

        {/* Hidden File Input */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          accept="image/*"
          className="hidden"
        />
      </div>

      {/* Status Indicators */}
      {isUploading && (
        <div className="text-yellow-600 text-sm flex items-center justify-center mt-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-600 mr-2"></div>
          Uploading...
        </div>
      )}

      {uploadSuccess && (
        <div className="text-green-600 text-sm flex items-center justify-center mt-2">
          <Check size={16} className="mr-1" />
          Upload successful!
        </div>
      )}

      {uploadError && (
        <div className="text-red-600 text-sm flex items-center justify-center mt-2">
          <X size={16} className="mr-1" />
          {uploadError}
        </div>
      )}
    </div>
  );
};

export default ProfileUpload;
