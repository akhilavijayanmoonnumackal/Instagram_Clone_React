import React from "react";
import './Suggestions.css';
import { Avatar } from "@mui/material";

const Suggesstions = () => {
    return (
        <div className="suggestions">
            <div className="suggestions__title">Suggested for you</div>
            <div className="suggestions__usernames">
                <div className="suggestions__username">
                    <div className="username__left">
                        <span className="avatar">
                            <Avatar>R</Avatar>
                        </span>
                        <div className="username__info">
                            <span className="username">akhila_</span>
                            <span className="relation">New to Instagram</span>
                        </div>
                    </div>
                    <button className="follow__button">Follow</button>
                </div>

                <div className="suggestions__username">
                    <div className="username__left">
                        <span className="avatar">
                            <Avatar>R</Avatar>
                        </span>
                        <div className="username__info">
                            <span className="username">akhila_</span>
                            <span className="relation">New to Instagram</span>
                        </div>
                    </div>
                    <button className="follow__button">Follow</button>
                </div>

                <div className="suggestions__username">
                    <div className="username__left">
                        <span className="avatar">
                            <Avatar>R</Avatar>
                        </span>
                        <div className="username__info">
                            <span className="username">akhila_</span>
                            <span className="relation">New to Instagram</span>
                        </div>
                    </div>
                    <button className="follow__button">Follow</button>
                </div>
                <div className="suggestions__footer">
                    About . Help . Press . API . Jobs . Privacy . Terms.<br/> Locations . Language . Meta Verified
                    <p>© 2023 INSTAGRAM FROM META</p>
                </div>
            </div>
        </div>
    )
}

export default Suggesstions;