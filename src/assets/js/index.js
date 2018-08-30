$(function() {
  function isPC() {
    const rule = /(iPhone|iPod|Android|ios)/i;
    if (rule.test(navigator.userAgent)) {
      return false;
    }
    return true;
  }
	function pageOne(){
		/******************* 左1 ******************/
		var pieOption = {
				backgroundColor:'',
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    legend: {
		        data:['汽车之家','易车','官网']
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'category',
		            data : ['2月','3月','4月','5月'],
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		           	min: 0.8,
		            max: 0.99,
		        }
		    ],
		    series : [
		        {
		            name:'汽车之家',
		            type:'bar',
		            // itemStyle: {
		            //     normal: {
		            //         color: 'rgba(0,0,0,0.5)',
		            //         borderWidth: 0,
		            //         shadowBlur: {
		            //             shadowColor: 'rgba(255,255,255,0.31)',
		            //             shadowBlur: 10,
		            //             shadowOffsetX: 0,
		            //             shadowOffsetY: 2,
		            //         },
		            //     }
		            // },
		            data:[0.898,0.895,0.891,0.895]
		        },
		        {
		            name:'易车',
		            type:'bar',
		            data:[0.905,0.903,0.911,0.906]
		        },  
		        {
		            name:'官网',
		            type:'bar',
		            data:[0.964,0.962,0.960,0.960]
		        }
		    ]
		};
		/******************* 左2 ******************/
		var radiusAxisOption = {
				backgroundColor: '',
		    angleAxis: {
		        type: 'category',  
		        data: ['奇骏', '天籁', '轩逸', '骐达', '蓝鸟', '骊威', '玛驰', '轩逸经典'],
		        z: 10
		    },
		    radiusAxis: {
	       	// min: 0.8,
	        // max: 0.99,
		    },
		    polar: {
		    },
		    series: [{
		        type: 'bar',
		        data: [0.07,0.04,0.05,0.06,0.08,0.06,0.07,0.09],
		        coordinateSystem: 'polar',
		        name: '汽车之家',
		        stack: 'a'
		    }, {
		        type: 'bar',
		        data: [0.11,0.14,0.12,0.12,0.17,0.15,0.13,0.13],
		        coordinateSystem: 'polar',
		        name: '易车',
		        stack: 'a'
		    }, {
		        type: 'bar',
		        data: [0.13,0.15,0.23,0.16,0.15,0.1,0.12,0.18],
		        coordinateSystem: 'polar',
		        name: '官网',
		        stack: 'a'
		    }],
		    legend: {
		        show: true,
		        left: 0,
		        orient: 'vertical',
		        data: ['汽车之家', '易车', '官网'],
		    }
		};
		/***************** 中 ******************/

		//城市经纬度
		var scatterGeo = {
			"北京":	[116.405285,	39.904989],
			"天津":	[117.190182,	39.125596],
			"河北":	[114.502461,	38.045474],
			"山西":	[112.549248,	37.857014],
			"内蒙古":	[111.670801,	40.818311],
			"辽宁":	[123.429096,	41.796767],
			"吉林":	[125.3245,	43.886841],
			"黑龙江":	[126.642464,	45.756967],
			"上海市":	[121.472644,	31.231706],
			"江苏":	[118.767413,	32.041544],
			"浙江":	[120.153576,	30.287459],
			"安徽":	[117.283042,	31.86119],
			"福建":	[119.306239,	26.075302],
			"江西":	[115.892151,	28.676493],
			"山东":	[117.000923,	36.675807],
			"河南":	[113.665412,	34.757975],
			"湖北":	[114.298572,	30.584355],
			"湖南":	[112.982279,	28.19409],
			"广东":	[113.280637,	23.125178],
			"广西":	[108.320004,	22.82402],
			"海南":	[110.33119,	20.031971],
			"重庆":	[106.504962,	29.533155],
			"四川":	[104.065735,	30.659462],
			"贵州":	[106.713478,	26.578343],
			"云南":	[102.712251,	25.040609],
			"西藏":	[91.132212,	29.660361],
			"陕西":	[108.948024,	34.263161],
			"甘肃":	[103.823557,	36.058039],
			"青海":	[101.778916,	36.623178],
			"宁夏":	[106.278179,	38.46637],
			"新疆":	[87.617733,	43.792818],
			"台湾":	[121.509062,	25.044332],
			"香港":	[114.173355,	22.320048],
			"澳门":	[113.54909,	22.198951],
		};
		//城市数据
		var scatterVal = [
	      {name:'福建',value:3.02},
				{name:'广东',value:4.37},
				{name:'山东',value:3.24},
				{name:'浙江',value:2.73},
				{name:'内蒙古',value:3.61},
				{name:'上海',value:7.22},
				{name:'甘肃',value:4.09},
				{name:'湖北',value:3.61},
				{name:'河南',value:3.53},
				{name:'云南',value:3.52},
				{name:'安徽',value:4.2},
				{name:'天津',value:5.6},
				{name:'河北',value:3.74},
				{name:'广西',value:4.68},
				{name:'江苏',value:2.19},
				{name:'新疆',value:2.48},
				{name:'湖南',value:3.53},
				{name:'辽宁',value:2.91},
				{name:'吉林',value:4.15},
				{name:'江西',value:3.21},
				{name:'北京',value:4.88},
				{name:'四川',value:3.08},
				{name:'宁夏',value:4.37},
				{name:'贵州',value:3},
				{name:'重庆',value:7.26},
				{name:'陕西',value:3.88},
				{name:'青海',value:6.72},
				{name:'山西',value:2.76},
				{name:'黑龙江',value:4.61},
				{name:'海南',value:1.38}
		];
		//数据转换，转换后的格式：[{name: 'cityName', value: [lng, lat, val]}, {...}]
		var convertScatterData = function(data) {
		    let res = [];
		    for(let i=0;i<data.length;i++) {
		        let geoCoord = scatterGeo[data[i].name];
		        if(geoCoord) {
		            res.push({
		                name: data[i].name,
		                value: geoCoord.concat(data[i].value)
		            });
		        }
		    }
		    return res;
		};
		//地图配置项
		var sactterMapOpt = {
		    backgroundColor: '',
		    title: {
		        text: '全国报价波动热力图',
		        x: 'center',
		        textStyle: {
		            color: '#fff'
		        }
		    },
		    legend: {
		        data: ['波动'], //与series的name属性对应
		        orient: 'vertical',
		        y: 'bottom',
		        x: 'right',
		        textStyle: {
		            color: '#fff'
		        }
		    },
		    tooltip: {
		        trigger: 'item',
		        formatter: function(params) {
		            return params.name + ' : ' + params.value[2];
		        }
		    },
		    visualMap: {
		        min: 0,
		        max: 8,
		        calculable: false,
		        inRange: {
		            color: ['#50a3ba', '#eac736', '#d94e5d']
		            // color: ['#ffffff', '#FF9900'],
		        },
		        textStyle: {
		            color: '#fff'
		        }
		    },
		    geo: {
		        map: 'china',
		        roam: false, //开启鼠标缩放和漫游
		        zoom: 1, //地图缩放级别
		        selectedMode: false, //选中模式：single | multiple
		        left: 0,
		        right: 0,
		        top: 0,
		        bottom: 0,
		        layoutCenter: ['50%', '50%'], //设置后left/right/top/bottom等属性无效
		        layoutSize: '100%',
		        label: {
		            emphasis: {
		                show: true,
		                color: '#ffffff'
		            }
		        },
		        itemStyle: {
		            normal: {
		                areaColor: '#101f32',
		                borderWidth: 1.1,
		                borderColor: '#43d0d6'
		            },
		            emphasis: {
		                areaColor: '#069',
		            },
		        }
		    },
		    series: [{
		        name: '报价',
		        // type: 'scatter',
		        type: 'heatmap',
		        coordinateSystem: 'geo',
		        symbolSize: 16,
		        label: {
		            normal: {
		                show: false
		            },
		            emphasis: {
		                show: false
		            },
		            show: true,
		        },
		        itemStyle: {
		            emphasis: {
		                borderColor: '#fff',
		                borderWidth: 1
		            }
		        },
		        data: convertScatterData(scatterVal)
		    }]
		};

		/******************* 左1 ******************/
		var flyMap = echarts.init(document.getElementById("flyMap"), 'dark');	
		flyMap.clear();
		flyMap.setOption(pieOption);
		/***************** 左2 ******************/
		var worldMap = echarts.init(document.getElementById("worldMap"),"dark");
		worldMap.clear();
		worldMap.setOption(radiusAxisOption);
		/***************** 中 ******************/
		var scatterMap = echarts.init(document.getElementById("scatterMap"),"dark");
		scatterMap.clear();
		scatterMap.setOption(sactterMapOpt);

		// setInterval(function () {
		//     scatterVal.forEach(function(e){
		//     		e['value'] = e['value']*Math.random()
		//     })
		//     // debugger
		//     scatterMap.setOption(sactterMapOpt, true);
		// },1000);

		/********** 浏览器窗口改变时，重置报表大小 ****************/
		window.onresize = function() {
			flyMap.resize();
			scatterMap.resize();
			worldMap.resize();
		}
	}

	function pageTwo(){
		var getExcel = function(type) {
			var opsOneValue = parseFloat($('#filter-change-input-1').val());
			var opsTwoValue = parseFloat($('#filter-change-input-2').val());
			var resultBarArr = [];

			// var result_ztnh = (opsOneValue*0.004+opsTwoValue*0.156)*17.19842-(17.19842/7);
			var result_ztnh = Math.abs((opsOneValue*0.004+opsTwoValue*0.156)*17.19842-(17.19842/7));
			var result_xy = Math.abs((opsOneValue*0.210+opsTwoValue*-0.15)*3.823457464-(3.823457464/8));
			var result_xyjd = Math.abs((opsOneValue*0.219+opsTwoValue*-0.18)*2.87537625-(2.87537625/7.5));
			var result_xk = Math.abs((opsOneValue*-0.654+opsTwoValue*0.826)*2.699986539-(2.699986539/10));
			var result_t = Math.abs((opsOneValue*-0.086+opsTwoValue*0.238)*24.6307506-(24.6307506/7));
			var result_lw = Math.abs((opsOneValue*0.261+opsTwoValue*-0.171)*5.729647208-(5.729647208/15));

			resultBarArr.push(result_ztnh,result_xy,result_xyjd,result_xk,result_t,result_lw)		
			if (type === 'line') {
				resultBarArr = resultBarArr.map(function(e,i){
					return e = (e + 0.1)*10;
				})
			}
			resultBarArr = resultBarArr.map(function(e,i){
				return e = e.toFixed(4);
			})
			console.log('result_ztnh', result_ztnh)
			console.log('resultBarArr', resultBarArr)
			return resultBarArr;
		}
		var lineBarOption = {
				backgroundColor:'',
		    tooltip: {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'cross',
		            crossStyle: {
		                color: '#999'
		            }
		        }
		    },
		    toolbox: {
		        feature: {
		            dataView: {show: true, readOnly: false},
		            magicType: {show: true, type: ['line', 'bar']},
		            restore: {show: true},
		            saveAsImage: {show: true}
		        }
		    },
		    legend: {
		        data:['标题','标题','标题']
		    },
		    xAxis: [
		        {
		            type: 'category',
		            data: ['整体拟合','轩逸','轩逸经典','逍客','T70','骊威'],
		            axisPointer: {
		                type: 'shadow'
		            }
		        }
		    ],
		    yAxis: [
		        {
		            type: 'value',
		            name: '线索成交率',
		            // min: 0,
		            // max: 0.4,
		            interval: 50,
		            axisLabel: {
		                formatter: '{value}%'
		            }
		        },
		        {
		            type: 'value',
		            name: '成交收益',
		            // min: 0,
		            // max: 5,
		            interval: 5,
		            axisLabel: {
		                formatter: '{value}万'
		            }
		        }
		    ],
		    series: [
		        {
	            name:'本品折扣率',
	            type:'bar',
	            data:getExcel('bar'),
		        },{
	            name:'成交收益',
	            type:'line',
	            yAxisIndex: 1,
	            data:getExcel('line'),
        		}
		    ]
		};

		var lineBarObj = echarts.init(document.getElementById("lineBar"), 'dark');	
		// barOps? lineBarObj.clear(): '';
		lineBarObj.setOption(lineBarOption);
		
		/********** 浏览器窗口改变时，重置报表大小 ****************/
		window.onresize = function() {
			lineBarObj.resize();
		}
	}

	function init(){
		var changeVal = function(obj,curVal) {
			if(curVal < 0.8){
				curVal = 0.8;	
			}else if(curVal >=1){
				curVal = 1;
			}
			obj.val(curVal);
			pageTwo()	
		}

		$('.header-frame').on('click','#next',function(){
			$('#page-1').removeClass('active');
			$('#page-2').addClass('active');
			$(this).prop('id','pre');
			$(this).find('.glyphicon').prop('class','glyphicon glyphicon-chevron-left');
			$('.header-title').html('成交率预测看板')
			pageTwo();
		})

		$('.header-frame').on('click','#pre',function(){
			$('#page-2').removeClass('active');
			$('#page-1').addClass('active');
			$(this).prop('id','next');
			$(this).find('.glyphicon').prop('class','glyphicon glyphicon-chevron-right');
			$('.header-title').html('全网报价监控看板')
			pageOne();
		})

		$('.filter-change-input').on('blur',function(){
			var curVal = parseFloat($(this).val());
			changeVal($(this),curVal);
		})

    $(".filter-change-input").keydown(function(event) {
    	var curVal = parseFloat($(this).val());
      if(event.keyCode == 13) {
        changeVal($(this),curVal);
      }
    });

		pageOne();

		// pageTwo();
	}
	init();
});