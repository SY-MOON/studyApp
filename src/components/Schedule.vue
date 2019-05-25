<template>
	<v-container>
		<v-layout>
			<v-flex>
				<v-form>
					<v-date-picker v-model="date" show-current="today"></v-date-picker>
					<v-radio-group v-model="option">
						<v-radio label="결석" value="못가요"></v-radio>
						<v-radio label="지각" value="늦음"></v-radio>
						<v-radio label="기타" value="기타"></v-radio>
					</v-radio-group>
					<v-text-field
            v-model="reason"
            label="사유"
						placeholder="설명좀"
          ></v-text-field>
				</v-form>
				<v-btn block v-if="reg" @click="addSchedule">등록</v-btn>
				<v-btn block v-else @click="modSchedule">수정</v-btn>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			date: null,
			option: '결석',
			reason: '',
			reg: true
		}
	}
}
</script>

<style>
 
</style>
