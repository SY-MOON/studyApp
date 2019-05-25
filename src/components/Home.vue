<template>
	<v-container>
    <v-layout>
      <v-flex>
        <v-card>
          <v-list>
            <v-subheader>일정</v-subheader>
            <template v-for="(item, index) in items">
              <v-divider v-if="item.divider" :inset="item.inset" :key="index"></v-divider>
              <v-list-tile v-else :key="item.title" avatar >
                <v-list-tile-avatar>
                  <img :src="item.avatar">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title v-html="item.date"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="item.option"></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
        </v-card>
      </v-flex>
      <v-flex>
        <v-btn
          absolute
          fab
          bottom
          right
          v-if="isSat"
        >
          <v-icon>check</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
	</v-container>
</template>

<script>
//토요일은 6, getDay()
export default {
	data() {
    return {
      isSat: false,
      items: [

      ]
    }
  }
}
</script>

<style>
 
</style>
