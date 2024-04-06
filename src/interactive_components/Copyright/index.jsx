import * as React from 'react';
import Typography from '@mui/material/Typography';

import Link from '@mui/material/Link';
import {useTheme} from "@mui/material";

export default function Copyright() {
    const theme = useTheme();
    return (
        <Typography margin={2} variant="body2" color={theme.palette.text.main} align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://www.ecoexplorecr.com/">
                EcoExplore Caño Negro Costa Rica
            </Link>{' '}
            {new Date().getFullYear()}.
        </Typography>
    );
}