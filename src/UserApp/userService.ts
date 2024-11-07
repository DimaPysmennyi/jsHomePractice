import { findUserByEmail, createUser } from "./userRepository"

async function authLogin(data: any){
    let user = await findUserByEmail(data.email);
    console.log(user);
    if (user != null){
        if (user.password == data.password){
            return user;
        } else {
            return null;
        }
    } else {
        return 'Not Found';
    }
    // return user;
}

async function authRegistration(data: any){
    let user = await findUserByEmail(data.email)
    // console.log(user)
    
    if (user != null){
        return 'User Exists';
    } 

    data["role"] = "user";
    // console.log(data)
    user = await createUser(data);
    return user

}

const userService = {
    authLogin: authLogin,
    authRegistration: authRegistration
}

export default userService