import jwt from "jsonwebtoken";

export default function (request, response, next) {
    try {
        const { authorization } = request.headers
        
        if(!authorization){
            return response.status(401).json('Unauthorized')
        }

        const token = authorization.replace('Bearer ', '').trim()
        const { id } = jwt.verify(token, process.env.SECRET_JWT)

        if(!id){
            return response.status(401).json('Token invalid')
        }

        request.id = id;

        return next()

    } catch(error){
        return response.status(401).send()
    }
}