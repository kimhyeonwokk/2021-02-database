// module import express, morgan, path
import express from "express";
import logger from "morgan";
import path from "path";
// routes 에 login, select, delete.js 참조
import loginRouter from "../routes/login";
import adminRouter from "../routes/admin";
import amdin_updateRouter from "../routes/update";
import bookingRouter from "../routes/booking";
import bookcheckRouter from "../routes/book_check";
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
app.use('/', loginRouter);
app.use('/admin', adminRouter);
app.use('/admin/update', amdin_updateRouter);
app.use('/booking', bookingRouter);
app.use('/booking/book_check', bookcheckRouter);

app.listen(PORT, () => { // listen으로 server실행
    console.log(`Example app listening at http://localhost:${PORT}`)
})