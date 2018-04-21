import React from 'react';


class Saved extends React.Component {


    createArrImg = () => {
        const { arrSaves } = this.props;
        let listLi = [];
        for (let i = 0; i < arrSaves.length; i++) {
            listLi.push(<img src={arrSaves[i]} alt = "" />);
        }
        return listLi;
    }

    render() {

        return (
            <div class="Main">
                <div class="Ramrm">
                    <span>Chỉ mình bạn có thể xem mục mình đã lưu</span>
                </div>
                <div class="ImagePost">
                    {this.createArrImg()}
                </div>
            </div>
        );
    }

}

export default Saved;