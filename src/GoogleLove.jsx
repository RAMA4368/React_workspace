import React, {Component} from "react";
import "./App.css";

class GoogleLove extends Component {
    render(){
        const imgSrc = 
            "https://www.google.co.kr/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
        const divtext = <h3 className="title">구글구글</h3>;
        return (
            <div className="googleLove-container">
                <img src={imgSrc}/>
                <div>이 로고는 {divtext} .</div>
            </div>
        );

            
    }
}
export default GoogleLove;