<template>
  <v-footer color="indigo" app>
    <span class="white--text" style="text-align:center">Copyright &copy; {{getYear}} Chengjf All Rights Reserved</span>
  </v-footer>
</template>
<script type="text/javascript">
  export default {
    computed: {
      getYear(){
        return new Date().getFullYear()
      }
    }
  }
</script>
