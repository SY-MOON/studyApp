/* eslint-disable no-console */
import * as firebase from 'firebase'
import router from './index'

let authStateHandlerRegistered = false

export default (to, from, next) => {
	let user = firebase.auth().currentUser

	if(user) {
		console.log('sign-in aleady')
		next()
	} else {
		if (authStateHandlerRegistered) {
			console.log('sign-out')
			router.push({path: '/login'})

		} else {
			console.log('auth-guard registered', user)
			firebase.auth().onAuthStateChanged((user) => {
				if(user) {
					next()
				} else {
					console.log('sign-out')
					router.push({path: '/login'})
				}
			})

			authStateHandlerRegistered = true
		}
		
	}
	
}