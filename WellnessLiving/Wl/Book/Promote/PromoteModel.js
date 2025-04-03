/**
 * An endpoint that promotes a wait list booking to the attendance list.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Promote_PromoteModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * ID of the source where a visit was promoted, one of {@link Wl_Mode_ModeSid} constants.
   *
   * @post post
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * The business ID.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "0";

  /**
   * The visit ID to promote.
   *
   * @post post
   * @type {string}
   */
  this.k_visit = "0";

  /**
   * The message delivered upon successful promotion.
   *
   * @post result
   * @type {string}
   */
  this.text_message = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Promote_PromoteModel);

/**
 * @inheritDoc
 */
Wl_Book_Promote_PromoteModel.prototype.config=function()
{
  return {"a_field": {"id_mode": {"post": {"post": true}},"k_business": {"post": {"post": true}},"k_visit": {"post": {"post": true}},"text_message": {"post": {"result": true}}}};
};