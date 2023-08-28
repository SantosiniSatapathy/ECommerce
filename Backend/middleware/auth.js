const jwt = require("jsonwebtoken")
const secret_key = "vidf";

exports.auth = async(req,res,next)=>{
    if(req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')){
        // console.log(req.headers.authorization);
        try{
            let token = req.headers.authorization.split(' ')[1];
            //console.log("hii");
            const decoded = jwt.verify(token, secret_key);
            console.log(decoded);
            req.user = decoded;
            next();
        }catch(e){
            console.log(e);
            res.status(401).send("invalid token");
            throw new Error('Not authorized, token failed');
        }
    }else{
        res.status(401).send("Unauthorized");
    }
}
