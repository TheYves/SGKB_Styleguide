$(function () {

	initDocs();

	function initDocs() {
		initHighlightJs();
		initSidebar();
		initScrollspy();
	}

	function initHighlightJs() {
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
	}

	function initScrollspy() {
		$('body').scrollspy({
			target: '.bs-docs-sidebar',
			offset: 40
		});
	}

	function initSidebar() {
		var $menu = $('<ul class="nav nav-stacked fixed"></ul>');

		$('.group').each(function () {
			var $group = $(this);
			var id = $group.attr('id');
			var title = $group.find('> h1, > h2,> h3,> h4,> h5,> h6').first().text();
			var $menuItem = $('<li><a href="#' + id + '">' + title + '</a><ul class="nav nav-stacked"></ul></li>');
			var $menuNav = $menuItem.find('.nav');

			$group.find('.subgroup').each(function () {
				var $subgroup = $(this);
				var id = $subgroup.attr('id');
				var title = $subgroup.find('> h1, > h2,> h3,> h4,> h5,> h6').first().text();
				var $menuSubItem = $('<li><a href="#' + id + '">' + title + '</a></li>');
				$menuNav.append($menuSubItem);
			});

			$menu.append($menuItem);
		});

		$('#sidebar').append($menu);
	}

});
