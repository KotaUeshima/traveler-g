import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ModalForm from '../components/ModalForm'
import TravelerReviews from '../components/TravelerReviews'
import './TravelerExperiences.css'

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
      return <p>Data is loading...</p>;
    }

    return (
      <div className="experience">
          <h1>Traveler's experiences in {country.name}</h1>
          <TravelerReviews id={id} reviews={country.travelReviews}/>
      </div>
  )
}

export default TravelerExperiences