import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Fade from '@mui/material/Fade';
import Alert from '@mui/material/Alert';
import TextField  from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';    
import { generatePassword } from "../Function/generatePass";
function Index() {  
    const [wachtwoord, setWachtwoord] = React.useState("")
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
          <Grid container justifyContent="center" alignItems="center" align="center">
            <Grid md={4} xs={4}>
              <Fade in={alert}
                  className="centerAlert"
                timeout={{ enter: 1000, exit: 1000 }}
                addEndListener={() => {
                  setTimeout(() => {
                    setAlert(false)
                  }, 10000);}}>
                <Alert severity="success" variant="standard" className="alert">
                    Wachtwoord gekopieerd!
                </Alert>
              </Fade>
            </Grid>
            <Grid md={12} xs={12}>
                <Card className="Card" align="center" alignItems="center">
                    <Typography variant='h4' className="Title">Wachtwoord generator</Typography>
                    <Box sx={{mt:3}}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        className="output"
                        onClick={() => clipboard()}
                    >
                        <Typography >{wachtwoord}</Typography>
                    </Box>
                    <Grid container sx={{mt:3}}>
                        <Grid xs={12} md={6}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked onClick={e=> {setOptions({...options, hoofdletters: e.target.checked})}}/>} label="Hoofdletters" />
                                <FormControlLabel control={<Checkbox defaultChecked onClick={e=> {setOptions({...options, nummers: e.target.checked})}}/>} label="Nummers" />
                                <FormControlLabel control={<Checkbox defaultChecked onClick={e=> {setOptions({...options, specKarakters: e.target.checked})}}/>} label="Spec karakters" />
                            </FormGroup>
                        </Grid>                        
                        <Grid xs={12} md={6}>
                            <TextField  type="number" value={options.lengte} onChange={e => setOptions({ ...options, lengte: +e.target.value })}  label="Lengte wachtwoord"/>  
                            <Button sx={{mt:5}} onClick={() => setWachtwoord(generatePassword(options))}>Maak wachtwoord aan</Button>
                        </Grid>
                    </Grid>
                </Card>
                </Grid>
                </Grid>
        </div>
    );
}

export default Index;