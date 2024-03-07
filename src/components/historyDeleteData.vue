<script>
import {crud} from '../store/crud.js'
export default{
    setup(){
        const crudStore=crud()
        return{crudStore}
    },
    methods:{
        recoveryData(index){
            this.crudStore.restoreData(index)
        }
    }
}
</script>

<template>
     <h5 class="heading">history</h5>
     <p v-if="crudStore.getIndexDelete==null">
        belum ada data
     </p>
     <div class="grid" v-else>
        <div class="col" 
     v-for="(data,index) in crudStore.dataDelete" 
     :key="index">
     <h3>nama: {{ data.nama }}</h3>
     <b>nim: {{ data.nim }}</b>
     <b>jurusan: {{ data.jurusan }}</b>
     <b>kelas: {{ data.kelas }}</b>
     <button @click="recoveryData(index)">restore</button>
     </div>
     </div>

</template>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.heading{
    font-size: 1.5em;
    font-family: 'Courier New', Courier, monospace;
    text-transform: capitalize;
    margin-bottom: 15px;
}
p{
    color: red;
}
.grid{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: center;
}
.col{
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>