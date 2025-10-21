import jwt from 'jsonwebtoken'
export const authTokenValidate = (req, res, next) => {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.status(404).json({ message: 'token not found' })
        }
        const verifyToken = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verifyToken
        next()
    } catch (e) {
        return res.status(500).json({ message: e.message })
    }
}