import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

// const SearchBar = ({ onSearch }) => {
//   const [query, setQuery] = useState('');

//   // Handle input changes
//   const handleChange = (event) => {
//     setQuery(event.target.value);
//   };

//   // Handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent default form submission behavior
//     onSearch(query); // Call the onSearch function passed as a prop
//   };
const SearchBar = () =>{
  return (
  
    <form  className="flex mt-4"> 
       <div className="relative rounded-2xl p-1 bg-gray-700  hover:bg-gray-600  w-full sm:w-auto">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <SearchIcon className="w-5 h-5 text-gray-400" />
      </div>
      <input
        type="text"
        className="block w-full bg-gray-700 text-white placeholder-gray-400 rounded-2xl pl-10 py-2 focus:outline-none focus:bg-gray-600 focus:placeholder-gray-500"
        placeholder="Search..."
        aria-label="search"
      />
    </div>
    </form>
   
  );
};

export default SearchBar;

