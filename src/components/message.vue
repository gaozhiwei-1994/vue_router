<template>
  <div>
    <ul>
      <li v-for="m in message">
        <router-link :to="`/home/message/mdetail/${m.id}`">
          {{m.name}}
        </router-link>
      </li>
    </ul>
      <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: []
      }
    },
    created () {
      setTimeout(()=>{
        this.message = [
          {id:1, name: 'Message--001'},
          {id:2, name: 'Message--002'},
          {id:3, name: 'Message--003'},
          {id:4, name: 'Message--004'}
        ]
      },200)
    }
  }
</script>

<style>

</style>
