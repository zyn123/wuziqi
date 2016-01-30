window.onload=function(){

//----------------------------五子棋-------------


//-----棋盘-----
var kaishi=document.getElementById('kaishi');

	var sence =document.getElementById('sence');
	var ROW=15;
	var div;
	var el1,el2;
	var n;
	for(i=0;i<ROW;i++){
		el1 = document.createElement('div');
		el1.style.position='absolute';
		el1.style.top=(600/ROW)/2+(600/ROW)*i+'px';
		el1.style.width='600px';
		el1.style.height='2px';
		el1.style.background='rgb(68, 30, 0)';
		sence.appendChild(el1);

		el2 = document.createElement('div');
		el2.style.position='absolute';
		el2.style.left=(600/ROW)/2+(600/ROW)*i+'px';
		el2.style.width='2px';
		el2.style.height='600px';
		el2.style.background='rgb(68, 30, 0)';
		sence.appendChild(el2);

		 var yingle=document.createElement('div');
		  yingle.style.position='absolute';
		  yingle.style.width='600px';
		  yingle.style.height='600px';
		  yingle.style.color='white';
		  yingle.style.background='black';
		  yingle.style.opacity='0.5';
		  yingle.style.lineHeight='600px';
		  yingle.style.textAlign='center';
		  yingle.style.fontSize='50px';
		  yingle.innerHTML='你赢了';


	}
kaishi.onclick=function(){
	kaishi.innerHTML='进行中';
	//  -----生成div-------
	 width=Math.floor((600-ROW)/ROW)+'px';   
	var  el=document.getElementById('sence');

	//-----生成小块.铺满屏-------
	for(var i=0;i<ROW;i++){
		for(var j=0;j<ROW;j++){
			 n=document.createElement('div');
		     el.appendChild(n);
		     n.setAttribute('class','block');
		     n.setAttribute('id',i+'_'+j);
		     n.style.width=width;
		     n.style.height=width;
		     sence.appendChild(n);
	   }
	}
	console.log(n);



	//---------判断--------
	var  blocks=document.getElementsByClassName('block');
	var  kaiguan=true;
	var  dict1={};
	var  dict2={};
	var  panduan=function(id,dic){
		var x =Number(id.split('_')[0]);
		var y =Number(id.split('_')[1]);
		var hang =1;
		var tx,ty;
		tx=x;ty=y;
		while(dic[tx+'_'+(ty+1)]){hang++;ty++;}
		tx=x;ty=y;
		while(dic[tx+'_'+(ty-1)]){hang++;ty--;}
	    	if(hang==5) return true;

	    var lie =1;
	    tx=x;ty=y;
		while(dic[(tx-1)+'_'+ty]){lie++;tx--;}
		tx=x;ty=y;
		while(dic[(tx+1)+'_'+ty]){lie++;tx++;}
			if(lie==5) return true;

		var zx =1;
	    tx=x;ty=y;
		while(dic[(tx-1)+'_'+(ty+1)]){zx++;tx--;ty++}
		tx=x;ty=y;
		while(dic[(tx+1)+'_'+(ty-1)]){zx++;tx++;ty--}
			if(zx==5) return true;

	    var yx =1;
	    tx=x;ty=y;
		while(dic[(tx-1)+'_'+(ty-1)]){yx++;tx--;ty--;}
		tx=x;ty=y;
		while(dic[(tx+1)+'_'+(ty+1)]){yx++;tx++;ty++;}
			if(yx==5) return true;
	 return false;
	};

	//--------可点击换色-----------
	for(var i=0;i<blocks.length;i++){
		blocks[i].onclick=function(){
			if(this.hasAttribute('hasColor')){return;}
			if(kaiguan){
				this.style.background='black';kaiguan=false;
				this.style.boxShadow='0 2px 13px black';
				dict1[this.getAttribute('id')]=true;
				var id=this.getAttribute('id');
				// console.log(dict1);
				if(panduan(id,dict1)){sence.appendChild(yingle);kaishi.innerHTML='结束'}
			}else{
			    this.style.background='white';kaiguan=true;
			    this.style.boxShadow='0 2px 13px black';
			    dict2[this.getAttribute('id')]=true;
			    var id=this.getAttribute('id');
			    if(panduan(id,dict2)){sence.appendChild(yingle); kaishi.innerHTML='结束'}
				// console.log(dict2);
		    }
				this.setAttribute('hasColor','true');  //记录 不能重复着色
				// console.log(this.getAttribute('id'));
	        }
	   }

}


}