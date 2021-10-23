// module import
import express from "express"; // express module import
import logger from "morgan"; // morgan module import
import path from "path"; // path module import
import homeRouter from "../routes/home"; // home.js 참조
import updateRouter from "../routes/update"; // update.js 참조 
import selectRouter from "../routes/select"; // select.js 참조

const PORT = 3000; // port 번호 3000

const app = express(); // express , http 기능 래핑하는 것, 서버와 연결 객체이름 app

app.use(express.urlencoded({extended: false})); 
app.use(express.json()); // json방식으로 web에서 사용

app.set('views',path.join(__dirname,'../views')) // 화면에 어떤 것을 보여주는지 설정.
app.set('view engine','hbs') // hbs 사용
app.use(logger("dev")); // log사용

// route설정, 주소설정
app.use('/',homeRouter); // home화면 -> /
app.use('/update',updateRouter); // update화면 -> /update 
app.use('/select',selectRouter); // select화면 -> /select

app.listen(PORT, () => { // listen으로 server 실행 
    console.log(`Example app listening at http://localhost:${PORT}`)
})
