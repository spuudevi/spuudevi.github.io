

// Controller which counts changes to its "name" member
StatsApp.controller('TestController', ['$scope', 'ChivavaClass', function ($scope, ChivavaClass) {
var foo = 'bar';
        describe("foo", function() {
        it("should contain *", function() {
        expect(foo).toBe('bar');
                ChivavaClass.set_symbol("*");
                console.log(ChivavaClass.get_symbol());
                expect(ChivavaClass.get_symbol()).toBe("*");
        });
        it("both a and b have values and testing multiply", function() {
            ChivavaClass.a = 1;
            ChivavaClass.b = 2;
            expect(ChivavaClass.a).toBeTruthy();
            expect(ChivavaClass.b).toBeTruthy();
            expect(ChivavaClass.multiply()).toBeTruthy();
        });
        
          it("a is empty in multiply. so result is empty", function() {
            ChivavaClass.a = '';
            ChivavaClass.b = 2;
            expect(ChivavaClass.a).not.toBeTruthy();
            expect(ChivavaClass.b).toBeTruthy();
            expect(ChivavaClass.multiply()).not.toBeTruthy();
        });
        
            it("b is empty in multiply. so result is empty", function() {
            ChivavaClass.a = 1;
            ChivavaClass.b = '';
            expect(ChivavaClass.a).toBeTruthy();
            expect(ChivavaClass.b).not.toBeTruthy();
            expect(ChivavaClass.multiply()).not.toBeTruthy();
        });
                });
        }]);

   