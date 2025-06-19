const { PrismaClient } = require("../../generated/prisma");
const prisma = new PrismaClient();

exports.getAllEmployeeCategories = async (req, res) => {
  try {
    const { uid, role } = req.user;
    if (role !== "ADMIN") {
      return res.status(401).json({
        message: "Unauthorised",
        error: "Unauthorised",
      });
    }
    const empCategories = await prisma.employeeCategory.findMany({});

    return res.status(201).json({
      message: "Employee Categories found",
      empCategories,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Something went wrong while fetching employee categories",
      error,
    });
  }
};

exports.createEmployeeCategory = async (req, res) => {
  try {
    const { uid, role } = req.user;
    if (role !== "ADMIN") {
      return res.status(401).json({
        message: "Unauthorised",
        error: "Unauthorised",
      });
    }
    const { category_name } = req.body;
    const data = await prisma.employeeCategory.create({
      data: {
        category_name,
      },
    });
    return res.status(201).json({
      message: "Employee Categoriy has been created.",
      employeeCategory: data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong while creating employee categories",
      error,
    });
  }
};

exports.editEmployeeCategory = async (req, res) => {
  try {
    const { uid, role } = req.user;
    if (role !== "ADMIN") {
      return res.status(401).json({
        message: "Unauthorised",
        error: "Unauthorised",
      });
    }
    const { category_name } = req.body;
    const { emp_category_id } = req.params;
    if (parseInt(emp_category_id) === NaN) {
      return res.status(400).json({
        message: "Employee Category is not correct one",
        error: "Employee Category is not correct one",
      });
    }
    await prisma.employeeCategory.update({
      data: {
        category_name,
      },
      where: {
        emp_category_id: parseInt(emp_category_id),
      },
    });
    return res.status(201).json({
      message: "Categoriy has been updated.",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while updating categories",
      error,
    });
  }
};

exports.deleteEmployeeCategory = async (req, res) => {
  try {
    const { uid, role } = req.user;
    if (role !== "ADMIN") {
      return res.status(401).json({
        message: "Unauthorised",
        error: "Unauthorised",
      });
    }
    const { emp_category_id } = req.params;
    if (parseInt(emp_category_id) === NaN) {
      return res.status(400).json({
        message: "Employee Category is not correct one",
        error: "Employee Category is not correct one",
      });
    }
    await prisma.employeeCategory.delete({
      where: {
        emp_category_id: parseInt(emp_category_id),
      },
    });
    return res.status(201).json({
      message: "Categoriy has been deleted.",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while deleteing categories",
      error,
    });
  }
};
