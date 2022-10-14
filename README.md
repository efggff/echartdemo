数据可视化：能够将单一的数据通过合适的可视化图表类型表现出来，使其更加直观的展现数据的变化趋势、对比、峰值等等。其实在前端开发中，数据可视化也尤为重要，在众多图表库中，echarts作为最常见的图表库之一，下面将从图表安装、图表使用、图表配置三方面为大家一一详解。

一、安装
1. 下载echarts
在下载echarts时，很多人可能会遇到安装不成功或者报错的问题，解决办法可以通过重装或者是装之前的版本来解决。
npm install echarts --save
npm install echarts@4.8.0 --save
//卸载命令
npm uninstall echarts
2. main.js中引入并注册
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;

二、使用
echarts的使用也非常的简单，具体分为以下几步：
1. 为echarts准备一个具有宽高的div容器（简单来说就是存放图表的一个占位）
<div id="foldBreadChart" :style="{ width: '100%', height: '100%' }"></div>
2. 获取定义id并通过echarts.init()方法初始化echarts实例
 var myChart = this.$echarts.init(document.getElementById('foldBreadChart'));
3. 根据个人需求调整图表的配置项和数据
let option = {
    ......
}
4. 通过setOption()方法生成图表
myChart.setOption(option)


三、主要配置（常用的）
series
– 系列列表。每个系列通过 type 决定自己的图表类型
– 通俗的理解：图标数据，指定什么类型的图标，可以多个图表重叠。

xAxis：直角坐标系 grid 中的 x 轴

– boundaryGap: 坐标轴两边留白策略 true，这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间。

yAxis：直角坐标系 grid 中的 y 轴

grid：直角坐标系内绘图网格。

title：标题组件

tooltip：提示框组件

legend：图例组件

color：调色盘颜色列表

stack：数据堆叠，同个类目轴上系列配置相同的stack值后 后一个系列的值会在前一个系列的值上相加。


