<!-- 
	
	// Vars
	//--- Define Input variables
	var menuState = 0;
	var FeedEditNum =-1;
	
	var IntakeLevel =0;
	var	AnimalType = "TEST";
	var	AnimalClass = 1;
	var	BodyWeight = 500;
	var	Age = 36;
	var	MatureWeight = 500;
	var	DailyGain = 0.0;
	var	WorkLoad = 0;
	var	BodyCondition = 5;
	var	InTraining = 0;
	var	MonthOfGest = 0;
	var	MonthOfLact = 0;
	var	Gender = 1;
	var	Breed = 1;
	
	var GestDay = 0;
	var BirthWeight = 0;
	var FetalMass = 0;
	var PUMass = 0;
	var FetalGain = 0;

	var Ration;
	Ration = new Array(8);

	var FL_Forage;
	FL_Forage = new Array();

	var FL_Conc;
	FL_Conc = new Array();

	var FL_hiFat;
	FL_hiFat = new Array();

	var FL_MinVit;
	FL_MinVit = new Array();

	for (var ctr_x1 = 0; ctr_x1 <= 9; ctr_x1++)
    {
		Ration[ctr_x1] = new Feed("Blank"+ctr_x1);
	}

	// 2006 Req vars
	var DM_req = 0;
	var DE_req = 0;
	var CP_req = 0;
	var LYS_req = 0;
	var Ca_req = 0;
	var P_req = 0;
	var Mg_req = 0;
	var K_req = 0;
	var VitA_req = 0;

	var Na_req = 0;
	var Cl_req = 0;
	var S_req = 0;
	var Co_req = 0;
	var Cu_req = 0;
	var I_req = 0;
	var Fe_req = 0;
	var Mn_req = 0;
	var Zn_req = 0;
	var Se_req = 0;
	var A_req = 0;
	var D_req = 0;
	var E_req = 0;
	var Thi_req = 0;
	var Ribo_req = 0;

function CalcConv(){

	FromVal = document.theform.frm_Conv_Lbs.value;
	ToVal = FromVal / 2.204;
	document.theform.frm_Conv_kg.value = ToVal.toFixed(2);

}

function init()
{
	start_up();
	
	enterAsTab();

	document.theform.frm_BodyWeight.value = BodyWeight;

	menu('TitlePage');
	calcVals();
		setRation();
		initFeedTable();
	SetFeedLib();
}

function setdef()
{
//		document.theform.frm_Status.focus();
//		document.theform.frm_Status.blur();
//		document.theform.frm_Status.select();
}

function validateForm() 
{
	// Check length and range of txtFCM

	// Check length and range of txtBW
	if (document.theform.frm_BodyWeight.value.length == "0" || document.theform.frm_BodyWeight.value < 0 || document.theform.frm_BodyWeight.value > 2000)
	{
		alert("\nYou must enter valid Body Weight.");
		document.theform.frm_BodyWeight.focus();
		document.theform.frm_BodyWeight.blur();
		document.theform.frm_BodyWeight.select();
		return false;
	}
}

function validateCalc()
{
	if (validateForm() != false)
	{
		calcVals();
	}
}

function menu(x)
{
	var div1;
	cmenu();
	menuState = 0;	
	
	if(x=="AnimalSpec")	
	{
		menuState = 1;
		div1=document.getElementById("AnimalSpec");
		eval("div1.style.visibility='visible'");
		calcVals();
	}
	
	if(x=='DietSpec')
	{
		menuState = 2;
		div1=document.getElementById("DietSpec");
		eval("div1.style.visibility='visible'");
		calcVals();
	}

	if(x=='MinVit')
	{
		menuState = 2;
		div1=document.getElementById("MinVit");
		eval("div1.style.visibility='visible'");
		calcVals();
	}

	if(x=='LegalStuff')
	{
		menuState = 2;
		div1=document.getElementById("LegalStuff");
		eval("div1.style.visibility='visible'");
		calcVals();
	}

	if(x=='TitlePage')
	{
		menuState = 2;
		div1=document.getElementById("TitlePage");
		eval("div1.style.visibility='visible'");
		calcVals();
	}

	if(x=='ProgramOps')
	{
		menuState = 2;
		div1=document.getElementById("ProgramOps");
		eval("div1.style.visibility='visible'");
		calcVals();
	}


}

function cmenu()
{
	var div1;
	var div2;
	var div3;
	var div4;
	var div5;
	var div6;
	
	div1 =document.getElementById("DietSpec");
	div2 =document.getElementById("AnimalSpec");
	div3 =document.getElementById("FeedPick");
	div4 =document.getElementById("MinVit");
	div5 =document.getElementById("LegalStuff");
	div6 =document.getElementById("TitlePage");
	div7 =document.getElementById("ProgramOps");
	div8 =document.getElementById("ConvMetric");



	eval("div1.style.visibility='hidden'");
	eval("div2.style.visibility='hidden'");
	eval("div3.style.visibility='hidden'");
	eval("div4.style.visibility='hidden'");
	eval("div5.style.visibility='hidden'");
	eval("div6.style.visibility='hidden'");
	eval("div7.style.visibility='hidden'");
	eval("div8.style.visibility='hidden'");
}

function initFeedTable(){
	var tmpElement;
	var ctr;

	var tmpDM =0.0;
	var tmpDE =0.0;
	var tmpCP =0.0;
	var tmpLys =0.0;
	var tmpCa =0.0;
	var tmpP =0.0;
	var tmpMg =0.0;
	var tmpK =0.0;
	var tmpVitA =0.0;

	var tmpNa =0.0;
	var tmpCl =0.0;


	for (var x = 0; x <= 7; x++)
	{
		eval('document.theform.frm_Feed'+x+'_Amt.value = Ration[x].FeedAmt.toFixed(2)');
		eval('document.theform.frm_Feed'+x+'_Name.value = Ration[x].FeedName');
		eval('document.theform.frm_Feed'+x+'_DM.value = Ration[x].FeedDM');
		eval('document.theform.frm_Feed'+x+'_DE.value = Ration[x].FeedDE');
		eval('document.theform.frm_Feed'+x+'_CP.value = Ration[x].FeedCP');
		eval('document.theform.frm_Feed'+x+'_Lys.value = Ration[x].FeedLys');
		eval('document.theform.frm_Feed'+x+'_Ca.value = Ration[x].FeedCa');
		eval('document.theform.frm_Feed'+x+'_P.value = Ration[x].FeedP');
		eval('document.theform.frm_Feed'+x+'_Na.value = Ration[x].FeedNa');
		eval('document.theform.frm_Feed'+x+'_Cl.value = Ration[x].FeedCl');
		eval('document.theform.frm_Feed'+x+'_K.value = Ration[x].FeedK');

		tmpDM = tmpDM + Ration[x].FeedAmt * (Ration[x].FeedDM/100);
		tmpDE = tmpDE + Ration[x].FeedAmt * (Ration[x].FeedDM/100)* Ration[x].FeedDE;
		tmpCP = tmpCP + Ration[x].FeedAmt * (Ration[x].FeedDM/100)* Ration[x].FeedCP * 1000 / 100;
		tmpLys = tmpLys + Ration[x].FeedAmt * (Ration[x].FeedDM/100)* Ration[x].FeedLys * 1000 / 100;
		tmpCa = tmpCa + Ration[x].FeedAmt * (Ration[x].FeedDM/100)* Ration[x].FeedCa * 1000 / 100;
		tmpP = tmpP + Ration[x].FeedAmt * (Ration[x].FeedDM/100)* Ration[x].FeedP * 1000 / 100;
		tmpNa = tmpNa + Ration[x].FeedAmt * (Ration[x].FeedDM/100)* Ration[x].FeedNa * 1000 / 100;
		tmpCl = tmpCl + Ration[x].FeedAmt * (Ration[x].FeedDM/100)* Ration[x].FeedCl * 1000 / 100;
		tmpK = tmpK + Ration[x].FeedAmt * (Ration[x].FeedDM/100)* Ration[x].FeedK * 1000 / 100;
	}

	document.theform.frm_Feed_TotDM.value = tmpDM.toFixed(2);
	document.theform.frm_Feed_TotDE.value = tmpDE.toFixed(2);
	document.theform.frm_Feed_TotCP.value = tmpCP.toFixed(0);
	document.theform.frm_Feed_TotLys.value = tmpLys.toFixed(0);
	document.theform.frm_Feed_TotCa.value = tmpCa.toFixed(0);
	document.theform.frm_Feed_TotP.value = tmpP.toFixed(0);
	document.theform.frm_Feed_TotNa.value = tmpNa.toFixed(1);
	document.theform.frm_Feed_TotCl.value = tmpCl.toFixed(1);
	document.theform.frm_Feed_TotK.value = tmpK.toFixed(1);

	tmpDM = document.theform.frm_Feed_TotDM.value - document.theform.frm_Feed_ReqDM.value;
	tmpDE = document.theform.frm_Feed_TotDE.value - document.theform.frm_Feed_ReqDE.value;
	tmpCP = document.theform.frm_Feed_TotCP.value - document.theform.frm_Feed_ReqCP.value;
	tmpLys = document.theform.frm_Feed_TotLys.value - document.theform.frm_Feed_ReqLys.value;
	tmpCa = document.theform.frm_Feed_TotCa.value - document.theform.frm_Feed_ReqCa.value;
	tmpP = document.theform.frm_Feed_TotP.value - document.theform.frm_Feed_ReqP.value;
	tmpNa = document.theform.frm_Feed_TotNa.value - document.theform.frm_Feed_ReqNa.value;
	tmpCl = document.theform.frm_Feed_TotCl.value - document.theform.frm_Feed_ReqCl.value;
	tmpK = document.theform.frm_Feed_TotK.value - document.theform.frm_Feed_ReqK.value;

	document.theform.frm_Feed_DiffDM.value = tmpDM.toFixed(2);
	document.theform.frm_Feed_DiffDE.value = tmpDE.toFixed(2);
	document.theform.frm_Feed_DiffCP.value = tmpCP.toFixed(0);
	document.theform.frm_Feed_DiffLys.value = tmpLys.toFixed(0);
	document.theform.frm_Feed_DiffCa.value = tmpCa.toFixed(0);
	document.theform.frm_Feed_DiffP.value = tmpP.toFixed(0);
	document.theform.frm_Feed_DiffNa.value = tmpNa.toFixed(0);
	document.theform.frm_Feed_DiffCl.value = tmpCl.toFixed(0);
	document.theform.frm_Feed_DiffK.value = tmpK.toFixed(1);

}

function CalcRation(){
	var tmpElement;
	var ctr;

	var tmpDM =0.0;
	var tmpDE =0.0;
	var tmpCP =0.0;
	var tmpLys =0.0;
	var tmpCa =0.0;
	var tmpP =0.0;
	var tmpMg =0.0;
	var tmpK =0.0;
	var tmpVitA =0.0;
	var tmpNa =0.0;
	var tmpCl =0.0;

	for (var x = 0; x <= 7; x++)
	{
		eval('Ration[x].FeedAmt = parseFloat(document.theform.frm_Feed'+x+'_Amt.value)');
		eval('Ration[x].FeedName =document.theform.frm_Feed'+x+'_Name.value');
		eval('Ration[x].FeedDM = parseFloat(document.theform.frm_Feed'+x+'_DM.value)');
		eval('Ration[x].FeedDE = parseFloat(document.theform.frm_Feed'+x+'_DE.value)');
		eval('Ration[x].FeedCP = parseFloat(document.theform.frm_Feed'+x+'_CP.value)');
		eval('Ration[x].FeedLys = parseFloat(document.theform.frm_Feed'+x+'_Lys.value)');
		eval('Ration[x].FeedCa = parseFloat(document.theform.frm_Feed'+x+'_Ca.value)');
		eval('Ration[x].FeedP = parseFloat(document.theform.frm_Feed'+x+'_P.value)');
		eval('Ration[x].FeedNa = parseFloat(document.theform.frm_Feed'+x+'_Na.value)');
		eval('Ration[x].FeedCl = parseFloat(document.theform.frm_Feed'+x+'_Cl.value)');

		eval('Ration[x].FeedK = parseFloat(document.theform.frm_Feed'+x+'_K.value)');

		tmpDM = tmpDM + Ration[x].FeedAmt * (Ration[x].FeedDM/100);
		tmpDE = tmpDE + Ration[x].FeedAmt * (Ration[x].FeedDM/100)* Ration[x].FeedDE;
		tmpCP = tmpCP + Ration[x].FeedAmt * (Ration[x].FeedDM/100)* Ration[x].FeedCP * 1000 / 100;
		tmpLys = tmpLys + Ration[x].FeedAmt * (Ration[x].FeedDM/100)* Ration[x].FeedLys * 1000 / 100;
		tmpCa = tmpCa + Ration[x].FeedAmt * (Ration[x].FeedDM/100)* Ration[x].FeedCa * 1000 / 100;
		tmpP = tmpP + Ration[x].FeedAmt * (Ration[x].FeedDM/100)* Ration[x].FeedP * 1000 / 100;
		tmpNa = tmpNa + Ration[x].FeedAmt * (Ration[x].FeedDM/100)* Ration[x].FeedNa * 1000 / 100;
		tmpCl = tmpCl + Ration[x].FeedAmt * (Ration[x].FeedDM/100)* Ration[x].FeedCl * 1000 / 100;
		tmpK = tmpK + Ration[x].FeedAmt * (Ration[x].FeedDM/100)* Ration[x].FeedK * 1000 / 100;
	}

	document.theform.frm_Feed_TotDM.value = tmpDM .toFixed(2);
	document.theform.frm_Feed_TotDE.value = tmpDE.toFixed(2);
	document.theform.frm_Feed_TotCP.value = tmpCP.toFixed(0);
	document.theform.frm_Feed_TotLys.value = tmpLys.toFixed(0);
	document.theform.frm_Feed_TotCa.value = tmpCa.toFixed(0);
	document.theform.frm_Feed_TotP.value = tmpP.toFixed(0);
	document.theform.frm_Feed_TotNa.value = tmpNa.toFixed(1);
	document.theform.frm_Feed_TotCl.value = tmpCl.toFixed(1);
	document.theform.frm_Feed_TotK.value = tmpK.toFixed(1);

	tmpDM = document.theform.frm_Feed_TotDM.value - document.theform.frm_Feed_ReqDM.value;
	tmpDE = document.theform.frm_Feed_TotDE.value - document.theform.frm_Feed_ReqDE.value;
	tmpCP = document.theform.frm_Feed_TotCP.value - document.theform.frm_Feed_ReqCP.value;
	tmpLys = document.theform.frm_Feed_TotLys.value - document.theform.frm_Feed_ReqLys.value;
	tmpCa = document.theform.frm_Feed_TotCa.value - document.theform.frm_Feed_ReqCa.value;
	tmpP = document.theform.frm_Feed_TotP.value - document.theform.frm_Feed_ReqP.value;
	tmpNa = document.theform.frm_Feed_TotNa.value - document.theform.frm_Feed_ReqNa.value;
	tmpCl = document.theform.frm_Feed_TotCl.value - document.theform.frm_Feed_ReqCl.value;
	tmpK = document.theform.frm_Feed_TotK.value - document.theform.frm_Feed_ReqK.value;

	document.theform.frm_Feed_DiffDM.value = tmpDM.toFixed(2);
	document.theform.frm_Feed_DiffDE.value = tmpDE.toFixed(2);
	document.theform.frm_Feed_DiffCP.value = tmpCP.toFixed(0);
	document.theform.frm_Feed_DiffLys.value = tmpLys.toFixed(0);
	document.theform.frm_Feed_DiffCa.value = tmpCa.toFixed(0);
	document.theform.frm_Feed_DiffP.value = tmpP.toFixed(0);
	document.theform.frm_Feed_DiffNa.value = tmpNa.toFixed(1);
	document.theform.frm_Feed_DiffCl.value = tmpCl.toFixed(1);
	document.theform.frm_Feed_DiffK.value = tmpK.toFixed(1);

}

function Feed(name) {
	// Used Blank as template
	this.FeedAmt = 0.0;
	this.FeedName = name;
	this.FeedDM = 0.0;
	this.FeedDE = 0.00;
	this.FeedCP = 0.0;
	this.FeedLys = 0.00;   // Arbitrary number - not from table
	this.FeedCa = 0.00;
	this.FeedP = 0.00;		// Arbitrary number - not from table
	this.FeedMg = 0.00;
	this.FeedK = 0.0;
	this.FeedVitA = 0;		// Arbitrary number - not from table
	this.FeedNa = 0; 
	this.FeedCl = 0; 
} 

Feed.prototype.toString = function() {
	var retval;
	
	retval = "FD," + this.FeedAmt.toFixed(2) +",";
	retval = retval + this.FeedName +",";
	retval = retval + this.FeedDM.toFixed(2) +",";
	retval = retval + this.FeedDE.toFixed(2) +",";
	retval = retval + this.FeedCP.toFixed(2) +",";
	retval = retval + this.FeedLys.toFixed(2) +",";
	retval = retval + this.FeedCa.toFixed(2) +",";
	retval = retval + this.FeedP.toFixed(2) +",";
	retval = retval + this.FeedNa.toFixed(2) 
	retval = retval + this.FeedCl.toFixed(2) 
	retval = retval + this.FeedK.toFixed(2) +",";
	return retval;
}

Feed.prototype.fromString = function(inStr) {
	var testval;
	var tmpArr;
	
	testval = "FD,0.00,TESTFROM,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00"
	testval = inStr;
	tmpArr = testval.split(",");
	
	this.FeedAmt = tmpArr[1] - 0;
	this.FeedName = tmpArr[2];
	this.FeedDM = tmpArr[3] - 0;
	this.FeedDE = tmpArr[4]- 0;
	this.FeedCP = tmpArr[5]- 0;
	this.FeedLys = tmpArr[6]- 0;
	this.FeedCa = tmpArr[7] - 0;
	this.FeedP = tmpArr[8] - 0;
	this.FeedNa = tmpArr[9] - 0; 
	this.FeedCl = tmpArr[10] - 0; 
	this.FeedK = tmpArr[11] - 0;
	this.FeedMg = 0;
	this.FeedVitA = 0; 
	return 0;
}

function start_up() {

	var tstMsg = "";
	tstMsg = "Warning:"
	tstMsg = tstMsg + "\n\nKnowledge of nutritional constraints and limitations is essential for the proper use of nutrient requirements in tables and especially those generated by computer programs."
	tstMsg = tstMsg + "\n\nBecause of the many variables involved and judgments that must be made in choosing inputs and interpreting outputs, the NRC makes no claim for the accuracy of this software and the user is solely responsible for risk of use."
	tstMsg = tstMsg + "\n\nClick on 'OK' to accept\n"
	tstMsg = tstMsg + "Click on 'Cancel' to reject\n"

	if (confirm(tstMsg)) {
//		alert("Passed");
	} else {
		location.replace("http://nationalacademies.org/");
	}
}


//  End -->