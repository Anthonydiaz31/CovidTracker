import  {apiData, apiOptions } from "./utils/fetchData";
import { useState,useEffect } from "react";
import Main from "./Main";
import Header from "./Header";


function App() {
  
  const [search,setSearch] = useState("");
  const [covid,setCovid] = useState([]);
  
  
  const handleChange= async (e) => {
    const {value} = e.target;
    setSearch(value);
    if (search) {
      const res = await apiData('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/',apiOptions);
      console.log(res);
      const filteredRes = res.filter((info) => {
        return (info.Country.toLowerCase().includes(search) && 
        info.TotalDeaths &&
        info.TotalCases &&
        info.ActiveCases && 
        info.Infection_Risk)      
      })
      setCovid(filteredRes)
      
    }
  }


  
  return (
    <div className="App">
      <Header />
      <Main 
      info={covid}
      search={handleChange}
      />
    </div>
  );
}

export default App;
