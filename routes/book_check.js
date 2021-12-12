import express from "express"; // expree import]
import { selectSql,bookingSql } from "../database/sql";
let checkLogin = false; 
let data;
const router = express.Router(); // express router
router.get('/', async (req, res) => {
    if (checkLogin == true & data !=='') {
        const time_table = await bookingSql.bookCheck(data);
        res.render('book_check', {
            title1: '예약확인 및 삭제',
            time_table
        });
    } else if (checkLogin == false) {
        res.render('book_check', {
            title1: '예약확인 및 삭제'
        });
    }
});
router.post('/', async (req, res) => {

    if (req.body.login !== undefined) {
        const vars = req.body;
        const users = await selectSql.getUsers();
        let whoAmi = '';
        users.map((user) => {
            if (vars.id === user.Id && vars.password === user.Password) {
                checkLogin = true;
                if (vars.id === 'admin') {
                    whoAmi = 'admin';
                } else {
                    whoAmi = 'user';
                }
            }
        })
        if (checkLogin && whoAmi === 'admin') {
            res.redirect('/admin');
        } else if (checkLogin && whoAmi === 'user') {
            res.redirect('/booking/book_check');
            data = {
                Userid: req.body.id,
                Userpassword: req.body.password,
            }
        } else {
            res.send("<script>alert('로그인에 실패했습니다.'); location.href='/';</script>");
            checkLogin = false;
            data='';
        }
    }
    else if (req.body.delBtn !== undefined){
        var data1 = {
            Flight_number: req.body.flight_number,
            Leg_number: req.body.leg_number,
            Date: req.body.date,
            Seat_number: req.body.seat_number
        }
        var month;
        if (data1.Date.slice(4, 7) == 'Jan') {
            month = '01';
        } else if (data1.Date.slice(4, 7) == 'Feb') {
            month = '02';
        } else if (data1.Date.slice(4, 7) == 'Mar') {
            month = '03';
        } else if (data1.Date.slice(4, 7) == 'Apr') {
            month = '04';
        } else if (data1.Date.slice(4, 7) == 'May') {
            month = '05';
        } else if (data1.Date.slice(4, 7) == 'Jun') {
            month = '06';
        } else if (data1.Date.slice(4, 7) == 'Jul') {
            month = '07';
        } else if (data1.Date.slice(4, 7) == 'Aug') {
            month = '08';
        } else if (data1.Date.slice(4, 7) == 'Sep') {
            month = '09';
        } else if (data1.Date.slice(4, 7) == 'Oct') {
            month = '10';
        } else if (data1.Date.slice(4, 7) == 'Nov') {
            month = '11';
        } else if (data1.Date.slice(4, 7) == 'Dec') {
            month = '12';
        }
        const date = `${data1.Date[11]}${data1.Date[12]}${data1.Date[13]}${data1.Date[14]}-${month}-${data1.Date[8]}${data1.Date[9]}`
        data1.Date = date;
        await bookingSql.bookDelete(data1);
        res.redirect('/booking/book_check');
    }
    else {
        res.redirect('/booking');
        checkLogin = false;
        data='';
    }
});

module.exports = router;