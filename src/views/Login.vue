<template>
	<v-container class="lighten-5 d-flex justify-center align-center" fluid fill-height>
		<v-row >
			<v-col  class="mx-auto" md="3">
				<v-card>
					<v-card-title>
						Login
					</v-card-title>
					<v-card-text class="pt-4">
						<form>
							<v-text-field v-model="account" :error-messages="accountErrors" :counter="10" label="account" required @input="$v.account.$touch()"
							@blur="$v.account.$touch()"></v-text-field>
							<v-text-field v-model="password" :error-messages="passwordErrors" label="password" required @input="$v.password.$touch()"
							@blur="$v.password.$touch()"></v-text-field>
							<v-checkbox v-model="checkbox" label="记住我" ></v-checkbox>
							<div class=" d-flex justify-space-between">
								
								<v-btn class="mr-4" @click="submit">submit</v-btn>

								<v-btn @click="clear" href="#/Register">register</v-btn>
							</div>
						</form>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
		<v-snackbar
		v-model="snackbar"
		absolute
		centered
	
		elevation="24"
		>
		{{ text }}
		</v-snackbar>
	</v-container>
</template>

<style>
	body {
		background: #666 !important;
	}
</style>

<script>
	import {
		validationMixin
	} from 'vuelidate'
	import {
		required,
		maxLength,
		alphaNum
	} from 'vuelidate/lib/validators'
	export default {
		mixins: [validationMixin],
		validations: {
			password: {
				required,
				alphaNum
			},
			account: {
				required,
				maxLength: maxLength(16),
				alphaNum
			}
		},
		data() {
			return {
				account: 'Kanade',
				password: '123456',
				fields: {
					account: {
						label: 'Username'
					},
					password: {
						label: 'Password',
						type: 'password'
					}
				},
				show: true,
				checkbox: false,
				snackbar: false,
				text: 'Hello, I\'m a snackbar',
			}
		},
		methods: {
			onSuccess(data) {
				this.$store.commit('setAuth', data)
				this.$router.replace('/')
			},
			
			async submit() {
				this.$v.$touch()
				let data = {
					username:this.account,
					password:this.password
				}
				let res =await this.axios.get('http://localhost:3000/user/login',{
					params:data
				})
				console.log(res.data)
				if(res.data.code==200){
					console.log("userInfo",res.data.data)
					let userInfo = res.data.data
					
					sessionStorage.setItem('userInfo',userInfo)
					this.$store.commit("Login",{
						userInfo:userInfo
					})
					this.$router.push('/')
					
				}else{
					this.snackbar = true
					this.text = res.data.msg
				}
		
			},
			clear () {
				this.$v.$reset()
				this.account = ''
				this.password = ''
			},
			
		},
		mounted() {
			
		},
		computed: {
			accountErrors() {
				const errors = []
				if (!this.$v.account.$dirty) return errors
				!this.$v.account.maxLength && errors.push('account must be at most 10 characters long') 
				!this.$v.account.required && errors.push('account is required.')
				!this.$v.account.alphaNum && errors.push('Must be valid alphaNum.')
				console.log(this.$v.account)
				return errors
			},
			passwordErrors() {
				const errors = []
				if (!this.$v.password.$dirty) return errors
				!this.$v.password.alphaNum && errors.push('Must be valid alphaNum') 
				!this.$v.password.required && errors.push('password is required')
				return errors
			},
		}
	}
</script>
