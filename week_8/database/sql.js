import mysql from "mysql2";
// 데이터베이스 연결
const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: 'localhost',
    user: 'week_8', // 본인의 mysql user id
    database: 'week_8', // 본인이 만든 데이터베이스 이름으로 수정하세요
    password: 'week_8!', // 본인의 mysql password
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  }
);

// async / await 사용
const promisePool = pool.promise();
// 외부에서 사용 가능하게 export를 이용
// select query
export const selectSql = {
    getEmployee : async () => { // getEmployee query문
        const [rows] = await promisePool.query(`select * from employee`);
        console.log(rows) // console 출력
        return rows
    },
    getDepartment : async () => { // getDepartment query문
        const [rows] = await promisePool.query(`select * from department`);
        console.log(rows) // console 출력
        return rows 
    },
}
// insert query
export const insertSql = {
    // data라는 객체 타입 parameter에 입력 할 정보를 받아서 query문 생성
    setEmployee : async (data) => { // setEmployee query문
        const sql = `insert into employee values ( 
            "${data.Fname}","${data.Minit}","${data.Lname}","${data.Ssn}","${data.Bdate}",
            "${data.Address}","${data.Sex}","${data.Salary}","${data.Super_ssn}","${data.Dno}" )`;
            // text문자열 data에 저장된 변수를 이용하여 insert문 작성
            await promisePool.query(sql); // promisePool을 이용해 전달 후 종료
    },

    setDepartment : async (data) => { // setDepartment query문
        const sql = `insert into department values (
            "${data.Dname}","${data.Dnumber}","${data.Mgr_ssn}","${data.Mgr_start_date}" )`;
            // text문자열 data에 저장된 변수를 이용하여 insert문 작성
            await promisePool.query(sql); // promisePool을 이용해 전달 후 종료
    },
}
// update query
export const updateSql = {
    updateEmployee : async (data) => { // updateEmployee query문
        // where 조건을 만족하는 행에 대해서 salary 수정
        const sql = `update employee set salary = ${data.Salary} where Minit = "현"`;
        await promisePool.query(sql);
    },

    updateDepartment : async (data) => { // updateDepartment query문
        const sql = `update department set dname = "${data.Dname}" where Dnumber = 1`;
        await promisePool.query(sql);
    },
}