<template>
  <div>
      <button v-in:click="`/home/${this.id}`">마이페이지</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    props: [
        'id'
    ],
    created() {
        var url = 'https://jsonplaceholder.typicode.com/users';
        axios.get(url, {
            params: {
                id:this.id
            }
        }
        ).then((result)=> {
                console.log(result);
             }) 
    },
    methods: {
    
    }
}
</script>

<style>

</style>