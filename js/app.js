

//'use strict';

var myApp = angular.module('myApp', [
    'ui.router'
  ]);

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
