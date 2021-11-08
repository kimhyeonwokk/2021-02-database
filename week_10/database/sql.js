import mysql from "mysql2";
// 데이터베이스 연결
const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: 'localhost',
    user: 'week_10', // 본인의 mysql user id
    database: 'week_10', // 본인이 만든 데이터베이스 이름으로 수정하세요
    password: 'week_10!', // 본인의 mysql password
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  }
);
// async / await 사용
const promisePool = pool.promise(); 
// select query, 외부에서 사용 가능하게 export 이용
export const selectSql = {
  getUsers : async () => { // getUser query
    const [rows] = await promisePool.query(`select * from user`);
    return rows // row를 return
  },
  getDepartment : async () => { // getDepartment query
    const [rows] = await promisePool.query(`select * from department`);
    return rows // row를 return
  },
  getStudent : async () => { // getStudent query
    const [rows] = await promisePool.query(`select * from student`);
    return rows // row를 return
  },
}
// delete query, 외부에서 사용 가능하게 export 이용
export const deleteSql = {
  // data라는 객체 타입 parameter에 입력 할 정보를 받아서 query문 생성
  deleteDepartment : async (data) => { // deleteDepartment query문 
    console.log('deleteSql.deleteDepartment:',data.Dnumber); // data.Dnumber를 출력 
    // query문 조건에 Dnumber에 해당하는 행 삭제
    const sql = `delete from department where Dnumber=${data.Dnumber}`;
    await promisePool.query(sql);
  },
  // data라는 객체 타입 parameter에 입력 할 정보를 받아서 query문 생성
  deleteStudent : async (data) => {  // deleteDepartment query문 
    console.log('deleteSql.deleteStudent:',data.Ssn);
    // query문 조건에 전달 받은 Ssn에 해당하는 행 삭제
    const sql = `delete from student where Ssn=${data.Ssn}`;
    await promisePool.query(sql);
  },
}