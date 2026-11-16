System.register("chunks:///_virtual/main",["./SpikeMain.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/SpikeMain.ts",["./rollupPluginModLoBabelHelpers.js","cc","./gsap.mjs","./DebugUtils.js","./dGet.js","./DiContextManager.js","./dMap.js"],(function(e){var t,n,i,o,r,s,c,a,u,l,p,d,f,h,v,k;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,i=e._decorator,o=e.Node,r=e.UITransform,s=e.Graphics,c=e.Color,a=e.Vec3,u=e.resources,l=e.SpriteFrame,p=e.Sprite,d=e.JsonAsset,f=e.Component},function(e){h=e.default},null,function(e){v=e.dGet},null,function(e){k=e.dMap}],execute:function(){var m;n._RF.push({},"2e3dbB6oXdGp4cAkEGTbRhE","SpikeMain",void 0);var y=i.ccclass,S=function(){this.createdAt=Date.now()},g=function(){function e(){this.value=void 0,this.init()}return e.prototype.init=function(){this.value="set-in-base-constructor"},e}(),C=function(e){function n(){return e.apply(this,arguments)||this}return t(n,e),n}(g),b=function(e){function n(){for(var t,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))||this).value=void 0,t}return t(n,e),n}(g);e("SpikeMain",y("SpikeMain")(m=function(e){function n(){return e.apply(this,arguments)||this}t(n,e);var i=n.prototype;return i.start=function(){this.checkDi(),this.checkFieldSemantics(),this.checkGsap(),this.checkResources()},i.checkDi=function(){k(S).asSingletone();var e=v(S),t=v(S);this.report("di: singleton via dMap/dGet",e instanceof S&&e===t),this.report('di: class name kept ("'+S.name+'")',"SpikeService"===S.name)},i.checkFieldSemantics=function(){this.report("fields: `declare` keeps value from base constructor","set-in-base-constructor"===(new C).value),this.report("fields: plain redeclare keeps value from base constructor","set-in-base-constructor"===(new b).value)},i.checkGsap=function(){var e=this,t=new o("gsapBox");t.addComponent(r).setContentSize(100,100);var n=t.addComponent(s);n.fillColor=new c(255,120,0),n.rect(-50,-50,100,100),n.fill(),this.node.addChild(t);var i={x:-300,y:200};h.to(i,{x:300,duration:1.5,yoyo:!0,repeat:-1,ease:"sine.inOut",onUpdate:function(){return t.setPosition(new a(i.x,i.y,0))}}),h.delayedCall(.5,(function(){return e.report("gsap: tween ticks",i.x>-300)}))},i.checkResources=function(){var e=this;u.load("spike/tile-0/spriteFrame",l,(function(t,n){if(t)e.report("resources: sprite ("+t.message+")",!1);else{var i=new o("tile");i.addComponent(r),i.addComponent(p).spriteFrame=n,i.setPosition(0,-200,0),e.node.addChild(i),e.report("resources: sprite from resources/",!0)}})),u.load("spike/level_00000",d,(function(t,n){var i=null==n?void 0:n.json;e.report("resources: level JSON",!t&&Array.isArray(null==i?void 0:i.cells))}))},i.report=function(e,t){console.log("[spike] "+(t?"OK  ":"FAIL")+" "+e)},n}(f))||m);n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});