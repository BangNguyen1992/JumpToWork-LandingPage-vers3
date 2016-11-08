'use strict';

var myApp = angular.module('myApp', [
    'ui.router'
  ]);
//run.$inject = ['$rootScope'];

//Auto scroll page to top when change state
myApp.run(function ($rootScope) {
	$rootScope.$on('$stateChangeSuccess', function () {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	});
})

myApp.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/home");
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'components/home/homeView.html'
				//            controller:"AdminController"
		})

	.state('team', {
			url: '/team',
			templateUrl: 'components/team/teamView.html'
				//        controller:" "

		})
		.state('reference', {
			url: '/reference',
			templateUrl: 'components/reference/referenceView.html'
				//        controller:" "

		})
		.state('contact', {
			url: '/contact',
			templateUrl: 'components/contact/contactView.html'
				//        controller:" "

		})
		.state('term', {
			url: '/term',
			templateUrl: 'components/term/termView.html'
				//        controller:" "

		});


});