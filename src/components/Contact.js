// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import './contact.css';
import {Card,Grid,Typography,Divider} from '@mui/material';
import contactsJSON from '../data/contacts.json';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    let kontak = {};
    if (Array.isArray(data)){
        kontak = data;
    }else{
        kontak = contactsJSON;
    }
    return (
        <Card variant="outlined" sx={{ minWidth: 400, padding:1}} >
            {
                kontak.map((isi)=>{
                    return (
                        <>
                        <Grid container spacing={0} key={isi.phone}>
                            <Grid md ={3}>
                                <img src={isi.photo} className="foto"/>
                            </Grid>
                            <Grid md ={9} >
                                <Typography variant="h5" align="left">{isi.name}</Typography>
                                <Typography align="left">{isi.phone}</Typography>
                                <Typography align="left">{isi.email}</Typography>
                            </Grid>
                        </Grid>
                        <Divider variant="middle" />
                        </>
                    )
                })
            }
        </Card>
    );
};

export default Contact;
