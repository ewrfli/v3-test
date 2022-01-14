<script setup lang="ts">
import HelloWorld from '../home/Home.vue'
import { useMainStore } from "@/store/mian"
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
    <div>hoem-page</div>
    <router-link to="/login">Go to login</router-link>
    <div>
        <button>get</button>
    </div>
    <div>用户名:{{ mainStore.name }}<br />长度:{{ mainStore.nameLength }}</div>
  <hr/>
  <button @click="updateName">修改store中的name</button>
    <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
</template>

<style>

</style>
