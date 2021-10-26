import express from "express"; // express import
import { selectSql, updateSql } from "../database/sql"; // selectSql, updateSql import
const router = express.Router(); // express router
// 기존 입력 값 불러오기
router.get('/employee', async (req,res) => {  // /update/employee 
    const emp_res = await selectSql.getEmployee(); // selectSql.getEmployee로 employee 정보 확인
    res.render('updateEmployee',{ // updateEmployee.hbs에 title와 emp_res 전달
        title: "직원 테이블 갱신",
        emp_res
    });
});
router.get('/department', async (req,res) => { // /update/department
    const dept_res = await selectSql.getDepartment(); // selectSql.getDepartment로 Department 정보 확인
    res.render('updateDepartment',{ // updateDepartment.hbs에 title와 dept_res 전달
        title: "부서 테이블 갱신",
        dept_res
    });
});
// 수정 버튼을 눌럿을 경우 update query를 실행하여 조회페이지로 이동
router.post('/employee', async (req,res) => { // employee 전달
    const vars = req.body;
    console.log(vars.salary);
    const data ={ // data에 salary 전달
        Salary: vars.salary,
    }
    await updateSql.updateEmployee(data); // updateSql.updateEmployment에 dat
    res.redirect('/select'); // select 화면으로 이동
});
// 수정 버튼을 눌럿을 경우 update query를 실행하여 조회페이지로 이동
router.post('/department', async (req,res) => {
    const vars = req.body; // request의 body에서 vars에 전달
    console.log(vars.Dname); // dname을 출력
    const data ={ // data에 dname 전달
        Dname: vars.dname,
    }
    await updateSql.updateDepartment(data); // updateSql.updateDepartment에 data전달
    res.redirect('/select'); // select 화면으로 이동
});
module.exports = router;