import express from "express"; // express import
import { insertSql } from "../database/sql"; // insertSql import

const router = express.Router(); // express router

router.get('/',(req, res) => {
    res.render('home'); // home.hbs를 render
});

// 입력값 처리, 삽입 버튼 누를 시에 post로 전달 받음
router.post('/',(req,res) => {
    const vars = req.body;  // request에 값 전달
    const var_length = Object.keys(req.body).length; // 길이 확인

    if (var_length > 4) { // 길이가 5 이상이면 employee 
        const data = { // data변수에 employee 전달받은 값 전달
            Fname: vars.fname,
            Minit: vars.minit,
            Lname: vars.lname,
            Ssn: vars.ssn,
            Bdate: vars.bdate,
            Address: vars.address,
            Sex: vars.sex,
            Salary: vars.salary,
            Super_ssn: vars.super_ssn,
            Dno: vars.dno
        };
        insertSql.setEmployee(data); // insertSql의 setEmployee에 data 전달
    } else { // 길이가 4 이하면 department 
        const data = { // data변수에 department 전달받은 값 전달
            Dname: vars.dname,
            Dnumber: vars.dnumber,
            Mgr_ssn: vars.mgr_ssn,
            Mgr_start_date: vars.mgr_start_date
        };
        insertSql.setDepartment(data); // insertSql의 setDepartment에 data 전달
    }
    res.redirect('/'); // 새로고침
});
module.exports = router;