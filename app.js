var app = angular.module('taclApp', ['ui.router']);

app.controller('mainCtrl', function(mainSvc) {
  this.hello = 'world';

  this.fruits = ['apple', 'orange', 'grape'];
  this.alertMe = function(){
    alert('something');
  }
  var vm = this;

  mainSvc.getPosts().then(response => {
    this.completePosts = response.data;
  })
  mainSvc.getPosts().then(response => {
    this.incompletePosts = response.data.splice(0, 50);
    this.completePosts = response.data;
  })
});

app.filter('makePlural', function(){
  return function(input) {
    return input + "s";
  }
})
//Tutorial 6 - Services
app.service('mainSvc', function($http) {
  this.getPosts = function() {
    return $http.get('https://jsonplaceholder.typicode.com/posts');
  }
})

// Tutorial 6 - Same functionality, but as a factory
// app.factory('mainSvc', function($http) {
//   var getPosts = function() {
//     return $http.get('https://jsonplaceholder.typicode.com/posts');
//   }
//   return{
//     getPosts: getPosts
//   }
// })
app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/components/home/home.html'
    })
    .state('sessions', {
      url: '/sessions',
      templateUrl: '/components/sessions/sessions.html'
    })
    .state('transdocs', {
      url: '/transition-docs',
      templateUrl: '/components/transitionDocuments/transitionDocuments.html'
    })
    .state('vmet', {
      url: '/vmet',
      templateUrl: '/components/vmet/vmet.html'
    })
    .state('reports', {
      url: '/reports',
      templateUrl: '/components/reports/reports.html'
    })
    .state('personSearch', {
      url: '/personSearch',
      templateUrl: '/components/personSearch/personSearch.html'
    })
    .state('admin', {
      url: '/admin',
      templateUrl: '/components/admin/admin.html'
    })
    .state('manageNews', {
      url: '/admin/manageNews',
      templateUrl: '/components/admin/manageNews.html'
    })
    .state('cronStatic', {
      url: '/admin/cronStatic',
      templateUrl: '/components/admin/cronStatic.html'
    })



    // Tutorial 9 - replaced with ui-view version below
    // .state('posts', {
    //   url: '/posts',
    //   template: '<posts-list></posts-list>'
    // })
    .state('posts', {
      url: '/posts',
      template: '<ui-view></ui-view>'
    })
    .state('posts.incomplete', {
      url: '/incomplete',
      template: '<posts-list posts="vm.incompletePosts"></posts-list>',
      controllerAs: 'vm'
    })
    .state('posts.complete', {
      url: '/complete',
      template: '<posts-list posts="vm.completePosts"></posts-list>',
      controllerAs: 'vm'
    })
})
