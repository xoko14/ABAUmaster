function getDefinido(){
    var termos = []
    for(i=0;i<3;i++){
        var tempDef = randomItemFrom(defContemp)
        if(termos.includes(tempDef)==true){
            i--
        }
        else{
            termos.push(tempDef)
        }
    }
    for(i=0;i<3;i++){
        var tempDef = randomItemFrom(defResto)
        if(termos.includes(tempDef)==true){
            i--
        }
        else{
            termos.push(tempDef)
        }
    }

    return termos
}
function randomItemFrom(lista){
    return lista[Math.floor(Math.random() * lista.length)]
}

function getCuestionado(){
    var thisCuestions = []
    for(i=0;i<3;i++){
        var tempCuest = randomItemFrom(cuestions)
        if(thisCuestions.includes(tempCuest)==true){
            i--
        }
        else{
            thisCuestions.push(tempCuest)
        }
    }
    return thisCuestions
}

function showDef(){
    var def = getDefinido()
    document.getElementById("definitions").innerHTML = def[0] + ", " + def[1] + ", " + def[2] + ", " + def[3] + ", " + def[4] + ", " + def[5] + "."
}

function showCuest(){
    var asunto = getCuestionado()
    document.getElementById("c1").innerHTML = asunto[0] + "."
    document.getElementById("c2").innerHTML = asunto[1] + "."
    document.getElementById("c3").innerHTML = asunto[2] + "."
}
function myDebug(arrayChosen){
    document.getElementById("comentarioHist").innerHTML = arrayChosen
}