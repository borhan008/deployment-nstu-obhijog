
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  uid: 'uid',
  email: 'email',
  name: 'name',
  roll: 'roll',
  mobile: 'mobile',
  session: 'session',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  block: 'block',
  department_id: 'department_id',
  profession_id: 'profession_id'
};

exports.Prisma.ProfessionScalarFieldEnum = {
  profession_id: 'profession_id',
  profession_name: 'profession_name'
};

exports.Prisma.EmployeeScalarFieldEnum = {
  employee_id: 'employee_id',
  employee_name: 'employee_name',
  employee_mobile: 'employee_mobile',
  complaint_cat_id: 'complaint_cat_id'
};

exports.Prisma.DepartmentScalarFieldEnum = {
  department_id: 'department_id',
  dept_full_name: 'dept_full_name',
  dept_shortform: 'dept_shortform'
};

exports.Prisma.ComplaintsScalarFieldEnum = {
  complaint_id: 'complaint_id',
  complaint_title: 'complaint_title',
  complaint_description: 'complaint_description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  status: 'status',
  emergancy: 'emergancy',
  complaint_cat_id: 'complaint_cat_id',
  uid: 'uid',
  building_id: 'building_id',
  room_no: 'room_no'
};

exports.Prisma.BuildingsScalarFieldEnum = {
  building_id: 'building_id',
  building_name: 'building_name'
};

exports.Prisma.ComplaintCataegoryScalarFieldEnum = {
  complaint_cat_id: 'complaint_cat_id',
  complaint_cat_name: 'complaint_cat_name'
};

exports.Prisma.ResolvedComplaintsScalarFieldEnum = {
  resolved_id: 'resolved_id',
  resolved_details: 'resolved_details',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  employee_id: 'employee_id',
  estimated_date: 'estimated_date',
  complaint_id: 'complaint_id',
  resolved_by: 'resolved_by'
};

exports.Prisma.NotificationsScalarFieldEnum = {
  notification_id: 'notification_id',
  complaint_id: 'complaint_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  seen: 'seen',
  uid: 'uid'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.UserOrderByRelevanceFieldEnum = {
  uid: 'uid',
  email: 'email',
  name: 'name',
  roll: 'roll',
  mobile: 'mobile',
  session: 'session',
  department_id: 'department_id'
};

exports.Prisma.ProfessionOrderByRelevanceFieldEnum = {
  profession_name: 'profession_name'
};

exports.Prisma.EmployeeOrderByRelevanceFieldEnum = {
  employee_name: 'employee_name',
  employee_mobile: 'employee_mobile'
};

exports.Prisma.DepartmentOrderByRelevanceFieldEnum = {
  department_id: 'department_id',
  dept_full_name: 'dept_full_name',
  dept_shortform: 'dept_shortform'
};

exports.Prisma.ComplaintsOrderByRelevanceFieldEnum = {
  complaint_title: 'complaint_title',
  complaint_description: 'complaint_description',
  uid: 'uid',
  room_no: 'room_no'
};

exports.Prisma.BuildingsOrderByRelevanceFieldEnum = {
  building_name: 'building_name'
};

exports.Prisma.ComplaintCataegoryOrderByRelevanceFieldEnum = {
  complaint_cat_name: 'complaint_cat_name'
};

exports.Prisma.ResolvedComplaintsOrderByRelevanceFieldEnum = {
  resolved_details: 'resolved_details',
  resolved_by: 'resolved_by'
};

exports.Prisma.NotificationsOrderByRelevanceFieldEnum = {
  uid: 'uid'
};
exports.UserRole = exports.$Enums.UserRole = {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

exports.STATUS = exports.$Enums.STATUS = {
  DUE: 'DUE',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED'
};

exports.Prisma.ModelName = {
  User: 'User',
  Profession: 'Profession',
  Employee: 'Employee',
  Department: 'Department',
  Complaints: 'Complaints',
  Buildings: 'Buildings',
  ComplaintCataegory: 'ComplaintCataegory',
  ResolvedComplaints: 'ResolvedComplaints',
  Notifications: 'Notifications'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
