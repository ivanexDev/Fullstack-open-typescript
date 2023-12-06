import express from 'express';
import { calculateBmi } from './bmiCalculator';

const app = express();

app.get('/bmi', (req, res) => {
    const { height, weight } = req.query
    try {

        if(!height || !weight){
            throw new Error('Please enter the height and weight');
        }

        if(isNaN(Number(height)) || isNaN(Number(weight))){
            throw new Error("malformatted parameters");
        }

        const result = calculateBmi(Number(height), Number(weight))

        res.json({
            weight,
            height,
            bmi: result
        })

      } catch (error: unknown) {
        let errorMessage = 'Something bad happened.'
        if (error instanceof Error) {
          errorMessage += ' Error: ' + error.message;
        }
        console.log(errorMessage);
        res.status(400).json({error: errorMessage})
      }

});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});