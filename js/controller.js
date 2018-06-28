var app = angular.module("mainApp",[]);

app.controller("crudController", function($scope, $http){

	$http.get('https://jointhecrew.in/api/txns/priya@gmail.com')
	.then(function (response){
		$scope.userList = response.data;
	})


	$scope.userList=[];

	$scope.addData=function(){

		var post = $http({
			method: "POST",
			url: "https://jointhecrew.in/api/txns/priya@gmail.com",
			dataType: 'json',
			data: { id: $scope.id, user:$scope.user, amount:$scope.amount, currency:$scope.currency, txn_date:$scope.txn_date},
			headers: { "Content-Type": "application/json" }
		});
    // $scope.userList.push(user); //Push the user object to array
     clearModel(); //Reset all values to default
 };

 $scope.deleteData = function(user){
 	$http({
 		method: 'DELETE',
 		url: 'https://jointhecrew.in/api/txns/priya@gmail.com/' + user.id
 	}).then(function successCallback(response) {

 		alert("User has deleted Successfully");
 		var index = $scope.userList.indexOf(user);
 		$scope.userList.splice(index, 1);

 	}, function errorCallback(response) {

 		alert("Error. while deleting user Try Again!");

 	});
 };


 $scope.editUser = function(user) {
 	$scope.id=user.id;
 	$scope.user=user.user;
 	$scope.amount=user.amount;
 	$scope.currency=user.currency;
 	$scope.txn_date=new Date(user.txn_date);
 };

 $scope.updateData = function(){

 	$http({
 		method: 'POST',
 		url: 'https://jointhecrew.in/api/txns/priya@gmail.com/' + $scope.id,
 		data: { user:$scope.user, amount:$scope.amount, currency:$scope.currency, txn_date:$scope.txn_date}

 	}).then(function successCallback(response) {

 		alert("User has updated Successfully")

 	}, function errorCallback(response) {

 		alert("Error. while updating user Try Again!");

 	});
 };

 function clearModel(){
 	$scope.id="";
 	$scope.user="";
 	$scope.amount="";
 	$scope.currency="";
 	$scope.txn_date="";
 }


});