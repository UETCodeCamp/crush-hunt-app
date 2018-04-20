import React from "react"

class Comment extends React.Component{
    render(){
        return(
            <section className="sec-form">
                <form className="form-comment">
                    <textarea placeholder="Add a comment..." autoComplete="off"></textarea>
                </form>
            </section>
)
    }
}
export default Comment