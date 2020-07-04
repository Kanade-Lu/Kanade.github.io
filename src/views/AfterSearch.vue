<template>
	<v-container class="lighten-5 d-flex justify-center align-center" fluid fill-height>
		<v-row justify="center" align="center" no-gutters>
			<v-col cols="12" md="12" sm="12" xs="12" lg="8">
				<v-combobox 
				@change="goto"
				v-model="select" 
				:items="items" 
				label="Search" 
				prepend-icon="mdi-magnify"
				multiple chips>
					<template v-slot:selection="{ attrs, item, select, selected }">
						<v-chip v-bind="attrs" :input-value="selected" close @click="select" @click:close="remove(item)">
							<strong>{{ item }}</strong>
						</v-chip>
					</template>


				</v-combobox>
			</v-col>
			
		</v-row>
		<v-row justify="center" align="center" no-gutters>
			<v-sheet class="mx-auto" max-width="95%">
			
				<v-row class="mb-6 d-flex justify-around">
					<!-- <v-col v-for="n in 7" :key="n" class="mb-2" sm="12" md="3" lg="2" :cols="n===1?12:6">-->
					<v-col :class="'mb-2 '" v-for="(card,index) in cards" :key="index" :cols="card.flex" sm="12" md="6" lg="4">
						<v-hover>
						<template v-slot:default="{ hover }">
								<v-card :loading="loading" class="mx-auto my-2" max-width="374">
									<v-list-item>
									<v-list-item-avatar color="grey" @click="goto('/OtherUser')"></v-list-item-avatar>
									<v-list-item-content>
										<v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
									<v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
									<v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
									
									</v-list-item-content>
									</v-list-item>
									
									<v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png">
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
							</template>
						</v-hover>
					</v-col>
				</v-row>
			
			</v-sheet>
		</v-row>
	</v-container>
</template>

<style>
	body {
		background: #666 !important;
	}
</style>

<script>
	export default {

		data() {
			return {
				select: [],
				items: [
					'Programming',
					'Design',
					'Vue',
					'Vuetify',
				],
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
									src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
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
									src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
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
									src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
									tags: [
										'Work',
										'Home Improvement',
										'Vacation',
				
									]
								},
								{
									title: 'Best airlines',
									src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
									tags: [
										'Work',
										'Home Improvement',
				
									]
								},
							],
							loading: false
			}
		},
		methods: {
			goto() {
				this.$router.push({path: '/AfterSearch', query: {search: this.select}})
			},
			remove(item) {
				this.select.splice(this.select.indexOf(item), 1)
				this.select = [...this.select]
			},

		},
		mounted() {
			console.log(this.$route.query.search)
			this.select.push(this.$route.query.search)
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
		}
	}
</script>