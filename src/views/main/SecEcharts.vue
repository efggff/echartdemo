<template>
    <div>
        <div id="Sec"></div>
    </div>
</template>
  
<script>
export default {
    name: "SecEcharts",
    methods: {
        drawChart() {
            let myEchart = this.$echarts.init(document.getElementById("Sec"));
            let option = {
                title: {
                    text: "Echarts折线图小练习"
                },
                xAxis: {
                    data: ["苹果","橘子","梨子","香蕉"]
                },
                yAxis: {},
                series: [
                    {
                        name:'去年',
                        data: [60,70,35,50],
                        // type 将 yAxis 的类型设定为数值型line
                        type: 'line',
                        label: {
                            show: true,
                            position: 'bottom'
                        },
                        // areaStyle 设置折线图的填充区域样式，将其设为为 {} 表示使用默认样式，即使用系列的颜色以半透明的方式填充区域。如果想指定特定的样式，
                        areaStyle: {}
                    },
                    {
                        name:'今年',
                        data: [50,80,45,60],
                        type: 'line',
                        label: {
                            show: true,
                            position: 'bottom'
                        },
                        areaStyle: {
                            color: 'orange',
                            opacity: 0.5
                        }
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
#Sec {
    width: 600px;
    height: 400px;
    margin: auto;
    margin-top: 100px
}
</style>
  
  