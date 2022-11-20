const userDb = require("../dataBase/users.json");
const customError = require("../error/customError");
const {fileServices} = require("../service");

module.exports = {
    checkIsUserExist: async (req, res, next) => {
        try{
            const { userId } = req.params;

            const users = await fileServices.reader();

            const user = users.find((u) => u.id === +userId);

            if(!user) {
                throw new customError(`User not found`, 503);
            }
            req.users = users;
            req.user = user;
            next();

        } catch (e) {
            next(e)
        }
    },
    isBodyValid: (req, res, next) => {
        try{
            const {name, age } = req.body;
            if (name.length < 3 || typeof name !== 'string') {
                return res.status(400).json('Wrong name');
            }
            if (age < 0 || Number.isNaN(+age)) {
                return res.status(400).json('Wrong age');
            }
            next();
        } catch (e) {
            next(e)
        }
    }
}