import React, {useEffect, useState} from 'react'
import HomeCountries from './HomeCountries'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';


function HomepageContainer() {

  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState("")

  useEffect(()=> {
    fetch('http://localhost:3000/countries')
    .then(res => res.json())
    .then(setCountries)
  },[])

  function handleSearch(e){
    setSearch(e.target.value)
  }

  const filteredCountries = countries.filter(country => {
    if(search === ""){
      return true
    }
    return country.name.toLowerCase().includes(search.toLowerCase())
  })

  const countryCards = filteredCountries.map(country => {
    return <HomeCountries key={country.id} country={country}/>
  })

  return (
    <div>
      <TextField 
      size="small"
      variant="outlined" 
      label="Select a Country"
      value={search}
      onChange={handleSearch}
      />
      <br></br>
      <br></br>
      <Grid container spacing={4}>
        {countryCards}
      </Grid>
    </div>
  )
}

export default HomepageContainer