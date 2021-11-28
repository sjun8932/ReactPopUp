import React, {Component} from "react";

class PopupContent extends Component {
    render(){
        return(
            <div className="dimmed_layer_wrapper">
                <div className="full_layer">
                    <div className="common_alert">
                        <h2>팝업 제목입니다 😂😂</h2>
                        <div>팝업 내용입니다.</div>
                        <div>
                            <button type="button" onClick={this.props.onClose}>close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopupContent;