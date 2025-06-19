const { PrismaClient } = require("../../generated/prisma");
const prisma = new PrismaClient();

exports.getUserNotification = async (req, res) => {
  try {
    const { uid } = req.user;
    const take = parseInt(req?.query?.take) || 10;
    const skip = parseInt(req?.query?.skip) || 0;
    const notifications = await prisma.notifications.findMany({
      take,
      skip,
      where: {
        uid,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });
    const count = await prisma.notifications.count({
      where: {
        uid,
      },
    });
    await prisma.notifications.updateMany({
      data: {
        seen: true,
      },
      where: {
        uid,
      },
    });
    return res.status(200).json({
      message: "Data found",
      notifications,
      count,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};

exports.countNotification = async (req, res) => {
  try {
    const { uid } = req.user;
    const count = await prisma.notifications.count({
      where: {
        uid,
        seen: false,
      },
    });

    return res.status(200).json({
      message: "Count unseen notification",
      count,
    });
  } catch {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};
