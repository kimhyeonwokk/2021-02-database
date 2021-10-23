/*
-- Query: 
-- Date: 2021-09-28 21:33
*/
INSERT INTO `Employee` (`Fname`,`Minit`,`Lname`,`Ssn`,`Bdate`,`Address`,`Sex`,`Salary`,`Dno`) VALUES ('김','현','우','121717749','1998-07-08','인천 연수구','남',15000,1);
INSERT INTO `Employee` (`Fname`,`Minit`,`Lname`,`Ssn`,`Bdate`,`Address`,`Sex`,`Superssn`,`Salary`,`Dno`) VALUES ('박','규','태','122017842','2000-05-04','인천 부평구','남','121717749',1500,1);
INSERT INTO `Employee` (`Fname`,`Minit`,`Lname`,`Ssn`,`Bdate`,`Address`,`Sex`,`Superssn`,`Salary`,`Dno`) VALUES ('임','재','형','121718945','1997-11-23','대전 유성구','남','121717749',16000,1);
INSERT INTO `Employee` (`Fname`,`Minit`,`Lname`,`Ssn`,`Bdate`,`Address`,`Sex`,`Superssn`,`Salary`,`Dno`) VALUES ('김','수','현','121489452','1995-12-22','경기도 화성시','여','121717749',50000,1);
INSERT INTO `Employee` (`Fname`,`Minit`,`Lname`,`Ssn`,`Bdate`,`Address`,`Sex`,`Superssn`,`Salary`,`Dno`) VALUES ('배','선','미','121899452','1973-02-05','전남 순천','여','121717749',25000,1);
INSERT INTO `Employee` (`Fname`,`Minit`,`Lname`,`Ssn`,`Bdate`,`Address`,`Sex`,`Salary`,`Dno`) VALUES ('김','원','철','121787462','1999-04-15','인천 강화군','남',30000,2);
INSERT INTO `Employee` (`Fname`,`Minit`,`Lname`,`Ssn`,`Bdate`,`Address`,`Sex`,`Superssn`,`Salary`,`Dno`) VALUES ('윤','우','재','121771458','1998-02-15','부산 해운대구','남','121787462',10000,2);
INSERT INTO `Employee` (`Fname`,`Minit`,`Lname`,`Ssn`,`Bdate`,`Address`,`Sex`,`Superssn`,`Salary`,`Dno`) VALUES ('박','정','인','121898485','1995-04-10','경기도 성남시','남','121787462',52220,2);
INSERT INTO `Employee` (`Fname`,`Minit`,`Lname`,`Ssn`,`Bdate`,`Address`,`Sex`,`Superssn`,`Salary`,`Dno`) VALUES ('이','의','제','121717458','1997-08-17','대구 수성구','남','121787462',20000,2);
INSERT INTO `Employee` (`Fname`,`Minit`,`Lname`,`Ssn`,`Bdate`,`Address`,`Sex`,`Superssn`,`Salary`,`Dno`) VALUES ('홍','인','선','121217885','1994-05-17','강원도 양구군','여','121787462',16000,2);
INSERT INTO `Employee` (`Fname`,`Minit`,`Lname`,`Ssn`,`Bdate`,`Address`,`Sex`,`Superssn`,`Salary`,`Dno`) VALUES ('유','홍','선','121855005','1995-04-11','강원도 홍성군','남','121787462',80000,2);
INSERT INTO `Employee` (`Fname`,`Minit`,`Lname`,`Ssn`,`Bdate`,`Address`,`Sex`,`Superssn`,`Salary`,`Dno`) VALUES ('박','안','정','121011488','1995-11-23','서울 양천구','여','121787462',12000,2);
INSERT INTO `Employee` (`Fname`,`Minit`,`Lname`,`Ssn`,`Bdate`,`Address`,`Sex`,`Salary`,`Dno`) VALUES ('안','선','영','121711484','1997-11-30','서울 강남구','여',90000,3);
INSERT INTO `Employee` (`Fname`,`Minit`,`Lname`,`Ssn`,`Bdate`,`Address`,`Sex`,`Superssn`,`Salary`,`Dno`) VALUES ('박','유','선','121819000','1992-07-08','강원도 철원군','남','121711484',80000,3);
INSERT INTO `Employee` (`Fname`,`Minit`,`Lname`,`Ssn`,`Bdate`,`Address`,`Sex`,`Superssn`,`Salary`,`Dno`) VALUES ('안','철','엽','121788100','1990-01-23','인천 미추홀구','남','121711484',10000,3);

INSERT INTO `WORKS_ON` (`ESSN`,`PNO`,`HOURS`) VALUES ('121717749','1','10');
INSERT INTO `WORKS_ON` (`ESSN`,`PNO`,`HOURS`) VALUES ('121718945','1','30');
INSERT INTO `WORKS_ON` (`ESSN`,`PNO`,`HOURS`) VALUES ('121771458','2','20');
INSERT INTO `WORKS_ON` (`ESSN`,`PNO`,`HOURS`) VALUES ('121711484','3','35');
INSERT INTO `WORKS_ON` (`ESSN`,`PNO`,`HOURS`) VALUES ('121819000','4','15');
INSERT INTO `WORKS_ON` (`ESSN`,`PNO`,`HOURS`) VALUES ('122017842','5','25');
INSERT INTO `WORKS_ON` (`ESSN`,`PNO`,`HOURS`) VALUES ('121489452','6','30');


INSERT INTO `DEPARTMENT` (`DNAME`,`DNUMBER`,`MGR_START_DATE`) VALUES ('총무팀','1','2010-06-15');
INSERT INTO `DEPARTMENT` (`DNAME`,`DNUMBER`,`MGR_START_DATE`) VALUES ('재무팀','2','2011-03-15');
INSERT INTO `DEPARTMENT` (`DNAME`,`DNUMBER`,`MGR_START_DATE`) VALUES ('연구지원팀','3','2015-01-12');


INSERT INTO `PROJECT` (`PNAME`,`PNUMBER`,`PLOCATION`,`DNUM`) VALUES ('법인 변경 프로젝트','1','인하대학교 본관 1층','1');
INSERT INTO `PROJECT` (`PNAME`,`PNUMBER`,`PLOCATION`,`DNUM`) VALUES ('자산 관리 프로젝트','2','인하대학교 본관 1층','2');
INSERT INTO `PROJECT` (`PNAME`,`PNUMBER`,`PLOCATION`,`DNUM`) VALUES ('산학 협력 프로젝트','3','인하대학교 본관 4층','3');
INSERT INTO `PROJECT` (`PNAME`,`PNUMBER`,`PLOCATION`,`DNUM`) VALUES ('자율주행 프로젝트','4','인하대학교 하이테크 4층','3');
INSERT INTO `PROJECT` (`PNAME`,`PNUMBER`,`PLOCATION`,`DNUM`) VALUES ('심리 연구 프로젝트','5','인하대학교 6호관','3');
INSERT INTO `PROJECT` (`PNAME`,`PNUMBER`,`PLOCATION`,`DNUM`) VALUES ('연구비 집행 프로젝트','6','인하대학교 본관 4층','3');

INSERT INTO `DEPT_LOCATION` (`DNUMBER`,`DLOCATION`) VALUES ('1','인하대학교 본관 1층');
INSERT INTO `DEPT_LOCATION` (`DNUMBER`,`DLOCATION`) VALUES ('2','인하대학교 본관 1층');
INSERT INTO `DEPT_LOCATION` (`DNUMBER`,`DLOCATION`) VALUES ('3','인하대학교 본관 4층');
INSERT INTO `DEPT_LOCATION` (`DNUMBER`,`DLOCATION`) VALUES ('3','인하대학교 하이테크 4층');
INSERT INTO `DEPT_LOCATION` (`DNUMBER`,`DLOCATION`) VALUES ('3','인하대학교 6호관');
INSERT INTO `DEPT_LOCATION` (`DNUMBER`,`DLOCATION`) VALUES ('3','인하대학교 본관 2층');

INSERT INTO `DEPENDENT` (`ESSN`,`DEPENDENT_NAME`,`SEX`,`BDATE`,`REATIONSHIP`) VALUES ('121717749','김수현','여','1995-12-22','여자형제');
INSERT INTO `DEPENDENT` (`ESSN`,`DEPENDENT_NAME`,`SEX`,`BDATE`,`REATIONSHIP`) VALUES ('121717749','유희연','남','1991-12-22','남자형제');
INSERT INTO `DEPENDENT` (`ESSN`,`DEPENDENT_NAME`,`SEX`,`BDATE`,`REATIONSHIP`) VALUES ('121787462','김원기','남','1968-11-22','남자형제');
INSERT INTO `DEPENDENT` (`ESSN`,`DEPENDENT_NAME`,`SEX`,`BDATE`,`REATIONSHIP`) VALUES ('121787462','김은경','남','1975-10-21','여자형제');
INSERT INTO `DEPENDENT` (`ESSN`,`DEPENDENT_NAME`,`SEX`,`BDATE`,`REATIONSHIP`) VALUES ('121788100','김호연','남','1967-10-21','부');

