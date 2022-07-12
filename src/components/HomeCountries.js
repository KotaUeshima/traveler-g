import React, {useState} from 'react';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import PublicIcon from '@mui/icons-material/Public';
import FlagIcon from '@mui/icons-material/Flag';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GTranslateIcon from '@mui/icons-material/GTranslate';

function HomeCountries({country}) {
  const {flag, name, continent, capital, currencies, Language} = country

  const [isFront, setIsFront] = useState(true)

  return (
    <Grid item xs={3}>
      <Card>
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
            <ListItemText primary={currencies}/>
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
          <Button 
          size="small" 
          onClick={() => setIsFront(!isFront)}
          >
          {isFront?"Learn More":"Go Back"}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}


export default HomeCountries