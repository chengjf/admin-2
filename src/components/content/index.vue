<template>
   <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
          
          <slot></slot>

        </v-layout>
      </v-container>
    </v-content>
</div>
</template>
<script>
export default {
  name: "content"
}
</script>
