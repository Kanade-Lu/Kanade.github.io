<template>
	<v-app id="inspire">
		<v-navigation-drawer v-model="drawer" app>
			
			<v-list >
					
				<v-row justify="center" @click="goto('/Personal')" v-if="isLogin">
					<v-list-item link>
						<v-avatar size="100" class="mx-auto">
							<img
								v-if="userInfo.headImage!=null"
								:src="userInfo.headImage"
								alt="John"
							>
							<v-img 	v-if="userInfo.headImage==null" src="./assets/account-circle.png" height="200" contain></v-img>
						</v-avatar>
					</v-list-item>
					<v-list-item link>
						
						<v-list-item-content style="text-align: center;">
							<v-list-item-title class="title">{{userInfo.username}}</v-list-item-title>
							<v-list-item-subtitle>{{userInfo.email}}</v-list-item-subtitle>
						</v-list-item-content>
					</v-list-item>
				</v-row>
				<v-row justify="center" @click="goto('/Login')" v-if="!isLogin">
					<v-list-item link>
						<v-avatar size="100" class="mx-auto">
							<v-img src="./assets/account-circle.png" height="200" contain></v-img>
						</v-avatar>

					</v-list-item>
					<v-list-item link>
						
						<v-list-item-content style="text-align: center;">
							<v-list-item-title class="title">点击登录
							</v-list-item-title>
							<!-- <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle> -->
						</v-list-item-content>
					</v-list-item>
				</v-row>
				
				
				<v-list-item-group v-model="item" color="light-blue accent-3">
					
					<v-list-item v-for="(item, i) in menuList" :key="i" :href="item.url">
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

		<v-app-bar app color="light-blue accent-3" dark>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" />
			<v-toolbar-title v-if="$vuetify.breakpoint.name == 'lg'">Track旅游打卡网站</v-toolbar-title>
			<!-- <v-breadcrumbs :items="items" divider="-"></v-breadcrumbs> -->
			<v-spacer></v-spacer>
			
			<v-text-field
				v-model="search"
				append-icon="mdi-magnify"
				label="Search"
				:clearable="true"
				single-line
				hide-details
				v-if="show"
				@click:append="goto('/Search')"
			></v-text-field>
		</v-app-bar>

		<v-content>
			<v-container class="d-flex flex-column align-start pa-0" fluid fill-height>
				<router-view v-if="isRouterAlive"></router-view>
			</v-container>
		</v-content>
	<!-- 	<v-footer color="indigo" app>
			<span class="white--text">&copy; 2019</span>
		</v-footer> -->
	</v-app>
</template>

<script>
	import { mapState } from 'vuex'
	export default({
		provide () {
			return {
				reload: this.reload
			}
		},
		data: () => ({
			item: 1,
			drawer:true,
			headImage:"mdi-account-circle",
			isRouterAlive: true,
			items: [
				{
					text: '首页',
					icon: 'mdi-home',
					url:"#/	",
					permission:false
				},
				{
					text: '打卡点',
					icon: 'mdi-apps',
					url:"#/PunchPoint",
					permission:false
				},
			
				{
					text: '打卡记录',
					icon: 'mdi-marker',
					url:"#/Record",
					permission:true
				},
				{
					text: '我的收藏',
					icon: 'mdi-book-outline',
					url:"#/Collection",
					permission:true
				},
				{
					text: '打卡-发布游记',
					icon: 'mdi-book-open-outline',
					url:"#/myPunch",
					permission:true
				},
				{
					text: '消息',
					icon: 'mdi-message-processing-outline',
					url:"#/Message",
					permission:true
				},
				{
					text: '动态',
					icon: 'mdi-account-group',
					url:"#/community",
					permission:true
				}
			],
			search:"",
			show:true
		}),
		methods:{
			goto(url){
				this.$router.push(url)
			},
			reload () {
				this.isRouterAlive = false
				this.$nextTick(() => (this.isRouterAlive = true))
			},
			SearchShow(){
				if(this.$route.name === 'AfterSearch' | this.$route.name==='Search'){
					this.show = false
				}else{
					this.show = true;
				}
			}
		},
		computed: mapState({
			// 箭头函数可使代码更简练
				isLogin: state => state.isLogin,
				userInfo:state => state.userInfo,
				menuList(){
					let unPermission = this.items.slice(0,2)
					let Permission =this.items.filter(item=>{
						return item.permission === true && this.isLogin === true
					})
					
					return unPermission.concat(Permission)
				}
			}),
			
		mounted() {
			console.log(this.items.filter(item=>{
						return item.permission === false
					}))
			console.log(this.isLogin)
		},
		watch:{
			$route(){
				this.SearchShow();
			}
			
		}
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
