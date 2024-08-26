import{s as Je,a as oe,i as Ze,n as xe,o as Xe,r as et,b as Ve}from"../chunks/scheduler.DUkfrwkU.js";import{S as Ke,i as Qe,e as r,p as J,s as x,a as i,b as h,q as X,h as u,d as y,j as o,k as ie,l,r as _e,c as $e,g as W,f as Se,m as Me,u as tt,v as lt,t as ge,w as st,n as be,o as je,x as ze,y as nt}from"../chunks/index.C5-k1b_n.js";import{e as Ce}from"../chunks/each.D6YF6ztN.js";import{B as re}from"../chunks/index.BPS8R5Fn.js";import{P as Fe}from"../chunks/pill_button.R7TcW5R-.js";function at(n){let e,s,t,d,I,v,f,_,b,C,E,B,q,S,w,j,P,Y,A,ce,D,T,O,Z,K,R,ve;return{c(){e=r("div"),s=r("h3"),t=r("a"),d=J(n[0]),v=x(),f=r("p"),_=J(n[2]),b=x(),C=r("div"),E=r("button"),B=r("i"),q=x(),S=J(n[4]),w=x(),j=r("button"),P=r("i"),Y=x(),A=J(n[5]),ce=x(),D=r("button"),T=r("i"),O=x(),Z=J(n[3]),this.h()},l(k){e=i(k,"DIV",{class:!0});var p=h(e);s=i(p,"H3",{class:!0});var ue=h(s);t=i(ue,"A",{href:!0,target:!0});var z=h(t);d=X(z,n[0]),z.forEach(u),ue.forEach(u),v=y(p),f=i(p,"P",{class:!0});var L=h(f);_=X(L,n[2]),L.forEach(u),b=y(p),C=i(p,"DIV",{class:!0});var H=h(C);E=i(H,"BUTTON",{class:!0});var ee=h(E);B=i(ee,"I",{class:!0}),h(B).forEach(u),q=y(ee),S=X(ee,n[4]),ee.forEach(u),w=y(H),j=i(H,"BUTTON",{class:!0});var Q=h(j);P=i(Q,"I",{class:!0}),h(P).forEach(u),Y=y(Q),A=X(Q,n[5]),Q.forEach(u),ce=y(H),D=i(H,"BUTTON",{class:!0});var N=h(D);T=i(N,"I",{class:!0}),h(T).forEach(u),O=y(N),Z=X(N,n[3]),N.forEach(u),H.forEach(u),p.forEach(u),this.h()},h(){o(t,"href",I="https://github.com/"+n[0]),o(t,"target","_blank"),o(s,"class","text-lg font-semibold truncate hover:underline"),o(f,"class","text-md h-12 md:h-14 overflow-auto"),o(B,"class","fa-solid fa-code mr-1 text-blue"),o(E,"class","hover:cursor-default"),o(P,"class","fa-solid fa-star mr-1 text-yellow"),o(j,"class","hover:cursor-default"),o(T,"class","fa-solid fa-code-fork mr-1 text-magenta"),o(D,"class","hover:cursor-default"),o(C,"class","mt-2 space-x-4 text-sm text-white"),o(e,"class","bg-bg-400 p-6 md:p-8 rounded-lg shadow-sm sm:w-80 duration-100 hover:shadow-lg")},m(k,p){ie(k,e,p),l(e,s),l(s,t),l(t,d),l(e,v),l(e,f),l(f,_),l(e,b),l(e,C),l(C,E),l(E,B),l(E,q),l(E,S),l(C,w),l(C,j),l(j,P),l(j,Y),l(j,A),l(C,ce),l(C,D),l(D,T),l(D,O),l(D,Z),R||(ve=oe(K=re.call(null,e,n[1])),R=!0)},p(k,[p]){p&1&&_e(d,k[0]),p&1&&I!==(I="https://github.com/"+k[0])&&o(t,"href",I),p&4&&_e(_,k[2]),p&16&&_e(S,k[4]),p&32&&_e(A,k[5]),p&8&&_e(Z,k[3]),K&&Ze(K.update)&&p&2&&K.update.call(null,k[1])},i:xe,o:xe,d(k){k&&u(e),R=!1,ve()}}}function ot(n,e,s){let{repo:t}=e,{useReveal:d}=e,I="",v="",f="",_="";return Xe(async()=>{let C=await(await fetch(`https://api.github.com/repos/${t}`)).json();s(5,_=C.stargazers_count),s(2,I=C.description),s(3,v=C.forks_count),s(4,f=C.language)}),n.$$set=b=>{"repo"in b&&s(0,t=b.repo),"useReveal"in b&&s(1,d=b.useReveal)},[t,d,I,v,f,_]}class rt extends Ke{constructor(e){super(),Qe(this,e,ot,at,Je,{repo:0,useReveal:1})}}function Ue(n,e,s){const t=n.slice();return t[12]=e[s],t[14]=s,t}function We(n,e,s){const t=n.slice();return t[15]=e[s],t[14]=s,t}function it(n){let e,s;return{c(){e=r("i"),s=J("Projects"),this.h()},l(t){e=i(t,"I",{class:!0}),h(e).forEach(u),s=X(t,"Projects"),this.h()},h(){o(e,"class","fa-solid fa-box mr-2")},m(t,d){ie(t,e,d),ie(t,s,d)},p:xe,d(t){t&&(u(e),u(s))}}}function ct(n){let e,s;return{c(){e=r("i"),s=J("Blogs"),this.h()},l(t){e=i(t,"I",{class:!0}),h(e).forEach(u),s=X(t,"Blogs"),this.h()},h(){o(e,"class","fa-solid fa-pen mr-2")},m(t,d){ie(t,e,d),ie(t,s,d)},p:xe,d(t){t&&(u(e),u(s))}}}function qe(n){let e,s;return e=new rt({props:{repo:"mehedirm6244/"+n[15],useReveal:{transition:"fly",y:20,delay:75*n[14]}}}),{c(){$e(e.$$.fragment)},l(t){Se(e.$$.fragment,t)},m(t,d){Me(e,t,d),s=!0},p:xe,i(t){s||(ge(e.$$.fragment,t),s=!0)},o(t){be(e.$$.fragment,t),s=!1},d(t){je(e,t)}}}function Ge(n){let e,s=n[12]+"",t,d,I,v;return{c(){e=r("div"),t=J(s),d=x(),this.h()},l(f){e=i(f,"DIV",{class:!0});var _=h(e);t=X(_,s),d=y(_),_.forEach(u),this.h()},h(){o(e,"class","bg-blue/5 text-blue px-3 py-1.5 rounded-lg font-semibold text-sm duration-100 hover:bg-blue/10")},m(f,_){ie(f,e,_),l(e,t),l(e,d),I||(v=oe(re.call(null,e,{transition:"fly",y:20,delay:75*n[14]})),I=!0)},p(f,_){n=f},d(f){f&&u(e),I=!1,v()}}}function ut(n){let e,s,t,d,I="Mehedi Rahman Mahi",v,f,_,b,C,E,B="_",q,S,w,j,P,Y,A,ce='<div class="bg-bg-500 p-8 md:p-16 rounded-2xl md:mx-[7%]"><h1 class="text-2xl mb-3 font-semibold">About Me</h1> <p class="">I&#39;m interested in frontend, competitive programming and computer science. I&#39;ve been a passionate linux user since 2020 (<span class="text-blue">Arch</span> btw). I often code when relaxed, just to destroy my sanity. I&#39;m looking forward to learning more geeky stuff and contributing to FOSS.</p> <p class="">Throughout my academic life, I&#39;ve gained some ECAs through participating in different olympiads related to math, physics and programming. I&#39;ve also contributed to several non-profit science based organizations through actively volunteering. I&#39;m now preparing for entrance exams.</p></div>',D,T,O,Z="My projects",K,R,ve="About which I tell <i>her mother</i>.",k,p,ue,z,L,H,ee="A set of things I'm used to",Q,N,Pe="Including operating systems, languages and frameworks",Ee,te,we,V,le,He="Want to contact me?",Ie,se,Ae='Use this form below or mail to <a href="mailto:mehedirm6244@protonmail.com" class="text-blue hover:underline">mehedirm6244@protonmail.com</a>',Te,fe,F,Le='<p class="text-xl font-medium">Title</p> <input placeholder="Title" class="block w-full bg-bg-500 px-6 py-4 rounded-xl my-4"/> <p class="text-xl font-medium mb-2">Content</p> <textarea placeholder="Content" class="block w-full resize-none bg-bg-500 px-6 py-4 rounded-xl my-4"></textarea> <div class="flex justify-center mt-8"><input type="submit" value="Send as Email" class="text-sm px-4 py-2.5 rounded-full font-semibold duration-100 bg-lightGray text-bg-500 hover:bg-white hover:cursor-pointer"/></div>',ye,ke,De;w=new Fe({props:{href:"#project",$$slots:{default:[it]},$$scope:{ctx:n}}}),P=new Fe({props:{href:"/blogs",$$slots:{default:[ct]},$$scope:{ctx:n}}});let ne=Ce(n[3]),g=[];for(let a=0;a<ne.length;a+=1)g[a]=qe(We(n,ne,a));const Ye=a=>be(g[a],1,1,()=>{g[a]=null});let de=Ce(n[2]),$=[];for(let a=0;a<de.length;a+=1)$[a]=Ge(Ue(n,de,a));return{c(){e=r("main"),s=r("header"),t=r("div"),d=r("p"),d.textContent=I,v=x(),f=r("p"),_=J("I'm "),b=r("span"),C=x(),E=r("span"),E.textContent=B,q=x(),S=r("div"),$e(w.$$.fragment),j=x(),$e(P.$$.fragment),Y=x(),A=r("section"),A.innerHTML=ce,D=x(),T=r("section"),O=r("h1"),O.textContent=Z,K=x(),R=r("p"),R.innerHTML=ve,k=x(),p=r("div");for(let a=0;a<g.length;a+=1)g[a].c();ue=x(),z=r("section"),L=r("div"),H=r("p"),H.textContent=ee,Q=x(),N=r("p"),N.textContent=Pe,Ee=x(),te=r("div");for(let a=0;a<$.length;a+=1)$[a].c();we=x(),V=r("section"),le=r("h1"),le.textContent=He,Ie=x(),se=r("p"),se.innerHTML=Ae,Te=x(),fe=r("div"),F=r("form"),F.innerHTML=Le,this.h()},l(a){e=i(a,"MAIN",{});var m=h(e);s=i(m,"HEADER",{class:!0});var M=h(s);t=i(M,"DIV",{});var G=h(t);d=i(G,"P",{class:!0,"data-svelte-h":!0}),W(d)!=="svelte-hytdve"&&(d.textContent=I),v=y(G),f=i(G,"P",{class:!0});var c=h(f);_=X(c,"I'm "),b=i(c,"SPAN",{class:!0}),h(b).forEach(u),C=y(c),E=i(c,"SPAN",{class:!0,"data-svelte-h":!0}),W(E)!=="svelte-1cbxwz6"&&(E.textContent=B),c.forEach(u),q=y(G),S=i(G,"DIV",{class:!0});var U=h(S);Se(w.$$.fragment,U),j=y(U),Se(P.$$.fragment,U),U.forEach(u),G.forEach(u),M.forEach(u),Y=y(m),A=i(m,"SECTION",{class:!0,"data-svelte-h":!0}),W(A)!=="svelte-o744xm"&&(A.innerHTML=ce),D=y(m),T=i(m,"SECTION",{class:!0,id:!0});var me=h(T);O=i(me,"H1",{class:!0,"data-svelte-h":!0}),W(O)!=="svelte-858if9"&&(O.textContent=Z),K=y(me),R=i(me,"P",{class:!0,"data-svelte-h":!0}),W(R)!=="svelte-w3y3k5"&&(R.innerHTML=ve),k=y(me),p=i(me,"DIV",{class:!0});var Ne=h(p);for(let ae=0;ae<g.length;ae+=1)g[ae].l(Ne);Ne.forEach(u),me.forEach(u),ue=y(m),z=i(m,"SECTION",{class:!0});var Be=h(z);L=i(Be,"DIV",{class:!0});var he=h(L);H=i(he,"P",{class:!0,"data-svelte-h":!0}),W(H)!=="svelte-bf4fc4"&&(H.textContent=ee),Q=y(he),N=i(he,"P",{class:!0,"data-svelte-h":!0}),W(N)!=="svelte-18vnrxi"&&(N.textContent=Pe),Ee=y(he),te=i(he,"DIV",{class:!0});var Oe=h(te);for(let ae=0;ae<$.length;ae+=1)$[ae].l(Oe);Oe.forEach(u),he.forEach(u),Be.forEach(u),we=y(m),V=i(m,"SECTION",{class:!0});var pe=h(V);le=i(pe,"H1",{class:!0,"data-svelte-h":!0}),W(le)!=="svelte-jp4m75"&&(le.textContent=He),Ie=y(pe),se=i(pe,"P",{class:!0,"data-svelte-h":!0}),W(se)!=="svelte-gkh7az"&&(se.innerHTML=Ae),Te=y(pe),fe=i(pe,"DIV",{class:!0});var Re=h(fe);F=i(Re,"FORM",{action:!0,autocomplete:!0,"data-svelte-h":!0}),W(F)!=="svelte-u5zsj8"&&(F.innerHTML=Le),Re.forEach(u),pe.forEach(u),m.forEach(u),this.h()},h(){o(d,"class","text-3xl md:text-4xl font-medium"),o(b,"class","text-green"),o(E,"class","animate-blink"),o(f,"class","text-xl md:text-2xl"),o(S,"class","mt-4 space-x-2"),o(s,"class","h-screen -mt-20 flex align-middle justify-center items-center bg-bg-400"),o(A,"class","px-[5%] py-12 md:px-[10%] md:py-20"),o(O,"class","text-2xl text-center font-semibold"),o(R,"class","text-center"),o(p,"class","mt-8 space-y-3 sm:space-y-0 sm:flex flex-wrap align-middle items-center justify-center gap-5"),o(T,"class","px-[5%] py-12 md:px-[10%] md:py-20 bg-bg-500"),o(T,"id","project"),o(H,"class","text-2xl font-semibold"),o(N,"class","mb-6"),o(te,"class","flex flex-row flex-wrap gap-2"),o(L,"class","bg-bg-500 p-8 md:p-16 rounded-2xl md:mx-[7%]"),o(z,"class","px-[5%] py-12 md:px-[10%] md:py-20"),o(le,"class","text-2xl text-center font-semibold"),o(se,"class","text-center"),o(F,"action","”mailto:mehedirm6244@protonmail.com”"),o(F,"autocomplete","off"),o(fe,"class","mx-auto w-10/12 md:w-2/3 mt-8"),o(V,"class","px-[5%] py-12 md:px-[10%] md:py-20")},m(a,m){ie(a,e,m),l(e,s),l(s,t),l(t,d),l(t,v),l(t,f),l(f,_),l(f,b),n[5](b),l(f,C),l(f,E),l(t,q),l(t,S),Me(w,S,null),l(S,j),Me(P,S,null),l(e,Y),l(e,A),l(e,D),l(e,T),l(T,O),l(T,K),l(T,R),l(T,k),l(T,p);for(let M=0;M<g.length;M+=1)g[M]&&g[M].m(p,null);l(e,ue),l(e,z),l(z,L),l(L,H),l(L,Q),l(L,N),l(L,Ee),l(L,te);for(let M=0;M<$.length;M+=1)$[M]&&$[M].m(te,null);l(e,we),l(e,V),l(V,le),l(V,Ie),l(V,se),l(V,Te),l(V,fe),l(fe,F),n[6](F),ye=!0,ke||(De=[oe(re.call(null,S,{transition:"slide",x:-10,delay:100})),oe(re.call(null,t,{transition:"slide",x:-50})),oe(re.call(null,A,{transition:"fly",y:20})),oe(re.call(null,z,{transition:"fly",y:20})),tt(F,"submit",lt(n[4])),oe(re.call(null,V,{transition:"fly",y:20}))],ke=!0)},p(a,[m]){const M={};m&131072&&(M.$$scope={dirty:m,ctx:a}),w.$set(M);const G={};if(m&131072&&(G.$$scope={dirty:m,ctx:a}),P.$set(G),m&8){ne=Ce(a[3]);let c;for(c=0;c<ne.length;c+=1){const U=We(a,ne,c);g[c]?(g[c].p(U,m),ge(g[c],1)):(g[c]=qe(U),g[c].c(),ge(g[c],1),g[c].m(p,null))}for(nt(),c=ne.length;c<g.length;c+=1)Ye(c);st()}if(m&4){de=Ce(a[2]);let c;for(c=0;c<de.length;c+=1){const U=Ue(a,de,c);$[c]?$[c].p(U,m):($[c]=Ge(U),$[c].c(),$[c].m(te,null))}for(;c<$.length;c+=1)$[c].d(1);$.length=de.length}},i(a){if(!ye){ge(w.$$.fragment,a),ge(P.$$.fragment,a);for(let m=0;m<ne.length;m+=1)ge(g[m]);ye=!0}},o(a){be(w.$$.fragment,a),be(P.$$.fragment,a),g=g.filter(Boolean);for(let m=0;m<g.length;m+=1)be(g[m]);ye=!1},d(a){a&&u(e),n[5](null),je(w),je(P),ze(g,a),ze($,a),n[6](null),ke=!1,et(De)}}}function ft(n,e,s){const t=["Arch Linux","C","C++","Bash","HTML5","CSS3","TailwindCSS","SCSS","Javascript","Svelte"],d=["sysfex","Miserable_Xfce","jash","mehedirm6244.github.io"],I=["a student","an enthusiast","a programmer"];let v,f=0,_=0,b;function C(){let w=b.title,j=b.content;location.href=`mailto:mehedirm6244@protonmail.com?subject=${w}&body=${j}`}function E(){_<I[f].length?(s(0,v.textContent+=I[f].charAt(_++),v),setTimeout(E,100)):(f=(f+1)%I.length,setTimeout(B,3e3))}function B(){s(0,v.textContent=v.textContent.slice(0,-1),v),setTimeout(_--==0?E:B,50)}Xe(()=>{E()});function q(w){Ve[w?"unshift":"push"](()=>{v=w,s(0,v)})}function S(w){Ve[w?"unshift":"push"](()=>{b=w,s(1,b)})}return[v,b,t,d,C,q,S]}class vt extends Ke{constructor(e){super(),Qe(this,e,ft,ut,Je,{})}}export{vt as component};
