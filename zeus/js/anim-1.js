var url=new URL(window.location.href);url.search="";var createjs,AdobeAn,path=url.origin+url.pathname.replace(/\/$/,"");!function(t,e){var i,n={},s={},a={};function o(){var t=this._cloneProps(new this.constructor(this.mode,this.startPosition,this.loop));return t.gotoAndStop(this.currentFrame),t.paused=this.paused,t.framerate=this.framerate,t}function h(e,i,n){var s=t.extend(e,t.MovieClip);return s.clone=o,s.nominalBounds=i,s.frameBounds=n,s}n.ssMetadata=[],(n.AnMovieClip=function(){this.currentSoundStreamInMovieclip,this.actionFrames=[],this.soundStreamDuration=new Map,this.streamSoundSymbolsList=[],this.gotoAndPlayForStreamSoundSync=function(e){t.MovieClip.prototype.gotoAndPlay.call(this,e)},this.gotoAndPlay=function(e){this.clearAllSoundStreams(),this.startStreamSoundsForTargetedFrame(e),t.MovieClip.prototype.gotoAndPlay.call(this,e)},this.play=function(){this.clearAllSoundStreams(),this.startStreamSoundsForTargetedFrame(this.currentFrame),t.MovieClip.prototype.play.call(this)},this.gotoAndStop=function(e){t.MovieClip.prototype.gotoAndStop.call(this,e),this.clearAllSoundStreams()},this.stop=function(){t.MovieClip.prototype.stop.call(this),this.clearAllSoundStreams()},this.startStreamSoundsForTargetedFrame=function(t){for(var e=0;e<this.streamSoundSymbolsList.length;e++)if(e<=t&&null!=this.streamSoundSymbolsList[e])for(var i=0;i<this.streamSoundSymbolsList[e].length;i++){var s=this.streamSoundSymbolsList[e][i];if(s.endFrame>t){var a=Math.abs((t-s.startFrame)/n.properties.fps*1e3),o=playSound(s.id),h=0;if(s.offset)a+=s.offset;else if(s.loop>1){var c=a/o.duration;h=Math.floor(s.loop-c),0==a&&(h-=1),a%=o.duration}o.loop=h,o.position=Math.round(a),this.InsertIntoSoundStreamData(o,s.startFrame,s.endFrame,s.loop,s.offset)}}},this.InsertIntoSoundStreamData=function(t,e,i,n,s){this.soundStreamDuration.set({instance:t},{start:e,end:i,loop:n,offset:s})},this.clearAllSoundStreams=function(){for(var t=this.soundStreamDuration.keys(),e=0;e<this.soundStreamDuration.size;e++){t.next().value.instance.stop()}this.soundStreamDuration.clear(),this.currentSoundStreamInMovieclip=void 0},this.stopSoundStreams=function(t){if(this.soundStreamDuration.size>0)for(var e=this.soundStreamDuration.keys(),i=0;i<this.soundStreamDuration.size;i++){var n=e.next().value;this.soundStreamDuration.get(n).end==t&&(n.instance.stop(),this.currentSoundStreamInMovieclip==n&&(this.currentSoundStreamInMovieclip=void 0),this.soundStreamDuration.delete(n))}},this.computeCurrentSoundStreamInstance=function(t){if(null==this.currentSoundStreamInMovieclip&&this.soundStreamDuration.size>0)for(var e=this.soundStreamDuration.keys(),i=0,n=0;n<this.soundStreamDuration.size;n++){var s=e.next().value,a=this.soundStreamDuration.get(s);a.end>i&&(i=a.end,this.currentSoundStreamInMovieclip=s)}},this.getDesiredFrame=function(t,e){for(var i in this.actionFrames)if(i>t&&i<e)return i;return e},this.syncStreamSounds=function(){if(this.stopSoundStreams(this.currentFrame),this.computeCurrentSoundStreamInstance(this.currentFrame),null!=this.currentSoundStreamInMovieclip){var t=this.currentSoundStreamInMovieclip.instance;if(0!=t.position){var e=this.soundStreamDuration.get(this.currentSoundStreamInMovieclip),i=e.offset?t.position-e.offset:t.position,s=e.start+i/1e3*n.properties.fps;e.loop>1&&(s+=(e.loop-t.loop-1)*t.duration/1e3*n.properties.fps),(s=Math.floor(s))-this.currentFrame>=2&&this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,s))}}}}).prototype=i=new t.MovieClip,(n._1=function(){this.initialize(a._1)}).prototype=i=new t.Bitmap,i.nominalBounds=new t.Rectangle(0,0,222,126),(n._10=function(){this.initialize(a._10)}).prototype=i=new t.Bitmap,i.nominalBounds=new t.Rectangle(0,0,222,126),(n._11=function(){this.initialize(a._11)}).prototype=i=new t.Bitmap,i.nominalBounds=new t.Rectangle(0,0,222,126),(n._13=function(){this.initialize(a._13)}).prototype=i=new t.Bitmap,i.nominalBounds=new t.Rectangle(0,0,222,126),(n._12=function(){this.initialize(a._12)}).prototype=i=new t.Bitmap,i.nominalBounds=new t.Rectangle(0,0,222,126),(n._14=function(){this.initialize(a._14)}).prototype=i=new t.Bitmap,i.nominalBounds=new t.Rectangle(0,0,222,126),(n._15=function(){this.initialize(a._15)}).prototype=i=new t.Bitmap,i.nominalBounds=new t.Rectangle(0,0,222,126),(n._16=function(){this.initialize(a._16)}).prototype=i=new t.Bitmap,i.nominalBounds=new t.Rectangle(0,0,222,126),(n._19=function(){this.initialize(a._19)}).prototype=i=new t.Bitmap,i.nominalBounds=new t.Rectangle(0,0,222,126),(n._2=function(){this.initialize(a._2)}).prototype=i=new t.Bitmap,i.nominalBounds=new t.Rectangle(0,0,222,126),(n._20=function(){this.initialize(a._20)}).prototype=i=new t.Bitmap,i.nominalBounds=new t.Rectangle(0,0,222,126),(n._7=function(){this.initialize(a._7)}).prototype=i=new t.Bitmap,i.nominalBounds=new t.Rectangle(0,0,222,126),(n._3=function(){this.initialize(a._3)}).prototype=i=new t.Bitmap,i.nominalBounds=new t.Rectangle(0,0,222,126),(n._6=function(){this.initialize(a._6)}).prototype=i=new t.Bitmap,i.nominalBounds=new t.Rectangle(0,0,222,126),(n._8=function(){this.initialize(a._8)}).prototype=i=new t.Bitmap,i.nominalBounds=new t.Rectangle(0,0,222,126),(n._4=function(){this.initialize(a._4)}).prototype=i=new t.Bitmap,i.nominalBounds=new t.Rectangle(0,0,222,126),(n.bgsk=function(){this.initialize(a.bgsk)}).prototype=i=new t.Bitmap,i.nominalBounds=new t.Rectangle(0,0,1920,519),(n._18=function(){this.initialize(a._18)}).prototype=i=new t.Bitmap,i.nominalBounds=new t.Rectangle(0,0,222,126),(n.smoke=function(){this.initialize(a.smoke)}).prototype=i=new t.Bitmap,i.nominalBounds=new t.Rectangle(0,0,1e3,543),(n._5=function(){this.initialize(a._5)}).prototype=i=new t.Bitmap,i.nominalBounds=new t.Rectangle(0,0,222,126),(n.bgcolumn=function(){this.initialize(a.bgcolumn)}).prototype=i=new t.Bitmap,i.nominalBounds=new t.Rectangle(0,0,1920,900),(n._17=function(){this.initialize(a._17)}).prototype=i=new t.Bitmap,i.nominalBounds=new t.Rectangle(0,0,222,126),(n.l2=function(){this.initialize(a.l2)}).prototype=i=new t.Bitmap,i.nominalBounds=new t.Rectangle(0,0,400,312),(n.l1=function(){this.initialize(a.l1)}).prototype=i=new t.Bitmap,i.nominalBounds=new t.Rectangle(0,0,400,312),(n._9=function(){this.initialize(a._9)}).prototype=i=new t.Bitmap,i.nominalBounds=new t.Rectangle(0,0,222,126),(n.star=function(){this.initialize(a.star)}).prototype=i=new t.Bitmap,i.nominalBounds=new t.Rectangle(0,0,315,283),(n.bgctlpngcopy12345=function(){this.initialize(a.bgctlpngcopy12345)}).prototype=i=new t.Bitmap,i.nominalBounds=new t.Rectangle(0,0,1920,773),(n.star_1=function(e,i,s){this.initialize(e,i,s,{}),this.instance=new n.star,this.timeline.addTween(t.Tween.get(this.instance).wait(1)),this._renderFirstFrame()}).prototype=h(n.star_1,new t.Rectangle(0,0,315,283),null),(n.smoke1=function(e,i,s){this.initialize(e,i,s,{}),this.instance=new n.smoke,this.instance.setTransform(0,0,.4199,.4199),this.timeline.addTween(t.Tween.get(this.instance).wait(1)),this._renderFirstFrame()}).prototype=h(n.smoke1,new t.Rectangle(0,0,419.9,228),null),(n.light2=function(e,i,s){this.initialize(e,i,s,{}),this.instance=new n.l2,this.timeline.addTween(t.Tween.get(this.instance).wait(1)),this._renderFirstFrame()}).prototype=h(n.light2,new t.Rectangle(0,0,400,312),null),(n.light1=function(e,i,s){this.initialize(e,i,s,{}),this.instance=new n.l1,this.timeline.addTween(t.Tween.get(this.instance).wait(1)),this._renderFirstFrame()}).prototype=h(n.light1,new t.Rectangle(0,0,400,312),null),(n.fire1copy=function(e,i,s){this.initialize(e,i,s,{}),this.instance=new n._20,this.instance._off=!0,this.timeline.addTween(t.Tween.get(this.instance).wait(9).to({_off:!1},0).to({_off:!0},1).wait(10)),this.instance_1=new n._19,this.instance_1._off=!0,this.timeline.addTween(t.Tween.get(this.instance_1).wait(8).to({_off:!1},0).to({_off:!0},1).wait(11)),this.instance_2=new n._18,this.instance_2._off=!0,this.timeline.addTween(t.Tween.get(this.instance_2).wait(7).to({_off:!1},0).to({_off:!0},1).wait(12)),this.instance_3=new n._17,this.instance_3._off=!0,this.timeline.addTween(t.Tween.get(this.instance_3).wait(6).to({_off:!1},0).to({_off:!0},1).wait(13)),this.instance_4=new n._16,this.instance_4._off=!0,this.timeline.addTween(t.Tween.get(this.instance_4).wait(5).to({_off:!1},0).to({_off:!0},1).wait(14)),this.instance_5=new n._15,this.instance_5._off=!0,this.timeline.addTween(t.Tween.get(this.instance_5).wait(4).to({_off:!1},0).to({_off:!0},1).wait(15)),this.instance_6=new n._14,this.instance_6._off=!0,this.timeline.addTween(t.Tween.get(this.instance_6).wait(3).to({_off:!1},0).to({_off:!0},1).wait(16)),this.instance_7=new n._13,this.instance_7._off=!0,this.timeline.addTween(t.Tween.get(this.instance_7).wait(2).to({_off:!1},0).to({_off:!0},1).wait(17)),this.instance_8=new n._12,this.instance_8._off=!0,this.timeline.addTween(t.Tween.get(this.instance_8).wait(1).to({_off:!1},0).to({_off:!0},1).wait(18)),this.instance_9=new n._11,this.timeline.addTween(t.Tween.get(this.instance_9).to({_off:!0},1).wait(19)),this.instance_10=new n._10,this.instance_10._off=!0,this.timeline.addTween(t.Tween.get(this.instance_10).wait(19).to({_off:!1},0).wait(1)),this.instance_11=new n._9,this.instance_11._off=!0,this.timeline.addTween(t.Tween.get(this.instance_11).wait(18).to({_off:!1},0).to({_off:!0},1).wait(1)),this.instance_12=new n._8,this.instance_12._off=!0,this.timeline.addTween(t.Tween.get(this.instance_12).wait(17).to({_off:!1},0).to({_off:!0},1).wait(2)),this.instance_13=new n._7,this.instance_13._off=!0,this.timeline.addTween(t.Tween.get(this.instance_13).wait(16).to({_off:!1},0).to({_off:!0},1).wait(3)),this.instance_14=new n._6,this.instance_14._off=!0,this.timeline.addTween(t.Tween.get(this.instance_14).wait(15).to({_off:!1},0).to({_off:!0},1).wait(4)),this.instance_15=new n._5,this.instance_15._off=!0,this.timeline.addTween(t.Tween.get(this.instance_15).wait(14).to({_off:!1},0).to({_off:!0},1).wait(5)),this.instance_16=new n._4,this.instance_16._off=!0,this.timeline.addTween(t.Tween.get(this.instance_16).wait(13).to({_off:!1},0).to({_off:!0},1).wait(6)),this.instance_17=new n._3,this.instance_17._off=!0,this.timeline.addTween(t.Tween.get(this.instance_17).wait(12).to({_off:!1},0).to({_off:!0},1).wait(7)),this.instance_18=new n._2,this.instance_18._off=!0,this.timeline.addTween(t.Tween.get(this.instance_18).wait(11).to({_off:!1},0).to({_off:!0},1).wait(8)),this.instance_19=new n._1,this.instance_19._off=!0,this.timeline.addTween(t.Tween.get(this.instance_19).wait(10).to({_off:!1},0).to({_off:!0},1).wait(9)),this._renderFirstFrame()}).prototype=i=new t.MovieClip,i.nominalBounds=new t.Rectangle(0,0,222,126),(n.fire1=function(e,i,s){this.initialize(e,i,s,{}),this.instance=new n._20,this.instance._off=!0,this.timeline.addTween(t.Tween.get(this.instance).wait(3).to({_off:!1},0).to({_off:!0},1).wait(15)),this.instance_1=new n._19,this.instance_1._off=!0,this.timeline.addTween(t.Tween.get(this.instance_1).wait(18).to({_off:!1},0).wait(1)),this.instance_2=new n._18,this.instance_2._off=!0,this.timeline.addTween(t.Tween.get(this.instance_2).wait(17).to({_off:!1},0).to({_off:!0},1).wait(1)),this.instance_3=new n._17,this.instance_3._off=!0,this.timeline.addTween(t.Tween.get(this.instance_3).wait(16).to({_off:!1},0).to({_off:!0},1).wait(2)),this.instance_4=new n._16,this.instance_4._off=!0,this.timeline.addTween(t.Tween.get(this.instance_4).wait(15).to({_off:!1},0).to({_off:!0},1).wait(3)),this.instance_5=new n._15,this.instance_5._off=!0,this.timeline.addTween(t.Tween.get(this.instance_5).wait(14).to({_off:!1},0).to({_off:!0},1).wait(4)),this.instance_6=new n._14,this.instance_6._off=!0,this.timeline.addTween(t.Tween.get(this.instance_6).wait(13).to({_off:!1},0).to({_off:!0},1).wait(5)),this.instance_7=new n._13,this.instance_7._off=!0,this.timeline.addTween(t.Tween.get(this.instance_7).wait(12).to({_off:!1},0).to({_off:!0},1).wait(6)),this.instance_8=new n._12,this.instance_8._off=!0,this.timeline.addTween(t.Tween.get(this.instance_8).wait(11).to({_off:!1},0).to({_off:!0},1).wait(7)),this.instance_9=new n._11,this.instance_9._off=!0,this.timeline.addTween(t.Tween.get(this.instance_9).wait(10).to({_off:!1},0).to({_off:!0},1).wait(8)),this.instance_10=new n._10,this.instance_10._off=!0,this.timeline.addTween(t.Tween.get(this.instance_10).wait(9).to({_off:!1},0).to({_off:!0},1).wait(9)),this.instance_11=new n._9,this.instance_11._off=!0,this.timeline.addTween(t.Tween.get(this.instance_11).wait(8).to({_off:!1},0).to({_off:!0},1).wait(10)),this.instance_12=new n._8,this.instance_12._off=!0,this.timeline.addTween(t.Tween.get(this.instance_12).wait(7).to({_off:!1},0).to({_off:!0},1).wait(11)),this.instance_13=new n._7,this.instance_13._off=!0,this.timeline.addTween(t.Tween.get(this.instance_13).wait(6).to({_off:!1},0).to({_off:!0},1).wait(12)),this.instance_14=new n._6,this.instance_14._off=!0,this.timeline.addTween(t.Tween.get(this.instance_14).wait(5).to({_off:!1},0).to({_off:!0},1).wait(13)),this.instance_15=new n._5,this.instance_15._off=!0,this.timeline.addTween(t.Tween.get(this.instance_15).wait(4).to({_off:!1},0).to({_off:!0},1).wait(14)),this.instance_16=new n._4,this.instance_16._off=!0,this.timeline.addTween(t.Tween.get(this.instance_16).wait(3).to({_off:!1},0).to({_off:!0},1).wait(15)),this.instance_17=new n._3,this.instance_17._off=!0,this.timeline.addTween(t.Tween.get(this.instance_17).wait(2).to({_off:!1},0).to({_off:!0},1).wait(16)),this.instance_18=new n._2,this.instance_18._off=!0,this.timeline.addTween(t.Tween.get(this.instance_18).wait(1).to({_off:!1},0).to({_off:!0},1).wait(17)),this.instance_19=new n._1,this.timeline.addTween(t.Tween.get(this.instance_19).to({_off:!0},1).wait(18)),this._renderFirstFrame()}).prototype=i=new t.MovieClip,i.nominalBounds=new t.Rectangle(0,0,222,126),(n.zamok=function(e,i,s){this.initialize(e,i,s,{}),this.instance=new n.bgctlpngcopy12345,this.timeline.addTween(t.Tween.get(this.instance).wait(108)),this.instance_1=new n.star_1,this.instance_1.setTransform(1452.65,-242.65,1,1,0,0,0,157.5,141.5),this.instance_1._off=!0,this.timeline.addTween(t.Tween.get(this.instance_1).wait(64).to({_off:!1},0).to({x:884.55,y:323.5},24).to({_off:!0},1).wait(19)),this.instance_2=new n.star_1,this.instance_2.setTransform(752.7,-224.65,.7079,.7079,0,0,0,157.5,141.5),this.instance_2._off=!0,this.timeline.addTween(t.Tween.get(this.instance_2).wait(58).to({_off:!1},0).to({scaleX:1,scaleY:1,x:204.45,y:395.5},27).to({_off:!0},1).wait(22)),this.instance_3=new n.star_1,this.instance_3.setTransform(1232.65,-242.65,1,1,0,0,0,157.5,141.5),this.instance_3._off=!0,this.timeline.addTween(t.Tween.get(this.instance_3).wait(14).to({_off:!1},0).to({x:664.55,y:323.5},24).to({_off:!0},1).wait(69)),this.instance_4=new n.star_1,this.instance_4.setTransform(992.65,-242.65,1,1,0,0,0,157.5,141.5),this.timeline.addTween(t.Tween.get(this.instance_4).to({x:424.55,y:323.5},24).to({_off:!0},1).wait(83)),this._renderFirstFrame()}).prototype=i=new t.MovieClip,i.nominalBounds=new t.Rectangle(0,-384.1,1920,1157.1),(n.smoke_1=function(e,i,s){this.initialize(e,i,s,{}),this.instance=new n.smoke1,this.instance.setTransform(210,114,1,1,0,0,0,210,114),this.instance.alpha=.0117,this.instance._off=!0,this.timeline.addTween(t.Tween.get(this.instance).wait(55).to({_off:!1},0).to({scaleX:2.0169,scaleY:2.0169,x:209.95,y:49.95,alpha:1},49).wait(1)),this.instance_1=new n.smoke1,this.instance_1.setTransform(209.8,48.7,2.0376,2.0376,0,0,0,209.9,114),this.instance_1.alpha=.9805,this.timeline.addTween(t.Tween.get(this.instance_1).to({regX:209.8,scaleX:3.1583,scaleY:3.1583,x:209.5,y:-22,alpha:.0117},54).to({_off:!0},1).wait(50)),this.instance_2=new n.smoke1,this.instance_2.setTransform(210,114,1,1,0,0,0,210,114),this.instance_2.alpha=.0117,this.timeline.addTween(t.Tween.get(this.instance_2).to({scaleX:2.0169,scaleY:2.0169,x:209.95,y:49.95,alpha:1},49).to({regX:209.8,scaleX:3.1583,scaleY:3.1583,x:209.5,y:-22,alpha:.0117},55).wait(1)),this._renderFirstFrame()}).prototype=i=new t.MovieClip,i.nominalBounds=new t.Rectangle(-453.1,-382,1326.2,720.1),(n.light=function(e,i,s){this.initialize(e,i,s,{}),this.instance=new n.light2,this.instance.setTransform(202,157,1,1,0,0,0,200,156),this.instance.alpha=.0117,this.timeline.addTween(t.Tween.get(this.instance).to({alpha:1},29).to({alpha:.0117},30).wait(1)),this.instance_1=new n.light1,this.instance_1.setTransform(200,156,1,1,0,0,0,200,156),this.timeline.addTween(t.Tween.get(this.instance_1).to({alpha:.0117},29).to({alpha:1},30).wait(1)),this._renderFirstFrame()}).prototype=i=new t.MovieClip,i.nominalBounds=new t.Rectangle(0,0,402,313),(n.porallight=function(e,i,s){this.initialize(e,i,s,{}),this.instance=new n.light,this.instance.setTransform(74.3,170.45),this.timeline.addTween(t.Tween.get(this.instance).to({guide:{path:[74.4,170.5,79.5,169.4,83.6,169.1,86.7,168.9,90.2,169.1,94.1,169.2,95.1,169.2,99,169,101.8,169.2,103.2,169.3,103.8,169.4,112.1,169.4,123.8,172.2,135.2,174.9,142.3,178.4,145.7,180,147.1,181.4,148.6,182.9,148.2,184.1]}},199).to({guide:{path:[148.3,184,148.1,184.4,147.8,184.8,145,187.8,128.6,188.1,111.2,188.5,94.3,187.6,77.9,186.6,66.8,184.6,66.3,184.5,65.7,184.5]}},202).to({guide:{path:[65.6,184.5,54.9,182.5,52.6,180.1,51.2,178.7,52.7,177.3,54.2,175.9,58.6,174.6,67.3,171.9,74.3,170.5]}},198).wait(1)),this._renderFirstFrame()}).prototype=i=new t.MovieClip,i.nominalBounds=new t.Rectangle(51.9,169,498.4,332.2),(n.index=function(e,i,s){this.initialize(e,i,s,{}),this.actionFrames=[0],this.isSingleFrame=!1,this.frame_0=function(){this.isSingleFrame||(1==this.totalFrames&&(this.isSingleFrame=!0),this.clearAllSoundStreams())},this.timeline.addTween(t.Tween.get(this).call(this.frame_0).wait(1)),this.instance=new n.porallight,this.instance.setTransform(219.4,273.1,1.9661,1.9462,0,-151.0939,-4.1419,201.1,156.1),this.instance_1=new n.porallight,this.instance_1.setTransform(1209.1,-110.6,1,1,0,0,0,201,156.5),this.timeline.addTween(t.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1)),this.instance_2=new n.bgcolumn,this.instance_2.setTransform(0,71),this.timeline.addTween(t.Tween.get(this.instance_2).wait(1)),this.instance_3=new n.fire1copy,this.instance_3.setTransform(1656.2,257.55,.7658,1,0,0,0,111,63),this.instance_4=new n.fire1copy,this.instance_4.setTransform(262.1,258.05,.7658,1,0,0,0,111,63),this.instance_5=new n.fire1,this.instance_5.setTransform(1826.15,140.55,1.0116,1.4444,0,0,-8.6928,111,63),this.instance_6=new n.fire1,this.instance_6.setTransform(96.15,140.5,1.0178,1.4444,0,0,10.7218,111,63),this.timeline.addTween(t.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1)),this.instance_7=new n.smoke_1,this.instance_7.setTransform(1320.45,926,1,1,0,0,0,210,114),this.instance_8=new n.smoke_1,this.instance_8.setTransform(654,926,1,1,0,0,0,210,114),this.timeline.addTween(t.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(1)),this.instance_9=new n.zamok,this.instance_9.setTransform(960,509.5,1,1,0,0,0,960,386.5),this.timeline.addTween(t.Tween.get(this.instance_9).wait(1)),this.instance_10=new n.bgsk,this.timeline.addTween(t.Tween.get(this.instance_10).wait(1)),this._renderFirstFrame()}).prototype=i=new n.AnMovieClip,i.nominalBounds=new t.Rectangle(944.3,216.3,992.9000000000001,876.7),n.properties={id:"7D38081659037643AE59EE0CF5B0E70B",width:1920,height:1080,fps:24,color:"#FFFFFF",opacity:1,manifest:[{src:"images/_1.png?1713163175432",id:"_1"},{src:"images/_10.png?1713163175432",id:"_10"},{src:"images/_11.png?1713163175432",id:"_11"},{src:"images/_13.png?1713163175432",id:"_13"},{src:"images/_12.png?1713163175432",id:"_12"},{src:"images/_14.png?1713163175432",id:"_14"},{src:"images/_15.png?1713163175432",id:"_15"},{src:"images/_16.png?1713163175432",id:"_16"},{src:"images/_19.png?1713163175432",id:"_19"},{src:"images/_2.png?1713163175432",id:"_2"},{src:"images/_20.png?1713163175432",id:"_20"},{src:"images/_7.png?1713163175432",id:"_7"},{src:"images/_3.png?1713163175432",id:"_3"},{src:"images/_6.png?1713163175432",id:"_6"},{src:"images/_8.png?1713163175432",id:"_8"},{src:"images/_4.png?1713163175432",id:"_4"},{src:"images/bgsk.jpg?1713163175432",id:"bgsk"},{src:"images/_18.png?1713163175432",id:"_18"},{src:"images/smoke.png?1713163175432",id:"smoke"},{src:"images/_5.png?1713163175432",id:"_5"},{src:"images/bgcolumn.png?1713163175432",id:"bgcolumn"},{src:"images/_17.png?1713163175432",id:"_17"},{src:"images/l2.png?1713163175432",id:"l2"},{src:"images/l1.png?1713163175432",id:"l1"},{src:"images/_9.png?1713163175432",id:"_9"},{src:"images/star.png?1713163175432",id:"star"},{src:"images/bgctlpngcopy12345.png?1713163175432",id:"bgctlpngcopy12345"}],preloads:[]},(n.Stage=function(t){createjs.Stage.call(this,t)}).prototype=i=new createjs.Stage,i.setAutoPlay=function(t){this.tickEnabled=t},i.play=function(){this.tickEnabled=!0,this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())},i.stop=function(t){t&&this.seek(t),this.tickEnabled=!1},i.seek=function(t){this.tickEnabled=!0,this.getChildAt(0).gotoAndStop(n.properties.fps*t/1e3)},i.getDuration=function(){return this.getChildAt(0).totalFrames/n.properties.fps*1e3},i.getTimelinePosition=function(){return this.getChildAt(0).currentFrame/n.properties.fps*1e3},e.bootcompsLoaded=e.bootcompsLoaded||[],e.bootstrapListeners||(e.bootstrapListeners=[]),e.bootstrapCallback=function(t){if(e.bootstrapListeners.push(t),e.bootcompsLoaded.length>0)for(var i=0;i<e.bootcompsLoaded.length;++i)t(e.bootcompsLoaded[i])},e.compositions=e.compositions||{},e.compositions["7D38081659037643AE59EE0CF5B0E70B"]={getStage:function(){return exportRoot.stage},getLibrary:function(){return n},getSpriteSheet:function(){return s},getImages:function(){return a}},e.compositionLoaded=function(t){e.bootcompsLoaded.push(t);for(var i=0;i<e.bootstrapListeners.length;i++)e.bootstrapListeners[i](t)},e.getComposition=function(t){return e.compositions[t]},e.makeResponsive=function(t,e,i,s,a){var o,h,c=1;function r(){var r=n.properties.width,_=n.properties.height,f=window.innerWidth,w=window.innerHeight,l=window.devicePixelRatio||1,d=f/r,m=w/_,p=1;t&&("width"==e&&o==f||"height"==e&&h==w?p=c:i?1==s?p=Math.min(d,m):2==s&&(p=Math.max(d,m)):(f<r||w<_)&&(p=Math.min(d,m))),a[0].width=r*l*p,a[0].height=_*l*p,a.forEach((function(t){t.style.width=r*p+"px",t.style.height=_*p+"px"})),stage.scaleX=l*p,stage.scaleY=l*p,o=f,h=w,c=p,stage.tickOnUpdate=!1,stage.update(),stage.tickOnUpdate=!0}window.addEventListener("resize",r),r()},e.handleSoundStreamOnTick=function(t){if(!t.paused){var e=stage.getChildAt(0);e.paused||e.syncStreamSounds()}}}(createjs=createjs||{},AdobeAn=AdobeAn||{});