import React from "react"
import ReactDOM from "react-dom"
import PostDetail from "./PostDetail"
import "./postdetail.css"
class App extends React.Component{
    render(){
        return(
            <PostDetail/>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById("root"))