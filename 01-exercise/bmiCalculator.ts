interface MultiplyValues {
    value1: number;
    value2: number;
  }
  
export  const parseArguments = (args: string[]): MultiplyValues => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');
  
    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
      return {
        value1: Number(args[2]),
        value2: Number(args[3])
      }
    } else {
      throw new Error('Provided values were not numbers!');
    }
  }



function calculateBmi(height:number , weight: number){
    const CM_TO_MTS = (height)/100
    const imc = (weight/Math.pow(CM_TO_MTS,2))
    if(imc < 18.5) console.log("under weight")
    if(imc > 18.5 && imc < 24.99 ) console.log("Normal (healthy weight)")
    if(imc > 24.99) console.log("overweight")
}





try {
    const { value1, value2 } = parseArguments(process.argv);
    calculateBmi(value1, value2)
  } catch (error: unknown) {
    let errorMessage = 'Something bad happened.'
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
  }