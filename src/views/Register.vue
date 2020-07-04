<template>
	<v-container class="lighten-5 d-flex justify-center align-center" fluid fill-height>
		<v-row>
			<v-col md="3" class="mx-auto">
				<v-card>
					<v-card-title>
						Register
					</v-card-title>
					<v-card-text class="pt-4">
						<form>
							<v-text-field
								v-model="email"
								:error-messages="emailErrors"
								label="E-mail"
								required
								@input="$v.email.$touch()"
								@blur="$v.email.$touch()"
							></v-text-field>
							<v-text-field v-model="account" :error-messages="accountErrors" :counter="10" label="account" required @input="$v.account.$touch()"
							@blur="$v.account.$touch()"></v-text-field>
							<v-text-field v-model="password" :error-messages="passwordErrors" label="password" required @input="$v.password.$touch()"
							@blur="$v.password.$touch()"></v-text-field>
							
							<div class="d-flex justify-space-between">
								<v-btn class="mr-4" @click="submit">submit</v-btn>
												
								<v-btn class="mr-4" @click="$router.back(-1)">back</v-btn>
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
		email,
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
			},
			email:{
				required,
				email
			}
		},
		data() {
			return {
				account: 'admin',
				password: '123456',
				email:"Kanade@gmail.com",
				snackbar:false,
				test:"",
				fields: {
					account: {
						label: 'Username'
					},
					password: {
						label: 'Password',
						type: 'password'
					},
					email: {
						label: 'Email'
					}
				},
				show: true,
				checkbox: false,
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
					password:this.password,
					email:this.email
				}
				
				let res =await this.axios.get('http://localhost:3000/user/register',{
					params:data
				})
				console.log(res.data)
				if(res.data.code == 200){
					this.text = res.data.msg
					this.snackbar = true
				}else{
					this.text = "创建失败"
					this.snackbar = true
				}
				setTimeout(()=>{
					this.$router.back(-1)
				},1000)
				
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
			emailErrors() {
				const errors = []
				if (!this.$v.email.$dirty) return errors
				!this.$v.email.email && errors.push('Must be valid email') 
				!this.$v.email.required && errors.push('email is required.')
	
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
