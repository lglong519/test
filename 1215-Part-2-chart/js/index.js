/**
 * Created by lglong519 on 2017-12-16.
 */
+function(){
	var dates=[],clicks=[];
	//初始化echarts实例
	var myChart = echarts.init($('#myChart')[0]);
	var option = {
	    title: {
	        text: 'guzzu',
	        left: 'center',
	        textStyle:{
	        	fontSize:24
	        }
	    },
	    tooltip: {
		    show:true,
	        trigger: 'item',
	        formatter: '{a} <br/>{b} : {c}'
	    },
	    legend: {
	        left: 'left',
	        data: []
	    },
	    xAxis: {
	        type: 'category',
	        name: 'x',
	        splitLine: {show: false},
	        axisLabel: {
                show: true,
                textStyle: {
                    color: '#333',
                    fontSize:18,
                    fontWeight:500
                }
            },
	        data:dates
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        top:'15%',
	        containLabel: true
	    },
	    yAxis: {
	        type: 'value',
	        name: '点击数/天',
	        nameGap:25
	    },
	    series: [
	        {
	            name: '点击数',
	            type: 'line',
	            symbolSize: 8,
                itemStyle : {
                    normal : {
                        lineStyle:{
                            width:3,
                            color:'#50bb8a'
                        }
                    }
                },
	            data:clicks
	        },
	    ],
	    color:['#50bb8a'],
	    textStyle:{
			    color:'#333',
			    fontWeight:600,
			    fontSize:18,
			    lineHeight:100
		    }
	    
	};
	myChart.setOption(option);
	$.ajax({
		url:'https://7b1e898b18f3fdf27ac94f17d4d62675@mixpanel.com/api/2.0/segmentation/?from_date=2017-12-1&to_date=2017-12-7&type=unique&event=viewed%20store',
		//xhrFields: {withCredentials: true}, crossDomain:true, 
		dataType:'jsonp',
		success:function(datas){
			console.log(datas);
			//成功获取数据后将数据注入表格
			if(typeof(datas)=="object"){
				for(var i in datas.data.values["viewed store"]){
					dates.push(i);
				}
				dates.sort();
				for(var i=0;i<dates.length;i++){
					clicks.push(datas.data.values["viewed store"][dates[i]]);
				}
				option.xAxis.data=dates;
				option.series[0].data=clicks;
				myChart.setOption(option);
			}
		}
	});
	
}();
	

