StatsApp.factory('OUSChartClass', function($http, CoreChartClass){
    
     var extended = angular.copy(CoreChartClass, {});//we can use extend also here. but complicated.
 
  extended['method_four'] = function(){return 1;};
  extended['get_tab_title']=function(id){
    
  if(id == 1){
      return 'Total Usage';
      
  }  else if (id == 2){
      return 'Remote Usage';
  }  else if (id == 3){
      return 'Onsite Usage';
  } 
   else if (id == 4){
      return 'Individual Usage';
  } 
    
};
  return extended;
});
