import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';    
import { generatePassword } from "../Function/generatePass";
function Index() {  
    const [wachtwoord, setWachtwoord] = React.useState("")
    const [options, setOptions] = React.useState({
        lengte: 12,
        hoofdletters: true,
        nummers: true,
        specKarakters: true,
      });

    return (
        <div>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                className="boxContainer"
            >
                <Card className="Card">
                    <Typography variant='h4' className="Title">Wachtwoord generator</Typography>
                    <Box sx={{mt:3}}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        className="output"
                    >
                        <Typography >{wachtwoord}</Typography>
                    </Box>
                    <Grid container sx={{mt:3}}>
                        <Grid xs={12} md={6}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked onClick={e=> {console.log(options, e.target.checked); setOptions({...options, hoofdletters: e.target.checked})}}/>} label="Hoofdletters" />
                                <FormControlLabel control={<Checkbox defaultChecked onClick={e=> {console.log(options, e.target.checked); setOptions({...options, nummers: e.target.checked})}}/>} label="Nummers" />
                                <FormControlLabel control={<Checkbox defaultChecked onClick={e=> {console.log(options, e.target.checked); setOptions({...options, specKarakters: e.target.checked})}}/>} label="Spec karakters" />
                            </FormGroup>
                        </Grid>                        
                        <Grid xs={12} md={6}>
                            <Input type="number" value={options.lengte} onChange={e => setOptions({ ...options, lengte: +e.target.value })}  placeholder="Lengte wachtwoord"/>  
                            <Button sx={{mt:5}} onClick={() => setWachtwoord(generatePassword(options))}>Maak wachtwoord aan</Button>
                        </Grid>
                    </Grid>
                </Card>
            </Box>
        </div>
    );
}

export default Index;