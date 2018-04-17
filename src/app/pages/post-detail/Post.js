import React from "react"
import DashBoard from "./DashBoard"
class Post extends React.Component {
    render() {
        return (
            <section id="post-detail-section">
                 <h1>Section</h1>
                <div id="picture" />
                <DashBoard />
            </section>
        )
    }
}
export default Post