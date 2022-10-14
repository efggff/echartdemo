<template>
    <div>
        <div id="Fourth"></div>
    </div>
</template>
  
<script>
export default {
    name: "FourthEcharts",
    methods: {
        drawChart() {
            let myEchart = this.$echarts.init(document.getElementById("Fourth"));
            let option = {
                title: {
                    text: "Echarts饼状图小练习"
                },
                // tooltip是提示框组件，即鼠标移上去时候显示的提示信息
                tooltip: {},
                xAxis: {
                    data: ["苹果","橘子","梨子","香蕉","橙子","葡萄","油桃"]
                },
                yAxis: {},
                series: [
                    {
                        type: 'scatter',
                        data: [50,80,45,60,75,40,55],
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
#Fourth {
    width: 600px;
    height: 400px;
    margin: auto;
    margin-top: 100px
}
</style>
  
  