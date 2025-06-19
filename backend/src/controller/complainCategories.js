const { PrismaClient } = require("../../generated/prisma");
const prisma = new PrismaClient();

exports.getComplaintCategories = async (req, res) => {
  try {
    const search = req?.query?.search || "";
    const categories = await prisma.complaintCataegory.findMany({
      where: {
        complaint_cat_name: {
          contains: search,
        },
      },
    });
    return res.status(200).json({
      message: "Foundd categories",
      categories,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Somethign went wrong while fetching categories",
      error,
    });
  }
};

exports.createComplaintCategory = async (req, res) => {
  try {
    const { uid, role } = req.user;
    if (role !== "ADMIN") {
      return res.status(401).json({
        message: "Unauthorised",
        error: "Unauthorised",
      });
    }
    const { complaint_cat_name } = req.body;
    const complaintCat = await prisma.complaintCataegory.create({
      data: {
        complaint_cat_name,
      },
    });
    return res.status(201).json({
      message: "Categoriy has been created.",
      complaintCat,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while creating categories",
      error,
    });
  }
};

exports.editComplaintCategory = async (req, res) => {
  try {
    const { uid, role } = req.user;
    if (role !== "ADMIN") {
      return res.status(401).json({
        message: "Unauthorised",
        error: "Unauthorised",
      });
    }
    const { complaint_cat_name } = req.body;
    const { complaint_cat_id } = req.params;
    await prisma.complaintCataegory.update({
      data: {
        complaint_cat_name,
      },
      where: {
        complaint_cat_id: parseInt(complaint_cat_id),
      },
    });
    return res.status(201).json({
      message: "Categoriy has been updated.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong while updating categories",
      error,
    });
  }
};

exports.deleteComplaintCategory = async (req, res) => {
  try {
    const { uid, role } = req.user;
    if (role !== "ADMIN") {
      return res.status(401).json({
        message: "Unauthorised",
        error: "Unauthorised",
      });
    }
    const { complaint_cat_id } = req.params;
    await prisma.complaintCataegory.delete({
      where: {
        complaint_cat_id: parseInt(complaint_cat_id),
      },
    });
    return res.status(201).json({
      message: "Categoriy has been deleted.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong while deleteing categories",
      error,
    });
  }
};
