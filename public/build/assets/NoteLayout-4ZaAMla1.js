import{r as f,j as e,m as M,K as C,$ as V,t as z,S as _}from"./app-CUPjKgMq.js";import{K as B,u as K,a as G,I as O,U as Q,$ as U,b as W,_ as Y,L as q,H as g,Q as J,S as v,d as h,E as b,P as j}from"./useThemeContext-C9dn1ABf.js";import{S as p}from"./SecondaryBtn-ivt3oQz4.js";import{u as x,C as X,e as w,f as R,R as m,a as I,g as ee,A as te,T as se,h as re,S as ae,i as le}from"./UserLayout-CXoV6pRe.js";let oe="textarea";function ne(t,s){let r=f.useId(),l=K(),o=G(),{id:n=l||`headlessui-textarea-${r}`,disabled:a=o||!1,autoFocus:d=!1,invalid:c=!1,...i}=t,u=O(),H=Q(),{isFocused:S,focusProps:T}=U({autoFocus:d}),{isHovered:E,hoverProps:D}=W({isDisabled:a}),Z=Y({ref:s,id:n,"aria-labelledby":u,"aria-describedby":H,"aria-invalid":c?"":void 0,disabled:a||void 0,autoFocus:d},T,D),F=f.useMemo(()=>({disabled:a,invalid:c,hover:E,focus:S,autofocus:d}),[a,c,E,S,d]);return q()({ourProps:Z,theirProps:i,slot:F,defaultTag:oe,name:"Textarea"})}let P=B(ne);function y(t,s){return new Intl.DateTimeFormat(void 0,s).format(t)}function k({width:t="16",height:s="16"}){return e.jsxs("svg",{width:t,height:s,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.16699 2.5C5.12919 2.5 2.66699 4.96219 2.66699 8C2.66699 11.0372 5.12923 13.5 8.16699 13.5C11.2048 13.5 13.667 11.0372 13.667 8C13.667 4.96219 11.2048 2.5 8.16699 2.5ZM1.66699 8C1.66699 4.40991 4.57691 1.5 8.16699 1.5C11.7571 1.5 14.667 4.40991 14.667 8C14.667 11.5894 11.7571 14.5 8.16699 14.5C4.57687 14.5 1.66699 11.5894 1.66699 8Z",fill:"currentColor"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.94824 5.21777C8.22438 5.21777 8.44824 5.44163 8.44824 5.71777V8.16619L10.3212 9.28553C10.5583 9.42719 10.6356 9.73419 10.494 9.97126C10.3523 10.2083 10.0453 10.2856 9.80824 10.1439L7.69171 8.87906C7.54071 8.78879 7.44824 8.62586 7.44824 8.44986V5.71777C7.44824 5.44163 7.67211 5.21777 7.94824 5.21777Z",fill:"currentColor"})]})}function A({children:t,value:s="",placeholder:r="",onChange:l,error:o}){return e.jsxs(g,{className:"flex items-center gap-2",children:[e.jsx(J,{className:"flex w-full max-w-28.75 items-center gap-1.5",children:t}),e.jsx(v,{onChange:l,className:h("border-colors data-[hover]:bg-gray-neutral data-[focus]:shadow-input data-[focus]:dark:shadow-input-dark w-full flex-1 rounded-lg border p-1 outline-none data-[focus]:ring-1 data-[hover]:dark:bg-[#232530]",o&&"border-red-600!"),value:s,placeholder:r}),o&&e.jsx(b,{children:o})]})}function $({children:t}){const{closeNotePage:s,closeCreateNew:r}=x();return e.jsxs("div",{className:"body-text xs:gap-4 border-colors mb-4 flex items-center justify-end gap-3 border-b pb-4 text-sm md:hidden",children:[e.jsxs("button",{onClick:()=>{s(),r()},className:"mr-auto flex cursor-pointer items-center gap-2",children:[e.jsx(X,{}),"Go Back"]}),t]})}function Ce({note:t}){const{finishEditing:s}=x(),{data:r,setData:l,post:o,processing:n,errors:a}=M({title:t.title,content:t.content,tags:t.tags.map(i=>i.name).join(", ")}),d=i=>{i.preventDefault(),o(route("notes.update",t),{onSuccess:()=>{c()}})};function c(){s()}return e.jsxs(e.Fragment,{children:[e.jsxs($,{children:[e.jsx("button",{onClick:c,className:"cursor-pointer",children:"Cancel"}),e.jsx("button",{type:"submit",form:"create-note-form",className:"text-primary-blue mr-2 cursor-pointer",children:"Save Note"})]}),e.jsxs("form",{onSubmit:d,id:"create-note-form",className:"notes-height flex flex-col",children:[e.jsxs("header",{children:[e.jsxs(g,{className:"mb-4",children:[e.jsx(v,{placeholder:"Enter a title...",className:h("border-colors data-[hover]:bg-gray-neutral data-[focus]:shadow-input data-[focus]:dark:shadow-input-dark w-full flex-1 rounded-lg border p-1 text-2xl font-bold outline-none data-[focus]:ring-1 data-[hover]:dark:bg-[#232530]",a.title&&"border-red-600!"),value:r.title,onChange:i=>l("title",i.target.value)}),a.title&&e.jsx(b,{children:a.title})]}),e.jsxs("div",{className:"title-text border-colors mb-4 space-y-3.5 border-b pb-4 text-xs sm:text-sm",children:[e.jsxs(A,{placeholder:"Add tags separated by commas (e.g. Work, Planning)",onChange:i=>l("tags",i.target.value),value:r.tags,error:a.tags,children:[e.jsx(w,{width:"16",height:"16"}),"Tags"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("div",{className:"flex w-full max-w-28.75 items-center gap-1.5",children:[e.jsx(k,{width:"16",height:"16"}),"Last edited"]}),e.jsx("div",{className:"flex-1 text-gray-400",children:t.updated_at?y(new Date(t.updated_at),{dateStyle:"medium"}):"No update date"})]})]})]}),e.jsxs(g,{as:"div",className:"mb-4 flex-1 pb-4",children:[e.jsx(P,{placeholder:"Start typing your note here…",className:h("border-colors data-[hover]:bg-gray-neutral data-[focus]:shadow-input data-[focus]:dark:shadow-input-dark h-full w-full flex-1 rounded-lg border p-1 text-sm outline-none data-[focus]:ring-1 md:text-base data-[hover]:dark:bg-[#232530]",a.title&&"border-red-600!"),value:r.content,onChange:i=>l("content",i.target.value)}),a.content&&e.jsx(b,{children:a.content})]}),e.jsxs("div",{className:"border-colors mt-auto hidden items-center gap-4 border-t pt-4 md:flex",children:[e.jsx(j,{type:"submit",disabled:n,children:"Save Note"}),e.jsx(p,{onClick:c,children:"Cancel"})]})]})]})}function de({width:t="16",height:s="16"}){return e.jsxs("svg",{width:t,height:s,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.772 4.23187C3.95224 4.05162 4.24447 4.05162 4.42471 4.23186L5.00871 4.81583C5.18895 4.99607 5.18895 5.2883 5.00871 5.46855C4.82847 5.64879 4.53624 5.64879 4.356 5.46855L3.77201 4.88458C3.59176 4.70434 3.59176 4.41211 3.772 4.23187ZM5.00861 10.5293C5.18891 10.7095 5.18899 11.0018 5.0088 11.1821L3.94961 12.2418C3.76942 12.4221 3.47719 12.4222 3.2969 12.242C3.1166 12.0618 3.11652 11.7696 3.29671 11.5893L4.3559 10.5295C4.53609 10.3492 4.82832 10.3491 5.00861 10.5293ZM10.0703 10.5293C10.2505 10.3491 10.5428 10.3492 10.723 10.5295L11.7822 11.5893C11.9623 11.7696 11.9623 12.0618 11.782 12.242C11.6017 12.4222 11.3095 12.4221 11.1293 12.2418L10.0701 11.1821C9.88992 11.0018 9.88998 10.7095 10.0703 10.5293Z",fill:"currentColor"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.53852 3.05566C7.79341 3.05566 8.00005 3.2623 8.00005 3.5172V3.95892C8.00005 4.21382 7.79341 4.42046 7.53852 4.42046C7.28362 4.42046 7.07698 4.21382 7.07698 3.95892V3.5172C7.07698 3.2623 7.28362 3.05566 7.53852 3.05566ZM1.88232 7.99927C1.88232 7.74438 2.08896 7.53773 2.34386 7.53773H3.49815C3.75304 7.53773 3.95968 7.74438 3.95968 7.99927C3.95968 8.25416 3.75304 8.46081 3.49815 8.46081H2.34386C2.08896 8.46081 1.88232 8.25416 1.88232 7.99927ZM11.1174 7.99927C11.1174 7.74438 11.324 7.53773 11.5789 7.53773H13.077C13.3319 7.53773 13.5385 7.74438 13.5385 7.99927C13.5385 8.25416 13.3319 8.46081 13.077 8.46081H11.5789C11.324 8.46081 11.1174 8.25416 11.1174 7.99927ZM7.53852 11.5782C7.79341 11.5782 8.00005 11.7848 8.00005 12.0397V13.5378C8.00005 13.7927 7.79341 13.9993 7.53852 13.9993C7.28362 13.9993 7.07698 13.7927 7.07698 13.5378V12.0397C7.07698 11.7848 7.28362 11.5782 7.53852 11.5782Z",fill:"currentColor"})]})}function N({children:t,info:s,className:r}){return e.jsxs("div",{className:h("flex items-center gap-2",r),children:[e.jsx("div",{className:"flex w-full max-w-28.75 items-center gap-1.5",children:t}),e.jsx("div",{className:"flex-1",children:s})]})}function ve({note:t}){const{closeNotePage:s,startEditing:r}=x();return e.jsxs("div",{className:"notes-height flex flex-col bg-colors",children:[e.jsxs("header",{children:[e.jsx("p",{className:"mb-4 text-2xl font-bold",children:t.title}),e.jsxs("div",{className:"title-text border-colors mb-4 space-y-3.5 border-b pb-4 text-xs sm:text-sm",children:[e.jsxs(N,{info:t.tags.map(l=>R(l.name)).join(", "),children:[e.jsx(w,{width:"16",height:"16"}),"Tags"]}),e.jsxs(N,{info:t.archived?"Archived":"Active",children:[e.jsx(de,{width:"16",height:"16"}),"Status"]}),e.jsxs(N,{info:t.updated_at?y(new Date(t.updated_at),{dateStyle:"medium"}):"No update date",children:[e.jsx(k,{width:"16",height:"16"}),"Last edited"]})]})]}),e.jsx("div",{className:"text-sm md:text-base overflow-y-auto py-1 scrollbar-hidden",children:e.jsx("pre",{className:"break-words whitespace-pre-wrap",children:e.jsx("code",{children:t.content})})}),e.jsxs("div",{className:"border-colors mt-auto hidden items-center gap-4 border-t pt-4 md:flex",children:[e.jsx(j,{onClick:r,children:"Edit Note"}),e.jsx(p,{onClick:s,children:"Hide"})]})]})}function ie({width:t="20",height:s="20"}){return e.jsxs("svg",{width:t,height:s,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.09026 6.16962C3.4082 6.03519 3.7749 6.18396 3.90932 6.50189L5.00629 9.09638L7.58326 8.0068C7.9012 7.87239 8.2679 8.02114 8.40233 8.33904C8.53675 8.65704 8.388 9.02371 8.07005 9.15813L4.91741 10.491C4.59948 10.6255 4.23278 10.4767 4.09836 10.1588L2.758 6.98867C2.62357 6.67074 2.77234 6.30404 3.09026 6.16962Z",fill:"currentColor"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.7624 4.71988C7.89009 4.71988 5.55539 7.00797 5.4832 9.85325C5.47445 10.1982 5.18762 10.4709 4.84255 10.4622C4.49749 10.4534 4.22485 10.1666 4.2336 9.8215C4.32299 6.29818 7.21239 3.46988 10.7624 3.46988C14.366 3.46988 17.2915 6.39541 17.2915 9.99891C17.2915 13.6097 14.3655 16.528 10.7624 16.528C8.52867 16.528 6.56351 15.41 5.38176 13.708C5.18489 13.4244 5.25516 13.035 5.53869 12.8382C5.82223 12.6412 6.21167 12.7115 6.40854 12.9951C7.36759 14.3763 8.957 15.278 10.7624 15.278C13.6761 15.278 16.0415 12.9183 16.0415 9.99891C16.0415 7.08577 13.6756 4.71988 10.7624 4.71988Z",fill:"currentColor"})]})}function ce(){const{closeCreateNew:t,closeNotePage:s}=x(),{data:r,setData:l,post:o,processing:n,errors:a,reset:d}=M({title:"",content:"",tags:""}),c=u=>{u.preventDefault(),o(route("notes.store"),{onSuccess:()=>{i()}})};function i(){d(),t(),s()}return e.jsxs(e.Fragment,{children:[e.jsxs($,{children:[e.jsx("button",{onClick:i,className:"cursor-pointer",children:"Cancel"}),e.jsx("button",{type:"submit",form:"create-note-form",className:"text-primary-blue mr-2 cursor-pointer",children:"Save Note"})]}),e.jsxs("form",{onSubmit:c,id:"create-note-form",className:"notes-height flex flex-col",children:[e.jsxs("header",{children:[e.jsxs(g,{className:"mb-4",children:[e.jsx(v,{placeholder:"Enter a title...",className:h("border-colors data-[hover]:bg-gray-neutral data-[focus]:shadow-input data-[focus]:dark:shadow-input-dark w-full flex-1 rounded-lg border p-1 text-2xl font-bold outline-none data-[focus]:ring-1 data-[hover]:dark:bg-[#232530]",a.title&&"border-red-600!"),value:r.title,onChange:u=>l("title",u.target.value)}),a.title&&e.jsx(b,{children:a.title})]}),e.jsxs("div",{className:"title-text border-colors mb-4 space-y-3.5 border-b pb-4 text-xs sm:text-sm",children:[e.jsxs(A,{placeholder:"Add tags separated by commas (e.g. Work, Planning)",onChange:u=>l("tags",u.target.value),value:r.tags,error:a.tags,children:[e.jsx(w,{width:"16",height:"16"}),"Tags"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("div",{className:"flex w-full max-w-28.75 items-center gap-1.5",children:[e.jsx(k,{width:"16",height:"16"}),"Last edited"]}),e.jsx("div",{className:"flex-1 text-gray-400",children:"Not yet saved"})]})]})]}),e.jsxs(g,{as:"div",className:"mb-4 flex-1 pb-4",children:[e.jsx(P,{placeholder:"Start typing your note here…",className:h("border-colors data-[hover]:bg-gray-neutral data-[focus]:shadow-input data-[focus]:dark:shadow-input-dark h-full w-full flex-1 rounded-lg border p-1 text-sm outline-none data-[focus]:ring-1 md:text-base data-[hover]:dark:bg-[#232530]",a.content&&"border-red-600!"),value:r.content,onChange:u=>l("content",u.target.value)}),a.content&&e.jsx(b,{children:a.content})]}),e.jsxs("div",{className:"border-colors mt-auto hidden items-center gap-4 border-t pt-4 md:flex",children:[e.jsx(j,{type:"submit",disabled:n,children:"Save Note"}),e.jsx(p,{onClick:i,children:"Cancel"})]})]})]})}function ue(){const{openCreateNew:t,openNotePage:s}=x(),l=route().current()===m.SEARCH?e.jsxs("p",{children:["No notes match your search. Try a different keyword or"," ",e.jsx("button",{className:"cursor-pointer underline underline-offset-4",onClick:()=>{s(),t()},children:"create a new note."})]}):route().current()===m.ARCHIVE?e.jsxs("p",{children:["No notes have been archived yet. Move notes here for safekeeping, or"," ",e.jsx("button",{className:"cursor-pointer underline underline-offset-4",onClick:()=>{s(),t()},children:"create a new note."})]}):route().current()===m.HOME?e.jsx("p",{children:"You don’t have any notes yet. Start a new note to capture your thoughts and ideas."}):null;return l===null?null:e.jsx("div",{className:"border-colors light-bg-colors rounded-xl border p-2 text-sm md:text-base",children:l})}function xe({note:t,noteProps:s}){const{openNotePage:r,closeCreateNew:l}=x(),{url:o}=C(),n=I(),a=Number(n)===t.id;return e.jsxs(V,{preserveState:!0,preserveScroll:!0,onClick:()=>{r(),l()},href:o,data:{note_id:t.id,page:s.page},className:h("border-colors block space-y-3 rounded-lg border-b p-2 pb-3",a&&"bg-gray-pale dark:bg-black-pale border-none"),children:[e.jsx("p",{className:"font-bold",children:t.title}),e.jsx("ul",{className:"flex flex-wrap items-center gap-1",children:t.tags.map(d=>e.jsx("li",{className:"title-text rounded-sm bg-[#E0E4EA] px-1.5 py-1 text-xs dark:bg-[#232530]",children:d.name},d.id))}),e.jsx("p",{className:"body-text text-xs",children:t.updated_at?y(new Date(t.updated_at),{dateStyle:"medium"}):"No update date"})]})}function me(){return e.jsxs("li",{className:"block animate-pulse space-y-3 rounded-lg border-b p-2 pb-3 text-transparent",children:[e.jsx("p",{className:"bg-gray-pale dark:bg-black-pale",children:"title"}),e.jsx("ul",{className:"flex flex-wrap items-center gap-1",children:[0,1,2].map(t=>e.jsx("li",{className:"bg-gray-pale dark:bg-black-pale rounded-sm px-1.5 py-1 text-xs",children:"tag"},`NoteItemSkeleton-${t}`))}),e.jsx("p",{className:"bg-gray-pale dark:bg-black-pale w-1/2 text-xs",children:"timestamp"})]})}function L(){return e.jsx("ul",{className:"space-y-2 px-4 sm:px-8 md:pr-0 md:pl-4",children:[0,1,2,3,4,5].map(t=>e.jsx(me,{},t+"skeleton"))})}function he(){var o;const{props:t}=C(),[s,r]=f.useState(t.notes),l=ee();return f.useEffect(()=>{r(n=>{const a=new Set(n.map(c=>c.id)),d=t.notes.filter(c=>!a.has(c.id));return[...n,...d]})},[t.notes]),f.useEffect(()=>{r(t.notes)},[route().current(),t.tag,(o=t.flash)==null?void 0:o.message,l]),e.jsx("nav",{children:e.jsxs("ul",{className:"notes-height scrollbar-hidden space-y-2 overflow-y-auto","scroll-region":"true",children:[s.length>0?s.map(n=>e.jsx(xe,{note:n,noteProps:t},n.id)):e.jsx(ue,{}),t.isNextPageExists&&e.jsx(z,{as:"div",always:!0,params:{data:{page:+t.page+1},only:["notes","page","isNextPageExists"]},fallback:e.jsx(L,{}),children:e.jsx(L,{})})]})})}function pe(){const{props:t}=C(),r=route().current()===m.ARCHIVE?e.jsx("p",{children:"All your archived notes are stored here. You can restore or delete them anytime."}):route().current()===m.TAG?e.jsxs("p",{children:["All notes with the ”",t.tag?R(t.tag):"","” tag are shown here."]}):null;return r===null?null:e.jsx("div",{className:"px-2 my-2 text-sm",children:r})}function fe(){const{openArchiveModal:t,openDeleteModal:s,closeNotePage:r}=x(),l=I();return e.jsxs(e.Fragment,{children:[route().current()===m.ARCHIVE?e.jsxs(p,{onClick:()=>{l&&_.post(route("notes.restore",l)),r()},className:"w-full",children:[e.jsx(ie,{}),"Restore Note"]}):e.jsxs(p,{onClick:t,className:"w-full",children:[e.jsx(te,{width:"20",height:"20"}),"Archive Note"]}),e.jsxs(p,{onClick:s,className:"w-full",children:[e.jsx(se,{width:"20",height:"20"}),"Delete Note"]})]})}function we({children:t,header:s}){const{showNotePage:r,openNotePage:l,showCreateNew:o,openCreateNew:n,isEdited:a}=x(),d=re();return e.jsxs("div",{className:"md:flex",children:[e.jsxs("div",{className:"border-colors flex-1 md:max-w-72.5 md:border-r md:py-5 md:pr-4 md:pl-8",children:[e.jsxs("p",{className:"mb-4 ml-2 text-2xl font-bold md:hidden",children:[s," "]}),route().current()===m.SEARCH&&!d&&e.jsx(ae,{}),e.jsxs(j,{onClick:()=>{n(),l()},className:"shadow-create-btn dark:shadow-create-btn-dark fixed right-4 bottom-18 z-[25] flex size-12 items-center justify-center rounded-full! sm:right-9 sm:bottom-26.5 sm:size-16 md:static md:mb-4 md:size-auto md:w-full md:rounded-lg! md:shadow-none",children:[e.jsx(le,{className:"size-8 shrink-0 md:hidden"}),e.jsx("span",{className:"hidden md:block",children:"+ Create New Note"})]}),e.jsx(pe,{}),e.jsx(he,{})]}),r&&e.jsxs("article",{className:"w-full flex-1 md:flex md:items-stretch",children:[e.jsx("div",{className:"bg-colors absolute notes-height inset-0 z-40 flex-1 px-4 py-5 sm:px-8 sm:py-6 md:static md:p-0 md:px-6 md:py-5",children:o?e.jsx(ce,{}):t}),e.jsx("div",{className:"border-colors hidden flex-1 md:block md:w-full md:max-w-62.5 md:space-y-3 md:border-l md:py-5 md:pr-8 md:pl-4",children:o==!1&&a==!1&&e.jsx(fe,{})})]})]})}export{Ce as E,$ as N,ie as R,ve as a,we as b};
