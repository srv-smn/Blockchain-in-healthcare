const Admin = artifacts.require("Admin");

module.exports = async function (deployer) {
  await deployer.deploy(Admin);
};
