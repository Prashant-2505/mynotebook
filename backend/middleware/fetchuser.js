// this is used as a middleware to get te details of user we takken tokken and sent it JWTverify and it verify by taking token
// and JWTsecret if it will verify we can req to database to get details of user
// we can use it in special function who take three parameter  req,res and next and we can use that function anywhere we wnt to get user details


var jwt = require('jsonwebtoken');
const JWT_SECRET = 'secret@@'


const fetchuser = (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) {
        res.status(401).send({ error: "please authecticate using valid token" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET)
        req.user = data.user;
        next()
    } catch (error) {
        res.status(401).send({ error: "please authecticate using valid token" })
    }
}

module.exports = fetchuser