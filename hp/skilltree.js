var i = 0;
var job1 = 0;
var job2 = 0;
var job3 = 0;

// [Id, currentLevel, MaxLevel]
let HolyLight = 		['1', '0', '5'];
let DemonBane = 		['2', '0', '10'];
let Heal = 			['3', '0', '10'];
let Teleport = 			['4', '0', '1'];
let Blessing =  		['5', '0', '10'];
let SignumCrucis = 		['6', '0', '10'];
let Angelus = 			['7', '0', '10'];
let IncreaseAgility = 		['8', '0', '5'];
let KyrieEleison = 		['9', '0', '10'];

let Magnificat = 		['10', '0', '5'];
let Resurection = 		['11', '0', '4'];
let Sanctuary = 		['12', '0', '10'];
let MaceMastery = 		['13', '0', '10'];
let Recovery =  		['14', '0', '3'];
let ImpositioManus =		['15', '0', '10'];
let TurnUndead = 		['16', '0', '10'];
let Pneuma = 			['17', '0', '10'];
let HolyJudgment = 		['18', '0', '10'];
let Aspersio =  		['19', '0', '2'];
let ZenHeart = 			['20', '0', '10'];
let MagnusExorcismus = 		['21', '0', '10'];
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

function incNumber(skill) {
	i = skill[1]		
        if (skill[1] < skill[2]) {
        	i++;
		skill[1] = i;
        } else if (skill[1] = skill[2]) {
        	skill[1] = skill[2];
        }
	document.getElementById(skill[0]).innerHTML = i;
	
    	// JOB LEVEL
	document.getElementById("job1").innerHTML = parseFloat(HolyLight[1]) + parseFloat(DemonBane[1]) + parseFloat(Heal[1]) + parseFloat(Teleport[1]) + parseFloat(Blessing[1]) + parseFloat(SignumCrucis[1]) + parseFloat(Angelus[1]) + parseFloat(IncreaseAgility[1]) + parseFloat(KyrieEleison[1]) ;
	document.getElementById("job2").innerHTML = parseFloat(Magnificat[1]) + parseFloat(Resurection[1]) + parseFloat(Sanctuary[1]) + parseFloat(MaceMastery[1]) + parseFloat(Recovery[1]) + parseFloat(ImpositioManus[1]) + parseFloat(TurnUndead[1]) + parseFloat(Pneuma[1]) + parseFloat(HolyJudgment[1]) + parseFloat(Aspersio[1]) + parseFloat(ZenHeart[1]) + parseFloat(MagnusExorcismus[1]) + parseFloat(SafetyWall[1]) + parseFloat(Gloria[1]) ;
	document.getElementById("job3").innerHTML = parseFloat(Meditatio[1]) + parseFloat(Assumptio[1]) + parseFloat(LexDivina[1]) + parseFloat(Judex[1]) + parseFloat(AdvancedMaceMastery[1]) + parseFloat(ManaRecharge[1]) + parseFloat(Suffragium[1]) + parseFloat(LexAeterna[1]) + parseFloat(Basilica[1]) + parseFloat(HolyWard[1]) ;

	// SHOW
	if (DemonBane[1] >= 5) { document.getElementById("SignumCrucis").setAttribute("style", "display:block"); }
	if (Heal[1] >= 5) { document.getElementById("Angelus").setAttribute("style", "display:block"); }
	if (Angelus[1] >= 5) { document.getElementById("KyrieEleison").setAttribute("style", "display:block"); }
	if (Blessing[1] >= 5) { document.getElementById("IncreaseAgility").setAttribute("style", "display:block"); }
	if (Resurection[1] >= 1) { document.getElementById("TurnUndead").setAttribute("style", "display:block"); }
	if (TurnUndead[1] >= 5) { document.getElementById("MagnusExorcismus").setAttribute("style", "display:block"); }
	if (MaceMastery[1] >= 5) { document.getElementById("HolyJudgment").setAttribute("style", "display:block"); }
	if (ZenHeart[1] >= 5) { document.getElementById("Meditatio").setAttribute("style", "display:block"); }
	if (Meditatio[1] >= 5) { document.getElementById("ManaRecharge").setAttribute("style", "display:block"); }
	if (Assumptio[1] >= 5) { document.getElementById("Suffragium").setAttribute("style", "display:block"); }
	if (LexDivina[1] >= 5) { document.getElementById("LexAeterna").setAttribute("style", "display:block"); }
	if (KyrieEleison[1] >= 5) { document.getElementById("Basilica").setAttribute("style", "display:block"); }
}

function decNumber(skill) {
	i = skill[1]
        if (skill[1] > 0) {
        	--i;
		skill[1] = i;
        } else if (skill[1] = 0) {
        	skill[1] = skill[2];
        }
        document.getElementById(skill[0]).innerHTML = i;

	// JOB LEVEL
	document.getElementById("job1").innerHTML = parseFloat(HolyLight[1]) + parseFloat(DemonBane[1]) + parseFloat(Heal[1]) + parseFloat(Teleport[1]) + parseFloat(Blessing[1]) + parseFloat(SignumCrucis[1]) + parseFloat(Angelus[1]) + parseFloat(IncreaseAgility[1]) + parseFloat(KyrieEleison[1]) ;
	document.getElementById("job2").innerHTML = parseFloat(Magnificat[1]) + parseFloat(Resurection[1]) + parseFloat(Sanctuary[1]) + parseFloat(MaceMastery[1]) + parseFloat(Recovery[1]) + parseFloat(ImpositioManus[1]) + parseFloat(TurnUndead[1]) + parseFloat(Pneuma[1]) + parseFloat(HolyJudgment[1]) + parseFloat(Aspersio[1]) + parseFloat(ZenHeart[1]) + parseFloat(MagnusExorcismus[1]) + parseFloat(SafetyWall[1]) + parseFloat(Gloria[1]) ;
	document.getElementById("job3").innerHTML = parseFloat(Meditatio[1]) + parseFloat(Assumptio[1]) + parseFloat(LexDivina[1]) + parseFloat(Judex[1]) + parseFloat(AdvancedMaceMastery[1]) + parseFloat(ManaRecharge[1]) + parseFloat(Suffragium[1]) + parseFloat(LexAeterna[1]) + parseFloat(Basilica[1]) + parseFloat(HolyWard[1]) ;

	// HIDE
	if (DemonBane[1] < 5) { SignumCrucis[1] = 0; document.getElementById(SignumCrucis[0]).innerHTML = 0; document.getElementById("SignumCrucis").setAttribute("style", "display:none"); }
	if (Heal[1] < 5) { Angelus[1] = 0; document.getElementById(Angelus[0]).innerHTML = 0; document.getElementById("Angelus").setAttribute("style", "display:none"); }
	if (Angelus[1] < 5) { KyrieEleison[1] = 0; document.getElementById(KyrieEleison[0]).innerHTML = 0; document.getElementById("KyrieEleison").setAttribute("style", "display:none"); }
	if (Blessing[1] < 5) { IncreaseAgility[1] = 0; document.getElementById(IncreaseAgility[0]).innerHTML = 0; document.getElementById("IncreaseAgility").setAttribute("style", "display:none"); }
	if (Resurection[1] < 1) { TurnUndead[1] = 0; document.getElementById(TurnUndead[0]).innerHTML = 0; document.getElementById("TurnUndead").setAttribute("style", "display:none"); }
	if (TurnUndead[1] < 5) { MagnusExorcismus[1] = 0; document.getElementById(MagnusExorcismus[0]).innerHTML = 0; document.getElementById("MagnusExorcismus").setAttribute("style", "display:none"); }
	if (MaceMastery[1] < 5) { HolyJudgment[1] = 0; document.getElementById(HolyJudgment[0]).innerHTML = 0; document.getElementById("HolyJudgment").setAttribute("style", "display:none"); }
	if (ZenHeart[1] < 5) { Meditatio[1] = 0; document.getElementById(Meditatio[0]).innerHTML = 0; document.getElementById("Meditatio").setAttribute("style", "display:none"); }
	if (Meditatio[1] < 5) { ManaRecharge[1] = 0; document.getElementById(ManaRecharge[0]).innerHTML = 0; document.getElementById("ManaRecharge").setAttribute("style", "display:none"); }
	if (Assumptio[1] < 5) { Suffragium[1] = 0; document.getElementById(Suffragium[0]).innerHTML = 0; document.getElementById("Suffragium").setAttribute("style", "display:none"); }
	if (LexDivina[1] < 5) { LexAeterna[1] = 0; document.getElementById(LexAeterna[0]).innerHTML = 0; document.getElementById("LexAeterna").setAttribute("style", "display:none"); }
	if (KyrieEleison[1] < 5) { Basilica[1] = 0; document.getElementById(Basilica[0]).innerHTML = 0; document.getElementById("Basilica").setAttribute("style", "display:none"); }
}


const queryString = window.location.search;
console.log(queryString);
//md5
const urlParams = new URLSearchParams(queryString);

Heal[1] = urlParams.get('Heal'); 
document.getElementById(Heal[0]).innerHTML = urlParams.get('Heal');


