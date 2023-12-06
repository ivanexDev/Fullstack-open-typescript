function calculateBmi(height:number , weight: number){
    const CM_TO_MTS = (height)/100
    const imc = (weight/Math.pow(CM_TO_MTS,2))
    if(imc < 18.5) return "under weight"
    if(imc > 18.5 && imc < 24.99 ) return "Normal (healthy weight)"
    if(imc > 24.99) return "overweight"
}



console.log(calculateBmi(180, 90))