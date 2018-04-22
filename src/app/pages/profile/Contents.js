import React from 'react';

class Contents extends React.Component {

    createArrImg = () => {
        const { arrContents } = this.props;
        let listLi = [];
        for (let i = 0; i < arrContents.length; i++) {
            listLi.push(<img key ={i}  src={arrContents[i]} alt="" />);
        }
        return listLi;
    }

    render() {

        return (
            <div className="Main">
                <div className="Img">
                    {this.createArrImg()}
                </div>
            </div>

        );
    }

}

export default Contents;