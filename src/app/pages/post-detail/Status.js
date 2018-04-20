import React from "react"
import {Link} from 'react-router-dom'
class Status extends React.Component{
    render(){
        return(
            <div className="status">
                <ul className="list">
                    <li className="item">
                        <Link to="/profile" className="user-name">OppaGou</Link>
                        <span className="text">
                            <span>đăng để nhớ địa chỉ của cửa hàng thôi mà :3</span>
                        </span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Status