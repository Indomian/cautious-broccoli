!function(){function t(t,e,s,i){Object.defineProperty(t,e,{get:s,set:i,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},i={},n=e.parcelRequire62ee;null==n&&((n=function(t){if(t in s)return s[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return s[t]=n,e.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){i[t]=e},e.parcelRequire62ee=n),n.register("iE7OH",(function(e,s){var i,n;t(e.exports,"register",(function(){return i}),(function(t){return i=t})),t(e.exports,"resolve",(function(){return n}),(function(t){return n=t}));var r={};i=function(t){for(var e=Object.keys(t),s=0;s<e.length;s++)r[e[s]]=t[e[s]]},n=function(t){var e=r[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),n("iE7OH").register(JSON.parse('{"5d7Nu":"index.b2369a22.js","bG1Fz":"main.e695ff63.js"}'));const r="loading";class o extends Error{}function h(t){const e=document.querySelector(t);if(!e)throw new o(t);return e}function l(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}class c{addHandlers(){this._canvas.addEventListener("mouseenter",this.mouseEnter),this._canvas.addEventListener("mouseleave",this.mouseLeave),this._canvas.addEventListener("mousemove",this.mouseMove),this._canvas.addEventListener("mousedown",this.mouseDown),this._canvas.addEventListener("mouseup",this.mouseUp),this._canvas.addEventListener("click",this.click)}removeHandlers(){}processEvent(t){this._handlers.forEach((e=>{e(t)}))}addHandler(t){this._handlers.add(t)}removeHandler(t){this._handlers.has(t)&&this._handlers.delete(t)}createMouseEvent(t){return{screenX:t.offsetX,screenY:t.offsetY,dx:-this._oldX+t.offsetX,dy:-this._oldY+t.offsetY,leftButtonDown:this._leftButtonDown}}constructor(t){l(this,"mouseEnter",(t=>{const e=this.createMouseEvent(t);this.processEvent(e),this._oldX=e.screenX,this._oldY=e.screenY})),l(this,"mouseLeave",(t=>{const e=this.createMouseEvent(t);this.processEvent(e),this._oldX=e.screenX,this._oldY=e.screenY})),l(this,"mouseMove",(t=>{const e=this.createMouseEvent(t);this.processEvent(e),this._oldX=e.screenX,this._oldY=e.screenY})),l(this,"mouseDown",(t=>{this._leftButtonDown=!0;const e=this.createMouseEvent(t);this.processEvent(e),this._oldX=e.screenX,this._oldY=e.screenY})),l(this,"mouseUp",(t=>{this._leftButtonDown=!1;const e=this.createMouseEvent(t);this.processEvent(e),this._oldX=e.screenX,this._oldY=e.screenY})),l(this,"click",(t=>{const e=this.createMouseEvent(t);this.processEvent(e),this._oldX=e.screenX,this._oldY=e.screenY})),this._canvas=t,this._handlers=new Set,this._leftButtonDown=!1,this.addHandlers()}}var a,d,u,f={};a=function(t,e,s){if(e===self.location.origin)return t;var i=s?"import "+JSON.stringify(t)+";":"importScripts("+JSON.stringify(t)+");";return URL.createObjectURL(new Blob([i],{type:"application/javascript"}))};var p={};function x(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}d=function(t){var e=p[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(t)return x(t[2])}return"/"}(),p[t]=e),e},u=function(t){var e=(""+t).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);if(!e)throw new Error("Origin not found");return e[0]};let _,v=d("5d7Nu")+n("iE7OH").resolve("bG1Fz");var g;f=a(v,u(v),!1),(g=_||(_={}))[g.MessageNone=0]="MessageNone",g[g.MessageInit=1]="MessageInit",g[g.MessageUserInput=2]="MessageUserInput";class y{constructor(){l(this,"type",_.MessageNone)}}class m extends y{constructor(t){super(),l(this,"type",_.MessageInit),this.canvas=t}}class w extends y{constructor(t){super(),l(this,"type",_.MessageUserInput),this.event=t}}class b{initUserInput(){}constructor(t){l(this,"sendUserInputEvent",(t=>{this.worker.postMessage(new w(t))})),this.worker=void new Worker(f);const e=t.transferControlToOffscreen();this.worker.postMessage(new m(e),[e]),this.userInput=new c(t),this.userInput.addHandler(this.sendUserInputEvent)}}class C extends Error{}class j extends C{}class S extends C{}class E{static diff(t,e){return new T(t.x-e.x,t.y-e.y)}static mul(t,e){return new T(t.x*e,t.y*e)}static distance(t,e){return E.diff(t,e).length}static distance2(t,e){return E.diff(t,e).length2}static intersect(t,e){if(t.K===e.K)throw new j;if(isNaN(t.K)||isNaN(e.K))return isNaN(t.K)?e.makeVec2FromX(t._vec1.x):t.makeVec2FromX(e._vec1.x);{const s=(t.B-e.B)/(e.K-t.K);return t.makeVec2FromX(s)}}static dot(t,e){return t.x*e.x+t.y*e.y}static mirror(t,e){const s=e.direction.perpendicular;return t.diff(s.mul(2*E.dot(t,s)))}static scale(t,e){return new T(t.x/e.x,t.y/e.y)}}const I=1e-6,P=Math.sqrt(2);class T{get x(){return this._x}get y(){return this._y}set x(t){this._x=t,this._length=null}set y(t){this._y=t,this._length=null}get length(){return null===this._length&&(this._length=Math.sqrt(this.x*this.x+this.y*this.y),T.lengthCallsCount++),this._length}get length2(){return null===this._length2&&(this._length2=this._x*this._x+this._y*this._y,T.length2CallsCount++),this._length2}addSelf(t){return this._x+=t.x,this._y+=t.y,this._length=null,this}subSelf(t){return this._x-=t.x,this._y-=t.y,this._length=null,this}flipYSelf(){return this._y=-this._y,this}flipXSelf(){return this._x=-this._x,this}flipSelf(){return this._x=-this._x,this._y=-this._y,this}equals(t){return E.distance2(this,t)<1e-12}sum(t){return new T(this.x+t.x,this.y+t.y)}diff(t){return new T(this.x-t.x,this.y-t.y)}mul(t){return new T(this.x*t,this.y*t)}copy(){return new T(this.x,this.y)}applySelf(t){return this.x=t(this.x),this.y=t(this.y),this}get ort(){const t=this.length;return new T(this.x/t,this.y/t,1)}get perpendicular(){if(0===this.x){if(this.y>0)return T.Horizontal().ort;if(this.y<0)return T.Horizontal().ort.flipSelf();throw new S}if(0===this.y){if(this.x>0)return T.Vertical().ort;if(this.x<0)return T.Vertical().ort.flipSelf()}return new T(-this.y/this.x,1).ort}static Zero(){return new T(0,0)}static Horizontal(){return new T(1,0)}static Vertical(){return new T(0,1)}static Down(t){return new T(0,t)}static Right(t){return new T(t,0)}constructor(t,e,s){l(this,"_x",0),l(this,"_y",0),l(this,"_length",null),l(this,"_length2",null),this._x=t,this._y=e,s&&(this._length=s,this._length2=s*s)}}l(T,"lengthCallsCount",0),l(T,"length2CallsCount",0);class O{render(){}queue(){}constructor(t,e){l(this,"position",T.Zero()),this.context=t,this.position=e}}class M extends O{render(){this.context.beginPath(),this.context.arc(this.position.x,this.position.y,this.r,0,2*Math.PI),this.context.fillStyle=this.color,this.context.fill()}constructor(t,e,s,i){super(t,e),l(this,"r",0),l(this,"color","#00ff00"),s&&(this.r=s),i&&(this.color=i)}}class G{inBetween(t){const e=E.diff(t,this._vec1).length+E.diff(this._vec2,t).length;return s=this._length,i=e,n=I,Math.abs(s-i)<n;var s,i,n}calculateKB(){this._vec1.y===this._vec2.y?(this._b=this._vec1.y,this._k=0):this._vec1.x===this._vec2.x?(this._b=NaN,this._k=NaN):(this._b=(this._vec1.x*this._vec2.y-this._vec1.y*this._vec2.x)/(this._vec1.x-this._vec2.x),this._k=(this._vec1.y-this._vec2.y)/(this._vec1.x-this._vec2.x))}makeVec2FromX(t){return new T(t,this._k*t+this._b)}copy(){return new G(this._vec1,this._vec2)}moveBy(t){this._vec1.addSelf(t),this._vec2.addSelf(t),this.calculateKB()}getPointProjection(t){const e=this.direction,s=E.diff(t,this._vec1),i=E.dot(e,s)/this.length;return this._vec1.sum(this.ort.mul(i))}get B(){return this._b}get K(){return this._k}get length(){return this._length}get direction(){return this._direction}get ort(){return this._ort}get vec1(){return this._vec1}get vec2(){return this._vec2}static Vertical(t){return new G(new T(t,0),new T(t,Number.MAX_SAFE_INTEGER))}static Horizontal(t){return new G(new T(0,t),new T(Number.MAX_SAFE_INTEGER,t))}constructor(t,e){l(this,"_vec1",T.Zero()),l(this,"_vec2",T.Zero()),l(this,"_k",0),l(this,"_b",0),this._vec1=t,this._vec2=e,this._direction=E.diff(this._vec1,this._vec2),this._length=this._direction.length,this._length2=this._direction.length2,this._ort=this._direction.ort,this.calculateKB()}}let z;var B;function k(t,e){let s=t,i=e;if(s.type>i.type){const t=function(t,e){return{a:e,b:t}}(s,i);s=t.a,i=t.b}switch(!0){case s.type===z.TypeBall&&i.type===z.TypeBall:return function(t,e){const s=E.diff(t.currentPosition,e.currentPosition),i=s.length,n=t.radius+e.radius;if(i<n){const r=s.ort,o=n-i;t.currentPosition.addSelf(E.mul(r,t.radius/n*o*t.bounceValue)),e.currentPosition.subSelf(E.mul(r,e.radius/n*o*e.bounceValue))}}(s,i);case s.type===z.TypeBall&&i.type===z.TypeImmovableBall:return function(t,e){const s=E.diff(t.currentPosition,e.currentPosition),i=s.length,n=t.radius+e.radius;if(i<n){const e=s.ort,r=n-i;t.currentPosition.addSelf(E.mul(e,t.radius/n*r*t.bounceValue))}}(s,i);case s.type===z.TypeBall&&i.type===z.TypeImmovableLine:return function(t,e){try{const s=e._line.getPointProjection(t.currentPosition);if(e._line.inBetween(s)){const e=E.diff(s,t.currentPosition);if(e.length<t.radius){const s=e.ort,i=t.radius-e.length;t.currentPosition.subSelf(E.mul(s,i*t.bounceValue))}}}catch(t){}}(s,i);default:return}}(B=z||(z={}))[B.TypeNull=0]="TypeNull",B[B.TypeBall=1]="TypeBall",B[B.TypeImmovableBall=2]="TypeImmovableBall",B[B.TypeImmovableLine=3]="TypeImmovableLine";class N{update(t){}accelerate(t){}collide(t){}addToGrid(t){}constructor(){l(this,"type",z.TypeNull),l(this,"previousPosition",T.Zero()),l(this,"currentPosition",T.Zero()),this.index=N.index++}}l(N,"index",0);class F extends N{update(t){const e=this.velocity;this.previousPosition=this.currentPosition.copy(),this.currentPosition.addSelf(e.addSelf(this.acc.mul(t*t))),this.acc=T.Zero()}accelerate(t){return this.acc.addSelf(t),this}setVelocity(t){return this.velocity=t,this}collide(t){k(this,t)}addToGrid(t){t.addObject(Math.floor(this.currentPosition.x),Math.floor(this.currentPosition.y),this)}moveBy(t){this.currentPosition.addSelf(t)}isPointInsideObject(t){return E.distance(this.currentPosition,t)<this.radius}get velocity(){return E.diff(this.currentPosition,this.previousPosition)}set velocity(t){this.previousPosition=E.diff(this.currentPosition,t)}get movementVector(){return new G(this.previousPosition,this.currentPosition)}constructor(t,e){super(),l(this,"acc",T.Zero()),l(this,"radius",10),l(this,"bounceValue",1.1),l(this,"type",z.TypeBall),l(this,"immovable",!1),this.previousPosition=t.copy(),this.currentPosition=t.copy(),void 0!==e&&(this.radius=e)}}class V{applyConstrain(t){}constructor(){}}class R extends V{get width(){return this._width}set width(t){this._width=t}get height(){return this._height}set height(t){this._height=t}applyConstrain(t){super.applyConstrain(t),t.currentPosition.x-t.radius<0&&(t.currentPosition.x=t.radius),t.currentPosition.x+t.radius>this._width&&(t.currentPosition.x=this._width-t.radius),t.currentPosition.y-t.radius<0&&(t.currentPosition.y=t.radius),t.currentPosition.y+t.radius>this._height&&(t.currentPosition.y=this._height-t.radius)}constructor(t,e){super(),l(this,"_width",0),l(this,"_height",0),this.width=t,this.height=e}}class X extends V{applyConstrain(t){super.applyConstrain(t);const e=t.currentPosition.diff(this.center),s=e.length,i=t.radius;if(s>this.radius-i){const s=e.ort;t.currentPosition=this.center.sum(s.mul(this.radius-i))}}constructor(t,e){super(),l(this,"center",T.Zero()),l(this,"radius",0),this.center=t,this.radius=e}}class L{getNextObject(t){return[]}constructor(t){l(this,"solver",null),this.solver=t}}class H{constructor(t,e){l(this,"timeout",void 0),l(this,"object",void 0),this.timeout=t,this.object=e}}class Y extends L{getNextObject(t){if(this.total>this.limit)return[];if(this.lastCreateTime+=1,this.lastCreateTime>this.delay){const t=this.create(this.total);return this.lastCreateTime=0,this.total+=t.length,t}}constructor(t,e,s,i){super(t),this.limit=e,this.total=0,this.delay=s,this.create=i,this.lastCreateTime=0}}class Z{addObject(t){this.objects.length>=Z.MAX_OBJECT_IN_CELL||this.objects.push(t)}clear(){this.objects=[],this.highlight=!1}remove(t){const e=this.objects.findIndex((e=>e.index===t));-1!==e&&this.objects.splice(e,1)}get count(){return this.objects.length}constructor(){l(this,"objects",[]),l(this,"highlight",!1)}}l(Z,"MAX_OBJECT_IN_CELL",10);class U{get size(){return this._size}get width(){return this._width}set width(t){this._width=t,this.resize()}get height(){return this._height}set height(t){this._height=t,this.resize()}resize(){this.cells=[],this._size=this._width*this._height;for(let t=0;t<this._size;t++)this.cells.push(new Z)}addObject(t,e,s){const i=Math.floor(t/this.cellSize.x),n=Math.floor(e/this.cellSize.y),r=i*this._height+n;this.addObjectByIndex(r,s)}addObjectByIndex(t,e){!isNaN(t)&&t>=0&&t<this.size&&this.cells[t].addObject(e)}makeIndexFromVec(t){return t.x*this._height+t.y}makeIndexFromCoord(t,e){return t*this._height+e}makeVecFromIndex(t){const e=Math.floor(t/this._height),s=t-e*this._height;return new T(e,s)}addObjectToCells(t,e,s){const i=E.scale(t,this.cellSize).applySelf(Math.floor),n=E.scale(e,this.cellSize).applySelf(Math.floor),r=this.makeIndexFromVec(i),o=this.makeIndexFromVec(n);if(i.x===n.x)for(let t=r;t<o;t++)this.cells[t].addObject(s);else if(i.y===n.y)for(let t=r;t<o;t+=this.height)this.cells[t].addObject(s);else{let t=Math.min(i.x,n.x),e=Math.min(i.y,n.y),r=Math.max(i.x,n.x),o=Math.max(i.y,n.y)-e,h=this.makeIndexFromCoord(t,e);for(let e=0;e<=r-t;e++)for(let t=0;t<=o;t++){const i=h+e*this.height+t;this.addObjectByIndex(i,s)}}}clear(){for(let t=0;t<this.size;t++)this.cells[t].clear()}forEach(t){this.cells.forEach(((e,s)=>{const i=this.makeVecFromIndex(s);t(i.x,i.y,e,s)}))}hasCell(t,e){if(t<0||t>=this.size)return!1;const s=this.makeVecFromIndex(t),i=s.x,n=s.y;return!(n<=0&&e<0)&&(!(n===this.height-1&&e>0)&&(!(0===i&&e<0)&&!(i>=this.width-1&&e>0)))}constructor(t,e,s){l(this,"cells",[]),this._width=t,this._height=e,this.cellSize=s,this.resize()}}class D{configure(){this.gravity=new T(0,100),this.useFixedTime=!0,this.step=.017/this.subSteps;const t=Math.round(this.worldSize.x/16),e=Math.round(this.worldSize.y/16);this.cellSize=new T(this.worldSize.x/t,this.worldSize.y/e),this.collisionGrid=new U(t,e,this.cellSize)}addObject(t){this.objects.push(t)}update(t){const e=this.useFixedTime?this.step:t/this.subSteps;for(let t=0;t<this.subSteps;t++)this.addObjectsToGrid(),this.processCollisions(),this.applyGravity(),this.updateObjects(e),this.applyConstrains()}addObjectsToGrid(){this.collisionGrid.clear(),this.objects.forEach(((t,e)=>{t.addToGrid(this.collisionGrid)}))}updateObjects(t){this.objects.forEach((e=>e.update(t)))}applyGravity(){this.objects.forEach((t=>t.accelerate(this.gravity)))}applyConstrains(){this.objects.forEach((t=>this.constrains.applyConstrain(t)))}processCollisionsInCell(t,e){e.objects.forEach((e=>{t!==e&&(t.immovable&&e.immovable||t.collide(e))}))}processCell(t){this.collisionGrid.cells[t].objects.forEach((e=>{this.processCollisionsInCell(e,this.collisionGrid.cells[t]),this.collisionGrid.hasCell(t,-1)&&this.processCollisionsInCell(e,this.collisionGrid.cells[t-1]),this.collisionGrid.hasCell(t,1)&&this.processCollisionsInCell(e,this.collisionGrid.cells[t+1]),this.collisionGrid.hasCell(t+this.collisionGrid.height,-1)&&this.processCollisionsInCell(e,this.collisionGrid.cells[t+this.collisionGrid.height-1]),this.collisionGrid.hasCell(t+this.collisionGrid.height,0)&&this.processCollisionsInCell(e,this.collisionGrid.cells[t+this.collisionGrid.height]),this.collisionGrid.hasCell(t+this.collisionGrid.height,1)&&this.processCollisionsInCell(e,this.collisionGrid.cells[t+this.collisionGrid.height+1]),this.collisionGrid.hasCell(t-this.collisionGrid.height,-1)&&this.processCollisionsInCell(e,this.collisionGrid.cells[t-this.collisionGrid.height-1]),this.collisionGrid.hasCell(t-this.collisionGrid.height,0)&&this.processCollisionsInCell(e,this.collisionGrid.cells[t-this.collisionGrid.height]),this.collisionGrid.hasCell(t-this.collisionGrid.height,1)&&this.processCollisionsInCell(e,this.collisionGrid.cells[t-this.collisionGrid.height+1])}))}processCollisions(){for(let t=0;t<this.collisionGrid.size;t++)this.processCell(t)}constructor(t){l(this,"objects",[]),l(this,"constrains",null),l(this,"gravity",T.Zero()),l(this,"subSteps",4),l(this,"useFixedTime",!0),this.objects=[],this.worldSize=t.copy(),this.configure()}}class A extends O{render(){this.context.fillStyle=this.color,this.context.fillRect(this.position.x,this.position.y,this.position.x+this.size.x,this.position.y+this.size.y)}constructor(t,e,s,i){super(t,e),l(this,"size",T.Zero()),l(this,"color","#00ff00"),this.size=s,i&&(this.color=i)}}class q{update(){this.renderItem.position=this.ballsObject.currentPosition}render(){this.update(),this.renderItem.render()}constructor(t,e){l(this,"ballsObject",null),l(this,"renderItem",null),this.ballsObject=t,this.renderItem=e}}class K extends F{update(t){this.currentPosition=this._fixedPosition,this.previousPosition=this._fixedPosition}addToGrid(t){const e=new T(this.radius*P,this.radius*P),s=this.currentPosition.sum(e),i=this.currentPosition.diff(e);t.addObjectToCells(s,i,this)}constructor(t,e){super(t,e),l(this,"type",z.TypeImmovableBall),l(this,"immovable",!0),l(this,"bounceValue",.5),l(this,"_fixedPosition",null),this._fixedPosition=t.copy()}}class $ extends q{update(){super.update(),this.renderItem.direction=this.ballsObject._direction}constructor(t,e){super(t),l(this,"ballsObject",null),this.ballsObject=t,this.renderItem=e}}class J extends F{update(t){this.currentPosition=this._line._vec1,this.previousPosition=this._line._vec2}addToGrid(t){t.addObjectToCells(this._line._vec1,this._line._vec2,this)}constructor(t,e){super(t,0),l(this,"type",z.TypeImmovableLine),l(this,"immovable",!0),this._direction=e,this._line=new G(this.currentPosition.copy(),this.currentPosition.copy().sum(this._direction))}}class W extends O{render(){this.context.strokeStyle=this.color,this.context.beginPath(),this.context.moveTo(this.position.x,this.position.y),this.context.lineTo(this.position.x+this.direction.x,this.position.y+this.direction.y),this.context.stroke()}constructor(t,e,s,i){super(t,e),l(this,"direction",T.Zero()),l(this,"color","#00ff00"),this.direction=s,i&&(this.color=i)}}class Q extends M{render(){super.render(),this.context.fillStyle=this.textColor,this.context.textBaseline="middle",this.context.textAlign="center",this.context.fillText(this.text,this.position.x,this.position.y)}constructor(t,e,s,i,n,r){super(t,e,s,i),l(this,"text",""),l(this,"textColor","#ffffff"),this.text=n,r&&(this.textColor=r)}}class tt extends A{render(){this.context.strokeStyle=this.color,this.context.strokeRect(this.position.x,this.position.y,this.size.x,this.size.y)}queue(){}constructor(t,e,s,i){super(t,e,s,i)}}new H(1,new F(new T(10,10))),new H(2,new F(new T(10,10))),new H(3,new F(new T(10,10)));const et=[new T(0,0),new T(70,380),new T(270,380),new T(340,0)],st=[[et[0],E.diff(et[0],et[1]).flipSelf()],[et[1],E.diff(et[1],et[2]).flipSelf()],[et[2],E.diff(et[2],et[3]).flipSelf()]];function it(t){const e=.005;return`rgba(${Math.floor(127*Math.sin(e*t+0)+128)}, ${Math.floor(127*Math.sin(e*t+2)+128)}, ${Math.floor(127*Math.sin(e*t+4)+128)}, 1)`}class nt{configure(){this.solver=new D(new T(this.canvas.width,this.canvas.height)),this.context.font="10px serif",this.switchToViewportConstrain(),this.solver.constrains=this.constrains;const t=new T(this.canvas.width/2,this.canvas.height/2),e=t.diff(new T(300,300)),s=new T(2,-2).mul(1/this.solver.subSteps);this.generator=new Y(this.solver,1e3,7,(t=>[new q(new F(e,5).setVelocity(s),new Q(this.context,T.Zero(),7,it(t+200),"","#000000")),new q(new F(e.sum(T.Down(20)),5).setVelocity(s),new Q(this.context,T.Zero(),7,it(t+100),"","#000000")),new q(new F(e.sum(T.Down(-20)),5).setVelocity(s),new Q(this.context,T.Zero(),7,it(t),"","#000000"))])),this.redBall=new q(new K(new T(230,50),30),new M(this.context,T.Zero(),30,"#ff0000")),this.addObject(this.redBall),st.forEach((e=>{this.addObject(new $(new J(e[0].sum(t.diff(new T(170,190))),e[1]),new W(this.context,T.Zero(),T.Zero(),"#ffffff")))}))}processUserInput(t){t.leftButtonDown?(this.redBall.ballsObject.isPointInsideObject(new T(t.screenX,t.screenY))&&(this.canMoveRedObject=!0),this.canMoveRedObject&&this.redBall.ballsObject.moveBy(new T(t.dx,t.dy))):this.canMoveRedObject=!1}addObject(t){this.objects.push(t),this.solver.addObject(t.ballsObject)}update(t){this.solver.update(t)}generatorsTick(t){const e=this.generator.getNextObject(t);e&&e.forEach((t=>this.addObject(t)))}tick(){this.step<0&&(this.step=0),this.generatorsTick(this.step/1e3),this.update(this.step/1e3),this.clear(),this.renderItems(),this.printFPS(),T.lengthCallsCount=0}renderItems(){this.items.forEach((t=>t.render())),this.objects.forEach((t=>t.render()))}printText(t,e,s){this.context.fillStyle="#ffffff",this.context.textAlign="start",this.context.fillText(t,e,s)}printFPS(){this.context.fillStyle="rgba(0,0,0,0.1)",this.context.fillRect(0,0,100,60),this.printText(`${Math.round(this.step)} ms / ${Math.round(1e3/this.step)} FPS`,0,10),this.printText(`Length calls: ${T.lengthCallsCount}`,0,20),this.printText(`Lenght2 calls: ${T.length2CallsCount}`,0,30),this.printText(`Objects: ${this.objects.length}`,0,40),this.printText(`Compares per object: ${Math.round(T.lengthCallsCount/this.objects.length)}`,0,50)}clear(){this.context.fillStyle="rgba(0, 0, 0, 0.9)",this.context.fillRect(0,0,this.canvas.width,this.canvas.height)}start(){self.requestAnimationFrame?self.requestAnimationFrame(this.nextFrame):setInterval(this.nextInterval,16)}renderGrid(){this.solver.collisionGrid.forEach(((t,e,s,i)=>{const n=new T(t*this.solver.cellSize.x,e*this.solver.cellSize.y),r=new tt(this.context,n,this.solver.cellSize.diff(new T(5,5)),s.count>0?"#ff0000":"#00ff00");s.highlight&&(this.context.lineWidth=10),r.render(),this.context.lineWidth=1,this.printText(i,n.x+this.solver.cellSize.x/2,n.y+this.solver.cellSize.y/2)}))}switchToCircleConstrain(){this.constrains=new X(new T(this.canvas.width/2,this.canvas.height/2),this.canvas.height/2),this.items.push(new M(this.context,this.canvas.width/2,this.canvas.height/2,this.canvas.height/2,"#000000"))}switchToViewportConstrain(){this.constrains=new R(this.canvas.width,this.canvas.height)}constructor(t){l(this,"objects",[]),l(this,"constrains",null),l(this,"solver",null),l(this,"nextFrame",(t=>{this.step=t-this.timeRenderEnd,this.step<0&&(this.step=0),this.tick(),this.timeRenderEnd=t,self.requestAnimationFrame(this.nextFrame)})),l(this,"nextInterval",(()=>{this.timeRenderStart=performance.now(),this.step=this.timeRenderStart-this.timeRenderEnd,this.step<0&&(this.step=0),this.tick(),this.timeRenderEnd=performance.now()})),this.canvas=t,this.context=this.canvas.getContext("2d"),this.timeRenderStart=performance.now(),this.timeRenderEnd=performance.now(),this.step=0,this.objects=[],this.items=[],this.generator=null,this.solver=null,this.redBall=null,this.configure()}}class rt{constructor(t){l(this,"sendUserInputEvent",(t=>{this.render.processUserInput(t)})),this.render=new nt(t),this.render.start(),this.userInput=new c(t),this.userInput.addHandler(this.sendUserInputEvent)}}var ot;ot=function(){console.log("Init application");const t=h("#image_canvas"),e=h("#container");t.width=e.offsetWidth,t.height=e.offsetHeight,t.transferControlToOffscreen?(console.log("Render in worker"),new b(t)):(console.log("Render in main thread"),new rt(t))},document.readyState!==r?ot():document.addEventListener("DOMContentLoaded",ot)}();
//# sourceMappingURL=index.b2369a22.js.map
