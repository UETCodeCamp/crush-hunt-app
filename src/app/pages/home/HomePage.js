import "./HomePage.css";
import PropTypes from 'prop-types';
import React, { Component } from "react";
import Post from "./Post";

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listPost: [{
                userName: 'Cô Zô Dép',
                imgSrc: 'https://s.abcnews.com/images/Entertainment/HT_TSpelling_MEM_160101_1x1_1600.jpg',
                likeText: ['không ai thèm like'],
                timePost: 1523986145507,
                postText: "ahihihi tui dang ne!",
                topComments:[
                        {
                            userNameComment: 'ahihi1',
                            commentText: 'hehehe'
                        },
                        {
                            userNameComment: 'ahihi2',
                            commentText: 'hahaha'
                        }
                    ]

                ,
                comments:[
                        {
                            userNameComment: 'ahihi1',
                            commentText: 'hehehe'
                        },
                        {
                            userNameComment: 'ahihi2',
                            commentText: 'hahaha'
                        },
                        {
                            userNameComment:'noname',
                            commentText:'hahah eheheh'
                        }
                    ],
            }, {
                userName: 'Tui la ai',
                imgSrc: 'https://scontent.fhan5-3.fna.fbcdn.net/v/t1.0-9/30706179_985237394984694_513570529735606272_n.jpg?_nc_cat=0&oh=1ad1c706fdda579d1cdbaf9782094e7e&oe=5B7494DB',
                likeText: ['ahihi2'],
                timePost: 1523303045507,
                postText: "Phuong dep trai",

                topComments:[
                            {
                                userNameComment: 'ahihi1',
                                commentText: 'dep qua ne'
                            },
                            {
                                userNameComment: 'ahihi2',
                                commentText: 'ok hehe dep!'
                            }
                        ],
                comments:[
                            {
                                userNameComment: 'ahihi1',
                                commentText: 'de qua ne'
                            },
                            {
                                userNameComment: 'ahihi2',
                                commentText: 'ok hehe dep'
                            },
                            {
                                userNameComment:'noname',
                                commentText:'hahah eheheh'
                            }
                        ],

                }
            ],
        }
    }
    render() {

        var listPostData = this.state.listPost.map((e) => {
            return <Post dataPost={e} />;
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