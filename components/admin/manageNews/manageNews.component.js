function ManageNewsController(mainSvc){
  var news = this;

  mainSvc.getPosts().then(function(response) {
       news.posts = response.data;
  })

}

app.component('manageNews', {
  templateUrl: 'components/admin/manageNews.html',
  controller: ManageNewsController,
  controllerAs: 'news'
})
