import express from "express"; // expree import
import { bookingSql, selectSql } from "../database/sql"; 
const router = express.Router(); // express router
router.get('/', async (req, res) => { 
    const time_table = await selectSql.getTime_table();
    res.render('booking',{
        title1: 'AIRPORT_TIMETABLE',
        time_table
    })
});

router.post('/', async (req, res) => {
    express.json();
    if(req.body.number_of_available_seats == 0){
        res.send(
            "<script>alert('예약인원 수가 초과됩니다.'); location.href='/booking';</script>"
        );
        res.redirect('/booking');
        return 0;
    }
    if (req.body.reservation !== undefined) 
    {
        const data = {
            Flight_number: req.body.flight_number,
            Fare_code: req.body.fare_code,
            Leg_number: req.body.leg_number,
            Date: req.body.date,
            Userid: req.body.userid,
            Userpassword: req.body.userpassword,
            Seatnumber: req.body.seatnumber,
            Phonenumber: req.body.phonenumber,
        };
        const users = await selectSql.getUsers();
        let checkLogin = false; // false
        users.map((user) => { // map으로 login check
            // user의 id와 password가 모두 같을 경우 로그인 성공
            if (data.Userid === user.Id && data.Userpassword === user.Password) {
                checkLogin = true; // true로 변환
            }
        });
        if (checkLogin === true & data.Userid.length !== 0 & data.Userpassword.length !== 0 & data.Seatnumber !== '' & data.phonenumber !== '') {
            var month;
            if (data.Date.slice(4, 7) == 'Jan') {
                month = '01';
            } else if (data.Date.slice(4, 7) == 'Feb') {
                month = '02';
            } else if (data.Date.slice(4, 7) == 'Mar') {
                month = '03';
            } else if (data.Date.slice(4, 7) == 'Apr') {
                month = '04';
            } else if (data.Date.slice(4, 7) == 'May') {
                month = '05';
            } else if (data.Date.slice(4, 7) == 'Jun') {
                month = '06';
            } else if (data.Date.slice(4, 7) == 'Jul') {
                month = '07';
            } else if (data.Date.slice(4, 7) == 'Aug') {
                month = '08';
            } else if (data.Date.slice(4, 7) == 'Sep') {
                month = '09';
            } else if (data.Date.slice(4, 7) == 'Oct') {
                month = '10';
            } else if (data.Date.slice(4, 7) == 'Nov') {
                month = '11';
            } else if (data.Date.slice(4, 7) == 'Dec') {
                month = '12';
            }
            const date = `${data.Date[11]}${data.Date[12]}${data.Date[13]}${data.Date[14]}-${month}-${data.Date[8]}${data.Date[9]}`
            data.Date = date;

            await bookingSql.bookFlight(data);
            res.redirect('/booking');
        } else {
            res.send(
                "<script>alert('ID와 PASSWORD가 다릅니다.'); location.href='/booking';</script>"
            );
        }
    }
    else if (req.body.booking_check !== undefined){
        res.redirect('/booking/book_check');
    }
    else{
        res.redirect('/booking');
    }
});
module.exports = router;