define(function (require, exports, module) {
	var ImageModel = require('imageModel');
	var ImageCollection = Backbone.Collection.extend({
		model: ImageModel,
		imageId: 0,
		fetchData: function () {
			var me = this;
			$.get('data/imageList.json', function (res) {
				if (res && res.errno === 0) {
					res.data.sort(function () {
						return Math.random() > .5 ? 1 : -1;
					})
					for (var i = 0; i < res.data.length; i++) {
						res.data[i].id = ++me.imageId
					}
					me.add(res.data)
			
				}
			})
		}
	})

	module.exports = ImageCollection;	
})