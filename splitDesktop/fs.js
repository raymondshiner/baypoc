function(){return u.dateNow()}function g(){return v.now()}function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];try{return e.apply(this,n)}catch(e){try{t&&t(e)}catch(e){}}}function(t){u.setWindowTimeout(window,Ie(t),e)}function(){var n,r;return(0,i.__generator)(this,function(i){switch(i.label){case 0:return[4,qt(e)];case 1:return i.sent(),(n=u.requestWindowIdleCallback)?[2,new Ft(function(e){n(window,e,{timeout:t})})]:(r=Date.now()+25,[2,{timeRemaining:,didTimeout:!1}]);}})}function(){t.unregister(),t._tick&&t._tick()}function(t){this._due=g()+100+1.5*t,e.registry[this._id]=this}function(){delete e.registry[this._id]}function(){e(),t.register(t._interval)}function(){var e,t,n,r,o,s,a,u;return(0,i.__generator)(this,)}function(e){if(!e)return;return{forEach:}}function(){return"text"===e.responseType?e.responseText:e.response}function(t){for(var n=0,r=e;n<r.length;n++){var i=r[n],o=i[0];t(i[1],o)}}function(){n.processEvents(t)}function(e){if(this._pipelineStarted){var t=this._eventQueue;this._eventQueue=[];var n=function(e){if(0==e.length)return e;for(var t,n=[],r=new Lo(n,[0,1]),i={},o={},s={},a=0,u=e;a<u.length;a++){var c=u[a];switch(c.Kind){case P.MOUSEMOVE:r.add(c);break;case P.TOUCHMOVE:(d=c.Args[0])in i||(i[d]=new Lo(n,[1,2])),i[d].add(c);break;case P.SCROLL_LAYOUT:(d=c.Args[0])in o||(o[d]=new Lo(n,[1,2])),o[d].add(c);break;case P.SCROLL_VISUAL_OFFSET:(d=c.Args[0])in s||(s[d]=new Lo(n,[1,2])),s[d].add(c);break;case P.RESIZE_VISUAL:t||(t=new Lo(n,[0,1])),t.add(c);break;default:n.push(c);}}if(r.finish(P.MOUSEMOVE_CURVE)){var h=r.evts();if(h.length>0){var l=h[h.length-1].Args[2];l&&(h[0].Args[9]=l)}}for(var d in o)o[p=parseInt(d,10)].finish(P.SCROLL_LAYOUT_CURVE,[p]);for(var d in s)s[p=parseInt(d,10)].finish(P.SCROLL_VISUAL_OFFSET_CURVE,[p]);for(var d in i){var p;i[p=parseInt(d,10)].finish(P.TOUCHMOVE_CURVE,[p])}return t&&t.finish(P.RESIZE_VISUAL_CURVE),n}(t);e||(n=n.concat(this._gatherExternalEvents())),this.ensureFrameIds(n),this.sendEvents(this._ctx.recording.pageSignature(),n)}}function(e,t){0!=t.length&&this._transport.enqueueEvents(e,t)}function(e){if(this._frameId)for(var t=this._parentIds,n=t&&t.length>0,r=0;r<e.length;++r){var i=e[r];i.FId||(i.FId=this._frameId),n&&!i.PIds&&(i.PIds=t)}}function(){if(4==h.readyState){if(c)return;c=!0;try{var e={text:h.responseText};if(200==h.status)return void i(e);var t=void 0;try{t=We(e.text)}catch(e){}a(new Zo(h.status,e.text,t))}catch(e){Je.sendToBugsnag(e,"error"),a(e)}}}function(){return this._userId+":"+this._sessionId+":"+this._pageId}function(){var t,n;return null!==(n=null===(t=e())||void 0===t?void 0:t.pageSignature())&&void 0!==n?n:null}function(){return t}