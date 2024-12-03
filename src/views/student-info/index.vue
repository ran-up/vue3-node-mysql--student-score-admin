<template>
    <div class="stu_table">
        <div class="stu_table-header">
            <div class="stu_table-header-left">
                <h3>学生成绩表</h3>
                <h4>Student Scores Table</h4>
            </div>
            <router-link to="/update">新增 Insert</router-link>
        </div>
        <table>
            <tr>
                <th>No</th>
                <th>Id</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Chinese</th>
                <th>Math</th>
                <th>English</th>
                <th>Admin</th>
            </tr>
            <template v-if="infoData.length > 0">
                <tr v-for="(s, index) in infoData" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ s.id }}</td>
                    <td>{{ s.name }}</td>
                    <td>{{ s.gender }}</td>
                    <td>{{ s.chinese }}</td>
                    <td>{{ s.math }}</td>
                    <td>{{ s.english }}</td>
                    <td>
                        <router-link :to="'/update/' + s.id">Edit</router-link>
                        &nbsp;&nbsp;
                        <a href @click="delStuClickHandler(s.id)">Del</a>
                    </td>
                </tr>
            </template>
            <tr v-else>
                <td colspan="8">暂无数据</td>
            </tr>
        </table>
    </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const infoData = ref([])

onMounted(() => {
    getInfoData()
})

// 获取学生数据
const getInfoData = () => {
    axios
        .get('http://127.0.0.1:3666/all')
        .then(res => {
            console.log('res', res)
            if (res.data.code === 200) {
                infoData.value = res.data.data
            } else {
                alert(res.data.message)
            }
        })
        .catch(err => {
            alert(err.message)
        })
}

// 删除学生
const delStuClickHandler = id => {
    console.log('id：', id)
}
</script>
<script>
export default {
    name: 'StudentHome'
}
</script>

<style scoped lang="scss">
h3,
h4 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
table {
    width: 100%;
    margin: 16px 0;
    border-collapse: collapse;
    border: 0;
}
th {
    background-color: #42b983;
    color: #000000;
}
th,
td {
    font-size: 0.95em;
    text-align: center;
    padding: 4px;
    border-collapse: collapse;
    border: 1px solid #c1e9fe;
    border-width: 1px 0 1px 0;
}
tr {
    border: 1px solid #c1e9fe;
    &:nth-child(odd) {
        background-color: #dbf2fe;
    }
    &:nth-child(even) {
        background-color: #fdfdfd;
    }
}
.stu_table {
    &-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        &-left {
            display: flex;
            align-items: center;
            gap: 0 10px;
        }
    }
}
</style>
