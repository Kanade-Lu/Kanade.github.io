<template>
	<v-app id="inspire">
		<v-navigation-drawer v-model="drawer" app>
			
			<v-list>
				<v-subheader>REPORTS</v-subheader>
				<v-list-item-group v-model="item" color="primary">
					<v-list-item v-for="(item, i) in items" :key="i" :href="item.url">
						<v-list-item-icon>
							<v-icon v-text="item.icon"></v-icon>
						</v-list-item-icon>
					
							<v-list-item-content>
								<v-list-item-title v-text="item.text"></v-list-item-title>
							</v-list-item-content>
			
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar app color="indigo" dark>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" />
			<v-toolbar-title>Application</v-toolbar-title>
		</v-app-bar>

		<v-content>
			<v-container class="fill-height" fluid>
				<router-view></router-view>
			</v-container>
		</v-content>
		<v-footer color="indigo" app>
			<span class="white--text">&copy; 2019</span>
		</v-footer>
	</v-app>
</template>

<script>
	export default({
		data: () => ({
			item: 1,
			drawer:true,
			items: [{
					text: 'Real-Time',
					icon: 'mdi-clock',
					url:"#/	"
				},
				{
					text: 'Audience',
					icon: 'mdi-account',
					url:"#/home"
				},
				{
					text: 'Conversions',
					icon: 'mdi-flag',
					url:"#/about"
				},
			],
		}),
	})
</script>
<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}
</style>
