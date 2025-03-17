/**
 * Information about store items.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Catalog_CatalogList_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_location,uid";

  /**
   * A list of all sale items.
   *
   * @get result
   * @type {{}}
   */
  this.a_product = undefined;

  /**
   * List of products to show with duplicates.
   *
   * Products have their own order within every category. On the other hand they can be related to several shop
   * categories. Due to the fact that sorting realization in browser would be rather complicated It was decided to
   * sort products in backend using duplicates for every shop category.
   *
   * @get result
   * @type {{}}
   */
  this.a_product_duplicate = undefined;

  /**
   * `true` to consider the requirement to have a credit card for booking
   * (this requirement can be set in business settings)
   * `false` to ignore it.
   *
   * @get get
   * @type {boolean}
   */
  this.is_credit_card_check = true;

  /**
   * The business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * The key of a location. If `0`, all products in the business are retrieved.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * The key of user.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Catalog_CatalogList_ListModel);

/**
 * @inheritDoc
 */
Wl_Catalog_CatalogList_ListModel.prototype.config=function()
{
  return {"a_field": {"a_product": {"get": {"result": true}},"a_product_duplicate": {"get": {"result": true}},"is_credit_card_check": {"get": {"get": true}},"k_business": {"get": {"get": true}},"k_location": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Catalog_CatalogList_ListModel.instanceGet
 * @param {string} k_business The business key.
 * @param {string} k_location The key of a location. If `0`, all products in the business are retrieved.
 * @param {string} uid The key of user.
 * @returns {Wl_Catalog_CatalogList_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */