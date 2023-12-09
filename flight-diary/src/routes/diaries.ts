import toNewDiaryEntry  from "../utils";
import express from "express";
import diaryServices from "../services/diaryService";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(diaryServices.getNonSensitiveEntries());
});

router.post("/", (req, res) => {

  try {
    const newDiaryEntry = toNewDiaryEntry(req.body);
    const addEntry = diaryServices.addEntry(newDiaryEntry);
    res.json(addEntry);
    
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }

    
  }




);

router.get("/:id", (req, res) => {
  const diary = diaryServices.findById(Number(req.params.id));

  if (diary) {
    res.send(diary);
  } else {
    res.sendStatus(404);
  }
});

export default router;
