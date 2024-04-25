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
import axios from "axios";
import toast from "react-hot-toast";



const TourReservationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        numberOfPeople: '',
        tourDate: '',
        tourTime: '',
        category: '',
        additionalInfo: '',
    });

    const [open,setOpen] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    // Other Handler Form to use
    const func = (payload) =>{

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: '',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': "01234567890123456789"

            },
            data : JSON.stringify(payload)
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const payload = JSON.stringify(formData)
        axios.post('', payload, {
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => {
                // Manejar la respuesta del servidor
                console.log('La solicitud:',response.data);
                toast.success('Pronto de Contactaremos')
            })
            .catch(error => {
                // Manejar errores
                console.error('Error al realizar la solicitud:', error);
                console.error(error);
                toast.error('Ha ocurrido un error')
            }).finally(() =>{
                setFormData({
                    name: '',
                    email: '',
                    phoneNumber: '',
                    numberOfPeople: '',
                    tourDate: '',
                    tourTime: '',
                    category: '',
                    additionalInfo: '',
                })
            }
        );
    };

    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                Reserva tu aventura en el <strong> Refugio de Vida Silvestre Mixto </strong> <strong> Caño Negro </strong>
            </Typography>
            <Paper style={{ padding: 20, borderRadius: 20, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Nombre"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Correo electrónico"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Número de teléfono"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Número de personas"
                                name="numberOfPeople"
                                type="number"
                                value={formData.numberOfPeople}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel>Categoría</InputLabel>
                                <Select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    required
                                >
                                    <MenuItem value="Personalizado">Personalizado</MenuItem>
                                    <MenuItem value="Tour Acuático">Tour Acuático</MenuItem>
                                    <MenuItem value="Paseo a Caballo">Paseo a Caballo</MenuItem>
                                    <MenuItem value="Caminata Nocturna">Caminata Nocturna</MenuItem>
                                    <MenuItem value="Senderos">Senderos</MenuItem>
                                    <MenuItem value="Hospedaje">Hospedaje</MenuItem>
                                    <MenuItem value="Tour Cacao">Tour Cacao</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={3}>
                            <TextField
                                fullWidth
                                label="Fecha del tour"
                                name="tourDate"
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                value={formData.tourDate}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField
                                fullWidth
                                label="Hora del tour"
                                name="tourTime"
                                type="time"
                                InputLabelProps={{ shrink: true }}
                                inputProps={{ step: 300 }} // Step de 5 minutos
                                value={formData.tourTime}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Información adicional"
                                name="additionalInfo"
                                multiline
                                rows={4}
                                value={formData.additionalInfo}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary">
                                Enviar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default TourReservationForm;
