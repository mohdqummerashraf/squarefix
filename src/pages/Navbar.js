import { Grid } from '@mui/material'
import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import styles from '@/styles/Navbar.module.css'


function Navbar() {
    return (
        <Grid container className={styles.navbarContainer}>
            <Grid item lg={3} md={3} sm={6} xs={6}>
                <p>Logo</p>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={6}>
                <Grid container>
                    <Grid item lg={3}>
                        <div className={styles.singleMenudiv}>
                            <p>Solution</p>
                            <ArrowDropDownIcon />
                        </div>

                    </Grid>
                    <Grid item lg={3}>
                        <div className={styles.singleMenudiv}>
                            <p>Service</p>
                            <ArrowDropDownIcon />
                        </div>

                    </Grid>
                    <Grid item lg={3}>
                        <div className={styles.singleMenudiv}>
                            <p>Company</p>
                            <ArrowDropDownIcon />
                        </div>

                    </Grid>
                    <Grid item lg={3}>
                        <div className={styles.singleMenudiv}>
                            <p>Case Studies</p>
                            <ArrowDropDownIcon />
                        </div>

                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={6}>
                <button>Contact Us</button>
            </Grid>
            <Grid item lg={12} md={12}>
                <div className={styles.navbarDivider}></div>
            </Grid>
        </Grid>
    )
}

export default Navbar