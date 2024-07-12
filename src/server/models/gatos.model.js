import db from '../database/db_connect.js'

export const findAll = () => db('SELECT * FROM gatos;')

export const findById = (id) => db('SELECT * FROM gatos WHERE id = $1;', [id])

export const create = ({ nombre, color, edad }) =>
  db('INSERT INTO gatos (id, nombre, color, edad) VALUES (DEFAULT, $1, $2, $3) RETURNING *;', [nombre, color, edad])

export const updateById = (id, { nombre, color, edad }) =>
  db('UPDATE gatos SET nombre = $2, color = $3, edad = $4 WHERE id = $1 RETURNING *;', [id, nombre, color, edad])

export const deleteById = (id) => db('DELETE FROM gatos WHERE id = $1 RETURNING *;', [id])
