import  {apiData, apiOptions } from "./utils/fetchData";
import { useState } from "react";
import Main from "./Main";
import Header from "./Header";
import Navbar from "./Navbar";


function App() {
  
  const [search,setSearch] = useState("");
  const [covid,setCovid] = useState([]);
  
  function handleChange (e) {
    setSearch(e.target.value.toLowerCase())
  }


  const handleClick= async () => {
    if (search) {
      const res = await apiData('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/',apiOptions);
      console.log(res);
      const filteredRes = res.filter((info) => {
        return (
            info.Country.toLowerCase().includes(search) && 
            info.TotalDeaths &&
            info.TotalCases &&
            info.ActiveCases && 
            info.Infection_Risk            
        )      
      })
      setCovid(filteredRes)
    }
  }
  
  return (
    <div className="App">
      <Navbar />
      <Header 
      handleClick={handleClick}
      handleChange={handleChange}
      />
      <Main 
      info={covid}
      />
    </div>
  );
}

export default App;
