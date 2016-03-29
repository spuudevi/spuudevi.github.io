 /**
         * main chartclass common code used by all charts/graphs with grid
         * check chartcontroller to see how this is used.
         * dont read this class . see the flow in controller.
         * @author Potluri
         *
         */

StatsApp.factory('CoreChartClass', ['sharedProperties',
    function(sharedProperties)//added new
    {

        return {
            lengthofproductsarray : '',//class variables.
            goprods : '',
            num_of_months_to_show : '',
            prev_next_months_count : '',
            color : '',
            usageinfo : '',
            set_usageinfo : function(usageinfo){
//             delete    usageinfo.result['2009-02-01'];
//             console.log(usageinfo);
                this.usageinfo = usageinfo;
            },
            get_usageinfo : function(){
                return this.usageinfo;
            },
            set_num_of_months_to_show: function(num_of_months_to_show) {
                this.num_of_months_to_show = num_of_months_to_show;//15 months data to be shown in the graph
            },
            set_prev_next_months_count: function(prev_next_months_count) {
                this.prev_next_months_count = prev_next_months_count;//6 months prev or next pagination constant.
            },
            get_color: function() {
                return   this.color; //15 months data to be shown in the graph
            },
             set_color: function(color) {
                this.color = color;//6 months prev or next pagination constant.
            },
            get_num_of_months_to_show: function() {
                return   this.num_of_months_to_show; //15 months data to be shown in the graph
            },
            get_prev_next_months_count: function() {
                return  this.prev_next_months_count;//6 months prev or next pagination constant.
            },
            set_lengthofproductsarray: function(lengthofproductsarray) {
                this.lengthofproductsarray = lengthofproductsarray;
            },
            set_goproducts: function(goprods) {
                this.goprods = goprods;
            },

            prodfamilyarr_hardcode: function(hardcodescpe, length) {

                    // alert(length)
                    hardcodescpe.plus_toggle_reset_flag = false;
                    hardcodescpe.prodfamily_arr = ['ama', 'gme', 'ama', 'gme', 'ama', 'gme', 'ama', 'gme', 'ama'];
                    this.usageinfo_by_prod = {"resultcode": 0, "result": {"2008-09-01": {"onsite": {"ama": {"documents": 999, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 0, "sessions": 0, "searches": 0}, "gme": {"documents": 0, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 0, "sessions": 0, "searches": 0}}, "remote": {"ama": {"documents": 37, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 67, "sessions": 0, "searches": 0}, "gme": {"documents": 52, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 44, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 96, "sessions": 88, "searches": 525}}, "individual": {"ama": {"documents": 0, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 0, "sessions": 0, "searches": 0}, "gme": {"documents": 0, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 0, "sessions": 0, "searches": 0}}}, "2008-10-01": {"onsite": {"ama": {"documents": 0, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 0, "sessions": 0, "searches": 0}, "gme": {"documents": 0, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 0, "sessions": 0, "searches": 0}}, "remote": {"ama": {"documents": 287, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 239, "sessions": 0, "searches": 0}, "gme": {"documents": 146, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 132, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 853, "sessions": 582, "searches": 1316}}, "individual": {"ama": {"documents": 0, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 0, "sessions": 0, "searches": 0}, "gme": {"documents": 0, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 0, "sessions": 0, "searches": 0}}}, "2008-11-01": {"onsite": {"ama": {"documents": 0, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 0, "sessions": 0, "searches": 0}, "gme": {"documents": 0, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 0, "sessions": 0, "searches": 0}}, "remote": {"ama": {"documents": 903, "sessions": 0, "searches": 74}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 685, "sessions": 0, "searches": 22}, "gme": {"documents": 647, "sessions": 0, "searches": 44}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 666, "sessions": 0, "searches": 63}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 472, "sessions": 520, "searches": 615}}, "individual": {"ama": {"documents": 0, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 0, "sessions": 0, "searches": 0}, "gme": {"documents": 0, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 0, "sessions": 0, "searches": 0}}}, "2008-12-01": {"onsite": {"ama": {"documents": 0, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 0, "sessions": 0, "searches": 0}, "gme": {"documents": 0, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 0, "sessions": 0, "searches": 0}}, "remote": {"ama": {"documents": 161, "sessions": 0, "searches": 3}, "atb": {"documents": 2, "sessions": 0, "searches": 0}, "ea": {"documents": 237, "sessions": 0, "searches": 38}, "gme": {"documents": 277, "sessions": 0, "searches": 24}, "lp": {"documents": 2, "sessions": 0, "searches": 0}, "nbk": {"documents": 191, "sessions": 0, "searches": 11}, "nbps": {"documents": 2, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 129, "sessions": 144, "searches": 159}}, "individual": {"ama": {"documents": 0, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 0, "sessions": 0, "searches": 0}, "gme": {"documents": 0, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 0, "sessions": 0, "searches": 0}}}, "2009-01-01": {"onsite": {"ama": {"documents": 0, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 0, "sessions": 0, "searches": 0}, "gme": {"documents": 0, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 0, "sessions": 0, "searches": 0}}, "remote": {"ama": {"documents": 238, "sessions": 0, "searches": 1}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 301, "sessions": 0, "searches": 15}, "gme": {"documents": 297, "sessions": 0, "searches": 17}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 301, "sessions": 0, "searches": 11}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 137, "sessions": 157, "searches": 230}}, "individual": {"ama": {"documents": 0, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 0, "sessions": 0, "searches": 0}, "gme": {"documents": 0, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 0, "sessions": 0, "searches": 0}}}, "2009-02-01": {"onsite": {"ama": {"documents": 0, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 0, "sessions": 0, "searches": 0}, "gme": {"documents": 0, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 0, "sessions": 0, "searches": 0}}, "remote": {"ama": {"documents": 920, "sessions": 0, "searches": 1}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 235, "sessions": 0, "searches": 12}, "gme": {"documents": 175, "sessions": 0, "searches": 11}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 168, "sessions": 0, "searches": 7}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 211, "sessions": 278, "searches": 129}}, "individual": {"ama": {"documents": 0, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 0, "sessions": 0, "searches": 0}, "gme": {"documents": 0, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 0, "sessions": 0, "searches": 0}}}, "2009-03-01": {"onsite": {"ama": {"documents": 0, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 0, "sessions": 0, "searches": 0}, "gme": {"documents": 0, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 0, "sessions": 0, "searches": 0}}, "remote": {"ama": {"documents": 24, "sessions": 0, "searches": 2}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 48, "sessions": 0, "searches": 7}, "gme": {"documents": 27, "sessions": 0, "searches": 3}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 15, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 25, "sessions": 25, "searches": 16}}, "individual": {"ama": {"documents": 0, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 0, "sessions": 0, "searches": 0}, "gme": {"documents": 0, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 0, "sessions": 0, "searches": 0}}}, "2009-04-01": {"onsite": {"ama": {"documents": 0, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 0, "sessions": 0, "searches": 0}, "gme": {"documents": 0, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 0, "sessions": 0, "searches": 0}}, "remote": {"ama": {"documents": 7, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 23, "sessions": 0, "searches": 3}, "gme": {"documents": 13, "sessions": 0, "searches": 5}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 7, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 13, "sessions": 10, "searches": 7}}, "individual": {"ama": {"documents": 0, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 0, "sessions": 0, "searches": 0}, "gme": {"documents": 0, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 0, "sessions": 0, "searches": 0}}}, "2009-05-01": {"onsite": {"ama": {"documents": 0, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 0, "sessions": 0, "searches": 0}, "gme": {"documents": 0, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 0, "sessions": 0, "searches": 0}}, "remote": {"ama": {"documents": 463, "sessions": 0, "searches": 3}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 0, "sessions": 0, "searches": 0}, "gme": {"documents": 2, "sessions": 0, "searches": 2}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 36, "sessions": 52, "searches": 0}}, "individual": {"ama": {"documents": 0, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 0, "sessions": 0, "searches": 0}, "gme": {"documents": 0, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 0, "sessions": 0, "searches": 0}}}, "2009-06-01": {"onsite": {"ama": {"documents": 0, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 0, "sessions": 0, "searches": 0}, "gme": {"documents": 0, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 0, "sessions": 0, "searches": 0}}, "remote": {"ama": {"documents": 2, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 3, "sessions": 0, "searches": 0}, "gme": {"documents": 2, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 2, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 6, "sessions": 3, "searches": 7}}, "individual": {"ama": {"documents": 0, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 0, "sessions": 0, "searches": 0}, "gme": {"documents": 0, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 0, "sessions": 0, "searches": 0}}}, "2009-07-01": {"onsite": {"ama": {"documents": 0, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 0, "sessions": 0, "searches": 0}, "gme": {"documents": 0, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 0, "sessions": 0, "searches": 0}}, "remote": {"ama": {"documents": 0, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 0, "sessions": 0, "searches": 0}, "gme": {"documents": 0, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 0, "sessions": 0, "searches": 0}}, "individual": {"ama": {"documents": 0, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 0, "sessions": 0, "searches": 0}, "gme": {"documents": 0, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 0, "sessions": 0, "searches": 0}}}, "2009-08-01": {"onsite": {"ama": {"documents": 0, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 0, "sessions": 0, "searches": 0}, "gme": {"documents": 0, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 0, "sessions": 0, "searches": 0}}, "remote": {"ama": {"documents": 0, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 0, "sessions": 0, "searches": 0}, "gme": {"documents": 0, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 0, "sessions": 0, "searches": 0}}, "individual": {"ama": {"documents": 0, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 0, "sessions": 0, "searches": 0}, "gme": {"documents": 0, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 0, "sessions": 0, "searches": 0}}}, "2009-09-01": {"onsite": {"ama": {"documents": 0, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 0, "sessions": 0, "searches": 0}, "gme": {"documents": 0, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 0, "sessions": 0, "searches": 0}}, "remote": {"ama": {"documents": 0, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 0, "sessions": 0, "searches": 0}, "gme": {"documents": 0, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 0, "sessions": 0, "searches": 0}}, "individual": {"ama": {"documents": 0, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 0, "sessions": 0, "searches": 0}, "gme": {"documents": 0, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 0, "sessions": 0, "searches": 0}}}, "2009-10-01": {"onsite": {"ama": {"documents": 0, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 0, "sessions": 0, "searches": 0}, "gme": {"documents": 0, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 0, "sessions": 0, "searches": 0}}, "remote": {"ama": {"documents": 0, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 0, "sessions": 0, "searches": 0}, "gme": {"documents": 0, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 0, "sessions": 0, "searches": 0}}, "individual": {"ama": {"documents": 0, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 0, "sessions": 0, "searches": 0}, "gme": {"documents": 0, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 0, "sessions": 0, "searches": 0}}}, "2009-11-01": {"onsite": {"ama": {"documents": 0, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 0, "sessions": 0, "searches": 0}, "gme": {"documents": 0, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 0, "sessions": 0, "searches": 0}}, "remote": {"ama": {"documents": 0, "sessions": 0, "searches": 1}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 1, "sessions": 0, "searches": 2}, "gme": {"documents": 0, "sessions": 0, "searches": 1}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 1}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 1, "sessions": 2, "searches": 1}}, "individual": {"ama": {"documents": 0, "sessions": 0, "searches": 0}, "atb": {"documents": 0, "sessions": 0, "searches": 0}, "ea": {"documents": 0, "sessions": 0, "searches": 0}, "gme": {"documents": 0, "sessions": 0, "searches": 0}, "lp": {"documents": 0, "sessions": 0, "searches": 0}, "nbk": {"documents": 0, "sessions": 0, "searches": 0}, "nbps": {"documents": 0, "sessions": 0, "searches": 0}, "nec": {"documents": 0, "sessions": 0, "searches": 0}, "go": {"documents": 0, "sessions": 0, "searches": 0}}}}};
                    //this.get_usageinfo_by_product_property();
                    hardcodescpe.usageinfo_by_prod = this.usageinfo_by_prod;

                    this.initialize_yaxis_by_prod_arrays(length);
                    hardcodescpe.calculate_prod();
                                //console.log(month_dates_x_axis);


                                //           console.log(this.documents_prod_remote_y_axis);
                                //             console.log(this.documents_prod_onsite_y_axis);
                                //             console.log(this.documents_prod_individual_y_axis);
                                //console.log(this.documents_prod_total_y_axis);
                    hardcodescpe.draw_prod_grid = [];

                 this.replaceSeries_gridbyproduct(hardcodescpe.tab);

                   hardcodescpe.draw_prod_grid = this.replaceSeries_gridbyproduct(hardcodescpe.tab);
                    hardcodescpe.addprod_csv();

            },
            initialize_yaxis_by_prod_arrays: function() {
                this.documents_prod_total_y_axis = [];
                this.searches_prod_total_y_axis = [];
                this.sessions_prod_total_y_axis = [];

                this.documents_prod_onsite_y_axis = [];
                this.searches_prod_onsite_y_axis = [];
                this.sessions_prod_onsite_y_axis = [];

                this.documents_prod_remote_y_axis = [];
                this.searches_prod_remote_y_axis = [];
                this.sessions_prod_remote_y_axis = [];

                this.documents_prod_individual_y_axis = [];
                this.searches_prod_individual_y_axis = [];
                this.sessions_prod_individual_y_axis = [];

                //    alert(lengthofproductsarray);
                for (var i = 0; i < this.lengthofproductsarray; i++) {
                    this.documents_prod_onsite_y_axis[i] = [];
                    this.searches_prod_onsite_y_axis[i] = [];
                    this.sessions_prod_onsite_y_axis[i] = [];

                    this.documents_prod_remote_y_axis[i] = [];
                    this.searches_prod_remote_y_axis[i] = [];
                    this.sessions_prod_remote_y_axis[i] = [];
                    this.documents_prod_individual_y_axis[i] = [];
                    this.searches_prod_individual_y_axis[i] = [];
                    this.sessions_prod_individual_y_axis[i] = [];

                    this.documents_prod_total_y_axis[i] = [];
                    this.searches_prod_total_y_axis[i] = [];
                    this.sessions_prod_total_y_axis[i] = [];
                }
            },
            initialize_yaxis_arrays: function() {
                this.documents_total_y_axis = [];
                this.searches_total_y_axis = [];
                this.sessions_total_y_axis = [];

                this.documents_onsite_y_axis = [];
                this.searches_onsite_y_axis = [];
                this.sessions_onsite_y_axis = [];

                this.documents_remote_y_axis = [];
                this.searches_remote_y_axis = [];
                this.sessions_remote_y_axis = [];

                this.documents_individual_y_axis = [];
                this.searches_individual_y_axis = [];
                this.sessions_individual_y_axis = [];
            },
            set_prod_title : function(title){
    this.title = title;
},
            set_chart_config: function( month_dates_x_axis_actual_on_graph) {
                                    //                console.log( encodeURIComponent(JSON.stringify({0:this.documents_total_y_axis, 1:this.sessions_total_y_axis,
                                    //                      2:this.searches_total_y_axis,3:month_dates_x_axis_actual_on_graph, 4:color })));

                return {options: {
                        chart: {
                            type: 'column'
                        //                    inverted: true
                        },
                        
                        title: {
                            text: ' ' //Total Usage'
                        },
                        subtitle: {
                        //            text:     'Source: WorldClimate.com'
                        },
                        xAxis: {
                            //                    categories: [
                            //                        'Jan',
                            //                        'Feb',
                            //                        'Mar',
                            //                        'Apr',
                            //                        'May',
                            //                        'Jun',
                            //                        'Jul',
                            //                        'Aug',
                            //                        'Sep',
                            //                        'Oct',
                            //                        'Nov',
                            //                        'Dec'
                            //                    ],
                            categories: month_dates_x_axis_actual_on_graph,
                            crosshair: true,
                            labels: {
                                rotation: -45,
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        },
                        yAxis: {
                            min: 1,
                            allowDecimals: false,
                            title: {
                                text: ' ' //Overall Usage'
                            },
                            plotLines: [{
                                    value: 0,
                                    width: 1,
                                    color: '#808080'
                                }]
                        },
                        tooltip: {
                            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                    '<td style="padding:0"><b>{point.y} </b></td></tr>',
                            footerFormat: '</table>',
                            shared: true,
                            useHTML: true
                        },
                        legend: {
                            layout: 'vertical',
                            align: 'right',
                            verticalAlign: 'middle',
                            borderWidth: 2
                        },
                        plotOptions: {
                            column: {
                                pointPadding: 0.2,
                                borderWidth: 0,
                             //   stacking: 'normal'
                            }
                        }
                    },
                     title: {
                        text: 'Total Usage'
                    },
                    series: [
                        //below is two objects element array  year over year usage report hardcoded trying to create
                        {
                            name: 'Documents',
                            data: this.documents_total_y_axis, //[50000, 71500, 106400, 129200, 144.0, 176000, 13500, 148500, 216400, 105.0, 104300, 91200],
                            // data : [],
                            color: this.color[0],
                            index: 0
                                    //    pointPadding: 0.5,
                                    //     dataLabels: {
                                    //                    enabled: true,
                                    //                    align: 'right',
                                    //                    color: '#FFFFFF',
                                    //                    x: 20,
                                    //                    y: -80,
                                    //                    allowOverlap : true,
                                    ////                      format: "{point.y} K",
                                    //                       formatter: function () {
                                    //        return Highcharts.numberFormat(this.y,0);
                                    //    }
                                    //                },

                        },
                        {
                            name: 'Sessions',
                            data: this.sessions_total_y_axis, //[84500, 78800, 98500, 93400, 106000, 84500, 105.0, 104300, 91200, 13500, 148500, 216400],
                                                                //  data : [],
                                    // ,pointPadding: .01,
                                    //  dataLabels: {
                                    //                    enabled: true,
                                    //                    align: 'right',
                            color: this.color[2],
                            index: 1
                                //                    y: -10,
                                //                      format: this.y,
                                //                },
                        },
                        {
                            name: 'Searches',
                            data: this.searches_total_y_axis, //[84500, 78800, 98500, 93400, 106000, 84500, 105.0, 104300, 91200, 13500, 148500, 216400],
                            //  data : [],
                            // ,pointPadding: .01,
                            //  dataLabels: {
                            //                    enabled: true,
                            //                    align: 'right',
                            color: this.color[1],
                            index: 2
                            //                    y: -10,
                            //                      format: this.y,
                            //                },
                        }


                    ],
                   
                    loading: false,
                    credits: {
                        enabled: false
                    }
                };

            }
            ,
            push_yaxis_prod_na: function() {
                var a = ' ';//no data for the month so some random data to show no data.
                this.documents_prod_onsite_y_axis.push(a);
                this.searches_prod_onsite_y_axis.push(a);
                this.sessions_prod_onsite_y_axis.push(a);


                this.documents_prod_remote_y_axis.push(a);
                this.searches_prod_remote_y_axis.push(a);
                this.sessions_prod_remote_y_axis.push(a);


                this.documents_prod_individual_y_axis.push(a);
                this.searches_prod_individual_y_axis.push(a);
                this.sessions_prod_individual_y_axis.push(a);

                this.documents_prod_total_y_axis.push(a);
                this.searches_prod_total_y_axis.push(a);
                this.sessions_prod_total_y_axis.push(a);
            },
            push_yaxis_prod_arrays: function(month_dates_x_axis) {



                for (var i = 0; i < this.lengthofproductsarray; i++) {
                        //              console.log(this.usageinfo_by_prod.result[month_dates_x_axis].onsite[backenddata.result.goproducts[i]]);
                   //     console.log(this.usageinfo_by_prod.result[month_dates_x_axis].onsite);
//                  console.log(month_dates_x_axis);
if(month_dates_x_axis !=' ' ){
     if(this.usageinfo_by_prod.result[month_dates_x_axis]){
//    console.log(this.usageinfo_by_prod.result[month_dates_x_axis].onsite[this.goprods[i]].documents);
                    this.documents_prod_onsite_y_axis[i].push(this.usageinfo_by_prod.result[month_dates_x_axis].onsite[this.goprods[i]].documents);
                    this.searches_prod_onsite_y_axis[i].push(this.usageinfo_by_prod.result[month_dates_x_axis].onsite[this.goprods[i]].searches);
                    this.sessions_prod_onsite_y_axis[i].push(this.usageinfo_by_prod.result[month_dates_x_axis].onsite[this.goprods[i]].sessions);


                    this.documents_prod_remote_y_axis[i].push(this.usageinfo_by_prod.result[month_dates_x_axis].remote[this.goprods[i]].documents);
                    this.searches_prod_remote_y_axis[i].push(this.usageinfo_by_prod.result[month_dates_x_axis].remote[this.goprods[i]].searches);
                    this.sessions_prod_remote_y_axis[i].push(this.usageinfo_by_prod.result[month_dates_x_axis].remote[this.goprods[i]].sessions);


                    this.documents_prod_individual_y_axis[i].push(this.usageinfo_by_prod.result[month_dates_x_axis].individual[this.goprods[i]].documents);
                    this.searches_prod_individual_y_axis[i].push(this.usageinfo_by_prod.result[month_dates_x_axis].individual[this.goprods[i]].searches);
                    this.sessions_prod_individual_y_axis[i].push(this.usageinfo_by_prod.result[month_dates_x_axis].individual[this.goprods[i]].sessions);
                    }else{
                          this.documents_prod_onsite_y_axis[i].push(' ');
                    this.searches_prod_onsite_y_axis[i].push(' ');
                    this.sessions_prod_onsite_y_axis[i].push(' ');


                    this.documents_prod_remote_y_axis[i].push(' ');
                    this.searches_prod_remote_y_axis[i].push(' ');
                    this.sessions_prod_remote_y_axis[i].push(' ');


                    this.documents_prod_individual_y_axis[i].push(' ');
                    this.searches_prod_individual_y_axis[i].push(' ');
                    this.sessions_prod_individual_y_axis[i].push(' ');
                    }    
            }
                    else{
                         this.documents_prod_onsite_y_axis[i].push(' ');
                    this.searches_prod_onsite_y_axis[i].push(' ');
                    this.sessions_prod_onsite_y_axis[i].push(' ');


                    this.documents_prod_remote_y_axis[i].push(' ');
                    this.searches_prod_remote_y_axis[i].push(' ');
                    this.sessions_prod_remote_y_axis[i].push(' ');


                    this.documents_prod_individual_y_axis[i].push(' ');
                    this.searches_prod_individual_y_axis[i].push(' ');
                    this.sessions_prod_individual_y_axis[i].push(' ');
                    }
                
                
                }
            },
            reverse_yaxis_arrays: function() {
                this.documents_onsite_y_axis.reverse();
                this.searches_onsite_y_axis.reverse();
                this.sessions_onsite_y_axis.reverse();


                this.documents_remote_y_axis.reverse();
                this.searches_remote_y_axis.reverse();
                this.sessions_remote_y_axis.reverse();


                this.documents_individual_y_axis.reverse();
                this.searches_individual_y_axis.reverse();
                this.sessions_individual_y_axis.reverse();

                this.documents_total_y_axis.reverse();
                this.searches_total_y_axis.reverse();
                this.sessions_total_y_axis.reverse();
            },
            push_yaxis_na: function() {
                var a = ' ';//no data for the month so some random data to show no data.
                this.documents_onsite_y_axis.push(a);
                this.searches_onsite_y_axis.push(a);
                this.sessions_onsite_y_axis.push(a);


                this.documents_remote_y_axis.push(a);
                this.searches_remote_y_axis.push(a);
                this.sessions_remote_y_axis.push(a);


                this.documents_individual_y_axis.push(a);
                this.searches_individual_y_axis.push(a);
                this.sessions_individual_y_axis.push(a);

                this.documents_total_y_axis.push(a);
                this.searches_total_y_axis.push(a);
                this.sessions_total_y_axis.push(a);
            },
            changegridvalues: function(id) {
                if (id === 1) {
                   return [ this.documents_total_y_axis,
                    this.searches_total_y_axis,
                     this.sessions_total_y_axis];
                }
                else if (id === 2)
                {

                    return [this.documents_remote_y_axis,
                    this.searches_remote_y_axis,
                    this.sessions_remote_y_axis];
                }
                else if (id === 3) {
                    return [this.documents_onsite_y_axis,
                    this.searches_onsite_y_axis,
                    this.sessions_onsite_y_axis];
                }
                else if (id === 4) {
                   return [this.documents_individual_y_axis,
                     this.searches_individual_y_axis,
                    this.sessions_individual_y_axis];
                }


            },
            replaceSeries_gridbyproduct: function(id) {
//console.log(this.documents_prod_total_y_axis);
                if (id === 1) {

                    return [this.documents_prod_total_y_axis,

                    this.sessions_prod_total_y_axis,
                      this.searches_prod_total_y_axis];

                }
                else if (id === 2) {
                    return [this.documents_prod_remote_y_axis,

                    this.sessions_prod_remote_y_axis,
                     this.searches_prod_remote_y_axis];

                } else if (id === 3) {
                    return [this.documents_prod_onsite_y_axis,

                    this.sessions_prod_onsite_y_axis,
                     this.searches_prod_onsite_y_axis];
                } else if (id === 4) {
                   return [this.documents_prod_individual_y_axis,

                     this.sessions_prod_individual_y_axis,
                     this.searches_prod_individual_y_axis];
                }

           },
            delete_after_num_of_months_to_show_from_yaxis_arrays: function() {
                this.documents_onsite_y_axis.splice(this.num_of_months_to_show, Number.MAX_VALUE);
                this.searches_onsite_y_axis.splice(this.num_of_months_to_show, Number.MAX_VALUE);
                this.sessions_onsite_y_axis.splice(this.num_of_months_to_show, Number.MAX_VALUE);


                this.documents_remote_y_axis.splice(this.num_of_months_to_show, Number.MAX_VALUE);
                this.searches_remote_y_axis.splice(this.num_of_months_to_show, Number.MAX_VALUE);
                this.sessions_remote_y_axis.splice(this.num_of_months_to_show, Number.MAX_VALUE);


                this.documents_individual_y_axis.splice(this.num_of_months_to_show, Number.MAX_VALUE);
                this.searches_individual_y_axis.splice(this.num_of_months_to_show, Number.MAX_VALUE);
                this.sessions_individual_y_axis.splice(this.num_of_months_to_show, Number.MAX_VALUE);

                this.documents_total_y_axis.splice(this.num_of_months_to_show, Number.MAX_VALUE);
                this.searches_total_y_axis.splice(this.num_of_months_to_show, Number.MAX_VALUE);
                this.sessions_total_y_axis.splice(this.num_of_months_to_show, Number.MAX_VALUE);
            },
get_tab_title :function(id){
    
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
    
},
             replaceSeries_all : function(id, month_dates_x_axis_actual_on_graph) {


                    //            var rnd = []
                    //            for (var i = 0; i < num_of_months_to_show; i++) {
                    //                rnd.push(Math.floor(Math.random() * 100000) + 1)
                    //            }
                if (id === 1) {
                    return [{
                        data: this.documents_total_y_axis,
                        name: 'Documents',
                        color: this.color[0],
                        index: 0
                    },
                  {
                        data: this.searches_total_y_axis,
                        color: this.color[1],
                        name: 'Searches',
                        index: 2
                    },
                    {
                        data: this.sessions_total_y_axis,
                        color: this.color[2],
                        name: 'Sessions',
                        index: 1
                    }];
                }
                else if (id === 2) {
                 return  [ {
                        data: this.documents_remote_y_axis,
                        name: 'Documents',
                        color: this.color[0],
                        index: 0
                    },
                    {
                        data: this.searches_remote_y_axis,
                        color: this.color[1],
                        name: 'Searches',
                        index: 2
                    },
                    {
                        data: this.sessions_remote_y_axis,
                        color: this.color[2],
                        name: 'Sessions',
                        index: 1
                    }];
                }
                else if (id === 3) {

                    return [{
                        data: this.documents_onsite_y_axis,
                        name: 'Documents',
                        color: this.color[0],
                        index: 0
                    },
                    {
                        data: this.searches_onsite_y_axis,
                        color: this.color[1],
                        name: 'Searches',
                        index: 2
                    },
                    {
                        data: this.sessions_onsite_y_axis,
                        color: this.color[2],
                        name: 'Sessions',
                        index: 1

                    }];
                }
                else if (id === 4) {
                    return [{
                        data: this.documents_individual_y_axis,
                        name: 'Documents',
                        color: this.color[0],
                        index: 0

                    },
                    {
                        data: this.searches_individual_y_axis,
                        color: this.color[1],
                        name: 'Searches',
                        index: 2
                    },
                    {
                        data: this.sessions_individual_y_axis,
                        color: this.color[2],
                        name: 'Sessions',
                        index: 1
                    }];
                }



            },

            push_yaxis_arrays : function(month_dates_x_axis, flag_page_loaded) {
            if (flag_page_loaded === true && flag_page_loaded !== '') {
              var  usageinfo = sharedProperties.get_usageinfo_property();
                this.set_usageinfo(usageinfo);
            }
            else {
                usageinfo = sharedProperties.get_usageinfo_property2();
                this.set_usageinfo(usageinfo);
            }
//            console.log(usageinfo.result[month_dates_x_axis].onsite.documents);
            this.documents_onsite_y_axis.push(usageinfo.result[month_dates_x_axis].onsite.documents);
            this.searches_onsite_y_axis.push(usageinfo.result[month_dates_x_axis].onsite.searches);
            this.sessions_onsite_y_axis.push(usageinfo.result[month_dates_x_axis].onsite.sessions);


            this.documents_remote_y_axis.push(usageinfo.result[month_dates_x_axis].remote.documents);
            this.searches_remote_y_axis.push(usageinfo.result[month_dates_x_axis].remote.searches);
            this.sessions_remote_y_axis.push(usageinfo.result[month_dates_x_axis].remote.sessions);


            this.documents_individual_y_axis.push(usageinfo.result[month_dates_x_axis].individual.documents);
            this.searches_individual_y_axis.push(usageinfo.result[month_dates_x_axis].individual.searches);
            this.sessions_individual_y_axis.push(usageinfo.result[month_dates_x_axis].individual.sessions);
        },
            calculate_remote_onsite_ind_total_next_in_pagination :
                    function( month_dates_x_axis) {




              //  var lengthofmonthsarray = month_dates_x_axis.length;
          //        console.log(month_dates_x_axis);
                for (var i = month_dates_x_axis.length - (month_dates_x_axis.length - (this.num_of_months_to_show -
                        this.prev_next_months_count));
                        i < month_dates_x_axis.length; i++) {
                    //if 12 in month then start at 12-3 12-(12-(15-6)) not 12-6 if 13 then 13-(13-(15-6))
                    // not 13-6 if 14 then 14-5 if 10 then   ... 15-(15-(15-6))
                    // console.log(month_dates_x_axis);
                    //building documents sessions searches y axis arrays.
                    //  console.log(month_dates_x_axis[i]);
                    //  console.log(month_dates_x_axis[i]);
                    //    console.log(usageinfo.result[month_dates_x_axis[i]]);
                    //   console.log(this.documents_total_y_axis);
                    if (this.usageinfo.result[month_dates_x_axis[i]]) {
                        //   console.log( this.usageinfo.result[month_dates_x_axis[i]].onsite.documents);
                        this.push_yaxis_arrays(month_dates_x_axis[i], '');

                        this.documents_total_y_axis.push(this.usageinfo.result[month_dates_x_axis[i]].onsite.documents
                                + this.usageinfo.result[month_dates_x_axis[i]].remote.documents +
                                this.usageinfo.result[month_dates_x_axis[i]].individual.documents);
                        this.searches_total_y_axis.push(this.usageinfo.result[month_dates_x_axis[i]].onsite.searches +
                                this.usageinfo.result[month_dates_x_axis[i]].remote.searches +
                                this.usageinfo.result[month_dates_x_axis[i]].individual.searches);
                        this.sessions_total_y_axis.push(this.usageinfo.result[month_dates_x_axis[i]].onsite.sessions +
                                this.usageinfo.result[month_dates_x_axis[i]].remote.sessions +
                                this.usageinfo.result[month_dates_x_axis[i]].individual.sessions);
                    }
                    else {
                        this.push_yaxis_na();
                    }

                }
 if(this.documents_total_y_axis.length < this.num_of_months_to_show+this.prev_next_months_count  ){
                    for(var i=this.documents_total_y_axis.length;i<this.num_of_months_to_show+this.prev_next_months_count;i++){
                         this.push_yaxis_na();
                        
                    }
                }
//console.log(this.documents_total_y_axis);
                for (i = 0; i < this.prev_next_months_count; i++) {
                    this.documents_onsite_y_axis.shift();
                    this.searches_onsite_y_axis.shift();
                    this.sessions_onsite_y_axis.shift();


                    this.documents_remote_y_axis.shift();
                    this.searches_remote_y_axis.shift();
                    this.sessions_remote_y_axis.shift();


                    this.documents_individual_y_axis.shift();
                    this.searches_individual_y_axis.shift();
                    this.sessions_individual_y_axis.shift();

                    this.documents_total_y_axis.shift();
                    this.searches_total_y_axis.shift();
                    this.sessions_total_y_axis.shift();
                }





            },
            calculate_remote_onsite_ind_total_previous_in_pagination :
                    function( month_dates_x_axis) {
                this.reverse_yaxis_arrays();

               // var lengthofmonthsarray = month_dates_x_axis.length;
                for (var i = 5; i >= 0; i--) {
                    //console.log(month_dates_x_axis[i]);
                    //building documents sessions searches y axis arrays.
//                  console.log(month_dates_x_axis[i]);
//                 console.log( this.usageinfo.result[month_dates_x_axis[i]].onsite.documents);
                    if (this.usageinfo.result[month_dates_x_axis[i]]) {


                        this.push_yaxis_arrays(month_dates_x_axis[i], '');
                        this.documents_total_y_axis.push(this.usageinfo.result[month_dates_x_axis[i]].onsite.documents
                                + this.usageinfo.result[month_dates_x_axis[i]].remote.documents +
                                this.usageinfo.result[month_dates_x_axis[i]].individual.documents);
                        this.searches_total_y_axis.push(this.usageinfo.result[month_dates_x_axis[i]].onsite.searches +
                                this.usageinfo.result[month_dates_x_axis[i]].remote.searches +
                                this.usageinfo.result[month_dates_x_axis[i]].individual.searches);
                        this.sessions_total_y_axis.push(this.usageinfo.result[month_dates_x_axis[i]].onsite.sessions +
                                this.usageinfo.result[month_dates_x_axis[i]].remote.sessions +
                                this.usageinfo.result[month_dates_x_axis[i]].individual.sessions);
                    } else {
                        this.push_yaxis_na();
                    }

                }
               // console.log(this.documents_total_y_axis.length);
                 if(this.documents_total_y_axis.length < this.num_of_months_to_show+this.prev_next_months_count ){
                    for(var i=this.documents_total_y_axis.length;i<this.num_of_months_to_show+this.prev_next_months_count;i++){
                       this.push_yaxis_na();
                         
                        
                    }
                }
                this.reverse_yaxis_arrays();



                this.delete_after_num_of_months_to_show_from_yaxis_arrays();
            },
            
            
             calculate_remote_onsite_ind_total_next_in_pagination_isr :
                    function( month_dates_x_axis) {




              //  var lengthofmonthsarray = month_dates_x_axis.length;
          //        console.log(month_dates_x_axis);
                for (var i = month_dates_x_axis.length - (month_dates_x_axis.length - (this.num_of_months_to_show -
                        this.prev_next_months_count));
                        i < month_dates_x_axis.length; i++) {
                    //if 12 in month then start at 12-3 12-(12-(15-6)) not 12-6 if 13 then 13-(13-(15-6))
                    // not 13-6 if 14 then 14-5 if 10 then   ... 15-(15-(15-6))
                    // console.log(month_dates_x_axis);
                    //building documents sessions searches y axis arrays.
                    //  console.log(month_dates_x_axis[i]);
                    //  console.log(month_dates_x_axis[i]);
                    //    console.log(usageinfo.result[month_dates_x_axis[i]]);
                    //   console.log(this.documents_total_y_axis);
                    if (this.usageinfo.result[month_dates_x_axis[i]]) {
                        //   console.log( this.usageinfo.result[month_dates_x_axis[i]].onsite.documents);
                        this.push_yaxis_arrays(month_dates_x_axis[i], '');

                        this.documents_total_y_axis.push(this.usageinfo.result[month_dates_x_axis[i]].onsite.documents
                                + this.usageinfo.result[month_dates_x_axis[i]].remote.documents +
                                this.usageinfo.result[month_dates_x_axis[i]].individual.documents);
                        this.searches_total_y_axis.push(this.usageinfo.result[month_dates_x_axis[i]].onsite.searches +
                                this.usageinfo.result[month_dates_x_axis[i]].remote.searches +
                                this.usageinfo.result[month_dates_x_axis[i]].individual.searches);
                        this.sessions_total_y_axis.push(this.usageinfo.result[month_dates_x_axis[i]].onsite.sessions +
                                this.usageinfo.result[month_dates_x_axis[i]].remote.sessions +
                                this.usageinfo.result[month_dates_x_axis[i]].individual.sessions);
                    }
                    else {
                        this.push_yaxis_na();
                    }

                }
 if(this.documents_total_y_axis.length < this.num_of_months_to_show+this.prev_next_months_count  ){
                    for(var i=this.documents_total_y_axis.length;i<this.num_of_months_to_show+this.prev_next_months_count;i++){
                         this.push_yaxis_na();
                        
                    }
                }
//console.log(this.documents_total_y_axis);
                for (i = 0; i < this.prev_next_months_count; i++) {
                    this.documents_onsite_y_axis.shift();
                    this.searches_onsite_y_axis.shift();
                    this.sessions_onsite_y_axis.shift();


                    this.documents_remote_y_axis.shift();
                    this.searches_remote_y_axis.shift();
                    this.sessions_remote_y_axis.shift();


                    this.documents_individual_y_axis.shift();
                    this.searches_individual_y_axis.shift();
                    this.sessions_individual_y_axis.shift();

                    this.documents_total_y_axis.shift();
                    this.searches_total_y_axis.shift();
                    this.sessions_total_y_axis.shift();
                }





            },
            calculate_remote_onsite_ind_total_previous_in_pagination_isr :
                    function( month_dates_x_axis) {
                this.reverse_yaxis_arrays();

               // var lengthofmonthsarray = month_dates_x_axis.length;
                for (var i = 5; i >= 0; i--) {
                    //console.log(month_dates_x_axis[i]);
                    //building documents sessions searches y axis arrays.
//                  console.log(month_dates_x_axis[i]);
//                 console.log( this.usageinfo.result[month_dates_x_axis[i]].onsite.documents);
                    if (this.usageinfo.result[month_dates_x_axis[i]]) {


                        this.push_yaxis_arrays(month_dates_x_axis[i], '');
                        this.documents_total_y_axis.push(this.usageinfo.result[month_dates_x_axis[i]].onsite.documents
                                + this.usageinfo.result[month_dates_x_axis[i]].remote.documents +
                                this.usageinfo.result[month_dates_x_axis[i]].individual.documents);
                        this.searches_total_y_axis.push(this.usageinfo.result[month_dates_x_axis[i]].onsite.searches +
                                this.usageinfo.result[month_dates_x_axis[i]].remote.searches +
                                this.usageinfo.result[month_dates_x_axis[i]].individual.searches);
                        this.sessions_total_y_axis.push(this.usageinfo.result[month_dates_x_axis[i]].onsite.sessions +
                                this.usageinfo.result[month_dates_x_axis[i]].remote.sessions +
                                this.usageinfo.result[month_dates_x_axis[i]].individual.sessions);
                    } else {
                        this.push_yaxis_na();
                    }

                }
               // console.log(this.documents_total_y_axis.length);
                 if(this.documents_total_y_axis.length < this.num_of_months_to_show+this.prev_next_months_count ){
                    for(var i=this.documents_total_y_axis.length;i<this.num_of_months_to_show+this.prev_next_months_count;i++){
                       this.push_yaxis_na();
                         
                        
                    }
                }
                this.reverse_yaxis_arrays();



                this.delete_after_num_of_months_to_show_from_yaxis_arrays();
            },

            
            

              calculate_months_xaxis :
                      function(dates, posted_data, month_dates_x_axis, month_dates_x_axis_actual_on_graph,
             usagedates) {
                for (var i = dates.indexOf(posted_data.year); i > dates.indexOf(posted_data.year) - this.num_of_months_to_show; i--) {
                    if (dates[i]) {

                        month_dates_x_axis.push(dates[i]);
                        month_dates_x_axis_actual_on_graph.push(usagedates[dates[i]]);

                    }


                }
                if(month_dates_x_axis.length < this.num_of_months_to_show){
                    for(var i=month_dates_x_axis.length;i<this.num_of_months_to_show;i++){
                        month_dates_x_axis.push(' ');
                        month_dates_x_axis_actual_on_graph.push( ' ');
                    }
                }
                
                month_dates_x_axis.reverse();//reverse the array for dates earlier to later @potluri
                month_dates_x_axis_actual_on_graph.reverse();//reverse the array for dates earlier to later @potluri
            },
            
                calculate_months_xaxis_isr :
                      function(dates, posted_data, month_dates_x_axis, month_dates_x_axis_actual_on_graph,
             usagedates) {
                // month_dates_x_axis = [];
               //  month_dates_x_axis_actual_on_graph=[];
              //   console.log(posted_data.year);
                for (var i = dates.indexOf(posted_data.year); i > dates.indexOf(posted_data.year) - this.num_of_months_to_show; i--) {
                    if (dates[i]) {

                        month_dates_x_axis.push(dates[i]);
                        month_dates_x_axis_actual_on_graph.push(usagedates[dates[i]]);

                    }


                }
//                if(month_dates_x_axis.length < this.num_of_months_to_show){
//                    for(var i=month_dates_x_axis.length;i<this.num_of_months_to_show;i++){
//                        month_dates_x_axis.push(' ');
//                        month_dates_x_axis_actual_on_graph.push( ' ');
//                    }
//                }
          //      console.log(posted_data.year);
            //  console.log(month_dates_x_axis);
                month_dates_x_axis.reverse();//reverse the array for dates earlier to later @potluri
                month_dates_x_axis_actual_on_graph.reverse();//reverse the array for dates earlier to later @potluri
            },

            calculate_months_xaxis_previous_in_pagination :
                    function(posted_data, dates, month_dates_x_axis, month_dates_x_axis_actual_on_graph,
                        usagedates) {

                month_dates_x_axis.reverse();//reverse the array for dates earlier to later @potluri
                month_dates_x_axis_actual_on_graph.reverse();
                for (var i = dates.indexOf(posted_data.year); i > dates.indexOf(posted_data.year) - this.prev_next_months_count; i--) {
                    if (dates[i]) {

                        month_dates_x_axis.push(dates[i]);
                        month_dates_x_axis_actual_on_graph.push(usagedates[dates[i]]);

                    }


                }
              //   console.log(month_dates_x_axis_actual_on_graph.length);
                if(month_dates_x_axis.length < this.num_of_months_to_show+this.prev_next_months_count ){
                    for(var i=month_dates_x_axis.length;i<this.num_of_months_to_show+this.prev_next_months_count;i++){
                        month_dates_x_axis.push(' ');
                        month_dates_x_axis_actual_on_graph.push( ' ');
                    }
                }
                   
                month_dates_x_axis.reverse();//reverse the array for dates earlier to later @potluri
                month_dates_x_axis_actual_on_graph.reverse();//reverse the array for dates earlier to later @potluri
                month_dates_x_axis.splice(this.num_of_months_to_show, Number.MAX_VALUE);
                month_dates_x_axis_actual_on_graph.splice(this.num_of_months_to_show, Number.MAX_VALUE);

            },



            calculate_months_xaxis_next_in_pagination : function(posted_data, enddate, dates, month_dates_x_axis,
            month_dates_x_axis_actual_on_graph, usagedates) {
//console.log(usagedates);
                            //        month_dates_x_axis.reverse();//reverse the array for dates earlier to later @potluri
    //            month_dates_x_axis_actual_on_graph.reverse();
                for (var i = dates.indexOf(posted_data.year) + 1; i <= dates.indexOf(posted_data.year) +
                        this.prev_next_months_count; i++) {
                    if (dates[i]) {

                        month_dates_x_axis.push(dates[i]);
                        month_dates_x_axis_actual_on_graph.push(usagedates[dates[i]]);

                    }


                }
 //console.log(month_dates_x_axis);
//    console.log(this.num_of_months_to_show+this.prev_next_months_count);
if((month_dates_x_axis.length < this.num_of_months_to_show+this.prev_next_months_count)){
//    console.log(month_dates_x_axis.length);
//    console.log(this.num_of_months_to_show+this.prev_next_months_count);
                    for(var i=month_dates_x_axis.length;i<this.num_of_months_to_show+this.prev_next_months_count;i++){
                        month_dates_x_axis.push(' ');
                        month_dates_x_axis_actual_on_graph.push( ' ');
               //         console.log(month_dates_x_axis);
                    }
                    
                }

                                    //    console.log(month_dates_x_axis_actual_on_graph);
                    //            month_dates_x_axis.reverse();//reverse the array for dates earlier to later @potluri
                    //            month_dates_x_axis_actual_on_graph.reverse();//reverse the array for dates earlier to later @potluri
                    //            month_dates_x_axis.splice(num_of_months_to_show, Number.MAX_VALUE);
                    //            month_dates_x_axis_actual_on_graph.splice(num_of_months_to_show, Number.MAX_VALUE);

                for (i = 0; i < this.prev_next_months_count; i++) {
                    month_dates_x_axis.shift();
                    month_dates_x_axis_actual_on_graph.shift();
                }
              //  console.log(month_dates_x_axis_actual_on_graph);
            },
            calculate_remote_onsite_ind_total :
                    function( month_dates_x_axis) {
//console.log("adf");
            var lengthofmonthsarray = month_dates_x_axis.length;
            for (var i = 0; i < lengthofmonthsarray; i++) {
                //console.log(month_dates_x_axis[i]);
                //building documents sessions searches y axis arrays.
                if (this.usageinfo.result[month_dates_x_axis[i]]) {
                    this.push_yaxis_arrays(month_dates_x_axis[i], true);

                    this.documents_total_y_axis.push(this.documents_onsite_y_axis[i] + this.documents_remote_y_axis[i] +
                            this.documents_individual_y_axis[i]);
                    this.searches_total_y_axis.push(this.searches_onsite_y_axis[i] + this.searches_remote_y_axis[i] +
                            this.searches_individual_y_axis[i]);
                    this.sessions_total_y_axis.push(this.sessions_onsite_y_axis[i] + this.sessions_remote_y_axis[i] +
                            this.sessions_individual_y_axis[i]);
                } else {
                    this.push_yaxis_na();
                }

            }
        }
        
        
        ,
              calculate_remote_onsite_ind_total_isr :
                    function( month_dates_x_axis, usageinfo) {
//console.log("adf");
            var lengthofmonthsarray = month_dates_x_axis.length;
            for (var i = 0; i < lengthofmonthsarray; i++) {
                //console.log(month_dates_x_axis[i]);
                //building documents sessions searches y axis arrays.
            //    console.log(usageinfo.result)
                if (this.usageinfo.result[month_dates_x_axis[i]]) {
                    this.push_yaxis_arrays_isr(month_dates_x_axis[i], true, usageinfo);

                    this.documents_total_y_axis.push(this.documents_onsite_y_axis[i] + this.documents_remote_y_axis[i] +
                            this.documents_individual_y_axis[i]);
                    this.searches_total_y_axis.push(this.searches_onsite_y_axis[i] + this.searches_remote_y_axis[i] +
                            this.searches_individual_y_axis[i]);
                    this.sessions_total_y_axis.push(this.sessions_onsite_y_axis[i] + this.sessions_remote_y_axis[i] +
                            this.sessions_individual_y_axis[i]);
                } else {
                    this.push_yaxis_na();
                }

            }
        },
         push_yaxis_arrays_isr : function(month_dates_x_axis, flag_page_loaded, usageinfo) {
            if (flag_page_loaded === true && flag_page_loaded !== '') {
           //   var  usageinfo = sharedProperties.get_usageinfo_property();
             // console.log(usageinfo);
                this.set_usageinfo(usageinfo);
            }
            else {
                usageinfo = sharedProperties.get_usageinfo_property2();
                this.set_usageinfo(usageinfo);
            }
         //   console.log(month_dates_x_axis + usageinfo.result[month_dates_x_axis].onsite.documents);
            this.documents_onsite_y_axis.push(usageinfo.result[month_dates_x_axis].onsite.documents);
            this.searches_onsite_y_axis.push(usageinfo.result[month_dates_x_axis].onsite.searches);
            this.sessions_onsite_y_axis.push(usageinfo.result[month_dates_x_axis].onsite.sessions);


            this.documents_remote_y_axis.push(usageinfo.result[month_dates_x_axis].remote.documents);
            this.searches_remote_y_axis.push(usageinfo.result[month_dates_x_axis].remote.searches);
            this.sessions_remote_y_axis.push(usageinfo.result[month_dates_x_axis].remote.sessions);


            this.documents_individual_y_axis.push(usageinfo.result[month_dates_x_axis].individual.documents);
            this.searches_individual_y_axis.push(usageinfo.result[month_dates_x_axis].individual.searches);
            this.sessions_individual_y_axis.push(usageinfo.result[month_dates_x_axis].individual.sessions);
        },
        };
    }
]);

