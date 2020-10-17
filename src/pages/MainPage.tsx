/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import LiveContainer from '../components/LiveContainer';
import OfficialNewsContainer from '../components/OfficialNewsContainer';
import TransportationContainer from '../components/TransportationContainer';

export default () => {
    return (
    <div css={{ padding: '2em'}}>
        {/* <div>
            <TransportationContainer />
        </div> */}
        <div css={{ width: '100%', overflow: 'hidden' }}>
            <LiveContainer />
        </div>
        {/* <div>
            <OfficialNewsContainer />
        </div> */}
    </div>
    );
}