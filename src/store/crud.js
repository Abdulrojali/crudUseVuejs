import {defineStore} from 'pinia'
import img from '../assets/blankPicture.png'
export const crud=defineStore('crud',{
    state:()=>({
        listMahasiswa:[
            {index:0,url:img,nama:'budi',nim:'20225040',jurusan:'sistem informasi',kelas:'SI22A',viewIcon:'fa-solid fa-eye',deleteIcon:'fa-solid fa-trash',editIcon:'fa-solid fa-pen-to-square'},
            {index:1,url:img,nama:'budi',nim:'20225040',jurusan:'sistem informasi',kelas:'SI22A',viewIcon:'fa-solid fa-eye',deleteIcon:'fa-solid fa-trash',editIcon:'fa-solid fa-pen-to-square'},
            {index:2,url:img,nama:'ahmad',nim:'20225050',jurusan:'sistem informasi',kelas:'SI22A',viewIcon:'fa-solid fa-eye',deleteIcon:'fa-solid fa-trash',editIcon:'fa-solid fa-pen-to-square'},
            {index:3,url:img,nama:'ridho',nim:'20225060',jurusan:'sistem informasi',kelas:'SI22A',viewIcon:'fa-solid fa-eye',deleteIcon:'fa-solid fa-trash',editIcon:'fa-solid fa-pen-to-square'},
            {index:4,url:img,nama:'sinta',nim:'20225070',jurusan:'sistem informasi',kelas:'SI22A',viewIcon:'fa-solid fa-eye',deleteIcon:'fa-solid fa-trash',editIcon:'fa-solid fa-pen-to-square'},
        ],
        listDataDelete:[],
        indexProfile:null,
        statusEditData:false,
        getIndexDelete:null,
    }),
    getters:{
        dataDelete(){
         const dataDelete=this.listMahasiswa[this.getIndexDelete]
         this.listDataDelete.push(dataDelete)
         return this.listDataDelete
        }
    },
    actions:{
        deleteCrud(index){
            this.listMahasiswa.splice(index,1)
            this.getIndexDelete=index
        },
        getIndexProfile(index){
            return this.indexProfile=index
        },
        editCrudData(imgUrl,nama,nim,jurusan,kelas){
            if(nama==='' || nim==='' || jurusan===''|| kelas===''){
                this.statusEditData
                alert('tolong masukkan inputan!!')
            }
            else{
                const imgData=URL.createObjectURL(imgUrl)
                this.listMahasiswa[this.indexProfile].url=imgData
                this.listMahasiswa[this.indexProfile].nama=nama
                this.listMahasiswa[this.indexProfile].nim=nim
                this.listMahasiswa[this.indexProfile].jurusan=jurusan
                this.listMahasiswa[this.indexProfile].kelas=kelas
                this.statusEditData=true

            }

        },
        restoreData(index){
            const dataRestore=this.listDataDelete[index]
            this.listMahasiswa.push(dataRestore)
            this.listDataDelete.splice(dataRestore,1)
        }
    }
})