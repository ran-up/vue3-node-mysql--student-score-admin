<template>
    <div class="heading">
        <div class="heading-title">
            <h3>添加学生成绩</h3>
            <h4>Student Scores Insert</h4>
        </div>
        <router-link to="/info">返回</router-link>
    </div>
    <form class="form">
        <div class="form-item">
            <p>Name</p>
            <div class="form-item-input">
                <input
                    type="text"
                    v-model="state.form.name"
                    @blur="
                        $event.target.value.length > 0
                            ? (state.rules.name = false)
                            : (state.rules.name = true)
                    "
                    placeholder="请输入姓名" />
                <p class="ipt-msg" :class="{ error: state.rules.name }">未输入姓名</p>
            </div>
        </div>
        <div class="form-item">
            <p>Gender</p>
            <div class="form-item-input">
                <input
                    type="text"
                    v-model="state.form.gender"
                    @blur="
                        ;['男', '女'].includes($event.target.value)
                            ? (state.rules.gender = false)
                            : (state.rules.gender = true)
                    "
                    placeholder="请输入性别" />
                <p class="ipt-msg" :class="{ error: state.rules.gender }">性别请输入男或女</p>
            </div>
        </div>
        <div class="form-item">
            <p>Chinese</p>
            <div class="form-item-input">
                <input
                    type="text"
                    v-model="state.form.chinese"
                    @blur="
                        $event.target.value.length > 0
                            ? (state.rules.chinese = false)
                            : (state.rules.chinese = true)
                    "
                    placeholder="请输入语文成绩" />
                <p class="ipt-msg" :class="{ error: state.rules.chinese }">输入失败</p>
            </div>
        </div>
        <div class="form-item">
            <p>Math</p>
            <div class="form-item-input">
                <input
                    type="text"
                    v-model="state.form.math"
                    @blur="
                        $event.target.value.length > 0
                            ? (state.rules.math = false)
                            : (state.rules.name = true)
                    "
                    placeholder="请输入数学成绩" />
                <p class="ipt-msg" :class="{ error: state.rules.math }">输入失败</p>
            </div>
        </div>
        <div class="form-item">
            <p>English</p>
            <div class="form-item-input">
                <input
                    type="text"
                    v-model="state.form.english"
                    @blur="
                        $event.target.value.length > 0
                            ? (state.rules.english = false)
                            : (state.rules.english = true)
                    "
                    placeholder="请输入英语成绩" />
                <p class="ipt-msg" :class="{ error: state.rules.english }">输入失败</p>
            </div>
        </div>
        <div class="form-item btn">
            <button type="reset">重置</button>
            <button type="submit" @click.prevent="saveClickHandler">保存</button>
        </div>
    </form>
</template>

<script setup>
import { reactive } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const state = reactive({
    form: {
        // id: '',
        name: '',
        gender: '',
        chinese: '',
        math: '',
        english: ''
    },
    rules: {
        // id: '',
        name: '',
        gender: '',
        chinese: '',
        math: '',
        english: ''
    }
})

const saveClickHandler = () => {
    const keys = Object.keys(state.form)
    const values = Object.values(state.form).filter(item => item.length > 0)
    if (values.length !== keys.length) return alert('内容未全部输入')
    axios
        .post('http://127.0.0.1:3666/add', state.form)
        .then(res => {
            if (res.data.code === 200) {
                alert(res.data.message)
                router.push('/info')
            } else {
                alert(res.data.message)
            }
        })
        .catch(err => {
            alert(err.message)
        })
}
</script>
<script>
export default {
    name: 'FormInfo'
}
</script>

<style scoped lang="scss">
@media screen {
    .heading {
        margin: 30px auto 0;
        padding-left: 10%;
        display: flex;
        align-items: center;
        width: max-content;
        gap: 0 20px;
        &-title {
            display: flex;
            align-items: center;
            gap: 0 10px;
        }
    }
    .form {
        overflow: hidden;
        margin-top: 20px;
        &-item {
            margin: 5px auto 0;
            display: flex;
            align-items: start;
            justify-content: end;
            gap: 10px;
            width: 50%;
            input {
                padding: 8px 10px;
                outline: none;
                border: none;
                background-color: #dbf2fe;
            }
        }
        .ipt-msg {
            opacity: 0;
        }
        .error {
            opacity: 1;
            color: #ff0c55;
            font-size: 14px;
        }
        .btn {
            button {
                padding: 6px 20px;
                color: white;
                font-size: 14px;
                background-color: skyblue;
                border: none;
                outline: none;
                border-radius: 4px;
                cursor: pointer;
            }
        }
    }
    @media (min-width: 1024px) {
        .heading {
            justify-content: space-around;
            margin-top: 0;
        }
    }
}
</style>
