import React from 'react';
import { Feature } from '../../components';
import './features.css';


const featuresData = [
    {
        link: 'https://github.com/cyphergurke/nftmarket',
        title: 'NFT Marketplace',
        text: 'A trustless NFT Marketplace with 0% fees deployable on any EVM compatible chain. Not deployed yet. Build with Nextjs, Solidity, IPFS & Skynet',
    },
    {
        link: 'https://cryptocurrency.bitcoin-uni.de',
        title: 'Cryptocurrency News & Statistics',
        text: 'A cryptocurrency Website that show basic statistics and News for each cryptocurrency (only top 100 ). Technologies:  Reactjs RapidAPI',
    },
    {
        link: 'https://vanity-address.bitcoin-uni.de',
        title: 'Vanity Address Generator',
        text: 'The worlds leading Generator for custom Bitcoin addresses. Technologies: PHP, Nodejs, MariaDB, Vanitygen',
    },
    {
        link: 'https://bitcoin-uni.de',
        title: 'Bitcoin Uni',
        text: 'Knowledge base for Bitcoin Nerds',
    },
    {
        link: 'https://portfolio.bitcoin-uni.de/dex/index.html',
        title: 'Simple Swap Ui',
        text: 'Swap Ui with Moralis Web3  ',
    },
]


export const Features = () => {
    return (

        <><div className='dweb__features-head'>
            <h2 className='gradient__text'>Projects</h2>
        </div>
            <div className='dweb__features section__padding' id='features'>

                <div className='dweb__features-heading'>
                    <h1 className='gradient__text'>
                        The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
                    </h1>
                </div>
                <div className='dweb__features-container'>
                    {featuresData.map((item, index) =>
                        <Feature link={item.link} title={item.title} text={item.text} key={item.title + index} />
                    )
                    }
                </div>
            </div>
        </>
    )
}
