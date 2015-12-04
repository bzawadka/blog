'use strict';

angular.module('blogApp')
    .controller('EntryController', function ($scope, $state, $modal, Entry, EntrySearch) {
      
        $scope.entrys = [];
        $scope.loadAll = function() {
            Entry.query(function(result) {
               $scope.entrys = result;
            });
        };
        $scope.loadAll();


        $scope.search = function () {
            EntrySearch.query({query: $scope.searchQuery}, function(result) {
                $scope.entrys = result;
            }, function(response) {
                if(response.status === 404) {
                    $scope.loadAll();
                }
            });
        };

        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.entry = {
                title: null,
                content: null,
                date: null,
                id: null
            };
        };
    });
