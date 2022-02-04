var i = 0;
var total_job_all = 0;

/*
 * [Id, currentLevel, maxLevel]
 */
let HolyLight = 		['1', '0', '5'];	
let DemonBane = 		['2', '0', '10'];	
let Heal = 				['3', '0', '10'];	
let Teleport = 			['4', '0', '1'];	
let Blessing =  		['5', '0', '10'];	
let SignumCrucis = 		['6', '0', '10'];	
let Angelus = 			['7', '0', '10'];	
let IncreaseAgility = 	['8', '0', '5'];	
let KyrieEleison = 		['9', '0', '10'];	
let Magnificat = 		['10', '0', '5'];	
let Resurection = 		['11', '0', '4'];	
let Sanctuary = 		['12', '0', '10'];	
let MaceMastery = 		['13', '0', '10'];	
let Recovery =  		['14', '0', '3'];	
let ImpositioManus =	['15', '0', '10'];	
let TurnUndead = 		['16', '0', '10'];	
let Pneuma = 			['17', '0', '10'];	
let HolyJudgment = 		['18', '0', '10'];	
let Aspersio =  		['19', '0', '2'];	
let ZenHeart = 			['20', '0', '10'];	
let MagnusExorcismus = 	['21', '0', '10'];	
let SafetyWall = 		['22', '0', '10'];	
let Gloria = 			['23', '0', '5'];	
let Meditatio = 		['24', '0', '10'];	
let Assumptio = 		['25', '0', '10'];	
let LexDivina = 		['26', '0', '5'];	
let Judex = 			['27', '0', '10'];	
let AdvancedMaceMastery =	['28', '0', '10'];	
let ManaRecharge =		['29', '0', '5'];	
let Suffragium = 		['30', '0', '3'];	
let LexAeterna = 		['31', '0', '5'];	
let Basilica = 			['32', '0', '5'];	
let HolyWard =  		['33', '0', '10'];	


/*
 * Function to refresh jobLevel
 */
function jobLevel() {
	var total_job1 = parseFloat(HolyLight[1]) + parseFloat(DemonBane[1]) + parseFloat(Heal[1]) + parseFloat(Teleport[1]) + parseFloat(Blessing[1]) + parseFloat(SignumCrucis[1]) + parseFloat(Angelus[1]) + parseFloat(IncreaseAgility[1]) + parseFloat(KyrieEleison[1]) ;
	var total_job2 = parseFloat(Magnificat[1]) + parseFloat(Resurection[1]) + parseFloat(Sanctuary[1]) + parseFloat(MaceMastery[1]) + parseFloat(Recovery[1]) + parseFloat(ImpositioManus[1]) + parseFloat(TurnUndead[1]) + parseFloat(Pneuma[1]) + parseFloat(HolyJudgment[1]) + parseFloat(Aspersio[1]) + parseFloat(ZenHeart[1]) + parseFloat(MagnusExorcismus[1]) + parseFloat(SafetyWall[1]) + parseFloat(Gloria[1]) ;
	var total_job3 = parseFloat(Meditatio[1]) + parseFloat(Assumptio[1]) + parseFloat(LexDivina[1]) + parseFloat(Judex[1]) + parseFloat(AdvancedMaceMastery[1]) + parseFloat(ManaRecharge[1]) + parseFloat(Suffragium[1]) + parseFloat(LexAeterna[1]) + parseFloat(Basilica[1]) + parseFloat(HolyWard[1]) ;
	total_job_all = total_job1 + total_job2 + total_job3 ;
	document.getElementById("job1").innerHTML = total_job1 ;
	document.getElementById("job2").innerHTML = total_job2 ;
	document.getElementById("job3").innerHTML = total_job3 ;

	if (total_job1 < 40) { 
		document.getElementById("imgJob1").style.display = "block"; 
		document.getElementById("imgJob2").style.display = "none";
		document.getElementById("imgJob3").style.display = "none";
	}
	if (total_job1 >= 40) { 
		document.getElementById("f2").style.display = "block"; 
		document.getElementById("imgJob1").style.display = "none"; 
		document.getElementById("imgJob2").style.display = "block";
		document.getElementById("imgJob3").style.display = "none";
	};
	if (total_job1 >= 40 && total_job2 >= 40) { 
		document.getElementById("f3").style.display = "block"; 
		document.getElementById("imgJob1").style.display = "none"; 
		document.getElementById("imgJob2").style.display = "none";
		document.getElementById("imgJob3").style.display = "block";
	};
}

/*
 * Function to refreshSkill
 */
function refreshSkill() {
	document.getElementById(HolyLight[0]).innerHTML = HolyLight[1];
	document.getElementById(DemonBane[0]).innerHTML = DemonBane[1];
	document.getElementById(Heal[0]).innerHTML = Heal[1];
	document.getElementById(Teleport[0]).innerHTML = Teleport[1];
	document.getElementById(Blessing[0]).innerHTML = Blessing[1];
	document.getElementById(SignumCrucis[0]).innerHTML = SignumCrucis[1];
	document.getElementById(Angelus[0]).innerHTML = Angelus[1];
	document.getElementById(IncreaseAgility[0]).innerHTML = IncreaseAgility[1];
	document.getElementById(KyrieEleison[0]).innerHTML = KyrieEleison[1];
	document.getElementById(Magnificat[0]).innerHTML = Magnificat[1];
  	document.getElementById(Resurection[0]).innerHTML = Resurection[1];
	document.getElementById(Sanctuary[0]).innerHTML = Sanctuary[1];
	document.getElementById(MaceMastery[0]).innerHTML = MaceMastery[1];
	document.getElementById(Recovery[0]).innerHTML = Recovery[1];
	document.getElementById(ImpositioManus[0]).innerHTML = ImpositioManus[1];
	document.getElementById(TurnUndead[0]).innerHTML = TurnUndead[1];
	document.getElementById(Pneuma[0]).innerHTML = Pneuma[1];
	document.getElementById(HolyJudgment[0]).innerHTML = HolyJudgment[1];
	document.getElementById(Aspersio[0]).innerHTML = Aspersio[1];
	document.getElementById(ZenHeart[0]).innerHTML = ZenHeart[1];
	document.getElementById(MagnusExorcismus[0]).innerHTML = MagnusExorcismus[1];
	document.getElementById(SafetyWall[0]).innerHTML = SafetyWall[1];
	document.getElementById(Gloria[0]).innerHTML = Gloria[1];
	document.getElementById(Meditatio[0]).innerHTML = Meditatio[1];
	document.getElementById(Assumptio[0]).innerHTML = Assumptio[1];
	document.getElementById(LexDivina[0]).innerHTML = LexDivina[1];
	document.getElementById(Judex[0]).innerHTML = Judex[1];
	document.getElementById(AdvancedMaceMastery[0]).innerHTML = AdvancedMaceMastery[1];
	document.getElementById(ManaRecharge[0]).innerHTML = ManaRecharge[1];
	document.getElementById(Suffragium[0]).innerHTML = Suffragium[1];
	document.getElementById(LexAeterna[0]).innerHTML = LexAeterna[1];
	document.getElementById(Basilica[0]).innerHTML = Basilica[1];
	document.getElementById(HolyWard[0]).innerHTML = HolyWard[1];	

	//localStorage.setItem("HolyLight", HolyLight[1]);
	jobLevel();
}


/*
 * Function to calc skill with prerequis
 */
function incCalcSkill() {
	if (SignumCrucis[1] > 0 && DemonBane[1] < 5) { DemonBane[1] = 5 };
	if (Angelus[1] > 0 && Heal[1] < 5) { Heal[1] = 5 };
	if (KyrieEleison[1] > 0 && Angelus[1] < 5) { Angelus[1] = 5 };
	if (KyrieEleison[1] > 0 && Heal[1] < 5) { Heal[1] = 5 };
	if (IncreaseAgility[1] > 0 && Blessing[1] < 5) { Blessing[1] = 5 };
	if (Sanctuary[1] > 0 && Heal[1] < 5) { Heal[1] = 5 };
	if (TurnUndead[1] > 0 && Resurection[1] < 1) { Resurection[1] = 1 };
	if (MagnusExorcismus[1] > 0 && TurnUndead[1] < 5) { TurnUndead[1] = 5 };
	if (MagnusExorcismus[1] > 0 && Resurection[1] < 1) { Resurection[1] = 1 };
	if (HolyJudgment[1] > 0 && MaceMastery[1] < 5) { MaceMastery[1] = 5 };
	if (Meditatio[1] > 0 && ZenHeart[1] < 5) { ZenHeart[1] = 5 };
	if (Assumptio[1] > 0 && Angelus[1] < 5) { Angelus[1] = 5 };
	if (Judex[1] > 0 && HolyLight[1] < 5) { HolyLight[1] = 5 };
	if (AdvancedMaceMastery[1] > 0 && MaceMastery[1] < 5) { MaceMastery[1] = 5 };
	if (ManaRecharge[1] > 0 && Meditatio[1] < 5) { Meditatio[1] = 5 };
	if (Suffragium[1] > 0 && Assumptio[1] < 5) { Assumptio[1] = 5 };
	if (LexAeterna[1] > 0 && LexDivina[1] < 5) { LexDivina[1] = 5 };
	if (Basilica[1] > 0 && KyrieEleison[1] < 5) { KyrieEleison[1] = 5 };
	if (Basilica[1] > 0 && Angelus[1] < 5) { Angelus[1] = 5 };
	if (Basilica[1] > 0 && Heal[1] < 5) { Heal[1] = 5 };
	refreshSkill();
}
function decCalcSkill() {
	if (DemonBane[1] < 5) { SignumCrucis[1] = 0; }
	if (Heal[1] < 5) { Angelus[1] = 0; Sanctuary[1] = 0; }
	if (Angelus[1] < 5) { KyrieEleison[1] = 0; Assumptio[1] = 0; }
	if (Blessing[1] < 5) { IncreaseAgility[1] = 0; }
	if (HolyLight[1] < 5) { Judex[1] = 0; }
	if (Resurection[1] < 1) { TurnUndead[1] = 0; }
	if (TurnUndead[1] < 5) { MagnusExorcismus[1] = 0; }
	if (MaceMastery[1] < 5) { HolyJudgment[1] = 0; AdvancedMaceMastery[1] = 0; }
	if (ZenHeart[1] < 5) { Meditatio[1] = 0; }
	if (Meditatio[1] < 5) { ManaRecharge[1] = 0; }
	if (Assumptio[1] < 5) { Suffragium[1] = 0; }
	if (LexDivina[1] < 5) { LexAeterna[1] = 0; }
	if (KyrieEleison[1] < 5) { Basilica[1] = 0; }
	refreshSkill();
}


/*
 * Function to increment skill level
 */
function incNumber(skill) {
	if (total_job_all < 120) {
		i = skill[1]		
        if (skill[1] < skill[2]) {
        	i++;
			skill[1] = i;
        } else if (skill[1] = skill[2]) {
        	skill[1] = skill[2];
        }
		incCalcSkill();
	} else {
		document.getElementById("alarmmsg").innerHTML = "<...MAX LEVEL...>";
		setTimeout(function(){ document.getElementById("alarmmsg").innerHTML = '';}, 2000);
	}
}
function incNumberMax(skill) {
	i = parseFloat(skill[2]) - parseFloat(skill[1]); 
	total_job_all_temp = total_job_all + i

	if (total_job_all_temp <= 120) {
		skill[1] = skill[2];
		incCalcSkill();
	} else {
		j = 120 - total_job_all;
		skill[1] = parseFloat(skill[1]) + j
		incCalcSkill();
		document.getElementById("alarmmsg").innerHTML = "<...MAX LEVEL...>";
		setTimeout(function(){ document.getElementById("alarmmsg").innerHTML = '';}, 2000);
	}
}


/*
 * Function to decrease skill level
 */
function decNumber(skill) {
	i = skill[1]
    if (skill[1] > 0) {
       	--i;
		skill[1] = i;
    } else if (skill[1] = 0) {
        	skill[1] = skill[2];
    }
	decCalcSkill();
}
function decNumberMax(skill) {
	skill[1] = 0;
	decCalcSkill();
}

function shareLink() {
	var q_param = "?";
	if(HolyLight[1] != 0) { q_param += "&HolyLight=" + HolyLight[1] };
	if(DemonBane[1] != 0) { q_param += "&DemonBane=" + DemonBane[1] };
	if(Heal[1] != 0) { q_param += "&Heal=" + Heal[1] };
	if(Teleport[1] != 0) { q_param += "&Teleport=" + Teleport[1] };
	if(Blessing[1] != 0) { q_param += "&Blessing=" + Blessing[1] };
	if(SignumCrucis[1] != 0) { q_param += "&SignumCrucis=" + SignumCrucis[1] };
	if(Angelus[1] != 0) { q_param += "&Angelus=" + Angelus[1] };
	if(IncreaseAgility[1] != 0) { q_param += "&IncreaseAgility=" + IncreaseAgility[1] };
	if(KyrieEleison[1] != 0) { q_param += "&KyrieEleison=" + KyrieEleison[1] };
	if(Magnificat[1] != 0) { q_param += "&Magnificat=" + Magnificat[1] };
	if(Resurection[1] != 0) { q_param += "&Resurection=" + Resurection[1] };
	if(Sanctuary[1] != 0) { q_param += "&Sanctuary=" + Sanctuary[1] };
	if(MaceMastery[1] != 0) { q_param += "&MaceMastery=" + MaceMastery[1] };
	if(Recovery[1] != 0) { q_param += "&Recovery=" + Recovery[1] };
	if(ImpositioManus[1] != 0) { q_param += "&ImpositioManus=" + ImpositioManus[1] };
	if(TurnUndead[1] != 0) { q_param += "&TurnUndead=" + TurnUndead[1] };
	if(Pneuma[1] != 0) { q_param += "&Pneuma=" + Pneuma[1] };
	if(HolyJudgment[1] != 0) { q_param += "&HolyJudgment=" + HolyJudgment[1] };
	if(Aspersio[1] != 0) { q_param += "&Aspersio=" + Aspersio[1] };
	if(ZenHeart[1] != 0) { q_param += "&ZenHeart=" + ZenHeart[1] };
	if(MagnusExorcismus[1] != 0) { q_param += "&MagnusExorcismus=" + MagnusExorcismus[1] };
	if(SafetyWall[1] != 0) { q_param += "&SafetyWall=" + SafetyWall[1] };
	if(Gloria[1] != 0) { q_param += "&Gloria=" + Gloria[1] };
	if(Meditatio[1] != 0) { q_param += "&Meditatio=" + Meditatio[1] };
	if(Assumptio[1] != 0) { q_param += "&Assumptio=" + Assumptio[1] };
	if(LexDivina[1] != 0) { q_param += "&LexDivina=" + LexDivina[1] };
	if(Judex[1] != 0) { q_param += "&Judex=" + Judex[1] };
	if(AdvancedMaceMastery[1] != 0) { q_param += "&AdvancedMaceMastery=" + AdvancedMaceMastery[1] };
	if(ManaRecharge[1] != 0) { q_param += "&ManaRecharge=" + ManaRecharge[1] };
	if(Suffragium[1] != 0) { q_param += "&Suffragium=" + Suffragium[1] };
	if(LexAeterna[1] != 0) { q_param += "&LexAeterna=" + LexAeterna[1] };
	if(Basilica[1] != 0) { q_param += "&Basilica=" + Basilica[1] };
	if(HolyWard[1] != 0) { q_param += "&HolyWard=" + HolyWard[1] };

	q_path = location.protocol + '//' + location.host + location.pathname + q_param;
	navigator.clipboard.writeText(q_path);
	
	document.getElementById("alarmmsg").innerHTML = "<...Link added into clipboard...>";
	setTimeout(function(){ document.getElementById("alarmmsg").innerHTML = '';}, 1000);
}

function reset() {
	//localStorage.clear();
	window.location.href = location.protocol + '//' + location.host + location.pathname
}

/*
 * Get Parameters from URI
 */
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if(urlParams.get('HolyLight')) { HolyLight[1] = parseFloat(urlParams.get('HolyLight')); document.getElementById(HolyLight[0]).innerHTML = HolyLight[1]; }
if(urlParams.get('DemonBane')) { DemonBane[1] = parseFloat(urlParams.get('DemonBane')); document.getElementById(DemonBane[0]).innerHTML = DemonBane[1]; }
if(urlParams.get('Heal')) { Heal[1] = parseFloat(urlParams.get('Heal')); document.getElementById(Heal[0]).innerHTML = Heal[1]; }
if(urlParams.get('Teleport')) { Teleport[1] = parseFloat(urlParams.get('Teleport')); document.getElementById(Teleport[0]).innerHTML = Teleport[1]; }
if(urlParams.get('Blessing')) { Blessing[1] = parseFloat(urlParams.get('Blessing')); document.getElementById(Blessing[0]).innerHTML = Blessing[1]; }
if(urlParams.get('SignumCrucis')) { SignumCrucis[1] = parseFloat(urlParams.get('SignumCrucis')); document.getElementById(SignumCrucis[0]).innerHTML = SignumCrucis[1]; }
if(urlParams.get('Angelus')) { Angelus[1] = parseFloat(urlParams.get('Angelus')); document.getElementById(Angelus[0]).innerHTML = Angelus[1]; }
if(urlParams.get('IncreaseAgility')) { IncreaseAgility[1] = parseFloat(urlParams.get('IncreaseAgility')); document.getElementById(IncreaseAgility[0]).innerHTML = IncreaseAgility[1]; }
if(urlParams.get('KyrieEleison')) { KyrieEleison[1] = parseFloat(urlParams.get('KyrieEleison')); document.getElementById(KyrieEleison[0]).innerHTML = KyrieEleison[1]; }
if(urlParams.get('Magnificat')) { Magnificat[1] = parseFloat(urlParams.get('Magnificat')); document.getElementById(Magnificat[0]).innerHTML = Magnificat[1]; }
if(urlParams.get('Resurection')) { Resurection[1] = parseFloat(urlParams.get('Resurection')); document.getElementById(Resurection[0]).innerHTML = Resurection[1]; }
if(urlParams.get('Sanctuary')) { Sanctuary[1] = parseFloat(urlParams.get('Sanctuary')); document.getElementById(Sanctuary[0]).innerHTML = Sanctuary[1]; }
if(urlParams.get('MaceMastery')) { MaceMastery[1] = parseFloat(urlParams.get('MaceMastery')); document.getElementById(MaceMastery[0]).innerHTML = MaceMastery[1]; }
if(urlParams.get('Recovery')) { Recovery[1] = parseFloat(urlParams.get('Recovery')); document.getElementById(Recovery[0]).innerHTML = Recovery[1]; }
if(urlParams.get('ImpositioManus')) { ImpositioManus[1] = parseFloat(urlParams.get('ImpositioManus')); document.getElementById(ImpositioManus[0]).innerHTML = ImpositioManus[1]; }
if(urlParams.get('TurnUndead')) { TurnUndead[1] = parseFloat(urlParams.get('TurnUndead')); document.getElementById(TurnUndead[0]).innerHTML = TurnUndead[1]; }
if(urlParams.get('Pneuma')) { Pneuma[1] = parseFloat(urlParams.get('Pneuma')); document.getElementById(Pneuma[0]).innerHTML = Pneuma[1]; }
if(urlParams.get('HolyJudgment')) { HolyJudgment[1] = parseFloat(urlParams.get('HolyJudgment')); document.getElementById(HolyJudgment[0]).innerHTML = HolyJudgment[1]; }
if(urlParams.get('Aspersio')) { Aspersio[1] = parseFloat(urlParams.get('Aspersio')); document.getElementById(Aspersio[0]).innerHTML = Aspersio[1]; }
if(urlParams.get('ZenHeart')) { ZenHeart[1] = parseFloat(urlParams.get('ZenHeart')); document.getElementById(ZenHeart[0]).innerHTML = ZenHeart[1]; }
if(urlParams.get('MagnusExorcismus')) { MagnusExorcismus[1] = parseFloat(urlParams.get('MagnusExorcismus')); document.getElementById(MagnusExorcismus[0]).innerHTML = MagnusExorcismus[1]; }
if(urlParams.get('SafetyWall')) { SafetyWall[1] = parseFloat(urlParams.get('SafetyWall')); document.getElementById(SafetyWall[0]).innerHTML = SafetyWall[1]; }
if(urlParams.get('Gloria')) { Gloria[1] = parseFloat(urlParams.get('Gloria')); document.getElementById(Gloria[0]).innerHTML = Gloria[1]; }
if(urlParams.get('Meditatio')) { Meditatio[1] = parseFloat(urlParams.get('Meditatio')); document.getElementById(Meditatio[0]).innerHTML = Meditatio[1]; }
if(urlParams.get('Assumptio')) { Assumptio[1] = parseFloat(urlParams.get('Assumptio')); document.getElementById(Assumptio[0]).innerHTML = Assumptio[1]; }
if(urlParams.get('LexDivina')) { LexDivina[1] = parseFloat(urlParams.get('LexDivina')); document.getElementById(LexDivina[0]).innerHTML = LexDivina[1]; }
if(urlParams.get('Judex')) { Judex[1] = parseFloat(urlParams.get('Judex')); document.getElementById(Judex[0]).innerHTML = Judex[1]; }
if(urlParams.get('AdvancedMaceMastery')) { AdvancedMaceMastery[1] = parseFloat(urlParams.get('AdvancedMaceMastery')); document.getElementById(AdvancedMaceMastery[0]).innerHTML = AdvancedMaceMastery[1]; }
if(urlParams.get('ManaRecharge')) { ManaRecharge[1] = parseFloat(urlParams.get('ManaRecharge')); document.getElementById(ManaRecharge[0]).innerHTML = ManaRecharge[1]; }
if(urlParams.get('Suffragium')) { Suffragium[1] = parseFloat(urlParams.get('Suffragium')); document.getElementById(Suffragium[0]).innerHTML = Suffragium[1]; }
if(urlParams.get('LexAeterna')) { LexAeterna[1] = parseFloat(urlParams.get('LexAeterna')); document.getElementById(LexAeterna[0]).innerHTML = LexAeterna[1]; }
if(urlParams.get('Basilica')) { Basilica[1] = parseFloat(urlParams.get('Basilica')); document.getElementById(Basilica[0]).innerHTML = Basilica[1]; }
if(urlParams.get('HolyWard')) { HolyWard[1] = parseFloat(urlParams.get('HolyWard')); document.getElementById(HolyWard[0]).innerHTML = HolyWard[1]; }
jobLevel();


/*
 * Get Modal
 */
function showModal(modalId) {
	var modal = document.getElementById(modalId); 
	modal.style.display = "block"; // Show modal
	window.onclick = function(event) { if (event.target == modal) { modal.style.display = "none"; } } // When the user clicks anywhere outside of the modal, close it	
}
function hideModal(modalId) {
	var modal = document.getElementById(modalId); 
	modal.style.display = "none"; // Hide modal
}


/*
 * Show Job with btn
 */
function showJob() {
	document.getElementById("btnHide").style.display = "block";
	document.getElementById("btnShow").style.display = "none";
	document.getElementById("f2").style.display = "block";
	document.getElementById("f3").style.display = "block";
}
function hideJob() {
	document.getElementById("btnHide").style.display = "none";
	document.getElementById("btnShow").style.display = "block";
	document.getElementById("f2").style.display = "none";
	document.getElementById("f3").style.display = "none";
}
