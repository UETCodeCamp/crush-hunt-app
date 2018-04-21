import React from 'react';


class StatusFollow extends React.Component {

    render() {

        return (
            <div class="Info2">
                <div class="NumPost">
                    <span><b>0</b> bài viết</span>
                </div>
                <div class="NumFollow1">
                    <span><b>0</b> người theo dõi</span>
                </div>
                <div class="NumFollow2">
                    <span>Đang theo dõi <b>0</b> nguời dùng</span>
                </div>
            </div>
        );
    }

}

export default StatusFollow;