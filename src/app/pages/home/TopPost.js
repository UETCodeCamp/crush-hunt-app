import React , {Component} from "react";

class TopPost extends Component {
    render(){
        return <div className={'top-post'}>
            <div className={'acc'}>Cô Zô Dép</div>
            <div className={'top-label'}>Thánh Thính... </div>
            <div className={'top-list-item'}>
                <div className={'top-acc-pic-border'}>
                    <img className={'top-acc-pic'} src="https://cdn.shopify.com/s/files/1/2035/3607/products/bk_530x@2x.jpg?v=1520568785" alt={''}/>
                </div>
                <span className={'top-name'}>test name</span>
            </div>
        </div>;
    }

}

export  default TopPost;