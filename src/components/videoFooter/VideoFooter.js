import React from 'react';
import "./VideoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({channel, description}) {
    return (
        <div className="videoFooter">
            <div className="videoFooter_text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="videoFooter_ticker">
                    <MusicNoteIcon className="videoFooter_icon"/>
                </div>
            </div>
            <img className="videoFooter_record" src="https://static.thenounproject.com/png/934821-200.png" alt=""/>
        </div>
    );
}

export default VideoFooter;