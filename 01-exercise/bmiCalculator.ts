interface MultiplyValues {
  value1: number;
  value2: number;
}

export const parseArguments = (args: string[]): MultiplyValues => {
  if (args.length < 4) throw new Error("Not enough arguments");
  if (args.length > 4) throw new Error("Too many arguments");

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[2]),
      value2: Number(args[3]),
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};

export function calculateBmi(height: number, weight: number) {
  const CM_TO_MTS = height / 100;
  const imc = weight / Math.pow(CM_TO_MTS, 2);
  if (imc < 18.5) {
    const message = "under weight";
    console.log(message);
    return message;
  }
  if (imc > 18.5 && imc < 24.99) {
    const message = "Normal (healthy weight)";
    console.log(message);
    return message;
  } else {
    const message = "overweight";
    console.log(message);
    return message;
  }
}

try {
  const { value1, value2 } = parseArguments(process.argv);
  calculateBmi(value1, value2);
} catch (error: unknown) {
  let errorMessage = "Something bad happened.";
  if (error instanceof Error) {
    errorMessage += " Error: " + error.message;
  }
  console.log(errorMessage);
}
