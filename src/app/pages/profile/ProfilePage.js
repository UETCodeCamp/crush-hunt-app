import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ProfilePage.css"
//import {Header} from "../../shared-components/header/Header.js";

class ProfilePage extends Component {
    render() {
        return (
            <div className="ProfilePage">
            <hr/>
                <h1>Profile</h1>
                <div id="base" class="">

                    {/* <!-- Unnamed (Group) --> */}
                    <div id="u0" class="ax_default" data-left="267" data-top="123" data-width="945" data-height="672">

                        {/* <!-- Unnamed (Group) --> */}
                        <div id="u1" class="ax_default phanTren" data-left="267" data-top="123" data-width="766" data-height="170">

                            {/* <!-- Unnamed (Image) --> */}

                            <div id="u2" class="ax_default image">
                                <img id="u2_img" class="img " src="https://instagram.fhan5-5.fna.fbcdn.net/vp/e57df598be74c9eeb73e95a882e38d8b/5B4FF915/t51.2885-19/s320x320/28155782_1825972840757969_9217512301303693312_n.jpg" />
                            </div>

                            <div className="info">
                                {/* <!-- Unnamed (Rectangle) --> */}
                                <div id="u3" class="ax_default box_1">
                                    <div id="u3_div" class=""></div>
                                    <div id="u3_text" class="text ">
                                        <p><span>Chỉnh sửa trang cá nhân</span></p>
                                    </div>
                                </div>

                                {/* <!-- Unnamed (Shape) --> */}
                                <div id="u4" class="ax_default icon">
                                    <img id="u4_img" class="img " src="https://cdn4.iconfinder.com/data/icons/app-custom-ui-1/48/Settings-128.png" />
                                </div>

                                {/* <!-- Unnamed (Rectangle) --> */}
                                <div id="u5" class="ax_default label">
                                    <div id="u5_div" class=""></div>
                                    <div id="u5_text" class="text ">
                                        <p><span>0 bài viết</span></p>
                                    </div>
                                </div>

                                {/* <!-- Unnamed (Rectangle) --> */}
                                <div id="u6" class="ax_default label">
                                    <div id="u6_div" class=""></div>
                                    <div id="u6_text" class="text ">
                                        <p><span>0 người theo dõi</span></p>
                                    </div>
                                </div>

                                {/* <!-- Unnamed (Rectangle) --> */}
                                <div id="u7" class="ax_default label">
                                    <div id="u7_div" class=""></div>
                                    <div id="u7_text" class="text ">
                                        <p><span>Đang theo dõi 0 người dùng</span></p>
                                    </div>
                                </div>

                                {/* <!-- Unnamed (Rectangle) --> */}
                                <div id="u8" class="ax_default heading_3">
                                    <div id="u8_div" class=""></div>
                                    <div id="u8_text" class="text ">
                                        <p><span>Duong Hong Anh</span></p>
                                    </div>
                                </div>

                                {/* <!-- Unnamed (Rectangle) --> */}
                                <div id="u9" class="ax_default heading_3">
                                    <div id="u9_div" class=""></div>
                                    <div id="u9_text" class="text ">
                                        <p><span>anhdh</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Unnamed (Group) --> */}
                        <div id="u10" class="ax_default phanDuoi" data-left="268" data-top="375" data-width="944" data-height="420">

                            {/* <!-- Unnamed (Rectangle) --> */}
                            <div id="u11" class="ax_default box_1">
                                <div id="u11_div" class=""></div>
                                <div id="u11_text" class="text ">
                                    <p><span>BÀI VIẾT</span></p>
                                </div>
                            </div>

                            {/* <!-- Unnamed (Rectangle) --> */}
                            <div id="u12" class="ax_default box_1">
                                <div id="u12_div" class=""></div>
                                <div id="u12_text" class="text ">
                                    <p><span>ĐÃ LƯU</span></p>
                                </div>
                            </div>

                            {/* <!-- Unnamed (Image) --> */}
                            <div id="u13" class="ax_default image">
                                <img id="u13_img" class="img " src="https://www.instagram.com/static/images/mediaUpsell.jpg/7e0cb2166ce8.jpg" />
                            </div>

                            {/* <!-- Unnamed (Rectangle) --> */}
                            <div id="u14" class="ax_default heading_3">
                                <div id="u14_div" class=""></div>
                                <div id="u14_text" class="text ">
                                    <p><span>Bắt đầu ghi và chia sẻ khoảnh khắc của bạn.</span></p>
                                </div>
                            </div>

                            {/* <!-- Unnamed (Rectangle) --> */}
                            <div id="u15" class="ax_default heading_3">
                                <div id="u15_div" class=""></div>
                                <div id="u15_text" class="text ">
                                    <p><span>Tải ứng dụng để chia sẻ ảnh hoặc video đầu tiên của bạn.</span></p>
                                </div>
                            </div>

                            {/* <!-- Unnamed (Image) --> */}
                            <div id="u16" class="ax_default image">
                                <img id="u16_img" class="img " src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_vietnamese-vi.png/e806481bc99e.png" />
                            </div>

                            {/* <!-- Unnamed (Image) --> */}
                            <div id="u17" class="ax_default image">
                                <img id="u17_img" class="img " src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_vietnamese-vi.png/585da63c67f8.png" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

ProfilePage.propTypes = {
    any: PropTypes.any
};

export default ProfilePage;