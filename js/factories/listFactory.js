angular.module('app').factory('listFactory', function () {
  var service = {};

  var lists = [
    {
      id: 1,
      listName: 'Todo'
    },
    {
      id: 2,
      listName: 'Doing'
    },
    {
      id: 3,
      listName: 'Done'
    }
  ];

  service.getLists = function () {
    return lists;
  };

  service.addList = function(name) {
    lists.push({
      id: _.uniqueId('list_'), // with prefix list_
      listName: name
    });
  };

  service.removeList = function(list) {
    _.pull(lists, list); // to delete list in lists
  }

  return service;
});
