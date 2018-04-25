import React, {Component} from "react";
import "./RightMenu.css";

class RightMenu extends Component {
    render () {

        const {listLink} = this.props;

        console.log(listLink);

        return (
            <div className="RightMenu">
                <ul>
                    {
                        listLink.map((data, index) => {
                            return (
                                <li>
                                    <a
                                        className={data.active ? "active" : ""}
                                        href={data.link}
                                    >
                                        {data.text}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default RightMenu;