import express from "express";
import { calculateBmi } from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";

const app = express();
app.use(express.json());

app.get("/bmi", (req, res) => {
  const { height, weight } = req.query;
  try {
    if (!height || !weight) {
      throw new Error("Please enter the height and weight");
    }

    if (isNaN(Number(height)) || isNaN(Number(weight))) {
      throw new Error("malformatted parameters");
    }

    const result = calculateBmi(Number(height), Number(weight));

     res.json({
      weight,
      height,
      bmi: result,
    });
  } catch (error: unknown) {
    let errorMessage = "Something bad happened.";
    if (error instanceof Error) {
      errorMessage += " Error: " + error.message;
    }
     res.status(400).json({ error: errorMessage });
  }
});

app.post("/exercises",(req,res)=>{
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const {daily_exercises, target} = req.body;
  const days = daily_exercises as number[];

  try {
    console.log(target);
    if (!daily_exercises || !target) {
      throw new Error("parameters missing" );
    }

    if (!days.every((number) => !isNaN(Number(number)))) {
      throw new Error("malformatted parameters" );
    }


    const areAllNumbers = days.every((day)=> isNaN(day));
    

    console.log("son numeros?",areAllNumbers);

    const result = calculateExercises(days, Number(target));
     res.json(result);
  } catch (error: unknown) {
    let errorMessage = "Something bad happened.";
    if (error instanceof Error) {
      errorMessage += " Error: " + error.message;
    }
    console.log(errorMessage);
     res.status(400).json({ error: errorMessage });
  }
});


const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});

