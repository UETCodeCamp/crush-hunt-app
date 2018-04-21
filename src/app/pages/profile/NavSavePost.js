import React from 'react';


class NavSavePost extends React.Component {

    render() {
        const styleBox = {
            borderTop: 'solid',
            borderTopColor: 'black',
            borderTopWidth: 1
        };
        const { GotoSaved } = this.props;
        return (
            <div class="SaveAndPost">
                <div class="Post" style={!GotoSaved ? styleBox : {}} onClick={this.ChangePost}>
                    <span>BÀI VIẾT</span>
                </div>
                <div class="Save" style={GotoSaved ? styleBox : {}}  onClick={this.ChangeSave}>
                    <span>ĐÃ LƯU</span>
                </div>
            </div>
        );
    }
    ChangePost = (e) => {
        this.props.ChangeGotoSaved(e, false);
    }

    ChangeSave = (e) => {
        this.props.ChangeGotoSaved(e, true);
    }
}

export default NavSavePost;