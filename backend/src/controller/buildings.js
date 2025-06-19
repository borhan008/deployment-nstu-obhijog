const { PrismaClient } = require("../../generated/prisma");
const prisma = new PrismaClient();

// Get all buildings (with optional search)
exports.getBuildings = async (req, res) => {
  try {
    const search = req?.query?.search || "";
    const buildings = await prisma.buildings.findMany();
    return res.status(200).json({
      message: "Found buildings",
      buildings,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong while fetching buildings",
      error,
    });
  }
};

// Create a building
exports.createBuilding = async (req, res) => {
  try {
    const { uid, role } = req.user;
    if (role !== "ADMIN") {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const { building_name } = req.body;

    const newBuilding = await prisma.buildings.create({
      data: {
        building_name,
      },
    });

    return res.status(201).json({
      message: "Building has been created.",
      building: newBuilding,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong while creating building",
      error,
    });
  }
};

// Edit a building
exports.editBuilding = async (req, res) => {
  try {
    const { uid, role } = req.user;
    if (role !== "ADMIN") {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const { building_id } = req.params;
    const { building_name } = req.body;

    await prisma.buildings.update({
      where: {
        building_id: parseInt(building_id),
      },
      data: {
        building_name,
      },
    });

    return res.status(200).json({
      message: "Building has been updated.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong while updating building",
      error,
    });
  }
};

// Delete a building
exports.deleteBuilding = async (req, res) => {
  try {
    const { uid, role } = req.user;
    if (role !== "ADMIN") {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const { building_id } = req.params;

    await prisma.buildings.delete({
      where: {
        building_id: parseInt(building_id),
      },
    });

    return res.status(200).json({
      message: "Building has been deleted.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong while deleting building",
      error,
    });
  }
};
