import React from 'react';
import { Building2, Guitar as Hospital, Users, Settings, Bell, LogOut, Package, UserPlus } from 'lucide-react';
import clsx from 'clsx';

const menuItems = [
  { id: 'services', label: 'Services', icon: Building2 },
  { id: 'hospitals', label: 'Hospitals', icon: Hospital },
  { id: 'doctors', label: 'Doctors', icon: Users },
  { id: 'departments', label: 'Departments', icon: Building2 },
  { id: 'users', label: 'Users', icon: UserPlus },
  { id: 'packages', label: 'Packages', icon: Package },
];

export function Sidebar({ activeSection, onSectionChange }) {
  return (
    <div className="fixed left-0 top-0 bottom-0 w-72 bg-gradient-to-b from-red-900 to-red-800 text-white shadow-xl overflow-y-auto z-20">
      {/* Admin Profile Section */}
      <div className="p-6 text-center border-b border-red-700/50">
        <div className="relative inline-block">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Admin"
            className="w-24 h-24 rounded-full border-4 border-red-700 shadow-lg mx-auto mb-4"
          />
          <div className="absolute bottom-4 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-red-800"></div>
        </div>
        <h2 className="text-xl font-bold mb-1">Dr. John Smith</h2>
        <p className="text-red-200 text-sm">Hospital Administrator</p>
      </div>

      {/* Navigation Menu */}
      <div className="p-4">
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={clsx(
                  'flex items-center w-full p-3 rounded-xl transition-all duration-200 group',
                  activeSection === item.id
                    ? 'bg-red-700 text-white shadow-lg'
                    : 'hover:bg-red-700/50 text-red-100'
                )}
              >
                <Icon size={20} className={clsx(
                  'transition-transform duration-200',
                  activeSection === item.id ? 'transform scale-110' : 'group-hover:scale-110'
                )} />
                <span className="ml-3 font-medium">{item.label}</span>
                {activeSection === item.id && (
                  <div className="ml-auto w-2 h-2 rounded-full bg-white"></div>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Quick Actions */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-red-700/50">
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
  );
}