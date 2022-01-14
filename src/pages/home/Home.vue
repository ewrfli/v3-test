<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import { useMainStore } from "@/store/mian"
import { ElButton } from 'element-plus'
const count = ref(0)
const mainStore = useMainStore()
const updateName = ()=>{
  // $patch 修改 store 中的数据
  mainStore.$patch({
    name: 'name被修改nameLength也随之改变了'
  })
}
console.log(import.meta.env.VITE_APP_WEB_URL)
</script>

<template>
    <div class="test">hoem-page</div>
    <router-link to="/login">Go to login</router-link>
    <div>
        <el-button>get</el-button> <el-button @click="count++">{{ count }}</el-button>
    </div>
    <div>用户名:{{ mainStore.name }}<br />长度:{{ mainStore.nameLength }}</div>
  <hr/>
  <el-button type="primary" @click="updateName">修改store中的name</el-button>
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style lang="scss">
.test {
  color: $test-color;
}
</style>
