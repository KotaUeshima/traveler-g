import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CountryPageContent from "../components/CountryPageContent";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CountryPage() {
  const { id } = useParams();
  const [country, setCountry] = useState({});
  // So that pictures don't load until fetch has been with useEffect
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/countries/${id}`)
      .then((res) => res.json())
      .then(setCountry)
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Data Is Loading...</p>;
  }

  return (
    <div className="country-page">
      <Box sx={{ p: "5" }}>
        <Typography variant="h3">
          Traveler's experiences in {country.name}
        </Typography>
      </Box>
      <CountryPageContent id={id} reviews={country.travelReviews} />
    </div>
  );
}

export default CountryPage;
