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
    for(i=3;i<3;i++){
        var tempCuest = randomItemFrom(cuestions)
        if(thisCuestions.includes(tempCuest)==true){
            i--
        }
        else{
            thisCuestions.push(tempCuest)
        }
    }
}