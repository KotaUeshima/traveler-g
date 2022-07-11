import React, { useState} from 'react'

function HomeCountries({country}) {
const [isFlag, setIsFlag] = useState(true)

    function handleCountryDetails(){
        setIsFlag(!isFlag)
    }


  return (
      <div>
        <figure>
            <img
            src={country.flag}
            onClick= {handleCountryDetails}
            />
            <figcaption>{country.name}</figcaption>
        </figure>
    </div>
  )
}


export default HomeCountries