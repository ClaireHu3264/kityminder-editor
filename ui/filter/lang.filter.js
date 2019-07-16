angular.module('kityminderEditor')
	.filter('lang', ['kmConfig', 'lang.zh-cn', function(kmConfig, lang) {
		return function(text, block) {
			var defaultLang = kmConfig.get('defaultLang');

			if (lang[defaultLang] == undefined) {
				return '未发现对应语言包，请检查 lang.xxx.service.js!';
			} else {

				var dict = lang[defaultLang];
				block.split('/').forEach(function(ele, idx) {
					dict = dict[ele];
				});

				return dict[text] || null;
			}

		};
	}]);