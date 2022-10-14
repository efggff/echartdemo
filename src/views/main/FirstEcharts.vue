<template>
  <div class="EchartPractice">
    <div id="main"></div>
  </div>
</template>

<script>
  export default {
    name: "FirstEcharts",
    methods:{
      drawChart() {
        let myEchart = this.$echarts.init(document.getElementById("main"));
        let option = {
          title:{
            text:"Echarts柱状图小练习"
          },
          // tooltip是提示框组件，即鼠标移上去时候显示的提示信息
          tooltip:{},
          // legend就是Echarts图表中对图形的解释部分
          legend:{
            orient: 'vertical',
            x:'right',
            y:'top',
            data:["去年","今年"]
          },
        
          // 横坐标是类目型的，因此需要在 xAxis 中指定对应的值
          xAxis:{
            data: ["苹果","橘子","梨子","香蕉"]
          },
          // 纵坐标是数值型的，可以根据 series 中的 data，自动生成对应的坐标范围。
          yAxis:{},
          // 如果需要实现多系列的柱状图，只需要在 series 多添加一项就可以了
          series:[
            {
              name:'去年',
              type:"bar",
              data:[60,70,35,50]
            },
            {
              name:'今年',
              type:"bar",
              data:[50,80,45,60]
            }
          ]
        };
        myEchart.setOption(option);
      }
    },
    mounted() {
      this.drawChart();
    }
  }
</script>

<style scoped>
  #main {
    width: 600px;
    height:400px;
    margin: auto;
    margin-top: 100px
  }
</style>

