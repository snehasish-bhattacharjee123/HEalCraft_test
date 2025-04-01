import React from "react";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

export function Table({ columns, data }) {
  console.log('[Table] Rendering with', data.length, 'rows and', columns.length, 'columns');
  
  // Separate action column from the rest of the columns
  const actionColumn = columns.find(col => col.key === 'actions');
  const contentColumns = columns.filter(col => col.key !== 'actions');
  
  console.log('[Table] Content columns:', contentColumns.map(col => col.key));
  console.log('[Table] Action column:', actionColumn ? 'present' : 'not present');

  return (
    <div className="relative rounded-lg shadow-sm border border-gray-100">
      <div className="overflow-x-auto" style={{ maxWidth: 'calc(100% - 100px)' }}>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
            <tr>
              {/* ID Column Header */}
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 tracking-wide rounded-tl-lg w-16">
                ID
              </th>
              {contentColumns.map((column, colIndex) => (
                <th
                  key={column.key}
                  className={`px-6 py-4 text-left text-sm font-semibold text-gray-700 tracking-wide 
                    ${colIndex === 0 ? "" : ""}`}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, index) => {
              console.log(`[Table] Rendering row ${index} with ID:`, row.id || index + 1);
              return (
                <motion.tr 
                  key={row.id || index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.03 }}
                  whileHover={{ backgroundColor: "rgba(249, 250, 251, 1)" }}
                  className="transition-colors duration-150"
                >
                  {/* ID Column Cell - Display actual ID from data */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-16">
                    #{row.id || index + 1}
                  </td>
                  {contentColumns.map((column) => (
                    <td 
                      key={column.key} 
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"
                    >
                      <div className="flex items-center">
                        {column.render
                          ? column.render(row[column.key], row)
                          : row[column.key]}
                      </div>
                    </td>
                  ))}
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      {/* Fixed action column */}
      {actionColumn && (
        <div className="absolute top-0 right-0 h-full border-l border-gray-200">
          <div className="h-full bg-white">
            <table className="h-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                <tr>
                  <th className="w-24 px-6 py-4 text-left text-sm font-semibold text-gray-700 tracking-wide rounded-tr-lg">
                    {actionColumn.label}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((row, index) => (
                  <motion.tr 
                    key={row.id || index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.03 }}
                    style={{ height: '65px' }}
                  >
                    <td className="w-24 px-6 py-4 whitespace-nowrap text-sm text-gray-700 bg-white">
                      {actionColumn.render && actionColumn.render(undefined, row)}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      
      {data.length === 0 && (
        <div className="bg-white py-12 text-center">
          <p className="text-gray-500">No data available</p>
        </div>
      )}
    </div>
  );
}

export const StatusCell = ({ value }) => {
  console.log('[StatusCell] Rendering with value:', value);
  return (
    <motion.span
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium 
        ${value 
          ? "bg-green-50 text-green-700 border border-green-100" 
          : "bg-red-50 text-red-700 border border-red-100"
        }`}
    >
      {value ? (
        <>
          <Check size={16} className="mr-1.5 text-green-500" />
          Active
        </>
      ) : (
        <>
          <X size={16} className="mr-1.5 text-red-500" />
          Inactive
        </>
      )}
    </motion.span>
  );
};