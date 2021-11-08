import express from "express"; // expree import
import { selectSql , deleteSql} from "../database/sql"; // select,deleteSql import
const router = express.Router(); // express router
router.get('/', async (req, res) => { 
    // department, student 정보를 전달 받음
    const department = await selectSql.getDepartment(); 
    const student = await selectSql.getStudent(); 
    res.render('delete', { // delete.hbs에 render
        title: '삭제 기능', // title '삭제 기능'
        department, // department 전달
        student // student 전달
    }) 
});
// 입력값 처리, 삭제 버튼을 누를 시에 post로 전달 받음
router.post('/',async (req,res)=>{
    // delBtn이 undefined 인 경우 === Student table삭제
    if(req.body.delBtn === undefined){
        // delete router : 삭제하는 Ssn 출력
        console.log('delete router:',req.body.delBtn1);
        // data Ssn 전달
        const data = {
            Ssn: req.body.delBtn1,
        };
        // deleteSql에 deleteStudent에 data전달
        await deleteSql.deleteStudent(data);
        // /delete 로 이동
        res.redirect('/delete');
    }
    // delBtn이 undefined가 아닌 경우 === department table 삭제
    else{
        // delete router : 삭제하는 Dnumber 출력
        console.log('delete router:',req.body.delBtn);
        // data에 Dnumber 전달
        const data = {
            Dnumber: req.body.delBtn,
        };
        // deleteSql에 deleteDepartment에 data전달
        await deleteSql.deleteDepartment(data);
        // /delete 로 이동       
        res.redirect('/delete');
    }
});
module.exports = router;