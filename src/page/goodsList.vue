<template>
  <div class="page-product">
    <el-row class="m-crumbs">
      <crumbs />
    </el-row>
    <el-row>
      <el-col :span="19">
        <el-row>
          <categroy />
        </el-row>
        <el-row>
          <list />
        </el-row>
      </el-col>
      <el-col :span="5">right</el-col>
    </el-row>
  </div>
</template>

<script>
import crumbs from "@/components/product/crumbs.vue";
import Categroy from "@/components/product/categroy.vue";
import list from "@/components/product/list.vue";
export default {
  components: {
    crumbs,
    Categroy,
    list
  }
};
</script>

<style lang="scss">
@import '@/assets/css/products/index.scss';
</style>