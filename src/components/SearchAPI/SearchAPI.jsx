import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SearchAPI() {
    const [searchArray1, setSearchArray1] = useState([])
    const [searchArray2, setSearchArray2] = useState([])
    const [searchArray3, setSearchArray3] = useState([])

    const [search1, setSearch1] = useState("")
    const [search2, setSearch2] = useState("")
    const [search3, setSearch3] = useState("")
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

    const handleSubmit2 = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.get(`https://www.dnd5eapi.co/api/${search1}/${search2}`)
            setSearchArray3(response.data);
            console.log('lllllllllllllllllllllllllllllllllllllllll', response.data);
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
            <button type="submit">Select Category</button>
        </form>
        <form onSubmit={handleSubmit2}>
            <select value={search2} onChange={(e) => setSearch2(e.target.value)}>
                {searchArray2.map((element) => (
                    <option value={element.index}>{element.name}</option>
                ))}
            </select>
            <button type="submit">Search {search1}</button>
        </form>
        </div>
        <div>

            <>
            {search1 === 'spells' &&
            <>
            <p>Spell name: {searchArray3.name}</p>
            <p>Description: {searchArray3.desc}</p>
            <p>Higher level: {searchArray3.higher_level}</p>
            <p>Range: {searchArray3.range}</p>
            <p>Casting time: {searchArray3.casting_time}</p>
            <p>Level: {searchArray3.level}</p>
            <p>Material: {searchArray3.material}</p>
            <p>Duration: {searchArray3.duration}</p>
{/*             <p>Damage: {searchArray3.damage.damage_type.name}</p> */}
{/*             <p>Area of effect: {searchArray3.area_of_effect.size}</p>
            <p>{searchArray3.}</p>
            <p>{searchArray3.}</p> */}
            <p>More details: https://www.dnd5eapi.co{searchArray3.url}</p>
            </>
            }
            {search1 === 'equipment' &&
            <>
            <p>Equipment name: {searchArray3.name}</p>
            <p>Weight: {searchArray3.weight}</p>
            <p>Description: {searchArray3.desc}</p>
            <p>More details: https://www.dnd5eapi.co{searchArray3.url}</p>


            {searchArray3.cost &&
(            <>
            <p>{searchArray3.cost.quantity}</p>
            </>)
            }

{/*             <p>{searchArray3.}</p>
            <p>{searchArray3.}</p> */}
            </>
            }
            {search1 === 'monsters' &&
            <>
            <>
            <p>Name: {searchArray3.name}</p>
            <p>Size: {searchArray3.size}</p>
            <p>Type: {searchArray3.type}</p>
            <p>Subtype: {searchArray3.subtype}</p>
            <p>Alignment: {searchArray3.alignment}</p>
            <p>Armor Class: {searchArray3.armor_class}</p>
            <p>Hit points: {searchArray3.hit_points}</p>
            <p>Hit dice: {searchArray3.hit_dice}</p>
            <p>Strength: {searchArray3.strength}</p>
            <p>Dextery: {searchArray3.dexterity}</p>
            <p>Constitution: {searchArray3.constituiton}</p>
            <p>Intelligence: {searchArray3.intelligence}</p>
            <p>Wisdom: {searchArray3.wisdom}</p>
            <p>Charisma: {searchArray3.charisma}</p>
            <p>Languages: {searchArray3.languages}</p>
            <p>XP: {searchArray3.xp}</p>
            <p>Challenge Rating: {searchArray3.challenge_rating}</p>
            <p>More details: https://www.dnd5eapi.co{searchArray3.url}</p>

            </>


            </>
            }
            </>            
        </div>
        

    </div>
  )
}

export default SearchAPI