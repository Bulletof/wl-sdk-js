/**
 * For recurrent class booking returns list of visits to be created for the given settings.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_Frequency_RepeatModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of days of the week to create visits. Each value is a {@link ADateWeekSid} constant.
   *
   * @get get
   * @type {number[]}
   */
  this.a_day = [];

  /**
   * @typedef {{}} Wl_Book_Process_Frequency_RepeatModel_a_visit
   * @property {string} dt_date Visit date and time in UTC.
   * @property {string} dt_local Visit date and time in location's time zone.
   * @property {string} html_short_name_list List of names of the staff who provide this class.
   * @property {string} html_timezone Location's time zone abbreviation.
   * @property {string} is_disable Whether booking is not available for this day.
   * @property {string} is_free Whether booking is free for this day.
   * @property {string} is_ignore Whether visit is from ignore list.
   * @property {string} is_wait Whether booking can be only to wait list.
   * @property {string} k_class_period Key of class period.
   * @property {string} s_alert Staff name if booking available, warning about wait list or disabled booking otherwise.
   * @property {string} s_date Visit date and time in location's time zone in human readable format.
   */

  /**
   * List of visits to be created for the given settings.
   *
   * @get result
   * @type {Wl_Book_Process_Frequency_RepeatModel_a_visit}
   */
  this.a_visit = [];

  /**
   * List of visits to be ignored. Each value is a string consisting of a class period key
   * and a visit date and time in location's timezone, concatenated by two colons. Empty array if no visits
   * should be ignored. Example: ['70::2024-11-05 18:00:00'].
   *
   * @get get
   * @type {string[]}
   */
  this.a_visit_ignore = [];

  /**
   * Date and time of the class, when recurring booking was called, in UTC timezone.
   *
   * @get get
   * @type {string}
   */
  this.dt_date = "";

  /**
   * Date to start recurring booking.
   * Not empty only when {@link Wl_Book_Process_Frequency_RepeatModel.id_repeat_end} == {@link RsRepeatEndSid.DATE}.
   *
   * @get get,result
   * @type {string}
   */
  this.dt_from = "";

  /**
   * Date to finish recurring booking.
   * Not empty only when {@link Wl_Book_Process_Frequency_RepeatModel.id_repeat_end} == {@link RsRepeatEndSid.DATE}.
   *
   * @get get,result
   * @type {string}
   */
  this.dt_to = "";

  /**
   * Count of the visits to be created.
   * Not empty only when {@link Wl_Book_Process_Frequency_RepeatModel.id_repeat_end} == {@link RsRepeatEndSid.COUNT}.
   *
   * @get get,result
   * @type {number}
   */
  this.i_count = 0;

  /**
   * Count of days\weeks\months between recurring bookings.
   *
   * @get get
   * @type {number}
   */
  this.i_duration = 0;

  /**
   * Recurring booking interval, one of {@link ADurationSid} constants.
   *
   * @get get
   * @type {number}
   */
  this.id_duration = 0;

  /**
   * WellnessLiving mode, one of {@link Wl_Mode_ModeSid} constants.
   *
   * @get get
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * Type of repeating, one of {@link RsRepeatEndSid} constants.
   *
   * @get get
   * @type {number}
   */
  this.id_repeat_end = 0;

  /**
   * `true` when cancelling booking, `false` otherwise.
   *
   * @get get
   * @type {boolean}
   */
  this.is_cancel = false;

  /**
   * `true` if current user is not created yet, `false` otherwise.
   *
   * @get get
   * @type {boolean}
   */
  this.is_new_user = false;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Class period key.
   *
   * @get get
   * @type {string}
   */
  this.k_class_period = "";

  /**
   * Encoded list of user keys, who will attend visits.
   *
   * @get get
   * @type {string}
   */
  this.s_uid = "";

  /**
   * Start date of repeatable period in human-readable format.
   *
   * @get result
   * @type {string}
   */
  this.text_date_from = "";

  /**
   * End date of repeatable period in human-readable format.
   *
   * @get result
   * @type {string}
   */
  this.text_date_to = "";

  /**
   * Key of user, who will attend visits.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  /**
   * Key of user, who perform booking.
   *
   * @deprecated Current login user used instead.
   * @get get
   * @type {string}
   */
  this.uid_actor = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Process_Frequency_RepeatModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Frequency_RepeatModel.prototype.config=function()
{
  return {"a_field": {"a_day": {"get": {"get": true}},"a_visit": {"get": {"result": true}},"a_visit_ignore": {"get": {"get": true}},"dt_date": {"get": {"get": true}},"dt_from": {"get": {"get": true,"result": true}},"dt_to": {"get": {"get": true,"result": true}},"i_count": {"get": {"get": true,"result": true}},"i_duration": {"get": {"get": true}},"id_duration": {"get": {"get": true}},"id_mode": {"get": {"get": true}},"id_repeat_end": {"get": {"get": true}},"is_cancel": {"get": {"get": true}},"is_new_user": {"get": {"get": true}},"k_business": {"get": {"get": true}},"k_class_period": {"get": {"get": true}},"s_uid": {"get": {"get": true}},"text_date_from": {"get": {"result": true}},"text_date_to": {"get": {"result": true}},"uid": {"get": {"get": true}},"uid_actor": {"get": {"get": true}}}};
};
