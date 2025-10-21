import { pool } from "../db.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();

export const getAllUsers = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users')
        res.json(result.rows)
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(404).json({ message: 'debe ingresar todos los campos del formulario' })
        }
        const exist = await pool.query('SELECT * FROM users where email=$1', [email])
        if (exist.rows.length > 0) {
            return res.status(404).json({ message: 'El usuario que intenta registrar ya existe' })
        }
        if (password.length < 8) {
            return res.status(404).json({ message: 'La contraseña debe tener al menos 8 caracteres' })
        }
        const hashPassord = await bcrypt.hash(password, 10)
        const result = await pool.query('INSERT INTO users(name,email,password) values($1,$2,$3) RETURNING *', [name, email.toLowerCase(), hashPassord])
        const user = result.rows[0]
        const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET, { expiresIn: '1d' })
        res.cookie('token', token)
        res.json({
            id: user.id,
            name: user.name,
            email: user.email
        })
    } catch (e) {
        return res.status(500).json({ message: e.message })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        if(!email || !password){
            return res.status(404).json({ message: 'debe ingresar todos los campos' })
        }
        const validEmail = await pool.query('SELECT * FROM users WHERE email=$1', [email.toLowerCase()])
        if (validEmail.rows.length === 0) {
            return res.status(404).json({ message: 'El correo no esta registrado' })
        }
        const user = validEmail.rows[0]
        const validPassword = await bcrypt.compare(password, user.password)
        if (!validPassword) {
            return res.status(400).json({ message: 'Contraseña es incorrecta' })
        }
        const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET, { expiresIn: '1d' })
        res.cookie('token', token)
        res.json({ message: 'Bienvenido user' })
    } catch (e) {
        return res.status(500).json({ message: e.message })
    }
}
export const logout = async (req, res) => {
    res.clearCookie('token')
    res.json({ message: 'Sesión cerrada correctamente' })
}

export const index=async(req,res)=>{
    const idUser=req.user.id
    const result=await pool.query('SELECT * FROM users WHERE id=$1',[idUser])
    const user=result.rows[0]
    res.json(user)
}