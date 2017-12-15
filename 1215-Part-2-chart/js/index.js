/**
 * Created by lglong519 on 2017-12-15.
 */
/*+function(){
	//jsonp跨域获取数据
	$.ajax({
		url:'https://mixpanel.com/api/2.0/segmentation/?from_date=2017-12-1&to_date=2017-12-7&type=unique&event=viewed%20store',
		dataType:'jsonp',
		success:function(datas){
			//成功获取数据后将数据注入canvas表格
			if(datas){
				var lineChartData = {
					labels : datas.data.series,
					datasets : [
						{
							label: "My First dataset",
							fillColor : "transparent",
							strokeColor : "#50bb8a",
							pointColor : "#fff",
							pointStrokeColor : "#50bb8a",
							pointHighlightFill : "#50bb8a",
							pointHighlightStroke : "#50bb8a",
							data :datas.data.values["viewed store"]
						}
					]
				};
				var ctx =$('#myChart')[0].getContext("2d");
				window.myLine = new Chart(ctx).Line(lineChartData, {
					scaleFontStyle:'bold',
					scaleFontColor:'#333',
					responsive: true,
					bezierCurve : false
				});
			}
		}
	});
}();
*/


var datas={"legend_size": 1, "data": {"series": ["2017-12-01", "2017-12-02", "2017-12-03", "2017-12-04", "2017-12-05", "2017-12-06", "2017-12-07"], "values": {"viewed store": {"2017-12-03": 0, "2017-12-05": 0, "2017-12-04": 0, "2017-12-07": 1, "2017-12-06": 1, "2017-12-01": 2, "2017-12-02": 0}}}};




var lineChartData = {
	labels : datas.data.series,
	datasets : [
		{
			label: "My First dataset",
			fillColor : "transparent",
			strokeColor : "#50bb8a",
			pointColor : "#fff",
			pointStrokeColor : "#50bb8a",
			pointHighlightFill : "#50bb8a",
			pointHighlightStroke : "#50bb8a",
			data :datas.data.values["viewed store"]
		}
	]
};
window.onload = function(){
	var ctx = document.getElementById("myChart").getContext("2d");
	window.myLine = new Chart(ctx).Line(lineChartData, {
		scaleFontStyle:'bold',
		scaleFontColor:'#333',
		responsive: true,
		bezierCurve : false
	});
};
