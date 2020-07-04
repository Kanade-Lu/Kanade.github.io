<template>

	<v-container class="pa-0" fluid>
		
		<div>

			<v-sheet class="mx-auto mt-6" max-width="95%">

				<v-row class="mb-6 d-flex justify-around">
					<!-- <v-col v-for="n in 7" :key="n" class="mb-2" sm="12" md="3" lg="2" :cols="n===1?12:6">-->
					<v-col :class="'mb-2 '" v-for="(item,index) in messageList" :key="index" cols="12" sm="12" md="6" lg="6">
						<v-card class="mx-auto">
							<v-card-text>
								<div>{{item.created}}</div>
								<p class="display-1 text--primary">
									{{item.title}}
								</p>
								<p>{{item.type}}</p>
								<div class="text--primary">
									{{item.content}}
								</div>
							</v-card-text>
					
						</v-card>
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
			overlay: false,
			selection: [],
			messageList:[
				// {
				// 	time:"2019-5-25",
				// 	title:"Thanks for you use our websize",
				// 	type:"System Message",
				// 	content:"well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly."
				// }
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
		mounted() {
			this.getMessageList()
		},
		methods: {
			goto(url) {
				this.$router.push(url)
			},
			reserve() {
				this.loading = true
				setTimeout(() => (this.loading = false), 2000)
			},
			async getMessageList(){
				let data = {
					userid:this.$store.state.userInfo.Id
				}
				let res =await this.axios.get('http://localhost:3000/message/get',{
					params:data
				})
				console.log(res.data)
				if(res.data.code == 200){
					this.messageList.push(res.data.data[0]) 
				}
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
