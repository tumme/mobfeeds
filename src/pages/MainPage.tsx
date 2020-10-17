/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import CurrentMeetingPointsContainer from '../components/CurrentMeetingPointsContainer';
import LiveContainer from '../components/LiveContainer';
import OfficialNewsContainer from '../components/OfficialNewsContainer';
import PhotoGalleryContainer from '../components/PhotoGalleryContainer';
import TransportationContainer from '../components/TransportationContainer';

export default () => {
    return (
    <div css={{ width: '100%', overflow: 'hidden' }}>
        <CurrentMeetingPointsContainer />
        {/* <div>
            <TransportationContainer />
        </div> */}
        <LiveContainer />
        <PhotoGalleryContainer />
        {/* <div>
            <OfficialNewsContainer />
        </div> */}
    </div>
    );
}