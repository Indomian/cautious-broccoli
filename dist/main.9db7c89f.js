!function(){function t(t,e,i,n){Object.defineProperty(t,e,{get:i,set:n,enumerable:!0,configurable:!0})}function e(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var i={};t(i,"Vec2ExceptionParallel",(function(){return s}),(function(t){return s=t})),t(i,"Vec2ExceptionNoPerpendicularVectorToZeroVector",(function(){return c}),(function(t){return c=t}));var n,o=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),r=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e}(Error),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e}(r),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e}(r),h=function(){function t(){}return t.diff=function(t,e){return new a(t.x-e.x,t.y-e.y)},t.mul=function(t,e){return new a(t.x*e,t.y*e)},t.distance=function(e,i){return t.diff(e,i).length},t.distance2=function(e,i){return t.diff(e,i).length2},t.intersect=function(t,e){if(t.K===e.K)throw new(0,i.Vec2ExceptionParallel);if(isNaN(t.K)||isNaN(e.K))return isNaN(t.K)?e.makeVec2FromX(t._vec1.x):t.makeVec2FromX(e._vec1.x);var n=(t.B-e.B)/(e.K-t.K);return t.makeVec2FromX(n)},t.dot=function(t,e){return t.x*e.x+t.y*e.y},t.mirror=function(e,i){var n=i.direction.perpendicular;return e.diff(n.mul(2*t.dot(e,n)))},t.scale=function(t,e){return new a(t.x/e.x,t.y/e.y)},t}(),l=1e-6,u=Math.sqrt(2);var a=function(){function t(t,e,i){this._x=0,this._y=0,this._length=null,this._length2=null,this._x=t,this._y=e,i&&(this._length=i,this._length2=i*i)}return Object.defineProperty(t.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._length=null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._length=null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"length",{get:function(){return null===this._length&&(this._length=Math.sqrt(this.x*this.x+this.y*this.y),t.lengthCallsCount++),this._length},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"length2",{get:function(){return null===this._length2&&(this._length2=this._x*this._x+this._y*this._y,t.length2CallsCount++),this._length2},enumerable:!1,configurable:!0}),t.prototype.addSelf=function(t){return this._x+=t.x,this._y+=t.y,this._length=null,this},t.prototype.subSelf=function(t){return this._x-=t.x,this._y-=t.y,this._length=null,this},t.prototype.flipYSelf=function(){return this._y=-this._y,this},t.prototype.flipXSelf=function(){return this._x=-this._x,this},t.prototype.flipSelf=function(){return this._x=-this._x,this._y=-this._y,this},t.prototype.equals=function(t){return h.distance2(this,t)<1e-12},t.prototype.sum=function(e){return new t(this.x+e.x,this.y+e.y)},t.prototype.diff=function(e){return new t(this.x-e.x,this.y-e.y)},t.prototype.mul=function(e){return new t(this.x*e,this.y*e)},t.prototype.copy=function(){return new t(this.x,this.y)},t.prototype.applySelf=function(t){return this.x=t(this.x),this.y=t(this.y),this},t.prototype.isInsideRect=function(t,e){var i=Math.min(t.x,e.x),n=Math.min(t.y,e.y),o=Math.max(t.x,e.x),r=Math.max(t.y,e.y);return this._x>=i&&this._x<=o&&this._y>=n&&this._y<=r},Object.defineProperty(t.prototype,"ort",{get:function(){var e=this.length;return new t(this.x/e,this.y/e,1)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"perpendicular",{get:function(){if(0===this.x){if(this.y>0)return t.Horizontal().ort;if(this.y<0)return t.Horizontal().ort.flipSelf();throw new(0,i.Vec2ExceptionNoPerpendicularVectorToZeroVector)}if(0===this.y){if(this.x>0)return t.Vertical().ort;if(this.x<0)return t.Vertical().ort.flipSelf()}return new t(-this.y/this.x,1).ort},enumerable:!1,configurable:!0}),t.Zero=function(){return new t(0,0)},t.Horizontal=function(){return new t(1,0)},t.Vertical=function(){return new t(0,1)},t.Down=function(e){return new t(0,e)},t.Right=function(e){return new t(e,0)},t.lengthCallsCount=0,t.length2CallsCount=0,t}();class p{render(){}queue(){}constructor(t,i){e(this,"position",a.Zero()),this.context=t,this.position=i}}class f extends p{render(){this.context.beginPath(),this.context.arc(this.position.x,this.position.y,this.r,0,2*Math.PI),this.context.fillStyle=this.color,this.context.fill()}constructor(t,i,n,o){super(t,i),e(this,"r",0),e(this,"color","#00ff00"),n&&(this.r=n),o&&(this.color=o)}}class d{applyConstrain(t){}constructor(){}}class y extends d{get width(){return this._width}set width(t){this._width=t}get height(){return this._height}set height(t){this._height=t}applyConstrain(t){super.applyConstrain(t),t.currentPosition.x-t.radius<0&&(t.currentPosition.x=t.radius),t.currentPosition.x+t.radius>this._width&&(t.currentPosition.x=this._width-t.radius),t.currentPosition.y-t.radius<0&&(t.currentPosition.y=t.radius),t.currentPosition.y+t.radius>this._height&&(t.currentPosition.y=this._height-t.radius)}constructor(t,i){super(),e(this,"_width",0),e(this,"_height",0),this.width=t,this.height=i}}class b extends d{applyConstrain(t){super.applyConstrain(t);const e=t.currentPosition.diff(this.center),i=e.length,n=t.radius;if(i>this.radius-n){const i=e.ort;t.currentPosition=this.center.sum(i.mul(this.radius-n))}}constructor(t,i){super(),e(this,"center",a.Zero()),e(this,"radius",0),this.center=t,this.radius=i}}var g=function(){function t(){this.objects=[],this.highlight=!1}return t.prototype.addObject=function(e){this.objects.length>=t.MAX_OBJECT_IN_CELL||this.objects.push(e)},t.prototype.clear=function(){this.objects=[],this.highlight=!1},t.prototype.remove=function(t){var e=this.objects.findIndex((function(e){return e.index===t}));-1!==e&&this.objects.splice(e,1)},Object.defineProperty(t.prototype,"count",{get:function(){return this.objects.length},enumerable:!1,configurable:!0}),t.MAX_OBJECT_IN_CELL=100,t}(),v=function(){function t(t,e,i){this.cells=[],this._width=t,this._height=e,this.cellSize=i,this.resize()}return Object.defineProperty(t.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return this._width},set:function(t){this._width=t,this.resize()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this._height},set:function(t){this._height=t,this.resize()},enumerable:!1,configurable:!0}),t.prototype.resize=function(){this.cells=[],this._size=this._width*this._height;for(var t=0;t<this._size;t++)this.cells.push(new g)},t.prototype.addObject=function(t,e,i){var n=Math.trunc(t/this.cellSize.x),o=Math.trunc(e/this.cellSize.y),r=n*this._height+o;this.addObjectByIndex(r,i)},t.prototype.addObjectByIndex=function(t,e){!isNaN(t)&&t>=0&&t<this.size&&this.cells[t].addObject(e)},t.prototype.makeIndexFromVec=function(t){return t.x*this._height+t.y},t.prototype.makeIndexFromCoord=function(t,e){return t*this._height+e},t.prototype.makeVecFromIndex=function(t){var e=Math.trunc(t/this._height),i=t-e*this._height;return new a(e,i)},t.prototype.addObjectToCells=function(t,e,i){var n=h.scale(t,this.cellSize).applySelf(Math.trunc),o=h.scale(e,this.cellSize).applySelf(Math.trunc),r=this.makeIndexFromVec(n),s=this.makeIndexFromVec(o);if(n.x===o.x)for(var c=r;c<s;c++)this.cells[c].addObject(i);else if(n.y===o.y)for(c=r;c<s;c+=this.height)this.cells[c].addObject(i);else for(var l=Math.min(n.x,o.x),u=Math.min(n.y,o.y),a=Math.max(n.x,o.x),p=Math.max(n.y,o.y)-u,f=this.makeIndexFromCoord(l,u),d=0;d<=a-l;d++)for(var y=0;y<=p;y++){c=f+this.makeIndexFromCoord(d,y);this.addObjectByIndex(c,i)}},t.prototype.clear=function(){for(var t=0;t<this.size;t++)this.cells[t].clear()},t.prototype.forEach=function(t){var e=this;this.cells.forEach((function(i,n){var o=e.makeVecFromIndex(n);t(o.x,o.y,i,n)}))},t.prototype.hasCell=function(t,e){if(t<0||t>=this.size)return!1;var i=this.makeVecFromIndex(t),n=i.x,o=i.y;return!(o<=0&&e<0)&&(!(o===this.height-1&&e>0)&&(!(0===n&&e<0)&&!(n>=this.width-1&&e>0)))},t}(),_=function(){function t(t){this.objects=[],this.constrains=null,this.gravity=a.Zero(),this.subSteps=4,this.useFixedTime=!0,this.objects=[],this.worldSize=t.copy(),this.configure()}return t.prototype.configure=function(){this.gravity=new a(0,100),this.useFixedTime=!0,this.step=.017/this.subSteps;var t=Math.round(this.worldSize.x/16),e=Math.round(this.worldSize.y/16);this.cellSize=new a(this.worldSize.x/t,this.worldSize.y/e),this.collisionGrid=new v(t,e,this.cellSize)},t.prototype.addObject=function(t){this.objects.push(t)},t.prototype.update=function(t){for(var e=this.useFixedTime?this.step:t/this.subSteps,i=0;i<this.subSteps;i++)this.addObjectsToGrid(),this.processCollisions(),this.applyGravity(),this.updateObjects(e),this.applyConstrains()},t.prototype.addObjectsToGrid=function(){var t=this;this.collisionGrid.clear(),this.objects.forEach((function(e,i){e.addToGrid(t.collisionGrid)}))},t.prototype.updateObjects=function(t){this.objects.forEach((function(e){return e.update(t)}))},t.prototype.applyGravity=function(){var t=this;this.objects.forEach((function(e){return e.accelerate(t.gravity)}))},t.prototype.applyConstrains=function(){var t=this;this.objects.forEach((function(e){return t.constrains.applyConstrain(e)}))},t.prototype.processCollisionsInCell=function(t,e){e.objects.forEach((function(e){t!==e&&(t.immovable&&e.immovable||t.collide(e))}))},t.prototype.processCell=function(t){var e=this;this.collisionGrid.cells[t].objects.forEach((function(i){e.processCollisionsInCell(i,e.collisionGrid.cells[t]),e.collisionGrid.hasCell(t,-1)&&e.processCollisionsInCell(i,e.collisionGrid.cells[t-1]),e.collisionGrid.hasCell(t,1)&&e.processCollisionsInCell(i,e.collisionGrid.cells[t+1]),e.collisionGrid.hasCell(t+e.collisionGrid.height,-1)&&e.processCollisionsInCell(i,e.collisionGrid.cells[t+e.collisionGrid.height-1]),e.collisionGrid.hasCell(t+e.collisionGrid.height,0)&&e.processCollisionsInCell(i,e.collisionGrid.cells[t+e.collisionGrid.height]),e.collisionGrid.hasCell(t+e.collisionGrid.height,1)&&e.processCollisionsInCell(i,e.collisionGrid.cells[t+e.collisionGrid.height+1]),e.collisionGrid.hasCell(t-e.collisionGrid.height,-1)&&e.processCollisionsInCell(i,e.collisionGrid.cells[t-e.collisionGrid.height-1]),e.collisionGrid.hasCell(t-e.collisionGrid.height,0)&&e.processCollisionsInCell(i,e.collisionGrid.cells[t-e.collisionGrid.height]),e.collisionGrid.hasCell(t-e.collisionGrid.height,1)&&e.processCollisionsInCell(i,e.collisionGrid.cells[t-e.collisionGrid.height+1])}))},t.prototype.processCollisions=function(){for(var t=0;t<this.collisionGrid.size;t++)this.processCell(t)},t}();class x{update(){this.renderItem.position=this.ballsObject.currentPosition}render(){this.update(),this.renderItem.render()}constructor(t,i){e(this,"ballsObject",null),e(this,"renderItem",null),this.ballsObject=t,this.renderItem=i}}class m extends p{render(){this.context.fillStyle=this.color,this.context.fillRect(this.position.x,this.position.y,this.position.x+this.size.x,this.position.y+this.size.y)}constructor(t,i,n,o){super(t,i),e(this,"size",a.Zero()),e(this,"color","#00ff00"),this.size=n,o&&(this.color=o)}}class w extends m{render(){this.context.strokeStyle=this.color,this.context.strokeRect(this.position.x,this.position.y,this.size.x,this.size.y)}queue(){}constructor(t,e,i,n){super(t,e,i,n)}}var j={};t(j,"Scene1",(function(){return H}),(function(t){return H=t}));var O=function(t){this.engine=t},P=function(){function t(t){this.solver=null,this.solver=t}return t.prototype.getNextObjects=function(t){return[]},t}();class C extends P{getNextObjects(t){if(this.total>this.limit)return[];if(this.lastCreateTime+=1,this.lastCreateTime>this.delay){const t=this.create(this.total);return this.lastCreateTime=0,this.total+=t.length,t}return[]}constructor(t,e,i,n){super(t),this.limit=e,this.total=0,this.delay=i,this.create=n,this.lastCreateTime=0}}var S={};t(S,"BallsObject",(function(){return E}),(function(t){return E=t}));var I,T,G=function(){function t(t,e){this._vec1=a.Zero(),this._vec2=a.Zero(),this._k=0,this._b=0,this._vec1=t,this._vec2=e,this._direction=h.diff(this._vec1,this._vec2),this._length=this._direction.length,this._length2=this._direction.length2,this._ort=this._direction.ort,this.calculateKB()}return t.prototype.inBetween=function(t){var e,i,n,o=h.diff(t,this._vec1).length+h.diff(this._vec2,t).length;return e=this._length,i=o,n=l,Math.abs(e-i)<n},t.prototype.inBetweenFast=function(t){return t.isInsideRect(this._vec1,this._vec2)},t.prototype.calculateKB=function(){this._vec1.y===this._vec2.y?(this._b=this._vec1.y,this._k=0):this._vec1.x===this._vec2.x?(this._b=NaN,this._k=NaN):(this._b=(this._vec1.x*this._vec2.y-this._vec1.y*this._vec2.x)/(this._vec1.x-this._vec2.x),this._k=(this._vec1.y-this._vec2.y)/(this._vec1.x-this._vec2.x))},t.prototype.makeVec2FromX=function(t){return new a(t,this._k*t+this._b)},t.prototype.copy=function(){return new t(this._vec1,this._vec2)},t.prototype.moveBy=function(t){this._vec1.addSelf(t),this._vec2.addSelf(t),this.calculateKB()},t.prototype.getPointProjection=function(t){var e=this.direction,i=h.diff(t,this._vec1),n=h.dot(e,i)/this.length;return this._vec1.sum(this.ort.mul(n))},Object.defineProperty(t.prototype,"B",{get:function(){return this._b},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"K",{get:function(){return this._k},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"length",{get:function(){return this._length},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"direction",{get:function(){return this._direction},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"ort",{get:function(){return this._ort},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vec1",{get:function(){return this._vec1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vec2",{get:function(){return this._vec2},enumerable:!1,configurable:!0}),t.Vertical=function(e){return new t(new a(e,0),new a(e,Number.MAX_SAFE_INTEGER))},t.Horizontal=function(e){return new t(new a(0,e),new a(Number.MAX_SAFE_INTEGER,e))},t}();function M(t,e){var i=t,n=e;if(i.type>n.type){var o=function(t,e){return{a:e,b:t}}(i,n);i=o.a,n=o.b}switch(!0){case i.type===I.TypeBall&&n.type===I.TypeBall:return function(t,e){var i=h.diff(t.currentPosition,e.currentPosition),n=i.length,o=t.radius+e.radius;if(n<o){var r=i.ort,s=o-n;t.currentPosition.addSelf(h.mul(r,t.radius/o*s*t.bounceValue)),e.currentPosition.subSelf(h.mul(r,e.radius/o*s*e.bounceValue))}}(i,n);case i.type===I.TypeBall&&n.type===I.TypeImmovableBall:return function(t,e){var i=h.diff(t.currentPosition,e.currentPosition),n=i.length,o=t.radius+e.radius;if(n<o){var r=i.ort,s=o-n;t.currentPosition.addSelf(h.mul(r,t.radius/o*s*t.bounceValue*e.bounceValue))}}(i,n);case i.type===I.TypeBall&&n.type===I.TypeImmovableLine:return function(t,e){try{var i=e._line.getPointProjection(t.currentPosition);if(e._line.inBetweenFast(i)){var n=h.diff(i,t.currentPosition);if(n.length2<t.radius2){var o=n.ort,r=t.radius-n.length;t.currentPosition.subSelf(h.mul(o,r*t.bounceValue*e.bounceValue))}}}catch(t){}}(i,n);default:return}}(T=I||(I={}))[T.TypeNull=0]="TypeNull",T[T.TypeBall=1]="TypeBall",T[T.TypeImmovableBall=2]="TypeImmovableBall",T[T.TypeImmovableLine=3]="TypeImmovableLine";var B=function(){function t(){this.type=I.TypeNull,this.previousPosition=a.Zero(),this.currentPosition=a.Zero(),this.index=t.index++}return t.prototype.update=function(t){},t.prototype.accelerate=function(t){},t.prototype.collide=function(t){},t.prototype.addToGrid=function(t){},t.index=0,t}(),V=function(){var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};return function(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),z=Math.pow(10,2),E=function(t){function e(e,i){var n=t.call(this)||this;return n.acc=a.Zero(),n.radius=10,n.bounceValue=1.1,n.motionReduce=1,n.type=I.TypeBall,n.immovable=!1,n.previousPosition=e.copy(),n.currentPosition=e.copy(),void 0!==i&&(n.radius=i),n._radius2=n.radius*n.radius,n}return V(e,t),e.prototype.update=function(t){var e=this.velocity.mul(this.motionReduce);e.length2>z&&(e=e.ort.mul(10)),this.previousPosition=this.currentPosition.copy(),this.currentPosition.addSelf(e.addSelf(this.acc.mul(t*t))),this.acc=a.Zero()},e.prototype.accelerate=function(t){return this.acc.addSelf(t),this},e.prototype.setVelocity=function(t){return this.velocity=t,this},e.prototype.collide=function(t){M(this,t)},e.prototype.addToGrid=function(t){t.addObject(Math.floor(this.currentPosition.x),Math.floor(this.currentPosition.y),this)},e.prototype.moveBy=function(t){this.currentPosition.addSelf(t)},e.prototype.isPointInsideObject=function(t){return h.distance(this.currentPosition,t)<this.radius},Object.defineProperty(e.prototype,"velocity",{get:function(){return h.diff(this.currentPosition,this.previousPosition)},set:function(t){this.previousPosition=h.diff(this.currentPosition,t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"movementVector",{get:function(){return new G(this.previousPosition,this.currentPosition)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"radius2",{get:function(){return this._radius2},enumerable:!1,configurable:!0}),e}(B),k={};t(k,"ImmovableBallsObject",(function(){return N}),(function(t){return N=t}));var F=function(){var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};return function(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),N=function(t){function e(e,i){var n=t.call(this,e,i)||this;return n.type=I.TypeImmovableBall,n.immovable=!0,n.bounceValue=.5,n._fixedPosition=null,n._fixedPosition=e.copy(),n}return F(e,t),e.prototype.update=function(t){this.currentPosition=this._fixedPosition,this.previousPosition=this._fixedPosition},e.prototype.addToGrid=function(t){var e=new a(this.radius*u,this.radius*u),i=this.currentPosition.sum(e),n=this.currentPosition.diff(e);t.addObjectToCells(i,n,this)},e}(S.BallsObject);class R extends x{update(){super.update(),this.renderItem.direction=this.ballsObject._direction}constructor(t,i){super(t),e(this,"ballsObject",null),this.ballsObject=t,this.renderItem=i}}var Z={};t(Z,"ImmovableLineObject",(function(){return L}),(function(t){return L=t}));var A=function(){var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};return function(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),L=function(t){function e(e,i){var n=t.call(this,e,0)||this;return n.type=I.TypeImmovableLine,n.immovable=!0,n.bounceValue=1,n._direction=i,n._line=new G(n.currentPosition.copy(),n.currentPosition.copy().sum(n._direction)),n}return A(e,t),e.prototype.update=function(t){this.currentPosition=this._line._vec1,this.previousPosition=this._line._vec2},e.prototype.addToGrid=function(t){t.addObjectToCells(this._line._vec1,this._line._vec2,this)},e}(S.BallsObject);class K extends p{render(){this.context.strokeStyle=this.color,this.context.beginPath(),this.context.moveTo(this.position.x,this.position.y),this.context.lineTo(this.position.x+this.direction.x,this.position.y+this.direction.y),this.context.stroke()}constructor(t,i,n,o){super(t,i),e(this,"direction",a.Zero()),e(this,"color","#00ff00"),this.direction=n,o&&(this.color=o)}}class X extends f{render(){super.render(),this.context.fillStyle=this.textColor,this.context.textBaseline="middle",this.context.textAlign="center",this.context.fillText(this.text,this.position.x,this.position.y)}constructor(t,i,n,o,r,s){super(t,i,n,o),e(this,"text",""),e(this,"textColor","#ffffff"),this.text=r,s&&(this.textColor=s)}}function q(t){var e=.005,i=Math.floor(127*Math.sin(e*t+0)+128),n=Math.floor(127*Math.sin(e*t+2)+128),o=Math.floor(127*Math.sin(e*t+4)+128);return"rgba(".concat(i,", ").concat(n,", ").concat(o,", 1)")}var U=function(){var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};return function(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),$=[new a(0,0),new a(70,380),new a(270,380),new a(340,0)],D=[[$[0],h.diff($[0],$[1]).flipSelf()],[$[1],h.diff($[1],$[2]).flipSelf()],[$[2],h.diff($[2],$[3]).flipSelf()]],H=function(t){function e(e){var i=t.call(this,e)||this,n=new a(i.engine.canvas.width/2,i.engine.canvas.height/2);return i.generator=i.createBallsGenerator(n,new a(300,300),new a(2,-2)),i.createBottomBouncyLine(),i.createMilkShake(n),i.createActor(),i}return U(e,t),e.prototype.createBallsGenerator=function(t,e,i){var n=this,o=t.diff(e),r=i.mul(1/this.engine.solver.subSteps);return new C(this.engine.solver,1700,7,(function(t){return[new x(new(0,S.BallsObject)(o,5).setVelocity(r),new X(n.engine.context,a.Zero(),7,q(t+200),"","#000000")),new x(new(0,S.BallsObject)(o.sum(a.Down(20)),5).setVelocity(r),new X(n.engine.context,a.Zero(),7,q(t+100),"","#000000")),new x(new(0,S.BallsObject)(o.sum(a.Down(-20)),5).setVelocity(r),new X(n.engine.context,a.Zero(),7,q(t),"","#000000")),new x(new(0,S.BallsObject)(o.sum(a.Right(-40)),5).setVelocity(r),new X(n.engine.context,a.Zero(),7,q(t-100),"","#000000"))]}))},e.prototype.createBottomBouncyLine=function(){var t=new(0,Z.ImmovableLineObject)(new a(0,this.engine.canvas.height-10),new a(this.engine.canvas.width,0));t.bounceValue=1.5,this.engine.addObject(new R(t,new K(this.engine.context,a.Zero(),a.Zero(),"#ff0000")))},e.prototype.createMilkShake=function(t){var e=this;D.forEach((function(i){e.engine.addObject(new R(new(0,Z.ImmovableLineObject)(i[0].sum(t.diff(new a(170,190))),i[1]),new K(e.engine.context,a.Zero(),a.Zero(),"#ffffff")))}))},e.prototype.createActor=function(){this.actor=new x(new(0,k.ImmovableBallsObject)(new a(230,50),30),new f(this.engine.context,a.Zero(),30,"#ff0000")),this.engine.addObject(this.actor)},e.prototype.getActor=function(){return this.actor},e}(O);class J{configure(){this.solver=new _(new a(this.canvas.width,this.canvas.height)),this.context.font="10px serif",this.switchToViewportConstrain(),this.solver.constrains=this.constrains;const t=new(0,j.Scene1)(this);this.generator=t.generator,this.redBall=t.getActor()}processUserInput(t){t.leftButtonDown?(this.redBall.ballsObject.isPointInsideObject(new a(t.screenX,t.screenY))&&(this.canMoveRedObject=!0),this.canMoveRedObject&&this.redBall.ballsObject.moveBy(new a(t.dx,t.dy))):this.canMoveRedObject=!1,"g"===t.keyPressed&&(this.flagRenderGrid=!this.flagRenderGrid)}addObject(t){this.objects.push(t),this.solver.addObject(t.ballsObject)}update(t){this.solver.update(t)}generatorsTick(t){const e=this.generator.getNextObjects(t);e&&e.forEach((t=>this.addObject(t)))}tick(){this.step<0&&(this.step=0),this.generatorsTick(this.step/1e3),this.update(this.step/1e3),this.clear(),this.renderItems(),this.flagRenderGrid&&this.renderGrid(),this.printFPS(),a.lengthCallsCount=0,a.length2CallsCount=0}renderItems(){this.items.forEach((t=>t.render())),this.objects.forEach((t=>t.render()))}printText(t,e,i){this.context.fillStyle="#ffffff",this.context.textAlign="start",this.context.fillText(t,e,i)}printFPS(){this.context.fillStyle="rgba(0,0,0,0.1)",this.context.fillRect(0,0,100,60),this.printText(`${Math.round(this.step)} ms / ${Math.round(1e3/this.step)} FPS`,0,10),this.printText(`Length calls: ${a.lengthCallsCount}`,0,20),this.printText(`Lenght2 calls: ${a.length2CallsCount}`,0,30),this.printText(`Objects: ${this.objects.length}`,0,40),this.printText(`Compares per object: ${Math.round(a.lengthCallsCount/this.objects.length)}`,0,50)}clear(){this.context.fillStyle="rgba(0, 0, 0, 0.9)",this.context.fillRect(0,0,this.canvas.width,this.canvas.height)}start(){self.requestAnimationFrame?self.requestAnimationFrame(this.nextFrame):setInterval(this.nextInterval,16)}renderGrid(){this.solver.collisionGrid.forEach(((t,e,i,n)=>{const o=new a(t*this.solver.cellSize.x,e*this.solver.cellSize.y),r=new w(this.context,o,this.solver.cellSize.diff(new a(5,5)),i.count>0?"#ff0000":"#00ff00");i.highlight&&(this.context.lineWidth=10),r.render(),this.context.lineWidth=1,this.printText(n,o.x+this.solver.cellSize.x/2,o.y+this.solver.cellSize.y/2)}))}switchToCircleConstrain(){this.constrains=new b(new a(this.canvas.width/2,this.canvas.height/2),this.canvas.height/2),this.items.push(new f(this.context,this.canvas.width/2,this.canvas.height/2,this.canvas.height/2,"#000000"))}switchToViewportConstrain(){this.constrains=new y(this.canvas.width,this.canvas.height)}constructor(t){e(this,"objects",[]),e(this,"constrains",null),e(this,"solver",null),e(this,"flagRenderGrid",!1),e(this,"nextFrame",(t=>{this.step=t-this.timeRenderEnd,this.step<0&&(this.step=0),this.tick(),this.timeRenderEnd=t,self.requestAnimationFrame(this.nextFrame)})),e(this,"nextInterval",(()=>{this.timeRenderStart=performance.now(),this.step=this.timeRenderStart-this.timeRenderEnd,this.step<0&&(this.step=0),this.tick(),this.timeRenderEnd=performance.now()})),this.canvas=t,this.context=this.canvas.getContext("2d"),this.timeRenderStart=performance.now(),this.timeRenderEnd=performance.now(),this.step=0,this.objects=[],this.items=[],this.generator=null,this.solver=null,this.redBall=null,this.configure()}}var W={};t(W,"MessageType",(function(){return Y}),(function(t){return Y=t}));var Y,Q,tt=function(){var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};return function(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();(Q=Y||(Y={}))[Q.MessageNone=0]="MessageNone",Q[Q.MessageInit=1]="MessageInit",Q[Q.MessageUserInput=2]="MessageUserInput";var et,it=function(){this.type=Y.MessageNone};(function(t){function e(e){var i=t.call(this)||this;return i.type=Y.MessageInit,i.canvas=e,i}tt(e,t)})(it),function(t){function e(e){var i=t.call(this)||this;return i.type=Y.MessageUserInput,i.event=e,i}tt(e,t)}(it);onmessage=function(t){switch(t.data.type){case W.MessageType.MessageInit:(et=new J(t.data.canvas)).start();break;case W.MessageType.MessageUserInput:et&&et.processUserInput(t.data.event)}}}();