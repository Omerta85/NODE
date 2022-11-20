const userDb = require("../dataBase/users.json");
const customError = require("../error/customError");

module.exports = {
    checkIsUserExist: (req, res, next) => {
        try{
            const {userId} = req.params;

            const user = userDb[userId];

            if(!user) {
                throw new customError(`User not found`, 404);
            }
            req.user = user;
            next();

        } catch (e) {
            next(e)
        }
    }
}