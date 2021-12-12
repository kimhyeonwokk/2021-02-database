import express from "express"; // express import
import { selectSql } from "../database/sql"; // selectSql import
const router = express.Router(); // express router
router.get('/', (req , res)=>{
    res.render('login'); // login.hbs render
});
router.post('/',async (req, res)=>{
    const vars = req.body;
    const users = await selectSql.getUsers();
    let whoAmi = '';
    let checkLogin = false; 
    users.map((user)=>{ 
        if(vars.id === user.Id && vars.password === user.Password){
            console.log('login success!');
            checkLogin = true; 
   
            if(vars.id === 'admin'){
                whoAmi ='admin';
            } else { 
                whoAmi ='user';
            }
        }
    })
    if(checkLogin && whoAmi === 'admin'){ 
        res.redirect('/admin'); 
    } else if (checkLogin && whoAmi === 'user'){
        res.redirect('/booking'); 
    } else {
        console.log('login falied!');
        res.send("<script>alert('로그인에 실패했습니다.'); location.href='/';</script>");
    }
})
module.exports = router;