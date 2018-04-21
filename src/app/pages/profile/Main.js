import React from 'react';
import NoContent from "./NoContent.js";
import Contents from "./Contents.js";
import Saved from "./Saved.js";
import NoSave from "./NoSave.js";

class Main extends React.Component {

    render() {
        const { arrContents } = this.props;
        const { arrSaves } = this.props;
        const {gotoSaved} = this.props;
        
        if(!gotoSaved){
            if (arrContents.length === 0) {
                return (<NoContent />);
            }
            else {               
                return (<Contents arrContents={this.props.arrContents}/>);
            }
    
        }
        else{
            if (arrSaves.length === 0) {
                return (<NoSave />);
            }
            else {
                return (<Saved arrSaves={this.props.arrSaves}/>);
            }
        }
    }

}

export default Main;