import React from 'react';


class StatusFollow extends React.Component {

    render() {

        return (
            <div className="Info2">
                <div className="NumPost">
                    <span><b>0</b> bài viết</span>
                </div>
                <div className="NumFollow1">
                    <span><b>0</b> người theo dõi</span>
                </div>
                <div className="NumFollow2">
                    <span>Đang theo dõi <b>0</b> nguời dùng</span>
                </div>
            </div>
        );
    }

}

export default StatusFollow;