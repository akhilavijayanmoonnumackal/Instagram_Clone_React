import React from "react";
import './Timeline.css';
import Suggesstions from "./Suggestions";

const Timeline = () => {
    return (
        <div className="timeline">
            <div className="timeline__left">Timeline</div>
            <div className="timeline__right">
                <Suggesstions />
            </div>
        </div>
    )
}

export default Timeline;