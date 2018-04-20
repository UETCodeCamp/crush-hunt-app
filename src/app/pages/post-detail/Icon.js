import React from "react"

class Icon extends React.Component{
    render(){
        return(
            <section className="tim">
                        <a href="#" id={this.props.liked ?  "liked" : "like" }>
                            <span onClick={this.props.toggleLike}/>
                        </a>
                        <a href="#" id="comment">
                            <span />
                        </a>
                        <a href="#" id={this.props.saved ? "saved" : "save"}>
                            <span onClick={this.props.toggleSave}/>
                        </a>
                    </section>
        )
    }
}
//liked có nghĩa là đã like thì hiện ra trái tim mày đỏ
//like có  nghĩa là chưa like thì hiện ra trái tim rỗng

//saved có nghĩa là đã save thì hiện ra cái bookmark đen
//save có nghĩa là chưa save thì hiện ra cái bookmark rỗng
export default Icon 