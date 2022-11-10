import React from 'react'

function Main({info, search}) {
  
    
  
    return (
    <main > 
        <input type="search" onChange={search} />
        <button>Search</button>
            <div className='wrap'>
                <div className='cards'>
                     <h1>Total Cases:</h1>
                     {info.map((cases) => {
                     return cases.TotalCases
                  })}
                </div>
                <div className='cards'>
                     <h1>Total Deaths</h1>
                    {info.map((deaths)=> {
                    return deaths.TotalDeaths
                    })}
                </div>
                <div className='cards'>
                     <h1>Active Cases</h1>
                     {info.map((cases)=> {
                    return cases.ActiveCases
                     })}
                </div>
                <div className='cards'>
                    <h1>Infection Risk</h1>
                   {info.map((risk)=> {
                   return <p> {risk.Infection_Risk} %</p>
                  })}
                </div>
            </div>
    </main>
  )
}

export default Main