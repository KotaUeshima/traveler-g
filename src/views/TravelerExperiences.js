import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

function TravelerExperiences() {
  const {id} = useParams()
  const [country, setCountry] = useState({})

  const {flag, name, continent, capital, currencies, Language} = country

  useEffect(() => {
    fetch(`http://localhost:3000/countries/${id}`)
    .then(res => res.json())
    .then(setCountry)
  }, [id])

  return (
    <div>
      <img src={flag}/>
    </div>
  )
}

export default TravelerExperiences