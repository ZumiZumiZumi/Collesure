
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model follows
 * 
 */
export type follows = $Result.DefaultSelection<Prisma.$followsPayload>
/**
 * Model tags
 * 
 */
export type tags = $Result.DefaultSelection<Prisma.$tagsPayload>
/**
 * Model articles
 * 
 */
export type articles = $Result.DefaultSelection<Prisma.$articlesPayload>
/**
 * Model goods
 * 
 */
export type goods = $Result.DefaultSelection<Prisma.$goodsPayload>
/**
 * Model reads
 * 
 */
export type reads = $Result.DefaultSelection<Prisma.$readsPayload>
/**
 * Model maintags
 * 
 */
export type maintags = $Result.DefaultSelection<Prisma.$maintagsPayload>
/**
 * Model subtags
 * 
 */
export type subtags = $Result.DefaultSelection<Prisma.$subtagsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;

  /**
   * `prisma.follows`: Exposes CRUD operations for the **follows** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Follows
    * const follows = await prisma.follows.findMany()
    * ```
    */
  get follows(): Prisma.followsDelegate<ExtArgs>;

  /**
   * `prisma.tags`: Exposes CRUD operations for the **tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tags.findMany()
    * ```
    */
  get tags(): Prisma.tagsDelegate<ExtArgs>;

  /**
   * `prisma.articles`: Exposes CRUD operations for the **articles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.articles.findMany()
    * ```
    */
  get articles(): Prisma.articlesDelegate<ExtArgs>;

  /**
   * `prisma.goods`: Exposes CRUD operations for the **goods** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Goods
    * const goods = await prisma.goods.findMany()
    * ```
    */
  get goods(): Prisma.goodsDelegate<ExtArgs>;

  /**
   * `prisma.reads`: Exposes CRUD operations for the **reads** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reads
    * const reads = await prisma.reads.findMany()
    * ```
    */
  get reads(): Prisma.readsDelegate<ExtArgs>;

  /**
   * `prisma.maintags`: Exposes CRUD operations for the **maintags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Maintags
    * const maintags = await prisma.maintags.findMany()
    * ```
    */
  get maintags(): Prisma.maintagsDelegate<ExtArgs>;

  /**
   * `prisma.subtags`: Exposes CRUD operations for the **subtags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subtags
    * const subtags = await prisma.subtags.findMany()
    * ```
    */
  get subtags(): Prisma.subtagsDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.6.0
   * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    users: 'users',
    follows: 'follows',
    tags: 'tags',
    articles: 'articles',
    goods: 'goods',
    reads: 'reads',
    maintags: 'maintags',
    subtags: 'subtags'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'users' | 'follows' | 'tags' | 'articles' | 'goods' | 'reads' | 'maintags' | 'subtags'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      follows: {
        payload: Prisma.$followsPayload<ExtArgs>
        fields: Prisma.followsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.followsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$followsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.followsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$followsPayload>
          }
          findFirst: {
            args: Prisma.followsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$followsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.followsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$followsPayload>
          }
          findMany: {
            args: Prisma.followsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$followsPayload>[]
          }
          create: {
            args: Prisma.followsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$followsPayload>
          }
          createMany: {
            args: Prisma.followsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.followsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$followsPayload>
          }
          update: {
            args: Prisma.followsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$followsPayload>
          }
          deleteMany: {
            args: Prisma.followsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.followsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.followsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$followsPayload>
          }
          aggregate: {
            args: Prisma.FollowsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFollows>
          }
          groupBy: {
            args: Prisma.followsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FollowsGroupByOutputType>[]
          }
          count: {
            args: Prisma.followsCountArgs<ExtArgs>,
            result: $Utils.Optional<FollowsCountAggregateOutputType> | number
          }
        }
      }
      tags: {
        payload: Prisma.$tagsPayload<ExtArgs>
        fields: Prisma.tagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tagsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tagsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          findFirst: {
            args: Prisma.tagsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tagsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          findMany: {
            args: Prisma.tagsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          create: {
            args: Prisma.tagsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          createMany: {
            args: Prisma.tagsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.tagsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          update: {
            args: Prisma.tagsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          deleteMany: {
            args: Prisma.tagsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.tagsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.tagsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          aggregate: {
            args: Prisma.TagsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTags>
          }
          groupBy: {
            args: Prisma.tagsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.tagsCountArgs<ExtArgs>,
            result: $Utils.Optional<TagsCountAggregateOutputType> | number
          }
        }
      }
      articles: {
        payload: Prisma.$articlesPayload<ExtArgs>
        fields: Prisma.articlesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.articlesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articlesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.articlesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>
          }
          findFirst: {
            args: Prisma.articlesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articlesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.articlesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>
          }
          findMany: {
            args: Prisma.articlesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>[]
          }
          create: {
            args: Prisma.articlesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>
          }
          createMany: {
            args: Prisma.articlesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.articlesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>
          }
          update: {
            args: Prisma.articlesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>
          }
          deleteMany: {
            args: Prisma.articlesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.articlesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.articlesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>
          }
          aggregate: {
            args: Prisma.ArticlesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateArticles>
          }
          groupBy: {
            args: Prisma.articlesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ArticlesGroupByOutputType>[]
          }
          count: {
            args: Prisma.articlesCountArgs<ExtArgs>,
            result: $Utils.Optional<ArticlesCountAggregateOutputType> | number
          }
        }
      }
      goods: {
        payload: Prisma.$goodsPayload<ExtArgs>
        fields: Prisma.goodsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.goodsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$goodsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.goodsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$goodsPayload>
          }
          findFirst: {
            args: Prisma.goodsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$goodsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.goodsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$goodsPayload>
          }
          findMany: {
            args: Prisma.goodsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$goodsPayload>[]
          }
          create: {
            args: Prisma.goodsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$goodsPayload>
          }
          createMany: {
            args: Prisma.goodsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.goodsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$goodsPayload>
          }
          update: {
            args: Prisma.goodsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$goodsPayload>
          }
          deleteMany: {
            args: Prisma.goodsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.goodsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.goodsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$goodsPayload>
          }
          aggregate: {
            args: Prisma.GoodsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGoods>
          }
          groupBy: {
            args: Prisma.goodsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GoodsGroupByOutputType>[]
          }
          count: {
            args: Prisma.goodsCountArgs<ExtArgs>,
            result: $Utils.Optional<GoodsCountAggregateOutputType> | number
          }
        }
      }
      reads: {
        payload: Prisma.$readsPayload<ExtArgs>
        fields: Prisma.readsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.readsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$readsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.readsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$readsPayload>
          }
          findFirst: {
            args: Prisma.readsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$readsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.readsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$readsPayload>
          }
          findMany: {
            args: Prisma.readsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$readsPayload>[]
          }
          create: {
            args: Prisma.readsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$readsPayload>
          }
          createMany: {
            args: Prisma.readsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.readsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$readsPayload>
          }
          update: {
            args: Prisma.readsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$readsPayload>
          }
          deleteMany: {
            args: Prisma.readsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.readsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.readsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$readsPayload>
          }
          aggregate: {
            args: Prisma.ReadsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReads>
          }
          groupBy: {
            args: Prisma.readsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReadsGroupByOutputType>[]
          }
          count: {
            args: Prisma.readsCountArgs<ExtArgs>,
            result: $Utils.Optional<ReadsCountAggregateOutputType> | number
          }
        }
      }
      maintags: {
        payload: Prisma.$maintagsPayload<ExtArgs>
        fields: Prisma.maintagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.maintagsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$maintagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.maintagsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$maintagsPayload>
          }
          findFirst: {
            args: Prisma.maintagsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$maintagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.maintagsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$maintagsPayload>
          }
          findMany: {
            args: Prisma.maintagsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$maintagsPayload>[]
          }
          create: {
            args: Prisma.maintagsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$maintagsPayload>
          }
          createMany: {
            args: Prisma.maintagsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.maintagsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$maintagsPayload>
          }
          update: {
            args: Prisma.maintagsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$maintagsPayload>
          }
          deleteMany: {
            args: Prisma.maintagsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.maintagsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.maintagsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$maintagsPayload>
          }
          aggregate: {
            args: Prisma.MaintagsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMaintags>
          }
          groupBy: {
            args: Prisma.maintagsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MaintagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.maintagsCountArgs<ExtArgs>,
            result: $Utils.Optional<MaintagsCountAggregateOutputType> | number
          }
        }
      }
      subtags: {
        payload: Prisma.$subtagsPayload<ExtArgs>
        fields: Prisma.subtagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.subtagsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subtagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.subtagsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subtagsPayload>
          }
          findFirst: {
            args: Prisma.subtagsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subtagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.subtagsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subtagsPayload>
          }
          findMany: {
            args: Prisma.subtagsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subtagsPayload>[]
          }
          create: {
            args: Prisma.subtagsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subtagsPayload>
          }
          createMany: {
            args: Prisma.subtagsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.subtagsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subtagsPayload>
          }
          update: {
            args: Prisma.subtagsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subtagsPayload>
          }
          deleteMany: {
            args: Prisma.subtagsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.subtagsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.subtagsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subtagsPayload>
          }
          aggregate: {
            args: Prisma.SubtagsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSubtags>
          }
          groupBy: {
            args: Prisma.subtagsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SubtagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.subtagsCountArgs<ExtArgs>,
            result: $Utils.Optional<SubtagsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    follow: number
    article: number
    tag: number
    good: number
    read: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    follow?: boolean | UsersCountOutputTypeCountFollowArgs
    article?: boolean | UsersCountOutputTypeCountArticleArgs
    tag?: boolean | UsersCountOutputTypeCountTagArgs
    good?: boolean | UsersCountOutputTypeCountGoodArgs
    read?: boolean | UsersCountOutputTypeCountReadArgs
  }

  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFollowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: followsWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountArticleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: articlesWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tagsWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountGoodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: goodsWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: readsWhereInput
  }



  /**
   * Count Type TagsCountOutputType
   */

  export type TagsCountOutputType = {
    subtag: number
  }

  export type TagsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subtag?: boolean | TagsCountOutputTypeCountSubtagArgs
  }

  // Custom InputTypes

  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsCountOutputType
     */
    select?: TagsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeCountSubtagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subtagsWhereInput
  }



  /**
   * Count Type ArticlesCountOutputType
   */

  export type ArticlesCountOutputType = {
    subtag: number
    read: number
    good: number
  }

  export type ArticlesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subtag?: boolean | ArticlesCountOutputTypeCountSubtagArgs
    read?: boolean | ArticlesCountOutputTypeCountReadArgs
    good?: boolean | ArticlesCountOutputTypeCountGoodArgs
  }

  // Custom InputTypes

  /**
   * ArticlesCountOutputType without action
   */
  export type ArticlesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticlesCountOutputType
     */
    select?: ArticlesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ArticlesCountOutputType without action
   */
  export type ArticlesCountOutputTypeCountSubtagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subtagsWhereInput
  }


  /**
   * ArticlesCountOutputType without action
   */
  export type ArticlesCountOutputTypeCountReadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: readsWhereInput
  }


  /**
   * ArticlesCountOutputType without action
   */
  export type ArticlesCountOutputTypeCountGoodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: goodsWhereInput
  }



  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    user_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: number | null
    user_name: string | null
    user_mail: string | null
    user_pass: string | null
    user_created: Date | null
    user_icon: string | null
    user_coment: string | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: number | null
    user_name: string | null
    user_mail: string | null
    user_pass: string | null
    user_created: Date | null
    user_icon: string | null
    user_coment: string | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    user_name: number
    user_mail: number
    user_pass: number
    user_created: number
    user_icon: number
    user_coment: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    user_id?: true
  }

  export type UsersSumAggregateInputType = {
    user_id?: true
  }

  export type UsersMinAggregateInputType = {
    user_id?: true
    user_name?: true
    user_mail?: true
    user_pass?: true
    user_created?: true
    user_icon?: true
    user_coment?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    user_name?: true
    user_mail?: true
    user_pass?: true
    user_created?: true
    user_icon?: true
    user_coment?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    user_name?: true
    user_mail?: true
    user_pass?: true
    user_created?: true
    user_icon?: true
    user_coment?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: number
    user_name: string
    user_mail: string
    user_pass: string
    user_created: Date
    user_icon: string
    user_coment: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    user_name?: boolean
    user_mail?: boolean
    user_pass?: boolean
    user_created?: boolean
    user_icon?: boolean
    user_coment?: boolean
    follow?: boolean | users$followArgs<ExtArgs>
    article?: boolean | users$articleArgs<ExtArgs>
    tag?: boolean | users$tagArgs<ExtArgs>
    good?: boolean | users$goodArgs<ExtArgs>
    read?: boolean | users$readArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    user_id?: boolean
    user_name?: boolean
    user_mail?: boolean
    user_pass?: boolean
    user_created?: boolean
    user_icon?: boolean
    user_coment?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    follow?: boolean | users$followArgs<ExtArgs>
    article?: boolean | users$articleArgs<ExtArgs>
    tag?: boolean | users$tagArgs<ExtArgs>
    good?: boolean | users$goodArgs<ExtArgs>
    read?: boolean | users$readArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      follow: Prisma.$followsPayload<ExtArgs>[]
      article: Prisma.$articlesPayload<ExtArgs>[]
      tag: Prisma.$tagsPayload<ExtArgs>[]
      good: Prisma.$goodsPayload<ExtArgs>[]
      read: Prisma.$readsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      user_name: string
      user_mail: string
      user_pass: string
      user_created: Date
      user_icon: string
      user_coment: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usersCreateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usersDeleteArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpsertArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    follow<T extends users$followArgs<ExtArgs> = {}>(args?: Subset<T, users$followArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$followsPayload<ExtArgs>, T, 'findMany'> | Null>;

    article<T extends users$articleArgs<ExtArgs> = {}>(args?: Subset<T, users$articleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, 'findMany'> | Null>;

    tag<T extends users$tagArgs<ExtArgs> = {}>(args?: Subset<T, users$tagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, 'findMany'> | Null>;

    good<T extends users$goodArgs<ExtArgs> = {}>(args?: Subset<T, users$goodArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goodsPayload<ExtArgs>, T, 'findMany'> | Null>;

    read<T extends users$readArgs<ExtArgs> = {}>(args?: Subset<T, users$readArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$readsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly user_id: FieldRef<"users", 'Int'>
    readonly user_name: FieldRef<"users", 'String'>
    readonly user_mail: FieldRef<"users", 'String'>
    readonly user_pass: FieldRef<"users", 'String'>
    readonly user_created: FieldRef<"users", 'DateTime'>
    readonly user_icon: FieldRef<"users", 'String'>
    readonly user_coment: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes

  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }


  /**
   * users.follow
   */
  export type users$followArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follows
     */
    select?: followsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: followsInclude<ExtArgs> | null
    where?: followsWhereInput
    orderBy?: followsOrderByWithRelationInput | followsOrderByWithRelationInput[]
    cursor?: followsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[]
  }


  /**
   * users.article
   */
  export type users$articleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articlesInclude<ExtArgs> | null
    where?: articlesWhereInput
    orderBy?: articlesOrderByWithRelationInput | articlesOrderByWithRelationInput[]
    cursor?: articlesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }


  /**
   * users.tag
   */
  export type users$tagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tagsInclude<ExtArgs> | null
    where?: tagsWhereInput
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    cursor?: tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }


  /**
   * users.good
   */
  export type users$goodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goods
     */
    select?: goodsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goodsInclude<ExtArgs> | null
    where?: goodsWhereInput
    orderBy?: goodsOrderByWithRelationInput | goodsOrderByWithRelationInput[]
    cursor?: goodsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoodsScalarFieldEnum | GoodsScalarFieldEnum[]
  }


  /**
   * users.read
   */
  export type users$readArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reads
     */
    select?: readsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: readsInclude<ExtArgs> | null
    where?: readsWhereInput
    orderBy?: readsOrderByWithRelationInput | readsOrderByWithRelationInput[]
    cursor?: readsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReadsScalarFieldEnum | ReadsScalarFieldEnum[]
  }


  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
  }



  /**
   * Model follows
   */

  export type AggregateFollows = {
    _count: FollowsCountAggregateOutputType | null
    _avg: FollowsAvgAggregateOutputType | null
    _sum: FollowsSumAggregateOutputType | null
    _min: FollowsMinAggregateOutputType | null
    _max: FollowsMaxAggregateOutputType | null
  }

  export type FollowsAvgAggregateOutputType = {
    follow_id: number | null
  }

  export type FollowsSumAggregateOutputType = {
    follow_id: number | null
  }

  export type FollowsMinAggregateOutputType = {
    follow_id: number | null
  }

  export type FollowsMaxAggregateOutputType = {
    follow_id: number | null
  }

  export type FollowsCountAggregateOutputType = {
    follow_id: number
    _all: number
  }


  export type FollowsAvgAggregateInputType = {
    follow_id?: true
  }

  export type FollowsSumAggregateInputType = {
    follow_id?: true
  }

  export type FollowsMinAggregateInputType = {
    follow_id?: true
  }

  export type FollowsMaxAggregateInputType = {
    follow_id?: true
  }

  export type FollowsCountAggregateInputType = {
    follow_id?: true
    _all?: true
  }

  export type FollowsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which follows to aggregate.
     */
    where?: followsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of follows to fetch.
     */
    orderBy?: followsOrderByWithRelationInput | followsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: followsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned follows
    **/
    _count?: true | FollowsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FollowsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FollowsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowsMaxAggregateInputType
  }

  export type GetFollowsAggregateType<T extends FollowsAggregateArgs> = {
        [P in keyof T & keyof AggregateFollows]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollows[P]>
      : GetScalarType<T[P], AggregateFollows[P]>
  }




  export type followsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: followsWhereInput
    orderBy?: followsOrderByWithAggregationInput | followsOrderByWithAggregationInput[]
    by: FollowsScalarFieldEnum[] | FollowsScalarFieldEnum
    having?: followsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowsCountAggregateInputType | true
    _avg?: FollowsAvgAggregateInputType
    _sum?: FollowsSumAggregateInputType
    _min?: FollowsMinAggregateInputType
    _max?: FollowsMaxAggregateInputType
  }

  export type FollowsGroupByOutputType = {
    follow_id: number
    _count: FollowsCountAggregateOutputType | null
    _avg: FollowsAvgAggregateOutputType | null
    _sum: FollowsSumAggregateOutputType | null
    _min: FollowsMinAggregateOutputType | null
    _max: FollowsMaxAggregateOutputType | null
  }

  type GetFollowsGroupByPayload<T extends followsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowsGroupByOutputType[P]>
            : GetScalarType<T[P], FollowsGroupByOutputType[P]>
        }
      >
    >


  export type followsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    follow_id?: boolean
    author1?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["follows"]>

  export type followsSelectScalar = {
    follow_id?: boolean
  }

  export type followsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author1?: boolean | usersDefaultArgs<ExtArgs>
  }


  export type $followsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "follows"
    objects: {
      author1: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      follow_id: number
    }, ExtArgs["result"]["follows"]>
    composites: {}
  }


  type followsGetPayload<S extends boolean | null | undefined | followsDefaultArgs> = $Result.GetResult<Prisma.$followsPayload, S>

  type followsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<followsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: FollowsCountAggregateInputType | true
    }

  export interface followsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['follows'], meta: { name: 'follows' } }
    /**
     * Find zero or one Follows that matches the filter.
     * @param {followsFindUniqueArgs} args - Arguments to find a Follows
     * @example
     * // Get one Follows
     * const follows = await prisma.follows.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends followsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, followsFindUniqueArgs<ExtArgs>>
    ): Prisma__followsClient<$Result.GetResult<Prisma.$followsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Follows that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {followsFindUniqueOrThrowArgs} args - Arguments to find a Follows
     * @example
     * // Get one Follows
     * const follows = await prisma.follows.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends followsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, followsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__followsClient<$Result.GetResult<Prisma.$followsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Follows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followsFindFirstArgs} args - Arguments to find a Follows
     * @example
     * // Get one Follows
     * const follows = await prisma.follows.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends followsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, followsFindFirstArgs<ExtArgs>>
    ): Prisma__followsClient<$Result.GetResult<Prisma.$followsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Follows that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followsFindFirstOrThrowArgs} args - Arguments to find a Follows
     * @example
     * // Get one Follows
     * const follows = await prisma.follows.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends followsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, followsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__followsClient<$Result.GetResult<Prisma.$followsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Follows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Follows
     * const follows = await prisma.follows.findMany()
     * 
     * // Get first 10 Follows
     * const follows = await prisma.follows.findMany({ take: 10 })
     * 
     * // Only select the `follow_id`
     * const followsWithFollow_idOnly = await prisma.follows.findMany({ select: { follow_id: true } })
     * 
    **/
    findMany<T extends followsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, followsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$followsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Follows.
     * @param {followsCreateArgs} args - Arguments to create a Follows.
     * @example
     * // Create one Follows
     * const Follows = await prisma.follows.create({
     *   data: {
     *     // ... data to create a Follows
     *   }
     * })
     * 
    **/
    create<T extends followsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, followsCreateArgs<ExtArgs>>
    ): Prisma__followsClient<$Result.GetResult<Prisma.$followsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Follows.
     *     @param {followsCreateManyArgs} args - Arguments to create many Follows.
     *     @example
     *     // Create many Follows
     *     const follows = await prisma.follows.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends followsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, followsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Follows.
     * @param {followsDeleteArgs} args - Arguments to delete one Follows.
     * @example
     * // Delete one Follows
     * const Follows = await prisma.follows.delete({
     *   where: {
     *     // ... filter to delete one Follows
     *   }
     * })
     * 
    **/
    delete<T extends followsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, followsDeleteArgs<ExtArgs>>
    ): Prisma__followsClient<$Result.GetResult<Prisma.$followsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Follows.
     * @param {followsUpdateArgs} args - Arguments to update one Follows.
     * @example
     * // Update one Follows
     * const follows = await prisma.follows.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends followsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, followsUpdateArgs<ExtArgs>>
    ): Prisma__followsClient<$Result.GetResult<Prisma.$followsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Follows.
     * @param {followsDeleteManyArgs} args - Arguments to filter Follows to delete.
     * @example
     * // Delete a few Follows
     * const { count } = await prisma.follows.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends followsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, followsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Follows
     * const follows = await prisma.follows.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends followsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, followsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Follows.
     * @param {followsUpsertArgs} args - Arguments to update or create a Follows.
     * @example
     * // Update or create a Follows
     * const follows = await prisma.follows.upsert({
     *   create: {
     *     // ... data to create a Follows
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Follows we want to update
     *   }
     * })
    **/
    upsert<T extends followsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, followsUpsertArgs<ExtArgs>>
    ): Prisma__followsClient<$Result.GetResult<Prisma.$followsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followsCountArgs} args - Arguments to filter Follows to count.
     * @example
     * // Count the number of Follows
     * const count = await prisma.follows.count({
     *   where: {
     *     // ... the filter for the Follows we want to count
     *   }
     * })
    **/
    count<T extends followsCountArgs>(
      args?: Subset<T, followsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FollowsAggregateArgs>(args: Subset<T, FollowsAggregateArgs>): Prisma.PrismaPromise<GetFollowsAggregateType<T>>

    /**
     * Group by Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followsGroupByArgs} args - Group by arguments.
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
      T extends followsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: followsGroupByArgs['orderBy'] }
        : { orderBy?: followsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, followsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the follows model
   */
  readonly fields: followsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for follows.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__followsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author1<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the follows model
   */ 
  interface followsFieldRefs {
    readonly follow_id: FieldRef<"follows", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * follows findUnique
   */
  export type followsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follows
     */
    select?: followsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: followsInclude<ExtArgs> | null
    /**
     * Filter, which follows to fetch.
     */
    where: followsWhereUniqueInput
  }


  /**
   * follows findUniqueOrThrow
   */
  export type followsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follows
     */
    select?: followsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: followsInclude<ExtArgs> | null
    /**
     * Filter, which follows to fetch.
     */
    where: followsWhereUniqueInput
  }


  /**
   * follows findFirst
   */
  export type followsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follows
     */
    select?: followsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: followsInclude<ExtArgs> | null
    /**
     * Filter, which follows to fetch.
     */
    where?: followsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of follows to fetch.
     */
    orderBy?: followsOrderByWithRelationInput | followsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for follows.
     */
    cursor?: followsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of follows.
     */
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[]
  }


  /**
   * follows findFirstOrThrow
   */
  export type followsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follows
     */
    select?: followsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: followsInclude<ExtArgs> | null
    /**
     * Filter, which follows to fetch.
     */
    where?: followsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of follows to fetch.
     */
    orderBy?: followsOrderByWithRelationInput | followsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for follows.
     */
    cursor?: followsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of follows.
     */
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[]
  }


  /**
   * follows findMany
   */
  export type followsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follows
     */
    select?: followsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: followsInclude<ExtArgs> | null
    /**
     * Filter, which follows to fetch.
     */
    where?: followsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of follows to fetch.
     */
    orderBy?: followsOrderByWithRelationInput | followsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing follows.
     */
    cursor?: followsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` follows.
     */
    skip?: number
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[]
  }


  /**
   * follows create
   */
  export type followsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follows
     */
    select?: followsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: followsInclude<ExtArgs> | null
    /**
     * The data needed to create a follows.
     */
    data: XOR<followsCreateInput, followsUncheckedCreateInput>
  }


  /**
   * follows createMany
   */
  export type followsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many follows.
     */
    data: followsCreateManyInput | followsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * follows update
   */
  export type followsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follows
     */
    select?: followsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: followsInclude<ExtArgs> | null
    /**
     * The data needed to update a follows.
     */
    data: XOR<followsUpdateInput, followsUncheckedUpdateInput>
    /**
     * Choose, which follows to update.
     */
    where: followsWhereUniqueInput
  }


  /**
   * follows updateMany
   */
  export type followsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update follows.
     */
    data: XOR<followsUpdateManyMutationInput, followsUncheckedUpdateManyInput>
    /**
     * Filter which follows to update
     */
    where?: followsWhereInput
  }


  /**
   * follows upsert
   */
  export type followsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follows
     */
    select?: followsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: followsInclude<ExtArgs> | null
    /**
     * The filter to search for the follows to update in case it exists.
     */
    where: followsWhereUniqueInput
    /**
     * In case the follows found by the `where` argument doesn't exist, create a new follows with this data.
     */
    create: XOR<followsCreateInput, followsUncheckedCreateInput>
    /**
     * In case the follows was found with the provided `where` argument, update it with this data.
     */
    update: XOR<followsUpdateInput, followsUncheckedUpdateInput>
  }


  /**
   * follows delete
   */
  export type followsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follows
     */
    select?: followsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: followsInclude<ExtArgs> | null
    /**
     * Filter which follows to delete.
     */
    where: followsWhereUniqueInput
  }


  /**
   * follows deleteMany
   */
  export type followsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which follows to delete
     */
    where?: followsWhereInput
  }


  /**
   * follows without action
   */
  export type followsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follows
     */
    select?: followsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: followsInclude<ExtArgs> | null
  }



  /**
   * Model tags
   */

  export type AggregateTags = {
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  export type TagsAvgAggregateOutputType = {
    tag_id: number | null
    userId: number | null
  }

  export type TagsSumAggregateOutputType = {
    tag_id: number | null
    userId: number | null
  }

  export type TagsMinAggregateOutputType = {
    tag_id: number | null
    tag_name: string | null
    userId: number | null
  }

  export type TagsMaxAggregateOutputType = {
    tag_id: number | null
    tag_name: string | null
    userId: number | null
  }

  export type TagsCountAggregateOutputType = {
    tag_id: number
    tag_name: number
    userId: number
    _all: number
  }


  export type TagsAvgAggregateInputType = {
    tag_id?: true
    userId?: true
  }

  export type TagsSumAggregateInputType = {
    tag_id?: true
    userId?: true
  }

  export type TagsMinAggregateInputType = {
    tag_id?: true
    tag_name?: true
    userId?: true
  }

  export type TagsMaxAggregateInputType = {
    tag_id?: true
    tag_name?: true
    userId?: true
  }

  export type TagsCountAggregateInputType = {
    tag_id?: true
    tag_name?: true
    userId?: true
    _all?: true
  }

  export type TagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to aggregate.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tags
    **/
    _count?: true | TagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagsMaxAggregateInputType
  }

  export type GetTagsAggregateType<T extends TagsAggregateArgs> = {
        [P in keyof T & keyof AggregateTags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTags[P]>
      : GetScalarType<T[P], AggregateTags[P]>
  }




  export type tagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tagsWhereInput
    orderBy?: tagsOrderByWithAggregationInput | tagsOrderByWithAggregationInput[]
    by: TagsScalarFieldEnum[] | TagsScalarFieldEnum
    having?: tagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagsCountAggregateInputType | true
    _avg?: TagsAvgAggregateInputType
    _sum?: TagsSumAggregateInputType
    _min?: TagsMinAggregateInputType
    _max?: TagsMaxAggregateInputType
  }

  export type TagsGroupByOutputType = {
    tag_id: number
    tag_name: string
    userId: number
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  type GetTagsGroupByPayload<T extends tagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagsGroupByOutputType[P]>
            : GetScalarType<T[P], TagsGroupByOutputType[P]>
        }
      >
    >


  export type tagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tag_id?: boolean
    tag_name?: boolean
    userId?: boolean
    author?: boolean | usersDefaultArgs<ExtArgs>
    maintag?: boolean | tags$maintagArgs<ExtArgs>
    subtag?: boolean | tags$subtagArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectScalar = {
    tag_id?: boolean
    tag_name?: boolean
    userId?: boolean
  }

  export type tagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | usersDefaultArgs<ExtArgs>
    maintag?: boolean | tags$maintagArgs<ExtArgs>
    subtag?: boolean | tags$subtagArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $tagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tags"
    objects: {
      author: Prisma.$usersPayload<ExtArgs>
      maintag: Prisma.$maintagsPayload<ExtArgs> | null
      subtag: Prisma.$subtagsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      tag_id: number
      tag_name: string
      userId: number
    }, ExtArgs["result"]["tags"]>
    composites: {}
  }


  type tagsGetPayload<S extends boolean | null | undefined | tagsDefaultArgs> = $Result.GetResult<Prisma.$tagsPayload, S>

  type tagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tagsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TagsCountAggregateInputType | true
    }

  export interface tagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tags'], meta: { name: 'tags' } }
    /**
     * Find zero or one Tags that matches the filter.
     * @param {tagsFindUniqueArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tagsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, tagsFindUniqueArgs<ExtArgs>>
    ): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tags that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tagsFindUniqueOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tagsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tagsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindFirstArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tagsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, tagsFindFirstArgs<ExtArgs>>
    ): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindFirstOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tagsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tagsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tags.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tags.findMany({ take: 10 })
     * 
     * // Only select the `tag_id`
     * const tagsWithTag_idOnly = await prisma.tags.findMany({ select: { tag_id: true } })
     * 
    **/
    findMany<T extends tagsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tagsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tags.
     * @param {tagsCreateArgs} args - Arguments to create a Tags.
     * @example
     * // Create one Tags
     * const Tags = await prisma.tags.create({
     *   data: {
     *     // ... data to create a Tags
     *   }
     * })
     * 
    **/
    create<T extends tagsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, tagsCreateArgs<ExtArgs>>
    ): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tags.
     *     @param {tagsCreateManyArgs} args - Arguments to create many Tags.
     *     @example
     *     // Create many Tags
     *     const tags = await prisma.tags.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tagsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tagsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tags.
     * @param {tagsDeleteArgs} args - Arguments to delete one Tags.
     * @example
     * // Delete one Tags
     * const Tags = await prisma.tags.delete({
     *   where: {
     *     // ... filter to delete one Tags
     *   }
     * })
     * 
    **/
    delete<T extends tagsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, tagsDeleteArgs<ExtArgs>>
    ): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tags.
     * @param {tagsUpdateArgs} args - Arguments to update one Tags.
     * @example
     * // Update one Tags
     * const tags = await prisma.tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tagsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, tagsUpdateArgs<ExtArgs>>
    ): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tags.
     * @param {tagsDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tagsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tagsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tagsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, tagsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tags.
     * @param {tagsUpsertArgs} args - Arguments to update or create a Tags.
     * @example
     * // Update or create a Tags
     * const tags = await prisma.tags.upsert({
     *   create: {
     *     // ... data to create a Tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tags we want to update
     *   }
     * })
    **/
    upsert<T extends tagsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, tagsUpsertArgs<ExtArgs>>
    ): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tags.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends tagsCountArgs>(
      args?: Subset<T, tagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagsAggregateArgs>(args: Subset<T, TagsAggregateArgs>): Prisma.PrismaPromise<GetTagsAggregateType<T>>

    /**
     * Group by Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsGroupByArgs} args - Group by arguments.
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
      T extends tagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tagsGroupByArgs['orderBy'] }
        : { orderBy?: tagsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tags model
   */
  readonly fields: tagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    maintag<T extends tags$maintagArgs<ExtArgs> = {}>(args?: Subset<T, tags$maintagArgs<ExtArgs>>): Prisma__maintagsClient<$Result.GetResult<Prisma.$maintagsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    subtag<T extends tags$subtagArgs<ExtArgs> = {}>(args?: Subset<T, tags$subtagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subtagsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the tags model
   */ 
  interface tagsFieldRefs {
    readonly tag_id: FieldRef<"tags", 'Int'>
    readonly tag_name: FieldRef<"tags", 'String'>
    readonly userId: FieldRef<"tags", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * tags findUnique
   */
  export type tagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where: tagsWhereUniqueInput
  }


  /**
   * tags findUniqueOrThrow
   */
  export type tagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where: tagsWhereUniqueInput
  }


  /**
   * tags findFirst
   */
  export type tagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }


  /**
   * tags findFirstOrThrow
   */
  export type tagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }


  /**
   * tags findMany
   */
  export type tagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }


  /**
   * tags create
   */
  export type tagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The data needed to create a tags.
     */
    data: XOR<tagsCreateInput, tagsUncheckedCreateInput>
  }


  /**
   * tags createMany
   */
  export type tagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tags.
     */
    data: tagsCreateManyInput | tagsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * tags update
   */
  export type tagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The data needed to update a tags.
     */
    data: XOR<tagsUpdateInput, tagsUncheckedUpdateInput>
    /**
     * Choose, which tags to update.
     */
    where: tagsWhereUniqueInput
  }


  /**
   * tags updateMany
   */
  export type tagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tags.
     */
    data: XOR<tagsUpdateManyMutationInput, tagsUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagsWhereInput
  }


  /**
   * tags upsert
   */
  export type tagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The filter to search for the tags to update in case it exists.
     */
    where: tagsWhereUniqueInput
    /**
     * In case the tags found by the `where` argument doesn't exist, create a new tags with this data.
     */
    create: XOR<tagsCreateInput, tagsUncheckedCreateInput>
    /**
     * In case the tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tagsUpdateInput, tagsUncheckedUpdateInput>
  }


  /**
   * tags delete
   */
  export type tagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter which tags to delete.
     */
    where: tagsWhereUniqueInput
  }


  /**
   * tags deleteMany
   */
  export type tagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to delete
     */
    where?: tagsWhereInput
  }


  /**
   * tags.maintag
   */
  export type tags$maintagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintags
     */
    select?: maintagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: maintagsInclude<ExtArgs> | null
    where?: maintagsWhereInput
  }


  /**
   * tags.subtag
   */
  export type tags$subtagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtags
     */
    select?: subtagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subtagsInclude<ExtArgs> | null
    where?: subtagsWhereInput
    orderBy?: subtagsOrderByWithRelationInput | subtagsOrderByWithRelationInput[]
    cursor?: subtagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubtagsScalarFieldEnum | SubtagsScalarFieldEnum[]
  }


  /**
   * tags without action
   */
  export type tagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tagsInclude<ExtArgs> | null
  }



  /**
   * Model articles
   */

  export type AggregateArticles = {
    _count: ArticlesCountAggregateOutputType | null
    _avg: ArticlesAvgAggregateOutputType | null
    _sum: ArticlesSumAggregateOutputType | null
    _min: ArticlesMinAggregateOutputType | null
    _max: ArticlesMaxAggregateOutputType | null
  }

  export type ArticlesAvgAggregateOutputType = {
    article_id: number | null
    userId: number | null
  }

  export type ArticlesSumAggregateOutputType = {
    article_id: number | null
    userId: number | null
  }

  export type ArticlesMinAggregateOutputType = {
    article_id: number | null
    article_title: string | null
    article_image: string | null
    article_created: Date | null
    article_updated: Date | null
    userId: number | null
  }

  export type ArticlesMaxAggregateOutputType = {
    article_id: number | null
    article_title: string | null
    article_image: string | null
    article_created: Date | null
    article_updated: Date | null
    userId: number | null
  }

  export type ArticlesCountAggregateOutputType = {
    article_id: number
    article_title: number
    article_image: number
    article_created: number
    article_updated: number
    userId: number
    _all: number
  }


  export type ArticlesAvgAggregateInputType = {
    article_id?: true
    userId?: true
  }

  export type ArticlesSumAggregateInputType = {
    article_id?: true
    userId?: true
  }

  export type ArticlesMinAggregateInputType = {
    article_id?: true
    article_title?: true
    article_image?: true
    article_created?: true
    article_updated?: true
    userId?: true
  }

  export type ArticlesMaxAggregateInputType = {
    article_id?: true
    article_title?: true
    article_image?: true
    article_created?: true
    article_updated?: true
    userId?: true
  }

  export type ArticlesCountAggregateInputType = {
    article_id?: true
    article_title?: true
    article_image?: true
    article_created?: true
    article_updated?: true
    userId?: true
    _all?: true
  }

  export type ArticlesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which articles to aggregate.
     */
    where?: articlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articlesOrderByWithRelationInput | articlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: articlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned articles
    **/
    _count?: true | ArticlesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticlesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticlesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticlesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticlesMaxAggregateInputType
  }

  export type GetArticlesAggregateType<T extends ArticlesAggregateArgs> = {
        [P in keyof T & keyof AggregateArticles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticles[P]>
      : GetScalarType<T[P], AggregateArticles[P]>
  }




  export type articlesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: articlesWhereInput
    orderBy?: articlesOrderByWithAggregationInput | articlesOrderByWithAggregationInput[]
    by: ArticlesScalarFieldEnum[] | ArticlesScalarFieldEnum
    having?: articlesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticlesCountAggregateInputType | true
    _avg?: ArticlesAvgAggregateInputType
    _sum?: ArticlesSumAggregateInputType
    _min?: ArticlesMinAggregateInputType
    _max?: ArticlesMaxAggregateInputType
  }

  export type ArticlesGroupByOutputType = {
    article_id: number
    article_title: string
    article_image: string
    article_created: Date
    article_updated: Date
    userId: number
    _count: ArticlesCountAggregateOutputType | null
    _avg: ArticlesAvgAggregateOutputType | null
    _sum: ArticlesSumAggregateOutputType | null
    _min: ArticlesMinAggregateOutputType | null
    _max: ArticlesMaxAggregateOutputType | null
  }

  type GetArticlesGroupByPayload<T extends articlesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticlesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticlesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticlesGroupByOutputType[P]>
            : GetScalarType<T[P], ArticlesGroupByOutputType[P]>
        }
      >
    >


  export type articlesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    article_id?: boolean
    article_title?: boolean
    article_image?: boolean
    article_created?: boolean
    article_updated?: boolean
    userId?: boolean
    author?: boolean | usersDefaultArgs<ExtArgs>
    maintag?: boolean | articles$maintagArgs<ExtArgs>
    subtag?: boolean | articles$subtagArgs<ExtArgs>
    read?: boolean | articles$readArgs<ExtArgs>
    good?: boolean | articles$goodArgs<ExtArgs>
    _count?: boolean | ArticlesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articles"]>

  export type articlesSelectScalar = {
    article_id?: boolean
    article_title?: boolean
    article_image?: boolean
    article_created?: boolean
    article_updated?: boolean
    userId?: boolean
  }

  export type articlesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | usersDefaultArgs<ExtArgs>
    maintag?: boolean | articles$maintagArgs<ExtArgs>
    subtag?: boolean | articles$subtagArgs<ExtArgs>
    read?: boolean | articles$readArgs<ExtArgs>
    good?: boolean | articles$goodArgs<ExtArgs>
    _count?: boolean | ArticlesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $articlesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "articles"
    objects: {
      author: Prisma.$usersPayload<ExtArgs>
      maintag: Prisma.$maintagsPayload<ExtArgs> | null
      subtag: Prisma.$subtagsPayload<ExtArgs>[]
      read: Prisma.$readsPayload<ExtArgs>[]
      good: Prisma.$goodsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      article_id: number
      article_title: string
      article_image: string
      article_created: Date
      article_updated: Date
      userId: number
    }, ExtArgs["result"]["articles"]>
    composites: {}
  }


  type articlesGetPayload<S extends boolean | null | undefined | articlesDefaultArgs> = $Result.GetResult<Prisma.$articlesPayload, S>

  type articlesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<articlesFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ArticlesCountAggregateInputType | true
    }

  export interface articlesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['articles'], meta: { name: 'articles' } }
    /**
     * Find zero or one Articles that matches the filter.
     * @param {articlesFindUniqueArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends articlesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, articlesFindUniqueArgs<ExtArgs>>
    ): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Articles that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {articlesFindUniqueOrThrowArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends articlesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, articlesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articlesFindFirstArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends articlesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, articlesFindFirstArgs<ExtArgs>>
    ): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Articles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articlesFindFirstOrThrowArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends articlesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, articlesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articlesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.articles.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.articles.findMany({ take: 10 })
     * 
     * // Only select the `article_id`
     * const articlesWithArticle_idOnly = await prisma.articles.findMany({ select: { article_id: true } })
     * 
    **/
    findMany<T extends articlesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, articlesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Articles.
     * @param {articlesCreateArgs} args - Arguments to create a Articles.
     * @example
     * // Create one Articles
     * const Articles = await prisma.articles.create({
     *   data: {
     *     // ... data to create a Articles
     *   }
     * })
     * 
    **/
    create<T extends articlesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, articlesCreateArgs<ExtArgs>>
    ): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Articles.
     *     @param {articlesCreateManyArgs} args - Arguments to create many Articles.
     *     @example
     *     // Create many Articles
     *     const articles = await prisma.articles.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends articlesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, articlesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Articles.
     * @param {articlesDeleteArgs} args - Arguments to delete one Articles.
     * @example
     * // Delete one Articles
     * const Articles = await prisma.articles.delete({
     *   where: {
     *     // ... filter to delete one Articles
     *   }
     * })
     * 
    **/
    delete<T extends articlesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, articlesDeleteArgs<ExtArgs>>
    ): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Articles.
     * @param {articlesUpdateArgs} args - Arguments to update one Articles.
     * @example
     * // Update one Articles
     * const articles = await prisma.articles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends articlesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, articlesUpdateArgs<ExtArgs>>
    ): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Articles.
     * @param {articlesDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.articles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends articlesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, articlesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articlesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const articles = await prisma.articles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends articlesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, articlesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Articles.
     * @param {articlesUpsertArgs} args - Arguments to update or create a Articles.
     * @example
     * // Update or create a Articles
     * const articles = await prisma.articles.upsert({
     *   create: {
     *     // ... data to create a Articles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Articles we want to update
     *   }
     * })
    **/
    upsert<T extends articlesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, articlesUpsertArgs<ExtArgs>>
    ): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articlesCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.articles.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends articlesCountArgs>(
      args?: Subset<T, articlesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticlesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArticlesAggregateArgs>(args: Subset<T, ArticlesAggregateArgs>): Prisma.PrismaPromise<GetArticlesAggregateType<T>>

    /**
     * Group by Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articlesGroupByArgs} args - Group by arguments.
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
      T extends articlesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: articlesGroupByArgs['orderBy'] }
        : { orderBy?: articlesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, articlesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticlesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the articles model
   */
  readonly fields: articlesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for articles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__articlesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    maintag<T extends articles$maintagArgs<ExtArgs> = {}>(args?: Subset<T, articles$maintagArgs<ExtArgs>>): Prisma__maintagsClient<$Result.GetResult<Prisma.$maintagsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    subtag<T extends articles$subtagArgs<ExtArgs> = {}>(args?: Subset<T, articles$subtagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subtagsPayload<ExtArgs>, T, 'findMany'> | Null>;

    read<T extends articles$readArgs<ExtArgs> = {}>(args?: Subset<T, articles$readArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$readsPayload<ExtArgs>, T, 'findMany'> | Null>;

    good<T extends articles$goodArgs<ExtArgs> = {}>(args?: Subset<T, articles$goodArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goodsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the articles model
   */ 
  interface articlesFieldRefs {
    readonly article_id: FieldRef<"articles", 'Int'>
    readonly article_title: FieldRef<"articles", 'String'>
    readonly article_image: FieldRef<"articles", 'String'>
    readonly article_created: FieldRef<"articles", 'DateTime'>
    readonly article_updated: FieldRef<"articles", 'DateTime'>
    readonly userId: FieldRef<"articles", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * articles findUnique
   */
  export type articlesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * Filter, which articles to fetch.
     */
    where: articlesWhereUniqueInput
  }


  /**
   * articles findUniqueOrThrow
   */
  export type articlesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * Filter, which articles to fetch.
     */
    where: articlesWhereUniqueInput
  }


  /**
   * articles findFirst
   */
  export type articlesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * Filter, which articles to fetch.
     */
    where?: articlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articlesOrderByWithRelationInput | articlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for articles.
     */
    cursor?: articlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of articles.
     */
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }


  /**
   * articles findFirstOrThrow
   */
  export type articlesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * Filter, which articles to fetch.
     */
    where?: articlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articlesOrderByWithRelationInput | articlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for articles.
     */
    cursor?: articlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of articles.
     */
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }


  /**
   * articles findMany
   */
  export type articlesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * Filter, which articles to fetch.
     */
    where?: articlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articlesOrderByWithRelationInput | articlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing articles.
     */
    cursor?: articlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }


  /**
   * articles create
   */
  export type articlesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * The data needed to create a articles.
     */
    data: XOR<articlesCreateInput, articlesUncheckedCreateInput>
  }


  /**
   * articles createMany
   */
  export type articlesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many articles.
     */
    data: articlesCreateManyInput | articlesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * articles update
   */
  export type articlesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * The data needed to update a articles.
     */
    data: XOR<articlesUpdateInput, articlesUncheckedUpdateInput>
    /**
     * Choose, which articles to update.
     */
    where: articlesWhereUniqueInput
  }


  /**
   * articles updateMany
   */
  export type articlesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update articles.
     */
    data: XOR<articlesUpdateManyMutationInput, articlesUncheckedUpdateManyInput>
    /**
     * Filter which articles to update
     */
    where?: articlesWhereInput
  }


  /**
   * articles upsert
   */
  export type articlesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * The filter to search for the articles to update in case it exists.
     */
    where: articlesWhereUniqueInput
    /**
     * In case the articles found by the `where` argument doesn't exist, create a new articles with this data.
     */
    create: XOR<articlesCreateInput, articlesUncheckedCreateInput>
    /**
     * In case the articles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<articlesUpdateInput, articlesUncheckedUpdateInput>
  }


  /**
   * articles delete
   */
  export type articlesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * Filter which articles to delete.
     */
    where: articlesWhereUniqueInput
  }


  /**
   * articles deleteMany
   */
  export type articlesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which articles to delete
     */
    where?: articlesWhereInput
  }


  /**
   * articles.maintag
   */
  export type articles$maintagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintags
     */
    select?: maintagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: maintagsInclude<ExtArgs> | null
    where?: maintagsWhereInput
  }


  /**
   * articles.subtag
   */
  export type articles$subtagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtags
     */
    select?: subtagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subtagsInclude<ExtArgs> | null
    where?: subtagsWhereInput
    orderBy?: subtagsOrderByWithRelationInput | subtagsOrderByWithRelationInput[]
    cursor?: subtagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubtagsScalarFieldEnum | SubtagsScalarFieldEnum[]
  }


  /**
   * articles.read
   */
  export type articles$readArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reads
     */
    select?: readsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: readsInclude<ExtArgs> | null
    where?: readsWhereInput
    orderBy?: readsOrderByWithRelationInput | readsOrderByWithRelationInput[]
    cursor?: readsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReadsScalarFieldEnum | ReadsScalarFieldEnum[]
  }


  /**
   * articles.good
   */
  export type articles$goodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goods
     */
    select?: goodsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goodsInclude<ExtArgs> | null
    where?: goodsWhereInput
    orderBy?: goodsOrderByWithRelationInput | goodsOrderByWithRelationInput[]
    cursor?: goodsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoodsScalarFieldEnum | GoodsScalarFieldEnum[]
  }


  /**
   * articles without action
   */
  export type articlesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articlesInclude<ExtArgs> | null
  }



  /**
   * Model goods
   */

  export type AggregateGoods = {
    _count: GoodsCountAggregateOutputType | null
    _avg: GoodsAvgAggregateOutputType | null
    _sum: GoodsSumAggregateOutputType | null
    _min: GoodsMinAggregateOutputType | null
    _max: GoodsMaxAggregateOutputType | null
  }

  export type GoodsAvgAggregateOutputType = {
    userId: number | null
    articleId: number | null
  }

  export type GoodsSumAggregateOutputType = {
    userId: number | null
    articleId: number | null
  }

  export type GoodsMinAggregateOutputType = {
    userId: number | null
    articleId: number | null
    good_created: Date | null
  }

  export type GoodsMaxAggregateOutputType = {
    userId: number | null
    articleId: number | null
    good_created: Date | null
  }

  export type GoodsCountAggregateOutputType = {
    userId: number
    articleId: number
    good_created: number
    _all: number
  }


  export type GoodsAvgAggregateInputType = {
    userId?: true
    articleId?: true
  }

  export type GoodsSumAggregateInputType = {
    userId?: true
    articleId?: true
  }

  export type GoodsMinAggregateInputType = {
    userId?: true
    articleId?: true
    good_created?: true
  }

  export type GoodsMaxAggregateInputType = {
    userId?: true
    articleId?: true
    good_created?: true
  }

  export type GoodsCountAggregateInputType = {
    userId?: true
    articleId?: true
    good_created?: true
    _all?: true
  }

  export type GoodsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which goods to aggregate.
     */
    where?: goodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goods to fetch.
     */
    orderBy?: goodsOrderByWithRelationInput | goodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: goodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned goods
    **/
    _count?: true | GoodsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GoodsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GoodsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoodsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoodsMaxAggregateInputType
  }

  export type GetGoodsAggregateType<T extends GoodsAggregateArgs> = {
        [P in keyof T & keyof AggregateGoods]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoods[P]>
      : GetScalarType<T[P], AggregateGoods[P]>
  }




  export type goodsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: goodsWhereInput
    orderBy?: goodsOrderByWithAggregationInput | goodsOrderByWithAggregationInput[]
    by: GoodsScalarFieldEnum[] | GoodsScalarFieldEnum
    having?: goodsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoodsCountAggregateInputType | true
    _avg?: GoodsAvgAggregateInputType
    _sum?: GoodsSumAggregateInputType
    _min?: GoodsMinAggregateInputType
    _max?: GoodsMaxAggregateInputType
  }

  export type GoodsGroupByOutputType = {
    userId: number
    articleId: number
    good_created: Date
    _count: GoodsCountAggregateOutputType | null
    _avg: GoodsAvgAggregateOutputType | null
    _sum: GoodsSumAggregateOutputType | null
    _min: GoodsMinAggregateOutputType | null
    _max: GoodsMaxAggregateOutputType | null
  }

  type GetGoodsGroupByPayload<T extends goodsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoodsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoodsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoodsGroupByOutputType[P]>
            : GetScalarType<T[P], GoodsGroupByOutputType[P]>
        }
      >
    >


  export type goodsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    articleId?: boolean
    good_created?: boolean
    author1?: boolean | usersDefaultArgs<ExtArgs>
    author2?: boolean | articlesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goods"]>

  export type goodsSelectScalar = {
    userId?: boolean
    articleId?: boolean
    good_created?: boolean
  }

  export type goodsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author1?: boolean | usersDefaultArgs<ExtArgs>
    author2?: boolean | articlesDefaultArgs<ExtArgs>
  }


  export type $goodsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "goods"
    objects: {
      author1: Prisma.$usersPayload<ExtArgs>
      author2: Prisma.$articlesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      articleId: number
      good_created: Date
    }, ExtArgs["result"]["goods"]>
    composites: {}
  }


  type goodsGetPayload<S extends boolean | null | undefined | goodsDefaultArgs> = $Result.GetResult<Prisma.$goodsPayload, S>

  type goodsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<goodsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: GoodsCountAggregateInputType | true
    }

  export interface goodsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['goods'], meta: { name: 'goods' } }
    /**
     * Find zero or one Goods that matches the filter.
     * @param {goodsFindUniqueArgs} args - Arguments to find a Goods
     * @example
     * // Get one Goods
     * const goods = await prisma.goods.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends goodsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, goodsFindUniqueArgs<ExtArgs>>
    ): Prisma__goodsClient<$Result.GetResult<Prisma.$goodsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Goods that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {goodsFindUniqueOrThrowArgs} args - Arguments to find a Goods
     * @example
     * // Get one Goods
     * const goods = await prisma.goods.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends goodsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, goodsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__goodsClient<$Result.GetResult<Prisma.$goodsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Goods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goodsFindFirstArgs} args - Arguments to find a Goods
     * @example
     * // Get one Goods
     * const goods = await prisma.goods.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends goodsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, goodsFindFirstArgs<ExtArgs>>
    ): Prisma__goodsClient<$Result.GetResult<Prisma.$goodsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Goods that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goodsFindFirstOrThrowArgs} args - Arguments to find a Goods
     * @example
     * // Get one Goods
     * const goods = await prisma.goods.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends goodsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, goodsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__goodsClient<$Result.GetResult<Prisma.$goodsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Goods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goodsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goods
     * const goods = await prisma.goods.findMany()
     * 
     * // Get first 10 Goods
     * const goods = await prisma.goods.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const goodsWithUserIdOnly = await prisma.goods.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends goodsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, goodsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goodsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Goods.
     * @param {goodsCreateArgs} args - Arguments to create a Goods.
     * @example
     * // Create one Goods
     * const Goods = await prisma.goods.create({
     *   data: {
     *     // ... data to create a Goods
     *   }
     * })
     * 
    **/
    create<T extends goodsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, goodsCreateArgs<ExtArgs>>
    ): Prisma__goodsClient<$Result.GetResult<Prisma.$goodsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Goods.
     *     @param {goodsCreateManyArgs} args - Arguments to create many Goods.
     *     @example
     *     // Create many Goods
     *     const goods = await prisma.goods.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends goodsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, goodsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Goods.
     * @param {goodsDeleteArgs} args - Arguments to delete one Goods.
     * @example
     * // Delete one Goods
     * const Goods = await prisma.goods.delete({
     *   where: {
     *     // ... filter to delete one Goods
     *   }
     * })
     * 
    **/
    delete<T extends goodsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, goodsDeleteArgs<ExtArgs>>
    ): Prisma__goodsClient<$Result.GetResult<Prisma.$goodsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Goods.
     * @param {goodsUpdateArgs} args - Arguments to update one Goods.
     * @example
     * // Update one Goods
     * const goods = await prisma.goods.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends goodsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, goodsUpdateArgs<ExtArgs>>
    ): Prisma__goodsClient<$Result.GetResult<Prisma.$goodsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Goods.
     * @param {goodsDeleteManyArgs} args - Arguments to filter Goods to delete.
     * @example
     * // Delete a few Goods
     * const { count } = await prisma.goods.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends goodsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, goodsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goodsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goods
     * const goods = await prisma.goods.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends goodsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, goodsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Goods.
     * @param {goodsUpsertArgs} args - Arguments to update or create a Goods.
     * @example
     * // Update or create a Goods
     * const goods = await prisma.goods.upsert({
     *   create: {
     *     // ... data to create a Goods
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goods we want to update
     *   }
     * })
    **/
    upsert<T extends goodsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, goodsUpsertArgs<ExtArgs>>
    ): Prisma__goodsClient<$Result.GetResult<Prisma.$goodsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Goods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goodsCountArgs} args - Arguments to filter Goods to count.
     * @example
     * // Count the number of Goods
     * const count = await prisma.goods.count({
     *   where: {
     *     // ... the filter for the Goods we want to count
     *   }
     * })
    **/
    count<T extends goodsCountArgs>(
      args?: Subset<T, goodsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoodsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Goods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GoodsAggregateArgs>(args: Subset<T, GoodsAggregateArgs>): Prisma.PrismaPromise<GetGoodsAggregateType<T>>

    /**
     * Group by Goods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goodsGroupByArgs} args - Group by arguments.
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
      T extends goodsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: goodsGroupByArgs['orderBy'] }
        : { orderBy?: goodsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, goodsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoodsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the goods model
   */
  readonly fields: goodsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for goods.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__goodsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author1<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    author2<T extends articlesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, articlesDefaultArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the goods model
   */ 
  interface goodsFieldRefs {
    readonly userId: FieldRef<"goods", 'Int'>
    readonly articleId: FieldRef<"goods", 'Int'>
    readonly good_created: FieldRef<"goods", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * goods findUnique
   */
  export type goodsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goods
     */
    select?: goodsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goodsInclude<ExtArgs> | null
    /**
     * Filter, which goods to fetch.
     */
    where: goodsWhereUniqueInput
  }


  /**
   * goods findUniqueOrThrow
   */
  export type goodsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goods
     */
    select?: goodsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goodsInclude<ExtArgs> | null
    /**
     * Filter, which goods to fetch.
     */
    where: goodsWhereUniqueInput
  }


  /**
   * goods findFirst
   */
  export type goodsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goods
     */
    select?: goodsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goodsInclude<ExtArgs> | null
    /**
     * Filter, which goods to fetch.
     */
    where?: goodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goods to fetch.
     */
    orderBy?: goodsOrderByWithRelationInput | goodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for goods.
     */
    cursor?: goodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of goods.
     */
    distinct?: GoodsScalarFieldEnum | GoodsScalarFieldEnum[]
  }


  /**
   * goods findFirstOrThrow
   */
  export type goodsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goods
     */
    select?: goodsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goodsInclude<ExtArgs> | null
    /**
     * Filter, which goods to fetch.
     */
    where?: goodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goods to fetch.
     */
    orderBy?: goodsOrderByWithRelationInput | goodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for goods.
     */
    cursor?: goodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of goods.
     */
    distinct?: GoodsScalarFieldEnum | GoodsScalarFieldEnum[]
  }


  /**
   * goods findMany
   */
  export type goodsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goods
     */
    select?: goodsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goodsInclude<ExtArgs> | null
    /**
     * Filter, which goods to fetch.
     */
    where?: goodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goods to fetch.
     */
    orderBy?: goodsOrderByWithRelationInput | goodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing goods.
     */
    cursor?: goodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goods.
     */
    skip?: number
    distinct?: GoodsScalarFieldEnum | GoodsScalarFieldEnum[]
  }


  /**
   * goods create
   */
  export type goodsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goods
     */
    select?: goodsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goodsInclude<ExtArgs> | null
    /**
     * The data needed to create a goods.
     */
    data: XOR<goodsCreateInput, goodsUncheckedCreateInput>
  }


  /**
   * goods createMany
   */
  export type goodsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many goods.
     */
    data: goodsCreateManyInput | goodsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * goods update
   */
  export type goodsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goods
     */
    select?: goodsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goodsInclude<ExtArgs> | null
    /**
     * The data needed to update a goods.
     */
    data: XOR<goodsUpdateInput, goodsUncheckedUpdateInput>
    /**
     * Choose, which goods to update.
     */
    where: goodsWhereUniqueInput
  }


  /**
   * goods updateMany
   */
  export type goodsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update goods.
     */
    data: XOR<goodsUpdateManyMutationInput, goodsUncheckedUpdateManyInput>
    /**
     * Filter which goods to update
     */
    where?: goodsWhereInput
  }


  /**
   * goods upsert
   */
  export type goodsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goods
     */
    select?: goodsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goodsInclude<ExtArgs> | null
    /**
     * The filter to search for the goods to update in case it exists.
     */
    where: goodsWhereUniqueInput
    /**
     * In case the goods found by the `where` argument doesn't exist, create a new goods with this data.
     */
    create: XOR<goodsCreateInput, goodsUncheckedCreateInput>
    /**
     * In case the goods was found with the provided `where` argument, update it with this data.
     */
    update: XOR<goodsUpdateInput, goodsUncheckedUpdateInput>
  }


  /**
   * goods delete
   */
  export type goodsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goods
     */
    select?: goodsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goodsInclude<ExtArgs> | null
    /**
     * Filter which goods to delete.
     */
    where: goodsWhereUniqueInput
  }


  /**
   * goods deleteMany
   */
  export type goodsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which goods to delete
     */
    where?: goodsWhereInput
  }


  /**
   * goods without action
   */
  export type goodsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goods
     */
    select?: goodsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goodsInclude<ExtArgs> | null
  }



  /**
   * Model reads
   */

  export type AggregateReads = {
    _count: ReadsCountAggregateOutputType | null
    _avg: ReadsAvgAggregateOutputType | null
    _sum: ReadsSumAggregateOutputType | null
    _min: ReadsMinAggregateOutputType | null
    _max: ReadsMaxAggregateOutputType | null
  }

  export type ReadsAvgAggregateOutputType = {
    userId: number | null
    articleId: number | null
  }

  export type ReadsSumAggregateOutputType = {
    userId: number | null
    articleId: number | null
  }

  export type ReadsMinAggregateOutputType = {
    userId: number | null
    read_created: Date | null
    articleId: number | null
  }

  export type ReadsMaxAggregateOutputType = {
    userId: number | null
    read_created: Date | null
    articleId: number | null
  }

  export type ReadsCountAggregateOutputType = {
    userId: number
    read_created: number
    articleId: number
    _all: number
  }


  export type ReadsAvgAggregateInputType = {
    userId?: true
    articleId?: true
  }

  export type ReadsSumAggregateInputType = {
    userId?: true
    articleId?: true
  }

  export type ReadsMinAggregateInputType = {
    userId?: true
    read_created?: true
    articleId?: true
  }

  export type ReadsMaxAggregateInputType = {
    userId?: true
    read_created?: true
    articleId?: true
  }

  export type ReadsCountAggregateInputType = {
    userId?: true
    read_created?: true
    articleId?: true
    _all?: true
  }

  export type ReadsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reads to aggregate.
     */
    where?: readsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reads to fetch.
     */
    orderBy?: readsOrderByWithRelationInput | readsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: readsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reads
    **/
    _count?: true | ReadsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReadsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReadsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReadsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReadsMaxAggregateInputType
  }

  export type GetReadsAggregateType<T extends ReadsAggregateArgs> = {
        [P in keyof T & keyof AggregateReads]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReads[P]>
      : GetScalarType<T[P], AggregateReads[P]>
  }




  export type readsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: readsWhereInput
    orderBy?: readsOrderByWithAggregationInput | readsOrderByWithAggregationInput[]
    by: ReadsScalarFieldEnum[] | ReadsScalarFieldEnum
    having?: readsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReadsCountAggregateInputType | true
    _avg?: ReadsAvgAggregateInputType
    _sum?: ReadsSumAggregateInputType
    _min?: ReadsMinAggregateInputType
    _max?: ReadsMaxAggregateInputType
  }

  export type ReadsGroupByOutputType = {
    userId: number
    read_created: Date
    articleId: number
    _count: ReadsCountAggregateOutputType | null
    _avg: ReadsAvgAggregateOutputType | null
    _sum: ReadsSumAggregateOutputType | null
    _min: ReadsMinAggregateOutputType | null
    _max: ReadsMaxAggregateOutputType | null
  }

  type GetReadsGroupByPayload<T extends readsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReadsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReadsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReadsGroupByOutputType[P]>
            : GetScalarType<T[P], ReadsGroupByOutputType[P]>
        }
      >
    >


  export type readsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    read_created?: boolean
    articleId?: boolean
    author1?: boolean | usersDefaultArgs<ExtArgs>
    author2?: boolean | articlesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reads"]>

  export type readsSelectScalar = {
    userId?: boolean
    read_created?: boolean
    articleId?: boolean
  }

  export type readsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author1?: boolean | usersDefaultArgs<ExtArgs>
    author2?: boolean | articlesDefaultArgs<ExtArgs>
  }


  export type $readsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reads"
    objects: {
      author1: Prisma.$usersPayload<ExtArgs>
      author2: Prisma.$articlesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      read_created: Date
      articleId: number
    }, ExtArgs["result"]["reads"]>
    composites: {}
  }


  type readsGetPayload<S extends boolean | null | undefined | readsDefaultArgs> = $Result.GetResult<Prisma.$readsPayload, S>

  type readsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<readsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ReadsCountAggregateInputType | true
    }

  export interface readsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reads'], meta: { name: 'reads' } }
    /**
     * Find zero or one Reads that matches the filter.
     * @param {readsFindUniqueArgs} args - Arguments to find a Reads
     * @example
     * // Get one Reads
     * const reads = await prisma.reads.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends readsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, readsFindUniqueArgs<ExtArgs>>
    ): Prisma__readsClient<$Result.GetResult<Prisma.$readsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Reads that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {readsFindUniqueOrThrowArgs} args - Arguments to find a Reads
     * @example
     * // Get one Reads
     * const reads = await prisma.reads.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends readsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, readsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__readsClient<$Result.GetResult<Prisma.$readsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Reads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {readsFindFirstArgs} args - Arguments to find a Reads
     * @example
     * // Get one Reads
     * const reads = await prisma.reads.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends readsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, readsFindFirstArgs<ExtArgs>>
    ): Prisma__readsClient<$Result.GetResult<Prisma.$readsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Reads that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {readsFindFirstOrThrowArgs} args - Arguments to find a Reads
     * @example
     * // Get one Reads
     * const reads = await prisma.reads.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends readsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, readsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__readsClient<$Result.GetResult<Prisma.$readsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Reads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {readsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reads
     * const reads = await prisma.reads.findMany()
     * 
     * // Get first 10 Reads
     * const reads = await prisma.reads.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const readsWithUserIdOnly = await prisma.reads.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends readsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, readsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$readsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Reads.
     * @param {readsCreateArgs} args - Arguments to create a Reads.
     * @example
     * // Create one Reads
     * const Reads = await prisma.reads.create({
     *   data: {
     *     // ... data to create a Reads
     *   }
     * })
     * 
    **/
    create<T extends readsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, readsCreateArgs<ExtArgs>>
    ): Prisma__readsClient<$Result.GetResult<Prisma.$readsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Reads.
     *     @param {readsCreateManyArgs} args - Arguments to create many Reads.
     *     @example
     *     // Create many Reads
     *     const reads = await prisma.reads.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends readsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, readsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reads.
     * @param {readsDeleteArgs} args - Arguments to delete one Reads.
     * @example
     * // Delete one Reads
     * const Reads = await prisma.reads.delete({
     *   where: {
     *     // ... filter to delete one Reads
     *   }
     * })
     * 
    **/
    delete<T extends readsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, readsDeleteArgs<ExtArgs>>
    ): Prisma__readsClient<$Result.GetResult<Prisma.$readsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Reads.
     * @param {readsUpdateArgs} args - Arguments to update one Reads.
     * @example
     * // Update one Reads
     * const reads = await prisma.reads.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends readsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, readsUpdateArgs<ExtArgs>>
    ): Prisma__readsClient<$Result.GetResult<Prisma.$readsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Reads.
     * @param {readsDeleteManyArgs} args - Arguments to filter Reads to delete.
     * @example
     * // Delete a few Reads
     * const { count } = await prisma.reads.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends readsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, readsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {readsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reads
     * const reads = await prisma.reads.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends readsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, readsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reads.
     * @param {readsUpsertArgs} args - Arguments to update or create a Reads.
     * @example
     * // Update or create a Reads
     * const reads = await prisma.reads.upsert({
     *   create: {
     *     // ... data to create a Reads
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reads we want to update
     *   }
     * })
    **/
    upsert<T extends readsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, readsUpsertArgs<ExtArgs>>
    ): Prisma__readsClient<$Result.GetResult<Prisma.$readsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Reads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {readsCountArgs} args - Arguments to filter Reads to count.
     * @example
     * // Count the number of Reads
     * const count = await prisma.reads.count({
     *   where: {
     *     // ... the filter for the Reads we want to count
     *   }
     * })
    **/
    count<T extends readsCountArgs>(
      args?: Subset<T, readsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReadsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReadsAggregateArgs>(args: Subset<T, ReadsAggregateArgs>): Prisma.PrismaPromise<GetReadsAggregateType<T>>

    /**
     * Group by Reads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {readsGroupByArgs} args - Group by arguments.
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
      T extends readsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: readsGroupByArgs['orderBy'] }
        : { orderBy?: readsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, readsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReadsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reads model
   */
  readonly fields: readsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reads.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__readsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author1<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    author2<T extends articlesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, articlesDefaultArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the reads model
   */ 
  interface readsFieldRefs {
    readonly userId: FieldRef<"reads", 'Int'>
    readonly read_created: FieldRef<"reads", 'DateTime'>
    readonly articleId: FieldRef<"reads", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * reads findUnique
   */
  export type readsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reads
     */
    select?: readsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: readsInclude<ExtArgs> | null
    /**
     * Filter, which reads to fetch.
     */
    where: readsWhereUniqueInput
  }


  /**
   * reads findUniqueOrThrow
   */
  export type readsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reads
     */
    select?: readsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: readsInclude<ExtArgs> | null
    /**
     * Filter, which reads to fetch.
     */
    where: readsWhereUniqueInput
  }


  /**
   * reads findFirst
   */
  export type readsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reads
     */
    select?: readsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: readsInclude<ExtArgs> | null
    /**
     * Filter, which reads to fetch.
     */
    where?: readsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reads to fetch.
     */
    orderBy?: readsOrderByWithRelationInput | readsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reads.
     */
    cursor?: readsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reads.
     */
    distinct?: ReadsScalarFieldEnum | ReadsScalarFieldEnum[]
  }


  /**
   * reads findFirstOrThrow
   */
  export type readsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reads
     */
    select?: readsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: readsInclude<ExtArgs> | null
    /**
     * Filter, which reads to fetch.
     */
    where?: readsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reads to fetch.
     */
    orderBy?: readsOrderByWithRelationInput | readsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reads.
     */
    cursor?: readsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reads.
     */
    distinct?: ReadsScalarFieldEnum | ReadsScalarFieldEnum[]
  }


  /**
   * reads findMany
   */
  export type readsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reads
     */
    select?: readsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: readsInclude<ExtArgs> | null
    /**
     * Filter, which reads to fetch.
     */
    where?: readsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reads to fetch.
     */
    orderBy?: readsOrderByWithRelationInput | readsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reads.
     */
    cursor?: readsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reads.
     */
    skip?: number
    distinct?: ReadsScalarFieldEnum | ReadsScalarFieldEnum[]
  }


  /**
   * reads create
   */
  export type readsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reads
     */
    select?: readsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: readsInclude<ExtArgs> | null
    /**
     * The data needed to create a reads.
     */
    data: XOR<readsCreateInput, readsUncheckedCreateInput>
  }


  /**
   * reads createMany
   */
  export type readsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reads.
     */
    data: readsCreateManyInput | readsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * reads update
   */
  export type readsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reads
     */
    select?: readsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: readsInclude<ExtArgs> | null
    /**
     * The data needed to update a reads.
     */
    data: XOR<readsUpdateInput, readsUncheckedUpdateInput>
    /**
     * Choose, which reads to update.
     */
    where: readsWhereUniqueInput
  }


  /**
   * reads updateMany
   */
  export type readsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reads.
     */
    data: XOR<readsUpdateManyMutationInput, readsUncheckedUpdateManyInput>
    /**
     * Filter which reads to update
     */
    where?: readsWhereInput
  }


  /**
   * reads upsert
   */
  export type readsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reads
     */
    select?: readsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: readsInclude<ExtArgs> | null
    /**
     * The filter to search for the reads to update in case it exists.
     */
    where: readsWhereUniqueInput
    /**
     * In case the reads found by the `where` argument doesn't exist, create a new reads with this data.
     */
    create: XOR<readsCreateInput, readsUncheckedCreateInput>
    /**
     * In case the reads was found with the provided `where` argument, update it with this data.
     */
    update: XOR<readsUpdateInput, readsUncheckedUpdateInput>
  }


  /**
   * reads delete
   */
  export type readsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reads
     */
    select?: readsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: readsInclude<ExtArgs> | null
    /**
     * Filter which reads to delete.
     */
    where: readsWhereUniqueInput
  }


  /**
   * reads deleteMany
   */
  export type readsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reads to delete
     */
    where?: readsWhereInput
  }


  /**
   * reads without action
   */
  export type readsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reads
     */
    select?: readsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: readsInclude<ExtArgs> | null
  }



  /**
   * Model maintags
   */

  export type AggregateMaintags = {
    _count: MaintagsCountAggregateOutputType | null
    _avg: MaintagsAvgAggregateOutputType | null
    _sum: MaintagsSumAggregateOutputType | null
    _min: MaintagsMinAggregateOutputType | null
    _max: MaintagsMaxAggregateOutputType | null
  }

  export type MaintagsAvgAggregateOutputType = {
    articleId: number | null
    tagId: number | null
  }

  export type MaintagsSumAggregateOutputType = {
    articleId: number | null
    tagId: number | null
  }

  export type MaintagsMinAggregateOutputType = {
    articleId: number | null
    tagId: number | null
  }

  export type MaintagsMaxAggregateOutputType = {
    articleId: number | null
    tagId: number | null
  }

  export type MaintagsCountAggregateOutputType = {
    articleId: number
    tagId: number
    _all: number
  }


  export type MaintagsAvgAggregateInputType = {
    articleId?: true
    tagId?: true
  }

  export type MaintagsSumAggregateInputType = {
    articleId?: true
    tagId?: true
  }

  export type MaintagsMinAggregateInputType = {
    articleId?: true
    tagId?: true
  }

  export type MaintagsMaxAggregateInputType = {
    articleId?: true
    tagId?: true
  }

  export type MaintagsCountAggregateInputType = {
    articleId?: true
    tagId?: true
    _all?: true
  }

  export type MaintagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which maintags to aggregate.
     */
    where?: maintagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maintags to fetch.
     */
    orderBy?: maintagsOrderByWithRelationInput | maintagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: maintagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maintags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maintags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned maintags
    **/
    _count?: true | MaintagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaintagsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaintagsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaintagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaintagsMaxAggregateInputType
  }

  export type GetMaintagsAggregateType<T extends MaintagsAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintags[P]>
      : GetScalarType<T[P], AggregateMaintags[P]>
  }




  export type maintagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: maintagsWhereInput
    orderBy?: maintagsOrderByWithAggregationInput | maintagsOrderByWithAggregationInput[]
    by: MaintagsScalarFieldEnum[] | MaintagsScalarFieldEnum
    having?: maintagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaintagsCountAggregateInputType | true
    _avg?: MaintagsAvgAggregateInputType
    _sum?: MaintagsSumAggregateInputType
    _min?: MaintagsMinAggregateInputType
    _max?: MaintagsMaxAggregateInputType
  }

  export type MaintagsGroupByOutputType = {
    articleId: number
    tagId: number
    _count: MaintagsCountAggregateOutputType | null
    _avg: MaintagsAvgAggregateOutputType | null
    _sum: MaintagsSumAggregateOutputType | null
    _min: MaintagsMinAggregateOutputType | null
    _max: MaintagsMaxAggregateOutputType | null
  }

  type GetMaintagsGroupByPayload<T extends maintagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaintagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaintagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaintagsGroupByOutputType[P]>
            : GetScalarType<T[P], MaintagsGroupByOutputType[P]>
        }
      >
    >


  export type maintagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    articleId?: boolean
    tagId?: boolean
    author1?: boolean | articlesDefaultArgs<ExtArgs>
    author2?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintags"]>

  export type maintagsSelectScalar = {
    articleId?: boolean
    tagId?: boolean
  }

  export type maintagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author1?: boolean | articlesDefaultArgs<ExtArgs>
    author2?: boolean | tagsDefaultArgs<ExtArgs>
  }


  export type $maintagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "maintags"
    objects: {
      author1: Prisma.$articlesPayload<ExtArgs>
      author2: Prisma.$tagsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      articleId: number
      tagId: number
    }, ExtArgs["result"]["maintags"]>
    composites: {}
  }


  type maintagsGetPayload<S extends boolean | null | undefined | maintagsDefaultArgs> = $Result.GetResult<Prisma.$maintagsPayload, S>

  type maintagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<maintagsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: MaintagsCountAggregateInputType | true
    }

  export interface maintagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['maintags'], meta: { name: 'maintags' } }
    /**
     * Find zero or one Maintags that matches the filter.
     * @param {maintagsFindUniqueArgs} args - Arguments to find a Maintags
     * @example
     * // Get one Maintags
     * const maintags = await prisma.maintags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends maintagsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, maintagsFindUniqueArgs<ExtArgs>>
    ): Prisma__maintagsClient<$Result.GetResult<Prisma.$maintagsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Maintags that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {maintagsFindUniqueOrThrowArgs} args - Arguments to find a Maintags
     * @example
     * // Get one Maintags
     * const maintags = await prisma.maintags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends maintagsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, maintagsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__maintagsClient<$Result.GetResult<Prisma.$maintagsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Maintags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintagsFindFirstArgs} args - Arguments to find a Maintags
     * @example
     * // Get one Maintags
     * const maintags = await prisma.maintags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends maintagsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, maintagsFindFirstArgs<ExtArgs>>
    ): Prisma__maintagsClient<$Result.GetResult<Prisma.$maintagsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Maintags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintagsFindFirstOrThrowArgs} args - Arguments to find a Maintags
     * @example
     * // Get one Maintags
     * const maintags = await prisma.maintags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends maintagsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, maintagsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__maintagsClient<$Result.GetResult<Prisma.$maintagsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Maintags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintagsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Maintags
     * const maintags = await prisma.maintags.findMany()
     * 
     * // Get first 10 Maintags
     * const maintags = await prisma.maintags.findMany({ take: 10 })
     * 
     * // Only select the `articleId`
     * const maintagsWithArticleIdOnly = await prisma.maintags.findMany({ select: { articleId: true } })
     * 
    **/
    findMany<T extends maintagsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, maintagsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$maintagsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Maintags.
     * @param {maintagsCreateArgs} args - Arguments to create a Maintags.
     * @example
     * // Create one Maintags
     * const Maintags = await prisma.maintags.create({
     *   data: {
     *     // ... data to create a Maintags
     *   }
     * })
     * 
    **/
    create<T extends maintagsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, maintagsCreateArgs<ExtArgs>>
    ): Prisma__maintagsClient<$Result.GetResult<Prisma.$maintagsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Maintags.
     *     @param {maintagsCreateManyArgs} args - Arguments to create many Maintags.
     *     @example
     *     // Create many Maintags
     *     const maintags = await prisma.maintags.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends maintagsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, maintagsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Maintags.
     * @param {maintagsDeleteArgs} args - Arguments to delete one Maintags.
     * @example
     * // Delete one Maintags
     * const Maintags = await prisma.maintags.delete({
     *   where: {
     *     // ... filter to delete one Maintags
     *   }
     * })
     * 
    **/
    delete<T extends maintagsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, maintagsDeleteArgs<ExtArgs>>
    ): Prisma__maintagsClient<$Result.GetResult<Prisma.$maintagsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Maintags.
     * @param {maintagsUpdateArgs} args - Arguments to update one Maintags.
     * @example
     * // Update one Maintags
     * const maintags = await prisma.maintags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends maintagsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, maintagsUpdateArgs<ExtArgs>>
    ): Prisma__maintagsClient<$Result.GetResult<Prisma.$maintagsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Maintags.
     * @param {maintagsDeleteManyArgs} args - Arguments to filter Maintags to delete.
     * @example
     * // Delete a few Maintags
     * const { count } = await prisma.maintags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends maintagsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, maintagsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maintags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Maintags
     * const maintags = await prisma.maintags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends maintagsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, maintagsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Maintags.
     * @param {maintagsUpsertArgs} args - Arguments to update or create a Maintags.
     * @example
     * // Update or create a Maintags
     * const maintags = await prisma.maintags.upsert({
     *   create: {
     *     // ... data to create a Maintags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Maintags we want to update
     *   }
     * })
    **/
    upsert<T extends maintagsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, maintagsUpsertArgs<ExtArgs>>
    ): Prisma__maintagsClient<$Result.GetResult<Prisma.$maintagsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Maintags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintagsCountArgs} args - Arguments to filter Maintags to count.
     * @example
     * // Count the number of Maintags
     * const count = await prisma.maintags.count({
     *   where: {
     *     // ... the filter for the Maintags we want to count
     *   }
     * })
    **/
    count<T extends maintagsCountArgs>(
      args?: Subset<T, maintagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaintagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Maintags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaintagsAggregateArgs>(args: Subset<T, MaintagsAggregateArgs>): Prisma.PrismaPromise<GetMaintagsAggregateType<T>>

    /**
     * Group by Maintags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintagsGroupByArgs} args - Group by arguments.
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
      T extends maintagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: maintagsGroupByArgs['orderBy'] }
        : { orderBy?: maintagsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, maintagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the maintags model
   */
  readonly fields: maintagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for maintags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__maintagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author1<T extends articlesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, articlesDefaultArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    author2<T extends tagsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tagsDefaultArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the maintags model
   */ 
  interface maintagsFieldRefs {
    readonly articleId: FieldRef<"maintags", 'Int'>
    readonly tagId: FieldRef<"maintags", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * maintags findUnique
   */
  export type maintagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintags
     */
    select?: maintagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: maintagsInclude<ExtArgs> | null
    /**
     * Filter, which maintags to fetch.
     */
    where: maintagsWhereUniqueInput
  }


  /**
   * maintags findUniqueOrThrow
   */
  export type maintagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintags
     */
    select?: maintagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: maintagsInclude<ExtArgs> | null
    /**
     * Filter, which maintags to fetch.
     */
    where: maintagsWhereUniqueInput
  }


  /**
   * maintags findFirst
   */
  export type maintagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintags
     */
    select?: maintagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: maintagsInclude<ExtArgs> | null
    /**
     * Filter, which maintags to fetch.
     */
    where?: maintagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maintags to fetch.
     */
    orderBy?: maintagsOrderByWithRelationInput | maintagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for maintags.
     */
    cursor?: maintagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maintags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maintags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of maintags.
     */
    distinct?: MaintagsScalarFieldEnum | MaintagsScalarFieldEnum[]
  }


  /**
   * maintags findFirstOrThrow
   */
  export type maintagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintags
     */
    select?: maintagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: maintagsInclude<ExtArgs> | null
    /**
     * Filter, which maintags to fetch.
     */
    where?: maintagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maintags to fetch.
     */
    orderBy?: maintagsOrderByWithRelationInput | maintagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for maintags.
     */
    cursor?: maintagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maintags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maintags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of maintags.
     */
    distinct?: MaintagsScalarFieldEnum | MaintagsScalarFieldEnum[]
  }


  /**
   * maintags findMany
   */
  export type maintagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintags
     */
    select?: maintagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: maintagsInclude<ExtArgs> | null
    /**
     * Filter, which maintags to fetch.
     */
    where?: maintagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maintags to fetch.
     */
    orderBy?: maintagsOrderByWithRelationInput | maintagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing maintags.
     */
    cursor?: maintagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maintags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maintags.
     */
    skip?: number
    distinct?: MaintagsScalarFieldEnum | MaintagsScalarFieldEnum[]
  }


  /**
   * maintags create
   */
  export type maintagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintags
     */
    select?: maintagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: maintagsInclude<ExtArgs> | null
    /**
     * The data needed to create a maintags.
     */
    data: XOR<maintagsCreateInput, maintagsUncheckedCreateInput>
  }


  /**
   * maintags createMany
   */
  export type maintagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many maintags.
     */
    data: maintagsCreateManyInput | maintagsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * maintags update
   */
  export type maintagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintags
     */
    select?: maintagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: maintagsInclude<ExtArgs> | null
    /**
     * The data needed to update a maintags.
     */
    data: XOR<maintagsUpdateInput, maintagsUncheckedUpdateInput>
    /**
     * Choose, which maintags to update.
     */
    where: maintagsWhereUniqueInput
  }


  /**
   * maintags updateMany
   */
  export type maintagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update maintags.
     */
    data: XOR<maintagsUpdateManyMutationInput, maintagsUncheckedUpdateManyInput>
    /**
     * Filter which maintags to update
     */
    where?: maintagsWhereInput
  }


  /**
   * maintags upsert
   */
  export type maintagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintags
     */
    select?: maintagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: maintagsInclude<ExtArgs> | null
    /**
     * The filter to search for the maintags to update in case it exists.
     */
    where: maintagsWhereUniqueInput
    /**
     * In case the maintags found by the `where` argument doesn't exist, create a new maintags with this data.
     */
    create: XOR<maintagsCreateInput, maintagsUncheckedCreateInput>
    /**
     * In case the maintags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<maintagsUpdateInput, maintagsUncheckedUpdateInput>
  }


  /**
   * maintags delete
   */
  export type maintagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintags
     */
    select?: maintagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: maintagsInclude<ExtArgs> | null
    /**
     * Filter which maintags to delete.
     */
    where: maintagsWhereUniqueInput
  }


  /**
   * maintags deleteMany
   */
  export type maintagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which maintags to delete
     */
    where?: maintagsWhereInput
  }


  /**
   * maintags without action
   */
  export type maintagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintags
     */
    select?: maintagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: maintagsInclude<ExtArgs> | null
  }



  /**
   * Model subtags
   */

  export type AggregateSubtags = {
    _count: SubtagsCountAggregateOutputType | null
    _avg: SubtagsAvgAggregateOutputType | null
    _sum: SubtagsSumAggregateOutputType | null
    _min: SubtagsMinAggregateOutputType | null
    _max: SubtagsMaxAggregateOutputType | null
  }

  export type SubtagsAvgAggregateOutputType = {
    articleId: number | null
    tagId: number | null
  }

  export type SubtagsSumAggregateOutputType = {
    articleId: number | null
    tagId: number | null
  }

  export type SubtagsMinAggregateOutputType = {
    articleId: number | null
    tagId: number | null
  }

  export type SubtagsMaxAggregateOutputType = {
    articleId: number | null
    tagId: number | null
  }

  export type SubtagsCountAggregateOutputType = {
    articleId: number
    tagId: number
    _all: number
  }


  export type SubtagsAvgAggregateInputType = {
    articleId?: true
    tagId?: true
  }

  export type SubtagsSumAggregateInputType = {
    articleId?: true
    tagId?: true
  }

  export type SubtagsMinAggregateInputType = {
    articleId?: true
    tagId?: true
  }

  export type SubtagsMaxAggregateInputType = {
    articleId?: true
    tagId?: true
  }

  export type SubtagsCountAggregateInputType = {
    articleId?: true
    tagId?: true
    _all?: true
  }

  export type SubtagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subtags to aggregate.
     */
    where?: subtagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subtags to fetch.
     */
    orderBy?: subtagsOrderByWithRelationInput | subtagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: subtagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned subtags
    **/
    _count?: true | SubtagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubtagsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubtagsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubtagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubtagsMaxAggregateInputType
  }

  export type GetSubtagsAggregateType<T extends SubtagsAggregateArgs> = {
        [P in keyof T & keyof AggregateSubtags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubtags[P]>
      : GetScalarType<T[P], AggregateSubtags[P]>
  }




  export type subtagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subtagsWhereInput
    orderBy?: subtagsOrderByWithAggregationInput | subtagsOrderByWithAggregationInput[]
    by: SubtagsScalarFieldEnum[] | SubtagsScalarFieldEnum
    having?: subtagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubtagsCountAggregateInputType | true
    _avg?: SubtagsAvgAggregateInputType
    _sum?: SubtagsSumAggregateInputType
    _min?: SubtagsMinAggregateInputType
    _max?: SubtagsMaxAggregateInputType
  }

  export type SubtagsGroupByOutputType = {
    articleId: number
    tagId: number
    _count: SubtagsCountAggregateOutputType | null
    _avg: SubtagsAvgAggregateOutputType | null
    _sum: SubtagsSumAggregateOutputType | null
    _min: SubtagsMinAggregateOutputType | null
    _max: SubtagsMaxAggregateOutputType | null
  }

  type GetSubtagsGroupByPayload<T extends subtagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubtagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubtagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubtagsGroupByOutputType[P]>
            : GetScalarType<T[P], SubtagsGroupByOutputType[P]>
        }
      >
    >


  export type subtagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    articleId?: boolean
    tagId?: boolean
    author1?: boolean | articlesDefaultArgs<ExtArgs>
    author2?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subtags"]>

  export type subtagsSelectScalar = {
    articleId?: boolean
    tagId?: boolean
  }

  export type subtagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author1?: boolean | articlesDefaultArgs<ExtArgs>
    author2?: boolean | tagsDefaultArgs<ExtArgs>
  }


  export type $subtagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "subtags"
    objects: {
      author1: Prisma.$articlesPayload<ExtArgs>
      author2: Prisma.$tagsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      articleId: number
      tagId: number
    }, ExtArgs["result"]["subtags"]>
    composites: {}
  }


  type subtagsGetPayload<S extends boolean | null | undefined | subtagsDefaultArgs> = $Result.GetResult<Prisma.$subtagsPayload, S>

  type subtagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<subtagsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SubtagsCountAggregateInputType | true
    }

  export interface subtagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['subtags'], meta: { name: 'subtags' } }
    /**
     * Find zero or one Subtags that matches the filter.
     * @param {subtagsFindUniqueArgs} args - Arguments to find a Subtags
     * @example
     * // Get one Subtags
     * const subtags = await prisma.subtags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends subtagsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, subtagsFindUniqueArgs<ExtArgs>>
    ): Prisma__subtagsClient<$Result.GetResult<Prisma.$subtagsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Subtags that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {subtagsFindUniqueOrThrowArgs} args - Arguments to find a Subtags
     * @example
     * // Get one Subtags
     * const subtags = await prisma.subtags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends subtagsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, subtagsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__subtagsClient<$Result.GetResult<Prisma.$subtagsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Subtags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subtagsFindFirstArgs} args - Arguments to find a Subtags
     * @example
     * // Get one Subtags
     * const subtags = await prisma.subtags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends subtagsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, subtagsFindFirstArgs<ExtArgs>>
    ): Prisma__subtagsClient<$Result.GetResult<Prisma.$subtagsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Subtags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subtagsFindFirstOrThrowArgs} args - Arguments to find a Subtags
     * @example
     * // Get one Subtags
     * const subtags = await prisma.subtags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends subtagsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, subtagsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__subtagsClient<$Result.GetResult<Prisma.$subtagsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Subtags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subtagsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subtags
     * const subtags = await prisma.subtags.findMany()
     * 
     * // Get first 10 Subtags
     * const subtags = await prisma.subtags.findMany({ take: 10 })
     * 
     * // Only select the `articleId`
     * const subtagsWithArticleIdOnly = await prisma.subtags.findMany({ select: { articleId: true } })
     * 
    **/
    findMany<T extends subtagsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subtagsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subtagsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Subtags.
     * @param {subtagsCreateArgs} args - Arguments to create a Subtags.
     * @example
     * // Create one Subtags
     * const Subtags = await prisma.subtags.create({
     *   data: {
     *     // ... data to create a Subtags
     *   }
     * })
     * 
    **/
    create<T extends subtagsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, subtagsCreateArgs<ExtArgs>>
    ): Prisma__subtagsClient<$Result.GetResult<Prisma.$subtagsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Subtags.
     *     @param {subtagsCreateManyArgs} args - Arguments to create many Subtags.
     *     @example
     *     // Create many Subtags
     *     const subtags = await prisma.subtags.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends subtagsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subtagsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subtags.
     * @param {subtagsDeleteArgs} args - Arguments to delete one Subtags.
     * @example
     * // Delete one Subtags
     * const Subtags = await prisma.subtags.delete({
     *   where: {
     *     // ... filter to delete one Subtags
     *   }
     * })
     * 
    **/
    delete<T extends subtagsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, subtagsDeleteArgs<ExtArgs>>
    ): Prisma__subtagsClient<$Result.GetResult<Prisma.$subtagsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Subtags.
     * @param {subtagsUpdateArgs} args - Arguments to update one Subtags.
     * @example
     * // Update one Subtags
     * const subtags = await prisma.subtags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends subtagsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, subtagsUpdateArgs<ExtArgs>>
    ): Prisma__subtagsClient<$Result.GetResult<Prisma.$subtagsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Subtags.
     * @param {subtagsDeleteManyArgs} args - Arguments to filter Subtags to delete.
     * @example
     * // Delete a few Subtags
     * const { count } = await prisma.subtags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends subtagsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subtagsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subtagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subtags
     * const subtags = await prisma.subtags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends subtagsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, subtagsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subtags.
     * @param {subtagsUpsertArgs} args - Arguments to update or create a Subtags.
     * @example
     * // Update or create a Subtags
     * const subtags = await prisma.subtags.upsert({
     *   create: {
     *     // ... data to create a Subtags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subtags we want to update
     *   }
     * })
    **/
    upsert<T extends subtagsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, subtagsUpsertArgs<ExtArgs>>
    ): Prisma__subtagsClient<$Result.GetResult<Prisma.$subtagsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Subtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subtagsCountArgs} args - Arguments to filter Subtags to count.
     * @example
     * // Count the number of Subtags
     * const count = await prisma.subtags.count({
     *   where: {
     *     // ... the filter for the Subtags we want to count
     *   }
     * })
    **/
    count<T extends subtagsCountArgs>(
      args?: Subset<T, subtagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubtagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubtagsAggregateArgs>(args: Subset<T, SubtagsAggregateArgs>): Prisma.PrismaPromise<GetSubtagsAggregateType<T>>

    /**
     * Group by Subtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subtagsGroupByArgs} args - Group by arguments.
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
      T extends subtagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subtagsGroupByArgs['orderBy'] }
        : { orderBy?: subtagsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, subtagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubtagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the subtags model
   */
  readonly fields: subtagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subtags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subtagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author1<T extends articlesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, articlesDefaultArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    author2<T extends tagsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tagsDefaultArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the subtags model
   */ 
  interface subtagsFieldRefs {
    readonly articleId: FieldRef<"subtags", 'Int'>
    readonly tagId: FieldRef<"subtags", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * subtags findUnique
   */
  export type subtagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtags
     */
    select?: subtagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subtagsInclude<ExtArgs> | null
    /**
     * Filter, which subtags to fetch.
     */
    where: subtagsWhereUniqueInput
  }


  /**
   * subtags findUniqueOrThrow
   */
  export type subtagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtags
     */
    select?: subtagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subtagsInclude<ExtArgs> | null
    /**
     * Filter, which subtags to fetch.
     */
    where: subtagsWhereUniqueInput
  }


  /**
   * subtags findFirst
   */
  export type subtagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtags
     */
    select?: subtagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subtagsInclude<ExtArgs> | null
    /**
     * Filter, which subtags to fetch.
     */
    where?: subtagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subtags to fetch.
     */
    orderBy?: subtagsOrderByWithRelationInput | subtagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subtags.
     */
    cursor?: subtagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subtags.
     */
    distinct?: SubtagsScalarFieldEnum | SubtagsScalarFieldEnum[]
  }


  /**
   * subtags findFirstOrThrow
   */
  export type subtagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtags
     */
    select?: subtagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subtagsInclude<ExtArgs> | null
    /**
     * Filter, which subtags to fetch.
     */
    where?: subtagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subtags to fetch.
     */
    orderBy?: subtagsOrderByWithRelationInput | subtagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subtags.
     */
    cursor?: subtagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subtags.
     */
    distinct?: SubtagsScalarFieldEnum | SubtagsScalarFieldEnum[]
  }


  /**
   * subtags findMany
   */
  export type subtagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtags
     */
    select?: subtagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subtagsInclude<ExtArgs> | null
    /**
     * Filter, which subtags to fetch.
     */
    where?: subtagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subtags to fetch.
     */
    orderBy?: subtagsOrderByWithRelationInput | subtagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing subtags.
     */
    cursor?: subtagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subtags.
     */
    skip?: number
    distinct?: SubtagsScalarFieldEnum | SubtagsScalarFieldEnum[]
  }


  /**
   * subtags create
   */
  export type subtagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtags
     */
    select?: subtagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subtagsInclude<ExtArgs> | null
    /**
     * The data needed to create a subtags.
     */
    data: XOR<subtagsCreateInput, subtagsUncheckedCreateInput>
  }


  /**
   * subtags createMany
   */
  export type subtagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subtags.
     */
    data: subtagsCreateManyInput | subtagsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * subtags update
   */
  export type subtagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtags
     */
    select?: subtagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subtagsInclude<ExtArgs> | null
    /**
     * The data needed to update a subtags.
     */
    data: XOR<subtagsUpdateInput, subtagsUncheckedUpdateInput>
    /**
     * Choose, which subtags to update.
     */
    where: subtagsWhereUniqueInput
  }


  /**
   * subtags updateMany
   */
  export type subtagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subtags.
     */
    data: XOR<subtagsUpdateManyMutationInput, subtagsUncheckedUpdateManyInput>
    /**
     * Filter which subtags to update
     */
    where?: subtagsWhereInput
  }


  /**
   * subtags upsert
   */
  export type subtagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtags
     */
    select?: subtagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subtagsInclude<ExtArgs> | null
    /**
     * The filter to search for the subtags to update in case it exists.
     */
    where: subtagsWhereUniqueInput
    /**
     * In case the subtags found by the `where` argument doesn't exist, create a new subtags with this data.
     */
    create: XOR<subtagsCreateInput, subtagsUncheckedCreateInput>
    /**
     * In case the subtags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subtagsUpdateInput, subtagsUncheckedUpdateInput>
  }


  /**
   * subtags delete
   */
  export type subtagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtags
     */
    select?: subtagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subtagsInclude<ExtArgs> | null
    /**
     * Filter which subtags to delete.
     */
    where: subtagsWhereUniqueInput
  }


  /**
   * subtags deleteMany
   */
  export type subtagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subtags to delete
     */
    where?: subtagsWhereInput
  }


  /**
   * subtags without action
   */
  export type subtagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtags
     */
    select?: subtagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subtagsInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    user_name: 'user_name',
    user_mail: 'user_mail',
    user_pass: 'user_pass',
    user_created: 'user_created',
    user_icon: 'user_icon',
    user_coment: 'user_coment'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const FollowsScalarFieldEnum: {
    follow_id: 'follow_id'
  };

  export type FollowsScalarFieldEnum = (typeof FollowsScalarFieldEnum)[keyof typeof FollowsScalarFieldEnum]


  export const TagsScalarFieldEnum: {
    tag_id: 'tag_id',
    tag_name: 'tag_name',
    userId: 'userId'
  };

  export type TagsScalarFieldEnum = (typeof TagsScalarFieldEnum)[keyof typeof TagsScalarFieldEnum]


  export const ArticlesScalarFieldEnum: {
    article_id: 'article_id',
    article_title: 'article_title',
    article_image: 'article_image',
    article_created: 'article_created',
    article_updated: 'article_updated',
    userId: 'userId'
  };

  export type ArticlesScalarFieldEnum = (typeof ArticlesScalarFieldEnum)[keyof typeof ArticlesScalarFieldEnum]


  export const GoodsScalarFieldEnum: {
    userId: 'userId',
    articleId: 'articleId',
    good_created: 'good_created'
  };

  export type GoodsScalarFieldEnum = (typeof GoodsScalarFieldEnum)[keyof typeof GoodsScalarFieldEnum]


  export const ReadsScalarFieldEnum: {
    userId: 'userId',
    read_created: 'read_created',
    articleId: 'articleId'
  };

  export type ReadsScalarFieldEnum = (typeof ReadsScalarFieldEnum)[keyof typeof ReadsScalarFieldEnum]


  export const MaintagsScalarFieldEnum: {
    articleId: 'articleId',
    tagId: 'tagId'
  };

  export type MaintagsScalarFieldEnum = (typeof MaintagsScalarFieldEnum)[keyof typeof MaintagsScalarFieldEnum]


  export const SubtagsScalarFieldEnum: {
    articleId: 'articleId',
    tagId: 'tagId'
  };

  export type SubtagsScalarFieldEnum = (typeof SubtagsScalarFieldEnum)[keyof typeof SubtagsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_id?: IntFilter<"users"> | number
    user_name?: StringFilter<"users"> | string
    user_mail?: StringFilter<"users"> | string
    user_pass?: StringFilter<"users"> | string
    user_created?: DateTimeFilter<"users"> | Date | string
    user_icon?: StringFilter<"users"> | string
    user_coment?: StringFilter<"users"> | string
    follow?: FollowsListRelationFilter
    article?: ArticlesListRelationFilter
    tag?: TagsListRelationFilter
    good?: GoodsListRelationFilter
    read?: ReadsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    user_mail?: SortOrder
    user_pass?: SortOrder
    user_created?: SortOrder
    user_icon?: SortOrder
    user_coment?: SortOrder
    follow?: followsOrderByRelationAggregateInput
    article?: articlesOrderByRelationAggregateInput
    tag?: tagsOrderByRelationAggregateInput
    good?: goodsOrderByRelationAggregateInput
    read?: readsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    user_mail?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_name?: StringFilter<"users"> | string
    user_pass?: StringFilter<"users"> | string
    user_created?: DateTimeFilter<"users"> | Date | string
    user_icon?: StringFilter<"users"> | string
    user_coment?: StringFilter<"users"> | string
    follow?: FollowsListRelationFilter
    article?: ArticlesListRelationFilter
    tag?: TagsListRelationFilter
    good?: GoodsListRelationFilter
    read?: ReadsListRelationFilter
  }, "user_id" | "user_mail">

  export type usersOrderByWithAggregationInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    user_mail?: SortOrder
    user_pass?: SortOrder
    user_created?: SortOrder
    user_icon?: SortOrder
    user_coment?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"users"> | number
    user_name?: StringWithAggregatesFilter<"users"> | string
    user_mail?: StringWithAggregatesFilter<"users"> | string
    user_pass?: StringWithAggregatesFilter<"users"> | string
    user_created?: DateTimeWithAggregatesFilter<"users"> | Date | string
    user_icon?: StringWithAggregatesFilter<"users"> | string
    user_coment?: StringWithAggregatesFilter<"users"> | string
  }

  export type followsWhereInput = {
    AND?: followsWhereInput | followsWhereInput[]
    OR?: followsWhereInput[]
    NOT?: followsWhereInput | followsWhereInput[]
    follow_id?: IntFilter<"follows"> | number
    author1?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type followsOrderByWithRelationInput = {
    follow_id?: SortOrder
    author1?: usersOrderByWithRelationInput
  }

  export type followsWhereUniqueInput = Prisma.AtLeast<{
    follow_id?: number
    AND?: followsWhereInput | followsWhereInput[]
    OR?: followsWhereInput[]
    NOT?: followsWhereInput | followsWhereInput[]
    author1?: XOR<UsersRelationFilter, usersWhereInput>
  }, "follow_id">

  export type followsOrderByWithAggregationInput = {
    follow_id?: SortOrder
    _count?: followsCountOrderByAggregateInput
    _avg?: followsAvgOrderByAggregateInput
    _max?: followsMaxOrderByAggregateInput
    _min?: followsMinOrderByAggregateInput
    _sum?: followsSumOrderByAggregateInput
  }

  export type followsScalarWhereWithAggregatesInput = {
    AND?: followsScalarWhereWithAggregatesInput | followsScalarWhereWithAggregatesInput[]
    OR?: followsScalarWhereWithAggregatesInput[]
    NOT?: followsScalarWhereWithAggregatesInput | followsScalarWhereWithAggregatesInput[]
    follow_id?: IntWithAggregatesFilter<"follows"> | number
  }

  export type tagsWhereInput = {
    AND?: tagsWhereInput | tagsWhereInput[]
    OR?: tagsWhereInput[]
    NOT?: tagsWhereInput | tagsWhereInput[]
    tag_id?: IntFilter<"tags"> | number
    tag_name?: StringFilter<"tags"> | string
    userId?: IntFilter<"tags"> | number
    author?: XOR<UsersRelationFilter, usersWhereInput>
    maintag?: XOR<MaintagsNullableRelationFilter, maintagsWhereInput> | null
    subtag?: SubtagsListRelationFilter
  }

  export type tagsOrderByWithRelationInput = {
    tag_id?: SortOrder
    tag_name?: SortOrder
    userId?: SortOrder
    author?: usersOrderByWithRelationInput
    maintag?: maintagsOrderByWithRelationInput
    subtag?: subtagsOrderByRelationAggregateInput
  }

  export type tagsWhereUniqueInput = Prisma.AtLeast<{
    tag_id?: number
    AND?: tagsWhereInput | tagsWhereInput[]
    OR?: tagsWhereInput[]
    NOT?: tagsWhereInput | tagsWhereInput[]
    tag_name?: StringFilter<"tags"> | string
    userId?: IntFilter<"tags"> | number
    author?: XOR<UsersRelationFilter, usersWhereInput>
    maintag?: XOR<MaintagsNullableRelationFilter, maintagsWhereInput> | null
    subtag?: SubtagsListRelationFilter
  }, "tag_id">

  export type tagsOrderByWithAggregationInput = {
    tag_id?: SortOrder
    tag_name?: SortOrder
    userId?: SortOrder
    _count?: tagsCountOrderByAggregateInput
    _avg?: tagsAvgOrderByAggregateInput
    _max?: tagsMaxOrderByAggregateInput
    _min?: tagsMinOrderByAggregateInput
    _sum?: tagsSumOrderByAggregateInput
  }

  export type tagsScalarWhereWithAggregatesInput = {
    AND?: tagsScalarWhereWithAggregatesInput | tagsScalarWhereWithAggregatesInput[]
    OR?: tagsScalarWhereWithAggregatesInput[]
    NOT?: tagsScalarWhereWithAggregatesInput | tagsScalarWhereWithAggregatesInput[]
    tag_id?: IntWithAggregatesFilter<"tags"> | number
    tag_name?: StringWithAggregatesFilter<"tags"> | string
    userId?: IntWithAggregatesFilter<"tags"> | number
  }

  export type articlesWhereInput = {
    AND?: articlesWhereInput | articlesWhereInput[]
    OR?: articlesWhereInput[]
    NOT?: articlesWhereInput | articlesWhereInput[]
    article_id?: IntFilter<"articles"> | number
    article_title?: StringFilter<"articles"> | string
    article_image?: StringFilter<"articles"> | string
    article_created?: DateTimeFilter<"articles"> | Date | string
    article_updated?: DateTimeFilter<"articles"> | Date | string
    userId?: IntFilter<"articles"> | number
    author?: XOR<UsersRelationFilter, usersWhereInput>
    maintag?: XOR<MaintagsNullableRelationFilter, maintagsWhereInput> | null
    subtag?: SubtagsListRelationFilter
    read?: ReadsListRelationFilter
    good?: GoodsListRelationFilter
  }

  export type articlesOrderByWithRelationInput = {
    article_id?: SortOrder
    article_title?: SortOrder
    article_image?: SortOrder
    article_created?: SortOrder
    article_updated?: SortOrder
    userId?: SortOrder
    author?: usersOrderByWithRelationInput
    maintag?: maintagsOrderByWithRelationInput
    subtag?: subtagsOrderByRelationAggregateInput
    read?: readsOrderByRelationAggregateInput
    good?: goodsOrderByRelationAggregateInput
  }

  export type articlesWhereUniqueInput = Prisma.AtLeast<{
    article_id?: number
    AND?: articlesWhereInput | articlesWhereInput[]
    OR?: articlesWhereInput[]
    NOT?: articlesWhereInput | articlesWhereInput[]
    article_title?: StringFilter<"articles"> | string
    article_image?: StringFilter<"articles"> | string
    article_created?: DateTimeFilter<"articles"> | Date | string
    article_updated?: DateTimeFilter<"articles"> | Date | string
    userId?: IntFilter<"articles"> | number
    author?: XOR<UsersRelationFilter, usersWhereInput>
    maintag?: XOR<MaintagsNullableRelationFilter, maintagsWhereInput> | null
    subtag?: SubtagsListRelationFilter
    read?: ReadsListRelationFilter
    good?: GoodsListRelationFilter
  }, "article_id">

  export type articlesOrderByWithAggregationInput = {
    article_id?: SortOrder
    article_title?: SortOrder
    article_image?: SortOrder
    article_created?: SortOrder
    article_updated?: SortOrder
    userId?: SortOrder
    _count?: articlesCountOrderByAggregateInput
    _avg?: articlesAvgOrderByAggregateInput
    _max?: articlesMaxOrderByAggregateInput
    _min?: articlesMinOrderByAggregateInput
    _sum?: articlesSumOrderByAggregateInput
  }

  export type articlesScalarWhereWithAggregatesInput = {
    AND?: articlesScalarWhereWithAggregatesInput | articlesScalarWhereWithAggregatesInput[]
    OR?: articlesScalarWhereWithAggregatesInput[]
    NOT?: articlesScalarWhereWithAggregatesInput | articlesScalarWhereWithAggregatesInput[]
    article_id?: IntWithAggregatesFilter<"articles"> | number
    article_title?: StringWithAggregatesFilter<"articles"> | string
    article_image?: StringWithAggregatesFilter<"articles"> | string
    article_created?: DateTimeWithAggregatesFilter<"articles"> | Date | string
    article_updated?: DateTimeWithAggregatesFilter<"articles"> | Date | string
    userId?: IntWithAggregatesFilter<"articles"> | number
  }

  export type goodsWhereInput = {
    AND?: goodsWhereInput | goodsWhereInput[]
    OR?: goodsWhereInput[]
    NOT?: goodsWhereInput | goodsWhereInput[]
    userId?: IntFilter<"goods"> | number
    articleId?: IntFilter<"goods"> | number
    good_created?: DateTimeFilter<"goods"> | Date | string
    author1?: XOR<UsersRelationFilter, usersWhereInput>
    author2?: XOR<ArticlesRelationFilter, articlesWhereInput>
  }

  export type goodsOrderByWithRelationInput = {
    userId?: SortOrder
    articleId?: SortOrder
    good_created?: SortOrder
    author1?: usersOrderByWithRelationInput
    author2?: articlesOrderByWithRelationInput
  }

  export type goodsWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    AND?: goodsWhereInput | goodsWhereInput[]
    OR?: goodsWhereInput[]
    NOT?: goodsWhereInput | goodsWhereInput[]
    articleId?: IntFilter<"goods"> | number
    good_created?: DateTimeFilter<"goods"> | Date | string
    author1?: XOR<UsersRelationFilter, usersWhereInput>
    author2?: XOR<ArticlesRelationFilter, articlesWhereInput>
  }, "userId">

  export type goodsOrderByWithAggregationInput = {
    userId?: SortOrder
    articleId?: SortOrder
    good_created?: SortOrder
    _count?: goodsCountOrderByAggregateInput
    _avg?: goodsAvgOrderByAggregateInput
    _max?: goodsMaxOrderByAggregateInput
    _min?: goodsMinOrderByAggregateInput
    _sum?: goodsSumOrderByAggregateInput
  }

  export type goodsScalarWhereWithAggregatesInput = {
    AND?: goodsScalarWhereWithAggregatesInput | goodsScalarWhereWithAggregatesInput[]
    OR?: goodsScalarWhereWithAggregatesInput[]
    NOT?: goodsScalarWhereWithAggregatesInput | goodsScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"goods"> | number
    articleId?: IntWithAggregatesFilter<"goods"> | number
    good_created?: DateTimeWithAggregatesFilter<"goods"> | Date | string
  }

  export type readsWhereInput = {
    AND?: readsWhereInput | readsWhereInput[]
    OR?: readsWhereInput[]
    NOT?: readsWhereInput | readsWhereInput[]
    userId?: IntFilter<"reads"> | number
    read_created?: DateTimeFilter<"reads"> | Date | string
    articleId?: IntFilter<"reads"> | number
    author1?: XOR<UsersRelationFilter, usersWhereInput>
    author2?: XOR<ArticlesRelationFilter, articlesWhereInput>
  }

  export type readsOrderByWithRelationInput = {
    userId?: SortOrder
    read_created?: SortOrder
    articleId?: SortOrder
    author1?: usersOrderByWithRelationInput
    author2?: articlesOrderByWithRelationInput
  }

  export type readsWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    articleId?: number
    AND?: readsWhereInput | readsWhereInput[]
    OR?: readsWhereInput[]
    NOT?: readsWhereInput | readsWhereInput[]
    read_created?: DateTimeFilter<"reads"> | Date | string
    author1?: XOR<UsersRelationFilter, usersWhereInput>
    author2?: XOR<ArticlesRelationFilter, articlesWhereInput>
  }, "userId" | "articleId">

  export type readsOrderByWithAggregationInput = {
    userId?: SortOrder
    read_created?: SortOrder
    articleId?: SortOrder
    _count?: readsCountOrderByAggregateInput
    _avg?: readsAvgOrderByAggregateInput
    _max?: readsMaxOrderByAggregateInput
    _min?: readsMinOrderByAggregateInput
    _sum?: readsSumOrderByAggregateInput
  }

  export type readsScalarWhereWithAggregatesInput = {
    AND?: readsScalarWhereWithAggregatesInput | readsScalarWhereWithAggregatesInput[]
    OR?: readsScalarWhereWithAggregatesInput[]
    NOT?: readsScalarWhereWithAggregatesInput | readsScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"reads"> | number
    read_created?: DateTimeWithAggregatesFilter<"reads"> | Date | string
    articleId?: IntWithAggregatesFilter<"reads"> | number
  }

  export type maintagsWhereInput = {
    AND?: maintagsWhereInput | maintagsWhereInput[]
    OR?: maintagsWhereInput[]
    NOT?: maintagsWhereInput | maintagsWhereInput[]
    articleId?: IntFilter<"maintags"> | number
    tagId?: IntFilter<"maintags"> | number
    author1?: XOR<ArticlesRelationFilter, articlesWhereInput>
    author2?: XOR<TagsRelationFilter, tagsWhereInput>
  }

  export type maintagsOrderByWithRelationInput = {
    articleId?: SortOrder
    tagId?: SortOrder
    author1?: articlesOrderByWithRelationInput
    author2?: tagsOrderByWithRelationInput
  }

  export type maintagsWhereUniqueInput = Prisma.AtLeast<{
    articleId?: number
    tagId?: number
    AND?: maintagsWhereInput | maintagsWhereInput[]
    OR?: maintagsWhereInput[]
    NOT?: maintagsWhereInput | maintagsWhereInput[]
    author1?: XOR<ArticlesRelationFilter, articlesWhereInput>
    author2?: XOR<TagsRelationFilter, tagsWhereInput>
  }, "articleId" | "tagId">

  export type maintagsOrderByWithAggregationInput = {
    articleId?: SortOrder
    tagId?: SortOrder
    _count?: maintagsCountOrderByAggregateInput
    _avg?: maintagsAvgOrderByAggregateInput
    _max?: maintagsMaxOrderByAggregateInput
    _min?: maintagsMinOrderByAggregateInput
    _sum?: maintagsSumOrderByAggregateInput
  }

  export type maintagsScalarWhereWithAggregatesInput = {
    AND?: maintagsScalarWhereWithAggregatesInput | maintagsScalarWhereWithAggregatesInput[]
    OR?: maintagsScalarWhereWithAggregatesInput[]
    NOT?: maintagsScalarWhereWithAggregatesInput | maintagsScalarWhereWithAggregatesInput[]
    articleId?: IntWithAggregatesFilter<"maintags"> | number
    tagId?: IntWithAggregatesFilter<"maintags"> | number
  }

  export type subtagsWhereInput = {
    AND?: subtagsWhereInput | subtagsWhereInput[]
    OR?: subtagsWhereInput[]
    NOT?: subtagsWhereInput | subtagsWhereInput[]
    articleId?: IntFilter<"subtags"> | number
    tagId?: IntFilter<"subtags"> | number
    author1?: XOR<ArticlesRelationFilter, articlesWhereInput>
    author2?: XOR<TagsRelationFilter, tagsWhereInput>
  }

  export type subtagsOrderByWithRelationInput = {
    articleId?: SortOrder
    tagId?: SortOrder
    author1?: articlesOrderByWithRelationInput
    author2?: tagsOrderByWithRelationInput
  }

  export type subtagsWhereUniqueInput = Prisma.AtLeast<{
    articleId?: number
    AND?: subtagsWhereInput | subtagsWhereInput[]
    OR?: subtagsWhereInput[]
    NOT?: subtagsWhereInput | subtagsWhereInput[]
    tagId?: IntFilter<"subtags"> | number
    author1?: XOR<ArticlesRelationFilter, articlesWhereInput>
    author2?: XOR<TagsRelationFilter, tagsWhereInput>
  }, "articleId">

  export type subtagsOrderByWithAggregationInput = {
    articleId?: SortOrder
    tagId?: SortOrder
    _count?: subtagsCountOrderByAggregateInput
    _avg?: subtagsAvgOrderByAggregateInput
    _max?: subtagsMaxOrderByAggregateInput
    _min?: subtagsMinOrderByAggregateInput
    _sum?: subtagsSumOrderByAggregateInput
  }

  export type subtagsScalarWhereWithAggregatesInput = {
    AND?: subtagsScalarWhereWithAggregatesInput | subtagsScalarWhereWithAggregatesInput[]
    OR?: subtagsScalarWhereWithAggregatesInput[]
    NOT?: subtagsScalarWhereWithAggregatesInput | subtagsScalarWhereWithAggregatesInput[]
    articleId?: IntWithAggregatesFilter<"subtags"> | number
    tagId?: IntWithAggregatesFilter<"subtags"> | number
  }

  export type usersCreateInput = {
    user_name: string
    user_mail: string
    user_pass: string
    user_created?: Date | string
    user_icon: string
    user_coment: string
    follow?: followsCreateNestedManyWithoutAuthor1Input
    article?: articlesCreateNestedManyWithoutAuthorInput
    tag?: tagsCreateNestedManyWithoutAuthorInput
    good?: goodsCreateNestedManyWithoutAuthor1Input
    read?: readsCreateNestedManyWithoutAuthor1Input
  }

  export type usersUncheckedCreateInput = {
    user_id?: number
    user_name: string
    user_mail: string
    user_pass: string
    user_created?: Date | string
    user_icon: string
    user_coment: string
    follow?: followsUncheckedCreateNestedManyWithoutAuthor1Input
    article?: articlesUncheckedCreateNestedManyWithoutAuthorInput
    tag?: tagsUncheckedCreateNestedManyWithoutAuthorInput
    good?: goodsUncheckedCreateNestedManyWithoutAuthor1Input
    read?: readsUncheckedCreateNestedManyWithoutAuthor1Input
  }

  export type usersUpdateInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    user_mail?: StringFieldUpdateOperationsInput | string
    user_pass?: StringFieldUpdateOperationsInput | string
    user_created?: DateTimeFieldUpdateOperationsInput | Date | string
    user_icon?: StringFieldUpdateOperationsInput | string
    user_coment?: StringFieldUpdateOperationsInput | string
    follow?: followsUpdateManyWithoutAuthor1NestedInput
    article?: articlesUpdateManyWithoutAuthorNestedInput
    tag?: tagsUpdateManyWithoutAuthorNestedInput
    good?: goodsUpdateManyWithoutAuthor1NestedInput
    read?: readsUpdateManyWithoutAuthor1NestedInput
  }

  export type usersUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    user_mail?: StringFieldUpdateOperationsInput | string
    user_pass?: StringFieldUpdateOperationsInput | string
    user_created?: DateTimeFieldUpdateOperationsInput | Date | string
    user_icon?: StringFieldUpdateOperationsInput | string
    user_coment?: StringFieldUpdateOperationsInput | string
    follow?: followsUncheckedUpdateManyWithoutAuthor1NestedInput
    article?: articlesUncheckedUpdateManyWithoutAuthorNestedInput
    tag?: tagsUncheckedUpdateManyWithoutAuthorNestedInput
    good?: goodsUncheckedUpdateManyWithoutAuthor1NestedInput
    read?: readsUncheckedUpdateManyWithoutAuthor1NestedInput
  }

  export type usersCreateManyInput = {
    user_id?: number
    user_name: string
    user_mail: string
    user_pass: string
    user_created?: Date | string
    user_icon: string
    user_coment: string
  }

  export type usersUpdateManyMutationInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    user_mail?: StringFieldUpdateOperationsInput | string
    user_pass?: StringFieldUpdateOperationsInput | string
    user_created?: DateTimeFieldUpdateOperationsInput | Date | string
    user_icon?: StringFieldUpdateOperationsInput | string
    user_coment?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    user_mail?: StringFieldUpdateOperationsInput | string
    user_pass?: StringFieldUpdateOperationsInput | string
    user_created?: DateTimeFieldUpdateOperationsInput | Date | string
    user_icon?: StringFieldUpdateOperationsInput | string
    user_coment?: StringFieldUpdateOperationsInput | string
  }

  export type followsCreateInput = {
    author1: usersCreateNestedOneWithoutFollowInput
  }

  export type followsUncheckedCreateInput = {
    follow_id: number
  }

  export type followsUpdateInput = {
    author1?: usersUpdateOneRequiredWithoutFollowNestedInput
  }

  export type followsUncheckedUpdateInput = {
    follow_id?: IntFieldUpdateOperationsInput | number
  }

  export type followsCreateManyInput = {
    follow_id: number
  }

  export type followsUpdateManyMutationInput = {

  }

  export type followsUncheckedUpdateManyInput = {
    follow_id?: IntFieldUpdateOperationsInput | number
  }

  export type tagsCreateInput = {
    tag_name: string
    author: usersCreateNestedOneWithoutTagInput
    maintag?: maintagsCreateNestedOneWithoutAuthor2Input
    subtag?: subtagsCreateNestedManyWithoutAuthor2Input
  }

  export type tagsUncheckedCreateInput = {
    tag_id?: number
    tag_name: string
    userId: number
    maintag?: maintagsUncheckedCreateNestedOneWithoutAuthor2Input
    subtag?: subtagsUncheckedCreateNestedManyWithoutAuthor2Input
  }

  export type tagsUpdateInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    author?: usersUpdateOneRequiredWithoutTagNestedInput
    maintag?: maintagsUpdateOneWithoutAuthor2NestedInput
    subtag?: subtagsUpdateManyWithoutAuthor2NestedInput
  }

  export type tagsUncheckedUpdateInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    tag_name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    maintag?: maintagsUncheckedUpdateOneWithoutAuthor2NestedInput
    subtag?: subtagsUncheckedUpdateManyWithoutAuthor2NestedInput
  }

  export type tagsCreateManyInput = {
    tag_id?: number
    tag_name: string
    userId: number
  }

  export type tagsUpdateManyMutationInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
  }

  export type tagsUncheckedUpdateManyInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    tag_name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type articlesCreateInput = {
    article_title: string
    article_image: string
    article_created?: Date | string
    article_updated?: Date | string
    author: usersCreateNestedOneWithoutArticleInput
    maintag?: maintagsCreateNestedOneWithoutAuthor1Input
    subtag?: subtagsCreateNestedManyWithoutAuthor1Input
    read?: readsCreateNestedManyWithoutAuthor2Input
    good?: goodsCreateNestedManyWithoutAuthor2Input
  }

  export type articlesUncheckedCreateInput = {
    article_id?: number
    article_title: string
    article_image: string
    article_created?: Date | string
    article_updated?: Date | string
    userId: number
    maintag?: maintagsUncheckedCreateNestedOneWithoutAuthor1Input
    subtag?: subtagsUncheckedCreateNestedManyWithoutAuthor1Input
    read?: readsUncheckedCreateNestedManyWithoutAuthor2Input
    good?: goodsUncheckedCreateNestedManyWithoutAuthor2Input
  }

  export type articlesUpdateInput = {
    article_title?: StringFieldUpdateOperationsInput | string
    article_image?: StringFieldUpdateOperationsInput | string
    article_created?: DateTimeFieldUpdateOperationsInput | Date | string
    article_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: usersUpdateOneRequiredWithoutArticleNestedInput
    maintag?: maintagsUpdateOneWithoutAuthor1NestedInput
    subtag?: subtagsUpdateManyWithoutAuthor1NestedInput
    read?: readsUpdateManyWithoutAuthor2NestedInput
    good?: goodsUpdateManyWithoutAuthor2NestedInput
  }

  export type articlesUncheckedUpdateInput = {
    article_id?: IntFieldUpdateOperationsInput | number
    article_title?: StringFieldUpdateOperationsInput | string
    article_image?: StringFieldUpdateOperationsInput | string
    article_created?: DateTimeFieldUpdateOperationsInput | Date | string
    article_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    maintag?: maintagsUncheckedUpdateOneWithoutAuthor1NestedInput
    subtag?: subtagsUncheckedUpdateManyWithoutAuthor1NestedInput
    read?: readsUncheckedUpdateManyWithoutAuthor2NestedInput
    good?: goodsUncheckedUpdateManyWithoutAuthor2NestedInput
  }

  export type articlesCreateManyInput = {
    article_id?: number
    article_title: string
    article_image: string
    article_created?: Date | string
    article_updated?: Date | string
    userId: number
  }

  export type articlesUpdateManyMutationInput = {
    article_title?: StringFieldUpdateOperationsInput | string
    article_image?: StringFieldUpdateOperationsInput | string
    article_created?: DateTimeFieldUpdateOperationsInput | Date | string
    article_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type articlesUncheckedUpdateManyInput = {
    article_id?: IntFieldUpdateOperationsInput | number
    article_title?: StringFieldUpdateOperationsInput | string
    article_image?: StringFieldUpdateOperationsInput | string
    article_created?: DateTimeFieldUpdateOperationsInput | Date | string
    article_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type goodsCreateInput = {
    good_created?: Date | string
    author1: usersCreateNestedOneWithoutGoodInput
    author2: articlesCreateNestedOneWithoutGoodInput
  }

  export type goodsUncheckedCreateInput = {
    userId: number
    articleId: number
    good_created?: Date | string
  }

  export type goodsUpdateInput = {
    good_created?: DateTimeFieldUpdateOperationsInput | Date | string
    author1?: usersUpdateOneRequiredWithoutGoodNestedInput
    author2?: articlesUpdateOneRequiredWithoutGoodNestedInput
  }

  export type goodsUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    articleId?: IntFieldUpdateOperationsInput | number
    good_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type goodsCreateManyInput = {
    userId: number
    articleId: number
    good_created?: Date | string
  }

  export type goodsUpdateManyMutationInput = {
    good_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type goodsUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    articleId?: IntFieldUpdateOperationsInput | number
    good_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type readsCreateInput = {
    read_created?: Date | string
    author1: usersCreateNestedOneWithoutReadInput
    author2: articlesCreateNestedOneWithoutReadInput
  }

  export type readsUncheckedCreateInput = {
    userId: number
    read_created?: Date | string
    articleId: number
  }

  export type readsUpdateInput = {
    read_created?: DateTimeFieldUpdateOperationsInput | Date | string
    author1?: usersUpdateOneRequiredWithoutReadNestedInput
    author2?: articlesUpdateOneRequiredWithoutReadNestedInput
  }

  export type readsUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    read_created?: DateTimeFieldUpdateOperationsInput | Date | string
    articleId?: IntFieldUpdateOperationsInput | number
  }

  export type readsCreateManyInput = {
    userId: number
    read_created?: Date | string
    articleId: number
  }

  export type readsUpdateManyMutationInput = {
    read_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type readsUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    read_created?: DateTimeFieldUpdateOperationsInput | Date | string
    articleId?: IntFieldUpdateOperationsInput | number
  }

  export type maintagsCreateInput = {
    author1: articlesCreateNestedOneWithoutMaintagInput
    author2: tagsCreateNestedOneWithoutMaintagInput
  }

  export type maintagsUncheckedCreateInput = {
    articleId: number
    tagId: number
  }

  export type maintagsUpdateInput = {
    author1?: articlesUpdateOneRequiredWithoutMaintagNestedInput
    author2?: tagsUpdateOneRequiredWithoutMaintagNestedInput
  }

  export type maintagsUncheckedUpdateInput = {
    articleId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type maintagsCreateManyInput = {
    articleId: number
    tagId: number
  }

  export type maintagsUpdateManyMutationInput = {

  }

  export type maintagsUncheckedUpdateManyInput = {
    articleId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type subtagsCreateInput = {
    author1: articlesCreateNestedOneWithoutSubtagInput
    author2: tagsCreateNestedOneWithoutSubtagInput
  }

  export type subtagsUncheckedCreateInput = {
    articleId: number
    tagId: number
  }

  export type subtagsUpdateInput = {
    author1?: articlesUpdateOneRequiredWithoutSubtagNestedInput
    author2?: tagsUpdateOneRequiredWithoutSubtagNestedInput
  }

  export type subtagsUncheckedUpdateInput = {
    articleId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type subtagsCreateManyInput = {
    articleId: number
    tagId: number
  }

  export type subtagsUpdateManyMutationInput = {

  }

  export type subtagsUncheckedUpdateManyInput = {
    articleId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
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
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type FollowsListRelationFilter = {
    every?: followsWhereInput
    some?: followsWhereInput
    none?: followsWhereInput
  }

  export type ArticlesListRelationFilter = {
    every?: articlesWhereInput
    some?: articlesWhereInput
    none?: articlesWhereInput
  }

  export type TagsListRelationFilter = {
    every?: tagsWhereInput
    some?: tagsWhereInput
    none?: tagsWhereInput
  }

  export type GoodsListRelationFilter = {
    every?: goodsWhereInput
    some?: goodsWhereInput
    none?: goodsWhereInput
  }

  export type ReadsListRelationFilter = {
    every?: readsWhereInput
    some?: readsWhereInput
    none?: readsWhereInput
  }

  export type followsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type articlesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tagsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type goodsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type readsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    user_mail?: SortOrder
    user_pass?: SortOrder
    user_created?: SortOrder
    user_icon?: SortOrder
    user_coment?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    user_mail?: SortOrder
    user_pass?: SortOrder
    user_created?: SortOrder
    user_icon?: SortOrder
    user_coment?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    user_mail?: SortOrder
    user_pass?: SortOrder
    user_created?: SortOrder
    user_icon?: SortOrder
    user_coment?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    user_id?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type UsersRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type followsCountOrderByAggregateInput = {
    follow_id?: SortOrder
  }

  export type followsAvgOrderByAggregateInput = {
    follow_id?: SortOrder
  }

  export type followsMaxOrderByAggregateInput = {
    follow_id?: SortOrder
  }

  export type followsMinOrderByAggregateInput = {
    follow_id?: SortOrder
  }

  export type followsSumOrderByAggregateInput = {
    follow_id?: SortOrder
  }

  export type MaintagsNullableRelationFilter = {
    is?: maintagsWhereInput | null
    isNot?: maintagsWhereInput | null
  }

  export type SubtagsListRelationFilter = {
    every?: subtagsWhereInput
    some?: subtagsWhereInput
    none?: subtagsWhereInput
  }

  export type subtagsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tagsCountOrderByAggregateInput = {
    tag_id?: SortOrder
    tag_name?: SortOrder
    userId?: SortOrder
  }

  export type tagsAvgOrderByAggregateInput = {
    tag_id?: SortOrder
    userId?: SortOrder
  }

  export type tagsMaxOrderByAggregateInput = {
    tag_id?: SortOrder
    tag_name?: SortOrder
    userId?: SortOrder
  }

  export type tagsMinOrderByAggregateInput = {
    tag_id?: SortOrder
    tag_name?: SortOrder
    userId?: SortOrder
  }

  export type tagsSumOrderByAggregateInput = {
    tag_id?: SortOrder
    userId?: SortOrder
  }

  export type articlesCountOrderByAggregateInput = {
    article_id?: SortOrder
    article_title?: SortOrder
    article_image?: SortOrder
    article_created?: SortOrder
    article_updated?: SortOrder
    userId?: SortOrder
  }

  export type articlesAvgOrderByAggregateInput = {
    article_id?: SortOrder
    userId?: SortOrder
  }

  export type articlesMaxOrderByAggregateInput = {
    article_id?: SortOrder
    article_title?: SortOrder
    article_image?: SortOrder
    article_created?: SortOrder
    article_updated?: SortOrder
    userId?: SortOrder
  }

  export type articlesMinOrderByAggregateInput = {
    article_id?: SortOrder
    article_title?: SortOrder
    article_image?: SortOrder
    article_created?: SortOrder
    article_updated?: SortOrder
    userId?: SortOrder
  }

  export type articlesSumOrderByAggregateInput = {
    article_id?: SortOrder
    userId?: SortOrder
  }

  export type ArticlesRelationFilter = {
    is?: articlesWhereInput
    isNot?: articlesWhereInput
  }

  export type goodsCountOrderByAggregateInput = {
    userId?: SortOrder
    articleId?: SortOrder
    good_created?: SortOrder
  }

  export type goodsAvgOrderByAggregateInput = {
    userId?: SortOrder
    articleId?: SortOrder
  }

  export type goodsMaxOrderByAggregateInput = {
    userId?: SortOrder
    articleId?: SortOrder
    good_created?: SortOrder
  }

  export type goodsMinOrderByAggregateInput = {
    userId?: SortOrder
    articleId?: SortOrder
    good_created?: SortOrder
  }

  export type goodsSumOrderByAggregateInput = {
    userId?: SortOrder
    articleId?: SortOrder
  }

  export type readsCountOrderByAggregateInput = {
    userId?: SortOrder
    read_created?: SortOrder
    articleId?: SortOrder
  }

  export type readsAvgOrderByAggregateInput = {
    userId?: SortOrder
    articleId?: SortOrder
  }

  export type readsMaxOrderByAggregateInput = {
    userId?: SortOrder
    read_created?: SortOrder
    articleId?: SortOrder
  }

  export type readsMinOrderByAggregateInput = {
    userId?: SortOrder
    read_created?: SortOrder
    articleId?: SortOrder
  }

  export type readsSumOrderByAggregateInput = {
    userId?: SortOrder
    articleId?: SortOrder
  }

  export type TagsRelationFilter = {
    is?: tagsWhereInput
    isNot?: tagsWhereInput
  }

  export type maintagsCountOrderByAggregateInput = {
    articleId?: SortOrder
    tagId?: SortOrder
  }

  export type maintagsAvgOrderByAggregateInput = {
    articleId?: SortOrder
    tagId?: SortOrder
  }

  export type maintagsMaxOrderByAggregateInput = {
    articleId?: SortOrder
    tagId?: SortOrder
  }

  export type maintagsMinOrderByAggregateInput = {
    articleId?: SortOrder
    tagId?: SortOrder
  }

  export type maintagsSumOrderByAggregateInput = {
    articleId?: SortOrder
    tagId?: SortOrder
  }

  export type subtagsCountOrderByAggregateInput = {
    articleId?: SortOrder
    tagId?: SortOrder
  }

  export type subtagsAvgOrderByAggregateInput = {
    articleId?: SortOrder
    tagId?: SortOrder
  }

  export type subtagsMaxOrderByAggregateInput = {
    articleId?: SortOrder
    tagId?: SortOrder
  }

  export type subtagsMinOrderByAggregateInput = {
    articleId?: SortOrder
    tagId?: SortOrder
  }

  export type subtagsSumOrderByAggregateInput = {
    articleId?: SortOrder
    tagId?: SortOrder
  }

  export type followsCreateNestedManyWithoutAuthor1Input = {
    create?: XOR<followsCreateWithoutAuthor1Input, followsUncheckedCreateWithoutAuthor1Input> | followsCreateWithoutAuthor1Input[] | followsUncheckedCreateWithoutAuthor1Input[]
    connectOrCreate?: followsCreateOrConnectWithoutAuthor1Input | followsCreateOrConnectWithoutAuthor1Input[]
    createMany?: followsCreateManyAuthor1InputEnvelope
    connect?: followsWhereUniqueInput | followsWhereUniqueInput[]
  }

  export type articlesCreateNestedManyWithoutAuthorInput = {
    create?: XOR<articlesCreateWithoutAuthorInput, articlesUncheckedCreateWithoutAuthorInput> | articlesCreateWithoutAuthorInput[] | articlesUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: articlesCreateOrConnectWithoutAuthorInput | articlesCreateOrConnectWithoutAuthorInput[]
    createMany?: articlesCreateManyAuthorInputEnvelope
    connect?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
  }

  export type tagsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<tagsCreateWithoutAuthorInput, tagsUncheckedCreateWithoutAuthorInput> | tagsCreateWithoutAuthorInput[] | tagsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: tagsCreateOrConnectWithoutAuthorInput | tagsCreateOrConnectWithoutAuthorInput[]
    createMany?: tagsCreateManyAuthorInputEnvelope
    connect?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
  }

  export type goodsCreateNestedManyWithoutAuthor1Input = {
    create?: XOR<goodsCreateWithoutAuthor1Input, goodsUncheckedCreateWithoutAuthor1Input> | goodsCreateWithoutAuthor1Input[] | goodsUncheckedCreateWithoutAuthor1Input[]
    connectOrCreate?: goodsCreateOrConnectWithoutAuthor1Input | goodsCreateOrConnectWithoutAuthor1Input[]
    createMany?: goodsCreateManyAuthor1InputEnvelope
    connect?: goodsWhereUniqueInput | goodsWhereUniqueInput[]
  }

  export type readsCreateNestedManyWithoutAuthor1Input = {
    create?: XOR<readsCreateWithoutAuthor1Input, readsUncheckedCreateWithoutAuthor1Input> | readsCreateWithoutAuthor1Input[] | readsUncheckedCreateWithoutAuthor1Input[]
    connectOrCreate?: readsCreateOrConnectWithoutAuthor1Input | readsCreateOrConnectWithoutAuthor1Input[]
    createMany?: readsCreateManyAuthor1InputEnvelope
    connect?: readsWhereUniqueInput | readsWhereUniqueInput[]
  }

  export type followsUncheckedCreateNestedManyWithoutAuthor1Input = {
    create?: XOR<followsCreateWithoutAuthor1Input, followsUncheckedCreateWithoutAuthor1Input> | followsCreateWithoutAuthor1Input[] | followsUncheckedCreateWithoutAuthor1Input[]
    connectOrCreate?: followsCreateOrConnectWithoutAuthor1Input | followsCreateOrConnectWithoutAuthor1Input[]
    createMany?: followsCreateManyAuthor1InputEnvelope
    connect?: followsWhereUniqueInput | followsWhereUniqueInput[]
  }

  export type articlesUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<articlesCreateWithoutAuthorInput, articlesUncheckedCreateWithoutAuthorInput> | articlesCreateWithoutAuthorInput[] | articlesUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: articlesCreateOrConnectWithoutAuthorInput | articlesCreateOrConnectWithoutAuthorInput[]
    createMany?: articlesCreateManyAuthorInputEnvelope
    connect?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
  }

  export type tagsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<tagsCreateWithoutAuthorInput, tagsUncheckedCreateWithoutAuthorInput> | tagsCreateWithoutAuthorInput[] | tagsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: tagsCreateOrConnectWithoutAuthorInput | tagsCreateOrConnectWithoutAuthorInput[]
    createMany?: tagsCreateManyAuthorInputEnvelope
    connect?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
  }

  export type goodsUncheckedCreateNestedManyWithoutAuthor1Input = {
    create?: XOR<goodsCreateWithoutAuthor1Input, goodsUncheckedCreateWithoutAuthor1Input> | goodsCreateWithoutAuthor1Input[] | goodsUncheckedCreateWithoutAuthor1Input[]
    connectOrCreate?: goodsCreateOrConnectWithoutAuthor1Input | goodsCreateOrConnectWithoutAuthor1Input[]
    createMany?: goodsCreateManyAuthor1InputEnvelope
    connect?: goodsWhereUniqueInput | goodsWhereUniqueInput[]
  }

  export type readsUncheckedCreateNestedManyWithoutAuthor1Input = {
    create?: XOR<readsCreateWithoutAuthor1Input, readsUncheckedCreateWithoutAuthor1Input> | readsCreateWithoutAuthor1Input[] | readsUncheckedCreateWithoutAuthor1Input[]
    connectOrCreate?: readsCreateOrConnectWithoutAuthor1Input | readsCreateOrConnectWithoutAuthor1Input[]
    createMany?: readsCreateManyAuthor1InputEnvelope
    connect?: readsWhereUniqueInput | readsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type followsUpdateManyWithoutAuthor1NestedInput = {
    create?: XOR<followsCreateWithoutAuthor1Input, followsUncheckedCreateWithoutAuthor1Input> | followsCreateWithoutAuthor1Input[] | followsUncheckedCreateWithoutAuthor1Input[]
    connectOrCreate?: followsCreateOrConnectWithoutAuthor1Input | followsCreateOrConnectWithoutAuthor1Input[]
    upsert?: followsUpsertWithWhereUniqueWithoutAuthor1Input | followsUpsertWithWhereUniqueWithoutAuthor1Input[]
    createMany?: followsCreateManyAuthor1InputEnvelope
    set?: followsWhereUniqueInput | followsWhereUniqueInput[]
    disconnect?: followsWhereUniqueInput | followsWhereUniqueInput[]
    delete?: followsWhereUniqueInput | followsWhereUniqueInput[]
    connect?: followsWhereUniqueInput | followsWhereUniqueInput[]
    update?: followsUpdateWithWhereUniqueWithoutAuthor1Input | followsUpdateWithWhereUniqueWithoutAuthor1Input[]
    updateMany?: followsUpdateManyWithWhereWithoutAuthor1Input | followsUpdateManyWithWhereWithoutAuthor1Input[]
    deleteMany?: followsScalarWhereInput | followsScalarWhereInput[]
  }

  export type articlesUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<articlesCreateWithoutAuthorInput, articlesUncheckedCreateWithoutAuthorInput> | articlesCreateWithoutAuthorInput[] | articlesUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: articlesCreateOrConnectWithoutAuthorInput | articlesCreateOrConnectWithoutAuthorInput[]
    upsert?: articlesUpsertWithWhereUniqueWithoutAuthorInput | articlesUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: articlesCreateManyAuthorInputEnvelope
    set?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
    disconnect?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
    delete?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
    connect?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
    update?: articlesUpdateWithWhereUniqueWithoutAuthorInput | articlesUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: articlesUpdateManyWithWhereWithoutAuthorInput | articlesUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: articlesScalarWhereInput | articlesScalarWhereInput[]
  }

  export type tagsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<tagsCreateWithoutAuthorInput, tagsUncheckedCreateWithoutAuthorInput> | tagsCreateWithoutAuthorInput[] | tagsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: tagsCreateOrConnectWithoutAuthorInput | tagsCreateOrConnectWithoutAuthorInput[]
    upsert?: tagsUpsertWithWhereUniqueWithoutAuthorInput | tagsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: tagsCreateManyAuthorInputEnvelope
    set?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    disconnect?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    delete?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    connect?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    update?: tagsUpdateWithWhereUniqueWithoutAuthorInput | tagsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: tagsUpdateManyWithWhereWithoutAuthorInput | tagsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: tagsScalarWhereInput | tagsScalarWhereInput[]
  }

  export type goodsUpdateManyWithoutAuthor1NestedInput = {
    create?: XOR<goodsCreateWithoutAuthor1Input, goodsUncheckedCreateWithoutAuthor1Input> | goodsCreateWithoutAuthor1Input[] | goodsUncheckedCreateWithoutAuthor1Input[]
    connectOrCreate?: goodsCreateOrConnectWithoutAuthor1Input | goodsCreateOrConnectWithoutAuthor1Input[]
    upsert?: goodsUpsertWithWhereUniqueWithoutAuthor1Input | goodsUpsertWithWhereUniqueWithoutAuthor1Input[]
    createMany?: goodsCreateManyAuthor1InputEnvelope
    set?: goodsWhereUniqueInput | goodsWhereUniqueInput[]
    disconnect?: goodsWhereUniqueInput | goodsWhereUniqueInput[]
    delete?: goodsWhereUniqueInput | goodsWhereUniqueInput[]
    connect?: goodsWhereUniqueInput | goodsWhereUniqueInput[]
    update?: goodsUpdateWithWhereUniqueWithoutAuthor1Input | goodsUpdateWithWhereUniqueWithoutAuthor1Input[]
    updateMany?: goodsUpdateManyWithWhereWithoutAuthor1Input | goodsUpdateManyWithWhereWithoutAuthor1Input[]
    deleteMany?: goodsScalarWhereInput | goodsScalarWhereInput[]
  }

  export type readsUpdateManyWithoutAuthor1NestedInput = {
    create?: XOR<readsCreateWithoutAuthor1Input, readsUncheckedCreateWithoutAuthor1Input> | readsCreateWithoutAuthor1Input[] | readsUncheckedCreateWithoutAuthor1Input[]
    connectOrCreate?: readsCreateOrConnectWithoutAuthor1Input | readsCreateOrConnectWithoutAuthor1Input[]
    upsert?: readsUpsertWithWhereUniqueWithoutAuthor1Input | readsUpsertWithWhereUniqueWithoutAuthor1Input[]
    createMany?: readsCreateManyAuthor1InputEnvelope
    set?: readsWhereUniqueInput | readsWhereUniqueInput[]
    disconnect?: readsWhereUniqueInput | readsWhereUniqueInput[]
    delete?: readsWhereUniqueInput | readsWhereUniqueInput[]
    connect?: readsWhereUniqueInput | readsWhereUniqueInput[]
    update?: readsUpdateWithWhereUniqueWithoutAuthor1Input | readsUpdateWithWhereUniqueWithoutAuthor1Input[]
    updateMany?: readsUpdateManyWithWhereWithoutAuthor1Input | readsUpdateManyWithWhereWithoutAuthor1Input[]
    deleteMany?: readsScalarWhereInput | readsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type followsUncheckedUpdateManyWithoutAuthor1NestedInput = {
    create?: XOR<followsCreateWithoutAuthor1Input, followsUncheckedCreateWithoutAuthor1Input> | followsCreateWithoutAuthor1Input[] | followsUncheckedCreateWithoutAuthor1Input[]
    connectOrCreate?: followsCreateOrConnectWithoutAuthor1Input | followsCreateOrConnectWithoutAuthor1Input[]
    upsert?: followsUpsertWithWhereUniqueWithoutAuthor1Input | followsUpsertWithWhereUniqueWithoutAuthor1Input[]
    createMany?: followsCreateManyAuthor1InputEnvelope
    set?: followsWhereUniqueInput | followsWhereUniqueInput[]
    disconnect?: followsWhereUniqueInput | followsWhereUniqueInput[]
    delete?: followsWhereUniqueInput | followsWhereUniqueInput[]
    connect?: followsWhereUniqueInput | followsWhereUniqueInput[]
    update?: followsUpdateWithWhereUniqueWithoutAuthor1Input | followsUpdateWithWhereUniqueWithoutAuthor1Input[]
    updateMany?: followsUpdateManyWithWhereWithoutAuthor1Input | followsUpdateManyWithWhereWithoutAuthor1Input[]
    deleteMany?: followsScalarWhereInput | followsScalarWhereInput[]
  }

  export type articlesUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<articlesCreateWithoutAuthorInput, articlesUncheckedCreateWithoutAuthorInput> | articlesCreateWithoutAuthorInput[] | articlesUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: articlesCreateOrConnectWithoutAuthorInput | articlesCreateOrConnectWithoutAuthorInput[]
    upsert?: articlesUpsertWithWhereUniqueWithoutAuthorInput | articlesUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: articlesCreateManyAuthorInputEnvelope
    set?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
    disconnect?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
    delete?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
    connect?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
    update?: articlesUpdateWithWhereUniqueWithoutAuthorInput | articlesUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: articlesUpdateManyWithWhereWithoutAuthorInput | articlesUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: articlesScalarWhereInput | articlesScalarWhereInput[]
  }

  export type tagsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<tagsCreateWithoutAuthorInput, tagsUncheckedCreateWithoutAuthorInput> | tagsCreateWithoutAuthorInput[] | tagsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: tagsCreateOrConnectWithoutAuthorInput | tagsCreateOrConnectWithoutAuthorInput[]
    upsert?: tagsUpsertWithWhereUniqueWithoutAuthorInput | tagsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: tagsCreateManyAuthorInputEnvelope
    set?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    disconnect?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    delete?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    connect?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    update?: tagsUpdateWithWhereUniqueWithoutAuthorInput | tagsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: tagsUpdateManyWithWhereWithoutAuthorInput | tagsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: tagsScalarWhereInput | tagsScalarWhereInput[]
  }

  export type goodsUncheckedUpdateManyWithoutAuthor1NestedInput = {
    create?: XOR<goodsCreateWithoutAuthor1Input, goodsUncheckedCreateWithoutAuthor1Input> | goodsCreateWithoutAuthor1Input[] | goodsUncheckedCreateWithoutAuthor1Input[]
    connectOrCreate?: goodsCreateOrConnectWithoutAuthor1Input | goodsCreateOrConnectWithoutAuthor1Input[]
    upsert?: goodsUpsertWithWhereUniqueWithoutAuthor1Input | goodsUpsertWithWhereUniqueWithoutAuthor1Input[]
    createMany?: goodsCreateManyAuthor1InputEnvelope
    set?: goodsWhereUniqueInput | goodsWhereUniqueInput[]
    disconnect?: goodsWhereUniqueInput | goodsWhereUniqueInput[]
    delete?: goodsWhereUniqueInput | goodsWhereUniqueInput[]
    connect?: goodsWhereUniqueInput | goodsWhereUniqueInput[]
    update?: goodsUpdateWithWhereUniqueWithoutAuthor1Input | goodsUpdateWithWhereUniqueWithoutAuthor1Input[]
    updateMany?: goodsUpdateManyWithWhereWithoutAuthor1Input | goodsUpdateManyWithWhereWithoutAuthor1Input[]
    deleteMany?: goodsScalarWhereInput | goodsScalarWhereInput[]
  }

  export type readsUncheckedUpdateManyWithoutAuthor1NestedInput = {
    create?: XOR<readsCreateWithoutAuthor1Input, readsUncheckedCreateWithoutAuthor1Input> | readsCreateWithoutAuthor1Input[] | readsUncheckedCreateWithoutAuthor1Input[]
    connectOrCreate?: readsCreateOrConnectWithoutAuthor1Input | readsCreateOrConnectWithoutAuthor1Input[]
    upsert?: readsUpsertWithWhereUniqueWithoutAuthor1Input | readsUpsertWithWhereUniqueWithoutAuthor1Input[]
    createMany?: readsCreateManyAuthor1InputEnvelope
    set?: readsWhereUniqueInput | readsWhereUniqueInput[]
    disconnect?: readsWhereUniqueInput | readsWhereUniqueInput[]
    delete?: readsWhereUniqueInput | readsWhereUniqueInput[]
    connect?: readsWhereUniqueInput | readsWhereUniqueInput[]
    update?: readsUpdateWithWhereUniqueWithoutAuthor1Input | readsUpdateWithWhereUniqueWithoutAuthor1Input[]
    updateMany?: readsUpdateManyWithWhereWithoutAuthor1Input | readsUpdateManyWithWhereWithoutAuthor1Input[]
    deleteMany?: readsScalarWhereInput | readsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutFollowInput = {
    create?: XOR<usersCreateWithoutFollowInput, usersUncheckedCreateWithoutFollowInput>
    connectOrCreate?: usersCreateOrConnectWithoutFollowInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutFollowNestedInput = {
    create?: XOR<usersCreateWithoutFollowInput, usersUncheckedCreateWithoutFollowInput>
    connectOrCreate?: usersCreateOrConnectWithoutFollowInput
    upsert?: usersUpsertWithoutFollowInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutFollowInput, usersUpdateWithoutFollowInput>, usersUncheckedUpdateWithoutFollowInput>
  }

  export type usersCreateNestedOneWithoutTagInput = {
    create?: XOR<usersCreateWithoutTagInput, usersUncheckedCreateWithoutTagInput>
    connectOrCreate?: usersCreateOrConnectWithoutTagInput
    connect?: usersWhereUniqueInput
  }

  export type maintagsCreateNestedOneWithoutAuthor2Input = {
    create?: XOR<maintagsCreateWithoutAuthor2Input, maintagsUncheckedCreateWithoutAuthor2Input>
    connectOrCreate?: maintagsCreateOrConnectWithoutAuthor2Input
    connect?: maintagsWhereUniqueInput
  }

  export type subtagsCreateNestedManyWithoutAuthor2Input = {
    create?: XOR<subtagsCreateWithoutAuthor2Input, subtagsUncheckedCreateWithoutAuthor2Input> | subtagsCreateWithoutAuthor2Input[] | subtagsUncheckedCreateWithoutAuthor2Input[]
    connectOrCreate?: subtagsCreateOrConnectWithoutAuthor2Input | subtagsCreateOrConnectWithoutAuthor2Input[]
    createMany?: subtagsCreateManyAuthor2InputEnvelope
    connect?: subtagsWhereUniqueInput | subtagsWhereUniqueInput[]
  }

  export type maintagsUncheckedCreateNestedOneWithoutAuthor2Input = {
    create?: XOR<maintagsCreateWithoutAuthor2Input, maintagsUncheckedCreateWithoutAuthor2Input>
    connectOrCreate?: maintagsCreateOrConnectWithoutAuthor2Input
    connect?: maintagsWhereUniqueInput
  }

  export type subtagsUncheckedCreateNestedManyWithoutAuthor2Input = {
    create?: XOR<subtagsCreateWithoutAuthor2Input, subtagsUncheckedCreateWithoutAuthor2Input> | subtagsCreateWithoutAuthor2Input[] | subtagsUncheckedCreateWithoutAuthor2Input[]
    connectOrCreate?: subtagsCreateOrConnectWithoutAuthor2Input | subtagsCreateOrConnectWithoutAuthor2Input[]
    createMany?: subtagsCreateManyAuthor2InputEnvelope
    connect?: subtagsWhereUniqueInput | subtagsWhereUniqueInput[]
  }

  export type usersUpdateOneRequiredWithoutTagNestedInput = {
    create?: XOR<usersCreateWithoutTagInput, usersUncheckedCreateWithoutTagInput>
    connectOrCreate?: usersCreateOrConnectWithoutTagInput
    upsert?: usersUpsertWithoutTagInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTagInput, usersUpdateWithoutTagInput>, usersUncheckedUpdateWithoutTagInput>
  }

  export type maintagsUpdateOneWithoutAuthor2NestedInput = {
    create?: XOR<maintagsCreateWithoutAuthor2Input, maintagsUncheckedCreateWithoutAuthor2Input>
    connectOrCreate?: maintagsCreateOrConnectWithoutAuthor2Input
    upsert?: maintagsUpsertWithoutAuthor2Input
    disconnect?: maintagsWhereInput | boolean
    delete?: maintagsWhereInput | boolean
    connect?: maintagsWhereUniqueInput
    update?: XOR<XOR<maintagsUpdateToOneWithWhereWithoutAuthor2Input, maintagsUpdateWithoutAuthor2Input>, maintagsUncheckedUpdateWithoutAuthor2Input>
  }

  export type subtagsUpdateManyWithoutAuthor2NestedInput = {
    create?: XOR<subtagsCreateWithoutAuthor2Input, subtagsUncheckedCreateWithoutAuthor2Input> | subtagsCreateWithoutAuthor2Input[] | subtagsUncheckedCreateWithoutAuthor2Input[]
    connectOrCreate?: subtagsCreateOrConnectWithoutAuthor2Input | subtagsCreateOrConnectWithoutAuthor2Input[]
    upsert?: subtagsUpsertWithWhereUniqueWithoutAuthor2Input | subtagsUpsertWithWhereUniqueWithoutAuthor2Input[]
    createMany?: subtagsCreateManyAuthor2InputEnvelope
    set?: subtagsWhereUniqueInput | subtagsWhereUniqueInput[]
    disconnect?: subtagsWhereUniqueInput | subtagsWhereUniqueInput[]
    delete?: subtagsWhereUniqueInput | subtagsWhereUniqueInput[]
    connect?: subtagsWhereUniqueInput | subtagsWhereUniqueInput[]
    update?: subtagsUpdateWithWhereUniqueWithoutAuthor2Input | subtagsUpdateWithWhereUniqueWithoutAuthor2Input[]
    updateMany?: subtagsUpdateManyWithWhereWithoutAuthor2Input | subtagsUpdateManyWithWhereWithoutAuthor2Input[]
    deleteMany?: subtagsScalarWhereInput | subtagsScalarWhereInput[]
  }

  export type maintagsUncheckedUpdateOneWithoutAuthor2NestedInput = {
    create?: XOR<maintagsCreateWithoutAuthor2Input, maintagsUncheckedCreateWithoutAuthor2Input>
    connectOrCreate?: maintagsCreateOrConnectWithoutAuthor2Input
    upsert?: maintagsUpsertWithoutAuthor2Input
    disconnect?: maintagsWhereInput | boolean
    delete?: maintagsWhereInput | boolean
    connect?: maintagsWhereUniqueInput
    update?: XOR<XOR<maintagsUpdateToOneWithWhereWithoutAuthor2Input, maintagsUpdateWithoutAuthor2Input>, maintagsUncheckedUpdateWithoutAuthor2Input>
  }

  export type subtagsUncheckedUpdateManyWithoutAuthor2NestedInput = {
    create?: XOR<subtagsCreateWithoutAuthor2Input, subtagsUncheckedCreateWithoutAuthor2Input> | subtagsCreateWithoutAuthor2Input[] | subtagsUncheckedCreateWithoutAuthor2Input[]
    connectOrCreate?: subtagsCreateOrConnectWithoutAuthor2Input | subtagsCreateOrConnectWithoutAuthor2Input[]
    upsert?: subtagsUpsertWithWhereUniqueWithoutAuthor2Input | subtagsUpsertWithWhereUniqueWithoutAuthor2Input[]
    createMany?: subtagsCreateManyAuthor2InputEnvelope
    set?: subtagsWhereUniqueInput | subtagsWhereUniqueInput[]
    disconnect?: subtagsWhereUniqueInput | subtagsWhereUniqueInput[]
    delete?: subtagsWhereUniqueInput | subtagsWhereUniqueInput[]
    connect?: subtagsWhereUniqueInput | subtagsWhereUniqueInput[]
    update?: subtagsUpdateWithWhereUniqueWithoutAuthor2Input | subtagsUpdateWithWhereUniqueWithoutAuthor2Input[]
    updateMany?: subtagsUpdateManyWithWhereWithoutAuthor2Input | subtagsUpdateManyWithWhereWithoutAuthor2Input[]
    deleteMany?: subtagsScalarWhereInput | subtagsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutArticleInput = {
    create?: XOR<usersCreateWithoutArticleInput, usersUncheckedCreateWithoutArticleInput>
    connectOrCreate?: usersCreateOrConnectWithoutArticleInput
    connect?: usersWhereUniqueInput
  }

  export type maintagsCreateNestedOneWithoutAuthor1Input = {
    create?: XOR<maintagsCreateWithoutAuthor1Input, maintagsUncheckedCreateWithoutAuthor1Input>
    connectOrCreate?: maintagsCreateOrConnectWithoutAuthor1Input
    connect?: maintagsWhereUniqueInput
  }

  export type subtagsCreateNestedManyWithoutAuthor1Input = {
    create?: XOR<subtagsCreateWithoutAuthor1Input, subtagsUncheckedCreateWithoutAuthor1Input> | subtagsCreateWithoutAuthor1Input[] | subtagsUncheckedCreateWithoutAuthor1Input[]
    connectOrCreate?: subtagsCreateOrConnectWithoutAuthor1Input | subtagsCreateOrConnectWithoutAuthor1Input[]
    createMany?: subtagsCreateManyAuthor1InputEnvelope
    connect?: subtagsWhereUniqueInput | subtagsWhereUniqueInput[]
  }

  export type readsCreateNestedManyWithoutAuthor2Input = {
    create?: XOR<readsCreateWithoutAuthor2Input, readsUncheckedCreateWithoutAuthor2Input> | readsCreateWithoutAuthor2Input[] | readsUncheckedCreateWithoutAuthor2Input[]
    connectOrCreate?: readsCreateOrConnectWithoutAuthor2Input | readsCreateOrConnectWithoutAuthor2Input[]
    createMany?: readsCreateManyAuthor2InputEnvelope
    connect?: readsWhereUniqueInput | readsWhereUniqueInput[]
  }

  export type goodsCreateNestedManyWithoutAuthor2Input = {
    create?: XOR<goodsCreateWithoutAuthor2Input, goodsUncheckedCreateWithoutAuthor2Input> | goodsCreateWithoutAuthor2Input[] | goodsUncheckedCreateWithoutAuthor2Input[]
    connectOrCreate?: goodsCreateOrConnectWithoutAuthor2Input | goodsCreateOrConnectWithoutAuthor2Input[]
    createMany?: goodsCreateManyAuthor2InputEnvelope
    connect?: goodsWhereUniqueInput | goodsWhereUniqueInput[]
  }

  export type maintagsUncheckedCreateNestedOneWithoutAuthor1Input = {
    create?: XOR<maintagsCreateWithoutAuthor1Input, maintagsUncheckedCreateWithoutAuthor1Input>
    connectOrCreate?: maintagsCreateOrConnectWithoutAuthor1Input
    connect?: maintagsWhereUniqueInput
  }

  export type subtagsUncheckedCreateNestedManyWithoutAuthor1Input = {
    create?: XOR<subtagsCreateWithoutAuthor1Input, subtagsUncheckedCreateWithoutAuthor1Input> | subtagsCreateWithoutAuthor1Input[] | subtagsUncheckedCreateWithoutAuthor1Input[]
    connectOrCreate?: subtagsCreateOrConnectWithoutAuthor1Input | subtagsCreateOrConnectWithoutAuthor1Input[]
    createMany?: subtagsCreateManyAuthor1InputEnvelope
    connect?: subtagsWhereUniqueInput | subtagsWhereUniqueInput[]
  }

  export type readsUncheckedCreateNestedManyWithoutAuthor2Input = {
    create?: XOR<readsCreateWithoutAuthor2Input, readsUncheckedCreateWithoutAuthor2Input> | readsCreateWithoutAuthor2Input[] | readsUncheckedCreateWithoutAuthor2Input[]
    connectOrCreate?: readsCreateOrConnectWithoutAuthor2Input | readsCreateOrConnectWithoutAuthor2Input[]
    createMany?: readsCreateManyAuthor2InputEnvelope
    connect?: readsWhereUniqueInput | readsWhereUniqueInput[]
  }

  export type goodsUncheckedCreateNestedManyWithoutAuthor2Input = {
    create?: XOR<goodsCreateWithoutAuthor2Input, goodsUncheckedCreateWithoutAuthor2Input> | goodsCreateWithoutAuthor2Input[] | goodsUncheckedCreateWithoutAuthor2Input[]
    connectOrCreate?: goodsCreateOrConnectWithoutAuthor2Input | goodsCreateOrConnectWithoutAuthor2Input[]
    createMany?: goodsCreateManyAuthor2InputEnvelope
    connect?: goodsWhereUniqueInput | goodsWhereUniqueInput[]
  }

  export type usersUpdateOneRequiredWithoutArticleNestedInput = {
    create?: XOR<usersCreateWithoutArticleInput, usersUncheckedCreateWithoutArticleInput>
    connectOrCreate?: usersCreateOrConnectWithoutArticleInput
    upsert?: usersUpsertWithoutArticleInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutArticleInput, usersUpdateWithoutArticleInput>, usersUncheckedUpdateWithoutArticleInput>
  }

  export type maintagsUpdateOneWithoutAuthor1NestedInput = {
    create?: XOR<maintagsCreateWithoutAuthor1Input, maintagsUncheckedCreateWithoutAuthor1Input>
    connectOrCreate?: maintagsCreateOrConnectWithoutAuthor1Input
    upsert?: maintagsUpsertWithoutAuthor1Input
    disconnect?: maintagsWhereInput | boolean
    delete?: maintagsWhereInput | boolean
    connect?: maintagsWhereUniqueInput
    update?: XOR<XOR<maintagsUpdateToOneWithWhereWithoutAuthor1Input, maintagsUpdateWithoutAuthor1Input>, maintagsUncheckedUpdateWithoutAuthor1Input>
  }

  export type subtagsUpdateManyWithoutAuthor1NestedInput = {
    create?: XOR<subtagsCreateWithoutAuthor1Input, subtagsUncheckedCreateWithoutAuthor1Input> | subtagsCreateWithoutAuthor1Input[] | subtagsUncheckedCreateWithoutAuthor1Input[]
    connectOrCreate?: subtagsCreateOrConnectWithoutAuthor1Input | subtagsCreateOrConnectWithoutAuthor1Input[]
    upsert?: subtagsUpsertWithWhereUniqueWithoutAuthor1Input | subtagsUpsertWithWhereUniqueWithoutAuthor1Input[]
    createMany?: subtagsCreateManyAuthor1InputEnvelope
    set?: subtagsWhereUniqueInput | subtagsWhereUniqueInput[]
    disconnect?: subtagsWhereUniqueInput | subtagsWhereUniqueInput[]
    delete?: subtagsWhereUniqueInput | subtagsWhereUniqueInput[]
    connect?: subtagsWhereUniqueInput | subtagsWhereUniqueInput[]
    update?: subtagsUpdateWithWhereUniqueWithoutAuthor1Input | subtagsUpdateWithWhereUniqueWithoutAuthor1Input[]
    updateMany?: subtagsUpdateManyWithWhereWithoutAuthor1Input | subtagsUpdateManyWithWhereWithoutAuthor1Input[]
    deleteMany?: subtagsScalarWhereInput | subtagsScalarWhereInput[]
  }

  export type readsUpdateManyWithoutAuthor2NestedInput = {
    create?: XOR<readsCreateWithoutAuthor2Input, readsUncheckedCreateWithoutAuthor2Input> | readsCreateWithoutAuthor2Input[] | readsUncheckedCreateWithoutAuthor2Input[]
    connectOrCreate?: readsCreateOrConnectWithoutAuthor2Input | readsCreateOrConnectWithoutAuthor2Input[]
    upsert?: readsUpsertWithWhereUniqueWithoutAuthor2Input | readsUpsertWithWhereUniqueWithoutAuthor2Input[]
    createMany?: readsCreateManyAuthor2InputEnvelope
    set?: readsWhereUniqueInput | readsWhereUniqueInput[]
    disconnect?: readsWhereUniqueInput | readsWhereUniqueInput[]
    delete?: readsWhereUniqueInput | readsWhereUniqueInput[]
    connect?: readsWhereUniqueInput | readsWhereUniqueInput[]
    update?: readsUpdateWithWhereUniqueWithoutAuthor2Input | readsUpdateWithWhereUniqueWithoutAuthor2Input[]
    updateMany?: readsUpdateManyWithWhereWithoutAuthor2Input | readsUpdateManyWithWhereWithoutAuthor2Input[]
    deleteMany?: readsScalarWhereInput | readsScalarWhereInput[]
  }

  export type goodsUpdateManyWithoutAuthor2NestedInput = {
    create?: XOR<goodsCreateWithoutAuthor2Input, goodsUncheckedCreateWithoutAuthor2Input> | goodsCreateWithoutAuthor2Input[] | goodsUncheckedCreateWithoutAuthor2Input[]
    connectOrCreate?: goodsCreateOrConnectWithoutAuthor2Input | goodsCreateOrConnectWithoutAuthor2Input[]
    upsert?: goodsUpsertWithWhereUniqueWithoutAuthor2Input | goodsUpsertWithWhereUniqueWithoutAuthor2Input[]
    createMany?: goodsCreateManyAuthor2InputEnvelope
    set?: goodsWhereUniqueInput | goodsWhereUniqueInput[]
    disconnect?: goodsWhereUniqueInput | goodsWhereUniqueInput[]
    delete?: goodsWhereUniqueInput | goodsWhereUniqueInput[]
    connect?: goodsWhereUniqueInput | goodsWhereUniqueInput[]
    update?: goodsUpdateWithWhereUniqueWithoutAuthor2Input | goodsUpdateWithWhereUniqueWithoutAuthor2Input[]
    updateMany?: goodsUpdateManyWithWhereWithoutAuthor2Input | goodsUpdateManyWithWhereWithoutAuthor2Input[]
    deleteMany?: goodsScalarWhereInput | goodsScalarWhereInput[]
  }

  export type maintagsUncheckedUpdateOneWithoutAuthor1NestedInput = {
    create?: XOR<maintagsCreateWithoutAuthor1Input, maintagsUncheckedCreateWithoutAuthor1Input>
    connectOrCreate?: maintagsCreateOrConnectWithoutAuthor1Input
    upsert?: maintagsUpsertWithoutAuthor1Input
    disconnect?: maintagsWhereInput | boolean
    delete?: maintagsWhereInput | boolean
    connect?: maintagsWhereUniqueInput
    update?: XOR<XOR<maintagsUpdateToOneWithWhereWithoutAuthor1Input, maintagsUpdateWithoutAuthor1Input>, maintagsUncheckedUpdateWithoutAuthor1Input>
  }

  export type subtagsUncheckedUpdateManyWithoutAuthor1NestedInput = {
    create?: XOR<subtagsCreateWithoutAuthor1Input, subtagsUncheckedCreateWithoutAuthor1Input> | subtagsCreateWithoutAuthor1Input[] | subtagsUncheckedCreateWithoutAuthor1Input[]
    connectOrCreate?: subtagsCreateOrConnectWithoutAuthor1Input | subtagsCreateOrConnectWithoutAuthor1Input[]
    upsert?: subtagsUpsertWithWhereUniqueWithoutAuthor1Input | subtagsUpsertWithWhereUniqueWithoutAuthor1Input[]
    createMany?: subtagsCreateManyAuthor1InputEnvelope
    set?: subtagsWhereUniqueInput | subtagsWhereUniqueInput[]
    disconnect?: subtagsWhereUniqueInput | subtagsWhereUniqueInput[]
    delete?: subtagsWhereUniqueInput | subtagsWhereUniqueInput[]
    connect?: subtagsWhereUniqueInput | subtagsWhereUniqueInput[]
    update?: subtagsUpdateWithWhereUniqueWithoutAuthor1Input | subtagsUpdateWithWhereUniqueWithoutAuthor1Input[]
    updateMany?: subtagsUpdateManyWithWhereWithoutAuthor1Input | subtagsUpdateManyWithWhereWithoutAuthor1Input[]
    deleteMany?: subtagsScalarWhereInput | subtagsScalarWhereInput[]
  }

  export type readsUncheckedUpdateManyWithoutAuthor2NestedInput = {
    create?: XOR<readsCreateWithoutAuthor2Input, readsUncheckedCreateWithoutAuthor2Input> | readsCreateWithoutAuthor2Input[] | readsUncheckedCreateWithoutAuthor2Input[]
    connectOrCreate?: readsCreateOrConnectWithoutAuthor2Input | readsCreateOrConnectWithoutAuthor2Input[]
    upsert?: readsUpsertWithWhereUniqueWithoutAuthor2Input | readsUpsertWithWhereUniqueWithoutAuthor2Input[]
    createMany?: readsCreateManyAuthor2InputEnvelope
    set?: readsWhereUniqueInput | readsWhereUniqueInput[]
    disconnect?: readsWhereUniqueInput | readsWhereUniqueInput[]
    delete?: readsWhereUniqueInput | readsWhereUniqueInput[]
    connect?: readsWhereUniqueInput | readsWhereUniqueInput[]
    update?: readsUpdateWithWhereUniqueWithoutAuthor2Input | readsUpdateWithWhereUniqueWithoutAuthor2Input[]
    updateMany?: readsUpdateManyWithWhereWithoutAuthor2Input | readsUpdateManyWithWhereWithoutAuthor2Input[]
    deleteMany?: readsScalarWhereInput | readsScalarWhereInput[]
  }

  export type goodsUncheckedUpdateManyWithoutAuthor2NestedInput = {
    create?: XOR<goodsCreateWithoutAuthor2Input, goodsUncheckedCreateWithoutAuthor2Input> | goodsCreateWithoutAuthor2Input[] | goodsUncheckedCreateWithoutAuthor2Input[]
    connectOrCreate?: goodsCreateOrConnectWithoutAuthor2Input | goodsCreateOrConnectWithoutAuthor2Input[]
    upsert?: goodsUpsertWithWhereUniqueWithoutAuthor2Input | goodsUpsertWithWhereUniqueWithoutAuthor2Input[]
    createMany?: goodsCreateManyAuthor2InputEnvelope
    set?: goodsWhereUniqueInput | goodsWhereUniqueInput[]
    disconnect?: goodsWhereUniqueInput | goodsWhereUniqueInput[]
    delete?: goodsWhereUniqueInput | goodsWhereUniqueInput[]
    connect?: goodsWhereUniqueInput | goodsWhereUniqueInput[]
    update?: goodsUpdateWithWhereUniqueWithoutAuthor2Input | goodsUpdateWithWhereUniqueWithoutAuthor2Input[]
    updateMany?: goodsUpdateManyWithWhereWithoutAuthor2Input | goodsUpdateManyWithWhereWithoutAuthor2Input[]
    deleteMany?: goodsScalarWhereInput | goodsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutGoodInput = {
    create?: XOR<usersCreateWithoutGoodInput, usersUncheckedCreateWithoutGoodInput>
    connectOrCreate?: usersCreateOrConnectWithoutGoodInput
    connect?: usersWhereUniqueInput
  }

  export type articlesCreateNestedOneWithoutGoodInput = {
    create?: XOR<articlesCreateWithoutGoodInput, articlesUncheckedCreateWithoutGoodInput>
    connectOrCreate?: articlesCreateOrConnectWithoutGoodInput
    connect?: articlesWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutGoodNestedInput = {
    create?: XOR<usersCreateWithoutGoodInput, usersUncheckedCreateWithoutGoodInput>
    connectOrCreate?: usersCreateOrConnectWithoutGoodInput
    upsert?: usersUpsertWithoutGoodInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutGoodInput, usersUpdateWithoutGoodInput>, usersUncheckedUpdateWithoutGoodInput>
  }

  export type articlesUpdateOneRequiredWithoutGoodNestedInput = {
    create?: XOR<articlesCreateWithoutGoodInput, articlesUncheckedCreateWithoutGoodInput>
    connectOrCreate?: articlesCreateOrConnectWithoutGoodInput
    upsert?: articlesUpsertWithoutGoodInput
    connect?: articlesWhereUniqueInput
    update?: XOR<XOR<articlesUpdateToOneWithWhereWithoutGoodInput, articlesUpdateWithoutGoodInput>, articlesUncheckedUpdateWithoutGoodInput>
  }

  export type usersCreateNestedOneWithoutReadInput = {
    create?: XOR<usersCreateWithoutReadInput, usersUncheckedCreateWithoutReadInput>
    connectOrCreate?: usersCreateOrConnectWithoutReadInput
    connect?: usersWhereUniqueInput
  }

  export type articlesCreateNestedOneWithoutReadInput = {
    create?: XOR<articlesCreateWithoutReadInput, articlesUncheckedCreateWithoutReadInput>
    connectOrCreate?: articlesCreateOrConnectWithoutReadInput
    connect?: articlesWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutReadNestedInput = {
    create?: XOR<usersCreateWithoutReadInput, usersUncheckedCreateWithoutReadInput>
    connectOrCreate?: usersCreateOrConnectWithoutReadInput
    upsert?: usersUpsertWithoutReadInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutReadInput, usersUpdateWithoutReadInput>, usersUncheckedUpdateWithoutReadInput>
  }

  export type articlesUpdateOneRequiredWithoutReadNestedInput = {
    create?: XOR<articlesCreateWithoutReadInput, articlesUncheckedCreateWithoutReadInput>
    connectOrCreate?: articlesCreateOrConnectWithoutReadInput
    upsert?: articlesUpsertWithoutReadInput
    connect?: articlesWhereUniqueInput
    update?: XOR<XOR<articlesUpdateToOneWithWhereWithoutReadInput, articlesUpdateWithoutReadInput>, articlesUncheckedUpdateWithoutReadInput>
  }

  export type articlesCreateNestedOneWithoutMaintagInput = {
    create?: XOR<articlesCreateWithoutMaintagInput, articlesUncheckedCreateWithoutMaintagInput>
    connectOrCreate?: articlesCreateOrConnectWithoutMaintagInput
    connect?: articlesWhereUniqueInput
  }

  export type tagsCreateNestedOneWithoutMaintagInput = {
    create?: XOR<tagsCreateWithoutMaintagInput, tagsUncheckedCreateWithoutMaintagInput>
    connectOrCreate?: tagsCreateOrConnectWithoutMaintagInput
    connect?: tagsWhereUniqueInput
  }

  export type articlesUpdateOneRequiredWithoutMaintagNestedInput = {
    create?: XOR<articlesCreateWithoutMaintagInput, articlesUncheckedCreateWithoutMaintagInput>
    connectOrCreate?: articlesCreateOrConnectWithoutMaintagInput
    upsert?: articlesUpsertWithoutMaintagInput
    connect?: articlesWhereUniqueInput
    update?: XOR<XOR<articlesUpdateToOneWithWhereWithoutMaintagInput, articlesUpdateWithoutMaintagInput>, articlesUncheckedUpdateWithoutMaintagInput>
  }

  export type tagsUpdateOneRequiredWithoutMaintagNestedInput = {
    create?: XOR<tagsCreateWithoutMaintagInput, tagsUncheckedCreateWithoutMaintagInput>
    connectOrCreate?: tagsCreateOrConnectWithoutMaintagInput
    upsert?: tagsUpsertWithoutMaintagInput
    connect?: tagsWhereUniqueInput
    update?: XOR<XOR<tagsUpdateToOneWithWhereWithoutMaintagInput, tagsUpdateWithoutMaintagInput>, tagsUncheckedUpdateWithoutMaintagInput>
  }

  export type articlesCreateNestedOneWithoutSubtagInput = {
    create?: XOR<articlesCreateWithoutSubtagInput, articlesUncheckedCreateWithoutSubtagInput>
    connectOrCreate?: articlesCreateOrConnectWithoutSubtagInput
    connect?: articlesWhereUniqueInput
  }

  export type tagsCreateNestedOneWithoutSubtagInput = {
    create?: XOR<tagsCreateWithoutSubtagInput, tagsUncheckedCreateWithoutSubtagInput>
    connectOrCreate?: tagsCreateOrConnectWithoutSubtagInput
    connect?: tagsWhereUniqueInput
  }

  export type articlesUpdateOneRequiredWithoutSubtagNestedInput = {
    create?: XOR<articlesCreateWithoutSubtagInput, articlesUncheckedCreateWithoutSubtagInput>
    connectOrCreate?: articlesCreateOrConnectWithoutSubtagInput
    upsert?: articlesUpsertWithoutSubtagInput
    connect?: articlesWhereUniqueInput
    update?: XOR<XOR<articlesUpdateToOneWithWhereWithoutSubtagInput, articlesUpdateWithoutSubtagInput>, articlesUncheckedUpdateWithoutSubtagInput>
  }

  export type tagsUpdateOneRequiredWithoutSubtagNestedInput = {
    create?: XOR<tagsCreateWithoutSubtagInput, tagsUncheckedCreateWithoutSubtagInput>
    connectOrCreate?: tagsCreateOrConnectWithoutSubtagInput
    upsert?: tagsUpsertWithoutSubtagInput
    connect?: tagsWhereUniqueInput
    update?: XOR<XOR<tagsUpdateToOneWithWhereWithoutSubtagInput, tagsUpdateWithoutSubtagInput>, tagsUncheckedUpdateWithoutSubtagInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type followsCreateWithoutAuthor1Input = {

  }

  export type followsUncheckedCreateWithoutAuthor1Input = {

  }

  export type followsCreateOrConnectWithoutAuthor1Input = {
    where: followsWhereUniqueInput
    create: XOR<followsCreateWithoutAuthor1Input, followsUncheckedCreateWithoutAuthor1Input>
  }

  export type followsCreateManyAuthor1InputEnvelope = {
    data: followsCreateManyAuthor1Input | followsCreateManyAuthor1Input[]
    skipDuplicates?: boolean
  }

  export type articlesCreateWithoutAuthorInput = {
    article_title: string
    article_image: string
    article_created?: Date | string
    article_updated?: Date | string
    maintag?: maintagsCreateNestedOneWithoutAuthor1Input
    subtag?: subtagsCreateNestedManyWithoutAuthor1Input
    read?: readsCreateNestedManyWithoutAuthor2Input
    good?: goodsCreateNestedManyWithoutAuthor2Input
  }

  export type articlesUncheckedCreateWithoutAuthorInput = {
    article_id?: number
    article_title: string
    article_image: string
    article_created?: Date | string
    article_updated?: Date | string
    maintag?: maintagsUncheckedCreateNestedOneWithoutAuthor1Input
    subtag?: subtagsUncheckedCreateNestedManyWithoutAuthor1Input
    read?: readsUncheckedCreateNestedManyWithoutAuthor2Input
    good?: goodsUncheckedCreateNestedManyWithoutAuthor2Input
  }

  export type articlesCreateOrConnectWithoutAuthorInput = {
    where: articlesWhereUniqueInput
    create: XOR<articlesCreateWithoutAuthorInput, articlesUncheckedCreateWithoutAuthorInput>
  }

  export type articlesCreateManyAuthorInputEnvelope = {
    data: articlesCreateManyAuthorInput | articlesCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type tagsCreateWithoutAuthorInput = {
    tag_name: string
    maintag?: maintagsCreateNestedOneWithoutAuthor2Input
    subtag?: subtagsCreateNestedManyWithoutAuthor2Input
  }

  export type tagsUncheckedCreateWithoutAuthorInput = {
    tag_id?: number
    tag_name: string
    maintag?: maintagsUncheckedCreateNestedOneWithoutAuthor2Input
    subtag?: subtagsUncheckedCreateNestedManyWithoutAuthor2Input
  }

  export type tagsCreateOrConnectWithoutAuthorInput = {
    where: tagsWhereUniqueInput
    create: XOR<tagsCreateWithoutAuthorInput, tagsUncheckedCreateWithoutAuthorInput>
  }

  export type tagsCreateManyAuthorInputEnvelope = {
    data: tagsCreateManyAuthorInput | tagsCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type goodsCreateWithoutAuthor1Input = {
    good_created?: Date | string
    author2: articlesCreateNestedOneWithoutGoodInput
  }

  export type goodsUncheckedCreateWithoutAuthor1Input = {
    articleId: number
    good_created?: Date | string
  }

  export type goodsCreateOrConnectWithoutAuthor1Input = {
    where: goodsWhereUniqueInput
    create: XOR<goodsCreateWithoutAuthor1Input, goodsUncheckedCreateWithoutAuthor1Input>
  }

  export type goodsCreateManyAuthor1InputEnvelope = {
    data: goodsCreateManyAuthor1Input | goodsCreateManyAuthor1Input[]
    skipDuplicates?: boolean
  }

  export type readsCreateWithoutAuthor1Input = {
    read_created?: Date | string
    author2: articlesCreateNestedOneWithoutReadInput
  }

  export type readsUncheckedCreateWithoutAuthor1Input = {
    read_created?: Date | string
    articleId: number
  }

  export type readsCreateOrConnectWithoutAuthor1Input = {
    where: readsWhereUniqueInput
    create: XOR<readsCreateWithoutAuthor1Input, readsUncheckedCreateWithoutAuthor1Input>
  }

  export type readsCreateManyAuthor1InputEnvelope = {
    data: readsCreateManyAuthor1Input | readsCreateManyAuthor1Input[]
    skipDuplicates?: boolean
  }

  export type followsUpsertWithWhereUniqueWithoutAuthor1Input = {
    where: followsWhereUniqueInput
    update: XOR<followsUpdateWithoutAuthor1Input, followsUncheckedUpdateWithoutAuthor1Input>
    create: XOR<followsCreateWithoutAuthor1Input, followsUncheckedCreateWithoutAuthor1Input>
  }

  export type followsUpdateWithWhereUniqueWithoutAuthor1Input = {
    where: followsWhereUniqueInput
    data: XOR<followsUpdateWithoutAuthor1Input, followsUncheckedUpdateWithoutAuthor1Input>
  }

  export type followsUpdateManyWithWhereWithoutAuthor1Input = {
    where: followsScalarWhereInput
    data: XOR<followsUpdateManyMutationInput, followsUncheckedUpdateManyWithoutAuthor1Input>
  }

  export type followsScalarWhereInput = {
    AND?: followsScalarWhereInput | followsScalarWhereInput[]
    OR?: followsScalarWhereInput[]
    NOT?: followsScalarWhereInput | followsScalarWhereInput[]
    follow_id?: IntFilter<"follows"> | number
  }

  export type articlesUpsertWithWhereUniqueWithoutAuthorInput = {
    where: articlesWhereUniqueInput
    update: XOR<articlesUpdateWithoutAuthorInput, articlesUncheckedUpdateWithoutAuthorInput>
    create: XOR<articlesCreateWithoutAuthorInput, articlesUncheckedCreateWithoutAuthorInput>
  }

  export type articlesUpdateWithWhereUniqueWithoutAuthorInput = {
    where: articlesWhereUniqueInput
    data: XOR<articlesUpdateWithoutAuthorInput, articlesUncheckedUpdateWithoutAuthorInput>
  }

  export type articlesUpdateManyWithWhereWithoutAuthorInput = {
    where: articlesScalarWhereInput
    data: XOR<articlesUpdateManyMutationInput, articlesUncheckedUpdateManyWithoutAuthorInput>
  }

  export type articlesScalarWhereInput = {
    AND?: articlesScalarWhereInput | articlesScalarWhereInput[]
    OR?: articlesScalarWhereInput[]
    NOT?: articlesScalarWhereInput | articlesScalarWhereInput[]
    article_id?: IntFilter<"articles"> | number
    article_title?: StringFilter<"articles"> | string
    article_image?: StringFilter<"articles"> | string
    article_created?: DateTimeFilter<"articles"> | Date | string
    article_updated?: DateTimeFilter<"articles"> | Date | string
    userId?: IntFilter<"articles"> | number
  }

  export type tagsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: tagsWhereUniqueInput
    update: XOR<tagsUpdateWithoutAuthorInput, tagsUncheckedUpdateWithoutAuthorInput>
    create: XOR<tagsCreateWithoutAuthorInput, tagsUncheckedCreateWithoutAuthorInput>
  }

  export type tagsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: tagsWhereUniqueInput
    data: XOR<tagsUpdateWithoutAuthorInput, tagsUncheckedUpdateWithoutAuthorInput>
  }

  export type tagsUpdateManyWithWhereWithoutAuthorInput = {
    where: tagsScalarWhereInput
    data: XOR<tagsUpdateManyMutationInput, tagsUncheckedUpdateManyWithoutAuthorInput>
  }

  export type tagsScalarWhereInput = {
    AND?: tagsScalarWhereInput | tagsScalarWhereInput[]
    OR?: tagsScalarWhereInput[]
    NOT?: tagsScalarWhereInput | tagsScalarWhereInput[]
    tag_id?: IntFilter<"tags"> | number
    tag_name?: StringFilter<"tags"> | string
    userId?: IntFilter<"tags"> | number
  }

  export type goodsUpsertWithWhereUniqueWithoutAuthor1Input = {
    where: goodsWhereUniqueInput
    update: XOR<goodsUpdateWithoutAuthor1Input, goodsUncheckedUpdateWithoutAuthor1Input>
    create: XOR<goodsCreateWithoutAuthor1Input, goodsUncheckedCreateWithoutAuthor1Input>
  }

  export type goodsUpdateWithWhereUniqueWithoutAuthor1Input = {
    where: goodsWhereUniqueInput
    data: XOR<goodsUpdateWithoutAuthor1Input, goodsUncheckedUpdateWithoutAuthor1Input>
  }

  export type goodsUpdateManyWithWhereWithoutAuthor1Input = {
    where: goodsScalarWhereInput
    data: XOR<goodsUpdateManyMutationInput, goodsUncheckedUpdateManyWithoutAuthor1Input>
  }

  export type goodsScalarWhereInput = {
    AND?: goodsScalarWhereInput | goodsScalarWhereInput[]
    OR?: goodsScalarWhereInput[]
    NOT?: goodsScalarWhereInput | goodsScalarWhereInput[]
    userId?: IntFilter<"goods"> | number
    articleId?: IntFilter<"goods"> | number
    good_created?: DateTimeFilter<"goods"> | Date | string
  }

  export type readsUpsertWithWhereUniqueWithoutAuthor1Input = {
    where: readsWhereUniqueInput
    update: XOR<readsUpdateWithoutAuthor1Input, readsUncheckedUpdateWithoutAuthor1Input>
    create: XOR<readsCreateWithoutAuthor1Input, readsUncheckedCreateWithoutAuthor1Input>
  }

  export type readsUpdateWithWhereUniqueWithoutAuthor1Input = {
    where: readsWhereUniqueInput
    data: XOR<readsUpdateWithoutAuthor1Input, readsUncheckedUpdateWithoutAuthor1Input>
  }

  export type readsUpdateManyWithWhereWithoutAuthor1Input = {
    where: readsScalarWhereInput
    data: XOR<readsUpdateManyMutationInput, readsUncheckedUpdateManyWithoutAuthor1Input>
  }

  export type readsScalarWhereInput = {
    AND?: readsScalarWhereInput | readsScalarWhereInput[]
    OR?: readsScalarWhereInput[]
    NOT?: readsScalarWhereInput | readsScalarWhereInput[]
    userId?: IntFilter<"reads"> | number
    read_created?: DateTimeFilter<"reads"> | Date | string
    articleId?: IntFilter<"reads"> | number
  }

  export type usersCreateWithoutFollowInput = {
    user_name: string
    user_mail: string
    user_pass: string
    user_created?: Date | string
    user_icon: string
    user_coment: string
    article?: articlesCreateNestedManyWithoutAuthorInput
    tag?: tagsCreateNestedManyWithoutAuthorInput
    good?: goodsCreateNestedManyWithoutAuthor1Input
    read?: readsCreateNestedManyWithoutAuthor1Input
  }

  export type usersUncheckedCreateWithoutFollowInput = {
    user_id?: number
    user_name: string
    user_mail: string
    user_pass: string
    user_created?: Date | string
    user_icon: string
    user_coment: string
    article?: articlesUncheckedCreateNestedManyWithoutAuthorInput
    tag?: tagsUncheckedCreateNestedManyWithoutAuthorInput
    good?: goodsUncheckedCreateNestedManyWithoutAuthor1Input
    read?: readsUncheckedCreateNestedManyWithoutAuthor1Input
  }

  export type usersCreateOrConnectWithoutFollowInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutFollowInput, usersUncheckedCreateWithoutFollowInput>
  }

  export type usersUpsertWithoutFollowInput = {
    update: XOR<usersUpdateWithoutFollowInput, usersUncheckedUpdateWithoutFollowInput>
    create: XOR<usersCreateWithoutFollowInput, usersUncheckedCreateWithoutFollowInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutFollowInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutFollowInput, usersUncheckedUpdateWithoutFollowInput>
  }

  export type usersUpdateWithoutFollowInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    user_mail?: StringFieldUpdateOperationsInput | string
    user_pass?: StringFieldUpdateOperationsInput | string
    user_created?: DateTimeFieldUpdateOperationsInput | Date | string
    user_icon?: StringFieldUpdateOperationsInput | string
    user_coment?: StringFieldUpdateOperationsInput | string
    article?: articlesUpdateManyWithoutAuthorNestedInput
    tag?: tagsUpdateManyWithoutAuthorNestedInput
    good?: goodsUpdateManyWithoutAuthor1NestedInput
    read?: readsUpdateManyWithoutAuthor1NestedInput
  }

  export type usersUncheckedUpdateWithoutFollowInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    user_mail?: StringFieldUpdateOperationsInput | string
    user_pass?: StringFieldUpdateOperationsInput | string
    user_created?: DateTimeFieldUpdateOperationsInput | Date | string
    user_icon?: StringFieldUpdateOperationsInput | string
    user_coment?: StringFieldUpdateOperationsInput | string
    article?: articlesUncheckedUpdateManyWithoutAuthorNestedInput
    tag?: tagsUncheckedUpdateManyWithoutAuthorNestedInput
    good?: goodsUncheckedUpdateManyWithoutAuthor1NestedInput
    read?: readsUncheckedUpdateManyWithoutAuthor1NestedInput
  }

  export type usersCreateWithoutTagInput = {
    user_name: string
    user_mail: string
    user_pass: string
    user_created?: Date | string
    user_icon: string
    user_coment: string
    follow?: followsCreateNestedManyWithoutAuthor1Input
    article?: articlesCreateNestedManyWithoutAuthorInput
    good?: goodsCreateNestedManyWithoutAuthor1Input
    read?: readsCreateNestedManyWithoutAuthor1Input
  }

  export type usersUncheckedCreateWithoutTagInput = {
    user_id?: number
    user_name: string
    user_mail: string
    user_pass: string
    user_created?: Date | string
    user_icon: string
    user_coment: string
    follow?: followsUncheckedCreateNestedManyWithoutAuthor1Input
    article?: articlesUncheckedCreateNestedManyWithoutAuthorInput
    good?: goodsUncheckedCreateNestedManyWithoutAuthor1Input
    read?: readsUncheckedCreateNestedManyWithoutAuthor1Input
  }

  export type usersCreateOrConnectWithoutTagInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTagInput, usersUncheckedCreateWithoutTagInput>
  }

  export type maintagsCreateWithoutAuthor2Input = {
    author1: articlesCreateNestedOneWithoutMaintagInput
  }

  export type maintagsUncheckedCreateWithoutAuthor2Input = {
    articleId: number
  }

  export type maintagsCreateOrConnectWithoutAuthor2Input = {
    where: maintagsWhereUniqueInput
    create: XOR<maintagsCreateWithoutAuthor2Input, maintagsUncheckedCreateWithoutAuthor2Input>
  }

  export type subtagsCreateWithoutAuthor2Input = {
    author1: articlesCreateNestedOneWithoutSubtagInput
  }

  export type subtagsUncheckedCreateWithoutAuthor2Input = {
    articleId: number
  }

  export type subtagsCreateOrConnectWithoutAuthor2Input = {
    where: subtagsWhereUniqueInput
    create: XOR<subtagsCreateWithoutAuthor2Input, subtagsUncheckedCreateWithoutAuthor2Input>
  }

  export type subtagsCreateManyAuthor2InputEnvelope = {
    data: subtagsCreateManyAuthor2Input | subtagsCreateManyAuthor2Input[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutTagInput = {
    update: XOR<usersUpdateWithoutTagInput, usersUncheckedUpdateWithoutTagInput>
    create: XOR<usersCreateWithoutTagInput, usersUncheckedCreateWithoutTagInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTagInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTagInput, usersUncheckedUpdateWithoutTagInput>
  }

  export type usersUpdateWithoutTagInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    user_mail?: StringFieldUpdateOperationsInput | string
    user_pass?: StringFieldUpdateOperationsInput | string
    user_created?: DateTimeFieldUpdateOperationsInput | Date | string
    user_icon?: StringFieldUpdateOperationsInput | string
    user_coment?: StringFieldUpdateOperationsInput | string
    follow?: followsUpdateManyWithoutAuthor1NestedInput
    article?: articlesUpdateManyWithoutAuthorNestedInput
    good?: goodsUpdateManyWithoutAuthor1NestedInput
    read?: readsUpdateManyWithoutAuthor1NestedInput
  }

  export type usersUncheckedUpdateWithoutTagInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    user_mail?: StringFieldUpdateOperationsInput | string
    user_pass?: StringFieldUpdateOperationsInput | string
    user_created?: DateTimeFieldUpdateOperationsInput | Date | string
    user_icon?: StringFieldUpdateOperationsInput | string
    user_coment?: StringFieldUpdateOperationsInput | string
    follow?: followsUncheckedUpdateManyWithoutAuthor1NestedInput
    article?: articlesUncheckedUpdateManyWithoutAuthorNestedInput
    good?: goodsUncheckedUpdateManyWithoutAuthor1NestedInput
    read?: readsUncheckedUpdateManyWithoutAuthor1NestedInput
  }

  export type maintagsUpsertWithoutAuthor2Input = {
    update: XOR<maintagsUpdateWithoutAuthor2Input, maintagsUncheckedUpdateWithoutAuthor2Input>
    create: XOR<maintagsCreateWithoutAuthor2Input, maintagsUncheckedCreateWithoutAuthor2Input>
    where?: maintagsWhereInput
  }

  export type maintagsUpdateToOneWithWhereWithoutAuthor2Input = {
    where?: maintagsWhereInput
    data: XOR<maintagsUpdateWithoutAuthor2Input, maintagsUncheckedUpdateWithoutAuthor2Input>
  }

  export type maintagsUpdateWithoutAuthor2Input = {
    author1?: articlesUpdateOneRequiredWithoutMaintagNestedInput
  }

  export type maintagsUncheckedUpdateWithoutAuthor2Input = {
    articleId?: IntFieldUpdateOperationsInput | number
  }

  export type subtagsUpsertWithWhereUniqueWithoutAuthor2Input = {
    where: subtagsWhereUniqueInput
    update: XOR<subtagsUpdateWithoutAuthor2Input, subtagsUncheckedUpdateWithoutAuthor2Input>
    create: XOR<subtagsCreateWithoutAuthor2Input, subtagsUncheckedCreateWithoutAuthor2Input>
  }

  export type subtagsUpdateWithWhereUniqueWithoutAuthor2Input = {
    where: subtagsWhereUniqueInput
    data: XOR<subtagsUpdateWithoutAuthor2Input, subtagsUncheckedUpdateWithoutAuthor2Input>
  }

  export type subtagsUpdateManyWithWhereWithoutAuthor2Input = {
    where: subtagsScalarWhereInput
    data: XOR<subtagsUpdateManyMutationInput, subtagsUncheckedUpdateManyWithoutAuthor2Input>
  }

  export type subtagsScalarWhereInput = {
    AND?: subtagsScalarWhereInput | subtagsScalarWhereInput[]
    OR?: subtagsScalarWhereInput[]
    NOT?: subtagsScalarWhereInput | subtagsScalarWhereInput[]
    articleId?: IntFilter<"subtags"> | number
    tagId?: IntFilter<"subtags"> | number
  }

  export type usersCreateWithoutArticleInput = {
    user_name: string
    user_mail: string
    user_pass: string
    user_created?: Date | string
    user_icon: string
    user_coment: string
    follow?: followsCreateNestedManyWithoutAuthor1Input
    tag?: tagsCreateNestedManyWithoutAuthorInput
    good?: goodsCreateNestedManyWithoutAuthor1Input
    read?: readsCreateNestedManyWithoutAuthor1Input
  }

  export type usersUncheckedCreateWithoutArticleInput = {
    user_id?: number
    user_name: string
    user_mail: string
    user_pass: string
    user_created?: Date | string
    user_icon: string
    user_coment: string
    follow?: followsUncheckedCreateNestedManyWithoutAuthor1Input
    tag?: tagsUncheckedCreateNestedManyWithoutAuthorInput
    good?: goodsUncheckedCreateNestedManyWithoutAuthor1Input
    read?: readsUncheckedCreateNestedManyWithoutAuthor1Input
  }

  export type usersCreateOrConnectWithoutArticleInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutArticleInput, usersUncheckedCreateWithoutArticleInput>
  }

  export type maintagsCreateWithoutAuthor1Input = {
    author2: tagsCreateNestedOneWithoutMaintagInput
  }

  export type maintagsUncheckedCreateWithoutAuthor1Input = {
    tagId: number
  }

  export type maintagsCreateOrConnectWithoutAuthor1Input = {
    where: maintagsWhereUniqueInput
    create: XOR<maintagsCreateWithoutAuthor1Input, maintagsUncheckedCreateWithoutAuthor1Input>
  }

  export type subtagsCreateWithoutAuthor1Input = {
    author2: tagsCreateNestedOneWithoutSubtagInput
  }

  export type subtagsUncheckedCreateWithoutAuthor1Input = {
    tagId: number
  }

  export type subtagsCreateOrConnectWithoutAuthor1Input = {
    where: subtagsWhereUniqueInput
    create: XOR<subtagsCreateWithoutAuthor1Input, subtagsUncheckedCreateWithoutAuthor1Input>
  }

  export type subtagsCreateManyAuthor1InputEnvelope = {
    data: subtagsCreateManyAuthor1Input | subtagsCreateManyAuthor1Input[]
    skipDuplicates?: boolean
  }

  export type readsCreateWithoutAuthor2Input = {
    read_created?: Date | string
    author1: usersCreateNestedOneWithoutReadInput
  }

  export type readsUncheckedCreateWithoutAuthor2Input = {
    userId: number
    read_created?: Date | string
  }

  export type readsCreateOrConnectWithoutAuthor2Input = {
    where: readsWhereUniqueInput
    create: XOR<readsCreateWithoutAuthor2Input, readsUncheckedCreateWithoutAuthor2Input>
  }

  export type readsCreateManyAuthor2InputEnvelope = {
    data: readsCreateManyAuthor2Input | readsCreateManyAuthor2Input[]
    skipDuplicates?: boolean
  }

  export type goodsCreateWithoutAuthor2Input = {
    good_created?: Date | string
    author1: usersCreateNestedOneWithoutGoodInput
  }

  export type goodsUncheckedCreateWithoutAuthor2Input = {
    userId: number
    good_created?: Date | string
  }

  export type goodsCreateOrConnectWithoutAuthor2Input = {
    where: goodsWhereUniqueInput
    create: XOR<goodsCreateWithoutAuthor2Input, goodsUncheckedCreateWithoutAuthor2Input>
  }

  export type goodsCreateManyAuthor2InputEnvelope = {
    data: goodsCreateManyAuthor2Input | goodsCreateManyAuthor2Input[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutArticleInput = {
    update: XOR<usersUpdateWithoutArticleInput, usersUncheckedUpdateWithoutArticleInput>
    create: XOR<usersCreateWithoutArticleInput, usersUncheckedCreateWithoutArticleInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutArticleInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutArticleInput, usersUncheckedUpdateWithoutArticleInput>
  }

  export type usersUpdateWithoutArticleInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    user_mail?: StringFieldUpdateOperationsInput | string
    user_pass?: StringFieldUpdateOperationsInput | string
    user_created?: DateTimeFieldUpdateOperationsInput | Date | string
    user_icon?: StringFieldUpdateOperationsInput | string
    user_coment?: StringFieldUpdateOperationsInput | string
    follow?: followsUpdateManyWithoutAuthor1NestedInput
    tag?: tagsUpdateManyWithoutAuthorNestedInput
    good?: goodsUpdateManyWithoutAuthor1NestedInput
    read?: readsUpdateManyWithoutAuthor1NestedInput
  }

  export type usersUncheckedUpdateWithoutArticleInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    user_mail?: StringFieldUpdateOperationsInput | string
    user_pass?: StringFieldUpdateOperationsInput | string
    user_created?: DateTimeFieldUpdateOperationsInput | Date | string
    user_icon?: StringFieldUpdateOperationsInput | string
    user_coment?: StringFieldUpdateOperationsInput | string
    follow?: followsUncheckedUpdateManyWithoutAuthor1NestedInput
    tag?: tagsUncheckedUpdateManyWithoutAuthorNestedInput
    good?: goodsUncheckedUpdateManyWithoutAuthor1NestedInput
    read?: readsUncheckedUpdateManyWithoutAuthor1NestedInput
  }

  export type maintagsUpsertWithoutAuthor1Input = {
    update: XOR<maintagsUpdateWithoutAuthor1Input, maintagsUncheckedUpdateWithoutAuthor1Input>
    create: XOR<maintagsCreateWithoutAuthor1Input, maintagsUncheckedCreateWithoutAuthor1Input>
    where?: maintagsWhereInput
  }

  export type maintagsUpdateToOneWithWhereWithoutAuthor1Input = {
    where?: maintagsWhereInput
    data: XOR<maintagsUpdateWithoutAuthor1Input, maintagsUncheckedUpdateWithoutAuthor1Input>
  }

  export type maintagsUpdateWithoutAuthor1Input = {
    author2?: tagsUpdateOneRequiredWithoutMaintagNestedInput
  }

  export type maintagsUncheckedUpdateWithoutAuthor1Input = {
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type subtagsUpsertWithWhereUniqueWithoutAuthor1Input = {
    where: subtagsWhereUniqueInput
    update: XOR<subtagsUpdateWithoutAuthor1Input, subtagsUncheckedUpdateWithoutAuthor1Input>
    create: XOR<subtagsCreateWithoutAuthor1Input, subtagsUncheckedCreateWithoutAuthor1Input>
  }

  export type subtagsUpdateWithWhereUniqueWithoutAuthor1Input = {
    where: subtagsWhereUniqueInput
    data: XOR<subtagsUpdateWithoutAuthor1Input, subtagsUncheckedUpdateWithoutAuthor1Input>
  }

  export type subtagsUpdateManyWithWhereWithoutAuthor1Input = {
    where: subtagsScalarWhereInput
    data: XOR<subtagsUpdateManyMutationInput, subtagsUncheckedUpdateManyWithoutAuthor1Input>
  }

  export type readsUpsertWithWhereUniqueWithoutAuthor2Input = {
    where: readsWhereUniqueInput
    update: XOR<readsUpdateWithoutAuthor2Input, readsUncheckedUpdateWithoutAuthor2Input>
    create: XOR<readsCreateWithoutAuthor2Input, readsUncheckedCreateWithoutAuthor2Input>
  }

  export type readsUpdateWithWhereUniqueWithoutAuthor2Input = {
    where: readsWhereUniqueInput
    data: XOR<readsUpdateWithoutAuthor2Input, readsUncheckedUpdateWithoutAuthor2Input>
  }

  export type readsUpdateManyWithWhereWithoutAuthor2Input = {
    where: readsScalarWhereInput
    data: XOR<readsUpdateManyMutationInput, readsUncheckedUpdateManyWithoutAuthor2Input>
  }

  export type goodsUpsertWithWhereUniqueWithoutAuthor2Input = {
    where: goodsWhereUniqueInput
    update: XOR<goodsUpdateWithoutAuthor2Input, goodsUncheckedUpdateWithoutAuthor2Input>
    create: XOR<goodsCreateWithoutAuthor2Input, goodsUncheckedCreateWithoutAuthor2Input>
  }

  export type goodsUpdateWithWhereUniqueWithoutAuthor2Input = {
    where: goodsWhereUniqueInput
    data: XOR<goodsUpdateWithoutAuthor2Input, goodsUncheckedUpdateWithoutAuthor2Input>
  }

  export type goodsUpdateManyWithWhereWithoutAuthor2Input = {
    where: goodsScalarWhereInput
    data: XOR<goodsUpdateManyMutationInput, goodsUncheckedUpdateManyWithoutAuthor2Input>
  }

  export type usersCreateWithoutGoodInput = {
    user_name: string
    user_mail: string
    user_pass: string
    user_created?: Date | string
    user_icon: string
    user_coment: string
    follow?: followsCreateNestedManyWithoutAuthor1Input
    article?: articlesCreateNestedManyWithoutAuthorInput
    tag?: tagsCreateNestedManyWithoutAuthorInput
    read?: readsCreateNestedManyWithoutAuthor1Input
  }

  export type usersUncheckedCreateWithoutGoodInput = {
    user_id?: number
    user_name: string
    user_mail: string
    user_pass: string
    user_created?: Date | string
    user_icon: string
    user_coment: string
    follow?: followsUncheckedCreateNestedManyWithoutAuthor1Input
    article?: articlesUncheckedCreateNestedManyWithoutAuthorInput
    tag?: tagsUncheckedCreateNestedManyWithoutAuthorInput
    read?: readsUncheckedCreateNestedManyWithoutAuthor1Input
  }

  export type usersCreateOrConnectWithoutGoodInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutGoodInput, usersUncheckedCreateWithoutGoodInput>
  }

  export type articlesCreateWithoutGoodInput = {
    article_title: string
    article_image: string
    article_created?: Date | string
    article_updated?: Date | string
    author: usersCreateNestedOneWithoutArticleInput
    maintag?: maintagsCreateNestedOneWithoutAuthor1Input
    subtag?: subtagsCreateNestedManyWithoutAuthor1Input
    read?: readsCreateNestedManyWithoutAuthor2Input
  }

  export type articlesUncheckedCreateWithoutGoodInput = {
    article_id?: number
    article_title: string
    article_image: string
    article_created?: Date | string
    article_updated?: Date | string
    userId: number
    maintag?: maintagsUncheckedCreateNestedOneWithoutAuthor1Input
    subtag?: subtagsUncheckedCreateNestedManyWithoutAuthor1Input
    read?: readsUncheckedCreateNestedManyWithoutAuthor2Input
  }

  export type articlesCreateOrConnectWithoutGoodInput = {
    where: articlesWhereUniqueInput
    create: XOR<articlesCreateWithoutGoodInput, articlesUncheckedCreateWithoutGoodInput>
  }

  export type usersUpsertWithoutGoodInput = {
    update: XOR<usersUpdateWithoutGoodInput, usersUncheckedUpdateWithoutGoodInput>
    create: XOR<usersCreateWithoutGoodInput, usersUncheckedCreateWithoutGoodInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutGoodInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutGoodInput, usersUncheckedUpdateWithoutGoodInput>
  }

  export type usersUpdateWithoutGoodInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    user_mail?: StringFieldUpdateOperationsInput | string
    user_pass?: StringFieldUpdateOperationsInput | string
    user_created?: DateTimeFieldUpdateOperationsInput | Date | string
    user_icon?: StringFieldUpdateOperationsInput | string
    user_coment?: StringFieldUpdateOperationsInput | string
    follow?: followsUpdateManyWithoutAuthor1NestedInput
    article?: articlesUpdateManyWithoutAuthorNestedInput
    tag?: tagsUpdateManyWithoutAuthorNestedInput
    read?: readsUpdateManyWithoutAuthor1NestedInput
  }

  export type usersUncheckedUpdateWithoutGoodInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    user_mail?: StringFieldUpdateOperationsInput | string
    user_pass?: StringFieldUpdateOperationsInput | string
    user_created?: DateTimeFieldUpdateOperationsInput | Date | string
    user_icon?: StringFieldUpdateOperationsInput | string
    user_coment?: StringFieldUpdateOperationsInput | string
    follow?: followsUncheckedUpdateManyWithoutAuthor1NestedInput
    article?: articlesUncheckedUpdateManyWithoutAuthorNestedInput
    tag?: tagsUncheckedUpdateManyWithoutAuthorNestedInput
    read?: readsUncheckedUpdateManyWithoutAuthor1NestedInput
  }

  export type articlesUpsertWithoutGoodInput = {
    update: XOR<articlesUpdateWithoutGoodInput, articlesUncheckedUpdateWithoutGoodInput>
    create: XOR<articlesCreateWithoutGoodInput, articlesUncheckedCreateWithoutGoodInput>
    where?: articlesWhereInput
  }

  export type articlesUpdateToOneWithWhereWithoutGoodInput = {
    where?: articlesWhereInput
    data: XOR<articlesUpdateWithoutGoodInput, articlesUncheckedUpdateWithoutGoodInput>
  }

  export type articlesUpdateWithoutGoodInput = {
    article_title?: StringFieldUpdateOperationsInput | string
    article_image?: StringFieldUpdateOperationsInput | string
    article_created?: DateTimeFieldUpdateOperationsInput | Date | string
    article_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: usersUpdateOneRequiredWithoutArticleNestedInput
    maintag?: maintagsUpdateOneWithoutAuthor1NestedInput
    subtag?: subtagsUpdateManyWithoutAuthor1NestedInput
    read?: readsUpdateManyWithoutAuthor2NestedInput
  }

  export type articlesUncheckedUpdateWithoutGoodInput = {
    article_id?: IntFieldUpdateOperationsInput | number
    article_title?: StringFieldUpdateOperationsInput | string
    article_image?: StringFieldUpdateOperationsInput | string
    article_created?: DateTimeFieldUpdateOperationsInput | Date | string
    article_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    maintag?: maintagsUncheckedUpdateOneWithoutAuthor1NestedInput
    subtag?: subtagsUncheckedUpdateManyWithoutAuthor1NestedInput
    read?: readsUncheckedUpdateManyWithoutAuthor2NestedInput
  }

  export type usersCreateWithoutReadInput = {
    user_name: string
    user_mail: string
    user_pass: string
    user_created?: Date | string
    user_icon: string
    user_coment: string
    follow?: followsCreateNestedManyWithoutAuthor1Input
    article?: articlesCreateNestedManyWithoutAuthorInput
    tag?: tagsCreateNestedManyWithoutAuthorInput
    good?: goodsCreateNestedManyWithoutAuthor1Input
  }

  export type usersUncheckedCreateWithoutReadInput = {
    user_id?: number
    user_name: string
    user_mail: string
    user_pass: string
    user_created?: Date | string
    user_icon: string
    user_coment: string
    follow?: followsUncheckedCreateNestedManyWithoutAuthor1Input
    article?: articlesUncheckedCreateNestedManyWithoutAuthorInput
    tag?: tagsUncheckedCreateNestedManyWithoutAuthorInput
    good?: goodsUncheckedCreateNestedManyWithoutAuthor1Input
  }

  export type usersCreateOrConnectWithoutReadInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutReadInput, usersUncheckedCreateWithoutReadInput>
  }

  export type articlesCreateWithoutReadInput = {
    article_title: string
    article_image: string
    article_created?: Date | string
    article_updated?: Date | string
    author: usersCreateNestedOneWithoutArticleInput
    maintag?: maintagsCreateNestedOneWithoutAuthor1Input
    subtag?: subtagsCreateNestedManyWithoutAuthor1Input
    good?: goodsCreateNestedManyWithoutAuthor2Input
  }

  export type articlesUncheckedCreateWithoutReadInput = {
    article_id?: number
    article_title: string
    article_image: string
    article_created?: Date | string
    article_updated?: Date | string
    userId: number
    maintag?: maintagsUncheckedCreateNestedOneWithoutAuthor1Input
    subtag?: subtagsUncheckedCreateNestedManyWithoutAuthor1Input
    good?: goodsUncheckedCreateNestedManyWithoutAuthor2Input
  }

  export type articlesCreateOrConnectWithoutReadInput = {
    where: articlesWhereUniqueInput
    create: XOR<articlesCreateWithoutReadInput, articlesUncheckedCreateWithoutReadInput>
  }

  export type usersUpsertWithoutReadInput = {
    update: XOR<usersUpdateWithoutReadInput, usersUncheckedUpdateWithoutReadInput>
    create: XOR<usersCreateWithoutReadInput, usersUncheckedCreateWithoutReadInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutReadInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutReadInput, usersUncheckedUpdateWithoutReadInput>
  }

  export type usersUpdateWithoutReadInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    user_mail?: StringFieldUpdateOperationsInput | string
    user_pass?: StringFieldUpdateOperationsInput | string
    user_created?: DateTimeFieldUpdateOperationsInput | Date | string
    user_icon?: StringFieldUpdateOperationsInput | string
    user_coment?: StringFieldUpdateOperationsInput | string
    follow?: followsUpdateManyWithoutAuthor1NestedInput
    article?: articlesUpdateManyWithoutAuthorNestedInput
    tag?: tagsUpdateManyWithoutAuthorNestedInput
    good?: goodsUpdateManyWithoutAuthor1NestedInput
  }

  export type usersUncheckedUpdateWithoutReadInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    user_mail?: StringFieldUpdateOperationsInput | string
    user_pass?: StringFieldUpdateOperationsInput | string
    user_created?: DateTimeFieldUpdateOperationsInput | Date | string
    user_icon?: StringFieldUpdateOperationsInput | string
    user_coment?: StringFieldUpdateOperationsInput | string
    follow?: followsUncheckedUpdateManyWithoutAuthor1NestedInput
    article?: articlesUncheckedUpdateManyWithoutAuthorNestedInput
    tag?: tagsUncheckedUpdateManyWithoutAuthorNestedInput
    good?: goodsUncheckedUpdateManyWithoutAuthor1NestedInput
  }

  export type articlesUpsertWithoutReadInput = {
    update: XOR<articlesUpdateWithoutReadInput, articlesUncheckedUpdateWithoutReadInput>
    create: XOR<articlesCreateWithoutReadInput, articlesUncheckedCreateWithoutReadInput>
    where?: articlesWhereInput
  }

  export type articlesUpdateToOneWithWhereWithoutReadInput = {
    where?: articlesWhereInput
    data: XOR<articlesUpdateWithoutReadInput, articlesUncheckedUpdateWithoutReadInput>
  }

  export type articlesUpdateWithoutReadInput = {
    article_title?: StringFieldUpdateOperationsInput | string
    article_image?: StringFieldUpdateOperationsInput | string
    article_created?: DateTimeFieldUpdateOperationsInput | Date | string
    article_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: usersUpdateOneRequiredWithoutArticleNestedInput
    maintag?: maintagsUpdateOneWithoutAuthor1NestedInput
    subtag?: subtagsUpdateManyWithoutAuthor1NestedInput
    good?: goodsUpdateManyWithoutAuthor2NestedInput
  }

  export type articlesUncheckedUpdateWithoutReadInput = {
    article_id?: IntFieldUpdateOperationsInput | number
    article_title?: StringFieldUpdateOperationsInput | string
    article_image?: StringFieldUpdateOperationsInput | string
    article_created?: DateTimeFieldUpdateOperationsInput | Date | string
    article_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    maintag?: maintagsUncheckedUpdateOneWithoutAuthor1NestedInput
    subtag?: subtagsUncheckedUpdateManyWithoutAuthor1NestedInput
    good?: goodsUncheckedUpdateManyWithoutAuthor2NestedInput
  }

  export type articlesCreateWithoutMaintagInput = {
    article_title: string
    article_image: string
    article_created?: Date | string
    article_updated?: Date | string
    author: usersCreateNestedOneWithoutArticleInput
    subtag?: subtagsCreateNestedManyWithoutAuthor1Input
    read?: readsCreateNestedManyWithoutAuthor2Input
    good?: goodsCreateNestedManyWithoutAuthor2Input
  }

  export type articlesUncheckedCreateWithoutMaintagInput = {
    article_id?: number
    article_title: string
    article_image: string
    article_created?: Date | string
    article_updated?: Date | string
    userId: number
    subtag?: subtagsUncheckedCreateNestedManyWithoutAuthor1Input
    read?: readsUncheckedCreateNestedManyWithoutAuthor2Input
    good?: goodsUncheckedCreateNestedManyWithoutAuthor2Input
  }

  export type articlesCreateOrConnectWithoutMaintagInput = {
    where: articlesWhereUniqueInput
    create: XOR<articlesCreateWithoutMaintagInput, articlesUncheckedCreateWithoutMaintagInput>
  }

  export type tagsCreateWithoutMaintagInput = {
    tag_name: string
    author: usersCreateNestedOneWithoutTagInput
    subtag?: subtagsCreateNestedManyWithoutAuthor2Input
  }

  export type tagsUncheckedCreateWithoutMaintagInput = {
    tag_id?: number
    tag_name: string
    userId: number
    subtag?: subtagsUncheckedCreateNestedManyWithoutAuthor2Input
  }

  export type tagsCreateOrConnectWithoutMaintagInput = {
    where: tagsWhereUniqueInput
    create: XOR<tagsCreateWithoutMaintagInput, tagsUncheckedCreateWithoutMaintagInput>
  }

  export type articlesUpsertWithoutMaintagInput = {
    update: XOR<articlesUpdateWithoutMaintagInput, articlesUncheckedUpdateWithoutMaintagInput>
    create: XOR<articlesCreateWithoutMaintagInput, articlesUncheckedCreateWithoutMaintagInput>
    where?: articlesWhereInput
  }

  export type articlesUpdateToOneWithWhereWithoutMaintagInput = {
    where?: articlesWhereInput
    data: XOR<articlesUpdateWithoutMaintagInput, articlesUncheckedUpdateWithoutMaintagInput>
  }

  export type articlesUpdateWithoutMaintagInput = {
    article_title?: StringFieldUpdateOperationsInput | string
    article_image?: StringFieldUpdateOperationsInput | string
    article_created?: DateTimeFieldUpdateOperationsInput | Date | string
    article_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: usersUpdateOneRequiredWithoutArticleNestedInput
    subtag?: subtagsUpdateManyWithoutAuthor1NestedInput
    read?: readsUpdateManyWithoutAuthor2NestedInput
    good?: goodsUpdateManyWithoutAuthor2NestedInput
  }

  export type articlesUncheckedUpdateWithoutMaintagInput = {
    article_id?: IntFieldUpdateOperationsInput | number
    article_title?: StringFieldUpdateOperationsInput | string
    article_image?: StringFieldUpdateOperationsInput | string
    article_created?: DateTimeFieldUpdateOperationsInput | Date | string
    article_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    subtag?: subtagsUncheckedUpdateManyWithoutAuthor1NestedInput
    read?: readsUncheckedUpdateManyWithoutAuthor2NestedInput
    good?: goodsUncheckedUpdateManyWithoutAuthor2NestedInput
  }

  export type tagsUpsertWithoutMaintagInput = {
    update: XOR<tagsUpdateWithoutMaintagInput, tagsUncheckedUpdateWithoutMaintagInput>
    create: XOR<tagsCreateWithoutMaintagInput, tagsUncheckedCreateWithoutMaintagInput>
    where?: tagsWhereInput
  }

  export type tagsUpdateToOneWithWhereWithoutMaintagInput = {
    where?: tagsWhereInput
    data: XOR<tagsUpdateWithoutMaintagInput, tagsUncheckedUpdateWithoutMaintagInput>
  }

  export type tagsUpdateWithoutMaintagInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    author?: usersUpdateOneRequiredWithoutTagNestedInput
    subtag?: subtagsUpdateManyWithoutAuthor2NestedInput
  }

  export type tagsUncheckedUpdateWithoutMaintagInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    tag_name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    subtag?: subtagsUncheckedUpdateManyWithoutAuthor2NestedInput
  }

  export type articlesCreateWithoutSubtagInput = {
    article_title: string
    article_image: string
    article_created?: Date | string
    article_updated?: Date | string
    author: usersCreateNestedOneWithoutArticleInput
    maintag?: maintagsCreateNestedOneWithoutAuthor1Input
    read?: readsCreateNestedManyWithoutAuthor2Input
    good?: goodsCreateNestedManyWithoutAuthor2Input
  }

  export type articlesUncheckedCreateWithoutSubtagInput = {
    article_id?: number
    article_title: string
    article_image: string
    article_created?: Date | string
    article_updated?: Date | string
    userId: number
    maintag?: maintagsUncheckedCreateNestedOneWithoutAuthor1Input
    read?: readsUncheckedCreateNestedManyWithoutAuthor2Input
    good?: goodsUncheckedCreateNestedManyWithoutAuthor2Input
  }

  export type articlesCreateOrConnectWithoutSubtagInput = {
    where: articlesWhereUniqueInput
    create: XOR<articlesCreateWithoutSubtagInput, articlesUncheckedCreateWithoutSubtagInput>
  }

  export type tagsCreateWithoutSubtagInput = {
    tag_name: string
    author: usersCreateNestedOneWithoutTagInput
    maintag?: maintagsCreateNestedOneWithoutAuthor2Input
  }

  export type tagsUncheckedCreateWithoutSubtagInput = {
    tag_id?: number
    tag_name: string
    userId: number
    maintag?: maintagsUncheckedCreateNestedOneWithoutAuthor2Input
  }

  export type tagsCreateOrConnectWithoutSubtagInput = {
    where: tagsWhereUniqueInput
    create: XOR<tagsCreateWithoutSubtagInput, tagsUncheckedCreateWithoutSubtagInput>
  }

  export type articlesUpsertWithoutSubtagInput = {
    update: XOR<articlesUpdateWithoutSubtagInput, articlesUncheckedUpdateWithoutSubtagInput>
    create: XOR<articlesCreateWithoutSubtagInput, articlesUncheckedCreateWithoutSubtagInput>
    where?: articlesWhereInput
  }

  export type articlesUpdateToOneWithWhereWithoutSubtagInput = {
    where?: articlesWhereInput
    data: XOR<articlesUpdateWithoutSubtagInput, articlesUncheckedUpdateWithoutSubtagInput>
  }

  export type articlesUpdateWithoutSubtagInput = {
    article_title?: StringFieldUpdateOperationsInput | string
    article_image?: StringFieldUpdateOperationsInput | string
    article_created?: DateTimeFieldUpdateOperationsInput | Date | string
    article_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: usersUpdateOneRequiredWithoutArticleNestedInput
    maintag?: maintagsUpdateOneWithoutAuthor1NestedInput
    read?: readsUpdateManyWithoutAuthor2NestedInput
    good?: goodsUpdateManyWithoutAuthor2NestedInput
  }

  export type articlesUncheckedUpdateWithoutSubtagInput = {
    article_id?: IntFieldUpdateOperationsInput | number
    article_title?: StringFieldUpdateOperationsInput | string
    article_image?: StringFieldUpdateOperationsInput | string
    article_created?: DateTimeFieldUpdateOperationsInput | Date | string
    article_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    maintag?: maintagsUncheckedUpdateOneWithoutAuthor1NestedInput
    read?: readsUncheckedUpdateManyWithoutAuthor2NestedInput
    good?: goodsUncheckedUpdateManyWithoutAuthor2NestedInput
  }

  export type tagsUpsertWithoutSubtagInput = {
    update: XOR<tagsUpdateWithoutSubtagInput, tagsUncheckedUpdateWithoutSubtagInput>
    create: XOR<tagsCreateWithoutSubtagInput, tagsUncheckedCreateWithoutSubtagInput>
    where?: tagsWhereInput
  }

  export type tagsUpdateToOneWithWhereWithoutSubtagInput = {
    where?: tagsWhereInput
    data: XOR<tagsUpdateWithoutSubtagInput, tagsUncheckedUpdateWithoutSubtagInput>
  }

  export type tagsUpdateWithoutSubtagInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    author?: usersUpdateOneRequiredWithoutTagNestedInput
    maintag?: maintagsUpdateOneWithoutAuthor2NestedInput
  }

  export type tagsUncheckedUpdateWithoutSubtagInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    tag_name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    maintag?: maintagsUncheckedUpdateOneWithoutAuthor2NestedInput
  }

  export type followsCreateManyAuthor1Input = {

  }

  export type articlesCreateManyAuthorInput = {
    article_id?: number
    article_title: string
    article_image: string
    article_created?: Date | string
    article_updated?: Date | string
  }

  export type tagsCreateManyAuthorInput = {
    tag_id?: number
    tag_name: string
  }

  export type goodsCreateManyAuthor1Input = {
    articleId: number
    good_created?: Date | string
  }

  export type readsCreateManyAuthor1Input = {
    read_created?: Date | string
    articleId: number
  }

  export type followsUpdateWithoutAuthor1Input = {

  }

  export type followsUncheckedUpdateWithoutAuthor1Input = {

  }

  export type followsUncheckedUpdateManyWithoutAuthor1Input = {

  }

  export type articlesUpdateWithoutAuthorInput = {
    article_title?: StringFieldUpdateOperationsInput | string
    article_image?: StringFieldUpdateOperationsInput | string
    article_created?: DateTimeFieldUpdateOperationsInput | Date | string
    article_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    maintag?: maintagsUpdateOneWithoutAuthor1NestedInput
    subtag?: subtagsUpdateManyWithoutAuthor1NestedInput
    read?: readsUpdateManyWithoutAuthor2NestedInput
    good?: goodsUpdateManyWithoutAuthor2NestedInput
  }

  export type articlesUncheckedUpdateWithoutAuthorInput = {
    article_id?: IntFieldUpdateOperationsInput | number
    article_title?: StringFieldUpdateOperationsInput | string
    article_image?: StringFieldUpdateOperationsInput | string
    article_created?: DateTimeFieldUpdateOperationsInput | Date | string
    article_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    maintag?: maintagsUncheckedUpdateOneWithoutAuthor1NestedInput
    subtag?: subtagsUncheckedUpdateManyWithoutAuthor1NestedInput
    read?: readsUncheckedUpdateManyWithoutAuthor2NestedInput
    good?: goodsUncheckedUpdateManyWithoutAuthor2NestedInput
  }

  export type articlesUncheckedUpdateManyWithoutAuthorInput = {
    article_id?: IntFieldUpdateOperationsInput | number
    article_title?: StringFieldUpdateOperationsInput | string
    article_image?: StringFieldUpdateOperationsInput | string
    article_created?: DateTimeFieldUpdateOperationsInput | Date | string
    article_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tagsUpdateWithoutAuthorInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    maintag?: maintagsUpdateOneWithoutAuthor2NestedInput
    subtag?: subtagsUpdateManyWithoutAuthor2NestedInput
  }

  export type tagsUncheckedUpdateWithoutAuthorInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    tag_name?: StringFieldUpdateOperationsInput | string
    maintag?: maintagsUncheckedUpdateOneWithoutAuthor2NestedInput
    subtag?: subtagsUncheckedUpdateManyWithoutAuthor2NestedInput
  }

  export type tagsUncheckedUpdateManyWithoutAuthorInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    tag_name?: StringFieldUpdateOperationsInput | string
  }

  export type goodsUpdateWithoutAuthor1Input = {
    good_created?: DateTimeFieldUpdateOperationsInput | Date | string
    author2?: articlesUpdateOneRequiredWithoutGoodNestedInput
  }

  export type goodsUncheckedUpdateWithoutAuthor1Input = {
    articleId?: IntFieldUpdateOperationsInput | number
    good_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type goodsUncheckedUpdateManyWithoutAuthor1Input = {
    articleId?: IntFieldUpdateOperationsInput | number
    good_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type readsUpdateWithoutAuthor1Input = {
    read_created?: DateTimeFieldUpdateOperationsInput | Date | string
    author2?: articlesUpdateOneRequiredWithoutReadNestedInput
  }

  export type readsUncheckedUpdateWithoutAuthor1Input = {
    read_created?: DateTimeFieldUpdateOperationsInput | Date | string
    articleId?: IntFieldUpdateOperationsInput | number
  }

  export type readsUncheckedUpdateManyWithoutAuthor1Input = {
    read_created?: DateTimeFieldUpdateOperationsInput | Date | string
    articleId?: IntFieldUpdateOperationsInput | number
  }

  export type subtagsCreateManyAuthor2Input = {
    articleId: number
  }

  export type subtagsUpdateWithoutAuthor2Input = {
    author1?: articlesUpdateOneRequiredWithoutSubtagNestedInput
  }

  export type subtagsUncheckedUpdateWithoutAuthor2Input = {
    articleId?: IntFieldUpdateOperationsInput | number
  }

  export type subtagsUncheckedUpdateManyWithoutAuthor2Input = {
    articleId?: IntFieldUpdateOperationsInput | number
  }

  export type subtagsCreateManyAuthor1Input = {
    tagId: number
  }

  export type readsCreateManyAuthor2Input = {
    userId: number
    read_created?: Date | string
  }

  export type goodsCreateManyAuthor2Input = {
    userId: number
    good_created?: Date | string
  }

  export type subtagsUpdateWithoutAuthor1Input = {
    author2?: tagsUpdateOneRequiredWithoutSubtagNestedInput
  }

  export type subtagsUncheckedUpdateWithoutAuthor1Input = {
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type subtagsUncheckedUpdateManyWithoutAuthor1Input = {
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type readsUpdateWithoutAuthor2Input = {
    read_created?: DateTimeFieldUpdateOperationsInput | Date | string
    author1?: usersUpdateOneRequiredWithoutReadNestedInput
  }

  export type readsUncheckedUpdateWithoutAuthor2Input = {
    userId?: IntFieldUpdateOperationsInput | number
    read_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type readsUncheckedUpdateManyWithoutAuthor2Input = {
    userId?: IntFieldUpdateOperationsInput | number
    read_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type goodsUpdateWithoutAuthor2Input = {
    good_created?: DateTimeFieldUpdateOperationsInput | Date | string
    author1?: usersUpdateOneRequiredWithoutGoodNestedInput
  }

  export type goodsUncheckedUpdateWithoutAuthor2Input = {
    userId?: IntFieldUpdateOperationsInput | number
    good_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type goodsUncheckedUpdateManyWithoutAuthor2Input = {
    userId?: IntFieldUpdateOperationsInput | number
    good_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagsCountOutputTypeDefaultArgs instead
     */
    export type TagsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArticlesCountOutputTypeDefaultArgs instead
     */
    export type ArticlesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArticlesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use followsDefaultArgs instead
     */
    export type followsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = followsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tagsDefaultArgs instead
     */
    export type tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tagsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use articlesDefaultArgs instead
     */
    export type articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = articlesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use goodsDefaultArgs instead
     */
    export type goodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = goodsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use readsDefaultArgs instead
     */
    export type readsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = readsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use maintagsDefaultArgs instead
     */
    export type maintagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = maintagsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use subtagsDefaultArgs instead
     */
    export type subtagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = subtagsDefaultArgs<ExtArgs>

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