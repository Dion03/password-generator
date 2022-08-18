import React from 'react';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import Fade from '@mui/material/Fade';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';    
import TextField  from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { generatePassword } from "../Function/generatePass";
import { Tooltip } from '@mui/material';
function Index() {  
    const [wachtwoord, setWachtwoord] = React.useState("Druk op de knop om een wachtwoord te genereren")
    const [alert, setAlert] = React.useState(false)
    const [options, setOptions] = React.useState({
      lengte: 12,
      hoofdletters: true,
      nummers: true,
      specKarakters: true,
    });
    async function clipboard(){
      navigator.clipboard.writeText(wachtwoord)
      setAlert(true)
    }
    return (
      <div>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <Card className="Card" align="center">
            <CardMedia>                  
              <Fade in={alert}
                className="centerAlert"
                timeout={{ enter: 1000, exit: 1000 }}
                addEndListener={() => {
                  setTimeout(() => {
                    setAlert(false)
                  }, 2000);}}>
                <Alert severity="success" variant="standard" className="alert">
                  Wachtwoord gekopieerd!
                </Alert>
              </Fade>
            </CardMedia>
            <Typography variant='h4' className="Title">Wachtwoord generator</Typography>
            <Tooltip title="Klik om te kopieren">
              <Box sx={{mt:3}}
                display="flex"
                justifyContent="center"
                className="passwordOutput"
                onClick={() => clipboard()}
              >
                <Typography >{wachtwoord}</Typography>
              </Box>
              </Tooltip>
              <Grid container sx={{mt:3}}>
                <Grid xs={12} md={6}>
                  <Item>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox defaultChecked onClick={e=> {setOptions({...options, hoofdletters: e.target.checked})}}/>} label="Hoofdletters" />
                      <FormControlLabel control={<Checkbox defaultChecked onClick={e=> {setOptions({...options, nummers: e.target.checked})}}/>} label="Nummers" />
                      <FormControlLabel control={<Checkbox defaultChecked onClick={e=> {setOptions({...options, specKarakters: e.target.checked})}}/>} label="Speciale tekens " />
                    </FormGroup>
                  </Item>
                </Grid>                        
                <Grid xs={12} md={6}>
                  <Item>
                    <TextField  type="number" value={options.lengte} 
                      onChange={e => setOptions({ ...options, lengte: +e.target.value })}  
                      label="Lengte wachtwoord"/>  
                    <Button variant="contained" sx={{mt:3}} onClick={() => setWachtwoord(generatePassword(options))}>Maak wachtwoord aan</Button>
                  </Item>
                </Grid>
              </Grid>     
            </Card>
        </Box>
      </div>
    );
}
export default Index;