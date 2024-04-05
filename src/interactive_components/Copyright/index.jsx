import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://www.ecoexplorecr.com/">
                EcoExplore Caño Negro Costa Rica
            </Link>{' '}
            {new Date().getFullYear()}.
        </Typography>
    );
}