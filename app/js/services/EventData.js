'use strict';
eventsApp.factory('eventData', function ($http) {
    return {
        getEvent: function (successcb) {
            return $http({method: 'GET', url: 'data/event/1'});
        }
    }
});