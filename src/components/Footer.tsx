/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import githubLogo from '../assets/github-logo.jpeg';

export default () => {
    return (
        <div css={{ display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '20px'}}>
            <div>
                <a href="https://github.com/AimeTPGM/mobfeeds">
                    <img src={githubLogo} alt="ช่วยหน่อยนะ" css={{ width: '100px'}}  />
                </a>
            </div>
            <div>
            you know how to code?
            We need your help!
            </div>
            
            
            
        </div>
    );

}