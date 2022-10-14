<template>
    <div>
        <div id="Third"></div>
    </div>
</template>
  
<script>
export default {
    name: "ThirdEcharts",
    methods: {
        drawChart() {
            let myEchart = this.$echarts.init(document.getElementById("Third"));
            let option = {
                title: {
                    text: "Echarts饼状图小练习"
                },
                // tooltip是提示框组件，即鼠标移上去时候显示的提示信息
                tooltip: {},
                legend:{
                    orient: 'vertical',
                    x:'right',
                    y:'top',
                    data:["苹果","橘子","梨子","香蕉"]
                },
                series: [
                    {
                        type: 'pie',
                        data: [
                            {
                                //  value 不需要是百分比数据
                                value: 50,
                                name: '苹果'
                            },
                            {
                                value: 80,
                                name: '橘子'
                            },
                            {
                                value: 45,
                                name: '梨子'
                            },
                            {
                                value: 60,
                                name: '香蕉' 
                            }
                        ]
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
#Third {
    width: 600px;
    height: 400px;
    margin: auto;
    margin-top: 100px
}
</style>
  
  