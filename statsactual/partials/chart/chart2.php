<div header ></div>

<!--@author Potluri-->
<div class="mainContent">

    <div class='printheader' >  <img  src="/statsrep5_images/print_header.png"></div>
    <div class="exportLinks">

<!--        <a href=""   ng-csv="getArray" 
           filename="{{ filename}}.csv" field-separator="{{separator}}" 
           decimal-separator="{{decimalSeparator}}" >Export Grid to Excel HTML5</a> -->
        <form method='post' name='getcsv' id='getcsv' action='/getcsv'>
            <input type='hidden' value='{{csvtext}}' id='csvtext' name='csvtext'>
            <a href='' ng-click='submit_get_csv_form()' >Export Grid to Excel</a> | <a href="" ng-click='print_page()'>Print</a>
            <!--<a href="" ng-click='printIt()'>|| Print</a>-->
        </form>  
    </div>
    <div class="breadcrumbs"><a href="#report">Back to Report Selector</a></div>
    <h1 class="rptTitle"><span class="schDis">{{customername}} - </span> <span class="prod">{{prod_title}}</span></h1>
    <h4 class="rptSubTitle">{{report_title}}</h4>
    <!--  <div ng-app="StatsApp">
        <div ng-controller="ChartController">-->
    <div class="tabGrp">
        <div class="tabs">
            <div ng-click="replaceSeries_all(1)" ng-class="{active: tab == 1}" id="tab_01" class="tab ">Total Usage</div>
            <!--ng-class tutorial add the 'active' to class if tab==1(expression
            is true. in controller set tab to 1-->
            <div ng-click="replaceSeries_all(2)" ng-class="{active: tab == 2}" id="tab_02" class="tab">Remote Usage</div>
            <div ng-click="replaceSeries_all(3)"  ng-class="{active: tab == 3}"id="tab_03" class="tab ">Onsite Usage</div>
            <div ng-click="replaceSeries_all(4)" ng-class="{active: tab == 4}" id="tab_04" class="tab">Individual Usage</div>
           
            <br class="clearfloat">
        </div>

        <div class="prevNext">
            <a href="" ng-click="run_previous()" class="prev">&lt; Previous 6 months</a> 
             <a href='' ng-click="swapChartType()" class="prev" style="text-align: center;">Toggle Line/Bar</a>
            <a href="" ng-click="run_next()" class="next">Next 6 months &gt;</a>
        </div>



        <div class="span12">
            <!--<input ng-model="chartConfig.title.text">-->
            <!--<button ng-click="addSeries()">Add Series</button>-->
            <!--<button ng-click="addPoints()">Add Points</button><br><br>-->
            <!--<button ng-click="addPoints_Series(1)">Add 2015 points</button>-->
            <!--<button ng-click="removeRandomSeries()">Remove Random Series</button>-->
            <!--<button ng-click="removeSeries(1)">Remove 2015 </button>-->
<!--              <a href='#report'><< Back</a>
             <button ng-click="replaceSeries_onsite()">Onsite Usage </button>
             <button ng-click="replaceSeries_remote()">Remote Usage </button>
             <button ng-click="replaceSeries_individual()">Individual Usage </button>-->


            <!--<button ng-click="toggleLoading()">Loading?</button>-->
            <!--<button ng-click="print()">Print</button>-->
        </div>
        <div class="row">
            <highchart id="chart1" config="chartConfig" class="smallWidth"></highchart>
        </div>
        <p></p>
    </div>

    <div id="rptData">
        <div class="dataTblWrapper">
            <table class="dataTbl totUsgTbl data15mo hdrTbl">
                <tr>
                    <th>&nbsp;</th>
                    <th scope='col'   ng-repeat="x in month_dates_x_axis track by $index" >{{ x }}</th>
                    <!--nowrap-->
                </tr>
                <tr >

                    <th scope="row" ng-if='isthisgo'><a  ng-click='plus_toggle(1)' ng-class="{open: plus_button == 1, closed:plus_button[1] != 1}" class="toggleBtn "
                                                         rel=".sub01" href=""   >Documents</a>


                    </th>
                    <th scope="row" ng-if='!isthisgo'><!--if go then only let toggling to see product based stats-->
                        Documents


                    </th>
                    <td ng-repeat="x in documents_grid track by $index" >{{ (x!=''?(x | currency:"":0):'')}}</td>

                </tr>

                <tr class="subsetRow sub01" ng-repeat="y in prodfamily_arr track by $index" ng-if="plus_button[1] == 1">

                    <!--//looping products--> 
                    <!--<th scope="row">Amazing Animals</a></th>-->
                    <th  scope="row"><span tooltip="{{productinfo[y]}}" headertext = 'heading' tooltip-position="right" >
                            {{ y}}</span></th><!-- for each prod show its name-->
                    <!--     loop products first. ama, nbe, nbps, gme like that 
                            then loop each array. like documents_prod_total_y_axis 
                                [[2, 0, 0, 12 more...] 0  is ama , 
                                [0, 0, 0, 12 more...] 1 is nbps ala corresponding to the prodfamily array , 
                    [10, 0, 0, 12 more...], [4, 0, 0, 12 more...] 2 is 3rd prod in prodfamily_arr ardam ainda., 
                                [0, 0, 0, 12 more...], [40, 3, 0, 12 more...], [0, 0, 0, 12 more...], [0, 0, 0, 12 more...], 
                                [82, 22, 27, 12 more...]] 9(no of products) arrays each array is 15(month length) element. -->
                    <td ng-repeat="x in draw_prod_grid[0][$index] track by $index" >{{ (x!=''?(x | currency:"":0):'')}}</td>

                    <!-- for each prod loop the totals array 
                    
                    fam
                                                                                                             
                    
                 <!--					<td>21600</td>
                                                         <td>9400</td>
                                                         <td>10400</td>
                                                         <td>27</td>
                                                         <td>269</td>
                                                         <td>4244</td>
                                                         <td>22156</td>
                                                         <td>20891</td>
                                                         <td>22156</td>
                                                         <td>28563</td>
                                                         <td>37700</td>
                                                         <td>28563</td>
                                                         <td>22156</td>
                                                         <td>9772</td>
                                                         <td>12818</td>-->
                </tr>
                <tr >

                    <th scope="row" ng-if='isthisgo'>
<!--                        <a ng-click='plus_toggle(2)' ng-class="{open: plus_button == 1, closed:plus_button[2] != 1}" 
                                                        class="toggleBtn " rel=".sub01" href="">-->
                            Sessions
                        <!--</a>-->
                    </th>
                    <th scope="row" ng-if='!isthisgo'><!--if go then only let toggling to see product based stats-->
                        Sessions</th>
                    <td ng-repeat="x in sessions_grid track by $index" >{{ (x!=''?(x | currency:"":0):'') }}</td>

                </tr>
                <tr class="subsetRow sub01" ng-repeat="y in prodfamily_arr track by $index" ng-if="plus_button[2] == 1">

                    <!--//looping products--> 
                    <!--<th scope="row">Amazing Animals</a></th>-->
                    <th  scope="row"><span tooltip="{{productinfo[y]}}" headertext = 'heading' tooltip-position="right" >
                            {{ y}}</span></th><!-- for each prod show its name-->
                    <!--     loop products first. ama, nbe, nbps, gme like that 
                            then loop each array. like documents_prod_total_y_axis 
                                [[2, 0, 0, 12 more...] 0  is ama , 
                                [0, 0, 0, 12 more...] 1 is nbps ala corresponding to the prodfamily array , 
                    [10, 0, 0, 12 more...], [4, 0, 0, 12 more...] 2 is 3rd prod in prodfamily_arr ardam ainda., 
                                [0, 0, 0, 12 more...], [40, 3, 0, 12 more...], [0, 0, 0, 12 more...], [0, 0, 0, 12 more...], 
                                [82, 22, 27, 12 more...]] 9(no of products) arrays each array is 15(month length) element. -->
                    <td ng-repeat="x in draw_prod_grid[1][$index] track by $index" >{{ (x!=''?(x | currency:"":0):'')}}</td>
                <tr >
                    <th scope="row" ng-if='isthisgo'>
<!--                        <a ng-click='plus_toggle(3)' ng-class="{open: plus_button[3] == 1, closed:plus_button[3] != 1}" 
                                                        class="toggleBtn " rel=".sub01" href="">-->
                            Searches
                        <!--</a>-->
                    </th>
                    <th scope="row" ng-if='!isthisgo'><!--if go then only let toggling to see product based stats-->
                        Searches</th>
                    <td ng-repeat="x in searches_grid track by $index" >{{ (x!=''?(x | currency:"":0):'')}}</td>

                </tr>
                <tr class="subsetRow sub01" ng-repeat="y in prodfamily_arr track by $index" ng-if="plus_button[3] == 1">

                    <!--//looping products--> 
                    <!--<th scope="row">Amazing Animals</a></th>-->
                    <th  scope="row"><span tooltip="{{productinfo[y]}}" headertext = 'heading' tooltip-position="right" >
                            {{ y}}</span></th><!-- for each prod show its name-->
                    <!--     loop products first. ama, nbe, nbps, gme like that 
                            then loop each array. like documents_prod_total_y_axis 
                                [[2, 0, 0, 12 more...] 0  is ama , 
                                [0, 0, 0, 12 more...] 1 is nbps ala corresponding to the prodfamily array , 
                    [10, 0, 0, 12 more...], [4, 0, 0, 12 more...] 2 is 3rd prod in prodfamily_arr ardam ainda., 
                                [0, 0, 0, 12 more...], [40, 3, 0, 12 more...], [0, 0, 0, 12 more...], [0, 0, 0, 12 more...], 
                                [82, 22, 27, 12 more...]] 9(no of products) arrays each array is 15(month length) element. -->
                    <td ng-repeat="x in draw_prod_grid[2][$index] track by $index" >{{ (x!=''?(x | currency:"":0):'')}}</td>
            </table>


        </div>
    </div>

</div>
</div>
<!-- end .tabGrp --></div>
<div footer></div>

<modal-dialog show='modalShown' width='400px' height='150px' info='loading_image_show'>
    <!-- {{rpt.rpt_type}}-->
    <p><br>{{modalcontent}}
        <img ng-if='loading_image_show' class="loading" src="/statsrep5_images/graph-loading-1.gif" 
             width="100" height="65" alt="loading..." /></p>
</modal-dialog>

