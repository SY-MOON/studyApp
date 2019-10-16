<template>
  <v-app>
    <!-- <v-system-bar color="pink darken-2"></v-system-bar> -->
    <!-- Header -->
    <v-toolbar class="indigo darken-1">
      <v-toolbar-title class="white--text"><router-link to="/"><v-icon class="white--text">code</v-icon>토요스터디</router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <v-btn icon
          color=""
          v-if="isHome" 
          @click="moveToAdd" 
          title="등록">
          <v-icon class="white--text">add</v-icon>
        </v-btn>
        <v-btn icon v-else @click="moveToHome">
          <v-icon class="white--text">close</v-icon>
        </v-btn>
      </v-toolbar-title>
    </v-toolbar>
    <!-- /Header -->

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import * as firebase from 'firebase'

export default {
  name: 'app',
  data() {
    return {
      isHome: true
    }
  },
  methods: {
    moveToAdd() {
      this.isHome = false
      this.$router.push('/schedule')
    },
    moveToHome() {
      this.isHome = true
      this.$router.push('/')
    }
  },
  computed: {
    isLogin() {
      // let user = firebase.auth().currentUser
      // if(user) {
      //   console.log(user)
      //   console.log('true')
      //   return true
      // } else {
      //   console.log('false')
      //   return false
      // }
    }
    
  }
}
</script>

<style>
a,
a:link,
a:active,
a:visited {
  text-decoration: none;
  color: inherit;
}
</style>
