angular.module('starter.services', [])


    .factory('UtilityService', function ($timeout, $http, $ionicLoading, $rootScope, $ionicPopup, $ionicHistory) {
     
        var getDictionary = function() {
            return {
                dictionary: [
                  {phrase:"Kan du g\345 till aff\344ren?"},
                  {phrase:"Bil"},
                  {phrase:"Hur st\345r det till?"},
                  {phrase:"Jag heter Embla"},
                  {phrase:"Skola"},
                  {phrase:"Vad tycker du om muffins?"},
                  {phrase:"Jag skall flyga till England"},
                  {phrase:"En tavla p\345 v\344ggen"}
                ]
            };
        };
        
        var getRandomPhrase = function() {
            var curDictionary = getDictionary();
            return {
              selectedPhrase: curDictionary.dictionary[Math.floor(Math.random()*curDictionary.dictionary.length)]
            };
        };
        

        return {
            getDictionary: getDictionary,
            getRandomPhrase: getRandomPhrase
        };
    })


.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/profiles/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/profiles/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/profiles/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/profiles/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/profiles/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
