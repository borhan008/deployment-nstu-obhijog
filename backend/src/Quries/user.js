const { PrismaClient } = require("../../generated/prisma");
const prisma = new PrismaClient();

exports.getUserDetails = async ({ uid }) => {
  let user = {};
  user = await prisma.user.findUnique({
    where: {
      uid,
    },
  });

  return user;
};
