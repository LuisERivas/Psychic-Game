var letters = [`a`,`A`,`b`,`B`,`c`,`C`,`d`,`D`,`e`,`E`,`f`,`F`,`g`,`G`,`h`,`H`,`i`,`I`,`j`,`J`,
`k`,`K`,`l`,`L`,`m`,`M`,`n`,`N`,`o`,`O`,`p`,`P`,`q`,`Q`,`r`,`R`,`s`,`S`,`t`,`T`,`u`,`U`,`v`,`V`,
`w`,`W`,`x`,`X`,`y`,`Y`,`z`,`Z`];
let totalwins = 0;
var totallosses = 0;
var guessesleft = 10;
var guessesmade = [];
/*var userinputedguess = document.onkeyup;*/
var computerchosenletter= letters[Math.floor(Math.random()*letters.length)];


function reset(){
guessesleft=10;
guessesmade= [];
computerchosenletter= letters[Math.floor(math.random()*letters.length)];
};

document.onkeyup=function(event){
    var userinputedguess=event.key;
   /* guessesmade.push(userinputedguess);*/
    console.log(userinputedguess);
    console.log(computerchosenletter);
    

    /*if(computerchosenletter==userinputedguess){
    totalwins++;
    reset();
    document.getElementById("wins").innerHTML = totalwins;
    
    /*guessesleft=10;
    guessesmade=[];
    console.log(totalguesses);
    }*/
    if(computerchosenletter!==userinputedguess){
        guessesleft--;
        document.getElementById("guessesleft").innerHTML= guessesleft;
    };    

    if(guessesleft==0){
        totallosses++;
        document.getElementById("totallosses").innerHTML=totallosses;
        reset();
    };
    if(computerchosenletter===userinputedguess){
        
        totalwins++;
        document.getElementById("wins").innerHTML = totalwins;
        reset();
    };
};

