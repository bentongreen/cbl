module.exports = function(app){
  app.controller('AddSeasonController', ['$scope', 'Resource', '$http', '$cookies', '$location', function($scope, Resource, $http, $cookies, $location){

    var token = $cookies.get('token');
    if (!($cookies.get('token').length))
      $location.path('/signup');

    $http.defaults.headers.common.token = token;

    var season = {
      seasonName: String,
      seasonNumber: Number
    };
    season.seasonName = req.body.name;
    season.seasonNumber = req.body.seasonNumber;
    $scope.season = {};

    var seasonResource = Resource('season'); // may need to change this

    $scope.createSeason = function(){
      seasonResource.create(newSeason, function(err, data){
        if (err) return console.log('AddSeasonController create err ' + err);

        $scope.season.push(data);
      });
    };

    // need to add server routes for future functionality
    $scope.updateSeason = function(){
      seasonResource.update(season, function(err){
        season.editing = false;
        if (err) return console.log('AddSeasonController update err ' + err);
      });
    };

    // need to add server routes for future functionality
    $scope.removeSeason = function(){
      seasonResource.remove(season, function(err){
        if (err) return console.log('AddSeasonController remove err ' + err);
        $scope.season.splice($scope.season.indexOf(season), 1);
      });
    };
  }]);
};
