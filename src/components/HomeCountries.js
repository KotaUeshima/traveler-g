import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './HomeCountries.css'

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import PublicIcon from '@mui/icons-material/Public';
import FlagIcon from '@mui/icons-material/Flag';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import {key} from '../superSecret'

import {createTheme} from '@mui/material';

function HomeCountries({country}) {
  const {flag, name, continent, capital, currencies, Language, id} = country

  const [isFront, setIsFront] = useState(true)
  const [currencyRate, setCurrencyRate] =useState('')

  function displayCurrency(){
    fetch(`https://v6.exchangerate-api.com/v6/${key}/latest/USD`)
    .then(res=> res.json())
    .then(data => setCurrencyRate(data.conversion_rates[currencies]))
  }
  const countryCurrency = `${currencies} : ${currencyRate} USD`


  return (
      <Grid item xs={3}>
        <div className="homecountries">
          <div className="homecountries__card">
            <Card sx={{
                ':hover': {
                  boxShadow: 20,
                },
                borderRadius: '16px'
            }}
            >
              {isFront?
              <CardMedia
                component="img"
                height="160"
                image={flag}
                alt={name}
              /> :
              <List>
                <ListItem>
                  <ListItemIcon> <PublicIcon/> </ListItemIcon>
                  <ListItemText primary={continent}/>
                </ListItem>
                <ListItem>
                  <ListItemIcon> <FlagIcon/> </ListItemIcon>
                  <ListItemText primary={capital}/>
                </ListItem>
                <ListItem>
                  <ListItemIcon> <AttachMoneyIcon/> </ListItemIcon>
                  <ListItemText primary={countryCurrency} />
                </ListItem>
                <ListItem>
                  <ListItemIcon> <GTranslateIcon/> </ListItemIcon>
                  <ListItemText primary={Language}/>
                </ListItem>
              </List>
              }
              <CardContent>
                <Typography variant="h5">
                  {name}
                </Typography>
              </CardContent>
              <CardActions>
                <div>
                  <Button
                  size="small"
                  variant="text"
                  onClick={() => {
                    setIsFront(!isFront)
                    displayCurrency()
                  }
                }>
                  {isFront?"Learn More":"Go Back"}
                  </Button>
                  <Link style={{textDecoration: 'none'}} to={`/${id}`}>
                    <IconButton aria-label="camera" size="small">
                      <CameraAltIcon/>
                    </IconButton>
                  </Link>
                  </div>
              </CardActions>
            </Card>
          </div>
        </div>
      </Grid>

  )
}


export default HomeCountries