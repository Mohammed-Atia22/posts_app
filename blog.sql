CREATE DATABASE blog_app;
USE blog_app;

CREATE TABLE posts( 
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    body TEXT NOT NULL,
    created_at DATE
);

INSERT INTO posts (
    title,
    body,
    created_at
) 
VALUES("post one","this is the body of post one","2021-05-05");