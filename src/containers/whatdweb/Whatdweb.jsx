import React from 'react'
import { Feature } from '../../components'
import './whatdweb.css'
import { Link } from 'react-router-dom'




export const Whatdweb = () => {
    return (
        <div className='dweb__whatdweb section__margin' id='whpt3'>
            <div className='dweb__whatdweb-feature'>
                <Feature />
            </div>
            <div className='dweb__whatdweb-heading'>
                <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>


            </div>
            <div className='dweb__whatdweb-container'>
                <Feature title="Building dweb Apps" text="You might heard about Web3, but most of these dApps are still centralized, learn how to develop real decentralized applications." />
                <Feature title="Knowledgebase" text="Knowledge of the latest technologies and the flexibility to learn them are the most important resources for building modern dApps. " />
                <Feature title="Education" text="Learn about the Blockchain industry and different technologies to build powerfull crosschain dApps.The Web2 industry has little idea of how decentralized IT infrastructure and their applications will change their industry." />
            </div>

        </div>
    )
}
