// module import express, morgan, path
import express from "express";
import logger from "morgan";
import path from "path";
// routes 에 login, select, delete.js 참조
import loginRouter from "../routes/login";
import selectRouter from "../routes/select";
import deleteRouter from "../routes/delete";
// port번호 3000
const PORT = 3000; 
// express , http 기능 래핑하는 것, 서버와 연결 객체이름 app
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());  // json방식으로 web에서 사용

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs') // hbs 사용
app.use(logger("dev")); // logger 사용

// route설정, 주소 설정
app.use('/', loginRouter); // loginRouter -> / 
app.use('/select', selectRouter); // selectRouter -> /select
app.use('/delete', deleteRouter); // deleteRouter -> /delete

app.listen(PORT, () => { // listen으로 server실행
    console.log(`Example app listening at http://localhost:${PORT}`)
})