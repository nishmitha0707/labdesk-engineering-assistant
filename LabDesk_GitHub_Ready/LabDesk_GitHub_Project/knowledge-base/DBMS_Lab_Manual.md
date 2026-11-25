# Database Management Systems Lab Manual

University source: Dayananda Sagar University, School of Engineering, Department of Computer Science and Engineering.
Use the page markers below when citing this source. Page numbers refer to the PDF page number in the supplied manual.


---

## SOURCE PAGE 1

DAYANANDA SAGAR UNIVERSITY
School of Engineering
Department Of Computer Science and Engineering
DATABASE MANAGEMENT SYSTEMS
Devarakaggalahalli, Harohalli, Kanakapura Road, 
Ramanagara Dt., 562112

---

## SOURCE PAGE 2

25CS2303
DAYANANDA SAGAR UNIVERSITY
SCHOOL OF ENGINEERING
DEPARTMENT OF COMPUTER SCIENCE AND 
ENGINEERING
DATABASE MANAGEMENT SYSTEMS
STUDENT NAME: _______________________________
USN:

---

## SOURCE PAGE 3

Dayananda Sagar University
School of Engineering
DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING
VISION & MISSION
Vision

To be recognized as a department of eminence in Computer Science and Engineering focusing on 
sustainability, inclusive technologies and societal needs.
Mission

M1: Impart quality technical education by designing and delivering contemporary Computer Science 
Engineering curricula while emphasizing leadership, ethics, values and integrity.

M2: Transform professionals into technically competent through industry-academia collaboration and 
innovation ecosystem.

M3: Prepare Computer Science and Engineering graduates to meet ever-growing societal needs.

---

## SOURCE PAGE 4

Program Educational Objectives (PEO's)
After few years of graduation, the graduates of Computer Science and Engineering will be able to:

PEO1.Apply appropriate theory, practices and tools in the design, implementation, maintenance and 
evaluation of computing in the work place or in higher education.

PEO2.Exhibit professional skills in solving challenging problems in their career and advance to 
leadership roles.

PEO3.Become effective innovator, researcher, and entrepreneur to provide technical solutions for 
socio-economic challenges.
Programme Outcome (PO's)
Engineering Graduates will be able to:
• PO1. Engineering Knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, 
and an engineering specialization to the solution of complex engineering problems.
• PO2. Problem Analysis: Identify, formulate, review research literature, and analyze complex engineering 
problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and 
engineering sciences.
• PO3. Design/Development of Solutions: Design solutions for complex engineering problems and design 
system components or processes that meet the specified needs with appropriate consideration for the 
public health and safety, and the cultural, societal, and environmental considerations.
• PO4. Conduct Investigations of Complex Problems: Use research-based knowledge and research methods 
including design of experiments, analysis and interpretation of data, and synthesis of the information to 
provide valid conclusions.
• PO5. Modern Tool Usage: Create, select, and apply appropriate techniques, resources, and modern 
engineering and IT tools including prediction and modeling to complex engineering activities with an 
understanding of the limitations.
• PO6. The Engineer and Society: Apply reasoning informed by the contextual knowledge to assess societal, 
health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional 
engineering practice.

---

## SOURCE PAGE 5

• PO7. Environment and Sustainability: Understand the impact of the professional engineering solutions in 
societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable 
development.
• PO8. Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of 
the engineering practice.
• PO9. Individual and Team Work: Function effectively as an individual, and as a member or leader in diverse 
teams, and in multidisciplinary settings.
• PO10. Communication: Communicate effectively on complex engineering activities with the engineering 
community and with society at large, such as, being able to comprehend and write effective reports and 
design documentation, make effective presentations, and give and receive clear instructions.
• PO11. Project Management and Finance: Demonstrate knowledge and understanding of the engineering 
and management principles and apply these to one’s own work, as a member and leader in a team, to 
manage projects and in multidisciplinary environments.
• PO12. Life-long Learning: Recognize the need for, and have the preparation and ability to engage in
independent and life-long learning in the broadest context of technological change.
.
Program Specific Outcomes (PSO's)
Engineering Graduates will be able to:

PSO1.Design and Integrate software and hardware systems by following standard software engineering 
principles in the areas related to IOT, Cloud, Networks, Security, Embedded Systems, and Artificial 
Intelligence of varying complexity.

PSO2.Design and Implement application software systems by applying the concepts of Programming 
languages, Machine Learning, Mobile Computing, and Data Science that meet the automation 
requirements of society and Industry.

---

## SOURCE PAGE 6

Dayananda Sagar University
Laboratory Certificate
This is to certify that Mr./Ms.
bearing
University Seat umber (USN))
                                                              has
satisfactorily
completed
the
DATABASE MANAGEMENT SYSTEMS
prescribed by the University for the            semester, B. Tech.                            branch of this
university during the academic year 20                    20                     
Date:                                      
Signature of the Faculty in charge
Marks
Maximum
Obtained
Signature of the Chairman

---

## SOURCE PAGE 7

Instructions to launch MySQL workbench:

Launch MySQL Workbench to open the home screen. Existing connections are shown when you 
click the MySQL Connections view from the sidebar. No connections exist for first-time users.

To add a connection, click the [+] icon to the right of the MySQL Connections title on 
the home screen. This opens the Setup New Connection. Define the Connection Name value,

Read the Configure Local Management introduction (shown in the next figure), and press Next to 
begin defining the new connection parameters.

he connection will now be tested. You should see that the connection was successful. If not, 
click Back and check that you have entered the information correctly.

---

## SOURCE PAGE 8

1.  Consider the schema for UNIVERSITY Database:
STUDENT(USN, SName, Address, Phone, Gender) 
SEMSEC(SSID, Sem, Sec)
CLASS(USN, SSID)
Write SQL queries to:
I.
Create table for the above schema, specifying proper Primary Key, Foreign Key. Identify 
Unique key and Not NULL Attribute.
II.
Insert the values for all the tables created.
III.
Update student address whose usn= S019.
IV.
Delete student details whose usn= S019, and show how it is handled.
CREATE DATABASE UNIVERSITY; 
SHOW DATABASES;
USE UNIVERSITY;
1.
Create tables
Student(usn,sname,address,phone,gender)
CREATE TABLE student( usn VARCHAR(11) NOT NULL, sname VARCHAR(15), address VARCHAR(30), 
phone VARCHAR(11) UNIQUE, gender CHAR, PRIMARY KEY(usn)) ;
OutPut:
desc student;
Semsec(ssid,sem,sec)
CREATE TABLE semsec( ssid VARCHAR(10) NOT NULL, sem INT, sec CHAR, PRIMARY KEY(ssid)) ;
Output:

---

## SOURCE PAGE 9

desc semsec;
Class(usn,ssid)
CREATE TABLE class( usn VARCHAR(11) NOT NULL, ssid VARCHAR(10), PRIMARY KEY(usn), FOREIGN 
KEY(usn)REFERENCES student(usn) ON DELETE CASCADE, FOREIGN KEY(ssid)REFERENCES
semsec(ssid) ON DELETE CASCADE) ; 
Output:
desc class;
DatabaseReverse Engineering
2.
Inserting the values for above tables
INSERT INTO Student (USN, SName, Address, Phone, Gender) VALUES ('S001', 'John Doe', '123 Main 
St, NY', '9876543210', 'M');
INSERT INTO Student (USN, SName, Address, Phone, Gender) VALUES ('S002', 'Jane Smith', '456 Elm 
St, CA', '9123456789', 'F');
INSERT INTO Student (USN, SName, Address, Phone, Gender) VALUES ('S003', 'Alice Johnson', '789 
Oak St, TX', '9988776655', 'F');

---

## SOURCE PAGE 10

INSERT INTO Student (USN, SName, Address, Phone, Gender) VALUES ('S004', 'Bob Brown', '321 Pine 
St, FL', '9765432109', 'M');
INSERT INTO Student (USN, SName, Address, Phone, Gender) VALUES ('S005', 'Charlie White', '654 
Maple St, WA', '9654321987', 'M');
INSERT INTO Student (USN, SName, Address, Phone, Gender) VALUES ('S006', 'David Black', '987 
Birch St, NV', '9543219876', 'M');
INSERT INTO Student (USN, SName, Address, Phone, Gender) VALUES ('S007', 'Emma Wilson', '741 
Cedar St, OH', '9432198765', 'F');
INSERT INTO Student (USN, SName, Address, Phone, Gender) VALUES ('S008', 'Olivia Martinez', '852 
Spruce St, MI', '9321987654', 'F');
INSERT INTO Student (USN, SName, Address, Phone, Gender) VALUES ('S009', 'Liam Garcia', '369 
Redwood St, OR', '9219876543', 'M');
INSERT INTO Student (USN, SName, Address, Phone, Gender) VALUES ('S010', 'Sophia Taylor', '258 
Willow St, IL', '9108765432', 'F');
INSERT INTO Student (USN, SName, Address, Phone, Gender) VALUES ('S011', 'Ethan Thomas', '147 
Aspen St, CO', '9998887776', 'M');
INSERT INTO Student (USN, SName, Address, Phone, Gender) VALUES ('S012', 'Mia Anderson', '357 
Oakwood St, AZ', '9887776665', 'F');
INSERT INTO Student (USN, SName, Address, Phone, Gender) VALUES ('S013', 'Noah Hernandez', 
'468 Palm St, GA', '9776665554', 'M');
INSERT INTO Student (USN, SName, Address, Phone, Gender) VALUES ('S014', 'Isabella King', '579 
Magnolia St, NC', '9665554443', 'F');
INSERT INTO Student (USN, SName, Address, Phone, Gender) VALUES ('S015', 'Mason Scott', '680 
Sycamore St, NJ', '9554443332', 'M');
INSERT INTO Student (USN, SName, Address, Phone, Gender) VALUES ('S016', 'Ava Lewis', '791 
Poplar St, MA', '9443332221', 'F');
INSERT INTO Student (USN, SName, Address, Phone, Gender) VALUES ('S017', 'James Walker', '802 
Juniper St, VA', '9332221110', 'M');
INSERT INTO Student (USN, SName, Address, Phone, Gender) VALUES ('S018', 'Charlotte Hall', '913 
Cypress St, TN', '9221110009', 'F');
INSERT INTO Student (USN, SName, Address, Phone, Gender) VALUES ('S019', 'Benjamin Allen', '102 
Chestnut St, PA', '9110009998', 'M');
INSERT INTO Student (USN, SName, Address, Phone, Gender) VALUES ('S020', 'Amelia Young', '203 
Hawthorn St, MO', '9009998887', 'F');
Select * from Student;

---

## SOURCE PAGE 11

INSERT INTO SEMSEC (SSID, Sem, Sec) VALUES ('SS001', 1, 'A'); 
INSERT INTO SEMSEC (SSID, Sem, Sec) VALUES ('SS002', 1, 'B'); 
INSERT INTO SEMSEC (SSID, Sem, Sec) VALUES ('SS003', 2, 'A'); 
INSERT INTO SEMSEC (SSID, Sem, Sec) VALUES ('SS004', 2, 'B'); 
INSERT INTO SEMSEC (SSID, Sem, Sec) VALUES ('SS005', 3, 'A'); 
INSERT INTO SEMSEC (SSID, Sem, Sec) VALUES ('SS006', 3, 'B'); 
INSERT INTO SEMSEC (SSID, Sem, Sec) VALUES ('SS007', 4, 'A'); 
INSERT INTO SEMSEC (SSID, Sem, Sec) VALUES ('SS008', 4, 'B'); 
INSERT INTO SEMSEC (SSID, Sem, Sec) VALUES ('SS009', 5, 'A'); 
INSERT INTO SEMSEC (SSID, Sem, Sec) VALUES ('SS010', 5, 'B'); 
INSERT INTO SEMSEC (SSID, Sem, Sec) VALUES ('SS011', 6, 'A'); 
INSERT INTO SEMSEC (SSID, Sem, Sec) VALUES ('SS012', 6, 'B'); 
INSERT INTO SEMSEC (SSID, Sem, Sec) VALUES ('SS013', 7, 'A'); 
INSERT INTO SEMSEC (SSID, Sem, Sec) VALUES ('SS014', 7, 'B'); 
INSERT INTO SEMSEC (SSID, Sem, Sec) VALUES ('SS015', 8, 'A'); 
INSERT INTO SEMSEC (SSID, Sem, Sec) VALUES ('SS016', 8, 'B'); 
INSERT INTO SEMSEC (SSID, Sem, Sec) VALUES ('SS017', 1, 'A'); 
INSERT INTO SEMSEC (SSID, Sem, Sec) VALUES ('SS018', 1, 'B');

---

## SOURCE PAGE 12

INSERT INTO SEMSEC (SSID, Sem, Sec) VALUES ('SS019', 2, 'A'); 
INSERT INTO SEMSEC (SSID, Sem, Sec) VALUES ('SS020', 2, 'B');
Select * from semsec;
INSERT INTO CLASS (USN, SSID) VALUES ('S001', 'SS001'); 
INSERT INTO CLASS (USN, SSID) VALUES ('S002', 'SS002'); 
INSERT INTO CLASS (USN, SSID) VALUES ('S003', 'SS003'); 
INSERT INTO CLASS (USN, SSID) VALUES ('S004', 'SS004'); 
INSERT INTO CLASS (USN, SSID) VALUES ('S005', 'SS005'); 
INSERT INTO CLASS (USN, SSID) VALUES ('S006', 'SS006'); 
INSERT INTO CLASS (USN, SSID) VALUES ('S007', 'SS007'); 
INSERT INTO CLASS (USN, SSID) VALUES ('S008', 'SS008'); 
INSERT INTO CLASS (USN, SSID) VALUES ('S009', 'SS009'); 
INSERT INTO CLASS (USN, SSID) VALUES ('S010', 'SS010'); 
INSERT INTO CLASS (USN, SSID) VALUES ('S011', 'SS011'); 
INSERT INTO CLASS (USN, SSID) VALUES ('S012', 'SS012'); 
INSERT INTO CLASS (USN, SSID) VALUES ('S013', 'SS013'); 
INSERT INTO CLASS (USN, SSID) VALUES ('S014', 'SS014'); 
INSERT INTO CLASS (USN, SSID) VALUES ('S015', 'SS015');

---

## SOURCE PAGE 13

INSERT INTO CLASS (USN, SSID) VALUES ('S016', 'SS016'); 
INSERT INTO CLASS (USN, SSID) VALUES ('S017', 'SS017'); 
INSERT INTO CLASS (USN, SSID) VALUES ('S018', 'SS018'); 
INSERT INTO CLASS (USN, SSID) VALUES ('S019', 'SS019'); 
INSERT INTO CLASS (USN, SSID) VALUES ('S020', 'SS020');
Select * from class;
3.
Update address of student with usn s019 
select * from student where usn= 'S019';
UPDATE STUDENT SET Address='402 Juniper St, VA' WHERE usn='S019';
select * from student where usn= 'S019';
4.
Delete student details whose usn= S019 
delete from student where usn= 'S019';
SELECT * FROM STUDENT;

---

## SOURCE PAGE 14

SELECT * FROM SEMSEC;
SELECT * FROM CLASS;

---

## SOURCE PAGE 15

2.  Consider the schema for UNIVERSITY Database:
STUDENT(USN, SName, Address, Phone, Gender) 
SEMSEC(SSID, Sem, Sec)
CLASS(USN, SSID)
SUBJECT(Subcode, Title, Sem, Credits)
IAMARKS(USN, Subcode, SSID, Test1, Test2, Test3, FinalIA) 
Write SQL queries to:
I.
Create table for the above schema, specifying proper Primary Key, Foreign Key. Identify 
Unique key and Not NULL Attribute.
II.
Insert the values for all the tables created.
III.
Retive the details of student having usn=’S018’ from all the tables using Referential integrity.
IV.
Retrieve the top 3 male students who have scored in DBMS subject for the Test1, and display 
their details like usn, name, gender and marks. Sort the students based on marks from high 
to low.
 
USE UNIVERSITY;
CREATE
 DATABASE UNIVERSITY;
SHOW DATABASES;
Drop database student;
“If you need to drop 
previous and create New

---

## SOURCE PAGE 16

[No selectable text on this page. Consult the original page image.]
