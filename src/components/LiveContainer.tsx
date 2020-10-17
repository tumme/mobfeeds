/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';

export default () => {
    return (
        <div>
            <div css={{ textAlign: 'center', fontSize: '2em', fontWeight: 'bold', marginBottom: '20px'}}>Live</div>
            <div css={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                <div>
                    <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FVoiceOnlineTH%2Fvideos%2F1883483855159837%2F&show_text=false&width=560" width="560" height="315" scrolling="no" allowTransparency={true} allow="encrypted-media" allowFullScreen={true}></iframe>
                </div>
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/hZWrQX4Ezhw" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                </div>
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Zbt8I_gIiiE" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                </div>
            </div>
            
        </div>
    );

}