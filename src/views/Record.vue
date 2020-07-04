<template>
	<div class="mt-4 px-6">
		<v-timeline>
			<v-timeline-item v-for="(item,index) in getList" :key="index">
				<span slot="opposite">{{item.createTime}}</span>
				<p slot="opposite">{{item.place}}</p>
				<v-card class="elevation-2">
					<v-card-title class="headline">{{item.title}}</v-card-title>
					<v-card-text>
						{{item.content}}
					</v-card-text>
				</v-card>
			</v-timeline-item>
		</v-timeline>
	</div>
</template>


<script>
	export default {
		data: () => ({
			avatar: false,
			getList: [{
				punchId: 0,
				userId:0,
				rId:0,
				title: "今天我在北海道的XXXX！！！",
				content: "如果你和我一样在新加坡也经常吃日式豚骨拉面，那么一蘭、博多之类的豚骨拉面就那个味了基本没太差别。去年给我印象很深的是一蘭的排队在游客多的地方很夸张，往往下午3点了还能从2楼排到1楼下面延伸很长。在大阪道頓堀我在小路里走经过了一家一蘭，居然没什么人，感到奇怪呢。转去大路就看到河对面最显眼的一蘭排了好长好长的队伍。PS如果在静冈等游人少的地方，就算是火车站旁边，一蘭也是很空的",
				place:"北海道",
				createTime:"2015-04-19 12:20:00"
			},{
				punchId: 1,
				userId:0,
				rId:0,
				title: "今天我在北海道的XXXX！！！",
				content: "如果你和我一样在新加坡也经常吃日式豚骨拉面，那么一蘭、博多之类的豚骨拉面就那个味了基本没太差别。去年给我印象很深的是一蘭的排队在游客多的地方很夸张，往往下午3点了还能从2楼排到1楼下面延伸很长。在大阪道頓堀我在小路里走经过了一家一蘭，居然没什么人，感到奇怪呢。转去大路就看到河对面最显眼的一蘭排了好长好长的队伍。PS如果在静冈等游人少的地方，就算是火车站旁边，一蘭也是很空的",
				place:"北海道",
				createTime:"2015-04-19 12:20:00"
			},{
				punchId: 2,
				userId:0,
				rId:0,
				title: "今天我在北海道的XXXX！！！",
				content: "如果你和我一样在新加坡也经常吃日式豚骨拉面，那么一蘭、博多之类的豚骨拉面就那个味了基本没太差别。去年给我印象很深的是一蘭的排队在游客多的地方很夸张，往往下午3点了还能从2楼排到1楼下面延伸很长。在大阪道頓堀我在小路里走经过了一家一蘭，居然没什么人，感到奇怪呢。转去大路就看到河对面最显眼的一蘭排了好长好长的队伍。PS如果在静冈等游人少的地方，就算是火车站旁边，一蘭也是很空的",
				place:"北海道",
				createTime:"2015-04-19 12:20:00"
			}],
			RecordList:[
			]
			
		}),
		methods:{
			
		},
		mounted() {
			
		}
		
	}
</script>

<style>
</style>
