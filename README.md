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
5. broswer를 켜서 주소창에 
    >localhost:3000 입력
6. page확인
    >localhost:3000/users -> data 조회  
## <span style="color:skyblue">테이블 설명</span>
### **Student table**
StudentNumber|Name|Major|Grade|Email|
---|---|---|---|---|
12171774|홍길동|정보통신공학과|2|1998@inha.edu|
12171772|둘리|컴퓨터공학과|3|1988@inha.edu|

__StudentNumber__: Student 학번    
__Name__: Student 이름  
__Major__: Student 전공  
__Grade__: Student 학년  
__Admission__: Student 입학날짜  
__Email__: Student 이메일        

## <span style="color:skyblue">테이블 설명</span>

---------------------------------------
---------------------------------------

## 8주차 실습 실행방법
1. 레포지터리 복사(wsl 환경에서 명령어 입력)
    > 3주차와 동일
2. week_8 폴더로 이동
    > cd week_8
3. 콘솔창(powershell)에서 npm package 설치
    > 3주차와 동일
4. database/sql.js에서 본인의 데이터베이스 정보 입력(주석부분)
    > 3주차와 동일
5. 서버 실행(powershell에서)
    > npm run start
6. broswer를 켜서 주소창에 
    >localhost:3000 입력
7. page확인
    >localhost:3000 -> data insert  
    >localhost:3000/select -> data 조회  
    >localhost:3000/update -> data update

## <span style="color:skyblue">테이블 작성법 및 설명</span>
### **Employee table**
Fname|Minit|Lname|Ssn|Bdate|Address|Sex|Salary|Super_ssn|Dno
---|---|---|---|---|---|---|---|---|---|
Jonh|F.|Bob|12171774|1980-01-11|Incheon|Male|25000$|12191991|1|
Khan|M.|Jak|12161772|1988-11-21|Seoul|Female|30000$|12191990|2|  

__Fname,Minit,Lname__: Employee 이름  
__Ssn__: Employee 사원 번호 **########** 8자리형식 **(PK)**    
__Bdate__: Employee 생년월일 **####-##-##** 형식으로 입력      
__Address__: Employee 호적상 주소  
__Sex__: Employee 성별 M Male, F Female   
__Salary__: Employee 월급  
__Super_ssn__: 상사 사원번호  
__Dno__: 부서 번호 Department 참조 **(FK)**  

### **Department table**
Dname|Dnumber|Mgr_ssn|Mgr_start_date|
---|---|---|---|
Marketing|1|12171774|2018-03-15|
Planning|2|12161772|2019-11-5|

__Dname__: Department 부서명  
__Dnumber__: Department 부서번호  
__Mgr_ssn__: Department 관리자 사원번호 Employee 참조 **(FK)**    
__Mgr_start_date__: Department 관리시작 날

---------------------------------------
---------------------------------------
## 10주차 실습 실행방법
1. 레포지터리 복사(wsl 환경에서 명령어 입력)
    > 3주차와 동일
2. week_10 폴더로 이동
    > cd week_10
3. 콘솔창(powershell)에서 npm package 설치
    > 3주차와 동일
4. database/sql.js에서 본인의 데이터베이스 정보 입력(주석부분)
    > 3주차와 동일
5. broswer를 켜서 주소창에 
    >localhost:3000 입력
6. page확인
    >localhost:3000 -> login page
7. admin or test id로 login  
    >**admin** : admin으로 login, 삭제가 가능한 delete page로 이동  
    >**user** : 일반 user로 login, 삭제가 불가능 하고 조회만 가능한 Select page로 이동
    
### **Department table**
Dname|Dnumber|
---|---|
Marketing|1|
Planning|2|  

__Dname__: Department 부서명  
__Dnumber__: Department 부서번호  

### **Student table**
Ssn|Sex|Address|
---|---|---|
12171774|M|인천|
12171775|F|서울|

__Ssn__: Student 학번  
__Sex__: Student 성별  
__Address__: Student 주소

---------------------------------------
---------------------------------------