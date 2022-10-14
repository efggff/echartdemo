<template>
  <el-row class="tac">
      <el-menu
        router
        :default-active="active"
        class="el-menu-vertical-demo"
        mode="horizontal"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="/">柱状图</el-menu-item>
        <el-menu-item index="/SecEcharts">折线图</el-menu-item>
        <el-menu-item index="/ThirdEcharts">饼状图</el-menu-item>
        <el-menu-item index="/FourthEcharts">散点图</el-menu-item>
      </el-menu>
  </el-row>
</template>

<script>
export default {
  data(){
    return {
      active: "/",
    }
  }
};
</script>

<style>

</style>