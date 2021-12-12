import express from "express"; // expree import
import { selectSql,deleteSql, insertSql } from "../database/sql"; // select,deleteSql import
const router = express.Router(); // express router
router.get('/', async (req, res) => { 
    const airport = await selectSql.getAirport(); 
    const airplane = await selectSql.getAirplane(); 
    const flight = await selectSql.getFlight(); 
    const flight_leg = await selectSql.getFlight_leg();  
    const leg_instance = await selectSql.getLeg_instance(); 
    const fare = await selectSql.getFare(); 
    const airplane_type = await selectSql.getAirplane_type(); 
    const can_land = await selectSql.getCan_land();
    const seat_reservation = await selectSql.getSeat_reservation(); 
    res.render('admin',{
        title1: 'AIRPORT 정보 삭제 및 조회',
        title2: 'AIRPLANE 정보 삭제 및 조회',
        title3: 'FLIGHT 정보 삭제 및 조회',
        title4: 'FLIGHT_LEG 정보 확인',
        title5: 'LEG_INSTANCE 정보 확인',
        title6: 'FARE 정보 확인',
        title7: 'AIRPLANE_TYPE 정보 확인',
        title8: 'CAN_LAND 정보 확인',
        title9: 'SEAT_RESERVATION 정보 확인',
        airport,
        airplane,
        flight,
        flight_leg,
        leg_instance,
        fare,
        airplane_type,
        can_land,
        seat_reservation
    })
});
router.post('/',async (req,res)=>{
    express.json();
    if(req.body.delBtn1 !== undefined){
        const data = {
            airport_code: req.body.delBtn1,
        };
        await deleteSql.deleteAirport(data);
        res.redirect('/admin');
    }
    else if (req.body.delBtn2 !== undefined){
        const data = {
            airplane_id: req.body.delBtn2,
        };
        await deleteSql.deleteAirplane(data);    
        res.redirect('/admin');
    }
    else if (req.body.delBtn3 !== undefined){
        const data = {
            flight_number: req.body.delBtn3,
        };
        await deleteSql.deleteFlight(data);
        res.redirect('/admin');
    }
    else if (req.body.airport_btn !== undefined){
        const data = {
            Airport_code : req.body.Airport_code,
            Name : req.body.Name,
            City : req.body.City,
            State : req.body.State
        };
        await insertSql.insertAirport(data);
        res.redirect('/admin');
    }
    else if (req.body.airplane_btn !== undefined){
        const data = {
            Airplane_id : req.body.Airplane_id,
            Total_number_of_seats : req.body.Total_number_of_seats,
            Airplane_type : req.body.Airplane_type
        };
        await insertSql.insertAirplane(data);
        res.redirect('/admin');
    }
    else if (req.body.flight_btn !== undefined){
        const data = {
            Flight_number : req.body.Flight_number,
            Airline : req.body.Airline,
            Days : req.body.days
        };
        await insertSql.insertFlight(data);
        res.redirect('/admin');
    }
    else if (req.body.modify !== undefined){
        res.redirect('/admin/update');
    }
    else{
        res.redirect('/admin');
    }
});
module.exports = router;