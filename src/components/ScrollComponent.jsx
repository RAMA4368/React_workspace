import React from "react";

class ScrollComponent extends React.PureComponent{
    constructor(props){
        super(props);
        this.state={
            listEnd:20,//초기에 리스트 20개 시작
            listPlus:10, //스크롤을 내리면 10개씩 추가
        };

        //콜백함수 바인딩
        this.setRef = this.setRef.bind(this);
        this.checkScroll = this.checkScroll.bind(this);
    }

    //ref 프로퍼티 연결
    setRef(ref){
        this.ref = ref;
    }

    //스크롤 위치 체크
    checkScroll(){
        const posBottom = this.ref.getBoundingClientRect().bottom;
        const winHeight = window.innerHeight;

        console.log(`posBottom : ${posBottom}, winHeight:${winHeight}`);

        //스크롤이 내려오면 리스트 추가
        if(posBottom < winHeight){
            this.setState({listEnd: this.state.listEnd + this.state.listPlus});
        }

    }


    //컴포넌트가 마운트 됬을때
    componentDidMount(){
        //이벤트 리스너에 체크함수 연결
        window.addEventListener("scroll", this.checkScroll);
        this.checkScroll();
    }

    //컴포넌트가 해체됬을때
    componentWillUnmount(){
        //이벤트 리스너에서 삭제
        window.removeEventListener("scroll", this.checkScroll);
    }

    render(){
        const listComponent = [];
        for(var i=1;i<=this.state.listEnd;i++){
            listComponent.push(<h1 key={i}>리스트 컴포넌트{i}</h1>);
        }
        return <div ref={this.setRef}>{listComponent}</div>
    }

}
export default ScrollComponent;