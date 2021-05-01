import React, {Component} from 'react';
// css - overflow : https://developer.mozilla.org/ko/docs/Web/CSS/overflow
// css - position : https://www.zerocho.com/category/CSS/post/5864f3b59f1dc000182d3ea1
class ScrollBox extends Component {
    
    scrollToBottom = () => {
        const {scrollHeight, clientHeight} = this.box;
        // const scrollHeight = this.box.scrollHeight; 와 같음
        // 비구조화 할당 문법!!
        this.box.scrollTop = scrollHeight - clientHeight;
    }
    
    render() {
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        };

        const innerStyle = {
            width : '100%',
            height : '650px',
            background : 'linear-gradient(white, black)'
        };

        return (
            <div
                style={style}
                ref={(ref) => {this.box=ref}}>
             <div style={innerStyle}/>
            </div>
        );
    }
}

export default ScrollBox;