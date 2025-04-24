/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model Appeal
 *
 */
export type Appeal = $Result.DefaultSelection<Prisma.$AppealPayload>;
/**
 * Model AppealResolution
 *
 */
export type AppealResolution = $Result.DefaultSelection<Prisma.$AppealResolutionPayload>;
/**
 * Model AppealCancellation
 *
 */
export type AppealCancellation = $Result.DefaultSelection<Prisma.$AppealCancellationPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const AppealStatus: {
    NEW: 'NEW';
    PENDING: 'PENDING';
    RESOLVED: 'RESOLVED';
    CANCELED: 'CANCELED';
  };

  export type AppealStatus = (typeof AppealStatus)[keyof typeof AppealStatus];
}

export type AppealStatus = $Enums.AppealStatus;

export const AppealStatus: typeof $Enums.AppealStatus;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Appeals
 * const appeals = await prisma.appeal.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Appeals
   * const appeals = await prisma.appeal.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void
  ): PrismaClient;

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
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

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
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    }
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.appeal`: Exposes CRUD operations for the **Appeal** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Appeals
   * const appeals = await prisma.appeal.findMany()
   * ```
   */
  get appeal(): Prisma.AppealDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appealResolution`: Exposes CRUD operations for the **AppealResolution** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more AppealResolutions
   * const appealResolutions = await prisma.appealResolution.findMany()
   * ```
   */
  get appealResolution(): Prisma.AppealResolutionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appealCancellation`: Exposes CRUD operations for the **AppealCancellation** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more AppealCancellations
   * const appealCancellations = await prisma.appealCancellation.findMany()
   * ```
   */
  get appealCancellation(): Prisma.AppealCancellationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<
    ReturnType<T>
  >;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (
    k: infer I
  ) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> =
    IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<
    T,
    MaybeTupleToUnion<K>
  >;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    Appeal: 'Appeal';
    AppealResolution: 'AppealResolution';
    AppealCancellation: 'AppealCancellation';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps: 'appeal' | 'appealResolution' | 'appealCancellation';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Appeal: {
        payload: Prisma.$AppealPayload<ExtArgs>;
        fields: Prisma.AppealFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AppealFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppealPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AppealFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppealPayload>;
          };
          findFirst: {
            args: Prisma.AppealFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppealPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AppealFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppealPayload>;
          };
          findMany: {
            args: Prisma.AppealFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppealPayload>[];
          };
          create: {
            args: Prisma.AppealCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppealPayload>;
          };
          createMany: {
            args: Prisma.AppealCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.AppealCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppealPayload>[];
          };
          delete: {
            args: Prisma.AppealDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppealPayload>;
          };
          update: {
            args: Prisma.AppealUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppealPayload>;
          };
          deleteMany: {
            args: Prisma.AppealDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AppealUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.AppealUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppealPayload>[];
          };
          upsert: {
            args: Prisma.AppealUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppealPayload>;
          };
          aggregate: {
            args: Prisma.AppealAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAppeal>;
          };
          groupBy: {
            args: Prisma.AppealGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AppealGroupByOutputType>[];
          };
          count: {
            args: Prisma.AppealCountArgs<ExtArgs>;
            result: $Utils.Optional<AppealCountAggregateOutputType> | number;
          };
        };
      };
      AppealResolution: {
        payload: Prisma.$AppealResolutionPayload<ExtArgs>;
        fields: Prisma.AppealResolutionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AppealResolutionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppealResolutionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AppealResolutionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppealResolutionPayload>;
          };
          findFirst: {
            args: Prisma.AppealResolutionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppealResolutionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AppealResolutionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppealResolutionPayload>;
          };
          findMany: {
            args: Prisma.AppealResolutionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppealResolutionPayload>[];
          };
          create: {
            args: Prisma.AppealResolutionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppealResolutionPayload>;
          };
          createMany: {
            args: Prisma.AppealResolutionCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.AppealResolutionCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppealResolutionPayload>[];
          };
          delete: {
            args: Prisma.AppealResolutionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppealResolutionPayload>;
          };
          update: {
            args: Prisma.AppealResolutionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppealResolutionPayload>;
          };
          deleteMany: {
            args: Prisma.AppealResolutionDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AppealResolutionUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.AppealResolutionUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppealResolutionPayload>[];
          };
          upsert: {
            args: Prisma.AppealResolutionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppealResolutionPayload>;
          };
          aggregate: {
            args: Prisma.AppealResolutionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAppealResolution>;
          };
          groupBy: {
            args: Prisma.AppealResolutionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AppealResolutionGroupByOutputType>[];
          };
          count: {
            args: Prisma.AppealResolutionCountArgs<ExtArgs>;
            result: $Utils.Optional<AppealResolutionCountAggregateOutputType> | number;
          };
        };
      };
      AppealCancellation: {
        payload: Prisma.$AppealCancellationPayload<ExtArgs>;
        fields: Prisma.AppealCancellationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AppealCancellationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppealCancellationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AppealCancellationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppealCancellationPayload>;
          };
          findFirst: {
            args: Prisma.AppealCancellationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppealCancellationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AppealCancellationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppealCancellationPayload>;
          };
          findMany: {
            args: Prisma.AppealCancellationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppealCancellationPayload>[];
          };
          create: {
            args: Prisma.AppealCancellationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppealCancellationPayload>;
          };
          createMany: {
            args: Prisma.AppealCancellationCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.AppealCancellationCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppealCancellationPayload>[];
          };
          delete: {
            args: Prisma.AppealCancellationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppealCancellationPayload>;
          };
          update: {
            args: Prisma.AppealCancellationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppealCancellationPayload>;
          };
          deleteMany: {
            args: Prisma.AppealCancellationDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AppealCancellationUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.AppealCancellationUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppealCancellationPayload>[];
          };
          upsert: {
            args: Prisma.AppealCancellationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AppealCancellationPayload>;
          };
          aggregate: {
            args: Prisma.AppealCancellationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAppealCancellation>;
          };
          groupBy: {
            args: Prisma.AppealCancellationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AppealCancellationGroupByOutputType>[];
          };
          count: {
            args: Prisma.AppealCancellationCountArgs<ExtArgs>;
            result: $Utils.Optional<AppealCancellationCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
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
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    appeal?: AppealOmit;
    appealResolution?: AppealResolutionOmit;
    appealCancellation?: AppealCancellationOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
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
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Models
   */

  /**
   * Model Appeal
   */

  export type AggregateAppeal = {
    _count: AppealCountAggregateOutputType | null;
    _min: AppealMinAggregateOutputType | null;
    _max: AppealMaxAggregateOutputType | null;
  };

  export type AppealMinAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    status: $Enums.AppealStatus | null;
    topic: string | null;
    description: string | null;
  };

  export type AppealMaxAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    status: $Enums.AppealStatus | null;
    topic: string | null;
    description: string | null;
  };

  export type AppealCountAggregateOutputType = {
    id: number;
    createdAt: number;
    status: number;
    topic: number;
    description: number;
    _all: number;
  };

  export type AppealMinAggregateInputType = {
    id?: true;
    createdAt?: true;
    status?: true;
    topic?: true;
    description?: true;
  };

  export type AppealMaxAggregateInputType = {
    id?: true;
    createdAt?: true;
    status?: true;
    topic?: true;
    description?: true;
  };

  export type AppealCountAggregateInputType = {
    id?: true;
    createdAt?: true;
    status?: true;
    topic?: true;
    description?: true;
    _all?: true;
  };

  export type AppealAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Appeal to aggregate.
     */
    where?: AppealWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Appeals to fetch.
     */
    orderBy?: AppealOrderByWithRelationInput | AppealOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AppealWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Appeals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Appeals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Appeals
     **/
    _count?: true | AppealCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AppealMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AppealMaxAggregateInputType;
  };

  export type GetAppealAggregateType<T extends AppealAggregateArgs> = {
    [P in keyof T & keyof AggregateAppeal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppeal[P]>
      : GetScalarType<T[P], AggregateAppeal[P]>;
  };

  export type AppealGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AppealWhereInput;
    orderBy?: AppealOrderByWithAggregationInput | AppealOrderByWithAggregationInput[];
    by: AppealScalarFieldEnum[] | AppealScalarFieldEnum;
    having?: AppealScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AppealCountAggregateInputType | true;
    _min?: AppealMinAggregateInputType;
    _max?: AppealMaxAggregateInputType;
  };

  export type AppealGroupByOutputType = {
    id: string;
    createdAt: Date;
    status: $Enums.AppealStatus;
    topic: string;
    description: string | null;
    _count: AppealCountAggregateOutputType | null;
    _min: AppealMinAggregateOutputType | null;
    _max: AppealMaxAggregateOutputType | null;
  };

  type GetAppealGroupByPayload<T extends AppealGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppealGroupByOutputType, T['by']> & {
        [P in keyof T & keyof AppealGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], AppealGroupByOutputType[P]>
          : GetScalarType<T[P], AppealGroupByOutputType[P]>;
      }
    >
  >;

  export type AppealSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        createdAt?: boolean;
        status?: boolean;
        topic?: boolean;
        description?: boolean;
        resolution?: boolean | Appeal$resolutionArgs<ExtArgs>;
        cancellation?: boolean | Appeal$cancellationArgs<ExtArgs>;
      },
      ExtArgs['result']['appeal']
    >;

  export type AppealSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      createdAt?: boolean;
      status?: boolean;
      topic?: boolean;
      description?: boolean;
    },
    ExtArgs['result']['appeal']
  >;

  export type AppealSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      createdAt?: boolean;
      status?: boolean;
      topic?: boolean;
      description?: boolean;
    },
    ExtArgs['result']['appeal']
  >;

  export type AppealSelectScalar = {
    id?: boolean;
    createdAt?: boolean;
    status?: boolean;
    topic?: boolean;
    description?: boolean;
  };

  export type AppealOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      'id' | 'createdAt' | 'status' | 'topic' | 'description',
      ExtArgs['result']['appeal']
    >;
  export type AppealInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resolution?: boolean | Appeal$resolutionArgs<ExtArgs>;
    cancellation?: boolean | Appeal$cancellationArgs<ExtArgs>;
  };
  export type AppealIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type AppealIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $AppealPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'Appeal';
    objects: {
      resolution: Prisma.$AppealResolutionPayload<ExtArgs> | null;
      cancellation: Prisma.$AppealCancellationPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        createdAt: Date;
        status: $Enums.AppealStatus;
        topic: string;
        description: string | null;
      },
      ExtArgs['result']['appeal']
    >;
    composites: {};
  };

  type AppealGetPayload<S extends boolean | null | undefined | AppealDefaultArgs> =
    $Result.GetResult<Prisma.$AppealPayload, S>;

  type AppealCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    AppealFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: AppealCountAggregateInputType | true;
  };

  export interface AppealDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appeal']; meta: { name: 'Appeal' } };
    /**
     * Find zero or one Appeal that matches the filter.
     * @param {AppealFindUniqueArgs} args - Arguments to find a Appeal
     * @example
     * // Get one Appeal
     * const appeal = await prisma.appeal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppealFindUniqueArgs>(
      args: SelectSubset<T, AppealFindUniqueArgs<ExtArgs>>
    ): Prisma__AppealClient<
      $Result.GetResult<Prisma.$AppealPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Appeal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppealFindUniqueOrThrowArgs} args - Arguments to find a Appeal
     * @example
     * // Get one Appeal
     * const appeal = await prisma.appeal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppealFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AppealFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AppealClient<
      $Result.GetResult<Prisma.$AppealPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Appeal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppealFindFirstArgs} args - Arguments to find a Appeal
     * @example
     * // Get one Appeal
     * const appeal = await prisma.appeal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppealFindFirstArgs>(
      args?: SelectSubset<T, AppealFindFirstArgs<ExtArgs>>
    ): Prisma__AppealClient<
      $Result.GetResult<Prisma.$AppealPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Appeal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppealFindFirstOrThrowArgs} args - Arguments to find a Appeal
     * @example
     * // Get one Appeal
     * const appeal = await prisma.appeal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppealFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AppealFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AppealClient<
      $Result.GetResult<Prisma.$AppealPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Appeals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppealFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appeals
     * const appeals = await prisma.appeal.findMany()
     *
     * // Get first 10 Appeals
     * const appeals = await prisma.appeal.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const appealWithIdOnly = await prisma.appeal.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AppealFindManyArgs>(
      args?: SelectSubset<T, AppealFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AppealPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a Appeal.
     * @param {AppealCreateArgs} args - Arguments to create a Appeal.
     * @example
     * // Create one Appeal
     * const Appeal = await prisma.appeal.create({
     *   data: {
     *     // ... data to create a Appeal
     *   }
     * })
     *
     */
    create<T extends AppealCreateArgs>(
      args: SelectSubset<T, AppealCreateArgs<ExtArgs>>
    ): Prisma__AppealClient<
      $Result.GetResult<Prisma.$AppealPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Appeals.
     * @param {AppealCreateManyArgs} args - Arguments to create many Appeals.
     * @example
     * // Create many Appeals
     * const appeal = await prisma.appeal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AppealCreateManyArgs>(
      args?: SelectSubset<T, AppealCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Appeals and returns the data saved in the database.
     * @param {AppealCreateManyAndReturnArgs} args - Arguments to create many Appeals.
     * @example
     * // Create many Appeals
     * const appeal = await prisma.appeal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Appeals and only return the `id`
     * const appealWithIdOnly = await prisma.appeal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AppealCreateManyAndReturnArgs>(
      args?: SelectSubset<T, AppealCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AppealPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Delete a Appeal.
     * @param {AppealDeleteArgs} args - Arguments to delete one Appeal.
     * @example
     * // Delete one Appeal
     * const Appeal = await prisma.appeal.delete({
     *   where: {
     *     // ... filter to delete one Appeal
     *   }
     * })
     *
     */
    delete<T extends AppealDeleteArgs>(
      args: SelectSubset<T, AppealDeleteArgs<ExtArgs>>
    ): Prisma__AppealClient<
      $Result.GetResult<Prisma.$AppealPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Appeal.
     * @param {AppealUpdateArgs} args - Arguments to update one Appeal.
     * @example
     * // Update one Appeal
     * const appeal = await prisma.appeal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AppealUpdateArgs>(
      args: SelectSubset<T, AppealUpdateArgs<ExtArgs>>
    ): Prisma__AppealClient<
      $Result.GetResult<Prisma.$AppealPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Appeals.
     * @param {AppealDeleteManyArgs} args - Arguments to filter Appeals to delete.
     * @example
     * // Delete a few Appeals
     * const { count } = await prisma.appeal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AppealDeleteManyArgs>(
      args?: SelectSubset<T, AppealDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Appeals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppealUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appeals
     * const appeal = await prisma.appeal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AppealUpdateManyArgs>(
      args: SelectSubset<T, AppealUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Appeals and returns the data updated in the database.
     * @param {AppealUpdateManyAndReturnArgs} args - Arguments to update many Appeals.
     * @example
     * // Update many Appeals
     * const appeal = await prisma.appeal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Appeals and only return the `id`
     * const appealWithIdOnly = await prisma.appeal.updateManyAndReturn({
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
    updateManyAndReturn<T extends AppealUpdateManyAndReturnArgs>(
      args: SelectSubset<T, AppealUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AppealPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Create or update one Appeal.
     * @param {AppealUpsertArgs} args - Arguments to update or create a Appeal.
     * @example
     * // Update or create a Appeal
     * const appeal = await prisma.appeal.upsert({
     *   create: {
     *     // ... data to create a Appeal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appeal we want to update
     *   }
     * })
     */
    upsert<T extends AppealUpsertArgs>(
      args: SelectSubset<T, AppealUpsertArgs<ExtArgs>>
    ): Prisma__AppealClient<
      $Result.GetResult<Prisma.$AppealPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Appeals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppealCountArgs} args - Arguments to filter Appeals to count.
     * @example
     * // Count the number of Appeals
     * const count = await prisma.appeal.count({
     *   where: {
     *     // ... the filter for the Appeals we want to count
     *   }
     * })
     **/
    count<T extends AppealCountArgs>(
      args?: Subset<T, AppealCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppealCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Appeal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppealAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppealAggregateArgs>(
      args: Subset<T, AppealAggregateArgs>
    ): Prisma.PrismaPromise<GetAppealAggregateType<T>>;

    /**
     * Group by Appeal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppealGroupByArgs} args - Group by arguments.
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
      T extends AppealGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppealGroupByArgs['orderBy'] }
        : { orderBy?: AppealGroupByArgs['orderBy'] },
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
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AppealGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetAppealGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Appeal model
     */
    readonly fields: AppealFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appeal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppealClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    resolution<T extends Appeal$resolutionArgs<ExtArgs> = {}>(
      args?: Subset<T, Appeal$resolutionArgs<ExtArgs>>
    ): Prisma__AppealResolutionClient<
      $Result.GetResult<
        Prisma.$AppealResolutionPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    cancellation<T extends Appeal$cancellationArgs<ExtArgs> = {}>(
      args?: Subset<T, Appeal$cancellationArgs<ExtArgs>>
    ): Prisma__AppealCancellationClient<
      $Result.GetResult<
        Prisma.$AppealCancellationPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Appeal model
   */
  interface AppealFieldRefs {
    readonly id: FieldRef<'Appeal', 'String'>;
    readonly createdAt: FieldRef<'Appeal', 'DateTime'>;
    readonly status: FieldRef<'Appeal', 'AppealStatus'>;
    readonly topic: FieldRef<'Appeal', 'String'>;
    readonly description: FieldRef<'Appeal', 'String'>;
  }

  // Custom InputTypes
  /**
   * Appeal findUnique
   */
  export type AppealFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Appeal
     */
    select?: AppealSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Appeal
     */
    omit?: AppealOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppealInclude<ExtArgs> | null;
    /**
     * Filter, which Appeal to fetch.
     */
    where: AppealWhereUniqueInput;
  };

  /**
   * Appeal findUniqueOrThrow
   */
  export type AppealFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Appeal
     */
    select?: AppealSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Appeal
     */
    omit?: AppealOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppealInclude<ExtArgs> | null;
    /**
     * Filter, which Appeal to fetch.
     */
    where: AppealWhereUniqueInput;
  };

  /**
   * Appeal findFirst
   */
  export type AppealFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Appeal
     */
    select?: AppealSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Appeal
     */
    omit?: AppealOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppealInclude<ExtArgs> | null;
    /**
     * Filter, which Appeal to fetch.
     */
    where?: AppealWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Appeals to fetch.
     */
    orderBy?: AppealOrderByWithRelationInput | AppealOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Appeals.
     */
    cursor?: AppealWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Appeals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Appeals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Appeals.
     */
    distinct?: AppealScalarFieldEnum | AppealScalarFieldEnum[];
  };

  /**
   * Appeal findFirstOrThrow
   */
  export type AppealFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Appeal
     */
    select?: AppealSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Appeal
     */
    omit?: AppealOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppealInclude<ExtArgs> | null;
    /**
     * Filter, which Appeal to fetch.
     */
    where?: AppealWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Appeals to fetch.
     */
    orderBy?: AppealOrderByWithRelationInput | AppealOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Appeals.
     */
    cursor?: AppealWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Appeals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Appeals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Appeals.
     */
    distinct?: AppealScalarFieldEnum | AppealScalarFieldEnum[];
  };

  /**
   * Appeal findMany
   */
  export type AppealFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Appeal
     */
    select?: AppealSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Appeal
     */
    omit?: AppealOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppealInclude<ExtArgs> | null;
    /**
     * Filter, which Appeals to fetch.
     */
    where?: AppealWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Appeals to fetch.
     */
    orderBy?: AppealOrderByWithRelationInput | AppealOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Appeals.
     */
    cursor?: AppealWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Appeals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Appeals.
     */
    skip?: number;
    distinct?: AppealScalarFieldEnum | AppealScalarFieldEnum[];
  };

  /**
   * Appeal create
   */
  export type AppealCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Appeal
       */
      select?: AppealSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Appeal
       */
      omit?: AppealOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: AppealInclude<ExtArgs> | null;
      /**
       * The data needed to create a Appeal.
       */
      data: XOR<AppealCreateInput, AppealUncheckedCreateInput>;
    };

  /**
   * Appeal createMany
   */
  export type AppealCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Appeals.
     */
    data: AppealCreateManyInput | AppealCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Appeal createManyAndReturn
   */
  export type AppealCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Appeal
     */
    select?: AppealSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Appeal
     */
    omit?: AppealOmit<ExtArgs> | null;
    /**
     * The data used to create many Appeals.
     */
    data: AppealCreateManyInput | AppealCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Appeal update
   */
  export type AppealUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Appeal
       */
      select?: AppealSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Appeal
       */
      omit?: AppealOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: AppealInclude<ExtArgs> | null;
      /**
       * The data needed to update a Appeal.
       */
      data: XOR<AppealUpdateInput, AppealUncheckedUpdateInput>;
      /**
       * Choose, which Appeal to update.
       */
      where: AppealWhereUniqueInput;
    };

  /**
   * Appeal updateMany
   */
  export type AppealUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Appeals.
     */
    data: XOR<AppealUpdateManyMutationInput, AppealUncheckedUpdateManyInput>;
    /**
     * Filter which Appeals to update
     */
    where?: AppealWhereInput;
    /**
     * Limit how many Appeals to update.
     */
    limit?: number;
  };

  /**
   * Appeal updateManyAndReturn
   */
  export type AppealUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Appeal
     */
    select?: AppealSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Appeal
     */
    omit?: AppealOmit<ExtArgs> | null;
    /**
     * The data used to update Appeals.
     */
    data: XOR<AppealUpdateManyMutationInput, AppealUncheckedUpdateManyInput>;
    /**
     * Filter which Appeals to update
     */
    where?: AppealWhereInput;
    /**
     * Limit how many Appeals to update.
     */
    limit?: number;
  };

  /**
   * Appeal upsert
   */
  export type AppealUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Appeal
       */
      select?: AppealSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Appeal
       */
      omit?: AppealOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: AppealInclude<ExtArgs> | null;
      /**
       * The filter to search for the Appeal to update in case it exists.
       */
      where: AppealWhereUniqueInput;
      /**
       * In case the Appeal found by the `where` argument doesn't exist, create a new Appeal with this data.
       */
      create: XOR<AppealCreateInput, AppealUncheckedCreateInput>;
      /**
       * In case the Appeal was found with the provided `where` argument, update it with this data.
       */
      update: XOR<AppealUpdateInput, AppealUncheckedUpdateInput>;
    };

  /**
   * Appeal delete
   */
  export type AppealDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Appeal
       */
      select?: AppealSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Appeal
       */
      omit?: AppealOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: AppealInclude<ExtArgs> | null;
      /**
       * Filter which Appeal to delete.
       */
      where: AppealWhereUniqueInput;
    };

  /**
   * Appeal deleteMany
   */
  export type AppealDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Appeals to delete
     */
    where?: AppealWhereInput;
    /**
     * Limit how many Appeals to delete.
     */
    limit?: number;
  };

  /**
   * Appeal.resolution
   */
  export type Appeal$resolutionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AppealResolution
     */
    select?: AppealResolutionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AppealResolution
     */
    omit?: AppealResolutionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppealResolutionInclude<ExtArgs> | null;
    where?: AppealResolutionWhereInput;
  };

  /**
   * Appeal.cancellation
   */
  export type Appeal$cancellationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AppealCancellation
     */
    select?: AppealCancellationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AppealCancellation
     */
    omit?: AppealCancellationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppealCancellationInclude<ExtArgs> | null;
    where?: AppealCancellationWhereInput;
  };

  /**
   * Appeal without action
   */
  export type AppealDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Appeal
     */
    select?: AppealSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Appeal
     */
    omit?: AppealOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppealInclude<ExtArgs> | null;
  };

  /**
   * Model AppealResolution
   */

  export type AggregateAppealResolution = {
    _count: AppealResolutionCountAggregateOutputType | null;
    _min: AppealResolutionMinAggregateOutputType | null;
    _max: AppealResolutionMaxAggregateOutputType | null;
  };

  export type AppealResolutionMinAggregateOutputType = {
    id: string | null;
    appealId: string | null;
    text: string | null;
  };

  export type AppealResolutionMaxAggregateOutputType = {
    id: string | null;
    appealId: string | null;
    text: string | null;
  };

  export type AppealResolutionCountAggregateOutputType = {
    id: number;
    appealId: number;
    text: number;
    _all: number;
  };

  export type AppealResolutionMinAggregateInputType = {
    id?: true;
    appealId?: true;
    text?: true;
  };

  export type AppealResolutionMaxAggregateInputType = {
    id?: true;
    appealId?: true;
    text?: true;
  };

  export type AppealResolutionCountAggregateInputType = {
    id?: true;
    appealId?: true;
    text?: true;
    _all?: true;
  };

  export type AppealResolutionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AppealResolution to aggregate.
     */
    where?: AppealResolutionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AppealResolutions to fetch.
     */
    orderBy?: AppealResolutionOrderByWithRelationInput | AppealResolutionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AppealResolutionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AppealResolutions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AppealResolutions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AppealResolutions
     **/
    _count?: true | AppealResolutionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AppealResolutionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AppealResolutionMaxAggregateInputType;
  };

  export type GetAppealResolutionAggregateType<T extends AppealResolutionAggregateArgs> = {
    [P in keyof T & keyof AggregateAppealResolution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppealResolution[P]>
      : GetScalarType<T[P], AggregateAppealResolution[P]>;
  };

  export type AppealResolutionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AppealResolutionWhereInput;
    orderBy?:
      | AppealResolutionOrderByWithAggregationInput
      | AppealResolutionOrderByWithAggregationInput[];
    by: AppealResolutionScalarFieldEnum[] | AppealResolutionScalarFieldEnum;
    having?: AppealResolutionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AppealResolutionCountAggregateInputType | true;
    _min?: AppealResolutionMinAggregateInputType;
    _max?: AppealResolutionMaxAggregateInputType;
  };

  export type AppealResolutionGroupByOutputType = {
    id: string;
    appealId: string;
    text: string;
    _count: AppealResolutionCountAggregateOutputType | null;
    _min: AppealResolutionMinAggregateOutputType | null;
    _max: AppealResolutionMaxAggregateOutputType | null;
  };

  type GetAppealResolutionGroupByPayload<T extends AppealResolutionGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AppealResolutionGroupByOutputType, T['by']> & {
          [P in keyof T & keyof AppealResolutionGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppealResolutionGroupByOutputType[P]>
            : GetScalarType<T[P], AppealResolutionGroupByOutputType[P]>;
        }
      >
    >;

  export type AppealResolutionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      appealId?: boolean;
      text?: boolean;
      appeal?: boolean | AppealDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['appealResolution']
  >;

  export type AppealResolutionSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      appealId?: boolean;
      text?: boolean;
      appeal?: boolean | AppealDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['appealResolution']
  >;

  export type AppealResolutionSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      appealId?: boolean;
      text?: boolean;
      appeal?: boolean | AppealDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['appealResolution']
  >;

  export type AppealResolutionSelectScalar = {
    id?: boolean;
    appealId?: boolean;
    text?: boolean;
  };

  export type AppealResolutionOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<'id' | 'appealId' | 'text', ExtArgs['result']['appealResolution']>;
  export type AppealResolutionInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    appeal?: boolean | AppealDefaultArgs<ExtArgs>;
  };
  export type AppealResolutionIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    appeal?: boolean | AppealDefaultArgs<ExtArgs>;
  };
  export type AppealResolutionIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    appeal?: boolean | AppealDefaultArgs<ExtArgs>;
  };

  export type $AppealResolutionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'AppealResolution';
    objects: {
      appeal: Prisma.$AppealPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        appealId: string;
        text: string;
      },
      ExtArgs['result']['appealResolution']
    >;
    composites: {};
  };

  type AppealResolutionGetPayload<
    S extends boolean | null | undefined | AppealResolutionDefaultArgs,
  > = $Result.GetResult<Prisma.$AppealResolutionPayload, S>;

  type AppealResolutionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<AppealResolutionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AppealResolutionCountAggregateInputType | true;
  };

  export interface AppealResolutionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['AppealResolution'];
      meta: { name: 'AppealResolution' };
    };
    /**
     * Find zero or one AppealResolution that matches the filter.
     * @param {AppealResolutionFindUniqueArgs} args - Arguments to find a AppealResolution
     * @example
     * // Get one AppealResolution
     * const appealResolution = await prisma.appealResolution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppealResolutionFindUniqueArgs>(
      args: SelectSubset<T, AppealResolutionFindUniqueArgs<ExtArgs>>
    ): Prisma__AppealResolutionClient<
      $Result.GetResult<
        Prisma.$AppealResolutionPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one AppealResolution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppealResolutionFindUniqueOrThrowArgs} args - Arguments to find a AppealResolution
     * @example
     * // Get one AppealResolution
     * const appealResolution = await prisma.appealResolution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppealResolutionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AppealResolutionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AppealResolutionClient<
      $Result.GetResult<
        Prisma.$AppealResolutionPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first AppealResolution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppealResolutionFindFirstArgs} args - Arguments to find a AppealResolution
     * @example
     * // Get one AppealResolution
     * const appealResolution = await prisma.appealResolution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppealResolutionFindFirstArgs>(
      args?: SelectSubset<T, AppealResolutionFindFirstArgs<ExtArgs>>
    ): Prisma__AppealResolutionClient<
      $Result.GetResult<
        Prisma.$AppealResolutionPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first AppealResolution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppealResolutionFindFirstOrThrowArgs} args - Arguments to find a AppealResolution
     * @example
     * // Get one AppealResolution
     * const appealResolution = await prisma.appealResolution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppealResolutionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AppealResolutionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AppealResolutionClient<
      $Result.GetResult<
        Prisma.$AppealResolutionPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more AppealResolutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppealResolutionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppealResolutions
     * const appealResolutions = await prisma.appealResolution.findMany()
     *
     * // Get first 10 AppealResolutions
     * const appealResolutions = await prisma.appealResolution.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const appealResolutionWithIdOnly = await prisma.appealResolution.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AppealResolutionFindManyArgs>(
      args?: SelectSubset<T, AppealResolutionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AppealResolutionPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a AppealResolution.
     * @param {AppealResolutionCreateArgs} args - Arguments to create a AppealResolution.
     * @example
     * // Create one AppealResolution
     * const AppealResolution = await prisma.appealResolution.create({
     *   data: {
     *     // ... data to create a AppealResolution
     *   }
     * })
     *
     */
    create<T extends AppealResolutionCreateArgs>(
      args: SelectSubset<T, AppealResolutionCreateArgs<ExtArgs>>
    ): Prisma__AppealResolutionClient<
      $Result.GetResult<Prisma.$AppealResolutionPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many AppealResolutions.
     * @param {AppealResolutionCreateManyArgs} args - Arguments to create many AppealResolutions.
     * @example
     * // Create many AppealResolutions
     * const appealResolution = await prisma.appealResolution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AppealResolutionCreateManyArgs>(
      args?: SelectSubset<T, AppealResolutionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many AppealResolutions and returns the data saved in the database.
     * @param {AppealResolutionCreateManyAndReturnArgs} args - Arguments to create many AppealResolutions.
     * @example
     * // Create many AppealResolutions
     * const appealResolution = await prisma.appealResolution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AppealResolutions and only return the `id`
     * const appealResolutionWithIdOnly = await prisma.appealResolution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AppealResolutionCreateManyAndReturnArgs>(
      args?: SelectSubset<T, AppealResolutionCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AppealResolutionPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a AppealResolution.
     * @param {AppealResolutionDeleteArgs} args - Arguments to delete one AppealResolution.
     * @example
     * // Delete one AppealResolution
     * const AppealResolution = await prisma.appealResolution.delete({
     *   where: {
     *     // ... filter to delete one AppealResolution
     *   }
     * })
     *
     */
    delete<T extends AppealResolutionDeleteArgs>(
      args: SelectSubset<T, AppealResolutionDeleteArgs<ExtArgs>>
    ): Prisma__AppealResolutionClient<
      $Result.GetResult<Prisma.$AppealResolutionPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one AppealResolution.
     * @param {AppealResolutionUpdateArgs} args - Arguments to update one AppealResolution.
     * @example
     * // Update one AppealResolution
     * const appealResolution = await prisma.appealResolution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AppealResolutionUpdateArgs>(
      args: SelectSubset<T, AppealResolutionUpdateArgs<ExtArgs>>
    ): Prisma__AppealResolutionClient<
      $Result.GetResult<Prisma.$AppealResolutionPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more AppealResolutions.
     * @param {AppealResolutionDeleteManyArgs} args - Arguments to filter AppealResolutions to delete.
     * @example
     * // Delete a few AppealResolutions
     * const { count } = await prisma.appealResolution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AppealResolutionDeleteManyArgs>(
      args?: SelectSubset<T, AppealResolutionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more AppealResolutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppealResolutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppealResolutions
     * const appealResolution = await prisma.appealResolution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AppealResolutionUpdateManyArgs>(
      args: SelectSubset<T, AppealResolutionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more AppealResolutions and returns the data updated in the database.
     * @param {AppealResolutionUpdateManyAndReturnArgs} args - Arguments to update many AppealResolutions.
     * @example
     * // Update many AppealResolutions
     * const appealResolution = await prisma.appealResolution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more AppealResolutions and only return the `id`
     * const appealResolutionWithIdOnly = await prisma.appealResolution.updateManyAndReturn({
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
    updateManyAndReturn<T extends AppealResolutionUpdateManyAndReturnArgs>(
      args: SelectSubset<T, AppealResolutionUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AppealResolutionPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one AppealResolution.
     * @param {AppealResolutionUpsertArgs} args - Arguments to update or create a AppealResolution.
     * @example
     * // Update or create a AppealResolution
     * const appealResolution = await prisma.appealResolution.upsert({
     *   create: {
     *     // ... data to create a AppealResolution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppealResolution we want to update
     *   }
     * })
     */
    upsert<T extends AppealResolutionUpsertArgs>(
      args: SelectSubset<T, AppealResolutionUpsertArgs<ExtArgs>>
    ): Prisma__AppealResolutionClient<
      $Result.GetResult<Prisma.$AppealResolutionPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of AppealResolutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppealResolutionCountArgs} args - Arguments to filter AppealResolutions to count.
     * @example
     * // Count the number of AppealResolutions
     * const count = await prisma.appealResolution.count({
     *   where: {
     *     // ... the filter for the AppealResolutions we want to count
     *   }
     * })
     **/
    count<T extends AppealResolutionCountArgs>(
      args?: Subset<T, AppealResolutionCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppealResolutionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a AppealResolution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppealResolutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppealResolutionAggregateArgs>(
      args: Subset<T, AppealResolutionAggregateArgs>
    ): Prisma.PrismaPromise<GetAppealResolutionAggregateType<T>>;

    /**
     * Group by AppealResolution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppealResolutionGroupByArgs} args - Group by arguments.
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
      T extends AppealResolutionGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppealResolutionGroupByArgs['orderBy'] }
        : { orderBy?: AppealResolutionGroupByArgs['orderBy'] },
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
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AppealResolutionGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetAppealResolutionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AppealResolution model
     */
    readonly fields: AppealResolutionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppealResolution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppealResolutionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    appeal<T extends AppealDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, AppealDefaultArgs<ExtArgs>>
    ): Prisma__AppealClient<
      | $Result.GetResult<Prisma.$AppealPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the AppealResolution model
   */
  interface AppealResolutionFieldRefs {
    readonly id: FieldRef<'AppealResolution', 'String'>;
    readonly appealId: FieldRef<'AppealResolution', 'String'>;
    readonly text: FieldRef<'AppealResolution', 'String'>;
  }

  // Custom InputTypes
  /**
   * AppealResolution findUnique
   */
  export type AppealResolutionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AppealResolution
     */
    select?: AppealResolutionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AppealResolution
     */
    omit?: AppealResolutionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppealResolutionInclude<ExtArgs> | null;
    /**
     * Filter, which AppealResolution to fetch.
     */
    where: AppealResolutionWhereUniqueInput;
  };

  /**
   * AppealResolution findUniqueOrThrow
   */
  export type AppealResolutionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AppealResolution
     */
    select?: AppealResolutionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AppealResolution
     */
    omit?: AppealResolutionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppealResolutionInclude<ExtArgs> | null;
    /**
     * Filter, which AppealResolution to fetch.
     */
    where: AppealResolutionWhereUniqueInput;
  };

  /**
   * AppealResolution findFirst
   */
  export type AppealResolutionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AppealResolution
     */
    select?: AppealResolutionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AppealResolution
     */
    omit?: AppealResolutionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppealResolutionInclude<ExtArgs> | null;
    /**
     * Filter, which AppealResolution to fetch.
     */
    where?: AppealResolutionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AppealResolutions to fetch.
     */
    orderBy?: AppealResolutionOrderByWithRelationInput | AppealResolutionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AppealResolutions.
     */
    cursor?: AppealResolutionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AppealResolutions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AppealResolutions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AppealResolutions.
     */
    distinct?: AppealResolutionScalarFieldEnum | AppealResolutionScalarFieldEnum[];
  };

  /**
   * AppealResolution findFirstOrThrow
   */
  export type AppealResolutionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AppealResolution
     */
    select?: AppealResolutionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AppealResolution
     */
    omit?: AppealResolutionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppealResolutionInclude<ExtArgs> | null;
    /**
     * Filter, which AppealResolution to fetch.
     */
    where?: AppealResolutionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AppealResolutions to fetch.
     */
    orderBy?: AppealResolutionOrderByWithRelationInput | AppealResolutionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AppealResolutions.
     */
    cursor?: AppealResolutionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AppealResolutions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AppealResolutions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AppealResolutions.
     */
    distinct?: AppealResolutionScalarFieldEnum | AppealResolutionScalarFieldEnum[];
  };

  /**
   * AppealResolution findMany
   */
  export type AppealResolutionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AppealResolution
     */
    select?: AppealResolutionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AppealResolution
     */
    omit?: AppealResolutionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppealResolutionInclude<ExtArgs> | null;
    /**
     * Filter, which AppealResolutions to fetch.
     */
    where?: AppealResolutionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AppealResolutions to fetch.
     */
    orderBy?: AppealResolutionOrderByWithRelationInput | AppealResolutionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AppealResolutions.
     */
    cursor?: AppealResolutionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AppealResolutions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AppealResolutions.
     */
    skip?: number;
    distinct?: AppealResolutionScalarFieldEnum | AppealResolutionScalarFieldEnum[];
  };

  /**
   * AppealResolution create
   */
  export type AppealResolutionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AppealResolution
     */
    select?: AppealResolutionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AppealResolution
     */
    omit?: AppealResolutionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppealResolutionInclude<ExtArgs> | null;
    /**
     * The data needed to create a AppealResolution.
     */
    data: XOR<AppealResolutionCreateInput, AppealResolutionUncheckedCreateInput>;
  };

  /**
   * AppealResolution createMany
   */
  export type AppealResolutionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many AppealResolutions.
     */
    data: AppealResolutionCreateManyInput | AppealResolutionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * AppealResolution createManyAndReturn
   */
  export type AppealResolutionCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AppealResolution
     */
    select?: AppealResolutionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AppealResolution
     */
    omit?: AppealResolutionOmit<ExtArgs> | null;
    /**
     * The data used to create many AppealResolutions.
     */
    data: AppealResolutionCreateManyInput | AppealResolutionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppealResolutionIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * AppealResolution update
   */
  export type AppealResolutionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AppealResolution
     */
    select?: AppealResolutionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AppealResolution
     */
    omit?: AppealResolutionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppealResolutionInclude<ExtArgs> | null;
    /**
     * The data needed to update a AppealResolution.
     */
    data: XOR<AppealResolutionUpdateInput, AppealResolutionUncheckedUpdateInput>;
    /**
     * Choose, which AppealResolution to update.
     */
    where: AppealResolutionWhereUniqueInput;
  };

  /**
   * AppealResolution updateMany
   */
  export type AppealResolutionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update AppealResolutions.
     */
    data: XOR<AppealResolutionUpdateManyMutationInput, AppealResolutionUncheckedUpdateManyInput>;
    /**
     * Filter which AppealResolutions to update
     */
    where?: AppealResolutionWhereInput;
    /**
     * Limit how many AppealResolutions to update.
     */
    limit?: number;
  };

  /**
   * AppealResolution updateManyAndReturn
   */
  export type AppealResolutionUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AppealResolution
     */
    select?: AppealResolutionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AppealResolution
     */
    omit?: AppealResolutionOmit<ExtArgs> | null;
    /**
     * The data used to update AppealResolutions.
     */
    data: XOR<AppealResolutionUpdateManyMutationInput, AppealResolutionUncheckedUpdateManyInput>;
    /**
     * Filter which AppealResolutions to update
     */
    where?: AppealResolutionWhereInput;
    /**
     * Limit how many AppealResolutions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppealResolutionIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * AppealResolution upsert
   */
  export type AppealResolutionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AppealResolution
     */
    select?: AppealResolutionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AppealResolution
     */
    omit?: AppealResolutionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppealResolutionInclude<ExtArgs> | null;
    /**
     * The filter to search for the AppealResolution to update in case it exists.
     */
    where: AppealResolutionWhereUniqueInput;
    /**
     * In case the AppealResolution found by the `where` argument doesn't exist, create a new AppealResolution with this data.
     */
    create: XOR<AppealResolutionCreateInput, AppealResolutionUncheckedCreateInput>;
    /**
     * In case the AppealResolution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppealResolutionUpdateInput, AppealResolutionUncheckedUpdateInput>;
  };

  /**
   * AppealResolution delete
   */
  export type AppealResolutionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AppealResolution
     */
    select?: AppealResolutionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AppealResolution
     */
    omit?: AppealResolutionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppealResolutionInclude<ExtArgs> | null;
    /**
     * Filter which AppealResolution to delete.
     */
    where: AppealResolutionWhereUniqueInput;
  };

  /**
   * AppealResolution deleteMany
   */
  export type AppealResolutionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AppealResolutions to delete
     */
    where?: AppealResolutionWhereInput;
    /**
     * Limit how many AppealResolutions to delete.
     */
    limit?: number;
  };

  /**
   * AppealResolution without action
   */
  export type AppealResolutionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AppealResolution
     */
    select?: AppealResolutionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AppealResolution
     */
    omit?: AppealResolutionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppealResolutionInclude<ExtArgs> | null;
  };

  /**
   * Model AppealCancellation
   */

  export type AggregateAppealCancellation = {
    _count: AppealCancellationCountAggregateOutputType | null;
    _min: AppealCancellationMinAggregateOutputType | null;
    _max: AppealCancellationMaxAggregateOutputType | null;
  };

  export type AppealCancellationMinAggregateOutputType = {
    id: string | null;
    appealId: string | null;
    reason: string | null;
  };

  export type AppealCancellationMaxAggregateOutputType = {
    id: string | null;
    appealId: string | null;
    reason: string | null;
  };

  export type AppealCancellationCountAggregateOutputType = {
    id: number;
    appealId: number;
    reason: number;
    _all: number;
  };

  export type AppealCancellationMinAggregateInputType = {
    id?: true;
    appealId?: true;
    reason?: true;
  };

  export type AppealCancellationMaxAggregateInputType = {
    id?: true;
    appealId?: true;
    reason?: true;
  };

  export type AppealCancellationCountAggregateInputType = {
    id?: true;
    appealId?: true;
    reason?: true;
    _all?: true;
  };

  export type AppealCancellationAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AppealCancellation to aggregate.
     */
    where?: AppealCancellationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AppealCancellations to fetch.
     */
    orderBy?:
      | AppealCancellationOrderByWithRelationInput
      | AppealCancellationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AppealCancellationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AppealCancellations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AppealCancellations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AppealCancellations
     **/
    _count?: true | AppealCancellationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AppealCancellationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AppealCancellationMaxAggregateInputType;
  };

  export type GetAppealCancellationAggregateType<T extends AppealCancellationAggregateArgs> = {
    [P in keyof T & keyof AggregateAppealCancellation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppealCancellation[P]>
      : GetScalarType<T[P], AggregateAppealCancellation[P]>;
  };

  export type AppealCancellationGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AppealCancellationWhereInput;
    orderBy?:
      | AppealCancellationOrderByWithAggregationInput
      | AppealCancellationOrderByWithAggregationInput[];
    by: AppealCancellationScalarFieldEnum[] | AppealCancellationScalarFieldEnum;
    having?: AppealCancellationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AppealCancellationCountAggregateInputType | true;
    _min?: AppealCancellationMinAggregateInputType;
    _max?: AppealCancellationMaxAggregateInputType;
  };

  export type AppealCancellationGroupByOutputType = {
    id: string;
    appealId: string;
    reason: string;
    _count: AppealCancellationCountAggregateOutputType | null;
    _min: AppealCancellationMinAggregateOutputType | null;
    _max: AppealCancellationMaxAggregateOutputType | null;
  };

  type GetAppealCancellationGroupByPayload<T extends AppealCancellationGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AppealCancellationGroupByOutputType, T['by']> & {
          [P in keyof T & keyof AppealCancellationGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppealCancellationGroupByOutputType[P]>
            : GetScalarType<T[P], AppealCancellationGroupByOutputType[P]>;
        }
      >
    >;

  export type AppealCancellationSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      appealId?: boolean;
      reason?: boolean;
      appeal?: boolean | AppealDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['appealCancellation']
  >;

  export type AppealCancellationSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      appealId?: boolean;
      reason?: boolean;
      appeal?: boolean | AppealDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['appealCancellation']
  >;

  export type AppealCancellationSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      appealId?: boolean;
      reason?: boolean;
      appeal?: boolean | AppealDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['appealCancellation']
  >;

  export type AppealCancellationSelectScalar = {
    id?: boolean;
    appealId?: boolean;
    reason?: boolean;
  };

  export type AppealCancellationOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<'id' | 'appealId' | 'reason', ExtArgs['result']['appealCancellation']>;
  export type AppealCancellationInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    appeal?: boolean | AppealDefaultArgs<ExtArgs>;
  };
  export type AppealCancellationIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    appeal?: boolean | AppealDefaultArgs<ExtArgs>;
  };
  export type AppealCancellationIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    appeal?: boolean | AppealDefaultArgs<ExtArgs>;
  };

  export type $AppealCancellationPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'AppealCancellation';
    objects: {
      appeal: Prisma.$AppealPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        appealId: string;
        reason: string;
      },
      ExtArgs['result']['appealCancellation']
    >;
    composites: {};
  };

  type AppealCancellationGetPayload<
    S extends boolean | null | undefined | AppealCancellationDefaultArgs,
  > = $Result.GetResult<Prisma.$AppealCancellationPayload, S>;

  type AppealCancellationCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<AppealCancellationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AppealCancellationCountAggregateInputType | true;
  };

  export interface AppealCancellationDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['AppealCancellation'];
      meta: { name: 'AppealCancellation' };
    };
    /**
     * Find zero or one AppealCancellation that matches the filter.
     * @param {AppealCancellationFindUniqueArgs} args - Arguments to find a AppealCancellation
     * @example
     * // Get one AppealCancellation
     * const appealCancellation = await prisma.appealCancellation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppealCancellationFindUniqueArgs>(
      args: SelectSubset<T, AppealCancellationFindUniqueArgs<ExtArgs>>
    ): Prisma__AppealCancellationClient<
      $Result.GetResult<
        Prisma.$AppealCancellationPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one AppealCancellation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppealCancellationFindUniqueOrThrowArgs} args - Arguments to find a AppealCancellation
     * @example
     * // Get one AppealCancellation
     * const appealCancellation = await prisma.appealCancellation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppealCancellationFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AppealCancellationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AppealCancellationClient<
      $Result.GetResult<
        Prisma.$AppealCancellationPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first AppealCancellation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppealCancellationFindFirstArgs} args - Arguments to find a AppealCancellation
     * @example
     * // Get one AppealCancellation
     * const appealCancellation = await prisma.appealCancellation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppealCancellationFindFirstArgs>(
      args?: SelectSubset<T, AppealCancellationFindFirstArgs<ExtArgs>>
    ): Prisma__AppealCancellationClient<
      $Result.GetResult<
        Prisma.$AppealCancellationPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first AppealCancellation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppealCancellationFindFirstOrThrowArgs} args - Arguments to find a AppealCancellation
     * @example
     * // Get one AppealCancellation
     * const appealCancellation = await prisma.appealCancellation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppealCancellationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AppealCancellationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AppealCancellationClient<
      $Result.GetResult<
        Prisma.$AppealCancellationPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more AppealCancellations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppealCancellationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppealCancellations
     * const appealCancellations = await prisma.appealCancellation.findMany()
     *
     * // Get first 10 AppealCancellations
     * const appealCancellations = await prisma.appealCancellation.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const appealCancellationWithIdOnly = await prisma.appealCancellation.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AppealCancellationFindManyArgs>(
      args?: SelectSubset<T, AppealCancellationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AppealCancellationPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a AppealCancellation.
     * @param {AppealCancellationCreateArgs} args - Arguments to create a AppealCancellation.
     * @example
     * // Create one AppealCancellation
     * const AppealCancellation = await prisma.appealCancellation.create({
     *   data: {
     *     // ... data to create a AppealCancellation
     *   }
     * })
     *
     */
    create<T extends AppealCancellationCreateArgs>(
      args: SelectSubset<T, AppealCancellationCreateArgs<ExtArgs>>
    ): Prisma__AppealCancellationClient<
      $Result.GetResult<Prisma.$AppealCancellationPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many AppealCancellations.
     * @param {AppealCancellationCreateManyArgs} args - Arguments to create many AppealCancellations.
     * @example
     * // Create many AppealCancellations
     * const appealCancellation = await prisma.appealCancellation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AppealCancellationCreateManyArgs>(
      args?: SelectSubset<T, AppealCancellationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many AppealCancellations and returns the data saved in the database.
     * @param {AppealCancellationCreateManyAndReturnArgs} args - Arguments to create many AppealCancellations.
     * @example
     * // Create many AppealCancellations
     * const appealCancellation = await prisma.appealCancellation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AppealCancellations and only return the `id`
     * const appealCancellationWithIdOnly = await prisma.appealCancellation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AppealCancellationCreateManyAndReturnArgs>(
      args?: SelectSubset<T, AppealCancellationCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AppealCancellationPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a AppealCancellation.
     * @param {AppealCancellationDeleteArgs} args - Arguments to delete one AppealCancellation.
     * @example
     * // Delete one AppealCancellation
     * const AppealCancellation = await prisma.appealCancellation.delete({
     *   where: {
     *     // ... filter to delete one AppealCancellation
     *   }
     * })
     *
     */
    delete<T extends AppealCancellationDeleteArgs>(
      args: SelectSubset<T, AppealCancellationDeleteArgs<ExtArgs>>
    ): Prisma__AppealCancellationClient<
      $Result.GetResult<Prisma.$AppealCancellationPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one AppealCancellation.
     * @param {AppealCancellationUpdateArgs} args - Arguments to update one AppealCancellation.
     * @example
     * // Update one AppealCancellation
     * const appealCancellation = await prisma.appealCancellation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AppealCancellationUpdateArgs>(
      args: SelectSubset<T, AppealCancellationUpdateArgs<ExtArgs>>
    ): Prisma__AppealCancellationClient<
      $Result.GetResult<Prisma.$AppealCancellationPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more AppealCancellations.
     * @param {AppealCancellationDeleteManyArgs} args - Arguments to filter AppealCancellations to delete.
     * @example
     * // Delete a few AppealCancellations
     * const { count } = await prisma.appealCancellation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AppealCancellationDeleteManyArgs>(
      args?: SelectSubset<T, AppealCancellationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more AppealCancellations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppealCancellationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppealCancellations
     * const appealCancellation = await prisma.appealCancellation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AppealCancellationUpdateManyArgs>(
      args: SelectSubset<T, AppealCancellationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more AppealCancellations and returns the data updated in the database.
     * @param {AppealCancellationUpdateManyAndReturnArgs} args - Arguments to update many AppealCancellations.
     * @example
     * // Update many AppealCancellations
     * const appealCancellation = await prisma.appealCancellation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more AppealCancellations and only return the `id`
     * const appealCancellationWithIdOnly = await prisma.appealCancellation.updateManyAndReturn({
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
    updateManyAndReturn<T extends AppealCancellationUpdateManyAndReturnArgs>(
      args: SelectSubset<T, AppealCancellationUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AppealCancellationPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one AppealCancellation.
     * @param {AppealCancellationUpsertArgs} args - Arguments to update or create a AppealCancellation.
     * @example
     * // Update or create a AppealCancellation
     * const appealCancellation = await prisma.appealCancellation.upsert({
     *   create: {
     *     // ... data to create a AppealCancellation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppealCancellation we want to update
     *   }
     * })
     */
    upsert<T extends AppealCancellationUpsertArgs>(
      args: SelectSubset<T, AppealCancellationUpsertArgs<ExtArgs>>
    ): Prisma__AppealCancellationClient<
      $Result.GetResult<Prisma.$AppealCancellationPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of AppealCancellations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppealCancellationCountArgs} args - Arguments to filter AppealCancellations to count.
     * @example
     * // Count the number of AppealCancellations
     * const count = await prisma.appealCancellation.count({
     *   where: {
     *     // ... the filter for the AppealCancellations we want to count
     *   }
     * })
     **/
    count<T extends AppealCancellationCountArgs>(
      args?: Subset<T, AppealCancellationCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppealCancellationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a AppealCancellation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppealCancellationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppealCancellationAggregateArgs>(
      args: Subset<T, AppealCancellationAggregateArgs>
    ): Prisma.PrismaPromise<GetAppealCancellationAggregateType<T>>;

    /**
     * Group by AppealCancellation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppealCancellationGroupByArgs} args - Group by arguments.
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
      T extends AppealCancellationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppealCancellationGroupByArgs['orderBy'] }
        : { orderBy?: AppealCancellationGroupByArgs['orderBy'] },
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
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AppealCancellationGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetAppealCancellationGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AppealCancellation model
     */
    readonly fields: AppealCancellationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppealCancellation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppealCancellationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    appeal<T extends AppealDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, AppealDefaultArgs<ExtArgs>>
    ): Prisma__AppealClient<
      | $Result.GetResult<Prisma.$AppealPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the AppealCancellation model
   */
  interface AppealCancellationFieldRefs {
    readonly id: FieldRef<'AppealCancellation', 'String'>;
    readonly appealId: FieldRef<'AppealCancellation', 'String'>;
    readonly reason: FieldRef<'AppealCancellation', 'String'>;
  }

  // Custom InputTypes
  /**
   * AppealCancellation findUnique
   */
  export type AppealCancellationFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AppealCancellation
     */
    select?: AppealCancellationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AppealCancellation
     */
    omit?: AppealCancellationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppealCancellationInclude<ExtArgs> | null;
    /**
     * Filter, which AppealCancellation to fetch.
     */
    where: AppealCancellationWhereUniqueInput;
  };

  /**
   * AppealCancellation findUniqueOrThrow
   */
  export type AppealCancellationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AppealCancellation
     */
    select?: AppealCancellationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AppealCancellation
     */
    omit?: AppealCancellationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppealCancellationInclude<ExtArgs> | null;
    /**
     * Filter, which AppealCancellation to fetch.
     */
    where: AppealCancellationWhereUniqueInput;
  };

  /**
   * AppealCancellation findFirst
   */
  export type AppealCancellationFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AppealCancellation
     */
    select?: AppealCancellationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AppealCancellation
     */
    omit?: AppealCancellationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppealCancellationInclude<ExtArgs> | null;
    /**
     * Filter, which AppealCancellation to fetch.
     */
    where?: AppealCancellationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AppealCancellations to fetch.
     */
    orderBy?:
      | AppealCancellationOrderByWithRelationInput
      | AppealCancellationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AppealCancellations.
     */
    cursor?: AppealCancellationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AppealCancellations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AppealCancellations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AppealCancellations.
     */
    distinct?: AppealCancellationScalarFieldEnum | AppealCancellationScalarFieldEnum[];
  };

  /**
   * AppealCancellation findFirstOrThrow
   */
  export type AppealCancellationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AppealCancellation
     */
    select?: AppealCancellationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AppealCancellation
     */
    omit?: AppealCancellationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppealCancellationInclude<ExtArgs> | null;
    /**
     * Filter, which AppealCancellation to fetch.
     */
    where?: AppealCancellationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AppealCancellations to fetch.
     */
    orderBy?:
      | AppealCancellationOrderByWithRelationInput
      | AppealCancellationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AppealCancellations.
     */
    cursor?: AppealCancellationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AppealCancellations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AppealCancellations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AppealCancellations.
     */
    distinct?: AppealCancellationScalarFieldEnum | AppealCancellationScalarFieldEnum[];
  };

  /**
   * AppealCancellation findMany
   */
  export type AppealCancellationFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AppealCancellation
     */
    select?: AppealCancellationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AppealCancellation
     */
    omit?: AppealCancellationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppealCancellationInclude<ExtArgs> | null;
    /**
     * Filter, which AppealCancellations to fetch.
     */
    where?: AppealCancellationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AppealCancellations to fetch.
     */
    orderBy?:
      | AppealCancellationOrderByWithRelationInput
      | AppealCancellationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AppealCancellations.
     */
    cursor?: AppealCancellationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AppealCancellations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AppealCancellations.
     */
    skip?: number;
    distinct?: AppealCancellationScalarFieldEnum | AppealCancellationScalarFieldEnum[];
  };

  /**
   * AppealCancellation create
   */
  export type AppealCancellationCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AppealCancellation
     */
    select?: AppealCancellationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AppealCancellation
     */
    omit?: AppealCancellationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppealCancellationInclude<ExtArgs> | null;
    /**
     * The data needed to create a AppealCancellation.
     */
    data: XOR<AppealCancellationCreateInput, AppealCancellationUncheckedCreateInput>;
  };

  /**
   * AppealCancellation createMany
   */
  export type AppealCancellationCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many AppealCancellations.
     */
    data: AppealCancellationCreateManyInput | AppealCancellationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * AppealCancellation createManyAndReturn
   */
  export type AppealCancellationCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AppealCancellation
     */
    select?: AppealCancellationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AppealCancellation
     */
    omit?: AppealCancellationOmit<ExtArgs> | null;
    /**
     * The data used to create many AppealCancellations.
     */
    data: AppealCancellationCreateManyInput | AppealCancellationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppealCancellationIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * AppealCancellation update
   */
  export type AppealCancellationUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AppealCancellation
     */
    select?: AppealCancellationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AppealCancellation
     */
    omit?: AppealCancellationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppealCancellationInclude<ExtArgs> | null;
    /**
     * The data needed to update a AppealCancellation.
     */
    data: XOR<AppealCancellationUpdateInput, AppealCancellationUncheckedUpdateInput>;
    /**
     * Choose, which AppealCancellation to update.
     */
    where: AppealCancellationWhereUniqueInput;
  };

  /**
   * AppealCancellation updateMany
   */
  export type AppealCancellationUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update AppealCancellations.
     */
    data: XOR<
      AppealCancellationUpdateManyMutationInput,
      AppealCancellationUncheckedUpdateManyInput
    >;
    /**
     * Filter which AppealCancellations to update
     */
    where?: AppealCancellationWhereInput;
    /**
     * Limit how many AppealCancellations to update.
     */
    limit?: number;
  };

  /**
   * AppealCancellation updateManyAndReturn
   */
  export type AppealCancellationUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AppealCancellation
     */
    select?: AppealCancellationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AppealCancellation
     */
    omit?: AppealCancellationOmit<ExtArgs> | null;
    /**
     * The data used to update AppealCancellations.
     */
    data: XOR<
      AppealCancellationUpdateManyMutationInput,
      AppealCancellationUncheckedUpdateManyInput
    >;
    /**
     * Filter which AppealCancellations to update
     */
    where?: AppealCancellationWhereInput;
    /**
     * Limit how many AppealCancellations to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppealCancellationIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * AppealCancellation upsert
   */
  export type AppealCancellationUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AppealCancellation
     */
    select?: AppealCancellationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AppealCancellation
     */
    omit?: AppealCancellationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppealCancellationInclude<ExtArgs> | null;
    /**
     * The filter to search for the AppealCancellation to update in case it exists.
     */
    where: AppealCancellationWhereUniqueInput;
    /**
     * In case the AppealCancellation found by the `where` argument doesn't exist, create a new AppealCancellation with this data.
     */
    create: XOR<AppealCancellationCreateInput, AppealCancellationUncheckedCreateInput>;
    /**
     * In case the AppealCancellation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppealCancellationUpdateInput, AppealCancellationUncheckedUpdateInput>;
  };

  /**
   * AppealCancellation delete
   */
  export type AppealCancellationDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AppealCancellation
     */
    select?: AppealCancellationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AppealCancellation
     */
    omit?: AppealCancellationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppealCancellationInclude<ExtArgs> | null;
    /**
     * Filter which AppealCancellation to delete.
     */
    where: AppealCancellationWhereUniqueInput;
  };

  /**
   * AppealCancellation deleteMany
   */
  export type AppealCancellationDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AppealCancellations to delete
     */
    where?: AppealCancellationWhereInput;
    /**
     * Limit how many AppealCancellations to delete.
     */
    limit?: number;
  };

  /**
   * AppealCancellation without action
   */
  export type AppealCancellationDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AppealCancellation
     */
    select?: AppealCancellationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AppealCancellation
     */
    omit?: AppealCancellationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppealCancellationInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const AppealScalarFieldEnum: {
    id: 'id';
    createdAt: 'createdAt';
    status: 'status';
    topic: 'topic';
    description: 'description';
  };

  export type AppealScalarFieldEnum =
    (typeof AppealScalarFieldEnum)[keyof typeof AppealScalarFieldEnum];

  export const AppealResolutionScalarFieldEnum: {
    id: 'id';
    appealId: 'appealId';
    text: 'text';
  };

  export type AppealResolutionScalarFieldEnum =
    (typeof AppealResolutionScalarFieldEnum)[keyof typeof AppealResolutionScalarFieldEnum];

  export const AppealCancellationScalarFieldEnum: {
    id: 'id';
    appealId: 'appealId';
    reason: 'reason';
  };

  export type AppealCancellationScalarFieldEnum =
    (typeof AppealCancellationScalarFieldEnum)[keyof typeof AppealCancellationScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'AppealStatus'
   */
  export type EnumAppealStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'AppealStatus'
  >;

  /**
   * Reference to a field of type 'AppealStatus[]'
   */
  export type ListEnumAppealStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'AppealStatus[]'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Deep Input Types
   */

  export type AppealWhereInput = {
    AND?: AppealWhereInput | AppealWhereInput[];
    OR?: AppealWhereInput[];
    NOT?: AppealWhereInput | AppealWhereInput[];
    id?: StringFilter<'Appeal'> | string;
    createdAt?: DateTimeFilter<'Appeal'> | Date | string;
    status?: EnumAppealStatusFilter<'Appeal'> | $Enums.AppealStatus;
    topic?: StringFilter<'Appeal'> | string;
    description?: StringNullableFilter<'Appeal'> | string | null;
    resolution?: XOR<
      AppealResolutionNullableScalarRelationFilter,
      AppealResolutionWhereInput
    > | null;
    cancellation?: XOR<
      AppealCancellationNullableScalarRelationFilter,
      AppealCancellationWhereInput
    > | null;
  };

  export type AppealOrderByWithRelationInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    status?: SortOrder;
    topic?: SortOrder;
    description?: SortOrderInput | SortOrder;
    resolution?: AppealResolutionOrderByWithRelationInput;
    cancellation?: AppealCancellationOrderByWithRelationInput;
  };

  export type AppealWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: AppealWhereInput | AppealWhereInput[];
      OR?: AppealWhereInput[];
      NOT?: AppealWhereInput | AppealWhereInput[];
      createdAt?: DateTimeFilter<'Appeal'> | Date | string;
      status?: EnumAppealStatusFilter<'Appeal'> | $Enums.AppealStatus;
      topic?: StringFilter<'Appeal'> | string;
      description?: StringNullableFilter<'Appeal'> | string | null;
      resolution?: XOR<
        AppealResolutionNullableScalarRelationFilter,
        AppealResolutionWhereInput
      > | null;
      cancellation?: XOR<
        AppealCancellationNullableScalarRelationFilter,
        AppealCancellationWhereInput
      > | null;
    },
    'id'
  >;

  export type AppealOrderByWithAggregationInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    status?: SortOrder;
    topic?: SortOrder;
    description?: SortOrderInput | SortOrder;
    _count?: AppealCountOrderByAggregateInput;
    _max?: AppealMaxOrderByAggregateInput;
    _min?: AppealMinOrderByAggregateInput;
  };

  export type AppealScalarWhereWithAggregatesInput = {
    AND?: AppealScalarWhereWithAggregatesInput | AppealScalarWhereWithAggregatesInput[];
    OR?: AppealScalarWhereWithAggregatesInput[];
    NOT?: AppealScalarWhereWithAggregatesInput | AppealScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Appeal'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Appeal'> | Date | string;
    status?: EnumAppealStatusWithAggregatesFilter<'Appeal'> | $Enums.AppealStatus;
    topic?: StringWithAggregatesFilter<'Appeal'> | string;
    description?: StringNullableWithAggregatesFilter<'Appeal'> | string | null;
  };

  export type AppealResolutionWhereInput = {
    AND?: AppealResolutionWhereInput | AppealResolutionWhereInput[];
    OR?: AppealResolutionWhereInput[];
    NOT?: AppealResolutionWhereInput | AppealResolutionWhereInput[];
    id?: StringFilter<'AppealResolution'> | string;
    appealId?: StringFilter<'AppealResolution'> | string;
    text?: StringFilter<'AppealResolution'> | string;
    appeal?: XOR<AppealScalarRelationFilter, AppealWhereInput>;
  };

  export type AppealResolutionOrderByWithRelationInput = {
    id?: SortOrder;
    appealId?: SortOrder;
    text?: SortOrder;
    appeal?: AppealOrderByWithRelationInput;
  };

  export type AppealResolutionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      appealId?: string;
      AND?: AppealResolutionWhereInput | AppealResolutionWhereInput[];
      OR?: AppealResolutionWhereInput[];
      NOT?: AppealResolutionWhereInput | AppealResolutionWhereInput[];
      text?: StringFilter<'AppealResolution'> | string;
      appeal?: XOR<AppealScalarRelationFilter, AppealWhereInput>;
    },
    'id' | 'appealId'
  >;

  export type AppealResolutionOrderByWithAggregationInput = {
    id?: SortOrder;
    appealId?: SortOrder;
    text?: SortOrder;
    _count?: AppealResolutionCountOrderByAggregateInput;
    _max?: AppealResolutionMaxOrderByAggregateInput;
    _min?: AppealResolutionMinOrderByAggregateInput;
  };

  export type AppealResolutionScalarWhereWithAggregatesInput = {
    AND?:
      | AppealResolutionScalarWhereWithAggregatesInput
      | AppealResolutionScalarWhereWithAggregatesInput[];
    OR?: AppealResolutionScalarWhereWithAggregatesInput[];
    NOT?:
      | AppealResolutionScalarWhereWithAggregatesInput
      | AppealResolutionScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'AppealResolution'> | string;
    appealId?: StringWithAggregatesFilter<'AppealResolution'> | string;
    text?: StringWithAggregatesFilter<'AppealResolution'> | string;
  };

  export type AppealCancellationWhereInput = {
    AND?: AppealCancellationWhereInput | AppealCancellationWhereInput[];
    OR?: AppealCancellationWhereInput[];
    NOT?: AppealCancellationWhereInput | AppealCancellationWhereInput[];
    id?: StringFilter<'AppealCancellation'> | string;
    appealId?: StringFilter<'AppealCancellation'> | string;
    reason?: StringFilter<'AppealCancellation'> | string;
    appeal?: XOR<AppealScalarRelationFilter, AppealWhereInput>;
  };

  export type AppealCancellationOrderByWithRelationInput = {
    id?: SortOrder;
    appealId?: SortOrder;
    reason?: SortOrder;
    appeal?: AppealOrderByWithRelationInput;
  };

  export type AppealCancellationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      appealId?: string;
      AND?: AppealCancellationWhereInput | AppealCancellationWhereInput[];
      OR?: AppealCancellationWhereInput[];
      NOT?: AppealCancellationWhereInput | AppealCancellationWhereInput[];
      reason?: StringFilter<'AppealCancellation'> | string;
      appeal?: XOR<AppealScalarRelationFilter, AppealWhereInput>;
    },
    'id' | 'appealId'
  >;

  export type AppealCancellationOrderByWithAggregationInput = {
    id?: SortOrder;
    appealId?: SortOrder;
    reason?: SortOrder;
    _count?: AppealCancellationCountOrderByAggregateInput;
    _max?: AppealCancellationMaxOrderByAggregateInput;
    _min?: AppealCancellationMinOrderByAggregateInput;
  };

  export type AppealCancellationScalarWhereWithAggregatesInput = {
    AND?:
      | AppealCancellationScalarWhereWithAggregatesInput
      | AppealCancellationScalarWhereWithAggregatesInput[];
    OR?: AppealCancellationScalarWhereWithAggregatesInput[];
    NOT?:
      | AppealCancellationScalarWhereWithAggregatesInput
      | AppealCancellationScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'AppealCancellation'> | string;
    appealId?: StringWithAggregatesFilter<'AppealCancellation'> | string;
    reason?: StringWithAggregatesFilter<'AppealCancellation'> | string;
  };

  export type AppealCreateInput = {
    id?: string;
    createdAt?: Date | string;
    status: $Enums.AppealStatus;
    topic: string;
    description?: string | null;
    resolution?: AppealResolutionCreateNestedOneWithoutAppealInput;
    cancellation?: AppealCancellationCreateNestedOneWithoutAppealInput;
  };

  export type AppealUncheckedCreateInput = {
    id?: string;
    createdAt?: Date | string;
    status: $Enums.AppealStatus;
    topic: string;
    description?: string | null;
    resolution?: AppealResolutionUncheckedCreateNestedOneWithoutAppealInput;
    cancellation?: AppealCancellationUncheckedCreateNestedOneWithoutAppealInput;
  };

  export type AppealUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumAppealStatusFieldUpdateOperationsInput | $Enums.AppealStatus;
    topic?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    resolution?: AppealResolutionUpdateOneWithoutAppealNestedInput;
    cancellation?: AppealCancellationUpdateOneWithoutAppealNestedInput;
  };

  export type AppealUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumAppealStatusFieldUpdateOperationsInput | $Enums.AppealStatus;
    topic?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    resolution?: AppealResolutionUncheckedUpdateOneWithoutAppealNestedInput;
    cancellation?: AppealCancellationUncheckedUpdateOneWithoutAppealNestedInput;
  };

  export type AppealCreateManyInput = {
    id?: string;
    createdAt?: Date | string;
    status: $Enums.AppealStatus;
    topic: string;
    description?: string | null;
  };

  export type AppealUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumAppealStatusFieldUpdateOperationsInput | $Enums.AppealStatus;
    topic?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type AppealUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumAppealStatusFieldUpdateOperationsInput | $Enums.AppealStatus;
    topic?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type AppealResolutionCreateInput = {
    id?: string;
    text: string;
    appeal: AppealCreateNestedOneWithoutResolutionInput;
  };

  export type AppealResolutionUncheckedCreateInput = {
    id?: string;
    appealId: string;
    text: string;
  };

  export type AppealResolutionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
    appeal?: AppealUpdateOneRequiredWithoutResolutionNestedInput;
  };

  export type AppealResolutionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appealId?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
  };

  export type AppealResolutionCreateManyInput = {
    id?: string;
    appealId: string;
    text: string;
  };

  export type AppealResolutionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
  };

  export type AppealResolutionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appealId?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
  };

  export type AppealCancellationCreateInput = {
    id?: string;
    reason: string;
    appeal: AppealCreateNestedOneWithoutCancellationInput;
  };

  export type AppealCancellationUncheckedCreateInput = {
    id?: string;
    appealId: string;
    reason: string;
  };

  export type AppealCancellationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    reason?: StringFieldUpdateOperationsInput | string;
    appeal?: AppealUpdateOneRequiredWithoutCancellationNestedInput;
  };

  export type AppealCancellationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appealId?: StringFieldUpdateOperationsInput | string;
    reason?: StringFieldUpdateOperationsInput | string;
  };

  export type AppealCancellationCreateManyInput = {
    id?: string;
    appealId: string;
    reason: string;
  };

  export type AppealCancellationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    reason?: StringFieldUpdateOperationsInput | string;
  };

  export type AppealCancellationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appealId?: StringFieldUpdateOperationsInput | string;
    reason?: StringFieldUpdateOperationsInput | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type EnumAppealStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppealStatus | EnumAppealStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AppealStatus[] | ListEnumAppealStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AppealStatus[] | ListEnumAppealStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumAppealStatusFilter<$PrismaModel> | $Enums.AppealStatus;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type AppealResolutionNullableScalarRelationFilter = {
    is?: AppealResolutionWhereInput | null;
    isNot?: AppealResolutionWhereInput | null;
  };

  export type AppealCancellationNullableScalarRelationFilter = {
    is?: AppealCancellationWhereInput | null;
    isNot?: AppealCancellationWhereInput | null;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type AppealCountOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    status?: SortOrder;
    topic?: SortOrder;
    description?: SortOrder;
  };

  export type AppealMaxOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    status?: SortOrder;
    topic?: SortOrder;
    description?: SortOrder;
  };

  export type AppealMinOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    status?: SortOrder;
    topic?: SortOrder;
    description?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type EnumAppealStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppealStatus | EnumAppealStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AppealStatus[] | ListEnumAppealStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AppealStatus[] | ListEnumAppealStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumAppealStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppealStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumAppealStatusFilter<$PrismaModel>;
    _max?: NestedEnumAppealStatusFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type AppealScalarRelationFilter = {
    is?: AppealWhereInput;
    isNot?: AppealWhereInput;
  };

  export type AppealResolutionCountOrderByAggregateInput = {
    id?: SortOrder;
    appealId?: SortOrder;
    text?: SortOrder;
  };

  export type AppealResolutionMaxOrderByAggregateInput = {
    id?: SortOrder;
    appealId?: SortOrder;
    text?: SortOrder;
  };

  export type AppealResolutionMinOrderByAggregateInput = {
    id?: SortOrder;
    appealId?: SortOrder;
    text?: SortOrder;
  };

  export type AppealCancellationCountOrderByAggregateInput = {
    id?: SortOrder;
    appealId?: SortOrder;
    reason?: SortOrder;
  };

  export type AppealCancellationMaxOrderByAggregateInput = {
    id?: SortOrder;
    appealId?: SortOrder;
    reason?: SortOrder;
  };

  export type AppealCancellationMinOrderByAggregateInput = {
    id?: SortOrder;
    appealId?: SortOrder;
    reason?: SortOrder;
  };

  export type AppealResolutionCreateNestedOneWithoutAppealInput = {
    create?: XOR<
      AppealResolutionCreateWithoutAppealInput,
      AppealResolutionUncheckedCreateWithoutAppealInput
    >;
    connectOrCreate?: AppealResolutionCreateOrConnectWithoutAppealInput;
    connect?: AppealResolutionWhereUniqueInput;
  };

  export type AppealCancellationCreateNestedOneWithoutAppealInput = {
    create?: XOR<
      AppealCancellationCreateWithoutAppealInput,
      AppealCancellationUncheckedCreateWithoutAppealInput
    >;
    connectOrCreate?: AppealCancellationCreateOrConnectWithoutAppealInput;
    connect?: AppealCancellationWhereUniqueInput;
  };

  export type AppealResolutionUncheckedCreateNestedOneWithoutAppealInput = {
    create?: XOR<
      AppealResolutionCreateWithoutAppealInput,
      AppealResolutionUncheckedCreateWithoutAppealInput
    >;
    connectOrCreate?: AppealResolutionCreateOrConnectWithoutAppealInput;
    connect?: AppealResolutionWhereUniqueInput;
  };

  export type AppealCancellationUncheckedCreateNestedOneWithoutAppealInput = {
    create?: XOR<
      AppealCancellationCreateWithoutAppealInput,
      AppealCancellationUncheckedCreateWithoutAppealInput
    >;
    connectOrCreate?: AppealCancellationCreateOrConnectWithoutAppealInput;
    connect?: AppealCancellationWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type EnumAppealStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppealStatus;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type AppealResolutionUpdateOneWithoutAppealNestedInput = {
    create?: XOR<
      AppealResolutionCreateWithoutAppealInput,
      AppealResolutionUncheckedCreateWithoutAppealInput
    >;
    connectOrCreate?: AppealResolutionCreateOrConnectWithoutAppealInput;
    upsert?: AppealResolutionUpsertWithoutAppealInput;
    disconnect?: AppealResolutionWhereInput | boolean;
    delete?: AppealResolutionWhereInput | boolean;
    connect?: AppealResolutionWhereUniqueInput;
    update?: XOR<
      XOR<
        AppealResolutionUpdateToOneWithWhereWithoutAppealInput,
        AppealResolutionUpdateWithoutAppealInput
      >,
      AppealResolutionUncheckedUpdateWithoutAppealInput
    >;
  };

  export type AppealCancellationUpdateOneWithoutAppealNestedInput = {
    create?: XOR<
      AppealCancellationCreateWithoutAppealInput,
      AppealCancellationUncheckedCreateWithoutAppealInput
    >;
    connectOrCreate?: AppealCancellationCreateOrConnectWithoutAppealInput;
    upsert?: AppealCancellationUpsertWithoutAppealInput;
    disconnect?: AppealCancellationWhereInput | boolean;
    delete?: AppealCancellationWhereInput | boolean;
    connect?: AppealCancellationWhereUniqueInput;
    update?: XOR<
      XOR<
        AppealCancellationUpdateToOneWithWhereWithoutAppealInput,
        AppealCancellationUpdateWithoutAppealInput
      >,
      AppealCancellationUncheckedUpdateWithoutAppealInput
    >;
  };

  export type AppealResolutionUncheckedUpdateOneWithoutAppealNestedInput = {
    create?: XOR<
      AppealResolutionCreateWithoutAppealInput,
      AppealResolutionUncheckedCreateWithoutAppealInput
    >;
    connectOrCreate?: AppealResolutionCreateOrConnectWithoutAppealInput;
    upsert?: AppealResolutionUpsertWithoutAppealInput;
    disconnect?: AppealResolutionWhereInput | boolean;
    delete?: AppealResolutionWhereInput | boolean;
    connect?: AppealResolutionWhereUniqueInput;
    update?: XOR<
      XOR<
        AppealResolutionUpdateToOneWithWhereWithoutAppealInput,
        AppealResolutionUpdateWithoutAppealInput
      >,
      AppealResolutionUncheckedUpdateWithoutAppealInput
    >;
  };

  export type AppealCancellationUncheckedUpdateOneWithoutAppealNestedInput = {
    create?: XOR<
      AppealCancellationCreateWithoutAppealInput,
      AppealCancellationUncheckedCreateWithoutAppealInput
    >;
    connectOrCreate?: AppealCancellationCreateOrConnectWithoutAppealInput;
    upsert?: AppealCancellationUpsertWithoutAppealInput;
    disconnect?: AppealCancellationWhereInput | boolean;
    delete?: AppealCancellationWhereInput | boolean;
    connect?: AppealCancellationWhereUniqueInput;
    update?: XOR<
      XOR<
        AppealCancellationUpdateToOneWithWhereWithoutAppealInput,
        AppealCancellationUpdateWithoutAppealInput
      >,
      AppealCancellationUncheckedUpdateWithoutAppealInput
    >;
  };

  export type AppealCreateNestedOneWithoutResolutionInput = {
    create?: XOR<AppealCreateWithoutResolutionInput, AppealUncheckedCreateWithoutResolutionInput>;
    connectOrCreate?: AppealCreateOrConnectWithoutResolutionInput;
    connect?: AppealWhereUniqueInput;
  };

  export type AppealUpdateOneRequiredWithoutResolutionNestedInput = {
    create?: XOR<AppealCreateWithoutResolutionInput, AppealUncheckedCreateWithoutResolutionInput>;
    connectOrCreate?: AppealCreateOrConnectWithoutResolutionInput;
    upsert?: AppealUpsertWithoutResolutionInput;
    connect?: AppealWhereUniqueInput;
    update?: XOR<
      XOR<AppealUpdateToOneWithWhereWithoutResolutionInput, AppealUpdateWithoutResolutionInput>,
      AppealUncheckedUpdateWithoutResolutionInput
    >;
  };

  export type AppealCreateNestedOneWithoutCancellationInput = {
    create?: XOR<
      AppealCreateWithoutCancellationInput,
      AppealUncheckedCreateWithoutCancellationInput
    >;
    connectOrCreate?: AppealCreateOrConnectWithoutCancellationInput;
    connect?: AppealWhereUniqueInput;
  };

  export type AppealUpdateOneRequiredWithoutCancellationNestedInput = {
    create?: XOR<
      AppealCreateWithoutCancellationInput,
      AppealUncheckedCreateWithoutCancellationInput
    >;
    connectOrCreate?: AppealCreateOrConnectWithoutCancellationInput;
    upsert?: AppealUpsertWithoutCancellationInput;
    connect?: AppealWhereUniqueInput;
    update?: XOR<
      XOR<AppealUpdateToOneWithWhereWithoutCancellationInput, AppealUpdateWithoutCancellationInput>,
      AppealUncheckedUpdateWithoutCancellationInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedEnumAppealStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppealStatus | EnumAppealStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AppealStatus[] | ListEnumAppealStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AppealStatus[] | ListEnumAppealStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumAppealStatusFilter<$PrismaModel> | $Enums.AppealStatus;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedEnumAppealStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppealStatus | EnumAppealStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AppealStatus[] | ListEnumAppealStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AppealStatus[] | ListEnumAppealStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumAppealStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppealStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumAppealStatusFilter<$PrismaModel>;
    _max?: NestedEnumAppealStatusFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type AppealResolutionCreateWithoutAppealInput = {
    id?: string;
    text: string;
  };

  export type AppealResolutionUncheckedCreateWithoutAppealInput = {
    id?: string;
    text: string;
  };

  export type AppealResolutionCreateOrConnectWithoutAppealInput = {
    where: AppealResolutionWhereUniqueInput;
    create: XOR<
      AppealResolutionCreateWithoutAppealInput,
      AppealResolutionUncheckedCreateWithoutAppealInput
    >;
  };

  export type AppealCancellationCreateWithoutAppealInput = {
    id?: string;
    reason: string;
  };

  export type AppealCancellationUncheckedCreateWithoutAppealInput = {
    id?: string;
    reason: string;
  };

  export type AppealCancellationCreateOrConnectWithoutAppealInput = {
    where: AppealCancellationWhereUniqueInput;
    create: XOR<
      AppealCancellationCreateWithoutAppealInput,
      AppealCancellationUncheckedCreateWithoutAppealInput
    >;
  };

  export type AppealResolutionUpsertWithoutAppealInput = {
    update: XOR<
      AppealResolutionUpdateWithoutAppealInput,
      AppealResolutionUncheckedUpdateWithoutAppealInput
    >;
    create: XOR<
      AppealResolutionCreateWithoutAppealInput,
      AppealResolutionUncheckedCreateWithoutAppealInput
    >;
    where?: AppealResolutionWhereInput;
  };

  export type AppealResolutionUpdateToOneWithWhereWithoutAppealInput = {
    where?: AppealResolutionWhereInput;
    data: XOR<
      AppealResolutionUpdateWithoutAppealInput,
      AppealResolutionUncheckedUpdateWithoutAppealInput
    >;
  };

  export type AppealResolutionUpdateWithoutAppealInput = {
    id?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
  };

  export type AppealResolutionUncheckedUpdateWithoutAppealInput = {
    id?: StringFieldUpdateOperationsInput | string;
    text?: StringFieldUpdateOperationsInput | string;
  };

  export type AppealCancellationUpsertWithoutAppealInput = {
    update: XOR<
      AppealCancellationUpdateWithoutAppealInput,
      AppealCancellationUncheckedUpdateWithoutAppealInput
    >;
    create: XOR<
      AppealCancellationCreateWithoutAppealInput,
      AppealCancellationUncheckedCreateWithoutAppealInput
    >;
    where?: AppealCancellationWhereInput;
  };

  export type AppealCancellationUpdateToOneWithWhereWithoutAppealInput = {
    where?: AppealCancellationWhereInput;
    data: XOR<
      AppealCancellationUpdateWithoutAppealInput,
      AppealCancellationUncheckedUpdateWithoutAppealInput
    >;
  };

  export type AppealCancellationUpdateWithoutAppealInput = {
    id?: StringFieldUpdateOperationsInput | string;
    reason?: StringFieldUpdateOperationsInput | string;
  };

  export type AppealCancellationUncheckedUpdateWithoutAppealInput = {
    id?: StringFieldUpdateOperationsInput | string;
    reason?: StringFieldUpdateOperationsInput | string;
  };

  export type AppealCreateWithoutResolutionInput = {
    id?: string;
    createdAt?: Date | string;
    status: $Enums.AppealStatus;
    topic: string;
    description?: string | null;
    cancellation?: AppealCancellationCreateNestedOneWithoutAppealInput;
  };

  export type AppealUncheckedCreateWithoutResolutionInput = {
    id?: string;
    createdAt?: Date | string;
    status: $Enums.AppealStatus;
    topic: string;
    description?: string | null;
    cancellation?: AppealCancellationUncheckedCreateNestedOneWithoutAppealInput;
  };

  export type AppealCreateOrConnectWithoutResolutionInput = {
    where: AppealWhereUniqueInput;
    create: XOR<AppealCreateWithoutResolutionInput, AppealUncheckedCreateWithoutResolutionInput>;
  };

  export type AppealUpsertWithoutResolutionInput = {
    update: XOR<AppealUpdateWithoutResolutionInput, AppealUncheckedUpdateWithoutResolutionInput>;
    create: XOR<AppealCreateWithoutResolutionInput, AppealUncheckedCreateWithoutResolutionInput>;
    where?: AppealWhereInput;
  };

  export type AppealUpdateToOneWithWhereWithoutResolutionInput = {
    where?: AppealWhereInput;
    data: XOR<AppealUpdateWithoutResolutionInput, AppealUncheckedUpdateWithoutResolutionInput>;
  };

  export type AppealUpdateWithoutResolutionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumAppealStatusFieldUpdateOperationsInput | $Enums.AppealStatus;
    topic?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    cancellation?: AppealCancellationUpdateOneWithoutAppealNestedInput;
  };

  export type AppealUncheckedUpdateWithoutResolutionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumAppealStatusFieldUpdateOperationsInput | $Enums.AppealStatus;
    topic?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    cancellation?: AppealCancellationUncheckedUpdateOneWithoutAppealNestedInput;
  };

  export type AppealCreateWithoutCancellationInput = {
    id?: string;
    createdAt?: Date | string;
    status: $Enums.AppealStatus;
    topic: string;
    description?: string | null;
    resolution?: AppealResolutionCreateNestedOneWithoutAppealInput;
  };

  export type AppealUncheckedCreateWithoutCancellationInput = {
    id?: string;
    createdAt?: Date | string;
    status: $Enums.AppealStatus;
    topic: string;
    description?: string | null;
    resolution?: AppealResolutionUncheckedCreateNestedOneWithoutAppealInput;
  };

  export type AppealCreateOrConnectWithoutCancellationInput = {
    where: AppealWhereUniqueInput;
    create: XOR<
      AppealCreateWithoutCancellationInput,
      AppealUncheckedCreateWithoutCancellationInput
    >;
  };

  export type AppealUpsertWithoutCancellationInput = {
    update: XOR<
      AppealUpdateWithoutCancellationInput,
      AppealUncheckedUpdateWithoutCancellationInput
    >;
    create: XOR<
      AppealCreateWithoutCancellationInput,
      AppealUncheckedCreateWithoutCancellationInput
    >;
    where?: AppealWhereInput;
  };

  export type AppealUpdateToOneWithWhereWithoutCancellationInput = {
    where?: AppealWhereInput;
    data: XOR<AppealUpdateWithoutCancellationInput, AppealUncheckedUpdateWithoutCancellationInput>;
  };

  export type AppealUpdateWithoutCancellationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumAppealStatusFieldUpdateOperationsInput | $Enums.AppealStatus;
    topic?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    resolution?: AppealResolutionUpdateOneWithoutAppealNestedInput;
  };

  export type AppealUncheckedUpdateWithoutCancellationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumAppealStatusFieldUpdateOperationsInput | $Enums.AppealStatus;
    topic?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    resolution?: AppealResolutionUncheckedUpdateOneWithoutAppealNestedInput;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
