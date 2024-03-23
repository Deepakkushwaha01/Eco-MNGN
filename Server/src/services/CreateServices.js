import { user } from "../class/user.js"

export const createService = () => {
    return {
        user: new user()
    }
}