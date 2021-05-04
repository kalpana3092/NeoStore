import CommonMethods from "../../utilities/Common/CommonMethods"

const LoginViewModel = {
    ValidateEmail: (email) => {
        return CommonMethods.CheckValidEmail(email)
    },

    ValidatePassword: (password) => {
        return CommonMethods.CheckValidPassword(password)
    },

    ValidateEmptyString: (text) => {
        return CommonMethods.CheckEmptyString(text)
    }

}
export default LoginViewModel