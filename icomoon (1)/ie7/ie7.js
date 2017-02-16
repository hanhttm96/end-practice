/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-hyperlink': '&#xe900;',
		'icon-instagram': '&#xe901;',
		'icon-dribbble': '&#xe905;',
		'icon-rss': '&#xf034;',
		'icon-image': '&#xf03e;',
		'icon-photo': '&#xf03e;',
		'icon-picture-o': '&#xf03e;',
		'icon-star-half-empty': '&#xf123;',
		'icon-star-half-full': '&#xf123;',
		'icon-star-half-o': '&#xf123;',
		'icon-lamp': '&#xe908;',
		'icon-atom': '&#xe903;',
		'icon-documents': '&#xe006;',
		'icon-ribbon': '&#xe01e;',
		'icon-display': '&#xe904;',
		'icon-params': '&#xe902;',
		'icon-add': '&#xe145;',
		'icon-navigate_before': '&#xe408;',
		'icon-navigate_next': '&#xe409;',
		'icon-language': '&#xe894;',
		'icon-search': '&#xe8b6;',
		'icon-social-facebook': '&#xe909;',
		'icon-social-vimeo': '&#xe906;',
		'icon-social-linkedin': '&#xe907;',
		'icon-star-outline': '&#xe90e;',
		'icon-google': '&#xe90b;',
		'icon-pinterest': '&#xe90c;',
		'icon-tumblr': '&#xe90a;',
		'icon-twitter': '&#xe90d;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
