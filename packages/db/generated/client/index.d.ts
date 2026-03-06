
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Chatrooms
 * 
 */
export type Chatrooms = $Result.DefaultSelection<Prisma.$ChatroomsPayload>
/**
 * Model Messages
 * 
 */
export type Messages = $Result.DefaultSelection<Prisma.$MessagesPayload>
/**
 * Model ChatroomUsers
 * 
 */
export type ChatroomUsers = $Result.DefaultSelection<Prisma.$ChatroomUsersPayload>
/**
 * Model PrivateKey
 * 
 */
export type PrivateKey = $Result.DefaultSelection<Prisma.$PrivateKeyPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
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
   * `prisma.chatrooms`: Exposes CRUD operations for the **Chatrooms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chatrooms
    * const chatrooms = await prisma.chatrooms.findMany()
    * ```
    */
  get chatrooms(): Prisma.ChatroomsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messages`: Exposes CRUD operations for the **Messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.messages.findMany()
    * ```
    */
  get messages(): Prisma.MessagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatroomUsers`: Exposes CRUD operations for the **ChatroomUsers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatroomUsers
    * const chatroomUsers = await prisma.chatroomUsers.findMany()
    * ```
    */
  get chatroomUsers(): Prisma.ChatroomUsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.privateKey`: Exposes CRUD operations for the **PrivateKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrivateKeys
    * const privateKeys = await prisma.privateKey.findMany()
    * ```
    */
  get privateKey(): Prisma.PrivateKeyDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Chatrooms: 'Chatrooms',
    Messages: 'Messages',
    ChatroomUsers: 'ChatroomUsers',
    PrivateKey: 'PrivateKey'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "chatrooms" | "messages" | "chatroomUsers" | "privateKey"
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Chatrooms: {
        payload: Prisma.$ChatroomsPayload<ExtArgs>
        fields: Prisma.ChatroomsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatroomsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatroomsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomsPayload>
          }
          findFirst: {
            args: Prisma.ChatroomsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatroomsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomsPayload>
          }
          findMany: {
            args: Prisma.ChatroomsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomsPayload>[]
          }
          create: {
            args: Prisma.ChatroomsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomsPayload>
          }
          createMany: {
            args: Prisma.ChatroomsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatroomsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomsPayload>[]
          }
          delete: {
            args: Prisma.ChatroomsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomsPayload>
          }
          update: {
            args: Prisma.ChatroomsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomsPayload>
          }
          deleteMany: {
            args: Prisma.ChatroomsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatroomsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatroomsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomsPayload>[]
          }
          upsert: {
            args: Prisma.ChatroomsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomsPayload>
          }
          aggregate: {
            args: Prisma.ChatroomsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatrooms>
          }
          groupBy: {
            args: Prisma.ChatroomsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatroomsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatroomsCountArgs<ExtArgs>
            result: $Utils.Optional<ChatroomsCountAggregateOutputType> | number
          }
        }
      }
      Messages: {
        payload: Prisma.$MessagesPayload<ExtArgs>
        fields: Prisma.MessagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          findFirst: {
            args: Prisma.MessagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          findMany: {
            args: Prisma.MessagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>[]
          }
          create: {
            args: Prisma.MessagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          createMany: {
            args: Prisma.MessagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>[]
          }
          delete: {
            args: Prisma.MessagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          update: {
            args: Prisma.MessagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          deleteMany: {
            args: Prisma.MessagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>[]
          }
          upsert: {
            args: Prisma.MessagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          aggregate: {
            args: Prisma.MessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessages>
          }
          groupBy: {
            args: Prisma.MessagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessagesCountArgs<ExtArgs>
            result: $Utils.Optional<MessagesCountAggregateOutputType> | number
          }
        }
      }
      ChatroomUsers: {
        payload: Prisma.$ChatroomUsersPayload<ExtArgs>
        fields: Prisma.ChatroomUsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatroomUsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomUsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatroomUsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomUsersPayload>
          }
          findFirst: {
            args: Prisma.ChatroomUsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomUsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatroomUsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomUsersPayload>
          }
          findMany: {
            args: Prisma.ChatroomUsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomUsersPayload>[]
          }
          create: {
            args: Prisma.ChatroomUsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomUsersPayload>
          }
          createMany: {
            args: Prisma.ChatroomUsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatroomUsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomUsersPayload>[]
          }
          delete: {
            args: Prisma.ChatroomUsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomUsersPayload>
          }
          update: {
            args: Prisma.ChatroomUsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomUsersPayload>
          }
          deleteMany: {
            args: Prisma.ChatroomUsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatroomUsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatroomUsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomUsersPayload>[]
          }
          upsert: {
            args: Prisma.ChatroomUsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomUsersPayload>
          }
          aggregate: {
            args: Prisma.ChatroomUsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatroomUsers>
          }
          groupBy: {
            args: Prisma.ChatroomUsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatroomUsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatroomUsersCountArgs<ExtArgs>
            result: $Utils.Optional<ChatroomUsersCountAggregateOutputType> | number
          }
        }
      }
      PrivateKey: {
        payload: Prisma.$PrivateKeyPayload<ExtArgs>
        fields: Prisma.PrivateKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrivateKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrivateKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateKeyPayload>
          }
          findFirst: {
            args: Prisma.PrivateKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrivateKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateKeyPayload>
          }
          findMany: {
            args: Prisma.PrivateKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateKeyPayload>[]
          }
          create: {
            args: Prisma.PrivateKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateKeyPayload>
          }
          createMany: {
            args: Prisma.PrivateKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrivateKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateKeyPayload>[]
          }
          delete: {
            args: Prisma.PrivateKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateKeyPayload>
          }
          update: {
            args: Prisma.PrivateKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateKeyPayload>
          }
          deleteMany: {
            args: Prisma.PrivateKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrivateKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrivateKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateKeyPayload>[]
          }
          upsert: {
            args: Prisma.PrivateKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateKeyPayload>
          }
          aggregate: {
            args: Prisma.PrivateKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrivateKey>
          }
          groupBy: {
            args: Prisma.PrivateKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrivateKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrivateKeyCountArgs<ExtArgs>
            result: $Utils.Optional<PrivateKeyCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    chatrooms?: ChatroomsOmit
    messages?: MessagesOmit
    chatroomUsers?: ChatroomUsersOmit
    privateKey?: PrivateKeyOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    Chatrooms: number
    Messages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chatrooms?: boolean | UserCountOutputTypeCountChatroomsArgs
    Messages?: boolean | UserCountOutputTypeCountMessagesArgs
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
  export type UserCountOutputTypeCountChatroomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatroomUsersWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
  }


  /**
   * Count Type ChatroomsCountOutputType
   */

  export type ChatroomsCountOutputType = {
    users: number
    messages: number
  }

  export type ChatroomsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | ChatroomsCountOutputTypeCountUsersArgs
    messages?: boolean | ChatroomsCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatroomsCountOutputType without action
   */
  export type ChatroomsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatroomsCountOutputType
     */
    select?: ChatroomsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatroomsCountOutputType without action
   */
  export type ChatroomsCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatroomUsersWhereInput
  }

  /**
   * ChatroomsCountOutputType without action
   */
  export type ChatroomsCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
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
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    firstname: string | null
    lastname: string | null
    password: string | null
    email: string | null
    createdAt: Date | null
    publicKey: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    firstname: string | null
    lastname: string | null
    password: string | null
    email: string | null
    createdAt: Date | null
    publicKey: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    firstname: number
    lastname: number
    password: number
    email: number
    createdAt: number
    publicKey: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    firstname?: true
    lastname?: true
    password?: true
    email?: true
    createdAt?: true
    publicKey?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    firstname?: true
    lastname?: true
    password?: true
    email?: true
    createdAt?: true
    publicKey?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    firstname?: true
    lastname?: true
    password?: true
    email?: true
    createdAt?: true
    publicKey?: true
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
    id: number
    username: string
    firstname: string
    lastname: string | null
    password: string
    email: string
    createdAt: Date
    publicKey: string | null
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
    id?: boolean
    username?: boolean
    firstname?: boolean
    lastname?: boolean
    password?: boolean
    email?: boolean
    createdAt?: boolean
    publicKey?: boolean
    Chatrooms?: boolean | User$ChatroomsArgs<ExtArgs>
    Messages?: boolean | User$MessagesArgs<ExtArgs>
    privateKey?: boolean | User$privateKeyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    firstname?: boolean
    lastname?: boolean
    password?: boolean
    email?: boolean
    createdAt?: boolean
    publicKey?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    firstname?: boolean
    lastname?: boolean
    password?: boolean
    email?: boolean
    createdAt?: boolean
    publicKey?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    firstname?: boolean
    lastname?: boolean
    password?: boolean
    email?: boolean
    createdAt?: boolean
    publicKey?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "firstname" | "lastname" | "password" | "email" | "createdAt" | "publicKey", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chatrooms?: boolean | User$ChatroomsArgs<ExtArgs>
    Messages?: boolean | User$MessagesArgs<ExtArgs>
    privateKey?: boolean | User$privateKeyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Chatrooms: Prisma.$ChatroomUsersPayload<ExtArgs>[]
      Messages: Prisma.$MessagesPayload<ExtArgs>[]
      privateKey: Prisma.$PrivateKeyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      firstname: string
      lastname: string | null
      password: string
      email: string
      createdAt: Date
      publicKey: string | null
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
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    Chatrooms<T extends User$ChatroomsArgs<ExtArgs> = {}>(args?: Subset<T, User$ChatroomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatroomUsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Messages<T extends User$MessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$MessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    privateKey<T extends User$privateKeyArgs<ExtArgs> = {}>(args?: Subset<T, User$privateKeyArgs<ExtArgs>>): Prisma__PrivateKeyClient<$Result.GetResult<Prisma.$PrivateKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly firstname: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly publicKey: FieldRef<"User", 'String'>
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User.Chatrooms
   */
  export type User$ChatroomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatroomUsers
     */
    select?: ChatroomUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatroomUsers
     */
    omit?: ChatroomUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomUsersInclude<ExtArgs> | null
    where?: ChatroomUsersWhereInput
    orderBy?: ChatroomUsersOrderByWithRelationInput | ChatroomUsersOrderByWithRelationInput[]
    cursor?: ChatroomUsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatroomUsersScalarFieldEnum | ChatroomUsersScalarFieldEnum[]
  }

  /**
   * User.Messages
   */
  export type User$MessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    cursor?: MessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * User.privateKey
   */
  export type User$privateKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateKey
     */
    select?: PrivateKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateKey
     */
    omit?: PrivateKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateKeyInclude<ExtArgs> | null
    where?: PrivateKeyWhereInput
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
   * Model Chatrooms
   */

  export type AggregateChatrooms = {
    _count: ChatroomsCountAggregateOutputType | null
    _avg: ChatroomsAvgAggregateOutputType | null
    _sum: ChatroomsSumAggregateOutputType | null
    _min: ChatroomsMinAggregateOutputType | null
    _max: ChatroomsMaxAggregateOutputType | null
  }

  export type ChatroomsAvgAggregateOutputType = {
    id: number | null
  }

  export type ChatroomsSumAggregateOutputType = {
    id: number | null
  }

  export type ChatroomsMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    lastMessageAt: Date | null
  }

  export type ChatroomsMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    lastMessageAt: Date | null
  }

  export type ChatroomsCountAggregateOutputType = {
    id: number
    createdAt: number
    lastMessageAt: number
    _all: number
  }


  export type ChatroomsAvgAggregateInputType = {
    id?: true
  }

  export type ChatroomsSumAggregateInputType = {
    id?: true
  }

  export type ChatroomsMinAggregateInputType = {
    id?: true
    createdAt?: true
    lastMessageAt?: true
  }

  export type ChatroomsMaxAggregateInputType = {
    id?: true
    createdAt?: true
    lastMessageAt?: true
  }

  export type ChatroomsCountAggregateInputType = {
    id?: true
    createdAt?: true
    lastMessageAt?: true
    _all?: true
  }

  export type ChatroomsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chatrooms to aggregate.
     */
    where?: ChatroomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chatrooms to fetch.
     */
    orderBy?: ChatroomsOrderByWithRelationInput | ChatroomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatroomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chatrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chatrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chatrooms
    **/
    _count?: true | ChatroomsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatroomsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatroomsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatroomsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatroomsMaxAggregateInputType
  }

  export type GetChatroomsAggregateType<T extends ChatroomsAggregateArgs> = {
        [P in keyof T & keyof AggregateChatrooms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatrooms[P]>
      : GetScalarType<T[P], AggregateChatrooms[P]>
  }




  export type ChatroomsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatroomsWhereInput
    orderBy?: ChatroomsOrderByWithAggregationInput | ChatroomsOrderByWithAggregationInput[]
    by: ChatroomsScalarFieldEnum[] | ChatroomsScalarFieldEnum
    having?: ChatroomsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatroomsCountAggregateInputType | true
    _avg?: ChatroomsAvgAggregateInputType
    _sum?: ChatroomsSumAggregateInputType
    _min?: ChatroomsMinAggregateInputType
    _max?: ChatroomsMaxAggregateInputType
  }

  export type ChatroomsGroupByOutputType = {
    id: number
    createdAt: Date
    lastMessageAt: Date
    _count: ChatroomsCountAggregateOutputType | null
    _avg: ChatroomsAvgAggregateOutputType | null
    _sum: ChatroomsSumAggregateOutputType | null
    _min: ChatroomsMinAggregateOutputType | null
    _max: ChatroomsMaxAggregateOutputType | null
  }

  type GetChatroomsGroupByPayload<T extends ChatroomsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatroomsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatroomsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatroomsGroupByOutputType[P]>
            : GetScalarType<T[P], ChatroomsGroupByOutputType[P]>
        }
      >
    >


  export type ChatroomsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    lastMessageAt?: boolean
    users?: boolean | Chatrooms$usersArgs<ExtArgs>
    messages?: boolean | Chatrooms$messagesArgs<ExtArgs>
    _count?: boolean | ChatroomsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatrooms"]>

  export type ChatroomsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    lastMessageAt?: boolean
  }, ExtArgs["result"]["chatrooms"]>

  export type ChatroomsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    lastMessageAt?: boolean
  }, ExtArgs["result"]["chatrooms"]>

  export type ChatroomsSelectScalar = {
    id?: boolean
    createdAt?: boolean
    lastMessageAt?: boolean
  }

  export type ChatroomsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "lastMessageAt", ExtArgs["result"]["chatrooms"]>
  export type ChatroomsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Chatrooms$usersArgs<ExtArgs>
    messages?: boolean | Chatrooms$messagesArgs<ExtArgs>
    _count?: boolean | ChatroomsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatroomsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ChatroomsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChatroomsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chatrooms"
    objects: {
      users: Prisma.$ChatroomUsersPayload<ExtArgs>[]
      messages: Prisma.$MessagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      lastMessageAt: Date
    }, ExtArgs["result"]["chatrooms"]>
    composites: {}
  }

  type ChatroomsGetPayload<S extends boolean | null | undefined | ChatroomsDefaultArgs> = $Result.GetResult<Prisma.$ChatroomsPayload, S>

  type ChatroomsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatroomsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatroomsCountAggregateInputType | true
    }

  export interface ChatroomsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chatrooms'], meta: { name: 'Chatrooms' } }
    /**
     * Find zero or one Chatrooms that matches the filter.
     * @param {ChatroomsFindUniqueArgs} args - Arguments to find a Chatrooms
     * @example
     * // Get one Chatrooms
     * const chatrooms = await prisma.chatrooms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatroomsFindUniqueArgs>(args: SelectSubset<T, ChatroomsFindUniqueArgs<ExtArgs>>): Prisma__ChatroomsClient<$Result.GetResult<Prisma.$ChatroomsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chatrooms that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatroomsFindUniqueOrThrowArgs} args - Arguments to find a Chatrooms
     * @example
     * // Get one Chatrooms
     * const chatrooms = await prisma.chatrooms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatroomsFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatroomsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatroomsClient<$Result.GetResult<Prisma.$ChatroomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chatrooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatroomsFindFirstArgs} args - Arguments to find a Chatrooms
     * @example
     * // Get one Chatrooms
     * const chatrooms = await prisma.chatrooms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatroomsFindFirstArgs>(args?: SelectSubset<T, ChatroomsFindFirstArgs<ExtArgs>>): Prisma__ChatroomsClient<$Result.GetResult<Prisma.$ChatroomsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chatrooms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatroomsFindFirstOrThrowArgs} args - Arguments to find a Chatrooms
     * @example
     * // Get one Chatrooms
     * const chatrooms = await prisma.chatrooms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatroomsFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatroomsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatroomsClient<$Result.GetResult<Prisma.$ChatroomsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chatrooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatroomsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chatrooms
     * const chatrooms = await prisma.chatrooms.findMany()
     * 
     * // Get first 10 Chatrooms
     * const chatrooms = await prisma.chatrooms.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatroomsWithIdOnly = await prisma.chatrooms.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatroomsFindManyArgs>(args?: SelectSubset<T, ChatroomsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatroomsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chatrooms.
     * @param {ChatroomsCreateArgs} args - Arguments to create a Chatrooms.
     * @example
     * // Create one Chatrooms
     * const Chatrooms = await prisma.chatrooms.create({
     *   data: {
     *     // ... data to create a Chatrooms
     *   }
     * })
     * 
     */
    create<T extends ChatroomsCreateArgs>(args: SelectSubset<T, ChatroomsCreateArgs<ExtArgs>>): Prisma__ChatroomsClient<$Result.GetResult<Prisma.$ChatroomsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chatrooms.
     * @param {ChatroomsCreateManyArgs} args - Arguments to create many Chatrooms.
     * @example
     * // Create many Chatrooms
     * const chatrooms = await prisma.chatrooms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatroomsCreateManyArgs>(args?: SelectSubset<T, ChatroomsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chatrooms and returns the data saved in the database.
     * @param {ChatroomsCreateManyAndReturnArgs} args - Arguments to create many Chatrooms.
     * @example
     * // Create many Chatrooms
     * const chatrooms = await prisma.chatrooms.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chatrooms and only return the `id`
     * const chatroomsWithIdOnly = await prisma.chatrooms.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatroomsCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatroomsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatroomsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chatrooms.
     * @param {ChatroomsDeleteArgs} args - Arguments to delete one Chatrooms.
     * @example
     * // Delete one Chatrooms
     * const Chatrooms = await prisma.chatrooms.delete({
     *   where: {
     *     // ... filter to delete one Chatrooms
     *   }
     * })
     * 
     */
    delete<T extends ChatroomsDeleteArgs>(args: SelectSubset<T, ChatroomsDeleteArgs<ExtArgs>>): Prisma__ChatroomsClient<$Result.GetResult<Prisma.$ChatroomsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chatrooms.
     * @param {ChatroomsUpdateArgs} args - Arguments to update one Chatrooms.
     * @example
     * // Update one Chatrooms
     * const chatrooms = await prisma.chatrooms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatroomsUpdateArgs>(args: SelectSubset<T, ChatroomsUpdateArgs<ExtArgs>>): Prisma__ChatroomsClient<$Result.GetResult<Prisma.$ChatroomsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chatrooms.
     * @param {ChatroomsDeleteManyArgs} args - Arguments to filter Chatrooms to delete.
     * @example
     * // Delete a few Chatrooms
     * const { count } = await prisma.chatrooms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatroomsDeleteManyArgs>(args?: SelectSubset<T, ChatroomsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chatrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatroomsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chatrooms
     * const chatrooms = await prisma.chatrooms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatroomsUpdateManyArgs>(args: SelectSubset<T, ChatroomsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chatrooms and returns the data updated in the database.
     * @param {ChatroomsUpdateManyAndReturnArgs} args - Arguments to update many Chatrooms.
     * @example
     * // Update many Chatrooms
     * const chatrooms = await prisma.chatrooms.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chatrooms and only return the `id`
     * const chatroomsWithIdOnly = await prisma.chatrooms.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatroomsUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatroomsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatroomsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chatrooms.
     * @param {ChatroomsUpsertArgs} args - Arguments to update or create a Chatrooms.
     * @example
     * // Update or create a Chatrooms
     * const chatrooms = await prisma.chatrooms.upsert({
     *   create: {
     *     // ... data to create a Chatrooms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chatrooms we want to update
     *   }
     * })
     */
    upsert<T extends ChatroomsUpsertArgs>(args: SelectSubset<T, ChatroomsUpsertArgs<ExtArgs>>): Prisma__ChatroomsClient<$Result.GetResult<Prisma.$ChatroomsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chatrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatroomsCountArgs} args - Arguments to filter Chatrooms to count.
     * @example
     * // Count the number of Chatrooms
     * const count = await prisma.chatrooms.count({
     *   where: {
     *     // ... the filter for the Chatrooms we want to count
     *   }
     * })
    **/
    count<T extends ChatroomsCountArgs>(
      args?: Subset<T, ChatroomsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatroomsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chatrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatroomsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatroomsAggregateArgs>(args: Subset<T, ChatroomsAggregateArgs>): Prisma.PrismaPromise<GetChatroomsAggregateType<T>>

    /**
     * Group by Chatrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatroomsGroupByArgs} args - Group by arguments.
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
      T extends ChatroomsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatroomsGroupByArgs['orderBy'] }
        : { orderBy?: ChatroomsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatroomsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatroomsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chatrooms model
   */
  readonly fields: ChatroomsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chatrooms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatroomsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Chatrooms$usersArgs<ExtArgs> = {}>(args?: Subset<T, Chatrooms$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatroomUsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends Chatrooms$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Chatrooms$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Chatrooms model
   */
  interface ChatroomsFieldRefs {
    readonly id: FieldRef<"Chatrooms", 'Int'>
    readonly createdAt: FieldRef<"Chatrooms", 'DateTime'>
    readonly lastMessageAt: FieldRef<"Chatrooms", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chatrooms findUnique
   */
  export type ChatroomsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatrooms
     */
    select?: ChatroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatrooms
     */
    omit?: ChatroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomsInclude<ExtArgs> | null
    /**
     * Filter, which Chatrooms to fetch.
     */
    where: ChatroomsWhereUniqueInput
  }

  /**
   * Chatrooms findUniqueOrThrow
   */
  export type ChatroomsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatrooms
     */
    select?: ChatroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatrooms
     */
    omit?: ChatroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomsInclude<ExtArgs> | null
    /**
     * Filter, which Chatrooms to fetch.
     */
    where: ChatroomsWhereUniqueInput
  }

  /**
   * Chatrooms findFirst
   */
  export type ChatroomsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatrooms
     */
    select?: ChatroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatrooms
     */
    omit?: ChatroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomsInclude<ExtArgs> | null
    /**
     * Filter, which Chatrooms to fetch.
     */
    where?: ChatroomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chatrooms to fetch.
     */
    orderBy?: ChatroomsOrderByWithRelationInput | ChatroomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chatrooms.
     */
    cursor?: ChatroomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chatrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chatrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chatrooms.
     */
    distinct?: ChatroomsScalarFieldEnum | ChatroomsScalarFieldEnum[]
  }

  /**
   * Chatrooms findFirstOrThrow
   */
  export type ChatroomsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatrooms
     */
    select?: ChatroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatrooms
     */
    omit?: ChatroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomsInclude<ExtArgs> | null
    /**
     * Filter, which Chatrooms to fetch.
     */
    where?: ChatroomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chatrooms to fetch.
     */
    orderBy?: ChatroomsOrderByWithRelationInput | ChatroomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chatrooms.
     */
    cursor?: ChatroomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chatrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chatrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chatrooms.
     */
    distinct?: ChatroomsScalarFieldEnum | ChatroomsScalarFieldEnum[]
  }

  /**
   * Chatrooms findMany
   */
  export type ChatroomsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatrooms
     */
    select?: ChatroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatrooms
     */
    omit?: ChatroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomsInclude<ExtArgs> | null
    /**
     * Filter, which Chatrooms to fetch.
     */
    where?: ChatroomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chatrooms to fetch.
     */
    orderBy?: ChatroomsOrderByWithRelationInput | ChatroomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chatrooms.
     */
    cursor?: ChatroomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chatrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chatrooms.
     */
    skip?: number
    distinct?: ChatroomsScalarFieldEnum | ChatroomsScalarFieldEnum[]
  }

  /**
   * Chatrooms create
   */
  export type ChatroomsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatrooms
     */
    select?: ChatroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatrooms
     */
    omit?: ChatroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomsInclude<ExtArgs> | null
    /**
     * The data needed to create a Chatrooms.
     */
    data?: XOR<ChatroomsCreateInput, ChatroomsUncheckedCreateInput>
  }

  /**
   * Chatrooms createMany
   */
  export type ChatroomsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chatrooms.
     */
    data: ChatroomsCreateManyInput | ChatroomsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chatrooms createManyAndReturn
   */
  export type ChatroomsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatrooms
     */
    select?: ChatroomsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chatrooms
     */
    omit?: ChatroomsOmit<ExtArgs> | null
    /**
     * The data used to create many Chatrooms.
     */
    data: ChatroomsCreateManyInput | ChatroomsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chatrooms update
   */
  export type ChatroomsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatrooms
     */
    select?: ChatroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatrooms
     */
    omit?: ChatroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomsInclude<ExtArgs> | null
    /**
     * The data needed to update a Chatrooms.
     */
    data: XOR<ChatroomsUpdateInput, ChatroomsUncheckedUpdateInput>
    /**
     * Choose, which Chatrooms to update.
     */
    where: ChatroomsWhereUniqueInput
  }

  /**
   * Chatrooms updateMany
   */
  export type ChatroomsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chatrooms.
     */
    data: XOR<ChatroomsUpdateManyMutationInput, ChatroomsUncheckedUpdateManyInput>
    /**
     * Filter which Chatrooms to update
     */
    where?: ChatroomsWhereInput
    /**
     * Limit how many Chatrooms to update.
     */
    limit?: number
  }

  /**
   * Chatrooms updateManyAndReturn
   */
  export type ChatroomsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatrooms
     */
    select?: ChatroomsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chatrooms
     */
    omit?: ChatroomsOmit<ExtArgs> | null
    /**
     * The data used to update Chatrooms.
     */
    data: XOR<ChatroomsUpdateManyMutationInput, ChatroomsUncheckedUpdateManyInput>
    /**
     * Filter which Chatrooms to update
     */
    where?: ChatroomsWhereInput
    /**
     * Limit how many Chatrooms to update.
     */
    limit?: number
  }

  /**
   * Chatrooms upsert
   */
  export type ChatroomsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatrooms
     */
    select?: ChatroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatrooms
     */
    omit?: ChatroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomsInclude<ExtArgs> | null
    /**
     * The filter to search for the Chatrooms to update in case it exists.
     */
    where: ChatroomsWhereUniqueInput
    /**
     * In case the Chatrooms found by the `where` argument doesn't exist, create a new Chatrooms with this data.
     */
    create: XOR<ChatroomsCreateInput, ChatroomsUncheckedCreateInput>
    /**
     * In case the Chatrooms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatroomsUpdateInput, ChatroomsUncheckedUpdateInput>
  }

  /**
   * Chatrooms delete
   */
  export type ChatroomsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatrooms
     */
    select?: ChatroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatrooms
     */
    omit?: ChatroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomsInclude<ExtArgs> | null
    /**
     * Filter which Chatrooms to delete.
     */
    where: ChatroomsWhereUniqueInput
  }

  /**
   * Chatrooms deleteMany
   */
  export type ChatroomsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chatrooms to delete
     */
    where?: ChatroomsWhereInput
    /**
     * Limit how many Chatrooms to delete.
     */
    limit?: number
  }

  /**
   * Chatrooms.users
   */
  export type Chatrooms$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatroomUsers
     */
    select?: ChatroomUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatroomUsers
     */
    omit?: ChatroomUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomUsersInclude<ExtArgs> | null
    where?: ChatroomUsersWhereInput
    orderBy?: ChatroomUsersOrderByWithRelationInput | ChatroomUsersOrderByWithRelationInput[]
    cursor?: ChatroomUsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatroomUsersScalarFieldEnum | ChatroomUsersScalarFieldEnum[]
  }

  /**
   * Chatrooms.messages
   */
  export type Chatrooms$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    cursor?: MessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Chatrooms without action
   */
  export type ChatroomsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatrooms
     */
    select?: ChatroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatrooms
     */
    omit?: ChatroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomsInclude<ExtArgs> | null
  }


  /**
   * Model Messages
   */

  export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  export type MessagesAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    chatroomId: number | null
  }

  export type MessagesSumAggregateOutputType = {
    id: number | null
    userId: number | null
    chatroomId: number | null
  }

  export type MessagesMinAggregateOutputType = {
    id: number | null
    userId: number | null
    chatroomId: number | null
    message: string | null
    createdAt: Date | null
    messageFromSender: string | null
  }

  export type MessagesMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    chatroomId: number | null
    message: string | null
    createdAt: Date | null
    messageFromSender: string | null
  }

  export type MessagesCountAggregateOutputType = {
    id: number
    userId: number
    chatroomId: number
    message: number
    createdAt: number
    messageFromSender: number
    _all: number
  }


  export type MessagesAvgAggregateInputType = {
    id?: true
    userId?: true
    chatroomId?: true
  }

  export type MessagesSumAggregateInputType = {
    id?: true
    userId?: true
    chatroomId?: true
  }

  export type MessagesMinAggregateInputType = {
    id?: true
    userId?: true
    chatroomId?: true
    message?: true
    createdAt?: true
    messageFromSender?: true
  }

  export type MessagesMaxAggregateInputType = {
    id?: true
    userId?: true
    chatroomId?: true
    message?: true
    createdAt?: true
    messageFromSender?: true
  }

  export type MessagesCountAggregateInputType = {
    id?: true
    userId?: true
    chatroomId?: true
    message?: true
    createdAt?: true
    messageFromSender?: true
    _all?: true
  }

  export type MessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to aggregate.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagesMaxAggregateInputType
  }

  export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessages[P]>
      : GetScalarType<T[P], AggregateMessages[P]>
  }




  export type MessagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithAggregationInput | MessagesOrderByWithAggregationInput[]
    by: MessagesScalarFieldEnum[] | MessagesScalarFieldEnum
    having?: MessagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagesCountAggregateInputType | true
    _avg?: MessagesAvgAggregateInputType
    _sum?: MessagesSumAggregateInputType
    _min?: MessagesMinAggregateInputType
    _max?: MessagesMaxAggregateInputType
  }

  export type MessagesGroupByOutputType = {
    id: number
    userId: number
    chatroomId: number
    message: string
    createdAt: Date
    messageFromSender: string
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  type GetMessagesGroupByPayload<T extends MessagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagesGroupByOutputType[P]>
            : GetScalarType<T[P], MessagesGroupByOutputType[P]>
        }
      >
    >


  export type MessagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    chatroomId?: boolean
    message?: boolean
    createdAt?: boolean
    messageFromSender?: boolean
    chatroom?: boolean | ChatroomsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type MessagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    chatroomId?: boolean
    message?: boolean
    createdAt?: boolean
    messageFromSender?: boolean
    chatroom?: boolean | ChatroomsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type MessagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    chatroomId?: boolean
    message?: boolean
    createdAt?: boolean
    messageFromSender?: boolean
    chatroom?: boolean | ChatroomsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type MessagesSelectScalar = {
    id?: boolean
    userId?: boolean
    chatroomId?: boolean
    message?: boolean
    createdAt?: boolean
    messageFromSender?: boolean
  }

  export type MessagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "chatroomId" | "message" | "createdAt" | "messageFromSender", ExtArgs["result"]["messages"]>
  export type MessagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatroom?: boolean | ChatroomsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatroom?: boolean | ChatroomsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatroom?: boolean | ChatroomsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Messages"
    objects: {
      chatroom: Prisma.$ChatroomsPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      chatroomId: number
      message: string
      createdAt: Date
      messageFromSender: string
    }, ExtArgs["result"]["messages"]>
    composites: {}
  }

  type MessagesGetPayload<S extends boolean | null | undefined | MessagesDefaultArgs> = $Result.GetResult<Prisma.$MessagesPayload, S>

  type MessagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessagesCountAggregateInputType | true
    }

  export interface MessagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Messages'], meta: { name: 'Messages' } }
    /**
     * Find zero or one Messages that matches the filter.
     * @param {MessagesFindUniqueArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessagesFindUniqueArgs>(args: SelectSubset<T, MessagesFindUniqueArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessagesFindUniqueOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessagesFindUniqueOrThrowArgs>(args: SelectSubset<T, MessagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindFirstArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessagesFindFirstArgs>(args?: SelectSubset<T, MessagesFindFirstArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindFirstOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessagesFindFirstOrThrowArgs>(args?: SelectSubset<T, MessagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.messages.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messagesWithIdOnly = await prisma.messages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessagesFindManyArgs>(args?: SelectSubset<T, MessagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Messages.
     * @param {MessagesCreateArgs} args - Arguments to create a Messages.
     * @example
     * // Create one Messages
     * const Messages = await prisma.messages.create({
     *   data: {
     *     // ... data to create a Messages
     *   }
     * })
     * 
     */
    create<T extends MessagesCreateArgs>(args: SelectSubset<T, MessagesCreateArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessagesCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessagesCreateManyArgs>(args?: SelectSubset<T, MessagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessagesCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessagesCreateManyAndReturnArgs>(args?: SelectSubset<T, MessagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Messages.
     * @param {MessagesDeleteArgs} args - Arguments to delete one Messages.
     * @example
     * // Delete one Messages
     * const Messages = await prisma.messages.delete({
     *   where: {
     *     // ... filter to delete one Messages
     *   }
     * })
     * 
     */
    delete<T extends MessagesDeleteArgs>(args: SelectSubset<T, MessagesDeleteArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Messages.
     * @param {MessagesUpdateArgs} args - Arguments to update one Messages.
     * @example
     * // Update one Messages
     * const messages = await prisma.messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessagesUpdateArgs>(args: SelectSubset<T, MessagesUpdateArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessagesDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessagesDeleteManyArgs>(args?: SelectSubset<T, MessagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessagesUpdateManyArgs>(args: SelectSubset<T, MessagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessagesUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessagesUpdateManyAndReturnArgs>(args: SelectSubset<T, MessagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Messages.
     * @param {MessagesUpsertArgs} args - Arguments to update or create a Messages.
     * @example
     * // Update or create a Messages
     * const messages = await prisma.messages.upsert({
     *   create: {
     *     // ... data to create a Messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Messages we want to update
     *   }
     * })
     */
    upsert<T extends MessagesUpsertArgs>(args: SelectSubset<T, MessagesUpsertArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.messages.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessagesCountArgs>(
      args?: Subset<T, MessagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessagesAggregateArgs>(args: Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>

    /**
     * Group by Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesGroupByArgs} args - Group by arguments.
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
      T extends MessagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessagesGroupByArgs['orderBy'] }
        : { orderBy?: MessagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Messages model
   */
  readonly fields: MessagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatroom<T extends ChatroomsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatroomsDefaultArgs<ExtArgs>>): Prisma__ChatroomsClient<$Result.GetResult<Prisma.$ChatroomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Messages model
   */
  interface MessagesFieldRefs {
    readonly id: FieldRef<"Messages", 'Int'>
    readonly userId: FieldRef<"Messages", 'Int'>
    readonly chatroomId: FieldRef<"Messages", 'Int'>
    readonly message: FieldRef<"Messages", 'String'>
    readonly createdAt: FieldRef<"Messages", 'DateTime'>
    readonly messageFromSender: FieldRef<"Messages", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Messages findUnique
   */
  export type MessagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages findUniqueOrThrow
   */
  export type MessagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages findFirst
   */
  export type MessagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Messages findFirstOrThrow
   */
  export type MessagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Messages findMany
   */
  export type MessagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Messages create
   */
  export type MessagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * The data needed to create a Messages.
     */
    data: XOR<MessagesCreateInput, MessagesUncheckedCreateInput>
  }

  /**
   * Messages createMany
   */
  export type MessagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessagesCreateManyInput | MessagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Messages createManyAndReturn
   */
  export type MessagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessagesCreateManyInput | MessagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Messages update
   */
  export type MessagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * The data needed to update a Messages.
     */
    data: XOR<MessagesUpdateInput, MessagesUncheckedUpdateInput>
    /**
     * Choose, which Messages to update.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages updateMany
   */
  export type MessagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessagesWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Messages updateManyAndReturn
   */
  export type MessagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessagesWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Messages upsert
   */
  export type MessagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * The filter to search for the Messages to update in case it exists.
     */
    where: MessagesWhereUniqueInput
    /**
     * In case the Messages found by the `where` argument doesn't exist, create a new Messages with this data.
     */
    create: XOR<MessagesCreateInput, MessagesUncheckedCreateInput>
    /**
     * In case the Messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessagesUpdateInput, MessagesUncheckedUpdateInput>
  }

  /**
   * Messages delete
   */
  export type MessagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter which Messages to delete.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages deleteMany
   */
  export type MessagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessagesWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Messages without action
   */
  export type MessagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
  }


  /**
   * Model ChatroomUsers
   */

  export type AggregateChatroomUsers = {
    _count: ChatroomUsersCountAggregateOutputType | null
    _avg: ChatroomUsersAvgAggregateOutputType | null
    _sum: ChatroomUsersSumAggregateOutputType | null
    _min: ChatroomUsersMinAggregateOutputType | null
    _max: ChatroomUsersMaxAggregateOutputType | null
  }

  export type ChatroomUsersAvgAggregateOutputType = {
    chatroomId: number | null
    userId: number | null
  }

  export type ChatroomUsersSumAggregateOutputType = {
    chatroomId: number | null
    userId: number | null
  }

  export type ChatroomUsersMinAggregateOutputType = {
    chatroomId: number | null
    userId: number | null
    joinedAt: Date | null
  }

  export type ChatroomUsersMaxAggregateOutputType = {
    chatroomId: number | null
    userId: number | null
    joinedAt: Date | null
  }

  export type ChatroomUsersCountAggregateOutputType = {
    chatroomId: number
    userId: number
    joinedAt: number
    _all: number
  }


  export type ChatroomUsersAvgAggregateInputType = {
    chatroomId?: true
    userId?: true
  }

  export type ChatroomUsersSumAggregateInputType = {
    chatroomId?: true
    userId?: true
  }

  export type ChatroomUsersMinAggregateInputType = {
    chatroomId?: true
    userId?: true
    joinedAt?: true
  }

  export type ChatroomUsersMaxAggregateInputType = {
    chatroomId?: true
    userId?: true
    joinedAt?: true
  }

  export type ChatroomUsersCountAggregateInputType = {
    chatroomId?: true
    userId?: true
    joinedAt?: true
    _all?: true
  }

  export type ChatroomUsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatroomUsers to aggregate.
     */
    where?: ChatroomUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatroomUsers to fetch.
     */
    orderBy?: ChatroomUsersOrderByWithRelationInput | ChatroomUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatroomUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatroomUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatroomUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatroomUsers
    **/
    _count?: true | ChatroomUsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatroomUsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatroomUsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatroomUsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatroomUsersMaxAggregateInputType
  }

  export type GetChatroomUsersAggregateType<T extends ChatroomUsersAggregateArgs> = {
        [P in keyof T & keyof AggregateChatroomUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatroomUsers[P]>
      : GetScalarType<T[P], AggregateChatroomUsers[P]>
  }




  export type ChatroomUsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatroomUsersWhereInput
    orderBy?: ChatroomUsersOrderByWithAggregationInput | ChatroomUsersOrderByWithAggregationInput[]
    by: ChatroomUsersScalarFieldEnum[] | ChatroomUsersScalarFieldEnum
    having?: ChatroomUsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatroomUsersCountAggregateInputType | true
    _avg?: ChatroomUsersAvgAggregateInputType
    _sum?: ChatroomUsersSumAggregateInputType
    _min?: ChatroomUsersMinAggregateInputType
    _max?: ChatroomUsersMaxAggregateInputType
  }

  export type ChatroomUsersGroupByOutputType = {
    chatroomId: number
    userId: number
    joinedAt: Date
    _count: ChatroomUsersCountAggregateOutputType | null
    _avg: ChatroomUsersAvgAggregateOutputType | null
    _sum: ChatroomUsersSumAggregateOutputType | null
    _min: ChatroomUsersMinAggregateOutputType | null
    _max: ChatroomUsersMaxAggregateOutputType | null
  }

  type GetChatroomUsersGroupByPayload<T extends ChatroomUsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatroomUsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatroomUsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatroomUsersGroupByOutputType[P]>
            : GetScalarType<T[P], ChatroomUsersGroupByOutputType[P]>
        }
      >
    >


  export type ChatroomUsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chatroomId?: boolean
    userId?: boolean
    joinedAt?: boolean
    chatroom?: boolean | ChatroomsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatroomUsers"]>

  export type ChatroomUsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chatroomId?: boolean
    userId?: boolean
    joinedAt?: boolean
    chatroom?: boolean | ChatroomsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatroomUsers"]>

  export type ChatroomUsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chatroomId?: boolean
    userId?: boolean
    joinedAt?: boolean
    chatroom?: boolean | ChatroomsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatroomUsers"]>

  export type ChatroomUsersSelectScalar = {
    chatroomId?: boolean
    userId?: boolean
    joinedAt?: boolean
  }

  export type ChatroomUsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"chatroomId" | "userId" | "joinedAt", ExtArgs["result"]["chatroomUsers"]>
  export type ChatroomUsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatroom?: boolean | ChatroomsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatroomUsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatroom?: boolean | ChatroomsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatroomUsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatroom?: boolean | ChatroomsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatroomUsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatroomUsers"
    objects: {
      chatroom: Prisma.$ChatroomsPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      chatroomId: number
      userId: number
      joinedAt: Date
    }, ExtArgs["result"]["chatroomUsers"]>
    composites: {}
  }

  type ChatroomUsersGetPayload<S extends boolean | null | undefined | ChatroomUsersDefaultArgs> = $Result.GetResult<Prisma.$ChatroomUsersPayload, S>

  type ChatroomUsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatroomUsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatroomUsersCountAggregateInputType | true
    }

  export interface ChatroomUsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatroomUsers'], meta: { name: 'ChatroomUsers' } }
    /**
     * Find zero or one ChatroomUsers that matches the filter.
     * @param {ChatroomUsersFindUniqueArgs} args - Arguments to find a ChatroomUsers
     * @example
     * // Get one ChatroomUsers
     * const chatroomUsers = await prisma.chatroomUsers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatroomUsersFindUniqueArgs>(args: SelectSubset<T, ChatroomUsersFindUniqueArgs<ExtArgs>>): Prisma__ChatroomUsersClient<$Result.GetResult<Prisma.$ChatroomUsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatroomUsers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatroomUsersFindUniqueOrThrowArgs} args - Arguments to find a ChatroomUsers
     * @example
     * // Get one ChatroomUsers
     * const chatroomUsers = await prisma.chatroomUsers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatroomUsersFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatroomUsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatroomUsersClient<$Result.GetResult<Prisma.$ChatroomUsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatroomUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatroomUsersFindFirstArgs} args - Arguments to find a ChatroomUsers
     * @example
     * // Get one ChatroomUsers
     * const chatroomUsers = await prisma.chatroomUsers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatroomUsersFindFirstArgs>(args?: SelectSubset<T, ChatroomUsersFindFirstArgs<ExtArgs>>): Prisma__ChatroomUsersClient<$Result.GetResult<Prisma.$ChatroomUsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatroomUsers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatroomUsersFindFirstOrThrowArgs} args - Arguments to find a ChatroomUsers
     * @example
     * // Get one ChatroomUsers
     * const chatroomUsers = await prisma.chatroomUsers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatroomUsersFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatroomUsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatroomUsersClient<$Result.GetResult<Prisma.$ChatroomUsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatroomUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatroomUsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatroomUsers
     * const chatroomUsers = await prisma.chatroomUsers.findMany()
     * 
     * // Get first 10 ChatroomUsers
     * const chatroomUsers = await prisma.chatroomUsers.findMany({ take: 10 })
     * 
     * // Only select the `chatroomId`
     * const chatroomUsersWithChatroomIdOnly = await prisma.chatroomUsers.findMany({ select: { chatroomId: true } })
     * 
     */
    findMany<T extends ChatroomUsersFindManyArgs>(args?: SelectSubset<T, ChatroomUsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatroomUsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatroomUsers.
     * @param {ChatroomUsersCreateArgs} args - Arguments to create a ChatroomUsers.
     * @example
     * // Create one ChatroomUsers
     * const ChatroomUsers = await prisma.chatroomUsers.create({
     *   data: {
     *     // ... data to create a ChatroomUsers
     *   }
     * })
     * 
     */
    create<T extends ChatroomUsersCreateArgs>(args: SelectSubset<T, ChatroomUsersCreateArgs<ExtArgs>>): Prisma__ChatroomUsersClient<$Result.GetResult<Prisma.$ChatroomUsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatroomUsers.
     * @param {ChatroomUsersCreateManyArgs} args - Arguments to create many ChatroomUsers.
     * @example
     * // Create many ChatroomUsers
     * const chatroomUsers = await prisma.chatroomUsers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatroomUsersCreateManyArgs>(args?: SelectSubset<T, ChatroomUsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatroomUsers and returns the data saved in the database.
     * @param {ChatroomUsersCreateManyAndReturnArgs} args - Arguments to create many ChatroomUsers.
     * @example
     * // Create many ChatroomUsers
     * const chatroomUsers = await prisma.chatroomUsers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatroomUsers and only return the `chatroomId`
     * const chatroomUsersWithChatroomIdOnly = await prisma.chatroomUsers.createManyAndReturn({
     *   select: { chatroomId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatroomUsersCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatroomUsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatroomUsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatroomUsers.
     * @param {ChatroomUsersDeleteArgs} args - Arguments to delete one ChatroomUsers.
     * @example
     * // Delete one ChatroomUsers
     * const ChatroomUsers = await prisma.chatroomUsers.delete({
     *   where: {
     *     // ... filter to delete one ChatroomUsers
     *   }
     * })
     * 
     */
    delete<T extends ChatroomUsersDeleteArgs>(args: SelectSubset<T, ChatroomUsersDeleteArgs<ExtArgs>>): Prisma__ChatroomUsersClient<$Result.GetResult<Prisma.$ChatroomUsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatroomUsers.
     * @param {ChatroomUsersUpdateArgs} args - Arguments to update one ChatroomUsers.
     * @example
     * // Update one ChatroomUsers
     * const chatroomUsers = await prisma.chatroomUsers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatroomUsersUpdateArgs>(args: SelectSubset<T, ChatroomUsersUpdateArgs<ExtArgs>>): Prisma__ChatroomUsersClient<$Result.GetResult<Prisma.$ChatroomUsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatroomUsers.
     * @param {ChatroomUsersDeleteManyArgs} args - Arguments to filter ChatroomUsers to delete.
     * @example
     * // Delete a few ChatroomUsers
     * const { count } = await prisma.chatroomUsers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatroomUsersDeleteManyArgs>(args?: SelectSubset<T, ChatroomUsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatroomUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatroomUsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatroomUsers
     * const chatroomUsers = await prisma.chatroomUsers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatroomUsersUpdateManyArgs>(args: SelectSubset<T, ChatroomUsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatroomUsers and returns the data updated in the database.
     * @param {ChatroomUsersUpdateManyAndReturnArgs} args - Arguments to update many ChatroomUsers.
     * @example
     * // Update many ChatroomUsers
     * const chatroomUsers = await prisma.chatroomUsers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatroomUsers and only return the `chatroomId`
     * const chatroomUsersWithChatroomIdOnly = await prisma.chatroomUsers.updateManyAndReturn({
     *   select: { chatroomId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatroomUsersUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatroomUsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatroomUsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatroomUsers.
     * @param {ChatroomUsersUpsertArgs} args - Arguments to update or create a ChatroomUsers.
     * @example
     * // Update or create a ChatroomUsers
     * const chatroomUsers = await prisma.chatroomUsers.upsert({
     *   create: {
     *     // ... data to create a ChatroomUsers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatroomUsers we want to update
     *   }
     * })
     */
    upsert<T extends ChatroomUsersUpsertArgs>(args: SelectSubset<T, ChatroomUsersUpsertArgs<ExtArgs>>): Prisma__ChatroomUsersClient<$Result.GetResult<Prisma.$ChatroomUsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatroomUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatroomUsersCountArgs} args - Arguments to filter ChatroomUsers to count.
     * @example
     * // Count the number of ChatroomUsers
     * const count = await prisma.chatroomUsers.count({
     *   where: {
     *     // ... the filter for the ChatroomUsers we want to count
     *   }
     * })
    **/
    count<T extends ChatroomUsersCountArgs>(
      args?: Subset<T, ChatroomUsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatroomUsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatroomUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatroomUsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatroomUsersAggregateArgs>(args: Subset<T, ChatroomUsersAggregateArgs>): Prisma.PrismaPromise<GetChatroomUsersAggregateType<T>>

    /**
     * Group by ChatroomUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatroomUsersGroupByArgs} args - Group by arguments.
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
      T extends ChatroomUsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatroomUsersGroupByArgs['orderBy'] }
        : { orderBy?: ChatroomUsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatroomUsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatroomUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatroomUsers model
   */
  readonly fields: ChatroomUsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatroomUsers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatroomUsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatroom<T extends ChatroomsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatroomsDefaultArgs<ExtArgs>>): Prisma__ChatroomsClient<$Result.GetResult<Prisma.$ChatroomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChatroomUsers model
   */
  interface ChatroomUsersFieldRefs {
    readonly chatroomId: FieldRef<"ChatroomUsers", 'Int'>
    readonly userId: FieldRef<"ChatroomUsers", 'Int'>
    readonly joinedAt: FieldRef<"ChatroomUsers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatroomUsers findUnique
   */
  export type ChatroomUsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatroomUsers
     */
    select?: ChatroomUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatroomUsers
     */
    omit?: ChatroomUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomUsersInclude<ExtArgs> | null
    /**
     * Filter, which ChatroomUsers to fetch.
     */
    where: ChatroomUsersWhereUniqueInput
  }

  /**
   * ChatroomUsers findUniqueOrThrow
   */
  export type ChatroomUsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatroomUsers
     */
    select?: ChatroomUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatroomUsers
     */
    omit?: ChatroomUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomUsersInclude<ExtArgs> | null
    /**
     * Filter, which ChatroomUsers to fetch.
     */
    where: ChatroomUsersWhereUniqueInput
  }

  /**
   * ChatroomUsers findFirst
   */
  export type ChatroomUsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatroomUsers
     */
    select?: ChatroomUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatroomUsers
     */
    omit?: ChatroomUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomUsersInclude<ExtArgs> | null
    /**
     * Filter, which ChatroomUsers to fetch.
     */
    where?: ChatroomUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatroomUsers to fetch.
     */
    orderBy?: ChatroomUsersOrderByWithRelationInput | ChatroomUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatroomUsers.
     */
    cursor?: ChatroomUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatroomUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatroomUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatroomUsers.
     */
    distinct?: ChatroomUsersScalarFieldEnum | ChatroomUsersScalarFieldEnum[]
  }

  /**
   * ChatroomUsers findFirstOrThrow
   */
  export type ChatroomUsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatroomUsers
     */
    select?: ChatroomUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatroomUsers
     */
    omit?: ChatroomUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomUsersInclude<ExtArgs> | null
    /**
     * Filter, which ChatroomUsers to fetch.
     */
    where?: ChatroomUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatroomUsers to fetch.
     */
    orderBy?: ChatroomUsersOrderByWithRelationInput | ChatroomUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatroomUsers.
     */
    cursor?: ChatroomUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatroomUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatroomUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatroomUsers.
     */
    distinct?: ChatroomUsersScalarFieldEnum | ChatroomUsersScalarFieldEnum[]
  }

  /**
   * ChatroomUsers findMany
   */
  export type ChatroomUsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatroomUsers
     */
    select?: ChatroomUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatroomUsers
     */
    omit?: ChatroomUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomUsersInclude<ExtArgs> | null
    /**
     * Filter, which ChatroomUsers to fetch.
     */
    where?: ChatroomUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatroomUsers to fetch.
     */
    orderBy?: ChatroomUsersOrderByWithRelationInput | ChatroomUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatroomUsers.
     */
    cursor?: ChatroomUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatroomUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatroomUsers.
     */
    skip?: number
    distinct?: ChatroomUsersScalarFieldEnum | ChatroomUsersScalarFieldEnum[]
  }

  /**
   * ChatroomUsers create
   */
  export type ChatroomUsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatroomUsers
     */
    select?: ChatroomUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatroomUsers
     */
    omit?: ChatroomUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomUsersInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatroomUsers.
     */
    data: XOR<ChatroomUsersCreateInput, ChatroomUsersUncheckedCreateInput>
  }

  /**
   * ChatroomUsers createMany
   */
  export type ChatroomUsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatroomUsers.
     */
    data: ChatroomUsersCreateManyInput | ChatroomUsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatroomUsers createManyAndReturn
   */
  export type ChatroomUsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatroomUsers
     */
    select?: ChatroomUsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatroomUsers
     */
    omit?: ChatroomUsersOmit<ExtArgs> | null
    /**
     * The data used to create many ChatroomUsers.
     */
    data: ChatroomUsersCreateManyInput | ChatroomUsersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomUsersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatroomUsers update
   */
  export type ChatroomUsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatroomUsers
     */
    select?: ChatroomUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatroomUsers
     */
    omit?: ChatroomUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomUsersInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatroomUsers.
     */
    data: XOR<ChatroomUsersUpdateInput, ChatroomUsersUncheckedUpdateInput>
    /**
     * Choose, which ChatroomUsers to update.
     */
    where: ChatroomUsersWhereUniqueInput
  }

  /**
   * ChatroomUsers updateMany
   */
  export type ChatroomUsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatroomUsers.
     */
    data: XOR<ChatroomUsersUpdateManyMutationInput, ChatroomUsersUncheckedUpdateManyInput>
    /**
     * Filter which ChatroomUsers to update
     */
    where?: ChatroomUsersWhereInput
    /**
     * Limit how many ChatroomUsers to update.
     */
    limit?: number
  }

  /**
   * ChatroomUsers updateManyAndReturn
   */
  export type ChatroomUsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatroomUsers
     */
    select?: ChatroomUsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatroomUsers
     */
    omit?: ChatroomUsersOmit<ExtArgs> | null
    /**
     * The data used to update ChatroomUsers.
     */
    data: XOR<ChatroomUsersUpdateManyMutationInput, ChatroomUsersUncheckedUpdateManyInput>
    /**
     * Filter which ChatroomUsers to update
     */
    where?: ChatroomUsersWhereInput
    /**
     * Limit how many ChatroomUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomUsersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatroomUsers upsert
   */
  export type ChatroomUsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatroomUsers
     */
    select?: ChatroomUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatroomUsers
     */
    omit?: ChatroomUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomUsersInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatroomUsers to update in case it exists.
     */
    where: ChatroomUsersWhereUniqueInput
    /**
     * In case the ChatroomUsers found by the `where` argument doesn't exist, create a new ChatroomUsers with this data.
     */
    create: XOR<ChatroomUsersCreateInput, ChatroomUsersUncheckedCreateInput>
    /**
     * In case the ChatroomUsers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatroomUsersUpdateInput, ChatroomUsersUncheckedUpdateInput>
  }

  /**
   * ChatroomUsers delete
   */
  export type ChatroomUsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatroomUsers
     */
    select?: ChatroomUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatroomUsers
     */
    omit?: ChatroomUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomUsersInclude<ExtArgs> | null
    /**
     * Filter which ChatroomUsers to delete.
     */
    where: ChatroomUsersWhereUniqueInput
  }

  /**
   * ChatroomUsers deleteMany
   */
  export type ChatroomUsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatroomUsers to delete
     */
    where?: ChatroomUsersWhereInput
    /**
     * Limit how many ChatroomUsers to delete.
     */
    limit?: number
  }

  /**
   * ChatroomUsers without action
   */
  export type ChatroomUsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatroomUsers
     */
    select?: ChatroomUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatroomUsers
     */
    omit?: ChatroomUsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomUsersInclude<ExtArgs> | null
  }


  /**
   * Model PrivateKey
   */

  export type AggregatePrivateKey = {
    _count: PrivateKeyCountAggregateOutputType | null
    _avg: PrivateKeyAvgAggregateOutputType | null
    _sum: PrivateKeySumAggregateOutputType | null
    _min: PrivateKeyMinAggregateOutputType | null
    _max: PrivateKeyMaxAggregateOutputType | null
  }

  export type PrivateKeyAvgAggregateOutputType = {
    privateKeyId: number | null
    userId: number | null
  }

  export type PrivateKeySumAggregateOutputType = {
    privateKeyId: number | null
    userId: number | null
  }

  export type PrivateKeyMinAggregateOutputType = {
    privateKeyId: number | null
    encrypted_key: string | null
    salt: string | null
    iv: string | null
    userId: number | null
  }

  export type PrivateKeyMaxAggregateOutputType = {
    privateKeyId: number | null
    encrypted_key: string | null
    salt: string | null
    iv: string | null
    userId: number | null
  }

  export type PrivateKeyCountAggregateOutputType = {
    privateKeyId: number
    encrypted_key: number
    salt: number
    iv: number
    userId: number
    _all: number
  }


  export type PrivateKeyAvgAggregateInputType = {
    privateKeyId?: true
    userId?: true
  }

  export type PrivateKeySumAggregateInputType = {
    privateKeyId?: true
    userId?: true
  }

  export type PrivateKeyMinAggregateInputType = {
    privateKeyId?: true
    encrypted_key?: true
    salt?: true
    iv?: true
    userId?: true
  }

  export type PrivateKeyMaxAggregateInputType = {
    privateKeyId?: true
    encrypted_key?: true
    salt?: true
    iv?: true
    userId?: true
  }

  export type PrivateKeyCountAggregateInputType = {
    privateKeyId?: true
    encrypted_key?: true
    salt?: true
    iv?: true
    userId?: true
    _all?: true
  }

  export type PrivateKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrivateKey to aggregate.
     */
    where?: PrivateKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateKeys to fetch.
     */
    orderBy?: PrivateKeyOrderByWithRelationInput | PrivateKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrivateKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrivateKeys
    **/
    _count?: true | PrivateKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrivateKeyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrivateKeySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrivateKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrivateKeyMaxAggregateInputType
  }

  export type GetPrivateKeyAggregateType<T extends PrivateKeyAggregateArgs> = {
        [P in keyof T & keyof AggregatePrivateKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrivateKey[P]>
      : GetScalarType<T[P], AggregatePrivateKey[P]>
  }




  export type PrivateKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivateKeyWhereInput
    orderBy?: PrivateKeyOrderByWithAggregationInput | PrivateKeyOrderByWithAggregationInput[]
    by: PrivateKeyScalarFieldEnum[] | PrivateKeyScalarFieldEnum
    having?: PrivateKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrivateKeyCountAggregateInputType | true
    _avg?: PrivateKeyAvgAggregateInputType
    _sum?: PrivateKeySumAggregateInputType
    _min?: PrivateKeyMinAggregateInputType
    _max?: PrivateKeyMaxAggregateInputType
  }

  export type PrivateKeyGroupByOutputType = {
    privateKeyId: number
    encrypted_key: string
    salt: string
    iv: string
    userId: number
    _count: PrivateKeyCountAggregateOutputType | null
    _avg: PrivateKeyAvgAggregateOutputType | null
    _sum: PrivateKeySumAggregateOutputType | null
    _min: PrivateKeyMinAggregateOutputType | null
    _max: PrivateKeyMaxAggregateOutputType | null
  }

  type GetPrivateKeyGroupByPayload<T extends PrivateKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrivateKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrivateKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrivateKeyGroupByOutputType[P]>
            : GetScalarType<T[P], PrivateKeyGroupByOutputType[P]>
        }
      >
    >


  export type PrivateKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    privateKeyId?: boolean
    encrypted_key?: boolean
    salt?: boolean
    iv?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["privateKey"]>

  export type PrivateKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    privateKeyId?: boolean
    encrypted_key?: boolean
    salt?: boolean
    iv?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["privateKey"]>

  export type PrivateKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    privateKeyId?: boolean
    encrypted_key?: boolean
    salt?: boolean
    iv?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["privateKey"]>

  export type PrivateKeySelectScalar = {
    privateKeyId?: boolean
    encrypted_key?: boolean
    salt?: boolean
    iv?: boolean
    userId?: boolean
  }

  export type PrivateKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"privateKeyId" | "encrypted_key" | "salt" | "iv" | "userId", ExtArgs["result"]["privateKey"]>
  export type PrivateKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PrivateKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PrivateKeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PrivateKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrivateKey"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      privateKeyId: number
      encrypted_key: string
      salt: string
      iv: string
      userId: number
    }, ExtArgs["result"]["privateKey"]>
    composites: {}
  }

  type PrivateKeyGetPayload<S extends boolean | null | undefined | PrivateKeyDefaultArgs> = $Result.GetResult<Prisma.$PrivateKeyPayload, S>

  type PrivateKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrivateKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrivateKeyCountAggregateInputType | true
    }

  export interface PrivateKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrivateKey'], meta: { name: 'PrivateKey' } }
    /**
     * Find zero or one PrivateKey that matches the filter.
     * @param {PrivateKeyFindUniqueArgs} args - Arguments to find a PrivateKey
     * @example
     * // Get one PrivateKey
     * const privateKey = await prisma.privateKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrivateKeyFindUniqueArgs>(args: SelectSubset<T, PrivateKeyFindUniqueArgs<ExtArgs>>): Prisma__PrivateKeyClient<$Result.GetResult<Prisma.$PrivateKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PrivateKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrivateKeyFindUniqueOrThrowArgs} args - Arguments to find a PrivateKey
     * @example
     * // Get one PrivateKey
     * const privateKey = await prisma.privateKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrivateKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, PrivateKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrivateKeyClient<$Result.GetResult<Prisma.$PrivateKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrivateKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateKeyFindFirstArgs} args - Arguments to find a PrivateKey
     * @example
     * // Get one PrivateKey
     * const privateKey = await prisma.privateKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrivateKeyFindFirstArgs>(args?: SelectSubset<T, PrivateKeyFindFirstArgs<ExtArgs>>): Prisma__PrivateKeyClient<$Result.GetResult<Prisma.$PrivateKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrivateKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateKeyFindFirstOrThrowArgs} args - Arguments to find a PrivateKey
     * @example
     * // Get one PrivateKey
     * const privateKey = await prisma.privateKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrivateKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, PrivateKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrivateKeyClient<$Result.GetResult<Prisma.$PrivateKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PrivateKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrivateKeys
     * const privateKeys = await prisma.privateKey.findMany()
     * 
     * // Get first 10 PrivateKeys
     * const privateKeys = await prisma.privateKey.findMany({ take: 10 })
     * 
     * // Only select the `privateKeyId`
     * const privateKeyWithPrivateKeyIdOnly = await prisma.privateKey.findMany({ select: { privateKeyId: true } })
     * 
     */
    findMany<T extends PrivateKeyFindManyArgs>(args?: SelectSubset<T, PrivateKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PrivateKey.
     * @param {PrivateKeyCreateArgs} args - Arguments to create a PrivateKey.
     * @example
     * // Create one PrivateKey
     * const PrivateKey = await prisma.privateKey.create({
     *   data: {
     *     // ... data to create a PrivateKey
     *   }
     * })
     * 
     */
    create<T extends PrivateKeyCreateArgs>(args: SelectSubset<T, PrivateKeyCreateArgs<ExtArgs>>): Prisma__PrivateKeyClient<$Result.GetResult<Prisma.$PrivateKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PrivateKeys.
     * @param {PrivateKeyCreateManyArgs} args - Arguments to create many PrivateKeys.
     * @example
     * // Create many PrivateKeys
     * const privateKey = await prisma.privateKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrivateKeyCreateManyArgs>(args?: SelectSubset<T, PrivateKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PrivateKeys and returns the data saved in the database.
     * @param {PrivateKeyCreateManyAndReturnArgs} args - Arguments to create many PrivateKeys.
     * @example
     * // Create many PrivateKeys
     * const privateKey = await prisma.privateKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PrivateKeys and only return the `privateKeyId`
     * const privateKeyWithPrivateKeyIdOnly = await prisma.privateKey.createManyAndReturn({
     *   select: { privateKeyId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrivateKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, PrivateKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PrivateKey.
     * @param {PrivateKeyDeleteArgs} args - Arguments to delete one PrivateKey.
     * @example
     * // Delete one PrivateKey
     * const PrivateKey = await prisma.privateKey.delete({
     *   where: {
     *     // ... filter to delete one PrivateKey
     *   }
     * })
     * 
     */
    delete<T extends PrivateKeyDeleteArgs>(args: SelectSubset<T, PrivateKeyDeleteArgs<ExtArgs>>): Prisma__PrivateKeyClient<$Result.GetResult<Prisma.$PrivateKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PrivateKey.
     * @param {PrivateKeyUpdateArgs} args - Arguments to update one PrivateKey.
     * @example
     * // Update one PrivateKey
     * const privateKey = await prisma.privateKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrivateKeyUpdateArgs>(args: SelectSubset<T, PrivateKeyUpdateArgs<ExtArgs>>): Prisma__PrivateKeyClient<$Result.GetResult<Prisma.$PrivateKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PrivateKeys.
     * @param {PrivateKeyDeleteManyArgs} args - Arguments to filter PrivateKeys to delete.
     * @example
     * // Delete a few PrivateKeys
     * const { count } = await prisma.privateKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrivateKeyDeleteManyArgs>(args?: SelectSubset<T, PrivateKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrivateKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrivateKeys
     * const privateKey = await prisma.privateKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrivateKeyUpdateManyArgs>(args: SelectSubset<T, PrivateKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrivateKeys and returns the data updated in the database.
     * @param {PrivateKeyUpdateManyAndReturnArgs} args - Arguments to update many PrivateKeys.
     * @example
     * // Update many PrivateKeys
     * const privateKey = await prisma.privateKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PrivateKeys and only return the `privateKeyId`
     * const privateKeyWithPrivateKeyIdOnly = await prisma.privateKey.updateManyAndReturn({
     *   select: { privateKeyId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PrivateKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, PrivateKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PrivateKey.
     * @param {PrivateKeyUpsertArgs} args - Arguments to update or create a PrivateKey.
     * @example
     * // Update or create a PrivateKey
     * const privateKey = await prisma.privateKey.upsert({
     *   create: {
     *     // ... data to create a PrivateKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrivateKey we want to update
     *   }
     * })
     */
    upsert<T extends PrivateKeyUpsertArgs>(args: SelectSubset<T, PrivateKeyUpsertArgs<ExtArgs>>): Prisma__PrivateKeyClient<$Result.GetResult<Prisma.$PrivateKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PrivateKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateKeyCountArgs} args - Arguments to filter PrivateKeys to count.
     * @example
     * // Count the number of PrivateKeys
     * const count = await prisma.privateKey.count({
     *   where: {
     *     // ... the filter for the PrivateKeys we want to count
     *   }
     * })
    **/
    count<T extends PrivateKeyCountArgs>(
      args?: Subset<T, PrivateKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrivateKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrivateKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrivateKeyAggregateArgs>(args: Subset<T, PrivateKeyAggregateArgs>): Prisma.PrismaPromise<GetPrivateKeyAggregateType<T>>

    /**
     * Group by PrivateKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateKeyGroupByArgs} args - Group by arguments.
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
      T extends PrivateKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrivateKeyGroupByArgs['orderBy'] }
        : { orderBy?: PrivateKeyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrivateKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrivateKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrivateKey model
   */
  readonly fields: PrivateKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrivateKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrivateKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PrivateKey model
   */
  interface PrivateKeyFieldRefs {
    readonly privateKeyId: FieldRef<"PrivateKey", 'Int'>
    readonly encrypted_key: FieldRef<"PrivateKey", 'String'>
    readonly salt: FieldRef<"PrivateKey", 'String'>
    readonly iv: FieldRef<"PrivateKey", 'String'>
    readonly userId: FieldRef<"PrivateKey", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PrivateKey findUnique
   */
  export type PrivateKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateKey
     */
    select?: PrivateKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateKey
     */
    omit?: PrivateKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateKeyInclude<ExtArgs> | null
    /**
     * Filter, which PrivateKey to fetch.
     */
    where: PrivateKeyWhereUniqueInput
  }

  /**
   * PrivateKey findUniqueOrThrow
   */
  export type PrivateKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateKey
     */
    select?: PrivateKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateKey
     */
    omit?: PrivateKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateKeyInclude<ExtArgs> | null
    /**
     * Filter, which PrivateKey to fetch.
     */
    where: PrivateKeyWhereUniqueInput
  }

  /**
   * PrivateKey findFirst
   */
  export type PrivateKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateKey
     */
    select?: PrivateKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateKey
     */
    omit?: PrivateKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateKeyInclude<ExtArgs> | null
    /**
     * Filter, which PrivateKey to fetch.
     */
    where?: PrivateKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateKeys to fetch.
     */
    orderBy?: PrivateKeyOrderByWithRelationInput | PrivateKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrivateKeys.
     */
    cursor?: PrivateKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivateKeys.
     */
    distinct?: PrivateKeyScalarFieldEnum | PrivateKeyScalarFieldEnum[]
  }

  /**
   * PrivateKey findFirstOrThrow
   */
  export type PrivateKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateKey
     */
    select?: PrivateKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateKey
     */
    omit?: PrivateKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateKeyInclude<ExtArgs> | null
    /**
     * Filter, which PrivateKey to fetch.
     */
    where?: PrivateKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateKeys to fetch.
     */
    orderBy?: PrivateKeyOrderByWithRelationInput | PrivateKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrivateKeys.
     */
    cursor?: PrivateKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivateKeys.
     */
    distinct?: PrivateKeyScalarFieldEnum | PrivateKeyScalarFieldEnum[]
  }

  /**
   * PrivateKey findMany
   */
  export type PrivateKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateKey
     */
    select?: PrivateKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateKey
     */
    omit?: PrivateKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateKeyInclude<ExtArgs> | null
    /**
     * Filter, which PrivateKeys to fetch.
     */
    where?: PrivateKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateKeys to fetch.
     */
    orderBy?: PrivateKeyOrderByWithRelationInput | PrivateKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrivateKeys.
     */
    cursor?: PrivateKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateKeys.
     */
    skip?: number
    distinct?: PrivateKeyScalarFieldEnum | PrivateKeyScalarFieldEnum[]
  }

  /**
   * PrivateKey create
   */
  export type PrivateKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateKey
     */
    select?: PrivateKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateKey
     */
    omit?: PrivateKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a PrivateKey.
     */
    data: XOR<PrivateKeyCreateInput, PrivateKeyUncheckedCreateInput>
  }

  /**
   * PrivateKey createMany
   */
  export type PrivateKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrivateKeys.
     */
    data: PrivateKeyCreateManyInput | PrivateKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrivateKey createManyAndReturn
   */
  export type PrivateKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateKey
     */
    select?: PrivateKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateKey
     */
    omit?: PrivateKeyOmit<ExtArgs> | null
    /**
     * The data used to create many PrivateKeys.
     */
    data: PrivateKeyCreateManyInput | PrivateKeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrivateKey update
   */
  export type PrivateKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateKey
     */
    select?: PrivateKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateKey
     */
    omit?: PrivateKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a PrivateKey.
     */
    data: XOR<PrivateKeyUpdateInput, PrivateKeyUncheckedUpdateInput>
    /**
     * Choose, which PrivateKey to update.
     */
    where: PrivateKeyWhereUniqueInput
  }

  /**
   * PrivateKey updateMany
   */
  export type PrivateKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrivateKeys.
     */
    data: XOR<PrivateKeyUpdateManyMutationInput, PrivateKeyUncheckedUpdateManyInput>
    /**
     * Filter which PrivateKeys to update
     */
    where?: PrivateKeyWhereInput
    /**
     * Limit how many PrivateKeys to update.
     */
    limit?: number
  }

  /**
   * PrivateKey updateManyAndReturn
   */
  export type PrivateKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateKey
     */
    select?: PrivateKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateKey
     */
    omit?: PrivateKeyOmit<ExtArgs> | null
    /**
     * The data used to update PrivateKeys.
     */
    data: XOR<PrivateKeyUpdateManyMutationInput, PrivateKeyUncheckedUpdateManyInput>
    /**
     * Filter which PrivateKeys to update
     */
    where?: PrivateKeyWhereInput
    /**
     * Limit how many PrivateKeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateKeyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrivateKey upsert
   */
  export type PrivateKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateKey
     */
    select?: PrivateKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateKey
     */
    omit?: PrivateKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the PrivateKey to update in case it exists.
     */
    where: PrivateKeyWhereUniqueInput
    /**
     * In case the PrivateKey found by the `where` argument doesn't exist, create a new PrivateKey with this data.
     */
    create: XOR<PrivateKeyCreateInput, PrivateKeyUncheckedCreateInput>
    /**
     * In case the PrivateKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrivateKeyUpdateInput, PrivateKeyUncheckedUpdateInput>
  }

  /**
   * PrivateKey delete
   */
  export type PrivateKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateKey
     */
    select?: PrivateKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateKey
     */
    omit?: PrivateKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateKeyInclude<ExtArgs> | null
    /**
     * Filter which PrivateKey to delete.
     */
    where: PrivateKeyWhereUniqueInput
  }

  /**
   * PrivateKey deleteMany
   */
  export type PrivateKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrivateKeys to delete
     */
    where?: PrivateKeyWhereInput
    /**
     * Limit how many PrivateKeys to delete.
     */
    limit?: number
  }

  /**
   * PrivateKey without action
   */
  export type PrivateKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateKey
     */
    select?: PrivateKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateKey
     */
    omit?: PrivateKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateKeyInclude<ExtArgs> | null
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
    id: 'id',
    username: 'username',
    firstname: 'firstname',
    lastname: 'lastname',
    password: 'password',
    email: 'email',
    createdAt: 'createdAt',
    publicKey: 'publicKey'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChatroomsScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    lastMessageAt: 'lastMessageAt'
  };

  export type ChatroomsScalarFieldEnum = (typeof ChatroomsScalarFieldEnum)[keyof typeof ChatroomsScalarFieldEnum]


  export const MessagesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    chatroomId: 'chatroomId',
    message: 'message',
    createdAt: 'createdAt',
    messageFromSender: 'messageFromSender'
  };

  export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum]


  export const ChatroomUsersScalarFieldEnum: {
    chatroomId: 'chatroomId',
    userId: 'userId',
    joinedAt: 'joinedAt'
  };

  export type ChatroomUsersScalarFieldEnum = (typeof ChatroomUsersScalarFieldEnum)[keyof typeof ChatroomUsersScalarFieldEnum]


  export const PrivateKeyScalarFieldEnum: {
    privateKeyId: 'privateKeyId',
    encrypted_key: 'encrypted_key',
    salt: 'salt',
    iv: 'iv',
    userId: 'userId'
  };

  export type PrivateKeyScalarFieldEnum = (typeof PrivateKeyScalarFieldEnum)[keyof typeof PrivateKeyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    firstname?: StringFilter<"User"> | string
    lastname?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    publicKey?: StringNullableFilter<"User"> | string | null
    Chatrooms?: ChatroomUsersListRelationFilter
    Messages?: MessagesListRelationFilter
    privateKey?: XOR<PrivateKeyNullableScalarRelationFilter, PrivateKeyWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrderInput | SortOrder
    password?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    publicKey?: SortOrderInput | SortOrder
    Chatrooms?: ChatroomUsersOrderByRelationAggregateInput
    Messages?: MessagesOrderByRelationAggregateInput
    privateKey?: PrivateKeyOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstname?: StringFilter<"User"> | string
    lastname?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    publicKey?: StringNullableFilter<"User"> | string | null
    Chatrooms?: ChatroomUsersListRelationFilter
    Messages?: MessagesListRelationFilter
    privateKey?: XOR<PrivateKeyNullableScalarRelationFilter, PrivateKeyWhereInput> | null
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrderInput | SortOrder
    password?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    publicKey?: SortOrderInput | SortOrder
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
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    firstname?: StringWithAggregatesFilter<"User"> | string
    lastname?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    publicKey?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ChatroomsWhereInput = {
    AND?: ChatroomsWhereInput | ChatroomsWhereInput[]
    OR?: ChatroomsWhereInput[]
    NOT?: ChatroomsWhereInput | ChatroomsWhereInput[]
    id?: IntFilter<"Chatrooms"> | number
    createdAt?: DateTimeFilter<"Chatrooms"> | Date | string
    lastMessageAt?: DateTimeFilter<"Chatrooms"> | Date | string
    users?: ChatroomUsersListRelationFilter
    messages?: MessagesListRelationFilter
  }

  export type ChatroomsOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    lastMessageAt?: SortOrder
    users?: ChatroomUsersOrderByRelationAggregateInput
    messages?: MessagesOrderByRelationAggregateInput
  }

  export type ChatroomsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatroomsWhereInput | ChatroomsWhereInput[]
    OR?: ChatroomsWhereInput[]
    NOT?: ChatroomsWhereInput | ChatroomsWhereInput[]
    createdAt?: DateTimeFilter<"Chatrooms"> | Date | string
    lastMessageAt?: DateTimeFilter<"Chatrooms"> | Date | string
    users?: ChatroomUsersListRelationFilter
    messages?: MessagesListRelationFilter
  }, "id">

  export type ChatroomsOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    lastMessageAt?: SortOrder
    _count?: ChatroomsCountOrderByAggregateInput
    _avg?: ChatroomsAvgOrderByAggregateInput
    _max?: ChatroomsMaxOrderByAggregateInput
    _min?: ChatroomsMinOrderByAggregateInput
    _sum?: ChatroomsSumOrderByAggregateInput
  }

  export type ChatroomsScalarWhereWithAggregatesInput = {
    AND?: ChatroomsScalarWhereWithAggregatesInput | ChatroomsScalarWhereWithAggregatesInput[]
    OR?: ChatroomsScalarWhereWithAggregatesInput[]
    NOT?: ChatroomsScalarWhereWithAggregatesInput | ChatroomsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Chatrooms"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Chatrooms"> | Date | string
    lastMessageAt?: DateTimeWithAggregatesFilter<"Chatrooms"> | Date | string
  }

  export type MessagesWhereInput = {
    AND?: MessagesWhereInput | MessagesWhereInput[]
    OR?: MessagesWhereInput[]
    NOT?: MessagesWhereInput | MessagesWhereInput[]
    id?: IntFilter<"Messages"> | number
    userId?: IntFilter<"Messages"> | number
    chatroomId?: IntFilter<"Messages"> | number
    message?: StringFilter<"Messages"> | string
    createdAt?: DateTimeFilter<"Messages"> | Date | string
    messageFromSender?: StringFilter<"Messages"> | string
    chatroom?: XOR<ChatroomsScalarRelationFilter, ChatroomsWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessagesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    chatroomId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    messageFromSender?: SortOrder
    chatroom?: ChatroomsOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type MessagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessagesWhereInput | MessagesWhereInput[]
    OR?: MessagesWhereInput[]
    NOT?: MessagesWhereInput | MessagesWhereInput[]
    userId?: IntFilter<"Messages"> | number
    chatroomId?: IntFilter<"Messages"> | number
    message?: StringFilter<"Messages"> | string
    createdAt?: DateTimeFilter<"Messages"> | Date | string
    messageFromSender?: StringFilter<"Messages"> | string
    chatroom?: XOR<ChatroomsScalarRelationFilter, ChatroomsWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MessagesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    chatroomId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    messageFromSender?: SortOrder
    _count?: MessagesCountOrderByAggregateInput
    _avg?: MessagesAvgOrderByAggregateInput
    _max?: MessagesMaxOrderByAggregateInput
    _min?: MessagesMinOrderByAggregateInput
    _sum?: MessagesSumOrderByAggregateInput
  }

  export type MessagesScalarWhereWithAggregatesInput = {
    AND?: MessagesScalarWhereWithAggregatesInput | MessagesScalarWhereWithAggregatesInput[]
    OR?: MessagesScalarWhereWithAggregatesInput[]
    NOT?: MessagesScalarWhereWithAggregatesInput | MessagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Messages"> | number
    userId?: IntWithAggregatesFilter<"Messages"> | number
    chatroomId?: IntWithAggregatesFilter<"Messages"> | number
    message?: StringWithAggregatesFilter<"Messages"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Messages"> | Date | string
    messageFromSender?: StringWithAggregatesFilter<"Messages"> | string
  }

  export type ChatroomUsersWhereInput = {
    AND?: ChatroomUsersWhereInput | ChatroomUsersWhereInput[]
    OR?: ChatroomUsersWhereInput[]
    NOT?: ChatroomUsersWhereInput | ChatroomUsersWhereInput[]
    chatroomId?: IntFilter<"ChatroomUsers"> | number
    userId?: IntFilter<"ChatroomUsers"> | number
    joinedAt?: DateTimeFilter<"ChatroomUsers"> | Date | string
    chatroom?: XOR<ChatroomsScalarRelationFilter, ChatroomsWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ChatroomUsersOrderByWithRelationInput = {
    chatroomId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    chatroom?: ChatroomsOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ChatroomUsersWhereUniqueInput = Prisma.AtLeast<{
    userId_chatroomId?: ChatroomUsersUserIdChatroomIdCompoundUniqueInput
    AND?: ChatroomUsersWhereInput | ChatroomUsersWhereInput[]
    OR?: ChatroomUsersWhereInput[]
    NOT?: ChatroomUsersWhereInput | ChatroomUsersWhereInput[]
    chatroomId?: IntFilter<"ChatroomUsers"> | number
    userId?: IntFilter<"ChatroomUsers"> | number
    joinedAt?: DateTimeFilter<"ChatroomUsers"> | Date | string
    chatroom?: XOR<ChatroomsScalarRelationFilter, ChatroomsWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId_chatroomId">

  export type ChatroomUsersOrderByWithAggregationInput = {
    chatroomId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    _count?: ChatroomUsersCountOrderByAggregateInput
    _avg?: ChatroomUsersAvgOrderByAggregateInput
    _max?: ChatroomUsersMaxOrderByAggregateInput
    _min?: ChatroomUsersMinOrderByAggregateInput
    _sum?: ChatroomUsersSumOrderByAggregateInput
  }

  export type ChatroomUsersScalarWhereWithAggregatesInput = {
    AND?: ChatroomUsersScalarWhereWithAggregatesInput | ChatroomUsersScalarWhereWithAggregatesInput[]
    OR?: ChatroomUsersScalarWhereWithAggregatesInput[]
    NOT?: ChatroomUsersScalarWhereWithAggregatesInput | ChatroomUsersScalarWhereWithAggregatesInput[]
    chatroomId?: IntWithAggregatesFilter<"ChatroomUsers"> | number
    userId?: IntWithAggregatesFilter<"ChatroomUsers"> | number
    joinedAt?: DateTimeWithAggregatesFilter<"ChatroomUsers"> | Date | string
  }

  export type PrivateKeyWhereInput = {
    AND?: PrivateKeyWhereInput | PrivateKeyWhereInput[]
    OR?: PrivateKeyWhereInput[]
    NOT?: PrivateKeyWhereInput | PrivateKeyWhereInput[]
    privateKeyId?: IntFilter<"PrivateKey"> | number
    encrypted_key?: StringFilter<"PrivateKey"> | string
    salt?: StringFilter<"PrivateKey"> | string
    iv?: StringFilter<"PrivateKey"> | string
    userId?: IntFilter<"PrivateKey"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PrivateKeyOrderByWithRelationInput = {
    privateKeyId?: SortOrder
    encrypted_key?: SortOrder
    salt?: SortOrder
    iv?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PrivateKeyWhereUniqueInput = Prisma.AtLeast<{
    privateKeyId?: number
    userId?: number
    AND?: PrivateKeyWhereInput | PrivateKeyWhereInput[]
    OR?: PrivateKeyWhereInput[]
    NOT?: PrivateKeyWhereInput | PrivateKeyWhereInput[]
    encrypted_key?: StringFilter<"PrivateKey"> | string
    salt?: StringFilter<"PrivateKey"> | string
    iv?: StringFilter<"PrivateKey"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "privateKeyId" | "userId">

  export type PrivateKeyOrderByWithAggregationInput = {
    privateKeyId?: SortOrder
    encrypted_key?: SortOrder
    salt?: SortOrder
    iv?: SortOrder
    userId?: SortOrder
    _count?: PrivateKeyCountOrderByAggregateInput
    _avg?: PrivateKeyAvgOrderByAggregateInput
    _max?: PrivateKeyMaxOrderByAggregateInput
    _min?: PrivateKeyMinOrderByAggregateInput
    _sum?: PrivateKeySumOrderByAggregateInput
  }

  export type PrivateKeyScalarWhereWithAggregatesInput = {
    AND?: PrivateKeyScalarWhereWithAggregatesInput | PrivateKeyScalarWhereWithAggregatesInput[]
    OR?: PrivateKeyScalarWhereWithAggregatesInput[]
    NOT?: PrivateKeyScalarWhereWithAggregatesInput | PrivateKeyScalarWhereWithAggregatesInput[]
    privateKeyId?: IntWithAggregatesFilter<"PrivateKey"> | number
    encrypted_key?: StringWithAggregatesFilter<"PrivateKey"> | string
    salt?: StringWithAggregatesFilter<"PrivateKey"> | string
    iv?: StringWithAggregatesFilter<"PrivateKey"> | string
    userId?: IntWithAggregatesFilter<"PrivateKey"> | number
  }

  export type UserCreateInput = {
    username: string
    firstname: string
    lastname?: string | null
    password: string
    email: string
    createdAt?: Date | string
    publicKey?: string | null
    Chatrooms?: ChatroomUsersCreateNestedManyWithoutUserInput
    Messages?: MessagesCreateNestedManyWithoutUserInput
    privateKey?: PrivateKeyCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    firstname: string
    lastname?: string | null
    password: string
    email: string
    createdAt?: Date | string
    publicKey?: string | null
    Chatrooms?: ChatroomUsersUncheckedCreateNestedManyWithoutUserInput
    Messages?: MessagesUncheckedCreateNestedManyWithoutUserInput
    privateKey?: PrivateKeyUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    Chatrooms?: ChatroomUsersUpdateManyWithoutUserNestedInput
    Messages?: MessagesUpdateManyWithoutUserNestedInput
    privateKey?: PrivateKeyUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    Chatrooms?: ChatroomUsersUncheckedUpdateManyWithoutUserNestedInput
    Messages?: MessagesUncheckedUpdateManyWithoutUserNestedInput
    privateKey?: PrivateKeyUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    firstname: string
    lastname?: string | null
    password: string
    email: string
    createdAt?: Date | string
    publicKey?: string | null
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatroomsCreateInput = {
    createdAt?: Date | string
    lastMessageAt?: Date | string
    users?: ChatroomUsersCreateNestedManyWithoutChatroomInput
    messages?: MessagesCreateNestedManyWithoutChatroomInput
  }

  export type ChatroomsUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    lastMessageAt?: Date | string
    users?: ChatroomUsersUncheckedCreateNestedManyWithoutChatroomInput
    messages?: MessagesUncheckedCreateNestedManyWithoutChatroomInput
  }

  export type ChatroomsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: ChatroomUsersUpdateManyWithoutChatroomNestedInput
    messages?: MessagesUpdateManyWithoutChatroomNestedInput
  }

  export type ChatroomsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: ChatroomUsersUncheckedUpdateManyWithoutChatroomNestedInput
    messages?: MessagesUncheckedUpdateManyWithoutChatroomNestedInput
  }

  export type ChatroomsCreateManyInput = {
    id?: number
    createdAt?: Date | string
    lastMessageAt?: Date | string
  }

  export type ChatroomsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatroomsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesCreateInput = {
    message: string
    createdAt?: Date | string
    messageFromSender: string
    chatroom: ChatroomsCreateNestedOneWithoutMessagesInput
    user: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessagesUncheckedCreateInput = {
    id?: number
    userId: number
    chatroomId: number
    message: string
    createdAt?: Date | string
    messageFromSender: string
  }

  export type MessagesUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageFromSender?: StringFieldUpdateOperationsInput | string
    chatroom?: ChatroomsUpdateOneRequiredWithoutMessagesNestedInput
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    chatroomId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageFromSender?: StringFieldUpdateOperationsInput | string
  }

  export type MessagesCreateManyInput = {
    id?: number
    userId: number
    chatroomId: number
    message: string
    createdAt?: Date | string
    messageFromSender: string
  }

  export type MessagesUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageFromSender?: StringFieldUpdateOperationsInput | string
  }

  export type MessagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    chatroomId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageFromSender?: StringFieldUpdateOperationsInput | string
  }

  export type ChatroomUsersCreateInput = {
    joinedAt?: Date | string
    chatroom: ChatroomsCreateNestedOneWithoutUsersInput
    user: UserCreateNestedOneWithoutChatroomsInput
  }

  export type ChatroomUsersUncheckedCreateInput = {
    chatroomId: number
    userId: number
    joinedAt?: Date | string
  }

  export type ChatroomUsersUpdateInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatroom?: ChatroomsUpdateOneRequiredWithoutUsersNestedInput
    user?: UserUpdateOneRequiredWithoutChatroomsNestedInput
  }

  export type ChatroomUsersUncheckedUpdateInput = {
    chatroomId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatroomUsersCreateManyInput = {
    chatroomId: number
    userId: number
    joinedAt?: Date | string
  }

  export type ChatroomUsersUpdateManyMutationInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatroomUsersUncheckedUpdateManyInput = {
    chatroomId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateKeyCreateInput = {
    encrypted_key: string
    salt: string
    iv: string
    user: UserCreateNestedOneWithoutPrivateKeyInput
  }

  export type PrivateKeyUncheckedCreateInput = {
    privateKeyId?: number
    encrypted_key: string
    salt: string
    iv: string
    userId: number
  }

  export type PrivateKeyUpdateInput = {
    encrypted_key?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPrivateKeyNestedInput
  }

  export type PrivateKeyUncheckedUpdateInput = {
    privateKeyId?: IntFieldUpdateOperationsInput | number
    encrypted_key?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PrivateKeyCreateManyInput = {
    privateKeyId?: number
    encrypted_key: string
    salt: string
    iv: string
    userId: number
  }

  export type PrivateKeyUpdateManyMutationInput = {
    encrypted_key?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
  }

  export type PrivateKeyUncheckedUpdateManyInput = {
    privateKeyId?: IntFieldUpdateOperationsInput | number
    encrypted_key?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ChatroomUsersListRelationFilter = {
    every?: ChatroomUsersWhereInput
    some?: ChatroomUsersWhereInput
    none?: ChatroomUsersWhereInput
  }

  export type MessagesListRelationFilter = {
    every?: MessagesWhereInput
    some?: MessagesWhereInput
    none?: MessagesWhereInput
  }

  export type PrivateKeyNullableScalarRelationFilter = {
    is?: PrivateKeyWhereInput | null
    isNot?: PrivateKeyWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChatroomUsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    publicKey?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    publicKey?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    publicKey?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ChatroomsCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    lastMessageAt?: SortOrder
  }

  export type ChatroomsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChatroomsMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    lastMessageAt?: SortOrder
  }

  export type ChatroomsMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    lastMessageAt?: SortOrder
  }

  export type ChatroomsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChatroomsScalarRelationFilter = {
    is?: ChatroomsWhereInput
    isNot?: ChatroomsWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MessagesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatroomId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    messageFromSender?: SortOrder
  }

  export type MessagesAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatroomId?: SortOrder
  }

  export type MessagesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatroomId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    messageFromSender?: SortOrder
  }

  export type MessagesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatroomId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    messageFromSender?: SortOrder
  }

  export type MessagesSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatroomId?: SortOrder
  }

  export type ChatroomUsersUserIdChatroomIdCompoundUniqueInput = {
    userId: number
    chatroomId: number
  }

  export type ChatroomUsersCountOrderByAggregateInput = {
    chatroomId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
  }

  export type ChatroomUsersAvgOrderByAggregateInput = {
    chatroomId?: SortOrder
    userId?: SortOrder
  }

  export type ChatroomUsersMaxOrderByAggregateInput = {
    chatroomId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
  }

  export type ChatroomUsersMinOrderByAggregateInput = {
    chatroomId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
  }

  export type ChatroomUsersSumOrderByAggregateInput = {
    chatroomId?: SortOrder
    userId?: SortOrder
  }

  export type PrivateKeyCountOrderByAggregateInput = {
    privateKeyId?: SortOrder
    encrypted_key?: SortOrder
    salt?: SortOrder
    iv?: SortOrder
    userId?: SortOrder
  }

  export type PrivateKeyAvgOrderByAggregateInput = {
    privateKeyId?: SortOrder
    userId?: SortOrder
  }

  export type PrivateKeyMaxOrderByAggregateInput = {
    privateKeyId?: SortOrder
    encrypted_key?: SortOrder
    salt?: SortOrder
    iv?: SortOrder
    userId?: SortOrder
  }

  export type PrivateKeyMinOrderByAggregateInput = {
    privateKeyId?: SortOrder
    encrypted_key?: SortOrder
    salt?: SortOrder
    iv?: SortOrder
    userId?: SortOrder
  }

  export type PrivateKeySumOrderByAggregateInput = {
    privateKeyId?: SortOrder
    userId?: SortOrder
  }

  export type ChatroomUsersCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatroomUsersCreateWithoutUserInput, ChatroomUsersUncheckedCreateWithoutUserInput> | ChatroomUsersCreateWithoutUserInput[] | ChatroomUsersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatroomUsersCreateOrConnectWithoutUserInput | ChatroomUsersCreateOrConnectWithoutUserInput[]
    createMany?: ChatroomUsersCreateManyUserInputEnvelope
    connect?: ChatroomUsersWhereUniqueInput | ChatroomUsersWhereUniqueInput[]
  }

  export type MessagesCreateNestedManyWithoutUserInput = {
    create?: XOR<MessagesCreateWithoutUserInput, MessagesUncheckedCreateWithoutUserInput> | MessagesCreateWithoutUserInput[] | MessagesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutUserInput | MessagesCreateOrConnectWithoutUserInput[]
    createMany?: MessagesCreateManyUserInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type PrivateKeyCreateNestedOneWithoutUserInput = {
    create?: XOR<PrivateKeyCreateWithoutUserInput, PrivateKeyUncheckedCreateWithoutUserInput>
    connectOrCreate?: PrivateKeyCreateOrConnectWithoutUserInput
    connect?: PrivateKeyWhereUniqueInput
  }

  export type ChatroomUsersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatroomUsersCreateWithoutUserInput, ChatroomUsersUncheckedCreateWithoutUserInput> | ChatroomUsersCreateWithoutUserInput[] | ChatroomUsersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatroomUsersCreateOrConnectWithoutUserInput | ChatroomUsersCreateOrConnectWithoutUserInput[]
    createMany?: ChatroomUsersCreateManyUserInputEnvelope
    connect?: ChatroomUsersWhereUniqueInput | ChatroomUsersWhereUniqueInput[]
  }

  export type MessagesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MessagesCreateWithoutUserInput, MessagesUncheckedCreateWithoutUserInput> | MessagesCreateWithoutUserInput[] | MessagesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutUserInput | MessagesCreateOrConnectWithoutUserInput[]
    createMany?: MessagesCreateManyUserInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type PrivateKeyUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PrivateKeyCreateWithoutUserInput, PrivateKeyUncheckedCreateWithoutUserInput>
    connectOrCreate?: PrivateKeyCreateOrConnectWithoutUserInput
    connect?: PrivateKeyWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ChatroomUsersUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatroomUsersCreateWithoutUserInput, ChatroomUsersUncheckedCreateWithoutUserInput> | ChatroomUsersCreateWithoutUserInput[] | ChatroomUsersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatroomUsersCreateOrConnectWithoutUserInput | ChatroomUsersCreateOrConnectWithoutUserInput[]
    upsert?: ChatroomUsersUpsertWithWhereUniqueWithoutUserInput | ChatroomUsersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatroomUsersCreateManyUserInputEnvelope
    set?: ChatroomUsersWhereUniqueInput | ChatroomUsersWhereUniqueInput[]
    disconnect?: ChatroomUsersWhereUniqueInput | ChatroomUsersWhereUniqueInput[]
    delete?: ChatroomUsersWhereUniqueInput | ChatroomUsersWhereUniqueInput[]
    connect?: ChatroomUsersWhereUniqueInput | ChatroomUsersWhereUniqueInput[]
    update?: ChatroomUsersUpdateWithWhereUniqueWithoutUserInput | ChatroomUsersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatroomUsersUpdateManyWithWhereWithoutUserInput | ChatroomUsersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatroomUsersScalarWhereInput | ChatroomUsersScalarWhereInput[]
  }

  export type MessagesUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessagesCreateWithoutUserInput, MessagesUncheckedCreateWithoutUserInput> | MessagesCreateWithoutUserInput[] | MessagesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutUserInput | MessagesCreateOrConnectWithoutUserInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutUserInput | MessagesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessagesCreateManyUserInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutUserInput | MessagesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutUserInput | MessagesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type PrivateKeyUpdateOneWithoutUserNestedInput = {
    create?: XOR<PrivateKeyCreateWithoutUserInput, PrivateKeyUncheckedCreateWithoutUserInput>
    connectOrCreate?: PrivateKeyCreateOrConnectWithoutUserInput
    upsert?: PrivateKeyUpsertWithoutUserInput
    disconnect?: PrivateKeyWhereInput | boolean
    delete?: PrivateKeyWhereInput | boolean
    connect?: PrivateKeyWhereUniqueInput
    update?: XOR<XOR<PrivateKeyUpdateToOneWithWhereWithoutUserInput, PrivateKeyUpdateWithoutUserInput>, PrivateKeyUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChatroomUsersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatroomUsersCreateWithoutUserInput, ChatroomUsersUncheckedCreateWithoutUserInput> | ChatroomUsersCreateWithoutUserInput[] | ChatroomUsersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatroomUsersCreateOrConnectWithoutUserInput | ChatroomUsersCreateOrConnectWithoutUserInput[]
    upsert?: ChatroomUsersUpsertWithWhereUniqueWithoutUserInput | ChatroomUsersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatroomUsersCreateManyUserInputEnvelope
    set?: ChatroomUsersWhereUniqueInput | ChatroomUsersWhereUniqueInput[]
    disconnect?: ChatroomUsersWhereUniqueInput | ChatroomUsersWhereUniqueInput[]
    delete?: ChatroomUsersWhereUniqueInput | ChatroomUsersWhereUniqueInput[]
    connect?: ChatroomUsersWhereUniqueInput | ChatroomUsersWhereUniqueInput[]
    update?: ChatroomUsersUpdateWithWhereUniqueWithoutUserInput | ChatroomUsersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatroomUsersUpdateManyWithWhereWithoutUserInput | ChatroomUsersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatroomUsersScalarWhereInput | ChatroomUsersScalarWhereInput[]
  }

  export type MessagesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessagesCreateWithoutUserInput, MessagesUncheckedCreateWithoutUserInput> | MessagesCreateWithoutUserInput[] | MessagesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutUserInput | MessagesCreateOrConnectWithoutUserInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutUserInput | MessagesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessagesCreateManyUserInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutUserInput | MessagesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutUserInput | MessagesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type PrivateKeyUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PrivateKeyCreateWithoutUserInput, PrivateKeyUncheckedCreateWithoutUserInput>
    connectOrCreate?: PrivateKeyCreateOrConnectWithoutUserInput
    upsert?: PrivateKeyUpsertWithoutUserInput
    disconnect?: PrivateKeyWhereInput | boolean
    delete?: PrivateKeyWhereInput | boolean
    connect?: PrivateKeyWhereUniqueInput
    update?: XOR<XOR<PrivateKeyUpdateToOneWithWhereWithoutUserInput, PrivateKeyUpdateWithoutUserInput>, PrivateKeyUncheckedUpdateWithoutUserInput>
  }

  export type ChatroomUsersCreateNestedManyWithoutChatroomInput = {
    create?: XOR<ChatroomUsersCreateWithoutChatroomInput, ChatroomUsersUncheckedCreateWithoutChatroomInput> | ChatroomUsersCreateWithoutChatroomInput[] | ChatroomUsersUncheckedCreateWithoutChatroomInput[]
    connectOrCreate?: ChatroomUsersCreateOrConnectWithoutChatroomInput | ChatroomUsersCreateOrConnectWithoutChatroomInput[]
    createMany?: ChatroomUsersCreateManyChatroomInputEnvelope
    connect?: ChatroomUsersWhereUniqueInput | ChatroomUsersWhereUniqueInput[]
  }

  export type MessagesCreateNestedManyWithoutChatroomInput = {
    create?: XOR<MessagesCreateWithoutChatroomInput, MessagesUncheckedCreateWithoutChatroomInput> | MessagesCreateWithoutChatroomInput[] | MessagesUncheckedCreateWithoutChatroomInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutChatroomInput | MessagesCreateOrConnectWithoutChatroomInput[]
    createMany?: MessagesCreateManyChatroomInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type ChatroomUsersUncheckedCreateNestedManyWithoutChatroomInput = {
    create?: XOR<ChatroomUsersCreateWithoutChatroomInput, ChatroomUsersUncheckedCreateWithoutChatroomInput> | ChatroomUsersCreateWithoutChatroomInput[] | ChatroomUsersUncheckedCreateWithoutChatroomInput[]
    connectOrCreate?: ChatroomUsersCreateOrConnectWithoutChatroomInput | ChatroomUsersCreateOrConnectWithoutChatroomInput[]
    createMany?: ChatroomUsersCreateManyChatroomInputEnvelope
    connect?: ChatroomUsersWhereUniqueInput | ChatroomUsersWhereUniqueInput[]
  }

  export type MessagesUncheckedCreateNestedManyWithoutChatroomInput = {
    create?: XOR<MessagesCreateWithoutChatroomInput, MessagesUncheckedCreateWithoutChatroomInput> | MessagesCreateWithoutChatroomInput[] | MessagesUncheckedCreateWithoutChatroomInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutChatroomInput | MessagesCreateOrConnectWithoutChatroomInput[]
    createMany?: MessagesCreateManyChatroomInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type ChatroomUsersUpdateManyWithoutChatroomNestedInput = {
    create?: XOR<ChatroomUsersCreateWithoutChatroomInput, ChatroomUsersUncheckedCreateWithoutChatroomInput> | ChatroomUsersCreateWithoutChatroomInput[] | ChatroomUsersUncheckedCreateWithoutChatroomInput[]
    connectOrCreate?: ChatroomUsersCreateOrConnectWithoutChatroomInput | ChatroomUsersCreateOrConnectWithoutChatroomInput[]
    upsert?: ChatroomUsersUpsertWithWhereUniqueWithoutChatroomInput | ChatroomUsersUpsertWithWhereUniqueWithoutChatroomInput[]
    createMany?: ChatroomUsersCreateManyChatroomInputEnvelope
    set?: ChatroomUsersWhereUniqueInput | ChatroomUsersWhereUniqueInput[]
    disconnect?: ChatroomUsersWhereUniqueInput | ChatroomUsersWhereUniqueInput[]
    delete?: ChatroomUsersWhereUniqueInput | ChatroomUsersWhereUniqueInput[]
    connect?: ChatroomUsersWhereUniqueInput | ChatroomUsersWhereUniqueInput[]
    update?: ChatroomUsersUpdateWithWhereUniqueWithoutChatroomInput | ChatroomUsersUpdateWithWhereUniqueWithoutChatroomInput[]
    updateMany?: ChatroomUsersUpdateManyWithWhereWithoutChatroomInput | ChatroomUsersUpdateManyWithWhereWithoutChatroomInput[]
    deleteMany?: ChatroomUsersScalarWhereInput | ChatroomUsersScalarWhereInput[]
  }

  export type MessagesUpdateManyWithoutChatroomNestedInput = {
    create?: XOR<MessagesCreateWithoutChatroomInput, MessagesUncheckedCreateWithoutChatroomInput> | MessagesCreateWithoutChatroomInput[] | MessagesUncheckedCreateWithoutChatroomInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutChatroomInput | MessagesCreateOrConnectWithoutChatroomInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutChatroomInput | MessagesUpsertWithWhereUniqueWithoutChatroomInput[]
    createMany?: MessagesCreateManyChatroomInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutChatroomInput | MessagesUpdateWithWhereUniqueWithoutChatroomInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutChatroomInput | MessagesUpdateManyWithWhereWithoutChatroomInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type ChatroomUsersUncheckedUpdateManyWithoutChatroomNestedInput = {
    create?: XOR<ChatroomUsersCreateWithoutChatroomInput, ChatroomUsersUncheckedCreateWithoutChatroomInput> | ChatroomUsersCreateWithoutChatroomInput[] | ChatroomUsersUncheckedCreateWithoutChatroomInput[]
    connectOrCreate?: ChatroomUsersCreateOrConnectWithoutChatroomInput | ChatroomUsersCreateOrConnectWithoutChatroomInput[]
    upsert?: ChatroomUsersUpsertWithWhereUniqueWithoutChatroomInput | ChatroomUsersUpsertWithWhereUniqueWithoutChatroomInput[]
    createMany?: ChatroomUsersCreateManyChatroomInputEnvelope
    set?: ChatroomUsersWhereUniqueInput | ChatroomUsersWhereUniqueInput[]
    disconnect?: ChatroomUsersWhereUniqueInput | ChatroomUsersWhereUniqueInput[]
    delete?: ChatroomUsersWhereUniqueInput | ChatroomUsersWhereUniqueInput[]
    connect?: ChatroomUsersWhereUniqueInput | ChatroomUsersWhereUniqueInput[]
    update?: ChatroomUsersUpdateWithWhereUniqueWithoutChatroomInput | ChatroomUsersUpdateWithWhereUniqueWithoutChatroomInput[]
    updateMany?: ChatroomUsersUpdateManyWithWhereWithoutChatroomInput | ChatroomUsersUpdateManyWithWhereWithoutChatroomInput[]
    deleteMany?: ChatroomUsersScalarWhereInput | ChatroomUsersScalarWhereInput[]
  }

  export type MessagesUncheckedUpdateManyWithoutChatroomNestedInput = {
    create?: XOR<MessagesCreateWithoutChatroomInput, MessagesUncheckedCreateWithoutChatroomInput> | MessagesCreateWithoutChatroomInput[] | MessagesUncheckedCreateWithoutChatroomInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutChatroomInput | MessagesCreateOrConnectWithoutChatroomInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutChatroomInput | MessagesUpsertWithWhereUniqueWithoutChatroomInput[]
    createMany?: MessagesCreateManyChatroomInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutChatroomInput | MessagesUpdateWithWhereUniqueWithoutChatroomInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutChatroomInput | MessagesUpdateManyWithWhereWithoutChatroomInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type ChatroomsCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatroomsCreateWithoutMessagesInput, ChatroomsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatroomsCreateOrConnectWithoutMessagesInput
    connect?: ChatroomsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type ChatroomsUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatroomsCreateWithoutMessagesInput, ChatroomsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatroomsCreateOrConnectWithoutMessagesInput
    upsert?: ChatroomsUpsertWithoutMessagesInput
    connect?: ChatroomsWhereUniqueInput
    update?: XOR<XOR<ChatroomsUpdateToOneWithWhereWithoutMessagesInput, ChatroomsUpdateWithoutMessagesInput>, ChatroomsUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatroomsCreateNestedOneWithoutUsersInput = {
    create?: XOR<ChatroomsCreateWithoutUsersInput, ChatroomsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ChatroomsCreateOrConnectWithoutUsersInput
    connect?: ChatroomsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChatroomsInput = {
    create?: XOR<UserCreateWithoutChatroomsInput, UserUncheckedCreateWithoutChatroomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatroomsInput
    connect?: UserWhereUniqueInput
  }

  export type ChatroomsUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<ChatroomsCreateWithoutUsersInput, ChatroomsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ChatroomsCreateOrConnectWithoutUsersInput
    upsert?: ChatroomsUpsertWithoutUsersInput
    connect?: ChatroomsWhereUniqueInput
    update?: XOR<XOR<ChatroomsUpdateToOneWithWhereWithoutUsersInput, ChatroomsUpdateWithoutUsersInput>, ChatroomsUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneRequiredWithoutChatroomsNestedInput = {
    create?: XOR<UserCreateWithoutChatroomsInput, UserUncheckedCreateWithoutChatroomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatroomsInput
    upsert?: UserUpsertWithoutChatroomsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatroomsInput, UserUpdateWithoutChatroomsInput>, UserUncheckedUpdateWithoutChatroomsInput>
  }

  export type UserCreateNestedOneWithoutPrivateKeyInput = {
    create?: XOR<UserCreateWithoutPrivateKeyInput, UserUncheckedCreateWithoutPrivateKeyInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrivateKeyInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPrivateKeyNestedInput = {
    create?: XOR<UserCreateWithoutPrivateKeyInput, UserUncheckedCreateWithoutPrivateKeyInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrivateKeyInput
    upsert?: UserUpsertWithoutPrivateKeyInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPrivateKeyInput, UserUpdateWithoutPrivateKeyInput>, UserUncheckedUpdateWithoutPrivateKeyInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ChatroomUsersCreateWithoutUserInput = {
    joinedAt?: Date | string
    chatroom: ChatroomsCreateNestedOneWithoutUsersInput
  }

  export type ChatroomUsersUncheckedCreateWithoutUserInput = {
    chatroomId: number
    joinedAt?: Date | string
  }

  export type ChatroomUsersCreateOrConnectWithoutUserInput = {
    where: ChatroomUsersWhereUniqueInput
    create: XOR<ChatroomUsersCreateWithoutUserInput, ChatroomUsersUncheckedCreateWithoutUserInput>
  }

  export type ChatroomUsersCreateManyUserInputEnvelope = {
    data: ChatroomUsersCreateManyUserInput | ChatroomUsersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessagesCreateWithoutUserInput = {
    message: string
    createdAt?: Date | string
    messageFromSender: string
    chatroom: ChatroomsCreateNestedOneWithoutMessagesInput
  }

  export type MessagesUncheckedCreateWithoutUserInput = {
    id?: number
    chatroomId: number
    message: string
    createdAt?: Date | string
    messageFromSender: string
  }

  export type MessagesCreateOrConnectWithoutUserInput = {
    where: MessagesWhereUniqueInput
    create: XOR<MessagesCreateWithoutUserInput, MessagesUncheckedCreateWithoutUserInput>
  }

  export type MessagesCreateManyUserInputEnvelope = {
    data: MessagesCreateManyUserInput | MessagesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PrivateKeyCreateWithoutUserInput = {
    encrypted_key: string
    salt: string
    iv: string
  }

  export type PrivateKeyUncheckedCreateWithoutUserInput = {
    privateKeyId?: number
    encrypted_key: string
    salt: string
    iv: string
  }

  export type PrivateKeyCreateOrConnectWithoutUserInput = {
    where: PrivateKeyWhereUniqueInput
    create: XOR<PrivateKeyCreateWithoutUserInput, PrivateKeyUncheckedCreateWithoutUserInput>
  }

  export type ChatroomUsersUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatroomUsersWhereUniqueInput
    update: XOR<ChatroomUsersUpdateWithoutUserInput, ChatroomUsersUncheckedUpdateWithoutUserInput>
    create: XOR<ChatroomUsersCreateWithoutUserInput, ChatroomUsersUncheckedCreateWithoutUserInput>
  }

  export type ChatroomUsersUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatroomUsersWhereUniqueInput
    data: XOR<ChatroomUsersUpdateWithoutUserInput, ChatroomUsersUncheckedUpdateWithoutUserInput>
  }

  export type ChatroomUsersUpdateManyWithWhereWithoutUserInput = {
    where: ChatroomUsersScalarWhereInput
    data: XOR<ChatroomUsersUpdateManyMutationInput, ChatroomUsersUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatroomUsersScalarWhereInput = {
    AND?: ChatroomUsersScalarWhereInput | ChatroomUsersScalarWhereInput[]
    OR?: ChatroomUsersScalarWhereInput[]
    NOT?: ChatroomUsersScalarWhereInput | ChatroomUsersScalarWhereInput[]
    chatroomId?: IntFilter<"ChatroomUsers"> | number
    userId?: IntFilter<"ChatroomUsers"> | number
    joinedAt?: DateTimeFilter<"ChatroomUsers"> | Date | string
  }

  export type MessagesUpsertWithWhereUniqueWithoutUserInput = {
    where: MessagesWhereUniqueInput
    update: XOR<MessagesUpdateWithoutUserInput, MessagesUncheckedUpdateWithoutUserInput>
    create: XOR<MessagesCreateWithoutUserInput, MessagesUncheckedCreateWithoutUserInput>
  }

  export type MessagesUpdateWithWhereUniqueWithoutUserInput = {
    where: MessagesWhereUniqueInput
    data: XOR<MessagesUpdateWithoutUserInput, MessagesUncheckedUpdateWithoutUserInput>
  }

  export type MessagesUpdateManyWithWhereWithoutUserInput = {
    where: MessagesScalarWhereInput
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyWithoutUserInput>
  }

  export type MessagesScalarWhereInput = {
    AND?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
    OR?: MessagesScalarWhereInput[]
    NOT?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
    id?: IntFilter<"Messages"> | number
    userId?: IntFilter<"Messages"> | number
    chatroomId?: IntFilter<"Messages"> | number
    message?: StringFilter<"Messages"> | string
    createdAt?: DateTimeFilter<"Messages"> | Date | string
    messageFromSender?: StringFilter<"Messages"> | string
  }

  export type PrivateKeyUpsertWithoutUserInput = {
    update: XOR<PrivateKeyUpdateWithoutUserInput, PrivateKeyUncheckedUpdateWithoutUserInput>
    create: XOR<PrivateKeyCreateWithoutUserInput, PrivateKeyUncheckedCreateWithoutUserInput>
    where?: PrivateKeyWhereInput
  }

  export type PrivateKeyUpdateToOneWithWhereWithoutUserInput = {
    where?: PrivateKeyWhereInput
    data: XOR<PrivateKeyUpdateWithoutUserInput, PrivateKeyUncheckedUpdateWithoutUserInput>
  }

  export type PrivateKeyUpdateWithoutUserInput = {
    encrypted_key?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
  }

  export type PrivateKeyUncheckedUpdateWithoutUserInput = {
    privateKeyId?: IntFieldUpdateOperationsInput | number
    encrypted_key?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
  }

  export type ChatroomUsersCreateWithoutChatroomInput = {
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutChatroomsInput
  }

  export type ChatroomUsersUncheckedCreateWithoutChatroomInput = {
    userId: number
    joinedAt?: Date | string
  }

  export type ChatroomUsersCreateOrConnectWithoutChatroomInput = {
    where: ChatroomUsersWhereUniqueInput
    create: XOR<ChatroomUsersCreateWithoutChatroomInput, ChatroomUsersUncheckedCreateWithoutChatroomInput>
  }

  export type ChatroomUsersCreateManyChatroomInputEnvelope = {
    data: ChatroomUsersCreateManyChatroomInput | ChatroomUsersCreateManyChatroomInput[]
    skipDuplicates?: boolean
  }

  export type MessagesCreateWithoutChatroomInput = {
    message: string
    createdAt?: Date | string
    messageFromSender: string
    user: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessagesUncheckedCreateWithoutChatroomInput = {
    id?: number
    userId: number
    message: string
    createdAt?: Date | string
    messageFromSender: string
  }

  export type MessagesCreateOrConnectWithoutChatroomInput = {
    where: MessagesWhereUniqueInput
    create: XOR<MessagesCreateWithoutChatroomInput, MessagesUncheckedCreateWithoutChatroomInput>
  }

  export type MessagesCreateManyChatroomInputEnvelope = {
    data: MessagesCreateManyChatroomInput | MessagesCreateManyChatroomInput[]
    skipDuplicates?: boolean
  }

  export type ChatroomUsersUpsertWithWhereUniqueWithoutChatroomInput = {
    where: ChatroomUsersWhereUniqueInput
    update: XOR<ChatroomUsersUpdateWithoutChatroomInput, ChatroomUsersUncheckedUpdateWithoutChatroomInput>
    create: XOR<ChatroomUsersCreateWithoutChatroomInput, ChatroomUsersUncheckedCreateWithoutChatroomInput>
  }

  export type ChatroomUsersUpdateWithWhereUniqueWithoutChatroomInput = {
    where: ChatroomUsersWhereUniqueInput
    data: XOR<ChatroomUsersUpdateWithoutChatroomInput, ChatroomUsersUncheckedUpdateWithoutChatroomInput>
  }

  export type ChatroomUsersUpdateManyWithWhereWithoutChatroomInput = {
    where: ChatroomUsersScalarWhereInput
    data: XOR<ChatroomUsersUpdateManyMutationInput, ChatroomUsersUncheckedUpdateManyWithoutChatroomInput>
  }

  export type MessagesUpsertWithWhereUniqueWithoutChatroomInput = {
    where: MessagesWhereUniqueInput
    update: XOR<MessagesUpdateWithoutChatroomInput, MessagesUncheckedUpdateWithoutChatroomInput>
    create: XOR<MessagesCreateWithoutChatroomInput, MessagesUncheckedCreateWithoutChatroomInput>
  }

  export type MessagesUpdateWithWhereUniqueWithoutChatroomInput = {
    where: MessagesWhereUniqueInput
    data: XOR<MessagesUpdateWithoutChatroomInput, MessagesUncheckedUpdateWithoutChatroomInput>
  }

  export type MessagesUpdateManyWithWhereWithoutChatroomInput = {
    where: MessagesScalarWhereInput
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyWithoutChatroomInput>
  }

  export type ChatroomsCreateWithoutMessagesInput = {
    createdAt?: Date | string
    lastMessageAt?: Date | string
    users?: ChatroomUsersCreateNestedManyWithoutChatroomInput
  }

  export type ChatroomsUncheckedCreateWithoutMessagesInput = {
    id?: number
    createdAt?: Date | string
    lastMessageAt?: Date | string
    users?: ChatroomUsersUncheckedCreateNestedManyWithoutChatroomInput
  }

  export type ChatroomsCreateOrConnectWithoutMessagesInput = {
    where: ChatroomsWhereUniqueInput
    create: XOR<ChatroomsCreateWithoutMessagesInput, ChatroomsUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutMessagesInput = {
    username: string
    firstname: string
    lastname?: string | null
    password: string
    email: string
    createdAt?: Date | string
    publicKey?: string | null
    Chatrooms?: ChatroomUsersCreateNestedManyWithoutUserInput
    privateKey?: PrivateKeyCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: number
    username: string
    firstname: string
    lastname?: string | null
    password: string
    email: string
    createdAt?: Date | string
    publicKey?: string | null
    Chatrooms?: ChatroomUsersUncheckedCreateNestedManyWithoutUserInput
    privateKey?: PrivateKeyUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type ChatroomsUpsertWithoutMessagesInput = {
    update: XOR<ChatroomsUpdateWithoutMessagesInput, ChatroomsUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatroomsCreateWithoutMessagesInput, ChatroomsUncheckedCreateWithoutMessagesInput>
    where?: ChatroomsWhereInput
  }

  export type ChatroomsUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatroomsWhereInput
    data: XOR<ChatroomsUpdateWithoutMessagesInput, ChatroomsUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatroomsUpdateWithoutMessagesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: ChatroomUsersUpdateManyWithoutChatroomNestedInput
  }

  export type ChatroomsUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: ChatroomUsersUncheckedUpdateManyWithoutChatroomNestedInput
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    Chatrooms?: ChatroomUsersUpdateManyWithoutUserNestedInput
    privateKey?: PrivateKeyUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    Chatrooms?: ChatroomUsersUncheckedUpdateManyWithoutUserNestedInput
    privateKey?: PrivateKeyUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ChatroomsCreateWithoutUsersInput = {
    createdAt?: Date | string
    lastMessageAt?: Date | string
    messages?: MessagesCreateNestedManyWithoutChatroomInput
  }

  export type ChatroomsUncheckedCreateWithoutUsersInput = {
    id?: number
    createdAt?: Date | string
    lastMessageAt?: Date | string
    messages?: MessagesUncheckedCreateNestedManyWithoutChatroomInput
  }

  export type ChatroomsCreateOrConnectWithoutUsersInput = {
    where: ChatroomsWhereUniqueInput
    create: XOR<ChatroomsCreateWithoutUsersInput, ChatroomsUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutChatroomsInput = {
    username: string
    firstname: string
    lastname?: string | null
    password: string
    email: string
    createdAt?: Date | string
    publicKey?: string | null
    Messages?: MessagesCreateNestedManyWithoutUserInput
    privateKey?: PrivateKeyCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatroomsInput = {
    id?: number
    username: string
    firstname: string
    lastname?: string | null
    password: string
    email: string
    createdAt?: Date | string
    publicKey?: string | null
    Messages?: MessagesUncheckedCreateNestedManyWithoutUserInput
    privateKey?: PrivateKeyUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatroomsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatroomsInput, UserUncheckedCreateWithoutChatroomsInput>
  }

  export type ChatroomsUpsertWithoutUsersInput = {
    update: XOR<ChatroomsUpdateWithoutUsersInput, ChatroomsUncheckedUpdateWithoutUsersInput>
    create: XOR<ChatroomsCreateWithoutUsersInput, ChatroomsUncheckedCreateWithoutUsersInput>
    where?: ChatroomsWhereInput
  }

  export type ChatroomsUpdateToOneWithWhereWithoutUsersInput = {
    where?: ChatroomsWhereInput
    data: XOR<ChatroomsUpdateWithoutUsersInput, ChatroomsUncheckedUpdateWithoutUsersInput>
  }

  export type ChatroomsUpdateWithoutUsersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessagesUpdateManyWithoutChatroomNestedInput
  }

  export type ChatroomsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessagesUncheckedUpdateManyWithoutChatroomNestedInput
  }

  export type UserUpsertWithoutChatroomsInput = {
    update: XOR<UserUpdateWithoutChatroomsInput, UserUncheckedUpdateWithoutChatroomsInput>
    create: XOR<UserCreateWithoutChatroomsInput, UserUncheckedCreateWithoutChatroomsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatroomsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatroomsInput, UserUncheckedUpdateWithoutChatroomsInput>
  }

  export type UserUpdateWithoutChatroomsInput = {
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    Messages?: MessagesUpdateManyWithoutUserNestedInput
    privateKey?: PrivateKeyUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatroomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    Messages?: MessagesUncheckedUpdateManyWithoutUserNestedInput
    privateKey?: PrivateKeyUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutPrivateKeyInput = {
    username: string
    firstname: string
    lastname?: string | null
    password: string
    email: string
    createdAt?: Date | string
    publicKey?: string | null
    Chatrooms?: ChatroomUsersCreateNestedManyWithoutUserInput
    Messages?: MessagesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPrivateKeyInput = {
    id?: number
    username: string
    firstname: string
    lastname?: string | null
    password: string
    email: string
    createdAt?: Date | string
    publicKey?: string | null
    Chatrooms?: ChatroomUsersUncheckedCreateNestedManyWithoutUserInput
    Messages?: MessagesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPrivateKeyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPrivateKeyInput, UserUncheckedCreateWithoutPrivateKeyInput>
  }

  export type UserUpsertWithoutPrivateKeyInput = {
    update: XOR<UserUpdateWithoutPrivateKeyInput, UserUncheckedUpdateWithoutPrivateKeyInput>
    create: XOR<UserCreateWithoutPrivateKeyInput, UserUncheckedCreateWithoutPrivateKeyInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPrivateKeyInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPrivateKeyInput, UserUncheckedUpdateWithoutPrivateKeyInput>
  }

  export type UserUpdateWithoutPrivateKeyInput = {
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    Chatrooms?: ChatroomUsersUpdateManyWithoutUserNestedInput
    Messages?: MessagesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPrivateKeyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    Chatrooms?: ChatroomUsersUncheckedUpdateManyWithoutUserNestedInput
    Messages?: MessagesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatroomUsersCreateManyUserInput = {
    chatroomId: number
    joinedAt?: Date | string
  }

  export type MessagesCreateManyUserInput = {
    id?: number
    chatroomId: number
    message: string
    createdAt?: Date | string
    messageFromSender: string
  }

  export type ChatroomUsersUpdateWithoutUserInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatroom?: ChatroomsUpdateOneRequiredWithoutUsersNestedInput
  }

  export type ChatroomUsersUncheckedUpdateWithoutUserInput = {
    chatroomId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatroomUsersUncheckedUpdateManyWithoutUserInput = {
    chatroomId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesUpdateWithoutUserInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageFromSender?: StringFieldUpdateOperationsInput | string
    chatroom?: ChatroomsUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessagesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatroomId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageFromSender?: StringFieldUpdateOperationsInput | string
  }

  export type MessagesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatroomId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageFromSender?: StringFieldUpdateOperationsInput | string
  }

  export type ChatroomUsersCreateManyChatroomInput = {
    userId: number
    joinedAt?: Date | string
  }

  export type MessagesCreateManyChatroomInput = {
    id?: number
    userId: number
    message: string
    createdAt?: Date | string
    messageFromSender: string
  }

  export type ChatroomUsersUpdateWithoutChatroomInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatroomsNestedInput
  }

  export type ChatroomUsersUncheckedUpdateWithoutChatroomInput = {
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatroomUsersUncheckedUpdateManyWithoutChatroomInput = {
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesUpdateWithoutChatroomInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageFromSender?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessagesUncheckedUpdateWithoutChatroomInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageFromSender?: StringFieldUpdateOperationsInput | string
  }

  export type MessagesUncheckedUpdateManyWithoutChatroomInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageFromSender?: StringFieldUpdateOperationsInput | string
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