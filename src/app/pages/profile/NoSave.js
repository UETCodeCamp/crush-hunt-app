import React from 'react';


class NoSave extends React.Component {

    render() {

        return (
            <div class="Main">
                <div class="IconSave">
                    <img src="https://www.shareicon.net/data/256x256/2015/12/01/680523_button_512x512.png" alt="" />
                </div>
                <div class="SaveText">Lưu</div>
                <div class="MainText">
                    <div>Lưu ảnh và video mà bạn muốn xem lại. Sẽ không có ai được thông báo và chỉ mình bạn có thể xem nội dung mình đã lưu.</div>
                </div>
            </div>
        );
    }

}

export default NoSave;