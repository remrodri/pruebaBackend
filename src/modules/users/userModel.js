const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  roleId: { type: mongoose.Schema.Types.ObjectId, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  status: { type: Boolean, default: true },
  ci: { type: String, required: true },
  password: { type: String, required: true },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

const UserModel = mongoose.model("User", userSchema);
// // Middleware para actualizar el campo updateAt cada vez que se guarda un dato
// userSchema.pre('save', function(next) {
//   let user = this;
//   if (user.isModified('password')) {
//     user.salt = UserModel.generateSalt();
//     user.password = UserModel.encryptPassword(user.password, user.salt);
//   }
//   return next();
// })

module.exports = UserModel;
