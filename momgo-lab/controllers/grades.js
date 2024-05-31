const Grade = require('../models/Grade');

module.exports = {
    createGrade,
    getgradeOne,
    getGradeAdd,
    deleteGrade,
    // getGradeLearner,
    // deleteLearner,
    // getClassGrade,
    // updateClassGrade,
    // deleteClassGrade
}

//Get the weighted average of a specified learner's grades, per class
async function createGrade (req, res) {
    try {
        const newDocument = req.body;
         // rename fields for backwards compatibility
        if (newDocument.student_id) {
            //If there is a student_id field, we create a learner_id field and give it the same value of the student_id field
            newDocument.learner_id = newDocument.student_id;
            // We delete the student_id field from the object where we only have the learner_id field
            delete newDocument.student_id;
          }
          const grade = await Grade.create(newDocument)
          res.status(200).json(grade)
    } catch (err) {
        res.send(err.message).status(err.status ? err.status : 400);
    }
}

// get single grade
async function  getgradeOne(req, res) {
    try {
        const id = req.params.id;
        const grade = await Grade.findById(id)
        res.status(200).json(grade)
    } catch (err) {
        res.send(err.message).status(err.status ? err.status : 400);
    }
}

//add a score to grade
async function getGradeAdd (req, res){
    try {
        const id = req.params.id;
        const grade = await Grade.findById(id)
        grade.scores.push(req.body)
        grade.save()
        res.status(200).json(grade)
    } catch (err) {
        res.send(err.message).status(err.status ? err.status : 400);
    }
}

//delete grade
async function  deleteGrade(req, res) {
    try {
        const id = req.params.id;
        const grade = await Grade.deleteById(id)
        res.status(200).json(grade)
    } catch (err) {
        res.send(err.message).status(err.status ? err.status : 400);
    }
}