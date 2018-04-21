import React from 'react';


class Saved extends React.Component {


    createArrImg = () => {
        const { ArrSaves } = this.props;
        let listLi = [];
        for (let i = 0; i < ArrSaves.length; i++) {
            listLi.push(<img src={ArrSaves[i]} alt = "" />);
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