import { userModel } from "../Database/Models/userModel/userModal.js";


export class user {

  async getUser() {
    const allUser = await userModel.find();
    return allUser;
  }

  async createUser(query) {
    const { name, email, phone, password, Cpassword, account_type } = query.type;

    const userCreate = new userModel({
      name,
      email,
      phone,
      password,
      Cpassword,
      account_type,
    });
    const userCreated = await userCreate.save();
    return userCreated;
  }
}
