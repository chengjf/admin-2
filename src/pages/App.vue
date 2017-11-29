<template>
  <div id="app">
    <b-container class="bv-example-row" style="min-height:100%">
		<b-row>
			<b-col>
					<v-header></v-header>
				</b-col>
			<b-col col lg="10">
				<b-row>
					<b-col col lg="2">
						<v-siderbar></v-siderbar>
					</b-col>
					<b-col>
      			<router-view></router-view>
					</b-col>
				</b-row>
		</b-col>
	</b-row>
	
	<vFooter></vFooter>
	
	</b-container>
  </div>
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
