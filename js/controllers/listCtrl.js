angular.module('app').controller('listCtrl', function(listFactory, cardFactory) {
	
	this.removeList = function(list) {
		listFactory.removeList(list);
	};
	this.getCards = function(list) {
		return cardFactory.getCards(list);
	};
});