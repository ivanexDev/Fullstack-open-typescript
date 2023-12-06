import { argv } from "process";

interface MultiplyValues {
    target: number;
    week: number[];
  }

interface Result {
    periodLength: number,
    trainingDays: number,
    target: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    average: number
    }

const parseArguments = (args: string[]): MultiplyValues => {
    if (args.length < 4) throw new Error('Not enough arguments');
    
    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        const [,,target,...rest] = argv
        const toNumberWeek = rest.map(e=> Number(e))
        toNumberWeek.forEach((elemento, indice) => {
            if (isNaN(elemento)) {
              throw new Error("Some of the values is Not a Number")
            }})
        return {
        target: Number(args[2]),
        week: toNumberWeek
        }
    } else {
        throw new Error('Provided values were not numbers!');
    }
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
        if (value === 1) {
            return "So bad, you can do more";
        } else if (value === 2) {
            return 'not too bad but could be better';
        } else if (value === 3) {
            return "Congrats! you did it!!";
        } else {
            return "Unknown rating"; // Handle all possible cases
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

    console.log(result)


}


try {
    const { week, target } = parseArguments(process.argv);
    calculateExercises(week,target)
  } catch (error: unknown) {
    let errorMessage = 'Something bad happened.'
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
  }