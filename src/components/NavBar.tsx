/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import logo from '../assets/logo.jpg';

export default () => {
    return (
    <div css={{
        background: '#403949',
        color: '#FFF',
        padding: '15px',
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <div>
            <img src={logo} alt="หมุดคณะราษฎร์ 2563 ไงว้อย" css={{ width: '100px'}} />
        </div>

        <div css={{ padding: '0 10px', fontSize: '1.5em', fontWeight: 'bold', textTransform: 'uppercase'}}>
            <div css={{ marginBottom: '10px'}}>
                <span>เพื่ออนาคตที่ดีกว่า</span>
            </div>

            <div>
                <span>For the better future</span>
            </div>
            
        </div>
        
    </div>
    );
}