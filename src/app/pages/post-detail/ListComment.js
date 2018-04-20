import React from "react"

class ListComment extends React.Component {
    render() {
        return (
            <li className="item">
                <a className="anhcanhan">
                    Oppagou
                </a>
                <span className="text">
                    <span>{this.props.comment}</span>
                </span>
            </li>

        )
    }
}

export default ListComment