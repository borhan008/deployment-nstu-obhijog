
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Profession
 * 
 */
export type Profession = $Result.DefaultSelection<Prisma.$ProfessionPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model Complaints
 * 
 */
export type Complaints = $Result.DefaultSelection<Prisma.$ComplaintsPayload>
/**
 * Model Buildings
 * 
 */
export type Buildings = $Result.DefaultSelection<Prisma.$BuildingsPayload>
/**
 * Model ComplaintCataegory
 * 
 */
export type ComplaintCataegory = $Result.DefaultSelection<Prisma.$ComplaintCataegoryPayload>
/**
 * Model ResolvedComplaints
 * 
 */
export type ResolvedComplaints = $Result.DefaultSelection<Prisma.$ResolvedComplaintsPayload>
/**
 * Model Notifications
 * 
 */
export type Notifications = $Result.DefaultSelection<Prisma.$NotificationsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const STATUS: {
  DUE: 'DUE',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED'
};

export type STATUS = (typeof STATUS)[keyof typeof STATUS]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type STATUS = $Enums.STATUS

export const STATUS: typeof $Enums.STATUS

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profession`: Exposes CRUD operations for the **Profession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Professions
    * const professions = await prisma.profession.findMany()
    * ```
    */
  get profession(): Prisma.ProfessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.complaints`: Exposes CRUD operations for the **Complaints** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Complaints
    * const complaints = await prisma.complaints.findMany()
    * ```
    */
  get complaints(): Prisma.ComplaintsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.buildings`: Exposes CRUD operations for the **Buildings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Buildings
    * const buildings = await prisma.buildings.findMany()
    * ```
    */
  get buildings(): Prisma.BuildingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.complaintCataegory`: Exposes CRUD operations for the **ComplaintCataegory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ComplaintCataegories
    * const complaintCataegories = await prisma.complaintCataegory.findMany()
    * ```
    */
  get complaintCataegory(): Prisma.ComplaintCataegoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resolvedComplaints`: Exposes CRUD operations for the **ResolvedComplaints** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResolvedComplaints
    * const resolvedComplaints = await prisma.resolvedComplaints.findMany()
    * ```
    */
  get resolvedComplaints(): Prisma.ResolvedComplaintsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **Notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.NotificationsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "profession" | "employee" | "department" | "complaints" | "buildings" | "complaintCataegory" | "resolvedComplaints" | "notifications"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Profession: {
        payload: Prisma.$ProfessionPayload<ExtArgs>
        fields: Prisma.ProfessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          findFirst: {
            args: Prisma.ProfessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          findMany: {
            args: Prisma.ProfessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>[]
          }
          create: {
            args: Prisma.ProfessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          createMany: {
            args: Prisma.ProfessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProfessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          update: {
            args: Prisma.ProfessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          deleteMany: {
            args: Prisma.ProfessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProfessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          aggregate: {
            args: Prisma.ProfessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfession>
          }
          groupBy: {
            args: Prisma.ProfessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfessionCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessionCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      Complaints: {
        payload: Prisma.$ComplaintsPayload<ExtArgs>
        fields: Prisma.ComplaintsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComplaintsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComplaintsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintsPayload>
          }
          findFirst: {
            args: Prisma.ComplaintsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComplaintsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintsPayload>
          }
          findMany: {
            args: Prisma.ComplaintsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintsPayload>[]
          }
          create: {
            args: Prisma.ComplaintsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintsPayload>
          }
          createMany: {
            args: Prisma.ComplaintsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ComplaintsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintsPayload>
          }
          update: {
            args: Prisma.ComplaintsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintsPayload>
          }
          deleteMany: {
            args: Prisma.ComplaintsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComplaintsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ComplaintsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintsPayload>
          }
          aggregate: {
            args: Prisma.ComplaintsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComplaints>
          }
          groupBy: {
            args: Prisma.ComplaintsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComplaintsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComplaintsCountArgs<ExtArgs>
            result: $Utils.Optional<ComplaintsCountAggregateOutputType> | number
          }
        }
      }
      Buildings: {
        payload: Prisma.$BuildingsPayload<ExtArgs>
        fields: Prisma.BuildingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BuildingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BuildingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingsPayload>
          }
          findFirst: {
            args: Prisma.BuildingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BuildingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingsPayload>
          }
          findMany: {
            args: Prisma.BuildingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingsPayload>[]
          }
          create: {
            args: Prisma.BuildingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingsPayload>
          }
          createMany: {
            args: Prisma.BuildingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BuildingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingsPayload>
          }
          update: {
            args: Prisma.BuildingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingsPayload>
          }
          deleteMany: {
            args: Prisma.BuildingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BuildingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BuildingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingsPayload>
          }
          aggregate: {
            args: Prisma.BuildingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBuildings>
          }
          groupBy: {
            args: Prisma.BuildingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BuildingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BuildingsCountArgs<ExtArgs>
            result: $Utils.Optional<BuildingsCountAggregateOutputType> | number
          }
        }
      }
      ComplaintCataegory: {
        payload: Prisma.$ComplaintCataegoryPayload<ExtArgs>
        fields: Prisma.ComplaintCataegoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComplaintCataegoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintCataegoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComplaintCataegoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintCataegoryPayload>
          }
          findFirst: {
            args: Prisma.ComplaintCataegoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintCataegoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComplaintCataegoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintCataegoryPayload>
          }
          findMany: {
            args: Prisma.ComplaintCataegoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintCataegoryPayload>[]
          }
          create: {
            args: Prisma.ComplaintCataegoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintCataegoryPayload>
          }
          createMany: {
            args: Prisma.ComplaintCataegoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ComplaintCataegoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintCataegoryPayload>
          }
          update: {
            args: Prisma.ComplaintCataegoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintCataegoryPayload>
          }
          deleteMany: {
            args: Prisma.ComplaintCataegoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComplaintCataegoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ComplaintCataegoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintCataegoryPayload>
          }
          aggregate: {
            args: Prisma.ComplaintCataegoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComplaintCataegory>
          }
          groupBy: {
            args: Prisma.ComplaintCataegoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComplaintCataegoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComplaintCataegoryCountArgs<ExtArgs>
            result: $Utils.Optional<ComplaintCataegoryCountAggregateOutputType> | number
          }
        }
      }
      ResolvedComplaints: {
        payload: Prisma.$ResolvedComplaintsPayload<ExtArgs>
        fields: Prisma.ResolvedComplaintsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResolvedComplaintsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResolvedComplaintsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResolvedComplaintsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResolvedComplaintsPayload>
          }
          findFirst: {
            args: Prisma.ResolvedComplaintsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResolvedComplaintsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResolvedComplaintsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResolvedComplaintsPayload>
          }
          findMany: {
            args: Prisma.ResolvedComplaintsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResolvedComplaintsPayload>[]
          }
          create: {
            args: Prisma.ResolvedComplaintsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResolvedComplaintsPayload>
          }
          createMany: {
            args: Prisma.ResolvedComplaintsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ResolvedComplaintsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResolvedComplaintsPayload>
          }
          update: {
            args: Prisma.ResolvedComplaintsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResolvedComplaintsPayload>
          }
          deleteMany: {
            args: Prisma.ResolvedComplaintsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResolvedComplaintsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResolvedComplaintsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResolvedComplaintsPayload>
          }
          aggregate: {
            args: Prisma.ResolvedComplaintsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResolvedComplaints>
          }
          groupBy: {
            args: Prisma.ResolvedComplaintsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResolvedComplaintsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResolvedComplaintsCountArgs<ExtArgs>
            result: $Utils.Optional<ResolvedComplaintsCountAggregateOutputType> | number
          }
        }
      }
      Notifications: {
        payload: Prisma.$NotificationsPayload<ExtArgs>
        fields: Prisma.NotificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          findFirst: {
            args: Prisma.NotificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          findMany: {
            args: Prisma.NotificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          create: {
            args: Prisma.NotificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          createMany: {
            args: Prisma.NotificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          update: {
            args: Prisma.NotificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          deleteMany: {
            args: Prisma.NotificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          aggregate: {
            args: Prisma.NotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifications>
          }
          groupBy: {
            args: Prisma.NotificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    profession?: ProfessionOmit
    employee?: EmployeeOmit
    department?: DepartmentOmit
    complaints?: ComplaintsOmit
    buildings?: BuildingsOmit
    complaintCataegory?: ComplaintCataegoryOmit
    resolvedComplaints?: ResolvedComplaintsOmit
    notifications?: NotificationsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    complaint: number
    resolve: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    complaint?: boolean | UserCountOutputTypeCountComplaintArgs
    resolve?: boolean | UserCountOutputTypeCountResolveArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountComplaintArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComplaintsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResolveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResolvedComplaintsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
  }


  /**
   * Count Type ProfessionCountOutputType
   */

  export type ProfessionCountOutputType = {
    user: number
  }

  export type ProfessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfessionCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * ProfessionCountOutputType without action
   */
  export type ProfessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionCountOutputType
     */
    select?: ProfessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfessionCountOutputType without action
   */
  export type ProfessionCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    resolve: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resolve?: boolean | EmployeeCountOutputTypeCountResolveArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountResolveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResolvedComplaintsWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    users: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | DepartmentCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type ComplaintsCountOutputType
   */

  export type ComplaintsCountOutputType = {
    resolve: number
  }

  export type ComplaintsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resolve?: boolean | ComplaintsCountOutputTypeCountResolveArgs
  }

  // Custom InputTypes
  /**
   * ComplaintsCountOutputType without action
   */
  export type ComplaintsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplaintsCountOutputType
     */
    select?: ComplaintsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ComplaintsCountOutputType without action
   */
  export type ComplaintsCountOutputTypeCountResolveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResolvedComplaintsWhereInput
  }


  /**
   * Count Type BuildingsCountOutputType
   */

  export type BuildingsCountOutputType = {
    complaints: number
  }

  export type BuildingsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    complaints?: boolean | BuildingsCountOutputTypeCountComplaintsArgs
  }

  // Custom InputTypes
  /**
   * BuildingsCountOutputType without action
   */
  export type BuildingsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildingsCountOutputType
     */
    select?: BuildingsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BuildingsCountOutputType without action
   */
  export type BuildingsCountOutputTypeCountComplaintsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComplaintsWhereInput
  }


  /**
   * Count Type ComplaintCataegoryCountOutputType
   */

  export type ComplaintCataegoryCountOutputType = {
    complaints: number
    employee: number
  }

  export type ComplaintCataegoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    complaints?: boolean | ComplaintCataegoryCountOutputTypeCountComplaintsArgs
    employee?: boolean | ComplaintCataegoryCountOutputTypeCountEmployeeArgs
  }

  // Custom InputTypes
  /**
   * ComplaintCataegoryCountOutputType without action
   */
  export type ComplaintCataegoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplaintCataegoryCountOutputType
     */
    select?: ComplaintCataegoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ComplaintCataegoryCountOutputType without action
   */
  export type ComplaintCataegoryCountOutputTypeCountComplaintsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComplaintsWhereInput
  }

  /**
   * ComplaintCataegoryCountOutputType without action
   */
  export type ComplaintCataegoryCountOutputTypeCountEmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    profession_id: number | null
  }

  export type UserSumAggregateOutputType = {
    profession_id: number | null
  }

  export type UserMinAggregateOutputType = {
    uid: string | null
    email: string | null
    name: string | null
    roll: string | null
    mobile: string | null
    session: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
    block: boolean | null
    department_id: string | null
    profession_id: number | null
  }

  export type UserMaxAggregateOutputType = {
    uid: string | null
    email: string | null
    name: string | null
    roll: string | null
    mobile: string | null
    session: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
    block: boolean | null
    department_id: string | null
    profession_id: number | null
  }

  export type UserCountAggregateOutputType = {
    uid: number
    email: number
    name: number
    roll: number
    mobile: number
    session: number
    role: number
    createdAt: number
    updatedAt: number
    block: number
    department_id: number
    profession_id: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    profession_id?: true
  }

  export type UserSumAggregateInputType = {
    profession_id?: true
  }

  export type UserMinAggregateInputType = {
    uid?: true
    email?: true
    name?: true
    roll?: true
    mobile?: true
    session?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    block?: true
    department_id?: true
    profession_id?: true
  }

  export type UserMaxAggregateInputType = {
    uid?: true
    email?: true
    name?: true
    roll?: true
    mobile?: true
    session?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    block?: true
    department_id?: true
    profession_id?: true
  }

  export type UserCountAggregateInputType = {
    uid?: true
    email?: true
    name?: true
    roll?: true
    mobile?: true
    session?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    block?: true
    department_id?: true
    profession_id?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    uid: string
    email: string
    name: string
    roll: string | null
    mobile: string
    session: string | null
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    block: boolean
    department_id: string
    profession_id: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    email?: boolean
    name?: boolean
    roll?: boolean
    mobile?: boolean
    session?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    block?: boolean
    department_id?: boolean
    profession_id?: boolean
    Department?: boolean | DepartmentDefaultArgs<ExtArgs>
    Profession?: boolean | ProfessionDefaultArgs<ExtArgs>
    complaint?: boolean | User$complaintArgs<ExtArgs>
    resolve?: boolean | User$resolveArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    uid?: boolean
    email?: boolean
    name?: boolean
    roll?: boolean
    mobile?: boolean
    session?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    block?: boolean
    department_id?: boolean
    profession_id?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uid" | "email" | "name" | "roll" | "mobile" | "session" | "role" | "createdAt" | "updatedAt" | "block" | "department_id" | "profession_id", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Department?: boolean | DepartmentDefaultArgs<ExtArgs>
    Profession?: boolean | ProfessionDefaultArgs<ExtArgs>
    complaint?: boolean | User$complaintArgs<ExtArgs>
    resolve?: boolean | User$resolveArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Department: Prisma.$DepartmentPayload<ExtArgs>
      Profession: Prisma.$ProfessionPayload<ExtArgs>
      complaint: Prisma.$ComplaintsPayload<ExtArgs>[]
      resolve: Prisma.$ResolvedComplaintsPayload<ExtArgs>[]
      notifications: Prisma.$NotificationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uid: string
      email: string
      name: string
      roll: string | null
      mobile: string
      session: string | null
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
      block: boolean
      department_id: string
      profession_id: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `uid`
     * const userWithUidOnly = await prisma.user.findMany({ select: { uid: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Profession<T extends ProfessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessionDefaultArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    complaint<T extends User$complaintArgs<ExtArgs> = {}>(args?: Subset<T, User$complaintArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplaintsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resolve<T extends User$resolveArgs<ExtArgs> = {}>(args?: Subset<T, User$resolveArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResolvedComplaintsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly uid: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly roll: FieldRef<"User", 'String'>
    readonly mobile: FieldRef<"User", 'String'>
    readonly session: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly block: FieldRef<"User", 'Boolean'>
    readonly department_id: FieldRef<"User", 'String'>
    readonly profession_id: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.complaint
   */
  export type User$complaintArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaints
     */
    select?: ComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaints
     */
    omit?: ComplaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintsInclude<ExtArgs> | null
    where?: ComplaintsWhereInput
    orderBy?: ComplaintsOrderByWithRelationInput | ComplaintsOrderByWithRelationInput[]
    cursor?: ComplaintsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComplaintsScalarFieldEnum | ComplaintsScalarFieldEnum[]
  }

  /**
   * User.resolve
   */
  export type User$resolveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResolvedComplaints
     */
    select?: ResolvedComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResolvedComplaints
     */
    omit?: ResolvedComplaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResolvedComplaintsInclude<ExtArgs> | null
    where?: ResolvedComplaintsWhereInput
    orderBy?: ResolvedComplaintsOrderByWithRelationInput | ResolvedComplaintsOrderByWithRelationInput[]
    cursor?: ResolvedComplaintsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResolvedComplaintsScalarFieldEnum | ResolvedComplaintsScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    cursor?: NotificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Profession
   */

  export type AggregateProfession = {
    _count: ProfessionCountAggregateOutputType | null
    _avg: ProfessionAvgAggregateOutputType | null
    _sum: ProfessionSumAggregateOutputType | null
    _min: ProfessionMinAggregateOutputType | null
    _max: ProfessionMaxAggregateOutputType | null
  }

  export type ProfessionAvgAggregateOutputType = {
    profession_id: number | null
  }

  export type ProfessionSumAggregateOutputType = {
    profession_id: number | null
  }

  export type ProfessionMinAggregateOutputType = {
    profession_id: number | null
    profession_name: string | null
  }

  export type ProfessionMaxAggregateOutputType = {
    profession_id: number | null
    profession_name: string | null
  }

  export type ProfessionCountAggregateOutputType = {
    profession_id: number
    profession_name: number
    _all: number
  }


  export type ProfessionAvgAggregateInputType = {
    profession_id?: true
  }

  export type ProfessionSumAggregateInputType = {
    profession_id?: true
  }

  export type ProfessionMinAggregateInputType = {
    profession_id?: true
    profession_name?: true
  }

  export type ProfessionMaxAggregateInputType = {
    profession_id?: true
    profession_name?: true
  }

  export type ProfessionCountAggregateInputType = {
    profession_id?: true
    profession_name?: true
    _all?: true
  }

  export type ProfessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profession to aggregate.
     */
    where?: ProfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professions to fetch.
     */
    orderBy?: ProfessionOrderByWithRelationInput | ProfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Professions
    **/
    _count?: true | ProfessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessionMaxAggregateInputType
  }

  export type GetProfessionAggregateType<T extends ProfessionAggregateArgs> = {
        [P in keyof T & keyof AggregateProfession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfession[P]>
      : GetScalarType<T[P], AggregateProfession[P]>
  }




  export type ProfessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessionWhereInput
    orderBy?: ProfessionOrderByWithAggregationInput | ProfessionOrderByWithAggregationInput[]
    by: ProfessionScalarFieldEnum[] | ProfessionScalarFieldEnum
    having?: ProfessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessionCountAggregateInputType | true
    _avg?: ProfessionAvgAggregateInputType
    _sum?: ProfessionSumAggregateInputType
    _min?: ProfessionMinAggregateInputType
    _max?: ProfessionMaxAggregateInputType
  }

  export type ProfessionGroupByOutputType = {
    profession_id: number
    profession_name: string
    _count: ProfessionCountAggregateOutputType | null
    _avg: ProfessionAvgAggregateOutputType | null
    _sum: ProfessionSumAggregateOutputType | null
    _min: ProfessionMinAggregateOutputType | null
    _max: ProfessionMaxAggregateOutputType | null
  }

  type GetProfessionGroupByPayload<T extends ProfessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessionGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessionGroupByOutputType[P]>
        }
      >
    >


  export type ProfessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    profession_id?: boolean
    profession_name?: boolean
    user?: boolean | Profession$userArgs<ExtArgs>
    _count?: boolean | ProfessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profession"]>



  export type ProfessionSelectScalar = {
    profession_id?: boolean
    profession_name?: boolean
  }

  export type ProfessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"profession_id" | "profession_name", ExtArgs["result"]["profession"]>
  export type ProfessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Profession$userArgs<ExtArgs>
    _count?: boolean | ProfessionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProfessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      profession_id: number
      profession_name: string
    }, ExtArgs["result"]["profession"]>
    composites: {}
  }

  type ProfessionGetPayload<S extends boolean | null | undefined | ProfessionDefaultArgs> = $Result.GetResult<Prisma.$ProfessionPayload, S>

  type ProfessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessionCountAggregateInputType | true
    }

  export interface ProfessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profession'], meta: { name: 'Profession' } }
    /**
     * Find zero or one Profession that matches the filter.
     * @param {ProfessionFindUniqueArgs} args - Arguments to find a Profession
     * @example
     * // Get one Profession
     * const profession = await prisma.profession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfessionFindUniqueArgs>(args: SelectSubset<T, ProfessionFindUniqueArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfessionFindUniqueOrThrowArgs} args - Arguments to find a Profession
     * @example
     * // Get one Profession
     * const profession = await prisma.profession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionFindFirstArgs} args - Arguments to find a Profession
     * @example
     * // Get one Profession
     * const profession = await prisma.profession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfessionFindFirstArgs>(args?: SelectSubset<T, ProfessionFindFirstArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionFindFirstOrThrowArgs} args - Arguments to find a Profession
     * @example
     * // Get one Profession
     * const profession = await prisma.profession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Professions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Professions
     * const professions = await prisma.profession.findMany()
     * 
     * // Get first 10 Professions
     * const professions = await prisma.profession.findMany({ take: 10 })
     * 
     * // Only select the `profession_id`
     * const professionWithProfession_idOnly = await prisma.profession.findMany({ select: { profession_id: true } })
     * 
     */
    findMany<T extends ProfessionFindManyArgs>(args?: SelectSubset<T, ProfessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profession.
     * @param {ProfessionCreateArgs} args - Arguments to create a Profession.
     * @example
     * // Create one Profession
     * const Profession = await prisma.profession.create({
     *   data: {
     *     // ... data to create a Profession
     *   }
     * })
     * 
     */
    create<T extends ProfessionCreateArgs>(args: SelectSubset<T, ProfessionCreateArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Professions.
     * @param {ProfessionCreateManyArgs} args - Arguments to create many Professions.
     * @example
     * // Create many Professions
     * const profession = await prisma.profession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfessionCreateManyArgs>(args?: SelectSubset<T, ProfessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profession.
     * @param {ProfessionDeleteArgs} args - Arguments to delete one Profession.
     * @example
     * // Delete one Profession
     * const Profession = await prisma.profession.delete({
     *   where: {
     *     // ... filter to delete one Profession
     *   }
     * })
     * 
     */
    delete<T extends ProfessionDeleteArgs>(args: SelectSubset<T, ProfessionDeleteArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profession.
     * @param {ProfessionUpdateArgs} args - Arguments to update one Profession.
     * @example
     * // Update one Profession
     * const profession = await prisma.profession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfessionUpdateArgs>(args: SelectSubset<T, ProfessionUpdateArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Professions.
     * @param {ProfessionDeleteManyArgs} args - Arguments to filter Professions to delete.
     * @example
     * // Delete a few Professions
     * const { count } = await prisma.profession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfessionDeleteManyArgs>(args?: SelectSubset<T, ProfessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Professions
     * const profession = await prisma.profession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfessionUpdateManyArgs>(args: SelectSubset<T, ProfessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profession.
     * @param {ProfessionUpsertArgs} args - Arguments to update or create a Profession.
     * @example
     * // Update or create a Profession
     * const profession = await prisma.profession.upsert({
     *   create: {
     *     // ... data to create a Profession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profession we want to update
     *   }
     * })
     */
    upsert<T extends ProfessionUpsertArgs>(args: SelectSubset<T, ProfessionUpsertArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Professions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionCountArgs} args - Arguments to filter Professions to count.
     * @example
     * // Count the number of Professions
     * const count = await prisma.profession.count({
     *   where: {
     *     // ... the filter for the Professions we want to count
     *   }
     * })
    **/
    count<T extends ProfessionCountArgs>(
      args?: Subset<T, ProfessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfessionAggregateArgs>(args: Subset<T, ProfessionAggregateArgs>): Prisma.PrismaPromise<GetProfessionAggregateType<T>>

    /**
     * Group by Profession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfessionGroupByArgs['orderBy'] }
        : { orderBy?: ProfessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profession model
   */
  readonly fields: ProfessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Profession$userArgs<ExtArgs> = {}>(args?: Subset<T, Profession$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profession model
   */
  interface ProfessionFieldRefs {
    readonly profession_id: FieldRef<"Profession", 'Int'>
    readonly profession_name: FieldRef<"Profession", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Profession findUnique
   */
  export type ProfessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter, which Profession to fetch.
     */
    where: ProfessionWhereUniqueInput
  }

  /**
   * Profession findUniqueOrThrow
   */
  export type ProfessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter, which Profession to fetch.
     */
    where: ProfessionWhereUniqueInput
  }

  /**
   * Profession findFirst
   */
  export type ProfessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter, which Profession to fetch.
     */
    where?: ProfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professions to fetch.
     */
    orderBy?: ProfessionOrderByWithRelationInput | ProfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professions.
     */
    cursor?: ProfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professions.
     */
    distinct?: ProfessionScalarFieldEnum | ProfessionScalarFieldEnum[]
  }

  /**
   * Profession findFirstOrThrow
   */
  export type ProfessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter, which Profession to fetch.
     */
    where?: ProfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professions to fetch.
     */
    orderBy?: ProfessionOrderByWithRelationInput | ProfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professions.
     */
    cursor?: ProfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professions.
     */
    distinct?: ProfessionScalarFieldEnum | ProfessionScalarFieldEnum[]
  }

  /**
   * Profession findMany
   */
  export type ProfessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter, which Professions to fetch.
     */
    where?: ProfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professions to fetch.
     */
    orderBy?: ProfessionOrderByWithRelationInput | ProfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Professions.
     */
    cursor?: ProfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professions.
     */
    skip?: number
    distinct?: ProfessionScalarFieldEnum | ProfessionScalarFieldEnum[]
  }

  /**
   * Profession create
   */
  export type ProfessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Profession.
     */
    data: XOR<ProfessionCreateInput, ProfessionUncheckedCreateInput>
  }

  /**
   * Profession createMany
   */
  export type ProfessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Professions.
     */
    data: ProfessionCreateManyInput | ProfessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profession update
   */
  export type ProfessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Profession.
     */
    data: XOR<ProfessionUpdateInput, ProfessionUncheckedUpdateInput>
    /**
     * Choose, which Profession to update.
     */
    where: ProfessionWhereUniqueInput
  }

  /**
   * Profession updateMany
   */
  export type ProfessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Professions.
     */
    data: XOR<ProfessionUpdateManyMutationInput, ProfessionUncheckedUpdateManyInput>
    /**
     * Filter which Professions to update
     */
    where?: ProfessionWhereInput
    /**
     * Limit how many Professions to update.
     */
    limit?: number
  }

  /**
   * Profession upsert
   */
  export type ProfessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Profession to update in case it exists.
     */
    where: ProfessionWhereUniqueInput
    /**
     * In case the Profession found by the `where` argument doesn't exist, create a new Profession with this data.
     */
    create: XOR<ProfessionCreateInput, ProfessionUncheckedCreateInput>
    /**
     * In case the Profession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfessionUpdateInput, ProfessionUncheckedUpdateInput>
  }

  /**
   * Profession delete
   */
  export type ProfessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter which Profession to delete.
     */
    where: ProfessionWhereUniqueInput
  }

  /**
   * Profession deleteMany
   */
  export type ProfessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professions to delete
     */
    where?: ProfessionWhereInput
    /**
     * Limit how many Professions to delete.
     */
    limit?: number
  }

  /**
   * Profession.user
   */
  export type Profession$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Profession without action
   */
  export type ProfessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    employee_id: number | null
    complaint_cat_id: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    employee_id: number | null
    complaint_cat_id: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    employee_id: number | null
    employee_name: string | null
    employee_mobile: string | null
    complaint_cat_id: number | null
  }

  export type EmployeeMaxAggregateOutputType = {
    employee_id: number | null
    employee_name: string | null
    employee_mobile: string | null
    complaint_cat_id: number | null
  }

  export type EmployeeCountAggregateOutputType = {
    employee_id: number
    employee_name: number
    employee_mobile: number
    complaint_cat_id: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    employee_id?: true
    complaint_cat_id?: true
  }

  export type EmployeeSumAggregateInputType = {
    employee_id?: true
    complaint_cat_id?: true
  }

  export type EmployeeMinAggregateInputType = {
    employee_id?: true
    employee_name?: true
    employee_mobile?: true
    complaint_cat_id?: true
  }

  export type EmployeeMaxAggregateInputType = {
    employee_id?: true
    employee_name?: true
    employee_mobile?: true
    complaint_cat_id?: true
  }

  export type EmployeeCountAggregateInputType = {
    employee_id?: true
    employee_name?: true
    employee_mobile?: true
    complaint_cat_id?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    employee_id: number
    employee_name: string
    employee_mobile: string
    complaint_cat_id: number
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employee_id?: boolean
    employee_name?: boolean
    employee_mobile?: boolean
    complaint_cat_id?: boolean
    ComplaintCataegory?: boolean | ComplaintCataegoryDefaultArgs<ExtArgs>
    resolve?: boolean | Employee$resolveArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>



  export type EmployeeSelectScalar = {
    employee_id?: boolean
    employee_name?: boolean
    employee_mobile?: boolean
    complaint_cat_id?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"employee_id" | "employee_name" | "employee_mobile" | "complaint_cat_id", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ComplaintCataegory?: boolean | ComplaintCataegoryDefaultArgs<ExtArgs>
    resolve?: boolean | Employee$resolveArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      ComplaintCataegory: Prisma.$ComplaintCataegoryPayload<ExtArgs>
      resolve: Prisma.$ResolvedComplaintsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      employee_id: number
      employee_name: string
      employee_mobile: string
      complaint_cat_id: number
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `employee_id`
     * const employeeWithEmployee_idOnly = await prisma.employee.findMany({ select: { employee_id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ComplaintCataegory<T extends ComplaintCataegoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ComplaintCataegoryDefaultArgs<ExtArgs>>): Prisma__ComplaintCataegoryClient<$Result.GetResult<Prisma.$ComplaintCataegoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    resolve<T extends Employee$resolveArgs<ExtArgs> = {}>(args?: Subset<T, Employee$resolveArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResolvedComplaintsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly employee_id: FieldRef<"Employee", 'Int'>
    readonly employee_name: FieldRef<"Employee", 'String'>
    readonly employee_mobile: FieldRef<"Employee", 'String'>
    readonly complaint_cat_id: FieldRef<"Employee", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.resolve
   */
  export type Employee$resolveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResolvedComplaints
     */
    select?: ResolvedComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResolvedComplaints
     */
    omit?: ResolvedComplaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResolvedComplaintsInclude<ExtArgs> | null
    where?: ResolvedComplaintsWhereInput
    orderBy?: ResolvedComplaintsOrderByWithRelationInput | ResolvedComplaintsOrderByWithRelationInput[]
    cursor?: ResolvedComplaintsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResolvedComplaintsScalarFieldEnum | ResolvedComplaintsScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentMinAggregateOutputType = {
    department_id: string | null
    dept_full_name: string | null
    dept_shortform: string | null
  }

  export type DepartmentMaxAggregateOutputType = {
    department_id: string | null
    dept_full_name: string | null
    dept_shortform: string | null
  }

  export type DepartmentCountAggregateOutputType = {
    department_id: number
    dept_full_name: number
    dept_shortform: number
    _all: number
  }


  export type DepartmentMinAggregateInputType = {
    department_id?: true
    dept_full_name?: true
    dept_shortform?: true
  }

  export type DepartmentMaxAggregateInputType = {
    department_id?: true
    dept_full_name?: true
    dept_shortform?: true
  }

  export type DepartmentCountAggregateInputType = {
    department_id?: true
    dept_full_name?: true
    dept_shortform?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    department_id: string
    dept_full_name: string
    dept_shortform: string
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    department_id?: boolean
    dept_full_name?: boolean
    dept_shortform?: boolean
    users?: boolean | Department$usersArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>



  export type DepartmentSelectScalar = {
    department_id?: boolean
    dept_full_name?: boolean
    dept_shortform?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"department_id" | "dept_full_name" | "dept_shortform", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Department$usersArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      department_id: string
      dept_full_name: string
      dept_shortform: string
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `department_id`
     * const departmentWithDepartment_idOnly = await prisma.department.findMany({ select: { department_id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Department$usersArgs<ExtArgs> = {}>(args?: Subset<T, Department$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly department_id: FieldRef<"Department", 'String'>
    readonly dept_full_name: FieldRef<"Department", 'String'>
    readonly dept_shortform: FieldRef<"Department", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.users
   */
  export type Department$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model Complaints
   */

  export type AggregateComplaints = {
    _count: ComplaintsCountAggregateOutputType | null
    _avg: ComplaintsAvgAggregateOutputType | null
    _sum: ComplaintsSumAggregateOutputType | null
    _min: ComplaintsMinAggregateOutputType | null
    _max: ComplaintsMaxAggregateOutputType | null
  }

  export type ComplaintsAvgAggregateOutputType = {
    complaint_id: number | null
    complaint_cat_id: number | null
    building_id: number | null
  }

  export type ComplaintsSumAggregateOutputType = {
    complaint_id: number | null
    complaint_cat_id: number | null
    building_id: number | null
  }

  export type ComplaintsMinAggregateOutputType = {
    complaint_id: number | null
    complaint_title: string | null
    complaint_description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.STATUS | null
    emergancy: boolean | null
    complaint_cat_id: number | null
    uid: string | null
    building_id: number | null
    room_no: string | null
  }

  export type ComplaintsMaxAggregateOutputType = {
    complaint_id: number | null
    complaint_title: string | null
    complaint_description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.STATUS | null
    emergancy: boolean | null
    complaint_cat_id: number | null
    uid: string | null
    building_id: number | null
    room_no: string | null
  }

  export type ComplaintsCountAggregateOutputType = {
    complaint_id: number
    complaint_title: number
    complaint_description: number
    createdAt: number
    updatedAt: number
    status: number
    emergancy: number
    complaint_cat_id: number
    uid: number
    building_id: number
    room_no: number
    _all: number
  }


  export type ComplaintsAvgAggregateInputType = {
    complaint_id?: true
    complaint_cat_id?: true
    building_id?: true
  }

  export type ComplaintsSumAggregateInputType = {
    complaint_id?: true
    complaint_cat_id?: true
    building_id?: true
  }

  export type ComplaintsMinAggregateInputType = {
    complaint_id?: true
    complaint_title?: true
    complaint_description?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    emergancy?: true
    complaint_cat_id?: true
    uid?: true
    building_id?: true
    room_no?: true
  }

  export type ComplaintsMaxAggregateInputType = {
    complaint_id?: true
    complaint_title?: true
    complaint_description?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    emergancy?: true
    complaint_cat_id?: true
    uid?: true
    building_id?: true
    room_no?: true
  }

  export type ComplaintsCountAggregateInputType = {
    complaint_id?: true
    complaint_title?: true
    complaint_description?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    emergancy?: true
    complaint_cat_id?: true
    uid?: true
    building_id?: true
    room_no?: true
    _all?: true
  }

  export type ComplaintsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Complaints to aggregate.
     */
    where?: ComplaintsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Complaints to fetch.
     */
    orderBy?: ComplaintsOrderByWithRelationInput | ComplaintsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComplaintsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Complaints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Complaints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Complaints
    **/
    _count?: true | ComplaintsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComplaintsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComplaintsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComplaintsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComplaintsMaxAggregateInputType
  }

  export type GetComplaintsAggregateType<T extends ComplaintsAggregateArgs> = {
        [P in keyof T & keyof AggregateComplaints]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComplaints[P]>
      : GetScalarType<T[P], AggregateComplaints[P]>
  }




  export type ComplaintsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComplaintsWhereInput
    orderBy?: ComplaintsOrderByWithAggregationInput | ComplaintsOrderByWithAggregationInput[]
    by: ComplaintsScalarFieldEnum[] | ComplaintsScalarFieldEnum
    having?: ComplaintsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComplaintsCountAggregateInputType | true
    _avg?: ComplaintsAvgAggregateInputType
    _sum?: ComplaintsSumAggregateInputType
    _min?: ComplaintsMinAggregateInputType
    _max?: ComplaintsMaxAggregateInputType
  }

  export type ComplaintsGroupByOutputType = {
    complaint_id: number
    complaint_title: string
    complaint_description: string
    createdAt: Date
    updatedAt: Date
    status: $Enums.STATUS
    emergancy: boolean
    complaint_cat_id: number | null
    uid: string
    building_id: number | null
    room_no: string | null
    _count: ComplaintsCountAggregateOutputType | null
    _avg: ComplaintsAvgAggregateOutputType | null
    _sum: ComplaintsSumAggregateOutputType | null
    _min: ComplaintsMinAggregateOutputType | null
    _max: ComplaintsMaxAggregateOutputType | null
  }

  type GetComplaintsGroupByPayload<T extends ComplaintsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComplaintsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComplaintsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComplaintsGroupByOutputType[P]>
            : GetScalarType<T[P], ComplaintsGroupByOutputType[P]>
        }
      >
    >


  export type ComplaintsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    complaint_id?: boolean
    complaint_title?: boolean
    complaint_description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    emergancy?: boolean
    complaint_cat_id?: boolean
    uid?: boolean
    building_id?: boolean
    room_no?: boolean
    ComplaintCataegory?: boolean | Complaints$ComplaintCataegoryArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    resolve?: boolean | Complaints$resolveArgs<ExtArgs>
    Buildings?: boolean | Complaints$BuildingsArgs<ExtArgs>
    _count?: boolean | ComplaintsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["complaints"]>



  export type ComplaintsSelectScalar = {
    complaint_id?: boolean
    complaint_title?: boolean
    complaint_description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    emergancy?: boolean
    complaint_cat_id?: boolean
    uid?: boolean
    building_id?: boolean
    room_no?: boolean
  }

  export type ComplaintsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"complaint_id" | "complaint_title" | "complaint_description" | "createdAt" | "updatedAt" | "status" | "emergancy" | "complaint_cat_id" | "uid" | "building_id" | "room_no", ExtArgs["result"]["complaints"]>
  export type ComplaintsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ComplaintCataegory?: boolean | Complaints$ComplaintCataegoryArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    resolve?: boolean | Complaints$resolveArgs<ExtArgs>
    Buildings?: boolean | Complaints$BuildingsArgs<ExtArgs>
    _count?: boolean | ComplaintsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ComplaintsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Complaints"
    objects: {
      ComplaintCataegory: Prisma.$ComplaintCataegoryPayload<ExtArgs> | null
      User: Prisma.$UserPayload<ExtArgs>
      resolve: Prisma.$ResolvedComplaintsPayload<ExtArgs>[]
      Buildings: Prisma.$BuildingsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      complaint_id: number
      complaint_title: string
      complaint_description: string
      createdAt: Date
      updatedAt: Date
      status: $Enums.STATUS
      emergancy: boolean
      complaint_cat_id: number | null
      uid: string
      building_id: number | null
      room_no: string | null
    }, ExtArgs["result"]["complaints"]>
    composites: {}
  }

  type ComplaintsGetPayload<S extends boolean | null | undefined | ComplaintsDefaultArgs> = $Result.GetResult<Prisma.$ComplaintsPayload, S>

  type ComplaintsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComplaintsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComplaintsCountAggregateInputType | true
    }

  export interface ComplaintsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Complaints'], meta: { name: 'Complaints' } }
    /**
     * Find zero or one Complaints that matches the filter.
     * @param {ComplaintsFindUniqueArgs} args - Arguments to find a Complaints
     * @example
     * // Get one Complaints
     * const complaints = await prisma.complaints.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComplaintsFindUniqueArgs>(args: SelectSubset<T, ComplaintsFindUniqueArgs<ExtArgs>>): Prisma__ComplaintsClient<$Result.GetResult<Prisma.$ComplaintsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Complaints that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComplaintsFindUniqueOrThrowArgs} args - Arguments to find a Complaints
     * @example
     * // Get one Complaints
     * const complaints = await prisma.complaints.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComplaintsFindUniqueOrThrowArgs>(args: SelectSubset<T, ComplaintsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComplaintsClient<$Result.GetResult<Prisma.$ComplaintsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Complaints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintsFindFirstArgs} args - Arguments to find a Complaints
     * @example
     * // Get one Complaints
     * const complaints = await prisma.complaints.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComplaintsFindFirstArgs>(args?: SelectSubset<T, ComplaintsFindFirstArgs<ExtArgs>>): Prisma__ComplaintsClient<$Result.GetResult<Prisma.$ComplaintsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Complaints that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintsFindFirstOrThrowArgs} args - Arguments to find a Complaints
     * @example
     * // Get one Complaints
     * const complaints = await prisma.complaints.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComplaintsFindFirstOrThrowArgs>(args?: SelectSubset<T, ComplaintsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComplaintsClient<$Result.GetResult<Prisma.$ComplaintsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Complaints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Complaints
     * const complaints = await prisma.complaints.findMany()
     * 
     * // Get first 10 Complaints
     * const complaints = await prisma.complaints.findMany({ take: 10 })
     * 
     * // Only select the `complaint_id`
     * const complaintsWithComplaint_idOnly = await prisma.complaints.findMany({ select: { complaint_id: true } })
     * 
     */
    findMany<T extends ComplaintsFindManyArgs>(args?: SelectSubset<T, ComplaintsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplaintsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Complaints.
     * @param {ComplaintsCreateArgs} args - Arguments to create a Complaints.
     * @example
     * // Create one Complaints
     * const Complaints = await prisma.complaints.create({
     *   data: {
     *     // ... data to create a Complaints
     *   }
     * })
     * 
     */
    create<T extends ComplaintsCreateArgs>(args: SelectSubset<T, ComplaintsCreateArgs<ExtArgs>>): Prisma__ComplaintsClient<$Result.GetResult<Prisma.$ComplaintsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Complaints.
     * @param {ComplaintsCreateManyArgs} args - Arguments to create many Complaints.
     * @example
     * // Create many Complaints
     * const complaints = await prisma.complaints.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComplaintsCreateManyArgs>(args?: SelectSubset<T, ComplaintsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Complaints.
     * @param {ComplaintsDeleteArgs} args - Arguments to delete one Complaints.
     * @example
     * // Delete one Complaints
     * const Complaints = await prisma.complaints.delete({
     *   where: {
     *     // ... filter to delete one Complaints
     *   }
     * })
     * 
     */
    delete<T extends ComplaintsDeleteArgs>(args: SelectSubset<T, ComplaintsDeleteArgs<ExtArgs>>): Prisma__ComplaintsClient<$Result.GetResult<Prisma.$ComplaintsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Complaints.
     * @param {ComplaintsUpdateArgs} args - Arguments to update one Complaints.
     * @example
     * // Update one Complaints
     * const complaints = await prisma.complaints.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComplaintsUpdateArgs>(args: SelectSubset<T, ComplaintsUpdateArgs<ExtArgs>>): Prisma__ComplaintsClient<$Result.GetResult<Prisma.$ComplaintsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Complaints.
     * @param {ComplaintsDeleteManyArgs} args - Arguments to filter Complaints to delete.
     * @example
     * // Delete a few Complaints
     * const { count } = await prisma.complaints.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComplaintsDeleteManyArgs>(args?: SelectSubset<T, ComplaintsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Complaints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Complaints
     * const complaints = await prisma.complaints.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComplaintsUpdateManyArgs>(args: SelectSubset<T, ComplaintsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Complaints.
     * @param {ComplaintsUpsertArgs} args - Arguments to update or create a Complaints.
     * @example
     * // Update or create a Complaints
     * const complaints = await prisma.complaints.upsert({
     *   create: {
     *     // ... data to create a Complaints
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Complaints we want to update
     *   }
     * })
     */
    upsert<T extends ComplaintsUpsertArgs>(args: SelectSubset<T, ComplaintsUpsertArgs<ExtArgs>>): Prisma__ComplaintsClient<$Result.GetResult<Prisma.$ComplaintsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Complaints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintsCountArgs} args - Arguments to filter Complaints to count.
     * @example
     * // Count the number of Complaints
     * const count = await prisma.complaints.count({
     *   where: {
     *     // ... the filter for the Complaints we want to count
     *   }
     * })
    **/
    count<T extends ComplaintsCountArgs>(
      args?: Subset<T, ComplaintsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComplaintsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Complaints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComplaintsAggregateArgs>(args: Subset<T, ComplaintsAggregateArgs>): Prisma.PrismaPromise<GetComplaintsAggregateType<T>>

    /**
     * Group by Complaints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComplaintsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComplaintsGroupByArgs['orderBy'] }
        : { orderBy?: ComplaintsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComplaintsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComplaintsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Complaints model
   */
  readonly fields: ComplaintsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Complaints.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComplaintsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ComplaintCataegory<T extends Complaints$ComplaintCataegoryArgs<ExtArgs> = {}>(args?: Subset<T, Complaints$ComplaintCataegoryArgs<ExtArgs>>): Prisma__ComplaintCataegoryClient<$Result.GetResult<Prisma.$ComplaintCataegoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    resolve<T extends Complaints$resolveArgs<ExtArgs> = {}>(args?: Subset<T, Complaints$resolveArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResolvedComplaintsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Buildings<T extends Complaints$BuildingsArgs<ExtArgs> = {}>(args?: Subset<T, Complaints$BuildingsArgs<ExtArgs>>): Prisma__BuildingsClient<$Result.GetResult<Prisma.$BuildingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Complaints model
   */
  interface ComplaintsFieldRefs {
    readonly complaint_id: FieldRef<"Complaints", 'Int'>
    readonly complaint_title: FieldRef<"Complaints", 'String'>
    readonly complaint_description: FieldRef<"Complaints", 'String'>
    readonly createdAt: FieldRef<"Complaints", 'DateTime'>
    readonly updatedAt: FieldRef<"Complaints", 'DateTime'>
    readonly status: FieldRef<"Complaints", 'STATUS'>
    readonly emergancy: FieldRef<"Complaints", 'Boolean'>
    readonly complaint_cat_id: FieldRef<"Complaints", 'Int'>
    readonly uid: FieldRef<"Complaints", 'String'>
    readonly building_id: FieldRef<"Complaints", 'Int'>
    readonly room_no: FieldRef<"Complaints", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Complaints findUnique
   */
  export type ComplaintsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaints
     */
    select?: ComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaints
     */
    omit?: ComplaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintsInclude<ExtArgs> | null
    /**
     * Filter, which Complaints to fetch.
     */
    where: ComplaintsWhereUniqueInput
  }

  /**
   * Complaints findUniqueOrThrow
   */
  export type ComplaintsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaints
     */
    select?: ComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaints
     */
    omit?: ComplaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintsInclude<ExtArgs> | null
    /**
     * Filter, which Complaints to fetch.
     */
    where: ComplaintsWhereUniqueInput
  }

  /**
   * Complaints findFirst
   */
  export type ComplaintsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaints
     */
    select?: ComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaints
     */
    omit?: ComplaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintsInclude<ExtArgs> | null
    /**
     * Filter, which Complaints to fetch.
     */
    where?: ComplaintsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Complaints to fetch.
     */
    orderBy?: ComplaintsOrderByWithRelationInput | ComplaintsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Complaints.
     */
    cursor?: ComplaintsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Complaints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Complaints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Complaints.
     */
    distinct?: ComplaintsScalarFieldEnum | ComplaintsScalarFieldEnum[]
  }

  /**
   * Complaints findFirstOrThrow
   */
  export type ComplaintsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaints
     */
    select?: ComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaints
     */
    omit?: ComplaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintsInclude<ExtArgs> | null
    /**
     * Filter, which Complaints to fetch.
     */
    where?: ComplaintsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Complaints to fetch.
     */
    orderBy?: ComplaintsOrderByWithRelationInput | ComplaintsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Complaints.
     */
    cursor?: ComplaintsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Complaints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Complaints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Complaints.
     */
    distinct?: ComplaintsScalarFieldEnum | ComplaintsScalarFieldEnum[]
  }

  /**
   * Complaints findMany
   */
  export type ComplaintsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaints
     */
    select?: ComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaints
     */
    omit?: ComplaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintsInclude<ExtArgs> | null
    /**
     * Filter, which Complaints to fetch.
     */
    where?: ComplaintsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Complaints to fetch.
     */
    orderBy?: ComplaintsOrderByWithRelationInput | ComplaintsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Complaints.
     */
    cursor?: ComplaintsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Complaints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Complaints.
     */
    skip?: number
    distinct?: ComplaintsScalarFieldEnum | ComplaintsScalarFieldEnum[]
  }

  /**
   * Complaints create
   */
  export type ComplaintsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaints
     */
    select?: ComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaints
     */
    omit?: ComplaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintsInclude<ExtArgs> | null
    /**
     * The data needed to create a Complaints.
     */
    data: XOR<ComplaintsCreateInput, ComplaintsUncheckedCreateInput>
  }

  /**
   * Complaints createMany
   */
  export type ComplaintsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Complaints.
     */
    data: ComplaintsCreateManyInput | ComplaintsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Complaints update
   */
  export type ComplaintsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaints
     */
    select?: ComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaints
     */
    omit?: ComplaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintsInclude<ExtArgs> | null
    /**
     * The data needed to update a Complaints.
     */
    data: XOR<ComplaintsUpdateInput, ComplaintsUncheckedUpdateInput>
    /**
     * Choose, which Complaints to update.
     */
    where: ComplaintsWhereUniqueInput
  }

  /**
   * Complaints updateMany
   */
  export type ComplaintsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Complaints.
     */
    data: XOR<ComplaintsUpdateManyMutationInput, ComplaintsUncheckedUpdateManyInput>
    /**
     * Filter which Complaints to update
     */
    where?: ComplaintsWhereInput
    /**
     * Limit how many Complaints to update.
     */
    limit?: number
  }

  /**
   * Complaints upsert
   */
  export type ComplaintsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaints
     */
    select?: ComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaints
     */
    omit?: ComplaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintsInclude<ExtArgs> | null
    /**
     * The filter to search for the Complaints to update in case it exists.
     */
    where: ComplaintsWhereUniqueInput
    /**
     * In case the Complaints found by the `where` argument doesn't exist, create a new Complaints with this data.
     */
    create: XOR<ComplaintsCreateInput, ComplaintsUncheckedCreateInput>
    /**
     * In case the Complaints was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComplaintsUpdateInput, ComplaintsUncheckedUpdateInput>
  }

  /**
   * Complaints delete
   */
  export type ComplaintsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaints
     */
    select?: ComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaints
     */
    omit?: ComplaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintsInclude<ExtArgs> | null
    /**
     * Filter which Complaints to delete.
     */
    where: ComplaintsWhereUniqueInput
  }

  /**
   * Complaints deleteMany
   */
  export type ComplaintsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Complaints to delete
     */
    where?: ComplaintsWhereInput
    /**
     * Limit how many Complaints to delete.
     */
    limit?: number
  }

  /**
   * Complaints.ComplaintCataegory
   */
  export type Complaints$ComplaintCataegoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplaintCataegory
     */
    select?: ComplaintCataegorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplaintCataegory
     */
    omit?: ComplaintCataegoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintCataegoryInclude<ExtArgs> | null
    where?: ComplaintCataegoryWhereInput
  }

  /**
   * Complaints.resolve
   */
  export type Complaints$resolveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResolvedComplaints
     */
    select?: ResolvedComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResolvedComplaints
     */
    omit?: ResolvedComplaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResolvedComplaintsInclude<ExtArgs> | null
    where?: ResolvedComplaintsWhereInput
    orderBy?: ResolvedComplaintsOrderByWithRelationInput | ResolvedComplaintsOrderByWithRelationInput[]
    cursor?: ResolvedComplaintsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResolvedComplaintsScalarFieldEnum | ResolvedComplaintsScalarFieldEnum[]
  }

  /**
   * Complaints.Buildings
   */
  export type Complaints$BuildingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buildings
     */
    select?: BuildingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buildings
     */
    omit?: BuildingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingsInclude<ExtArgs> | null
    where?: BuildingsWhereInput
  }

  /**
   * Complaints without action
   */
  export type ComplaintsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaints
     */
    select?: ComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaints
     */
    omit?: ComplaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintsInclude<ExtArgs> | null
  }


  /**
   * Model Buildings
   */

  export type AggregateBuildings = {
    _count: BuildingsCountAggregateOutputType | null
    _avg: BuildingsAvgAggregateOutputType | null
    _sum: BuildingsSumAggregateOutputType | null
    _min: BuildingsMinAggregateOutputType | null
    _max: BuildingsMaxAggregateOutputType | null
  }

  export type BuildingsAvgAggregateOutputType = {
    building_id: number | null
  }

  export type BuildingsSumAggregateOutputType = {
    building_id: number | null
  }

  export type BuildingsMinAggregateOutputType = {
    building_id: number | null
    building_name: string | null
  }

  export type BuildingsMaxAggregateOutputType = {
    building_id: number | null
    building_name: string | null
  }

  export type BuildingsCountAggregateOutputType = {
    building_id: number
    building_name: number
    _all: number
  }


  export type BuildingsAvgAggregateInputType = {
    building_id?: true
  }

  export type BuildingsSumAggregateInputType = {
    building_id?: true
  }

  export type BuildingsMinAggregateInputType = {
    building_id?: true
    building_name?: true
  }

  export type BuildingsMaxAggregateInputType = {
    building_id?: true
    building_name?: true
  }

  export type BuildingsCountAggregateInputType = {
    building_id?: true
    building_name?: true
    _all?: true
  }

  export type BuildingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Buildings to aggregate.
     */
    where?: BuildingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: BuildingsOrderByWithRelationInput | BuildingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BuildingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Buildings
    **/
    _count?: true | BuildingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BuildingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BuildingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BuildingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BuildingsMaxAggregateInputType
  }

  export type GetBuildingsAggregateType<T extends BuildingsAggregateArgs> = {
        [P in keyof T & keyof AggregateBuildings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuildings[P]>
      : GetScalarType<T[P], AggregateBuildings[P]>
  }




  export type BuildingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuildingsWhereInput
    orderBy?: BuildingsOrderByWithAggregationInput | BuildingsOrderByWithAggregationInput[]
    by: BuildingsScalarFieldEnum[] | BuildingsScalarFieldEnum
    having?: BuildingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BuildingsCountAggregateInputType | true
    _avg?: BuildingsAvgAggregateInputType
    _sum?: BuildingsSumAggregateInputType
    _min?: BuildingsMinAggregateInputType
    _max?: BuildingsMaxAggregateInputType
  }

  export type BuildingsGroupByOutputType = {
    building_id: number
    building_name: string
    _count: BuildingsCountAggregateOutputType | null
    _avg: BuildingsAvgAggregateOutputType | null
    _sum: BuildingsSumAggregateOutputType | null
    _min: BuildingsMinAggregateOutputType | null
    _max: BuildingsMaxAggregateOutputType | null
  }

  type GetBuildingsGroupByPayload<T extends BuildingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BuildingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BuildingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BuildingsGroupByOutputType[P]>
            : GetScalarType<T[P], BuildingsGroupByOutputType[P]>
        }
      >
    >


  export type BuildingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    building_id?: boolean
    building_name?: boolean
    complaints?: boolean | Buildings$complaintsArgs<ExtArgs>
    _count?: boolean | BuildingsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buildings"]>



  export type BuildingsSelectScalar = {
    building_id?: boolean
    building_name?: boolean
  }

  export type BuildingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"building_id" | "building_name", ExtArgs["result"]["buildings"]>
  export type BuildingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    complaints?: boolean | Buildings$complaintsArgs<ExtArgs>
    _count?: boolean | BuildingsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BuildingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Buildings"
    objects: {
      complaints: Prisma.$ComplaintsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      building_id: number
      building_name: string
    }, ExtArgs["result"]["buildings"]>
    composites: {}
  }

  type BuildingsGetPayload<S extends boolean | null | undefined | BuildingsDefaultArgs> = $Result.GetResult<Prisma.$BuildingsPayload, S>

  type BuildingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BuildingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BuildingsCountAggregateInputType | true
    }

  export interface BuildingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Buildings'], meta: { name: 'Buildings' } }
    /**
     * Find zero or one Buildings that matches the filter.
     * @param {BuildingsFindUniqueArgs} args - Arguments to find a Buildings
     * @example
     * // Get one Buildings
     * const buildings = await prisma.buildings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BuildingsFindUniqueArgs>(args: SelectSubset<T, BuildingsFindUniqueArgs<ExtArgs>>): Prisma__BuildingsClient<$Result.GetResult<Prisma.$BuildingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Buildings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BuildingsFindUniqueOrThrowArgs} args - Arguments to find a Buildings
     * @example
     * // Get one Buildings
     * const buildings = await prisma.buildings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BuildingsFindUniqueOrThrowArgs>(args: SelectSubset<T, BuildingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BuildingsClient<$Result.GetResult<Prisma.$BuildingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Buildings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingsFindFirstArgs} args - Arguments to find a Buildings
     * @example
     * // Get one Buildings
     * const buildings = await prisma.buildings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BuildingsFindFirstArgs>(args?: SelectSubset<T, BuildingsFindFirstArgs<ExtArgs>>): Prisma__BuildingsClient<$Result.GetResult<Prisma.$BuildingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Buildings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingsFindFirstOrThrowArgs} args - Arguments to find a Buildings
     * @example
     * // Get one Buildings
     * const buildings = await prisma.buildings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BuildingsFindFirstOrThrowArgs>(args?: SelectSubset<T, BuildingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BuildingsClient<$Result.GetResult<Prisma.$BuildingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Buildings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Buildings
     * const buildings = await prisma.buildings.findMany()
     * 
     * // Get first 10 Buildings
     * const buildings = await prisma.buildings.findMany({ take: 10 })
     * 
     * // Only select the `building_id`
     * const buildingsWithBuilding_idOnly = await prisma.buildings.findMany({ select: { building_id: true } })
     * 
     */
    findMany<T extends BuildingsFindManyArgs>(args?: SelectSubset<T, BuildingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Buildings.
     * @param {BuildingsCreateArgs} args - Arguments to create a Buildings.
     * @example
     * // Create one Buildings
     * const Buildings = await prisma.buildings.create({
     *   data: {
     *     // ... data to create a Buildings
     *   }
     * })
     * 
     */
    create<T extends BuildingsCreateArgs>(args: SelectSubset<T, BuildingsCreateArgs<ExtArgs>>): Prisma__BuildingsClient<$Result.GetResult<Prisma.$BuildingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Buildings.
     * @param {BuildingsCreateManyArgs} args - Arguments to create many Buildings.
     * @example
     * // Create many Buildings
     * const buildings = await prisma.buildings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BuildingsCreateManyArgs>(args?: SelectSubset<T, BuildingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Buildings.
     * @param {BuildingsDeleteArgs} args - Arguments to delete one Buildings.
     * @example
     * // Delete one Buildings
     * const Buildings = await prisma.buildings.delete({
     *   where: {
     *     // ... filter to delete one Buildings
     *   }
     * })
     * 
     */
    delete<T extends BuildingsDeleteArgs>(args: SelectSubset<T, BuildingsDeleteArgs<ExtArgs>>): Prisma__BuildingsClient<$Result.GetResult<Prisma.$BuildingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Buildings.
     * @param {BuildingsUpdateArgs} args - Arguments to update one Buildings.
     * @example
     * // Update one Buildings
     * const buildings = await prisma.buildings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BuildingsUpdateArgs>(args: SelectSubset<T, BuildingsUpdateArgs<ExtArgs>>): Prisma__BuildingsClient<$Result.GetResult<Prisma.$BuildingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Buildings.
     * @param {BuildingsDeleteManyArgs} args - Arguments to filter Buildings to delete.
     * @example
     * // Delete a few Buildings
     * const { count } = await prisma.buildings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BuildingsDeleteManyArgs>(args?: SelectSubset<T, BuildingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buildings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Buildings
     * const buildings = await prisma.buildings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BuildingsUpdateManyArgs>(args: SelectSubset<T, BuildingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Buildings.
     * @param {BuildingsUpsertArgs} args - Arguments to update or create a Buildings.
     * @example
     * // Update or create a Buildings
     * const buildings = await prisma.buildings.upsert({
     *   create: {
     *     // ... data to create a Buildings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Buildings we want to update
     *   }
     * })
     */
    upsert<T extends BuildingsUpsertArgs>(args: SelectSubset<T, BuildingsUpsertArgs<ExtArgs>>): Prisma__BuildingsClient<$Result.GetResult<Prisma.$BuildingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Buildings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingsCountArgs} args - Arguments to filter Buildings to count.
     * @example
     * // Count the number of Buildings
     * const count = await prisma.buildings.count({
     *   where: {
     *     // ... the filter for the Buildings we want to count
     *   }
     * })
    **/
    count<T extends BuildingsCountArgs>(
      args?: Subset<T, BuildingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BuildingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Buildings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BuildingsAggregateArgs>(args: Subset<T, BuildingsAggregateArgs>): Prisma.PrismaPromise<GetBuildingsAggregateType<T>>

    /**
     * Group by Buildings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BuildingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BuildingsGroupByArgs['orderBy'] }
        : { orderBy?: BuildingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BuildingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBuildingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Buildings model
   */
  readonly fields: BuildingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Buildings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BuildingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    complaints<T extends Buildings$complaintsArgs<ExtArgs> = {}>(args?: Subset<T, Buildings$complaintsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplaintsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Buildings model
   */
  interface BuildingsFieldRefs {
    readonly building_id: FieldRef<"Buildings", 'Int'>
    readonly building_name: FieldRef<"Buildings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Buildings findUnique
   */
  export type BuildingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buildings
     */
    select?: BuildingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buildings
     */
    omit?: BuildingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingsInclude<ExtArgs> | null
    /**
     * Filter, which Buildings to fetch.
     */
    where: BuildingsWhereUniqueInput
  }

  /**
   * Buildings findUniqueOrThrow
   */
  export type BuildingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buildings
     */
    select?: BuildingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buildings
     */
    omit?: BuildingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingsInclude<ExtArgs> | null
    /**
     * Filter, which Buildings to fetch.
     */
    where: BuildingsWhereUniqueInput
  }

  /**
   * Buildings findFirst
   */
  export type BuildingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buildings
     */
    select?: BuildingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buildings
     */
    omit?: BuildingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingsInclude<ExtArgs> | null
    /**
     * Filter, which Buildings to fetch.
     */
    where?: BuildingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: BuildingsOrderByWithRelationInput | BuildingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buildings.
     */
    cursor?: BuildingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buildings.
     */
    distinct?: BuildingsScalarFieldEnum | BuildingsScalarFieldEnum[]
  }

  /**
   * Buildings findFirstOrThrow
   */
  export type BuildingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buildings
     */
    select?: BuildingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buildings
     */
    omit?: BuildingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingsInclude<ExtArgs> | null
    /**
     * Filter, which Buildings to fetch.
     */
    where?: BuildingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: BuildingsOrderByWithRelationInput | BuildingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buildings.
     */
    cursor?: BuildingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buildings.
     */
    distinct?: BuildingsScalarFieldEnum | BuildingsScalarFieldEnum[]
  }

  /**
   * Buildings findMany
   */
  export type BuildingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buildings
     */
    select?: BuildingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buildings
     */
    omit?: BuildingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingsInclude<ExtArgs> | null
    /**
     * Filter, which Buildings to fetch.
     */
    where?: BuildingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: BuildingsOrderByWithRelationInput | BuildingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Buildings.
     */
    cursor?: BuildingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    distinct?: BuildingsScalarFieldEnum | BuildingsScalarFieldEnum[]
  }

  /**
   * Buildings create
   */
  export type BuildingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buildings
     */
    select?: BuildingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buildings
     */
    omit?: BuildingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingsInclude<ExtArgs> | null
    /**
     * The data needed to create a Buildings.
     */
    data: XOR<BuildingsCreateInput, BuildingsUncheckedCreateInput>
  }

  /**
   * Buildings createMany
   */
  export type BuildingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Buildings.
     */
    data: BuildingsCreateManyInput | BuildingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Buildings update
   */
  export type BuildingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buildings
     */
    select?: BuildingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buildings
     */
    omit?: BuildingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingsInclude<ExtArgs> | null
    /**
     * The data needed to update a Buildings.
     */
    data: XOR<BuildingsUpdateInput, BuildingsUncheckedUpdateInput>
    /**
     * Choose, which Buildings to update.
     */
    where: BuildingsWhereUniqueInput
  }

  /**
   * Buildings updateMany
   */
  export type BuildingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Buildings.
     */
    data: XOR<BuildingsUpdateManyMutationInput, BuildingsUncheckedUpdateManyInput>
    /**
     * Filter which Buildings to update
     */
    where?: BuildingsWhereInput
    /**
     * Limit how many Buildings to update.
     */
    limit?: number
  }

  /**
   * Buildings upsert
   */
  export type BuildingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buildings
     */
    select?: BuildingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buildings
     */
    omit?: BuildingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingsInclude<ExtArgs> | null
    /**
     * The filter to search for the Buildings to update in case it exists.
     */
    where: BuildingsWhereUniqueInput
    /**
     * In case the Buildings found by the `where` argument doesn't exist, create a new Buildings with this data.
     */
    create: XOR<BuildingsCreateInput, BuildingsUncheckedCreateInput>
    /**
     * In case the Buildings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BuildingsUpdateInput, BuildingsUncheckedUpdateInput>
  }

  /**
   * Buildings delete
   */
  export type BuildingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buildings
     */
    select?: BuildingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buildings
     */
    omit?: BuildingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingsInclude<ExtArgs> | null
    /**
     * Filter which Buildings to delete.
     */
    where: BuildingsWhereUniqueInput
  }

  /**
   * Buildings deleteMany
   */
  export type BuildingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Buildings to delete
     */
    where?: BuildingsWhereInput
    /**
     * Limit how many Buildings to delete.
     */
    limit?: number
  }

  /**
   * Buildings.complaints
   */
  export type Buildings$complaintsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaints
     */
    select?: ComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaints
     */
    omit?: ComplaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintsInclude<ExtArgs> | null
    where?: ComplaintsWhereInput
    orderBy?: ComplaintsOrderByWithRelationInput | ComplaintsOrderByWithRelationInput[]
    cursor?: ComplaintsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComplaintsScalarFieldEnum | ComplaintsScalarFieldEnum[]
  }

  /**
   * Buildings without action
   */
  export type BuildingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buildings
     */
    select?: BuildingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buildings
     */
    omit?: BuildingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingsInclude<ExtArgs> | null
  }


  /**
   * Model ComplaintCataegory
   */

  export type AggregateComplaintCataegory = {
    _count: ComplaintCataegoryCountAggregateOutputType | null
    _avg: ComplaintCataegoryAvgAggregateOutputType | null
    _sum: ComplaintCataegorySumAggregateOutputType | null
    _min: ComplaintCataegoryMinAggregateOutputType | null
    _max: ComplaintCataegoryMaxAggregateOutputType | null
  }

  export type ComplaintCataegoryAvgAggregateOutputType = {
    complaint_cat_id: number | null
  }

  export type ComplaintCataegorySumAggregateOutputType = {
    complaint_cat_id: number | null
  }

  export type ComplaintCataegoryMinAggregateOutputType = {
    complaint_cat_id: number | null
    complaint_cat_name: string | null
  }

  export type ComplaintCataegoryMaxAggregateOutputType = {
    complaint_cat_id: number | null
    complaint_cat_name: string | null
  }

  export type ComplaintCataegoryCountAggregateOutputType = {
    complaint_cat_id: number
    complaint_cat_name: number
    _all: number
  }


  export type ComplaintCataegoryAvgAggregateInputType = {
    complaint_cat_id?: true
  }

  export type ComplaintCataegorySumAggregateInputType = {
    complaint_cat_id?: true
  }

  export type ComplaintCataegoryMinAggregateInputType = {
    complaint_cat_id?: true
    complaint_cat_name?: true
  }

  export type ComplaintCataegoryMaxAggregateInputType = {
    complaint_cat_id?: true
    complaint_cat_name?: true
  }

  export type ComplaintCataegoryCountAggregateInputType = {
    complaint_cat_id?: true
    complaint_cat_name?: true
    _all?: true
  }

  export type ComplaintCataegoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComplaintCataegory to aggregate.
     */
    where?: ComplaintCataegoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComplaintCataegories to fetch.
     */
    orderBy?: ComplaintCataegoryOrderByWithRelationInput | ComplaintCataegoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComplaintCataegoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComplaintCataegories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComplaintCataegories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ComplaintCataegories
    **/
    _count?: true | ComplaintCataegoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComplaintCataegoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComplaintCataegorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComplaintCataegoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComplaintCataegoryMaxAggregateInputType
  }

  export type GetComplaintCataegoryAggregateType<T extends ComplaintCataegoryAggregateArgs> = {
        [P in keyof T & keyof AggregateComplaintCataegory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComplaintCataegory[P]>
      : GetScalarType<T[P], AggregateComplaintCataegory[P]>
  }




  export type ComplaintCataegoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComplaintCataegoryWhereInput
    orderBy?: ComplaintCataegoryOrderByWithAggregationInput | ComplaintCataegoryOrderByWithAggregationInput[]
    by: ComplaintCataegoryScalarFieldEnum[] | ComplaintCataegoryScalarFieldEnum
    having?: ComplaintCataegoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComplaintCataegoryCountAggregateInputType | true
    _avg?: ComplaintCataegoryAvgAggregateInputType
    _sum?: ComplaintCataegorySumAggregateInputType
    _min?: ComplaintCataegoryMinAggregateInputType
    _max?: ComplaintCataegoryMaxAggregateInputType
  }

  export type ComplaintCataegoryGroupByOutputType = {
    complaint_cat_id: number
    complaint_cat_name: string
    _count: ComplaintCataegoryCountAggregateOutputType | null
    _avg: ComplaintCataegoryAvgAggregateOutputType | null
    _sum: ComplaintCataegorySumAggregateOutputType | null
    _min: ComplaintCataegoryMinAggregateOutputType | null
    _max: ComplaintCataegoryMaxAggregateOutputType | null
  }

  type GetComplaintCataegoryGroupByPayload<T extends ComplaintCataegoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComplaintCataegoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComplaintCataegoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComplaintCataegoryGroupByOutputType[P]>
            : GetScalarType<T[P], ComplaintCataegoryGroupByOutputType[P]>
        }
      >
    >


  export type ComplaintCataegorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    complaint_cat_id?: boolean
    complaint_cat_name?: boolean
    complaints?: boolean | ComplaintCataegory$complaintsArgs<ExtArgs>
    employee?: boolean | ComplaintCataegory$employeeArgs<ExtArgs>
    _count?: boolean | ComplaintCataegoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["complaintCataegory"]>



  export type ComplaintCataegorySelectScalar = {
    complaint_cat_id?: boolean
    complaint_cat_name?: boolean
  }

  export type ComplaintCataegoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"complaint_cat_id" | "complaint_cat_name", ExtArgs["result"]["complaintCataegory"]>
  export type ComplaintCataegoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    complaints?: boolean | ComplaintCataegory$complaintsArgs<ExtArgs>
    employee?: boolean | ComplaintCataegory$employeeArgs<ExtArgs>
    _count?: boolean | ComplaintCataegoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ComplaintCataegoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ComplaintCataegory"
    objects: {
      complaints: Prisma.$ComplaintsPayload<ExtArgs>[]
      employee: Prisma.$EmployeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      complaint_cat_id: number
      complaint_cat_name: string
    }, ExtArgs["result"]["complaintCataegory"]>
    composites: {}
  }

  type ComplaintCataegoryGetPayload<S extends boolean | null | undefined | ComplaintCataegoryDefaultArgs> = $Result.GetResult<Prisma.$ComplaintCataegoryPayload, S>

  type ComplaintCataegoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComplaintCataegoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComplaintCataegoryCountAggregateInputType | true
    }

  export interface ComplaintCataegoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ComplaintCataegory'], meta: { name: 'ComplaintCataegory' } }
    /**
     * Find zero or one ComplaintCataegory that matches the filter.
     * @param {ComplaintCataegoryFindUniqueArgs} args - Arguments to find a ComplaintCataegory
     * @example
     * // Get one ComplaintCataegory
     * const complaintCataegory = await prisma.complaintCataegory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComplaintCataegoryFindUniqueArgs>(args: SelectSubset<T, ComplaintCataegoryFindUniqueArgs<ExtArgs>>): Prisma__ComplaintCataegoryClient<$Result.GetResult<Prisma.$ComplaintCataegoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ComplaintCataegory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComplaintCataegoryFindUniqueOrThrowArgs} args - Arguments to find a ComplaintCataegory
     * @example
     * // Get one ComplaintCataegory
     * const complaintCataegory = await prisma.complaintCataegory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComplaintCataegoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ComplaintCataegoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComplaintCataegoryClient<$Result.GetResult<Prisma.$ComplaintCataegoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ComplaintCataegory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintCataegoryFindFirstArgs} args - Arguments to find a ComplaintCataegory
     * @example
     * // Get one ComplaintCataegory
     * const complaintCataegory = await prisma.complaintCataegory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComplaintCataegoryFindFirstArgs>(args?: SelectSubset<T, ComplaintCataegoryFindFirstArgs<ExtArgs>>): Prisma__ComplaintCataegoryClient<$Result.GetResult<Prisma.$ComplaintCataegoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ComplaintCataegory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintCataegoryFindFirstOrThrowArgs} args - Arguments to find a ComplaintCataegory
     * @example
     * // Get one ComplaintCataegory
     * const complaintCataegory = await prisma.complaintCataegory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComplaintCataegoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ComplaintCataegoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComplaintCataegoryClient<$Result.GetResult<Prisma.$ComplaintCataegoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ComplaintCataegories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintCataegoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ComplaintCataegories
     * const complaintCataegories = await prisma.complaintCataegory.findMany()
     * 
     * // Get first 10 ComplaintCataegories
     * const complaintCataegories = await prisma.complaintCataegory.findMany({ take: 10 })
     * 
     * // Only select the `complaint_cat_id`
     * const complaintCataegoryWithComplaint_cat_idOnly = await prisma.complaintCataegory.findMany({ select: { complaint_cat_id: true } })
     * 
     */
    findMany<T extends ComplaintCataegoryFindManyArgs>(args?: SelectSubset<T, ComplaintCataegoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplaintCataegoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ComplaintCataegory.
     * @param {ComplaintCataegoryCreateArgs} args - Arguments to create a ComplaintCataegory.
     * @example
     * // Create one ComplaintCataegory
     * const ComplaintCataegory = await prisma.complaintCataegory.create({
     *   data: {
     *     // ... data to create a ComplaintCataegory
     *   }
     * })
     * 
     */
    create<T extends ComplaintCataegoryCreateArgs>(args: SelectSubset<T, ComplaintCataegoryCreateArgs<ExtArgs>>): Prisma__ComplaintCataegoryClient<$Result.GetResult<Prisma.$ComplaintCataegoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ComplaintCataegories.
     * @param {ComplaintCataegoryCreateManyArgs} args - Arguments to create many ComplaintCataegories.
     * @example
     * // Create many ComplaintCataegories
     * const complaintCataegory = await prisma.complaintCataegory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComplaintCataegoryCreateManyArgs>(args?: SelectSubset<T, ComplaintCataegoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ComplaintCataegory.
     * @param {ComplaintCataegoryDeleteArgs} args - Arguments to delete one ComplaintCataegory.
     * @example
     * // Delete one ComplaintCataegory
     * const ComplaintCataegory = await prisma.complaintCataegory.delete({
     *   where: {
     *     // ... filter to delete one ComplaintCataegory
     *   }
     * })
     * 
     */
    delete<T extends ComplaintCataegoryDeleteArgs>(args: SelectSubset<T, ComplaintCataegoryDeleteArgs<ExtArgs>>): Prisma__ComplaintCataegoryClient<$Result.GetResult<Prisma.$ComplaintCataegoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ComplaintCataegory.
     * @param {ComplaintCataegoryUpdateArgs} args - Arguments to update one ComplaintCataegory.
     * @example
     * // Update one ComplaintCataegory
     * const complaintCataegory = await prisma.complaintCataegory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComplaintCataegoryUpdateArgs>(args: SelectSubset<T, ComplaintCataegoryUpdateArgs<ExtArgs>>): Prisma__ComplaintCataegoryClient<$Result.GetResult<Prisma.$ComplaintCataegoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ComplaintCataegories.
     * @param {ComplaintCataegoryDeleteManyArgs} args - Arguments to filter ComplaintCataegories to delete.
     * @example
     * // Delete a few ComplaintCataegories
     * const { count } = await prisma.complaintCataegory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComplaintCataegoryDeleteManyArgs>(args?: SelectSubset<T, ComplaintCataegoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ComplaintCataegories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintCataegoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ComplaintCataegories
     * const complaintCataegory = await prisma.complaintCataegory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComplaintCataegoryUpdateManyArgs>(args: SelectSubset<T, ComplaintCataegoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ComplaintCataegory.
     * @param {ComplaintCataegoryUpsertArgs} args - Arguments to update or create a ComplaintCataegory.
     * @example
     * // Update or create a ComplaintCataegory
     * const complaintCataegory = await prisma.complaintCataegory.upsert({
     *   create: {
     *     // ... data to create a ComplaintCataegory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ComplaintCataegory we want to update
     *   }
     * })
     */
    upsert<T extends ComplaintCataegoryUpsertArgs>(args: SelectSubset<T, ComplaintCataegoryUpsertArgs<ExtArgs>>): Prisma__ComplaintCataegoryClient<$Result.GetResult<Prisma.$ComplaintCataegoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ComplaintCataegories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintCataegoryCountArgs} args - Arguments to filter ComplaintCataegories to count.
     * @example
     * // Count the number of ComplaintCataegories
     * const count = await prisma.complaintCataegory.count({
     *   where: {
     *     // ... the filter for the ComplaintCataegories we want to count
     *   }
     * })
    **/
    count<T extends ComplaintCataegoryCountArgs>(
      args?: Subset<T, ComplaintCataegoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComplaintCataegoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ComplaintCataegory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintCataegoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComplaintCataegoryAggregateArgs>(args: Subset<T, ComplaintCataegoryAggregateArgs>): Prisma.PrismaPromise<GetComplaintCataegoryAggregateType<T>>

    /**
     * Group by ComplaintCataegory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintCataegoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComplaintCataegoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComplaintCataegoryGroupByArgs['orderBy'] }
        : { orderBy?: ComplaintCataegoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComplaintCataegoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComplaintCataegoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ComplaintCataegory model
   */
  readonly fields: ComplaintCataegoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ComplaintCataegory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComplaintCataegoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    complaints<T extends ComplaintCataegory$complaintsArgs<ExtArgs> = {}>(args?: Subset<T, ComplaintCataegory$complaintsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplaintsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    employee<T extends ComplaintCataegory$employeeArgs<ExtArgs> = {}>(args?: Subset<T, ComplaintCataegory$employeeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ComplaintCataegory model
   */
  interface ComplaintCataegoryFieldRefs {
    readonly complaint_cat_id: FieldRef<"ComplaintCataegory", 'Int'>
    readonly complaint_cat_name: FieldRef<"ComplaintCataegory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ComplaintCataegory findUnique
   */
  export type ComplaintCataegoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplaintCataegory
     */
    select?: ComplaintCataegorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplaintCataegory
     */
    omit?: ComplaintCataegoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintCataegoryInclude<ExtArgs> | null
    /**
     * Filter, which ComplaintCataegory to fetch.
     */
    where: ComplaintCataegoryWhereUniqueInput
  }

  /**
   * ComplaintCataegory findUniqueOrThrow
   */
  export type ComplaintCataegoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplaintCataegory
     */
    select?: ComplaintCataegorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplaintCataegory
     */
    omit?: ComplaintCataegoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintCataegoryInclude<ExtArgs> | null
    /**
     * Filter, which ComplaintCataegory to fetch.
     */
    where: ComplaintCataegoryWhereUniqueInput
  }

  /**
   * ComplaintCataegory findFirst
   */
  export type ComplaintCataegoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplaintCataegory
     */
    select?: ComplaintCataegorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplaintCataegory
     */
    omit?: ComplaintCataegoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintCataegoryInclude<ExtArgs> | null
    /**
     * Filter, which ComplaintCataegory to fetch.
     */
    where?: ComplaintCataegoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComplaintCataegories to fetch.
     */
    orderBy?: ComplaintCataegoryOrderByWithRelationInput | ComplaintCataegoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComplaintCataegories.
     */
    cursor?: ComplaintCataegoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComplaintCataegories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComplaintCataegories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComplaintCataegories.
     */
    distinct?: ComplaintCataegoryScalarFieldEnum | ComplaintCataegoryScalarFieldEnum[]
  }

  /**
   * ComplaintCataegory findFirstOrThrow
   */
  export type ComplaintCataegoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplaintCataegory
     */
    select?: ComplaintCataegorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplaintCataegory
     */
    omit?: ComplaintCataegoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintCataegoryInclude<ExtArgs> | null
    /**
     * Filter, which ComplaintCataegory to fetch.
     */
    where?: ComplaintCataegoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComplaintCataegories to fetch.
     */
    orderBy?: ComplaintCataegoryOrderByWithRelationInput | ComplaintCataegoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComplaintCataegories.
     */
    cursor?: ComplaintCataegoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComplaintCataegories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComplaintCataegories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComplaintCataegories.
     */
    distinct?: ComplaintCataegoryScalarFieldEnum | ComplaintCataegoryScalarFieldEnum[]
  }

  /**
   * ComplaintCataegory findMany
   */
  export type ComplaintCataegoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplaintCataegory
     */
    select?: ComplaintCataegorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplaintCataegory
     */
    omit?: ComplaintCataegoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintCataegoryInclude<ExtArgs> | null
    /**
     * Filter, which ComplaintCataegories to fetch.
     */
    where?: ComplaintCataegoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComplaintCataegories to fetch.
     */
    orderBy?: ComplaintCataegoryOrderByWithRelationInput | ComplaintCataegoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ComplaintCataegories.
     */
    cursor?: ComplaintCataegoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComplaintCataegories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComplaintCataegories.
     */
    skip?: number
    distinct?: ComplaintCataegoryScalarFieldEnum | ComplaintCataegoryScalarFieldEnum[]
  }

  /**
   * ComplaintCataegory create
   */
  export type ComplaintCataegoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplaintCataegory
     */
    select?: ComplaintCataegorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplaintCataegory
     */
    omit?: ComplaintCataegoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintCataegoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ComplaintCataegory.
     */
    data: XOR<ComplaintCataegoryCreateInput, ComplaintCataegoryUncheckedCreateInput>
  }

  /**
   * ComplaintCataegory createMany
   */
  export type ComplaintCataegoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ComplaintCataegories.
     */
    data: ComplaintCataegoryCreateManyInput | ComplaintCataegoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ComplaintCataegory update
   */
  export type ComplaintCataegoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplaintCataegory
     */
    select?: ComplaintCataegorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplaintCataegory
     */
    omit?: ComplaintCataegoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintCataegoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ComplaintCataegory.
     */
    data: XOR<ComplaintCataegoryUpdateInput, ComplaintCataegoryUncheckedUpdateInput>
    /**
     * Choose, which ComplaintCataegory to update.
     */
    where: ComplaintCataegoryWhereUniqueInput
  }

  /**
   * ComplaintCataegory updateMany
   */
  export type ComplaintCataegoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ComplaintCataegories.
     */
    data: XOR<ComplaintCataegoryUpdateManyMutationInput, ComplaintCataegoryUncheckedUpdateManyInput>
    /**
     * Filter which ComplaintCataegories to update
     */
    where?: ComplaintCataegoryWhereInput
    /**
     * Limit how many ComplaintCataegories to update.
     */
    limit?: number
  }

  /**
   * ComplaintCataegory upsert
   */
  export type ComplaintCataegoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplaintCataegory
     */
    select?: ComplaintCataegorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplaintCataegory
     */
    omit?: ComplaintCataegoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintCataegoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ComplaintCataegory to update in case it exists.
     */
    where: ComplaintCataegoryWhereUniqueInput
    /**
     * In case the ComplaintCataegory found by the `where` argument doesn't exist, create a new ComplaintCataegory with this data.
     */
    create: XOR<ComplaintCataegoryCreateInput, ComplaintCataegoryUncheckedCreateInput>
    /**
     * In case the ComplaintCataegory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComplaintCataegoryUpdateInput, ComplaintCataegoryUncheckedUpdateInput>
  }

  /**
   * ComplaintCataegory delete
   */
  export type ComplaintCataegoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplaintCataegory
     */
    select?: ComplaintCataegorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplaintCataegory
     */
    omit?: ComplaintCataegoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintCataegoryInclude<ExtArgs> | null
    /**
     * Filter which ComplaintCataegory to delete.
     */
    where: ComplaintCataegoryWhereUniqueInput
  }

  /**
   * ComplaintCataegory deleteMany
   */
  export type ComplaintCataegoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComplaintCataegories to delete
     */
    where?: ComplaintCataegoryWhereInput
    /**
     * Limit how many ComplaintCataegories to delete.
     */
    limit?: number
  }

  /**
   * ComplaintCataegory.complaints
   */
  export type ComplaintCataegory$complaintsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaints
     */
    select?: ComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaints
     */
    omit?: ComplaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintsInclude<ExtArgs> | null
    where?: ComplaintsWhereInput
    orderBy?: ComplaintsOrderByWithRelationInput | ComplaintsOrderByWithRelationInput[]
    cursor?: ComplaintsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComplaintsScalarFieldEnum | ComplaintsScalarFieldEnum[]
  }

  /**
   * ComplaintCataegory.employee
   */
  export type ComplaintCataegory$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * ComplaintCataegory without action
   */
  export type ComplaintCataegoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplaintCataegory
     */
    select?: ComplaintCataegorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplaintCataegory
     */
    omit?: ComplaintCataegoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintCataegoryInclude<ExtArgs> | null
  }


  /**
   * Model ResolvedComplaints
   */

  export type AggregateResolvedComplaints = {
    _count: ResolvedComplaintsCountAggregateOutputType | null
    _avg: ResolvedComplaintsAvgAggregateOutputType | null
    _sum: ResolvedComplaintsSumAggregateOutputType | null
    _min: ResolvedComplaintsMinAggregateOutputType | null
    _max: ResolvedComplaintsMaxAggregateOutputType | null
  }

  export type ResolvedComplaintsAvgAggregateOutputType = {
    employee_id: number | null
    complaint_id: number | null
  }

  export type ResolvedComplaintsSumAggregateOutputType = {
    employee_id: number | null
    complaint_id: number | null
  }

  export type ResolvedComplaintsMinAggregateOutputType = {
    resolved_details: string | null
    createdAt: Date | null
    updatedAt: Date | null
    employee_id: number | null
    estimated_date: Date | null
    complaint_id: number | null
    resolved_by: string | null
  }

  export type ResolvedComplaintsMaxAggregateOutputType = {
    resolved_details: string | null
    createdAt: Date | null
    updatedAt: Date | null
    employee_id: number | null
    estimated_date: Date | null
    complaint_id: number | null
    resolved_by: string | null
  }

  export type ResolvedComplaintsCountAggregateOutputType = {
    resolved_details: number
    createdAt: number
    updatedAt: number
    employee_id: number
    estimated_date: number
    complaint_id: number
    resolved_by: number
    _all: number
  }


  export type ResolvedComplaintsAvgAggregateInputType = {
    employee_id?: true
    complaint_id?: true
  }

  export type ResolvedComplaintsSumAggregateInputType = {
    employee_id?: true
    complaint_id?: true
  }

  export type ResolvedComplaintsMinAggregateInputType = {
    resolved_details?: true
    createdAt?: true
    updatedAt?: true
    employee_id?: true
    estimated_date?: true
    complaint_id?: true
    resolved_by?: true
  }

  export type ResolvedComplaintsMaxAggregateInputType = {
    resolved_details?: true
    createdAt?: true
    updatedAt?: true
    employee_id?: true
    estimated_date?: true
    complaint_id?: true
    resolved_by?: true
  }

  export type ResolvedComplaintsCountAggregateInputType = {
    resolved_details?: true
    createdAt?: true
    updatedAt?: true
    employee_id?: true
    estimated_date?: true
    complaint_id?: true
    resolved_by?: true
    _all?: true
  }

  export type ResolvedComplaintsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResolvedComplaints to aggregate.
     */
    where?: ResolvedComplaintsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResolvedComplaints to fetch.
     */
    orderBy?: ResolvedComplaintsOrderByWithRelationInput | ResolvedComplaintsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResolvedComplaintsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResolvedComplaints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResolvedComplaints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResolvedComplaints
    **/
    _count?: true | ResolvedComplaintsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResolvedComplaintsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResolvedComplaintsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResolvedComplaintsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResolvedComplaintsMaxAggregateInputType
  }

  export type GetResolvedComplaintsAggregateType<T extends ResolvedComplaintsAggregateArgs> = {
        [P in keyof T & keyof AggregateResolvedComplaints]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResolvedComplaints[P]>
      : GetScalarType<T[P], AggregateResolvedComplaints[P]>
  }




  export type ResolvedComplaintsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResolvedComplaintsWhereInput
    orderBy?: ResolvedComplaintsOrderByWithAggregationInput | ResolvedComplaintsOrderByWithAggregationInput[]
    by: ResolvedComplaintsScalarFieldEnum[] | ResolvedComplaintsScalarFieldEnum
    having?: ResolvedComplaintsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResolvedComplaintsCountAggregateInputType | true
    _avg?: ResolvedComplaintsAvgAggregateInputType
    _sum?: ResolvedComplaintsSumAggregateInputType
    _min?: ResolvedComplaintsMinAggregateInputType
    _max?: ResolvedComplaintsMaxAggregateInputType
  }

  export type ResolvedComplaintsGroupByOutputType = {
    resolved_details: string
    createdAt: Date
    updatedAt: Date
    employee_id: number | null
    estimated_date: Date | null
    complaint_id: number
    resolved_by: string | null
    _count: ResolvedComplaintsCountAggregateOutputType | null
    _avg: ResolvedComplaintsAvgAggregateOutputType | null
    _sum: ResolvedComplaintsSumAggregateOutputType | null
    _min: ResolvedComplaintsMinAggregateOutputType | null
    _max: ResolvedComplaintsMaxAggregateOutputType | null
  }

  type GetResolvedComplaintsGroupByPayload<T extends ResolvedComplaintsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResolvedComplaintsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResolvedComplaintsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResolvedComplaintsGroupByOutputType[P]>
            : GetScalarType<T[P], ResolvedComplaintsGroupByOutputType[P]>
        }
      >
    >


  export type ResolvedComplaintsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    resolved_details?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee_id?: boolean
    estimated_date?: boolean
    complaint_id?: boolean
    resolved_by?: boolean
    Employee?: boolean | ResolvedComplaints$EmployeeArgs<ExtArgs>
    Complaints?: boolean | ResolvedComplaints$ComplaintsArgs<ExtArgs>
    User?: boolean | ResolvedComplaints$UserArgs<ExtArgs>
    Notifications?: boolean | ResolvedComplaints$NotificationsArgs<ExtArgs>
  }, ExtArgs["result"]["resolvedComplaints"]>



  export type ResolvedComplaintsSelectScalar = {
    resolved_details?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee_id?: boolean
    estimated_date?: boolean
    complaint_id?: boolean
    resolved_by?: boolean
  }

  export type ResolvedComplaintsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"resolved_details" | "createdAt" | "updatedAt" | "employee_id" | "estimated_date" | "complaint_id" | "resolved_by", ExtArgs["result"]["resolvedComplaints"]>
  export type ResolvedComplaintsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Employee?: boolean | ResolvedComplaints$EmployeeArgs<ExtArgs>
    Complaints?: boolean | ResolvedComplaints$ComplaintsArgs<ExtArgs>
    User?: boolean | ResolvedComplaints$UserArgs<ExtArgs>
    Notifications?: boolean | ResolvedComplaints$NotificationsArgs<ExtArgs>
  }

  export type $ResolvedComplaintsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResolvedComplaints"
    objects: {
      Employee: Prisma.$EmployeePayload<ExtArgs> | null
      Complaints: Prisma.$ComplaintsPayload<ExtArgs> | null
      User: Prisma.$UserPayload<ExtArgs> | null
      Notifications: Prisma.$NotificationsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      resolved_details: string
      createdAt: Date
      updatedAt: Date
      employee_id: number | null
      estimated_date: Date | null
      complaint_id: number
      resolved_by: string | null
    }, ExtArgs["result"]["resolvedComplaints"]>
    composites: {}
  }

  type ResolvedComplaintsGetPayload<S extends boolean | null | undefined | ResolvedComplaintsDefaultArgs> = $Result.GetResult<Prisma.$ResolvedComplaintsPayload, S>

  type ResolvedComplaintsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResolvedComplaintsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResolvedComplaintsCountAggregateInputType | true
    }

  export interface ResolvedComplaintsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResolvedComplaints'], meta: { name: 'ResolvedComplaints' } }
    /**
     * Find zero or one ResolvedComplaints that matches the filter.
     * @param {ResolvedComplaintsFindUniqueArgs} args - Arguments to find a ResolvedComplaints
     * @example
     * // Get one ResolvedComplaints
     * const resolvedComplaints = await prisma.resolvedComplaints.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResolvedComplaintsFindUniqueArgs>(args: SelectSubset<T, ResolvedComplaintsFindUniqueArgs<ExtArgs>>): Prisma__ResolvedComplaintsClient<$Result.GetResult<Prisma.$ResolvedComplaintsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ResolvedComplaints that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResolvedComplaintsFindUniqueOrThrowArgs} args - Arguments to find a ResolvedComplaints
     * @example
     * // Get one ResolvedComplaints
     * const resolvedComplaints = await prisma.resolvedComplaints.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResolvedComplaintsFindUniqueOrThrowArgs>(args: SelectSubset<T, ResolvedComplaintsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResolvedComplaintsClient<$Result.GetResult<Prisma.$ResolvedComplaintsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResolvedComplaints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResolvedComplaintsFindFirstArgs} args - Arguments to find a ResolvedComplaints
     * @example
     * // Get one ResolvedComplaints
     * const resolvedComplaints = await prisma.resolvedComplaints.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResolvedComplaintsFindFirstArgs>(args?: SelectSubset<T, ResolvedComplaintsFindFirstArgs<ExtArgs>>): Prisma__ResolvedComplaintsClient<$Result.GetResult<Prisma.$ResolvedComplaintsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResolvedComplaints that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResolvedComplaintsFindFirstOrThrowArgs} args - Arguments to find a ResolvedComplaints
     * @example
     * // Get one ResolvedComplaints
     * const resolvedComplaints = await prisma.resolvedComplaints.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResolvedComplaintsFindFirstOrThrowArgs>(args?: SelectSubset<T, ResolvedComplaintsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResolvedComplaintsClient<$Result.GetResult<Prisma.$ResolvedComplaintsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ResolvedComplaints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResolvedComplaintsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResolvedComplaints
     * const resolvedComplaints = await prisma.resolvedComplaints.findMany()
     * 
     * // Get first 10 ResolvedComplaints
     * const resolvedComplaints = await prisma.resolvedComplaints.findMany({ take: 10 })
     * 
     * // Only select the `resolved_details`
     * const resolvedComplaintsWithResolved_detailsOnly = await prisma.resolvedComplaints.findMany({ select: { resolved_details: true } })
     * 
     */
    findMany<T extends ResolvedComplaintsFindManyArgs>(args?: SelectSubset<T, ResolvedComplaintsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResolvedComplaintsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ResolvedComplaints.
     * @param {ResolvedComplaintsCreateArgs} args - Arguments to create a ResolvedComplaints.
     * @example
     * // Create one ResolvedComplaints
     * const ResolvedComplaints = await prisma.resolvedComplaints.create({
     *   data: {
     *     // ... data to create a ResolvedComplaints
     *   }
     * })
     * 
     */
    create<T extends ResolvedComplaintsCreateArgs>(args: SelectSubset<T, ResolvedComplaintsCreateArgs<ExtArgs>>): Prisma__ResolvedComplaintsClient<$Result.GetResult<Prisma.$ResolvedComplaintsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ResolvedComplaints.
     * @param {ResolvedComplaintsCreateManyArgs} args - Arguments to create many ResolvedComplaints.
     * @example
     * // Create many ResolvedComplaints
     * const resolvedComplaints = await prisma.resolvedComplaints.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResolvedComplaintsCreateManyArgs>(args?: SelectSubset<T, ResolvedComplaintsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ResolvedComplaints.
     * @param {ResolvedComplaintsDeleteArgs} args - Arguments to delete one ResolvedComplaints.
     * @example
     * // Delete one ResolvedComplaints
     * const ResolvedComplaints = await prisma.resolvedComplaints.delete({
     *   where: {
     *     // ... filter to delete one ResolvedComplaints
     *   }
     * })
     * 
     */
    delete<T extends ResolvedComplaintsDeleteArgs>(args: SelectSubset<T, ResolvedComplaintsDeleteArgs<ExtArgs>>): Prisma__ResolvedComplaintsClient<$Result.GetResult<Prisma.$ResolvedComplaintsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ResolvedComplaints.
     * @param {ResolvedComplaintsUpdateArgs} args - Arguments to update one ResolvedComplaints.
     * @example
     * // Update one ResolvedComplaints
     * const resolvedComplaints = await prisma.resolvedComplaints.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResolvedComplaintsUpdateArgs>(args: SelectSubset<T, ResolvedComplaintsUpdateArgs<ExtArgs>>): Prisma__ResolvedComplaintsClient<$Result.GetResult<Prisma.$ResolvedComplaintsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ResolvedComplaints.
     * @param {ResolvedComplaintsDeleteManyArgs} args - Arguments to filter ResolvedComplaints to delete.
     * @example
     * // Delete a few ResolvedComplaints
     * const { count } = await prisma.resolvedComplaints.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResolvedComplaintsDeleteManyArgs>(args?: SelectSubset<T, ResolvedComplaintsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResolvedComplaints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResolvedComplaintsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResolvedComplaints
     * const resolvedComplaints = await prisma.resolvedComplaints.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResolvedComplaintsUpdateManyArgs>(args: SelectSubset<T, ResolvedComplaintsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ResolvedComplaints.
     * @param {ResolvedComplaintsUpsertArgs} args - Arguments to update or create a ResolvedComplaints.
     * @example
     * // Update or create a ResolvedComplaints
     * const resolvedComplaints = await prisma.resolvedComplaints.upsert({
     *   create: {
     *     // ... data to create a ResolvedComplaints
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResolvedComplaints we want to update
     *   }
     * })
     */
    upsert<T extends ResolvedComplaintsUpsertArgs>(args: SelectSubset<T, ResolvedComplaintsUpsertArgs<ExtArgs>>): Prisma__ResolvedComplaintsClient<$Result.GetResult<Prisma.$ResolvedComplaintsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ResolvedComplaints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResolvedComplaintsCountArgs} args - Arguments to filter ResolvedComplaints to count.
     * @example
     * // Count the number of ResolvedComplaints
     * const count = await prisma.resolvedComplaints.count({
     *   where: {
     *     // ... the filter for the ResolvedComplaints we want to count
     *   }
     * })
    **/
    count<T extends ResolvedComplaintsCountArgs>(
      args?: Subset<T, ResolvedComplaintsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResolvedComplaintsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResolvedComplaints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResolvedComplaintsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResolvedComplaintsAggregateArgs>(args: Subset<T, ResolvedComplaintsAggregateArgs>): Prisma.PrismaPromise<GetResolvedComplaintsAggregateType<T>>

    /**
     * Group by ResolvedComplaints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResolvedComplaintsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResolvedComplaintsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResolvedComplaintsGroupByArgs['orderBy'] }
        : { orderBy?: ResolvedComplaintsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResolvedComplaintsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResolvedComplaintsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResolvedComplaints model
   */
  readonly fields: ResolvedComplaintsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResolvedComplaints.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResolvedComplaintsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Employee<T extends ResolvedComplaints$EmployeeArgs<ExtArgs> = {}>(args?: Subset<T, ResolvedComplaints$EmployeeArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Complaints<T extends ResolvedComplaints$ComplaintsArgs<ExtArgs> = {}>(args?: Subset<T, ResolvedComplaints$ComplaintsArgs<ExtArgs>>): Prisma__ComplaintsClient<$Result.GetResult<Prisma.$ComplaintsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    User<T extends ResolvedComplaints$UserArgs<ExtArgs> = {}>(args?: Subset<T, ResolvedComplaints$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Notifications<T extends ResolvedComplaints$NotificationsArgs<ExtArgs> = {}>(args?: Subset<T, ResolvedComplaints$NotificationsArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ResolvedComplaints model
   */
  interface ResolvedComplaintsFieldRefs {
    readonly resolved_details: FieldRef<"ResolvedComplaints", 'String'>
    readonly createdAt: FieldRef<"ResolvedComplaints", 'DateTime'>
    readonly updatedAt: FieldRef<"ResolvedComplaints", 'DateTime'>
    readonly employee_id: FieldRef<"ResolvedComplaints", 'Int'>
    readonly estimated_date: FieldRef<"ResolvedComplaints", 'DateTime'>
    readonly complaint_id: FieldRef<"ResolvedComplaints", 'Int'>
    readonly resolved_by: FieldRef<"ResolvedComplaints", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ResolvedComplaints findUnique
   */
  export type ResolvedComplaintsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResolvedComplaints
     */
    select?: ResolvedComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResolvedComplaints
     */
    omit?: ResolvedComplaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResolvedComplaintsInclude<ExtArgs> | null
    /**
     * Filter, which ResolvedComplaints to fetch.
     */
    where: ResolvedComplaintsWhereUniqueInput
  }

  /**
   * ResolvedComplaints findUniqueOrThrow
   */
  export type ResolvedComplaintsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResolvedComplaints
     */
    select?: ResolvedComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResolvedComplaints
     */
    omit?: ResolvedComplaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResolvedComplaintsInclude<ExtArgs> | null
    /**
     * Filter, which ResolvedComplaints to fetch.
     */
    where: ResolvedComplaintsWhereUniqueInput
  }

  /**
   * ResolvedComplaints findFirst
   */
  export type ResolvedComplaintsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResolvedComplaints
     */
    select?: ResolvedComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResolvedComplaints
     */
    omit?: ResolvedComplaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResolvedComplaintsInclude<ExtArgs> | null
    /**
     * Filter, which ResolvedComplaints to fetch.
     */
    where?: ResolvedComplaintsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResolvedComplaints to fetch.
     */
    orderBy?: ResolvedComplaintsOrderByWithRelationInput | ResolvedComplaintsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResolvedComplaints.
     */
    cursor?: ResolvedComplaintsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResolvedComplaints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResolvedComplaints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResolvedComplaints.
     */
    distinct?: ResolvedComplaintsScalarFieldEnum | ResolvedComplaintsScalarFieldEnum[]
  }

  /**
   * ResolvedComplaints findFirstOrThrow
   */
  export type ResolvedComplaintsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResolvedComplaints
     */
    select?: ResolvedComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResolvedComplaints
     */
    omit?: ResolvedComplaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResolvedComplaintsInclude<ExtArgs> | null
    /**
     * Filter, which ResolvedComplaints to fetch.
     */
    where?: ResolvedComplaintsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResolvedComplaints to fetch.
     */
    orderBy?: ResolvedComplaintsOrderByWithRelationInput | ResolvedComplaintsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResolvedComplaints.
     */
    cursor?: ResolvedComplaintsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResolvedComplaints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResolvedComplaints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResolvedComplaints.
     */
    distinct?: ResolvedComplaintsScalarFieldEnum | ResolvedComplaintsScalarFieldEnum[]
  }

  /**
   * ResolvedComplaints findMany
   */
  export type ResolvedComplaintsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResolvedComplaints
     */
    select?: ResolvedComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResolvedComplaints
     */
    omit?: ResolvedComplaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResolvedComplaintsInclude<ExtArgs> | null
    /**
     * Filter, which ResolvedComplaints to fetch.
     */
    where?: ResolvedComplaintsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResolvedComplaints to fetch.
     */
    orderBy?: ResolvedComplaintsOrderByWithRelationInput | ResolvedComplaintsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResolvedComplaints.
     */
    cursor?: ResolvedComplaintsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResolvedComplaints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResolvedComplaints.
     */
    skip?: number
    distinct?: ResolvedComplaintsScalarFieldEnum | ResolvedComplaintsScalarFieldEnum[]
  }

  /**
   * ResolvedComplaints create
   */
  export type ResolvedComplaintsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResolvedComplaints
     */
    select?: ResolvedComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResolvedComplaints
     */
    omit?: ResolvedComplaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResolvedComplaintsInclude<ExtArgs> | null
    /**
     * The data needed to create a ResolvedComplaints.
     */
    data: XOR<ResolvedComplaintsCreateInput, ResolvedComplaintsUncheckedCreateInput>
  }

  /**
   * ResolvedComplaints createMany
   */
  export type ResolvedComplaintsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResolvedComplaints.
     */
    data: ResolvedComplaintsCreateManyInput | ResolvedComplaintsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResolvedComplaints update
   */
  export type ResolvedComplaintsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResolvedComplaints
     */
    select?: ResolvedComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResolvedComplaints
     */
    omit?: ResolvedComplaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResolvedComplaintsInclude<ExtArgs> | null
    /**
     * The data needed to update a ResolvedComplaints.
     */
    data: XOR<ResolvedComplaintsUpdateInput, ResolvedComplaintsUncheckedUpdateInput>
    /**
     * Choose, which ResolvedComplaints to update.
     */
    where: ResolvedComplaintsWhereUniqueInput
  }

  /**
   * ResolvedComplaints updateMany
   */
  export type ResolvedComplaintsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResolvedComplaints.
     */
    data: XOR<ResolvedComplaintsUpdateManyMutationInput, ResolvedComplaintsUncheckedUpdateManyInput>
    /**
     * Filter which ResolvedComplaints to update
     */
    where?: ResolvedComplaintsWhereInput
    /**
     * Limit how many ResolvedComplaints to update.
     */
    limit?: number
  }

  /**
   * ResolvedComplaints upsert
   */
  export type ResolvedComplaintsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResolvedComplaints
     */
    select?: ResolvedComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResolvedComplaints
     */
    omit?: ResolvedComplaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResolvedComplaintsInclude<ExtArgs> | null
    /**
     * The filter to search for the ResolvedComplaints to update in case it exists.
     */
    where: ResolvedComplaintsWhereUniqueInput
    /**
     * In case the ResolvedComplaints found by the `where` argument doesn't exist, create a new ResolvedComplaints with this data.
     */
    create: XOR<ResolvedComplaintsCreateInput, ResolvedComplaintsUncheckedCreateInput>
    /**
     * In case the ResolvedComplaints was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResolvedComplaintsUpdateInput, ResolvedComplaintsUncheckedUpdateInput>
  }

  /**
   * ResolvedComplaints delete
   */
  export type ResolvedComplaintsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResolvedComplaints
     */
    select?: ResolvedComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResolvedComplaints
     */
    omit?: ResolvedComplaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResolvedComplaintsInclude<ExtArgs> | null
    /**
     * Filter which ResolvedComplaints to delete.
     */
    where: ResolvedComplaintsWhereUniqueInput
  }

  /**
   * ResolvedComplaints deleteMany
   */
  export type ResolvedComplaintsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResolvedComplaints to delete
     */
    where?: ResolvedComplaintsWhereInput
    /**
     * Limit how many ResolvedComplaints to delete.
     */
    limit?: number
  }

  /**
   * ResolvedComplaints.Employee
   */
  export type ResolvedComplaints$EmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * ResolvedComplaints.Complaints
   */
  export type ResolvedComplaints$ComplaintsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaints
     */
    select?: ComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaints
     */
    omit?: ComplaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintsInclude<ExtArgs> | null
    where?: ComplaintsWhereInput
  }

  /**
   * ResolvedComplaints.User
   */
  export type ResolvedComplaints$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ResolvedComplaints.Notifications
   */
  export type ResolvedComplaints$NotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    where?: NotificationsWhereInput
  }

  /**
   * ResolvedComplaints without action
   */
  export type ResolvedComplaintsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResolvedComplaints
     */
    select?: ResolvedComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResolvedComplaints
     */
    omit?: ResolvedComplaintsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResolvedComplaintsInclude<ExtArgs> | null
  }


  /**
   * Model Notifications
   */

  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsAvgAggregateOutputType = {
    complaint_id: number | null
  }

  export type NotificationsSumAggregateOutputType = {
    complaint_id: number | null
  }

  export type NotificationsMinAggregateOutputType = {
    complaint_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    seen: boolean | null
    uid: string | null
  }

  export type NotificationsMaxAggregateOutputType = {
    complaint_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    seen: boolean | null
    uid: string | null
  }

  export type NotificationsCountAggregateOutputType = {
    complaint_id: number
    createdAt: number
    updatedAt: number
    seen: number
    uid: number
    _all: number
  }


  export type NotificationsAvgAggregateInputType = {
    complaint_id?: true
  }

  export type NotificationsSumAggregateInputType = {
    complaint_id?: true
  }

  export type NotificationsMinAggregateInputType = {
    complaint_id?: true
    createdAt?: true
    updatedAt?: true
    seen?: true
    uid?: true
  }

  export type NotificationsMaxAggregateInputType = {
    complaint_id?: true
    createdAt?: true
    updatedAt?: true
    seen?: true
    uid?: true
  }

  export type NotificationsCountAggregateInputType = {
    complaint_id?: true
    createdAt?: true
    updatedAt?: true
    seen?: true
    uid?: true
    _all?: true
  }

  export type NotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to aggregate.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type NotificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithAggregationInput | NotificationsOrderByWithAggregationInput[]
    by: NotificationsScalarFieldEnum[] | NotificationsScalarFieldEnum
    having?: NotificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _avg?: NotificationsAvgAggregateInputType
    _sum?: NotificationsSumAggregateInputType
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }

  export type NotificationsGroupByOutputType = {
    complaint_id: number
    createdAt: Date
    updatedAt: Date
    seen: boolean
    uid: string
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends NotificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type NotificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    complaint_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    seen?: boolean
    uid?: boolean
    ResolveComplaint?: boolean | ResolvedComplaintsDefaultArgs<ExtArgs>
    User?: boolean | Notifications$UserArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>



  export type NotificationsSelectScalar = {
    complaint_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    seen?: boolean
    uid?: boolean
  }

  export type NotificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"complaint_id" | "createdAt" | "updatedAt" | "seen" | "uid", ExtArgs["result"]["notifications"]>
  export type NotificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ResolveComplaint?: boolean | ResolvedComplaintsDefaultArgs<ExtArgs>
    User?: boolean | Notifications$UserArgs<ExtArgs>
  }

  export type $NotificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notifications"
    objects: {
      ResolveComplaint: Prisma.$ResolvedComplaintsPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      complaint_id: number
      createdAt: Date
      updatedAt: Date
      seen: boolean
      uid: string
    }, ExtArgs["result"]["notifications"]>
    composites: {}
  }

  type NotificationsGetPayload<S extends boolean | null | undefined | NotificationsDefaultArgs> = $Result.GetResult<Prisma.$NotificationsPayload, S>

  type NotificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationsCountAggregateInputType | true
    }

  export interface NotificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notifications'], meta: { name: 'Notifications' } }
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {NotificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationsFindUniqueArgs>(args: SelectSubset<T, NotificationsFindUniqueArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationsFindFirstArgs>(args?: SelectSubset<T, NotificationsFindFirstArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `complaint_id`
     * const notificationsWithComplaint_idOnly = await prisma.notifications.findMany({ select: { complaint_id: true } })
     * 
     */
    findMany<T extends NotificationsFindManyArgs>(args?: SelectSubset<T, NotificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifications.
     * @param {NotificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
     */
    create<T extends NotificationsCreateArgs>(args: SelectSubset<T, NotificationsCreateArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationsCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationsCreateManyArgs>(args?: SelectSubset<T, NotificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notifications.
     * @param {NotificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
     */
    delete<T extends NotificationsDeleteArgs>(args: SelectSubset<T, NotificationsDeleteArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifications.
     * @param {NotificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationsUpdateArgs>(args: SelectSubset<T, NotificationsUpdateArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationsDeleteManyArgs>(args?: SelectSubset<T, NotificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationsUpdateManyArgs>(args: SelectSubset<T, NotificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notifications.
     * @param {NotificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
     */
    upsert<T extends NotificationsUpsertArgs>(args: SelectSubset<T, NotificationsUpsertArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationsCountArgs>(
      args?: Subset<T, NotificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationsGroupByArgs['orderBy'] }
        : { orderBy?: NotificationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notifications model
   */
  readonly fields: NotificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ResolveComplaint<T extends ResolvedComplaintsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResolvedComplaintsDefaultArgs<ExtArgs>>): Prisma__ResolvedComplaintsClient<$Result.GetResult<Prisma.$ResolvedComplaintsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends Notifications$UserArgs<ExtArgs> = {}>(args?: Subset<T, Notifications$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notifications model
   */
  interface NotificationsFieldRefs {
    readonly complaint_id: FieldRef<"Notifications", 'Int'>
    readonly createdAt: FieldRef<"Notifications", 'DateTime'>
    readonly updatedAt: FieldRef<"Notifications", 'DateTime'>
    readonly seen: FieldRef<"Notifications", 'Boolean'>
    readonly uid: FieldRef<"Notifications", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Notifications findUnique
   */
  export type NotificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications findUniqueOrThrow
   */
  export type NotificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications findFirst
   */
  export type NotificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications findFirstOrThrow
   */
  export type NotificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications findMany
   */
  export type NotificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications create
   */
  export type NotificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Notifications.
     */
    data: XOR<NotificationsCreateInput, NotificationsUncheckedCreateInput>
  }

  /**
   * Notifications createMany
   */
  export type NotificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationsCreateManyInput | NotificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notifications update
   */
  export type NotificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Notifications.
     */
    data: XOR<NotificationsUpdateInput, NotificationsUncheckedUpdateInput>
    /**
     * Choose, which Notifications to update.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications updateMany
   */
  export type NotificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notifications upsert
   */
  export type NotificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Notifications to update in case it exists.
     */
    where: NotificationsWhereUniqueInput
    /**
     * In case the Notifications found by the `where` argument doesn't exist, create a new Notifications with this data.
     */
    create: XOR<NotificationsCreateInput, NotificationsUncheckedCreateInput>
    /**
     * In case the Notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationsUpdateInput, NotificationsUncheckedUpdateInput>
  }

  /**
   * Notifications delete
   */
  export type NotificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter which Notifications to delete.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications deleteMany
   */
  export type NotificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notifications.User
   */
  export type Notifications$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Notifications without action
   */
  export type NotificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProfessionScalarFieldEnum: {
    profession_id: 'profession_id',
    profession_name: 'profession_name'
  };

  export type ProfessionScalarFieldEnum = (typeof ProfessionScalarFieldEnum)[keyof typeof ProfessionScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    employee_id: 'employee_id',
    employee_name: 'employee_name',
    employee_mobile: 'employee_mobile',
    complaint_cat_id: 'complaint_cat_id'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    department_id: 'department_id',
    dept_full_name: 'dept_full_name',
    dept_shortform: 'dept_shortform'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const ComplaintsScalarFieldEnum: {
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

  export type ComplaintsScalarFieldEnum = (typeof ComplaintsScalarFieldEnum)[keyof typeof ComplaintsScalarFieldEnum]


  export const BuildingsScalarFieldEnum: {
    building_id: 'building_id',
    building_name: 'building_name'
  };

  export type BuildingsScalarFieldEnum = (typeof BuildingsScalarFieldEnum)[keyof typeof BuildingsScalarFieldEnum]


  export const ComplaintCataegoryScalarFieldEnum: {
    complaint_cat_id: 'complaint_cat_id',
    complaint_cat_name: 'complaint_cat_name'
  };

  export type ComplaintCataegoryScalarFieldEnum = (typeof ComplaintCataegoryScalarFieldEnum)[keyof typeof ComplaintCataegoryScalarFieldEnum]


  export const ResolvedComplaintsScalarFieldEnum: {
    resolved_details: 'resolved_details',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    employee_id: 'employee_id',
    estimated_date: 'estimated_date',
    complaint_id: 'complaint_id',
    resolved_by: 'resolved_by'
  };

  export type ResolvedComplaintsScalarFieldEnum = (typeof ResolvedComplaintsScalarFieldEnum)[keyof typeof ResolvedComplaintsScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    complaint_id: 'complaint_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    seen: 'seen',
    uid: 'uid'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    uid: 'uid',
    email: 'email',
    name: 'name',
    roll: 'roll',
    mobile: 'mobile',
    session: 'session',
    department_id: 'department_id'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const ProfessionOrderByRelevanceFieldEnum: {
    profession_name: 'profession_name'
  };

  export type ProfessionOrderByRelevanceFieldEnum = (typeof ProfessionOrderByRelevanceFieldEnum)[keyof typeof ProfessionOrderByRelevanceFieldEnum]


  export const EmployeeOrderByRelevanceFieldEnum: {
    employee_name: 'employee_name',
    employee_mobile: 'employee_mobile'
  };

  export type EmployeeOrderByRelevanceFieldEnum = (typeof EmployeeOrderByRelevanceFieldEnum)[keyof typeof EmployeeOrderByRelevanceFieldEnum]


  export const DepartmentOrderByRelevanceFieldEnum: {
    department_id: 'department_id',
    dept_full_name: 'dept_full_name',
    dept_shortform: 'dept_shortform'
  };

  export type DepartmentOrderByRelevanceFieldEnum = (typeof DepartmentOrderByRelevanceFieldEnum)[keyof typeof DepartmentOrderByRelevanceFieldEnum]


  export const ComplaintsOrderByRelevanceFieldEnum: {
    complaint_title: 'complaint_title',
    complaint_description: 'complaint_description',
    uid: 'uid',
    room_no: 'room_no'
  };

  export type ComplaintsOrderByRelevanceFieldEnum = (typeof ComplaintsOrderByRelevanceFieldEnum)[keyof typeof ComplaintsOrderByRelevanceFieldEnum]


  export const BuildingsOrderByRelevanceFieldEnum: {
    building_name: 'building_name'
  };

  export type BuildingsOrderByRelevanceFieldEnum = (typeof BuildingsOrderByRelevanceFieldEnum)[keyof typeof BuildingsOrderByRelevanceFieldEnum]


  export const ComplaintCataegoryOrderByRelevanceFieldEnum: {
    complaint_cat_name: 'complaint_cat_name'
  };

  export type ComplaintCataegoryOrderByRelevanceFieldEnum = (typeof ComplaintCataegoryOrderByRelevanceFieldEnum)[keyof typeof ComplaintCataegoryOrderByRelevanceFieldEnum]


  export const ResolvedComplaintsOrderByRelevanceFieldEnum: {
    resolved_details: 'resolved_details',
    resolved_by: 'resolved_by'
  };

  export type ResolvedComplaintsOrderByRelevanceFieldEnum = (typeof ResolvedComplaintsOrderByRelevanceFieldEnum)[keyof typeof ResolvedComplaintsOrderByRelevanceFieldEnum]


  export const NotificationsOrderByRelevanceFieldEnum: {
    uid: 'uid'
  };

  export type NotificationsOrderByRelevanceFieldEnum = (typeof NotificationsOrderByRelevanceFieldEnum)[keyof typeof NotificationsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'STATUS'
   */
  export type EnumSTATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'STATUS'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    uid?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    roll?: StringNullableFilter<"User"> | string | null
    mobile?: StringFilter<"User"> | string
    session?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    block?: BoolFilter<"User"> | boolean
    department_id?: StringFilter<"User"> | string
    profession_id?: IntFilter<"User"> | number
    Department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    Profession?: XOR<ProfessionScalarRelationFilter, ProfessionWhereInput>
    complaint?: ComplaintsListRelationFilter
    resolve?: ResolvedComplaintsListRelationFilter
    notifications?: NotificationsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    uid?: SortOrder
    email?: SortOrder
    name?: SortOrder
    roll?: SortOrderInput | SortOrder
    mobile?: SortOrder
    session?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    block?: SortOrder
    department_id?: SortOrder
    profession_id?: SortOrder
    Department?: DepartmentOrderByWithRelationInput
    Profession?: ProfessionOrderByWithRelationInput
    complaint?: ComplaintsOrderByRelationAggregateInput
    resolve?: ResolvedComplaintsOrderByRelationAggregateInput
    notifications?: NotificationsOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    uid?: string
    email?: string
    roll?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    mobile?: StringFilter<"User"> | string
    session?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    block?: BoolFilter<"User"> | boolean
    department_id?: StringFilter<"User"> | string
    profession_id?: IntFilter<"User"> | number
    Department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    Profession?: XOR<ProfessionScalarRelationFilter, ProfessionWhereInput>
    complaint?: ComplaintsListRelationFilter
    resolve?: ResolvedComplaintsListRelationFilter
    notifications?: NotificationsListRelationFilter
  }, "uid" | "email" | "roll">

  export type UserOrderByWithAggregationInput = {
    uid?: SortOrder
    email?: SortOrder
    name?: SortOrder
    roll?: SortOrderInput | SortOrder
    mobile?: SortOrder
    session?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    block?: SortOrder
    department_id?: SortOrder
    profession_id?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    uid?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    roll?: StringNullableWithAggregatesFilter<"User"> | string | null
    mobile?: StringWithAggregatesFilter<"User"> | string
    session?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    block?: BoolWithAggregatesFilter<"User"> | boolean
    department_id?: StringWithAggregatesFilter<"User"> | string
    profession_id?: IntWithAggregatesFilter<"User"> | number
  }

  export type ProfessionWhereInput = {
    AND?: ProfessionWhereInput | ProfessionWhereInput[]
    OR?: ProfessionWhereInput[]
    NOT?: ProfessionWhereInput | ProfessionWhereInput[]
    profession_id?: IntFilter<"Profession"> | number
    profession_name?: StringFilter<"Profession"> | string
    user?: UserListRelationFilter
  }

  export type ProfessionOrderByWithRelationInput = {
    profession_id?: SortOrder
    profession_name?: SortOrder
    user?: UserOrderByRelationAggregateInput
    _relevance?: ProfessionOrderByRelevanceInput
  }

  export type ProfessionWhereUniqueInput = Prisma.AtLeast<{
    profession_id?: number
    AND?: ProfessionWhereInput | ProfessionWhereInput[]
    OR?: ProfessionWhereInput[]
    NOT?: ProfessionWhereInput | ProfessionWhereInput[]
    profession_name?: StringFilter<"Profession"> | string
    user?: UserListRelationFilter
  }, "profession_id">

  export type ProfessionOrderByWithAggregationInput = {
    profession_id?: SortOrder
    profession_name?: SortOrder
    _count?: ProfessionCountOrderByAggregateInput
    _avg?: ProfessionAvgOrderByAggregateInput
    _max?: ProfessionMaxOrderByAggregateInput
    _min?: ProfessionMinOrderByAggregateInput
    _sum?: ProfessionSumOrderByAggregateInput
  }

  export type ProfessionScalarWhereWithAggregatesInput = {
    AND?: ProfessionScalarWhereWithAggregatesInput | ProfessionScalarWhereWithAggregatesInput[]
    OR?: ProfessionScalarWhereWithAggregatesInput[]
    NOT?: ProfessionScalarWhereWithAggregatesInput | ProfessionScalarWhereWithAggregatesInput[]
    profession_id?: IntWithAggregatesFilter<"Profession"> | number
    profession_name?: StringWithAggregatesFilter<"Profession"> | string
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    employee_id?: IntFilter<"Employee"> | number
    employee_name?: StringFilter<"Employee"> | string
    employee_mobile?: StringFilter<"Employee"> | string
    complaint_cat_id?: IntFilter<"Employee"> | number
    ComplaintCataegory?: XOR<ComplaintCataegoryScalarRelationFilter, ComplaintCataegoryWhereInput>
    resolve?: ResolvedComplaintsListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    employee_id?: SortOrder
    employee_name?: SortOrder
    employee_mobile?: SortOrder
    complaint_cat_id?: SortOrder
    ComplaintCataegory?: ComplaintCataegoryOrderByWithRelationInput
    resolve?: ResolvedComplaintsOrderByRelationAggregateInput
    _relevance?: EmployeeOrderByRelevanceInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    employee_id?: number
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    employee_name?: StringFilter<"Employee"> | string
    employee_mobile?: StringFilter<"Employee"> | string
    complaint_cat_id?: IntFilter<"Employee"> | number
    ComplaintCataegory?: XOR<ComplaintCataegoryScalarRelationFilter, ComplaintCataegoryWhereInput>
    resolve?: ResolvedComplaintsListRelationFilter
  }, "employee_id">

  export type EmployeeOrderByWithAggregationInput = {
    employee_id?: SortOrder
    employee_name?: SortOrder
    employee_mobile?: SortOrder
    complaint_cat_id?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    employee_id?: IntWithAggregatesFilter<"Employee"> | number
    employee_name?: StringWithAggregatesFilter<"Employee"> | string
    employee_mobile?: StringWithAggregatesFilter<"Employee"> | string
    complaint_cat_id?: IntWithAggregatesFilter<"Employee"> | number
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    department_id?: StringFilter<"Department"> | string
    dept_full_name?: StringFilter<"Department"> | string
    dept_shortform?: StringFilter<"Department"> | string
    users?: UserListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    department_id?: SortOrder
    dept_full_name?: SortOrder
    dept_shortform?: SortOrder
    users?: UserOrderByRelationAggregateInput
    _relevance?: DepartmentOrderByRelevanceInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    department_id?: string
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    dept_full_name?: StringFilter<"Department"> | string
    dept_shortform?: StringFilter<"Department"> | string
    users?: UserListRelationFilter
  }, "department_id">

  export type DepartmentOrderByWithAggregationInput = {
    department_id?: SortOrder
    dept_full_name?: SortOrder
    dept_shortform?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    department_id?: StringWithAggregatesFilter<"Department"> | string
    dept_full_name?: StringWithAggregatesFilter<"Department"> | string
    dept_shortform?: StringWithAggregatesFilter<"Department"> | string
  }

  export type ComplaintsWhereInput = {
    AND?: ComplaintsWhereInput | ComplaintsWhereInput[]
    OR?: ComplaintsWhereInput[]
    NOT?: ComplaintsWhereInput | ComplaintsWhereInput[]
    complaint_id?: IntFilter<"Complaints"> | number
    complaint_title?: StringFilter<"Complaints"> | string
    complaint_description?: StringFilter<"Complaints"> | string
    createdAt?: DateTimeFilter<"Complaints"> | Date | string
    updatedAt?: DateTimeFilter<"Complaints"> | Date | string
    status?: EnumSTATUSFilter<"Complaints"> | $Enums.STATUS
    emergancy?: BoolFilter<"Complaints"> | boolean
    complaint_cat_id?: IntNullableFilter<"Complaints"> | number | null
    uid?: StringFilter<"Complaints"> | string
    building_id?: IntNullableFilter<"Complaints"> | number | null
    room_no?: StringNullableFilter<"Complaints"> | string | null
    ComplaintCataegory?: XOR<ComplaintCataegoryNullableScalarRelationFilter, ComplaintCataegoryWhereInput> | null
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    resolve?: ResolvedComplaintsListRelationFilter
    Buildings?: XOR<BuildingsNullableScalarRelationFilter, BuildingsWhereInput> | null
  }

  export type ComplaintsOrderByWithRelationInput = {
    complaint_id?: SortOrder
    complaint_title?: SortOrder
    complaint_description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    emergancy?: SortOrder
    complaint_cat_id?: SortOrderInput | SortOrder
    uid?: SortOrder
    building_id?: SortOrderInput | SortOrder
    room_no?: SortOrderInput | SortOrder
    ComplaintCataegory?: ComplaintCataegoryOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
    resolve?: ResolvedComplaintsOrderByRelationAggregateInput
    Buildings?: BuildingsOrderByWithRelationInput
    _relevance?: ComplaintsOrderByRelevanceInput
  }

  export type ComplaintsWhereUniqueInput = Prisma.AtLeast<{
    complaint_id?: number
    AND?: ComplaintsWhereInput | ComplaintsWhereInput[]
    OR?: ComplaintsWhereInput[]
    NOT?: ComplaintsWhereInput | ComplaintsWhereInput[]
    complaint_title?: StringFilter<"Complaints"> | string
    complaint_description?: StringFilter<"Complaints"> | string
    createdAt?: DateTimeFilter<"Complaints"> | Date | string
    updatedAt?: DateTimeFilter<"Complaints"> | Date | string
    status?: EnumSTATUSFilter<"Complaints"> | $Enums.STATUS
    emergancy?: BoolFilter<"Complaints"> | boolean
    complaint_cat_id?: IntNullableFilter<"Complaints"> | number | null
    uid?: StringFilter<"Complaints"> | string
    building_id?: IntNullableFilter<"Complaints"> | number | null
    room_no?: StringNullableFilter<"Complaints"> | string | null
    ComplaintCataegory?: XOR<ComplaintCataegoryNullableScalarRelationFilter, ComplaintCataegoryWhereInput> | null
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    resolve?: ResolvedComplaintsListRelationFilter
    Buildings?: XOR<BuildingsNullableScalarRelationFilter, BuildingsWhereInput> | null
  }, "complaint_id">

  export type ComplaintsOrderByWithAggregationInput = {
    complaint_id?: SortOrder
    complaint_title?: SortOrder
    complaint_description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    emergancy?: SortOrder
    complaint_cat_id?: SortOrderInput | SortOrder
    uid?: SortOrder
    building_id?: SortOrderInput | SortOrder
    room_no?: SortOrderInput | SortOrder
    _count?: ComplaintsCountOrderByAggregateInput
    _avg?: ComplaintsAvgOrderByAggregateInput
    _max?: ComplaintsMaxOrderByAggregateInput
    _min?: ComplaintsMinOrderByAggregateInput
    _sum?: ComplaintsSumOrderByAggregateInput
  }

  export type ComplaintsScalarWhereWithAggregatesInput = {
    AND?: ComplaintsScalarWhereWithAggregatesInput | ComplaintsScalarWhereWithAggregatesInput[]
    OR?: ComplaintsScalarWhereWithAggregatesInput[]
    NOT?: ComplaintsScalarWhereWithAggregatesInput | ComplaintsScalarWhereWithAggregatesInput[]
    complaint_id?: IntWithAggregatesFilter<"Complaints"> | number
    complaint_title?: StringWithAggregatesFilter<"Complaints"> | string
    complaint_description?: StringWithAggregatesFilter<"Complaints"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Complaints"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Complaints"> | Date | string
    status?: EnumSTATUSWithAggregatesFilter<"Complaints"> | $Enums.STATUS
    emergancy?: BoolWithAggregatesFilter<"Complaints"> | boolean
    complaint_cat_id?: IntNullableWithAggregatesFilter<"Complaints"> | number | null
    uid?: StringWithAggregatesFilter<"Complaints"> | string
    building_id?: IntNullableWithAggregatesFilter<"Complaints"> | number | null
    room_no?: StringNullableWithAggregatesFilter<"Complaints"> | string | null
  }

  export type BuildingsWhereInput = {
    AND?: BuildingsWhereInput | BuildingsWhereInput[]
    OR?: BuildingsWhereInput[]
    NOT?: BuildingsWhereInput | BuildingsWhereInput[]
    building_id?: IntFilter<"Buildings"> | number
    building_name?: StringFilter<"Buildings"> | string
    complaints?: ComplaintsListRelationFilter
  }

  export type BuildingsOrderByWithRelationInput = {
    building_id?: SortOrder
    building_name?: SortOrder
    complaints?: ComplaintsOrderByRelationAggregateInput
    _relevance?: BuildingsOrderByRelevanceInput
  }

  export type BuildingsWhereUniqueInput = Prisma.AtLeast<{
    building_id?: number
    AND?: BuildingsWhereInput | BuildingsWhereInput[]
    OR?: BuildingsWhereInput[]
    NOT?: BuildingsWhereInput | BuildingsWhereInput[]
    building_name?: StringFilter<"Buildings"> | string
    complaints?: ComplaintsListRelationFilter
  }, "building_id">

  export type BuildingsOrderByWithAggregationInput = {
    building_id?: SortOrder
    building_name?: SortOrder
    _count?: BuildingsCountOrderByAggregateInput
    _avg?: BuildingsAvgOrderByAggregateInput
    _max?: BuildingsMaxOrderByAggregateInput
    _min?: BuildingsMinOrderByAggregateInput
    _sum?: BuildingsSumOrderByAggregateInput
  }

  export type BuildingsScalarWhereWithAggregatesInput = {
    AND?: BuildingsScalarWhereWithAggregatesInput | BuildingsScalarWhereWithAggregatesInput[]
    OR?: BuildingsScalarWhereWithAggregatesInput[]
    NOT?: BuildingsScalarWhereWithAggregatesInput | BuildingsScalarWhereWithAggregatesInput[]
    building_id?: IntWithAggregatesFilter<"Buildings"> | number
    building_name?: StringWithAggregatesFilter<"Buildings"> | string
  }

  export type ComplaintCataegoryWhereInput = {
    AND?: ComplaintCataegoryWhereInput | ComplaintCataegoryWhereInput[]
    OR?: ComplaintCataegoryWhereInput[]
    NOT?: ComplaintCataegoryWhereInput | ComplaintCataegoryWhereInput[]
    complaint_cat_id?: IntFilter<"ComplaintCataegory"> | number
    complaint_cat_name?: StringFilter<"ComplaintCataegory"> | string
    complaints?: ComplaintsListRelationFilter
    employee?: EmployeeListRelationFilter
  }

  export type ComplaintCataegoryOrderByWithRelationInput = {
    complaint_cat_id?: SortOrder
    complaint_cat_name?: SortOrder
    complaints?: ComplaintsOrderByRelationAggregateInput
    employee?: EmployeeOrderByRelationAggregateInput
    _relevance?: ComplaintCataegoryOrderByRelevanceInput
  }

  export type ComplaintCataegoryWhereUniqueInput = Prisma.AtLeast<{
    complaint_cat_id?: number
    AND?: ComplaintCataegoryWhereInput | ComplaintCataegoryWhereInput[]
    OR?: ComplaintCataegoryWhereInput[]
    NOT?: ComplaintCataegoryWhereInput | ComplaintCataegoryWhereInput[]
    complaint_cat_name?: StringFilter<"ComplaintCataegory"> | string
    complaints?: ComplaintsListRelationFilter
    employee?: EmployeeListRelationFilter
  }, "complaint_cat_id">

  export type ComplaintCataegoryOrderByWithAggregationInput = {
    complaint_cat_id?: SortOrder
    complaint_cat_name?: SortOrder
    _count?: ComplaintCataegoryCountOrderByAggregateInput
    _avg?: ComplaintCataegoryAvgOrderByAggregateInput
    _max?: ComplaintCataegoryMaxOrderByAggregateInput
    _min?: ComplaintCataegoryMinOrderByAggregateInput
    _sum?: ComplaintCataegorySumOrderByAggregateInput
  }

  export type ComplaintCataegoryScalarWhereWithAggregatesInput = {
    AND?: ComplaintCataegoryScalarWhereWithAggregatesInput | ComplaintCataegoryScalarWhereWithAggregatesInput[]
    OR?: ComplaintCataegoryScalarWhereWithAggregatesInput[]
    NOT?: ComplaintCataegoryScalarWhereWithAggregatesInput | ComplaintCataegoryScalarWhereWithAggregatesInput[]
    complaint_cat_id?: IntWithAggregatesFilter<"ComplaintCataegory"> | number
    complaint_cat_name?: StringWithAggregatesFilter<"ComplaintCataegory"> | string
  }

  export type ResolvedComplaintsWhereInput = {
    AND?: ResolvedComplaintsWhereInput | ResolvedComplaintsWhereInput[]
    OR?: ResolvedComplaintsWhereInput[]
    NOT?: ResolvedComplaintsWhereInput | ResolvedComplaintsWhereInput[]
    resolved_details?: StringFilter<"ResolvedComplaints"> | string
    createdAt?: DateTimeFilter<"ResolvedComplaints"> | Date | string
    updatedAt?: DateTimeFilter<"ResolvedComplaints"> | Date | string
    employee_id?: IntNullableFilter<"ResolvedComplaints"> | number | null
    estimated_date?: DateTimeNullableFilter<"ResolvedComplaints"> | Date | string | null
    complaint_id?: IntFilter<"ResolvedComplaints"> | number
    resolved_by?: StringNullableFilter<"ResolvedComplaints"> | string | null
    Employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    Complaints?: XOR<ComplaintsNullableScalarRelationFilter, ComplaintsWhereInput> | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    Notifications?: XOR<NotificationsNullableScalarRelationFilter, NotificationsWhereInput> | null
  }

  export type ResolvedComplaintsOrderByWithRelationInput = {
    resolved_details?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee_id?: SortOrderInput | SortOrder
    estimated_date?: SortOrderInput | SortOrder
    complaint_id?: SortOrder
    resolved_by?: SortOrderInput | SortOrder
    Employee?: EmployeeOrderByWithRelationInput
    Complaints?: ComplaintsOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
    Notifications?: NotificationsOrderByWithRelationInput
    _relevance?: ResolvedComplaintsOrderByRelevanceInput
  }

  export type ResolvedComplaintsWhereUniqueInput = Prisma.AtLeast<{
    complaint_id?: number
    AND?: ResolvedComplaintsWhereInput | ResolvedComplaintsWhereInput[]
    OR?: ResolvedComplaintsWhereInput[]
    NOT?: ResolvedComplaintsWhereInput | ResolvedComplaintsWhereInput[]
    resolved_details?: StringFilter<"ResolvedComplaints"> | string
    createdAt?: DateTimeFilter<"ResolvedComplaints"> | Date | string
    updatedAt?: DateTimeFilter<"ResolvedComplaints"> | Date | string
    employee_id?: IntNullableFilter<"ResolvedComplaints"> | number | null
    estimated_date?: DateTimeNullableFilter<"ResolvedComplaints"> | Date | string | null
    resolved_by?: StringNullableFilter<"ResolvedComplaints"> | string | null
    Employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    Complaints?: XOR<ComplaintsNullableScalarRelationFilter, ComplaintsWhereInput> | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    Notifications?: XOR<NotificationsNullableScalarRelationFilter, NotificationsWhereInput> | null
  }, "complaint_id">

  export type ResolvedComplaintsOrderByWithAggregationInput = {
    resolved_details?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee_id?: SortOrderInput | SortOrder
    estimated_date?: SortOrderInput | SortOrder
    complaint_id?: SortOrder
    resolved_by?: SortOrderInput | SortOrder
    _count?: ResolvedComplaintsCountOrderByAggregateInput
    _avg?: ResolvedComplaintsAvgOrderByAggregateInput
    _max?: ResolvedComplaintsMaxOrderByAggregateInput
    _min?: ResolvedComplaintsMinOrderByAggregateInput
    _sum?: ResolvedComplaintsSumOrderByAggregateInput
  }

  export type ResolvedComplaintsScalarWhereWithAggregatesInput = {
    AND?: ResolvedComplaintsScalarWhereWithAggregatesInput | ResolvedComplaintsScalarWhereWithAggregatesInput[]
    OR?: ResolvedComplaintsScalarWhereWithAggregatesInput[]
    NOT?: ResolvedComplaintsScalarWhereWithAggregatesInput | ResolvedComplaintsScalarWhereWithAggregatesInput[]
    resolved_details?: StringWithAggregatesFilter<"ResolvedComplaints"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ResolvedComplaints"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ResolvedComplaints"> | Date | string
    employee_id?: IntNullableWithAggregatesFilter<"ResolvedComplaints"> | number | null
    estimated_date?: DateTimeNullableWithAggregatesFilter<"ResolvedComplaints"> | Date | string | null
    complaint_id?: IntWithAggregatesFilter<"ResolvedComplaints"> | number
    resolved_by?: StringNullableWithAggregatesFilter<"ResolvedComplaints"> | string | null
  }

  export type NotificationsWhereInput = {
    AND?: NotificationsWhereInput | NotificationsWhereInput[]
    OR?: NotificationsWhereInput[]
    NOT?: NotificationsWhereInput | NotificationsWhereInput[]
    complaint_id?: IntFilter<"Notifications"> | number
    createdAt?: DateTimeFilter<"Notifications"> | Date | string
    updatedAt?: DateTimeFilter<"Notifications"> | Date | string
    seen?: BoolFilter<"Notifications"> | boolean
    uid?: StringFilter<"Notifications"> | string
    ResolveComplaint?: XOR<ResolvedComplaintsScalarRelationFilter, ResolvedComplaintsWhereInput>
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type NotificationsOrderByWithRelationInput = {
    complaint_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    seen?: SortOrder
    uid?: SortOrder
    ResolveComplaint?: ResolvedComplaintsOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
    _relevance?: NotificationsOrderByRelevanceInput
  }

  export type NotificationsWhereUniqueInput = Prisma.AtLeast<{
    complaint_id?: number
    AND?: NotificationsWhereInput | NotificationsWhereInput[]
    OR?: NotificationsWhereInput[]
    NOT?: NotificationsWhereInput | NotificationsWhereInput[]
    createdAt?: DateTimeFilter<"Notifications"> | Date | string
    updatedAt?: DateTimeFilter<"Notifications"> | Date | string
    seen?: BoolFilter<"Notifications"> | boolean
    uid?: StringFilter<"Notifications"> | string
    ResolveComplaint?: XOR<ResolvedComplaintsScalarRelationFilter, ResolvedComplaintsWhereInput>
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "complaint_id">

  export type NotificationsOrderByWithAggregationInput = {
    complaint_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    seen?: SortOrder
    uid?: SortOrder
    _count?: NotificationsCountOrderByAggregateInput
    _avg?: NotificationsAvgOrderByAggregateInput
    _max?: NotificationsMaxOrderByAggregateInput
    _min?: NotificationsMinOrderByAggregateInput
    _sum?: NotificationsSumOrderByAggregateInput
  }

  export type NotificationsScalarWhereWithAggregatesInput = {
    AND?: NotificationsScalarWhereWithAggregatesInput | NotificationsScalarWhereWithAggregatesInput[]
    OR?: NotificationsScalarWhereWithAggregatesInput[]
    NOT?: NotificationsScalarWhereWithAggregatesInput | NotificationsScalarWhereWithAggregatesInput[]
    complaint_id?: IntWithAggregatesFilter<"Notifications"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Notifications"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notifications"> | Date | string
    seen?: BoolWithAggregatesFilter<"Notifications"> | boolean
    uid?: StringWithAggregatesFilter<"Notifications"> | string
  }

  export type UserCreateInput = {
    uid: string
    email: string
    name: string
    roll?: string | null
    mobile: string
    session?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    block?: boolean
    Department: DepartmentCreateNestedOneWithoutUsersInput
    Profession: ProfessionCreateNestedOneWithoutUserInput
    complaint?: ComplaintsCreateNestedManyWithoutUserInput
    resolve?: ResolvedComplaintsCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    uid: string
    email: string
    name: string
    roll?: string | null
    mobile: string
    session?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    block?: boolean
    department_id: string
    profession_id: number
    complaint?: ComplaintsUncheckedCreateNestedManyWithoutUserInput
    resolve?: ResolvedComplaintsUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roll?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: StringFieldUpdateOperationsInput | string
    session?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block?: BoolFieldUpdateOperationsInput | boolean
    Department?: DepartmentUpdateOneRequiredWithoutUsersNestedInput
    Profession?: ProfessionUpdateOneRequiredWithoutUserNestedInput
    complaint?: ComplaintsUpdateManyWithoutUserNestedInput
    resolve?: ResolvedComplaintsUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roll?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: StringFieldUpdateOperationsInput | string
    session?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block?: BoolFieldUpdateOperationsInput | boolean
    department_id?: StringFieldUpdateOperationsInput | string
    profession_id?: IntFieldUpdateOperationsInput | number
    complaint?: ComplaintsUncheckedUpdateManyWithoutUserNestedInput
    resolve?: ResolvedComplaintsUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    uid: string
    email: string
    name: string
    roll?: string | null
    mobile: string
    session?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    block?: boolean
    department_id: string
    profession_id: number
  }

  export type UserUpdateManyMutationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roll?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: StringFieldUpdateOperationsInput | string
    session?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roll?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: StringFieldUpdateOperationsInput | string
    session?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block?: BoolFieldUpdateOperationsInput | boolean
    department_id?: StringFieldUpdateOperationsInput | string
    profession_id?: IntFieldUpdateOperationsInput | number
  }

  export type ProfessionCreateInput = {
    profession_name: string
    user?: UserCreateNestedManyWithoutProfessionInput
  }

  export type ProfessionUncheckedCreateInput = {
    profession_id?: number
    profession_name: string
    user?: UserUncheckedCreateNestedManyWithoutProfessionInput
  }

  export type ProfessionUpdateInput = {
    profession_name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateManyWithoutProfessionNestedInput
  }

  export type ProfessionUncheckedUpdateInput = {
    profession_id?: IntFieldUpdateOperationsInput | number
    profession_name?: StringFieldUpdateOperationsInput | string
    user?: UserUncheckedUpdateManyWithoutProfessionNestedInput
  }

  export type ProfessionCreateManyInput = {
    profession_id?: number
    profession_name: string
  }

  export type ProfessionUpdateManyMutationInput = {
    profession_name?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessionUncheckedUpdateManyInput = {
    profession_id?: IntFieldUpdateOperationsInput | number
    profession_name?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeCreateInput = {
    employee_name: string
    employee_mobile: string
    ComplaintCataegory: ComplaintCataegoryCreateNestedOneWithoutEmployeeInput
    resolve?: ResolvedComplaintsCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    employee_id?: number
    employee_name: string
    employee_mobile: string
    complaint_cat_id: number
    resolve?: ResolvedComplaintsUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    employee_name?: StringFieldUpdateOperationsInput | string
    employee_mobile?: StringFieldUpdateOperationsInput | string
    ComplaintCataegory?: ComplaintCataegoryUpdateOneRequiredWithoutEmployeeNestedInput
    resolve?: ResolvedComplaintsUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    employee_id?: IntFieldUpdateOperationsInput | number
    employee_name?: StringFieldUpdateOperationsInput | string
    employee_mobile?: StringFieldUpdateOperationsInput | string
    complaint_cat_id?: IntFieldUpdateOperationsInput | number
    resolve?: ResolvedComplaintsUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    employee_id?: number
    employee_name: string
    employee_mobile: string
    complaint_cat_id: number
  }

  export type EmployeeUpdateManyMutationInput = {
    employee_name?: StringFieldUpdateOperationsInput | string
    employee_mobile?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    employee_id?: IntFieldUpdateOperationsInput | number
    employee_name?: StringFieldUpdateOperationsInput | string
    employee_mobile?: StringFieldUpdateOperationsInput | string
    complaint_cat_id?: IntFieldUpdateOperationsInput | number
  }

  export type DepartmentCreateInput = {
    department_id: string
    dept_full_name: string
    dept_shortform: string
    users?: UserCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    department_id: string
    dept_full_name: string
    dept_shortform: string
    users?: UserUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    department_id?: StringFieldUpdateOperationsInput | string
    dept_full_name?: StringFieldUpdateOperationsInput | string
    dept_shortform?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    department_id?: StringFieldUpdateOperationsInput | string
    dept_full_name?: StringFieldUpdateOperationsInput | string
    dept_shortform?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    department_id: string
    dept_full_name: string
    dept_shortform: string
  }

  export type DepartmentUpdateManyMutationInput = {
    department_id?: StringFieldUpdateOperationsInput | string
    dept_full_name?: StringFieldUpdateOperationsInput | string
    dept_shortform?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    department_id?: StringFieldUpdateOperationsInput | string
    dept_full_name?: StringFieldUpdateOperationsInput | string
    dept_shortform?: StringFieldUpdateOperationsInput | string
  }

  export type ComplaintsCreateInput = {
    complaint_title: string
    complaint_description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.STATUS
    emergancy?: boolean
    room_no?: string | null
    ComplaintCataegory?: ComplaintCataegoryCreateNestedOneWithoutComplaintsInput
    User: UserCreateNestedOneWithoutComplaintInput
    resolve?: ResolvedComplaintsCreateNestedManyWithoutComplaintsInput
    Buildings?: BuildingsCreateNestedOneWithoutComplaintsInput
  }

  export type ComplaintsUncheckedCreateInput = {
    complaint_id?: number
    complaint_title: string
    complaint_description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.STATUS
    emergancy?: boolean
    complaint_cat_id?: number | null
    uid: string
    building_id?: number | null
    room_no?: string | null
    resolve?: ResolvedComplaintsUncheckedCreateNestedManyWithoutComplaintsInput
  }

  export type ComplaintsUpdateInput = {
    complaint_title?: StringFieldUpdateOperationsInput | string
    complaint_description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    emergancy?: BoolFieldUpdateOperationsInput | boolean
    room_no?: NullableStringFieldUpdateOperationsInput | string | null
    ComplaintCataegory?: ComplaintCataegoryUpdateOneWithoutComplaintsNestedInput
    User?: UserUpdateOneRequiredWithoutComplaintNestedInput
    resolve?: ResolvedComplaintsUpdateManyWithoutComplaintsNestedInput
    Buildings?: BuildingsUpdateOneWithoutComplaintsNestedInput
  }

  export type ComplaintsUncheckedUpdateInput = {
    complaint_id?: IntFieldUpdateOperationsInput | number
    complaint_title?: StringFieldUpdateOperationsInput | string
    complaint_description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    emergancy?: BoolFieldUpdateOperationsInput | boolean
    complaint_cat_id?: NullableIntFieldUpdateOperationsInput | number | null
    uid?: StringFieldUpdateOperationsInput | string
    building_id?: NullableIntFieldUpdateOperationsInput | number | null
    room_no?: NullableStringFieldUpdateOperationsInput | string | null
    resolve?: ResolvedComplaintsUncheckedUpdateManyWithoutComplaintsNestedInput
  }

  export type ComplaintsCreateManyInput = {
    complaint_id?: number
    complaint_title: string
    complaint_description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.STATUS
    emergancy?: boolean
    complaint_cat_id?: number | null
    uid: string
    building_id?: number | null
    room_no?: string | null
  }

  export type ComplaintsUpdateManyMutationInput = {
    complaint_title?: StringFieldUpdateOperationsInput | string
    complaint_description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    emergancy?: BoolFieldUpdateOperationsInput | boolean
    room_no?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComplaintsUncheckedUpdateManyInput = {
    complaint_id?: IntFieldUpdateOperationsInput | number
    complaint_title?: StringFieldUpdateOperationsInput | string
    complaint_description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    emergancy?: BoolFieldUpdateOperationsInput | boolean
    complaint_cat_id?: NullableIntFieldUpdateOperationsInput | number | null
    uid?: StringFieldUpdateOperationsInput | string
    building_id?: NullableIntFieldUpdateOperationsInput | number | null
    room_no?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BuildingsCreateInput = {
    building_name: string
    complaints?: ComplaintsCreateNestedManyWithoutBuildingsInput
  }

  export type BuildingsUncheckedCreateInput = {
    building_id?: number
    building_name: string
    complaints?: ComplaintsUncheckedCreateNestedManyWithoutBuildingsInput
  }

  export type BuildingsUpdateInput = {
    building_name?: StringFieldUpdateOperationsInput | string
    complaints?: ComplaintsUpdateManyWithoutBuildingsNestedInput
  }

  export type BuildingsUncheckedUpdateInput = {
    building_id?: IntFieldUpdateOperationsInput | number
    building_name?: StringFieldUpdateOperationsInput | string
    complaints?: ComplaintsUncheckedUpdateManyWithoutBuildingsNestedInput
  }

  export type BuildingsCreateManyInput = {
    building_id?: number
    building_name: string
  }

  export type BuildingsUpdateManyMutationInput = {
    building_name?: StringFieldUpdateOperationsInput | string
  }

  export type BuildingsUncheckedUpdateManyInput = {
    building_id?: IntFieldUpdateOperationsInput | number
    building_name?: StringFieldUpdateOperationsInput | string
  }

  export type ComplaintCataegoryCreateInput = {
    complaint_cat_name: string
    complaints?: ComplaintsCreateNestedManyWithoutComplaintCataegoryInput
    employee?: EmployeeCreateNestedManyWithoutComplaintCataegoryInput
  }

  export type ComplaintCataegoryUncheckedCreateInput = {
    complaint_cat_id?: number
    complaint_cat_name: string
    complaints?: ComplaintsUncheckedCreateNestedManyWithoutComplaintCataegoryInput
    employee?: EmployeeUncheckedCreateNestedManyWithoutComplaintCataegoryInput
  }

  export type ComplaintCataegoryUpdateInput = {
    complaint_cat_name?: StringFieldUpdateOperationsInput | string
    complaints?: ComplaintsUpdateManyWithoutComplaintCataegoryNestedInput
    employee?: EmployeeUpdateManyWithoutComplaintCataegoryNestedInput
  }

  export type ComplaintCataegoryUncheckedUpdateInput = {
    complaint_cat_id?: IntFieldUpdateOperationsInput | number
    complaint_cat_name?: StringFieldUpdateOperationsInput | string
    complaints?: ComplaintsUncheckedUpdateManyWithoutComplaintCataegoryNestedInput
    employee?: EmployeeUncheckedUpdateManyWithoutComplaintCataegoryNestedInput
  }

  export type ComplaintCataegoryCreateManyInput = {
    complaint_cat_id?: number
    complaint_cat_name: string
  }

  export type ComplaintCataegoryUpdateManyMutationInput = {
    complaint_cat_name?: StringFieldUpdateOperationsInput | string
  }

  export type ComplaintCataegoryUncheckedUpdateManyInput = {
    complaint_cat_id?: IntFieldUpdateOperationsInput | number
    complaint_cat_name?: StringFieldUpdateOperationsInput | string
  }

  export type ResolvedComplaintsCreateInput = {
    resolved_details: string
    createdAt?: Date | string
    updatedAt?: Date | string
    estimated_date?: Date | string | null
    Employee?: EmployeeCreateNestedOneWithoutResolveInput
    Complaints?: ComplaintsCreateNestedOneWithoutResolveInput
    User?: UserCreateNestedOneWithoutResolveInput
    Notifications?: NotificationsCreateNestedOneWithoutResolveComplaintInput
  }

  export type ResolvedComplaintsUncheckedCreateInput = {
    resolved_details: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employee_id?: number | null
    estimated_date?: Date | string | null
    complaint_id: number
    resolved_by?: string | null
    Notifications?: NotificationsUncheckedCreateNestedOneWithoutResolveComplaintInput
  }

  export type ResolvedComplaintsUpdateInput = {
    resolved_details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estimated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Employee?: EmployeeUpdateOneWithoutResolveNestedInput
    Complaints?: ComplaintsUpdateOneWithoutResolveNestedInput
    User?: UserUpdateOneWithoutResolveNestedInput
    Notifications?: NotificationsUpdateOneWithoutResolveComplaintNestedInput
  }

  export type ResolvedComplaintsUncheckedUpdateInput = {
    resolved_details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee_id?: NullableIntFieldUpdateOperationsInput | number | null
    estimated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    complaint_id?: IntFieldUpdateOperationsInput | number
    resolved_by?: NullableStringFieldUpdateOperationsInput | string | null
    Notifications?: NotificationsUncheckedUpdateOneWithoutResolveComplaintNestedInput
  }

  export type ResolvedComplaintsCreateManyInput = {
    resolved_details: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employee_id?: number | null
    estimated_date?: Date | string | null
    complaint_id: number
    resolved_by?: string | null
  }

  export type ResolvedComplaintsUpdateManyMutationInput = {
    resolved_details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estimated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ResolvedComplaintsUncheckedUpdateManyInput = {
    resolved_details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee_id?: NullableIntFieldUpdateOperationsInput | number | null
    estimated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    complaint_id?: IntFieldUpdateOperationsInput | number
    resolved_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationsCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    seen?: boolean
    ResolveComplaint: ResolvedComplaintsCreateNestedOneWithoutNotificationsInput
    User?: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationsUncheckedCreateInput = {
    complaint_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    seen?: boolean
    uid: string
  }

  export type NotificationsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
    ResolveComplaint?: ResolvedComplaintsUpdateOneRequiredWithoutNotificationsNestedInput
    User?: UserUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationsUncheckedUpdateInput = {
    complaint_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
    uid?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationsCreateManyInput = {
    complaint_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    seen?: boolean
    uid: string
  }

  export type NotificationsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationsUncheckedUpdateManyInput = {
    complaint_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
    uid?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DepartmentScalarRelationFilter = {
    is?: DepartmentWhereInput
    isNot?: DepartmentWhereInput
  }

  export type ProfessionScalarRelationFilter = {
    is?: ProfessionWhereInput
    isNot?: ProfessionWhereInput
  }

  export type ComplaintsListRelationFilter = {
    every?: ComplaintsWhereInput
    some?: ComplaintsWhereInput
    none?: ComplaintsWhereInput
  }

  export type ResolvedComplaintsListRelationFilter = {
    every?: ResolvedComplaintsWhereInput
    some?: ResolvedComplaintsWhereInput
    none?: ResolvedComplaintsWhereInput
  }

  export type NotificationsListRelationFilter = {
    every?: NotificationsWhereInput
    some?: NotificationsWhereInput
    none?: NotificationsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ComplaintsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResolvedComplaintsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    uid?: SortOrder
    email?: SortOrder
    name?: SortOrder
    roll?: SortOrder
    mobile?: SortOrder
    session?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    block?: SortOrder
    department_id?: SortOrder
    profession_id?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    profession_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    uid?: SortOrder
    email?: SortOrder
    name?: SortOrder
    roll?: SortOrder
    mobile?: SortOrder
    session?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    block?: SortOrder
    department_id?: SortOrder
    profession_id?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    uid?: SortOrder
    email?: SortOrder
    name?: SortOrder
    roll?: SortOrder
    mobile?: SortOrder
    session?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    block?: SortOrder
    department_id?: SortOrder
    profession_id?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    profession_id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfessionOrderByRelevanceInput = {
    fields: ProfessionOrderByRelevanceFieldEnum | ProfessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProfessionCountOrderByAggregateInput = {
    profession_id?: SortOrder
    profession_name?: SortOrder
  }

  export type ProfessionAvgOrderByAggregateInput = {
    profession_id?: SortOrder
  }

  export type ProfessionMaxOrderByAggregateInput = {
    profession_id?: SortOrder
    profession_name?: SortOrder
  }

  export type ProfessionMinOrderByAggregateInput = {
    profession_id?: SortOrder
    profession_name?: SortOrder
  }

  export type ProfessionSumOrderByAggregateInput = {
    profession_id?: SortOrder
  }

  export type ComplaintCataegoryScalarRelationFilter = {
    is?: ComplaintCataegoryWhereInput
    isNot?: ComplaintCataegoryWhereInput
  }

  export type EmployeeOrderByRelevanceInput = {
    fields: EmployeeOrderByRelevanceFieldEnum | EmployeeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EmployeeCountOrderByAggregateInput = {
    employee_id?: SortOrder
    employee_name?: SortOrder
    employee_mobile?: SortOrder
    complaint_cat_id?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    employee_id?: SortOrder
    complaint_cat_id?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    employee_id?: SortOrder
    employee_name?: SortOrder
    employee_mobile?: SortOrder
    complaint_cat_id?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    employee_id?: SortOrder
    employee_name?: SortOrder
    employee_mobile?: SortOrder
    complaint_cat_id?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    employee_id?: SortOrder
    complaint_cat_id?: SortOrder
  }

  export type DepartmentOrderByRelevanceInput = {
    fields: DepartmentOrderByRelevanceFieldEnum | DepartmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DepartmentCountOrderByAggregateInput = {
    department_id?: SortOrder
    dept_full_name?: SortOrder
    dept_shortform?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    department_id?: SortOrder
    dept_full_name?: SortOrder
    dept_shortform?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    department_id?: SortOrder
    dept_full_name?: SortOrder
    dept_shortform?: SortOrder
  }

  export type EnumSTATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.STATUS | EnumSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.STATUS[]
    notIn?: $Enums.STATUS[]
    not?: NestedEnumSTATUSFilter<$PrismaModel> | $Enums.STATUS
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ComplaintCataegoryNullableScalarRelationFilter = {
    is?: ComplaintCataegoryWhereInput | null
    isNot?: ComplaintCataegoryWhereInput | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BuildingsNullableScalarRelationFilter = {
    is?: BuildingsWhereInput | null
    isNot?: BuildingsWhereInput | null
  }

  export type ComplaintsOrderByRelevanceInput = {
    fields: ComplaintsOrderByRelevanceFieldEnum | ComplaintsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ComplaintsCountOrderByAggregateInput = {
    complaint_id?: SortOrder
    complaint_title?: SortOrder
    complaint_description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    emergancy?: SortOrder
    complaint_cat_id?: SortOrder
    uid?: SortOrder
    building_id?: SortOrder
    room_no?: SortOrder
  }

  export type ComplaintsAvgOrderByAggregateInput = {
    complaint_id?: SortOrder
    complaint_cat_id?: SortOrder
    building_id?: SortOrder
  }

  export type ComplaintsMaxOrderByAggregateInput = {
    complaint_id?: SortOrder
    complaint_title?: SortOrder
    complaint_description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    emergancy?: SortOrder
    complaint_cat_id?: SortOrder
    uid?: SortOrder
    building_id?: SortOrder
    room_no?: SortOrder
  }

  export type ComplaintsMinOrderByAggregateInput = {
    complaint_id?: SortOrder
    complaint_title?: SortOrder
    complaint_description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    emergancy?: SortOrder
    complaint_cat_id?: SortOrder
    uid?: SortOrder
    building_id?: SortOrder
    room_no?: SortOrder
  }

  export type ComplaintsSumOrderByAggregateInput = {
    complaint_id?: SortOrder
    complaint_cat_id?: SortOrder
    building_id?: SortOrder
  }

  export type EnumSTATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.STATUS | EnumSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.STATUS[]
    notIn?: $Enums.STATUS[]
    not?: NestedEnumSTATUSWithAggregatesFilter<$PrismaModel> | $Enums.STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSTATUSFilter<$PrismaModel>
    _max?: NestedEnumSTATUSFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BuildingsOrderByRelevanceInput = {
    fields: BuildingsOrderByRelevanceFieldEnum | BuildingsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BuildingsCountOrderByAggregateInput = {
    building_id?: SortOrder
    building_name?: SortOrder
  }

  export type BuildingsAvgOrderByAggregateInput = {
    building_id?: SortOrder
  }

  export type BuildingsMaxOrderByAggregateInput = {
    building_id?: SortOrder
    building_name?: SortOrder
  }

  export type BuildingsMinOrderByAggregateInput = {
    building_id?: SortOrder
    building_name?: SortOrder
  }

  export type BuildingsSumOrderByAggregateInput = {
    building_id?: SortOrder
  }

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComplaintCataegoryOrderByRelevanceInput = {
    fields: ComplaintCataegoryOrderByRelevanceFieldEnum | ComplaintCataegoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ComplaintCataegoryCountOrderByAggregateInput = {
    complaint_cat_id?: SortOrder
    complaint_cat_name?: SortOrder
  }

  export type ComplaintCataegoryAvgOrderByAggregateInput = {
    complaint_cat_id?: SortOrder
  }

  export type ComplaintCataegoryMaxOrderByAggregateInput = {
    complaint_cat_id?: SortOrder
    complaint_cat_name?: SortOrder
  }

  export type ComplaintCataegoryMinOrderByAggregateInput = {
    complaint_cat_id?: SortOrder
    complaint_cat_name?: SortOrder
  }

  export type ComplaintCataegorySumOrderByAggregateInput = {
    complaint_cat_id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EmployeeNullableScalarRelationFilter = {
    is?: EmployeeWhereInput | null
    isNot?: EmployeeWhereInput | null
  }

  export type ComplaintsNullableScalarRelationFilter = {
    is?: ComplaintsWhereInput | null
    isNot?: ComplaintsWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type NotificationsNullableScalarRelationFilter = {
    is?: NotificationsWhereInput | null
    isNot?: NotificationsWhereInput | null
  }

  export type ResolvedComplaintsOrderByRelevanceInput = {
    fields: ResolvedComplaintsOrderByRelevanceFieldEnum | ResolvedComplaintsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ResolvedComplaintsCountOrderByAggregateInput = {
    resolved_details?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee_id?: SortOrder
    estimated_date?: SortOrder
    complaint_id?: SortOrder
    resolved_by?: SortOrder
  }

  export type ResolvedComplaintsAvgOrderByAggregateInput = {
    employee_id?: SortOrder
    complaint_id?: SortOrder
  }

  export type ResolvedComplaintsMaxOrderByAggregateInput = {
    resolved_details?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee_id?: SortOrder
    estimated_date?: SortOrder
    complaint_id?: SortOrder
    resolved_by?: SortOrder
  }

  export type ResolvedComplaintsMinOrderByAggregateInput = {
    resolved_details?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee_id?: SortOrder
    estimated_date?: SortOrder
    complaint_id?: SortOrder
    resolved_by?: SortOrder
  }

  export type ResolvedComplaintsSumOrderByAggregateInput = {
    employee_id?: SortOrder
    complaint_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ResolvedComplaintsScalarRelationFilter = {
    is?: ResolvedComplaintsWhereInput
    isNot?: ResolvedComplaintsWhereInput
  }

  export type NotificationsOrderByRelevanceInput = {
    fields: NotificationsOrderByRelevanceFieldEnum | NotificationsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotificationsCountOrderByAggregateInput = {
    complaint_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    seen?: SortOrder
    uid?: SortOrder
  }

  export type NotificationsAvgOrderByAggregateInput = {
    complaint_id?: SortOrder
  }

  export type NotificationsMaxOrderByAggregateInput = {
    complaint_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    seen?: SortOrder
    uid?: SortOrder
  }

  export type NotificationsMinOrderByAggregateInput = {
    complaint_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    seen?: SortOrder
    uid?: SortOrder
  }

  export type NotificationsSumOrderByAggregateInput = {
    complaint_id?: SortOrder
  }

  export type DepartmentCreateNestedOneWithoutUsersInput = {
    create?: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutUsersInput
    connect?: DepartmentWhereUniqueInput
  }

  export type ProfessionCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfessionCreateWithoutUserInput, ProfessionUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfessionCreateOrConnectWithoutUserInput
    connect?: ProfessionWhereUniqueInput
  }

  export type ComplaintsCreateNestedManyWithoutUserInput = {
    create?: XOR<ComplaintsCreateWithoutUserInput, ComplaintsUncheckedCreateWithoutUserInput> | ComplaintsCreateWithoutUserInput[] | ComplaintsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ComplaintsCreateOrConnectWithoutUserInput | ComplaintsCreateOrConnectWithoutUserInput[]
    createMany?: ComplaintsCreateManyUserInputEnvelope
    connect?: ComplaintsWhereUniqueInput | ComplaintsWhereUniqueInput[]
  }

  export type ResolvedComplaintsCreateNestedManyWithoutUserInput = {
    create?: XOR<ResolvedComplaintsCreateWithoutUserInput, ResolvedComplaintsUncheckedCreateWithoutUserInput> | ResolvedComplaintsCreateWithoutUserInput[] | ResolvedComplaintsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResolvedComplaintsCreateOrConnectWithoutUserInput | ResolvedComplaintsCreateOrConnectWithoutUserInput[]
    createMany?: ResolvedComplaintsCreateManyUserInputEnvelope
    connect?: ResolvedComplaintsWhereUniqueInput | ResolvedComplaintsWhereUniqueInput[]
  }

  export type NotificationsCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput> | NotificationsCreateWithoutUserInput[] | NotificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUserInput | NotificationsCreateOrConnectWithoutUserInput[]
    createMany?: NotificationsCreateManyUserInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type ComplaintsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ComplaintsCreateWithoutUserInput, ComplaintsUncheckedCreateWithoutUserInput> | ComplaintsCreateWithoutUserInput[] | ComplaintsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ComplaintsCreateOrConnectWithoutUserInput | ComplaintsCreateOrConnectWithoutUserInput[]
    createMany?: ComplaintsCreateManyUserInputEnvelope
    connect?: ComplaintsWhereUniqueInput | ComplaintsWhereUniqueInput[]
  }

  export type ResolvedComplaintsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ResolvedComplaintsCreateWithoutUserInput, ResolvedComplaintsUncheckedCreateWithoutUserInput> | ResolvedComplaintsCreateWithoutUserInput[] | ResolvedComplaintsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResolvedComplaintsCreateOrConnectWithoutUserInput | ResolvedComplaintsCreateOrConnectWithoutUserInput[]
    createMany?: ResolvedComplaintsCreateManyUserInputEnvelope
    connect?: ResolvedComplaintsWhereUniqueInput | ResolvedComplaintsWhereUniqueInput[]
  }

  export type NotificationsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput> | NotificationsCreateWithoutUserInput[] | NotificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUserInput | NotificationsCreateOrConnectWithoutUserInput[]
    createMany?: NotificationsCreateManyUserInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DepartmentUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutUsersInput
    upsert?: DepartmentUpsertWithoutUsersInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutUsersInput, DepartmentUpdateWithoutUsersInput>, DepartmentUncheckedUpdateWithoutUsersInput>
  }

  export type ProfessionUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<ProfessionCreateWithoutUserInput, ProfessionUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfessionCreateOrConnectWithoutUserInput
    upsert?: ProfessionUpsertWithoutUserInput
    connect?: ProfessionWhereUniqueInput
    update?: XOR<XOR<ProfessionUpdateToOneWithWhereWithoutUserInput, ProfessionUpdateWithoutUserInput>, ProfessionUncheckedUpdateWithoutUserInput>
  }

  export type ComplaintsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ComplaintsCreateWithoutUserInput, ComplaintsUncheckedCreateWithoutUserInput> | ComplaintsCreateWithoutUserInput[] | ComplaintsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ComplaintsCreateOrConnectWithoutUserInput | ComplaintsCreateOrConnectWithoutUserInput[]
    upsert?: ComplaintsUpsertWithWhereUniqueWithoutUserInput | ComplaintsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ComplaintsCreateManyUserInputEnvelope
    set?: ComplaintsWhereUniqueInput | ComplaintsWhereUniqueInput[]
    disconnect?: ComplaintsWhereUniqueInput | ComplaintsWhereUniqueInput[]
    delete?: ComplaintsWhereUniqueInput | ComplaintsWhereUniqueInput[]
    connect?: ComplaintsWhereUniqueInput | ComplaintsWhereUniqueInput[]
    update?: ComplaintsUpdateWithWhereUniqueWithoutUserInput | ComplaintsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ComplaintsUpdateManyWithWhereWithoutUserInput | ComplaintsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ComplaintsScalarWhereInput | ComplaintsScalarWhereInput[]
  }

  export type ResolvedComplaintsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResolvedComplaintsCreateWithoutUserInput, ResolvedComplaintsUncheckedCreateWithoutUserInput> | ResolvedComplaintsCreateWithoutUserInput[] | ResolvedComplaintsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResolvedComplaintsCreateOrConnectWithoutUserInput | ResolvedComplaintsCreateOrConnectWithoutUserInput[]
    upsert?: ResolvedComplaintsUpsertWithWhereUniqueWithoutUserInput | ResolvedComplaintsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResolvedComplaintsCreateManyUserInputEnvelope
    set?: ResolvedComplaintsWhereUniqueInput | ResolvedComplaintsWhereUniqueInput[]
    disconnect?: ResolvedComplaintsWhereUniqueInput | ResolvedComplaintsWhereUniqueInput[]
    delete?: ResolvedComplaintsWhereUniqueInput | ResolvedComplaintsWhereUniqueInput[]
    connect?: ResolvedComplaintsWhereUniqueInput | ResolvedComplaintsWhereUniqueInput[]
    update?: ResolvedComplaintsUpdateWithWhereUniqueWithoutUserInput | ResolvedComplaintsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResolvedComplaintsUpdateManyWithWhereWithoutUserInput | ResolvedComplaintsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResolvedComplaintsScalarWhereInput | ResolvedComplaintsScalarWhereInput[]
  }

  export type NotificationsUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput> | NotificationsCreateWithoutUserInput[] | NotificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUserInput | NotificationsCreateOrConnectWithoutUserInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutUserInput | NotificationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationsCreateManyUserInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutUserInput | NotificationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutUserInput | NotificationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ComplaintsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ComplaintsCreateWithoutUserInput, ComplaintsUncheckedCreateWithoutUserInput> | ComplaintsCreateWithoutUserInput[] | ComplaintsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ComplaintsCreateOrConnectWithoutUserInput | ComplaintsCreateOrConnectWithoutUserInput[]
    upsert?: ComplaintsUpsertWithWhereUniqueWithoutUserInput | ComplaintsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ComplaintsCreateManyUserInputEnvelope
    set?: ComplaintsWhereUniqueInput | ComplaintsWhereUniqueInput[]
    disconnect?: ComplaintsWhereUniqueInput | ComplaintsWhereUniqueInput[]
    delete?: ComplaintsWhereUniqueInput | ComplaintsWhereUniqueInput[]
    connect?: ComplaintsWhereUniqueInput | ComplaintsWhereUniqueInput[]
    update?: ComplaintsUpdateWithWhereUniqueWithoutUserInput | ComplaintsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ComplaintsUpdateManyWithWhereWithoutUserInput | ComplaintsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ComplaintsScalarWhereInput | ComplaintsScalarWhereInput[]
  }

  export type ResolvedComplaintsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResolvedComplaintsCreateWithoutUserInput, ResolvedComplaintsUncheckedCreateWithoutUserInput> | ResolvedComplaintsCreateWithoutUserInput[] | ResolvedComplaintsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResolvedComplaintsCreateOrConnectWithoutUserInput | ResolvedComplaintsCreateOrConnectWithoutUserInput[]
    upsert?: ResolvedComplaintsUpsertWithWhereUniqueWithoutUserInput | ResolvedComplaintsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResolvedComplaintsCreateManyUserInputEnvelope
    set?: ResolvedComplaintsWhereUniqueInput | ResolvedComplaintsWhereUniqueInput[]
    disconnect?: ResolvedComplaintsWhereUniqueInput | ResolvedComplaintsWhereUniqueInput[]
    delete?: ResolvedComplaintsWhereUniqueInput | ResolvedComplaintsWhereUniqueInput[]
    connect?: ResolvedComplaintsWhereUniqueInput | ResolvedComplaintsWhereUniqueInput[]
    update?: ResolvedComplaintsUpdateWithWhereUniqueWithoutUserInput | ResolvedComplaintsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResolvedComplaintsUpdateManyWithWhereWithoutUserInput | ResolvedComplaintsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResolvedComplaintsScalarWhereInput | ResolvedComplaintsScalarWhereInput[]
  }

  export type NotificationsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput> | NotificationsCreateWithoutUserInput[] | NotificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUserInput | NotificationsCreateOrConnectWithoutUserInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutUserInput | NotificationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationsCreateManyUserInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutUserInput | NotificationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutUserInput | NotificationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutProfessionInput = {
    create?: XOR<UserCreateWithoutProfessionInput, UserUncheckedCreateWithoutProfessionInput> | UserCreateWithoutProfessionInput[] | UserUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProfessionInput | UserCreateOrConnectWithoutProfessionInput[]
    createMany?: UserCreateManyProfessionInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutProfessionInput = {
    create?: XOR<UserCreateWithoutProfessionInput, UserUncheckedCreateWithoutProfessionInput> | UserCreateWithoutProfessionInput[] | UserUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProfessionInput | UserCreateOrConnectWithoutProfessionInput[]
    createMany?: UserCreateManyProfessionInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutProfessionNestedInput = {
    create?: XOR<UserCreateWithoutProfessionInput, UserUncheckedCreateWithoutProfessionInput> | UserCreateWithoutProfessionInput[] | UserUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProfessionInput | UserCreateOrConnectWithoutProfessionInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutProfessionInput | UserUpsertWithWhereUniqueWithoutProfessionInput[]
    createMany?: UserCreateManyProfessionInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutProfessionInput | UserUpdateWithWhereUniqueWithoutProfessionInput[]
    updateMany?: UserUpdateManyWithWhereWithoutProfessionInput | UserUpdateManyWithWhereWithoutProfessionInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutProfessionNestedInput = {
    create?: XOR<UserCreateWithoutProfessionInput, UserUncheckedCreateWithoutProfessionInput> | UserCreateWithoutProfessionInput[] | UserUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProfessionInput | UserCreateOrConnectWithoutProfessionInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutProfessionInput | UserUpsertWithWhereUniqueWithoutProfessionInput[]
    createMany?: UserCreateManyProfessionInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutProfessionInput | UserUpdateWithWhereUniqueWithoutProfessionInput[]
    updateMany?: UserUpdateManyWithWhereWithoutProfessionInput | UserUpdateManyWithWhereWithoutProfessionInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ComplaintCataegoryCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<ComplaintCataegoryCreateWithoutEmployeeInput, ComplaintCataegoryUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: ComplaintCataegoryCreateOrConnectWithoutEmployeeInput
    connect?: ComplaintCataegoryWhereUniqueInput
  }

  export type ResolvedComplaintsCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<ResolvedComplaintsCreateWithoutEmployeeInput, ResolvedComplaintsUncheckedCreateWithoutEmployeeInput> | ResolvedComplaintsCreateWithoutEmployeeInput[] | ResolvedComplaintsUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ResolvedComplaintsCreateOrConnectWithoutEmployeeInput | ResolvedComplaintsCreateOrConnectWithoutEmployeeInput[]
    createMany?: ResolvedComplaintsCreateManyEmployeeInputEnvelope
    connect?: ResolvedComplaintsWhereUniqueInput | ResolvedComplaintsWhereUniqueInput[]
  }

  export type ResolvedComplaintsUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<ResolvedComplaintsCreateWithoutEmployeeInput, ResolvedComplaintsUncheckedCreateWithoutEmployeeInput> | ResolvedComplaintsCreateWithoutEmployeeInput[] | ResolvedComplaintsUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ResolvedComplaintsCreateOrConnectWithoutEmployeeInput | ResolvedComplaintsCreateOrConnectWithoutEmployeeInput[]
    createMany?: ResolvedComplaintsCreateManyEmployeeInputEnvelope
    connect?: ResolvedComplaintsWhereUniqueInput | ResolvedComplaintsWhereUniqueInput[]
  }

  export type ComplaintCataegoryUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<ComplaintCataegoryCreateWithoutEmployeeInput, ComplaintCataegoryUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: ComplaintCataegoryCreateOrConnectWithoutEmployeeInput
    upsert?: ComplaintCataegoryUpsertWithoutEmployeeInput
    connect?: ComplaintCataegoryWhereUniqueInput
    update?: XOR<XOR<ComplaintCataegoryUpdateToOneWithWhereWithoutEmployeeInput, ComplaintCataegoryUpdateWithoutEmployeeInput>, ComplaintCataegoryUncheckedUpdateWithoutEmployeeInput>
  }

  export type ResolvedComplaintsUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<ResolvedComplaintsCreateWithoutEmployeeInput, ResolvedComplaintsUncheckedCreateWithoutEmployeeInput> | ResolvedComplaintsCreateWithoutEmployeeInput[] | ResolvedComplaintsUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ResolvedComplaintsCreateOrConnectWithoutEmployeeInput | ResolvedComplaintsCreateOrConnectWithoutEmployeeInput[]
    upsert?: ResolvedComplaintsUpsertWithWhereUniqueWithoutEmployeeInput | ResolvedComplaintsUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: ResolvedComplaintsCreateManyEmployeeInputEnvelope
    set?: ResolvedComplaintsWhereUniqueInput | ResolvedComplaintsWhereUniqueInput[]
    disconnect?: ResolvedComplaintsWhereUniqueInput | ResolvedComplaintsWhereUniqueInput[]
    delete?: ResolvedComplaintsWhereUniqueInput | ResolvedComplaintsWhereUniqueInput[]
    connect?: ResolvedComplaintsWhereUniqueInput | ResolvedComplaintsWhereUniqueInput[]
    update?: ResolvedComplaintsUpdateWithWhereUniqueWithoutEmployeeInput | ResolvedComplaintsUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: ResolvedComplaintsUpdateManyWithWhereWithoutEmployeeInput | ResolvedComplaintsUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: ResolvedComplaintsScalarWhereInput | ResolvedComplaintsScalarWhereInput[]
  }

  export type ResolvedComplaintsUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<ResolvedComplaintsCreateWithoutEmployeeInput, ResolvedComplaintsUncheckedCreateWithoutEmployeeInput> | ResolvedComplaintsCreateWithoutEmployeeInput[] | ResolvedComplaintsUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ResolvedComplaintsCreateOrConnectWithoutEmployeeInput | ResolvedComplaintsCreateOrConnectWithoutEmployeeInput[]
    upsert?: ResolvedComplaintsUpsertWithWhereUniqueWithoutEmployeeInput | ResolvedComplaintsUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: ResolvedComplaintsCreateManyEmployeeInputEnvelope
    set?: ResolvedComplaintsWhereUniqueInput | ResolvedComplaintsWhereUniqueInput[]
    disconnect?: ResolvedComplaintsWhereUniqueInput | ResolvedComplaintsWhereUniqueInput[]
    delete?: ResolvedComplaintsWhereUniqueInput | ResolvedComplaintsWhereUniqueInput[]
    connect?: ResolvedComplaintsWhereUniqueInput | ResolvedComplaintsWhereUniqueInput[]
    update?: ResolvedComplaintsUpdateWithWhereUniqueWithoutEmployeeInput | ResolvedComplaintsUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: ResolvedComplaintsUpdateManyWithWhereWithoutEmployeeInput | ResolvedComplaintsUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: ResolvedComplaintsScalarWhereInput | ResolvedComplaintsScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDepartmentInput | UserUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDepartmentInput | UserUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDepartmentInput | UserUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDepartmentInput | UserUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDepartmentInput | UserUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDepartmentInput | UserUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ComplaintCataegoryCreateNestedOneWithoutComplaintsInput = {
    create?: XOR<ComplaintCataegoryCreateWithoutComplaintsInput, ComplaintCataegoryUncheckedCreateWithoutComplaintsInput>
    connectOrCreate?: ComplaintCataegoryCreateOrConnectWithoutComplaintsInput
    connect?: ComplaintCataegoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutComplaintInput = {
    create?: XOR<UserCreateWithoutComplaintInput, UserUncheckedCreateWithoutComplaintInput>
    connectOrCreate?: UserCreateOrConnectWithoutComplaintInput
    connect?: UserWhereUniqueInput
  }

  export type ResolvedComplaintsCreateNestedManyWithoutComplaintsInput = {
    create?: XOR<ResolvedComplaintsCreateWithoutComplaintsInput, ResolvedComplaintsUncheckedCreateWithoutComplaintsInput> | ResolvedComplaintsCreateWithoutComplaintsInput[] | ResolvedComplaintsUncheckedCreateWithoutComplaintsInput[]
    connectOrCreate?: ResolvedComplaintsCreateOrConnectWithoutComplaintsInput | ResolvedComplaintsCreateOrConnectWithoutComplaintsInput[]
    createMany?: ResolvedComplaintsCreateManyComplaintsInputEnvelope
    connect?: ResolvedComplaintsWhereUniqueInput | ResolvedComplaintsWhereUniqueInput[]
  }

  export type BuildingsCreateNestedOneWithoutComplaintsInput = {
    create?: XOR<BuildingsCreateWithoutComplaintsInput, BuildingsUncheckedCreateWithoutComplaintsInput>
    connectOrCreate?: BuildingsCreateOrConnectWithoutComplaintsInput
    connect?: BuildingsWhereUniqueInput
  }

  export type ResolvedComplaintsUncheckedCreateNestedManyWithoutComplaintsInput = {
    create?: XOR<ResolvedComplaintsCreateWithoutComplaintsInput, ResolvedComplaintsUncheckedCreateWithoutComplaintsInput> | ResolvedComplaintsCreateWithoutComplaintsInput[] | ResolvedComplaintsUncheckedCreateWithoutComplaintsInput[]
    connectOrCreate?: ResolvedComplaintsCreateOrConnectWithoutComplaintsInput | ResolvedComplaintsCreateOrConnectWithoutComplaintsInput[]
    createMany?: ResolvedComplaintsCreateManyComplaintsInputEnvelope
    connect?: ResolvedComplaintsWhereUniqueInput | ResolvedComplaintsWhereUniqueInput[]
  }

  export type EnumSTATUSFieldUpdateOperationsInput = {
    set?: $Enums.STATUS
  }

  export type ComplaintCataegoryUpdateOneWithoutComplaintsNestedInput = {
    create?: XOR<ComplaintCataegoryCreateWithoutComplaintsInput, ComplaintCataegoryUncheckedCreateWithoutComplaintsInput>
    connectOrCreate?: ComplaintCataegoryCreateOrConnectWithoutComplaintsInput
    upsert?: ComplaintCataegoryUpsertWithoutComplaintsInput
    disconnect?: ComplaintCataegoryWhereInput | boolean
    delete?: ComplaintCataegoryWhereInput | boolean
    connect?: ComplaintCataegoryWhereUniqueInput
    update?: XOR<XOR<ComplaintCataegoryUpdateToOneWithWhereWithoutComplaintsInput, ComplaintCataegoryUpdateWithoutComplaintsInput>, ComplaintCataegoryUncheckedUpdateWithoutComplaintsInput>
  }

  export type UserUpdateOneRequiredWithoutComplaintNestedInput = {
    create?: XOR<UserCreateWithoutComplaintInput, UserUncheckedCreateWithoutComplaintInput>
    connectOrCreate?: UserCreateOrConnectWithoutComplaintInput
    upsert?: UserUpsertWithoutComplaintInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutComplaintInput, UserUpdateWithoutComplaintInput>, UserUncheckedUpdateWithoutComplaintInput>
  }

  export type ResolvedComplaintsUpdateManyWithoutComplaintsNestedInput = {
    create?: XOR<ResolvedComplaintsCreateWithoutComplaintsInput, ResolvedComplaintsUncheckedCreateWithoutComplaintsInput> | ResolvedComplaintsCreateWithoutComplaintsInput[] | ResolvedComplaintsUncheckedCreateWithoutComplaintsInput[]
    connectOrCreate?: ResolvedComplaintsCreateOrConnectWithoutComplaintsInput | ResolvedComplaintsCreateOrConnectWithoutComplaintsInput[]
    upsert?: ResolvedComplaintsUpsertWithWhereUniqueWithoutComplaintsInput | ResolvedComplaintsUpsertWithWhereUniqueWithoutComplaintsInput[]
    createMany?: ResolvedComplaintsCreateManyComplaintsInputEnvelope
    set?: ResolvedComplaintsWhereUniqueInput | ResolvedComplaintsWhereUniqueInput[]
    disconnect?: ResolvedComplaintsWhereUniqueInput | ResolvedComplaintsWhereUniqueInput[]
    delete?: ResolvedComplaintsWhereUniqueInput | ResolvedComplaintsWhereUniqueInput[]
    connect?: ResolvedComplaintsWhereUniqueInput | ResolvedComplaintsWhereUniqueInput[]
    update?: ResolvedComplaintsUpdateWithWhereUniqueWithoutComplaintsInput | ResolvedComplaintsUpdateWithWhereUniqueWithoutComplaintsInput[]
    updateMany?: ResolvedComplaintsUpdateManyWithWhereWithoutComplaintsInput | ResolvedComplaintsUpdateManyWithWhereWithoutComplaintsInput[]
    deleteMany?: ResolvedComplaintsScalarWhereInput | ResolvedComplaintsScalarWhereInput[]
  }

  export type BuildingsUpdateOneWithoutComplaintsNestedInput = {
    create?: XOR<BuildingsCreateWithoutComplaintsInput, BuildingsUncheckedCreateWithoutComplaintsInput>
    connectOrCreate?: BuildingsCreateOrConnectWithoutComplaintsInput
    upsert?: BuildingsUpsertWithoutComplaintsInput
    disconnect?: BuildingsWhereInput | boolean
    delete?: BuildingsWhereInput | boolean
    connect?: BuildingsWhereUniqueInput
    update?: XOR<XOR<BuildingsUpdateToOneWithWhereWithoutComplaintsInput, BuildingsUpdateWithoutComplaintsInput>, BuildingsUncheckedUpdateWithoutComplaintsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ResolvedComplaintsUncheckedUpdateManyWithoutComplaintsNestedInput = {
    create?: XOR<ResolvedComplaintsCreateWithoutComplaintsInput, ResolvedComplaintsUncheckedCreateWithoutComplaintsInput> | ResolvedComplaintsCreateWithoutComplaintsInput[] | ResolvedComplaintsUncheckedCreateWithoutComplaintsInput[]
    connectOrCreate?: ResolvedComplaintsCreateOrConnectWithoutComplaintsInput | ResolvedComplaintsCreateOrConnectWithoutComplaintsInput[]
    upsert?: ResolvedComplaintsUpsertWithWhereUniqueWithoutComplaintsInput | ResolvedComplaintsUpsertWithWhereUniqueWithoutComplaintsInput[]
    createMany?: ResolvedComplaintsCreateManyComplaintsInputEnvelope
    set?: ResolvedComplaintsWhereUniqueInput | ResolvedComplaintsWhereUniqueInput[]
    disconnect?: ResolvedComplaintsWhereUniqueInput | ResolvedComplaintsWhereUniqueInput[]
    delete?: ResolvedComplaintsWhereUniqueInput | ResolvedComplaintsWhereUniqueInput[]
    connect?: ResolvedComplaintsWhereUniqueInput | ResolvedComplaintsWhereUniqueInput[]
    update?: ResolvedComplaintsUpdateWithWhereUniqueWithoutComplaintsInput | ResolvedComplaintsUpdateWithWhereUniqueWithoutComplaintsInput[]
    updateMany?: ResolvedComplaintsUpdateManyWithWhereWithoutComplaintsInput | ResolvedComplaintsUpdateManyWithWhereWithoutComplaintsInput[]
    deleteMany?: ResolvedComplaintsScalarWhereInput | ResolvedComplaintsScalarWhereInput[]
  }

  export type ComplaintsCreateNestedManyWithoutBuildingsInput = {
    create?: XOR<ComplaintsCreateWithoutBuildingsInput, ComplaintsUncheckedCreateWithoutBuildingsInput> | ComplaintsCreateWithoutBuildingsInput[] | ComplaintsUncheckedCreateWithoutBuildingsInput[]
    connectOrCreate?: ComplaintsCreateOrConnectWithoutBuildingsInput | ComplaintsCreateOrConnectWithoutBuildingsInput[]
    createMany?: ComplaintsCreateManyBuildingsInputEnvelope
    connect?: ComplaintsWhereUniqueInput | ComplaintsWhereUniqueInput[]
  }

  export type ComplaintsUncheckedCreateNestedManyWithoutBuildingsInput = {
    create?: XOR<ComplaintsCreateWithoutBuildingsInput, ComplaintsUncheckedCreateWithoutBuildingsInput> | ComplaintsCreateWithoutBuildingsInput[] | ComplaintsUncheckedCreateWithoutBuildingsInput[]
    connectOrCreate?: ComplaintsCreateOrConnectWithoutBuildingsInput | ComplaintsCreateOrConnectWithoutBuildingsInput[]
    createMany?: ComplaintsCreateManyBuildingsInputEnvelope
    connect?: ComplaintsWhereUniqueInput | ComplaintsWhereUniqueInput[]
  }

  export type ComplaintsUpdateManyWithoutBuildingsNestedInput = {
    create?: XOR<ComplaintsCreateWithoutBuildingsInput, ComplaintsUncheckedCreateWithoutBuildingsInput> | ComplaintsCreateWithoutBuildingsInput[] | ComplaintsUncheckedCreateWithoutBuildingsInput[]
    connectOrCreate?: ComplaintsCreateOrConnectWithoutBuildingsInput | ComplaintsCreateOrConnectWithoutBuildingsInput[]
    upsert?: ComplaintsUpsertWithWhereUniqueWithoutBuildingsInput | ComplaintsUpsertWithWhereUniqueWithoutBuildingsInput[]
    createMany?: ComplaintsCreateManyBuildingsInputEnvelope
    set?: ComplaintsWhereUniqueInput | ComplaintsWhereUniqueInput[]
    disconnect?: ComplaintsWhereUniqueInput | ComplaintsWhereUniqueInput[]
    delete?: ComplaintsWhereUniqueInput | ComplaintsWhereUniqueInput[]
    connect?: ComplaintsWhereUniqueInput | ComplaintsWhereUniqueInput[]
    update?: ComplaintsUpdateWithWhereUniqueWithoutBuildingsInput | ComplaintsUpdateWithWhereUniqueWithoutBuildingsInput[]
    updateMany?: ComplaintsUpdateManyWithWhereWithoutBuildingsInput | ComplaintsUpdateManyWithWhereWithoutBuildingsInput[]
    deleteMany?: ComplaintsScalarWhereInput | ComplaintsScalarWhereInput[]
  }

  export type ComplaintsUncheckedUpdateManyWithoutBuildingsNestedInput = {
    create?: XOR<ComplaintsCreateWithoutBuildingsInput, ComplaintsUncheckedCreateWithoutBuildingsInput> | ComplaintsCreateWithoutBuildingsInput[] | ComplaintsUncheckedCreateWithoutBuildingsInput[]
    connectOrCreate?: ComplaintsCreateOrConnectWithoutBuildingsInput | ComplaintsCreateOrConnectWithoutBuildingsInput[]
    upsert?: ComplaintsUpsertWithWhereUniqueWithoutBuildingsInput | ComplaintsUpsertWithWhereUniqueWithoutBuildingsInput[]
    createMany?: ComplaintsCreateManyBuildingsInputEnvelope
    set?: ComplaintsWhereUniqueInput | ComplaintsWhereUniqueInput[]
    disconnect?: ComplaintsWhereUniqueInput | ComplaintsWhereUniqueInput[]
    delete?: ComplaintsWhereUniqueInput | ComplaintsWhereUniqueInput[]
    connect?: ComplaintsWhereUniqueInput | ComplaintsWhereUniqueInput[]
    update?: ComplaintsUpdateWithWhereUniqueWithoutBuildingsInput | ComplaintsUpdateWithWhereUniqueWithoutBuildingsInput[]
    updateMany?: ComplaintsUpdateManyWithWhereWithoutBuildingsInput | ComplaintsUpdateManyWithWhereWithoutBuildingsInput[]
    deleteMany?: ComplaintsScalarWhereInput | ComplaintsScalarWhereInput[]
  }

  export type ComplaintsCreateNestedManyWithoutComplaintCataegoryInput = {
    create?: XOR<ComplaintsCreateWithoutComplaintCataegoryInput, ComplaintsUncheckedCreateWithoutComplaintCataegoryInput> | ComplaintsCreateWithoutComplaintCataegoryInput[] | ComplaintsUncheckedCreateWithoutComplaintCataegoryInput[]
    connectOrCreate?: ComplaintsCreateOrConnectWithoutComplaintCataegoryInput | ComplaintsCreateOrConnectWithoutComplaintCataegoryInput[]
    createMany?: ComplaintsCreateManyComplaintCataegoryInputEnvelope
    connect?: ComplaintsWhereUniqueInput | ComplaintsWhereUniqueInput[]
  }

  export type EmployeeCreateNestedManyWithoutComplaintCataegoryInput = {
    create?: XOR<EmployeeCreateWithoutComplaintCataegoryInput, EmployeeUncheckedCreateWithoutComplaintCataegoryInput> | EmployeeCreateWithoutComplaintCataegoryInput[] | EmployeeUncheckedCreateWithoutComplaintCataegoryInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutComplaintCataegoryInput | EmployeeCreateOrConnectWithoutComplaintCataegoryInput[]
    createMany?: EmployeeCreateManyComplaintCataegoryInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type ComplaintsUncheckedCreateNestedManyWithoutComplaintCataegoryInput = {
    create?: XOR<ComplaintsCreateWithoutComplaintCataegoryInput, ComplaintsUncheckedCreateWithoutComplaintCataegoryInput> | ComplaintsCreateWithoutComplaintCataegoryInput[] | ComplaintsUncheckedCreateWithoutComplaintCataegoryInput[]
    connectOrCreate?: ComplaintsCreateOrConnectWithoutComplaintCataegoryInput | ComplaintsCreateOrConnectWithoutComplaintCataegoryInput[]
    createMany?: ComplaintsCreateManyComplaintCataegoryInputEnvelope
    connect?: ComplaintsWhereUniqueInput | ComplaintsWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutComplaintCataegoryInput = {
    create?: XOR<EmployeeCreateWithoutComplaintCataegoryInput, EmployeeUncheckedCreateWithoutComplaintCataegoryInput> | EmployeeCreateWithoutComplaintCataegoryInput[] | EmployeeUncheckedCreateWithoutComplaintCataegoryInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutComplaintCataegoryInput | EmployeeCreateOrConnectWithoutComplaintCataegoryInput[]
    createMany?: EmployeeCreateManyComplaintCataegoryInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type ComplaintsUpdateManyWithoutComplaintCataegoryNestedInput = {
    create?: XOR<ComplaintsCreateWithoutComplaintCataegoryInput, ComplaintsUncheckedCreateWithoutComplaintCataegoryInput> | ComplaintsCreateWithoutComplaintCataegoryInput[] | ComplaintsUncheckedCreateWithoutComplaintCataegoryInput[]
    connectOrCreate?: ComplaintsCreateOrConnectWithoutComplaintCataegoryInput | ComplaintsCreateOrConnectWithoutComplaintCataegoryInput[]
    upsert?: ComplaintsUpsertWithWhereUniqueWithoutComplaintCataegoryInput | ComplaintsUpsertWithWhereUniqueWithoutComplaintCataegoryInput[]
    createMany?: ComplaintsCreateManyComplaintCataegoryInputEnvelope
    set?: ComplaintsWhereUniqueInput | ComplaintsWhereUniqueInput[]
    disconnect?: ComplaintsWhereUniqueInput | ComplaintsWhereUniqueInput[]
    delete?: ComplaintsWhereUniqueInput | ComplaintsWhereUniqueInput[]
    connect?: ComplaintsWhereUniqueInput | ComplaintsWhereUniqueInput[]
    update?: ComplaintsUpdateWithWhereUniqueWithoutComplaintCataegoryInput | ComplaintsUpdateWithWhereUniqueWithoutComplaintCataegoryInput[]
    updateMany?: ComplaintsUpdateManyWithWhereWithoutComplaintCataegoryInput | ComplaintsUpdateManyWithWhereWithoutComplaintCataegoryInput[]
    deleteMany?: ComplaintsScalarWhereInput | ComplaintsScalarWhereInput[]
  }

  export type EmployeeUpdateManyWithoutComplaintCataegoryNestedInput = {
    create?: XOR<EmployeeCreateWithoutComplaintCataegoryInput, EmployeeUncheckedCreateWithoutComplaintCataegoryInput> | EmployeeCreateWithoutComplaintCataegoryInput[] | EmployeeUncheckedCreateWithoutComplaintCataegoryInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutComplaintCataegoryInput | EmployeeCreateOrConnectWithoutComplaintCataegoryInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutComplaintCataegoryInput | EmployeeUpsertWithWhereUniqueWithoutComplaintCataegoryInput[]
    createMany?: EmployeeCreateManyComplaintCataegoryInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutComplaintCataegoryInput | EmployeeUpdateWithWhereUniqueWithoutComplaintCataegoryInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutComplaintCataegoryInput | EmployeeUpdateManyWithWhereWithoutComplaintCataegoryInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type ComplaintsUncheckedUpdateManyWithoutComplaintCataegoryNestedInput = {
    create?: XOR<ComplaintsCreateWithoutComplaintCataegoryInput, ComplaintsUncheckedCreateWithoutComplaintCataegoryInput> | ComplaintsCreateWithoutComplaintCataegoryInput[] | ComplaintsUncheckedCreateWithoutComplaintCataegoryInput[]
    connectOrCreate?: ComplaintsCreateOrConnectWithoutComplaintCataegoryInput | ComplaintsCreateOrConnectWithoutComplaintCataegoryInput[]
    upsert?: ComplaintsUpsertWithWhereUniqueWithoutComplaintCataegoryInput | ComplaintsUpsertWithWhereUniqueWithoutComplaintCataegoryInput[]
    createMany?: ComplaintsCreateManyComplaintCataegoryInputEnvelope
    set?: ComplaintsWhereUniqueInput | ComplaintsWhereUniqueInput[]
    disconnect?: ComplaintsWhereUniqueInput | ComplaintsWhereUniqueInput[]
    delete?: ComplaintsWhereUniqueInput | ComplaintsWhereUniqueInput[]
    connect?: ComplaintsWhereUniqueInput | ComplaintsWhereUniqueInput[]
    update?: ComplaintsUpdateWithWhereUniqueWithoutComplaintCataegoryInput | ComplaintsUpdateWithWhereUniqueWithoutComplaintCataegoryInput[]
    updateMany?: ComplaintsUpdateManyWithWhereWithoutComplaintCataegoryInput | ComplaintsUpdateManyWithWhereWithoutComplaintCataegoryInput[]
    deleteMany?: ComplaintsScalarWhereInput | ComplaintsScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutComplaintCataegoryNestedInput = {
    create?: XOR<EmployeeCreateWithoutComplaintCataegoryInput, EmployeeUncheckedCreateWithoutComplaintCataegoryInput> | EmployeeCreateWithoutComplaintCataegoryInput[] | EmployeeUncheckedCreateWithoutComplaintCataegoryInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutComplaintCataegoryInput | EmployeeCreateOrConnectWithoutComplaintCataegoryInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutComplaintCataegoryInput | EmployeeUpsertWithWhereUniqueWithoutComplaintCataegoryInput[]
    createMany?: EmployeeCreateManyComplaintCataegoryInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutComplaintCataegoryInput | EmployeeUpdateWithWhereUniqueWithoutComplaintCataegoryInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutComplaintCataegoryInput | EmployeeUpdateManyWithWhereWithoutComplaintCataegoryInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutResolveInput = {
    create?: XOR<EmployeeCreateWithoutResolveInput, EmployeeUncheckedCreateWithoutResolveInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutResolveInput
    connect?: EmployeeWhereUniqueInput
  }

  export type ComplaintsCreateNestedOneWithoutResolveInput = {
    create?: XOR<ComplaintsCreateWithoutResolveInput, ComplaintsUncheckedCreateWithoutResolveInput>
    connectOrCreate?: ComplaintsCreateOrConnectWithoutResolveInput
    connect?: ComplaintsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutResolveInput = {
    create?: XOR<UserCreateWithoutResolveInput, UserUncheckedCreateWithoutResolveInput>
    connectOrCreate?: UserCreateOrConnectWithoutResolveInput
    connect?: UserWhereUniqueInput
  }

  export type NotificationsCreateNestedOneWithoutResolveComplaintInput = {
    create?: XOR<NotificationsCreateWithoutResolveComplaintInput, NotificationsUncheckedCreateWithoutResolveComplaintInput>
    connectOrCreate?: NotificationsCreateOrConnectWithoutResolveComplaintInput
    connect?: NotificationsWhereUniqueInput
  }

  export type NotificationsUncheckedCreateNestedOneWithoutResolveComplaintInput = {
    create?: XOR<NotificationsCreateWithoutResolveComplaintInput, NotificationsUncheckedCreateWithoutResolveComplaintInput>
    connectOrCreate?: NotificationsCreateOrConnectWithoutResolveComplaintInput
    connect?: NotificationsWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EmployeeUpdateOneWithoutResolveNestedInput = {
    create?: XOR<EmployeeCreateWithoutResolveInput, EmployeeUncheckedCreateWithoutResolveInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutResolveInput
    upsert?: EmployeeUpsertWithoutResolveInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutResolveInput, EmployeeUpdateWithoutResolveInput>, EmployeeUncheckedUpdateWithoutResolveInput>
  }

  export type ComplaintsUpdateOneWithoutResolveNestedInput = {
    create?: XOR<ComplaintsCreateWithoutResolveInput, ComplaintsUncheckedCreateWithoutResolveInput>
    connectOrCreate?: ComplaintsCreateOrConnectWithoutResolveInput
    upsert?: ComplaintsUpsertWithoutResolveInput
    disconnect?: ComplaintsWhereInput | boolean
    delete?: ComplaintsWhereInput | boolean
    connect?: ComplaintsWhereUniqueInput
    update?: XOR<XOR<ComplaintsUpdateToOneWithWhereWithoutResolveInput, ComplaintsUpdateWithoutResolveInput>, ComplaintsUncheckedUpdateWithoutResolveInput>
  }

  export type UserUpdateOneWithoutResolveNestedInput = {
    create?: XOR<UserCreateWithoutResolveInput, UserUncheckedCreateWithoutResolveInput>
    connectOrCreate?: UserCreateOrConnectWithoutResolveInput
    upsert?: UserUpsertWithoutResolveInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResolveInput, UserUpdateWithoutResolveInput>, UserUncheckedUpdateWithoutResolveInput>
  }

  export type NotificationsUpdateOneWithoutResolveComplaintNestedInput = {
    create?: XOR<NotificationsCreateWithoutResolveComplaintInput, NotificationsUncheckedCreateWithoutResolveComplaintInput>
    connectOrCreate?: NotificationsCreateOrConnectWithoutResolveComplaintInput
    upsert?: NotificationsUpsertWithoutResolveComplaintInput
    disconnect?: NotificationsWhereInput | boolean
    delete?: NotificationsWhereInput | boolean
    connect?: NotificationsWhereUniqueInput
    update?: XOR<XOR<NotificationsUpdateToOneWithWhereWithoutResolveComplaintInput, NotificationsUpdateWithoutResolveComplaintInput>, NotificationsUncheckedUpdateWithoutResolveComplaintInput>
  }

  export type NotificationsUncheckedUpdateOneWithoutResolveComplaintNestedInput = {
    create?: XOR<NotificationsCreateWithoutResolveComplaintInput, NotificationsUncheckedCreateWithoutResolveComplaintInput>
    connectOrCreate?: NotificationsCreateOrConnectWithoutResolveComplaintInput
    upsert?: NotificationsUpsertWithoutResolveComplaintInput
    disconnect?: NotificationsWhereInput | boolean
    delete?: NotificationsWhereInput | boolean
    connect?: NotificationsWhereUniqueInput
    update?: XOR<XOR<NotificationsUpdateToOneWithWhereWithoutResolveComplaintInput, NotificationsUpdateWithoutResolveComplaintInput>, NotificationsUncheckedUpdateWithoutResolveComplaintInput>
  }

  export type ResolvedComplaintsCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<ResolvedComplaintsCreateWithoutNotificationsInput, ResolvedComplaintsUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: ResolvedComplaintsCreateOrConnectWithoutNotificationsInput
    connect?: ResolvedComplaintsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type ResolvedComplaintsUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<ResolvedComplaintsCreateWithoutNotificationsInput, ResolvedComplaintsUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: ResolvedComplaintsCreateOrConnectWithoutNotificationsInput
    upsert?: ResolvedComplaintsUpsertWithoutNotificationsInput
    connect?: ResolvedComplaintsWhereUniqueInput
    update?: XOR<XOR<ResolvedComplaintsUpdateToOneWithWhereWithoutNotificationsInput, ResolvedComplaintsUpdateWithoutNotificationsInput>, ResolvedComplaintsUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumSTATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.STATUS | EnumSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.STATUS[]
    notIn?: $Enums.STATUS[]
    not?: NestedEnumSTATUSFilter<$PrismaModel> | $Enums.STATUS
  }

  export type NestedEnumSTATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.STATUS | EnumSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.STATUS[]
    notIn?: $Enums.STATUS[]
    not?: NestedEnumSTATUSWithAggregatesFilter<$PrismaModel> | $Enums.STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSTATUSFilter<$PrismaModel>
    _max?: NestedEnumSTATUSFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DepartmentCreateWithoutUsersInput = {
    department_id: string
    dept_full_name: string
    dept_shortform: string
  }

  export type DepartmentUncheckedCreateWithoutUsersInput = {
    department_id: string
    dept_full_name: string
    dept_shortform: string
  }

  export type DepartmentCreateOrConnectWithoutUsersInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
  }

  export type ProfessionCreateWithoutUserInput = {
    profession_name: string
  }

  export type ProfessionUncheckedCreateWithoutUserInput = {
    profession_id?: number
    profession_name: string
  }

  export type ProfessionCreateOrConnectWithoutUserInput = {
    where: ProfessionWhereUniqueInput
    create: XOR<ProfessionCreateWithoutUserInput, ProfessionUncheckedCreateWithoutUserInput>
  }

  export type ComplaintsCreateWithoutUserInput = {
    complaint_title: string
    complaint_description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.STATUS
    emergancy?: boolean
    room_no?: string | null
    ComplaintCataegory?: ComplaintCataegoryCreateNestedOneWithoutComplaintsInput
    resolve?: ResolvedComplaintsCreateNestedManyWithoutComplaintsInput
    Buildings?: BuildingsCreateNestedOneWithoutComplaintsInput
  }

  export type ComplaintsUncheckedCreateWithoutUserInput = {
    complaint_id?: number
    complaint_title: string
    complaint_description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.STATUS
    emergancy?: boolean
    complaint_cat_id?: number | null
    building_id?: number | null
    room_no?: string | null
    resolve?: ResolvedComplaintsUncheckedCreateNestedManyWithoutComplaintsInput
  }

  export type ComplaintsCreateOrConnectWithoutUserInput = {
    where: ComplaintsWhereUniqueInput
    create: XOR<ComplaintsCreateWithoutUserInput, ComplaintsUncheckedCreateWithoutUserInput>
  }

  export type ComplaintsCreateManyUserInputEnvelope = {
    data: ComplaintsCreateManyUserInput | ComplaintsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ResolvedComplaintsCreateWithoutUserInput = {
    resolved_details: string
    createdAt?: Date | string
    updatedAt?: Date | string
    estimated_date?: Date | string | null
    Employee?: EmployeeCreateNestedOneWithoutResolveInput
    Complaints?: ComplaintsCreateNestedOneWithoutResolveInput
    Notifications?: NotificationsCreateNestedOneWithoutResolveComplaintInput
  }

  export type ResolvedComplaintsUncheckedCreateWithoutUserInput = {
    resolved_details: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employee_id?: number | null
    estimated_date?: Date | string | null
    complaint_id: number
    Notifications?: NotificationsUncheckedCreateNestedOneWithoutResolveComplaintInput
  }

  export type ResolvedComplaintsCreateOrConnectWithoutUserInput = {
    where: ResolvedComplaintsWhereUniqueInput
    create: XOR<ResolvedComplaintsCreateWithoutUserInput, ResolvedComplaintsUncheckedCreateWithoutUserInput>
  }

  export type ResolvedComplaintsCreateManyUserInputEnvelope = {
    data: ResolvedComplaintsCreateManyUserInput | ResolvedComplaintsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationsCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    seen?: boolean
    ResolveComplaint: ResolvedComplaintsCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationsUncheckedCreateWithoutUserInput = {
    complaint_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    seen?: boolean
  }

  export type NotificationsCreateOrConnectWithoutUserInput = {
    where: NotificationsWhereUniqueInput
    create: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput>
  }

  export type NotificationsCreateManyUserInputEnvelope = {
    data: NotificationsCreateManyUserInput | NotificationsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentUpsertWithoutUsersInput = {
    update: XOR<DepartmentUpdateWithoutUsersInput, DepartmentUncheckedUpdateWithoutUsersInput>
    create: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutUsersInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutUsersInput, DepartmentUncheckedUpdateWithoutUsersInput>
  }

  export type DepartmentUpdateWithoutUsersInput = {
    department_id?: StringFieldUpdateOperationsInput | string
    dept_full_name?: StringFieldUpdateOperationsInput | string
    dept_shortform?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentUncheckedUpdateWithoutUsersInput = {
    department_id?: StringFieldUpdateOperationsInput | string
    dept_full_name?: StringFieldUpdateOperationsInput | string
    dept_shortform?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessionUpsertWithoutUserInput = {
    update: XOR<ProfessionUpdateWithoutUserInput, ProfessionUncheckedUpdateWithoutUserInput>
    create: XOR<ProfessionCreateWithoutUserInput, ProfessionUncheckedCreateWithoutUserInput>
    where?: ProfessionWhereInput
  }

  export type ProfessionUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfessionWhereInput
    data: XOR<ProfessionUpdateWithoutUserInput, ProfessionUncheckedUpdateWithoutUserInput>
  }

  export type ProfessionUpdateWithoutUserInput = {
    profession_name?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessionUncheckedUpdateWithoutUserInput = {
    profession_id?: IntFieldUpdateOperationsInput | number
    profession_name?: StringFieldUpdateOperationsInput | string
  }

  export type ComplaintsUpsertWithWhereUniqueWithoutUserInput = {
    where: ComplaintsWhereUniqueInput
    update: XOR<ComplaintsUpdateWithoutUserInput, ComplaintsUncheckedUpdateWithoutUserInput>
    create: XOR<ComplaintsCreateWithoutUserInput, ComplaintsUncheckedCreateWithoutUserInput>
  }

  export type ComplaintsUpdateWithWhereUniqueWithoutUserInput = {
    where: ComplaintsWhereUniqueInput
    data: XOR<ComplaintsUpdateWithoutUserInput, ComplaintsUncheckedUpdateWithoutUserInput>
  }

  export type ComplaintsUpdateManyWithWhereWithoutUserInput = {
    where: ComplaintsScalarWhereInput
    data: XOR<ComplaintsUpdateManyMutationInput, ComplaintsUncheckedUpdateManyWithoutUserInput>
  }

  export type ComplaintsScalarWhereInput = {
    AND?: ComplaintsScalarWhereInput | ComplaintsScalarWhereInput[]
    OR?: ComplaintsScalarWhereInput[]
    NOT?: ComplaintsScalarWhereInput | ComplaintsScalarWhereInput[]
    complaint_id?: IntFilter<"Complaints"> | number
    complaint_title?: StringFilter<"Complaints"> | string
    complaint_description?: StringFilter<"Complaints"> | string
    createdAt?: DateTimeFilter<"Complaints"> | Date | string
    updatedAt?: DateTimeFilter<"Complaints"> | Date | string
    status?: EnumSTATUSFilter<"Complaints"> | $Enums.STATUS
    emergancy?: BoolFilter<"Complaints"> | boolean
    complaint_cat_id?: IntNullableFilter<"Complaints"> | number | null
    uid?: StringFilter<"Complaints"> | string
    building_id?: IntNullableFilter<"Complaints"> | number | null
    room_no?: StringNullableFilter<"Complaints"> | string | null
  }

  export type ResolvedComplaintsUpsertWithWhereUniqueWithoutUserInput = {
    where: ResolvedComplaintsWhereUniqueInput
    update: XOR<ResolvedComplaintsUpdateWithoutUserInput, ResolvedComplaintsUncheckedUpdateWithoutUserInput>
    create: XOR<ResolvedComplaintsCreateWithoutUserInput, ResolvedComplaintsUncheckedCreateWithoutUserInput>
  }

  export type ResolvedComplaintsUpdateWithWhereUniqueWithoutUserInput = {
    where: ResolvedComplaintsWhereUniqueInput
    data: XOR<ResolvedComplaintsUpdateWithoutUserInput, ResolvedComplaintsUncheckedUpdateWithoutUserInput>
  }

  export type ResolvedComplaintsUpdateManyWithWhereWithoutUserInput = {
    where: ResolvedComplaintsScalarWhereInput
    data: XOR<ResolvedComplaintsUpdateManyMutationInput, ResolvedComplaintsUncheckedUpdateManyWithoutUserInput>
  }

  export type ResolvedComplaintsScalarWhereInput = {
    AND?: ResolvedComplaintsScalarWhereInput | ResolvedComplaintsScalarWhereInput[]
    OR?: ResolvedComplaintsScalarWhereInput[]
    NOT?: ResolvedComplaintsScalarWhereInput | ResolvedComplaintsScalarWhereInput[]
    resolved_details?: StringFilter<"ResolvedComplaints"> | string
    createdAt?: DateTimeFilter<"ResolvedComplaints"> | Date | string
    updatedAt?: DateTimeFilter<"ResolvedComplaints"> | Date | string
    employee_id?: IntNullableFilter<"ResolvedComplaints"> | number | null
    estimated_date?: DateTimeNullableFilter<"ResolvedComplaints"> | Date | string | null
    complaint_id?: IntFilter<"ResolvedComplaints"> | number
    resolved_by?: StringNullableFilter<"ResolvedComplaints"> | string | null
  }

  export type NotificationsUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationsWhereUniqueInput
    update: XOR<NotificationsUpdateWithoutUserInput, NotificationsUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput>
  }

  export type NotificationsUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationsWhereUniqueInput
    data: XOR<NotificationsUpdateWithoutUserInput, NotificationsUncheckedUpdateWithoutUserInput>
  }

  export type NotificationsUpdateManyWithWhereWithoutUserInput = {
    where: NotificationsScalarWhereInput
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationsScalarWhereInput = {
    AND?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
    OR?: NotificationsScalarWhereInput[]
    NOT?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
    complaint_id?: IntFilter<"Notifications"> | number
    createdAt?: DateTimeFilter<"Notifications"> | Date | string
    updatedAt?: DateTimeFilter<"Notifications"> | Date | string
    seen?: BoolFilter<"Notifications"> | boolean
    uid?: StringFilter<"Notifications"> | string
  }

  export type UserCreateWithoutProfessionInput = {
    uid: string
    email: string
    name: string
    roll?: string | null
    mobile: string
    session?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    block?: boolean
    Department: DepartmentCreateNestedOneWithoutUsersInput
    complaint?: ComplaintsCreateNestedManyWithoutUserInput
    resolve?: ResolvedComplaintsCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfessionInput = {
    uid: string
    email: string
    name: string
    roll?: string | null
    mobile: string
    session?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    block?: boolean
    department_id: string
    complaint?: ComplaintsUncheckedCreateNestedManyWithoutUserInput
    resolve?: ResolvedComplaintsUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfessionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfessionInput, UserUncheckedCreateWithoutProfessionInput>
  }

  export type UserCreateManyProfessionInputEnvelope = {
    data: UserCreateManyProfessionInput | UserCreateManyProfessionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutProfessionInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutProfessionInput, UserUncheckedUpdateWithoutProfessionInput>
    create: XOR<UserCreateWithoutProfessionInput, UserUncheckedCreateWithoutProfessionInput>
  }

  export type UserUpdateWithWhereUniqueWithoutProfessionInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutProfessionInput, UserUncheckedUpdateWithoutProfessionInput>
  }

  export type UserUpdateManyWithWhereWithoutProfessionInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutProfessionInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    uid?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    roll?: StringNullableFilter<"User"> | string | null
    mobile?: StringFilter<"User"> | string
    session?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    block?: BoolFilter<"User"> | boolean
    department_id?: StringFilter<"User"> | string
    profession_id?: IntFilter<"User"> | number
  }

  export type ComplaintCataegoryCreateWithoutEmployeeInput = {
    complaint_cat_name: string
    complaints?: ComplaintsCreateNestedManyWithoutComplaintCataegoryInput
  }

  export type ComplaintCataegoryUncheckedCreateWithoutEmployeeInput = {
    complaint_cat_id?: number
    complaint_cat_name: string
    complaints?: ComplaintsUncheckedCreateNestedManyWithoutComplaintCataegoryInput
  }

  export type ComplaintCataegoryCreateOrConnectWithoutEmployeeInput = {
    where: ComplaintCataegoryWhereUniqueInput
    create: XOR<ComplaintCataegoryCreateWithoutEmployeeInput, ComplaintCataegoryUncheckedCreateWithoutEmployeeInput>
  }

  export type ResolvedComplaintsCreateWithoutEmployeeInput = {
    resolved_details: string
    createdAt?: Date | string
    updatedAt?: Date | string
    estimated_date?: Date | string | null
    Complaints?: ComplaintsCreateNestedOneWithoutResolveInput
    User?: UserCreateNestedOneWithoutResolveInput
    Notifications?: NotificationsCreateNestedOneWithoutResolveComplaintInput
  }

  export type ResolvedComplaintsUncheckedCreateWithoutEmployeeInput = {
    resolved_details: string
    createdAt?: Date | string
    updatedAt?: Date | string
    estimated_date?: Date | string | null
    complaint_id: number
    resolved_by?: string | null
    Notifications?: NotificationsUncheckedCreateNestedOneWithoutResolveComplaintInput
  }

  export type ResolvedComplaintsCreateOrConnectWithoutEmployeeInput = {
    where: ResolvedComplaintsWhereUniqueInput
    create: XOR<ResolvedComplaintsCreateWithoutEmployeeInput, ResolvedComplaintsUncheckedCreateWithoutEmployeeInput>
  }

  export type ResolvedComplaintsCreateManyEmployeeInputEnvelope = {
    data: ResolvedComplaintsCreateManyEmployeeInput | ResolvedComplaintsCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type ComplaintCataegoryUpsertWithoutEmployeeInput = {
    update: XOR<ComplaintCataegoryUpdateWithoutEmployeeInput, ComplaintCataegoryUncheckedUpdateWithoutEmployeeInput>
    create: XOR<ComplaintCataegoryCreateWithoutEmployeeInput, ComplaintCataegoryUncheckedCreateWithoutEmployeeInput>
    where?: ComplaintCataegoryWhereInput
  }

  export type ComplaintCataegoryUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: ComplaintCataegoryWhereInput
    data: XOR<ComplaintCataegoryUpdateWithoutEmployeeInput, ComplaintCataegoryUncheckedUpdateWithoutEmployeeInput>
  }

  export type ComplaintCataegoryUpdateWithoutEmployeeInput = {
    complaint_cat_name?: StringFieldUpdateOperationsInput | string
    complaints?: ComplaintsUpdateManyWithoutComplaintCataegoryNestedInput
  }

  export type ComplaintCataegoryUncheckedUpdateWithoutEmployeeInput = {
    complaint_cat_id?: IntFieldUpdateOperationsInput | number
    complaint_cat_name?: StringFieldUpdateOperationsInput | string
    complaints?: ComplaintsUncheckedUpdateManyWithoutComplaintCataegoryNestedInput
  }

  export type ResolvedComplaintsUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: ResolvedComplaintsWhereUniqueInput
    update: XOR<ResolvedComplaintsUpdateWithoutEmployeeInput, ResolvedComplaintsUncheckedUpdateWithoutEmployeeInput>
    create: XOR<ResolvedComplaintsCreateWithoutEmployeeInput, ResolvedComplaintsUncheckedCreateWithoutEmployeeInput>
  }

  export type ResolvedComplaintsUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: ResolvedComplaintsWhereUniqueInput
    data: XOR<ResolvedComplaintsUpdateWithoutEmployeeInput, ResolvedComplaintsUncheckedUpdateWithoutEmployeeInput>
  }

  export type ResolvedComplaintsUpdateManyWithWhereWithoutEmployeeInput = {
    where: ResolvedComplaintsScalarWhereInput
    data: XOR<ResolvedComplaintsUpdateManyMutationInput, ResolvedComplaintsUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type UserCreateWithoutDepartmentInput = {
    uid: string
    email: string
    name: string
    roll?: string | null
    mobile: string
    session?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    block?: boolean
    Profession: ProfessionCreateNestedOneWithoutUserInput
    complaint?: ComplaintsCreateNestedManyWithoutUserInput
    resolve?: ResolvedComplaintsCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDepartmentInput = {
    uid: string
    email: string
    name: string
    roll?: string | null
    mobile: string
    session?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    block?: boolean
    profession_id: number
    complaint?: ComplaintsUncheckedCreateNestedManyWithoutUserInput
    resolve?: ResolvedComplaintsUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput>
  }

  export type UserCreateManyDepartmentInputEnvelope = {
    data: UserCreateManyDepartmentInput | UserCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDepartmentInput, UserUncheckedUpdateWithoutDepartmentInput>
    create: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDepartmentInput, UserUncheckedUpdateWithoutDepartmentInput>
  }

  export type UserUpdateManyWithWhereWithoutDepartmentInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type ComplaintCataegoryCreateWithoutComplaintsInput = {
    complaint_cat_name: string
    employee?: EmployeeCreateNestedManyWithoutComplaintCataegoryInput
  }

  export type ComplaintCataegoryUncheckedCreateWithoutComplaintsInput = {
    complaint_cat_id?: number
    complaint_cat_name: string
    employee?: EmployeeUncheckedCreateNestedManyWithoutComplaintCataegoryInput
  }

  export type ComplaintCataegoryCreateOrConnectWithoutComplaintsInput = {
    where: ComplaintCataegoryWhereUniqueInput
    create: XOR<ComplaintCataegoryCreateWithoutComplaintsInput, ComplaintCataegoryUncheckedCreateWithoutComplaintsInput>
  }

  export type UserCreateWithoutComplaintInput = {
    uid: string
    email: string
    name: string
    roll?: string | null
    mobile: string
    session?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    block?: boolean
    Department: DepartmentCreateNestedOneWithoutUsersInput
    Profession: ProfessionCreateNestedOneWithoutUserInput
    resolve?: ResolvedComplaintsCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutComplaintInput = {
    uid: string
    email: string
    name: string
    roll?: string | null
    mobile: string
    session?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    block?: boolean
    department_id: string
    profession_id: number
    resolve?: ResolvedComplaintsUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutComplaintInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutComplaintInput, UserUncheckedCreateWithoutComplaintInput>
  }

  export type ResolvedComplaintsCreateWithoutComplaintsInput = {
    resolved_details: string
    createdAt?: Date | string
    updatedAt?: Date | string
    estimated_date?: Date | string | null
    Employee?: EmployeeCreateNestedOneWithoutResolveInput
    User?: UserCreateNestedOneWithoutResolveInput
    Notifications?: NotificationsCreateNestedOneWithoutResolveComplaintInput
  }

  export type ResolvedComplaintsUncheckedCreateWithoutComplaintsInput = {
    resolved_details: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employee_id?: number | null
    estimated_date?: Date | string | null
    resolved_by?: string | null
    Notifications?: NotificationsUncheckedCreateNestedOneWithoutResolveComplaintInput
  }

  export type ResolvedComplaintsCreateOrConnectWithoutComplaintsInput = {
    where: ResolvedComplaintsWhereUniqueInput
    create: XOR<ResolvedComplaintsCreateWithoutComplaintsInput, ResolvedComplaintsUncheckedCreateWithoutComplaintsInput>
  }

  export type ResolvedComplaintsCreateManyComplaintsInputEnvelope = {
    data: ResolvedComplaintsCreateManyComplaintsInput | ResolvedComplaintsCreateManyComplaintsInput[]
    skipDuplicates?: boolean
  }

  export type BuildingsCreateWithoutComplaintsInput = {
    building_name: string
  }

  export type BuildingsUncheckedCreateWithoutComplaintsInput = {
    building_id?: number
    building_name: string
  }

  export type BuildingsCreateOrConnectWithoutComplaintsInput = {
    where: BuildingsWhereUniqueInput
    create: XOR<BuildingsCreateWithoutComplaintsInput, BuildingsUncheckedCreateWithoutComplaintsInput>
  }

  export type ComplaintCataegoryUpsertWithoutComplaintsInput = {
    update: XOR<ComplaintCataegoryUpdateWithoutComplaintsInput, ComplaintCataegoryUncheckedUpdateWithoutComplaintsInput>
    create: XOR<ComplaintCataegoryCreateWithoutComplaintsInput, ComplaintCataegoryUncheckedCreateWithoutComplaintsInput>
    where?: ComplaintCataegoryWhereInput
  }

  export type ComplaintCataegoryUpdateToOneWithWhereWithoutComplaintsInput = {
    where?: ComplaintCataegoryWhereInput
    data: XOR<ComplaintCataegoryUpdateWithoutComplaintsInput, ComplaintCataegoryUncheckedUpdateWithoutComplaintsInput>
  }

  export type ComplaintCataegoryUpdateWithoutComplaintsInput = {
    complaint_cat_name?: StringFieldUpdateOperationsInput | string
    employee?: EmployeeUpdateManyWithoutComplaintCataegoryNestedInput
  }

  export type ComplaintCataegoryUncheckedUpdateWithoutComplaintsInput = {
    complaint_cat_id?: IntFieldUpdateOperationsInput | number
    complaint_cat_name?: StringFieldUpdateOperationsInput | string
    employee?: EmployeeUncheckedUpdateManyWithoutComplaintCataegoryNestedInput
  }

  export type UserUpsertWithoutComplaintInput = {
    update: XOR<UserUpdateWithoutComplaintInput, UserUncheckedUpdateWithoutComplaintInput>
    create: XOR<UserCreateWithoutComplaintInput, UserUncheckedCreateWithoutComplaintInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutComplaintInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutComplaintInput, UserUncheckedUpdateWithoutComplaintInput>
  }

  export type UserUpdateWithoutComplaintInput = {
    uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roll?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: StringFieldUpdateOperationsInput | string
    session?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block?: BoolFieldUpdateOperationsInput | boolean
    Department?: DepartmentUpdateOneRequiredWithoutUsersNestedInput
    Profession?: ProfessionUpdateOneRequiredWithoutUserNestedInput
    resolve?: ResolvedComplaintsUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutComplaintInput = {
    uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roll?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: StringFieldUpdateOperationsInput | string
    session?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block?: BoolFieldUpdateOperationsInput | boolean
    department_id?: StringFieldUpdateOperationsInput | string
    profession_id?: IntFieldUpdateOperationsInput | number
    resolve?: ResolvedComplaintsUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ResolvedComplaintsUpsertWithWhereUniqueWithoutComplaintsInput = {
    where: ResolvedComplaintsWhereUniqueInput
    update: XOR<ResolvedComplaintsUpdateWithoutComplaintsInput, ResolvedComplaintsUncheckedUpdateWithoutComplaintsInput>
    create: XOR<ResolvedComplaintsCreateWithoutComplaintsInput, ResolvedComplaintsUncheckedCreateWithoutComplaintsInput>
  }

  export type ResolvedComplaintsUpdateWithWhereUniqueWithoutComplaintsInput = {
    where: ResolvedComplaintsWhereUniqueInput
    data: XOR<ResolvedComplaintsUpdateWithoutComplaintsInput, ResolvedComplaintsUncheckedUpdateWithoutComplaintsInput>
  }

  export type ResolvedComplaintsUpdateManyWithWhereWithoutComplaintsInput = {
    where: ResolvedComplaintsScalarWhereInput
    data: XOR<ResolvedComplaintsUpdateManyMutationInput, ResolvedComplaintsUncheckedUpdateManyWithoutComplaintsInput>
  }

  export type BuildingsUpsertWithoutComplaintsInput = {
    update: XOR<BuildingsUpdateWithoutComplaintsInput, BuildingsUncheckedUpdateWithoutComplaintsInput>
    create: XOR<BuildingsCreateWithoutComplaintsInput, BuildingsUncheckedCreateWithoutComplaintsInput>
    where?: BuildingsWhereInput
  }

  export type BuildingsUpdateToOneWithWhereWithoutComplaintsInput = {
    where?: BuildingsWhereInput
    data: XOR<BuildingsUpdateWithoutComplaintsInput, BuildingsUncheckedUpdateWithoutComplaintsInput>
  }

  export type BuildingsUpdateWithoutComplaintsInput = {
    building_name?: StringFieldUpdateOperationsInput | string
  }

  export type BuildingsUncheckedUpdateWithoutComplaintsInput = {
    building_id?: IntFieldUpdateOperationsInput | number
    building_name?: StringFieldUpdateOperationsInput | string
  }

  export type ComplaintsCreateWithoutBuildingsInput = {
    complaint_title: string
    complaint_description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.STATUS
    emergancy?: boolean
    room_no?: string | null
    ComplaintCataegory?: ComplaintCataegoryCreateNestedOneWithoutComplaintsInput
    User: UserCreateNestedOneWithoutComplaintInput
    resolve?: ResolvedComplaintsCreateNestedManyWithoutComplaintsInput
  }

  export type ComplaintsUncheckedCreateWithoutBuildingsInput = {
    complaint_id?: number
    complaint_title: string
    complaint_description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.STATUS
    emergancy?: boolean
    complaint_cat_id?: number | null
    uid: string
    room_no?: string | null
    resolve?: ResolvedComplaintsUncheckedCreateNestedManyWithoutComplaintsInput
  }

  export type ComplaintsCreateOrConnectWithoutBuildingsInput = {
    where: ComplaintsWhereUniqueInput
    create: XOR<ComplaintsCreateWithoutBuildingsInput, ComplaintsUncheckedCreateWithoutBuildingsInput>
  }

  export type ComplaintsCreateManyBuildingsInputEnvelope = {
    data: ComplaintsCreateManyBuildingsInput | ComplaintsCreateManyBuildingsInput[]
    skipDuplicates?: boolean
  }

  export type ComplaintsUpsertWithWhereUniqueWithoutBuildingsInput = {
    where: ComplaintsWhereUniqueInput
    update: XOR<ComplaintsUpdateWithoutBuildingsInput, ComplaintsUncheckedUpdateWithoutBuildingsInput>
    create: XOR<ComplaintsCreateWithoutBuildingsInput, ComplaintsUncheckedCreateWithoutBuildingsInput>
  }

  export type ComplaintsUpdateWithWhereUniqueWithoutBuildingsInput = {
    where: ComplaintsWhereUniqueInput
    data: XOR<ComplaintsUpdateWithoutBuildingsInput, ComplaintsUncheckedUpdateWithoutBuildingsInput>
  }

  export type ComplaintsUpdateManyWithWhereWithoutBuildingsInput = {
    where: ComplaintsScalarWhereInput
    data: XOR<ComplaintsUpdateManyMutationInput, ComplaintsUncheckedUpdateManyWithoutBuildingsInput>
  }

  export type ComplaintsCreateWithoutComplaintCataegoryInput = {
    complaint_title: string
    complaint_description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.STATUS
    emergancy?: boolean
    room_no?: string | null
    User: UserCreateNestedOneWithoutComplaintInput
    resolve?: ResolvedComplaintsCreateNestedManyWithoutComplaintsInput
    Buildings?: BuildingsCreateNestedOneWithoutComplaintsInput
  }

  export type ComplaintsUncheckedCreateWithoutComplaintCataegoryInput = {
    complaint_id?: number
    complaint_title: string
    complaint_description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.STATUS
    emergancy?: boolean
    uid: string
    building_id?: number | null
    room_no?: string | null
    resolve?: ResolvedComplaintsUncheckedCreateNestedManyWithoutComplaintsInput
  }

  export type ComplaintsCreateOrConnectWithoutComplaintCataegoryInput = {
    where: ComplaintsWhereUniqueInput
    create: XOR<ComplaintsCreateWithoutComplaintCataegoryInput, ComplaintsUncheckedCreateWithoutComplaintCataegoryInput>
  }

  export type ComplaintsCreateManyComplaintCataegoryInputEnvelope = {
    data: ComplaintsCreateManyComplaintCataegoryInput | ComplaintsCreateManyComplaintCataegoryInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeCreateWithoutComplaintCataegoryInput = {
    employee_name: string
    employee_mobile: string
    resolve?: ResolvedComplaintsCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutComplaintCataegoryInput = {
    employee_id?: number
    employee_name: string
    employee_mobile: string
    resolve?: ResolvedComplaintsUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutComplaintCataegoryInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutComplaintCataegoryInput, EmployeeUncheckedCreateWithoutComplaintCataegoryInput>
  }

  export type EmployeeCreateManyComplaintCataegoryInputEnvelope = {
    data: EmployeeCreateManyComplaintCataegoryInput | EmployeeCreateManyComplaintCataegoryInput[]
    skipDuplicates?: boolean
  }

  export type ComplaintsUpsertWithWhereUniqueWithoutComplaintCataegoryInput = {
    where: ComplaintsWhereUniqueInput
    update: XOR<ComplaintsUpdateWithoutComplaintCataegoryInput, ComplaintsUncheckedUpdateWithoutComplaintCataegoryInput>
    create: XOR<ComplaintsCreateWithoutComplaintCataegoryInput, ComplaintsUncheckedCreateWithoutComplaintCataegoryInput>
  }

  export type ComplaintsUpdateWithWhereUniqueWithoutComplaintCataegoryInput = {
    where: ComplaintsWhereUniqueInput
    data: XOR<ComplaintsUpdateWithoutComplaintCataegoryInput, ComplaintsUncheckedUpdateWithoutComplaintCataegoryInput>
  }

  export type ComplaintsUpdateManyWithWhereWithoutComplaintCataegoryInput = {
    where: ComplaintsScalarWhereInput
    data: XOR<ComplaintsUpdateManyMutationInput, ComplaintsUncheckedUpdateManyWithoutComplaintCataegoryInput>
  }

  export type EmployeeUpsertWithWhereUniqueWithoutComplaintCataegoryInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutComplaintCataegoryInput, EmployeeUncheckedUpdateWithoutComplaintCataegoryInput>
    create: XOR<EmployeeCreateWithoutComplaintCataegoryInput, EmployeeUncheckedCreateWithoutComplaintCataegoryInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutComplaintCataegoryInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutComplaintCataegoryInput, EmployeeUncheckedUpdateWithoutComplaintCataegoryInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutComplaintCataegoryInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutComplaintCataegoryInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    OR?: EmployeeScalarWhereInput[]
    NOT?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    employee_id?: IntFilter<"Employee"> | number
    employee_name?: StringFilter<"Employee"> | string
    employee_mobile?: StringFilter<"Employee"> | string
    complaint_cat_id?: IntFilter<"Employee"> | number
  }

  export type EmployeeCreateWithoutResolveInput = {
    employee_name: string
    employee_mobile: string
    ComplaintCataegory: ComplaintCataegoryCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutResolveInput = {
    employee_id?: number
    employee_name: string
    employee_mobile: string
    complaint_cat_id: number
  }

  export type EmployeeCreateOrConnectWithoutResolveInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutResolveInput, EmployeeUncheckedCreateWithoutResolveInput>
  }

  export type ComplaintsCreateWithoutResolveInput = {
    complaint_title: string
    complaint_description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.STATUS
    emergancy?: boolean
    room_no?: string | null
    ComplaintCataegory?: ComplaintCataegoryCreateNestedOneWithoutComplaintsInput
    User: UserCreateNestedOneWithoutComplaintInput
    Buildings?: BuildingsCreateNestedOneWithoutComplaintsInput
  }

  export type ComplaintsUncheckedCreateWithoutResolveInput = {
    complaint_id?: number
    complaint_title: string
    complaint_description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.STATUS
    emergancy?: boolean
    complaint_cat_id?: number | null
    uid: string
    building_id?: number | null
    room_no?: string | null
  }

  export type ComplaintsCreateOrConnectWithoutResolveInput = {
    where: ComplaintsWhereUniqueInput
    create: XOR<ComplaintsCreateWithoutResolveInput, ComplaintsUncheckedCreateWithoutResolveInput>
  }

  export type UserCreateWithoutResolveInput = {
    uid: string
    email: string
    name: string
    roll?: string | null
    mobile: string
    session?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    block?: boolean
    Department: DepartmentCreateNestedOneWithoutUsersInput
    Profession: ProfessionCreateNestedOneWithoutUserInput
    complaint?: ComplaintsCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutResolveInput = {
    uid: string
    email: string
    name: string
    roll?: string | null
    mobile: string
    session?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    block?: boolean
    department_id: string
    profession_id: number
    complaint?: ComplaintsUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutResolveInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResolveInput, UserUncheckedCreateWithoutResolveInput>
  }

  export type NotificationsCreateWithoutResolveComplaintInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    seen?: boolean
    User?: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationsUncheckedCreateWithoutResolveComplaintInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    seen?: boolean
    uid: string
  }

  export type NotificationsCreateOrConnectWithoutResolveComplaintInput = {
    where: NotificationsWhereUniqueInput
    create: XOR<NotificationsCreateWithoutResolveComplaintInput, NotificationsUncheckedCreateWithoutResolveComplaintInput>
  }

  export type EmployeeUpsertWithoutResolveInput = {
    update: XOR<EmployeeUpdateWithoutResolveInput, EmployeeUncheckedUpdateWithoutResolveInput>
    create: XOR<EmployeeCreateWithoutResolveInput, EmployeeUncheckedCreateWithoutResolveInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutResolveInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutResolveInput, EmployeeUncheckedUpdateWithoutResolveInput>
  }

  export type EmployeeUpdateWithoutResolveInput = {
    employee_name?: StringFieldUpdateOperationsInput | string
    employee_mobile?: StringFieldUpdateOperationsInput | string
    ComplaintCataegory?: ComplaintCataegoryUpdateOneRequiredWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutResolveInput = {
    employee_id?: IntFieldUpdateOperationsInput | number
    employee_name?: StringFieldUpdateOperationsInput | string
    employee_mobile?: StringFieldUpdateOperationsInput | string
    complaint_cat_id?: IntFieldUpdateOperationsInput | number
  }

  export type ComplaintsUpsertWithoutResolveInput = {
    update: XOR<ComplaintsUpdateWithoutResolveInput, ComplaintsUncheckedUpdateWithoutResolveInput>
    create: XOR<ComplaintsCreateWithoutResolveInput, ComplaintsUncheckedCreateWithoutResolveInput>
    where?: ComplaintsWhereInput
  }

  export type ComplaintsUpdateToOneWithWhereWithoutResolveInput = {
    where?: ComplaintsWhereInput
    data: XOR<ComplaintsUpdateWithoutResolveInput, ComplaintsUncheckedUpdateWithoutResolveInput>
  }

  export type ComplaintsUpdateWithoutResolveInput = {
    complaint_title?: StringFieldUpdateOperationsInput | string
    complaint_description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    emergancy?: BoolFieldUpdateOperationsInput | boolean
    room_no?: NullableStringFieldUpdateOperationsInput | string | null
    ComplaintCataegory?: ComplaintCataegoryUpdateOneWithoutComplaintsNestedInput
    User?: UserUpdateOneRequiredWithoutComplaintNestedInput
    Buildings?: BuildingsUpdateOneWithoutComplaintsNestedInput
  }

  export type ComplaintsUncheckedUpdateWithoutResolveInput = {
    complaint_id?: IntFieldUpdateOperationsInput | number
    complaint_title?: StringFieldUpdateOperationsInput | string
    complaint_description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    emergancy?: BoolFieldUpdateOperationsInput | boolean
    complaint_cat_id?: NullableIntFieldUpdateOperationsInput | number | null
    uid?: StringFieldUpdateOperationsInput | string
    building_id?: NullableIntFieldUpdateOperationsInput | number | null
    room_no?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpsertWithoutResolveInput = {
    update: XOR<UserUpdateWithoutResolveInput, UserUncheckedUpdateWithoutResolveInput>
    create: XOR<UserCreateWithoutResolveInput, UserUncheckedCreateWithoutResolveInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResolveInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResolveInput, UserUncheckedUpdateWithoutResolveInput>
  }

  export type UserUpdateWithoutResolveInput = {
    uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roll?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: StringFieldUpdateOperationsInput | string
    session?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block?: BoolFieldUpdateOperationsInput | boolean
    Department?: DepartmentUpdateOneRequiredWithoutUsersNestedInput
    Profession?: ProfessionUpdateOneRequiredWithoutUserNestedInput
    complaint?: ComplaintsUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutResolveInput = {
    uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roll?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: StringFieldUpdateOperationsInput | string
    session?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block?: BoolFieldUpdateOperationsInput | boolean
    department_id?: StringFieldUpdateOperationsInput | string
    profession_id?: IntFieldUpdateOperationsInput | number
    complaint?: ComplaintsUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NotificationsUpsertWithoutResolveComplaintInput = {
    update: XOR<NotificationsUpdateWithoutResolveComplaintInput, NotificationsUncheckedUpdateWithoutResolveComplaintInput>
    create: XOR<NotificationsCreateWithoutResolveComplaintInput, NotificationsUncheckedCreateWithoutResolveComplaintInput>
    where?: NotificationsWhereInput
  }

  export type NotificationsUpdateToOneWithWhereWithoutResolveComplaintInput = {
    where?: NotificationsWhereInput
    data: XOR<NotificationsUpdateWithoutResolveComplaintInput, NotificationsUncheckedUpdateWithoutResolveComplaintInput>
  }

  export type NotificationsUpdateWithoutResolveComplaintInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationsUncheckedUpdateWithoutResolveComplaintInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
    uid?: StringFieldUpdateOperationsInput | string
  }

  export type ResolvedComplaintsCreateWithoutNotificationsInput = {
    resolved_details: string
    createdAt?: Date | string
    updatedAt?: Date | string
    estimated_date?: Date | string | null
    Employee?: EmployeeCreateNestedOneWithoutResolveInput
    Complaints?: ComplaintsCreateNestedOneWithoutResolveInput
    User?: UserCreateNestedOneWithoutResolveInput
  }

  export type ResolvedComplaintsUncheckedCreateWithoutNotificationsInput = {
    resolved_details: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employee_id?: number | null
    estimated_date?: Date | string | null
    complaint_id: number
    resolved_by?: string | null
  }

  export type ResolvedComplaintsCreateOrConnectWithoutNotificationsInput = {
    where: ResolvedComplaintsWhereUniqueInput
    create: XOR<ResolvedComplaintsCreateWithoutNotificationsInput, ResolvedComplaintsUncheckedCreateWithoutNotificationsInput>
  }

  export type UserCreateWithoutNotificationsInput = {
    uid: string
    email: string
    name: string
    roll?: string | null
    mobile: string
    session?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    block?: boolean
    Department: DepartmentCreateNestedOneWithoutUsersInput
    Profession: ProfessionCreateNestedOneWithoutUserInput
    complaint?: ComplaintsCreateNestedManyWithoutUserInput
    resolve?: ResolvedComplaintsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    uid: string
    email: string
    name: string
    roll?: string | null
    mobile: string
    session?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    block?: boolean
    department_id: string
    profession_id: number
    complaint?: ComplaintsUncheckedCreateNestedManyWithoutUserInput
    resolve?: ResolvedComplaintsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type ResolvedComplaintsUpsertWithoutNotificationsInput = {
    update: XOR<ResolvedComplaintsUpdateWithoutNotificationsInput, ResolvedComplaintsUncheckedUpdateWithoutNotificationsInput>
    create: XOR<ResolvedComplaintsCreateWithoutNotificationsInput, ResolvedComplaintsUncheckedCreateWithoutNotificationsInput>
    where?: ResolvedComplaintsWhereInput
  }

  export type ResolvedComplaintsUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: ResolvedComplaintsWhereInput
    data: XOR<ResolvedComplaintsUpdateWithoutNotificationsInput, ResolvedComplaintsUncheckedUpdateWithoutNotificationsInput>
  }

  export type ResolvedComplaintsUpdateWithoutNotificationsInput = {
    resolved_details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estimated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Employee?: EmployeeUpdateOneWithoutResolveNestedInput
    Complaints?: ComplaintsUpdateOneWithoutResolveNestedInput
    User?: UserUpdateOneWithoutResolveNestedInput
  }

  export type ResolvedComplaintsUncheckedUpdateWithoutNotificationsInput = {
    resolved_details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee_id?: NullableIntFieldUpdateOperationsInput | number | null
    estimated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    complaint_id?: IntFieldUpdateOperationsInput | number
    resolved_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roll?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: StringFieldUpdateOperationsInput | string
    session?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block?: BoolFieldUpdateOperationsInput | boolean
    Department?: DepartmentUpdateOneRequiredWithoutUsersNestedInput
    Profession?: ProfessionUpdateOneRequiredWithoutUserNestedInput
    complaint?: ComplaintsUpdateManyWithoutUserNestedInput
    resolve?: ResolvedComplaintsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roll?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: StringFieldUpdateOperationsInput | string
    session?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block?: BoolFieldUpdateOperationsInput | boolean
    department_id?: StringFieldUpdateOperationsInput | string
    profession_id?: IntFieldUpdateOperationsInput | number
    complaint?: ComplaintsUncheckedUpdateManyWithoutUserNestedInput
    resolve?: ResolvedComplaintsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ComplaintsCreateManyUserInput = {
    complaint_id?: number
    complaint_title: string
    complaint_description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.STATUS
    emergancy?: boolean
    complaint_cat_id?: number | null
    building_id?: number | null
    room_no?: string | null
  }

  export type ResolvedComplaintsCreateManyUserInput = {
    resolved_details: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employee_id?: number | null
    estimated_date?: Date | string | null
    complaint_id: number
  }

  export type NotificationsCreateManyUserInput = {
    complaint_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    seen?: boolean
  }

  export type ComplaintsUpdateWithoutUserInput = {
    complaint_title?: StringFieldUpdateOperationsInput | string
    complaint_description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    emergancy?: BoolFieldUpdateOperationsInput | boolean
    room_no?: NullableStringFieldUpdateOperationsInput | string | null
    ComplaintCataegory?: ComplaintCataegoryUpdateOneWithoutComplaintsNestedInput
    resolve?: ResolvedComplaintsUpdateManyWithoutComplaintsNestedInput
    Buildings?: BuildingsUpdateOneWithoutComplaintsNestedInput
  }

  export type ComplaintsUncheckedUpdateWithoutUserInput = {
    complaint_id?: IntFieldUpdateOperationsInput | number
    complaint_title?: StringFieldUpdateOperationsInput | string
    complaint_description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    emergancy?: BoolFieldUpdateOperationsInput | boolean
    complaint_cat_id?: NullableIntFieldUpdateOperationsInput | number | null
    building_id?: NullableIntFieldUpdateOperationsInput | number | null
    room_no?: NullableStringFieldUpdateOperationsInput | string | null
    resolve?: ResolvedComplaintsUncheckedUpdateManyWithoutComplaintsNestedInput
  }

  export type ComplaintsUncheckedUpdateManyWithoutUserInput = {
    complaint_id?: IntFieldUpdateOperationsInput | number
    complaint_title?: StringFieldUpdateOperationsInput | string
    complaint_description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    emergancy?: BoolFieldUpdateOperationsInput | boolean
    complaint_cat_id?: NullableIntFieldUpdateOperationsInput | number | null
    building_id?: NullableIntFieldUpdateOperationsInput | number | null
    room_no?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResolvedComplaintsUpdateWithoutUserInput = {
    resolved_details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estimated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Employee?: EmployeeUpdateOneWithoutResolveNestedInput
    Complaints?: ComplaintsUpdateOneWithoutResolveNestedInput
    Notifications?: NotificationsUpdateOneWithoutResolveComplaintNestedInput
  }

  export type ResolvedComplaintsUncheckedUpdateWithoutUserInput = {
    resolved_details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee_id?: NullableIntFieldUpdateOperationsInput | number | null
    estimated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    complaint_id?: IntFieldUpdateOperationsInput | number
    Notifications?: NotificationsUncheckedUpdateOneWithoutResolveComplaintNestedInput
  }

  export type ResolvedComplaintsUncheckedUpdateManyWithoutUserInput = {
    resolved_details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee_id?: NullableIntFieldUpdateOperationsInput | number | null
    estimated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    complaint_id?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationsUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
    ResolveComplaint?: ResolvedComplaintsUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationsUncheckedUpdateWithoutUserInput = {
    complaint_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationsUncheckedUpdateManyWithoutUserInput = {
    complaint_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateManyProfessionInput = {
    uid: string
    email: string
    name: string
    roll?: string | null
    mobile: string
    session?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    block?: boolean
    department_id: string
  }

  export type UserUpdateWithoutProfessionInput = {
    uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roll?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: StringFieldUpdateOperationsInput | string
    session?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block?: BoolFieldUpdateOperationsInput | boolean
    Department?: DepartmentUpdateOneRequiredWithoutUsersNestedInput
    complaint?: ComplaintsUpdateManyWithoutUserNestedInput
    resolve?: ResolvedComplaintsUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfessionInput = {
    uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roll?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: StringFieldUpdateOperationsInput | string
    session?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block?: BoolFieldUpdateOperationsInput | boolean
    department_id?: StringFieldUpdateOperationsInput | string
    complaint?: ComplaintsUncheckedUpdateManyWithoutUserNestedInput
    resolve?: ResolvedComplaintsUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutProfessionInput = {
    uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roll?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: StringFieldUpdateOperationsInput | string
    session?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block?: BoolFieldUpdateOperationsInput | boolean
    department_id?: StringFieldUpdateOperationsInput | string
  }

  export type ResolvedComplaintsCreateManyEmployeeInput = {
    resolved_details: string
    createdAt?: Date | string
    updatedAt?: Date | string
    estimated_date?: Date | string | null
    complaint_id: number
    resolved_by?: string | null
  }

  export type ResolvedComplaintsUpdateWithoutEmployeeInput = {
    resolved_details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estimated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Complaints?: ComplaintsUpdateOneWithoutResolveNestedInput
    User?: UserUpdateOneWithoutResolveNestedInput
    Notifications?: NotificationsUpdateOneWithoutResolveComplaintNestedInput
  }

  export type ResolvedComplaintsUncheckedUpdateWithoutEmployeeInput = {
    resolved_details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estimated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    complaint_id?: IntFieldUpdateOperationsInput | number
    resolved_by?: NullableStringFieldUpdateOperationsInput | string | null
    Notifications?: NotificationsUncheckedUpdateOneWithoutResolveComplaintNestedInput
  }

  export type ResolvedComplaintsUncheckedUpdateManyWithoutEmployeeInput = {
    resolved_details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estimated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    complaint_id?: IntFieldUpdateOperationsInput | number
    resolved_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyDepartmentInput = {
    uid: string
    email: string
    name: string
    roll?: string | null
    mobile: string
    session?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    block?: boolean
    profession_id: number
  }

  export type UserUpdateWithoutDepartmentInput = {
    uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roll?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: StringFieldUpdateOperationsInput | string
    session?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block?: BoolFieldUpdateOperationsInput | boolean
    Profession?: ProfessionUpdateOneRequiredWithoutUserNestedInput
    complaint?: ComplaintsUpdateManyWithoutUserNestedInput
    resolve?: ResolvedComplaintsUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDepartmentInput = {
    uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roll?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: StringFieldUpdateOperationsInput | string
    session?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block?: BoolFieldUpdateOperationsInput | boolean
    profession_id?: IntFieldUpdateOperationsInput | number
    complaint?: ComplaintsUncheckedUpdateManyWithoutUserNestedInput
    resolve?: ResolvedComplaintsUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutDepartmentInput = {
    uid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roll?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: StringFieldUpdateOperationsInput | string
    session?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block?: BoolFieldUpdateOperationsInput | boolean
    profession_id?: IntFieldUpdateOperationsInput | number
  }

  export type ResolvedComplaintsCreateManyComplaintsInput = {
    resolved_details: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employee_id?: number | null
    estimated_date?: Date | string | null
    resolved_by?: string | null
  }

  export type ResolvedComplaintsUpdateWithoutComplaintsInput = {
    resolved_details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estimated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Employee?: EmployeeUpdateOneWithoutResolveNestedInput
    User?: UserUpdateOneWithoutResolveNestedInput
    Notifications?: NotificationsUpdateOneWithoutResolveComplaintNestedInput
  }

  export type ResolvedComplaintsUncheckedUpdateWithoutComplaintsInput = {
    resolved_details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee_id?: NullableIntFieldUpdateOperationsInput | number | null
    estimated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolved_by?: NullableStringFieldUpdateOperationsInput | string | null
    Notifications?: NotificationsUncheckedUpdateOneWithoutResolveComplaintNestedInput
  }

  export type ResolvedComplaintsUncheckedUpdateManyWithoutComplaintsInput = {
    resolved_details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee_id?: NullableIntFieldUpdateOperationsInput | number | null
    estimated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolved_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComplaintsCreateManyBuildingsInput = {
    complaint_id?: number
    complaint_title: string
    complaint_description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.STATUS
    emergancy?: boolean
    complaint_cat_id?: number | null
    uid: string
    room_no?: string | null
  }

  export type ComplaintsUpdateWithoutBuildingsInput = {
    complaint_title?: StringFieldUpdateOperationsInput | string
    complaint_description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    emergancy?: BoolFieldUpdateOperationsInput | boolean
    room_no?: NullableStringFieldUpdateOperationsInput | string | null
    ComplaintCataegory?: ComplaintCataegoryUpdateOneWithoutComplaintsNestedInput
    User?: UserUpdateOneRequiredWithoutComplaintNestedInput
    resolve?: ResolvedComplaintsUpdateManyWithoutComplaintsNestedInput
  }

  export type ComplaintsUncheckedUpdateWithoutBuildingsInput = {
    complaint_id?: IntFieldUpdateOperationsInput | number
    complaint_title?: StringFieldUpdateOperationsInput | string
    complaint_description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    emergancy?: BoolFieldUpdateOperationsInput | boolean
    complaint_cat_id?: NullableIntFieldUpdateOperationsInput | number | null
    uid?: StringFieldUpdateOperationsInput | string
    room_no?: NullableStringFieldUpdateOperationsInput | string | null
    resolve?: ResolvedComplaintsUncheckedUpdateManyWithoutComplaintsNestedInput
  }

  export type ComplaintsUncheckedUpdateManyWithoutBuildingsInput = {
    complaint_id?: IntFieldUpdateOperationsInput | number
    complaint_title?: StringFieldUpdateOperationsInput | string
    complaint_description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    emergancy?: BoolFieldUpdateOperationsInput | boolean
    complaint_cat_id?: NullableIntFieldUpdateOperationsInput | number | null
    uid?: StringFieldUpdateOperationsInput | string
    room_no?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComplaintsCreateManyComplaintCataegoryInput = {
    complaint_id?: number
    complaint_title: string
    complaint_description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.STATUS
    emergancy?: boolean
    uid: string
    building_id?: number | null
    room_no?: string | null
  }

  export type EmployeeCreateManyComplaintCataegoryInput = {
    employee_id?: number
    employee_name: string
    employee_mobile: string
  }

  export type ComplaintsUpdateWithoutComplaintCataegoryInput = {
    complaint_title?: StringFieldUpdateOperationsInput | string
    complaint_description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    emergancy?: BoolFieldUpdateOperationsInput | boolean
    room_no?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneRequiredWithoutComplaintNestedInput
    resolve?: ResolvedComplaintsUpdateManyWithoutComplaintsNestedInput
    Buildings?: BuildingsUpdateOneWithoutComplaintsNestedInput
  }

  export type ComplaintsUncheckedUpdateWithoutComplaintCataegoryInput = {
    complaint_id?: IntFieldUpdateOperationsInput | number
    complaint_title?: StringFieldUpdateOperationsInput | string
    complaint_description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    emergancy?: BoolFieldUpdateOperationsInput | boolean
    uid?: StringFieldUpdateOperationsInput | string
    building_id?: NullableIntFieldUpdateOperationsInput | number | null
    room_no?: NullableStringFieldUpdateOperationsInput | string | null
    resolve?: ResolvedComplaintsUncheckedUpdateManyWithoutComplaintsNestedInput
  }

  export type ComplaintsUncheckedUpdateManyWithoutComplaintCataegoryInput = {
    complaint_id?: IntFieldUpdateOperationsInput | number
    complaint_title?: StringFieldUpdateOperationsInput | string
    complaint_description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    emergancy?: BoolFieldUpdateOperationsInput | boolean
    uid?: StringFieldUpdateOperationsInput | string
    building_id?: NullableIntFieldUpdateOperationsInput | number | null
    room_no?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeeUpdateWithoutComplaintCataegoryInput = {
    employee_name?: StringFieldUpdateOperationsInput | string
    employee_mobile?: StringFieldUpdateOperationsInput | string
    resolve?: ResolvedComplaintsUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutComplaintCataegoryInput = {
    employee_id?: IntFieldUpdateOperationsInput | number
    employee_name?: StringFieldUpdateOperationsInput | string
    employee_mobile?: StringFieldUpdateOperationsInput | string
    resolve?: ResolvedComplaintsUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutComplaintCataegoryInput = {
    employee_id?: IntFieldUpdateOperationsInput | number
    employee_name?: StringFieldUpdateOperationsInput | string
    employee_mobile?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}