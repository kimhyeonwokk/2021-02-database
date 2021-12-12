import mysql from "mysql2";
// 데이터베이스 연결
const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: 'localhost',
    user: 'airlineDB', // 본인의 mysql user id
    database: 'airlineDB', // 본인이 만든 데이터베이스 이름으로 수정하세요
    password: 'airlineDB!', // 본인의 mysql password
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  }
);
// async / await 사용
const promisePool = pool.promise(); 

export const selectSql = {
  getUsers : async () => { // getUser query
    const [rows] = await promisePool.query(`select * from user`);
    return rows // row를 return
  },
  getAirport : async () => { // getAIRPORT query
    const [rows] = await promisePool.query(`select * from AIRPORT`);
    return rows // row를 return
  },
  getAirplane : async () => { // getAirplane query
    const [rows] = await promisePool.query(`select * from AIRPLANE`);
    return rows // row를 return
  },
  getFlight : async () => { // getFlight query
    const [rows] = await promisePool.query(`select * from FLIGHT`);
    return rows // row를 return
  },
  getFlight_leg : async () => { // getFlight_leg query
    const [rows] = await promisePool.query(`select * from FLIGHT_LEG`);
    return rows // row를 return
  },
  getLeg_instance : async () => { // getLeg_instance query
    const [rows] = await promisePool.query(`select * from LEG_INSTANCE`);
    return rows // row를 return
  },
  getFare : async () => { // getFare query
    const [rows] = await promisePool.query(`select * from Fare`);
    return rows // row를 return
  },
  getAirplane_type : async () => { // getAirplane query
    const [rows] = await promisePool.query(`select * from AIRPLANE_TYPE`);
    return rows // row를 return
  },
  getCan_land : async () => { // getCan_land query
    const [rows] = await promisePool.query(`select * from CAN_LAND`);
    return rows // row를 return
  },
  getSeat_reservation : async () => { // getSeat_reservation
    const [rows] = await promisePool.query(`select * from SEAT_RESERVATION`);
    return rows // row를 return
  },
  getTime_table : async () => { // getTime_table
    const [rows] = await promisePool.query(`select * from TIME_TABLE`);
    return rows // row를 return
  }
}


export const deleteSql = {
   deleteAirport : async (data) => { 
    console.log('deleteSql.airport:',data.airport_code); 
    const sql = `delete from airport where airport_code='${data.airport_code}'`;
    await promisePool.query(sql);
  },
  deleteAirplane : async (data) => { 
    console.log('deleteSql.airplane:',data.airplane_id); 
    const sql = `delete from airplane where airplane_id='${data.airplane_id}'`;
    await promisePool.query(sql);
  },
  deleteFlight : async (data) => { 
    console.log('deleteSql.flight:',data.flight_number);
    const sql = `delete from flight where flight_number=${data.flight_number}`;
    await promisePool.query(sql);
  }
}

export const insertSql = {
  insertAirport : async (data) => { 
      const sql = `insert into airport values ( 
          "${data.Airport_code}","${data.Name}","${data.City}","${data.State}")`;
          await promisePool.query(sql);
  },
  insertAirplane : async (data) => { 
      const sql = `insert into airplane values (
          "${data.Airplane_id}","${data.Total_number_of_seats}","${data.Airplane_type}")`;
          await promisePool.query(sql);
  },
  insertFlight : async (data) => { 
    const sql = `insert into flight values (
        "${data.Flight_number}","${data.Airline}","${data.Days}")`;
        await promisePool.query(sql);
  },
}

export const updateSql = {
  updateAirport : async (data) => { 
      if(data.Name.length !== 0){
        const sql = `update airport set Name="${data.Name}" where Airport_code="${data.Airport_code}"`;
        console.log(sql);
        await promisePool.query(sql);
      }
  },
  updateAirplane : async (data) => { 
      if(data.Total_number_of_seats.length === 0 & data.Airplane_type.length === 0 ){}
      else if(data.Total_number_of_seats.length === 0 & data.Airplane_type.length !== 0){
        const sql = `update airplane set Airplane_type="${data.Airplane_type}" where Airplane_id="${data.Airplane_id}"`;
        await promisePool.query(sql);
      }
      else if(data.Total_number_of_seats.length !== 0 & data.Airplane_type.length === 0){
        const sql = `update airplane set Total_number_of_seats="${data.Total_number_of_seats}" where Airplane_id="${data.Airplane_id}"`;
        await promisePool.query(sql);
      }
      else {
        const sql = `update airplane set Total_number_of_seats="${data.Total_number_of_seats}", Airplane_type="${data.Airplane_type}" where Airplane_id="${data.Airplane_id}"`;
        await promisePool.query(sql);
      }

  },
  updateFlight : async (data) => { 
      if(data.Airline.length === 0 & data.Days.length === 0 ){}
      else if(data.Airline.length === 0 & data.Days.length !== 0){
        const sql = `update flight set Days="${data.Days}" where flight_number="${data.Flight_number}"`;
        await promisePool.query(sql);
      }
      else if(data.Airline.length !== 0 & data.Days.length === 0){
        const sql = `update flight set airline="${data.Airline}" where flight_number="${data.Flight_number}"`;
        await promisePool.query(sql);
      }
      else{
        const sql = `update flight set airline="${data.Airline}",Days="${data.Days}" where flight_number="${data.Flight_number}"`;
        await promisePool.query(sql);
      }
  },
}

export const bookingSql = {
  bookFlight : async (data) => {
try {
    const sql1 = `START TRANSACTION`;
    await promisePool.query(sql1);
    const sql2 = `INSERT INTO SEAT_RESERVATION VALUES ("${data.Flight_number}","${data.Leg_number}"
    ,"${data.Date}","${data.Seatnumber}","${data.Userid}","${data.Phonenumber}")`;
    await promisePool.query(sql2);
    const sql3 = `UPDATE LEG_INSTANCE SET Number_of_available_seats = Number_of_available_seats - 1
    where flight_number=${data.Flight_number} and leg_number=${data.Leg_number} and date='${data.Date}'`;
    await promisePool.query(sql3);
    const sql4 = `COMMIT`;
    await promisePool.query(sql4);
} catch (e) {
    const sql5 = `ROLLBACK`;
    await promisePool.query(sql5);
}
  },
  bookCheck : async (data) => {
    const sql = `SELECT SR.FLIGHT_NUMBER ,SR.DATE,SR.Leg_number,DEP.NAME AS DNAME, 
    FL.SCHEDULED_DEPARTURE_TIME,ARV.NAME AS ANAME, FL.SCHEDULED_ARRIVAL_TIME, SR.CUSTOMER_NAME, 
    SR.CUSTOMER_PHONE,SR.SEAT_NUMBER
    FROM FLIGHT_LEG FL, AIRPORT DEP, AIRPORT ARV, SEAT_RESERVATION SR
    WHERE  DEP.AIRPORT_CODE = FL.DEPARTURE_AIRPORT_CODE AND ARV.AIRPORT_CODE = FL.ARRIVAL_AIRPORT_CODE
    AND FL.FLIGHT_NUMBER = SR.FLIGHT_NUMBER AND SR.Customer_Name = '${data.Userid}'`;
    const [rows] =await promisePool.query(sql);
    return rows;
  },
  bookDelete : async (data) => {
try {
    const sql1 = `START TRANSACTION`;
    await promisePool.query(sql1);
    const sql2 = `DELETE FROM SEAT_RESERVATION 
    WHERE FLIGHT_NUMBER = "${data.Flight_number}" AND 
    LEG_NUMBER = "${data.Leg_number}" AND
    DATE = "${data.Date}" AND 
    SEAT_NUMBER = "${data.Seat_number}"`;
    await promisePool.query(sql2);
    const sql3 = `UPDATE LEG_INSTANCE SET Number_of_available_seats = Number_of_available_seats + 1 where 
    flight_number=${data.Flight_number} and leg_number=${data.Leg_number} and date='${data.Date}'`;
    await promisePool.query(sql3);
    const sql4 = `COMMIT`;
    await promisePool.query(sql4);
} catch (e) {
    const sql5 = `ROLLBACK`;
    await promisePool.query(sql5);
}
  },
}
