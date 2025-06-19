/**
 * 
 *   employee_id        Int                @id @default(autoincrement())
  employee_name      String
  employee_mobile    String
  ComplaintCataegory ComplaintCataegory @relation(fields: [complaint_cat_id], references: [complaint_cat_id])
  complaint_cat_id   Int
 */

const { PrismaClient } = require("../../generated/prisma");
const prisma = new PrismaClient();

exports.getAllEmployees = async (req, res) => {
  try {
    const { role } = req.user;
    if (role !== "ADMIN") {
      return res.status(401).json({
        message: "Unauthorised",
        error: "Unauthorised",
      });
    }

    const take = parseInt(req?.query?.take) || 100;
    const skip = parseInt(req?.query?.skip) || 0;
    const search = req?.query?.search || "";
    const complaint_cat_id = parseInt(req?.query?.cat_id) || 0;
    console.log(complaint_cat_id);
    if (parseInt(take) === NaN || parseInt(skip) === NaN) {
      return res.status(400).json({
        message: "Data type error",
        error: "Error",
      });
    }
    let whereClause = {
      OR: [
        {
          employee_name: {
            contains: search,
          },
        },
        {
          employee_mobile: {
            contains: search,
          },
        },
      ],
    };
    if (complaint_cat_id != 0 && complaint_cat_id != NaN) {
      whereClause.complaint_cat_id = complaint_cat_id;
    }
    const employees = await prisma.employee.findMany({
      skip: parseInt(skip),
      take: parseInt(take),
      include: {
        ComplaintCataegory: true,
      },
      where: whereClause,
    });

    return res.status(200).json({
      message: "User found",
      employees,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong while fetching employees",
      error: error,
    });
  }
};

exports.createEmployee = async (req, res) => {
  try {
    const { role } = req.user;
    if (role !== "ADMIN") {
      return res.status(401).json({
        message: "Unauthorised",
        error: "Unauthorised",
      });
    }
    const { employee_name, employee_mobile, complaint_cat_id } = req.body;
    const checkCategory = await prisma.complaintCataegory.findUnique({
      where: {
        complaint_cat_id: parseInt(complaint_cat_id),
      },
    });
    if (!checkCategory) {
      return res.status(404).message({
        message: "Category not found",
        error: "Category not found",
      });
    }

    const employee = await prisma.employee.create({
      data: {
        employee_name,
        employee_mobile,
        complaint_cat_id: parseInt(complaint_cat_id),
      },
      include: {
        ComplaintCataegory: true,
      },
    });
    return res.status(200).json({
      message: "Employee added",
      employee,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong while creating the employee",
      erorr,
    });
  }
};

exports.editEmployee = async (req, res) => {
  try {
    const { role } = req.user;
    if (role !== "ADMIN") {
      return res.status(401).json({
        message: "Unauthorised",
        error: "Unauthorised",
      });
    }
    const { employee_id } = req.params;
    const { employee_name, employee_mobile, complaint_cat_id } = req.body;
    if (parseInt(employee_id) === NaN) {
      return res.status(400).json({
        message: "Emloyee ID is not found",
        error: "Emoployee id data type error.",
      });
    }
    const employee = await prisma.employee.update({
      data: {
        employee_mobile,
        employee_name,
        complaint_cat_id: parseInt(complaint_cat_id),
      },
      where: {
        employee_id: parseInt(employee_id),
      },
      include: {
        ComplaintCataegory: true,
      },
    });

    return res.status(201).json({
      message: "Employee updated succesfully",
      employee,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong while editing the emlpoyee",
      error,
    });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const { role } = req.user;
    if (role !== "ADMIN") {
      return res.status(401).json({
        message: "Unauthorised",
        error: "Unauthorised",
      });
    }
    const employee_id = parseInt(req.params.employee_id);
    if (employee_id === NaN) {
      console.log(req.params.employee_id);
      return res.status(400).json({
        message: "Employee id error",
        error: "Employee ID data type error",
      });
    }

    await prisma.employee.delete({
      where: {
        employee_id: parseInt(employee_id),
      },
    });

    return res.status(200).json({
      message: "Employee deleted",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something wemt wrong while deleting the employee",
      error,
    });
  }
};
