var i = 0;
var job1 = 0;
var job2 = 0;
var job3 = 0;
console.log("test")
/*
 * [Id, currentLevel, maxLevel]
 */
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


/*
 * Function to refresh jobLevel
 */
function jobLevel() {
	document.getElementById("job1").innerHTML = parseFloat(HolyLight[1]) + parseFloat(DemonBane[1]) + parseFloat(Heal[1]) + parseFloat(Teleport[1]) + parseFloat(Blessing[1]) + parseFloat(SignumCrucis[1]) + parseFloat(Angelus[1]) + parseFloat(IncreaseAgility[1]) + parseFloat(KyrieEleison[1]) ;
	document.getElementById("job2").innerHTML = parseFloat(Magnificat[1]) + parseFloat(Resurection[1]) + parseFloat(Sanctuary[1]) + parseFloat(MaceMastery[1]) + parseFloat(Recovery[1]) + parseFloat(ImpositioManus[1]) + parseFloat(TurnUndead[1]) + parseFloat(Pneuma[1]) + parseFloat(HolyJudgment[1]) + parseFloat(Aspersio[1]) + parseFloat(ZenHeart[1]) + parseFloat(MagnusExorcismus[1]) + parseFloat(SafetyWall[1]) + parseFloat(Gloria[1]) ;
	document.getElementById("job3").innerHTML = parseFloat(Meditatio[1]) + parseFloat(Assumptio[1]) + parseFloat(LexDivina[1]) + parseFloat(Judex[1]) + parseFloat(AdvancedMaceMastery[1]) + parseFloat(ManaRecharge[1]) + parseFloat(Suffragium[1]) + parseFloat(LexAeterna[1]) + parseFloat(Basilica[1]) + parseFloat(HolyWard[1]) ;
}

/*
 * Function to show skill with prerequis
 */
function showSkill() {
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

/*
 * Function to hide skill without prerequis
 */
function hideSkill() {
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

/*
 * Function to increment skill level
 */
function incNumber(skill) {
	i = skill[1]		
        if (skill[1] < skill[2]) {
        	i++;
		skill[1] = i;
        } else if (skill[1] = skill[2]) {
        	skill[1] = skill[2];
        }
	document.getElementById(skill[0]).innerHTML = i;
	jobLevel();
	showSkill();
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
        document.getElementById(skill[0]).innerHTML = i;
	jobLevel();
	hideSkill();
}

function shareLink() {
	var q_param = "?";
	q_param += ( HolyLight[1] === 0 ) ? "":"\"&HolyLight=\" + HolyLight[1]";
	q_param += ( DemonBane[1] === 0 ) ? "":"\"&DemonBane=\" + DemonBane[1]";
	//q_path = location.protocol + '//' + location.host + location.pathname + "?" + "&HolyLight=" + HolyLight[1] + "&DemonBane=" + DemonBane[1] + "&Heal=" + Heal[1] + "&Teleport=" + Teleport[1] + "&Blessing=" + Blessing[1] + "&SignumCrucis=" + SignumCrucis[1] + "&Angelus=" + Angelus[1] + "&IncreaseAgility=" + IncreaseAgility[1] + "&KyrieEleison=" + KyrieEleison[1] + "&Magnificat=" + Magnificat[1] + "&Resurection=" + Resurection[1] + "&Sanctuary=" + Sanctuary[1] + "&MaceMastery=" + MaceMastery[1] + "&Recovery=" + Recovery[1] + "&ImpositioManus=" + ImpositioManus[1] + "&TurnUndead=" + TurnUndead[1] + "&Pneuma=" + Pneuma[1] + "&HolyJudgment=" + HolyJudgment[1] + "&Aspersio=" + Aspersio[1] + "&ZenHeart=" + ZenHeart[1] + "&MagnusExorcismus=" + MagnusExorcismus[1] + "&SafetyWall=" + SafetyWall[1] + "&Gloria=" + Gloria[1] + "&Meditatio=" + Meditatio[1] + "&Assumptio=" + Assumptio[1] + "&LexDivina=" + LexDivina[1] + "&Judex=" + Judex[1] + "&AdvancedMaceMastery=" + AdvancedMaceMastery[1] + "&ManaRecharge=" + ManaRecharge[1] + "&Suffragium=" + Suffragium[1] + "&LexAeterna=" + LexAeterna[1] + "&Basilica=" + Basilica[1] + "&HolyWard=" + HolyWard[1]
	//q_path = location.protocol + '//' + location.host + location.pathname + "?" + ( HolyLight[1] === 0 ) ? "":"\"&HolyLight=\" + HolyLight[1]" + "&DemonBane=" + DemonBane[1] + "&Heal=" + Heal[1] + "&Teleport=" + Teleport[1] + "&Blessing=" + Blessing[1] + "&SignumCrucis=" + SignumCrucis[1] + "&Angelus=" + Angelus[1] + "&IncreaseAgility=" + IncreaseAgility[1] + "&KyrieEleison=" + KyrieEleison[1] + "&Magnificat=" + Magnificat[1] + "&Resurection=" + Resurection[1] + "&Sanctuary=" + Sanctuary[1] + "&MaceMastery=" + MaceMastery[1] + "&Recovery=" + Recovery[1] + "&ImpositioManus=" + ImpositioManus[1] + "&TurnUndead=" + TurnUndead[1] + "&Pneuma=" + Pneuma[1] + "&HolyJudgment=" + HolyJudgment[1] + "&Aspersio=" + Aspersio[1] + "&ZenHeart=" + ZenHeart[1] + "&MagnusExorcismus=" + MagnusExorcismus[1] + "&SafetyWall=" + SafetyWall[1] + "&Gloria=" + Gloria[1] + "&Meditatio=" + Meditatio[1] + "&Assumptio=" + Assumptio[1] + "&LexDivina=" + LexDivina[1] + "&Judex=" + Judex[1] + "&AdvancedMaceMastery=" + AdvancedMaceMastery[1] + "&ManaRecharge=" + ManaRecharge[1] + "&Suffragium=" + Suffragium[1] + "&LexAeterna=" + LexAeterna[1] + "&Basilica=" + Basilica[1] + "&HolyWard=" + HolyWard[1]
	q_path = location.protocol + '//' + location.host + location.pathname + q_param;
	console.log(q_path);
	navigator.clipboard.writeText(q_path);
	
	document.getElementById("alarmmsg").innerHTML = "<...Link added into clipboard...>";
	setTimeout(function(){ document.getElementById("alarmmsg").innerHTML = '';}, 1000);
}

function reset() {
	window.location.href = location.protocol + '//' + location.host + location.pathname
}

/*
 * Get Parameters from URI
 */
const queryString = window.location.search;
//console.log(queryString);
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
showSkill();


/*
 * Get Modal
 */
var modal = document.getElementById("myModal"); // Get the modal
var btn = document.getElementById("myBtn"); // Get the button that opens the modal
var span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal
btn.onclick = function() { modal.style.display = "block"; } // When the user clicks the button, open the modal 
span.onclick = function() { modal.style.display = "none"; } // When the user clicks on <span> (x), close the modal
window.onclick = function(event) { if (event.target == modal) { modal.style.display = "none"; } } // When the user clicks anywhere outside of the modal, close it
