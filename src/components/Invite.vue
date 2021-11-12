<template>
  <div>
    <button depressed slot="activator" @click="createInvitationToken"  color="#FFCC80">초대링크생성</button>  
        <label id = "invitationUrl" :value="invitationUrl">{{token}}</label>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      invitationUrl: "",
      token: null,
    }
  },

  computed: {
    invitationToken() {
      return this.token
    }
  },
  watch: {
    invitationToken (val) {
      console.log('watched invitationToken: ', val)
      this.invitationUrl = `http://localhost:8080/#/n/${val}`
    }
  },

  methods: {

    createInvitationToken() {
        this.token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
      },

  }

}
</script>

<style>

</style>