angular.module('app').controller('cardCtrl', function(cardFactory) {
	
	this.isEditing = false;
	this.cardEdit = null;

	this.deleteCard = function(card) {
		cardFactory.deleteCard(card);
	};

	this.editCard = function(card) {
		this.isEditing = true;
		this.cardEdit = angular.copy(card);
	};

	this.updateCard = function() {
		cardFactory.updateCard(this.cardEdit);
		// close editing
		this.isEditing = false;
		this.cardEdit = null;
	};
});