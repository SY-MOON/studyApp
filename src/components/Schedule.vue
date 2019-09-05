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
								color="blue-grey darken-1"
								v-model="date" ></v-date-picker>
							<v-layout>
								<v-btn-toggle  
									mandatory
									color="blue-grey darken-2"
									v-model="option" 
									class="mt-4">
									<v-btn text value="결석" class="pl-3 pr-3">
										결석
									</v-btn>
									<v-btn text value="지각" class="pl-3 pr-3">
										지각
									</v-btn>
									<v-btn text value="기타" class="pl-3 pr-3">
										기타
									</v-btn>
								</v-btn-toggle>
							</v-layout>
							<v-text-field
								color="blue-grey darken-2"
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
							class="teal lighten-1 white--text">
							<v-icon>check</v-icon>
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
