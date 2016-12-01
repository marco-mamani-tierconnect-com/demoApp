'use strict';
eventsApp.factory('eventData', function ($resource) {
    var resource = $resource('/data/event/:id', {id:'@id'});
    return {
        getEvent: function () {
            return resource.get({id:1});
            // $resource(URL, defaulValue)
        },
        save: function (event) {
            event.id = 998;
            return resource.save(event);
        }
    }
});
