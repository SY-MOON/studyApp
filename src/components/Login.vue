<template>
	<v-container>
		<v-btn 
			:loading="loading"
      :disabled="loading"
      color="secondary"
      @click="loader = 'loading'">
			로그인
		</v-btn>
	</v-container>
</template>

<script>
export default {
	data () {
		return {
			loader: null,
			loading: false,
			loading2: false,
			loading3: false,
			loading4: false
		}
	},
	watch: {
		loader () {
			const l = this.loader
			this[l] = !this[l]

			setTimeout(() => (this[l] = false), 3000)

			this.loader = null
		}
	}
  }
</script>

<style>
.custom-loader {
	animation: loader 1s infinite;
	display: flex;
}
@-moz-keyframes loader {
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(360deg);
	}
}
@-webkit-keyframes loader {
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(360deg);
	}
}
@-o-keyframes loader {
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(360deg);
	}
}
@keyframes loader {
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(360deg);
	}
}
</style>
