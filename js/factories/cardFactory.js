angular.module('app').factory('cardFactory', function() {
	var service = {};
	var cards = [
		{
			id: 1,
			description: 'Fix the bug in layout',
			list_id: 1
		},
		{
			id: 2,
			description: 'Add user verify',
			list_id: 2
		},
		{
			id: 3,
			description: 'Change border color',
			list_id: 3
		}
	];

	service.getCards = function(list) {
		return _.filter(cards, { list_id: list.id }); 
	};

	service.createCard = function(list, cardDesc) {
		cards.push({
			id: _.uniqueId('card_'),
			description: cardDesc,
			list_id: list.id
		});
	};

	service.deleteCard = function(card) {
		_.pull(cards, card);
	};

	service.updateCard = function(newCard) {
		var card = _.findWhere(cards, { id: newCard.id });
		card.description = newCard.description;
		card.list_id = newCard.list_id;
	};
	return service;
});