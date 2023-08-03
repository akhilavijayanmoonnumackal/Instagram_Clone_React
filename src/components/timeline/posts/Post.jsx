import React from "react";
import './Post.css';
import { Avatar } from "@mui/material";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const Post = () => {
    return (
        <div className="post">
            <div className="post__header">
                <div className="post_headerAuthor">
                    <Avatar>R</Avatar>
                    akhila_ • <span>12hr</span>
                </div>
                <MoreHorizOutlinedIcon />
            </div>
            <div className="post__image">
                <img src="https://static.photocdn.pt/images/articles/2018/12/05/articles/2017_8/beginner_photography_mistakes-1.webp" alt="" />

            </div>
            <div className="post__footer">
                <div className="post__footerIcons">
                    <div className="post__iconsMain">
                        <FavoriteBorderOutlinedIcon className="postIcon" />
                        <ChatBubbleOutlineIcon className="postIcon" />
                        <TelegramIcon className="postIcon" />                     
                    </div>
                    <div className="post__iconSave">
                        <BookmarkBorderIcon className="postIcon" />
                    </div>
                </div>
                Liked by 21 people.
            </div>
        </div>
    )
}

export default Post;