const { faker } = require("@faker-js/faker");

const User = require("../models/user");

const { GeneratePassword, GenerateSalt } = require("../../../utils");

const seedUser = async (qty) => {
  try {
    for (let i = 0; i < qty; i++) {
      let password = faker.internet.password();
      let salt = await GenerateSalt();
      let userPassword = await GeneratePassword(password, salt);

      let user = new User({
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        email: faker.internet.email(),
        password: userPassword,
        role: "user",
      });
      let userSaved = await user.save();
      return userSaved;
    }
    console.log("User seeded successfully");
  } catch (error) {
    console.log("Error seeding user", error);
  }
};
const deleteAllUsers = async () => {
  try {
    let deleteUser = await User.deleteMany();
    console.log("**********************");
    console.log("deleteUser", deleteUser);
    console.log("**********************");
  } catch (error) {
    console.log("Error deleting user", error);
  }
};
module.exports = {
  seedUser,
  deleteAllUsers,
};
