const { PrismaClient } = require("../../generated/prisma");
const prisma = new PrismaClient();

exports.getDashboardStats = async (req, res) => {
  try {
    if (!req.user || req.user.role != "ADMIN") {
      return res.status(401).json({
        message: "Unauthorised",
        error: "Unauthorized22",
      });
    }

    const userCount = await prisma.user.count({});
    const professionCount = await prisma.profession.count({});
    const employeeCount = await prisma.employee.count({});
    const complaintsCount = await prisma.complaints.groupBy({
      by: ["status"],
      _count: {
        _all: true,
      },
    });
    const countByCateagories = await prisma.complaintCataegory.findMany({
      include: {
        _count: {
          select: { complaints: true },
        },
      },
    });
    return res.status(200).json({
      userCount,
      complaintsCount,
      professionCount,
      employeeCount,
      countByCateagories,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong",
      error: error,
    });
  }
};
