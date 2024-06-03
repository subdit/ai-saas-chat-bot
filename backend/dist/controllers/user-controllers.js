import { hash } from 'bcrypt'; // to encrypt the password that install in DB.
import User from '../models/User.js';
// Get all users
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        return res.status(200).json({ message: 'Okay', users });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: 'Error', cause: error.messages });
    }
};
//User signup
export const userSignup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassaword = await hash(password, 10);
        const user = new User({ name, email, password: hashedPassaword }); // save password with hash
        await user.save();
        return res.status(200).json({ message: 'Okay', id: user._id.toString }); // convert password to string
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: 'Error', cause: error.messages });
    }
};
//# sourceMappingURL=user-controllers.js.map