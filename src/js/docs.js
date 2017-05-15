$(function () {

	initDocs();

	function initDocs() {
		// init highlight.js
		$('pre code').each(function (i, block) {
			var $block = $(block);
			var html = $block.html();
			html = html.replace(/^\<\!\-\-\s*/, '');
			html = html.replace(/\-\-\>$/, '');
			html = html.replace(/\<\!\-/g, '<!--');
			html = html.replace(/\-\>/g, '-->');
			var fixed = hljs.fixMarkup(hljs.highlightAuto(html).value);
			$block.html(fixed);
		});

		$('body').scrollspy({
			target: '.bs-docs-sidebar',
			offset: 40
		});
	}

});

