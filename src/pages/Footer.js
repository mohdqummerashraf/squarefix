import { Grid } from '@mui/material'
import React from 'react'
import styles from "../styles/Home.module.css"

function Footer() {
    return (
        <Grid container style={{
            backgroundColor: '#000',
            padding: '2%'
        }}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <p className={styles.footerHeading}>Solutions</p>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <div> <a className={styles.footerList}>Managed Services</a></div>
                        <div><a className={styles.footerList}>IT Consulting & Advisory</a></div>
                        <div><a className={styles.footerList}>Cyber Security</a></div>
                        <div><a className={styles.footerList}>Web Development</a></div>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <div> <a className={styles.footerList}>Mobile Development</a></div>
                        <div><a className={styles.footerList}> Cloud Services</a></div>
                        <div> <a className={styles.footerList}>Network Connectivity</a></div>
                        <div> <a className={styles.footerList}>ERP Solutions</a></div>

                    </Grid>

                </Grid>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
                {/* <div className={styles.footerBgContainer}>
                    <div className={styles.footerMotionContainer}>
                        <div className={styles.footerBgDots}></div>

                    </div>
                </div> */}

            </Grid>
        </Grid>
    )
}

export default Footer