'use strict';

describe('Tag Detail Controller', function() {
    var $scope, $rootScope;
    var MockEntity, MockTag, MockEntry;
    var createController;

    beforeEach(inject(function($injector) {
        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();
        MockEntity = jasmine.createSpy('MockEntity');
        MockTag = jasmine.createSpy('MockTag');
        MockEntry = jasmine.createSpy('MockEntry');
        

        var locals = {
            '$scope': $scope,
            '$rootScope': $rootScope,
            'entity': MockEntity ,
            'Tag': MockTag,
            'Entry': MockEntry
        };
        createController = function() {
            $injector.get('$controller')("TagDetailController", locals);
        };
    }));


    describe('Root Scope Listening', function() {
        it('Unregisters root scope listener upon scope destruction', function() {
            var eventType = 'blogApp:tagUpdate';

            createController();
            expect($rootScope.$$listenerCount[eventType]).toEqual(1);

            $scope.$destroy();
            expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
        });
    });
});
