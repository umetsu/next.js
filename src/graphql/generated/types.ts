export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any
  /** Slate-compatible RichText AST */
  RichTextAST: any
  Hex: any
  RGBATransparency: any
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any
  RGBAHue: any
  /** Raw JSON value */
  Json: any
}

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']
  /** The Stage of an object */
  stage: Stage
}

export type Aggregate = {
  __typename?: 'Aggregate'
  count: Scalars['Int']
}

export type Article = Node & {
  __typename?: 'Article'
  author?: Maybe<Author>
  content?: Maybe<Scalars['String']>
  coverImage?: Maybe<Asset>
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  date?: Maybe<Scalars['Date']>
  /** Get the document in other stages */
  documentInStages: Array<Article>
  excerpt?: Maybe<Scalars['String']>
  /** List of Article versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  slug: Scalars['String']
  /** System stage field */
  stage: Stage
  stringTags: Array<Scalars['String']>
  tags: Array<Tag>
  title?: Maybe<Scalars['String']>
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
}

export type ArticleDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type ArticleHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: Maybe<Stage>
}

/** A connection to a list of items. */
export type ArticleConnection = {
  __typename?: 'ArticleConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ArticleEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An edge in a connection. */
export type ArticleEdge = {
  __typename?: 'ArticleEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Article
}

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset'
  authorAvatar: Array<Author>
  coverImageArticle: Array<Article>
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** Get the document in other stages */
  documentInStages: Array<Asset>
  /** The file name */
  fileName: Scalars['String']
  /** The file handle */
  handle: Scalars['String']
  /** The height of the file */
  height?: Maybe<Scalars['Float']>
  /** List of Asset versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  /** System Locale field */
  locale: Locale
  /** Get the other localizations for this document */
  localizations: Array<Asset>
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** The file size */
  size?: Maybe<Scalars['Float']>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']
  /** The file width */
  width?: Maybe<Scalars['Float']>
}

/** Asset system model */
export type AssetAuthorAvatarArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  orderBy?: Maybe<AuthorOrderByInput>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<AuthorWhereInput>
}

/** Asset system model */
export type AssetCoverImageArticleArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  orderBy?: Maybe<ArticleOrderByInput>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<ArticleWhereInput>
}

/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: Maybe<Stage>
}

/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']
  locales?: Array<Locale>
}

/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>
}

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<AssetEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Asset
}

export type Author = Node & {
  __typename?: 'Author'
  bibliography?: Maybe<Scalars['String']>
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** Get the document in other stages */
  documentInStages: Array<Author>
  /** List of Author versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  picture?: Maybe<Asset>
  posts: Array<Article>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
}

export type AuthorDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type AuthorHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: Maybe<Stage>
}

export type AuthorPostsArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  orderBy?: Maybe<ArticleOrderByInput>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<ArticleWhereInput>
}

/** A connection to a list of items. */
export type AuthorConnection = {
  __typename?: 'AuthorConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<AuthorEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An edge in a connection. */
export type AuthorEdge = {
  __typename?: 'AuthorEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Author
}

export type BatchPayload = {
  __typename?: 'BatchPayload'
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']
}

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color'
  css: Scalars['String']
  hex: Scalars['Hex']
  rgba: Rgba
}

export type DocumentVersion = {
  __typename?: 'DocumentVersion'
  createdAt: Scalars['DateTime']
  data?: Maybe<Scalars['Json']>
  id: Scalars['ID']
  revision: Scalars['Int']
  stage: Stage
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location'
  distance: Scalars['Float']
  latitude: Scalars['Float']
  longitude: Scalars['Float']
}

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput
}

export type Mutation = {
  __typename?: 'Mutation'
  /** Create one article */
  createArticle?: Maybe<Article>
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>
  /** Create one author */
  createAuthor?: Maybe<Author>
  /** Delete one article from _all_ existing stages. Returns deleted document. */
  deleteArticle?: Maybe<Article>
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>
  /** Delete one author from _all_ existing stages. Returns deleted document. */
  deleteAuthor?: Maybe<Author>
  /** Delete many Article documents */
  deleteManyArticles: BatchPayload
  /** Delete many Asset documents */
  deleteManyAssets: BatchPayload
  /** Delete many Author documents */
  deleteManyAuthors: BatchPayload
  /** Publish one article */
  publishArticle?: Maybe<Article>
  /** Publish one asset */
  publishAsset?: Maybe<Asset>
  /** Publish one author */
  publishAuthor?: Maybe<Author>
  /** Publish many Article documents */
  publishManyArticles: BatchPayload
  /** Publish many Asset documents */
  publishManyAssets: BatchPayload
  /** Publish many Author documents */
  publishManyAuthors: BatchPayload
  /** Unpublish one article from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishArticle?: Maybe<Article>
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>
  /** Unpublish one author from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAuthor?: Maybe<Author>
  /** Unpublish many Article documents */
  unpublishManyArticles: BatchPayload
  /** Unpublish many Asset documents */
  unpublishManyAssets: BatchPayload
  /** Unpublish many Author documents */
  unpublishManyAuthors: BatchPayload
  /** Update one article */
  updateArticle?: Maybe<Article>
  /** Update one asset */
  updateAsset?: Maybe<Asset>
  /** Update one author */
  updateAuthor?: Maybe<Author>
  /** Update many articles */
  updateManyArticles: BatchPayload
  /** Update many assets */
  updateManyAssets: BatchPayload
  /** Update many authors */
  updateManyAuthors: BatchPayload
  /** Upsert one article */
  upsertArticle?: Maybe<Article>
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>
  /** Upsert one author */
  upsertAuthor?: Maybe<Author>
}

export type MutationCreateArticleArgs = {
  data: ArticleCreateInput
}

export type MutationCreateAssetArgs = {
  data: AssetCreateInput
}

export type MutationCreateAuthorArgs = {
  data: AuthorCreateInput
}

export type MutationDeleteArticleArgs = {
  where: ArticleWhereUniqueInput
}

export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput
}

export type MutationDeleteAuthorArgs = {
  where: AuthorWhereUniqueInput
}

export type MutationDeleteManyArticlesArgs = {
  where?: Maybe<ArticleManyWhereInput>
}

export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>
}

export type MutationDeleteManyAuthorsArgs = {
  where?: Maybe<AuthorManyWhereInput>
}

export type MutationPublishArticleArgs = {
  to?: Array<Stage>
  where: ArticleWhereUniqueInput
}

export type MutationPublishAssetArgs = {
  locales?: Maybe<Array<Locale>>
  publishBase?: Maybe<Scalars['Boolean']>
  to?: Array<Stage>
  where: AssetWhereUniqueInput
}

export type MutationPublishAuthorArgs = {
  to?: Array<Stage>
  where: AuthorWhereUniqueInput
}

export type MutationPublishManyArticlesArgs = {
  to?: Array<Stage>
  where?: Maybe<ArticleManyWhereInput>
}

export type MutationPublishManyAssetsArgs = {
  locales?: Maybe<Array<Locale>>
  publishBase?: Maybe<Scalars['Boolean']>
  to?: Array<Stage>
  where?: Maybe<AssetManyWhereInput>
}

export type MutationPublishManyAuthorsArgs = {
  to?: Array<Stage>
  where?: Maybe<AuthorManyWhereInput>
}

export type MutationUnpublishArticleArgs = {
  from?: Array<Stage>
  where: ArticleWhereUniqueInput
}

export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>
  locales?: Maybe<Array<Locale>>
  unpublishBase?: Maybe<Scalars['Boolean']>
  where: AssetWhereUniqueInput
}

export type MutationUnpublishAuthorArgs = {
  from?: Array<Stage>
  where: AuthorWhereUniqueInput
}

export type MutationUnpublishManyArticlesArgs = {
  from?: Array<Stage>
  where?: Maybe<ArticleManyWhereInput>
}

export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>
  locales?: Maybe<Array<Locale>>
  unpublishBase?: Maybe<Scalars['Boolean']>
  where?: Maybe<AssetManyWhereInput>
}

export type MutationUnpublishManyAuthorsArgs = {
  from?: Array<Stage>
  where?: Maybe<AuthorManyWhereInput>
}

export type MutationUpdateArticleArgs = {
  data: ArticleUpdateInput
  where: ArticleWhereUniqueInput
}

export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput
  where: AssetWhereUniqueInput
}

export type MutationUpdateAuthorArgs = {
  data: AuthorUpdateInput
  where: AuthorWhereUniqueInput
}

export type MutationUpdateManyArticlesArgs = {
  data: ArticleUpdateManyInput
  where?: Maybe<ArticleManyWhereInput>
}

export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput
  where?: Maybe<AssetManyWhereInput>
}

export type MutationUpdateManyAuthorsArgs = {
  data: AuthorUpdateManyInput
  where?: Maybe<AuthorManyWhereInput>
}

export type MutationUpsertArticleArgs = {
  upsert: ArticleUpsertInput
  where: ArticleWhereUniqueInput
}

export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput
  where: AssetWhereUniqueInput
}

export type MutationUpsertAuthorArgs = {
  upsert: AuthorUpsertInput
  where: AuthorWhereUniqueInput
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo'
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  /** Retrieve a single article */
  article?: Maybe<Article>
  /** Retrieve document version */
  articleVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple articles */
  articles: Array<Article>
  /** Retrieve multiple articles using the Relay connection interface */
  articlesConnection: ArticleConnection
  /** Retrieve a single asset */
  asset?: Maybe<Asset>
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple assets */
  assets: Array<Asset>
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection
  /** Retrieve a single author */
  author?: Maybe<Author>
  /** Retrieve document version */
  authorVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple authors */
  authors: Array<Author>
  /** Retrieve multiple authors using the Relay connection interface */
  authorsConnection: AuthorConnection
  /** Fetches an object given its ID */
  node?: Maybe<Node>
}

export type QueryArticleArgs = {
  stage?: Stage
  where: ArticleWhereUniqueInput
}

export type QueryArticleVersionArgs = {
  where: VersionWhereInput
}

export type QueryArticlesArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  orderBy?: Maybe<ArticleOrderByInput>
  skip?: Maybe<Scalars['Int']>
  stage?: Stage
  where?: Maybe<ArticleWhereInput>
}

export type QueryArticlesConnectionArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  orderBy?: Maybe<ArticleOrderByInput>
  skip?: Maybe<Scalars['Int']>
  stage?: Stage
  where?: Maybe<ArticleWhereInput>
}

export type QueryAssetArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: AssetWhereUniqueInput
}

export type QueryAssetVersionArgs = {
  where: VersionWhereInput
}

export type QueryAssetsArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: Maybe<AssetOrderByInput>
  skip?: Maybe<Scalars['Int']>
  stage?: Stage
  where?: Maybe<AssetWhereInput>
}

export type QueryAssetsConnectionArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: Maybe<AssetOrderByInput>
  skip?: Maybe<Scalars['Int']>
  stage?: Stage
  where?: Maybe<AssetWhereInput>
}

export type QueryAuthorArgs = {
  stage?: Stage
  where: AuthorWhereUniqueInput
}

export type QueryAuthorVersionArgs = {
  where: VersionWhereInput
}

export type QueryAuthorsArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  orderBy?: Maybe<AuthorOrderByInput>
  skip?: Maybe<Scalars['Int']>
  stage?: Stage
  where?: Maybe<AuthorWhereInput>
}

export type QueryAuthorsConnectionArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  orderBy?: Maybe<AuthorOrderByInput>
  skip?: Maybe<Scalars['Int']>
  stage?: Stage
  where?: Maybe<AuthorWhereInput>
}

export type QueryNodeArgs = {
  id: Scalars['ID']
  locales?: Array<Locale>
  stage?: Stage
}

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA'
  a: Scalars['RGBATransparency']
  b: Scalars['RGBAHue']
  g: Scalars['RGBAHue']
  r: Scalars['RGBAHue']
}

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText'
  /** Returns HTMl representation */
  html: Scalars['String']
  /** Returns Markdown representation */
  markdown: Scalars['String']
  /** Returns AST representation */
  raw: Scalars['RichTextAST']
  /** Returns plain-text contents of RichText */
  text: Scalars['String']
}

export type Version = {
  __typename?: 'Version'
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  revision: Scalars['Int']
  stage: Stage
}

export enum ArticleOrderByInput {
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StringTagsAsc = 'stringTags_ASC',
  StringTagsDesc = 'stringTags_DESC',
  TagsAsc = 'tags_ASC',
  TagsDesc = 'tags_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
}

export enum AuthorOrderByInput {
  BibliographyAsc = 'bibliography_ASC',
  BibliographyDesc = 'bibliography_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx',
}

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
}

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en',
}

/** Stage system enumeration */
export enum Stage {
  /** System Draft Stage */
  Draft = 'DRAFT',
  /** System Published Stage */
  Published = 'PUBLISHED',
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION',
}

export enum Tag {
  GraphQl = 'GraphQL',
  React = 'React',
}

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual',
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert',
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one',
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update',
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union',
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization',
}

export type ArticleConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>
  /** Document to connect */
  where: ArticleWhereUniqueInput
}

export type ArticleCreateInput = {
  author?: Maybe<AuthorCreateOneInlineInput>
  content?: Maybe<Scalars['String']>
  coverImage?: Maybe<AssetCreateOneInlineInput>
  createdAt?: Maybe<Scalars['DateTime']>
  date?: Maybe<Scalars['Date']>
  excerpt?: Maybe<Scalars['String']>
  slug: Scalars['String']
  stringTags?: Maybe<Array<Scalars['String']>>
  tags?: Maybe<Array<Tag>>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type ArticleCreateManyInlineInput = {
  /** Connect multiple existing Article documents */
  connect?: Maybe<Array<ArticleWhereUniqueInput>>
  /** Create and connect multiple existing Article documents */
  create?: Maybe<Array<ArticleCreateInput>>
}

export type ArticleCreateOneInlineInput = {
  /** Connect one existing Article document */
  connect?: Maybe<ArticleWhereUniqueInput>
  /** Create and connect one Article document */
  create?: Maybe<ArticleCreateInput>
}

/** Identifies documents */
export type ArticleManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ArticleWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ArticleWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ArticleWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  author?: Maybe<AuthorWhereInput>
  content?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  content_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  content_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  content_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  content_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  content_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  content_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  content_not_in?: Maybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  content_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  content_starts_with?: Maybe<Scalars['String']>
  coverImage?: Maybe<AssetWhereInput>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  date?: Maybe<Scalars['Date']>
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars['Date']>
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars['Date']>
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Scalars['Date']>>
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars['Date']>
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars['Date']>
  /** All values that are not equal to given value. */
  date_not?: Maybe<Scalars['Date']>
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Scalars['Date']>>
  excerpt?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  excerpt_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  excerpt_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  excerpt_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  excerpt_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  excerpt_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  excerpt_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  excerpt_not_in?: Maybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  excerpt_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  excerpt_starts_with?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  slug?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  stringTags?: Maybe<Array<Scalars['String']>>
  /** Matches if the field array contains *all* items provided to the filter */
  stringTags_contains_all?: Maybe<Array<Scalars['String']>>
  /** Matches if the field array does not contain any of the items provided to the filter */
  stringTags_contains_none?: Maybe<Array<Scalars['String']>>
  /** Matches if the field array contains at least one item provided to the filter */
  stringTags_contains_some?: Maybe<Array<Scalars['String']>>
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  stringTags_not?: Maybe<Array<Scalars['String']>>
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  tags?: Maybe<Array<Tag>>
  /** Matches if the field array contains *all* items provided to the filter */
  tags_contains_all?: Maybe<Array<Tag>>
  /** Matches if the field array does not contain any of the items provided to the filter */
  tags_contains_none?: Maybe<Array<Tag>>
  /** Matches if the field array contains at least one item provided to the filter */
  tags_contains_some?: Maybe<Array<Tag>>
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  tags_not?: Maybe<Array<Tag>>
  title?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
}

export type ArticleUpdateInput = {
  author?: Maybe<AuthorUpdateOneInlineInput>
  content?: Maybe<Scalars['String']>
  coverImage?: Maybe<AssetUpdateOneInlineInput>
  date?: Maybe<Scalars['Date']>
  excerpt?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  stringTags?: Maybe<Array<Scalars['String']>>
  tags?: Maybe<Array<Tag>>
  title?: Maybe<Scalars['String']>
}

export type ArticleUpdateManyInlineInput = {
  /** Connect multiple existing Article documents */
  connect?: Maybe<Array<ArticleConnectInput>>
  /** Create and connect multiple Article documents */
  create?: Maybe<Array<ArticleCreateInput>>
  /** Delete multiple Article documents */
  delete?: Maybe<Array<ArticleWhereUniqueInput>>
  /** Disconnect multiple Article documents */
  disconnect?: Maybe<Array<ArticleWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Article documents */
  set?: Maybe<Array<ArticleWhereUniqueInput>>
  /** Update multiple Article documents */
  update?: Maybe<Array<ArticleUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Article documents */
  upsert?: Maybe<Array<ArticleUpsertWithNestedWhereUniqueInput>>
}

export type ArticleUpdateManyInput = {
  content?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  date?: Maybe<Scalars['Date']>
  excerpt?: Maybe<Scalars['String']>
  stringTags?: Maybe<Array<Scalars['String']>>
  tags?: Maybe<Array<Tag>>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type ArticleUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ArticleUpdateManyInput
  /** Document search */
  where: ArticleWhereInput
}

export type ArticleUpdateOneInlineInput = {
  /** Connect existing Article document */
  connect?: Maybe<ArticleWhereUniqueInput>
  /** Create and connect one Article document */
  create?: Maybe<ArticleCreateInput>
  /** Delete currently connected Article document */
  delete?: Maybe<Scalars['Boolean']>
  /** Disconnect currently connected Article document */
  disconnect?: Maybe<Scalars['Boolean']>
  /** Update single Article document */
  update?: Maybe<ArticleUpdateWithNestedWhereUniqueInput>
  /** Upsert single Article document */
  upsert?: Maybe<ArticleUpsertWithNestedWhereUniqueInput>
}

export type ArticleUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ArticleUpdateInput
  /** Unique document search */
  where: ArticleWhereUniqueInput
}

export type ArticleUpsertInput = {
  /** Create document if it didn't exist */
  create: ArticleCreateInput
  /** Update document if it exists */
  update: ArticleUpdateInput
}

export type ArticleUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ArticleUpsertInput
  /** Unique document search */
  where: ArticleWhereUniqueInput
}

/** Identifies documents */
export type ArticleWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ArticleWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ArticleWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ArticleWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  author?: Maybe<AuthorWhereInput>
  content?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  content_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  content_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  content_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  content_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  content_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  content_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  content_not_in?: Maybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  content_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  content_starts_with?: Maybe<Scalars['String']>
  coverImage?: Maybe<AssetWhereInput>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  date?: Maybe<Scalars['Date']>
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars['Date']>
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars['Date']>
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Scalars['Date']>>
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars['Date']>
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars['Date']>
  /** All values that are not equal to given value. */
  date_not?: Maybe<Scalars['Date']>
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Scalars['Date']>>
  excerpt?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  excerpt_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  excerpt_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  excerpt_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  excerpt_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  excerpt_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  excerpt_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  excerpt_not_in?: Maybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  excerpt_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  excerpt_starts_with?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  slug?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  stringTags?: Maybe<Array<Scalars['String']>>
  /** Matches if the field array contains *all* items provided to the filter */
  stringTags_contains_all?: Maybe<Array<Scalars['String']>>
  /** Matches if the field array does not contain any of the items provided to the filter */
  stringTags_contains_none?: Maybe<Array<Scalars['String']>>
  /** Matches if the field array contains at least one item provided to the filter */
  stringTags_contains_some?: Maybe<Array<Scalars['String']>>
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  stringTags_not?: Maybe<Array<Scalars['String']>>
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  tags?: Maybe<Array<Tag>>
  /** Matches if the field array contains *all* items provided to the filter */
  tags_contains_all?: Maybe<Array<Tag>>
  /** Matches if the field array does not contain any of the items provided to the filter */
  tags_contains_none?: Maybe<Array<Tag>>
  /** Matches if the field array contains at least one item provided to the filter */
  tags_contains_some?: Maybe<Array<Tag>>
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  tags_not?: Maybe<Array<Tag>>
  title?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
}

/** References Article record uniquely */
export type ArticleWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
  slug?: Maybe<Scalars['String']>
}

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>
  /** Document to connect */
  where: AssetWhereUniqueInput
}

export type AssetCreateInput = {
  authorAvatar?: Maybe<AuthorCreateManyInlineInput>
  coverImageArticle?: Maybe<ArticleCreateManyInlineInput>
  createdAt?: Maybe<Scalars['DateTime']>
  fileName: Scalars['String']
  handle: Scalars['String']
  height?: Maybe<Scalars['Float']>
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>
  mimeType?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Float']>
  updatedAt?: Maybe<Scalars['DateTime']>
  width?: Maybe<Scalars['Float']>
}

export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  fileName: Scalars['String']
  handle: Scalars['String']
  height?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Float']>
  updatedAt?: Maybe<Scalars['DateTime']>
  width?: Maybe<Scalars['Float']>
}

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput
  locale: Locale
}

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>
}

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetWhereUniqueInput>>
  /** Create and connect multiple existing Asset documents */
  create?: Maybe<Array<AssetCreateInput>>
}

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>
}

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  authorAvatar_every?: Maybe<AuthorWhereInput>
  authorAvatar_none?: Maybe<AuthorWhereInput>
  authorAvatar_some?: Maybe<AuthorWhereInput>
  coverImageArticle_every?: Maybe<ArticleWhereInput>
  coverImageArticle_none?: Maybe<ArticleWhereInput>
  coverImageArticle_some?: Maybe<ArticleWhereInput>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: Maybe<DocumentTransformationInput>
  image?: Maybe<ImageTransformationInput>
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>
}

export type AssetUpdateInput = {
  authorAvatar?: Maybe<AuthorUpdateManyInlineInput>
  coverImageArticle?: Maybe<ArticleUpdateManyInlineInput>
  fileName?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>
  mimeType?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type AssetUpdateLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput
  locale: Locale
}

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>
}

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetConnectInput>>
  /** Create and connect multiple Asset documents */
  create?: Maybe<Array<AssetCreateInput>>
  /** Delete multiple Asset documents */
  delete?: Maybe<Array<AssetWhereUniqueInput>>
  /** Disconnect multiple Asset documents */
  disconnect?: Maybe<Array<AssetWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: Maybe<Array<AssetWhereUniqueInput>>
  /** Update multiple Asset documents */
  update?: Maybe<Array<AssetUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Asset documents */
  upsert?: Maybe<Array<AssetUpsertWithNestedWhereUniqueInput>>
}

export type AssetUpdateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  /** Optional updates to localizations */
  localizations?: Maybe<Array<AssetUpdateManyLocalizationInput>>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type AssetUpdateManyLocalizationInput = {
  fileName: Scalars['String']
  height?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput
  /** Document search */
  where: AssetWhereInput
}

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>
  /** Delete currently connected Asset document */
  delete?: Maybe<Scalars['Boolean']>
  /** Disconnect currently connected Asset document */
  disconnect?: Maybe<Scalars['Boolean']>
  /** Update single Asset document */
  update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>
  /** Upsert single Asset document */
  upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>
}

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput
  /** Unique document search */
  where: AssetWhereUniqueInput
}

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput
  /** Update document if it exists */
  update: AssetUpdateInput
}

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput
  locale: Locale
  update: AssetUpdateLocalizationDataInput
}

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput
  /** Unique document search */
  where: AssetWhereUniqueInput
}

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  authorAvatar_every?: Maybe<AuthorWhereInput>
  authorAvatar_none?: Maybe<AuthorWhereInput>
  authorAvatar_some?: Maybe<AuthorWhereInput>
  coverImageArticle_every?: Maybe<ArticleWhereInput>
  coverImageArticle_none?: Maybe<ArticleWhereInput>
  coverImageArticle_some?: Maybe<ArticleWhereInput>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  fileName?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  mimeType?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  size?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  width?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>
}

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

export type AuthorConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>
  /** Document to connect */
  where: AuthorWhereUniqueInput
}

export type AuthorCreateInput = {
  bibliography?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  name?: Maybe<Scalars['String']>
  picture?: Maybe<AssetCreateOneInlineInput>
  posts?: Maybe<ArticleCreateManyInlineInput>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type AuthorCreateManyInlineInput = {
  /** Connect multiple existing Author documents */
  connect?: Maybe<Array<AuthorWhereUniqueInput>>
  /** Create and connect multiple existing Author documents */
  create?: Maybe<Array<AuthorCreateInput>>
}

export type AuthorCreateOneInlineInput = {
  /** Connect one existing Author document */
  connect?: Maybe<AuthorWhereUniqueInput>
  /** Create and connect one Author document */
  create?: Maybe<AuthorCreateInput>
}

/** Identifies documents */
export type AuthorManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AuthorWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AuthorWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AuthorWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  bibliography?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  bibliography_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  bibliography_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  bibliography_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  bibliography_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  bibliography_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  bibliography_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  bibliography_not_in?: Maybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  bibliography_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  bibliography_starts_with?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>
  picture?: Maybe<AssetWhereInput>
  posts_every?: Maybe<ArticleWhereInput>
  posts_none?: Maybe<ArticleWhereInput>
  posts_some?: Maybe<ArticleWhereInput>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
}

export type AuthorUpdateInput = {
  bibliography?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  picture?: Maybe<AssetUpdateOneInlineInput>
  posts?: Maybe<ArticleUpdateManyInlineInput>
}

export type AuthorUpdateManyInlineInput = {
  /** Connect multiple existing Author documents */
  connect?: Maybe<Array<AuthorConnectInput>>
  /** Create and connect multiple Author documents */
  create?: Maybe<Array<AuthorCreateInput>>
  /** Delete multiple Author documents */
  delete?: Maybe<Array<AuthorWhereUniqueInput>>
  /** Disconnect multiple Author documents */
  disconnect?: Maybe<Array<AuthorWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Author documents */
  set?: Maybe<Array<AuthorWhereUniqueInput>>
  /** Update multiple Author documents */
  update?: Maybe<Array<AuthorUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Author documents */
  upsert?: Maybe<Array<AuthorUpsertWithNestedWhereUniqueInput>>
}

export type AuthorUpdateManyInput = {
  bibliography?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  name?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type AuthorUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AuthorUpdateManyInput
  /** Document search */
  where: AuthorWhereInput
}

export type AuthorUpdateOneInlineInput = {
  /** Connect existing Author document */
  connect?: Maybe<AuthorWhereUniqueInput>
  /** Create and connect one Author document */
  create?: Maybe<AuthorCreateInput>
  /** Delete currently connected Author document */
  delete?: Maybe<Scalars['Boolean']>
  /** Disconnect currently connected Author document */
  disconnect?: Maybe<Scalars['Boolean']>
  /** Update single Author document */
  update?: Maybe<AuthorUpdateWithNestedWhereUniqueInput>
  /** Upsert single Author document */
  upsert?: Maybe<AuthorUpsertWithNestedWhereUniqueInput>
}

export type AuthorUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AuthorUpdateInput
  /** Unique document search */
  where: AuthorWhereUniqueInput
}

export type AuthorUpsertInput = {
  /** Create document if it didn't exist */
  create: AuthorCreateInput
  /** Update document if it exists */
  update: AuthorUpdateInput
}

export type AuthorUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AuthorUpsertInput
  /** Unique document search */
  where: AuthorWhereUniqueInput
}

/** Identifies documents */
export type AuthorWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AuthorWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AuthorWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AuthorWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  bibliography?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  bibliography_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  bibliography_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  bibliography_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  bibliography_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  bibliography_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  bibliography_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  bibliography_not_in?: Maybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  bibliography_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  bibliography_starts_with?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  id?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>
  picture?: Maybe<AssetWhereInput>
  posts_every?: Maybe<ArticleWhereInput>
  posts_none?: Maybe<ArticleWhereInput>
  posts_some?: Maybe<ArticleWhereInput>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
}

/** References Author record uniquely */
export type AuthorWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars['Hex']>
  rgba?: Maybe<RgbaInput>
}

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars['ID']>
  /** Connect document before specified document */
  before?: Maybe<Scalars['ID']>
  /** Connect document at last position */
  end?: Maybe<Scalars['Boolean']>
  /** Connect document at first position */
  start?: Maybe<Scalars['Boolean']>
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:    jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:    docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:    doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:    doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:    jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:    jpg, pdf, ods, png, svg, xls, and webp
   * ODS:    jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:    jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:    jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:    jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:    jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:    jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:    jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:    jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:    jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:        jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:    jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:    jpg, odp, ods, odt, pdf, png, and webp
   * HTML:    jpg, odt, pdf, svg, txt, and webp
   * TXT:    jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<DocumentFileTypes>
}

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>
}

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>
}

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']
  longitude: Scalars['Float']
}

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale
  /** Stages to publish selected locales to */
  stages: Array<Stage>
}

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency']
  b: Scalars['RGBAHue']
  g: Scalars['RGBAHue']
  r: Scalars['RGBAHue']
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>
}

export type VersionWhereInput = {
  id: Scalars['ID']
  revision: Scalars['Int']
  stage: Stage
}

export type ArticleSlugsQueryVariables = Exact<{ [key: string]: never }>

export type ArticleSlugsQuery = { __typename?: 'Query' } & {
  articles: Array<{ __typename?: 'Article' } & Pick<Article, 'slug'>>
}

export type ArticleQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>
}>

export type ArticleQuery = { __typename?: 'Query' } & {
  article?: Maybe<
    { __typename?: 'Article' } & Pick<
      Article,
      'id' | 'slug' | 'title' | 'date' | 'tags' | 'excerpt' | 'content'
    > & {
        coverImage?: Maybe<
          { __typename?: 'Asset' } & Pick<Asset, 'url' | 'width' | 'height'>
        >
      }
  >
}

export type ArticlesQueryVariables = Exact<{ [key: string]: never }>

export type ArticlesQuery = { __typename?: 'Query' } & {
  articles: Array<
    { __typename?: 'Article' } & Pick<Article, 'id' | 'slug' | 'title' | 'date'>
  >
}
