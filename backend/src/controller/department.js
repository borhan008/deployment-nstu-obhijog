const { PrismaClient } = require("../../generated/prisma");
const prisma = new PrismaClient();

exports.getAllDepartment = async (req, res) => {
  try {
    const departments = await prisma.department.findMany({});
    return res.status(200).json({
      departments,
      message: "Succesfully fetched departments",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while fetching department data.",
      error,
    });
  }
};

exports.createDepartment = async (req, res) => {
  try {
    const { uid, role } = req.user;

    const { department_id, dept_full_name, dept_shortform } = req.body;
    await prisma.department.create({
      data: {
        department_id,
        dept_full_name,
        dept_shortform,
      },
    });
    return res.status(201).json({
      message: "Department is created",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong while creating a department",
      error,
    });
  }
};

exports.editDepartment = async (req, res) => {
  try {
    const { uid, role } = req.user;
    if (role != "ADMIN") {
      return res.status(401).message({
        message: "Unauthorised",
      });
    }
    const old_dept_id = req.params.department_id;
    const { department_id, dept_full_name, dept_shortform } = req.body;
    const response = await prisma.department.update({
      data: {
        department_id,
        dept_full_name,
        dept_shortform,
      },
      where: {
        department_id: old_dept_id,
      },
    });
    return res.status(201).json({
      message: "Updated succesfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong, maybe the id you are using alrady exists",
      error,
    });
  }
};

exports.deleteDepartment = async (req, res) => {
  try {
    const { role } = req.user;
    const { department_id } = req.params;
    if (role !== "ADMIN") {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
    await prisma.department.delete({
      where: {
        department_id,
      },
    });
    return res.status(200).json({
      message: "Deleted",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message:
        "Something went wrong, maybe the department you requested delete doesnt exist",
      error,
    });
  }
};
