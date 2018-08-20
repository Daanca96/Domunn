function Cambiar(x) {
    "use strict";
    document.getElementById("Ordenes").style.display = "none";
    document.getElementById("Colores").style.display = "none";
    //document.getElementById("disenador").style.display = "none";
    //document.getElementById("compras").style.display = "none";
    //document.getElementById("registro").style.display = "none";
    //document.getElementById("login").style.display = "none";
    
    document.getElementById(x).style.display = "block";
}

function mensaje(m){
	if(annyang){
		var commands ={
			'domun *valor':function(valor){
				$("#parametro").val(valor);
				if (valor =='siguiente'){
					adelante();
				}
			}
		};
		annyang.addCommands(commands);
		annyang.setLanguage("es");
		annyang.start();
		 console.log("hola 1");
	}console.log("hola 2");
	alert(m);
}

function hablar2(z,idioma){
var artyom = new Artyom();

if (idioma == 'i'){
    artyom.say(z,{
    lang:"en-US",
    });
} else {
    artyom.say(z,{
    lang:"es-ES",
    });
}
}


function hablar(x){  //ingles
    var speechSynthesisUtterance = new SpeechSynthesisUtterance(x); 
    speechSynthesisUtterance.lang = 'en-EN';
     speechSynthesisUtterance.rate = document.getElementById("rate").value; // 0.1 to 10
     speechSynthesisUtterance.volume = document.getElementById("volume").value; //0 to 2
    window.speechSynthesis.speak(speechSynthesisUtterance);
}

var num = 0;
var verbos           = ['levantarse/surgir',  'despertarse',  'ser/estar',    'soportar/llevar',  'golpear/vencer',   'llegar a ser/convertirse', 'empezar',  'doblar/flexionar', 'apostar',  'vendar/encuadernar',   'morder',   'sangrar',  'soplar',   'romper',   'traer/llevar', 'emitir',   'construir',    'comprar',  'echar/arrojar',    'coger/atrapar',    'elegir',   'aferrarse/agarrarse',  'venir',    'costar',   'deslizarse/trepar',    'cortar',   'tratar',   'cavar/excavar',    'hacer',    'dibujar',  'soñar',    'beber',    'conducir', 'morar',    'comer',    'caer', 'alimentar',    'sentir',   'luchar',   'encontrar',    'encajar/ ajustar', 'huir', 'arrojar',  'volar',    'prohibir', 'prever/ predecir', 'olvidar',  'congelar(se)', 'obtener',  'dar',  'ir',   'crecer/ cultivar', 'colgar',   'tener',    'oir',  'ocultar(se)',  'golpear',  'sostener/ coger',  'herir',    'guardar/ quedarse',    'arrodillarse', 'tejer/ hacer punto',   'saber/ conocer',   'colocar/ poner',   'guiar/ llevar',    'apoyar(se)',   'saltar',   'aprender', 'dejar/ salir', 'prestar',  'dejar/ permitir',  'estar tumbado',    'encender', 'perder',   'hacer/ fabricar',  'significar',   'encontrarse/ conocer', 'cortar/ segar',    'pagar',    'probar/ demostrar',    'poner',    'dejar',    'leer', 'montar/ cabalgar', 'sonar/tocar timbre/teléfono',  'levantarse',   'correr',   'serrar',   'decir',    'ver',  'buscar',   'vender',   'enviar',   'poner',    'coser',    'agitar',   'esquilar', 'verter/ derramar', 'brillar',  'disparar/ filmar', 'mostrar',  'encoger(se)',  'cerrar',   'cantar',   'hundir(se)',   'sentarse', 'dormir',   'resbalarse',   'tirar/ arrojar',   'oler', 'sembrar',  'hablar',   'conducir a mucha velocidad',   'deletrear',    'gastar/ pasar tiempo', 'girar',    'escupir',  'derramar', 'dividir',  'estropear',    'extender/ untar',  'brotar/ nacer',    'estar de pie', 'robar',    'pegar/ encajarse', 'apestar',  'golpear',  'picar (insecto)',  'esforzarse/ luchar',   'jurar',    'barrer',   'hinchar(se)',  'nadar',    'balancear',    'coger',    'enseñar',  'rasgar',   'decir',    'pensar',   'lanzar',   'empujar',  'pisar',    'comprender',   'despertar(se)',    'llevar puesto',    'tejer',    'llorar',   'mojar',    'ganar',    'enrollar/ dar cuerda', 'torcer/ retorcer', 'escribir'];
var infinitivo       = ['arose',   'awoke',    'was/were', 'bore', 'beat', 'became',   'began',    'bent', 'bet',  'bound',    'bit',  'bled', 'blew', 'broke',    'brought',  'broadcast',    'built',    'bought',   'cast', 'caught',   'chose',    'clung',    'came', 'cost', 'crept',    'cut',  'dealt',    'dug',  'did',  'drew', 'dreamt/dreamed',   'drank',    'drove',    'dwelt/dwelled',    'ate',  'fell', 'fed',  'felt', 'fought',   'found',    'fit/fitted',   'fled', 'flung',    'flew', 'forbade',  'forecast', 'forgot',   'froze',    'got',  'gave', 'went', 'grew', 'hung/hanged',  'had',  'heard',    'hid',  'hit',  'held', 'hurt', 'kept', 'knelt/kneeld', 'knit/knitted', 'knew', 'laid', 'led',  'leant/leaned', 'leapt/leaped', 'learnt/learned',   'left', 'lent', 'let',  'lay',  'lit',  'lost', 'made', 'meant',    'met',  'mowed',    'paid', 'proved',   'put',  'quit', 'read /red/',   'rode', 'rang', 'rose', 'ran',  'sawed',    'said', 'saw',  'sought',   'sold', 'sent', 'set',  'sewd', 'shook',    'sheared',  'shed', 'shone',    'shot', 'showed',   'shrank',   'shut', 'sang', 'sank', 'sat',  'slept',    'slid', 'slung',    'smelt/smelled',    'sowed',    'spoke',    'sped/speeded', 'spelt/spelled',    'spent',    'spun/span',    'spit/spat',    'spilt/spilled',    'split',    'spoilt',   'spread',   'sprang',   'stood',    'stole',    'stuck',    'stank',    'struck',   'stung',    'strove',   'swore',    'swept',    'swelled',  'swam', 'swung',    'took', 'taught',   'tore', 'told', 'thought',  'threw',    'thrust',   'trod', 'understood',   'woke', 'wore', 'wove', 'wept', 'wet/wetted',   'won',  'wound',    'wrung',    'wrote'];
var pasado_simple    = ['arisen',  'awoken',   'been', 'born', 'beaten',   'become',   'begun',    'bent', 'bet',  'bound',    'bitten',   'bled', 'blown',    'broken',   'brought',  'broadcast',    'built',    'bought',   'cast', 'caught',   'chosen',   'clung',    'come', 'cost', 'crept',    'cut',  'dealt',    'dug',  'done', 'drawn',    'dreamt /dreamed',  'drunk',    'driven',   'dwelt/dwelled',    'eaten',    'fallen',   'fed',  'felt', 'fought',   'found',    'fit/fitted',   'fled', 'flung',    'flown',    'forbidden',    'forecast', 'forgotten',    'frozen',   'got',  'given',    'gone', 'grown',    'hung/hanged',  'had',  'heard',    'hidden',   'hit',  'held', 'hurt', 'kept', 'knelt/kneeled',    'knit/knitted', 'known',    'laid', 'led',  'leant/leaned', 'leapt/leaped', 'learnt/learned',   'left', 'lent', 'let',  'lain', 'lit',  'lost', 'made', 'meant',    'met',  'mown/mowed',   'paid', 'proven/proved',    'put',  'quit', 'read /red/',   'ridden',   'rung', 'risen',    'run',  'sawn/sawed',   'said', 'seen', 'sought',   'sold', 'sent', 'set',  'sewn/sewed',   'shaken',   'shorn/sheared',    'shed', 'shone',    'shot', 'shown',    'shrunk',   'shut', 'sung', 'sunk', 'sat',  'slept',    'slid', 'slung',    'smelt/smelled',    'sown/sowed',   'spoken',   'sped/speeded', 'spelt/spelled',    'spent',    'spun', 'spit/spat',    'spilt/spilled',    'split',    'spoilt',   'spread',   'sprung',   'stood',    'stolen',   'stuck',    'stunk',    'struck',   'stung',    'striven',  'sworn',    'swept',    'swollen/swelled',  'swum', 'swung',    'taken',    'taught',   'torn', 'told', 'thought',  'thrown',   'thrust',   'trodden',  'understood',   'woken',    'worn', 'woven/weaved', 'wept', 'wet/wetted',   'won',  'wound',    'wrung',    'written'];
var pasado_participio= ['arise', 'awake',    'be',   'bear', 'beat', 'become',   'begin',    'bend', 'bet',  'bind', 'bite', 'bleed',    'blow', 'break',    'bring',    'broadcast',    'build',    'buy',  'cast', 'catch',    'choose',   'cling',    'come', 'cost', 'creep',    'cut',  'deal', 'dig',  'do',   'draw', 'dream',    'drink',    'drive',    'dwell',    'eat',  'fall', 'feed', 'feel', 'fight',    'find', 'fit',  'flee', 'fling',    'fly',  'forbid',   'forecast', 'forget',   'freeze',   'get',  'give', 'go',   'grow', 'hang', 'have', 'hear', 'hide', 'hit',  'hold', 'hurt', 'keep', 'kneel',    'knit', 'know', 'lay',  'lead', 'lean', 'leap', 'learn',    'leave',    'lend', 'let',  'lie',  'light',    'lose', 'make', 'mean', 'meet', 'mow',  'pay',  'prove',    'put',  'quit', 'read', 'ride', 'ring', 'rise', 'run',  'saw',  'say',  'see',  'seek', 'sell', 'send', 'set',  'sew',  'shake',    'shear',    'shed', 'shine',    'shoot',    'show', 'shrink',   'shut', 'sing', 'sink', 'sit',  'sleep',    'slide',    'sling',    'smell',    'sow',  'speak',    'speed',    'spell',    'spend',    'spin', 'spit', 'spill',    'split',    'spoil',    'spread',   'spring',   'stand',    'steal',    'stick',    'stink',    'strike',   'sting',    'strive',   'swear',    'sweep',    'swell',    'swim', 'swing',    'take', 'teach',    'tear', 'tell', 'think',    'throw',    'thrust',   'tread',    'understand',   'wake', 'wear', 'weave',    'weep', 'wet',  'win',  'wind', 'wring',    'write']

function adelante(){
    //var es = ["Levantarse", "Sentarse", "Manos Arriba","Manos abajo","Leer"];
    //var en = ["Stand Up"  , "Sit Down", "Hands Up"    ,"Hands Down","Read"];
    num++;
    if (num>151)
        num=1;
   // var foto=document.getElementById("foto");
   // foto.src="img/ordenes/"+num+".png";
    //es_orders.innerHTML = es[num];
    //en_orders.innerHTML = en[num];

    verb.innerHTML = verbos[num];
    Infinitivo.value = infinitivo[num];
    Pasado_s.value = pasado_simple[num];
    Pasado_p.value = pasado_participio[num];
}

function atras(){
    //var es = ["Levantarse", "Sentarse", "Manos Arriba","Manos abajo","Leer"];
    //var en = ["Stand Up"  , "Sit Down", "Hands Up"    ,"Hands Down","Read"];
    num--;
    if (num<0)
        num=151;
    //var foto=document.getElementById("foto");
    //foto.src="img/ordenes/"+num+".png";
    //es_orders.innerHTML = es[num];
    //en_orders.innerHTML = en[num];
    verb.innerHTML = verbos[num];
    Infinitivo.value = infinitivo[num];
    Pasado_s.value = pasado_simple[num];
    Pasado_p.value = pasado_participio[num];
}




        function habilitar()
        {
            var checkbox = document.getElementById("menu-bar");
checkbox.addEventListener("change", validaCheckbox, false);
 
             var checked = checkbox.checked;;
                if(checked){
                    document.getElementById("menu-bar").checked=false;
                }else
                {document.getElementById("menu-bar").checked=true;
                 alert('checkbox esta seleccionado');}
        }





function Buscar() {
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('Verbos_Domun');

db.serialize(function() {
  db.each("SELECT ROWID AS id, Verbo FROM Verbs", function(err, row) {
      console.log(row.id + ": " + row.Verbo);
  });
});

db.close();

}






 function talk() {

                var msg = new SpeechSynthesisUtterance();
                msg.lang = 'es-ES';
                msg.text = document.getElementById("text").value;
                msg.volume = 1; // 0 to 1
                msg.rate = document.getElementById("rate").value; // 0.1 to 10
                msg.pitch = document.getElementById("pitch").value; //0 to 2
                msg.volume = document.getElementById("volume").value; //0 to 2
                window.speechSynthesis.speak(msg);

                msg.onstart = function (e) {
                    document.getElementById("msj").innerHTML = 'Hablando...';
                    console.log('Hablando...');
                };

                msg.onend = function (e) {
                    document.getElementById("msj").innerHTML = 'Finalizado en ' + event.elapsedTime + ' segundos.';
                    console.log('Finalizado en ' + event.elapsedTime + ' segundos.');
                };
            }