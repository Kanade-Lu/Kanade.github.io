
<template>
	<v-container class="lighten-5 d-flex justify-center align-center" fluid fill-height>
		<v-row justify="center" align="center" no-gutters>
			<v-col cols="" xs="12">
				<v-card>
					<v-card-title>
						Search
					</v-card-title>
					<v-card-text>
						<v-text-field
							v-model="search"
							:label="label"
							:hint="hint"
							:clearable="true"
							:persistent-hint="persistentHint"
							:loading="loading"
							append-icon="mdi-magnify"
							counter="50"
							@change="goto"
							@click:append="goto"
						></v-text-field>
					</v-card-text>
					<v-sheet elevation="0" class="pa-4 grey lighten-5">
						<v-chip-group column>
							<v-chip v-for="tag in tags" :key="tag">
								{{ tag }}
							</v-chip>
						</v-chip-group>
					</v-sheet>
				</v-card>
			</v-col>
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
				label:"search the place you want",
				hint:"搜索可以以标签或者地点进行搜索",
				// placeholder:"search the place you want",
				persistentHint:"",
				search:[],
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
				],
				loading:false
			}
		},
		methods: {
			goto() {
				this.$router.push({path: '/AfterSearch', query: {search: this.search}})
			},
			
		},
		mounted() {
			
		},
		computed: {
			
		}
	}
</script>
