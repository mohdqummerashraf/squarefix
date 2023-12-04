'use client'
import { Grid } from '@mui/material'
import React from 'react'
import styles from "../styles/SolutionCard.module.css";

function SolutionCard() {

    const solutionInfo = [
        {
            id: 1,
            imageUrl: '',
            title: 'Managed Services',
            description: 'Free up your internal resources to focus on the business by letting us handle day to day support services, management, and monitoring of your IT.'
        },
        {
            id: 2,
            imageUrl: '',
            title: 'IT Consulting & Advisory',
            description: 'The right technology, implemented properly, appropriately managed and monitored, can lead to significant gains in growth'
        },
        {
            id: 3,
            imageUrl: '',
            title: 'Cyber Security',
            description: 'Our experts can identify vulnerabilities, assess risks, and implement robust security measures to safeguard your systems and data.'
        },
        {
            id: 4,
            imageUrl: '',
            title: 'Web Development',
            description: 'Our web development services can help you establish an impactful online presence and reach your target audience effectively.'
        },
        {
            id: 5,
            imageUrl: '',
            title: 'Mobile  Development',
            description: 'Our web development services can help you establish an impactful online presence and reach your target audience effectively.'
        },
        {
            id: 6,
            imageUrl: '',
            title: 'Cloud  Services',
            description: 'With our expertise in cloud technologies, we can help you find the right cloud solutions that meet your business needs and goals.'
        },
    ];

    return (


        solutionInfo.map((item) => (
            <Grid item lg={4} md={4} sm={12} xs={12}>
                <div className={styles.card}>
                    <img src={item.imageUrl} />
                    <h2 className={styles.cardTitle}>{item.title}</h2>
                    <p className={styles.cardDesc}>{item.description}</p>
                    {/* <hr></hr> */}
                    <div className={styles.learnMoreContainer}>
                        <a className={styles.learnMoreBtn}>Learn More</a>
                    </div>
                </div>
            </Grid>
        ))


    )
}

export default SolutionCard