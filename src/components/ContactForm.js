import { Button, Container, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


function ContactForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [ci, setCi] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [ciError, setCiError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [telephoneError, setTelephoneError] = useState(false);
  
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validarEmail(email)) {
            setEmailError(false);
        } else {
            setEmailError(true);
        }
        if (telephone.length <= 8) {
            setTelephoneError(true);
        } else {
            setTelephoneError(false);
        }
        if (ci.length < 7) {
            setCiError(true);
        } else {
            setCiError(false);
        }
        if (name.length < 7) {
            setNameError(true);
        } else {
            setNameError(false);
        }
        onSubmit({ name, ci, telephone, email });
        setName('');
        setCi('');
        setTelephone('');
        setEmail('');
    };

    function validarEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }
  
    return (
        <>
            <Container>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Nombre"
                                variant="outlined"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                error={nameError}
                                helperText={nameError ? 'nombre invalido' : ''} 
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Documento de identidad"
                                variant="outlined"
                                type="number"
                                value={ci}
                                onChange={(e) => setCi(e.target.value)} 
                                required
                                error={ciError}
                                helperText={ciError ? 'Carnet de identidad invalido' : ''} 
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Correo electrónico"
                                variant="outlined"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={emailError}
                                helperText={emailError ? 'Correo electrónico inválido' : ''} 
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <PhoneInput
                                fullWidth
                                placeholder="Telefono"
                                value={telephone}
                                onChange={setTelephone}
                                defaultCountry="BO"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" type="submit">
                                Enviar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </>
      
    );
  }

  export default ContactForm;