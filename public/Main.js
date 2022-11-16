import React from 'react'

function Main({info}) {
  
    return (
        <main >     
             <div className='wrap'>
                <div className='cards'>
                     <h1>Total Cases</h1>
                     {info.map((cases) => cases.TotalCases )}
                </div>
                <div className='cards'>
                     <h1>Total Deaths</h1>
                     {info.map((deaths)=> deaths.TotalDeaths)}
                </div>
                <div className='cards'>
                     <h1>Active Cases</h1>
                     {info.map((cases)=> cases.ActiveCases)}
                </div>
                <div className='cards'>
                    <h1>Infection Risk</h1>
                    {info.map((risk)=><p> {risk.Infection_Risk} %</p>)}
                </div>
            </div>
    </main>
  )
}

export default Main