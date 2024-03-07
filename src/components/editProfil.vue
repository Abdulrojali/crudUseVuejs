<script>
import {useRoute,useRouter} from 'vue-router'
import {crud} from '../store/crud'
export default{
    data(){
        return{
            nama:null,
            nim:null,
            jurusan:null,
            kelas:null,
            imgUrl:null
        }
    },
    setup(){
        const router=useRouter()
        const crudStore=crud()
        return{router,crudStore}
    },
    methods:{
        validationEdit(){
            this.crudStore.editCrudData(this.imgUrl,this.nama,this.nim,this.jurusan,this.kelas)
            if(this.crudStore.statusEditData==true){
                this.router.push('/')
            }
            else{
                alert('failed')   
            }
        },
        backHome(){
            this.router.push('/')
        },
        reloadPage(){
            window.location.reload()
        },
        changeimg(event){
            const file=event.target.files[0]
            if(file){
                this.imgUrl=file
            }
        }
    }
}
</script>

<template>
    <div class="container">
        <h1 class="heading">edit profil mahasiswa</h1>
        <div class="form">
            <input type="file" name="" id="" @change="changeimg">
            <input type="text" v-model="nama" placeholder="nama">
            <input type="text" v-model="nim" placeholder="nim">
            <input type="text" v-model="jurusan" placeholder="jurusan">
            <input type="text" v-model="kelas" placeholder="kelas">
            <div class="btn">
                <button @click="validationEdit">submit</button>
                <button @click="reloadPage">cancel</button>
            </div>
        </div>
    </div>
    <i class="fa-solid fa-arrow-left-long" @click="backHome"></i>
</template>
<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.container{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.heading{
    font-size: 1.5em;
    font-weight: 600;
    text-transform: capitalize;
    position: absolute;
    top: 20px;
    left: 30px;
    font-family: 'Courier New', Courier, monospace;
}
.form{
    width: 100%;
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
input{
    margin: auto;
    width: 50%;
    padding: 6px 10px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    border-bottom: 1px solid gray;
   
}
.btn{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 25px;
    align-items:center;
}
button{
    padding: 6px 10px;
    border: none;
    border-radius: 5px;
    cursor:pointer;
    background-color: blue;
    color: white;
}
button:hover{
    opacity: .7;
}
i{
    position: absolute;
    top: 50px;
    left: 45px;
    font-size: 1.2em;
    cursor:pointer;
}
label{
    text-align: start;
}
</style>