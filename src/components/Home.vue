<template>
	<v-container align-center justify-center grid-list-lg>


    <!-- lazy 쓰기 https://vuetifyjs.com/ko/components/lazy -->
    <v-layout justify-center column>
      <v-flex 
        xs12 
        lg6 
        xl6 
        v-if="isSat">
        <v-card>
          <v-list two-line>
            <template v-for="(item, index) in items">
              <v-subheader
                v-if="item.date"
                :key="item.date"
                inset
              >
                {{ item.date }}
              </v-subheader>


              <v-list-item
                v-else
                :key="item.name"
                ripple
              >
                <v-list-item-avatar>
                  <img :src="item.avatar">
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title v-html="item.name"></v-list-item-title>
                  <v-chip>
                    {{ item.option }}
                  </v-chip>
                  <v-list-item-subtitle v-html="item.detail"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-flex>
      
    </v-layout>
    <v-footer
      fixed
      padless
      height="100px">
       <v-flex>
        <v-card>
          <v-card-title>출석 현황</v-card-title>
          <v-card-text v-if="nobody">
              스터디 때 만나요~
          </v-card-text>

          <v-btn 
              absolute
              top
              right
							fab
              color="indigo darken-2"
              title="출첵"
              @click="check">
            <v-icon class="white--text">how_to_reg</v-icon>    
          </v-btn>
        </v-card>
      </v-flex>
    </v-footer>
	</v-container>
</template>

<script>
export default {
	data() {
    return {
      items: [
        {
            date: '2017.8.23',
          },
          {
            avatar: 'https://picsum.photos/250/300?image=660',
            name: 'Meeting @ Noon',
            option: '결석',
            detail:
              "<span class='text--primary'>Spike Lee</span> &mdash; I'll be in your neighborhood",
          },
          {
            avatar: 'https://picsum.photos/250/300?image=821',
            name: 'Summer BBQ <span class="grey--text text--lighten-1"></span>',
            option: '지각',
            detail:
              "<span class='text--primary'>to Operations support</span> &mdash; Wish I could come.",
          },
      ],
      nobody: true
    }
  },
  computed: {
    isSat() {
      var currentDate = new Date()
      var day = currentDate.getDay()
      console.log(day)
      if(day == 5) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    check() {
      window.alert('출!석!체!크!');
    }
  }
}
</script>

<style>
 
</style>
