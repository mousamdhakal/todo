(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(6),r=a.n(c),o=(a(13),a(14),a(1)),l=a(2),i=a(3),u=a(4),m=a(7),h=function(e){var t=e.tasks.length?e.tasks.map((function(t){return n.a.createElement("div",{className:"todos__list-item",key:t.id},n.a.createElement("span",{className:t.complete?"todos__text todos__text--complete":"todos__text"},t.text),n.a.createElement("button",{className:"todos__button todos__button--delete",onClick:function(){return e.deleteTask(t.id)}},n.a.createElement("i",{className:"fas fa-trash-alt"})),n.a.createElement("button",{className:"todos__button todos__button--checkbox",onClick:function(){return e.changeTaskStatus(t.id)}},t.complete?n.a.createElement("i",{className:"far fa-check-square"}):n.a.createElement("i",{className:"far fa-square"})))})):n.a.createElement("div",{className:"todos__list-item"},n.a.createElement("span",{className:"todos__text"},"All tasks completed."));return n.a.createElement("div",{className:"todos__list"},t)},d=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({text:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.state.text&&(e.props.addTask(e.state),e.setState({text:""}))},e.state={text:""},e}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},n.a.createElement("input",{className:"form__input",type:"text",placeholder:"Add task here",onChange:this.handleChange,value:this.state.text}))}}]),a}(s.Component),f=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).deleteTask=function(t){var a=e.state.tasks.filter((function(e){return e.id!==t}));e.setState({tasks:a})},e.addTask=function(t){t.id=e.state.count;var a=[].concat(Object(m.a)(e.state.tasks),[t]);e.setState({tasks:a,count:e.state.count+1})},e.changeTaskStatus=function(t){var a=e.state.tasks.map((function(e){return e.id===t&&(e.complete=!e.complete),e}));e.setState({tasks:a})},e.state={tasks:[{id:1,text:"Make bed",complete:!0},{id:2,text:"Do assignment",complete:!1},{id:3,text:"Play football",complete:!1}],count:4},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=[];return t=this.props.show?this.state.tasks.filter((function(t){var a=t.text.toLowerCase(),s=e.props.searchText.toLowerCase();return a.includes(s)})):this.state.tasks,n.a.createElement(n.a.Fragment,null,n.a.createElement(d,{addTask:this.addTask}),n.a.createElement(h,{tasks:t,deleteTask:this.deleteTask,changeTaskStatus:this.changeTaskStatus}))}}]),a}(s.Component);var k=function(e){return n.a.createElement("form",{className:"search",onSubmit:function(e){return e.preventDefault()}},n.a.createElement("input",{className:"search__input",type:"text",onChange:e.handleChange,placeholder:"Search tasks here"}))},p=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({searchText:t.target.value}),e.state.searchText&&e.setState({showSearchResult:!0})},e.state={searchText:" ",showSearchResult:!1},e}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("header",{className:"header"},n.a.createElement("div",{className:"container clearfix"},n.a.createElement("h1",{className:"header__brand"},n.a.createElement("a",{className:"header__text",href:"/"},"Baki Kaam")),n.a.createElement(k,{handleChange:this.handleChange}))),n.a.createElement("section",{className:"todos"},n.a.createElement("div",{className:"container"},n.a.createElement(f,{show:this.state.showSearchResult,searchText:this.state.searchText}))))}}]),a}(s.Component);r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.aba1a834.chunk.js.map