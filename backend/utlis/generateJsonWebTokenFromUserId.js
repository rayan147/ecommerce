import jsonWebToken from 'jsonwebtoken';

const generateJsonWebTokenFromUserId = (user_Id) => {
    return jsonWebToken.sign(
        {id: user_Id},
        process.env.JWT_TOKEN_SECRET,{
            expiresIn: '30d'
        })

}
export default generateJsonWebTokenFromUserId;