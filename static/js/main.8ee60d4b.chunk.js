(this["webpackJsonpweb-calc"]=this["webpackJsonpweb-calc"]||[]).push([[0],{20:function(t,e,n){t.exports=n.p+"static/media/tadadum.8304135c.mp3"},21:function(t,e,n){t.exports=n.p+"static/media/pik.9f1dbdbc.mp3"},22:function(t,e,n){t.exports=n.p+"static/media/bum.e42ea5ed.mp3"},28:function(t,e,n){t.exports=n(39)},33:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(14),c=n.n(o),i=(n(33),n(7)),u=n(15),l=n(16),s=n(26),p=n(25),f=n(3),d=n(4),g=n(41);function m(){var t=Object(f.a)(["\n    margin-top: 18px;\n    font-family: Lato;\n    font-size: 50px;\n    font-weight: 300;\n    text-align: right;\n    color: #ffffff;\n    padding-right: 28px;\n    word-break: break-all;\n"]);return m=function(){return t},t}function h(){var t=Object(f.a)(["\n    height: 100%;\n    font-family: Lato;\n    font-size: 18px;\n    letter-spacing: normal;\n    text-align: right;\n    color: #d98192;\n    padding-top: 28px;\n    padding-right: 28px;\n"]);return h=function(){return t},t}function x(){var t=Object(f.a)(["\n    width: 100%;\n    height: 140px;\n    background-color: #212121;\n    color: #ffffff;\n    display: flex;\n    flex-direction: column;\n"]);return x=function(){return t},t}var b=d.b.div(x()),v=d.b.div(h()),E=d.b.div(m()),k=function(t){var e=t.values,n=e.result;return console.log("result",n),(n>999999999||n.toString().length>10)&&(n=n.toExponential(4),console.log("val po toExp,",n,n.length,n.toString().length)),a.a.createElement(b,null,a.a.createElement(v,null,e.expression+e.operator+e.currentInput),a.a.createElement(E,null,n))};function I(){var t=Object(f.a)(["\n            background-color: #e62f89;\n            background-image: none;\n            color: #ffffff;\n            flex: 2;\n        "]);return I=function(){return t},t}function O(){var t=Object(f.a)(["\n            background-image: linear-gradient(to right, #f7f7f7, #f1f1f1);\n        "]);return O=function(){return t},t}function j(){var t=Object(f.a)(["\n            background-color: #9156e1;\n            background-image: none;\n            color: #ffffff;\n        "]);return j=function(){return t},t}function w(){var t=Object(f.a)(["\n    width: 92px;\n    max-height: 92px;\n    background-image: linear-gradient(to right, #ffffff, #f4f4f4);\n    font-family: Lato;\n    font-size: 23px;\n    font-weight: 300;\n    color: #212121;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 1;\n    cursor: pointer; \n    user-select: none;\n\n    :hover {\n        font-weight: 700;\n        border: 1px solid #cccccc;   \n    }\n\n    ","\n\n    ","\n\n    ","\n"]);return w=function(){return t},t}var C=d.b.div(w(),(function(t){return"violet"===t.color&&Object(d.a)(j())}),(function(t){return"dark"===t.color&&Object(d.a)(O())}),(function(t){return"pink"===t.color&&Object(d.a)(I())})),B=function(t){return a.a.createElement(C,{color:t.color,onClick:function(){return t.onButtonClick(t.children)}},t.children)};function S(){var t=Object(f.a)(["\n    display: flex;\n    height: 100%;\n    margin: 0;\n"]);return S=function(){return t},t}var y=d.b.div(S()),T=function(t){var e=t.calcPercentage,n=t.clearExpression,r=t.changeSign,o=t.addDecimal,c=t.addNumber,i=t.addOperator,u=t.evalueteExpression;return(a.a.createElement(a.a.Fragment,null,a.a.createElement(y,null,a.a.createElement(B,{color:"dark",onButtonClick:e},"%"),a.a.createElement(B,{color:"dark",onButtonClick:r},"+/-"),a.a.createElement(B,{color:"dark",onButtonClick:n},"C"),a.a.createElement(B,{color:"violet",onButtonClick:i}," / ")),a.a.createElement(y,null,a.a.createElement(B,{onButtonClick:c},"7"),a.a.createElement(B,{onButtonClick:c},"8"),a.a.createElement(B,{onButtonClick:c},"9"),a.a.createElement(B,{onButtonClick:function(){return i(" * ")},color:"violet"},"x")),a.a.createElement(y,null,a.a.createElement(B,{onButtonClick:c},"4"),a.a.createElement(B,{onButtonClick:c},"5"),a.a.createElement(B,{onButtonClick:c},"6"),a.a.createElement(B,{onButtonClick:i,color:"violet"}," - ")),a.a.createElement(y,null,a.a.createElement(B,{onButtonClick:c},"1"),a.a.createElement(B,{onButtonClick:c},"2"),a.a.createElement(B,{onButtonClick:c},"3"),a.a.createElement(B,{color:"violet",onButtonClick:i}," + ")),a.a.createElement(y,null,a.a.createElement(B,{onButtonClick:c},"0"),a.a.createElement(B,{onButtonClick:o},","),a.a.createElement(B,{color:"pink",onButtonClick:u},"="))))},L=n(20),D=n.n(L),N=n(21),P=n.n(N),z=n(22),A=n.n(z);function F(){var t=Object(f.a)(["\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    width: 100vw;\n    max-width: 368px;\n    max-height: 600px;\n    border-radius: 5px;\n    background-color: #ffffff;\n    overflow: hidden;\n"]);return F=function(){return t},t}function J(){var t=Object(f.a)(["\n    display: flex;\n    justify-content: center;\n    width: 100vw;\n    height: 100vh;\n    align-items: center;\n    background-image: linear-gradient(to right bottom, #9c5cd7, #f69175);\n"]);return J=function(){return t},t}var W=new Audio(D.a),M=new Audio(P.a),$=new Audio(A.a),q=d.b.div(J()),G=d.b.div(F()),H=function(t){Object(s.a)(n,t);var e=Object(p.a)(n);function n(t){var r;return Object(u.a)(this,n),(r=e.call(this,t)).isTotalInputTooLong=function(){return r.state.expression.toString().length+r.state.currentInput.toString().length>=49},r.addNumber=function(t){r.isTotalInputTooLong()||"0"!==r.state.currentInput&&(r.state.currentInput.length>9||(r.state.operator?r.setState({expression:r.state.expression+r.state.operator,currentInput:r.state.currentInput+t,operator:"",result:""}):r.setState({expression:r.state.expression,currentInput:r.state.currentInput+t,operator:"",result:""})))},r.addDecimal=function(){r.isTotalInputTooLong()||""!==r.state.currentInput&&-1===r.state.currentInput.indexOf(".")&&r.setState(Object(i.a)(Object(i.a)({},r.state),{},{currentInput:r.state.currentInput+"."}))},r.addOperator=function(t){r.isTotalInputTooLong()||""===r.state.expression&&""===r.state.currentInput&&""===r.state.result||(M.play(),r.state.operator?r.setState({expression:r.state.expression,currentInput:"",operator:t,result:r.state.result}):r.setState({expression:r.state.result||r.state.expression+r.state.currentInput,currentInput:"",operator:t,result:""}))},r.changeSign=function(){if(""!==r.state.currentInput){var t=r.state.currentInput;t=0===r.state.currentInput.indexOf("-")?t.substring(1):"-".concat(r.state.currentInput),r.setState(Object(i.a)(Object(i.a)({},r.state),{},{currentInput:t}))}},r.clearExpression=function(){W.play(),r.setState({expression:"",currentInput:"",operator:"",result:""})},r.calcPercentage=function(){r.setState(Object(i.a)(Object(i.a)({},r.state),{},{currentInput:r.state.currentInput/100}))},r.evalueteExpression=function(){""!==r.state.currentInput&&($.play(),r.setState({expression:"",operator:"",currentInput:"",result:parseFloat(Object(g.a)(r.state.expression+r.state.operator+r.state.currentInput).toFixed(6))}))},r.state={expression:"",currentInput:"",operator:"",result:""},r}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement(q,null,a.a.createElement(G,null,a.a.createElement(k,{values:this.state}),a.a.createElement(T,{calcPercentage:this.calcPercentage,changeSign:this.changeSign,clearExpression:this.clearExpression,addOperator:this.addOperator,addNumber:this.addNumber,addDecimal:this.addDecimal,evalueteExpression:this.evalueteExpression})))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.8ee60d4b.chunk.js.map