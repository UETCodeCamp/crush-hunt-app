import React, { Component } from "react";
import PropTypes from "prop-types";
import "./HomePage.css";
import Content from "./Content";

class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">
                <div class="post">
                    <div className={'userDetails'}>
                        <span className="avatar" style={{ backgroundImage: "url('http://d38we5ntdyxyje.cloudfront.net/820641/profile/CRPQIVAX_avatar_medium_square.jpg')" }}>

                        </span>
                        <span className="userName">
                            Cô Dô Dép
                    </span>
                    </div>
                    <img src="https://s.abcnews.com/images/Entertainment/HT_TSpelling_MEM_160101_1x1_1600.jpg" />
                    <div className="likeButton">
                        <span className="unlike"></span>
                        <span className="comment"></span>
                    </div>
                    <div className="likeText">
                        chỉ mỗi Dép lai
                    </div>
                    <div className="postText">
                        Sinh nhật zui zẻ cùng với các pé iu của Dép íu đúi!
                    </div>
                    <div className="commentList">

                        <div className="comment">
                            <span className="userComment">Bà Dôn Xơn</span>
                            không like cho Dép nhé mn
                        </div>

                        <div className="comment">
                            <span className="userComment">Cô Dô Dép</span>
                            chị Dôn Xơn quá đáng lắm lun á 😢😢😢
                        </div>

                    </div>
                    <div className="time">
                        18 GIỜ TRƯỚC
                    </div>
                    <div className="commentForm">
                        <div className="commentInput">
                            <input placeholder="Nhập bình luận của bạn..." />
                        </div>
                        <button><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                    </div>
                </div>


                
            </div>
        );
    }
}

HomePage.propTypes = {
    history: PropTypes.object
};

export default HomePage;