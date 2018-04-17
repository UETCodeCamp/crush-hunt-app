import React from "react"

class Nav extends React.Component {
    render() {
        return (
            <nav id="post-detail-nav">
                <ul>
                    <li><a href="">Instagram</a></li>
                    <li><input type="text" placeholder="Search"/></li>
                    <li className="icon"><a href="">icon 1</a></li>
                    <li><a href="">icon 2</a></li>
                    <li><a href="">icon 3</a></li>
                </ul>
            </nav>

        )
    }
}

export default Nav