// Tutorial 7 - Components
//  this file and it's associated html were added in this tutorial in order to
//  break out functionality into components
function AdminContentController(mainSvc){
  var vm = this;

  // mainSvc.getPosts().then(function(response) {
  //   vm.posts = response.data;
  // })

}

app.component('admin', {
  //The below XHR call will result in an error in Chrome unless running chrome
  //  as a live server using 'live-server' command (which is installed with
  //  this -> 'sudo npm install -g live-server') in the terminal from the directory of the Angular app
  templateUrl: 'components/6_admin/admin.html',
  controller: AdminContentController,
  controllerAs: 'AdminConroller'
})
