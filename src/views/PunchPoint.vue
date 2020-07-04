<template>

	<v-container class="pa-0" fluid>
		<!-- <v-system-bar></v-system-bar> -->
		<!-- <v-toolbar v-if="$vuetify.breakpoint.name =='xs'" flat style="position: fixed;top: 56px;z-index: 99999999;"> -->
		<v-select
		v-if="$vuetify.breakpoint.name =='xs'" 
		class="px-6"
		style="position: fixed;top: 48px;z-index: 99999999;width: 100%;background-color: white;"
		v-model="selection"						
		placeholder="Select Tags"															
		:items="tagUnique"
		multiple
		chips
		>
			<template v-slot:placeholder>
			<v-row
			class="fill-height ma-0"
			align="center"
			justify="center"
			>
			<v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
			</v-row>
			</template>
			
		
		</v-select>
		<!-- </v-toolbar> -->
		<v-select
		class="px-6"
		v-model="selection"														
		placeholder="Select Tags"															
		:items="tagUnique"
		@change="selectChange"
		multiple
		chips
		></v-select>
		<div>

			<v-sheet class="mx-auto" max-width="95%">

				<v-row class="mb-6 d-flex justify-around">
					<!-- <v-col v-for="n in 7" :key="n" class="mb-2" sm="12" md="3" lg="2" :cols="n===1?12:6">-->
					<v-col :class="'mb-2 '" v-for="(card,index) in selectTags" :key="index" :cols="card.flex" sm="12" md="6" lg="4">
						<v-hover>
						<template v-slot:default="{ hover }">
							<v-scroll-x-transition>
								<v-card :loading="loading" class="mx-auto my-2" max-width="374">
									<v-list-item>
									<v-list-item-avatar color="grey" @click="goto('/OtherUser')"></v-list-item-avatar>
									<v-list-item-content>
										<v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
									<v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
									<v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
									
									</v-list-item-content>
									</v-list-item>
									
									<v-img height="250" :src="card.src">
										<v-fade-transition>
											<v-overlay v-if="hover" absolute >
												<v-btn @click="goto('/PunchInfo/0')">See more info</v-btn>
											</v-overlay>
										</v-fade-transition>
									</v-img>
									
									<v-card-title>Cafe Badilico</v-card-title>
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
											$ • Italian, Cafe
										</div>

										<div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
									</v-card-text>

									<v-divider class="mx-4"></v-divider>

									<v-card-title>tag</v-card-title>

									<v-card-text>
										<v-chip-group column>
											<v-chip v-for="(tag,index) in card.tags" :key="index">{{tag}}</v-chip>
										</v-chip-group>
									</v-card-text>
									
								</v-card>
								</v-scroll-x-transition>
							</template>
						</v-hover>
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
			cards: [{
					title: 'Pre-fab homes',
					src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
					tags: [
						'Work',
						'Home Improvement',
						'Vacation',
						'Food',
						'Drawers',
						'Shopping',
'						Vacation',
						'Food',
						'Drawers',
						'Shopping',
					]
				},
				{
					title: 'Favorite road trips',
					src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
					tags: [
						'Work',
						'Home Improvement',
						'Vacation',
						'Food',
						'Drawers',
						'Shopping',
						'Art',

					]
				},
				{
					title: 'Best airlines',
					src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
					tags: [
						'Work',
						'Home Improvement',
						'Vacation',
						'Food',
						'Drawers',

					]
				}, {
					title: 'Favorite road trips',
					src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
					tags: [
						'Work',
						'Home Improvement',
						'Vacation',
						'Food',
						'Drawers',
						'Shopping',
						'Art',
						'Tech',

					]
				},
				{
					title: 'Best airlines',
					src: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
					tags: [
						'Work',
						'Home Improvement',
						'Vacation',
						'Food',
						'Drawers',
						'Shopping',
						'Art',

					]
				}, {
					title: 'Favorite road trips',
					src: 'https://picsum.photos/510/300?random',
					tags: [
						'Work',
						'Home Improvement',
						'Vacation',

					]
				},
				{
					title: 'Best airlines',
					src: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
					tags: [
						'Work',
						'Home Improvement',

					]
				},
			],
			loading: false

		}),
		created() {
			// this.test = this.$vuetify.breakpoint.name
			// console.log(this.$vuetify.breakpoint)
			let tagArr = []
			this.cards.forEach((value)=>{
				value.tags.forEach((value)=>{
					tagArr.push(value)
				})
			})
			
		},
		mounted() {
			// this.SixCard.filter((item)=>{
			// 	this.selection.filter((sitem)=>{
			// 		return item.tags.indexOf(sitem) != -1
			// 	})
			// })
		},
		methods: {
			goto(url){
				this.$router.push(url)
			},
			reserve() {
				this.loading = true
				setTimeout(() => (this.loading = false), 2000)
			},
			selectChange(e){
				console.log(e)
				console.log(this.selection)
			
				let filterList = []
			
				this.SixCard.forEach((item,index)=>{
					this.selection.forEach((sitem)=>{
						if(item.tags.indexOf(sitem) != -1){
							filterList.push(this.SixCard[index])
						}
					})
				})
				console.log(filterList)
				
			}
		},
		computed: {
			tagUnique() {
				let tagArr = []
				this.cards.forEach((value)=>{
					value.tags.forEach((value)=>{
						tagArr.push(value)
					})
				})
				
				return [...new Set(tagArr)]
			},
			selectTags() {
				if(this.selection.length<=0){
					return this.SixCard
				}else{
					let filterList = []
					this.SixCard.forEach((item,index)=>{
						this.selection.forEach((sitem)=>{
							if(item.tags.indexOf(sitem) != -1){
								filterList.push(this.SixCard[index])
							}
						})
					})
					return filterList
				}
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
