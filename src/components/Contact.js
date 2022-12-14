// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import './contact.css';
import {Grid,Typography,Divider} from '@mui/material';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
            <>
            <Grid container spacing={0} key={data.phone}>
                <Grid item md ={3}>
                    <img src={data.photo} alt="foto" className="foto"/>
                </Grid>
                <Grid item md ={9} >
                    <Typography variant="h5" align="left">{data.name}</Typography>
                    <Typography align="left">{data.phone}</Typography>
                    <Typography align="left">{data.email}</Typography>
                </Grid>
                </Grid>
            <Divider variant="middle" />
            </>
    );
};

export default Contact;
