StatsControllers.controller("LabController", ['$scope',
    'LabClass',
    function($scope,
   LabClass) {//added new{
   
    $scope.animaltype = LabClass.get_type();
    
    

    $scope.multiply = function(){
            
       LabClass.set_a_b($scope.calc.a, $scope.calc.b);
    $scope.calc.result = LabClass.multiply();
    }
    
     $scope.add = function(){
            LabClass.set_a_b($scope.calc.a, $scope.calc.b);
    $scope.calc.result = LabClass.add();
    }
    
     $scope.subtract = function(){
         LabClass.set_a_b($scope.calc.a, $scope.calc.b);
    $scope.calc.result = LabClass.subtract();
    }
    
    $scope.roundoff = function(){
       $scope.calc.result2 =  LabClass.roundoff($scope.calc.result);
    }
    
    
    
    //below is controller or flow of the program on page load. check template.
     $scope.calc = {};
       $scope.calc.a = '33.1';
   $scope.calc.b = 4;
   
    }]
        );


