import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import TravelerReviews from '../components/TravelerReviews'

function TravelerExperiences() {
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
        console.log(loading)
        console.log(country)
    return <p>Data is loading...</p>;
  }
  console.log(loading)
  console.log(country)

    return (
        <div>
            <h1>Travelrs experiences in {country.name}</h1>
            <TravelerReviews reviews={country.travelReviews}/>
        </div>
  )
}

export default TravelerExperiences