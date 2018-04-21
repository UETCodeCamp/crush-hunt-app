import React from 'react';

class Contents extends React.Component {

    createArrImg = () => {
        const { arrContents } = this.props;
        let listLi = [];
        for (let i = 0; i < arrContents.length; i++) {
            listLi.push(<img src={arrContents[i]} alt="" />);
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