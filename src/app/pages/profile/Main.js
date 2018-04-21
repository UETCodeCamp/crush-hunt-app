import React from 'react';
import NoContent from "./NoContent.js";
import Contents from "./Contents.js";
import Saved from "./Saved.js";
import NoSave from "./NoSave.js";

class Main extends React.Component {

    render() {
        const { ArrContents } = this.props;
        const { ArrSaves } = this.props;
        const {GotoSaved} = this.props;
        
        if(!GotoSaved){
            if (ArrContents.length === 0) {
                return (<NoContent />);
            }
            else {               
                return (<Contents ArrContents={this.props.ArrContents}/>);
            }
    
        }
        else{
            if (ArrSaves.length === 0) {
                return (<NoSave />);
            }
            else {
                return (<Saved ArrSaves={this.props.ArrSaves}/>);
            }
        }
    }

}

export default Main;