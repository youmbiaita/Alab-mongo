const { Router } = require('express');
const gradesCtrl = require('../controllers/grades.js');

const router = Router();

//create a single grade entry
router.post('/', gradesCtrl.createGrade);

//get one single grade
router.get('/:id', gradesCtrl.getgradeOne);

//add a score to a grade
router.patch("/:id/add", gradesCtrl.getGradeAdd)

//delete a single grade
router.delete("/:id", gradesCtrl.deleteGrade)

//get route for backward
router.get("/student/:id", gradesCtrl.getGradeLearner)

//get learner grade
router.get("/learner/:id", gradesCtrl.getGradeLearner)

//delete one grade by learner ID
router.delete("/learner/:id", gradesCtrl.deleteLearner)

//get a class grade
router.get("/class/:id", gradesCtrl.getClassGrade)

//update class
router.patch("/class/:id", gradesCtrl.updateClassGrade)

//delete class
router.delete("/class/:id", gradesCtrl.deleteClassGrade)


module.exports = router;