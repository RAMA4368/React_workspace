import React, {Component} from "react";
import PropTypes from "prop-types";

class CallbackComponent extends Component{
    render(){
        return (
            <div>
                {/* 부모에게 받은 프로퍼티 값 표시 */}
                <p>숫자값 : {this.props.count}</p>
                <p>10이상 : {String(this.props.isTen)}</p>
                {/* 콜백함수 */}
                <button onClick={this.props.countUp}>카운트</button>
            </div>
        );
    }
}

//프로퍼티 타입 설정 
CallbackComponent.propTypes = {
    count : PropTypes.number,
    isTen : PropTypes.bool,
    countUp : PropTypes.func,
};

export default CallbackComponent;