interface Result {
    periodLength: number,
    trainingDays: number,
    target: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    average: number
}
function calculateExercises(week:number[], target:number){

    const getRating = (average: number)=>{

        if(average >= target){
            return 3}
        else if(average< target && average > 1){
            return 2}
        else{ 
            return 1}

        }
    
    const getRatingDescription = (average: number): string=>{
        const value = Math.round(getRating(average))
        switch (value) {
            case 1:
                return "So bad, you can do more"
            case 2:
                return 'not too bad but could be better'
            case 3:
                return "Congrats! you did it!!"
        }
    }

    const periodLength = week.length
    const trainingDays = week.filter(h => h != 0).length
    const average = week.reduce((total, currentHours)=>total += currentHours,0)/periodLength
    const ratingDescription =  getRatingDescription(average)
    const rating = getRating(average)
    const success = average >= target
    
    




const result: Result ={
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average
} 

    return result


}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1],2))