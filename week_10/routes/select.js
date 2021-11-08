
import express from "express"; // express import
import { selectSql } from "../database/sql"; // selectSql import

const router = express.Router(); // express router

router.get('/', async function(req, res) { 
    // department와 student 에 db에서 select 후 전달
    const department = await selectSql.getDepartment();
    const student = await selectSql.getStudent();
    res.render('select', { // select.hbs render
        title: "IT 공대", // title it공대
        title1: "학생", // title1 학생
        department, // department
        student // student
    });
});

module.exports = router;