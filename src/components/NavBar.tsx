/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import logo from '../assets/logo.jpg';
import githubLogoWhite from '../assets/github-logo-white.png';

export default () => {
    return (
        <div css={{background: '#403949',
        color: '#FFF',}}>

            <div css={{
                    
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


        <div css={{ display: 'flex', alignItems: 'center', padding: '20px',justifyContent: 'center'}}>
            <div css={{ margin: '0 10px'}}>
                <a href="https://github.com/AimeTPGM/mobfeeds">
                    <img src={githubLogoWhite} alt="ช่วยหน่อยนะ" css={{ width: '25px'}}  />
                </a>
            </div>
            <div css={{ textAlign: 'left', fontSize: '10px'}}>
            you know how to code?
            <br />
            We need your help!
            </div>
        </div>
        
    </div>
    );
}