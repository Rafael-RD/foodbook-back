import db from "../database/connection.database.js";

export function createUser({username, email, photo, bio, password}){
    return db.query(`
    INSERT INTO users (username, email, photo, bio, password)
    VALUES ($1, $2, $3, $4, $5)
    `, [username, email, photo, bio, password]);
}

export function updateLastLogin({email}){
    return db.query(`
    UPDATE users 
    SET "lastLogin"=CURRENT_TIMESTAMP 
    WHERE email=$1
    `, [email]);
}