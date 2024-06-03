import User from '../models/User.js';
export const getAllUsers = async (req, res, next) => {
    try {
        // get all users
        const users = await User.find();
        return res.status(200).json({ message: 'Okay', users });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: 'Error', cause: error.messages });
    }
};
//# sourceMappingURL=user-controllers.js.map