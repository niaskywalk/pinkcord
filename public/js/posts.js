angular.module("pinkcord-posts",[])
	.directive("posts", function(){
		return {
			restrict: 'E',
			template: '<h1 ng-repeat="post in ctrl.posts">{{post.title}}</h1>',
			controller: ['$http', function($http){
				var vm = this;
				vm.posts = [];
				$http.get('/posts')
				.then(function(data){
					vm.posts = data.data;
					console.log(data);
				});
			}],
			controllerAs: 'ctrl'
		};
	});