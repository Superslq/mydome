<!--  -->
<template>
  <div>
    <h1>student</h1>
     <el-button
            size="mini"
            type="danger"
             @click="$router.push('/student/add')"
            >添加信息</el-button
          >
             <!-- <el-menu-item index="/student/add">学生管理</el-menu-item> -->
    <el-table :data="tableData">
      <el-table-column label="性名" prop="name"></el-table-column>
      <el-table-column label="日期" prop="data"></el-table-column>
      <el-table-column label="地址" prop="address"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="item">
          <el-button size="mini"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="dele(item.$index)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    dele(n){
      this.tableData.splice(n,1)
    }
  },
};
</script>
<style scoped>
</style>