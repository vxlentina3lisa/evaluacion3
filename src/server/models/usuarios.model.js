import db from '../database/db_connect.js'

export const register = ({ nombre, email, pass }) => db('INSERT INTO usuario (id, nombre, email, pass) VALUES (DEFAULT,$1,$2,$3);',[nombre, email, pass])

export const login = ({ email, pass }) => {
    return db('SELECT email FROM usuario WHERE email = $1 and pass = $2;', [email, pass])
}
