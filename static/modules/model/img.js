define(function (require, exports, module) {
	var w = ($(window).width() - 6 * 3) / 2;

	var ImageModel = Backbone.Model.extend({
		initialize: function (obj) {
			h = w / obj.width * obj.height;
			this.attributes.viewWidth = w;
			this.attributes.viewHeight = h;
		}
	});
	module.exports = ImageModel;
})