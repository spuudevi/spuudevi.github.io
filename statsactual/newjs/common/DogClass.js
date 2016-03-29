 /**
         * main chartclass common code used by all charts/graphs with grid
         * check chartcontroller to see how this is used.
         * dont read this class . see the flow in controller.
         * @author Potluri
         *
         */

StatsApp.factory('DogClass', ['sharedProperties',
    function(sharedProperties)//added new
    {

        return {
            type : '',
            a:'',
            b:'',
            sym:'',
          set_a_b : function(a, b){
         this.a = a;
        this.b = b;
        
    },
            set_type : function(usageinfo){
//             delete    usageinfo.result['2009-02-01'];
//             console.log(usageinfo);
                this.type = usageinfo;
            },
            get_type : function(){
                return 'Dog';
            }, 
            multiply : function(){
                return this.a*this.b;
            },
              add : function(){
                return this.a+this.b;
            },
              subtract : function(){
                return this.a-this.b;
            },
            set_symbol:function(symbol){
                this.sym=symbol;
            },
            get_symbol:function(){
                return this.sym;
            },
            roundoff: function(a) {
        return Math.round(a);
    }
            
               }
           }
]);
