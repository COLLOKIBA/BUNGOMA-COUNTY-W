import { useState, useEffect } from 'react';

interface DataItem {
  id: string;
  department: string;
  year: string;
  // Add other fields as needed
}

const DataFilter: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [department, setDepartment] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [search, setSearch] = useState<string>('');

  const fetchData = async () => {
    const response = await fetch(`/api/fetchData?department=${department}&year=${year}`);
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, [department, year]);

  const filteredData = data.filter(item => 
    item.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by department"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select onChange={(e) => setDepartment(e.target.value)} value={department}>
        <option value="">Select Department</option>
        <option value="department1">Department 1</option>
        <option value="department2">Department 2</option>
        {/* Add more options as needed */}
      </select>
      <input
        type="text"
        placeholder="Enter Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <div>
        {filteredData.map(item => (
          <div key={item.id}>
            {/* Render item details here */}
            <p>{item.department} - {item.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataFilter;
