StatsControllers.controller("DogController", ['$scope',
    'DogClass',
    function($scope,
   DogClass) {//added new{
   
    $scope.animaltype = DogClass.get_type();
    
   
    $scope.multiply = function(){
            
       DogClass.set_a_b($scope.calc.a, $scope.calc.b);
    $scope.calc.result = DogClass.multiply();
    }
    
     $scope.add = function(){
            DogClass.set_a_b($scope.calc.a, $scope.calc.b);
    $scope.calc.result = DogClass.add();
    }
    
     $scope.subtract = function(){
         DogClass.set_a_b($scope.calc.a, $scope.calc.b);
    $scope.calc.result = DogClass.subtract();
    }
    
    $scope.roundoff = function(){
       $scope.calc.result2 =  DogClass.roundoff($scope.calc.result);
    }
    
    
     //below is controller or flow of the program on page load. check template.
     $scope.calc = {};
       $scope.calc.a = '33.1';
   $scope.calc.b = 4;
    
   
    }]
        );


