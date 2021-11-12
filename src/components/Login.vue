<template>
  <div>
      <input class="form" type="text" placeholder="아이디" v-model="id"><br>
      <button v-on:click="login">로그인</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data: function() {
        return{ 
            id:''
        }
    },
    methods: {
        login: function() {
            console.log(this.id);
            var url = 'https://jsonplaceholder.typicode.com/users';
            var data = {
            username: this.id,
            }
            console.log(data)
            axios.post(url, data).then((response)=> {
                console.log(response);
                this.$router.push('/home');
             }) 

        }
    }

}
</script>

<style>

</style>