import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Sidebar } from '../components/Sidebar';
import { Table, StatusCell } from '../components/Table';
import { Modal } from '../components/Modal';
import { DynamicForm } from '../forms/Form';
import { Plus, Search, Edit2, Trash2, Menu } from 'lucide-react';
import '../styles/scrollbar.css';

function Dashboard() {
  console.log('[Dashboard] Component initializing');
  const [activeSection, setActiveSection] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingItem, setEditingItem] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Sample data
  const [services, setServices] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [users, setUsers] = useState([]);
  const [packages, setPackages] = useState([]);

  // Toggle sidebar function
  const toggleSidebar = () => {
    console.log('[Dashboard] Toggling sidebar, current state:', isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Sample data initialization with IDs
  useEffect(() => {
    console.log("[Dashboard] useEffect - Initializing sample data");
    // Initialize with some sample data if empty
    if (services.length === 0) {
      setServices([]);
      console.log("[Dashboard] Services initialized");
    }
    
    if (hospitals.length === 0) {
      setHospitals([]);
      console.log("[Dashboard] Hospitals initialized");
    }
    
    if (departments.length === 0) {
      setDepartments([]);
      console.log("[Dashboard] Departments initialized");
    }
    
    if (doctors.length === 0) {
      setDoctors([]);
      console.log("[Dashboard] Doctors initialized");
    }
    
    if (users.length === 0) {
      setUsers([]);
      console.log("[Dashboard] Users initialized");
    }
    
    if (packages.length === 0) {
      setPackages([]);
      console.log("[Dashboard] Packages initialized");
    }
    
    console.log("[Dashboard] Initial active section:", activeSection);
    // No need to set default active section since it's already initialized
  }, []); // Empty dependency array to only run once on mount

  const handleEdit = (id) => {
    console.log('[Dashboard] Edit clicked for ID:', id);
    console.log('[Dashboard] Active section:', activeSection);
    
    // Debug log to see all items in the current section
    let allItems;
    switch (activeSection) {
      case 'services':
        allItems = services;
        break;
      case 'hospitals':
        allItems = hospitals;
        break;
      case 'doctors':
        allItems = doctors;
        break;
      case 'departments':
        allItems = departments;
        break;
      case 'users':
        allItems = users;
        break;
      case 'packages':
        allItems = packages;
        break;
      default:
        allItems = [];
    }
    
    // Log all IDs in the current section to help debug
    const allIds = allItems.map(item => item.id);
    console.log(`[Dashboard] All ${activeSection} IDs:`, allIds);
    console.log(`[Dashboard] Looking for ID "${id}" in items with IDs:`, allIds);
    
    let itemToEdit;
    switch (activeSection) {
      case 'services':
        itemToEdit = services.find(item => String(item.id) === String(id));
        break;
      case 'hospitals':
        itemToEdit = hospitals.find(item => item.id === String(id));
        break;
      case 'doctors':
        itemToEdit = doctors.find(item => item.id === id);
        break;
      case 'departments':
        itemToEdit = departments.find(item => item.id === id);
        break;
      case 'users':
        itemToEdit = users.find(item => item.id === id);
        break;
      case 'packages':
        itemToEdit = packages.find(item => item.id === id);
        break;
      default:
        return;
    }
    
    // Log result of the search
    if (!itemToEdit) {
      console.error(`[Dashboard] ⚠️ Could not find item with ID "${id}" in ${activeSection}`);
    } else {
      console.log('[Dashboard] ✅ Found item to edit:', itemToEdit);
    }
    
    if (itemToEdit) {
      // Create a deep copy to avoid reference issues
      const itemCopy = JSON.parse(JSON.stringify(itemToEdit));
      setEditingItem(itemCopy);
      setEditMode(true);
      setIsModalOpen(true);
      console.log('[Dashboard] Setting up edit mode for item:', itemCopy);
    }
  };

  const handleDelete = (id) => {
    console.log('[Dashboard] Delete requested for ID:', id, 'in section:', activeSection);
    if (window.confirm('Are you sure you want to delete this item?')) {
      console.log('[Dashboard] Delete confirmed for ID:', id);
      switch (activeSection) {
        case 'services':
          setServices(prev => {
            const newServices = prev.filter(item => item.id !== id);
            console.log('[Dashboard] Updated services after delete:', newServices);
            return newServices;
          });
          break;
        case 'hospitals':
          setHospitals(prev => {
            const newHospitals = prev.filter(item => item.id !== id);
            console.log('[Dashboard] Updated hospitals after delete:', newHospitals);
            return newHospitals;
          });
          break;
        case 'doctors':
          setDoctors(prev => {
            const newDoctors = prev.filter(item => item.id !== id);
            console.log('[Dashboard] Updated doctors after delete:', newDoctors);
            return newDoctors;
          });
          break;
        case 'departments':
          setDepartments(prev => {
            const newDepartments = prev.filter(item => item.id !== id);
            console.log('[Dashboard] Updated departments after delete:', newDepartments);
            return newDepartments;
          });
          break;
        case 'users':
          setUsers(prev => {
            const newUsers = prev.filter(item => item.id !== id);
            console.log('[Dashboard] Updated users after delete:', newUsers);
            return newUsers;
          });
          break;
        case 'packages':
          setPackages(prev => {
            const newPackages = prev.filter(item => item.id !== id);
            console.log('[Dashboard] Updated packages after delete:', newPackages);
            return newPackages;
          });
          break;
        default:
          return;
      }
    } else {
      console.log('[Dashboard] Delete cancelled for ID:', id);
    }
  };

  const columnConfig = useMemo(() => ({
    services: [
      { key: 'name', label: 'Name' },
      { key: 'description', label: 'Description' },
      {
        key: 'primeOptions',
        label: 'Prime Options',
        render: (value) => (
          <div className="flex flex-wrap gap-1">
            {value?.map((option, i) => (
              <span
                key={i}
                className="inline-flex items-center px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium"
              >
                {option}
              </span>
            ))}
          </div>
        ),
      },
      {
        key: 'isActive',
        label: 'Status',
        render: (value) => <StatusCell value={value} />,
      },
      {
        key: 'actions',
        label: 'Actions',
        render: (_, row) => (
          <div className="flex space-x-2">
            <button
              onClick={() => handleEdit(row.id)}
              className="p-1 text-blue-600 hover:bg-blue-50 rounded"
              aria-label={`Edit ${row.name}`}
            >
              <Edit2 size={16} />
            </button>
            <button
              onClick={() => handleDelete(row.id)}
              className="p-1 text-red-600 hover:bg-red-50 rounded"
              aria-label={`Delete ${row.name}`}
            >
              <Trash2 size={16} />
            </button>
          </div>
        ),
      },
    ],
    hospitals: [
      { key: 'name', label: 'Name' },
      { key: 'email', label: 'Email' },
      { key: 'contact', label: 'Contact' },
      { key: 'address', label: 'Address' },
      { key: 'url', label: 'URL' },
      {
        key: 'departmentOptions',
        label: 'Departments',
        render: (value) => (
          <div className="flex flex-wrap gap-1">
            {value?.map((option, i) => (
              <span
                key={i}
                className="inline-flex items-center px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium"
              >
                {option}
              </span>
            ))}
          </div>
        ),
      },
      { key: 'description', label: 'Description' },
      {
        key: 'isActive',
        label: 'Status',
        render: (value) => <StatusCell value={value} />,
      },
      {
        key: 'actions',
        label: 'Actions',
        render: (_, row) => (
          <div className="flex space-x-2">
            <button
              onClick={() => handleEdit(row.id)}
              className="p-1 text-blue-600 hover:bg-blue-50 rounded"
              aria-label={`Edit ${row.name}`}
            >
              <Edit2 size={16} />
            </button>
            <button
              onClick={() => handleDelete(row.id)}
              className="p-1 text-red-600 hover:bg-red-50 rounded"
              aria-label={`Delete ${row.name}`}
            >
              <Trash2 size={16} />
            </button>
          </div>
        ),
      },
    ],
    doctors: [
      { key: 'doctorName', label: 'Doctor Name' },
      { key: 'specialization', label: 'Specialization' },
      { key: 'experience', label: 'Experience (Years)' },
      {
        key: 'departmentOptions',
        label: 'Departments',
        render: (value) => (
          <div className="flex flex-wrap gap-1">
            {value?.map((option, i) => (
              <span
                key={i}
                className="inline-flex items-center px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium"
              >
                {option}
              </span>
            ))}
          </div>
        ),
      },
      { key: 'about', label: 'About' },
      {
        key: 'isConsultant',
        label: 'Consultant',
        render: (value) => <StatusCell value={value} />,
      },
      {
        key: 'actions',
        label: 'Actions',
        render: (_, row) => (
          <div className="flex space-x-2">
            <button
              onClick={() => handleEdit(row.id)}
              className="p-1 text-blue-600 hover:bg-blue-50 rounded"
              aria-label={`Edit ${row.doctorName}`}
            >
              <Edit2 size={16} />
            </button>
            <button
              onClick={() => handleDelete(row.id)}
              className="p-1 text-red-600 hover:bg-red-50 rounded"
              aria-label={`Delete ${row.doctorName}`}
            >
              <Trash2 size={16} />
            </button>
          </div>
        ),
      },
    ],
    departments: [
      {
        key: 'departmentName',
        label: 'Department Name',
      },
      { key: 'details', label: 'Details' },
      {
        key: 'isActive',
        label: 'Status',
        render: (value) => <StatusCell value={value} />,
      },
      {
        key: 'actions',
        label: 'Actions',
        render: (_, row) => (
          <div className="flex space-x-2">
            <button
              onClick={() => handleEdit(row.id)}
              className="p-1 text-blue-600 hover:bg-blue-50 rounded"
              aria-label={`Edit ${row.departmentName}`}
            >
              <Edit2 size={16} />
            </button>
            <button
              onClick={() => handleDelete(row.id)}
              className="p-1 text-red-600 hover:bg-red-50 rounded"
              aria-label={`Delete ${row.departmentName}`}
            >
              <Trash2 size={16} />
            </button>
          </div>
        ),
      },
    ],
    users: [
      { key: 'user_name', label: 'Username' },
      { key: 'email', label: 'Email' },
      { key: 'mobile_no', label: 'Mobile No' },
      { key: 'address', label: 'Address' },
      { key: 'gender', label: 'Gender' },
      { key: 'dob', label: 'Date of Birth' },
      { key: 'role', label: 'Role' },
      { key: 'permission', label: 'Permission' },
      { key: 'user_type', label: 'User Type' },
      {
        key: 'actions',
        label: 'Actions',
        render: (_, row) => (
          <div className="flex space-x-2">
            <button
              onClick={() => handleEdit(row.id)}
              className="p-1 text-blue-600 hover:bg-blue-50 rounded"
              aria-label={`Edit ${row.user_name}`}
            >
              <Edit2 size={16} />
            </button>
            <button
              onClick={() => handleDelete(row.id)}
              className="p-1 text-red-600 hover:bg-red-50 rounded"
              aria-label={`Delete ${row.user_name}`}
            >
              <Trash2 size={16} />
            </button>
          </div>
        ),
      },
    ],
    packages: [
      { key: 'item_name', label: 'Item Name' },
      { key: 'price', label: 'Price' },
      { key: 'room', label: 'Room' },
      { 
        key: 'item_food_facility', 
        label: 'Food Facility',
        render: (value) => <StatusCell value={value} />,
      },
      { 
        key: 'item_nurse_facility', 
        label: 'Nurse Facility',
        render: (value) => <StatusCell value={value} />,
      },
      { 
        key: 'item_pick_drop', 
        label: 'Pick & Drop',
        render: (value) => <StatusCell value={value} />,
      },
      { 
        key: 'item_post_operative_care', 
        label: 'Post Operative Care',
        render: (value) => <StatusCell value={value} />,
      },
      { 
        key: 'item_physiotherapy', 
        label: 'Physiotherapy',
        render: (value) => <StatusCell value={value} />,
      },
      {
        key: 'actions',
        label: 'Actions',
        render: (_, row) => (
          <div className="flex space-x-2">
            <button
              onClick={() => handleEdit(row.id)}
              className="p-1 text-blue-600 hover:bg-blue-50 rounded"
              aria-label={`Edit ${row.item_name}`}
            >
              <Edit2 size={16} />
            </button>
            <button
              onClick={() => handleDelete(row.id)}
              className="p-1 text-red-600 hover:bg-red-50 rounded"
              aria-label={`Delete ${row.item_name}`}
            >
              <Trash2 size={16} />
            </button>
          </div>
        ),
      },
    ],
  }), [activeSection]);

  const handleSubmit = (data) => {
    console.log('Form submitted with data:', data);
    console.log('Editing item:', editingItem);
    console.log('Edit mode:', editMode);
    
    if (editMode && editingItem) {
      console.log('Updating existing item with ID:', editingItem.id);
      
      // Create a properly merged object that preserves the ID
      const updatedItem = {
        ...data,
        id: editingItem.id
      };
      
      console.log('Final updated item:', updatedItem);
      
      switch (activeSection) {
        case 'services':
          setServices(prev => {
            const updated = prev.map(item => 
              item.id === editingItem.id ? updatedItem : item
            );
            console.log('Updated services:', updated);
            return updated;
          });
          break;
        case 'hospitals':
          setHospitals(prev => {
            const updated = prev.map(item => 
              item.id === editingItem.id ? updatedItem : item
            );
            console.log('Updated hospitals:', updated);
            return updated;
          });
          break;
        case 'doctors':
          setDoctors(prev => {
            const updated = prev.map(item => 
              item.id === editingItem.id ? updatedItem : item
            );
            console.log('Updated doctors:', updated);
            return updated;
          });
          break;
        case 'departments':
          setDepartments(prev => {
            const updated = prev.map(item => 
              item.id === editingItem.id ? updatedItem : item
            );
            console.log('Updated departments:', updated);
            return updated;
          });
          break;
        case 'users':
          setUsers(prev => {
            const updated = prev.map(item => 
              item.id === editingItem.id ? updatedItem : item
            );
            console.log('Updated users:', updated);
            return updated;
          });
          break;
        case 'packages':
          setPackages(prev => {
            const updated = prev.map(item => 
              item.id === editingItem.id ? updatedItem : item
            );
            console.log('Updated packages:', updated);
            return updated;
          });
          break;
        default:
          return;
      }
    } else {
      // Generate a structured ID based on section and timestamp
      // Remove plural 's' from section name
      const sectionSingular = activeSection.endsWith('s') ? 
        activeSection.substring(0, activeSection.length - 1) : 
        activeSection;
      
      const timestamp = new Date().getTime().toString().slice(-6); // Last 6 digits of timestamp
      const randomNum = Math.floor(Math.random() * 1000).toString().padStart(3, '0'); // 3-digit random number
      const newId = `${sectionSingular}_${timestamp}${randomNum}`;
      
      const newItem = { ...data, id: newId };
      console.log('Adding new item with structured ID:', newItem);
      
      switch (activeSection) {
        case 'services':
          setServices(prev => {
            const newArray = [...prev, newItem];
            console.log('Updated services with new item:', newArray);
            return newArray;
          });
          break;
        case 'hospitals':
          setHospitals(prev => {
            const newArray = [...prev, newItem];
            console.log('Updated hospitals with new item:', newArray);
            return newArray;
          });
          break;
        case 'doctors':
          setDoctors(prev => {
            const newArray = [...prev, newItem];
            console.log('Updated doctors with new item:', newArray);
            return newArray;
          });
          break;
        case 'departments':
          setDepartments(prev => {
            const newArray = [...prev, newItem];
            console.log('Updated departments with new item:', newArray);
            return newArray;
          });
          break;
        case 'users':
          setUsers(prev => {
            const newArray = [...prev, newItem];
            console.log('Updated users with new item:', newArray);
            return newArray;
          });
          break;
        case 'packages':
          setPackages(prev => {
            const newArray = [...prev, newItem];
            console.log('Updated packages with new item:', newArray);
            return newArray;
          });
          break;
        default:
          return;
      }
    }

    setEditingItem(null);
    setEditMode(false);
    setIsModalOpen(false);
  };

  const handleAddNew = () => {
    console.log('[Dashboard] Add new item clicked for section:', activeSection);
    setEditingItem(null);
    setEditMode(false);
    setIsModalOpen(true);
  };

  const getFilteredData = () => {
    let data = [];
    switch (activeSection) {
      case 'services':
        data = services;
        break;
      case 'hospitals':
        data = hospitals;
        break;
      case 'doctors':
        data = doctors;
        break;
      case 'departments':
        data = departments;
        break;
      case 'users':
        data = users;
        break;
      case 'packages':
        data = packages;
        break;
    }

    if (!searchTerm) return data;

    return data.filter(item => {
      return Object.values(item).some(value => {
        if (typeof value === 'string') {
          return value.toLowerCase().includes(searchTerm.toLowerCase());
        }
        if (Array.isArray(value)) {
          return value.some(v => 
            String(v).toLowerCase().includes(searchTerm.toLowerCase())
          );
        }
        return false;
      });
    });
  };

  return (
    <div className="flex w-full h-screen overflow-hidden">
      <Sidebar
        activeSection={activeSection || ''}
        onSectionChange={setActiveSection}
        isOpen={isSidebarOpen}
        onToggle={toggleSidebar}
      />
      
      {/* Hamburger menu button - positioned relative to sidebar state */}
      <button
        onClick={toggleSidebar}
        className={`fixed top-4 ${isSidebarOpen ? 'left-64' : 'left-4'} z-30 p-2 bg-red-600 text-white rounded-md shadow-lg hover:bg-red-700 transition-colors transition-all duration-300`}
        aria-label="Toggle sidebar"
      >
        <Menu size={24} />
      </button>

      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-72' : 'ml-16'} flex flex-col overflow-hidden`}>
        {!activeSection ? (
          // Welcome content when no section is selected
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Welcome to Otify Admin Panel
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Please select a section from the sidebar to get started
              </p>
            </div>
          </div>
        ) : (
          // Regular content when a section is selected
          <>
            <div className="bg-white shadow-md z-10">
              <div className="px-8 py-4 flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900 capitalize">
                  {activeSection}
                </h1>
                <button
                  onClick={handleAddNew}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  <Plus size={20} />
                  <span>Add New</span>
                </button>
              </div>
              <div className="px-8 py-3 border-t border-gray-100">
                <div className="relative">
                  <Search
                    size={18}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    placeholder={`Search ${activeSection}...`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-8 bg-gray-50">
              <Table
                columns={columnConfig[activeSection] || []}
                data={getFilteredData()}
              />
            </div>
          </>
        )}
      </main>

      {isModalOpen && (
        <Modal 
          isOpen={true}
          onClose={() => {
            setIsModalOpen(false);
            setEditingItem(null);
            setEditMode(false);
          }}
          title={`${editMode ? 'Edit' : 'Add New'} ${activeSection.slice(0, -1)}`}
        >
          <DynamicForm
            type={activeSection === 'services' ? 'service' : 
                 activeSection === 'hospitals' ? 'hospital' : 
                 activeSection === 'doctors' ? 'doctor' : 
                 activeSection === 'departments' ? 'department' : 
                 activeSection === 'users' ? 'user' : 
                 activeSection === 'packages' ? 'package' : ''}
            onSubmit={handleSubmit}
            onCancel={() => {
              setIsModalOpen(false);
              setEditingItem(null);
              setEditMode(false);
            }}
            initialData={editingItem}
          />
        </Modal>
      )}
    </div>
  );
}

Dashboard.propTypes = {
  // Add any props validation if needed
};

export default Dashboard;