
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}


function MM_findObj(n, d) { //v3.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document); return x;
}

function MM_showHideLayers() { //v3.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v='hide')?'hidden':v; }
    obj.visibility=v; }
}

function namosw_exchange_src()
{
  str = namosw_exchange_src.arguments[0];
  str = (navigator.appName == 'Netscape') ? 'document.' + str : 'document.all.' + str;
  img = eval(str);
  if (img) {
    if (img.ori_src == null) {
      img.ori_src = img.src;
      img.src     = namosw_exchange_src.arguments[1];
    } else {
      var temp    = img.src;
      img.src     = img.ori_src;
      img.ori_src = temp;
    }
  }
}

function namosw_preload_img()
{
  var img_list = namosw_preload_img.arguments;
  if (document.preloadlist == null)
    document.preloadlist = new Array();
  var top = document.preloadlist.length;
  for (var i=0; i < img_list.length; i++) {
    document.preloadlist[top+i]     = new Image;
    document.preloadlist[top+i].src = img_list[i];
  }
}

function OpenWindow(url,intWidth,intHeight) {
      window.open(url, "_blank", "width="+intWidth+",height="+intHeight+",resizable=0,scrollbars=no") ;
}

function gogo(form) {
        var myindex=form.select1.selectedIndex
        window.open(form.select1.options[myindex].value, target="_parent");
}

function namosw_exchange_src()
{
  str = namosw_exchange_src.arguments[0];
  str = (navigator.appName == 'Netscape') ? 'document.' + str : 'document.all.' + str;
  img = eval(str);
  if (img) {
    if (img.ori_src == null) {
      img.ori_src = img.src;
      img.src     = namosw_exchange_src.arguments[1];
    } else {
      var temp    = img.src;
      img.src     = img.ori_src;
      img.ori_src = temp;
    }
  }
}

function namosw_preload_img()
{
  var img_list = namosw_preload_img.arguments;
  if (document.preloadlist == null)
    document.preloadlist = new Array();
  var top = document.preloadlist.length;
  for (var i=0; i < img_list.length; i++) {
    document.preloadlist[top+i]     = new Image;
    document.preloadlist[top+i].src = img_list[i];
  }
}


function OpenWindow(url,intWidth,intHeight) {
      window.open(url, "_blank", "width="+intWidth+",height="+intHeight+",resizable=0,scrollbars=no") ;
}

function openwin(str)
{
		var thereman = screen.availWidth;
		var hereman = screen.availHeight;
		window.open(str, '1004', 'toolbar=no,resizable=no,scrollbars=yes,width=650,height=750,left=' + 30 + ',top=' + 10)
}

function movr(src,clrOver)  { if (!src.contains(event.fromElement)) { src.bgColor = clrOver; }}
function mout(src,clrIn) { if (!src.contains(event.toElement)) { src.style.cursor = 'default'; src.bgColor = clrIn; }}