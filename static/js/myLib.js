(function(){   // 6) !!!!!!!!!!!!!!!!!!!!!!!extend separated jquery file defination example!!!!!!!!!!!!!!!!!!!!!1
    $.extend({
        //Graph need-------------------------------------------------------------------------------------------------------------------
        readmMoreFeedback: function(urlPath, currentFeedbackNum){
            // let pageNum_json = JSON.stringify(pageNumss); 
            // 7) !!!!!!!!!!!!!!! jQuery ajax async communication example  (json data)!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
            let dict_fb = {}
            dict_fb['feedbackNum'] = currentFeedbackNum;
            console.log(dict_fb['feedbackNum'])
            let dict_json = JSON.stringify(dict_fb);
            $.ajax({
                async:true,
                url: urlPath + '/readMoreFeedback',
                type:'POST',
                // data:{pageNum_json: pageNum_json}, 
                data:dict_json,
                Cache:false,   ////////???????????
                dataType:'json',
                contentType: 'application/json; charset=UTF-8',
                success: function(data){
                    let result = data["detail"]
                    // console.log("return: ", result, );
                    

                    //?empty then add all once time? --------- ?or get the new feedback then just add new items at the end of the historydisplay area?

                    let newHistoryData = ""
                    $.each(result, function(index, element){
                        console.log("index: ", index);
                        console.log("element: ", element);
                        console.log("type: ", typeof(element));
                        console.log("-----------------end----------------");
                    // {%for key in initialFeedback%}
                    // <table class = "fbUnit">
                    //   <tbody>
                    //     <tr><td class = "fdPhoto">{{key['photo']}}</td><td class = "fdDetail">{{key['feedback']}}</td></tr>
                    //     <tr></tr><td class = "fdID">{{key['user_ID']}}</td><td class = "fdDate">{{key['start_date']}} to {{key['start_date']}}</td></tr>
                    //   </tbody>
                    // </table>            
                    // {%endfor%}


                    });

                    // append/appendTo  $('#historyShowArea_feedback')











                    // $('#historyShowArea_feedback').empty();
                    console.log("last Count:", currentFeedbackNum)
                    





                },
                error: function(){
                    alert('There is not more feedback!')
                },
                headers:{a:100, b:200}  //????
            })
        },


        // mainChart: function(testDataDict){
        //     var chartDom = document.getElementById('main');
        //   //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
        //     let resizeWorldMapContainer = function () {
        //         chartDom.style.width = (window.innerWidth*0.8) +'px';
        //         chartDom.style.height =(window.innerHeight*0.8) +'px';
        //     };
        //     //设置容器高宽
        //     resizeWorldMapContainer();
        
        //     var myChart = echarts.init(chartDom);
        //     var option;
        
        //     // prettier-ignore
        //     var balls = testDataDict["x_ball"];
        //     // prettier-ignore
        //     var dates = testDataDict["y_dateday"];
        //     // prettier-ignore
        //     var data = testDataDict["z_count"]
        //     option = {
        //     tooltip: {},
        //     visualMap: {
        //         max: 0.5,    // display range max
        //         inRange: {
        //         color: [
        //             '#313695',
        //             '#4575b4',
        //             '#74add1',
        //             '#abd9e9',
        //             '#e0f3f8',
        //             '#ffffbf',
        //             '#fee090',
        //             '#fdae61',
        //             '#f46d43',
        //             '#d73027',
        //             '#a50026'
        //         ]
        //         }
        //     },
        //     xAxis3D: {
        //         type: 'category',
        //         data: balls
        //     },
        //     yAxis3D: {
        //         type: 'category',
        //         data: dates
        //     },
        //     zAxis3D: {
        //         type: 'value'
        //     },
        //     grid3D: {
        //         boxWidth: 200,
        //         boxDepth: 80,
        //         viewControl: {
        //         // projection: 'orthographic'
        //         },
        //         light: {
        //         main: {
        //             intensity: 1.2,
        //             shadow: true
        //         },
        //         ambient: {
        //             intensity: 0.3
        //         }
        //         }
        //     },
        //     series: [
        //         {
        //         type: 'bar3D',
        //         data: data.map(function (item) {
        //             return {
        //             value: [item[0], item[1], item[2]]
        //             };
        //         }),
        //         shading: 'lambert',
        //         label: {
        //             fontSize: 16,
        //             borderWidth: 1
        //         },
        //         emphasis: {
        //             label: {
        //             fontSize: 20,
        //             color: '#900'
        //             },
        //             itemStyle: {
        //             color: '#900'
        //             }
        //         }
        //         }
        //     ]
        //     };
        
        //     // option && myChart.setOption(option);
        //     myChart.setOption(option); // 绘制画布
        
        
        
        //     // myChart_distribution.on('click', (param) =>  {
        //     //     option2.title.text = 'Skills Useage Times -- '+ detailDataArr[param.name][0];
        //     //     option2.xAxis.data = detailDataArr[param.name][1];
        //     //     option2.series =  [
        //     //       {
        //     //         data: detailDataArr[param.name][2],
        //     //         type: 'bar',
        //     //         showBackground: true,
        //     //         backgroundStyle: {
        //     //           color: 'rgba(180, 180, 180, 0.2)'
        //     //         }
        //     //       }
        //     //     ];
        //     //     detailChart.setOption(option2);
        //     // });
        
        //     // setTimeout(function(){
        //     //     window.onresize = function () {
        //     //       myChart_distribution.resize();
        //     //       detailChart.resize();
        //     //     }
        //     // }, 200)
        
        // },


    })
})()