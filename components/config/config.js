const User = require('../users/model.js');
const jwt = require ('jsonwebtoken');
const secret = 'elsecretodemigato';

module.exports.login = (req, res, next)=>{
    
    const {name,password} = req.body;
    if (!name || !password ) return res.json({error:'No encuentra el usuario'});

    const data = User.find (e=> e.name === name && e.password === password);
    if (!data) return res.json ({error: 'LOGIN ERRONEO'});

    const token = jwt.sign({user:data.id}, secret, {expiresIn: 60 * 60 * 24});
    res.json({token: token, message: 'LOGIN OK'});


    jwt.verify(token, secret, function(err, token) {
        if (err) {return res.status(400).send({ok: false, message: 'Token inválido'});
        } else {
                 req.token = token;
                next();
            };
    });
};