exports.ids=[3],exports.modules={20:function(e,t,r){"use strict";r.r(t);var s=r(3),n=r.n(s),c=r(2),u=r(0),i=function(e){var t=e.users;return t?Object(u.jsx)("div",{children:Object(u.jsx)("ul",{children:t.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)(c.Link,{to:"users/".concat(e.id),children:e.username})},e.id)}))})}):null},j=r(15),b=r(8),a=r(16),d=n.a.useEffect,O=Object(j.connect)((function(e){return{users:e.users.users}}),{getUsers:b.c})((function(e){var t=e.users,r=e.getUsers;return d((function(){t||r()}),[r,t]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(i,{users:t}),Object(u.jsx)(a.a,{resolve:r})]})})),l=function(e){var t=e.user,r=t.email,s=t.name,n=t.username;return Object(u.jsxs)("div",{children:[Object(u.jsxs)("h1",{children:[n," (",s,")"]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"e-mail:"})," ",r]})]})},o=function(e){var t=e.id,r=Object(j.useSelector)((function(e){return e.users.user})),n=Object(j.useDispatch)();return Object(a.c)((function(){return n(Object(b.b)(t))})),Object(s.useEffect)((function(){r&&r.id===parseInt(t,10)||n(Object(b.b)(t))}),[n,t,r]),r?Object(u.jsx)(l,{user:r}):null};t.default=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O,{}),Object(u.jsx)(c.Route,{path:"/users/:id",render:function(e){var t=e.match;return Object(u.jsx)(o,{id:t.params.id})}})]})}}};