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

	return service;
});