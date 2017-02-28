/*
 自己写的一个可以鼠标滑到dom能有相关提示的控件
 基于jquery
 
 I write a js file can show some hint message when mouse enter a dom
 base on jquery
 * */
$.fn.DownPanel = function(opts){
	
	opts = $.extend({
		render:'没有内容',
		width:130,
		left:0,
		top:0,
		background:'#ffffff'
	},opts||{});
	
	
	this.on("mouseenter",function(){
		$('<div style="z-index:5;position:fixed;left:'+opts.left+'px;top:'+opts.top+'px;background:'+opts.background+';width:'+open.width+'px;" id="downPanel">'+opts.render+'</div>').appendTo('body');
		
	}).on("mouseleave",function(){
		$('#downPanel').remove();
	});
	
}
