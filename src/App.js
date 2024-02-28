import { useState,useEffect } from "react";
import Countries from "./components/Countries";
import Search from "./components/Search";

function App() {

  const url = "https://restcountries.com/v3.1/all";  

  //Creating useStates for storing error, isLoading and countries.
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  // creating dataFetch() method -->
  const dataFetch = async (url) =>{

    setIsLoading(true)

    try{   
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
      setIsLoading(false);
      setError(null);
      // console.log(countries);
    }catch(error){
      setIsLoading(false);
      setError(error);
      // console.log(error);
    }

  }
  
  const handleRemoveCountry=(name)=>{
    
    const filter = filteredCountries.filter((country)=> country.name.common !== name);
    setFilteredCountries(filter);

  }
  useEffect(() => {

    dataFetch(url);

  },[])

  const handleSearch=(searchValue)=>{
    let value = searchValue.toLowerCase();
    const newCountries = countries.filter((country)=>{
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    })
    setFilteredCountries(newCountries);
  }

  return (
    <div className="App">
    <h1 className="text-center text-4xl font-bold pt-3 mb-6">Country Details App</h1>
    <Search onSearch={handleSearch} />
    {isLoading && <h2>Loading...</h2>}
    {error && <h3>{error.message}</h3>}
    {
      countries && <Countries onRemoveCountry={handleRemoveCountry} countries={filteredCountries} />
    }
    </div>
  );
}

export default App;


