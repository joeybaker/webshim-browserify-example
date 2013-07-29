webshims.register("forms-picker",function(e,t,i,n,a,r){"use strict";var o=t.picker,s=o._actions,l=r,u=function(e){var t=[e.getFullYear(),l.addZero(e.getMonth()+1),l.addZero(e.getDate())];return t.month=t[0]+"-"+t[1],t.date=t[0]+"-"+t[1]+"-"+t[2],t},c=u(new Date((new Date).getTime()-1e3*60*(new Date).getTimezoneOffset())),d=function(t){t=e(t||this.activeButton),this.activeButton.attr({tabindex:"-1","aria-selected":"false"}),this.activeButton=t.attr({tabindex:"0","aria-selected":"true"}),this.index=this.buttons.index(this.activeButton[0]),clearTimeout(this.timer),o._genericSetFocus.apply(this,arguments)},p=function(){var t;this.popover.navedInitFocus&&(t=this.popover.navedInitFocus.sel||this.popover.navedInitFocus,this.activeButton&&this.activeButton[0]||!this.buttons[t]?t&&(this.activeButton=e(t,this.element)):this.activeButton=this.buttons[t](),!this.activeButton[0]&&this.popover.navedInitFocus.alt&&(this.activeButton=this.buttons[this.popover.navedInitFocus.alt]())),this.activeButton&&this.activeButton[0]||(this.activeButton=this.buttons.filter(".checked-value")),this.activeButton[0]||(this.activeButton=this.buttons.filter(".this-value")),this.activeButton[0]||(this.activeButton=this.buttons.eq(0)),this.setFocus(this.activeButton,this.opts.noFocus)},f=t.formcfg,h=f[e.webshims.activeLang()]||f[""];e.webshims.activeLang({register:"form-core",callback:function(){e.each(arguments,function(e,t){return f[t]?(h=f[t],!1):a})}}),t.ListBox=function(t,i,n){this.element=e("ul",t),this.popover=i,this.opts=n||{},this.buttons=e("button:not(:disabled)",this.element),this.ons(this),this._initialFocus()},t.ListBox.prototype={setFocus:d,_initialFocus:p,prev:function(){var e=this.index-1;0>e?this.opts.prev&&(this.popover.navedInitFocus="last",this.popover.actionFn(this.opts.prev),this.popover.navedInitFocus=!1):this.setFocus(this.buttons.eq(e))},next:function(){var e=this.index+1;e>=this.buttons.length?this.opts.next&&(this.popover.navedInitFocus="first",this.popover.actionFn(this.opts.next),this.popover.navedInitFocus=!1):this.setFocus(this.buttons.eq(e))},ons:function(e){this.element.on({keydown:function(t){var i,n=t.keyCode;return t.ctrlKey?a:(36==n||33==n?(e.setFocus(e.buttons.eq(0)),i=!0):34==n||35==n?(e.setFocus(e.buttons.eq(e.buttons.length-1)),i=!0):38==n||37==n?(e.prev(),i=!0):(40==n||39==n)&&(e.next(),i=!0),i?!1:a)}})}},t.Grid=function(t,i,n){this.element=e("tbody",t),this.popover=i,this.opts=n||{},this.buttons=e("button:not(:disabled,.othermonth)",this.element),this.ons(this),this._initialFocus(),this.popover.openedByFocus&&(this.popover.activeElement=this.activeButton)},t.Grid.prototype={setFocus:d,_initialFocus:p,first:function(){this.setFocus(this.buttons.eq(0))},last:function(){this.setFocus(this.buttons.eq(this.buttons.length-1))},upPage:function(){e(".ws-picker-header > button:not(:disabled)",this.popover.element).trigger("click")},downPage:function(){this.activeButton.filter(':not([data-action="changeInput"])').trigger("click")},ons:function(e){this.element.on({keydown:function(t){var i,n=t.keyCode;return t.shiftKey?a:(t.ctrlKey&&40==n?i="downPage":t.ctrlKey&&38==n?i="upPage":33==n||t.ctrlKey&&37==n?i="prevPage":34==n||t.ctrlKey&&39==n?i="nextPage":36==t.keyCode||33==t.keyCode?i="first":35==t.keyCode?i="last":38==t.keyCode?i="up":37==t.keyCode?i="prev":40==t.keyCode?i="down":39==t.keyCode&&(i="next"),i?(e[i](),!1):a)}})}},e.each({prevPage:{get:"last",action:"prev"},nextPage:{get:"first",action:"next"}},function(e,i){t.Grid.prototype[e]=function(){this.opts[i.action]&&(this.popover.navedInitFocus={sel:'button[data-id="'+this.activeButton.attr("data-id")+'"]:not(:disabled,.othermonth)',alt:i.get},this.popover.actionFn(this.opts[i.action]),this.popover.navedInitFocus=!1)}}),e.each({up:{traverse:"prevAll",get:"last",action:"prev",reverse:!0},down:{traverse:"nextAll",get:"first",action:"next"}},function(i,n){t.Grid.prototype[i]=function(){var t=this.activeButton.closest("td").prop("cellIndex"),i="td:nth-child("+(t+1)+") button:not(:disabled,.othermonth)",a=this.activeButton.closest("tr")[n.traverse]();n.reverse&&(a=e(a.get().reverse())),a=a.find(i)[n.get](),a[0]?this.setFocus(a.eq(0)):this.opts[n.action]&&(this.popover.navedInitFocus=i+":"+n.get,this.popover.actionFn(this.opts[n.action]),this.popover.navedInitFocus=!1)}}),e.each({prev:{traverse:"prevAll",get:"last",reverse:!0},next:{traverse:"nextAll",get:"first"}},function(i,n){t.Grid.prototype[i]=function(){var t="button:not(:disabled,.othermonth)",a=this.activeButton.closest("td")[n.traverse]("td");n.reverse&&(a=e(a.get().reverse())),a=a.find(t)[n.get](),a[0]||(a=this.activeButton.closest("tr")[n.traverse]("tr"),n.reverse&&(a=e(a.get().reverse())),a=a.find(t)[n.get]()),a[0]?this.setFocus(a.eq(0)):this.opts[i]&&(this.popover.navedInitFocus=n.get,this.popover.actionFn(this.opts[i]),this.popover.navedInitFocus=!1)}}),o.getWeek=function(e){var t,i=new Date(e.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),t=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((t-i)/864e5)/7)+1},o.getYearList=function(e,t){var i,n,a,r,s,l,u,d,p,f,h=t.options.size,m=t.options.max.split("-"),v=t.options.min.split("-"),g=t.options.value.split("-"),y=0,b=0,w="",T=0;for("max"==t.options.useDecadeBase&&m[0]?y=11-m[0]%12:"min"==t.options.useDecadeBase&&v[0]&&(y=11-v[0]%12),e=1*e[0],f=e-(e+y)%(12*h),i=0;h>i;i++){for(i?f+=12:l=o.isInRange([f-1],m,v)?{"data-action":"setYearList",value:f-1}:!1,w+='<div class="year-list picker-list ws-index-'+i+'"><div class="ws-picker-header"><button disabled="disabled">'+f+" \u2013 "+(f+11)+"</button></div>",s=[],n=0;12>n;n++)a=f+n,p=[],o.isInRange([a],m,v)?(r="",b++):r=' disabled=""',a==c[0]&&p.push("this-value"),g[0]==a&&p.push("checked-value"),d=p.length?' class="'+p.join(" ")+'"':"",!n||n%3||(T++,s.push('</tr><tr class="ws-row-'+T+'">')),s.push('<td class="ws-item-'+n+'" role="presentation"><button  data-id="year-'+n+'" type="button"'+r+d+' data-action="setMonthList" value="'+a+'" tabindex="-1" role="gridcell">'+a+"</button></td>");i==h-1&&(u=o.isInRange([a+1],m,v)?{"data-action":"setYearList",value:a+1}:!1),w+='<div class="picker-grid"><table role="grid" aria-label="'+f+" \u2013 "+(f+11)+'"><tbody><tr class="ws-row-0">'+s.join("")+"</tr></tbody></table></div></div>"}return{enabled:b,main:w,next:u,prev:l,type:"Grid"}},o.getMonthList=function(e,t){var i,n,a,r,s,l,u,d,p,f,m,v=t.options,g=v.size,y=v.max.split("-"),b=v.min.split("-"),w=v.value.split("-"),T=0,x=0,E="";for(e=e[0]-Math.floor((g-1)/2),i=0;g>i;i++){for(i?e++:d=o.isInRange([e-1],y,b)?{"data-action":"setMonthList",value:e-1}:!1,i==g-1&&(p=o.isInRange([e+1],y,b)?{"data-action":"setMonthList",value:e+1}:!1),l=[],o.isInRange([e,"01"],y,b)||o.isInRange([e,"12"],y,b)?(u=!1,s=""):(s=' disabled=""',u=!0),v.minView>=1&&(s=' disabled=""'),E+='<div class="month-list picker-list ws-index-'+i+'"><div class="ws-picker-header">',E+=v.selectNav?'<select data-action="setMonthList" class="year-select">'+o.createYearSelect(e,y,b).join("")+"</select>":'<button data-action="setYearList"'+s+' value="'+e+'" tabindex="-1">'+e+"</button>",E+="</div>",n=0;12>n;n++)r=h.date.monthkeys[n+1],a=(h.date[v.monthNames]||h.date.monthNames)[n],m=[],u||!o.isInRange([e,r],y,b)?s=' disabled=""':(s="",T++),e==c[0]&&c[1]==r&&m.push("this-value"),w[0]==e&&w[1]==r&&m.push("checked-value"),f=m.length?' class="'+m.join(" ")+'"':"",!n||n%3||(x++,l.push('</tr><tr class="ws-row-'+x+'">')),l.push('<td class="ws-item-'+n+'" role="presentation"><button data-id="month-'+n+'" type="button"'+s+f+' data-action="'+("month"==t.type?"changeInput":"setDayList")+'" value="'+e+"-"+r+'" tabindex="-1" role="gridcell" aria-label="'+h.date.monthNames[n]+'">'+a+"</button></td>");E+='<div class="picker-grid"><table role="grid" aria-label="'+e+'"><tbody><tr class="ws-row-0">'+l.join("")+"</tr></tbody></table></div></div>"}return{enabled:T,main:E,prev:d,next:p,type:"Grid"}},o.getDayList=function(t,i){var n,a,r,s,l,d,p,f,m,v,g,y,b,w,T,x,E,N,A,k=i.options,C=k.size,M=k.max.split("-"),D=k.min.split("-"),S=k.value.split("-"),_=h.date[k.monthNamesHead]||h.date[k.monthNames]||h.date.monthNames,P=[],O=new Date(t[0],t[1]-1,1);for(O.setMonth(O.getMonth()-Math.floor((C-1)/2)),n=0;C>n;n++){for(O.setDate(1),g=O.getMonth(),v=0,n||(N=new Date(O.getTime()),N.setDate(-1),w=u(N),d=o.isInRange(w,M,D)?{"data-action":"setDayList",value:w[0]+"-"+w[1]}:!1),w=u(O),P.push('<div class="day-list picker-list ws-index-'+n+'"><div class="ws-picker-header">'),k.selectNav&&(T=['<select data-action="setDayList" class="month-select" tabindex="0">'+o.createMonthSelect(w,M,D,_).join("")+"</select>",'<select data-action="setDayList" class="year-select" tabindex="0">'+o.createYearSelect(w[0],M,D,"-"+w[1]).join("")+"</select>"],h.date.showMonthAfterYear&&T.reverse(),P.push(T.join(" "))),x=[h.date.monthNames[1*w[1]-1],w[0]],T=[_[1*w[1]-1],w[0]],h.date.showMonthAfterYear&&(T.reverse(),x.reverse()),i.options.selectNav||P.push('<button data-action="setMonthList"'+(k.minView>=2?' disabled="" ':"")+' value="'+w.date+'" tabindex="-1">'+T.join(" ")+"</button>"),P.push('</div><div class="picker-grid"><table role="grid" aria-label="'+x.join(" ")+'"><thead><tr>'),i.options.showWeek&&P.push('<th class="week-header">'+h.date.weekHeader+"</th>"),r=h.date.firstDay;h.date.dayNamesShort.length>r;r++)P.push('<th class="day-'+r+'"><abbr title="'+h.date.dayNames[r]+'">'+h.date.dayNamesShort[r]+"</abbr></th>");for(r=h.date.firstDay;r--;)P.push('<th class="day-'+r+'"><abbr title="'+h.date.dayNames[r]+'">'+h.date.dayNamesShort[r]+"</abbr></th>");for(P.push('</tr></thead><tbody><tr class="ws-row-0">'),i.options.showWeek&&(m=o.getWeek(O),P.push('<td class="week-cell">'+m+"</td>")),a=0;99>a;a++){if(f=a&&!(a%7),y=O.getMonth(),b=g!=y,s=O.getDay(),A=[],f&&b){P.push("</tr>");break}f&&(v++,P.push('</tr><tr class="ws-row-'+v+'">'),i.options.showWeek&&(m++,m>52&&(m=o.getWeek(O)),P.push('<td class="week-cell">'+m+"</td>"))),a||s!=h.date.firstDay&&(l=s-h.date.firstDay,0>l&&(l+=7),O.setDate(O.getDate()-l),s=O.getDay(),y=O.getMonth(),b=g!=y),w=u(O),E='<td role="presentation" class="day-'+s+'"><button data-id="day-'+O.getDate()+'" role="gridcell" data-action="changeInput" value="'+w.join("-")+'"',b?A.push("othermonth"):A.push("day-"+O.getDate()),w[0]==c[0]&&c[1]==w[1]&&c[2]==w[2]&&A.push("this-value"),S[0]==w[0]&&w[1]==S[1]&&w[2]==S[2]&&A.push("checked-value"),A.length&&(E+=' class="'+A.join(" ")+'"'),(!o.isInRange(w,M,D)||i.options.disableDays&&-1!=e.inArray(s,i.options.disableDays))&&(E+=' disabled=""'),P.push(E+' tabindex="-1">'+O.getDate()+"</button></td>"),O.setDate(O.getDate()+1)}P.push("</tbody></table></div></div>"),n==C-1&&(w=u(O),w[2]=1,p=o.isInRange(w,M,D)?{"data-action":"setDayList",value:w.date}:!1)}return{enabled:9,main:P.join(""),prev:d,next:p,type:"Grid"}},o.isInRange=function(e,t,i){var n,a=!0;for(n=0;e.length>n;n++){if(i[n]&&i[n]>e[n]){a=!1;break}if(!i[n]||i[n]!=e[n])break}if(a)for(n=0;e.length>n;n++){if(t[n]&&t[n]<e[n]){a=!1;break}if(!t[n]||t[n]!=e[n])break}return a},o.createMonthSelect=function(e,t,i,n){n||(n=h.date.monthNames);for(var a,r=0,s=[],u=e[1]-1;n.length>r;r++)a=u==r?' selected=""':"",(a||o.isInRange([e[0],r+1],t,i))&&s.push('<option value="'+e[0]+"-"+l.addZero(r+1)+'"'+a+">"+n[r]+"</option>");return s},o.createYearSelect=function(e,t,i,n){var a,r=!0,s=!0,l=['<option selected="">'+e+"</option>"],u=0;for(n||(n="");8>u&&(r||s);)u++,a=e-u,r&&o.isInRange([a],t,i)?l.unshift('<option value="'+(a+n)+'">'+a+"</option>"):r=!1,a=e+u,s&&o.isInRange([a],t,i)?l.push('<option value="'+(a+n)+'">'+a+"</option>"):s=!1;return l},function(){var i=function(e){return"get"+e+"List"},n=function(e){return"set"+e+"List"},a={date:"Day",week:"Day",month:"Month"};e.each({setYearList:["Year","Month","Day"],setMonthList:["Month","Day"],setDayList:["Day"]},function(r,l){var u=l.map(i),c=l.map(n);s[r]=function(i,n,r,s){i=""+i;var d=r.options,p=i.split("-");s||(s=0),e.each(u,function(e,i){if(e>=s){var u=o[i](p,r);if(2>p.length||u.enabled>1||a[r.type]===l[e])return n.element.attr({"data-currentview":c[e]}).addClass("ws-size-"+d.size).data("pickercontent",{data:r,content:u,values:p}),n.bodyElement.html(u.main),u.prev?n.prevElement.attr(u.prev).prop({disabled:!1}):n.prevElement.removeAttr("data-action").prop({disabled:!0}),u.next?n.nextElement.attr(u.next).prop({disabled:!1}):n.nextElement.removeAttr("data-action").prop({disabled:!0}),t[u.type]&&new t[u.type](n.bodyElement.children(),n,u),n.element.trigger("pickerchange"),!1}})}})}(),o.showPickerContent=function(e,t){var i=e.options;e._popoverinit||(o.commonInit(e,t),o.commonDateInit(e,t)),!e._popoverinit||i.restartView?s.setYearList(i.defValue||i.value,t,e,i.startView):s[t.element.attr("data-currentview")||"setYearList"](i.defValue||i.value,t,e,0),e._popoverinit=!0},o.commonDateInit=function(i,a){var r=function(){return e(this).is(".othermonth")&&"pointer"!=e(this).css("cursor")||a.actionFn({"data-action":e.attr(this,"data-action"),value:e(this).val()||e.attr(this,"value")}),!1},l=(new Date).getTime(),u=function(n){var r=[],s="",u="";n.options=i.getOptions()||{},e("div.ws-options",a.contentElement).remove(),e.each(n.options[0],function(e,t){var a=o.isInRange(e.split("-"),n.maxS,n.minS)?"":' disabled="" ';r.push('<li role="presentation"><button value="'+e+'" '+a+' data-action="changeInput" tabindex="-1"  role="option">'+(t||i.formatValue(e,!1))+"</button></li>")}),r.length&&(l++,n.options[1]&&(u="datalist-"+l,s='<h5 id="'+u+'">'+n.options[1]+"</h5>",u=' aria-labelledbyid="'+u+'" '),new t.ListBox(e('<div class="ws-options">'+s+'<ul role="listbox" '+u+">"+r.join("")+"</div>").insertAfter(a.bodyElement)[0],a,{noFocus:!0}))},d=function(){if(a.isDirty){var n=i.options;n.maxS=n.max.split("-"),n.minS=n.min.split("-"),e("button",a.buttonRow).each(function(){var a;e(this).is(".ws-empty")?(a=h.date.clear,a||(a=f[""].date.clear||"clear",t.warn("could not get clear text from form cfg"))):e(this).is(".ws-current")&&(a=(h[i.type]||{}).currentText,a||(a=(f[""][[i.type]]||{}).currentText||"current",t.warn("could not get currentText from form cfg")),e.prop(this,"disabled",!o.isInRange(c[i.type].split("-"),n.maxS,n.minS))),a&&(e(this).text(a).attr({"aria-label":a}),t.assumeARIA&&e.attr(this,"aria-label",a))}),a.nextElement.attr({"aria-label":h.date.nextText}),e("> span",a.nextElement).html(h.date.nextText),a.prevElement.attr({"aria-label":h.date.prevText}),e("> span",a.prevElement).html(h.date.prevText),u(n,n.maxS,n.minS)}e("button.ws-empty",a.buttonRow).prop("disabled",e.prop(i.orig,"required")),a.isDirty=!1};a.actionFn=function(e){s[e["data-action"]]?s[e["data-action"]](e.value,a,i,0):t.warn("no action for "+e["data-action"])},a.contentElement.html('<button class="ws-prev" tabindex="0"><span></span></button> <button class="ws-next" tabindex="0"><span></span></button><div class="ws-picker-body"></div><div class="ws-button-row"><button type="button" class="ws-current" data-action="changeInput" value="'+c[i.type]+'" tabindex="0"></button> <button type="button" data-action="changeInput" value="" class="ws-empty" tabindex="0"></button></div>'),a.nextElement=e("button.ws-next",a.contentElement),a.prevElement=e("button.ws-prev",a.contentElement),a.bodyElement=e("div.ws-picker-body",a.contentElement),a.buttonRow=e("div.ws-button-row",a.contentElement),a.element.on("updatepickercontent",d),a.contentElement.on("click","button[data-action]",r).on("change","select[data-action]",r),e(i.options.orig).on("input",function(){var e;i.options.updateOnInput&&a.isVisible&&i.options.value&&(e=a.element.attr("data-currentview"))&&s[e](i.options.value,a,i,0)}),e(n).onTrigger("wslocalechange",i._propertyChange)}});