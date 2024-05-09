const RoleModel =require ("./roleModel");

const roleController = {
  async getRoles(req, res) {
    try {
      const roles = await RoleModel.find({}, "_id roleName");
      return res.status(200).json(roles);
    } catch (error) {
      console.error("Error al obtener roles", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  },
};
module.exports =roleController;
