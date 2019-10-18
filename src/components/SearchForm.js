import React, { useState, useEffect } from "react";

export default function SearchForm(props) {


  const [searchText, setSearchText] = useState("");
   const [searchResult, setSearchResult] = useState([]);

   const handleChange = e => {
    console.log(e.target.value);
    setSearchText(e.target.value);
  };

  // useEffect(() => {
  //   const results = props.charName.filter(person =>
  //     person.toLowerCase().includes(searchText)
  //   );
  //   setSearchResult(results);
  // }, [searchText]);




  return (
    <section className="search-form">
     
     <form>
        <input className='input'
          type='text'
          placeholder="Search Character Name"
          name="name"
          onChange={handleChange}
          value={searchText}
          
        />
        {/* <button type="submit">Search</button> */}


        <ul>{searchResult.map(item => (
          <li>{item}</li>
        ))}</ul>
        
      </form>

    </section>
  );
}
