const User = require('../users/model.js');
const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');
const secret = 'elsecretodemigato';
const moment = require('moment');

// module.exports.login = (req, res, next)=>{

//     const {name,password} = req.body;
//     if (!name || !password ) return res.json({error:'No encuentra el usuario'});

//     const data = User.find (e=> e.name === name && e.password === password);
//     if (!data) return res.json ({error: 'LOGIN ERRONEO'});

//     const token = jwt.sign({user:data.id}, secret, {expiresIn: 60 * 60 * 24});
//     res.json({token: token, message: 'LOGIN OK'});


//     jwt.verify(token, secret, function(err, token) {
//         if (err) {return res.status(400).send({ok: false, message: 'Token inválido'});
//         } else {
//                  req.token = token;
//                 next();
//             };
//     });
// };

module.exports.loginUsers = async (req, res, next) => {
    try {
        const user = await User.findOne({name: req.body.name});
        if (user) {
            const iguales = bcrypt.compareSync(req.body.password, user.password);
            if (iguales) {
                res.json({ sucess: createToken(user) });

            } else {
                res.json({ error: 'Error en usuario y/o contraseña' });
            }

        } else {
            res.json({ error: 'Error en usuario y/o contraseña' });
        }
    } catch (error) {
        console.log(error);
    }
    next();
};


const createToken = (user) => {
    const payload = {
        usuarioId: user.id,
        createdAt: moment().unix(),
        expiredAt: moment().add(59, 'minutes').unix()
    }

    return jwt.encode(payload, secret);
}