import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Sidebar } from '../components/Sidebar';
import { Table, StatusCell } from '../components/Table';
import { Modal } from '../components/Modal';
import { DynamicForm } from '../forms/Form';
import { Plus, Search, Edit2, Trash2 } from 'lucide-react';

function Dashboard() {
  const [activeSection, setActiveSection] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingItem, setEditingItem] = useState(null);

  // Sample data
  const [services, setServices] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [users, setUsers] = useState([]);
  const [packages, setPackages] = useState([]);

  // Sample data initialization with IDs
  useEffect(() => {
    // Initialize with some sample data if empty
    if (services.length === 0) {
      setServices([]);
    }
    
    if (hospitals.length === 0) {
      setHospitals([]);
    }
    
    if (departments.length === 0) {
      setDepartments([]);
    }
    
    if (doctors.length === 0) {
      setDoctors([]);
    }
    
    if (users.length === 0) {
      setUsers([]);
    }
    
    if (packages.length === 0) {
      setPackages([]);
    }
    
    // Set default active section if none is selected
    if (!activeSection) {
      setActiveSection('services');
    }
  }, []);

  const handleEdit = (id) => {
    console.log('Edit clicked for ID:', id);
    console.log('Active section:', activeSection);
    
    let itemToEdit;
    switch (activeSection) {
      case 'services':
        itemToEdit = services.find(item => item.id === id);
        break;
      case 'hospitals':
        itemToEdit = hospitals.find(item => item.id === id);
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
    
    console.log('Item to edit:', itemToEdit);
    
    if (itemToEdit) {
      setEditingItem(itemToEdit);
      setIsModalOpen(true);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      switch (activeSection) {
        case 'services':
          setServices(prev => prev.filter(item => item.id !== id));
          break;
        case 'hospitals':
          setHospitals(prev => prev.filter(item => item.id !== id));
          break;
        case 'doctors':
          setDoctors(prev => prev.filter(item => item.id !== id));
          break;
        case 'departments':
          setDepartments(prev => prev.filter(item => item.id !== id));
          break;
        case 'users':
          setUsers(prev => prev.filter(item => item.id !== id));
          break;
        case 'packages':
          setPackages(prev => prev.filter(item => item.id !== id));
          break;
        default:
          return;
      }
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
    
    if (editingItem) {
      console.log('Updating existing item with ID:', editingItem.id);
      
      // Create a properly merged object that preserves the ID
      const updatedItem = {
        ...data,
        id: editingItem.id
      };
      
      console.log('Final updated item:', updatedItem);
      
      switch (activeSection) {
        case 'services':
          setServices(prev => prev.map(item =>
            item.id === editingItem.id ? updatedItem : item
          ));
          break;
        case 'hospitals':
          setHospitals(prev => prev.map(item =>
            item.id === editingItem.id ? updatedItem : item
          ));
          break;
        case 'doctors':
          setDoctors(prev => prev.map(item =>
            item.id === editingItem.id ? updatedItem : item
          ));
          break;
        case 'departments':
          setDepartments(prev => prev.map(item =>
            item.id === editingItem.id ? updatedItem : item
          ));
          break;
        case 'users':
          setUsers(prev => prev.map(item =>
            item.id === editingItem.id ? updatedItem : item
          ));
          break;
        case 'packages':
          setPackages(prev => prev.map(item =>
            item.id === editingItem.id ? updatedItem : item
          ));
          break;
        default:
          return;
      }
    } else {
      const newId = Math.random().toString(36).substr(2, 9);
      const newItem = { ...data, id: newId };
      console.log('Adding new item:', newItem);
      
      switch (activeSection) {
        case 'services':
          setServices(prev => [...prev, newItem]);
          break;
        case 'hospitals':
          setHospitals(prev => [...prev, newItem]);
          break;
        case 'doctors':
          setDoctors(prev => [...prev, newItem]);
          break;
        case 'departments':
          setDepartments(prev => [...prev, newItem]);
          break;
        case 'users':
          setUsers(prev => [...prev, newItem]);
          break;
        case 'packages':
          setPackages(prev => [...prev, newItem]);
          break;
        default:
          return;
      }
    }

    setEditingItem(null);
    setIsModalOpen(false);
  };

  const handleAddNew = () => {
    setEditingItem(null);
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

  if (!activeSection) {
    return (
      <div className="flex w-full h-screen overflow-hidden">
        <Sidebar
          activeSection={activeSection || ''}
          onSectionChange={setActiveSection}
        />
        <main className="flex-1 pl-72 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to Otify Admin Panel
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Please select a section from the sidebar to get started
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex w-full h-screen overflow-hidden">
      <Sidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      <main className="flex-1 pl-72 flex flex-col overflow-hidden">
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

        <div className="flex-1 p-8 overflow-auto">
          <Table
            columns={columnConfig[activeSection]}
            data={getFilteredData()}
          />
        </div>
      </main>

      {isModalOpen && (
        <Modal 
          isOpen={true}
          onClose={() => {
            setIsModalOpen(false);
            setEditingItem(null);
          }}
          title={`${editingItem ? 'Edit' : 'Add New'} ${activeSection.slice(0, -1)}`}
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