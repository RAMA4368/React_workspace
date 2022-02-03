import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import GoogleLove from './GoogleLove';
import ChildComponent from "./components/ChildComponent";
import StateComponent from './components/StateComponent';
import ScrollComponent from './components/ScrollComponent';

// 다음은 js 와 html을 함께쓰는 JSX문법
class App extends Component{
  
  //=====================state 개념 ====================================
  render(){
    return (
      <div>
        <ScrollComponent />
      </div>
    );
  }



















  
  //====================props 개념=================================================
  // render(){
  //   const imgSrc="https://www.google.co.kr/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
  //   const divText="구글구글";
    
  //   const str = "김수연"
  //   const num= 2022;
  //   const node = <h2>"코로나"</h2>;
  //   const arr = ["좀","배가","고프네요"];
  //   const obj = { name :"코로나나", age: 28};
  //   const func = function (name, age, hope){
  //     return name + age + hope ;
  //   }
  //   const bol = true;

  //   // <img src={imgSrc}/>
  //   // <div>이게 {divText} 입니다.</div>
  //   // {/* 만든 컴포넌트를 추가 (.jsx 파일) */}
  //   // <GoogleLove />
  //   // <ChildComponent text="부모컴포넌트 App에서 자식 컴포넌트에 text 문자열 프로퍼티 전달"/>
  //   return (
  //     <div>

  //       {/* 프로퍼티와 함께 컴포넌트 추가 */}
  //       <ChildComponent
  //           strVal={str}
  //           numVal={num}
  //           nodeVal={node}
  //           arrVal={arr}
  //           objVal={obj}
  //           funcVal={func(obj.name, obj.age,"호프")}
  //           boolVal={bol}
  //       />
  //     </div>
      
      
      
  //   );
    
  // }
}



// function App() {
//   return (
//     <div className="App">
//       <h1 className="title">Hello,</h1>
//       <img src="https://www.google.co.kr/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
//       <div>구글구글</div>
//     </div>

    
//   );
// }

export default App;
