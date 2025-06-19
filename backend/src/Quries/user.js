const { PrismaClient } = require("../../generated/prisma");
const prisma = new PrismaClient();

exports.getUserDetails = async ({ uid }) => {
  const user = await prisma.user.findUnique({
    where: {
      uid,
    },
  });

  return user;
};
