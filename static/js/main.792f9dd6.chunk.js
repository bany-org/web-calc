(this["webpackJsonpweb-calc"]=this["webpackJsonpweb-calc"]||[]).push([[0],{24:function(t,e,n){t.exports=n(35)},29:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(13),c=n.n(a),u=(n(29),n(14)),i=n(15),l=n(22),s=n(21),f=n(3),d=n(4),p=n(37);function m(){var t=Object(f.a)(["\n    margin-top: 18px;\n    font-family: Lato;\n    font-size: 50px;\n    font-weight: 300;\n    text-align: right;\n    color: #ffffff;\n    padding-right: 28px;\n"]);return m=function(){return t},t}function h(){var t=Object(f.a)(["\n    font-family: Lato;\n    font-size: 18px;\n    letter-spacing: normal;\n    text-align: right;\n    color: #d98192;\n    padding-top: 28px;\n    padding-right: 28px;\n"]);return h=function(){return t},t}function g(){var t=Object(f.a)(["\n    width: 368px;\n    height: 140px;\n    background-color: #212121;\n    color: #ffffff;\n    display: flex;\n    flex-direction: column;\n"]);return g=function(){return t},t}var b=d.b.div(g()),x=d.b.div(h()),v=d.b.div(m()),k=function(t){var e=t.values;return(o.a.createElement(b,null,o.a.createElement(x,null,e.expression+e.operator+e.currentInput),o.a.createElement(v,null,e.result)))};function E(){var t=Object(f.a)(["\n            background-color: #e62f89;\n            background-image: none;\n            color: #ffffff;\n            flex: 2;\n        "]);return E=function(){return t},t}function I(){var t=Object(f.a)(["\n            background-image: linear-gradient(to right, #f7f7f7, #f1f1f1);\n        "]);return I=function(){return t},t}function O(){var t=Object(f.a)(["\n            background-color: #9156e1;\n            background-image: none;\n            color: #ffffff;\n        "]);return O=function(){return t},t}function C(){var t=Object(f.a)(["\n    width: 92px;\n    height: 92px;\n    background-image: linear-gradient(to right, #ffffff, #f4f4f4);\n    font-family: Lato;\n    font-size: 23px;\n    font-weight: 300;\n    color: #212121;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 1;\n    cursor: pointer;\n\n    :hover {\n        font-weight: 700;\n    }\n\n    ","\n\n    ","\n\n    ","\n"]);return C=function(){return t},t}var B=d.b.div(C(),(function(t){return"violet"===t.color&&Object(d.a)(O())}),(function(t){return"dark"===t.color&&Object(d.a)(I())}),(function(t){return"pink"===t.color&&Object(d.a)(E())})),j=function(t){return o.a.createElement(B,{color:t.color,onClick:function(){return t.onButtonClick(t.children)}},t.children)};function w(){var t=Object(f.a)(["\n    display: flex;\n"]);return w=function(){return t},t}function y(){var t=Object(f.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 368px;\n    height: 600px;\n    border-radius: 5px;\n    background-color: #ffffff;\n    overflow: hidden;\n"]);return y=function(){return t},t}function N(){var t=Object(f.a)(["\n    display: flex;\n    justify-content: center;\n    width: 100vw;\n    height: 100vh;\n    align-items: center;\n    background-image: linear-gradient(to right bottom, #9c5cd7, #f69175);\n"]);return N=function(){return t},t}var S=d.b.div(N()),z=d.b.div(y()),L=d.b.div(w()),D=function(t){Object(l.a)(n,t);var e=Object(s.a)(n);function n(t){var r;return Object(u.a)(this,n),(r=e.call(this,t)).addNumber=function(t){if(console.log("addNumber",r.state),"0"!==r.state.currentInput){var e=r.state.result;""!==r.state.result&&(e=""),r.state.operator?r.setState({expression:r.state.expression+r.state.operator,currentInput:r.state.currentInput+t,operator:"",result:e}):r.setState({expression:r.state.expression,currentInput:r.state.currentInput+t,operator:"",result:e}),console.log("addNumber",r.state)}},r.addDecimal=function(t){console.log("add decimal",r.state),""!==r.state.currentInput&&-1===r.state.currentInput.indexOf(".")&&r.setState({expression:r.state.expression,currentInput:r.state.currentInput+".",operator:r.state.operator,result:r.state.result})},r.addOperator=function(t){console.log("add operator",r.state),"+/-"!==t&&"%"!==t&&r.state.operator!==t&&(""===r.state.expression&&""===r.state.currentInput&&""===r.state.result||(r.state.operator?r.setState({expression:r.state.expression,currentInput:"",operator:t,result:r.state.result}):r.setState({expression:r.state.result||r.state.expression+r.state.currentInput,currentInput:"",operator:t,result:r.state.result})))},r.changeSign=function(){if(console.log("change sign of currentInput"),""!==r.state.currentInput){var t=r.state.currentInput;0===r.state.currentInput.indexOf("-")&&(console.log("changed",t),t=t.substring(1)),-1===r.state.currentInput.indexOf("-")&&(t="-".concat(r.state.currentInput)),r.setState({expression:r.state.expression,currentInput:t,operator:r.state.operator,result:r.state.result})}},r.clearExpression=function(){r.setState({expression:"",currentInput:"",operator:"",result:""})},r.evalueteExpression=function(){""!==r.state.currentInput&&r.setState({expression:"",operator:"",currentInput:"",result:Object(p.a)(r.state.expression+r.state.operator+r.state.currentInput)})},r.state={expression:"",currentInput:"",operator:"",result:""},r}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return(o.a.createElement(S,null,o.a.createElement(z,null,o.a.createElement(k,{values:this.state}),o.a.createElement(L,null,o.a.createElement(j,{color:"dark",onButtonClick:this.addOperator},"%"),o.a.createElement(j,{color:"dark",onButtonClick:this.changeSign},"+/-"),o.a.createElement(j,{color:"dark",onButtonClick:this.clearExpression},"C"),o.a.createElement(j,{color:"violet",onButtonClick:this.addOperator}," / ")),o.a.createElement(L,null,o.a.createElement(j,{onButtonClick:this.addNumber},"7"),o.a.createElement(j,{onButtonClick:this.addNumber},"8"),o.a.createElement(j,{onButtonClick:this.addNumber},"9"),o.a.createElement(j,{onButtonClick:function(){return t.addOperator(" * ")},color:"violet"},"x")),o.a.createElement(L,null,o.a.createElement(j,{onButtonClick:this.addNumber},"4"),o.a.createElement(j,{onButtonClick:this.addNumber},"5"),o.a.createElement(j,{onButtonClick:this.addNumber},"6"),o.a.createElement(j,{onButtonClick:this.addOperator,color:"violet"}," - ")),o.a.createElement(L,null,o.a.createElement(j,{onButtonClick:this.addNumber},"1"),o.a.createElement(j,{onButtonClick:this.addNumber},"2"),o.a.createElement(j,{onButtonClick:this.addNumber},"3"),o.a.createElement(j,{color:"violet",onButtonClick:this.addOperator}," + ")),o.a.createElement(L,null,o.a.createElement(j,{onButtonClick:this.addNumber},"0"),o.a.createElement(j,{onButtonClick:this.addDecimal},","),o.a.createElement(j,{color:"pink",onButtonClick:this.evalueteExpression},"=")))))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.792f9dd6.chunk.js.map