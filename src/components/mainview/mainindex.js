import React from "react";
import MapView from './mapview';
//import '../../css/layout.scss';


class MainIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(

            <div className="basicLayout">
                <div className="basic-head" style={{height: "20px"}}>
                    <div className="bFTitle subtitle" style={{ marginTop: "2px" }}>
                    Toolbar
                    </div>
                </div>

                <div className="basic-body">
                    <MapView />
                </div>

                <div className="basic-Fbottom" style={{height:"26px"}}>
                    bot
                </div>

            </div>

        )
    }
}

export default MainIndex;