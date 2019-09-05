<template>
	<v-container>
		<v-btn 
			block
			:loading="loading"
      :disabled="loading"
      color="secondary"
      @click="login"
			>
			로그인
		</v-btn>
	</v-container>
</template>

<script>
import * as firebase from 'firebase'

export default {
	data () {
		return {
			loader: null,
			loading: false
		}
	},
	watch: {
		loader () {
			const l = this.loader
			this[l] = !this[l]

			setTimeout(() => (this[l] = false), 3000)

			this.loader = null
		}
	},
	methods: {
		login() {
			this.loader = 'loading'

			var provider = new firebase.auth.GoogleAuthProvider()

			 firebase.auth().signInWithPopup(provider)
        .then(result => {
          var token = result.credential.accessToken
          var user = result.user
					console.log('login success')
          this.$router.push({path: '/'})
        })
        .catch(error => {
          var errorCode = error.code
          var errorMessage = error.message
          var email = error.email
          var credential = error.credential
          console.log(error)
        })
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
