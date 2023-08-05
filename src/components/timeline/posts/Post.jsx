import React from "react";
import './Post.css';
import { Avatar } from "@mui/material";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const Post = ({user, postImage, likes, timestamp}) => {
    return (
        <div className="post">
            <div className="post__header">
                <div className="post_headerAuthor">
                    <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
                    <h4 className="user">{user}</h4> • <span>{timestamp}</span>
                </div>
                <MoreHorizOutlinedIcon />
            </div>
            <div className="post__image">
                <img src={postImage} alt="" />

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
                Liked by {likes} people.
            </div>
        </div>
    )
}

export default Post;