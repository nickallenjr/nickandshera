(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n(47)},42:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var i,r=n(30),a=n(0),o=n.n(a),l=n(20),s=n.n(l),h=n(18),c=n(15),p=n(8),d=n(9),u=n(11),f=n(10),g=n(12),v=n(3),m=n(14),b=(n(42),function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(u.a)(this,Object(f.a)(t).call(this,e))).state={},n}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"medlrgNav"},o.a.createElement("nav",{id:"navi"},o.a.createElement("div",{id:"logo"},"Logo"),o.a.createElement("div",{id:"webPageTitle"},o.a.createElement("a",{href:"/"},"Nick and Shera")),o.a.createElement("div",{className:"linksDiv"},o.a.createElement("ul",{id:"linksList"},o.a.createElement(v.b,{to:"/"},o.a.createElement("li",null,"Home")),o.a.createElement(v.b,{to:"/about"},o.a.createElement("li",null,"About")),o.a.createElement(v.b,{to:"/contact"},o.a.createElement("li",null,"Contact")),o.a.createElement(v.b,{to:"/podcast"},o.a.createElement("li",null,"Podcast")),o.a.createElement(v.b,{to:"/event"},o.a.createElement("li",null,"Event"))))))}}]),t}(o.a.Component)),y=n(22),x=n(23),_=n(48),w=n(49),T=n(50),N=n(1),S=Math.PI,C=S/180,E=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,A=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,M=/(^[#\.][a-z]|[a-y][a-z])/gi,O=/[achlmqstvz]/gi,j=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,P=Math.atan2,L=Math.cos,k=Math.sin,B=Math.sqrt,z=2*S,R=.3*S,D=.7*S,I=N.e._gsDefine.globals.TweenLite,V=function(e){N.e.console&&console.log(e)},H=function(e,t,n,i,r,a,o,l,s){if(e!==l||t!==s){n=Math.abs(n),i=Math.abs(i);var h=r%360*C,c=L(h),p=k(h),d=(e-l)/2,u=(t-s)/2,f=c*d+p*u,g=-p*d+c*u,v=f*f,m=g*g,b=v/(n*n)+m/(i*i);b>1&&(n=B(b)*n,i=B(b)*i);var y=n*n,x=i*i,_=(y*x-y*m-x*v)/(y*m+x*v);_<0&&(_=0);var w=(a===o?-1:1)*B(_),T=w*(n*g/i),N=w*(-i*f/n),S=(e+l)/2+(c*T-p*N),E=(t+s)/2+(p*T+c*N),A=(f-T)/n,M=(g-N)/i,O=(-f-T)/n,j=(-g-N)/i,P=A*A+M*M,R=(M<0?-1:1)*Math.acos(A/B(P)),D=(A*j-M*O<0?-1:1)*Math.acos((A*O+M*j)/B(P*(O*O+j*j)));!o&&D>0?D-=z:o&&D<0&&(D+=z),R%=z,D%=z;var I,V=Math.ceil(Math.abs(D)/(z/4)),H=[],W=D/V,F=4/3*k(W/2)/(1+L(W/2)),G=c*n,Y=p*n,X=p*-i,Z=c*i;for(I=0;I<V;I++)f=L(r=R+I*W),g=k(r),A=L(r+=W),M=k(r),H.push(f-F*g,g+F*f,A+F*M,M-F*A,A,M);for(I=0;I<H.length;I+=2)f=H[I],g=H[I+1],H[I]=f*G+g*X+S,H[I+1]=f*Y+g*Z+E;return H[I-2]=l,H[I-1]=s,H}},W=function(e){var t,n,i,r,a,o,l,s,h,c,p,d,u,f=(e+"").replace(j,function(e){var t=+e;return t<1e-4&&t>-1e-4?0:t}).match(E)||[],g=[],v=0,m=0,b=f.length,y=0,x="ERROR: malformed path: "+e,_=function(e,t,n,i){c=(n-e)/3,p=(i-t)/3,l.push(e+c,t+p,n-c,i-p,n,i)};if(!e||!isNaN(f[0])||isNaN(f[1]))return V(x),g;for(t=0;t<b;t++)if(u=a,isNaN(f[t])?o=(a=f[t].toUpperCase())!==f[t]:t--,i=+f[t+1],r=+f[t+2],o&&(i+=v,r+=m),t||(s=i,h=r),"M"===a)l&&(l.length<8?g.length-=1:y+=l.length),v=s=i,m=h=r,l=[i,r],g.push(l),t+=2,a="L";else if("C"===a)l||(l=[0,0]),o||(v=m=0),l.push(i,r,v+1*f[t+3],m+1*f[t+4],v+=1*f[t+5],m+=1*f[t+6]),t+=6;else if("S"===a)c=v,p=m,"C"!==u&&"S"!==u||(c+=v-l[l.length-4],p+=m-l[l.length-3]),o||(v=m=0),l.push(c,p,i,r,v+=1*f[t+3],m+=1*f[t+4]),t+=4;else if("Q"===a)c=v+2/3*(i-v),p=m+2/3*(r-m),o||(v=m=0),v+=1*f[t+3],m+=1*f[t+4],l.push(c,p,v+2/3*(i-v),m+2/3*(r-m),v,m),t+=4;else if("T"===a)c=v-l[l.length-4],p=m-l[l.length-3],l.push(v+c,m+p,i+2/3*(v+1.5*c-i),r+2/3*(m+1.5*p-r),v=i,m=r),t+=2;else if("H"===a)_(v,m,v=i,m),t+=1;else if("V"===a)_(v,m,v,m=i+(o?m-v:0)),t+=1;else if("L"===a||"Z"===a)"Z"===a&&(i=s,r=h,l.closed=!0),("L"===a||Math.abs(v-i)>.5||Math.abs(m-r)>.5)&&(_(v,m,i,r),"L"===a&&(t+=2)),v=i,m=r;else if("A"===a){if(d=H(v,m,+f[t+1],+f[t+2],+f[t+3],+f[t+4],+f[t+5],(o?v:0)+1*f[t+6],(o?m:0)+1*f[t+7]))for(n=0;n<d.length;n++)l.push(d[n]);v=l[l.length-2],m=l[l.length-1],t+=7}else V(x);return t=l.length,l[0]===l[t-2]&&l[1]===l[t-1]&&(l.closed=!0),g.totalPoints=y+t,g},F=function(e,t){var n,i,r,a,o,l,s,h,c,p,d,u,f,g,v=0,m=e.length,b=t/((m-2)/6);for(f=2;f<m;f+=6)for(v+=b;v>.999999;)n=e[f-2],i=e[f-1],r=e[f],a=e[f+1],o=e[f+2],l=e[f+3],s=e[f+4],h=e[f+5],c=n+(r-n)*(g=1/((Math.floor(v)||1)+1)),c+=((d=r+(o-r)*g)-c)*g,d+=(o+(s-o)*g-d)*g,p=i+(a-i)*g,p+=((u=a+(l-a)*g)-p)*g,u+=(l+(h-l)*g-u)*g,e.splice(f,4,n+(r-n)*g,i+(a-i)*g,c,p,c+(d-c)*g,p+(u-p)*g,d,u,o+(s-o)*g,l+(h-l)*g),f+=6,m+=6,v--;return e},G=function(e,t){var n,i,r,a="",o=e.length,l=Math.pow(10,t||2);for(i=0;i<e.length;i++){for(o=(r=e[i]).length,a+="M"+(r[0]*l|0)/l+" "+(r[1]*l|0)/l+" C",n=2;n<o;n++)a+=(r[n]*l|0)/l+" ";r.closed&&(a+="z")}return a},Y=function(e){for(var t=[],n=e.length-1,i=0;--n>-1;)t[i++]=e[n],t[i++]=e[n+1],n--;for(n=0;n<i;n++)e[n]=t[n];e.reversed=!e.reversed},X=function(e){var t,n=e.length,i=0,r=0;for(t=0;t<n;t++)i+=e[t++],r+=e[t];return[i/(n/2),r/(n/2)]},Z=function(e){var t,n,i,r=e.length,a=e[0],o=a,l=e[1],s=l;for(i=6;i<r;i+=6)(t=e[i])>a?a=t:t<o&&(o=t),(n=e[i+1])>l?l=n:n<s&&(s=n);return e.centerX=(a+o)/2,e.centerY=(l+s)/2,e.size=(a-o)*(l-s)},U=function(e,t){t=t||3;for(var n,i,r,a,o,l,s,h,c,p,d,u,f,g,v,m,b=e.length,y=e[0][0],x=y,_=e[0][1],w=_,T=1/t;--b>-1;)for(n=(o=e[b]).length,a=6;a<n;a+=6)for(c=o[a],p=o[a+1],d=o[a+2]-c,g=o[a+3]-p,u=o[a+4]-c,v=o[a+5]-p,f=o[a+6]-c,m=o[a+7]-p,l=t;--l>-1;)(i=((s=T*l)*s*f+3*(h=1-s)*(s*u+h*d))*s+c)>y?y=i:i<x&&(x=i),(r=(s*s*m+3*h*(s*v+h*g))*s+p)>_?_=r:r<w&&(w=r);return e.centerX=(y+x)/2,e.centerY=(_+w)/2,e.left=x,e.width=y-x,e.top=w,e.height=_-w,e.size=(y-x)*(_-w)},q=function(e,t){return t.length-e.length},Q=function(e,t){var n=e.size||Z(e),i=t.size||Z(t);return Math.abs(i-n)<(n+i)/20?t.centerX-e.centerX||t.centerY-e.centerY:i-n},$=function(e,t){var n,i,r=e.slice(0),a=e.length,o=a-2;for(t|=0,n=0;n<a;n++)i=(n+t)%o,e[n++]=r[i],e[n]=r[i+1]},J=function(e,t,n,i,r){var a,o,l,s,h=e.length,c=0,p=h-2;for(n*=6,o=0;o<h;o+=6)s=e[a=(o+n)%p]-(t[o]-i),l=e[a+1]-(t[o+1]-r),c+=B(l*l+s*s);return c},K=function(e,t,n){var i,r,a,o=e.length,l=X(e),s=X(t),h=s[0]-l[0],c=s[1]-l[1],p=J(e,t,0,h,c),d=0;for(a=6;a<o;a+=6)(r=J(e,t,a/6,h,c))<p&&(p=r,d=a);if(n)for(i=e.slice(0),Y(i),a=6;a<o;a+=6)(r=J(i,t,a/6,h,c))<p&&(p=r,d=-a);return d/6},ee=function(e,t,n){for(var i,r,a,o,l,s,h=e.length,c=99999999999,p=0,d=0;--h>-1;)for(s=(i=e[h]).length,l=0;l<s;l+=6)r=i[l]-t,a=i[l+1]-n,(o=B(r*r+a*a))<c&&(c=o,p=i[l],d=i[l+1]);return[p,d]},te=function(e,t,n,i,r,a){var o,l,s,h,c=t.length,p=0,d=Math.min(e.size||Z(e),t[n].size||Z(t[n]))*i,u=999999999999,f=e.centerX+r,g=e.centerY+a;for(o=n;o<c&&!((t[o].size||Z(t[o]))<d);o++)l=t[o].centerX-f,s=t[o].centerY-g,(h=B(l*l+s*s))<u&&(p=o,u=h);return h=t[p],t.splice(p,1),h},ne=function(e,t,n,i,r){var a,o,l,s,h,c,p,d=t.length-e.length,u=d>0?t:e,f=d>0?e:t,g=0,v="complexity"===i?q:Q,m="position"===i?0:"number"===typeof i?i:.8,b=f.length,y="object"===typeof n&&n.push?n.slice(0):[n],x="reverse"===y[0]||y[0]<0,_="log"===n;if(f[0]){if(u.length>1&&(e.sort(v),t.sort(v),u.size||U(u),f.size||U(f),c=u.centerX-f.centerX,p=u.centerY-f.centerY,v===Q))for(b=0;b<f.length;b++)u.splice(b,0,te(f[b],u,b,m,c,p));if(d)for(d<0&&(d=-d),u[0].length>f[0].length&&F(f[0],(u[0].length-f[0].length)/6|0),b=f.length;g<d;)u[b].size||Z(u[b]),s=(l=ee(f,u[b].centerX,u[b].centerY))[0],h=l[1],f[b++]=[s,h,s,h,s,h,s,h],f.totalPoints+=8,g++;for(b=0;b<e.length;b++)a=t[b],o=e[b],(d=a.length-o.length)<0?F(a,-d/6|0):d>0&&F(o,d/6|0),x&&!1!==r&&!o.reversed&&Y(o),(n=y[b]||0===y[b]?y[b]:"auto")&&(o.closed||Math.abs(o[0]-o[o.length-2])<.5&&Math.abs(o[1]-o[o.length-1])<.5?"auto"===n||"log"===n?(y[b]=n=K(o,a,!b||!1===r),n<0&&(x=!0,Y(o),n=-n),$(o,6*n)):"reverse"!==n&&(b&&n<0&&Y(o),$(o,6*(n<0?-n:n))):!x&&("auto"===n&&Math.abs(a[0]-o[0])+Math.abs(a[1]-o[1])+Math.abs(a[a.length-2]-o[o.length-2])+Math.abs(a[a.length-1]-o[o.length-1])>Math.abs(a[0]-o[o.length-2])+Math.abs(a[1]-o[o.length-1])+Math.abs(a[a.length-2]-o[0])+Math.abs(a[a.length-1]-o[1])||n%2)?(Y(o),y[b]=-1,x=!0):"auto"===n?y[b]=0:"reverse"===n&&(y[b]=-1),o.closed!==a.closed&&(o.closed=a.closed=!1));return _&&V("shapeIndex:["+y.join(",")+"]"),e.shapeIndex=y,y}},ie=function(e,t){var n,i,r,a,o,l,s,h=0,c=parseFloat(e[0]),p=parseFloat(e[1]),d=c+","+p+" ";for(n=.5*t/(.5*(r=e.length)-1),i=0;i<r-2;i+=2){if(h+=n,l=parseFloat(e[i+2]),s=parseFloat(e[i+3]),h>.999999)for(o=1/(Math.floor(h)+1),a=1;h>.999999;)d+=(c+(l-c)*o*a).toFixed(2)+","+(p+(s-p)*o*a).toFixed(2)+" ",h--,a++;d+=l+","+s+" ",c=l,p=s}return d},re=function(e){var t=e[0].match(A)||[],n=e[1].match(A)||[],i=n.length-t.length;i>0?e[0]=ie(t,i):e[1]=ie(n,-i)},ae=function(e){return isNaN(e)?re:function(t){re(t),t[1]=function(e,t){if(!t)return e;var n,i,r,a=e.match(A)||[],o=a.length,l="";for("reverse"===t?(i=o-1,n=-2):(i=(2*(parseInt(t,10)||0)+1+100*o)%o,n=2),r=0;r<o;r+=2)l+=a[i-1]+","+a[i]+" ",i=(i+n)%o;return l}(t[1],parseInt(e,10))}},oe={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"},le=function(e,t){var n,i,r,a,o,l,s,h,c,p,d,u,f,g,v,m,b,y,x,_,w,T,S=e.tagName.toLowerCase(),C=.552284749831;return"path"!==S&&e.getBBox?(l=function(e,t){var n,i=N.e.document.createElementNS("http://www.w3.org/2000/svg","path"),r=Array.prototype.slice.call(e.attributes),a=r.length;for(t=","+t+",";--a>-1;)n=r[a].nodeName.toLowerCase(),-1===t.indexOf(","+n+",")&&i.setAttributeNS(null,n,r[a].nodeValue);return i}(e,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),T=function(e,t){for(var n=t?t.split(","):[],i={},r=n.length;--r>-1;)i[n[r]]=+e.getAttribute(n[r])||0;return i}(e,oe[S]),"rect"===S?(a=T.rx,o=T.ry,i=T.x,r=T.y,p=T.width-2*a,d=T.height-2*o,n=a||o?"M"+(m=(g=(f=i+a)+p)+a)+","+(y=r+o)+" V"+(x=y+d)+" C"+[m,_=x+o*C,v=g+a*C,w=x+o,g,w,g-(g-f)/3,w,f+(g-f)/3,w,f,w,u=i+a*(1-C),w,i,_,i,x,i,x-(x-y)/3,i,y+(x-y)/3,i,y,i,b=r+o*(1-C),u,r,f,r,f+(g-f)/3,r,g-(g-f)/3,r,g,r,v,r,m,b,m,y].join(",")+"z":"M"+(i+p)+","+r+" v"+d+" h"+-p+" v"+-d+" h"+p+"z"):"circle"===S||"ellipse"===S?("circle"===S?h=(a=o=T.r)*C:(a=T.rx,h=(o=T.ry)*C),n="M"+((i=T.cx)+a)+","+(r=T.cy)+" C"+[i+a,r+h,i+(s=a*C),r+o,i,r+o,i-s,r+o,i-a,r+h,i-a,r,i-a,r-h,i-s,r-o,i,r-o,i+s,r-o,i+a,r-h,i+a,r].join(",")+"z"):"line"===S?n="M"+T.x1+","+T.y1+" L"+T.x2+","+T.y2:"polyline"!==S&&"polygon"!==S||(n="M"+(i=(c=(e.getAttribute("points")+"").match(A)||[]).shift())+","+(r=c.shift())+" L"+c.join(","),"polygon"===S&&(n+=","+i+","+r+"z")),l.setAttribute("d",G(l._gsRawPath=W(n))),t&&e.parentNode&&(e.parentNode.insertBefore(l,e),e.parentNode.removeChild(e)),l):e},se=function(e,t,n){var i,r,a="string"===typeof e;return(!a||M.test(e)||(e.match(A)||[]).length<3)&&((i=a?I.selector(e):e&&e[0]?e:[e])&&i[0]?(r=((i=i[0]).nodeName+"").toUpperCase(),t&&"PATH"!==r&&(i=le(i,!1),r="PATH"),e=i.getAttribute("PATH"===r?"d":"points")||"",i===n&&(e=i.getAttributeNS(null,"data-original")||e)):(V("WARNING: invalid morph to: "+e),e=!1)),e},he=function(e,t){for(var n,i,r,a,o,l,s,h,c,p,d,u,f=e.length,g=.2*(t||1);--f>-1;){for(d=(i=e[f]).isSmooth=i.isSmooth||[0,0,0,0],u=i.smoothData=i.smoothData||[0,0,0,0],d.length=4,h=i.length-2,s=6;s<h;s+=6)r=i[s]-i[s-2],a=i[s+1]-i[s-1],o=i[s+2]-i[s],l=i[s+3]-i[s+1],c=P(a,r),p=P(l,o),(n=Math.abs(c-p)<g)&&(u[s-2]=c,u[s+2]=p,u[s-1]=B(r*r+a*a),u[s+3]=B(o*o+l*l)),d.push(n,n,0,0,n,n);i[h]===i[0]&&i[h+1]===i[1]&&(r=i[0]-i[h-2],a=i[1]-i[h-1],o=i[2]-i[0],l=i[3]-i[1],c=P(a,r),p=P(l,o),Math.abs(c-p)<g&&(u[h-2]=c,u[2]=p,u[h-1]=B(r*r+a*a),u[3]=B(o*o+l*l),d[h-2]=d[h-1]=!0))}return e},ce=function(e){var t=e.trim().split(" ");return{x:(e.indexOf("left")>=0?0:e.indexOf("right")>=0?100:isNaN(parseFloat(t[0]))?50:parseFloat(t[0]))/100,y:(e.indexOf("top")>=0?0:e.indexOf("bottom")>=0?100:isNaN(parseFloat(t[1]))?50:parseFloat(t[1]))/100}},pe="Use MorphSVGPlugin.convertToPath(elementOrSelectorText) to convert to a path before morphing.",de=N.e._gsDefine.plugin({propName:"morphSVG",API:2,global:!0,version:"0.9.1",init:function(e,t,n,r){var a,o,l,s,h,c,p,d,u,f,g,v,m,b,y,x,_,w,T,N,S,C,E=e.nodeType?window.getComputedStyle(e):{},M=E.fill+"",j=!("none"===M||"0"===(M.match(A)||[])[3]||"evenodd"===E.fillRule),P=(t.origin||"50 50").split(",");if("function"===typeof t&&(t=t(r,e)),h="POLYLINE"===(a=(e.nodeName+"").toUpperCase())||"POLYGON"===a,"PATH"!==a&&!h&&!t.prop)return V("WARNING: cannot morph a <"+a+"> element. "+pe),!1;if(o="PATH"===a?"d":"points",("string"===typeof t||t.getBBox||t[0])&&(t={shape:t}),!t.prop&&"function"!==typeof e.setAttribute)return!1;if(s=se(t.shape||t.d||t.points||"","d"===o,e),h&&O.test(s))return V("WARNING: a <"+a+"> cannot accept path data. "+pe),!1;if(c=t.shapeIndex||0===t.shapeIndex?t.shapeIndex:"auto",p=t.map||de.defaultMap,this._prop=t.prop,this._render=t.render||de.defaultRender,this._apply="updateTarget"in t?t.updateTarget:de.defaultUpdateTarget,this._rnd=Math.pow(10,isNaN(t.precision)?2:+t.precision),this._tween=n,s){if(this._target=e,_="object"===typeof t.precompile,f=this._prop?e[this._prop]:e.getAttribute(o),this._prop||e.getAttributeNS(null,"data-original")||e.setAttributeNS(null,"data-original",f),"d"===o||this._prop){if(f=W(_?t.precompile[0]:f),g=W(_?t.precompile[1]:s),!_&&!ne(f,g,c,p,j))return!1;for("log"!==t.precompile&&!0!==t.precompile||V('precompile:["'+G(f)+'","'+G(g)+'"]'),(S="linear"!==(t.type||de.defaultType))&&(f=he(f,t.smoothTolerance),g=he(g,t.smoothTolerance),f.size||U(f),g.size||U(g),N=ce(P[0]),this._origin=f.origin={x:f.left+N.x*f.width,y:f.top+N.y*f.height},P[1]&&(N=ce(P[1])),this._eOrigin={x:g.left+N.x*g.width,y:g.top+N.y*g.height}),this._rawPath=e._gsRawPath=f,m=f.length;--m>-1;)for(y=f[m],x=g[m],d=y.isSmooth||[],u=x.isSmooth||[],b=y.length,i=0,v=0;v<b;v+=2)x[v]===y[v]&&x[v+1]===y[v+1]||(S?d[v]&&u[v]?(w=y.smoothData,T=x.smoothData,C=v+(v===b-4?7-b:5),this._controlPT={_next:this._controlPT,i:v,j:m,l1s:w[v+1],l1c:T[v+1]-w[v+1],l2s:w[C],l2c:T[C]-w[C]},l=this._tweenRotation(y,x,v+2),this._tweenRotation(y,x,v,l),this._tweenRotation(y,x,C-1,l),v+=4):this._tweenRotation(y,x,v):(this._addTween(y,v,y[v],x[v]),l=this._addTween(y,v+1,y[v+1],x[v+1])))}else l=this._addTween(e,"setAttribute",e.getAttribute(o)+"",s+"","morphSVG",!1,o,ae(c));S&&(this._addTween(this._origin,"x",this._origin.x,this._eOrigin.x),l=this._addTween(this._origin,"y",this._origin.y,this._eOrigin.y)),l&&(this._overwriteProps.push("morphSVG"),l.end=s,l.endProp=o)}return!0},set:function(e){var t,n,i,r,a,o,l,s,h,c,p,d,u,f=this._rawPath,g=this._controlPT,v=this._anchorPT,m=this._rnd,b=this._target;if(this._super.setRatio.call(this,e),1===e&&this._apply)for(i=this._firstPT;i;)i.end&&(this._prop?b[this._prop]=i.end:b.setAttribute(i.endProp,i.end)),i=i._next;else if(f){for(;v;)o=v.sa+e*v.ca,a=v.sl+e*v.cl,v.t[v.i]=this._origin.x+L(o)*a,v.t[v.i+1]=this._origin.y+k(o)*a,v=v._next;for(n=e<.5?2*e*e:(4-2*e)*e-1;g;)u=(l=g.i)+(l===(r=f[g.j]).length-4?7-r.length:5),o=P(r[u]-r[l+1],r[u-1]-r[l]),p=k(o),d=L(o),h=r[l+2],c=r[l+3],a=g.l1s+n*g.l1c,r[l]=h-d*a,r[l+1]=c-p*a,a=g.l2s+n*g.l2c,r[u-1]=h+d*a,r[u]=c+p*a,g=g._next;if(b._gsRawPath=f,this._apply){for(t=""," ",s=0;s<f.length;s++)for(a=(r=f[s]).length,t+="M"+(r[0]*m|0)/m+" "+(r[1]*m|0)/m+" C",l=2;l<a;l++)t+=(r[l]*m|0)/m+" ";this._prop?b[this._prop]=t:b.setAttribute("d",t)}}this._render&&f&&this._render.call(this._tween,f,b)}});de.prototype._tweenRotation=function(e,t,n,r){var a,o,l,s=this._origin,h=this._eOrigin,c=e[n]-s.x,p=e[n+1]-s.y,d=B(c*c+p*p),u=P(p,c);return c=t[n]-h.x,p=t[n+1]-h.y,a=P(p,c)-u,o=(l=a)!==l%S?l+(l<0?z:-z):l,!r&&i&&Math.abs(o+i.ca)<R&&(r=i),this._anchorPT=i={_next:this._anchorPT,t:e,sa:u,ca:r&&o*r.ca<0&&Math.abs(o)>D?a:o,sl:d,cl:B(c*c+p*p)-d,i:n}},de.pathFilter=function(e,t,n,i,r){var a=W(e[0]),o=W(e[1]);ne(a,o,t||0===t?t:"auto",n,r)&&(e[0]=G(a),e[1]=G(o),"log"!==i&&!0!==i||V('precompile:["'+e[0]+'","'+e[1]+'"]'))},de.pointsFilter=re,de.getTotalSize=U,de.subdivideRawBezier=de.subdivideSegment=F,de.rawPathToString=G,de.defaultType="linear",de.defaultUpdateTarget=!0,de.defaultMap="size",de.stringToRawPath=de.pathDataToRawBezier=function(e){return W(se(e,!0))},de.equalizeSegmentQuantity=ne,de.convertToPath=function(e,t){"string"===typeof e&&(e=I.selector(e));for(var n=e&&0!==e.length?e.length&&e[0]&&e[0].nodeType?Array.prototype.slice.call(e,0):[e]:[],i=n.length;--i>-1;)n[i]=le(n[i],!1!==t);return n},de.pathDataToBezier=function(e,t){var n,i,r,a,o,l,s,h,c=W(se(e,!0))[0]||[],p=0;if(h=(t=t||{}).align||t.relative,a=t.matrix||[1,0,0,1,0,0],o=t.offsetX||0,l=t.offsetY||0,"relative"===h||!0===h?(o-=c[0]*a[0]+c[1]*a[2],l-=c[0]*a[1]+c[1]*a[3],p="+="):(o+=a[4],l+=a[5],h&&(h="string"===typeof h?I.selector(h):h&&h[0]?h:[h])&&h[0]&&(o-=(s=h[0].getBBox()||{x:0,y:0}).x,l-=s.y)),n=[],r=c.length,a&&"1,0,0,1,0,0"!==a.join(","))for(i=0;i<r;i+=2)n.push({x:p+(c[i]*a[0]+c[i+1]*a[2]+o),y:p+(c[i]*a[1]+c[i+1]*a[3]+l)});else for(i=0;i<r;i+=2)n.push({x:p+(c[i]+o),y:p+(c[i+1]+l)});return n};n(44),_.a;var ue=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(u.a)(this,Object(f.a)(t).call(this))).morphSVG=de,e.openCloseSidebar=e.openCloseSidebar.bind(Object(x.a)(e)),e.sidebar=null,e.sidebarBg=null,e.naviLinks=null,e.fixedTitle=null,e.rightArrow1=null,e.rightArrow2=null,e.leftArrow1=null,e.leftArrow2=null,e.sidebarTween=null,e}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.sidebarTween=new w.a({paused:!0}).to(this.sidebar,.1,{display:"block"}).to(this.sidebarBg,1.5,{x:"-45%",ease:T.b.easeInOut}).to(this.sidebarBg,2,{attr:Object(y.a)({d:"M24-48H391.837C193.4,367.237,565.913,513.078,391.473,1032.037c0,.053-367.473,0-367.473,0Z"},"d","M24-48H391.837c-.037-.036-.361,1080-.363,1080.037,0,.053-367.473,0-367.473,0Z"),ease:T.a.easeOut},"-=1").to(this.fixedTitle,.5,{right:"-210"},"-=2").to(this.rightArrow1,.1,{morphSVG:this.leftArrow1},"-=2").to(this.rightArrow2,.1,{morphSVG:this.leftArrow2},"-=2").to(this.naviLinks,.1,{display:"block"},"-=1.5").reverse()}},{key:"openCloseSidebar",value:function(){this.sidebarTween.reversed()?this.sidebarTween.play():this.sidebarTween.reverse(0),console.log(this.props.nav),this.props.changeNavState(!this.props.nav.navIsOpen)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{ref:function(t){return e.fixedTitle=t},id:"fixedNaviBar"},o.a.createElement("div",{onClick:this.openCloseSidebar,id:"svgDiv"},o.a.createElement("svg",{id:"rightarrow",xmlns:"http://www.w3.org/2000/svg",width:"26.004",height:"25.84",viewBox:"0 0 26.004 25.84"},o.a.createElement("path",{ref:function(t){return e.rightArrow1=t},id:"Path_1","data-name":"Path 1",d:"M13.049.58,10.965,2.664,21.8,13.5,10.965,24.336l2.084,2.084L25.969,13.5Z",transform:"translate(-10.965 -0.58)",fill:"#231f20"}),o.a.createElement("path",{ref:function(t){return e.rightArrow2=t},id:"Path_1","data-name":"Path 2",d:"M2.049.58-.035,2.664,10.8,13.5-.035,24.336,2.049,26.42,14.969,13.5Z",transform:"translate(11.035 -0.58)",fill:"#231f20"}),o.a.createElement("path",{ref:function(t){return e.leftArrow1=t},id:"Path_1a","data-name":"Path 3",d:"M23.885.58l2.084,2.084L15.133,13.5,25.969,24.336,23.885,26.42,10.965,13.5Z",fill:"#231f20"}),o.a.createElement("path",{ref:function(t){return e.leftArrow2=t},id:"Path_1a","data-name":"Path 4",d:"M12.885.58l2.084,2.084L4.133,13.5,14.969,24.336,12.885,26.42-.035,13.5Z",fill:"#231f20"}))),o.a.createElement("div",{id:"webPageTitle"},o.a.createElement("a",{href:"/"},"Nick and Shera"))),o.a.createElement("div",{ref:function(t){return e.sidebar=t},id:"mobilenav"},o.a.createElement("svg",{className:"waveySidebar",preserveAspectRatio:"xMidYMid slice"},o.a.createElement("path",{ref:function(t){return e.sidebarBg=t},id:"start",d:"M24-48H391.837c147.6,337.924-272.353,511.7-.363,1080.037,0,.053-367.473,0-367.473,0Z",transform:"translate(-420 0)",fill:"#133749"})),o.a.createElement("nav",{ref:function(t){return e.naviLinks=t},id:"navi"},o.a.createElement("div",{className:"linksDiv"},o.a.createElement("ul",{id:"linksList"},o.a.createElement(v.b,{to:"/"},o.a.createElement("li",null,"Home")),o.a.createElement(v.b,{to:"/about"},o.a.createElement("li",null,"About")),o.a.createElement(v.b,{to:"/contact"},o.a.createElement("li",null,"Contact")),o.a.createElement(v.b,{to:"/podcast"},o.a.createElement("li",null,"Podcast")),o.a.createElement(v.b,{to:"/event"},o.a.createElement("li",null,"Event")))))))}}]),t}(o.a.Component),fe=Object(c.b)(function(e){return{nav:e.nav}},function(e){return{changeNavState:function(t){e({type:"NAV_STATE",payload:t})}}})(ue);n(45);!function(e){var t=e.GreenSockGlobals||e,n=function(e){var n,i=e.split("."),r=t;for(n=0;n<i.length;n++)r[i[n]]=r=r[i[n]]||{};return r}("com.greensock.utils"),i=N.e.document||{},r="undefined"!==typeof e?e:i.defaultView||{getComputedStyle:function(){}},a=function(e){return r.getComputedStyle(e)},o=/([A-Z])/g,l=function(e,t,n,i){var r;return(n=n||a(e))?r=(e=n.getPropertyValue(t.replace(o,"-$1").toLowerCase()))||n.length?e:n[t]:e.currentStyle&&(r=(n=e.currentStyle)[t]),i?r:parseInt(r,10)||0},s=function(e){return!!(e.length&&e[0]&&(e[0].nodeType&&e[0].style&&!e.nodeType||e[0].length&&e[0][0]))},h=function(e,t){for(var n,i=t.length;--i>-1;)if(n=t[i],e.substr(0,n.length)===n)return n.length},c=/(?:\r|\n|\t\t)/g,p=/(?:\s\s+)/g,d=function(e){return(e.charCodeAt(0)-55296<<10)+(e.charCodeAt(1)-56320)+65536},u=" style='position:relative;display:inline-block;"+(i.all&&!i.addEventListener?"*display:inline;*zoom:1;'":"'"),f=function(e,t){var n=-1!==(e=e||"").indexOf("++"),i=1;return n&&(e=e.split("++").join("")),function(){return"<"+t+u+(e?" class='"+e+(n?i++:"")+"'>":">")}},g=n.SplitText=t.SplitText=function(e,t){if("string"===typeof e&&(e=g.selector(e)),!e)throw"cannot split a null element.";this.elements=s(e)?function(e){var t,n,i,r=[],a=e.length;for(t=0;t<a;t++)if(n=e[t],s(n))for(i=n.length,i=0;i<n.length;i++)r.push(n[i]);else r.push(n);return r}(e):[e],this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=t||{},this.split(t)},v=function e(t,n,i){var r=t.nodeType;if(1===r||9===r||11===r)for(t=t.firstChild;t;t=t.nextSibling)e(t,n,i);else 3!==r&&4!==r||(t.nodeValue=t.nodeValue.split(n).join(i))},m=function(e,t){for(var n=t.length;--n>-1;)e.push(t[n])},b=function(e){var t,n=[],i=e.length;for(t=0;t!==i;n.push(e[t++]));return n},y=function(e,t,n){for(var i;e&&e!==t;){if(i=e._next||e.nextSibling)return i.textContent.charAt(0)===n;e=e.parentNode||e._parent}return!1},x=function e(t){var n,i,r=b(t.childNodes),a=r.length;for(n=0;n<a;n++)(i=r[n])._isSplit?e(i):(n&&3===i.previousSibling.nodeType?i.previousSibling.nodeValue+=3===i.nodeType?i.nodeValue:i.firstChild.nodeValue:3!==i.nodeType&&t.insertBefore(i.firstChild,i),t.removeChild(i))},_=function(e,t,n,r,o,s,h){var c,p,d,u,f,g,b,_,w,T,N,S,C=a(e),E=l(e,"paddingLeft",C),A=-999,M=l(e,"borderBottomWidth",C)+l(e,"borderTopWidth",C),O=l(e,"borderLeftWidth",C)+l(e,"borderRightWidth",C),j=l(e,"paddingTop",C)+l(e,"paddingBottom",C),P=l(e,"paddingLeft",C)+l(e,"paddingRight",C),L=.2*l(e,"fontSize"),k=l(e,"textAlign",C,!0),B=[],z=[],R=[],D=t.wordDelimiter||" ",I=t.tag?t.tag:t.span?"span":"div",V=t.type||t.split||"chars,words,lines",H=o&&-1!==V.indexOf("lines")?[]:null,W=-1!==V.indexOf("words"),F=-1!==V.indexOf("chars"),G="absolute"===t.position||!0===t.absolute,Y=t.linesClass,X=-1!==(Y||"").indexOf("++"),Z=[];for(X&&(Y=Y.split("++").join("")),d=(p=e.getElementsByTagName("*")).length,f=[],c=0;c<d;c++)f[c]=p[c];if(H||G)for(c=0;c<d;c++)((g=(u=f[c]).parentNode===e)||G||F&&!W)&&(S=u.offsetTop,H&&g&&Math.abs(S-A)>L&&("BR"!==u.nodeName||0===c)&&(b=[],H.push(b),A=S),G&&(u._x=u.offsetLeft,u._y=S,u._w=u.offsetWidth,u._h=u.offsetHeight),H&&((u._isSplit&&g||!F&&g||W&&g||!W&&u.parentNode.parentNode===e&&!u.parentNode._isSplit)&&(b.push(u),u._x-=E,y(u,e,D)&&(u._wordEnd=!0)),"BR"===u.nodeName&&(u.nextSibling&&"BR"===u.nextSibling.nodeName||0===c)&&H.push([])));for(c=0;c<d;c++)g=(u=f[c]).parentNode===e,"BR"!==u.nodeName?(G&&(w=u.style,W||g||(u._x+=u.parentNode._x,u._y+=u.parentNode._y),w.left=u._x+"px",w.top=u._y+"px",w.position="absolute",w.display="block",w.width=u._w+1+"px",w.height=u._h+"px"),!W&&F?u._isSplit?(u._next=u.nextSibling,u.parentNode.appendChild(u)):u.parentNode._isSplit?(u._parent=u.parentNode,!u.previousSibling&&u.firstChild&&(u.firstChild._isFirst=!0),u.nextSibling&&" "===u.nextSibling.textContent&&!u.nextSibling.nextSibling&&Z.push(u.nextSibling),u._next=u.nextSibling&&u.nextSibling._isFirst?null:u.nextSibling,u.parentNode.removeChild(u),f.splice(c--,1),d--):g||(S=!u.nextSibling&&y(u.parentNode,e,D),u.parentNode._parent&&u.parentNode._parent.appendChild(u),S&&u.parentNode.appendChild(i.createTextNode(" ")),"span"===I&&(u.style.display="inline"),B.push(u)):u.parentNode._isSplit&&!u._isSplit&&""!==u.innerHTML?z.push(u):F&&!u._isSplit&&("span"===I&&(u.style.display="inline"),B.push(u))):H||G?(u.parentNode&&u.parentNode.removeChild(u),f.splice(c--,1),d--):W||e.appendChild(u);for(c=Z.length;--c>-1;)Z[c].parentNode.removeChild(Z[c]);if(H){for(G&&(T=i.createElement(I),e.appendChild(T),N=T.offsetWidth+"px",S=T.offsetParent===e?0:e.offsetLeft,e.removeChild(T)),w=e.style.cssText,e.style.cssText="display:none;";e.firstChild;)e.removeChild(e.firstChild);for(_=" "===D&&(!G||!W&&!F),c=0;c<H.length;c++){for(b=H[c],(T=i.createElement(I)).style.cssText="display:block;text-align:"+k+";position:"+(G?"absolute;":"relative;"),Y&&(T.className=Y+(X?c+1:"")),R.push(T),d=b.length,p=0;p<d;p++)"BR"!==b[p].nodeName&&(u=b[p],T.appendChild(u),_&&u._wordEnd&&T.appendChild(i.createTextNode(" ")),G&&(0===p&&(T.style.top=u._y+"px",T.style.left=E+S+"px"),u.style.top="0px",S&&(u.style.left=u._x-S+"px")));0===d?T.innerHTML="&nbsp;":W||F||(x(T),v(T,String.fromCharCode(160)," ")),G&&(T.style.width=N,T.style.height=u._h+"px"),e.appendChild(T)}e.style.cssText=w}G&&(h>e.clientHeight&&(e.style.height=h-j+"px",e.clientHeight<h&&(e.style.height=h+M+"px")),s>e.clientWidth&&(e.style.width=s-P+"px",e.clientWidth<s&&(e.style.width=s+O+"px"))),m(n,B),W&&m(r,z),m(o,R)},w=function e(t,n,r,a){var o,s,u=b(t.childNodes),f=u.length,g="absolute"===n.position||!0===n.absolute;if(3!==t.nodeType||f>1){for(n.absolute=!1,o=0;o<f;o++)(3!==(s=u[o]).nodeType||/\S+/.test(s.nodeValue))&&(g&&3!==s.nodeType&&"inline"===l(s,"display",null,!0)&&(s.style.display="inline-block",s.style.position="relative"),s._isSplit=!0,e(s,n,r,a));return n.absolute=g,void(t._isSplit=!0)}!function(e,t,n,r){var a,o,l,s,u,f,g,m,b,y,x=t.tag?t.tag:t.span?"span":"div",_=-1!==(t.type||t.split||"chars,words,lines").indexOf("chars"),w="absolute"===t.position||!0===t.absolute,T=t.wordDelimiter||" ",N=" "!==T?"":w?"&#173; ":" ",S="</"+x+">",C=!0,E=t.specialChars?"function"===typeof t.specialChars?t.specialChars:h:null,A=i.createElement("div"),M=e.parentNode;for(M.insertBefore(A,e),A.textContent=e.nodeValue,M.removeChild(e),g=-1!==(a=function e(t){var n=t.nodeType,i="";if(1===n||9===n||11===n){if("string"===typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)i+=e(t)}else if(3===n||4===n)return t.nodeValue;return i}(e=A)).indexOf("<"),!1!==t.reduceWhiteSpace&&(a=a.replace(p," ").replace(c,"")),g&&(a=a.split("<").join("{{LT}}")),u=a.length,o=(" "===a.charAt(0)?N:"")+n(),l=0;l<u;l++)if(f=a.charAt(l),E&&(y=E(a.substr(l),t.specialChars)))f=a.substr(l,y||1),o+=_&&" "!==f?r()+f+"</"+x+">":f,l+=y-1;else if(f===T&&a.charAt(l-1)!==T&&l){for(o+=C?S:"",C=!1;a.charAt(l+1)===T;)o+=N,l++;l===u-1?o+=N:")"!==a.charAt(l+1)&&(o+=N+n(),C=!0)}else"{"===f&&"{{LT}}"===a.substr(l,6)?(o+=_?r()+"{{LT}}</"+x+">":"{{LT}}",l+=5):f.charCodeAt(0)>=55296&&f.charCodeAt(0)<=56319||a.charCodeAt(l+1)>=65024&&a.charCodeAt(l+1)<=65039?(m=d(a.substr(l,2)),b=d(a.substr(l+2,2)),s=m>=127462&&m<=127487&&b>=127462&&b<=127487||b>=127995&&b<=127999?4:2,o+=_&&" "!==f?r()+a.substr(l,s)+"</"+x+">":a.substr(l,s),l+=s-1):o+=_&&" "!==f?r()+f+"</"+x+">":f;e.outerHTML=o+(C?S:""),g&&v(M,"{{LT}}","<")}(t,n,r,a)},T=g.prototype;T.split=function(e){this.isSplit&&this.revert(),this.vars=e=e||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var t,n,i,r=this.elements.length,a=e.tag?e.tag:e.span?"span":"div",o=f(e.wordsClass,a),l=f(e.charsClass,a);--r>-1;)i=this.elements[r],this._originals[r]=i.innerHTML,t=i.clientHeight,n=i.clientWidth,w(i,e,o,l),_(i,e,this.chars,this.words,this.lines,n,t);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},T.revert=function(){if(!this._originals)throw"revert() call wasn't scoped properly.";for(var e=this._originals.length;--e>-1;)this.elements[e].innerHTML=this._originals[e];return this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},g.selector=e.$||e.jQuery||function(t){var n=e.$||e.jQuery;return n?(g.selector=n,n(t)):"undefined"===typeof document?t:document.querySelectorAll?document.querySelectorAll(t):document.getElementById("#"===t.charAt(0)?t.substr(1):t)},g.version="0.7.0"}(N.e);var ge=N.g.SplitText,ve=(_.a,function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(u.a)(this,Object(f.a)(t).call(this))).ourNames=null,e.sinceDate=null,e.homeDivBody=null,e}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.splitText=new ge(this.ourNames,{type:"chars"}),this.headerTextTl=new w.a({paused:!0}).staggerFromTo(this.splitText.chars,2,{y:"-100"},{y:"100",ease:T.a.easeInOut},.2).from(this.sinceDate,1,{x:"500"}).play(),this.openCloseNav=new w.a({paused:!0}).to(this.homeDivBody,1.5,{right:"-210",ease:T.a.easeInOut}).to({},1,{})}},{key:"componentDidUpdate",value:function(){!0===this.props.nav.navIsOpen?this.openCloseNav.play():this.openCloseNav.reverse(0)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"hpBodyDiv",ref:function(t){return e.homeDivBody=t}},o.a.createElement("div",{className:"hpHeaderDiv"},o.a.createElement("h1",{ref:function(t){return e.ourNames=t}},"Nick & Shera"),o.a.createElement("h3",{ref:function(t){return e.sinceDate=t}},"since 03'")),o.a.createElement("div",null))}}]),t}(o.a.Component)),me=Object(c.b)(function(e){return{nav:e.nav}},function(e){return{changeNavState:function(t){e({type:"NAV_STATE",payload:t})}}})(ve),be=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(u.a)(this,Object(f.a)(t).call(this,e))).state={},n}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h3",null,"About Page"))}}]),t}(o.a.Component),ye=function(e){function t(){return Object(p.a)(this,t),Object(u.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement(v.a,{basename:"/nickandshera"},o.a.createElement("div",{className:"App"},window.innerWidth<768?o.a.createElement(fe,null):o.a.createElement(b,null),o.a.createElement(m.a,{path:"/",exact:!0,component:me}),o.a.createElement(m.a,{path:"/about",component:be})))}}]),t}(o.a.Component);n(46),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var xe=Object(h.c)(Object(h.b)({nav:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{navIsOpen:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NAV_STATE":e=Object(r.a)({},e,{navIsOpen:t.payload})}return e}},{}));s.a.render(o.a.createElement(c.a,{store:xe},o.a.createElement(ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.1dff500c.chunk.js.map