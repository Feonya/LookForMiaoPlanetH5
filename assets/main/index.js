System.register("chunks:///_virtual/GameManager.ts",["cc","./PersistentData.ts"],(function(e){"use strict";var t,r,n,o,a,i,l,c,p;return{setters:[function(e){t=e.cclegacy,r=e._decorator,n=e.game,o=e.director,a=e.resources,i=e.Prefab,l=e.SpriteFrame,c=e.Component},function(e){p=e.PersistentData}],execute:function(){var s;t._RF.push({},"066a6yK8BtJR6nevkxDozrT","GameManager",void 0);var d=r.ccclass;r.property,e("GameManager",d("GameManager")(s=function(e){var t,r;function c(){return e.apply(this,arguments)||this}r=e,(t=c).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var s=c.prototype;return s.onLoad=function(){n.addPersistRootNode(this.node),p.init(),o.preloadScene("Game"),o.preloadScene("Start"),a.preload("Prefabs/Planet",i),a.preload("Sprites/XPlanet/spriteFrame",l),a.preload("Sprites/YPlanet/spriteFrame",l),a.preload("Sprites/Skin0/Planet/spriteFrame",l),a.preload("Sprites/Skin0/BG/spriteFrame",l),a.preload("Sprites/Skin0/BallRobot/spriteFrame",l),a.preload("Sprites/Skin1/Planet/spriteFrame",l),a.preload("Sprites/Skin1/BG/spriteFrame",l),a.preload("Sprites/Skin1/BallRobot/spriteFrame",l),a.preload("Sprites/Skin2/Planet/spriteFrame",l),a.preload("Sprites/Skin2/BG/spriteFrame",l),a.preload("Sprites/Skin2/BallRobot/spriteFrame",l)},s.start=function(){var e=this;addEventListener("BallArrivedXPlanet",(function(){e.node&&e.onBallArrivedXPlanet()})),addEventListener("BallArrivedYPlanet",(function(){e.node&&e.onBallArrivedYPlanet()})),addEventListener("ScoreUpToANumber",(function(){e.node&&e.onScoreUpToANumber()}))},s.onBallArrivedXPlanet=function(){if(!p.unlockedAchiDict["相遇"]){var e=new Date,t=e.getFullYear(),r=e.getMonth(),n=e.getDate(),o=t.toString()+"."+r.toString()+"."+n.toString();localStorage.setItem("EncounterAchievementUnlocked",o),p.unlockedAchiDict["相遇"]=o,localStorage.setItem("Skin1Unlocked","true"),p.unlockedSkinArr[1]=!0}},s.onBallArrivedYPlanet=function(){if(!p.unlockedAchiDict["相逢"]){var e=new Date,t=e.getFullYear(),r=e.getMonth(),n=e.getDate(),o=t.toString()+"."+r.toString()+"."+n.toString();localStorage.setItem("MeetAchievementUnlocked",o),p.unlockedAchiDict["相逢"]=o}},s.onScoreUpToANumber=function(){var e=new Date,t=e.getFullYear(),r=e.getMonth(),n=e.getDate(),o=t.toString()+"."+r.toString()+"."+n.toString();p.unlockedAchiDict["旅行者"]||(localStorage.setItem("AdventurerAchievementUnlocked",o),p.unlockedAchiDict["旅行者"]=o)},c}(c))||s);t._RF.pop()}}}));

System.register("chunks:///_virtual/ScoreLabelController.ts",["cc","./ConstantData.ts"],(function(e){"use strict";var t,r,o,n,c;return{setters:[function(e){t=e.cclegacy,r=e._decorator,o=e.Label,n=e.Component},function(e){c=e.ConstantData}],execute:function(){var a;function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t._RF.push({},"2cb3btiiSdD3IJjsQkrIDaw","ScoreLabelController",void 0);var u=r.ccclass;r.property,e("ScoreLabelController",u("ScoreLabelController")(a=function(e){var t,r;function n(){for(var t,r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return s(i(t=e.call.apply(e,[this].concat(o))||this),"_scoreUpToANumEvt",new Event("ScoreUpToANumber")),s(i(t),"_scoreLabel",null),s(i(t),"_currScore",0),t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=n.prototype;return a.start=function(){var e=this;this._scoreLabel=this.getComponent(o),addEventListener("PlanetsBetweenNumberGot",(function(t){e.node&&e.onPlanetsBetweenNumGot(t)}))},a.onPlanetsBetweenNumGot=function(e){this._currScore+=e.detail.num,this._scoreLabel&&(this._scoreLabel.string=this._currScore.toString()),this._currScore>=c.unlockAdveAchiScore&&dispatchEvent(this._scoreUpToANumEvt)},n}(n))||a);t._RF.pop()}}}));

System.register("chunks:///_virtual/GameOverPageController.ts",["cc"],(function(e){"use strict";var t,r,o,n;return{setters:[function(e){t=e.cclegacy,r=e._decorator,o=e.director,n=e.Component}],execute:function(){var c;t._RF.push({},"2f27d0GOIlJCZafX5Mhgy08","GameOverPageController",void 0);var a=r.ccclass;r.property,e("GameOverPageController",a("GameOverPageController")(c=function(e){var t,r;function n(){return e.apply(this,arguments)||this}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var c=n.prototype;return c.start=function(){var e=this;this.node.children[0].active=!1,addEventListener("BallDroppedOnTheGround",(function(){e.node&&e.onBallDroppedOnTheGround()}))},c.onExitBtnClicked=function(){this.node.children[0].active=!1,o.loadScene("Start")},c.onBallDroppedOnTheGround=function(){this.node.children[0].active=!0},n}(n))||c);t._RF.pop()}}}));

System.register("chunks:///_virtual/Rotator.ts",["cc","./ConstantData.ts"],(function(t){"use strict";var e,n,r,o,a,i;return{setters:[function(t){e=t.cclegacy,n=t._decorator,r=t.RigidBody2D,o=t.random,a=t.Component},function(t){i=t.ConstantData}],execute:function(){var c;function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e._RF.push({},"3148dfh6eZNSJTmZxV0rQRf","Rotator",void 0);var l=n.ccclass;n.property,t("Rotator",l("Rotator")(c=function(t){var e,n;function a(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return u(s(e=t.call.apply(t,[this].concat(r))||this),"_body",null),e}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.start=function(){if(this._body=this.getComponent(r),this._body){var t=o()*(i.planetMaxAngVel-i.planetMinAngVel)+i.planetMinAngVel;this._body.angularVelocity=t}},a}(a))||c);e._RF.pop()}}}));

System.register("chunks:///_virtual/ScreenButtonController.ts",["cc"],(function(t){"use strict";var e,r,n;return{setters:[function(t){e=t.cclegacy,r=t._decorator,n=t.Component}],execute:function(){var o;function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}e._RF.push({},"3ca44cvWLNMh5doUP5RKgNV","ScreenButtonController",void 0);var u=r.ccclass;r.property,t("ScreenButtonController",u("ScreenButtonController")(o=function(t){var e,r;function n(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return i(c(e=t.call.apply(t,[this].concat(n))||this),"_scrBtnClickedEvt",new Event("ScreenButtonClicked")),e}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.prototype.onScrBtnClicked=function(){dispatchEvent(this._scrBtnClickedEvt)},n}(n))||o);e._RF.pop()}}}));

System.register("chunks:///_virtual/BGController.ts",["cc","./PersistentData.ts"],(function(t){"use strict";var r,e,o,n,c,s,i;return{setters:[function(t){r=t.cclegacy,e=t._decorator,o=t.resources,n=t.SpriteFrame,c=t.Sprite,s=t.Component},function(t){i=t.PersistentData}],execute:function(){var a;r._RF.push({},"4cea3BHScBDU7TVhzfs3JJg","BGController",void 0);var p=e.ccclass;e.property,t("BGController",p("BGController")(a=function(t){var r,e;function s(){return t.apply(this,arguments)||this}return e=t,(r=s).prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e,s.prototype.start=function(){var t=this;o.load("Sprites/Skin"+i.currSkinIdx+"/BG/spriteFrame",n,(function(r,e){for(var o=0;o<t.node.children.length;o++){var n=t.node.children[o].getComponent(c);n&&(n.spriteFrame=e)}}))},s}(s))||a);r._RF.pop()}}}));

System.register("chunks:///_virtual/GroundController.ts",["cc"],(function(t){"use strict";var o,n,r,e,a;return{setters:[function(t){o=t.cclegacy,n=t._decorator,r=t.tween,e=t.Vec3,a=t.Component}],execute:function(){var i;o._RF.push({},"56a91HlGw5PRY7HkfUv2TQ2","GroundController",void 0);var s=n.ccclass;n.property,t("GroundController",s("GroundController")(i=function(t){var o,n;function a(){return t.apply(this,arguments)||this}n=t,(o=a).prototype=Object.create(n.prototype),o.prototype.constructor=o,o.__proto__=n;var i=a.prototype;return i.start=function(){var t=this;addEventListener("BallCapturedByPlanet",(function(o){t.node&&t.onBallCapturedByPlanet(o)}))},i.onBallCapturedByPlanet=function(t){var o=t.detail.planet;r(this.node).to(.1,{position:new e(o.position.x,this.node.position.y,this.node.position.z)},{easing:"linear"}).start()},a}(a))||i);o._RF.pop()}}}));

System.register("chunks:///_virtual/GameCameraController.ts",["cc","./ConstantData.ts"],(function(t){"use strict";var e,o,n,a,r,s;return{setters:[function(t){e=t.cclegacy,o=t._decorator,n=t.tween,a=t.Vec3,r=t.Component},function(t){s=t.ConstantData}],execute:function(){var i;e._RF.push({},"57b06Gq6XZO0Zw/Iy5PgdPD","GameCameraController",void 0);var c=o.ccclass;o.property,t("GameCameraController",c("GameCameraController")(i=function(t){var e,o;function r(){return t.apply(this,arguments)||this}o=t,(e=r).prototype=Object.create(o.prototype),e.prototype.constructor=e,e.__proto__=o;var i=r.prototype;return i.start=function(){var t=this;addEventListener("BallCapturedByPlanet",(function(e){t.node&&t.onBallCapturedByPlanet(e)}))},i.onBallCapturedByPlanet=function(t){var e=t.detail.planet;n(this.node).to(s.gameCamMvDuration,{position:new a(e.position.x+s.gameCamPosOffset,e.position.y,this.node.position.z)},{easing:"smooth"}).start()},r}(r))||i);e._RF.pop()}}}));

System.register("chunks:///_virtual/PlanetsController.ts",["cc","./PersistentData.ts","./ConstantData.ts"],(function(e){"use strict";var t,n,a,l,r,i,o,s,u,p,d,c,P,h,f,C,m;return{setters:[function(e){t=e.cclegacy,n=e._decorator,a=e.random,l=e.resources,r=e.SpriteFrame,i=e.Prefab,o=e.instantiate,s=e.Sprite,u=e.UITransform,p=e.CircleCollider2D,d=e.ParticleSystem2D,c=e.Label,P=e.tween,h=e.Vec3,f=e.Component},function(e){C=e.PersistentData},function(e){m=e.ConstantData}],execute:function(){var g;function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t._RF.push({},"58f76ZMBXdPz5wOs5Wd2yG1","PlanetsController",void 0);var S=n.ccclass;n.property,e("PlanetsController",S("PlanetsController")(g=function(e){var t,n;function f(){for(var t,n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return v(_(t=e.call.apply(e,[this].concat(a))||this),"_planetsBetweenNumGotEvt",new CustomEvent("PlanetsBetweenNumberGot",{detail:{num:0}})),v(_(t),"_planetQueue",[]),v(_(t),"_planetGenCounter",0),v(_(t),"_genYPlanetNum",0),v(_(t),"_lastPlanetCapturedBall",null),v(_(t),"_currPlanetCapturedBall",null),v(_(t),"_planetsBetweenNum",0),v(_(t),"_mustGenForward",!1),t}n=e,(t=f).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var g=f.prototype;return g.start=function(){var e=this;this._genYPlanetNum=Math.floor(a()*(m.genYPlanetMaxNum-m.genYPlanetMinNum))+m.genYPlanetMinNum,l.load("Sprites/Skin"+C.currSkinIdx+"/Planet/spriteFrame",r,(function(t,n){l.load("Prefabs/Planet",i,(function(t,a){for(var l=0;l<m.fixedPlanetNum;l++){e._planetGenCounter++;var r=o(a),i=r.getComponent(s),c=r.getComponent(u),P=r.getComponent(p),h=r.children[0].getComponent(d);if(r&&i&&c&&P&&h){var f=m.fixedPlanetDiaArr[l];r.position.set(m.fixedPlanetPosArr[l]),i.spriteFrame=n,c.contentSize.set(f,f),P.tag=m.planetColliderTag,P.radius=f/2,h.endRadius=f*m.planetParticleRadScale,h.startSize=f,e._planetQueue.push(r),e.node.addChild(r)}}}))})),addEventListener("BallCapturedByPlanet",(function(t){e.node&&e.onBallCapturedByPlanet(t)})),addEventListener("ScreenButtonClicked",(function(){e.node&&e.onScrBtnClicked()}))},g.onBallCapturedByPlanet=function(e){if(this._lastPlanetCapturedBall=this._currPlanetCapturedBall,this._lastPlanetCapturedBall||(this._lastPlanetCapturedBall=this.node.children[0]),this._currPlanetCapturedBall=e.detail.planet,this._lastPlanetCapturedBall&&this._currPlanetCapturedBall){var t=this._lastPlanetCapturedBall.getComponent(p),n=this._currPlanetCapturedBall.getComponent(p);n&&t&&(t.tag=m.planetColliderTag,n.tag=m.planetDisableColliderTag),this._planetsBetweenNum=this._planetQueue.indexOf(this._currPlanetCapturedBall)-this._planetQueue.indexOf(this._lastPlanetCapturedBall),this.showPlanetScore(this._planetsBetweenNum),this._planetsBetweenNumGotEvt.detail.num=this._planetsBetweenNum,dispatchEvent(this._planetsBetweenNumGotEvt)}this.startCurrPlanetParticle(),this.checkLeftRightAndRandomGeneratePlanets()},g.onScrBtnClicked=function(){if(this._currPlanetCapturedBall){var e=this._currPlanetCapturedBall.getComponent(p);setTimeout((function(){e&&(e.tag=m.planetColliderTag)}),1e3)}},g.startCurrPlanetParticle=function(){var e,t=null===(e=this._currPlanetCapturedBall)||void 0===e?void 0:e.children[0].getComponent(d);null==t||t.resetSystem()},g.randomGenerateAPlanet=function(){var e=this;l.load("Sprites/Skin"+C.currSkinIdx+"/Planet/spriteFrame",r,(function(t,n){l.load("Prefabs/Planet",i,(function(t,i){e._planetGenCounter++;var c=o(i),P=c.getComponent(s),h=c.getComponent(u),f=c.getComponent(p),C=c.children[0].getComponent(d);if(c&&P&&h&&f&&C){var g=a()*(m.planetMaxDia-m.planetMinDia)+m.planetMinDia,_=e._planetQueue[e._planetQueue.length-1],v=_.position.x,S=Math.floor(_.position.y);e._mustGenForward||a()<m.genForwardProbability?(v+=m.genPosXDist,e._mustGenForward=!1):(S=S==m.genPosYArr[1]?a()<.5?m.genPosYArr[0]:m.genPosYArr[2]:m.genPosYArr[1],e._mustGenForward=!0),e._planetGenCounter==m.genXPlanetNum?(l.load("Sprites/XPlanet/spriteFrame",r,(function(e,t){P&&(P.spriteFrame=t)})),h.contentSize.set(m.planetMaxDia,m.planetMaxDia),f.radius=m.planetMaxDia/2,C.endRadius=m.planetMaxDia*m.planetParticleRadScale,C.startSize=m.planetMaxDia,f.tag=m.xPlanetColliderTag):e._planetGenCounter==e._genYPlanetNum?(l.load("Sprites/YPlanet/spriteFrame",r,(function(e,t){P&&(P.spriteFrame=t)})),h.contentSize.set(m.planetMaxDia,m.planetMaxDia),f.radius=m.planetMaxDia/2,C.endRadius=m.planetMaxDia*m.planetParticleRadScale,C.startSize=m.planetMaxDia,f.tag=m.yPlanetColliderTag):(P.spriteFrame=n,h.contentSize.set(g,g),f.radius=g/2,C.endRadius=g*m.planetParticleRadScale,C.startSize=g,f.tag=m.planetColliderTag),c.position.set(v,S),e._planetQueue.push(c),e.node.addChild(c)}}))}))},g.checkLeftRightAndRandomGeneratePlanets=function(){var e=this;if(this._currPlanetCapturedBall){var t=this._planetQueue.indexOf(this._currPlanetCapturedBall),n=this._planetQueue.length-t-1;if(n<m.leftOrRightPlanetsNum)for(var a=m.leftOrRightPlanetsNum-n,l=0;l<a;l++)this.randomGenerateAPlanet();if(t>m.leftOrRightPlanetsNum)for(var r=t-m.leftOrRightPlanetsNum,i=0;i<r;i++)setTimeout((function(){var t;null===(t=e._planetQueue.shift())||void 0===t||t.destroy()}),1e3)}},g.showPlanetScore=function(e){var t,n=null===(t=this._currPlanetCapturedBall)||void 0===t?void 0:t.children[1],a=null==n?void 0:n.getComponent(c);if(a){if(e>0)a.string="+"+e;else{if(!(e<0))return;a.string=e.toString()}a.enabled=!0}P(n).to(m.planetScoreShowDura,{scale:new h(m.planetScoreShowMaxScale,m.planetScoreShowMaxScale,1)},{easing:"smooth"}).call((function(){a&&(a.enabled=!1,null==n||n.scale.set(new h(1,1,1)))})).start()},f}(f))||g);t._RF.pop()}}}));

System.register("chunks:///_virtual/BallRobotController.ts",["cc","./PersistentData.ts","./ConstantData.ts"],(function(t){"use strict";var e,n,i,a,r,o,l,s,c,d,h,p,u;return{setters:[function(t){e=t.cclegacy,n=t._decorator,i=t.Sprite,a=t.RigidBody2D,r=t.CircleCollider2D,o=t.Contact2DType,l=t.resources,s=t.SpriteFrame,c=t.Vec2,d=t.Vec3,h=t.Component},function(t){p=t.PersistentData},function(t){u=t.ConstantData}],execute:function(){var v;function _(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function C(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e._RF.push({},"81ab3qG0n5HCY3QKpCSiHSS","BallRobotController",void 0);var y=n.ccclass;n.property,t("BallRobotController",y("BallRobotController")(v=function(t){var e,n;function h(){for(var e,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return C(_(e=t.call.apply(t,[this].concat(i))||this),"_ballCapturedByPlanetEvt",new CustomEvent("BallCapturedByPlanet",{detail:{planet:null}})),C(_(e),"_ballDroppedOnTheGroundEvt",new Event("BallDroppedOnTheGround")),C(_(e),"_ballArrivedXPlanetEvt",new Event("BallArrivedXPlanet")),C(_(e),"_ballArrivedYPlanetEvt",new Event("BallArrivedYPlanet")),C(_(e),"_sprite",null),C(_(e),"_body",null),C(_(e),"_collider",null),C(_(e),"_isCaptured",!1),C(_(e),"_circelMvOri",d.ZERO),e}n=t,(e=h).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var v=h.prototype;return v.start=function(){var t,e=this;this._sprite=this.getComponent(i),this._body=this.getComponent(a),this._collider=this.getComponent(r),null===(t=this._collider)||void 0===t||t.on(o.BEGIN_CONTACT,this.onBeginContact,this),l.load("Sprites/Skin"+p.currSkinIdx+"/BallRobot/spriteFrame",s,(function(t,n){e._sprite&&(e._sprite.spriteFrame=n)})),this._body&&(this._body.linearVelocity=new c(u.ballSpd,0)),addEventListener("ScreenButtonClicked",(function(){e.node&&e.onScrBtnClicked()}))},v.update=function(){this.handleByPlanetGrav()},v.onScrBtnClicked=function(){this._body&&(this._body.gravityScale=u.groundGravScale,this._isCaptured=!1)},v.onBeginContact=function(t,e){e.tag==u.planetColliderTag?this._isCaptured||(this.onBeginContactWithPlanet(e),this._isCaptured=!0):e.tag==u.groundColliderTag?this.onBeginContactWithGround():e.tag==u.xPlanetColliderTag?this._isCaptured||(this.onBeginContactWithPlanet(e),this._isCaptured=!0,dispatchEvent(this._ballArrivedXPlanetEvt)):e.tag==u.yPlanetColliderTag&&(this._isCaptured||(this.onBeginContactWithPlanet(e),this._isCaptured=!0,dispatchEvent(this._ballArrivedYPlanetEvt)))},v.onBeginContactWithPlanet=function(t){this._body&&(this._body.gravityScale=0,this._body.linearVelocity=c.ZERO);var e=t.node;this._circelMvOri=e.position,this.startMvWhenCaptured(),this._ballCapturedByPlanetEvt.detail.planet=e,dispatchEvent(this._ballCapturedByPlanetEvt)},v.onBeginContactWithGround=function(){dispatchEvent(this._ballDroppedOnTheGroundEvt)},v.handleByPlanetGrav=function(){if(this._isCaptured){var t,e=this.getPlanetGrav();null===(t=this._body)||void 0===t||t.applyForceToCenter(new c(e.x*u.planetGravScale,e.y*u.planetGravScale),!0)}},v.startMvWhenCaptured=function(){if(this._body){var t=this.getPlanetGrav(),e=t.x*Math.cos(.5*-Math.PI)-t.y*Math.sin(.5*-Math.PI),n=t.x*Math.sin(.5*-Math.PI)+t.y*Math.cos(.5*-Math.PI);this._body.linearVelocity=new c(e,n)}},v.getPlanetGrav=function(){var t=this._circelMvOri.x-this.node.position.x,e=this._circelMvOri.y-this.node.position.y,n=new c(t,e).normalize();return new c(n.x*u.ballSpd,n.y*u.ballSpd)},h}(h))||v);e._RF.pop()}}}));

System.register("chunks:///_virtual/ConstantData.ts",["cc"],(function(e){"use strict";var a,n;return{setters:[function(e){a=e.cclegacy,n=e.Vec3}],execute:function(){function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}a._RF.push({},"84b6bYQ+opCPbeYH7cW95Fx","ConstantData",void 0);var l=e("ConstantData",(function(){}));t(l,"genForwardProbability",.6),t(l,"genPosYArr",[-240,0,240]),t(l,"genPosXDist",256),t(l,"leftOrRightPlanetsNum",10),t(l,"fixedPlanetNum",5),t(l,"fixedPlanetPosArr",[new n(0,0,0),new n(256,0,0),new n(512,0,0),new n(768,0,0),new n(1024,0,0)]),t(l,"fixedPlanetDiaArr",[220,220,150,150,150]),t(l,"planetParticleRadScale",.8),t(l,"planetMinAngVel",.1),t(l,"planetMaxAngVel",2),t(l,"planetMinDia",80),t(l,"planetMaxDia",220),t(l,"frontPlanetNum",12),t(l,"backPlanetNum",12),t(l,"planetScoreShowDura",2),t(l,"planetScoreShowMaxScale",1.5),t(l,"genXPlanetNum",100),t(l,"genYPlanetMinNum",200),t(l,"genYPlanetMaxNum",300),t(l,"gameCamMvDuration",1),t(l,"gameCamPosOffset",256),t(l,"bgCamMvDuration",20),t(l,"bgWidth",1429),t(l,"ballSpd",6),t(l,"planetGravScale",2),t(l,"groundGravScale",.2),t(l,"planetColliderTag",1),t(l,"groundColliderTag",2),t(l,"planetDisableColliderTag",3),t(l,"xPlanetColliderTag",4),t(l,"yPlanetColliderTag",5),t(l,"unlockAdveAchiScore",500),a._RF.pop()}}}));

System.register("chunks:///_virtual/SkinButtonController.ts",["cc"],(function(t){"use strict";var n,e,r,i;return{setters:[function(t){n=t.cclegacy,e=t._decorator,r=t.find,i=t.Component}],execute:function(){var o;function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}n._RF.push({},"90aeb42QxNNEY67tzVBNQW8","SkinButtonController",void 0);var s=e.ccclass;e.property,t("SkinButtonController",s("SkinButtonController")(o=function(t){var n,e;function i(){for(var n,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return a(c(n=t.call.apply(t,[this].concat(r))||this),"_skinPg",null),a(c(n),"_achiPg",null),n}e=t,(n=i).prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e;var o=i.prototype;return o.start=function(){this._skinPg=r("StartCanvas/SkinPage"),this._achiPg=r("StartCanvas/AchievementPage")},o.onSkinBtnClicked=function(){this._skinPg&&this._achiPg&&(this._achiPg.active=!1,this._skinPg.active=!0)},i}(i))||o);n._RF.pop()}}}));

System.register("chunks:///_virtual/BGCameraController.ts",["cc","./ConstantData.ts"],(function(t){"use strict";var n,e,o,r,i,a;return{setters:[function(t){n=t.cclegacy,e=t._decorator,o=t.tween,r=t.Vec3,i=t.Component},function(t){a=t.ConstantData}],execute:function(){var s;function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}n._RF.push({},"90ba7/kVrZPKZw1A6oJbkTU","BGCameraController",void 0);var u=e.ccclass;e.property,t("BGCameraController",u("BGCameraController")(s=function(t){var n,e;function i(){for(var n,e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return l(c(n=t.call.apply(t,[this].concat(o))||this),"_tween",null),n}e=t,(n=i).prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e;var s=i.prototype;return s.start=function(){this.startScrollOnBG()},s.startScrollOnBG=function(){var t=this;this._tween=o(this.node).to(a.bgCamMvDuration,{position:new r(-a.bgWidth,this.node.position.y,this.node.position.z)},{easing:"linear"}).call((function(){t.onScrollOver()})).start()},s.onScrollOver=function(){this.node.position.set(0,this.node.position.y,this.node.position.z),this.startScrollOnBG()},i}(i))||s);n._RF.pop()}}}));

System.register("chunks:///_virtual/AchievementPageController.ts",["cc","./PersistentData.ts"],(function(e){"use strict";var t,n,i,c,r;return{setters:[function(e){t=e.cclegacy,n=e._decorator,i=e.Label,c=e.Component},function(e){r=e.PersistentData}],execute:function(){var o;function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t._RF.push({},"b7dbdjiRdhOda42OQn1cYOE","AchievementPageController",void 0);var h=n.ccclass;n.property,e("AchievementPageController",h("AchievementPageController")(o=function(e){var t,n;function c(){for(var t,n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return s(a(t=e.call.apply(e,[this].concat(i))||this),"_achievementsNode",null),t}n=e,(t=c).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=c.prototype;return o.start=function(){this._achievementsNode=this.node.children[1],this.updateAchievements()},o.onEnable=function(){this.updateAchievements()},o.onBackBtnClicked=function(){this.node&&(this.node.active=!1)},o.updateAchievements=function(){if(this._achievementsNode){var e=Object.getOwnPropertyNames(r.unlockedAchiDict);console.log(e);for(var t=0;t<e.length;t++){var n=this._achievementsNode.children[t].children[0],c=this._achievementsNode.children[t].children[2],o=this._achievementsNode.children[t].children[3],a=e[t],s="";if(a&&(s=r.unlockedAchiDict[a]),""!=s){var h=o.getComponent(i);h&&(h.string=s),n.active=!0,c.active=!0,o.active=!0}else n.active=!1,c.active=!1,o.active=!1}}},c}(c))||o);t._RF.pop()}}}));

System.register("chunks:///_virtual/AchievementButtonController.ts",["cc"],(function(t){"use strict";var e,n,r,i;return{setters:[function(t){e=t.cclegacy,n=t._decorator,r=t.find,i=t.Component}],execute:function(){var o;function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e._RF.push({},"cad45zubj1DzYsz6VNoKrtf","AchievementButtonController",void 0);var s=n.ccclass;n.property,t("AchievementButtonController",s("AchievementButtonController")(o=function(t){var e,n;function i(){for(var e,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return a(c(e=t.call.apply(t,[this].concat(r))||this),"_achiPg",null),a(c(e),"_skinPg",null),e}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var o=i.prototype;return o.start=function(){this._achiPg=r("StartCanvas/AchievementPage"),this._skinPg=r("StartCanvas/SkinPage")},o.onAchiBtnClicked=function(){this._achiPg&&this._skinPg&&(this._skinPg.active=!1,this._achiPg.active=!0)},i}(i))||o);e._RF.pop()}}}));

System.register("chunks:///_virtual/PersistentData.ts",["cc"],(function(e){"use strict";var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t._RF.push({},"cfbee1COzRPkIZCOYX84yQb","PersistentData",void 0);var c=e("PersistentData",function(){function e(){}return e.init=function(){var t=localStorage.getItem("CurrSkinIdx");t&&(e.currSkinIdx=parseInt(t)),localStorage.getItem("Skin1Unlocked")&&(this.unlockedSkinArr[1]=!0),localStorage.getItem("Skin2Unlocked")&&(this.unlockedSkinArr[2]=!0);var n=localStorage.getItem("EncounterAchievementUnlocked");n&&""!=n&&(this.unlockedAchiDict["相遇"]=n);var c=localStorage.getItem("MeetAchievementUnlocked");c&&""!=c&&(this.unlockedAchiDict["相逢"]=c);var r=localStorage.getItem("AdventurerAchievementUnlocked");r&&""!=r&&(this.unlockedAchiDict["旅行者"]=r)},e}());n(c,"currSkinIdx",0),n(c,"unlockedSkinArr",[!0,!1,!1]),n(c,"unlockedAchiDict",{"相遇":"","相逢":"","旅行者":""}),t._RF.pop()}}}));

System.register("chunks:///_virtual/DebugController.ts",["cc","./PersistentData.ts","./ConstantData.ts"],(function(t){"use strict";var e,n,o,r,c,l;return{setters:[function(t){e=t.cclegacy,n=t._decorator,o=t.Button,r=t.Component},function(t){c=t.PersistentData},function(t){l=t.ConstantData}],execute:function(){var a;function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e._RF.push({},"d0011FkeeFLqpGDHLKE8wbo","DebugController",void 0);var s=n.ccclass;n.property,t("DebugController",s("DebugController")(a=function(t){var e,n;function r(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return u(i(e=t.call.apply(t,[this].concat(o))||this),"_unlockAllAchBtn",null),e}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var a=r.prototype;return a.start=function(){this._unlockAllAchBtn=this.node.children[0].getComponent(o)},a.onUnlockAllAchBtnClicked=function(){localStorage.setItem("CurrSkinIdx","0"),localStorage.setItem("Skin1Unlocked","true"),localStorage.setItem("Skin2Unlocked","true"),c.unlockedSkinArr[1]=!0,c.unlockedSkinArr[2]=!0},a.onDeletePersistentDataBtnClicked=function(){localStorage.clear()},a.onShortGameFlowBtnClicked=function(){l.genXPlanetNum=10,l.genYPlanetMinNum=20,l.genYPlanetMaxNum=30,l.unlockAdveAchiScore=40},r}(r))||a);e._RF.pop()}}}));

System.register("chunks:///_virtual/SkinPageController.ts",["cc","./PersistentData.ts"],(function(n){"use strict";var e,t,o,r,i,l,c;return{setters:[function(n){e=n.cclegacy,t=n._decorator,o=n.Button,r=n.Toggle,i=n.Label,l=n.Component},function(n){c=n.PersistentData}],execute:function(){var s;function a(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function u(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}e._RF.push({},"d8360Uwu15JwLEsazUnGEIM","SkinPageController",void 0);var g=t.ccclass;t.property,n("SkinPageController",g("SkinPageController")(s=function(n){var e,t;function l(){for(var e,t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return u(a(e=n.call.apply(n,[this].concat(o))||this),"_backBtn",null),u(a(e),"_skinToggles",null),e}t=n,(e=l).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t;var s=l.prototype;return s.start=function(){this._backBtn=this.node.children[0].getComponent(o),this._skinToggles=this.node.children[1],this.initSkinToggles()},s.onEnable=function(){this.updateSkinToggles()},s.initSkinToggles=function(){for(var n=0;n<c.unlockedSkinArr.length;n++){var e,t=null===(e=this._skinToggles)||void 0===e?void 0:e.children[n].getComponent(r),o=null==t?void 0:t.node.children[3].getComponent(i);t&&o&&(c.unlockedSkinArr[n]?(t.interactable=!0,c.currSkinIdx==n?(t.isChecked=!0,o.string="使用中"):o.string="已解锁"):t.interactable=!1)}},s.onSkinTogglesChecked=function(){this.updateSkinToggles()},s.updateSkinToggles=function(){for(var n=0;n<c.unlockedSkinArr.length;n++){var e,t=null===(e=this._skinToggles)||void 0===e?void 0:e.children[n].getComponent(r),o=null==t?void 0:t.node.children[3].getComponent(i);t&&o&&(t.isChecked?(o.string="使用中",localStorage.setItem("CurrSkinIdx",n.toString()),c.currSkinIdx=n):c.unlockedSkinArr[n]&&(o.string="已解锁"),c.unlockedSkinArr[n]&&(t.interactable=!0))}},s.onBackBtnClicked=function(){this.node&&(this.node.active=!1)},l}(l))||s);e._RF.pop()}}}));

System.register("chunks:///_virtual/StartButtonController.ts",["cc"],(function(t){"use strict";var r,o,e,n;return{setters:[function(t){r=t.cclegacy,o=t._decorator,e=t.director,n=t.Component}],execute:function(){var c;r._RF.push({},"d99d4oMit1M6JAr7ePMcJeJ","StartButtonController",void 0);var u=o.ccclass;o.property,t("StartButtonController",u("StartButtonController")(c=function(t){var r,o;function n(){return t.apply(this,arguments)||this}return o=t,(r=n).prototype=Object.create(o.prototype),r.prototype.constructor=r,r.__proto__=o,n.prototype.onStartBtnClicked=function(){e.loadScene("Game")},n}(n))||c);r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./PersistentData.ts","./GameManager.ts","./ConstantData.ts","./ScoreLabelController.ts","./GameOverPageController.ts","./Rotator.ts","./ScreenButtonController.ts","./BGController.ts","./GroundController.ts","./GameCameraController.ts","./PlanetsController.ts","./BallRobotController.ts","./SkinButtonController.ts","./BGCameraController.ts","./AchievementPageController.ts","./AchievementButtonController.ts","./DebugController.ts","./SkinPageController.ts","./StartButtonController.ts"],(function(){"use strict";return{setters:[function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){}}}));

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