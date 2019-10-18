import React, { useState } from "react";

export default function SearchForm() {


  const [searchText, setSearchText] = useState("");
   const [searchResult, setSearchResult] = useState([]);

   const handleChange = e => {
    console.log(e.target.value);
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const results = name.filter(person =>
      person.toLowerCase().includes(searchText)
    );
    setName(results);
  }, [searchText]);




  return (
    <section className="search-form">
     
     <form onSubmit={() => onSearch(name)}>
        <input
          type='text'
          placeholder="Search Name"
          name="name"
          onChange={handleChange}
          value={searchText}
          
        />
        <button type="submit">Search</button>


        <ul>{searchResult.map(item => (
          <li>{item}</li>
        ))}</ul>
        
      </form>

    </section>
  );
}
