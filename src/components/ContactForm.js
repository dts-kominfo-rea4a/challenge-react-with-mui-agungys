// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import React,{useState} from 'react';
import {Card,Grid,TextField,Button} from '@mui/material';

const ContactForm = ({fntambahkontak}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada

    const [inputName,setinputName]          = useState("");
    const [inputPhone,setinputPhone]        = useState("");
    const [inputEmail,setinputEmail]        = useState("");
    const [inputPhotourl,setinputPhotourl]  = useState("");

    const fnOnChangeName        = (event) => { setinputName(event.target.value);}
    const fnOnChangePhone       = (event) => { setinputPhone(event.target.value);}
    const fnOnChangeEmail       = (event) => { setinputEmail(event.target.value);}
    const fnOnChangePhotourl    = (event) => { setinputPhotourl(event.target.value);}

    const fnOnSubmitKontak = (event) => {
        event.preventDefault();
        fntambahkontak(inputName,inputPhone,inputEmail,inputPhotourl);

        setinputName("");
        setinputPhone("");
        setinputEmail("");
        setinputPhotourl("");
    }

    return (
        <form onSubmit={fnOnSubmitKontak}>
            <Card variant="outlined" sx={{ minWidth: 400 }} >
                <Grid xs="auto" sx={{ margin: 2 }}>
                    <TextField id="Name" label="Name *" variant="filled" fullWidth value={inputName} onChange={fnOnChangeName}/>
                </Grid>
                <Grid xs="auto" sx={{ margin: 2 }}>
                    <TextField id="Phone" label="Phone *" variant="filled" fullWidth value={inputPhone} onChange={fnOnChangePhone}/>
                </Grid>
                <Grid xs="auto" sx={{ margin: 2 }}>
                    <TextField id="Email" label="Email *" variant="filled" fullWidth value={inputEmail} onChange={fnOnChangeEmail}/>
                </Grid>
                <Grid xs="auto" sx={{ margin: 2 }}>
                    <TextField id="Photourl" label="Photo URL" variant="filled" fullWidth value={inputPhotourl} onChange={fnOnChangePhotourl}/>
                </Grid>
                <Grid xs="auto" sx={{ margin: 2 }}>
                    <Button type="submit" variant="outlined">Add</Button>
                </Grid>
            </Card>
        </form>
        
    );
}

export default ContactForm;