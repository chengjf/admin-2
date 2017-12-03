<template>
  <div>
   <v-toolbar
      color="blue darken-3"
      dark
      app
      clipped-left
      fixed
    >
      <v-toolbar-title :style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawerBus"></v-toolbar-side-icon>
        <span class="hidden-xs-only">Google Contacts</span>
      </v-toolbar-title>
      <v-text-field
        light
        solo
        prepend-icon="search"
        placeholder="Search"
        style="max-width: 500px; min-width: 128px"
      ></v-text-field>
      <div class="d-flex align-center" style="margin-left: auto">
        <v-btn icon>
          <v-icon>apps</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>notifications</v-icon>
        </v-btn>
        <v-menu bottom left offset-y>
          <v-btn icon slot="activator">
            <v-avatar size="32px" tile>
            <img
              src="https://vuetifyjs.com/static/doc-images/logo.svg"
              alt="Vuetify"
            >
            </v-avatar>
          </v-btn>
          <v-list>
            <v-list-tile v-for="(item, i) in items" :key="i" @click="">
              <v-list-tile-title @click="click(i)">{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </div>
    </v-toolbar>

     <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title
          class="grey lighten-4 py-4 title"
        >
          Create contact
        </v-card-title>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            <v-flex xs12 align-center justify-space-between>
              <v-layout align-center>
                <v-avatar size="40px" class="mr-3">
                  <img
                    src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                    alt=""
                  >
                </v-avatar>
                <v-text-field
                  placeholder="Name"
                ></v-text-field>
              </v-layout>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                prepend-icon="business"
                placeholder="Company"
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                placeholder="Job title"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="mail"
                placeholder="Email"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                type="tel"
                prepend-icon="phone"
                placeholder="(000) 000 - 0000"
                mask="phone"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="notes"
                placeholder="Notes"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-btn flat color="primary">More</v-btn>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="dialog = false">Cancel</v-btn>
          <v-btn flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="logout_dialog" persistent max-width="290">
      <v-btn color="primary" dark slot="activator">Open Dialog</v-btn>
      <v-card>
        <v-card-title class="headline">确定退出？</v-card-title>
        <v-card-text>退出后需要重新登录</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click.native="logout_dialog = false">取消</v-btn>
          <v-btn color="green darken-1" flat @click.native="logout">确认</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
  </div>
</template>
<script>
import {mapActions} from 'vuex'
import {SET_USER_INFO} from 'store/actions/type'
import bus from "bus"

export default {
  name: "header",
  data: function(){
      return {
        username : "123",
        drawer: true,
        dialog: false,
        logout_dialog: false,
        items: [
          {
            title: 'Profile',
            action: function(){
              console.log("profile")
            }
          },
          {
            title: 'Logout'
          }
        ],
      }
  },
  methods: {
    ...mapActions({
        set_user_info: SET_USER_INFO
    }),
    logout: function(){
      // alert("logout")
      this.logout_dialog=false
      this.set_user_info(
          {
            user: "1233",
            login: false
          }
        )
        setTimeout(this.$router.push({path: '/login'}), 500)
    },
    drawerBus: function(){
        this.drawer = !this.drawer
        bus.$emit("drawer", this.drawer);
    },
    click: function(index){
      console.log(index)
      switch(index){
        case 0:
          this.dialog = true;
        case 1:
          this.logout_dialog = true;
      }
    }
  }
}
</script>

