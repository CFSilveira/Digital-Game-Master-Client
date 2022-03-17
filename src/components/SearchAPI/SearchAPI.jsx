import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SearchAPI() {
    const [searchArray1, setSearchArray1] = useState([])
    const [searchArray2, setSearchArray2] = useState([])

    const [search1, setSearch1] = useState("")
    const [search2, setSearch2] = useState("")
    const [query, setQuery] = useState("")
    
    const fetchSelect = async () => {
        try {
          let response = await axios.get(`https://www.dnd5eapi.co/api`);
          const array = []
          for (let key in response.data) {
            array.push(key)
          }
          setSearchArray1(array);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        fetchSelect();
      }, []);    

    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.get(`https://www.dnd5eapi.co/api/${search1}`)
            setSearchArray2(response.data.results);
        } catch (error) {
            console.log(error);
        }
          
      };

  return (
    <div>

        <div>
        <h1>Search for:</h1>
        <form onSubmit={handleSubmit}>
            <select value={search1} onChange={(e) => setSearch1(e.target.value)}>
                {searchArray1.map((element) => (
                    <option value={element}>{element}</option>
                ))}
            </select>
            <button type="submit">search</button>
        </form>
        <form onSubmit={handleSubmit}>
            <select value={search2} onChange={(e) => setSearch2(e.target.value)}>
                {searchArray2.map((element) => (
                    <option value={element.index}>{element.name}</option>
                ))}
            </select>
            <button type="submit">search</button>
        </form>

        </div>
        

    </div>
  )
}

export default SearchAPI