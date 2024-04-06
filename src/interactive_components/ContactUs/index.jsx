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
                    <Grid item xs={12} sm={4}>
                        <a href="https://wa.me/50663507316">
                            <WhatsAppIcon/>
                        </a>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        {/*https://www.tiktok.com/@ecoexplorecr*/}
                        <a href="https://www.instagram.com/ecoexplorecr/">
                            <InstagramIcon/>
                        </a>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <a href="https://maps.app.goo.gl/ctYCXPFaGz3pMbSSA">
                            <MapIcon/>
                        </a>
                    </Grid>
                    <Grid item xs={12} sm={15}>
                        <Typography variant="h6" align="center" gutterBottom>
                            Email: info@ecoexplorecr.com
                        </Typography>
                        <Typography variant="h6" align="center" gutterBottom>
                            Tel: +506 63507316
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