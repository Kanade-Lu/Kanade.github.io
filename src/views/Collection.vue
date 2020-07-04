<template>

	<v-container fluid>
	
		<div>
			<v-toolbar flat>
				<v-toolbar-title>
					<p class="font-weight-black">我的收藏</p>

				</v-toolbar-title>

				<v-spacer></v-spacer>


			</v-toolbar>
			<v-divider class="mx-8"></v-divider>
			<v-sheet class="mx-auto" max-width="95%">
				<v-row class="mb-6 d-flex justify-around">
					<v-col :class="'mb-2 '" v-for="(card,index) in cards" :key="index" cols="12" xs="12" sm="12" md="6" lg="6">
						<v-card :loading="loading" class="mx-auto my-2">
							<v-container>
								<v-row justify="space-between">
									<v-col lg="6" cols="12">
										<v-img max-width="361" :aspect-ratio="16/9" :src="card.src"></v-img>
									</v-col>
									<v-col lg="6" cols="12">
										<v-card-title>Cafe Badilico</v-card-title>

										<v-card-text>
											<v-row align="center" class="mx-0">
												<v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

												<div class="grey--text ml-4">4.5 (413)</div>
											</v-row>

											<div class="my-4 subtitle-1">
												$ • Italian, Cafe
											</div>

											<div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
										</v-card-text>
									</v-col>
								</v-row>
								<v-row>
									<v-col>
									<v-chip-group row >
										<v-chip v-for="tag in tags" :key="tag">
											{{ tag }}
										</v-chip>
									</v-chip-group>
									</v-col>
									<v-col class="py-0">
									<v-card-actions class="py-0">
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
									</v-card-actions>
									</v-col>
								</v-row>
							</v-container>
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
			cards: [{
					title: 'Pre-fab homes',
					src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
					flex: 12
				},
				{
					title: 'Favorite road trips',
					src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
					flex: 6
				},
				{
					title: 'Best airlines',
					src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
					flex: 6
				}, {
					title: 'Favorite road trips',
					src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
					flex: 6
				},
				{
					title: 'Best airlines',
					src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
					flex: 6
				}, {
					title: 'Favorite road trips',
					src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
					flex: 6
				},
				{
					title: 'Best airlines',
					src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
					flex: 6
				},
			],
			loading: false,
			tags: [
				'Work',
				'Home Improvement',
				'Vacation',
				'Food',
				'Drawers',
				'Shopping',
				'Art',
				'Tech',
				'Creative Writing',
			]
		}),
		created() {
			// this.test = this.$vuetify.breakpoint.name
			// console.log(this.$vuetify.breakpoint)
		},
		methods: {
			reserve() {
				this.loading = true
				setTimeout(() => (this.loading = false), 2000)
			},
		},
		computed: {
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
