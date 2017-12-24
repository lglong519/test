/**
 * Created by lglong519 on 2017-12-15.
 */
+function(){
	//jsonp跨域获取数据
	$.ajax({
		url:'https://7b1e898b18f3fdf27ac94f17d4d62675@mixpanel.com/api/2.0/segmentation/?from_date=2017-12-1&to_date=2017-12-7&type=unique&event=viewed%20store',
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
