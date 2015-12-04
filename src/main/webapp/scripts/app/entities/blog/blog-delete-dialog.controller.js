'use strict';

angular.module('blogApp')
	.controller('BlogDeleteController', function($scope, $modalInstance, entity, Blog) {

        $scope.blog = entity;
        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
        $scope.confirmDelete = function (id) {
            Blog.delete({id: id},
                function () {
                    $modalInstance.close(true);
                });
        };

    });