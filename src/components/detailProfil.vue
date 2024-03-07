<script>
import {useRoute,useRouter} from 'vue-router'
import {crud} from '../store/crud'
export default{
    setup(){
        const route=useRoute().params.id
        const router=useRouter()
        const crudStore=crud()
        const dataList=crudStore.listMahasiswa[route]
        return{route,router,dataList}
    },
    methods:{
        backHome(){
            this.router.push('/')
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="content">
            <img :src="`${dataList.url}`" alt="">
            <h3>nama: {{dataList.nama}}</h3>
            <h5>nim: {{ dataList.nim }}</h5>
            <b>jurusan: {{dataList.jurusan}}</b>
            <b>kelas: {{dataList.kelas}}</b>
            <i class="fa-solid fa-arrow-left-long" @click="backHome"></i>
        </div>
    
    </div>
   
</template>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box
}
.container{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.content{
    width: 70%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}
img{
    width: 100%;
    height: 250px;
    object-fit: fill;
}
i{
    font-size: 2em;
    cursor: pointer;
}
</style>