import React, {useEffect, useState} from 'react'
import HomeCountries from './HomeCountries'


function HomepageContainer() {
  const [countries, setCountries] = useState([])

  useEffect(()=> {
    fetch('http://localhost:3000/countries')
    .then(resp => resp.json())
    .then((countriesData) => setCountries(countriesData))
  },[])

  const countryCards= countries.map((country)=>{
    return <HomeCountries key={country.id} country={country}/>
  })

  return (
    <div>
      Homepage Container
      {countryCards}
    </div>
  )
}

export default HomepageContainer