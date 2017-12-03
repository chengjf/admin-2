<template>
  <v-app id="inspire">
    <v-siderbar></v-siderbar>
    <v-header></v-header>
   <v-content>
    <router-view></router-view>
   </v-content>
    <vFooter></vFooter>
  </v-app>
</template>

<script>
import vFooter from "components/footer"
import vHeader from "components/header"
import vSiderbar from "components/sidebar"
import vContent from "components/content"

export default {
	name: "app",
	components: {
		vFooter,
		vHeader,
		vSiderbar,
		vContent
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss">

</style>
