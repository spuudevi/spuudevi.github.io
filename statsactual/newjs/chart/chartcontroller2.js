//*******
//
//
//
//

//control or flow of the program is the bottom go to line 470 @author Potluri
StatsControllers.controller("ChartController2", ['$scope',
    'post_to_chart_properties', 'sharedProperties',
    'usageSummary', 'usageSummaryByProduct', 'OUSChartClass',
    function($scope,
    post_to_chart_properties, sharedProperties,
     usageSummary,       usageSummaryByProduct, OUSChartClass) {//added new{

       




        $scope.calculate_months_xaxis = function() {
            OUSChartClass.calculate_months_xaxis(dates, posted_data, month_dates_x_axis, month_dates_x_axis_actual_on_graph,
                    backenddata.result.usagedates);
        };

        $scope.calculate_months_xaxis_previous_in_pagination = function(posted_data) {
            OUSChartClass.calculate_months_xaxis_previous_in_pagination(posted_data, dates, month_dates_x_axis, month_dates_x_axis_actual_on_graph,
                    backenddata.result.usagedates);


        };



        $scope.calculate_months_xaxis_next_in_pagination = function(posted_data, enddate) {

            //        month_dates_x_axis.reverse();//reverse the array for dates earlier to later @potluri
            //            month_dates_x_axis_actual_on_graph.reverse();
            OUSChartClass.calculate_months_xaxis_next_in_pagination(posted_data, enddate, dates, month_dates_x_axis,
                    month_dates_x_axis_actual_on_graph, backenddata.result.usagedates);



            //    console.log(month_dates_x_axis_actual_on_graph);
            //            month_dates_x_axis.reverse();//reverse the array for dates earlier to later @potluri
            //            month_dates_x_axis_actual_on_graph.reverse();//reverse the array for dates earlier to later @potluri
            //            month_dates_x_axis.splice(num_of_months_to_show, Number.MAX_VALUE);
            //            month_dates_x_axis_actual_on_graph.splice(num_of_months_to_show, Number.MAX_VALUE);


        };



        $scope.calculate_remote_onsite_ind_total_next_in_pagination = function() {
            $scope.month_dates_x_axis = month_dates_x_axis_actual_on_graph;
            OUSChartClass.calculate_remote_onsite_ind_total_next_in_pagination(
                    month_dates_x_axis);

        };



//cuid, startDate, endDate, product[], customer[]
        $scope.calculate_remote_onsite_ind_total_previous_in_pagination = function() {
            $scope.month_dates_x_axis = month_dates_x_axis_actual_on_graph;
            OUSChartClass.calculate_remote_onsite_ind_total_previous_in_pagination(
                    month_dates_x_axis);



        };

        $scope.calculate_remote_onsite_ind_total = function() {
            usageinfo = sharedProperties.get_usageinfo_property();
            OUSChartClass.set_usageinfo(usageinfo);

            OUSChartClass.initialize_yaxis_arrays();
            $scope.month_dates_x_axis = month_dates_x_axis_actual_on_graph;
            OUSChartClass.calculate_remote_onsite_ind_total(
                    month_dates_x_axis);


        };


        $scope.calculate_by_prod_remote_onsite_ind_total = function() {
//                console.log(month_dates_x_axis);
            if (str_window.split("#")[0] === sitedevlink) {//if stats dev .
                OUSChartClass.prodfamilyarr_hardcode($scope, lengthofproductsarray);//just harcodes prod family arr if data is hardcoded.
            }
            if ($scope.plus_toggle_reset_flag) {
                $scope.modalcontent = '';//no content only loading image.
                $scope.loading_image_show = true;
                $scope.toggleModal();
                document.title = 'Loading...';
                var localstartdate = '';
                var localenddate = '';
                for (var i = 0; i < num_of_months_to_show; i++) {
                if ( month_dates_x_axis[i] != ' ') {
                    localstartdate = month_dates_x_axis[i];//earlier date.
                    //num_of_months_to_show 15 month dates have been calculated. start date comes from that.
if(localenddate != '') localenddate = month_dates_x_axis[i];


                }


            }
//            console.log(localstartdate);
                usageSummaryByProduct.usageinfo(backenddata.result.customerid, month_dates_x_axis[0],
                        localstartdate, prodfamily_arr, customers).success(function(data) {//success callback
                    //   sharedProperties.set_usageinfo_by_product_property(data);
                    
                    OUSChartClass.usageinfo_by_prod = data;//
//                    delete    OUSChartClass.usageinfo_by_prod.result['2009-02-01'];
//             console.log(usageinfo);
                    //   console.log(data);
                    sharedProperties.set_usageinfo_by_product_property(data);
                    OUSChartClass.initialize_yaxis_by_prod_arrays(lengthofproductsarray);
                    $scope.calculate_prod();

                    //           console.log($scope.documents_prod_remote_y_axis);
                    //             console.log($scope.documents_prod_onsite_y_axis);
                    //             console.log($scope.documents_prod_individual_y_axis);
                    //console.log($scope.documents_prod_total_y_axis);
                    $scope.draw_prod_grid = [];

                    $scope.draw_prod_grid = OUSChartClass.replaceSeries_gridbyproduct($scope.tab);
                    $scope.addprod_csv();

                }).error(function() {
                    $scope.toggleModal();
                }).finally(function() {
                    $scope.toggleModal();
                    document.title = 'Scholastic Statistical Reporting';
                });

            } else {

                //                    OUSChartClass.usageinfo_by_prod = sharedProperties.get_usageinfo_by_product_property();
                //
                //
                //                    $scope.initialize_yaxis_by_prod_arrays();
                //                    $scope.calculate_prod();
                ////console.log(month_dates_x_axis);
                //
                //
                ////           console.log($scope.documents_prod_remote_y_axis);
                ////             console.log($scope.documents_prod_onsite_y_axis);
                ////             console.log($scope.documents_prod_individual_y_axis);
                ////console.log($scope.documents_prod_total_y_axis);
                //                  OUSChartClass.replaceSeries_gridbyproduct();
            }

        };
        $scope.calculate_prod = function() {


//console.log(month_dates_x_axis);

            var lengthofmonthsarray = month_dates_x_axis.length;//month_dates_x_axis.length;
//console.log(month_dates_x_axis);



//                console.log(OUSChartClass.usageinfo_by_prod);
            for (var i = 0; i < lengthofmonthsarray; i++) {
                //console.log(month_dates_x_axis[i]);
                //building documents sessions searches y axis arrays.
                //{"onsite":{"ama":{"documents":0,"sessions":0,"searches":1},"atb"
                //:{"documents":0,"sessions":0,"searches":0}

//                if (OUSChartClass.usageinfo_by_prod.result[month_dates_x_axis[i]]) {
                    OUSChartClass.push_yaxis_prod_arrays(month_dates_x_axis[i], backenddata.result.goproducts);
                    //  console.log($scope.documents_prod_remote_y_axis[i]);


                    //   console.log($scope.documents_prod_remote_y_axis[i]+' ' + $scope.documents_prod_onsite_y_axis[i]+ ' ' +
                    //           $scope.documents_prod_individual_y_axis[i]+ ' total' + $scope.documents_prod_total_y_axis[i]);
                    //             console.log($scope.documents_prod_remote_y_axis);

//                }
//                else {
                    //  console.log(i);
                   // OUSChartClass.push_yaxis_prod_na();
//                }
                // console.log($scope.productinfo);
            }
            //   console.log($scope.documents_prod_onsite_y_axis);
            for (var j = 0; j < lengthofproductsarray; j++) {
                for (var i = 0; i < lengthofmonthsarray; i++) {
                    OUSChartClass.documents_prod_total_y_axis[j].push(OUSChartClass.documents_prod_onsite_y_axis[j][i] +
                            OUSChartClass.documents_prod_remote_y_axis[j][i] +
                            OUSChartClass.documents_prod_individual_y_axis[j][i]);
                    OUSChartClass.searches_prod_total_y_axis[j].push(OUSChartClass.searches_prod_onsite_y_axis[j][i] +
                            OUSChartClass.searches_prod_remote_y_axis[j][i] +
                            OUSChartClass.searches_prod_individual_y_axis[j][i]);
                    OUSChartClass.sessions_prod_total_y_axis[j].push(OUSChartClass.sessions_prod_onsite_y_axis[j][i] +
                            OUSChartClass.sessions_prod_remote_y_axis[j][i] +
                            OUSChartClass.sessions_prod_individual_y_axis[j][i]);
                }
            }


        };








        $scope.plus_toggle = function(id) {
//console.log(OUSChartClass.test_scope());

            if ($scope.plus_button[id] === 1) {
                $scope.plus_button[id] = 0;

            } else {
                $scope.plus_button[id] = 1;
                $scope.calculate_by_prod_remote_onsite_ind_total(id);//calling graph y axis
                $scope.plus_toggle_reset_flag = false;
            }


        };








        $scope.modalShown = false;//on page load no modal shown
        $scope.toggleModal = function() {
            $scope.modalShown = !$scope.modalShown;
        };

        $scope.run_both_next_prev = function(posted_data, startdate, next, enddate) {
            $scope.plus_toggle_reset();
            if (posted_data.radioincludesites === 'yes') {
                var customers = $scope.customers;
            } else {
                var customers = [backenddata.result.customerid];
            }

            //               $scope.modalcontent = '';//no content only loading image.
            //                $scope.loading_image_show = true;
            //                $scope.toggleModal();

            if (next === true) {
                var localenddate = enddate;
            } else {

                var localenddate = posted_data.year;
            }


            $scope.modalcontent = '';//no content only loading image.
            $scope.loading_image_show = true;
            $scope.toggleModal();
            usageSummary.usageinfo(backenddata.result.customerid, startdate,
                    localenddate, prodfamily_arr, customers)
                    .success(function(data) {//success callback
                        usageinfo = data;
                        // console.log(data);
                        sharedProperties.set_usageinfo_property2(usageinfo);

                        OUSChartClass.set_usageinfo(usageinfo);




                        if (next === true && next !== '') {
                          OUSChartClass.prevmonthxaxiscount = month_dates_x_axis.length;
                            $scope.calculate_months_xaxis_next_in_pagination(posted_data, enddate);
//                        console.log(month_dates_x_axis_actual_on_graph);
                            $scope.calculate_remote_onsite_ind_total_next_in_pagination();
                            $scope.replaceSeries_all($scope.tab, month_dates_x_axis_actual_on_graph);
                        } else {
                            $scope.calculate_months_xaxis_previous_in_pagination(posted_data);
                            $scope.calculate_remote_onsite_ind_total_previous_in_pagination();
                            $scope.replaceSeries_all($scope.tab, month_dates_x_axis_actual_on_graph);
                        }



                    }).error(function() {
                $scope.toggleModal();//hide the modal
            }).finally(function() {
                document.title = 'Scholastic Statistical Reporting';

                $scope.toggleModal();
                posted_data.year = month_dates_x_axis[num_of_months_to_show-1];//  posted_data.actualposteddatayear;
            });



        };
        $scope.plus_toggle_reset = function() {
            $scope.plus_toggle_reset_flag = true;//on page load call ajax.


            $scope.plus_button[1] = 0;
            $scope.plus_button[2] = 0;
            $scope.plus_button[3] = 0;




        };
                $scope.replaceSeries_all = function(id) {
                    $scope.tab = id;//tab that we want to be selected
                    // $scope.chartConfig.series.splice(0, Number.MAX_VALUE);
                    //  $scope.chartConfig.series.splice(1, Number.MAX_VALUE);
                    // $scope.chartConfig.series.splice(2, Number.MAX_VALUE);
                    $scope.chartConfig.series = OUSChartClass.replaceSeries_all(id, month_dates_x_axis_actual_on_graph);
                    //alert("Asdf");
                    $scope.chartConfig.title.text= OUSChartClass.get_tab_title(id);  
                    var gridarray_tmp = OUSChartClass.changegridvalues($scope.tab);
                    $scope.documents_grid = gridarray_tmp[0];
                    $scope.searches_grid = gridarray_tmp[1];
                    $scope.sessions_grid = gridarray_tmp[2];
                    gridarray_tmp = '';
                    $scope.initialize_csv();
                    $scope.draw_prod_grid = [];

                    $scope.draw_prod_grid = OUSChartClass.replaceSeries_gridbyproduct($scope.tab);
                    $scope.addprod_csv();
                    $scope.chartConfig.options.xAxis.categories = month_dates_x_axis_actual_on_graph;
                };

        $scope.run_previous = function() {
            document.title = 'Loading...';
            //once submitted the post data needs to be put in below property for next controller to access it
            //  post_to_chart_properties.setProperty($scope.rpt);
            //we get the property right here and also in the next controller(chart controller).
            // var posted_data =  {"rpt_type":"OUS","year":"2009-04-01","prodfamily":"bkflix","radioincludesites":"yes"}//post_to_chart_properties.getProperty();//only the html element values on selector page

            posted_data.actualposteddatayear = posted_data.year;
            posted_data.year = dates[dates.indexOf(month_dates_x_axis[0]) - 1]//"2009-04-01";
//            console.log(  posted_data.year);
            var key = '';
            var i = 0;


            var startdate = '';

            var endoffor = dates.indexOf(posted_data.year) - prev_next_months_count;//dont put this in for loop
            var initialize_i = dates.indexOf(posted_data.year);
            for (i = initialize_i; i > endoffor; i--) {
                if (dates[i]) {
                    startdate = dates[i];//earlier date.
                    //num_of_months_to_show 15 month dates have been calculated. start date comes from that.



                }


            }



            if (startdate && posted_data.year) {
                $scope.run_both_next_prev(posted_data, startdate, '', '');
            }

        };

        $scope.run_next = function() {
            document.title = 'Loading...';
            //once submitted the post data needs to be put in below property for next controller to access it
            //  post_to_chart_properties.setProperty($scope.rpt);
            //we get the property right here and also in the next controller(chart controller).
            // var posted_data =  {"rpt_type":"OUS","year":"2009-04-01","prodfamily":"bkflix","radioincludesites":"yes"}//post_to_chart_properties.getProperty();//only the html element values on selector page
//        console.log("a " + month_dates_x_axis[month_dates_x_axis.length - 1] + " a");
            if( month_dates_x_axis[month_dates_x_axis.length - 1] != ' '){
            posted_data.actualposteddatayear = posted_data.year;
            posted_data.year = month_dates_x_axis[month_dates_x_axis.length - 1];//"2009-04-01";
//                         console.log(  posted_data.year);
            var key = '';
            var i = 0;


            var startdate = dates[dates.indexOf(posted_data.year) + 1];
            var enddate = '';
            var endoffor = dates.indexOf(posted_data.year) + prev_next_months_count;//dont put this in for loop
            var initialize_i = dates.indexOf(posted_data.year);
            for (i = initialize_i; i <= endoffor; i++) {
                if (dates[i]) {
                    dates[i];
                    enddate = dates[i];//earlier date.
                    //num_of_months_to_show 15 month dates have been calculated. start date comes from that.



                }


            }


            if (startdate && enddate) {
//console.log(startdate+enddate);

                $scope.run_both_next_prev(posted_data, startdate, true, enddate);
            }
           }
        };



        $scope.initialize_csv = function() {
            $scope.filename = "test";
            //  $scope.getArray = [{a: 1, b:2}, {a:3, b:4}];
            //below is for the csv
            $scope.getArray = [
                [$scope.report_title] ,
        [$scope.prod_title], 
        [$scope.chartConfig.title.text],
        [' '].concat(month_dates_x_axis_actual_on_graph),
                ['Documents'].concat($scope.documents_grid),
                ['Sessions'].concat($scope.sessions_grid), ['Searches'].concat($scope.searches_grid)
            ];
//console.log(  $scope.getArray);
            //we call this function on page load and also on changegridvalues.

            getcsv();
        };
        getcsv = function() {

            // actual delimiter characters for CSV format
            var
                    rowDelim = '"\r\n"';


            var str = '"';
//        $.each(arr, function(key, value) {
            //convert all double quotes to single quotes and think about commas
            // value.replace('"', "'");
            var length = $scope.getArray.length;
            for (var i = 0; i < length; i++) {


                str = str + $scope.getArray[i].join("\",\"") + rowDelim;


            }

            $scope.csvtext = str;


        };

        $scope.addprod_csv = function() {
            $scope.getArray = [];
            var fifteen_element_empty_arr = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
            $scope.getArray.push([$scope.report_title]);
       $scope.getArray.push( [$scope.prod_title]); 
        $scope.getArray.push([$scope.chartConfig.title.text]);
            $scope.getArray.push([' '].concat(month_dates_x_axis_actual_on_graph));
            $scope.getArray.push(['Documents'].concat($scope.documents_grid));



            //loop draw_prod_grid[0] the prod array num of times
            //loop draw_prod_grid[1] the prod array num of times
            //loop draw_prod_grid [2] the prod array num of times.
            if ($scope.draw_prod_grid[0] && (!$scope.plus_toggle_reset_flag)) {
                for (var j = 0; j < lengthofproductsarray; j++) {
                    $scope.getArray.push([$scope.productinfo[prodfamily_arr[j]]].concat($scope.draw_prod_grid[0][j]));
                }
                $scope.getArray.push(fifteen_element_empty_arr);
            }


            //    scope.draw_prod_grid[0]
            $scope.getArray.push(['Sessions'].concat($scope.sessions_grid));
//            if ($scope.draw_prod_grid[1] && (!$scope.plus_toggle_reset_flag)) {
//                for (var j = 0; j < lengthofproductsarray; j++) {
//                    $scope.getArray.push([$scope.productinfo[prodfamily_arr[j]]].concat($scope.draw_prod_grid[1][j]));
//                }
//                $scope.getArray.push(fifteen_element_empty_arr);
//            }
            $scope.getArray.push(['Searches'].concat($scope.searches_grid));
//            if ($scope.draw_prod_grid[2] && (!$scope.plus_toggle_reset_flag)) {
//                for (var j = 0; j < lengthofproductsarray; j++) {
//                    $scope.getArray.push([$scope.productinfo[prodfamily_arr[j]]].concat($scope.draw_prod_grid[2][j]));
//                }
//                $scope.getArray.push(fifteen_element_empty_arr);
//            }
            getcsv();
            //console.log($scope.getArray);
        };

        $scope.submit_get_csv_form = function() {
            document.forms.namedItem("getcsv").submit();
        };



//**************************************************************************************************
////**************************************************************************************************
//below is the actual flow of the program.@potluri vv imp********************************
//**************************************************************************************************
//**************************************************************************************************

        //OUSChartClass.initialize_scope($scope);
        $scope.count = 0;
        $scope.tab = 1;//by default the tab that will be selected. total usage tab is selected.
        $scope.productinfo = sharedProperties.get_productinfo_property();
$(".printheader").hide();

        OUSChartClass.set_num_of_months_to_show(15);//15 months data to be shown in the graph

        OUSChartClass.set_prev_next_months_count(6);//6 months prev or next pagination constant.
        var num_of_months_to_show = OUSChartClass.get_num_of_months_to_show();
        var prev_next_months_count = OUSChartClass.get_prev_next_months_count();
        OUSChartClass.set_color(['#56d76a', '#3c97ef', '#fb3f26']);
        var color = OUSChartClass.get_color();
        var posted_data = post_to_chart_properties.getProperty();

        if (posted_data.rpt_type === "OUS")
            $scope.report_title = "Overall Usage Summary";
        $scope.prod_title = posted_data.prod_title;
        //console.log(posted_data);

        var backenddata = sharedProperties.getProperty();
        $scope.customerid = backenddata.result.customerid;
        var lengthofproductsarray = backenddata.result.goproducts.length;
        OUSChartClass.set_lengthofproductsarray(lengthofproductsarray);
        OUSChartClass.set_goproducts(backenddata.result.goproducts);
        $scope.customername = backenddata.result.customername;
        var prodfamily_arr;
        if (posted_data.prodfamily === 'GO') {
            $scope.isthisgo = sharedProperties.isitGo(true);
            prodfamily_arr = backenddata.result.goproducts;
            $scope.prodfamily_arr = prodfamily_arr;

            //if go is chosen then go products array is passed.
        } else {
           // $scope.isthisgo = sharedProperties.isitGo(false);
            prodfamily_arr = [posted_data.prodfamily];
        }
        $scope.customers = Object.keys(backenddata.result.children);

        var key = '';
        var i = 0;

        var month_dates_x_axis = [];
        var month_dates_x_axis_actual_on_graph = [];
        var dates = Object.keys(backenddata.result.usagedates);

        var usageinfo = '';
        if (posted_data.radioincludesites === 'yes') {
            var customers = $scope.customers;
        } else {
            var customers = [backenddata.result.customerid];
        }
        $scope.plus_button = {};
        $scope.plus_toggle_reset_flag = true;//on page load call ajax.
        //above true:-call usage info by prod ajax or use existing data from service dont call ajax
        
        var startdate = '';
            var dates = Object.keys(backenddata.result.usagedates);
            var endoffor = dates.indexOf(posted_data.year) - num_of_months_to_show;//dont put this in for loop
            for (i = dates.indexOf(posted_data.year); i > endoffor; i--) {
                if (dates[i]) {
                    startdate = dates[i];//earlier date.
                    //15 month dates have been calculated. start date comes from that. 



                }


            }
            if(false){
                
            //    alert("did not come from rc");
          $scope.modalcontent = '';//no content only loading image.
            $scope.loading_image_show = true;
            $scope.toggleModal();
            usageSummary.usageinfo(backenddata.result.customerid, startdate,
                    posted_data.year, prodfamily_arr, customers).success(function(data) {//success callback
                        $scope.usageinfo = data;
                        // console.log(data);
                        sharedProperties.set_usageinfo_property($scope.usageinfo);


                        if ($scope.usageinfo.result.length != 0) {

                         //   $location.path('/chart');//after everything send to chart controller.
                          $scope.calculate_months_xaxis();
        $scope.calculate_remote_onsite_ind_total();//calling graph y axis
//the above data is get_usageinfo_property which is chart data.
        var gridarray_tmp = OUSChartClass.changegridvalues($scope.tab);
        $scope.documents_grid = gridarray_tmp[0];
        $scope.searches_grid = gridarray_tmp[1];
        $scope.sessions_grid = gridarray_tmp[2];
        gridarray_tmp = '';

        Highcharts.setOptions({
            lang: {
                decimalPoint: '.',
                thousandsSep: ','
            }
        });
        $scope.chartConfig = OUSChartClass.set_chart_config(month_dates_x_axis_actual_on_graph, color);
        $scope.initialize_csv();
                        }

                        else {
                            $scope.loading_image_show = false;
                            $scope.modalcontent = "There are no statistics available for this product for the time period you have specified." +
                                    " Please verify that you have selected a time period for which you had an active " +
                                    "subscription to the product.";
                            $scope.toggleModal();
                            $scope.toggleModal();
                            // alert("There are no statistics available for this product for the time period you have specified." +
                            //         "Please verify that you have selected a time period for which you had an active " +
                            //         "subscription to the product.");
                        }

                    }).error(function() {
                $scope.toggleModal();//hide the modal
            }).finally(function() {
                document.title = 'Scholastic Statistical Reporting';
                 $scope.toggleModal();
            });
        
        
            }else{
                // post_to_chart_properties.setcontroller('not_reportcontroller');
                     $scope.calculate_months_xaxis();
        $scope.calculate_remote_onsite_ind_total();//calling graph y axis
//the above data is get_usageinfo_property which is chart data.
        var gridarray_tmp = OUSChartClass.changegridvalues($scope.tab);
        $scope.documents_grid = gridarray_tmp[0];
        $scope.searches_grid = gridarray_tmp[1];
        $scope.sessions_grid = gridarray_tmp[2];
        gridarray_tmp = '';

        Highcharts.setOptions({
            lang: {
                decimalPoint: '.',
                thousandsSep: ','
            }
        });
        $scope.chartConfig = OUSChartClass.set_chart_config(month_dates_x_axis_actual_on_graph, color);
        $scope.initialize_csv();
            }


//console.log(OUSChartClass.method_four());








//ignore below****************************************************

        $scope.removeRandomSeries = function() {
            var seriesArray = $scope.chartConfig.series;
            var rndIdx = Math.floor(Math.random() * seriesArray.length);
            seriesArray.splice(rndIdx, 1);
            //array.splice(start, deleteCount[, item1[, item2[, ...]]])
        };
        $scope.removeSeries = function(id) {
            var seriesArray = $scope.chartConfig.series;

            seriesArray.splice(id, 1);
            //array.splice(start, deleteCount[, item1[, item2[, ...]]])
        };

        $scope.swapChartType = function() {
            if (this.chartConfig.options.chart.type === 'line') {
                this.chartConfig.options.chart.type = 'column';//was bar before. column and line are two graphs
            } else {
                this.chartConfig.options.chart.type = 'line';
                this.chartConfig.options.chart.zoomType = 'x';
            }
        };
        $scope.print = function() {
            var chart = this.chartConfig.getHighcharts();
            chart.print();
        };
        $scope.printIt = function() {
                      $(".header ").hide();
 $(".exportLinks ").hide();
 $(".breadcrumbs ").hide();
 $(".tabs ").hide();
 $(".prevNext").hide();
  $(".topNav1").hide();
  $(".footer").show();
$(".printheader").show();

            window.print();
             $(".header ").show();
 $(".exportLinks ").show();
 $(".breadcrumbs ").show();
 $(".tabs ").show();
 $(".prevNext").show();
  $(".topNav1").show();
  $(".footer").show();
$(".printheader").hide();
        };
        $scope.print_page = function() {//try to use this for print//@potluri this is used to print ************
              


//           // console.log('modal print');
//var table = '<body><div class="test">' + '<img src="/statsrep5_images/print_header.png"></body>'+
//document.querySelector('.test').innerHTML + '</div>';
// var myWindow = window.open('', '', 'width=950, height=600');
//  myWindow.document.write(
//                    
//                            table+
//                    '</div></div><link href="/css/statsrep5/global.css" rel="stylesheet" type="text/css" />' +
//                    '<link href="/css/statsrep5/sdls_global.css" rel="stylesheet" type="text/css" />' +
//                    '<link rel="stylesheet" type="text/css" href="/css/statsrep5/normalize.css"/>' +
//                    '<link href="/css/statsrep5/tablet.css" rel="stylesheet" type="text/css"  />' +
//                    '<link href="/css/statsrep5/desktop.css" rel="stylesheet" type="text/css" />'
//
//
//                    );
//          //   myWindow.document.getElementsByClassName('tabs')[0].style.visibility='hidden'
//            myWindow.print();
//            exit;

var myWindow = window.open('', '', 'width=950, height=800');
       var   table = '<div class="tabGrp"><div class="row">' + document.querySelector('.row').innerHTML + '</div></div>';
            var title = '<h1 class="rptTitle">'+document.querySelector('.rptTitle').innerHTML + '</h1>';
            var subtitle = '<h4 class="rptSubTitle">'+document.querySelector('.rptSubTitle').innerHTML+'</h4>';
           var table2 = '<br><div id="rptData" style="align:left"> <div class="dataTblWrapper">' + 
            document.querySelector('.dataTblWrapper').innerHTML + '</div></div>';
           var footer = '<div class="footer">' +document.querySelector('.legal').innerHTML + "</div>";
        
           // prevNext.hide
            myWindow.document.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" '+
'"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'+
'<html class="ng-scope" xmlns="http://www.w3.org/1999/xhtml" ng-app="StatsApp">'+
'<head>'+
'<body>'+
'<link href="/css/statsrep5/global.css" rel="stylesheet" type="text/css" media="all" />' +
                    
                    '<link href="/css/statsrep5/desktop.css" rel="stylesheet" type="text/css"  media="all"/>' +
                    '<link href="/css/statsrep5/tablet.css" rel="stylesheet" type="text/css"  media="all"/>' +
                    '<link href="/css/statsrep5/sdls_global.css" rel="stylesheet" type="text/css"  media="all"/>' +
'<div ng-view="" class="wrapper ng-scope"><div class="mainContent ng-scope">' +
                    '<img src="/statsrep5_images/print_header.png">'+
                            title+subtitle+ table + table2+footer+
                    '</div></div>'+
                    '' +
                    '' +
                    ''


                    );
          //   myWindow.document.getElementsByClassName('tabs')[0].style.visibility='hidden'
                myWindow.document.close();
          myWindow.focus();
            myWindow.print();
           myWindow.close();

        };
        $scope.toggleLoading = function() {
            this.chartConfig.loading = !this.chartConfig.loading;
        };
        $scope.addPoints = function() {
            var seriesArray = $scope.chartConfig.series;
            //console.log(Math.random() * seriesArray.length);
            //Math.random() function returns a floating-point, pseudo-random number in the range [0, 1)
            var rndIdx = Math.floor(Math.random() * seriesArray.length);
            ////for ex:-  rndidx will be 0 or 1 if two element array.
            if ($scope.count === 0)
                seriesArray[0].data = seriesArray[0].data.concat([15, 10, 20]);//1,10,20 three points added dynamically.
            var rndIdx = Math.floor(Math.random() * seriesArray.length);
            ////for ex:-  rndidx will be 0 or 1 if two element array.
            if ($scope.count === 1)
                seriesArray[1].data = seriesArray[1].data.concat([150000, 100000, 200000]);//1,10,20 three points added dynamically.
            $scope.count++;
        };

        $scope.addPoints_Series = function(id) {
            var seriesArray = $scope.chartConfig.series;

            seriesArray[id].data = seriesArray[id].data.concat([150000, 100000, 200000]);//1,10,20 three points added dynamically.

        };

        $scope.addSeries = function() {
            var rnd = [];
            for (var i = 0; i < 12; i++) {
                rnd.push(Math.floor(Math.random() * 100000) + 1);
            }
            $scope.chartConfig.series.push({
                data: rnd
            });
        };
//      $scope.addRandomRow = function() {
//        $scope.getArray.push({a: Math.floor((Math.random()*10)+1), b: Math.floor((Math.random()*10)+1)});
//      };
//
//      $scope.getHeader = function () {return ["A", "B"]};
//
//      $scope.clickFn = function() {
//        console.log("click click click");
//      };
        // }
        //        if ($routeParams.graph_data_passed_in_url) {
//            var x = JSON.parse(decodeURIComponent($routeParams.graph_data_passed_in_url));
////               console.log( encodeURIComponent(JSON.stringify({0:$scope.documents_total_y_axis, 1:$scope.sessions_total_y_axis,
////                      2:$scope.searches_total_y_axis,3:month_dates_x_axis_actual_on_graph, 4:color })));
//            var color = x[4];
//            $scope.documents_total_y_axis = x[0];
//            $scope.sessions_total_y_axis = x[1];
//            $scope.searches_total_y_axis = x[2];
//            var month_dates_x_axis_actual_on_graph = x[3];
//
//            Highcharts.setOptions({
//                lang: {
//                    decimalPoint: '.',
//                    thousandsSep: ','
//                }
//            });
//            $scope.chartConfig = chart.set_chart_config($scope, month_dates_x_axis_actual_on_graph, color);
//        }
//
//        else {
    }]
        );