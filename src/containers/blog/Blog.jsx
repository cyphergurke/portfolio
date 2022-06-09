import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../../components';
import { vanity, taproot, lightning, blog01, blog02, blog03, blog04, blog05 } from './imports.js';
import './blog.css';

export const Blog = () => {
    return (
        <div className='dweb__blog section__padding' id="blog">
            <div className='dweb__blog-heading'>
                <h1 className='gradient__text'>A lot is happening,
                    We are blogging about it. </h1>
                <h2 className='gradient__text'>This is only a small selection of articles</h2>
            </div>
            <div className='dweb__blog-container'>
                <div className='dweb__blog-container_groupB'>
                    <a href=" https://bitcoin-uni.de/btc-lightning-network.html" target='_blank'>
                        <Article imgUrl={blog01} date="Apr 26,2022" title="The Lightning Network - privacy " />
                    </a>

                    <a href=" https://medium.com/@bitcoin-uni/aktueller-stand-der-privatsph%C3%A4re-im-lightning-network-6dc5289e9f27" target='_blank'>
                        <Article imgUrl={lightning} date="Apr 26,2022" title="The Lightning Network - introduction" />
                    </a>
                    <a href=" https://medium.com/@bitcoin-uni/how-to-create-a-custom-bitcoin-vanity-address-from-a-third-party-without-trust-it-36cc5f982c3b" target='_blank'>
                        <Article imgUrl={vanity} date="Apr 26,2022" title="How to create a custom bitcoin vanity address from a third party without trust it?" />
                    </a>
                    <a href="https://medium.com/@bitcoin-uni/negative-auswirkungen-von-taproot-auf-die-privatsph%C3%A4re-von-bitcoin-anhand-der-erfahrungen-mit-dc11d6cf3e9b" target='_blank'>
                        <Article imgUrl={taproot} date="Apr 26,2022" title="Negative effects of Taproot on Bitcoin's privacy Based on the experience with SegWit" />
                    </a>
                    <a href="https://bitcoin-uni.de/blockchain-trilemma.html" target='_blank'>
                        <Article imgUrl={blog02} date="Apr 26,2022" title="What is the Blockchain Trilemma?" />
                    </a>
                    <a href="https://bitcoin-uni.de/bitcoin-blockchain-glossar.html" target='_blank'>
                        <Article imgUrl={blog03} date="Apr 26,2022" title="Bitcoin technical Glossar" />
                    </a>
                    <a href="https://bitcoin-uni.de/web-3-next-generation-internet.html" target='_blank'>
                        <Article imgUrl={blog04} date="Apr 26,2022" title="Web3.0 technologies" />
                    </a>
                    <a href="https://bitcoin-uni.de/decentrlized-applications-dapps.html" target='_blank'>
                        <Article imgUrl={blog05} date="Apr 26,2022" title="DAO's & dApps" />
                    </a>

                    <a href=" https://bitcoin-uni.de/blockain-technology-overview.html" target='_blank'>
                        <Article imgUrl={blog01} date="Apr 26,2022" title="Explore more Blockchain articles" />
                    </a>

                </div>
            </div>
        </div>
    )
}
