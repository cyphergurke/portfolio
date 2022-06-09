import React from 'react';

import './brand.css';
import {
    solidity,
    react,
    btcpay,
    rootstock,
    blockstream,
    elements,
    ipfs,
    skynet,
} from './imports';

export const Brand = () => {
    return (
        <> <div id='possibility'>
            <div className='dweb__brand-heading'>
                <h2 className=' gradient__text'>Technologies</h2>
            </div>
            <div className="dweb__brand section__padding">

                <div >
                    <img src={solidity} alt="solidity" />
                </div>
                <div >
                    <img src={react} alt="atlassian" />
                </div>

                <div >
                    <img src={rootstock} alt="shopify" />
                </div>
                <div >
                    <img src={blockstream} alt="shopify" />
                </div>
                <div >
                    <img src={elements} alt="dropbox" />
                </div>
                <div >
                    <img src={ipfs} alt="dropbox" />
                </div>
                <div >
                    <img src={skynet} alt="dropbox" style={{ height: 100 }} />
                </div>
                <div >
                    <img src={btcpay} alt="dropbox" />

                </div>
            </div>
        </div>
        </>
    );
}


