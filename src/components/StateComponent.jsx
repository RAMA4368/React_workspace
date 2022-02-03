import React, {Component} from "react";

class StateComponent extends Component {
    
    //클래스 생성자
    constructor(props){
        //생성자 정의를 하면 props 전달
        super(props);

        //스테이트값은 꼭 초기화
        this.state={
            count:1,
            isTen:false,
        };
        //countUp 함수에서 this.state 객체 인식을 위해 꼭 바인딩을 해줘야 한다. 
        this.countUp = this.countUp.bind(this);
    }



    countUp(){
        //숫자 증가
        const countTemp = this.state.count + 1;
        let isTenTemp = this.state.isTen;

        //10 이상이면 true
        if(countTemp >= 10) isTenTemp = true;

        this.setState({
            count:countTemp,
            isTen:isTenTemp,
        });
        console.log("countUp 함수에서의 값 : " + this.state.count);
    }

    render(){
        return(
            <div>
                <p>숫자값 : {this.state.count}</p>
                <p>10 이상 : {String(this.state.isTen)}</p>
                <button onClick={this.countUp}>카운트</button>
            </div>
        );
    }

}
export default StateComponent;