StatsApp.factory('ChivavaClass', function($http, DogClass) {

    var extended = angular.copy(DogClass, {});//we can use extend also here. but complicated.


    extended.get_type = function() {

        return 'chivava';


    };
    extended.add = function(a, b) {
        return parseFloat(this.a) + parseFloat(this.b)+4;
    };

    extended.subtract = function(a, b) {
        return parseFloat(this.a) - parseFloat(this.b);
    };
   
    
    return extended;
});