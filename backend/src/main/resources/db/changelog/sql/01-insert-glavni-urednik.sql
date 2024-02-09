--liquibase formatted sql
--changeset Mateja:create-tables spitStatement:true andDelimiter:;

INSERT INTO users (user_name, password, active, roles) VALUES ('glavni', 'password', true, 'ROLE_GUREDNIK');
