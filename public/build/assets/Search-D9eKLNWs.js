import{j as e}from"./app-DqRuztU1.js";import{N as i,E as l,a as n,b as c}from"./NoteLayout-Be3Io_Uj.js";import{u as d,T as h,A as u,U as x}from"./UserLayout-ByymoxLf.js";import"./useThemeContext-0_uWMxSf.js";import"./SecondaryBtn-De0HoaGe.js";const m=({note:r})=>{const{openDeleteModal:s,openArchiveModal:o,isEdited:t,startEditing:a}=d();return r==null?null:e.jsxs(e.Fragment,{children:[t==!1&&e.jsxs(i,{children:[e.jsx("button",{onClick:s,className:"cursor-pointer",children:e.jsx(h,{})}),e.jsx("button",{onClick:o,className:"cursor-pointer",children:e.jsx(u,{width:"18",height:"18"})}),e.jsx("button",{onClick:a,className:"text-primary-blue mr-2 cursor-pointer",children:"Edit Note"})]}),t?e.jsx(l,{note:r}):e.jsx(n,{note:r})]})};m.layout=r=>e.jsx(x,{title:"Note Flow - Search",header:"Show results for: ",children:e.jsx(c,{header:"Search",children:r})});export{m as default};
