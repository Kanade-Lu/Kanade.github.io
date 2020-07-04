<template>

	<v-container class="pa-0" fluid>

		<div>


			<v-sheet class="mx-auto mt-6" max-width="95%">
				
						<v-card :loading="loading" class="mx-auto my-12">
							<v-window v-model="onboarding">
								<v-window-item v-for="(n,index) in cardsInfo.src" :key="index">
									<v-img :aspect-ratio="16/4" width="100%" contain :src="n"></v-img>
								</v-window-item>
							</v-window>
							<v-card-actions class="justify-space-between">
								<v-btn text @click="prev">
									<v-icon>mdi-chevron-left</v-icon>
								</v-btn>
								<v-item-group v-model="onboarding" class="text-center" mandatory>
									<v-item v-for="(n,index) in cardsInfo.src" :key="`btn-${index}`" v-slot:default="{ active, toggle }">
										<v-btn :input-value="active" icon @click="toggle">
											<v-icon>mdi-record</v-icon>
										</v-btn>
									</v-item>
								</v-item-group>
								<v-btn text @click="next">
									<v-icon>mdi-chevron-right</v-icon>
								</v-btn>
							</v-card-actions>
							<v-card-title>{{cardsInfo.place}}</v-card-title>
							<v-card-text>
								<v-row align="center" class="mx-0">
									<v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

									<div class="grey--text ml-4">4.5 (413)</div>
									
										<v-spacer></v-spacer>
									
										<v-btn icon>
											<v-icon>mdi-heart</v-icon>
										</v-btn>
									
										<v-btn icon>
											<v-icon>mdi-bookmark</v-icon>
										</v-btn>
									
										<v-btn icon>
									
									
											<v-icon>mdi-share-variant</v-icon>
										</v-btn>
								
								</v-row>

								<div class="my-4 subtitle-1">
									{{cardsInfo.place}}
								</div>

								<div>{{cardsInfo.introduce}}</div>
								<div class="text--primary">
								{{cardsInfo.content}}
								</div>
							</v-card-text>
			
							<v-divider class="mx-4"></v-divider>

							<v-card-title>tag</v-card-title>

							<v-card-text>
								<v-chip-group column>
									<v-chip v-for="(tag,index) in cardsInfo.tags" :key="index">{{tag}}</v-chip>
								</v-chip-group>
							</v-card-text>
							
						</v-card>
					


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
			onboarding: 0,
			cardsInfo: {
				punchId: 0,
				place: 'Pre-fab homes',
				introduce: "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
				content:"Hi,fellow food enthusiast,I have a good restuarant to introduce to you.This restuarant is called the Mao Kitchen.It is located at the West Street.The setting in the restuarant is cosy.The food is good and the price is reasonable.The services is excellent and the parking is easily available.If you do not know how to order for the food,always ask for the chef's recomendations.The chef's recomendation changes everyday.Believe me,go and have a good meal there.Enjoy!",
				src: [
					'https://www.2008php.com/2014_Website_appreciate/2014-05-20/20140520004125cdnRDcdnRD.jpg',
					'https://www.2008php.com/2014_Website_appreciate/2014-05-20/20140520004125cdnRDcdnRD.jpg',
					'https://www.2008php.com/2014_Website_appreciate/2014-05-20/20140520004125cdnRDcdnRD.jpg',
				],
				tags: [
					'Work',
					'Home Improvement',
					'Vacation',
					'Food',
					'Drawers',
					'Shopping',
					'Vacation',
					'Food',
					'Drawers',
					'Shopping',
				]
			},
			loading: false,
			getList: [{
				punchId: 0,
				title: "今天我在北海道的XXXX！！！",
				rate: 4.5,
				place: "北海道",
				introduce: "这个人很懒什么都不想介绍",
				content: "如果你和我一样在新加坡也经常吃日式豚骨拉面，那么一蘭、博多之类的豚骨拉面就那个味了基本没太差别。去年给我印象很深的是一蘭的排队在游客多的地方很夸张，往往下午3点了还能从2楼排到1楼下面延伸很长。在大阪道頓堀我在小路里走经过了一家一蘭，居然没什么人，感到奇怪呢。转去大路就看到河对面最显眼的一蘭排了好长好长的队伍。PS如果在静冈等游人少的地方，就算是火车站旁边，一蘭也是很空的",
				tags:"札幌,寻桥之旅,美食,冰雪,北海道"
			},{
				punchId: 1,
				title: "今天我在北海道的XXXX！！！",
				rate: 4.5,
				place: "北海道",
				introduce: "这个人很懒什么都不想介绍",
				content: "如果你和我一样在新加坡也经常吃日式豚骨拉面，那么一蘭、博多之类的豚骨拉面就那个味了基本没太差别。去年给我印象很深的是一蘭的排队在游客多的地方很夸张，往往下午3点了还能从2楼排到1楼下面延伸很长。在大阪道頓堀我在小路里走经过了一家一蘭，居然没什么人，感到奇怪呢。转去大路就看到河对面最显眼的一蘭排了好长好长的队伍。PS如果在静冈等游人少的地方，就算是火车站旁边，一蘭也是很空的",
				tags:"札幌,寻桥之旅,美食,冰雪,北海道"
			},{
				punchId: 2,
				title: "今天我在北海道的XXXX！！！",
				rate: 4.5,
				place: "北海道",
				introduce: "这个人很懒什么都不想介绍",
				content: "如果你和我一样在新加坡也经常吃日式豚骨拉面，那么一蘭、博多之类的豚骨拉面就那个味了基本没太差别。去年给我印象很深的是一蘭的排队在游客多的地方很夸张，往往下午3点了还能从2楼排到1楼下面延伸很长。在大阪道頓堀我在小路里走经过了一家一蘭，居然没什么人，感到奇怪呢。转去大路就看到河对面最显眼的一蘭排了好长好长的队伍。PS如果在静冈等游人少的地方，就算是火车站旁边，一蘭也是很空的",
				tags:"札幌,寻桥之旅,美食,冰雪,北海道"
			}],
			RecordList:[
			]

		}),
		created() {
			// this.test = this.$vuetify.breakpoint.name
			// console.log(this.$vuetify.breakpoint)
			var self =this;
			this.getList.forEach((value,index)=>{
				let tagsList = []
				tagsList = value.tags.split(',')
				self.RecordList.push(value)
				self.RecordList[index].tags = tagsList;
			})
			console.log(this.RecordList)	

		},
		methods: {
			goto(url) {
				this.$router.push(url)
			},
			reserve() {
				this.loading = true
				setTimeout(() => (this.loading = false), 2000)
			},
			next() {
				this.onboarding = this.onboarding + 1 === this.length ?
					0 :
					this.onboarding + 1
			},
			prev() {
				this.onboarding = this.onboarding - 1 < 0 ?
					this.length - 1 :
					this.onboarding - 1
			},

		},
		computed: {
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
