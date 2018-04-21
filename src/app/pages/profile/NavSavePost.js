import React from 'react';


class NavSavePost extends React.Component {

    render() {
        const styleBox = {
            borderTop: 'solid',
            borderTopColor: 'black',
            borderTopWidth: 1
        };
        const { gotoSaved } = this.props;
        return (
            <div class="SaveAndPost">
                <div class="Post" style={!gotoSaved ? styleBox : {}} onClick={this.changePost}>
                    <span>BÀI VIẾT</span>
                </div>
                <div class="Save" style={gotoSaved ? styleBox : {}}  onClick={this.changeSave}>
                    <span>ĐÃ LƯU</span>
                </div>
            </div>
        );
    }
    changePost = (e) => {
        this.props.changeGotoSaved(e, false);
    }

    changeSave = (e) => {
        this.props.changeGotoSaved(e, true);
    }
}

export default NavSavePost;