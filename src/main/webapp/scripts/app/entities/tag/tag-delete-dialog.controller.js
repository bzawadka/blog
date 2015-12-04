'use strict';

angular.module('blogApp')
	.controller('TagDeleteController', function($scope, $modalInstance, entity, Tag) {

        $scope.tag = entity;
        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
        $scope.confirmDelete = function (id) {
            Tag.delete({id: id},
                function () {
                    $modalInstance.close(true);
                });
        };

    });