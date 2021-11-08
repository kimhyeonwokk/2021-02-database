import express from "express"; // express import
import { selectSql } from "../database/sql"; // selectSql import
const router = express.Router(); // express router
router.get('/', (req , res)=>{
    res.render('login'); // login.hbs render
});
// 입력값 처리, 로그인누를 시에 post로 전달받음
router.post('/',async (req, res)=>{
    // vars에 req.body 전달
    const vars = req.body;
    // 저장된 user에 대한 정보를 selectSql로 전달
    const users = await selectSql.getUsers();
    let whoAmi = ''; // admin, user구분 
    let checkLogin = false; // false
    users.map((user)=>{ // map으로 login check
        console.log(user.Id); // user의 Id출력
        // user의 id와 password가 모두 같을 경우 로그인 성공
        if(vars.id === user.Id && vars.password === user.Password){
            console.log('login success!'); // login success출력
            checkLogin = true; // true로 변환
            if(vars.id === 'admin'){ // vars의 id가 admin이면 whoami에 admin
                whoAmi ='admin';
            } else { // vars의 id가 admin이 아니면 user로 설정
                whoAmi ='user';
            }
        }
    })
    if(checkLogin && whoAmi === 'admin'){ // login true, whoami가 admin 일 경우
        res.redirect('/delete'); // /delete 로 이동
    } else if (checkLogin && whoAmi === 'user'){ // login true, whoami가 user 일 경우 
        res.redirect('/select'); // /select 로 이동
    } else {
        // login 실패
        console.log('login falied!');
        // loing 실패 popup 출력
        res.send("<script>alert('로그인에 실패했습니다.'); location.href='/';</script>");
    }
})
module.exports = router;