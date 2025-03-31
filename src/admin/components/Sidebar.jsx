import React, { useState } from 'react';
import { Building2, Guitar as Hospital, Users, Settings, Bell, LogOut, Package, UserPlus, FileText, Calendar, BarChart2, ShoppingBag, MessageSquare } from 'lucide-react';
import ProfileUpload from './ProfileUpload';

const menuItems = [
  { id: 'services', label: 'Services', icon: Building2 },
  { id: 'hospitals', label: 'Hospitals', icon: Hospital },
  { id: 'doctors', label: 'Doctors', icon: Users },
  { id: 'departments', label: 'Departments', icon: Building2 },
  { id: 'users', label: 'Users', icon: UserPlus },
  { id: 'packages', label: 'Packages', icon: Package },
  { id: 'appointments', label: 'Appointments', icon: Calendar },
  { id: 'reports', label: 'Reports', icon: FileText },
  { id: 'analytics', label: 'Analytics', icon: BarChart2 },
  { id: 'orders', label: 'Orders', icon: ShoppingBag },
  { id: 'messages', label: 'Messages', icon: MessageSquare },
];

export function Sidebar({ activeSection, onSectionChange, isOpen, onToggle }) {
  const [profileImage, setProfileImage] = useState("https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80");

  const handleImageUpdate = (file, imageUrl) => {
    setProfileImage(imageUrl);
    console.log('File to be saved:', file.name);
    console.log('File size:', (file.size / 1024).toFixed(2) + ' KB');
    console.log('File type:', file.type);
  };

  return (
    <div 
      className={`fixed left-0 top-0 bottom-0 bg-gradient-to-b from-red-900 to-red-800 text-white shadow-xl z-20 transition-all duration-300 flex flex-col overflow-hidden ${
        isOpen ? "w-72" : "w-0"
      }`}
    >
      {/* Sidebar Content - Only visible when sidebar is open */}
      <div className={`w-72 flex flex-col h-full transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}>
        {/* Admin Profile Section */}
        <div className="p-6 text-center border-b border-red-700/50 mt-8 flex-shrink-0">
          <ProfileUpload 
            currentImage={profileImage} 
            onImageUpdate={handleImageUpdate} 
          />
          <h2 className="text-xl font-bold mb-1">Dr. John Smith</h2>
          <p className="text-red-200 text-sm">Hospital Administrator</p>
        </div>

        {/* Navigation Menu */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="p-4">
            <nav className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onSectionChange(item.id)}
                    className={`flex items-center w-full p-3 rounded-xl transition-all duration-200 group ${
                      isActive
                        ? 'bg-red-700 text-white shadow-lg'
                        : 'hover:bg-red-700/50 text-red-100'
                    }`}
                  >
                    <Icon 
                      size={20} 
                      className={`transition-transform duration-200 ${
                        isActive ? 'transform scale-110' : 'group-hover:scale-110'
                      }`} 
                    />
                    <span className="ml-3 font-medium">{item.label}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 rounded-full bg-white"></div>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="p-4 border-t border-red-700/50 flex-shrink-0">
          <div className="flex items-center justify-between mb-4">
            <button className="p-2 hover:bg-red-700/50 rounded-lg transition-colors">
              <Bell size={20} className="text-red-200" />
            </button>
            <button className="p-2 hover:bg-red-700/50 rounded-lg transition-colors">
              <Settings size={20} className="text-red-200" />
            </button>
            <button className="p-2 hover:bg-red-700/50 rounded-lg transition-colors">
              <LogOut size={20} className="text-red-200" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}