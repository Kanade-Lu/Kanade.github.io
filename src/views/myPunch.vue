<template>
	<v-container class="lighten-5 d-flex justify-center align-center" fluid fill-height>
		<v-row>
			<v-col class="mx-auto" cols="12">
				<v-card width="auto">
					<v-card-title>
						打卡-发布游记
					</v-card-title>
					<v-card-text class="pt-4">
						<form>
							<v-text-field v-model="title" :error-messages="titleErrors" :counter="20" label="title" required @input="$v.title.$touch()"
							@blur="$v.title.$touch()"></v-text-field>
							
							<v-text-field v-model="introduce" :error-messages="introduceErrors" :counter="20" label="introduce" required
							@input="$v.introduce.$touch()" @blur="$v.introduce.$touch()"></v-text-field>
							<v-text-field v-model="place" :error-messages="placeErrors" :counter="20" label="place" required @input="$v.place.$touch()"
							@blur="$v.place.$touch()"></v-text-field>
							<v-text-field v-model="content" :error-messages="contentErrors" :counter="20" label="content" required @input="$v.content.$touch()"
							@blur="$v.content.$touch()"></v-text-field>
							
							<span>rate：</span><v-rating v-model="rate" color="amber"></v-rating>
							
							<v-file-input
							:rules="rules"
							accept="image/png, image/jpeg, image/bmp"
							placeholder="Pick an avatar"
							prepend-icon="mdi-camera"
							label="Avatar"
							v-model="image"
							
							@change="upload"
							></v-file-input>
							<div class="d-flex align-start">
								<span class="d-inline-block">预览图：</span>
								<v-img  class="d-inline-block" :src="preview" max-width="200" aspect-ratio="1.7" contain></v-img>
							</div>
		
							<v-btn class="mr-4 mt-4" @click="submit">submit</v-btn>



						</form>
					</v-card-text>
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
	import {
		validationMixin
	} from 'vuelidate'
	import {
		required
	} from 'vuelidate/lib/validators'
	export default {
		mixins: [validationMixin],
		validations: {
			title: {
				required
			},
			rate: {
				required
			},
			place: {
				required
			},
			introduce: {
				required
			},
			content: {
				required
			}
		},
		data() {
			return {
				title: 'testTitle',
				rate: 3,
				place: "Kanade@gmail.com",
				introduce: "please introduce some of this place",
				content: "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
				image:"",
				preview:"",
				show: true,
				checkbox: false,
				rules: [
					value => !value || value.size < 20000000 || 'Avatar size should be less than 2 MB!',
				]
			}
		},
		methods: {
			onSuccess(data) {
				this.$store.commit('setAuth', data)
				this.$router.replace('/')
			},
			submit() {
				this.$v.$touch()
			},
			upload(e){
				var self =this;
				console.log(e)
				var reader = new FileReader();
				reader.readAsDataURL(e);
				reader.onload = function(e) {
					console.log(e)
					console.log(e.srcElement.result)
					self.preview = e.srcElement.result
				}
				console.log(this.image)
			}
		},
		mounted() {
			
		},
		
		computed: {
			
			titleErrors() {
				const errors = []
				if (!this.$v.title.$dirty) return errors
				!this.$v.title.required && errors.push('title is required.')
				console.log(this.$v.title)
				return errors
			},
			placeErrors() {
				const errors = []
				if (!this.$v.place.$dirty) return errors
				!this.$v.place.required && errors.push('place is required.')
				console.log(this.$v.place)
				return errors
			},
			introduceErrors() {
				const errors = []
				if (!this.$v.introduce.$dirty) return errors
				!this.$v.introduce.required && errors.push('introduce is required.')
				console.log(this.$v.introduce)
				return errors
			},
			contentErrors() {
				const errors = []
				if (!this.$v.content.$dirty) return errors
				!this.$v.content.required && errors.push('content is required.')
				console.log(this.$v.content)
				return errors
			}



		}
	}
</script>
