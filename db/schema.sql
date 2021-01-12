DROP DATABASE IF EXISTS hometohome;

CREATE DATABASE hometohome;

USE employeeDB;

CREATE TABLE department
(
    id INT
    auto_increment PRIMARY KEY NOT NULL,
    name VARCHAR
    (30) NOT NULL
);

    CREATE TABLE food_type
    (
        id INT
        auto_increment PRIMARY KEY NOT NULL,
    food_type VARCHAR
        (30) NOT NULL,
);

        CREATE TABLE food_item
        (
            id INT
            auto_increment PRIMARY KEY NOT NULL,
    food_type VARCHAR
            (30),
    food_item VARCHAR
            (30),
);