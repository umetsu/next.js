export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Hex: any
  /** Raw JSON value */
  Json: any
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any
  RGBATransparency: any
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any
  RGBAHue: any
  /** Slate-compatible RichText AST */
  RichTextAST: any
}

export type AssetUpdateManyLocalizationInput = {
  fileName: Scalars['String']
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
}

export type AuthorUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AuthorWhereUniqueInput
  /** Document to update */
  data: AuthorUpdateInput
}

/** Stage system enumeration */
export enum Stage {
  /** System Published Stage */
  Published = 'PUBLISHED',
  /** System Draft Stage */
  Draft = 'DRAFT',
}

export type Article = Node & {
  __typename?: 'Article'
  /** System stage field */
  stage: Stage
  /** Get the document in other stages */
  documentInStages: Array<Article>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  title?: Maybe<Scalars['String']>
  slug: Scalars['String']
  date?: Maybe<Scalars['Date']>
  excerpt?: Maybe<Scalars['String']>
  coverImage?: Maybe<Asset>
  content?: Maybe<Scalars['String']>
  tags: Array<Scalars['String']>
  author?: Maybe<Author>
  /** List of Article versions */
  history: Array<Version>
}

export type ArticleDocumentInStagesArgs = {
  stages?: Array<Stage>
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
}

export type ArticleHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: Maybe<Stage>
}

export type AssetUpdateManyInlineInput = {
  /** Create and connect multiple Asset documents */
  create?: Maybe<Array<AssetCreateInput>>
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetConnectInput>>
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: Maybe<Array<AssetWhereUniqueInput>>
  /** Update multiple Asset documents */
  update?: Maybe<Array<AssetUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Asset documents */
  upsert?: Maybe<Array<AssetUpsertWithNestedWhereUniqueInput>>
  /** Disconnect multiple Asset documents */
  disconnect?: Maybe<Array<AssetWhereUniqueInput>>
  /** Delete multiple Asset documents */
  delete?: Maybe<Array<AssetWhereUniqueInput>>
}

/** References Article record uniquely */
export type ArticleWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
  slug?: Maybe<Scalars['String']>
}

export type AssetUpdateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>
  /** Update single Asset document */
  update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>
  /** Upsert single Asset document */
  upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>
  /** Connect existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>
  /** Disconnect currently connected Asset document */
  disconnect?: Maybe<Scalars['Boolean']>
  /** Delete currently connected Asset document */
  delete?: Maybe<Scalars['Boolean']>
}

export type AssetCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  handle: Scalars['String']
  fileName: Scalars['String']
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
  coverImageArticle?: Maybe<ArticleCreateManyInlineInput>
  authorAvatar?: Maybe<AuthorCreateManyInlineInput>
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>
}

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText'
  /** Returns AST representation */
  raw: Scalars['RichTextAST']
  /** Returns HTMl representation */
  html: Scalars['String']
  /** Returns Markdown representation */
  markdown: Scalars['String']
  /** Returns plain-text contents of RichText */
  text: Scalars['String']
}

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  coverImageArticle_every?: Maybe<ArticleWhereInput>
  coverImageArticle_some?: Maybe<ArticleWhereInput>
  coverImageArticle_none?: Maybe<ArticleWhereInput>
  authorAvatar_every?: Maybe<AuthorWhereInput>
  authorAvatar_some?: Maybe<AuthorWhereInput>
  authorAvatar_none?: Maybe<AuthorWhereInput>
}

export type AssetUpdateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** Optional updates to localizations */
  localizations?: Maybe<Array<AssetUpdateManyLocalizationInput>>
}

export type DocumentVersion = {
  __typename?: 'DocumentVersion'
  id: Scalars['ID']
  stage: Stage
  revision: Scalars['Int']
  createdAt: Scalars['DateTime']
  data?: Maybe<Scalars['Json']>
}

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
}

/** Identifies documents */
export type ArticleManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ArticleWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ArticleWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ArticleWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  title?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>
  date?: Maybe<Scalars['Date']>
  /** All values that are not equal to given value. */
  date_not?: Maybe<Scalars['Date']>
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Scalars['Date']>>
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Scalars['Date']>>
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars['Date']>
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars['Date']>
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars['Date']>
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars['Date']>
  excerpt?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  excerpt_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  excerpt_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  excerpt_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  excerpt_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  excerpt_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  excerpt_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  excerpt_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  excerpt_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  excerpt_not_ends_with?: Maybe<Scalars['String']>
  coverImage?: Maybe<AssetWhereInput>
  content?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  content_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  content_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  content_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  content_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  content_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  content_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  content_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  content_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  content_not_ends_with?: Maybe<Scalars['String']>
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  tags?: Maybe<Array<Scalars['String']>>
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  tags_not?: Maybe<Array<Scalars['String']>>
  /** Matches if the field array contains *all* items provided to the filter */
  tags_contains_all?: Maybe<Array<Scalars['String']>>
  /** Matches if the field array contains at least one item provided to the filter */
  tags_contains_some?: Maybe<Array<Scalars['String']>>
  /** Matches if the field array does not contain any of the items provided to the filter */
  tags_contains_none?: Maybe<Array<Scalars['String']>>
  author?: Maybe<AuthorWhereInput>
}

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars['Hex']>
  rgba?: Maybe<RgbaInput>
}

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection'
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges: Array<AssetEdge>
  aggregate: Aggregate
}

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA'
  r: Scalars['RGBAHue']
  g: Scalars['RGBAHue']
  b: Scalars['RGBAHue']
  a: Scalars['RGBATransparency']
}

export type Aggregate = {
  __typename?: 'Aggregate'
  count: Scalars['Int']
}

export type VersionWhereInput = {
  id: Scalars['ID']
  stage: Stage
  revision: Scalars['Int']
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo'
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>
}

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  r: Scalars['RGBAHue']
  g: Scalars['RGBAHue']
  b: Scalars['RGBAHue']
  a: Scalars['RGBATransparency']
}

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars['ID']>
  /** Connect document before specified document */
  before?: Maybe<Scalars['ID']>
  /** Connect document at first position */
  start?: Maybe<Scalars['Boolean']>
  /** Connect document at last position */
  end?: Maybe<Scalars['Boolean']>
}

export type ArticleUpsertInput = {
  /** Create document if it didn't exist */
  create: ArticleCreateInput
  /** Update document if it exists */
  update: ArticleUpdateInput
}

/** An edge in a connection. */
export type AuthorEdge = {
  __typename?: 'AuthorEdge'
  /** The item at the end of the edge. */
  node: Author
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

export type ArticleUpdateOneInlineInput = {
  /** Create and connect one Article document */
  create?: Maybe<ArticleCreateInput>
  /** Update single Article document */
  update?: Maybe<ArticleUpdateWithNestedWhereUniqueInput>
  /** Upsert single Article document */
  upsert?: Maybe<ArticleUpsertWithNestedWhereUniqueInput>
  /** Connect existing Article document */
  connect?: Maybe<ArticleWhereUniqueInput>
  /** Disconnect currently connected Article document */
  disconnect?: Maybe<Scalars['Boolean']>
  /** Delete currently connected Article document */
  delete?: Maybe<Scalars['Boolean']>
}

export type ArticleUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ArticleWhereUniqueInput
  /** Document to update */
  data: ArticleUpdateInput
}

export type AuthorUpsertInput = {
  /** Create document if it didn't exist */
  create: AuthorCreateInput
  /** Update document if it exists */
  update: AuthorUpdateInput
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export type AuthorUpdateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  name?: Maybe<Scalars['String']>
  bibliography?: Maybe<Scalars['String']>
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update',
}

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput
  /** Document to update */
  data: AssetUpdateInput
}

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput
  /** Update document if it exists */
  update: AssetUpdateInput
}

export enum ArticleOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  TagsAsc = 'tags_ASC',
  TagsDesc = 'tags_DESC',
}

export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  handle: Scalars['String']
  fileName: Scalars['String']
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union',
}

export type Version = {
  __typename?: 'Version'
  id: Scalars['ID']
  stage: Stage
  revision: Scalars['Int']
  createdAt: Scalars['DateTime']
}

export type ArticleCreateManyInlineInput = {
  /** Create and connect multiple existing Article documents */
  create?: Maybe<Array<ArticleCreateInput>>
  /** Connect multiple existing Article documents */
  connect?: Maybe<Array<ArticleWhereUniqueInput>>
}

export enum _MutationKind {
  Create = 'create',
  Publish = 'publish',
  Unpublish = 'unpublish',
  Update = 'update',
  Upsert = 'upsert',
  Delete = 'delete',
  UpdateMany = 'updateMany',
  PublishMany = 'publishMany',
  UnpublishMany = 'unpublishMany',
  DeleteMany = 'deleteMany',
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<DocumentFileTypes>
}

export type AuthorCreateOneInlineInput = {
  /** Create and connect one Author document */
  create?: Maybe<AuthorCreateInput>
  /** Connect one existing Author document */
  connect?: Maybe<AuthorWhereUniqueInput>
}

export type ArticleUpdateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  title?: Maybe<Scalars['String']>
  date?: Maybe<Scalars['Date']>
  excerpt?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  tags?: Maybe<Array<Scalars['String']>>
}

export type AssetCreateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>
  /** Connect one existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>
}

export type ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>
}

/** Identifies documents */
export type ArticleWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ArticleWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ArticleWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ArticleWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  title?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>
  date?: Maybe<Scalars['Date']>
  /** All values that are not equal to given value. */
  date_not?: Maybe<Scalars['Date']>
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Scalars['Date']>>
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Scalars['Date']>>
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars['Date']>
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars['Date']>
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars['Date']>
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars['Date']>
  excerpt?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  excerpt_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  excerpt_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  excerpt_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  excerpt_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  excerpt_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  excerpt_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  excerpt_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  excerpt_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  excerpt_not_ends_with?: Maybe<Scalars['String']>
  coverImage?: Maybe<AssetWhereInput>
  content?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  content_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  content_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  content_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  content_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  content_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  content_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  content_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  content_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  content_not_ends_with?: Maybe<Scalars['String']>
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  tags?: Maybe<Array<Scalars['String']>>
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  tags_not?: Maybe<Array<Scalars['String']>>
  /** Matches if the field array contains *all* items provided to the filter */
  tags_contains_all?: Maybe<Array<Scalars['String']>>
  /** Matches if the field array contains at least one item provided to the filter */
  tags_contains_some?: Maybe<Array<Scalars['String']>>
  /** Matches if the field array does not contain any of the items provided to the filter */
  tags_contains_none?: Maybe<Array<Scalars['String']>>
  author?: Maybe<AuthorWhereInput>
}

export type AssetConnectInput = {
  /** Document to connect */
  where: AssetWhereUniqueInput
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>
}

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput
  locale: Locale
}

export type Author = Node & {
  __typename?: 'Author'
  /** System stage field */
  stage: Stage
  /** Get the document in other stages */
  documentInStages: Array<Author>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  name?: Maybe<Scalars['String']>
  picture?: Maybe<Asset>
  bibliography?: Maybe<Scalars['String']>
  posts: Array<Article>
  /** List of Author versions */
  history: Array<Version>
}

export type AuthorDocumentInStagesArgs = {
  stages?: Array<Stage>
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
}

export type AuthorPostsArgs = {
  where?: Maybe<ArticleWhereInput>
  orderBy?: Maybe<ArticleOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type AuthorHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: Maybe<Stage>
}

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color'
  hex: Scalars['Hex']
  rgba: Rgba
  css: Scalars['String']
}

/** Identifies documents */
export type AssetWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  handle?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>
  fileName?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars['String']>
  coverImageArticle_every?: Maybe<ArticleWhereInput>
  coverImageArticle_some?: Maybe<ArticleWhereInput>
  coverImageArticle_none?: Maybe<ArticleWhereInput>
  authorAvatar_every?: Maybe<AuthorWhereInput>
  authorAvatar_some?: Maybe<AuthorWhereInput>
  authorAvatar_none?: Maybe<AuthorWhereInput>
}

export type ArticleCreateOneInlineInput = {
  /** Create and connect one Article document */
  create?: Maybe<ArticleCreateInput>
  /** Connect one existing Article document */
  connect?: Maybe<ArticleWhereUniqueInput>
}

export type AssetUpdateInput = {
  handle?: Maybe<Scalars['String']>
  fileName?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
  coverImageArticle?: Maybe<ArticleUpdateManyInlineInput>
  authorAvatar?: Maybe<AuthorUpdateManyInlineInput>
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>
}

/** References Author record uniquely */
export type AuthorWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  image?: Maybe<ImageTransformationInput>
  document?: Maybe<DocumentTransformationInput>
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>
}

/** An edge in a connection. */
export type ArticleEdge = {
  __typename?: 'ArticleEdge'
  /** The item at the end of the edge. */
  node: Article
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>
}

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput
  locale: Locale
}

/** Identifies documents */
export type AuthorManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AuthorWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AuthorWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AuthorWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  name?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>
  picture?: Maybe<AssetWhereInput>
  bibliography?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  bibliography_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  bibliography_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  bibliography_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  bibliography_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  bibliography_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  bibliography_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  bibliography_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  bibliography_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  bibliography_not_ends_with?: Maybe<Scalars['String']>
  posts_every?: Maybe<ArticleWhereInput>
  posts_some?: Maybe<ArticleWhereInput>
  posts_none?: Maybe<ArticleWhereInput>
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Localization = 'LOCALIZATION',
  Combined = 'COMBINED',
}

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>
}

export type AuthorUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AuthorWhereInput
  /** Update many input */
  data: AuthorUpdateManyInput
}

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']
  longitude: Scalars['Float']
}

export enum _RelationInputCardinality {
  One = 'one',
  Many = 'many',
}

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge'
  /** The item at the end of the edge. */
  node: Asset
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset'
  /** System stage field */
  stage: Stage
  /** System Locale field */
  locale: Locale
  /** Get the other localizations for this document */
  localizations: Array<Asset>
  /** Get the document in other stages */
  documentInStages: Array<Asset>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** The file handle */
  handle: Scalars['String']
  /** The file name */
  fileName: Scalars['String']
  /** The height of the file */
  height?: Maybe<Scalars['Float']>
  /** The file width */
  width?: Maybe<Scalars['Float']>
  /** The file size */
  size?: Maybe<Scalars['Float']>
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>
  coverImageArticle: Array<Article>
  authorAvatar: Array<Author>
  /** List of Asset versions */
  history: Array<Version>
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']
}

/** Asset system model */
export type AssetLocalizationsArgs = {
  locales?: Array<Locale>
  includeCurrent?: Scalars['Boolean']
}

/** Asset system model */
export type AssetDocumentInStagesArgs = {
  stages?: Array<Stage>
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
}

/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetCoverImageArticleArgs = {
  where?: Maybe<ArticleWhereInput>
  orderBy?: Maybe<ArticleOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** Asset system model */
export type AssetAuthorAvatarArgs = {
  where?: Maybe<AuthorWhereInput>
  orderBy?: Maybe<AuthorOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: Maybe<Stage>
}

/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>
}

export type AuthorUpdateManyInlineInput = {
  /** Create and connect multiple Author documents */
  create?: Maybe<Array<AuthorCreateInput>>
  /** Connect multiple existing Author documents */
  connect?: Maybe<Array<AuthorConnectInput>>
  /** Override currently-connected documents with multiple existing Author documents */
  set?: Maybe<Array<AuthorWhereUniqueInput>>
  /** Update multiple Author documents */
  update?: Maybe<Array<AuthorUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Author documents */
  upsert?: Maybe<Array<AuthorUpsertWithNestedWhereUniqueInput>>
  /** Disconnect multiple Author documents */
  disconnect?: Maybe<Array<AuthorWhereUniqueInput>>
  /** Delete multiple Author documents */
  delete?: Maybe<Array<AuthorWhereUniqueInput>>
}

export type AuthorCreateManyInlineInput = {
  /** Create and connect multiple existing Author documents */
  create?: Maybe<Array<AuthorCreateInput>>
  /** Connect multiple existing Author documents */
  connect?: Maybe<Array<AuthorWhereUniqueInput>>
}

export type ArticleUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ArticleWhereInput
  /** Update many input */
  data: ArticleUpdateManyInput
}

export type AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AssetWhereInput
  /** Update many input */
  data: AssetUpdateManyInput
}

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']
  /** The Stage of an object */
  stage: Stage
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Localization = 'localization',
  Combined = 'combined',
}

export type ArticleUpdateInput = {
  title?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  date?: Maybe<Scalars['Date']>
  excerpt?: Maybe<Scalars['String']>
  coverImage?: Maybe<AssetUpdateOneInlineInput>
  content?: Maybe<Scalars['String']>
  tags?: Maybe<Array<Scalars['String']>>
  author?: Maybe<AuthorUpdateOneInlineInput>
}

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

/** Identifies documents */
export type AuthorWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AuthorWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AuthorWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AuthorWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  name?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>
  picture?: Maybe<AssetWhereInput>
  bibliography?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  bibliography_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  bibliography_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  bibliography_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  bibliography_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  bibliography_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  bibliography_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  bibliography_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  bibliography_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  bibliography_not_ends_with?: Maybe<Scalars['String']>
  posts_every?: Maybe<ArticleWhereInput>
  posts_some?: Maybe<ArticleWhereInput>
  posts_none?: Maybe<ArticleWhereInput>
}

export type AuthorUpdateInput = {
  name?: Maybe<Scalars['String']>
  picture?: Maybe<AssetUpdateOneInlineInput>
  bibliography?: Maybe<Scalars['String']>
  posts?: Maybe<ArticleUpdateManyInlineInput>
}

export type BatchPayload = {
  __typename?: 'BatchPayload'
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']
}

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>
}

export enum AuthorOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  BibliographyAsc = 'bibliography_ASC',
  BibliographyDesc = 'bibliography_DESC',
}

export type AuthorUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AuthorWhereUniqueInput
  /** Upsert data */
  data: AuthorUpsertInput
}

export enum DocumentFileTypes {
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Png = 'png',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Docx = 'docx',
  Pdf = 'pdf',
  Html = 'html',
  Doc = 'doc',
  Xlsx = 'xlsx',
  Xls = 'xls',
  Pptx = 'pptx',
  Ppt = 'ppt',
}

export type ArticleConnectInput = {
  /** Document to connect */
  where: ArticleWhereUniqueInput
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>
}

export type AuthorConnectInput = {
  /** Document to connect */
  where: AuthorWhereUniqueInput
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>
}

export type AuthorUpdateOneInlineInput = {
  /** Create and connect one Author document */
  create?: Maybe<AuthorCreateInput>
  /** Update single Author document */
  update?: Maybe<AuthorUpdateWithNestedWhereUniqueInput>
  /** Upsert single Author document */
  upsert?: Maybe<AuthorUpsertWithNestedWhereUniqueInput>
  /** Connect existing Author document */
  connect?: Maybe<AuthorWhereUniqueInput>
  /** Disconnect currently connected Author document */
  disconnect?: Maybe<Scalars['Boolean']>
  /** Delete currently connected Author document */
  delete?: Maybe<Scalars['Boolean']>
}

export enum _FilterKind {
  Search = 'search',
  And = 'AND',
  Or = 'OR',
  Not = 'NOT',
  Eq = 'eq',
  EqNot = 'eq_not',
  In = 'in',
  NotIn = 'not_in',
  Lt = 'lt',
  Lte = 'lte',
  Gt = 'gt',
  Gte = 'gte',
  Contains = 'contains',
  NotContains = 'not_contains',
  StartsWith = 'starts_with',
  NotStartsWith = 'not_starts_with',
  EndsWith = 'ends_with',
  NotEndsWith = 'not_ends_with',
  ContainsAll = 'contains_all',
  ContainsSome = 'contains_some',
  ContainsNone = 'contains_none',
  RelationalSingle = 'relational_single',
  RelationalEvery = 'relational_every',
  RelationalSome = 'relational_some',
  RelationalNone = 'relational_none',
}

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en',
}

export type ArticleCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  title?: Maybe<Scalars['String']>
  slug: Scalars['String']
  date?: Maybe<Scalars['Date']>
  excerpt?: Maybe<Scalars['String']>
  coverImage?: Maybe<AssetCreateOneInlineInput>
  content?: Maybe<Scalars['String']>
  tags?: Maybe<Array<Scalars['String']>>
  author?: Maybe<AuthorCreateOneInlineInput>
}

export type AssetUpdateLocalizationDataInput = {
  handle?: Maybe<Scalars['String']>
  fileName?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location'
  latitude: Scalars['Float']
  longitude: Scalars['Float']
  distance: Scalars['Float']
}

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput
}

export type AuthorCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  name?: Maybe<Scalars['String']>
  picture?: Maybe<AssetCreateOneInlineInput>
  bibliography?: Maybe<Scalars['String']>
  posts?: Maybe<ArticleCreateManyInlineInput>
}

export type ArticleUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ArticleWhereUniqueInput
  /** Upsert data */
  data: ArticleUpsertInput
}

export type ArticleUpdateManyInlineInput = {
  /** Create and connect multiple Article documents */
  create?: Maybe<Array<ArticleCreateInput>>
  /** Connect multiple existing Article documents */
  connect?: Maybe<Array<ArticleConnectInput>>
  /** Override currently-connected documents with multiple existing Article documents */
  set?: Maybe<Array<ArticleWhereUniqueInput>>
  /** Update multiple Article documents */
  update?: Maybe<Array<ArticleUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Article documents */
  upsert?: Maybe<Array<ArticleUpsertWithNestedWhereUniqueInput>>
  /** Disconnect multiple Article documents */
  disconnect?: Maybe<Array<ArticleWhereUniqueInput>>
  /** Delete multiple Article documents */
  delete?: Maybe<Array<ArticleWhereUniqueInput>>
}

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>
}

export type AssetUpsertLocalizationInput = {
  update: AssetUpdateLocalizationDataInput
  create: AssetCreateLocalizationDataInput
  locale: Locale
}

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput
  /** Upsert data */
  data: AssetUpsertInput
}

export type AssetCreateManyInlineInput = {
  /** Create and connect multiple existing Asset documents */
  create?: Maybe<Array<AssetCreateInput>>
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetWhereUniqueInput>>
}

export enum _MutationInputFieldKind {
  Scalar = 'scalar',
  RichText = 'richText',
  Enum = 'enum',
  Relation = 'relation',
  Union = 'union',
  Virtual = 'virtual',
}

export type Query = {
  __typename?: 'Query'
  /** Fetches an object given its ID */
  node?: Maybe<Node>
  /** Retrieve multiple articles */
  articles: Array<Article>
  /** Retrieve a single article */
  article?: Maybe<Article>
  /** Retrieve multiple articles using the Relay connection interface */
  articlesConnection: ArticleConnection
  /** Retrieve document version */
  articleVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple assets */
  assets: Array<Asset>
  /** Retrieve a single asset */
  asset?: Maybe<Asset>
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple authors */
  authors: Array<Author>
  /** Retrieve a single author */
  author?: Maybe<Author>
  /** Retrieve multiple authors using the Relay connection interface */
  authorsConnection: AuthorConnection
  /** Retrieve document version */
  authorVersion?: Maybe<DocumentVersion>
}

export type QueryNodeArgs = {
  id: Scalars['ID']
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryArticlesArgs = {
  where?: Maybe<ArticleWhereInput>
  orderBy?: Maybe<ArticleOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
}

export type QueryArticleArgs = {
  where: ArticleWhereUniqueInput
  stage?: Stage
}

export type QueryArticlesConnectionArgs = {
  where?: Maybe<ArticleWhereInput>
  orderBy?: Maybe<ArticleOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
}

export type QueryArticleVersionArgs = {
  where: VersionWhereInput
}

export type QueryAssetsArgs = {
  where?: Maybe<AssetWhereInput>
  orderBy?: Maybe<AssetOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryAssetArgs = {
  where: AssetWhereUniqueInput
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryAssetsConnectionArgs = {
  where?: Maybe<AssetWhereInput>
  orderBy?: Maybe<AssetOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryAssetVersionArgs = {
  where: VersionWhereInput
}

export type QueryAuthorsArgs = {
  where?: Maybe<AuthorWhereInput>
  orderBy?: Maybe<AuthorOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
}

export type QueryAuthorArgs = {
  where: AuthorWhereUniqueInput
  stage?: Stage
}

export type QueryAuthorsConnectionArgs = {
  where?: Maybe<AuthorWhereInput>
  orderBy?: Maybe<AuthorOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
}

export type QueryAuthorVersionArgs = {
  where: VersionWhereInput
}

export enum AssetOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>
}

/** A connection to a list of items. */
export type ArticleConnection = {
  __typename?: 'ArticleConnection'
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges: Array<ArticleEdge>
  aggregate: Aggregate
}

/** A connection to a list of items. */
export type AuthorConnection = {
  __typename?: 'AuthorConnection'
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges: Array<AuthorEdge>
  aggregate: Aggregate
}

export type Mutation = {
  __typename?: 'Mutation'
  /** Create one article */
  createArticle?: Maybe<Article>
  /** Update one article */
  updateArticle?: Maybe<Article>
  /** Delete one article from _all_ existing stages. Returns deleted document. */
  deleteArticle?: Maybe<Article>
  /** Upsert one article */
  upsertArticle?: Maybe<Article>
  /** Publish one article */
  publishArticle?: Maybe<Article>
  /** Unpublish one article from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishArticle?: Maybe<Article>
  /** Update many articles */
  updateManyArticles: BatchPayload
  /** Delete many Article documents */
  deleteManyArticles: BatchPayload
  /** Publish many Article documents */
  publishManyArticles: BatchPayload
  /** Unpublish many Article documents */
  unpublishManyArticles: BatchPayload
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>
  /** Update one asset */
  updateAsset?: Maybe<Asset>
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>
  /** Publish one asset */
  publishAsset?: Maybe<Asset>
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>
  /** Update many assets */
  updateManyAssets: BatchPayload
  /** Delete many Asset documents */
  deleteManyAssets: BatchPayload
  /** Publish many Asset documents */
  publishManyAssets: BatchPayload
  /** Unpublish many Asset documents */
  unpublishManyAssets: BatchPayload
  /** Create one author */
  createAuthor?: Maybe<Author>
  /** Update one author */
  updateAuthor?: Maybe<Author>
  /** Delete one author from _all_ existing stages. Returns deleted document. */
  deleteAuthor?: Maybe<Author>
  /** Upsert one author */
  upsertAuthor?: Maybe<Author>
  /** Publish one author */
  publishAuthor?: Maybe<Author>
  /** Unpublish one author from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAuthor?: Maybe<Author>
  /** Update many authors */
  updateManyAuthors: BatchPayload
  /** Delete many Author documents */
  deleteManyAuthors: BatchPayload
  /** Publish many Author documents */
  publishManyAuthors: BatchPayload
  /** Unpublish many Author documents */
  unpublishManyAuthors: BatchPayload
}

export type MutationCreateArticleArgs = {
  data: ArticleCreateInput
}

export type MutationUpdateArticleArgs = {
  where: ArticleWhereUniqueInput
  data: ArticleUpdateInput
}

export type MutationDeleteArticleArgs = {
  where: ArticleWhereUniqueInput
}

export type MutationUpsertArticleArgs = {
  where: ArticleWhereUniqueInput
  upsert: ArticleUpsertInput
}

export type MutationPublishArticleArgs = {
  where: ArticleWhereUniqueInput
  to?: Array<Stage>
}

export type MutationUnpublishArticleArgs = {
  where: ArticleWhereUniqueInput
  from?: Array<Stage>
}

export type MutationUpdateManyArticlesArgs = {
  where?: Maybe<ArticleManyWhereInput>
  data: ArticleUpdateManyInput
}

export type MutationDeleteManyArticlesArgs = {
  where?: Maybe<ArticleManyWhereInput>
}

export type MutationPublishManyArticlesArgs = {
  where?: Maybe<ArticleManyWhereInput>
  to?: Array<Stage>
}

export type MutationUnpublishManyArticlesArgs = {
  where?: Maybe<ArticleManyWhereInput>
  from?: Array<Stage>
}

export type MutationCreateAssetArgs = {
  data: AssetCreateInput
}

export type MutationUpdateAssetArgs = {
  where: AssetWhereUniqueInput
  data: AssetUpdateInput
}

export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput
}

export type MutationUpsertAssetArgs = {
  where: AssetWhereUniqueInput
  upsert: AssetUpsertInput
}

export type MutationPublishAssetArgs = {
  where: AssetWhereUniqueInput
  locales?: Maybe<Array<Locale>>
  publishBase?: Maybe<Scalars['Boolean']>
  to?: Array<Stage>
}

export type MutationUnpublishAssetArgs = {
  where: AssetWhereUniqueInput
  from?: Array<Stage>
  locales?: Maybe<Array<Locale>>
  unpublishBase?: Maybe<Scalars['Boolean']>
}

export type MutationUpdateManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>
  data: AssetUpdateManyInput
}

export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>
}

export type MutationPublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>
  to?: Array<Stage>
  locales?: Maybe<Array<Locale>>
  publishBase?: Maybe<Scalars['Boolean']>
}

export type MutationUnpublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>
  from?: Array<Stage>
  locales?: Maybe<Array<Locale>>
  unpublishBase?: Maybe<Scalars['Boolean']>
}

export type MutationCreateAuthorArgs = {
  data: AuthorCreateInput
}

export type MutationUpdateAuthorArgs = {
  where: AuthorWhereUniqueInput
  data: AuthorUpdateInput
}

export type MutationDeleteAuthorArgs = {
  where: AuthorWhereUniqueInput
}

export type MutationUpsertAuthorArgs = {
  where: AuthorWhereUniqueInput
  upsert: AuthorUpsertInput
}

export type MutationPublishAuthorArgs = {
  where: AuthorWhereUniqueInput
  to?: Array<Stage>
}

export type MutationUnpublishAuthorArgs = {
  where: AuthorWhereUniqueInput
  from?: Array<Stage>
}

export type MutationUpdateManyAuthorsArgs = {
  where?: Maybe<AuthorManyWhereInput>
  data: AuthorUpdateManyInput
}

export type MutationDeleteManyAuthorsArgs = {
  where?: Maybe<AuthorManyWhereInput>
}

export type MutationPublishManyAuthorsArgs = {
  where?: Maybe<AuthorManyWhereInput>
  to?: Array<Stage>
}

export type MutationUnpublishManyAuthorsArgs = {
  where?: Maybe<AuthorManyWhereInput>
  from?: Array<Stage>
}

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale
  /** Stages to publish selected locales to */
  stages: Array<Stage>
}

export type ArticlesQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>
}>

export type ArticlesQuery = { __typename?: 'Query' } & {
  articles: Array<
    { __typename?: 'Article' } & Pick<
      Article,
      'id' | 'slug' | 'title' | 'date' | 'content'
    >
  >
}