import React from 'react';

class Contents extends React.Component {

    createArrImg = () => {
        const { ArrContents } = this.props;
        let listLi = [];
        for (let i = 0; i < ArrContents.length; i++) {
            listLi.push(<img src={ArrContents[i]} alt="" />);
        }
        return listLi;
    }

    render() {

        return (
            <div class="Main">
                <div class="Img">
                    {this.createArrImg()}
                </div>
            </div>

        );
    }

}

export default Contents;