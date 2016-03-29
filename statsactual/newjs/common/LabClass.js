StatsApp.factory('LabClass', function($http, DogClass) {

    var extended = angular.copy(DogClass, {});//we can use extend also here. but complicated.


    extended.get_type = function() {

        return 'Lab';


    };
    extended.add = function(a, b) {
        return parseFloat(this.a) + parseFloat(this.b);
    };

    extended.subtract = function(a, b) {
        return parseFloat(this.a) - parseFloat(this.b);
    };
    extended.roundoff= function(a) {
        return Math.round(a);
    }
    extended.bark=function(){
        
    }
    return extended;
});