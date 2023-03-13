const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
const jwt = require('jsonwebtoken')



// the login endpoint where all which all users can access
app.post('/login', (req, res) => {
const usr = req.body.username
const pwd = req.body.password

if (usr === 'Mazvita' && pwd === '1234' || usr === 'Meagen' && pwd === "10111" || usr === "Kabelo" && pwd === "911") {

    payload = {
        'name': usr,
        'admin': false,
    }
    const token = jwt.sign(JSON.stringify(payload), 'jwt-secret', {
        algorithm: 'HS256'
    })
    res.send({
        'token': token
    })
} else {
    res.status(403).send({
        'err': 'Incorrect login!'
    })
}
})


// all the users that can access the "/a" endpoint
app.post("/a",(req,res) => {
    const usr = req.body.username
    const pwd = req.body.password
    
    if (usr === 'Mazvita' && pwd === '1234' || usr === "Meagen" && pwd ==="10111") {
        //todo
        payload = {
            'name': usr,
            'admin': false,
        }
        const token = jwt.sign(JSON.stringify(payload), 'jwt-secret', {
            algorithm: 'HS256'
        })
        res.send({
            'token': token
        })
    } else {
        res.status(403).send({
            'err': 'Incorrect login!'
        })
    }
    })


    // all the users that can access the "/b" endpoint
    app.post("/b",(req,res) => {
        const usr = req.body.username
        const pwd = req.body.password
        
        if (usr === 'Meagen' && pwd === '10111' || usr === "Kabelo" && pwd === "911") {
            //todo
            payload = {
                'name': usr,
                'admin': false,
            }
            const token = jwt.sign(JSON.stringify(payload), 'jwt-secret', {
                algorithm: 'HS256'
            })
            res.send({
                'token': token
            })
        } else {
            res.status(403).send({
                'err': 'Incorrect login!'
            })
        }
        })

        // the user who can access the "/c" endpoint
        app.post("/c",(req,res) => {
            const usr = req.body.username
            const pwd = req.body.password
            
            if ( usr === "Kabelo" && pwd === "911") {
                //todo
                payload = {
                    'name': usr,
                    'admin': false,
                }
                const token = jwt.sign(JSON.stringify(payload), 'jwt-secret', {
                    algorithm: 'HS256'
                })
                res.send({
                    'token': token
                })
            } else {
                res.status(403).send({
                    'err': 'Incorrect login!'
                })
            }
            })

app.listen(port, () => console.log(
`Now listening at http://localhost:${port}`))
