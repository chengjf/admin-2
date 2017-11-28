<template>
  <div id="app">
    <b-container class="bv-example-row" style="min-height:100%">
	<b-row>
		<b-col class="w-25">
			<b-nav vertical class="w-25">
				<b-nav-item active>Active</b-nav-item>
				<b-nav-item>Link</b-nav-item>
				<b-nav-item>Another Link</b-nav-item>
				<b-nav-item disabled>Disabled</b-nav-item>
			</b-nav>
		</b-col>
		<b-col class="w-75">
			<b-row align-v="start">
				<b-col>HEAD</b-col>
			</b-row>
			<b-row align-v="center">
			<b-col>
				
			</b-col>
			<b-col>One of three columns</b-col>
			
			</b-row>
			<b-row align-v="end">
				<b-col>FOOTER</b-col>
			</b-row>
			<footer>COPYRIGHT</footer>
		</b-col>
	</b-row>
	
	</b-container>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
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
