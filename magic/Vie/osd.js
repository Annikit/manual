//OSD 이미지 변환 스크립트


var OnOffID; //전역 변수 선언

function Image_change(osdImg, OnOff, cnt) { //v3.0

	OnOffID = OnOff;
	
	if (osdImg == "osd01") {
		for (i=0;i<cnt;i++){
			if (document.Fosd01.elements[i].checked)
			{selOSD= document.Fosd01.elements[i].value;}
		}
	}
	else if (osdImg == "osd02")
	{
		for (i=0;i<cnt;i++){
			if (document.Fosd02.elements[i].checked)
			{selOSD= document.Fosd02.elements[i].value;}

		}
	}
	else if (osdImg == "osd03")
	{
		for (i=0;i<cnt;i++){
			if (document.Fosd03.elements[i].checked)
			{selOSD= document.Fosd03.elements[i].value;}

		}
	}



	if (osdImg == "osd01" && OnOff == "OnStart"){
		document.osd01.src = "../eng/"+selOSD+".gif";
		document.osd01_stop.src = "stop_off.gif";
		document.osd01_go.src = "go_on.gif";
	}
	else if (osdImg == "osd01" && OnOff == "Off"){
		document.osd01.src = "../eng/kor_osd01.gif";
		document.osd01_stop.src = "stop_on.gif";
		document.osd01_go.src = "go_off.gif";
	}


	if (osdImg == "osd02" && OnOff == "OnStart"){
		document.osd02.src ="../eng/"+ selOSD+".gif";
		document.osd02_stop.src = "stop_off.gif";
		document.osd02_go.src = "go_on.gif";
	}
	else if (osdImg == "osd02" && OnOff == "Off"){
		document.osd02.src = "../eng/kor_osd02.gif";
		document.osd02_stop.src = "stop_on.gif";
		document.osd02_go.src = "go_off.gif";
	}


	if (osdImg == "osd03" && OnOff == "OnStart"){
		document.osd03.src = "../eng/"+ selOSD+".gif";
		document.osd03_stop.src = "stop_off.gif";
		document.osd03_go.src = "go_on.gif";
	}
	else if (osdImg == "osd03" && OnOff == "Off"){
		document.osd03.src = "../eng/kor_osd03.gif";
		document.osd03_stop.src = "stop_on.gif";
		document.osd03_go.src = "go_off.gif";
	}


}



function selOSDvalue(valueOSD, osdImg) { //v3.0

	if (osdImg == "osd01" && OnOffID == "OnStart") {
		document.osd01.src = valueOSD+".gif";
		
	}

	if (osdImg == "osd02" && OnOffID == "OnStart") {
		document.osd02.src = valueOSD+".gif";
	}

	if (osdImg == "osd03" && OnOffID == "OnStart") {

		document.osd03.src = valueOSD+".gif";
	}


}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}