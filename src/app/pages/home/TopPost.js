import React , {Component} from "react";

class TopPost extends Component {
    render(){
        const listPost = this.props.data.map((e,index)=>{
            return(
                <div key={index}>
                    <div className= 'top-acc-pic-border' >
                        <img className= 'top-acc-pic' src={e.url} alt={''}/>
                    </div>
                    <span className= 'top-name' >{e.owner.name}</span>
                </div>
            );
        });

        return <div className= 'top-post' >
            <div className= 'acc'>Bảng xếp hạng</div>
            <div className= 'top-label' >Thánh Thính... </div>
            <div className= 'top-list-item'>
                {listPost}
            </div>
        </div>;
    }

}

export  default TopPost;