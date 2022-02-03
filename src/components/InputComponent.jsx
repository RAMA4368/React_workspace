import React, { PureComponent } from "react";
import PropTypes from "prop-types";


class InputComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value, // 상위 프로퍼티로 초기화
            isError: false, // 입력 오류가 있는지
            isFirst: true, // 처음 입력창 포커스
        };

        // 콜백 함수 바인딩
        this.setRef = this.setRef.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
    }
    // ref 프로퍼티 연결
    setRef(ref) {
        this.ref = ref;
    }
    // 입력창 변경 이벤트
    handleChange(e) {
        const { name, onChange } = this.props;
        console.log(
            `handleChange() name : ${name} , e.target.value : ${e.target.value}`
        );

        // 콜백 함수가 있을 경우
        if (onChange) {
            // 한글 입력 체크
            const pattern_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
            let checkError = false;
            if (pattern_kor.test(e.target.value)) checkError = true;
            // 비밀번호 입력창은 문자 치환
            let strValue = String(e.target.value);
            if (name === "pass") {
                for (var i = 0; i < strValue.length - 1; i++) {
                    strValue = strValue.replace(strValue[i], "*");
                }
            }
            // 변경된 스테이트 값
            this.setState({ isError: checkError, value: strValue });
            // 상위 컴포넌트 콜백 함수 실행
            onChange(name, e.target.value);
        }
    }

    // 입력창에 포커스
    handleFocus(e) {
        // 처음 포커스시에는 입력창 초기화
        if (this.state.isFirst) {
            this.setState({ value: "", isFirst: false });
        }
    }
    
    // 컴포넌트 마운트
    componentDidMount() {
    // 포커스 맞추기
        if (this.props.autoFocus) {
            this.ref.focus();
        }
    }

    render() {
    // 프로퍼티 받아서 화면 출력
        const { label, name, type, errorMessage } = this.props;
        return (
            <label>
                {label}
            <input
                id={`input_${name}`}
                value={this.state.value}
                type={type}
                ref={this.setRef}
                onChange={this.handleChange}
                onFocus={this.handleFocus}
            />
            {this.state.isError && errorMessage}
            </label>
        );
    }
}

    InputComponent.propTypes = {
        label: PropTypes.string,
        name: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        type: PropTypes.oneOf(["text", "password", "number", "price"]),
        autoFocus: PropTypes.bool,
        errorMessage: PropTypes.string,
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
    };
    InputComponent.defaultProps = {
        value: "",
        type: "text",
        autoFocus: false,
        onChange: () => {},
        onFocus: () => {},
    };

    export default InputComponent;

