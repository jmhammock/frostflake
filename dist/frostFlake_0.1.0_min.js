/*! frostFlake Version: 0.1.0 */
!function(){var a=!1,b=/xyz/.test(function(){})?/\b_super\b/:/.*/;this.Class=function(){},Class.extend=function(c){function d(){!a&&this.init&&this.init.apply(this,arguments)}var e=this.prototype;a=!0;var f=new this;a=!1;for(var g in c)f[g]="function"==typeof c[g]&&"function"==typeof e[g]&&b.test(c[g])?function(a,b){return function(){var c=this._super;this._super=e[a];var d=b.apply(this,arguments);return this._super=c,d}}(g,c[g]):c[g];return d.prototype=f,d.prototype.constructor=d,d.extend=arguments.callee,d}}();var frostFlake=function(a){"use strict";return a.Animation=function(){var b="",c={},d={},e="",f=0,g=0,h=0,i=!1,j=0;this.currentSequence=function(b){return a.hasValue(b)&&b!==e&&c.hasOwnProperty(b)&&(e=b,d=c[b],f=0,j=d.frames[f].duration),d},this.currentFrame=function(b){return a.hasValue(b)&&(f=b),f},this.spriteSheetUrl=function(c){return a.hasValue(c)&&(b=c),b},this.update=function(b){i===!0&&a.hasValue(d)&&(j-=b,0>=j&&(f<d.frames.length-2?f+=1:d.isLooping&&(f=0),j+=d.frames[f].duration))},this.start=function(){a.hasValue(d)&&a.hasValue(d.frames)&&d.frames.length>0&&(i=!0)},this.stop=function(){i=!1},this.getTextureCoordinates=function(){var b,c={top:0,right:0,bottom:0,left:0};return a.hasValue(d.frames)&&d.frames.length>0&&(b=d.frames[f],c={top:b.top,right:b.left+g,bottom:b.top+h,left:b.left}),c},this.toJson=function(){return{spriteSheetUrl:this.spriteSheetUrl(),frameWidth:g,frameHeight:h,sequences:c}},this.fromJson=function(a){this.spriteSheetUrl(a.spriteSheetUrl),g=a.frameWidth,h=a.frameHeight,c=a.sequences,i=!1}},a.Animation.getInstanceFromUrl=function(b,c){var d=new a.Animation;return a.hasValue(b)&&a.loadJson(b,function(b){d.fromJson(b),a.hasValue(c)&&c()}),d},a}(frostFlake||{}),frostFlake=function(a){"use strict";return a.Camera=Class.extend({init:function(a,b){this.attachTarget=null,this.viewPort={left:0,right:0,top:0,bottom:0,width:a,height:b},this.velocity={x:0,y:0},this.position={x:0,y:0},this.updateViewPort()},update:function(b){a.hasValue(this.attachTarget)?(this.velocity=this.attachTarget.velocity,this.position=this.attachTarget.position):(this.position.x=this.position.x+this.velocity.x*b,this.position.y=this.position.y+this.velocity.y*b),this.updateViewPort()},updateViewPort:function(){var a=this.viewPort.width/2,b=this.viewPort.height/2;this.viewPort.left=this.position.x-a,this.viewPort.right=this.position.x+a,this.viewPort.top=this.position.y+b,this.viewPort.bottom=this.position.y-b},attachTo:function(b){return a.hasValue(b.position)?(this.attachTarget=b,this.position=this.attachTarget,this.updateViewPort(),!0):!1},detach:function(){this.attachTarget=null},getRandomPointInView:function(){return{x:this.getRandomXInView(),y:this.getRandomYInView()}},getRandomXInView:function(){return a.math.randomInRange(this.viewPort.left,this.viewPort.right)},getRandomYInView:function(){return a.math.randomInRange(this.viewPort.bottom,this.viewPort.top)},updateDimensions:function(a,b){this.viewPort.width=a,this.viewPort.height=b,this.updateViewPort()}}),a}(frostFlake||{}),frostFlake=function(a){"use strict";return a.input={mouse:{lastX:0,lastY:0,x:0,y:0,worldX:0,worldY:0,changeX:0,changeY:0,buttonsDown:{},inFrame:!1,buttons:{Left:1,Middle:2,Right:3},buttonCodes:{1:"Left",2:"Middle",3:"Right"},buttonDown:function(a){return this.buttonsDown[this.buttonCodes[a]]===!0},isOverSprite:function(b){if(!(b instanceof a.Sprite))throw"Instance is not a sprite";var c=.5*b.width,d=.5*b.height;return this.worldX>b.position.x-c&&this.worldX<b.position.x+c&&this.worldY>b.position.y-d&&this.worldY<b.position.y+d?!0:!1}},keyboard:{keysDown:{},keys:{Backspace:8,Tab:9,Enter:13,Shift:16,Ctrl:17,Alt:18,PauseBreak:19,CapsLock:20,Esc:27,Space:32,PageUp:33,PageDown:34,End:35,Home:36,Left:37,Up:38,Right:39,Down:40,Insert:45,Delete:46,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,Windows:91,RightClick:93,Num0:96,Num1:97,Num2:98,Num3:99,Num4:100,Num5:101,Num6:102,Num7:103,Num8:104,Num9:105,"Num*":106,"Num+":107,"Num-":109,"Num.":110,"Num/":111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NumLock:144,ScrollLock:145,MyComputer:182,MyCalculator:183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},chars:{8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"PauseBreak",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",45:"Insert",46:"Delete",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",91:"Windows",93:"RightClick",96:"Num0",97:"Num1",98:"Num2",99:"Num3",100:"Num4",101:"Num5",102:"Num6",103:"Num7",104:"Num8",105:"Num9",106:"Num*",107:"Num+",109:"Num-",110:"Num.",111:"Num/",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",182:"MyComputer",183:"MyCalculator",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},keyDown:function(a){return this.keysDown[this.chars[a]]===!0}}},a}(frostFlake||{}),frostFlake=function(a,b){"use strict";return a.InputManager=Class.extend({init:function(c){var d=a.input.mouse,e=a.input.keyboard,f=this;if(!a.hasValue(c))throw"InputManager needs a valid canvas to listen for input.";b(c).on("touchmove",function(b){var c=b.originalEvent.touches[0];a.hasValue(c)&&f.updateMouseLocation(c.clientX,c.clientY),d.inFrame===!0&&b.preventDefault()}),b(document).on("touchstart",function(b){var c=b.originalEvent.touches[0];a.hasValue(c)&&f.updateMouseLocation(c.clientX,c.clientY),d.buttonsDown.Left=!0,d.inFrame===!0&&b.preventDefault()}),b(document).on("touchend",function(b){var c=b.originalEvent.touches[0];a.hasValue(c)&&f.updateMouseLocation(c.clientX,c.clientY),d.buttonsDown.Left=!1,d.inFrame===!0&&b.preventDefault()}),b(c).mouseenter(function(){d.inFrame=!0}),b(c).mouseleave(function(){d.inFrame=!1}),b(c).on("mousemove",function(a){f.updateMouseLocation(a.offsetX,a.offsetY),d.inFrame===!0&&a.preventDefault()}),b(document).on("mousedown",function(a){var b=d.buttonCodes[a.which];d.buttonsDown[b]=!0,d.inFrame===!0&&a.preventDefault()}),b(document).on("mouseup",function(a){var b=d.buttonCodes[a.which];d.buttonsDown[b]=!1,d.inFrame===!0&&a.preventDefault()}),b(document).keydown(function(a){var b=e.chars[a.which];e.keysDown[b]=!0}),b(document).keyup(function(b){var c=e.chars[b.which];e.keysDown[c]=!1,"Space"===c&&a.focused===!0&&b.preventDefault()})},updateMouseLocation:function(b,c){var d=a.input.mouse,e=a.game.camera;d.lastX=d.x,d.lastY=d.y,d.x=b-e.viewPort.width/2,d.y=a.math.invert(c)+e.viewPort.height/2,d.changeX=d.x-d.lastX,d.changeY=d.y-d.lastY,d.worldX=e.position.x+d.x,d.worldY=e.position.y+d.y},update:function(){var b=a.input.mouse,c=a.game.camera;b.worldX=c.position.x+b.x,b.worldY=c.position.y+b.y}}),a}(frostFlake||{},jQuery),frostFlake=function(a,b){"use strict";return a.loadJson=function(a,c,d,e){c||(c=function(b){console.log("Loaded json from: "+a+" ("+b+")")}),d||(d=function(a,b,c){console.log("Failed to load JSON: "+b+", "+c)}),b.getJSON(a).done(c).fail(d).always(e)},a.toJson=JSON.stringify,a.fromJson=JSON.parse,a.loadImage=function(a,b){var c,d=a;return c=new Image,c.loadEvents=[],b&&c.loadEvents.push(b),c.onload=function(){var a;for(a=0;a<c.loadEvents.length;a+=1)c.loadEvents[a]()},c.src=d,c},a}(frostFlake||{},jQuery),frostFlake=function(a){"use strict";return a.Renderer=Class.extend({draw:function(b,c,d,e){var f,g=d.getContext("2d"),h=a.math.invert(c.position.x)+g.canvas.width/2,i=c.position.y+g.canvas.height/2,j=a.defaultIfNoValue(e,"rgba(0, 0, 0, 0)");for(g.fillStyle=j,g.fillRect(0,0,d.width,d.height),g.save(),g.translate(h,i),f=0;f<b.length;f+=1)this.drawSprite(b[f],g);g.restore()},drawSprite:function(b,c){var d,e=b.position.x,f=a.math.invert(b.position.y),g=b.rotation,h=b.alpha,i=0,j=0;if(a.hasValue(b.textureCoordinates)&&(i=b.textureCoordinates.right-b.textureCoordinates.left,j=b.textureCoordinates.bottom-b.textureCoordinates.top),c.save(),c.translate(e,f),c.rotate(-g),c.globalAlpha=h,a.hasValue(b.texture)&&i>0&&j>0&&c.drawImage(b.texture,b.textureCoordinates.left,b.textureCoordinates.top,i,j,b.width/-2,b.height/-2,b.width,b.height),c.globalAlpha=1,a.hasValue(b.children))for(d=0;d<b.children.length;d+=1)this.drawSprite(b.children[d],c);c.restore()}}),a}(frostFlake||{}),frostFlake=function(a){"use strict";return a.Sprite=Class.extend({init:function(b,c){this.active=!0,this.children=[],this.alpha=1,this.drawScale={x:1,y:1},this.parent=null,this.width=0,this.height=0,this.position={x:0,y:0},this.velocity={x:0,y:0},this.acceleration={x:0,y:0},this.friction=0,this.rotation=0,this.rotationVelocity=0,this.collisionRadius=0,this.showRadius=!1,this.textureUrl="",this.texture=null,this.animation=null,this.textureCoordinates=null,this.parallaxCamera=null,this.parallaxPercent=0,a.hasValue(b)&&(this.textureUrl=b,this.loadImage(b,c))},update:function(b){if(!a.hasValue(b))throw"Bad delta provided to update cycle!";if(this.active===!0){var c,d=b*b/2;for(this.position.x+=this.velocity.x*b+this.acceleration.x*d,this.position.y+=this.velocity.y*b+this.acceleration.y*d,this.velocity.x+=this.acceleration.x*b-this.friction*this.velocity.x*b,this.velocity.y+=this.acceleration.y*b-this.friction*this.velocity.y*b,this.rotation+=this.rotationVelocity*b,a.hasValue(this.parallaxCamera)&&(this.position.x+=this.parallaxCamera.velocity.x*this.parallaxPercent*b,this.position.y+=this.parallaxCamera.velocity.y*this.parallaxPercent*b),c=0;c<this.children.length;c+=1)this.children[c].update(b);this.clamp(),a.hasValue(this.animation)&&this.animation instanceof a.Animation&&(this.animation.update(b),this.textureCoordinates=this.animation.getTextureCoordinates())}},addChild:function(a){a.parent=this,this.children.push(a)},removeChild:function(a){var b=this.sprites.indexOf(a);return b>=0&&this.children.splice(b,1),a.parent=null,a},attachTo:function(a){a.addChild(this)},getAbsoluteProperties:function(){var b,c,d,e;return a.hasValue(this.parent)?(b=this.parent.getAbsoluteProperties(),d=Math.cos(b.rotation)*this.position.x,e=Math.sin(b.rotation)*this.position.y,c={position:{x:d+b.position.x,y:e+b.position.y},rotation:this.rotation+b.rotation}):c={position:this.position,rotation:this.rotation},c},applyParallax:function(a,b){this.parallaxCamera=a,this.parallaxPercent=b},clearParallax:function(){this.parallaxCamera=null,this.parallaxPercent=0},clamp:function(){this.alpha=Math.max(this.alpha,0),this.alpha=Math.min(this.alpha,1),this.rotation>=a.math.twoPi&&(this.rotation-=a.math.twoPi),this.rotation<0&&(this.rotation+=a.math.twoPi)},isRadiusColliding:function(b){var c,d;if(!(b instanceof a.Sprite))throw"Cannot check radius collision against a non-Sprite object.";return c=this.radius+b.radius,d=a.math.absoluteDistanceBetween(this.position,b.position),d>c},updateDimensions:function(){if(a.hasValue(this.animation))this.textureCoordinates=this.animation.getTextureCoordinates();else if(!a.hasValue(this.textureCoordinates)){var b={width:0,height:0};a.hasValue(this.texture)&&(b.width=this.texture.width,b.height=this.texture.height),this.textureCoordinates={top:0,right:b.width,bottom:b.height,left:0}}this.width=(this.textureCoordinates.right-this.textureCoordinates.left)*this.drawScale.x,this.height=(this.textureCoordinates.bottom-this.textureCoordinates.top)*this.drawScale.y,this.updateRadius()},updateRadius:function(){this.radius=0===this.width&&0===this.height?0:a.math.absoluteDistanceBetween({x:0,y:0},{x:.5*this.width,y:.5*this.height})},setTextureCoordinates:function(a,b,c,d){this.textureCoordinates={top:c,right:b,bottom:d,left:a},this.updateDimensions()},clearTextureCoordinates:function(){this.textureCoordinates=null},setPosition:function(a,b){this.position.x=a,this.position.y=b},setDrawScale:function(a,b){a=Math.max(a,0),b=Math.max(b,0),this.drawScale={x:a,y:b},this.updateDimensions()},loadAnimation:function(b,c){var d=this,e=a.Animation.getInstanceFromUrl(b,function(){d.setAnimation(e,c)})},setAnimation:function(b,c){var d=this;this.loadImage(b.spriteSheetUrl(),function(){d.animation=b,d.updateDimensions(),a.hasValue(c)&&c()})},loadImage:function(b,c){var d=this;this.textureUrl=b,this.texture=a.loadImage(this.textureUrl,function(){a.hasValue(c)&&c(),d.updateDimensions()})},toJson:function(){throw"Not implemented"},fromJson:function(){throw"Not implemented"}}),a}(frostFlake||{}),frostFlake=function(a){"use strict";return a.hasValue=function(a){return void 0!==a&&null!==a&&""!==a?!0:!1},a.defaultIfNoValue=function(b,c){return a.hasValue(b)?b:c},a.randomHexColor=function(){return"#"+a.math.randomIntInRange(0,16777215).toString(16)},a.math={e:Math.E,log10E:.4342945,log2E:1.442695,pi:Math.PI,piOver2:.5*Math.PI,piOver4:.25*Math.PI,twoPi:2*Math.PI,invert:function(a){return 0-a},clamp:function(a,b,c){return b>a?b:a>c?c:a},lerp:function(a,b,c){return a+(b-a)*c},square:function(a){return Math.pow(a,2)},randomInRange:function(a,b){var c=b-a,d=Math.random()*c,e=a+d;return e},randomIntInRange:function(a,b){return Math.floor(this.randomInRange(a,b))},distanceBetween:function(a,b){var c=a.x-b.x,d=a.y-b.y,e=this.hypotenuseLength(c,d);return e},hypotenuseLength:function(a,b){return Math.sqrt(this.square(a)+this.square(b))},absoluteDistanceBetween:function(a,b){return Math.abs(this.distanceBetween(a,b))},velocityFromAngle:function(b,c){var d={x:0,y:0};return b=this.regulateAngle(b),a.hasValue(b)&&!isNaN(b)&&(d={x:Math.cos(b)*c,y:Math.sin(b)*c}),d},angleBetweenPoints:function(a,b){var c=b.x-a.x,d=b.y-a.y,e=this.regulateAngle(Math.atan2(d,c));return isNaN(e)?0:e},toDegrees:function(a){return a=this.regulateAngle(),57.29577951308232*a},toRadians:function(a){return this.regulateAngle(.017453292519943295*a)},regulateAngle:function(a){for(;a>this.twoPi;)a-=this.twoPi;for(;0>a;)a+=this.twoPi;return a}},a}(frostFlake||{}),frostFlake=function(a){"use strict";return a.View=Class.extend({init:function(){this.sprites=[]},update:function(a){var b;for(b=0;b<this.sprites.length;b+=1)this.sprites[b].update(a)},addSprite:function(a){var b,c=this.sprites.length-1;for(b=0;b<this.sprites.length;b+=1)if(a.layer<this.sprites[b].layer){c=b;break}this.sprites.splice(c,0,a)},addSpriteArray:function(a){var b;for(b=0;b<a.length;b+=1)this.addSprite(a[b])},removeSprite:function(a){var b=this.sprites.indexOf(a);b>=0&&this.sprites.splice(b,1)},removeSpriteArray:function(a){var b;for(b=0;b<a.length;b+=1)this.removeSprite(a[b])},clearSprites:function(){this.sprites=[]}}),a}(frostFlake||{}),frostFlake=function(a){"use strict";return a.Game=Class.extend({init:function(b,c,d){if(!a.hasValue(b))throw"Unable to initialize game without a valid canvas!";a.game=this,this.canvas=b,this.background=a.defaultIfNoValue(d,"rgba(0, 0, 0, 0)"),this.currentView=new a.View,this.camera=new a.Camera(b.clientWidth,b.clientHeight),this.renderer=new a.Renderer,this.targetFps=a.defaultIfNoValue(c,60),this.inputManager=new a.InputManager(b),this.time={start:new Date,last:new Date,delta:0,deltaFromStart:0},this.paused=!1,this.focused=!1,this.timer=window.setInterval(function(){a.game.update()},1e3/this.targetFps)},updateTime:function(){var a=this.time.start.getTime(),b=this.time.last.getTime(),c=new Date;this.time.last=c,this.time.delta=(c-b)/1e3,this.time.deltaFromStart=(c-a)/1e3},update:function(){this.updateTime(),this.inputManager.update(this.time.delta),this.camera.update(this.time.delta),this.currentView.update(this.time.delta),this.renderer.draw(this.currentView.sprites,this.camera,this.canvas,this.background)},notifyCanvasSizeChanged:function(){this.camera.updateDimensions(this.canvas.clientWidth,this.canvas.clientHeight)}}),a}(frostFlake||{});