/**
 * Retrieves information about a WellnessLiving user.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_User_Info_UserInfoModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business";

  /**
   * @typedef {{}} Wl_User_Info_UserInfoModel_a_custom_field
   * @property {string} k_field Field key.
   * @property {string} text_title Name of the field. Will be <tt>null</tt> for general fields. Their titles are static.
   * @property {string} text_value Value of the field.
   */

  /**
   * List of the custom user fields:<dl>
   *    <dt>string <var>k_field</var></dt>
   *    <dd>Field key.</dd>
   *    <dt>string <var>text_title</var></dt>
   *    <dd>Name of the field. Will be <tt>null</tt> for general fields. Their titles are static.</dd>
   *    <dt>string <var>text_value</var></dt>
   *    <dd>Value of the field.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_User_Info_UserInfoModel_a_custom_field}
   */
  this.a_custom_field = [];

  /**
   * List of member groups that the user belongs to.
   *
   * @get result
   * @type {string[]}
   */
  this.a_member_group = [];

  /**
   * @typedef {{}} Wl_User_Info_UserInfoModel_a_photo
   * @property {number} i_height The height of the photo.
   * @property {number} i_width The width of the photo.
   * @property {string} url_photo The URL of the photo.
   */

  /**
   * Information about the user's photo. The information returned has the following structure:<dl>
   *   <dt>int <var>i_height</var></dt>
   *   <dd>The height of the photo.</dd>
   *
   *   <dt>int <var>i_width</var></dt>
   *   <dd>The width of the photo.</dd>
   *
   *   <dt>string <var>url_photo</var></dt>
   *   <dd>The URL of the photo.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_User_Info_UserInfoModel_a_photo}
   */
  this.a_photo = undefined;

  /**
   * @typedef {{}} Wl_User_Info_UserInfoModel_a_result_list
   * @property {{}} a_member_group List of member groups that the user belongs to.
   * @property {{}} a_photo Information about the user's photo.
   * @property {string} dt_add The date the user was added, given in UTC time.
   * @property {string} dt_birth The user's birthday. This will be `null` if the birthday isn't set yet.
   * @property {number} id_gender The ID of the user's gender. One of the {@link AGenderSid} constants.
   * @property {boolean} is_customer_new This will be `true` if the user has never made purchases or reservations in this business.
   * Otherwise, this will be `false`.
   * @property {boolean} is_traveller This will be `true` if the user is a traveler. A traveler is someone whose home location isn't the current location
   * in the Enterprise business.
   * @property {string} k_business The key of the business.
   * This may be empty if system-wide information is needed.
   * @property {string} k_login_type The key of the login type. The login type describes the user's client type in this business.
   * @property {string} s_first_name The user's first name.
   * @property {string} s_last_name The user's last name.
   * @property {string} s_mail The user's email address.
   * @property {string} s_member The user's member ID in the business. Also referred to as the client ID in the client's profile. This value
   * is set by the business and separate from the <tt>uid</tt> value.
   * @property {string} s_phone The user's phone number.
   * @property {string} s_phone_home The user's home phone number.
   * @property {string} s_phone_work The user's work phone number.
   * @property {string} uid The key of the user.
   * @property {string} url_photo The URL for the user's photo.
   */

  /**
   * List of user's data.
   *
   * <dl>
   *   <dt>array <var>a_custom_field</var></dt>
   *      <dd>List of the custom user fields:<dl>
   *      <dt>string <var>k_field</var></dt>
   *      <dd>Field key. Primary key in {@link \RsFieldSql} table.</dd>
   *      <dt>string <var>text_title</var></dt>
   *      <dd>Name of the field. Will be <tt>null</tt> for general fields. Their titles are static.</dd>
   *      <dt>string <var>text_value</var></dt>
   *      <dd>Value of the field.</dd>
   *   </dl></dd>
   *   <dt>array <var>a_member_group</var></dt>
   *   <dd>List of member groups that the user belongs to.</dd>
   *   <dt>array <var>a_photo</var></dt>
   *   <dd>Information about the user's photo.</dd>
   *   <dt>string <var>dt_add</var></dt>
   *   <dd>The date the user was added, given in UTC time.</dd>
   *   <dt>string <var>dt_birth</var></dt>
   *   <dd>
   *     The user's birthday. This will be `null` if the birthday isn't set yet.
   *   </dd>
   *   <dt>int <var>id_gender</var></dt>
   *   <dd>The ID of the user's gender. One of the {@link AGenderSid} constants.</dd>
   *   <dt>bool <var>is_customer_new</var></dt>
   *   <dd>
   *     This will be `true` if the user has never made purchases or reservations in this business.
   *     Otherwise, this will be `false`.
   *   </dd>
   *   <dt>bool <var>is_traveller</var></dt>
   *   <dd>
   *     This will be `true` if the user is a traveler. A traveler is someone whose home location isn't the current location
   *     in the Enterprise business.
   *   </dd>
   *   <dt>string <var>k_business</var></dt>
   *   <dd>
   *     The key of the business.
   *     This may be empty if system-wide information is needed.
   *   </dd>
   *   <dt>string <var>k_login_type</var></dt>
   *   <dd>The key of the login type. The login type describes the user's client type in this business.</dd>
   *   <dt>string <var>s_first_name</var></dt>
   *   <dd>The user's first name.</dd>
   *   <dt>string <var>s_last_name</var></dt>
   *   <dd>The user's last name.</dd>
   *   <dt>string <var>s_mail</var></dt>
   *   <dd>The user's email address.</dd>
   *   <dt>string <var>s_member</var></dt>
   *   <dd>
   *     The user's member ID in the business. Also referred to as the client ID in the client's profile. This value
   *     is set by the business and separate from the <var>uid</var> value.
   *   </dd>
   *   <dt>string <var>s_phone</var></dt>
   *   <dd>
   *     The user's phone number.
   *   </dd>
   *   <dt>string <var>s_phone_home</var></dt>
   *   <dd>The user's home phone number.</dd>
   *   <dt>string <var>s_phone_work</var></dt>
   *   <dd>The user's work phone number.</dd>
   *   <dt>string <var>uid</var></dt>
   *   <dd>The key of the user.</dd>
   *   <dt>string <var>url_photo</var></dt>
   *   <dd>The URL for the user's photo.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_User_Info_UserInfoModel_a_result_list[]}
   */
  this.a_result_list = undefined;

  /**
   * A list of user keys.
   *
   * @get get
   * @type {string[]}
   */
  this.a_user_list = undefined;

  /**
   * The date the user was added, given in UTC time.
   *
   * @get result
   * @type {string}
   */
  this.dt_add = undefined;

  /**
   * The user's birthday. This will be `null` if the birthday isn't set yet.
   *
   * @get result
   * @type {string}
   */
  this.dt_birth = undefined;

  /**
   * Whether client's login type has a discount.
   * `true` - login type has a discount, `false` - otherwise.
   *
   * This will be `null` if a client has no assigned login type.
   *
   * @get result
   * @type {*}
   */
  this.has_discount = undefined;

  /**
   * The ID of the user's gender. One of the {@link AGenderSid} constants.
   *
   * This will be `null` if the gender isn't set yet.
   *
   * @get result
   * @type {number}
   */
  this.id_gender = undefined;

  /**
   * This will be `true` if the user has never made purchases or reservations in this business.
   * Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_customer_new = undefined;

  /**
   * This will be `true` if the user is a traveler. A traveler is someone whose home location isn't the current location
   * in the Enterprise business.
   *
   * @get result
   * @type {boolean}
   */
  this.is_traveller = undefined;

  /**
   * The key of the business.
   * This may be empty if system-wide information is needed.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * City.
   *
   * `null` if "address" field is disabled in the business.
   *
   * @get result
   * @type {*}
   */
  this.k_city = undefined;

  /**
   * The key of the login type. The login type describes the user's client type in this business.
   *
   * @get result
   * @type {string}
   */
  this.k_login_type = undefined;

  /**
   * The user's first name.
   *
   * @get result
   * @type {string}
   */
  this.s_first_name = undefined;

  /**
   * The user's last name.
   *
   * @get result
   * @type {string}
   */
  this.s_last_name = undefined;

  /**
   * The user's email address.
   *
   * @get result
   * @type {string}
   */
  this.s_mail = undefined;

  /**
   * The user's member ID in the business. Also referred to as the client ID in the client's profile. This value
   * is set by the business and separate from the <var>uid</var> value.
   *
   * @get result
   * @type {string}
   */
  this.s_member = undefined;

  /**
   * The user's phone number.
   *
   * @get result
   * @type {string}
   */
  this.s_phone = undefined;

  /**
   * The user's home phone number.
   *
   * @get result
   * @type {string}
   */
  this.s_phone_home = "";

  /**
   * The user's work phone number.
   *
   * @get result
   * @type {string}
   */
  this.s_phone_work = "";

  /**
   * Address inside a city.
   *
   * `null` if "address" field is disabled in the business.
   *
   * @get result
   * @type {*}
   */
  this.text_address = undefined;

  /**
   * City name.
   *
   * `null` if "address" field is disabled in the business.
   *
   * @get result
   * @type {*}
   */
  this.text_city = undefined;

  /**
   * Login type title.
   * Empty if a client has no client type assigned.
   *
   * @get result
   * @type {string}
   */
  this.text_login_type = "";

  /**
   * Postal code.
   *
   * `null` if "address" field is disabled in the business.
   *
   * @get result
   * @type {*}
   */
  this.text_postal = undefined;

  /**
   * The key of the user.
   *
   * @get get,result
   * @type {string}
   */
  this.uid = "0";

  /**
   * The URL for the user's photo.
   *
   * @get result
   * @type {string}
   */
  this.url_photo = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_User_Info_UserInfoModel);

/**
 * @inheritDoc
 */
Wl_User_Info_UserInfoModel.prototype.config=function()
{
  return {"a_field": {"a_custom_field": {"get": {"result": true}},"a_member_group": {"get": {"result": true}},"a_photo": {"get": {"result": true}},"a_result_list": {"get": {"result": true}},"a_user_list": {"get": {"get": true}},"dt_add": {"get": {"result": true}},"dt_birth": {"get": {"result": true}},"has_discount": {"get": {"result": true}},"id_gender": {"get": {"result": true}},"is_customer_new": {"get": {"result": true}},"is_traveller": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_city": {"get": {"result": true}},"k_login_type": {"get": {"result": true}},"s_first_name": {"get": {"result": true}},"s_last_name": {"get": {"result": true}},"s_mail": {"get": {"result": true}},"s_member": {"get": {"result": true}},"s_phone": {"get": {"result": true}},"s_phone_home": {"get": {"result": true}},"s_phone_work": {"get": {"result": true}},"text_address": {"get": {"result": true}},"text_city": {"get": {"result": true}},"text_login_type": {"get": {"result": true}},"text_postal": {"get": {"result": true}},"uid": {"get": {"get": true,"result": true}},"url_photo": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_User_Info_UserInfoModel.instanceGet
 * @param {string} uid The key of the user.
 * @param {string} k_business The key of the business. This may be empty if system-wide information is needed.
 * @returns {Wl_User_Info_UserInfoModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */