import "./HomePage.css";
import PropTypes from 'prop-types';
import React , {Component} from "react";
import Post from "./Post";

class HomePage extends Component {

    constructor(props){
        super(props);
        this.state = {
            listPost:[{
                userName:'Cuong dang ne',
                imgSrc:'https://s.abcnews.com/images/Entertainment/HT_TSpelling_MEM_160101_1x1_1600.jpg',
                likeText:['tui like'],
                timePost:Date(2018, 11, 24, 10, 33, 30, 0),
                postText:"ahihihi tui dang ne!",
                listComments:[{
                        userNameComment:'ahihi1',
                        commentText:'hehehe'
                    },
                    {
                        userNameComment:'ahihi2',
                        commentText:'hahaha'
                    }],
            },{
                userName:'Tui la ai',
                imgSrc:'https://scontent.fhan5-3.fna.fbcdn.net/v/t1.0-9/30706179_985237394984694_513570529735606272_n.jpg?_nc_cat=0&oh=1ad1c706fdda579d1cdbaf9782094e7e&oe=5B7494DB',
                likeText:[ 'ahihi2'],
                timePost:Date(2018, 11, 24, 10, 33, 30, 0),
                postText:"Phuong dep trai",
                listComments:[{
                    userNameComment:'ahihi1',
                    commentText:'dep vcc!'
                },
                    {
                        userNameComment:'ahihi2',
                        commentText:'ok  dep??'
                    }],
            }],
        }
    }
    render() {

        var listPostData = this.state.listPost.map((e)=>{
            return <Post  dataPost={e}/>;
        });

        return (
            <div className={'HomePage'} >
                {listPostData}
            </div>
        )


    }
}

HomePage.propTypes = {
    history: PropTypes.object
};

export default HomePage;