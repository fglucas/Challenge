CREATE TABLE solar_incidence( 
 id bigint PRIMARY KEY auto_increment, 
 date varchar(15), 
 start_time varchar(10), 
 end_time varchar(10), 
 temperature int, 
 uvIndice varchar(15)
);