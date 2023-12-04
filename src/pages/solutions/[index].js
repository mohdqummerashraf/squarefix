import { Grid } from '@mui/material'
import React from 'react'
import styles from "../../styles/SolutionCard.module.css"
import Contact from '@/component/Contact'

function index() {
    return (
        <>
            <Grid container style={{
                backgroundColor: '#010ED0',
                padding: '0px 10px 10px 3%'
            }}>
                <Grid item lg={8} md={8} sm={12} xs={12}>
                    <Grid container>
                        <Grid item lg={12}>
                            <p className={styles.solution} style={{
                                color: '#f5f5f5'
                            }}  >Solutions</p>
                            <p className={styles.solutionHeading} style={{
                                color: '#f5f5f5'
                            }}>Managed Services</p>
                            <p className={styles.solutionHeadingdescription}>"Why hire an internal IT person, when you can have an entire team of IT experts for a fraction of the cost?"</p>
                            <div style={{
                                marginBottom: '2rem'
                            }}>
                                <a className={`${styles.btn}`}>Schedule a Free Consultation</a>

                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12}></Grid>
            </Grid>
            <Contact />
        </>


    )
}

export default index