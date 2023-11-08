// (function(){   // 6) !!!!!!!!!!!!!!!!!!!!!!!extend separated jquery file defination example!!!!!!!!!!!!!!!!!!!!!1
//     $.extend({
//         //Graph need-------------------------------------------------------------------------------------------------------------------
//         renderGraph: function(urlPath, dataSet, graphType, lottoORbonus){
//             // let pageNum_json = JSON.stringify(pageNumss); 
//             // 7) !!!!!!!!!!!!!!! jQuery ajax async communication example  (json data)!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
//             let dict_test = {}
//             dict_test['yearData'] = dataSet;
//             dict_test['graphType'] = graphType;
//             dict_test['lottoORbonus'] = lottoORbonus;
//             let dict_json = JSON.stringify(dict_test);
//             $.ajax({
//                 async:true,
//                 url: urlPath + '/lottoDataAsync',
//                 type:'POST',
//                 // data:{pageNum_json: pageNum_json}, 
//                 Cache:false,   ////////???????????
//                 data:dict_json,
//                 dataType:'json',
//                 contentType: 'application/json; charset=UTF-8',
//                 success: function(data){
//                     if(data["chart"] == "3D"){
//                         $.mainChart(data)
//                     }
//                 },
//                 error: function(){
//                     alert('wrong!')
//                 },
//                 headers:{a:100, b:200}
//             })
//         },


//         mainChart: function(testDataDict){
//             var chartDom = document.getElementById('main');
//           //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
//             let resizeWorldMapContainer = function () {
//                 chartDom.style.width = (window.innerWidth*0.8) +'px';
//                 chartDom.style.height =(window.innerHeight*0.8) +'px';
//             };
//             //设置容器高宽
//             resizeWorldMapContainer();
        
//             var myChart = echarts.init(chartDom);
//             var option;
        
//             // prettier-ignore
//             var balls = testDataDict["x_ball"];
//             // prettier-ignore
//             var dates = testDataDict["y_dateday"];
//             // prettier-ignore
//             var data = testDataDict["z_count"]
//             option = {
//             tooltip: {},
//             visualMap: {
//                 max: 0.5,    // display range max
//                 inRange: {
//                 color: [
//                     '#313695',
//                     '#4575b4',
//                     '#74add1',
//                     '#abd9e9',
//                     '#e0f3f8',
//                     '#ffffbf',
//                     '#fee090',
//                     '#fdae61',
//                     '#f46d43',
//                     '#d73027',
//                     '#a50026'
//                 ]
//                 }
//             },
//             xAxis3D: {
//                 type: 'category',
//                 data: balls
//             },
//             yAxis3D: {
//                 type: 'category',
//                 data: dates
//             },
//             zAxis3D: {
//                 type: 'value'
//             },
//             grid3D: {
//                 boxWidth: 200,
//                 boxDepth: 80,
//                 viewControl: {
//                 // projection: 'orthographic'
//                 },
//                 light: {
//                 main: {
//                     intensity: 1.2,
//                     shadow: true
//                 },
//                 ambient: {
//                     intensity: 0.3
//                 }
//                 }
//             },
//             series: [
//                 {
//                 type: 'bar3D',
//                 data: data.map(function (item) {
//                     return {
//                     value: [item[0], item[1], item[2]]
//                     };
//                 }),
//                 shading: 'lambert',
//                 label: {
//                     fontSize: 16,
//                     borderWidth: 1
//                 },
//                 emphasis: {
//                     label: {
//                     fontSize: 20,
//                     color: '#900'
//                     },
//                     itemStyle: {
//                     color: '#900'
//                     }
//                 }
//                 }
//             ]
//             };
        
//             // option && myChart.setOption(option);
//             myChart.setOption(option); // 绘制画布
        
        
        
//             // myChart_distribution.on('click', (param) =>  {
//             //     option2.title.text = 'Skills Useage Times -- '+ detailDataArr[param.name][0];
//             //     option2.xAxis.data = detailDataArr[param.name][1];
//             //     option2.series =  [
//             //       {
//             //         data: detailDataArr[param.name][2],
//             //         type: 'bar',
//             //         showBackground: true,
//             //         backgroundStyle: {
//             //           color: 'rgba(180, 180, 180, 0.2)'
//             //         }
//             //       }
//             //     ];
//             //     detailChart.setOption(option2);
//             // });
        
//             // setTimeout(function(){
//             //     window.onresize = function () {
//             //       myChart_distribution.resize();
//             //       detailChart.resize();
//             //     }
//             // }, 200)
        
//         },

//         //Generate random need-------------------------------------------------------------------------------------------------------------------
//         randomGenerate: function(urlPath, dataSet, graphType, lottoORbonus, generateFlag){
//             let dict_gene = {}
//             dict_gene['yearData'] = dataSet;
//             dict_gene['graphType'] = graphType;
//             dict_gene['lottoORbonus'] = lottoORbonus;
//             dict_gene['generateFlag'] = generateFlag;
//             let dict_json = JSON.stringify(dict_gene);
//             $.ajax({
//                 async:true,
//                 url: urlPath + '/generateRandom',
//                 type:'POST',
//                 // data:{pageNum_json: pageNum_json}, 
//                 Cache:false,
//                 data:dict_json,
//                 dataType:'json',
//                 contentType: 'application/json; charset=UTF-8',
//                 success: function(data){
//                     $("#randomResultBox").val(data);
//                 },
//                 error: function(){
//                     alert('wrong!')
//                 },
//                 headers:{a:100, b:200}
//             })
//         },


//         disributionDownload: function(urlPath, dataSet, graphType, lottoORbonus, startData, countData){
//             let dict_distribution = {}
//             dict_distribution['yearData'] = dataSet;
//             dict_distribution['graphType'] = graphType;
//             dict_distribution['lottoORbonus'] = lottoORbonus;
//             dict_distribution['startData'] = startData;
//             dict_distribution['countData'] = countData;

//             let dictDis_json = JSON.stringify(dict_distribution);
//             $.ajax({
//                 async:true,
//                 url: urlPath + '/lottoDataDistribution',
//                 type:'POST',
//                 // data:{pageNum_json: pageNum_json}, 
//                 Cache:false,   ////////???????????
//                 data:dictDis_json,
//                 dataType:'json',
//                 contentType: 'application/json; charset=UTF-8',
//                 success: function(data){
//                     let exoportDistributionData = data["distribution"];
//                     $.exportExcel(exoportDistributionData, "distributionDownload");
//                 },
//                 error: function(){
//                     alert('wrong!')
//                 },
//                 headers:{a:100, b:200}
//             })
//         },

        
//         repeatDownload: function(urlPath, dataSet, graphType, lottoORbonus){
//             let dict_repeat = {}
//             dict_repeat['yearData'] = dataSet;
//             dict_repeat['graphType'] = graphType;
//             dict_repeat['lottoORbonus'] = lottoORbonus;

//             let dictRepeat_json = JSON.stringify(dict_repeat);
//             $.ajax({
//                 async:true,
//                 url: urlPath + '/lottoDataRepeat',
//                 type:'POST',
//                 // data:{pageNum_json: pageNum_json}, 
//                 Cache:false,   //default  --> true
//                 data:dictRepeat_json,
//                 dataType:'json',
//                 contentType: 'application/json; charset=UTF-8',
//                 success: function(data){
//                     let exoportRepeatData = data["repeat"];
//                     $.exportExcel(exoportRepeatData, "repeatDownload");
//                 },
//                 error: function(){
//                     alert('wrong!')
//                 },
//                 headers:{a:100, b:200}
//             })
//         },


//         exportExcel: function(exportData, csvFileName){
//             let temStr = ``;
//             var jsonData_dis = exportData;
//             for(let i in jsonData_dis){
//                 for(let j in jsonData_dis[i]){
//                     temStr += `${jsonData_dis[i][j] + '\t'},`;
//                 }
//                 temStr += '\n';
//             };
            
//             let uri_dis = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(temStr);
//             let link_dis = document.createElement("a");
//             link_dis.href = uri_dis;
//             link_dis.download = csvFileName + ".csv";
//             document.body.appendChild(link_dis);
//             link_dis.click();
//             document.body.removeChild(link_dis);
//         },

        






//     })
// })()