const bcrypt =require ("bcrypt");

const saltRounds = 10;
//hasheo de password

const hashPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log('hashedPassword::: ', hashedPassword);
    return hashedPassword;
  } catch (error) {
    throw new Error(`Error al hashear password: ${error}`);
  }
};
//verificar password
const comparePassword = async (password, hashedPassword) => {
  try {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;//devuelve true si hacen match
  } catch (error) {
    throw new Error(`Error al comparar passwords: ${error}`);
  }
};

module.export = {hashPassword,comparePassword}