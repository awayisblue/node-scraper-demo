CREATE TABLE food_categories
(
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(60) NOT NULL ,
  PRIMARY KEY (id)
) engine=innodb DEFAULT CHARSET=utf8mb4  comment '美食分类';