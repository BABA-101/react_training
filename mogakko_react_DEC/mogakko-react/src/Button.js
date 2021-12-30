// src/Button.src

// Button 컴포넌트의 Button 함수는..  props이라는 객체를 인자로 받는다.
// 그리고 props의 onClick과 text를 사용.
// function Button(props) {
//     return <button onClick={props.onClick}>{props.text}</button>;
// }
// export default Button;

function Button({ text, onClick }) {
    return <button onClick={onClick}>{text}</button>;
}
export default Button;