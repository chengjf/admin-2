<template>
  <div id="app">
   <b-alert show>Default Alert</b-alert>
    <b-container class="bv-example-row">
		<b-row align-v="start">
			<b-col>HEAD</b-col>
			<b-nav pills>
  <b-nav-item active>Active</b-nav-item>
  <b-nav-item>Link</b-nav-item>
  <b-nav-item-dropdown id="nav7_ddown" text="Dropdown" right>
    <b-dropdown-item>one</b-dropdown-item>
    <b-dropdown-item>two</b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item>three</b-dropdown-item>
  </b-nav-item-dropdown>
</b-nav>
		</b-row>
		<b-row align-v="center">
			<b-col>
				<b-nav vertical class="w-50">
				  <b-nav-item active>Active</b-nav-item>
				  <b-nav-item>Link</b-nav-item>
				  <b-nav-item>Another Link</b-nav-item>
				  <b-nav-item disabled>Disabled</b-nav-item>
				</b-nav>
			</b-col>
			<b-col>One of three columns</b-col>
			
		</b-row>
		<b-row align-v="end">
			<b-col>FOOTER</b-col>
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
