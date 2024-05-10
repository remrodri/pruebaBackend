const  hashPassword =require ("../../config/utils/bcryptUtils");
const UserModel = require("./userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const roleController = require("../roles/roleController");

const userController = {
  async getUsers(req, res) {
    try {
      const users = await UserModel.find();
      res.status(200).json(users);
    } catch (error) {
      console.error(`Error la obtener los usuarios: ${error}`);
      res.status(500).json({ message: `Error interno del servidor` });
    }
  }
}

module.exports = userController;
