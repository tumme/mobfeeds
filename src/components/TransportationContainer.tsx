/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import LiveContainer from './LiveContainer';
import UnderDevelopment from './UnderDevelopment';

export default () => {
    return (
        <div>
            การคมนาคม/ขนส่งสาธารณะ
            <UnderDevelopment />
        </div>
    );

}

const TRAIN_STATUS = {
    OPEN: 'OPEN',
    CLOSED: 'CLOSED'
}

const train = {
    mrt: {
        blue: [
            {
                name: 'สวนจตุจักร',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'ลาดพร้าว',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'รัชดาภิเษก',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'สุทธิสาร',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'ห้วยขวาง',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'ศูนย์วัฒนธรรม',
                status: TRAIN_STATUS.CLOSED
            },

        ]
    }
}