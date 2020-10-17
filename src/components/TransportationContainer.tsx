/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import React from 'react'
import LiveContainer from './LiveContainer'
import UnderDevelopment from './UnderDevelopment'

export default () => {
    return (
        <div>
            การคมนาคม/ขนส่งสาธารณะ
            <UnderDevelopment/>
        </div>
    )

}

const TRAIN_STATUS = {
    OPEN: 'OPEN',
    CLOSED: 'CLOSED'
}
const train = [
    {
        type: 'MRT',
        lineName: 'สีน้ำเงิน',
        stations: [
            {
                name: 'ท่าพระ',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'จรัญฯ 13',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'ไฟฉาย',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'บางขุนนนท์',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'บางยี่ขัน',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'สิรินธร',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'บางพลัด',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'บางอ้อ',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'บางโพ',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'เตาปูน',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'บางซื่อ',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'กำแพงเพชร',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'สวนจตุจักร',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'พหลโยธิน',
                status: TRAIN_STATUS.CLOSED
            }, {
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
                name: 'ศูนย์วัฒนธรรมแห่งประเทศไทย',
                status: TRAIN_STATUS.CLOSED
            },

            {
                name: 'พระราม 9',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'เพชรบุรี',
                status: TRAIN_STATUS.CLOSED
            },

            {
                name: 'สุขุมวิท',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'ศูนย์การประชุมแห่งชาติสิริกิติ์',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'คลองเตย',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'ลุมพินี',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'สีลม',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'สามย่าน',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'หัวลำโพง',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'วัดมังกร',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'สามยอด',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'สนามไชย',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'อิสรภาพ',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'บางไผ่',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'บางหว้า',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'เพชรเกษม 48',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'ภาษีเจริญ',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'บางแค',
                status: TRAIN_STATUS.CLOSED
            },
            {
                name: 'หลักสอง',
                status: TRAIN_STATUS.CLOSED
            },


        ]
    }
]
