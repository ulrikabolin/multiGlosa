angular.module('starter.controllers', [])



.controller('getPhrase',
  ['$rootScope', '$scope', 'UtilityService',
  function ($rootScope, $scope, UtilityService) {
    
   
    // Set phrase initially 
    var phrase = UtilityService.getRandomPhrase()    
    $scope.currentPhrase = phrase.selectedPhrase.phrase
  
  
    // Update phrase
    $scope.updatePhrase = function () {
      var phrase = UtilityService.getRandomPhrase()    
      $scope.currentPhrase = phrase.selectedPhrase.phrase    
    };
  
    // Non active function
    $scope.nonActiveFunction = function () {
      alert("Funktionen \344r inte aktiverad \344n")
    };
    
    
    //// Set the original/default language
    //var lang = "en";
    //var currentClass = "currentLang";
    //
    //// Load the language lib
    //google.load("language",1);
    //
    
    
    
  
  }])
  
  
.controller('DashCtrl', function($scope) {})  

.controller('ChatsCtrl', function($scope, Chats) {

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
