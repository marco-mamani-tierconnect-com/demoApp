'use strict';

eventsApp.controller('FilterSampleController',
    function FilterSampleController($scope, durationsFilter/*filterName+"Filter"--> To access custom Filter*/) {
        $scope.data={};

        //var durations = $filter('durations');
        $scope.data.duration1 = durationsFilter(1);
        $scope.data.duration2 = durationsFilter(2);
        $scope.data.duration3 = durationsFilter(3);
        $scope.data.duration4 = durationsFilter(4);

    }
);
