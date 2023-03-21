!function(){function t(t,i,s){return i in t?Object.defineProperty(t,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[i]=s,t}class i extends Error{}class s extends i{}class e extends i{}class h{static diff(t,i){return new o(t.x-i.x,t.y-i.y)}static mul(t,i){return new o(t.x*i,t.y*i)}static distance(t,i){return h.diff(t,i).length}static distance2(t,i){return h.diff(t,i).length2}static intersect(t,i){if(t.K===i.K)throw new s;if(isNaN(t.K)||isNaN(i.K))return isNaN(t.K)?i.makeVec2FromX(t._vec1.x):t.makeVec2FromX(i._vec1.x);{const s=(t.B-i.B)/(i.K-t.K);return t.makeVec2FromX(s)}}static dot(t,i){return t.x*i.x+t.y*i.y}static mirror(t,i){const s=i.direction.perpendicular;return t.diff(s.mul(2*h.dot(t,s)))}static scale(t,i){return new o(t.x/i.x,t.y/i.y)}}const n=1e-6,r=Math.sqrt(2);class o{get x(){return this._x}get y(){return this._y}set x(t){this._x=t,this._length=null}set y(t){this._y=t,this._length=null}get length(){return null===this._length&&(this._length=Math.sqrt(this.x*this.x+this.y*this.y),o.lengthCallsCount++),this._length}get length2(){return null===this._length2&&(this._length2=this._x*this._x+this._y*this._y,o.length2CallsCount++),this._length2}addSelf(t){return this._x+=t.x,this._y+=t.y,this._length=null,this}subSelf(t){return this._x-=t.x,this._y-=t.y,this._length=null,this}flipYSelf(){return this._y=-this._y,this}flipXSelf(){return this._x=-this._x,this}flipSelf(){return this._x=-this._x,this._y=-this._y,this}equals(t){return h.distance2(this,t)<1e-12}sum(t){return new o(this.x+t.x,this.y+t.y)}diff(t){return new o(this.x-t.x,this.y-t.y)}mul(t){return new o(this.x*t,this.y*t)}copy(){return new o(this.x,this.y)}applySelf(t){return this.x=t(this.x),this.y=t(this.y),this}get ort(){const t=this.length;return new o(this.x/t,this.y/t,1)}get perpendicular(){if(0===this.x){if(this.y>0)return o.Horizontal().ort;if(this.y<0)return o.Horizontal().ort.flipSelf();throw new e}if(0===this.y){if(this.x>0)return o.Vertical().ort;if(this.x<0)return o.Vertical().ort.flipSelf()}return new o(-this.y/this.x,1).ort}static Zero(){return new o(0,0)}static Horizontal(){return new o(1,0)}static Vertical(){return new o(0,1)}static Down(t){return new o(0,t)}static Right(t){return new o(t,0)}constructor(i,s,e){t(this,"_x",0),t(this,"_y",0),t(this,"_length",null),t(this,"_length2",null),this._x=i,this._y=s,e&&(this._length=e,this._length2=e*e)}}t(o,"lengthCallsCount",0),t(o,"length2CallsCount",0);class l{render(){}queue(){}constructor(i,s){t(this,"position",o.Zero()),this.context=i,this.position=s}}class c extends l{render(){this.context.beginPath(),this.context.arc(this.position.x,this.position.y,this.r,0,2*Math.PI),this.context.fillStyle=this.color,this.context.fill()}constructor(i,s,e,h){super(i,s),t(this,"r",0),t(this,"color","#00ff00"),e&&(this.r=e),h&&(this.color=h)}}class a{inBetween(t){const i=h.diff(t,this._vec1).length+h.diff(this._vec2,t).length;return s=this._length,e=i,r=n,Math.abs(s-e)<r;var s,e,r}calculateKB(){this._vec1.y===this._vec2.y?(this._b=this._vec1.y,this._k=0):this._vec1.x===this._vec2.x?(this._b=NaN,this._k=NaN):(this._b=(this._vec1.x*this._vec2.y-this._vec1.y*this._vec2.x)/(this._vec1.x-this._vec2.x),this._k=(this._vec1.y-this._vec2.y)/(this._vec1.x-this._vec2.x))}makeVec2FromX(t){return new o(t,this._k*t+this._b)}copy(){return new a(this._vec1,this._vec2)}moveBy(t){this._vec1.addSelf(t),this._vec2.addSelf(t),this.calculateKB()}getPointProjection(t){const i=this.direction,s=h.diff(t,this._vec1),e=h.dot(i,s)/this.length;return this._vec1.sum(this.ort.mul(e))}get B(){return this._b}get K(){return this._k}get length(){return this._length}get direction(){return this._direction}get ort(){return this._ort}get vec1(){return this._vec1}get vec2(){return this._vec2}static Vertical(t){return new a(new o(t,0),new o(t,Number.MAX_SAFE_INTEGER))}static Horizontal(t){return new a(new o(0,t),new o(Number.MAX_SAFE_INTEGER,t))}constructor(i,s){t(this,"_vec1",o.Zero()),t(this,"_vec2",o.Zero()),t(this,"_k",0),t(this,"_b",0),this._vec1=i,this._vec2=s,this._direction=h.diff(this._vec1,this._vec2),this._length=this._direction.length,this._length2=this._direction.length2,this._ort=this._direction.ort,this.calculateKB()}}let d;var u;function p(t,i){let s=t,e=i;if(s.type>e.type){const t=function(t,i){return{a:i,b:t}}(s,e);s=t.a,e=t.b}switch(!0){case s.type===d.TypeBall&&e.type===d.TypeBall:return function(t,i){const s=h.diff(t.currentPosition,i.currentPosition),e=s.length,n=t.radius+i.radius;if(e<n){const r=s.ort,o=n-e;t.currentPosition.addSelf(h.mul(r,t.radius/n*o*t.bounceValue)),i.currentPosition.subSelf(h.mul(r,i.radius/n*o*i.bounceValue))}}(s,e);case s.type===d.TypeBall&&e.type===d.TypeImmovableBall:return function(t,i){const s=h.diff(t.currentPosition,i.currentPosition),e=s.length,n=t.radius+i.radius;if(e<n){const i=s.ort,r=n-e;t.currentPosition.addSelf(h.mul(i,t.radius/n*r*t.bounceValue))}}(s,e);case s.type===d.TypeBall&&e.type===d.TypeImmovableLine:return function(t,i){try{const s=i._line.getPointProjection(t.currentPosition);if(i._line.inBetween(s)){const i=h.diff(s,t.currentPosition);if(i.length<t.radius){const s=i.ort,e=t.radius-i.length;t.currentPosition.subSelf(h.mul(s,e*t.bounceValue))}}}catch(t){}}(s,e);default:return}}(u=d||(d={}))[u.TypeNull=0]="TypeNull",u[u.TypeBall=1]="TypeBall",u[u.TypeImmovableBall=2]="TypeImmovableBall",u[u.TypeImmovableLine=3]="TypeImmovableLine";class f{update(t){}accelerate(t){}collide(t){}addToGrid(t){}constructor(){t(this,"type",d.TypeNull),t(this,"previousPosition",o.Zero()),t(this,"currentPosition",o.Zero()),this.index=f.index++}}t(f,"index",0);class x extends f{update(t){const i=this.velocity;this.previousPosition=this.currentPosition.copy(),this.currentPosition.addSelf(i.addSelf(this.acc.mul(t*t))),this.acc=o.Zero()}accelerate(t){return this.acc.addSelf(t),this}setVelocity(t){return this.velocity=t,this}collide(t){p(this,t)}addToGrid(t){t.addObject(Math.floor(this.currentPosition.x),Math.floor(this.currentPosition.y),this)}moveBy(t){this.currentPosition.addSelf(t)}isPointInsideObject(t){return h.distance(this.currentPosition,t)<this.radius}get velocity(){return h.diff(this.currentPosition,this.previousPosition)}set velocity(t){this.previousPosition=h.diff(this.currentPosition,t)}get movementVector(){return new a(this.previousPosition,this.currentPosition)}constructor(i,s){super(),t(this,"acc",o.Zero()),t(this,"radius",10),t(this,"bounceValue",1.1),t(this,"type",d.TypeBall),t(this,"immovable",!1),this.previousPosition=i.copy(),this.currentPosition=i.copy(),void 0!==s&&(this.radius=s)}}class y{applyConstrain(t){}constructor(){}}class g extends y{get width(){return this._width}set width(t){this._width=t}get height(){return this._height}set height(t){this._height=t}applyConstrain(t){super.applyConstrain(t),t.currentPosition.x-t.radius<0&&(t.currentPosition.x=t.radius),t.currentPosition.x+t.radius>this._width&&(t.currentPosition.x=this._width-t.radius),t.currentPosition.y-t.radius<0&&(t.currentPosition.y=t.radius),t.currentPosition.y+t.radius>this._height&&(t.currentPosition.y=this._height-t.radius)}constructor(i,s){super(),t(this,"_width",0),t(this,"_height",0),this.width=i,this.height=s}}class _ extends y{applyConstrain(t){super.applyConstrain(t);const i=t.currentPosition.diff(this.center),s=i.length,e=t.radius;if(s>this.radius-e){const s=i.ort;t.currentPosition=this.center.sum(s.mul(this.radius-e))}}constructor(i,s){super(),t(this,"center",o.Zero()),t(this,"radius",0),this.center=i,this.radius=s}}class m{getNextObject(t){return[]}constructor(i){t(this,"solver",null),this.solver=i}}class w{constructor(i,s){t(this,"timeout",void 0),t(this,"object",void 0),this.timeout=i,this.object=s}}class b extends m{getNextObject(t){if(this.total>this.limit)return[];if(this.lastCreateTime+=1,this.lastCreateTime>this.delay){const t=this.create(this.total);return this.lastCreateTime=0,this.total+=t.length,t}}constructor(t,i,s,e){super(t),this.limit=i,this.total=0,this.delay=s,this.create=e,this.lastCreateTime=0}}class v{addObject(t){this.objects.length>=v.MAX_OBJECT_IN_CELL||this.objects.push(t)}clear(){this.objects=[],this.highlight=!1}remove(t){const i=this.objects.findIndex((i=>i.index===t));-1!==i&&this.objects.splice(i,1)}get count(){return this.objects.length}constructor(){t(this,"objects",[]),t(this,"highlight",!1)}}t(v,"MAX_OBJECT_IN_CELL",10);class C{get size(){return this._size}get width(){return this._width}set width(t){this._width=t,this.resize()}get height(){return this._height}set height(t){this._height=t,this.resize()}resize(){this.cells=[],this._size=this._width*this._height;for(let t=0;t<this._size;t++)this.cells.push(new v)}addObject(t,i,s){const e=Math.floor(t/this.cellSize.x),h=Math.floor(i/this.cellSize.y),n=e*this._height+h;this.addObjectByIndex(n,s)}addObjectByIndex(t,i){!isNaN(t)&&t>=0&&t<this.size&&this.cells[t].addObject(i)}makeIndexFromVec(t){return t.x*this._height+t.y}makeIndexFromCoord(t,i){return t*this._height+i}makeVecFromIndex(t){const i=Math.floor(t/this._height),s=t-i*this._height;return new o(i,s)}addObjectToCells(t,i,s){const e=h.scale(t,this.cellSize).applySelf(Math.floor),n=h.scale(i,this.cellSize).applySelf(Math.floor),r=this.makeIndexFromVec(e),o=this.makeIndexFromVec(n);if(e.x===n.x)for(let t=r;t<o;t++)this.cells[t].addObject(s);else if(e.y===n.y)for(let t=r;t<o;t+=this.height)this.cells[t].addObject(s);else{let t=Math.min(e.x,n.x),i=Math.min(e.y,n.y),h=Math.max(e.x,n.x),r=Math.max(e.y,n.y)-i,o=this.makeIndexFromCoord(t,i);for(let i=0;i<=h-t;i++)for(let t=0;t<=r;t++){const e=o+i*this.height+t;this.addObjectByIndex(e,s)}}}clear(){for(let t=0;t<this.size;t++)this.cells[t].clear()}forEach(t){this.cells.forEach(((i,s)=>{const e=this.makeVecFromIndex(s);t(e.x,e.y,i,s)}))}hasCell(t,i){if(t<0||t>=this.size)return!1;const s=this.makeVecFromIndex(t),e=s.x,h=s.y;return!(h<=0&&i<0)&&(!(h===this.height-1&&i>0)&&(!(0===e&&i<0)&&!(e>=this.width-1&&i>0)))}constructor(i,s,e){t(this,"cells",[]),this._width=i,this._height=s,this.cellSize=e,this.resize()}}class j{configure(){this.gravity=new o(0,100),this.useFixedTime=!0,this.step=.017/this.subSteps;const t=Math.round(this.worldSize.x/16),i=Math.round(this.worldSize.y/16);this.cellSize=new o(this.worldSize.x/t,this.worldSize.y/i),this.collisionGrid=new C(t,i,this.cellSize)}addObject(t){this.objects.push(t)}update(t){const i=this.useFixedTime?this.step:t/this.subSteps;for(let t=0;t<this.subSteps;t++)this.addObjectsToGrid(),this.processCollisions(),this.applyGravity(),this.updateObjects(i),this.applyConstrains()}addObjectsToGrid(){this.collisionGrid.clear(),this.objects.forEach(((t,i)=>{t.addToGrid(this.collisionGrid)}))}updateObjects(t){this.objects.forEach((i=>i.update(t)))}applyGravity(){this.objects.forEach((t=>t.accelerate(this.gravity)))}applyConstrains(){this.objects.forEach((t=>this.constrains.applyConstrain(t)))}processCollisionsInCell(t,i){i.objects.forEach((i=>{t!==i&&(t.immovable&&i.immovable||t.collide(i))}))}processCell(t){this.collisionGrid.cells[t].objects.forEach((i=>{this.processCollisionsInCell(i,this.collisionGrid.cells[t]),this.collisionGrid.hasCell(t,-1)&&this.processCollisionsInCell(i,this.collisionGrid.cells[t-1]),this.collisionGrid.hasCell(t,1)&&this.processCollisionsInCell(i,this.collisionGrid.cells[t+1]),this.collisionGrid.hasCell(t+this.collisionGrid.height,-1)&&this.processCollisionsInCell(i,this.collisionGrid.cells[t+this.collisionGrid.height-1]),this.collisionGrid.hasCell(t+this.collisionGrid.height,0)&&this.processCollisionsInCell(i,this.collisionGrid.cells[t+this.collisionGrid.height]),this.collisionGrid.hasCell(t+this.collisionGrid.height,1)&&this.processCollisionsInCell(i,this.collisionGrid.cells[t+this.collisionGrid.height+1]),this.collisionGrid.hasCell(t-this.collisionGrid.height,-1)&&this.processCollisionsInCell(i,this.collisionGrid.cells[t-this.collisionGrid.height-1]),this.collisionGrid.hasCell(t-this.collisionGrid.height,0)&&this.processCollisionsInCell(i,this.collisionGrid.cells[t-this.collisionGrid.height]),this.collisionGrid.hasCell(t-this.collisionGrid.height,1)&&this.processCollisionsInCell(i,this.collisionGrid.cells[t-this.collisionGrid.height+1])}))}processCollisions(){for(let t=0;t<this.collisionGrid.size;t++)this.processCell(t)}constructor(i){t(this,"objects",[]),t(this,"constrains",null),t(this,"gravity",o.Zero()),t(this,"subSteps",4),t(this,"useFixedTime",!0),this.objects=[],this.worldSize=i.copy(),this.configure()}}class P extends l{render(){this.context.fillStyle=this.color,this.context.fillRect(this.position.x,this.position.y,this.position.x+this.size.x,this.position.y+this.size.y)}constructor(i,s,e,h){super(i,s),t(this,"size",o.Zero()),t(this,"color","#00ff00"),this.size=e,h&&(this.color=h)}}class S{update(){this.renderItem.position=this.ballsObject.currentPosition}render(){this.update(),this.renderItem.render()}constructor(i,s){t(this,"ballsObject",null),t(this,"renderItem",null),this.ballsObject=i,this.renderItem=s}}class I extends x{update(t){this.currentPosition=this._fixedPosition,this.previousPosition=this._fixedPosition}addToGrid(t){const i=new o(this.radius*r,this.radius*r),s=this.currentPosition.sum(i),e=this.currentPosition.diff(i);t.addObjectToCells(s,e,this)}constructor(i,s){super(i,s),t(this,"type",d.TypeImmovableBall),t(this,"immovable",!0),t(this,"bounceValue",.5),t(this,"_fixedPosition",null),this._fixedPosition=i.copy()}}class T extends S{update(){super.update(),this.renderItem.direction=this.ballsObject._direction}constructor(i,s){super(i),t(this,"ballsObject",null),this.ballsObject=i,this.renderItem=s}}class G extends x{update(t){this.currentPosition=this._line._vec1,this.previousPosition=this._line._vec2}addToGrid(t){t.addObjectToCells(this._line._vec1,this._line._vec2,this)}constructor(i,s){super(i,0),t(this,"type",d.TypeImmovableLine),t(this,"immovable",!0),this._direction=s,this._line=new a(this.currentPosition.copy(),this.currentPosition.copy().sum(this._direction))}}class O extends l{render(){this.context.strokeStyle=this.color,this.context.beginPath(),this.context.moveTo(this.position.x,this.position.y),this.context.lineTo(this.position.x+this.direction.x,this.position.y+this.direction.y),this.context.stroke()}constructor(i,s,e,h){super(i,s),t(this,"direction",o.Zero()),t(this,"color","#00ff00"),this.direction=e,h&&(this.color=h)}}class M extends c{render(){super.render(),this.context.fillStyle=this.textColor,this.context.textBaseline="middle",this.context.textAlign="center",this.context.fillText(this.text,this.position.x,this.position.y)}constructor(i,s,e,h,n,r){super(i,s,e,h),t(this,"text",""),t(this,"textColor","#ffffff"),this.text=n,r&&(this.textColor=r)}}class z extends P{render(){this.context.strokeStyle=this.color,this.context.strokeRect(this.position.x,this.position.y,this.size.x,this.size.y)}queue(){}constructor(t,i,s,e){super(t,i,s,e)}}new w(1,new x(new o(10,10))),new w(2,new x(new o(10,10))),new w(3,new x(new o(10,10)));const B=[new o(0,0),new o(70,380),new o(270,380),new o(340,0)],E=[[B[0],h.diff(B[0],B[1]).flipSelf()],[B[1],h.diff(B[1],B[2]).flipSelf()],[B[2],h.diff(B[2],B[3]).flipSelf()]];function k(t){const i=.005;return`rgba(${Math.floor(127*Math.sin(i*t+0)+128)}, ${Math.floor(127*Math.sin(i*t+2)+128)}, ${Math.floor(127*Math.sin(i*t+4)+128)}, 1)`}class V{configure(){this.solver=new j(new o(this.canvas.width,this.canvas.height)),this.context.font="10px serif",this.switchToViewportConstrain(),this.solver.constrains=this.constrains;const t=new o(this.canvas.width/2,this.canvas.height/2),i=t.diff(new o(300,300)),s=new o(2,-2).mul(1/this.solver.subSteps);this.generator=new b(this.solver,1e3,7,(t=>[new S(new x(i,5).setVelocity(s),new M(this.context,o.Zero(),7,k(t+200),"","#000000")),new S(new x(i.sum(o.Down(20)),5).setVelocity(s),new M(this.context,o.Zero(),7,k(t+100),"","#000000")),new S(new x(i.sum(o.Down(-20)),5).setVelocity(s),new M(this.context,o.Zero(),7,k(t),"","#000000"))])),this.redBall=new S(new I(new o(230,50),30),new c(this.context,o.Zero(),30,"#ff0000")),this.addObject(this.redBall),E.forEach((i=>{this.addObject(new T(new G(i[0].sum(t.diff(new o(170,190))),i[1]),new O(this.context,o.Zero(),o.Zero(),"#ffffff")))}))}processUserInput(t){t.leftButtonDown?(this.redBall.ballsObject.isPointInsideObject(new o(t.screenX,t.screenY))&&(this.canMoveRedObject=!0),this.canMoveRedObject&&this.redBall.ballsObject.moveBy(new o(t.dx,t.dy))):this.canMoveRedObject=!1}addObject(t){this.objects.push(t),this.solver.addObject(t.ballsObject)}update(t){this.solver.update(t)}generatorsTick(t){const i=this.generator.getNextObject(t);i&&i.forEach((t=>this.addObject(t)))}tick(){this.step<0&&(this.step=0),this.generatorsTick(this.step/1e3),this.update(this.step/1e3),this.clear(),this.renderItems(),this.printFPS(),o.lengthCallsCount=0}renderItems(){this.items.forEach((t=>t.render())),this.objects.forEach((t=>t.render()))}printText(t,i,s){this.context.fillStyle="#ffffff",this.context.textAlign="start",this.context.fillText(t,i,s)}printFPS(){this.context.fillStyle="rgba(0,0,0,0.1)",this.context.fillRect(0,0,100,60),this.printText(`${Math.round(this.step)} ms / ${Math.round(1e3/this.step)} FPS`,0,10),this.printText(`Length calls: ${o.lengthCallsCount}`,0,20),this.printText(`Lenght2 calls: ${o.length2CallsCount}`,0,30),this.printText(`Objects: ${this.objects.length}`,0,40),this.printText(`Compares per object: ${Math.round(o.lengthCallsCount/this.objects.length)}`,0,50)}clear(){this.context.fillStyle="rgba(0, 0, 0, 0.9)",this.context.fillRect(0,0,this.canvas.width,this.canvas.height)}start(){self.requestAnimationFrame?self.requestAnimationFrame(this.nextFrame):setInterval(this.nextInterval,16)}renderGrid(){this.solver.collisionGrid.forEach(((t,i,s,e)=>{const h=new o(t*this.solver.cellSize.x,i*this.solver.cellSize.y),n=new z(this.context,h,this.solver.cellSize.diff(new o(5,5)),s.count>0?"#ff0000":"#00ff00");s.highlight&&(this.context.lineWidth=10),n.render(),this.context.lineWidth=1,this.printText(e,h.x+this.solver.cellSize.x/2,h.y+this.solver.cellSize.y/2)}))}switchToCircleConstrain(){this.constrains=new _(new o(this.canvas.width/2,this.canvas.height/2),this.canvas.height/2),this.items.push(new c(this.context,this.canvas.width/2,this.canvas.height/2,this.canvas.height/2,"#000000"))}switchToViewportConstrain(){this.constrains=new g(this.canvas.width,this.canvas.height)}constructor(i){t(this,"objects",[]),t(this,"constrains",null),t(this,"solver",null),t(this,"nextFrame",(t=>{this.step=t-this.timeRenderEnd,this.step<0&&(this.step=0),this.tick(),this.timeRenderEnd=t,self.requestAnimationFrame(this.nextFrame)})),t(this,"nextInterval",(()=>{this.timeRenderStart=performance.now(),this.step=this.timeRenderStart-this.timeRenderEnd,this.step<0&&(this.step=0),this.tick(),this.timeRenderEnd=performance.now()})),this.canvas=i,this.context=this.canvas.getContext("2d"),this.timeRenderStart=performance.now(),this.timeRenderEnd=performance.now(),this.step=0,this.objects=[],this.items=[],this.generator=null,this.solver=null,this.redBall=null,this.configure()}}let F;var N;(N=F||(F={}))[N.MessageNone=0]="MessageNone",N[N.MessageInit=1]="MessageInit",N[N.MessageUserInput=2]="MessageUserInput";let R;onmessage=function(t){switch(t.data.type){case F.MessageInit:R=new V(t.data.canvas),R.start();break;case F.MessageUserInput:R&&R.processUserInput(t.data.event)}}}();
//# sourceMappingURL=main.65afdec2.js.map
