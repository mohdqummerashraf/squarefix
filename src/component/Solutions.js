import { Grid } from '@mui/material'
import React from 'react'
import styles from "../styles/SolutionCard.module.css"
import SolutionCard from './SolutionCard'

function Solutions() {
    return (
        <Grid container style={{
            backgroundColor: 'transparent',
            backgroundImage: 'linear-gradient(180deg,#AFC6E6 0%,#E9E6EF 100%)',
        }}>
            <Grid item lg={12}>
                <p className={styles.howWeDo}>HOW WE DO</p>
            </Grid>
            <Grid item lg={12}>
                <h2 className={styles.solutionHeading}>Solutions</h2>
            </Grid>
            <SolutionCard />
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <div className={styles.viewAllContainer}>
                    <a className={styles.viewAll}>View All Solutions</a>

                </div>
            </Grid>
        </Grid>
    )
}

export default Solutions