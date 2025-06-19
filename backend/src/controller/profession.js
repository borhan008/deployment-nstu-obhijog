const { PrismaClient } = require("../../generated/prisma");
const prisma = new PrismaClient();

exports.getAllProfessions = async (req, res) => {
  try {
    const professions = await prisma.profession.findMany({});
    return res.status(200).json({
      professions,
      message: "Successfully fetched professions.",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong when fetching profession",
      error,
    });
  }
};

exports.createProfession = async (req, res) => {
  try {
    const { uid, role } = req.user;
    if (role !== "ADMIN") {
      return res.status(401).json({
        message: "Unauthorised",
        error: "Unauthorised",
      });
    }
    const { profession_name } = req.body;
    const profession = await prisma.profession.create({
      data: {
        profession_name,
      },
    });
    return res.status(201).json({
      message: "Profession has been created.",
      profession,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while creating categories",
      error,
    });
  }
};

exports.editProfession = async (req, res) => {
  try {
    const { uid, role } = req.user;
    if (role !== "ADMIN") {
      return res.status(401).json({
        message: "Unauthorised",
        error: "Unauthorised",
      });
    }
    const { profession_name } = req.body;
    const { profession_id } = req.params;
    await prisma.profession.update({
      data: {
        profession_name,
      },
      where: {
        profession_id: parseInt(profession_id),
      },
    });
    return res.status(201).json({
      message: "Profession  has been updated.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong while updating categories",
      error,
    });
  }
};

exports.deleteProfession = async (req, res) => {
  try {
    const { uid, role } = req.user;
    if (role !== "ADMIN") {
      return res.status(401).json({
        message: "Unauthorised",
        error: "Unauthorised",
      });
    }
    const { profession_id } = req.params;
    await prisma.profession.delete({
      where: {
        profession_id: parseInt(profession_id),
      },
    });
    return res.status(201).json({
      message: "Profession has been deleted.",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while deleteing categories",
      error,
    });
  }
};
