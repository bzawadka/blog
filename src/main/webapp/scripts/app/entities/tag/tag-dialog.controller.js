'use strict';

angular.module('blogApp').controller('TagDialogController',
    ['$scope', '$stateParams', '$modalInstance', 'entity', 'Tag', 'Entry',
        function($scope, $stateParams, $modalInstance, entity, Tag, Entry) {

        $scope.tag = entity;
        $scope.entrys = Entry.query();
        $scope.load = function(id) {
            Tag.get({id : id}, function(result) {
                $scope.tag = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('blogApp:tagUpdate', result);
            $modalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.tag.id != null) {
                Tag.update($scope.tag, onSaveSuccess, onSaveError);
            } else {
                Tag.save($scope.tag, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
}]);
