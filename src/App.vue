<template>
  <div>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>

export default {
	name: "appx",
};
</script>

<style lang="css">
@import '../node_modules/vuetify/dist/vuetify.min.css'
</style>
