<template>
	<v-container>
		<v-layout justify-center>
			<v-flex xs12 
        lg6 
        xl6>
				<v-card
					outlined
				>
					<!-- <v-card-title>일정 {{ currentMode }}</v-card-title> -->
					<v-card-text>
						<v-form>
							<v-date-picker 
								show-current
								reactive
								full-width
								color="indigo lighten-2"
								v-model="date" ></v-date-picker>
							<v-layout>
								<v-btn-toggle  
									mandatory
									
									v-model="option" 
									class="mt-4">
									<v-btn tile value="결석" class="pl-3 pr-3" color="indigo lighten-2">
										<span>결석</span>
									</v-btn>
									<v-btn tile value="지각" class="pl-3 pr-3" color="indigo lighten-2">
										<span>지각</span>
									</v-btn>
									<v-btn tile value="기타" class="pl-3 pr-3" color="indigo lighten-2">
										<span>기타</span>
									</v-btn>
								</v-btn-toggle>
							</v-layout>
							<v-text-field
								color="indigo lighten-2"
								v-model="reason"
								class="mt-4"
								label="이유를 말씀해주세요"
							></v-text-field>
						</v-form>
					</v-card-text>
					<v-btn
              fixed
              bottom
              right
							fab  
							@click="saveSchedule"
							class="indigo darken-1 white--text">
							<v-icon>check</v-icon>
					</v-btn>
					<v-btn
              fixed
              bottom
              left
							fab  
							@click="delSchedule"
							class="red darken-1 white--text">
							<v-icon>delete</v-icon>
					</v-btn>
					<v-snackbar
						v-model="toast"
						timeout="3000"
					>
						{{ saveMessage }}
						<!-- <v-btn
							icon
							@click="toast = false"
						>
							<v-icon>close</v-icon>
						</v-btn> -->
					</v-snackbar>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import * as firebase from 'firebase'

export default {
	data() {
		return {
			date: new Date().toISOString().substr(0, 10),
			reactive: true,
			fullWidth: true,
			showCurrent: true,
			option: '결석',
			reason: '',
			reg: true,
			toast: false,
		}
	},
	methods: {
		saveSchedule() {
			this.toast = true
		},
	},
	computed: {
		currentMode() {
			if(true) {
				return '등록'
			} else {
				return '수정'
			}
		},
		saveMessage() {
			if(true) {
				return '저장되었습니다 :)'
			} else {
				return '오류 발생 :('
			}
		}
	}
}
</script>

<style>
 
</style>
