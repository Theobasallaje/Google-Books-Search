(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(55)},30:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(21),c=n.n(o),r=n(58),i=n(60),s=n(59),u=n(22),m=n(5),E=n(6),d=n(8),h=n(7),f=n(9);n(30);var b=function(e){return l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("span",Object.assign({className:"save-btn justify-content-center"},e,{role:"button",tabIndex:"0"}),l.a.createElement("button",{style:{marginBottom:10},className:"btn btn-success"},"save")))};var v=function(e){var t=e.children;return l.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)},g=n(10),k=n.n(g),p={getBooks:function(){return k.a.get("/api/books")},deleteBook:function(e){return k.a.delete("/api/books/"+e)},saveBook:function(e){return k.a.post("/api/books",e)},getGoogleBooks:function(e){return k.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e.title))}};function y(e){var t=e.fluid,n=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},n)}function j(e){var t=e.fluid,n=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},n)}function B(e){var t=e.size,n=e.children;return l.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},n)}n(50);function O(e){var t=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},t))}function N(e){var t=e.children;return l.a.createElement("li",{className:"list-group-item"},t)}function x(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))}function w(e){return l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("button",Object.assign({},e,{style:{marginBottom:10},className:"btn btn-success"}),e.children))}var A=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={books:[],title:"",saved:!1},n.saveBook=function(e){p.saveBook(e).then().catch(function(e){return console.log(e)})},n.handleInputChange=function(e){var t=e.target,a=t.name,l=t.value;n.setState(Object(u.a)({},a,l))},n.handleFormSubmit=function(e){e.preventDefault(),n.state.title&&p.getGoogleBooks({title:n.state.title}).then(function(e){console.log(e),n.setState({books:e.data.items}),console.log(n.state.books)}).catch(function(e){return console.log(e)})},n}return Object(f.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return l.a.createElement(y,{fluid:!0},l.a.createElement(j,null,l.a.createElement(B,{size:"md-12"},l.a.createElement(v,null,l.a.createElement("h1",null,"Google Book Search")),l.a.createElement("form",null,l.a.createElement(x,{value:this.state.title,onChange:this.handleInputChange,name:"title",placeholder:"Title"}),l.a.createElement(w,{onClick:this.handleFormSubmit},"Search")))),this.state.books.length?l.a.createElement(O,null,this.state.books.map(function(t,n){return l.a.createElement(N,{key:n},l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("a",{target:"_blank",href:t.volumeInfo.canonicalVolumeLink},console.log(t.volumeInfo.canonicalVolumeLink),l.a.createElement("strong",null,t.volumeInfo.title," by ",t.volumeInfo.authors.join(", ")))),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("img",{src:"".concat(t.volumeInfo.imageLinks.thumbnail)})),l.a.createElement("div",null,l.a.createElement("p",null,"".concat(t.volumeInfo.description))),l.a.createElement(b,{onClick:function(){e.saveBook(t.volumeInfo),e.setState({saved:!0})}}))})):l.a.createElement("h3",{style:{textAlign:"center"}},"Enter a book to get results"))}}]),t}(a.Component);n(51);var S=function(e){return l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("span",Object.assign({className:"delete-btn justify-content-center"},e,{role:"button",tabIndex:"0"}),l.a.createElement("button",{style:{marginBottom:10},className:"btn btn-danger"},"Delete")))},I=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={books:[],title:""},n.loadBooks=function(){p.getBooks().then(function(e){return n.setState({books:e.data})}).catch(function(e){return console.log(e)})},n.deleteBook=function(e){p.deleteBook(e).then(function(e){return n.loadBooks()}).catch(function(e){return console.log(e)})},n}return Object(f.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return l.a.createElement(y,{fluid:!0},l.a.createElement(j,null,l.a.createElement(B,{size:"md-12 sm-12"},l.a.createElement(v,null,l.a.createElement("h1",null,"Saved Books")),this.state.books.length?l.a.createElement(O,null,this.state.books.map(function(t,n){return l.a.createElement(N,{key:n},l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("a",{target:"_blank",href:t.canonicalVolumeLink},console.log(t.canonicalVolumeLink),l.a.createElement("strong",null,t.title," by ",t.authors))),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("img",{src:"".concat(t.imageLinks[n].thumbnail)})),l.a.createElement("div",null,l.a.createElement("p",null,"".concat(t.description))),l.a.createElement(S,{onClick:function(){return e.deleteBook(t._id)}}))})):l.a.createElement("h3",null,"No Results to Display"))))}}]),t}(a.Component),C=n(57),z=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={book:{}},n}return Object(f.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.getBook(this.props.match.params.id).then(function(t){return e.setState({book:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return l.a.createElement(y,{fluid:!0},l.a.createElement(j,null,l.a.createElement(B,{size:"md-12"},l.a.createElement(v,null,l.a.createElement("h1",null,this.state.book.title," by ",this.state.book.author)))),l.a.createElement(j,null,l.a.createElement(B,{size:"md-10 md-offset-1"},l.a.createElement("article",null,l.a.createElement("h1",null,"Synopsis"),l.a.createElement("p",null,this.state.book.synopsis)))),l.a.createElement(j,null,l.a.createElement(B,{size:"md-2"},l.a.createElement(C.a,{to:"/"},"\u2190 Back to Authors"))))}}]),t}(a.Component);var D=function(){return l.a.createElement(y,{fluid:!0},l.a.createElement(j,null,l.a.createElement(B,{size:"md-12"},l.a.createElement(v,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};var L=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"Search"),l.a.createElement("a",{className:"navbar-brand",href:"/books/saved"},"Saved Books"))};var F=function(){return l.a.createElement(r.a,null,l.a.createElement("div",null,l.a.createElement(L,null),l.a.createElement(i.a,null,l.a.createElement(s.a,{exact:!0,path:"/",component:A}),l.a.createElement(s.a,{exact:!0,path:"/books",component:A}),l.a.createElement(s.a,{exact:!0,path:"/books/saved",component:I}),l.a.createElement(s.a,{exact:!0,path:"/books/:id",component:z}),l.a.createElement(s.a,{component:D}))))};c.a.render(l.a.createElement(F,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.e2094361.chunk.js.map