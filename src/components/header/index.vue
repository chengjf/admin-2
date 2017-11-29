<template>
  <b-navbar toggleable="md" type="dark" variant="info">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#" to="home">NavBar</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">

                <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>

                <b-nav-item-dropdown right>
                    <!-- Using button-content slot -->
                    <template slot="button-content">
                        <em>{{username}}</em>
                    </template>
                    <b-dropdown-item href="#">Profile</b-dropdown-item>
                    <b-dropdown-item href="#">Signout</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>
<script>
export default {
  name: "header",
  data: function(){
      return {
        username : "123"
      }
  }
}
</script>

