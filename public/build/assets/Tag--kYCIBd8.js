import{j as s}from"./app-BaDJD8Gb.js";import{N as n,E as l,a as c,b as d}from"./NoteLayout-BtAIUYps.js";import{u,T as m,A as x,U as h}from"./UserLayout-CGHAG_XQ.js";import{u as j}from"./useThemeContext-Vst7eiWu.js";import"./SecondaryBtn-CJ0F8p5i.js";const p=({note:t})=>{const{openDeleteModal:r,openArchiveModal:o,isEdited:e,startEditing:a}=u(),i=j();return t==null?null:s.jsxs(s.Fragment,{children:[e==!1&&s.jsxs(n,{children:[s.jsx("button",{onClick:r,className:"cursor-pointer",children:s.jsx(m,{})}),s.jsx("button",{onClick:o,className:"cursor-pointer",children:s.jsx(x,{width:"18",height:"18"})}),s.jsx("button",{onClick:a,className:"text-primary-blue mr-2 cursor-pointer",children:i("Edit Note")})]}),e?s.jsx(l,{note:t}):s.jsx(c,{note:t})]})};p.layout=t=>s.jsx(h,{title:"Note Flow - Tags",header:"Notes Tagged: ",children:s.jsx(d,{header:"Tags",children:t})});export{p as default};
