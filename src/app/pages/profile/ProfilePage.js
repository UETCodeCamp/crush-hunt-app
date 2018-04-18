import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ProfilePage.css"
// import {Header} from "../../shared-components/header/Header.js";

class ProfilePage extends Component {
    render() {
        return (
            <div className="ProfilePage">
                <main class="_8fi2q _2v79o " role="main">
                    <article class="_mesn5">
                        <header class="_mainc ">
                            <div class="_b0acm">
                                <div class="_qdmzb">
                                    <div class="_62ai2">
                                        <button class="_3xjwv " title="Thêm ảnh đại diện">
                                            <img alt="Thêm ảnh đại diện" class="_cuacn" src="https://scontent-ort2-1.cdninstagram.com/vp/f17e1275a70fc32e93cbf434ddc32bcd/5B6CCC7A/t51.2885-19/11906329_960233084022564_1448528159_a.jpg" />
                                        </button>
                                        <div>
                                            <form enctype="multipart/form-data"><input type="file" accept="image/jpeg" class="_l8al6" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <section class="_o6mpc">
                                <div class="_ienqf">
                                    <h1 class="_rf3jb notranslate" title="anhdh169">anhdh169</h1>
                                    <a class="_l9ml9 " href="/accounts/edit/">
                                        <span class="_ov9ai">
                                            <button class="_qv64e    _t78yp     _r9b8f    _njrw0   ">Chỉnh sửa trang cá nhân</button>
                                        </span>
                                    </a>
                                    <div class="_1ekh3">
                                        <button class="_q8y0e coreSpriteMobileNavSettings _8scx2">Tùy chọn</button>
                                    </div>
                                </div>
                                <ul class="_h9luf ">
                                    <li class="_bnq48 ">
                                        <span class="_t98z6 ">
                                            <span class="_fd86t ">0</span> bài viết</span>
                                    </li>
                                    <li class="_bnq48 ">
                                        <span class="_t98z6 ">
                                            <span class="_fd86t " title="0">0</span> người theo dõi</span>
                                    </li>
                                    <li class="_bnq48 ">
                                        <span class="_t98z6 ">Đang theo dõi <span class="_fd86t ">0</span> người dùng</span>
                                    </li>
                                </ul>
                                <div class="_tb97a"><h1 class="_kc4z2">Duong Hong Anh</h1>  </div>
                            </section>


                        </header>

                        <div class="_2e96w">
                            <a class="_t7nuu _sb9lc" href="/anhdh169/">
                                <div class="   ">BÀI VIẾT</div>
                            </a>
                            <a class="_t7nuu " href="/anhdh169/saved/">
                                <div class="   ">ĐÃ LƯU</div>
                            </a>
                        </div>

                        <div class="_gm4bh">
                            <div class="_i64lo">
                                <img class="_rhmjh" src="https://www.instagram.com/static/images/mediaUpsell.jpg/7e0cb2166ce8.jpg" />
                            </div>
                            <div class="_hrzod">
                                <div class="_4ae27">
                                    <h2 class="_4zqgb">Bắt đầu ghi và chia sẻ khoảnh khắc của bạn.</h2>
                                    <h3 class="_djd7s">Tải ứng dụng để chia sẻ ảnh hoặc video đầu tiên của bạn.</h3>
                                    <div class="_8kcb8">
                                        <a class="_o7vmf" href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.profilePage.badge&amp;mt=8">
                                            <img class="_8a10v" alt="Có sẵn trên App Store" src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_vietnamese-vi.png/e806481bc99e.png" />
                                        </a>
                                        <a class="_o7vmf" href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DprofilePage%26utm_medium%3Dbadge">
                                            <img class="_8a10v" alt="Có sẵn trên Google Play" src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_vietnamese-vi.png/585da63c67f8.png" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </main>
            </div>
        );
    }
}

ProfilePage.propTypes = {
    any: PropTypes.any
};

export default ProfilePage;