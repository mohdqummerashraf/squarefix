import { Grid } from '@mui/material'
import React from 'react'
import styles from "../styles/Whatwedo.module.css"

function Whatwedo() {
    return (
        <Grid container style={{
            backgroundColor: '#242627',
            padding: '2%'
        }}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <p className={styles.Whatwedo}>What we do</p>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
                <p className={styles.WhatwedoHeading}>Simplifying IT
                    for a complex world.</p>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>

            </Grid>
        </Grid>
    )
}

export default Whatwedo