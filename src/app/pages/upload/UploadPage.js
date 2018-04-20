import React, {Component} from "react";
import PropTypes from "prop-types";

import "./UploadPage.css"

class UploadPage extends Component {
    render() {
        return (
            <div className="UploadPage">
                <section className="Upload">

                    <div className="content">
                        <h1>UPLOAD IMAGE</h1>
                        <form>
                            <input className="link" placeholder="Link ảnh"/><button>Brower</button>
                        </form>
                        <div >
                            <img className="thumb" src="https://3.bp.blogspot.com/-tw-rSrfdYq8/V44qWz9DezI/AAAAAAAAAtQ/a_h_avH6RKEwnfN9KNAjarW5bybcilnowCLcB/s640/hinh-anh-girl-xinh-de-thuong-12.jpg"/>
                        </div>
                        <form className="input">


                            <input placeholder="Nói gì đó về bức ảnh"/>

                            <input placeholder="Thêm địa điểm check in"/>



                            <button>Đăng Ảnh</button>

                            <button>Hủy Bỏ</button>

                        </form>
                    </div>

                    <div className="inforUser">infor</div>
                </section>
            </div>
        );
    }
}

export default UploadPage;