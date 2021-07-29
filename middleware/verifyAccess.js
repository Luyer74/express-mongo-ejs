var jwt = require("jsonwebtoken");

function verifyToken(req,res,next) {

var token = req.cookies.token || '' ; 

if (!token) {

    return res.redirect('/login')
}
else {

    jwt.verify(token,process.env.SECRET, function(err,datos){

        if (err){
            console.log(err);
            return res.redirect("/login")
        }
        else {

            req.userId = datos.id;
            req.permission = datos.permission;

            next();
        }

    })

    
}

}


module.exports = verifyToken;