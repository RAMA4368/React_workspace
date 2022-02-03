import React, {Component} from "react";
import PropTypes from "prop-types"; //프로퍼티 타입을 지정해주기 위해서

// ===============================================================
// class ChildComponent extends Component {
//     render(){
//         //text 프로퍼티 화면에 출력
//         return <div><h2>{this.props.text}</h2></div>
//     }
// }

// //프로퍼티 타입 지정
// ChildComponent.propTypes = {
//     text: PropTypes.string, // text 프로퍼티는 문자열 타입
// };
// ===============================================================
class ChildComponent extends Component{
    render(){
        // 7가지 데이터 타입 (이게 없으면 this.props를 매번 붙여서 사용해야 한다.)
        const {
            strVal,
            numVal,
            nodeVal,
            arrVal,
            objVal,
            funcVal,
            boolVal,
        } = this.props;
        const boolText = boolVal ? "트루" : "펄스";

        // 다양한 프로퍼티 데이터 타입을 화면에 출력
        return (
            <div>
                <p>문자 : {strVal}</p>
                <p>숫자 : {numVal}</p> 
                <p>노드 : {nodeVal}</p>
                <p>배열 : {arrVal}</p>
                <p>객체 : {objVal.name + objVal.age}</p>
                <p>함수 : {funcVal}</p>
                <p>불리언 : {boolText}</p>
            </div>
        );
    }
}

// 프로퍼티 타입 지정
ChildComponent.propTypes = {
    strVal : PropTypes.string,
    numVal : PropTypes.number,
    nodeVal : PropTypes.node,
    arrVal : PropTypes.arrayOf(PropTypes.string), // 문자열을 넣는 배열 타입 
    objVal : PropTypes.shape({
        //객체 프로퍼티는 shape 사용
        name : PropTypes.string,
        age: PropTypes.number,
    }),
    funcVal : PropTypes.func,
    boolVal : PropTypes.bool,
};


export default ChildComponent;