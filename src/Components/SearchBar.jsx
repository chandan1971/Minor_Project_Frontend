import { TextInput } from 'flowbite-react';
import React, { useState } from 'react'
import {AiOutlineSearch} from "react-icons/ai"

function Searchbar() {
    const options = [
        "Pre-Matric Scholarship for ST (VI to VIII)",
        'Option 2',
        'Option 3',
        // Add more options as needed
      ];
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [isFocused, setIsFocused] = useState(false);
    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
      
        const filtered = options.filter(option =>
          option.toLowerCase().includes(query.toLowerCase())
        );
      
        setFilteredOptions(filtered);
      };
      const handleFocus = () => {
        setIsFocused(true);
      };
    
      const handleBlur = () => {
        setIsFocused(false);
      };
    
      
      return (
        <div className='lg:flex lg:justify-end'>
        <div className=''>
          <TextInput
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Search options..."
            rightIcon={AiOutlineSearch}
            className='w-full'
          />
          {isFocused && (
            <ul className='max-h-11 overflow-y-auto overflow-x-auto'>
              {filteredOptions.map((option, index) => (
                <li key={index} className='hover:cursor-pointer'  ><div onClick={(e)=>console.log("ji")}>{option}</div></li>
              ))}
            </ul>
          )}
        </div>
        </div>
      );
      
}

export default Searchbar