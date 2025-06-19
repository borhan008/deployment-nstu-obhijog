const { PrismaClient } = require("../../generated/prisma");
const prisma = new PrismaClient();

exports.getUserData = async (req, res) => {
  try {
    const { user_id } = req.user;
    const user = await prisma.user.findUnique({
      where: {
        uid: user_id,
      },
    });
    if (user) {
      return res.status(200).json({
        message: "User found",
        user,
      });
    }
    throw new Error("Didn't register yet");
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Couldn't find data",
      error,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { user_id, name, email } = req.user;
    const { mobile, department_id, profession_id, roll } = req.body;

    const checkUserExists = await prisma.user.findUnique({
      where: {
        uid: user_id,
      },
    });
    let user;
    if (!checkUserExists) {
      user = await prisma.user.create({
        data: {
          uid: user_id,
          name,
          email,
          mobile,
          department_id,
          profession_id,
          roll,
          role: "ADMIN",
        },
      });
    } else {
      user = await prisma.user.update({
        data: {
          mobile,
          department_id,
          roll,
        },
        where: {
          uid: user_id,
        },
      });
    }
    return res.status(201).json({
      message: "User updated/created successully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong while creating/updating user.",
      error,
    });
  }
};

// Admin

exports.getUsersDataAdmin = async (req, res) => {
  try {
    if (!req.user || req.user.role != "ADMIN") {
      return res.status(401).json({
        message: "Unauthorised",
        error: "Unauthorized22",
      });
    }
    const take = parseInt(req?.query?.take) || 1;
    const skip = parseInt(req?.query?.skip) || 0;
    const profession_id = req?.query?.searchProfessionId
      ? parseInt(req.query.searchProfessionId)
      : 0;

    let whereClause = {
      Profession: {},
      Department: {},
    };

    if (req?.query?.search) {
      whereClause.OR = [
        {
          name: {
            contains: req?.query?.search,
          },
        },
        {
          email: {
            contains: req?.query?.search,
          },
        },
        {
          mobile: {
            contains: req?.query?.search,
          },
        },
        {
          uid: {
            contains: req?.query?.search,
          },
        },
        {
          Department: {
            OR: [
              {
                dept_full_name: {
                  contains: req?.query?.search,
                },
              },
              {
                dept_shortform: {
                  contains: req?.query?.search,
                },
              },
            ],
          },
        },
        {
          Profession: {
            profession_name: {
              contains: req?.query?.search,
            },
          },
        },
      ];
    }
    if (
      req?.query?.searchDeptId &&
      req?.query?.searchDeptId != null &&
      req?.query?.searchDeptId != "null"
    ) {
      whereClause.Department.department_id = req?.query?.searchDeptId;
    }
    if (profession_id) {
      whereClause.Profession.profession_id = profession_id;
    }

    const users = await prisma.user.findMany({
      take,
      skip,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        Profession: true,
        Department: true,
      },
      where: whereClause,
    });
    const count = await prisma.user.count({
      where: whereClause,
    });
    return res.status(201).json({
      users: users,
      message: "User data found",
      count,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong while fetching user details",
      error,
    });
  }
};

exports.makeUserBlockUnblock = async (req, res) => {
  try {
    if (!req.user || req.user.role != "ADMIN") {
      return res.status(401).json({
        message: "Unauthorised",
        error: "Unauthorized",
      });
    }
    if (!req.params.uid) {
      return res.status(404).json({
        message: "No user found",
        error: "No user found",
      });
    }

    const uid = req.params.uid;

    const user = await prisma.user.findUnique({
      where: {
        uid: uid,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        error: "User not found",
      });
    }

    await prisma.user.update({
      data: {
        block: !user.block,
      },
      where: {
        uid,
      },
    });

    return res.status(200).json({
      message: "The user data is updated.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong while blocking or unblocking user",
      error,
    });
  }
};
exports.makeUserRoleChange = async (req, res) => {
  try {
    if (!req.user || req.user.role != "ADMIN") {
      return res.status(401).json({
        message: "Unauthorised",
        error: "Unauthorized",
      });
    }
    if (!req.params.uid) {
      return res.status(404).json({
        message: "No user found",
        error: "No user found",
      });
    }

    const uid = req.params.uid;

    const user = await prisma.user.findUnique({
      where: {
        uid: uid,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        error: "User not found",
      });
    }

    await prisma.user.update({
      data: {
        role: user.role === "ADMIN" ? "USER" : "ADMIN",
      },
      where: {
        uid,
      },
    });

    return res.status(200).json({
      message: "The user role is updated.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong while changing the role user",
      error,
    });
  }
};
