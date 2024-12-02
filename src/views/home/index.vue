<template>
    <div>
        <h3>{{ msg }}</h3>
        <h4>Student Scores Table</h4>
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
            <tr v-for="(s, index) in info" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ s.id }}</td>
                <td>{{ s.name }}</td>
                <td>{{ s.gender }}</td>
                <td>{{ s.chinese }}</td>
                <td>{{ s.math }}</td>
                <td>{{ s.english }}</td>
                <td>
                    <router-link to="/insert" active-class="active">Insert</router-link>&nbsp;&nbsp;
                    <router-link :to="'/edit/' + s.id" active-class="active">Edit</router-link
                    >&nbsp;&nbsp;
                    <a href @click="del_stu_info(s.id)" active-class="active">Del</a>&nbsp;&nbsp;
                </td>
            </tr>
        </table>
    </div>
</template>

<script setup></script>
<script>
export default {
    name: 'StudentHome'
}
</script>

<style scoped></style>
