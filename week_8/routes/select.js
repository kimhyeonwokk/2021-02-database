import express from "express"; // express import
import { selectSql } from "../database/sql"; // selectSql import

const router = express.Router(); // express router

router.get('/',async function(req, res) { // /select -> / 로 표현
    const employee = await selectSql.getEmployee(); // selectSql의 getEmployee로 불러와 저장
    const department = await selectSql.getDepartment(); // selectSql의 Department로 불러와 저장

    res.render('select',{ // select.hbs에 title1,2 employee, department 전달
        title: '직원 테이블',
        title2: '부서 테이블',
        employee,
        department
    });
});

module.exports = router;