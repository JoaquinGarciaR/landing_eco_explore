import React, { useState } from 'react';
import {
    TextField,
    Button,
    Container,
    Grid,
    Typography,
    Paper,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import MapIcon from '@mui/icons-material/Map';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import axios from "axios";

const ContactUs = () => {

    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                Contactanos
            </Typography>
            <Paper style={{ padding: 20, borderRadius: 20, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <Grid container spacing={2} display={"flex"}
                justify-content= {"center"}>
                    <Grid item xs={12} sm={3}>
                        <a href="https://wa.me/50663507316">
                            <img width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="Caño Negro Whatsapp Link"/>
                        </a>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <a target="_blank" href="https://www.instagram.com/ecoexplorecr/">
                            <img width="48" height="48" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="Caño Negro Instagram Link"/>
                        </a>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <a href="https://www.tiktok.com/@ecoexplorecr">
                            <img width="48" height="48" src="https://img.icons8.com/color/48/tiktok--v1.png" alt="Caño Negro sTiktok Link"/>
                        </a>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <a href="https://maps.app.goo.gl/ctYCXPFaGz3pMbSSA">
                            <img width="48" height="48" src="https://img.icons8.com/fluency/48/maps.png" alt="Caño Negro Maps Link"/>
                        </a>
                    </Grid>
                    <Grid item xs={12} sm={15}>
                        <Typography variant="p" align="center" gutterBottom> Somos una empresa orgullosa del <strong> turismo </strong>  en el <strong> Refugio de Vida Silvestre Mixto Caño Negro </strong> </Typography>
                    </Grid>
                    <Grid item xs={12} sm={15}>
                        <Typography variant="p" align="center" gutterBottom>
                            Email:
                            <strong> info@ecoexplorecr.com</strong>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={15}>
                        <Typography variant="p" align="center" gutterBottom>
                            Tel: <strong> +506 63507316 </strong>
                        </Typography>
                    </Grid>
                    {/*<Grid item xs={12} sm={3}>*/}
                    {/*    <a href="https://www.instagram.com/ecoexplorecr/">*/}
                    {/*        <CallIcon/>*/}
                    {/*    </a>*/}
                    {/*</Grid>*/}
                </Grid>


            </Paper>
        </Container>
    );
};

export default ContactUs;