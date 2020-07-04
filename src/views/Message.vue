<template>

	<v-container class="pa-0" fluid>
		
		<div>

			<v-sheet class="mx-auto mt-6" max-width="95%">

				<v-row class="mb-6 d-flex justify-around">
					<!-- <v-col v-for="n in 7" :key="n" class="mb-2" sm="12" md="3" lg="2" :cols="n===1?12:6">-->
					<v-col :class="'mb-2 '" v-for="(item,index) in messageList" :key="index" cols="12" sm="12" md="6" lg="3">
						<v-card class="mx-auto" max-width="344">
							<v-card-text>
								<div>{{item.createtime}}</div>
								<p class="display-1 text--primary text-truncate">
									{{item.title}}
								</p>
								<p>{{item.type}}</p>
								<div class="text--primary text-truncate">
									{{item.content}}
								</div>
							</v-card-text>
							<v-card-actions>
								<v-btn text color="deep-purple accent-4" @click="goto('/MessageInfo')">
									Learn More
								</v-btn>
								<v-spacer></v-spacer>
								<v-btn color="error" width="50" @click="deleteMessage(item)">
									Delete
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-col>
				</v-row>
			</v-sheet>
		</div>
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

<script>
	// @ is an alias to /src
	// import HelloWorld from '@/components/HelloWorld.vue'

	export default {
		name: 'Home',
		components: {
			// HelloWorld
		},
		inject:  ['reload'],
		data: () => ({
			overlay: false,
			selection: [],
			snackbar: false,
			text: 'Hello, I\'m a snackbar',
			messageList:[
				
			]

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
		mounted(){
			this.getMessageList()
		},
		methods: {
			async getMessageList(){
				let data = {
					userid:this.$store.state.userInfo.Id
				}
				let res =await this.axios.get('http://localhost:3000/message/get',{
					params:data
				})
				console.log(res.data)
				if(res.data.code == 200){
					this.messageList = res.data.data
				}
			},
			async deleteMessage(item){
				let data = {
					id:item.id
				}
				
				let res =await this.axios.get('http://localhost:3000/message/delete',{
					params:data
				})
				console.log(res.data)
				if(res.data.code == 200){
					this.text = res.data.msg
					this.snackbar = true
					setTimeout(()=>{
						this.reload()

					},1000)
				}
			},
			goto(url) {
				this.$router.push(url)
			},
			reserve() {
				this.loading = true
				setTimeout(() => (this.loading = false), 2000)
			},
			
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
