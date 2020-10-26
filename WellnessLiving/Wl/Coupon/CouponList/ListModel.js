/**
 * Coupon API.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Coupon_CouponList_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = 'k_business';

  /**
   * @typedef {{}} Wl_Coupon_CouponList_ListModel_a_coupon
   * @property {string} k_coupon Coupon key, primary key in {@link \RsCouponSql}.
   * @property {string} text_title Title of coupon.
   */

  /**
   * List of coupons.
   * <dl>
   *   <dt>
   *     string <var>k_coupon</var>
   *   </dt>
   *   <dd>
   *     Coupon key, primary key in {@link \RsCouponSql}.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     Title of coupon.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Coupon_CouponList_ListModel_a_coupon}
   */
  this.a_coupon = undefined;

  /**
   * Class table ID.
   *
   * @get result
   * @type {number}
   */
  this.id_table = undefined;

  /**
   * Business key.
   * Primary key in the {@link \RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Coupon_CouponList_ListModel);

/**
 * @inheritDoc
 */
Wl_Coupon_CouponList_ListModel.prototype.config=function()
{
  return {
    "a_field": {
      "a_coupon": {
        "get": {
          "result": true
        }
      },
      "id_table": {
        "get": {
          "result": true
        }
      },
      "k_business": {
        "get": {
          "get": true
        }
      }
    }
  };
};

/**
 * @function
 * @name Wl_Coupon_CouponList_ListModel.instanceGet
 * @param {string} k_business Business key. Primary key in the {@link \RsBusinessSql} table.
 * @returns {Wl_Coupon_CouponList_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
*/