import React from "react";
import './Sidenav.css';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Sidenav = () => {
    return (
        <div className="sidenav">
            <img className="sidenav__logo" src="https://www.pngkey.com/png/full/28-287308_instagram-logo-text-white.png"
            alt=""
            />
            <div className="sidenav__buttons">
                <button className="sidenav__button">
                    <HomeIcon />
                    <span>Home</span>
                </button>

                <button className="sidenav__button">
                    <SearchIcon />
                    <span>Search</span>
                </button>

                <button className="sidenav__button">
                    <ExploreIcon />
                    <span>Explore</span>
                </button>

                <button className="sidenav__button">
                    <SlideshowIcon />
                    <span>Reels</span>
                </button>

                <button className="sidenav__button">
                    <ChatIcon />
                    <span>Messages</span>
                </button>

                <button className="sidenav__button">
                    <FavoriteBorderIcon />
                    <span>Notifications</span>
                </button>

                <button className="sidenav__button">
                    <AddBoxOutlinedIcon />
                    <span>Create</span>
                </button>

                <button className="sidenav__button">
                    <AccountCircleOutlinedIcon />
                    <span>Profile</span>
                </button>
            </div> 
            <div className="sidenav__more">
                <button className="sidenav__button">
                    <MenuOutlinedIcon />
                    <span>More</span>
                </button>
            </div>
        </div>
    )
}

export default Sidenav;