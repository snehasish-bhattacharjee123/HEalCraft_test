import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Check, X } from 'lucide-react';
import PropTypes from 'prop-types';

const MultiSelectDropdown = ({
  value = [],
  onChange,
  options,
  label,
  required
}) => {
  console.log(`[MultiSelectDropdown] Rendering ${label} with ${options.length} options, selected: ${value.length}`);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOption = (optionId) => {
    const newValue = value.includes(optionId)
      ? value.filter(id => id !== optionId)
      : [...value, optionId];
    onChange(newValue);
  };

  return (
    <div className="relative mb-6">
      <label className="flex text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={() => {
            console.log(`[MultiSelectDropdown] Dropdown ${isOpen ? 'closing' : 'opening'}`);
            setIsOpen(!isOpen);
          }}

          className="w-full flex justify-between items-center px-4 py-3 bg-white border-2 border-gray-300 rounded-lg shadow-sm text-left focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-gray-400"
        >
          <span className="truncate">
            {value.length > 0
              ? options.filter(opt => value.includes(opt.id)).map(opt => opt.label).join(', ')
              : 'Select options...'}
          </span>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {isOpen && (
          <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-300 max-h-60 overflow-auto">
            {options.map((option) => (
              <div
                key={option.id}
                className={`px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center ${value.includes(option.id) ? 'bg-red-50' : ''}`}
                onClick={() => toggleOption(option.id)}
              >
                <span className={`w-5 h-5 inline-flex items-center justify-center mr-2 border rounded ${value.includes(option.id) ? 'bg-red-600 border-red-600 text-white' : 'border-gray-300'}`}>
                  {value.includes(option.id) && <Check size={14} />}
                </span>
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
      {value.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {options
            .filter(opt => value.includes(opt.id))
            .map(opt => (
              <span
                key={opt.id}
                className="inline-flex items-center px-2 py-1 rounded-full bg-red-100 text-red-800 text-xs font-medium"
              >
                {opt.label}
                <button
                  type="button"
                  onClick={(e) => {
                    console.log(`[MultiSelectDropdown] Removing option tag: ${opt.id}`);
                    e.stopPropagation();
                    toggleOption(opt.id);
                  }}
                  className="ml-1 p-0.5 rounded-full hover:bg-red-200"
                >
                  <X size={12} />
                </button>
              </span>
            ))}
        </div>
      )}
    </div>
  );
};

MultiSelectDropdown.propTypes = {
  value: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool
};

const FormField = ({
  label,
  type,
  name,
  value,
  onChange,
  required = true,
  options,
  multiple = false,
}) => {
  console.log(`[FormField] Rendering field "${name}" of type "${type}" with value:`, value);
  const baseInputClasses = 'mt-1 block w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-gray-700 shadow-md transition-all focus:border-red-500 focus:ring focus:ring-red-300 focus:ring-opacity-50 hover:border-red-400';
  const labelClasses = 'flex text-sm font-medium text-gray-700 mb-1';

  const primeOptions = [
    { id: 'OT Comparison', label: 'OT Comparison' },
    { id: 'Book Application', label: 'Book Application' },
    { id: 'Call Booking', label: 'Call Booking' },
  ];

  const departmentOptions = [
    { id: 'Cardiology', label: 'Cardiology' },
    { id: 'Dental', label: 'Dental' },
    { id: 'Orthopedic', label: 'Orthopedic' },
  ];

  if (type === 'prime-dropdown') {
    return (
      <MultiSelectDropdown
        label="Prime Options"
        value={value}
        onChange={(newValue) => {
          console.log(`[FormField] Prime options changed to:`, newValue);
          onChange({ target: { name, value: newValue } })
        }}
        options={primeOptions}
        required={required}
      />
    );
  }

  if (type === 'department-dropdown') {
    return (
      <MultiSelectDropdown
        label="Department Options"
        value={value}
        onChange={(newValue) => {
          console.log(`[FormField] Department options changed to:`, newValue);
          onChange({ target: { name, value: newValue } })
        }}
        options={departmentOptions}
        required={required}
      />
    );
  }

  if (type === 'textarea') {
    return (
      <div className="mb-6">
        <label className={labelClasses}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`${baseInputClasses} min-h-[100px] resize-y`}
          rows={3}
        />
      </div>
    );
  }

  if (type === 'checkbox') {
    return (
      <div className="mb-6">
        <label className="flex items-center cursor-pointer mb-6">
          <input
            type="checkbox"
            name={name}
            checked={value}
            onChange={onChange}
            className="w-5 h-5 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 focus:ring-2 cursor-pointer"
          />
          <span className="ml-3 text-sm font-medium text-gray-700">
            {label}
          </span>
        </label>
      </div>
    );
  }

  if (type === 'select' && options) {
    return (
      <div className="mb-6">
        <label className={labelClasses}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <div className="relative">
          <select
            name={name}
            value={multiple ? (Array.isArray(value) ? value : []) : value || ''}
            onChange={onChange}
            required={required}
            multiple={multiple}
            className={`${baseInputClasses} appearance-none pr-10 ${multiple ? 'min-h-[120px]' : ''}`}
          >
            {!multiple && <option value="">Select {label}</option>}
            {options.map((option) => (
              <option key={option.value || option} value={option.value || option}>
                {option.label || option}
              </option>
            ))}
          </select>
          {!multiple && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="mb-6">
      <label className={labelClasses}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={baseInputClasses}
      />
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  options: PropTypes.array,
  multiple: PropTypes.bool
};

const formConfigs = {
  service: {
    name: '',
    description: '',
    primeOptions: [],
    isActive: true,
  },
  hospital: {
    name: '',
    email: '',
    contact: '',
    address: '',
    url: '',
    departmentOptions: [],
    description: ''
  },
  doctor: {
    doctorName: '',
    specialization: '',
    experience: '',
    about: '',
    departmentOptions: [],
    isConsultant: false,
  },
  department: {
    departmentName: '',
    details: '',
    isActive: true
  },
  user: {
    user_name: '',
    password: '',
    address: '',
    mobile_no: '',
    email: '',
    gender: '',
    dob: '',
    role: '',
    permission: '',
    user_type: ''
  },
  package: {
    item_name: '',
    price: '',
    room: '',
    item_food_facility: false,
    item_nurse_facility: false,
    item_pick_drop: false,
    item_post_operative_care: false,
    item_physiotherapy: false
  }
};

export function DynamicForm({ type, onSubmit, onCancel, initialData }) {
  console.log(`[DynamicForm] Initializing form of type "${type}" with initialData:`, initialData);
  const [formData, setFormData] = useState(() => {
    // Start with default form config
    const defaultConfig = { ...formConfigs[type] };

    // If we have initial data (for editing), merge it properly
    if (initialData) {
      console.log('Initializing form with data:', initialData);
      // Make sure boolean values are properly handled
      const processedData = { ...initialData };

      // Ensure checkbox values are properly converted to booleans
      Object.keys(processedData).forEach(key => {
        if (typeof defaultConfig[key] === 'boolean') {
          processedData[key] = Boolean(processedData[key]);
        }
      });

      return { ...defaultConfig, ...processedData };
    }

    return defaultConfig;
  });

  // Log the form data after initialization
  useEffect(() => {
    console.log('Form data after initialization:', formData);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log('Form field changed:', name, type === 'checkbox' ? checked : value);

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a copy of the form data to ensure we're not modifying the state directly
    const submissionData = { ...formData };

    // Process any special fields if needed
    // For example, ensure arrays are properly formatted
    Object.keys(submissionData).forEach(key => {
      // Make sure empty arrays are preserved
      if (Array.isArray(submissionData[key]) && submissionData[key].length === 0) {
        submissionData[key] = [];
      }
    });

    console.log('Submitting processed form data:', submissionData);
    onSubmit(submissionData);
  };

  const renderServiceForm = () => (
    <>
      <FormField
        label="Service Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <FormField
        label="Description"
        type="textarea"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <FormField
        type="prime-dropdown"
        name="primeOptions"
        value={formData.primeOptions}
        onChange={handleChange}
      />
      <FormField
        label="Active"
        type="checkbox"
        name="isActive"
        value={formData.isActive}
        onChange={handleChange}
      />
    </>
  );

  const renderHospitalForm = () => (
    <>
      <FormField
        label="Hospital Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <FormField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <FormField
        label="Contact"
        type="tel"
        name="contact"
        value={formData.contact}
        onChange={handleChange}
      />
      <FormField
        label="Address"
        type="textarea"
        name="address"
        value={formData.address}
        onChange={handleChange}
      />
      <FormField
        label="Hospital URL"
        type="text"
        name="url"
        value={formData.url}
        onChange={handleChange}
      />
      <FormField
        type="department-dropdown"
        name="departmentOptions"
        value={formData.departmentOptions}
        onChange={handleChange}
      />
      <FormField
        label="Description"
        type="textarea"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
    </>
  );

  const renderDoctorForm = () => (
    <>
      <FormField
        label="Doctor Name"
        type="text"
        name="doctorName"
        value={formData.doctorName}
        onChange={handleChange}
      />
      <FormField
        label="Specialization"
        type="text"
        name="specialization"
        value={formData.specialization}
        onChange={handleChange}
      />
      <FormField
        label="Experience (Years)"
        type="number"
        name="experience"
        value={formData.experience}
        onChange={handleChange}
      />
      <FormField
        type="department-dropdown"
        name="departmentOptions"
        value={formData.departmentOptions}
        onChange={handleChange}
      />
      <FormField
        label="About"
        type="textarea"
        name="about"
        value={formData.about}
        onChange={handleChange}
      />
      <FormField
        label="Consultant"
        type="checkbox"
        name="isConsultant"
        value={formData.isConsultant}
        onChange={handleChange}
      />
    </>
  );

  const renderDepartmentForm = () => (
    <>
      <FormField
        label="Department Name"
        type="text"
        name="departmentName"
        value={formData.departmentName}
        onChange={handleChange}
      />
      <FormField
        label="Details"
        type="textarea"
        name="details"
        value={formData.details}
        onChange={handleChange}
      />
      <FormField
        label="Active"
        type="checkbox"
        name="isActive"
        value={formData.isActive}
        onChange={handleChange}
      />
    </>
  );

  const renderUserForm = () => (
    <>
      <FormField
        label="User Name"
        type="text"
        name="user_name"
        value={formData.user_name}
        onChange={handleChange}
      />
      <FormField
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <FormField
        label="Address"
        type="textarea"
        name="address"
        value={formData.address}
        onChange={handleChange}
      />
      <FormField
        label="Mobile No"
        type="tel"
        name="mobile_no"
        value={formData.mobile_no}
        onChange={handleChange}
      />
      <FormField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <FormField
        label="Gender"
        type="text"
        name="gender"
        value={formData.gender}
        onChange={handleChange}
      />
      <FormField
        label="Date of Birth"
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
      />
      <FormField
        label="Role"
        type="text"
        name="role"
        value={formData.role}
        onChange={handleChange}
      />
      <FormField
        label="User Type"
        type="text"
        name="user_type"
        value={formData.user_type}
        onChange={handleChange}
      />
    </>
  );

  const renderPackageForm = () => (
    <>
      <FormField
        label="Item Name"
        type="text"
        name="item_name"
        value={formData.item_name}
        onChange={handleChange}
      />
      <FormField
        label="Price"
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
      />
      <FormField
        label="Room"
        type="text"
        name="room"
        value={formData.room}
        onChange={handleChange}
      />
      <FormField
        label="Food Facility"
        type="checkbox"
        name="item_food_facility"
        value={formData.item_food_facility}
        onChange={handleChange}
      />
      <FormField
        label="Nurse Facility"
        type="checkbox"
        name="item_nurse_facility"
        value={formData.item_nurse_facility}
        onChange={handleChange}
      />
      <FormField
        label="Pick Drop"
        type="checkbox"
        name="item_pick_drop"
        value={formData.item_pick_drop}
        onChange={handleChange}
      />
      <FormField
        label="Post Operative Care"
        type="checkbox"
        name="item_post_operative_care"
        value={formData.item_post_operative_care}
        onChange={handleChange}
      />
      <FormField
        label="Physiotherapy"
        type="checkbox"
        name="item_physiotherapy"
        value={formData.item_physiotherapy}
        onChange={handleChange}
      />
    </>
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col h-full bg-white rounded-lg shadow-md"
    >
      <div className="flex-1 overflow-y-auto p-6 pb-15">
        {type === 'service' && renderServiceForm()}
        {type === 'hospital' && renderHospitalForm()}
        {type === 'doctor' && renderDoctorForm()}
        {type === 'department' && renderDepartmentForm()}
        {type === 'user' && renderUserForm()}
        {type === 'package' && renderPackageForm()}
      </div>

      <div className="bg-white border-t p-4 flex justify-end space-x-3 fixed inset-x-0 bottom-0">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
        >
          {initialData ? 'Update' : 'Save'}
        </button>
      </div>
    </form>
  );
}

DynamicForm.propTypes = {
  type: PropTypes.oneOf(['service', 'hospital', 'doctor', 'department', 'user', 'package']).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  initialData: PropTypes.object
};