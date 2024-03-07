<script>
import {useRouter} from 'vue-router'
import {crud} from '../store/crud'
import historyDeleteData from './historyDeleteData.vue'
export default{
    setup(){
        const crudStore=crud()
        const router=useRouter()
        return{crudStore,router}
    },
    methods:{
        deleteData(index){
            this.crudStore.deleteCrud(index)
        },
        viewData(index){
            this.router.push(`/detailProfil/${index}`)
        },
        editData(index){
            this.crudStore.getIndexProfile(index)
            this.router.push(`/editProfil/${index}`)
        }
    },
    components:{
        historyDeleteData
    }
}
</script>
<template>
    <div class="container">
        <h1 class="heading">list mahasiswa</h1>
        <div class="content">
            <div class="col"
            v-for="(data,index) in crudStore.listMahasiswa" :key="index">
            <img :src="`${data.url}`" alt="">
            <h3>nama :{{ data.nama }}</h3>
            <b>nim :{{data.nim}}</b>
            <b>jurusan :{{data.jurusan}}</b>
            <b>kelas :{{data.kelas}}</b>
            <div class="icon">
                <i :class="`${data.viewIcon}`" @click="viewData(index)"></i>
                <i :class="`${data.deleteIcon}`" @click="deleteData(index)"></i>
                <i :class="`${data.editIcon}`" @click="editData(index)"></i>
            </div>
            </div>
        </div>
        <historyDeleteData></historyDeleteData>
    </div>
</template>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.container{
    width: 100%;
    height: 100%;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.heading{
    font-size: 1.5em;
    font-family: 'Courier New', Courier, monospace;
    text-transform: capitalize;
    margin-bottom: 30px;
    text-align: left;
}
.content{
    width: 80%;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(160px,1fr));
    grid-gap: 10px;
    margin-bottom: 50px;
}
.col{
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-shadow: 0 0 2px 1px gray;
    padding:10px;
    border-radius: 5px;
}
.icon{
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
i{
    cursor: pointer;
}
i:hover{
    opacity: .7;
}
</style>