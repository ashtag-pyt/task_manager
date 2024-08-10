// components/Table.js
"use client"
import { useState, useEffect } from 'react';

const Table = () => {
  // Sample data
  const initialData = [
    { Name: 'John Doe', Topic: 'React', UsedTime: '10 hours', CreatedBy: 'Alice' },
    { Name: 'Jane Smith', Topic: 'Vue', UsedTime: '8 hours', CreatedBy: 'Bob' },
    { Name: 'Sam Johnson', Topic: 'Angular', UsedTime: '12 hours', CreatedBy: 'Charlie' },
    { Name: 'Chris Lee', Topic: 'Next.js', UsedTime: '15 hours', CreatedBy: 'Dave' },
    { Name: 'Chris Lee', Topic: 'Next.js', UsedTime: '15 hours', CreatedBy: 'Dave' },
    { Name: 'Chris Lee', Topic: 'Next.js', UsedTime: '15 hours', CreatedBy: 'Dave' }
  ];

  // State to hold data
  const [data, setData] = useState(initialData);

  // Uncomment the following lines to fetch actual data from a backend
  /*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  */

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full overflow-hidden rounded-lg">
        <thead className="bg-neutral-800">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-neutral-200 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-neutral-200 uppercase tracking-wider"
            >
              Topic
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-neutral-200 uppercase tracking-wider"
            >
              Used Time
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-neutral-200 uppercase tracking-wider"
            >
              Created By
            </th>
          </tr>
        </thead>
        <tbody className="bg-neutral-800/20 ">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-200">
                {row.Name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {row.Topic}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {row.UsedTime}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {row.CreatedBy}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
