(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b3837"],{2960:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("v-container",{attrs:{fluid:""}},[a("div",{staticClass:"d-flex flex-row"},[a("v-list-item",{attrs:{link:""}},[a("v-avatar",{staticClass:"mr-4",attrs:{size:"100"}},[a("img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.jpg",alt:"John"}})]),a("v-list-item-content",[a("v-row",[a("v-col",{attrs:{cols:"10"}},[a("v-list-item-title",{staticClass:"title"},[t._v("John Leider")]),a("v-list-item-subtitle",[t._v("john@vuetifyjs.com")])],1),a("v-col",[a("v-btn",{attrs:{color:"primary"},on:{click:function(s){return t.goto("/MessageInfo")}}},[t._v(" Follow ")])],1)],1)],1)],1)],1),a("div",[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[a("p",{staticClass:"font-weight-black"},[t._v("发布的游记")])]),a("v-spacer")],1),a("v-divider",{staticClass:"mx-8"}),a("v-sheet",{staticClass:"mx-auto",attrs:{"max-width":"95%"}},[a("v-row",{staticClass:"mb-6 d-flex justify-around"},t._l(t.cards,(function(s,e){return a("v-col",{key:e,class:"mb-2 ",attrs:{cols:"12",xs:"12",sm:"12",md:"6",lg:"6"}},[a("v-card",{staticClass:"mx-auto my-2",attrs:{loading:t.loading}},[a("v-container",[a("v-row",{attrs:{justify:"space-between"}},[a("v-col",{attrs:{lg:"6",cols:"12"}},[a("v-img",{attrs:{"max-width":"361","aspect-ratio":16/9,src:s.src}})],1),a("v-col",{attrs:{lg:"6",cols:"12"}},[a("v-card-title",[t._v("Cafe Badilico")]),a("v-card-text",[a("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[a("v-rating",{attrs:{value:4.5,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}}),a("div",{staticClass:"grey--text ml-4"},[t._v("4.5 (413)")])],1),a("div",{staticClass:"my-4 subtitle-1"},[t._v(" $ • Italian, Cafe ")]),a("div",[t._v("Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.")])],1)],1)],1),a("v-row",[a("v-col",[a("v-chip-group",{attrs:{row:""}},t._l(t.tags,(function(s){return a("v-chip",{key:s},[t._v(" "+t._s(s)+" ")])})),1)],1),a("v-col",{staticClass:"py-0"},[a("v-card-actions",{staticClass:"py-0"},[a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-heart")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-bookmark")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-share-variant")])],1)],1)],1)],1)],1)],1)],1)})),1)],1)],1)])},i=[],r=(a("fb6a"),a("b0c0"),{name:"Home",components:{},data:function(){return{cards:[{title:"Pre-fab homes",src:"https://cdn.vuetifyjs.com/images/cards/house.jpg",flex:12},{title:"Favorite road trips",src:"https://cdn.vuetifyjs.com/images/cards/road.jpg",flex:6},{title:"Best airlines",src:"https://cdn.vuetifyjs.com/images/cards/plane.jpg",flex:6},{title:"Favorite road trips",src:"https://cdn.vuetifyjs.com/images/cards/road.jpg",flex:6},{title:"Best airlines",src:"https://cdn.vuetifyjs.com/images/cards/plane.jpg",flex:6},{title:"Favorite road trips",src:"https://cdn.vuetifyjs.com/images/cards/road.jpg",flex:6},{title:"Best airlines",src:"https://cdn.vuetifyjs.com/images/cards/plane.jpg",flex:6}],loading:!1,tags:["Work","Home Improvement","Vacation","Food","Drawers","Shopping","Art","Tech","Creative Writing"]}},created:function(){},methods:{reserve:function(){var t=this;this.loading=!0,setTimeout((function(){return t.loading=!1}),2e3)}},computed:{SixCard:function(){switch(this.$vuetify.breakpoint.name){case"lg":return this.cards.slice(0,6);case"xs":return this.cards.slice(0,3)}return this.cards.slice(0,6)},ImageHeight:function(){var t="";switch(this.$vuetify.breakpoint.name){case"xs":t="220px";case"sm":t="400px";case"md":t="500px";case"lg":t="600px";case"xl":t="800px"}return t},breakpoint:function(){return this.$vuetify.breakpoint.name}},watch:{breakpoint:function(t){console.log(t)}}}),c=r,n=a("2877"),o=Object(n["a"])(c,e,i,!1,null,null,null);s["default"]=o.exports}}]);