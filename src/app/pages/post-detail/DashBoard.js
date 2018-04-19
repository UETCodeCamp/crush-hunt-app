import React from "react"

class DashBoard extends React.Component{
    render(){
        return(
            <article id="post-detail-article">
                <div className="wrap1">
                    <header>
                        <div className="profile-img">
                            <a href=""><img src="https://instagram.fhan2-1.fna.fbcdn.net/vp/4ed5634701aa7964a2710d69d8451c9c/5B5302B8/t51.2885-19/s150x150/24254205_911344325707048_4014047830359408640_n.jpg"/></a>
                        </div>
                        <div className="profile">
                            <a className="user-name">OppaGou</a>
                        </div>
                        <div className="cham">
                            <span>•</span>
                        </div>
                        <div className="following">
                            <a>Following</a>
                        </div>
                    </header>
                    <div className="status">
                        <ul className="list">
                            <li className="item">
                                <a className="anhcanhan">
                                    Oppagou
                                </a>
                                <span className="text">
                                    <span>đăng để nhớ địa chỉ của cửa hàng thôi mà :3</span>
                                </span>
                            </li>
                        </ul>
                    </div> {/*end ul*/}
                    <section className="tim">
                        <a id="unlike">
                            <span />
                        </a>
                        <a id="comment">
                            <span />
                        </a>
                        <a id="save">
                            <span />
                        </a>
                    </section>
                    <section className="soluonglike">
                        <div>
                            <a>
                                <span>12</span>
                                likes
                            </a>
                        </div>
                    </section>
                    <div className="dayago">
                        <a>
                            <time className="time">7 days ago</time>
                        </a>
                    </div>
                    <section className="sec-form">
                        <form className="form-comment">
                            <textarea placeholder="Add a comment..." autoComplete="off"></textarea>
                        </form>
                    </section>
                    <div className="bacham">
                        <button>
                            <span />
                        </button>
                    </div>
                </div>
            </article>

        )
    }
}

export default DashBoard