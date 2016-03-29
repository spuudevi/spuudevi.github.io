StatsControllers.controller("ChivavaController", ['$scope',
    'ChivavaClass',
    function($scope,
   ChivavaClass) {
    
     
    $scope.animaltype = ChivavaClass.get_type();
    //$scope.symbol ;
     function symbol(sym){
        ChivavaClass.set_symbol(sym);
    
         return ChivavaClass.get_symbol();
       
    }
    $scope.multiply = function(){
            $scope.symbol = symbol("X");
       ChivavaClass.set_a_b($scope.calc.a, $scope.calc.b);
    $scope.calc.result = ChivavaClass.multiply();
    }
    
     $scope.add = function(){
         $scope.symbol = symbol("+");
            ChivavaClass.set_a_b($scope.calc.a, $scope.calc.b);
    $scope.calc.result = ChivavaClass.add();
    }
    
     $scope.subtract = function(){
         $scope.symbol = symbol("-");
         ChivavaClass.set_a_b($scope.calc.a, $scope.calc.b);
    $scope.calc.result = ChivavaClass.subtract();
    }
    
    $scope.roundoff = function(){
       $scope.calc.result2 =  ChivavaClass.roundoff($scope.calc.result);
    }
    
    
    
    
    //below is controller or flow of the program on page load. check template.
     $scope.calc = {};
       $scope.calc.a = '33.1';
   $scope.calc.b = 4;
   
   }]);