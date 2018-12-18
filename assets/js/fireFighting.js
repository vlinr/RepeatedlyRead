console.log('%cAuthor:keen_Email:zlife@vip.qq.com_CompleteTime:20181015','font-size:18px;box-shadow:0 0 20px rgba(23,53,65,.6);background:#000;color:#fff;padding:10px 30px;border-radius:30px;');
/*****Initializing - Cornus officinalis****/
const _wid=document.documentElement.clientWidth;
const _hei=document.documentElement.clientHeight;
var config={
	//Close the initial checkpoint
	coordinate:[
		[{x:0*184,y:0*184},
		{x:1*184,y:0*184},
		{x:2*184,y:0*184},
		{x:3*184,y:0*184},
		{x:0*184,y:1*184},
		{x:1*184,y:1*184},
		{x:2*184,y:1*184},
		{x:3*184,y:1*184},
		{x:0*184,y:2*184},
		{x:1*184,y:2*184},
		{x:2*184,y:2*184},
		{x:3*184,y:2*184},
		{x:0*184,y:3*184},
		{x:1*184,y:3*184},
		{x:2*184,y:3*184},
		{x:3*184,y:3*184},
		],
		[{x:0*130,y:0*130},
		{x:1*130,y:0*130},
		{x:2*130,y:0*130},
		{x:3*130,y:0*130},
		{x:4*130,y:0*130},
		{x:5*130,y:0*130},
		{x:0*130,y:1*130},
		{x:1*130,y:1*130},
		{x:2*130,y:1*130},
		{x:3*130,y:1*130},
		{x:4*130,y:1*130},
		{x:5*130,y:1*130},
		{x:0*130,y:2*130},
		{x:1*130,y:2*130},
		{x:2*130,y:2*130},
		{x:3*130,y:2*130},
		{x:4*130,y:2*130},
		{x:5*130,y:2*130},
		{x:0*130,y:3*130},
		{x:1*130,y:3*130},
		{x:2*130,y:3*130},
		{x:3*130,y:3*130},
		{x:4*130,y:3*130},
		{x:5*130,y:3*130},
		{x:0*130,y:4*130},
		{x:1*130,y:4*130},
		{x:2*130,y:4*130},
		{x:3*130,y:4*130},
		{x:4*130,y:4*130},
		{x:5*130,y:4*130},
		{x:0*130,y:5*130},
		{x:1*130,y:5*130},
		{x:2*130,y:5*130},
		{x:3*130,y:5*130},
		{x:4*130,y:5*130},
		{x:5*130,y:5*130}
		],
		[{x:0*105,y:0*105},
		{x:1*105,y:0*105},
		{x:2*105,y:0*105},
		{x:3*105,y:0*105},
		{x:4*105,y:0*105},
		{x:5*105,y:0*105},
		{x:6*105,y:0*105},
		{x:7*105,y:0*105},
		{x:0*105,y:1*105},
		{x:1*105,y:1*105},
		{x:2*105,y:1*105},
		{x:3*105,y:1*105},
		{x:4*105,y:1*105},
		{x:5*105,y:1*105},
		{x:6*105,y:1*105},
		{x:7*105,y:1*105},
		{x:0*105,y:2*105},
		{x:1*105,y:2*105},
		{x:2*105,y:2*105},
		{x:3*105,y:2*105},
		{x:4*105,y:2*105},
		{x:5*105,y:2*105},
		{x:6*105,y:2*105},
		{x:7*105,y:2*105},
		{x:0*105,y:3*105},
		{x:1*105,y:3*105},
		{x:2*105,y:3*105},
		{x:3*105,y:3*105},
		{x:4*105,y:3*105},
		{x:5*105,y:3*105},
		{x:6*105,y:3*105},
		{x:7*105,y:3*105},
		{x:0*105,y:4*105},
		{x:1*105,y:4*105},
		{x:2*105,y:4*105},
		{x:3*105,y:4*105},
		{x:4*105,y:4*105},
		{x:5*105,y:4*105},
		{x:6*105,y:4*105},
		{x:7*105,y:4*105},
		{x:0*105,y:5*105},
		{x:1*105,y:5*105},
		{x:2*105,y:5*105},
		{x:3*105,y:5*105},
		{x:4*105,y:5*105},
		{x:5*105,y:5*105},
		{x:6*105,y:5*105},
		{x:7*105,y:5*105},
		{x:0*105,y:6*105},
		{x:1*105,y:6*105},
		{x:2*105,y:6*105},
		{x:3*105,y:6*105},
		{x:4*105,y:6*105},
		{x:5*105,y:6*105},
		{x:6*105,y:6*105},
		{x:7*105,y:6*105},
		{x:0*105,y:7*105},
		{x:1*105,y:7*105},
		{x:2*105,y:7*105},
		{x:3*105,y:7*105},
		{x:4*105,y:7*105},
		{x:5*105,y:7*105},
		{x:6*105,y:7*105},
		{x:7*105,y:7*105}
		]
	],
	level:1,  //Current card
	levelArr:[  //Configuration of levels
		{
			row:4,  //Line number
			col:4,  //Number of columns
			frameLens:12,  //Total frame length
			bgFrame:'levelBg1',  //Barrier background
			randNum:16,  //Generated random locations
			nowGameFrame:'level1'  //Which sequence frame?
		},
		{
			row:6,
			col:6,
			frameLens:14,
			bgFrame:'levelBg2',
			randNum:36,
			nowGameFrame:'level2'
		},
		{
			row:8,
			col:8,
			frameLens:40,
			bgFrame:'levelBg3',
			randNum:64,
			nowGameFrame:'level3'
		}
	],
	gameLevelTime:35,
	soundOn:true,
	over:false,
	scaleX:_wid/375,
	appId:'',
	scaleY:_hei/667
}
var game=new Phaser.Game(_wid*3,_hei*3,Phaser.CANVAS,'game');
/********Start Loading Interface*********/
const loading=function(game){
	var loadingTxt,loadingTip;
	this.init=function(){
		var loadingRect=game.add.graphics(0,0);
		loadingRect.beginFill(0Xffffff,1);
		loadingRect.drawRect(0,0,game.world.width,game.world.height);
		loadingRect.endFill();
	}
	this.preload=function(){
		game.load.image('startTip','assets/images/startTip.jpg');
		game.load.image('loadImg','assets/images/loading.png');
	}
	this.create=function(){
		game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;
		var gameBg=game.add.image(0,0,'startTip');
		gameBg.width=game.width;
		gameBg.height=game.height;

		/***水印***/
		var werterStyle = { font: "70px  Microsoft YaHei", fill: "#92c541", align: "center" };
		var werter=game.add.text(game.world.centerX,game.world.centerY, "Author_Email:zlife@vip.qq.com", werterStyle);
		werter.anchor.set(.5);
		werter.angle=50;
		werter.alpha=.3;
		var werter=game.add.text(game.width/1.2,game.height/6, "Author_Email:zlife@vip.qq.com", werterStyle);
		werter.anchor.set(.5);
		werter.angle=50;
		werter.alpha=.3;
		var werter=game.add.text(game.width/4,game.height/1.2, "Author_Email:zlife@vip.qq.com", werterStyle);
		werter.anchor.set(.5);
		werter.angle=50;
		werter.alpha=.3;
		var loadImg=game.add.image(game.world.centerX,game.world.centerY,'loadImg');
		loadImg.anchor.set(.5);
		loadImg.scale.set(.7);
		game.add.tween(loadImg).to({angle:360},1000,null,true,0,-1,false);
		var loaded=new Phaser.Loader(game);
		loaded.audio('inBgMusic','assets/audio/bgMusic.mp3');
		loaded.audio('successAudio','assets/audio/successAudio.mp3');
		loaded.image('levelBg1','assets/images/levelBg1.jpg');
		loaded.image('levelBg2','assets/images/levelBg2.jpg');
		loaded.image('levelBg3','assets/images/levelBg3.jpg');
		loaded.image('elTip','assets/images/elTip.png');
		loaded.image('levelSel','assets/images/levelSel.jpg');
		loaded.image('passFail','assets/images/passFail.jpg');
		loaded.image('passSuccess','assets/images/passSuccess.jpg');
		loaded.image('back','assets/images/back.png');
		loaded.image('once','assets/images/once.png');
		loaded.image('one','assets/images/one.png');
		loaded.image('two','assets/images/two.png');
		loaded.image('three','assets/images/three.png');
		loaded.image('start','assets/images/start.png');
		loaded.audio('clickMusic','assets/audio/clickMusic.mp3');
		loaded.audio('fail','assets/audio/fail.mp3');
		loaded.audio('passOk','assets/audio/passOk.mp3');
		loaded.image('sound','assets/images/sound.png');
		loaded.image('soundc','assets/images/soundc.png');
		loaded.image('quit','assets/images/quit.png');
		loaded.image('timeTip','assets/images/timeTip.png');
		loaded.image('timeBg','assets/images/timeBg.png');
		loaded.spritesheet('level1','assets/images/level1.png',184,184);
		loaded.spritesheet('level2','assets/images/level2.png',184,184);
		loaded.spritesheet('level3','assets/images/level3.png',184,184);
		loaded.spritesheet('light','assets/images/light.png',207,247);
		loaded.spritesheet('clock','assets/images/clock.png',207,247);
		var loadingStyle = { font: "40px  Microsoft YaHei", fill: "#fff", align: "center" };
		loadingTxt=game.add.text(game.world.centerX,game.world.centerY, "0%", loadingStyle);
		loadingTxt.anchor.set(.5);
		loadingTxt.stroke='rgba(255,255,255,.3)';
		loadingTxt.strokeThickness=3;
		loaded.onFileComplete.add(function(){
			loadingTxt.text=loaded.progress+'%';
		});
		loaded.onLoadComplete.add(function(){
			game.state.start('tips');
		});
		loaded.start();
	}
}
//gameStartTips
var tips=function(game){
	this.create=function(){
		var tipBg=game.add.image(0,0,'startTip');
		var clickMusic=game.add.audio('clickMusic');
		tipBg.width=game.world.width;
		tipBg.height=game.world.height;


		/***水印***/
		var werterStyle = { font: "70px  Microsoft YaHei", fill: "#92c541", align: "center" };
		var werter=game.add.text(game.world.centerX,game.world.centerY, "Author_Email:zlife@vip.qq.com", werterStyle);
		werter.anchor.set(.5);
		werter.angle=50;
		werter.alpha=.3;
		var werter=game.add.text(game.width/1.2,game.height/6, "Author_Email:zlife@vip.qq.com", werterStyle);
		werter.anchor.set(.5);
		werter.angle=50;
		werter.alpha=.3;
		var werter=game.add.text(game.width/4,game.height/1.2, "Author_Email:zlife@vip.qq.com", werterStyle);
		werter.anchor.set(.5);
		werter.angle=50;
		werter.alpha=.3;

		var gameStart=game.add.image(game.world.centerX,game.world.centerY+100,'start');
		gameStart.anchor.set(.5);
		gameStart.scale.set(.6*config.scaleX);
		setTimeout(function(){
			startAnimation(gameStart);
		}, 1000);
		var animationTimer=game.time.create(true);
		animationTimer.loop(4500,function(){
			startAnimation(gameStart);
		})
		animationTimer.start();
		var sound=config.soundOn?game.add.image(game.world.centerX,game.world.centerY+100,'sound'):game.add.image(game.world.centerX,game.world.centerY+100,'soundc');
		sound.x=game.width-sound.width/3;
		sound.y=sound.height/3;
		sound.anchor.set(.5);
		sound.scale.set(.4*config.scaleX);
		sound.inputEnabled=true;
		var flag=true;
		sound.events.onInputDown.add(function(){
			if(flag){
				config.soundOn=false;
				sound.loadTexture('soundc');
				flag=false;
				clickMusic.play();
			}else{
				config.soundOn=true;
				sound.loadTexture('sound');
				flag=true;
			}
		});
		gameStart.inputEnabled=true;
		gameStart.events.onInputDown.add(function(){
			if(config.soundOn)clickMusic.play();
			animationTimer.stop()
			game.state.start('levelSelect');
		});
	}
	function startAnimation(obj){
		var tween1=game.add.tween(obj).to({angle:10},100,null,true,0,0,true);
		tween1.onComplete.add(function(){
			var tween2=game.add.tween(obj).to({angle:-10},100,null,true,0,0,true);
			tween2.onComplete.add(function(){
				var tween3=game.add.tween(obj).to({angle:7},100,null,true,0,0,true);
				tween3.onComplete.add(function(){
					var tween4=game.add.tween(obj).to({angle:-7},100,null,true,0,0,true);
					tween4.onComplete.add(function(){
						var tween5=game.add.tween(obj).to({angle:3},100,null,true,0,0,true);
						tween5.onComplete.add(function(){
							var tween6=game.add.tween(obj).to({angle:-3},100,null,true,0,0,true);
							tween6.onComplete.add(function(){
								var tween7=game.add.tween(obj).to({angle:0},100,null,true,0,0,true);
								tween7.onComplete.add(function(){
									var tween8=game.add.tween(obj.scale).to({x:.7*config.scaleX,y:.7*config.scaleX},500,null,true,0,0,true);
									tween8.onComplete.add(function(){
										game.add.tween(obj.scale).to({x:.6*config.scaleX,y:.6*config.scaleX},500,null,true,0,0,true);
									})
								})
							})
						})
					})
				})
			})
		})
	}
}
//LevelSelect
const levelSelect=function(){
	this.create=function(){
		var tipBg=game.add.image(0,0,'levelSel');
		var clickMusic=game.add.audio('clickMusic');
		tipBg.width=game.world.width;
		tipBg.height=game.world.height;

		/***水印***/
		var werterStyle = { font: "70px  Microsoft YaHei", fill: "#92c541", align: "center" };
		var werter=game.add.text(game.world.centerX,game.world.centerY, "Author_Email:zlife@vip.qq.com", werterStyle);
		werter.anchor.set(.5);
		werter.angle=50;
		werter.alpha=.3;
		var werter=game.add.text(game.width/1.2,game.height/6, "Author_Email:zlife@vip.qq.com", werterStyle);
		werter.anchor.set(.5);
		werter.angle=50;
		werter.alpha=.3;
		var werter=game.add.text(game.width/4,game.height/1.2, "Author_Email:zlife@vip.qq.com", werterStyle);
		werter.anchor.set(.5);
		werter.angle=50;
		werter.alpha=.3;

		var level1=game.add.image(game.world.centerX,game.world.centerY,'one');
		level1.anchor.set(.5);
		level1.scale.set(.6*config.scaleX);
		level1.y=game.height/3;
		var level2=game.add.image(game.world.centerX,game.world.centerY,'two');
		level2.anchor.set(.5);
		level2.scale.set(.6*config.scaleX);
		level2.y=game.height/3+level1.height*1.2;
		var level3=game.add.image(game.world.centerX,game.world.centerY,'three');
		level3.anchor.set(.5);
		level3.scale.set(.6*config.scaleX);
		level3.y=game.height/3+level1.height*2.4;
		level1.inputEnabled=true;
		level1.events.onInputDown.add(function(){
			if(config.soundOn)clickMusic.play();
			config.level=1;
			config.gameLevelTime=15;
			game.state.start('main');
		});
		level2.inputEnabled=true;
		level2.events.onInputDown.add(function(){
			if(config.soundOn)clickMusic.play();
			config.level=2;
			config.gameLevelTime=25;
			game.state.start('main');
		});
		level3.inputEnabled=true;
		level3.events.onInputDown.add(function(){
			if(config.soundOn)clickMusic.play();
			config.level=3;
			config.gameLevelTime=35;
			game.state.start('main');
		});
	}
}
//Game Master Interface
const main=function(game){
	let iconList,foodGroup,tipPoupu,tipTxtPopup,clickOk=false,timeStartNum=0,timerSum,iconFrame=1,gameBg,elTip,successAudio,timeTip,timeGraphicsGroup,timeLineWidth=0,tipOnce=1,timeAdd=3;
	this.preload=function(){
	}
	//create
	this.create=function(){
		// $.ajax() //需要请求参数
		clickMusic=game.add.audio('clickMusic',1,false);
		inBgMusic=game.add.audio('inBgMusic',.5,true);
		
		successAudio=game.add.audio('successAudio',1,false);
		if(config.soundOn)inBgMusic.play();
		gameBg=game.add.image(0,0,config.levelArr[config.level-1].bgFrame);
		gameBg.width=game.world.width;
		gameBg.height=game.world.height;

		/***水印***/
		var werterStyle = { font: "70px  Microsoft YaHei", fill: "#92c541", align: "center" };
		var werter=game.add.text(game.world.centerX,game.world.centerY, "Author_Email:zlife@vip.qq.com", werterStyle);
		werter.anchor.set(.5);
		werter.angle=50;
		werter.alpha=.3;
		var werter=game.add.text(game.width/1.2,game.height/6, "Author_Email:zlife@vip.qq.com", werterStyle);
		werter.anchor.set(.5);
		werter.angle=50;
		werter.alpha=.3;
		var werter=game.add.text(game.width/4,game.height/1.2, "Author_Email:zlife@vip.qq.com", werterStyle);
		werter.anchor.set(.5);
		werter.angle=50;
		werter.alpha=.3;

		foodGroup=game.add.group();
		timerSum=game.time.create(true);
		// elTip=game.add.image(0,0,'elTip');
		// elTip.x=game.width-elTip.width/1.5;
		// elTip.y=game.world.centerY+elTip.height*3.5;
		// elTip.inputEnabled=true;
		// elTip.scale.set(config.scaleX*1.1);
		// elTip.anchor.set(.5);
		// game.add.tween(elTip.scale).to({x:1.2,y:1.2},2000,null,true,0,-1,true);
		elTip=game.add.image(0,0,'light');
		elTip.x=game.world.centerX-elTip.width/2;
		elTip.y=game.world.centerY+elTip.height*2.8*config.scaleY;
		elTip.inputEnabled=true;
		elTip.scale.set(config.scaleX*.6);
		elTip.animations.add('elTipAnim',[0,1,2]);
		elTip.play('elTipAnim',2,true);
		elTip.anchor.set(.5);

		timeTip=game.add.image(0,0,'clock');
		timeTip.x=game.world.centerX+elTip.width/2;
		timeTip.scale.set(config.scaleX*.6);
		timeTip.y=elTip.y;
		timeTip.inputEnabled=true;
		timeTip.animations.add('timeTipAnim',[0,1,2,3,4]);
		timeTip.play('timeTipAnim',1,true);
		timeTip.anchor.set(.5);

		// timeTip=game.add.image(0,0,'timeTip');
		// timeTip.x=elTip.x;
		// timeTip.scale.set(config.scaleX*1.1);
		// timeTip.y=elTip.y+timeTip.height;
		// timeTip.inputEnabled=true;
		// timeTip.anchor.set(.5);
		// game.add.tween(timeTip).to({alpha:.5},2000,null,true,0,-1,true);
		popupTips();
		tipOnce=1;
		timeAdd=3;
		elTip.events.onInputDown.add(function(){
			//Prompt
			if(tipOnce<=0){
				// showTipOk
				showPopup('一关只能提示一次哟~');
				return;
			}
			randomTip();
			tipOnce--;
		})
		timeTip.events.onInputDown.add(function(){
			//Add time, at most three times.
				if(timeAdd<=0){
					showPopup('增加时间次数上限！');
					return;
				}
			timeLineWidth=0;
			timeFunDraw(timeLineWidth);
			timeAdd--;
		})
		addFood(config.level);
		var timeGraphics=game.add.graphics(0,0);
		timeGraphicsGroup=game.add.group();
		timeLine(timeGraphics);

	}
	//Draw time progress bar
	function timeLine(timeGraphics){
		var timeBg=game.add.image(0,game.world.centerY,'timeBg');
		timeBg.scale.set(.4);
		timeBg.anchor.set(.5);
		timeBg.x=timeBg.width/2+5;
		//Draw a mask map
		timeGraphics.beginFill(0xe36907,1);
		timeGraphics.anchor.set(0.5);
		timeGraphics.drawRoundedRect(timeBg.width/4,timeBg.y-timeBg.height/1.3+timeBg.height/2.2,40,timeBg.height/1.3,60);
		timeGraphics.endFill();//Background, positioning according to the background
		timerTipFun(timeBg.height/1.3);	
		timeGraphicsGroup.x=timeBg.width/4;
		timeGraphicsGroup.y=timeBg.y-timeBg.height/1.3+timeBg.height/2.2;
		timeLineWidth=0; //Length of time axis
		timeGraphicsGroup.mask=timeGraphics;
		timeFunDraw(timeLineWidth);
		//Draw a background
		var bgGraphics=game.add.graphics(0,0);
		bgGraphics.beginFill(0xe36907,1);
		bgGraphics.anchor.set(0.5);
		bgGraphics.drawRoundedRect(timeBg.width/4,timeBg.y-timeBg.height/1.3+timeBg.height/2.2,40,timeBg.height/1.3,60);
		bgGraphics.endFill();
		game.world.setChildIndex(bgGraphics,2);
		game.world.setChildIndex(timeGraphicsGroup,5);
	}
	//Add time based rendering
	function timeFunDraw(_h){
		var timerRect=game.add.graphics(0,0);
		timerRect.beginFill(0xffffff,1);
		timerRect.anchor.set(0.5);
		timerRect.drawRect(-1,0,42,_h);
		timerRect.endFill();
		timeGraphicsGroup.removeAll(true);
		timeGraphicsGroup.add(timerRect);
	}
	//Generate a specified array with random locations and no repetition.
	function addRndArr(len){
		var randomListArr=new Array();
		for(var i=0;i<len;i++){
			randomListArr[i]=i+1;
		}
		randomListArr.sort(function(){return 0.5-Math.random();});
		return randomListArr;
	}
	//Produce food
	function addFood(level){
		foodGroup.y=(game.height-config.levelArr[config.level-1].col*config.coordinate[level-1][1].x*config.scaleX)/2+config.coordinate[level-1][1].x*config.scaleX/2;
		foodGroup.x=(game.width-config.levelArr[config.level-1].row*config.coordinate[level-1][1].x*config.scaleX)/2+config.coordinate[level-1][1].x*config.scaleX/2;;  //这个需要计算x的位置
		gameBg.loadTexture(config.levelArr[config.level-1].bgFrame);
		foodGroup.removeAll(true);
		iconFrame=1;
		var subIndex=0;
		var	randArr=addRndArr(config.levelArr[config.level-1].randNum);
		for(var i=0;i<config.levelArr[config.level-1].row;i++){
			for(var j=0;j<config.levelArr[config.level-1].col;j++){
				//Generating corresponding elements
				subIndex++;//Record the location of the currently generated elements.
				returnFood(randArr[subIndex-1]-1,subIndex,level);
			}
		}
		isClearFood();
		foodListTween(foodGroup);
	}
	//Adding animation to food
	function foodListTween(group){
		for(var i=0;i<group.children.length;++i){
			(function(i){
				setTimeout(function(){
					game.add.tween(group.children[i]).to({width :config.coordinate[config.level-1][1].x*config.scaleX-5,height:config.coordinate[config.level-1][1].x*config.scaleX-5},100,Phaser.Easing.Bounce.Out,true,0,0,false);
				}, i*10);
			})(i)
		}
	}
	//Ensure that the last frame is the same as the previous frame.
	function returnFood(index,index1,level){
		iconList=game.add.sprite(config.coordinate[level-1][index].x*config.scaleX,config.coordinate[level-1][index].y*config.scaleX,config.levelArr[config.level-1].nowGameFrame);
		iconList.width=0;
		iconList.height=0;
		if(index1<=config.levelArr[config.level-1].frameLens){ //Ensure that every frame appears.
			//Setting keyframes
			iconList.frame=iconFrame;
			//set focus
			iconList.anchor.set(0.5);
			if(index1%2==0){  //Remainder 2==0   0，2，4
				//Define the name
				iconList.name=iconFrame;
				iconList.parentName='parent';
			}else{
				iconList.name=iconFrame+1;
				iconList.parentName='sub';
			}
			iconFrame++;
		}else{  //They all appeared and then randomly appeared. How to control bottles and caps here?
			if(index1%2!=0){
				iconFrame=game.rnd.integerInRange(1,config.levelArr[config.level-1].frameLens);
				if(iconFrame%2==0){
					iconList.parentName='parent';
					iconList.name=iconFrame;
				}else{
					iconList.parentName='sub';
					iconList.name=iconFrame+1;
				}
			}else{
				if(iconFrame%2==0){
					iconList.name=iconFrame;
					iconFrame=iconFrame-1;
					iconList.parentName='sub';
				}else{
					iconList.name=iconFrame+1;
					iconFrame=iconFrame+1;
					iconList.parentName='parent';
				}
			}
			iconList.frame=iconFrame;
			iconList.anchor.set(0.5);
		}
		iconList.inputEnabled=true;
		iconList.click=true;
		foodGroup.add(iconList);
	}
	//Click the prompt button to give a hint.
	function randomTip(){
		var childFrist=foodGroup.getRandomExists();  //Get a random child alive.
		var execNum=1; //Control execution times
		foodGroup.forEachAlive(function(pos){
			if(pos.name==childFrist.name && pos.parentName!=childFrist.parentName){
				execNum--;
				if(execNum>=0){
					execAnimation(childFrist,pos);
				}else{
					return false;
				}
			}
		});
	}
	//Execute animation, prompt information
	function execAnimation(child1,child2){
		var tween1=game.add.tween(child1).to({alpha :.3},300,null,true,0,0,false);
		var tween2=game.add.tween(child1).to({alpha :1},200,null,true,0,0,false);
		var tween3=game.add.tween(child1).to({alpha :.5},200,null,true,0,0,false);
		var tween4=game.add.tween(child1).to({alpha :1},100,null,true,0,0,false);
		var tween5=game.add.tween(child1).to({alpha :.8},100,null,true,0,0,false);
		var tween6=game.add.tween(child1).to({alpha :1},100,null,true,0,0,false);
		tween1.chain(tween2);
		tween2.chain(tween3);
		tween3.chain(tween4);
		tween4.chain(tween5);
		tween5.chain(tween6);
		
		var tween7=game.add.tween(child2).to({alpha :.3},300,null,true,0,0,false);
		var tween8=game.add.tween(child2).to({alpha :1},200,null,true,0,0,false);
		var tween9=game.add.tween(child2).to({alpha :.5},200,null,true,0,0,false);
		var tween10=game.add.tween(child2).to({alpha :1},100,null,true,0,0,false);
		var tween11=game.add.tween(child2).to({alpha :.8},100,null,true,0,0,false);
		var tween12=game.add.tween(child2).to({alpha :1},100,null,true,0,0,false);
		tween7.chain(tween8);
		tween8.chain(tween9);
		tween9.chain(tween10);
		tween10.chain(tween11);
		tween11.chain(tween12);
	}
	//The countdown is processed here.
	function isClearFood(){
		timerSum.start();
		timerSum.resume();
		var flages=0,nameArr=[],posArr=[],parentArr=[],isPassLen=0;
		foodGroup.forEachAlive(function(pos){
			//You need control and you can't click on yourself.
			pos.events.onInputDown.add(function(pos){
				if(config.soundOn)clickMusic.play();
				if(pos.click==true){
					pos.click=false;
					nameArr[flages]=pos.name;
					parentArr[flages]=pos.parentName;
					// pos.frame=nameArr[flages];   
					posArr[flages]=foodGroup.getChildIndex(pos);
					flages++;
					if(flages>1){
							if(nameArr[0]==nameArr[1] && parentArr[0]!=parentArr[1]){//Choose the right
							var _arri1=posArr[0]; //The first one to be selected
							var _arri2=posArr[1]; //The second chosen
							if(config.soundOn)successAudio.play();
							killAnimation(foodGroup.getChildAt(_arri1),foodGroup.getChildAt(_arri2))
							// foodGroup.getChildAt(_arri1).kill();
							// foodGroup.getChildAt(_arri2).kill();
							posArr[0]=null;
							posArr[1]=null;
							isPassLen++;
							passLevel(isPassLen);
						}else{//Choice of errors
							var _arri1=posArr[0];
							var _arri2=posArr[1];
							foodGroup.getChildAt(_arri1).click=true;
							foodGroup.getChildAt(_arri2).click=true;
							posArr[0]=null;
							posArr[1]=null;
						}
						flages=0;
						nameArr[0]=null;
						nameArr[1]=null;
					}
				}
			},this);
		});
	}
	function killAnimation(obj1,obj2){
		foodGroup.bringToTop(obj1);
		foodGroup.bringToTop(obj2);
		var tween1=game.add.tween(obj1.scale).to({x :1.1,y:1.1},200,null,true,0,0,false);
		var tween2=game.add.tween(obj1.scale).to({x :.8,y:.8},100,null,true,0,0,false);
		var tween3=game.add.tween(obj1.scale).to({x :1,y:1},100,null,true,0,0,false);
		var tween4=game.add.tween(obj1.scale).to({x :0,y:0},100,null,true,0,0,false);
		tween1.chain(tween2);
		tween2.chain(tween3);
		tween3.chain(tween4);
		var tween5=game.add.tween(obj2.scale).to({x :1.1,y:1.1},200,null,true,0,0,false);
		var tween6=game.add.tween(obj2.scale).to({x :.8,y:.8},100,null,true,0,0,false);
		var tween7=game.add.tween(obj2.scale).to({x :1,y:1},100,null,true,0,0,false);
		var tween8=game.add.tween(obj2.scale).to({x :0,y:0},100,null,true,0,0,false);
		tween5.chain(tween6);
		tween6.chain(tween7);
		tween7.chain(tween8);
		tween7.onComplete.add(function(){
			if(tween1.manager.getAll().length==3){
				obj1.kill();
				obj2.kill();
			}
		})
	}
	function passLevel(len){
		if(len%2==0 && len>=config.levelArr[config.level-1].randNum/2){
			config.over=false;
			timerSum.stop();
			setTimeout(function(){
				if(config.soundOn){
					clickMusic.stop();
					inBgMusic.stop();
				}
				game.state.start('over');
			}, 1000);
		}
		return false;
	}
	//Time hints
	function timerTipFun(_h){
		let numHeight=_h/(config.gameLevelTime*100);
		timerSum.loop(10,function(){ 
			timeLineWidth+=numHeight;  //Time reduction
			timeFunDraw(timeLineWidth);
			if(timeLineWidth>_h){
				config.over=true;
				timerSum.stop();
				game.state.start('over');
				if(config.soundOn){
					clickMusic.stop();
					inBgMusic.stop();
				}
			}
		});
	}
	//Add pop-up windows public reminder
	function popupTips(){
		tipPoupu=game.add.graphics(game.world.centerX-game.width/4,-100);
		tipPoupu.beginFill(0x000000,.6);
		tipPoupu.anchor.set(0.5);
		tipPoupu.drawRoundedRect(0,0,game.width/2,100,60);
		tipPoupu.endFill();
		var tipsTxtStyle = { font: "50px  Microsoft YaHei", fill: "#fff", align: "center" };
		tipTxtPopup=game.add.text(tipPoupu.width/2,tipPoupu.height/2, '', tipsTxtStyle);
		tipTxtPopup.anchor.set(.5);
		tipPoupu.addChild(tipTxtPopup);
	}
	function showPopup(txt){
		tipTxtPopup.text=txt;
		timeStartNum=game.time.time;
		clickOk=true;
		game.add.tween(tipPoupu).to({y :50},200,null,true,0,0,false);
	}
	this.update=function(){
		if(clickOk){
			if(game.time.time-timeStartNum>1500){
				clickOk=false;
				game.add.tween(tipPoupu).to({y :-100},200,null,true,0,0,false);
			}
		}
	}
}
//over end
var over=function(game){
	var passOk,failMusic;
	this.create=function(){
		// $.ajax() //需要回传参数
		failMusic=game.add.audio('fail',1,false);
		passOk=game.add.audio('passOk',1,false);
		if(config.over){
			if(config.soundOn)failMusic.play();
			var endBg=game.add.image(0,0,'passFail');
			endBg.width=game.world.width;
			endBg.height=game.world.height;

			/***水印***/
			var werterStyle = { font: "70px  Microsoft YaHei", fill: "#92c541", align: "center" };
			var werter=game.add.text(game.world.centerX,game.world.centerY, "Author_Email:zlife@vip.qq.com", werterStyle);
			werter.anchor.set(.5);
			werter.angle=50;
			werter.alpha=.3;
			var werter=game.add.text(game.width/1.2,game.height/6, "Author_Email:zlife@vip.qq.com", werterStyle);
			werter.anchor.set(.5);
			werter.angle=50;
			werter.alpha=.3;
			var werter=game.add.text(game.width/4,game.height/1.2, "Author_Email:zlife@vip.qq.com", werterStyle);
			werter.anchor.set(.5);
			werter.angle=50;
			werter.alpha=.3;

			var once=game.add.image(game.world.centerX,game.world.centerY,'back');
			once.anchor.set(.5);
			once.scale.set(.6);
			once.inputEnabled=true;
			once.events.onInputDown.add(function(){
				config.over=false;
				game.state.start('main');
			});
			var back=game.add.image(game.world.centerX,game.world.centerY,'quit');
			back.y=once.y+once.height*1.3;
		}else{
			if(config.soundOn)passOk.play();
			var endBg=game.add.image(0,0,'passSuccess');
			endBg.width=game.world.width;
			endBg.height=game.world.height;
			var once=game.add.image(game.world.centerX,game.world.centerY-100,'start');
			once.anchor.set(.5);
			once.scale.set(.6);
			once.inputEnabled=true;
			overAnimation(once);
			var animationTimer=game.time.create(true);
			animationTimer.loop(2000,function(){
				overAnimation(once);
			})
			animationTimer.start();
			once.events.onInputDown.add(function(){
				config.over=false;
				game.state.start('levelSelect');
			});
			var back=game.add.image(game.world.centerX,game.world.centerY,'quit');
			back.y=once.y+once.height*2;
		}
		back.anchor.set(.5);
		back.scale.set(.6);
		back.inputEnabled=true;
		back.events.onInputDown.add(function(){
			config.over=false;
			game.state.start('tips');
		});
	}
	function overAnimation(obj){
		var tween=game.add.tween(obj).to({y:game.world.centerY},1000,Phaser.Easing.Bounce.Out,true,0,0,false);
		tween.onComplete.add(function(){
			var tween1=game.add.tween(obj).to({y:game.world.centerY-100},1000,null,true,0,0,false);
		});
	}
}
//Games Start,Put It At The Bottom
game.state.add('loader',loading);
game.state.add('tips',tips);
game.state.add('main',main);
game.state.add('over',over);
game.state.add('levelSelect',levelSelect);
game.state.start('loader');