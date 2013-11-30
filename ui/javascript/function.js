var errMessage;
$("document").ready(function(){
	
	initialize();
	
});

function initialize(){
	$("#text-area").keydown(function(_e){
		
		
	});
	
	$("#text-area").keyup(function(_e){
		
		
		if(_e.keyCode == 13){
			addLineNumber();
		}
		
		parseInputText();
	});
}


function addLineNumber(){
	var string= $("#input-text").html();
	
	if(string.match('<div>')){
		var numberOfLine= string.match(/<div>/g).length+1;
		var lineNumberHtml= '';
		
		for (var i=1; i <= numberOfLine; i++){
			lineNumberHtml+= '<div id="'+i+'" class="line-number">'+i+'</div>';
		}
		
		$("#line-number-container").html(lineNumberHtml);
	}
}

function parseInputText(){
	var string= $("#input-text").html();
	
	string=string.replace(/\&nbsp;/g,' ').replace(/<div>/g,'\n').replace(/<\/div>/g,'').replace(/<br>/g,'');
	
	try{
		var parsed=result.parse(string);
		removeErrIcon();
	}
	catch(err){
		var lineErr= err.line;
		$('#'+lineErr).html('<i class="fa fa-exclamation-triangle"></i>'+lineErr);
		errMessage= err.message;
		$('.fa-exclamation-triangle').mouseover(function(_e){
			hoverOver(_e);
		});
		
		$('.fa-exclamation-triangle').mouseout(function(){
			$('#err-message').css({visibility:'hidden'});
		});
	}
}

function getHintInputText(){
	
}

function hoverOver(_e){
	$('#err-message').html(errMessage);
	$('#err-message').css({visibility:'visible', left:_e.pageX, top:_e.pageY});
	
}

function removeErrIcon(){
	$('.fa-exclamation-triangle').remove();
}