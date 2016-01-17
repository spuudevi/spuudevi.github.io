<div ng-app="GuitarApp">
    <div ng-controller="ReportController">
        
    </div><div class="span12">
            <input ng-model="chartConfig.title.text">
            <button ng-click="addSeries()">Add Series</button>
            <button ng-click="addPoints()">Add Points to Random Series</button>
            <button ng-click="removeRandomSeries()">Remove Random Series</button>
            <button ng-click="swapChartType()">Line/Bar</button>
            <button ng-click="toggleLoading()">Loading?</button>
            <button ng-click="print()">Print</button>
        </div>
        <div class="row">
            <highchart id="chart1" config="chartConfig" class="span10"></highchart>
        </div>
   
