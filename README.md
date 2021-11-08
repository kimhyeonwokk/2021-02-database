# 2021-2-database Capstone Design

## 3주차 실습 실행방법
1. 레포지터리 복사(wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:kimhyeonwokk/2021-02-database.git
    - (token을 사용하는 경우) git clone https://github.com/kimhyeonwokk/2021-02-database.git
2. week_3 폴더로 이동
    > cd week_3
3. 콘솔창(powershell)에서 npm package 설치
    > npm install
4. database/sql.js에서 본인의 데이터베이스 정보 입력(주석부분)
<pre>
<code>
const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: 'localhost',
    user: 'week_3', // 본인의 mysql user id
    database: 'tutorial', // 본인이 만든 데이터베이스 이름으로 수정하세요
    password: 'dbuser123!', // 본인의 mysql password
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  }
);
</code>
</pre>