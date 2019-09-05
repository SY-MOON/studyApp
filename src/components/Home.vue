<template>
	<v-container align-center justify-center grid-list-lg>

    <v-layout justify-center column>
      <!-- 출석현황 -->
      <!-- 1. 토요일 9시 노출될 것 일요일0시 숨김, 다른 날은 노출되지 않음 -->
      <!-- 2. 출석자 프로필과 이름 노출될 것 -->
      <!-- 3. 지각자는 지각비 노출할 것 /여기 표기되지 않는 사람은 현재 지각중이거나 결석 -->
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
     
      
      <!-- 일정목록 -->
      <!-- 1. 날짜로 정렬(가까운 날짜가 상단에) -->
      <!-- 2. 프로필사진과 이름, 사유, 옵션(지각/결석 등, 이거는 태그형식으로?) 노출 -->
      <!-- 3. 본인 등록 건의 경우 ... 버튼 배치 -> 누르면 수정/삭제 버튼 노출 -->
      
      
    </v-layout>
    <v-footer
      fixed
      padless
      height="100px">
       <v-flex>
        <v-card>
          <v-card-title>출석 현황</v-card-title>
          <v-card-text v-if="nobody">
              누가 먼저 올 것인가!
          </v-card-text>

          <v-btn 
              absolute
              top
              right
							fab
              color="indigo darken-2"
              title="출첵">
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
  }
}
</script>

<style>
 
</style>
