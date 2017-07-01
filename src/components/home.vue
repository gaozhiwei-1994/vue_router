<template>
    <div prop-name="atguigu">
      <h2>Home route component!</h2>
      <div><input type="text"></div>
      <div>
        <ul class="nav nav-tabs">
          <li>
            <router-link to="/home/news">news</router-link>
          </li>
          <li>
            <router-link to="/home/message">message</router-link>
          </li>
        </ul>
        <router-view></router-view>
      </div>
    </div>

</template>

<script>
  export default {}
</script>

<style>

</style>
