import React from "react"
import DashBoard from "./DashBoard"
class Post extends React.Component {
    render() {
        return (
            <section id="post-detail-section">
                <div className="wrap">
                 <div className="anh-post">
                    <img src="https://instagram.fhan2-1.fna.fbcdn.net/vp/285f25a4a63bb8726125075e26f045e5/5B52207A/t51.2885-15/e35/29738103_2044523352428058_1090909671570538496_n.jpg"/>
                 </div>
                <DashBoard />
                </div>
            </section>
        )
    }
}
export default Post