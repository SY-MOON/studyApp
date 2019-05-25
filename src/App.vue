<template>
  <v-app>
    <v-toolbar v-if="isLogin">
      <v-toolbar-title>토요스터디</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <v-btn icon v-if="isHome" @click="moveToAdd">
          <v-icon>add</v-icon>
        </v-btn>
        <v-btn icon v-else @click="moveToHome">
          <v-icon>close</v-icon>
        </v-btn>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      isLogin: true,
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
  }
}
</script>

<style>

</style>
