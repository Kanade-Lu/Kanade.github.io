<template>

	<v-container class="pa-0" fluid>
		<v-sheet class="mx-auto mt-6" max-width="95%">
			<!-- 	<v-btn-toggle v-model="window" mandatory tile color="light-blue accent-3" group>
				<v-btn>
					修改密码
				</v-btn>

				<v-btn>
					修改头像
				</v-btn>
				<v-btn>
					修改用户名
				</v-btn>
			</v-btn-toggle> -->
			<v-tabs v-model="window" background-color="transparent" color="basil" grow>
				<v-tab v-for="item in items" :key="item">
					{{ item }}
				</v-tab>
			</v-tabs>
		</v-sheet>
		<div>

			<v-sheet class="mx-auto mt-6" max-width="95%">

				<v-row class="mb-6 d-flex justify-around">
					<!-- <v-col v-for="n in 7" :key="n" class="mb-2" sm="12" md="3" lg="2" :cols="n===1?12:6">-->
					<v-col :class="'mb-2 '" cols="12" xs="12" sm="12" md="12" lg="6">
						<!-- <v-window v-model="window" class="elevation-1" vertical>
							<v-window-item> -->
						<v-tabs-items v-model="window">
							<v-tab-item>
								<v-stepper v-model="e1">
									<v-stepper-header>
										<v-stepper-step :complete="e1 > 1" step="1">输入现在的密码</v-stepper-step>
										<v-divider></v-divider>
										<v-stepper-step :complete="e1 > 2" step="2">输入新的密码</v-stepper-step>
									</v-stepper-header>

									<v-stepper-items>
										<v-stepper-content step="1">
											<v-text-field v-model="password" ></v-text-field>
											<v-btn color="primary" @click="checkPassword">
												Continue
											</v-btn>
										</v-stepper-content>
									
										<v-stepper-content step="2">
											<v-text-field v-model="newPassword" ></v-text-field>
											<v-btn color="primary" @click="updatePassword">submit</v-btn>
										</v-stepper-content>
									</v-stepper-items>
								</v-stepper>
								<!-- <v-card>
									<v-card-title>
										修改密码
									</v-card-title>
									<v-card-text class="pt-4">
										<form>
											<v-text-field v-model="password" :error-messages="passwordErrors" label="password" required @input="$v.password.$touch()"
											@blur="$v.password.$touch()"></v-text-field>
											<v-text-field v-model="newPassword" :error-messages="passwordErrors" label="newPassword" required @input="$v.newPassword.$touch()"
											@blur="$v.newPassword.$touch()"></v-text-field>
											<v-btn class="mr-4" @click="submit">submit</v-btn>
										</form>
									</v-card-text>
								</v-card> -->
							</v-tab-item>
							<v-tab-item>
								<v-card>
									<v-card-title>
										修改头像
									</v-card-title>
									<v-card-text class="pt-4">
										<form>
											<!-- :rules="rules" -->
											<v-file-input  accept="image/png, image/jpeg, image/bmp" placeholder="Pick an avatar"
											prepend-icon="mdi-camera" label="Avatar" v-model="image" @change="upload"></v-file-input>
											<div class="d-flex align-start">
												<span class="d-inline-block">预览图：</span>
												<v-img class="d-inline-block" :src="preview" max-width="200" aspect-ratio="1.7" contain></v-img>
											</div>

											<v-btn class="mr-4" @click="submit">submit</v-btn>



										</form>
									</v-card-text>
								</v-card>
							</v-tab-item>
							<v-tab-item>
								<v-card>
									<v-card-title>
										修改用户名
									</v-card-title>
									<v-card-text class="pt-4">
										<form>
											<v-text-field v-model="newAccount"></v-text-field>


											<v-btn class="mr-4" @click="submit">submit</v-btn>



										</form>
									</v-card-text>
								</v-card>
							</v-tab-item>
						</v-tabs-items>
					</v-col>
				</v-row>
			</v-sheet>
		</div>
	</v-container>

</template>

<script>
	// @ is an alias to /src
	// import HelloWorld from '@/components/HelloWorld.vue'

	export default {
		name: 'Home',
		components: {
			// HelloWorld
		},

		data: () => ({
			e1: 1,
			password: "",
			newPassword: "",
			image: "",
			preview: "",
			newAccount: "",
			overlay: false,
			selection: [],
			messageList: [{
					time: "2019-5-25",
					title: "Thanks for you use our websize",
					type: "System Message",
					content: "well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly."
				},
				{
					time: "2019-5-25",
					title: "Thanks for you use our websize",
					type: "System Message",
					content: "well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly."
				},
				{
					time: "2019-5-25",
					title: "Thanks for you use our websize",
					type: "System Message",
					content: "well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly."
				}
			],
			window: 0,
			items: [
				'修改密码', '修改头像', '修改用户名', '删除打卡记录'
			],

		}),
		created() {
			// this.test = this.$vuetify.breakpoint.name
			// console.log(this.$vuetify.breakpoint)
			// let tagArr = []
			// this.cards.forEach((value) => {
			// 	value.tags.forEach((value) => {
			// 		tagArr.push(value)
			// 	})
			// })

		},
		methods: {
			submit(e){
				console.log(e)
			},
			async checkPassword(){
			
				let data = {
					username:this.$store.state.userInfo.username,
					password:this.password
				}
				// console.log(this.$store.state.userInfo)
				console.log(data)
				let res =await this.axios.get('http://localhost:3000/user/checkPassword',{
					params:data
				})
				console.log(res.data)
				if(res.data.code == 200){
					this.e1 = 2
					
				}
			},
			async updatePassword(){
				// this.$v.$touch()
				let data = {
					username:this.$store.state.userInfo.username,
					password:this.newPassword
				}
				
				let res =await this.axios.get('http://localhost:3000/user/update',{
					params:data
				})
				console.log(res.data)
				if(res.data.code == 200){
					this.text = res.data.msg
					this.snackbar = true
				}
			},
			goto(url) {
				this.$router.push(url)
			},
			reserve() {
				this.loading = true
				setTimeout(() => (this.loading = false), 2000)
			},
			upload(e) {
				var self = this;
				console.log(e)
				var reader = new FileReader();
				reader.readAsDataURL(e);
				reader.onload = function(e) {
					console.log(e)
					console.log(e.srcElement.result)
					self.preview = e.srcElement.result
				}
				console.log(this.image)
			}
		},
		computed: {
			tagUnique() {
				let tagArr = []
				this.cards.forEach((value) => {
					value.tags.forEach((value) => {
						tagArr.push(value)
					})
				})

				return [...new Set(tagArr)]
			},


			SixCard() {
				switch (this.$vuetify.breakpoint.name) {
					case 'lg':
						return this.cards.slice(0, 6);
					case 'xs':
						return this.cards.slice(0, 3)
				}
				return this.cards.slice(0, 6)
			},

			ImageHeight() {
				let px = '';
				switch (this.$vuetify.breakpoint.name) {
					case 'xs':
						px = '220px'; /* falls through */
					case 'sm':
						px = '400px'; /* falls through */
					case 'md':
						px = '500px'; /* falls through */
					case 'lg':
						px = '600px'; /* falls through */
					case 'xl':
						px = '800px'; /* falls through */
				}
				return px;
			},
			breakpoint() {
				return this.$vuetify.breakpoint.name
			}
		},
		watch: {
			breakpoint: function(val) {
				console.log(val)
			}
		}
	}
</script>
