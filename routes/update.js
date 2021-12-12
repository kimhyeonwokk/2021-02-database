import express from "express"; // express import
import { selectSql, updateSql } from "../database/sql";
const router = express.Router(); // express router
router.get('/', async (req, res) => { 
    // department, student 정보를 전달 받음
    const airport = await selectSql.getAirport(); 
    const airplane = await selectSql.getAirplane(); 
    const flight = await selectSql.getFlight(); 

    res.render('update',{
        title1: 'AIRPORT 수정기능',
        title2: 'AIRPLANE 수정기능',
        title3: 'FLIGHT 수정기능',
        airport,
        airplane,
        flight,
    })
});

router.post('/',async (req,res)=>{
    express.json();
    if (req.body.airport_code !== undefined){
        const data = {
            Airport_code : req.body.airport_code,
            Name : req.body.name
        };
        await updateSql.updateAirport(data);
        res.redirect('/admin/update');
    }
    else if (req.body.airplane_id !== undefined){
        const data = {
            Airplane_id : req.body.airplane_id,
            Total_number_of_seats : req.body.total_number_of_seats,
            Airplane_type : req.body.airplane_type
        };
        await updateSql.updateAirplane(data);
        res.redirect('/admin/update');
    }
    else if (req.body.flight_number !== undefined){
        const data = {
            Flight_number : req.body.flight_number,
            Airline : req.body.airline,
            Days : req.body.days
        };
        await updateSql.updateFlight(data);
        res.redirect('/admin/update');
    }
    else if (req.body.delins !== undefined){
        res.redirect('/admin');
    }
    else{
        res.redirect('/admin/update');
    }
});
module.exports = router;

