(function () {
	'use strict'

	if (window.location.host === 'localhost') return

	// Google Analytics
	var gaId = 'UA-24389952-13'

	function analytics (i, s, o, g, r, a, m) {
		i.GoogleAnalyticsObject = r
		i[r] = i[r] || function () { (i[r].q = i[r].q || []).push(arguments) }
		i[r].l = 1 * new Date()
		a = s.createElement(o)
		m = s.getElementsByTagName(o)[0]
		a.async = 1
		a.src = g
		m.parentNode.insertBefore(a, m)
	}

	analytics(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga')
	ga('create', gaId, 'auto')
	ga('send', 'pageview')

	// Opbeat
	var appId = '39e235ed58'
	var orgId = 'bfc2d2b1867d4ade86c9030c6985cfa2'

	function opbeat (i, s, o, g, r, a, m, n) {
		n = s.createElement(o)
		n.async = 1
		n.src = g
		n.setAttribute('data-org-id', r)
		n.setAttribute('data-app-id', a)
		m = s.getElementsByTagName(o)[document.querySelectorAll(o).length - 1]
		m.parentNode.insertBefore(n, m)
	}

	opbeat(window, document, 'script', 'https://d3tvtfb6518e3e.cloudfront.net/3/opbeat.min.js', orgId, appId)
})()