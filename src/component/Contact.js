import { Grid } from '@mui/material'
import React from 'react'
import styles from "../styles/Contact.module.css";

function Contact() {
    return (
        <>

            <Grid container style={{
                backgroundColor: '#242627',
                padding: '0px 10px 10px 3%'
            }}>
                <Grid item lg={12}>
                    <p className={styles.contactus} style={{
                        color: '#f5f5f5'
                    }}  >CONTACT US
                    </p>
                </Grid>
                <Grid item lg={12}>
                    <h2 className={styles.contactusHeading}   >Partner with Us for Comprehensive IT
                    </h2>
                </Grid>
                <Grid item lg={7} md={7} sm={12} xs={12}>

                </Grid>
                <Grid item lg={5} md={5} sm={12} xs={12}>
                    {/*  <div className={styles.formContainer}>
                        <p className={styles.formHeading}>Schedule a Free Consultation</p>
                        <hr style={{
                            margin: '0px 0px 20px 0px'
                        }}></hr>
                        <form>
                            <Grid container>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    <label className={styles.formLabel}>First Name</label>
                                    <input
                                        className={styles.inputBox}
                                        style={{
                                            width: '90%'
                                        }}
                                    />
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                    <label className={styles.formLabel}  >Last Name</label>
                                    <input
                                        className={styles.inputBox}
                                        style={{
                                            width: '100%',

                                        }}
                                    />
                                </Grid>
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <label className={styles.formLabel}>Company / Organization</label>

                                </Grid>
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <input
                                        className={styles.inputBox}
                                    />
                                </Grid>
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <label className={styles.formLabel}>Company email</label>

                                </Grid>
                                <Grid item lg={12} md={12} sm={12} xs={12}>

                                    <input
                                        className={styles.inputBox}
                                    />
                                </Grid>
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <label className={styles.formLabel}>Phone</label>

                                </Grid>
                                <Grid item lg={12} md={12} sm={12} xs={12}>

                                    <input
                                        className={styles.inputBox}
                                    />
                                </Grid>
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <label className={styles.formLabel}>Message
                                    </label>

                                </Grid>
                                <Grid item lg={12} md={12} sm={12} xs={12}>

                                    <textarea
                                        className={styles.inputBox}
                                        style={{
                                            height: '70px'
                                        }}
                                    />
                                </Grid>
                                <Grid item lg={12} md={12} sm={12} xs={12}>

                                    <button className={styles.smallBtn}>Submit</button>
                                </Grid>
                            </Grid>
                        </form>
                    </div> */}
                </Grid>

            </Grid>
            <Grid
                container
                style={{
                    backgroundColor: 'transparent',
                    backgroundImage: 'linear-gradient(90deg,#E9E6EF 0%,#AFC6E6 100%)',
                    padding: '0px 10px 10px 3%'
                }}
            >
                <Grid item lg={7} md={7} sm={12} xs={12}>

                </Grid>
            </Grid>
        </>
    )
}

export default Contact