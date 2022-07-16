import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
//import './CountryPage.css'

import TravelerReviews from '../components/TravelerReviews'

function CountryPage() {
  const {id} = useParams()
  const [country, setCountry] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      fetch(`http://localhost:3000/countries/${id}`)
      .then(res => res.json())
      .then(setCountry)
      .finally(() => {
        setLoading(false);
      });
    }, [id])

    if (loading) {
      return <p>Data is loading...</p>;
    }

    return (
      <div className="experience">
          <h1>Traveler's experiences in {country.name}</h1>
          <TravelerReviews id={id} reviews={country.travelReviews}/>
      </div>
  )
}

export default CountryPage