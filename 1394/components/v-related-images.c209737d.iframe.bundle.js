(window.webpackJsonp=window.webpackJsonp||[]).push([[27,17,20,22],{"./node_modules/.pnpm/css-loader@5.2.7/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@15.9.8_559ffc97fd41de05d12663d7fb949156/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@4.3.0_postcss@8.4.12/node_modules/postcss-loader/dist/cjs.js?!./node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!./node_modules/.pnpm/vue-loader@15.9.8_css-loader@5.2.7/node_modules/vue-loader/lib/index.js?!./node_modules/.pnpm/unplugin@0.3.3/node_modules/unplugin/dist/webpack/loaders/transform.js?!./src/components/VImageGrid/VImageGrid.vue?vue&type=style&index=0&id=55c17f85&scoped=true&lang=css&":function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@5.2.7/node_modules/css-loader/dist/runtime/api.js")((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,'@media (min-width: 768px){.image-grid[data-v-55c17f85]:after{content:"";-webkit-box-flex:999999999;-ms-flex-positive:999999999;flex-grow:999999999}}',""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},"./node_modules/.pnpm/vue-docgen-loader@1.5.0_4f483e0d3c950f846ed91d401997f598/node_modules/vue-docgen-loader/lib/index.js?!./node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js?!./node_modules/.pnpm/css-loader@5.2.7/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@15.9.8_559ffc97fd41de05d12663d7fb949156/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@4.3.0_postcss@8.4.12/node_modules/postcss-loader/dist/cjs.js?!./node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!./node_modules/.pnpm/vue-loader@15.9.8_css-loader@5.2.7/node_modules/vue-loader/lib/index.js?!./node_modules/.pnpm/unplugin@0.3.3/node_modules/unplugin/dist/webpack/loaders/transform.js?!./src/components/VImageGrid/VImageGrid.vue?vue&type=style&index=0&id=55c17f85&scoped=true&lang=css&":function(module,exports,__webpack_require__){var content=__webpack_require__("./node_modules/.pnpm/css-loader@5.2.7/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@15.9.8_559ffc97fd41de05d12663d7fb949156/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@4.3.0_postcss@8.4.12/node_modules/postcss-loader/dist/cjs.js?!./node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!./node_modules/.pnpm/vue-loader@15.9.8_css-loader@5.2.7/node_modules/vue-loader/lib/index.js?!./node_modules/.pnpm/unplugin@0.3.3/node_modules/unplugin/dist/webpack/loaders/transform.js?!./src/components/VImageGrid/VImageGrid.vue?vue&type=style&index=0&id=55c17f85&scoped=true&lang=css&");content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__("./node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/lib/addStylesClient.js").default)("88aec402",content,!0,{sourceMap:!1})},"./src/assets/image_not_available_placeholder.png":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/image_not_available_placeholder.png"},"./src/components/VImageDetails/VRelatedImages.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var VImageDetails_VRelatedImagesvue_type_script_lang_js_={name:"VRelatedImages",components:{VImageGrid:__webpack_require__("./src/components/VImageGrid/VImageGrid.vue").default},props:{media:{type:Array,required:!0},fetchState:{type:Object,required:!0}}},componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_css-loader@5.2.7/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VImageDetails_VRelatedImagesvue_type_script_lang_js_,(function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("aside",[_c("h3",{staticClass:"text-2xl md:text-3xl mb-6"},[this._v("\n    "+this._s(this.$t("image-details.related-images"))+"\n  ")]),this._v(" "),_c("VImageGrid",{attrs:{images:this.media,"show-load-more":!1,"fetch-state":this.fetchState}})],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VImageGrid:__webpack_require__("./src/components/VImageGrid/VImageGrid.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VRelatedImages",exportName:"default",description:"",tags:{},props:[{name:"media",type:{name:"array"},required:!0},{name:"fetchState",type:{name:"object"},required:!0}]}},"./src/components/VImageGrid/VImageCell.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.concat.js");var VLicense=__webpack_require__("./src/components/VLicense/VLicense.vue"),VLink=__webpack_require__("./src/components/VLink.vue"),errorImage=__webpack_require__("./src/assets/image_not_available_placeholder.png"),maxAspect=16/9,toAbsolutePath=function toAbsolutePath(url){var prefix=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://";return url.indexOf("http://")>=0||url.indexOf("https://")>=0?url:"".concat(prefix).concat(url)},VImageGrid_VImageCellvue_type_script_lang_js_={name:"VImageCell",components:{VLicense:VLicense.default,VLink:VLink.default},props:["image"],data:function data(){return{widthBasis:253.125,imgHeight:this.image.height||100,imgWidth:this.image.width||100}},computed:{imageAspect:function imageAspect(){return this.imgWidth/this.imgHeight},containerAspect:function containerAspect(){return this.imageAspect>maxAspect?maxAspect:this.imageAspect<.75?.75:this.imageAspect},iPadding:function iPadding(){return this.imageAspect<.75?1/.75*100:this.imageAspect>maxAspect?56.25:1/this.imageAspect*100},imageWidth:function imageWidth(){return this.imageAspect<maxAspect?100:this.imageAspect/maxAspect*100},imageTop:function imageTop(){return this.imageAspect>.75?0:(.75-this.imageAspect)/(.75*this.imageAspect*.75)*-50},imageLeft:function imageLeft(){return this.imageAspect<maxAspect?0:(this.imageAspect-maxAspect)/maxAspect*-50}},methods:{getImageUrl:function getImageUrl(image){if(!image)return"";var url=image.thumbnail||image.url;return this.imageAspect,toAbsolutePath(url)},getImageForeignUrl:function getImageForeignUrl(image){return toAbsolutePath(image.foreign_landing_url)},onGotoDetailPage:function onGotoDetailPage(event,image){if(!event.metaKey&&!event.ctrlKey){event.preventDefault();var detailRoute=this.localeRoute({name:"PhotoDetailPage",params:{id:image.id,location:window.scrollY}});this.$router.push(detailRoute)}},onImageLoadError:function onImageLoadError(event,image){var element=event.target;element.src!==image.url?element.src=image.url:element.src=errorImage},getImgDimension:function getImgDimension(e){this.imgHeight=e.target.naturalHeight,this.imgWidth=e.target.naturalWidth}}},componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_css-loader@5.2.7/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VImageGrid_VImageCellvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("VLink",{staticClass:"w-full block group relative overflow-hidden rounded-sm focus:ring-[3px] focus:ring-pink focus:ring-offset-[3px] focus:outline-none bg-dark-charcoal-10 text-dark-charcoal-10",style:"width: "+_vm.containerAspect*_vm.widthBasis+"px;flex-grow: "+_vm.containerAspect*_vm.widthBasis,attrs:{href:"/image/"+_vm.image.id,"aria-label":_vm.image.title},on:{click:function($event){return _vm.onGotoDetailPage($event,_vm.image)}}},[_c("figure",{staticClass:"absolute w-full",style:"width: "+_vm.imageWidth+"%; top: "+_vm.imageTop+"%; left:"+_vm.imageLeft+"%;"},[_c("img",{ref:"img",staticClass:"margin-auto block w-full",attrs:{loading:"lazy",alt:_vm.image.title,src:_vm.getImageUrl(_vm.image),width:_vm.imgWidth,height:_vm.imgHeight},on:{load:_vm.getImgDimension,error:function($event){return _vm.onImageLoadError($event,_vm.image)}}}),_vm._v(" "),_c("figcaption",{staticClass:"absolute left-0 bottom-0 invisible group-hover:visible group-focus:visible bg-white p-1 text-dark-charcoal"},[_c("span",{staticClass:"sr-only"},[_vm._v(_vm._s(_vm.image.title))]),_vm._v(" "),_c("VLicense",{attrs:{license:_vm.image.license,"hide-name":!0}})],1)]),_vm._v(" "),_c("i",{staticClass:"block",style:"padding-bottom:"+_vm.iPadding+"%",attrs:{"aria-hidden":""}})])}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VLicense:__webpack_require__("./src/components/VLicense/VLicense.vue").default,VLink:__webpack_require__("./src/components/VLink.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VImageCell",exportName:"default",description:"",tags:{},props:[{name:"image",type:{name:"undefined"}}]}},"./src/components/VImageGrid/VImageGrid.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var VLoadMore=__webpack_require__("./src/components/VLoadMore.vue"),VImageCell=__webpack_require__("./src/components/VImageGrid/VImageCell.vue"),VImageGrid_VImageGridvue_type_script_lang_js_={name:"ImageGrid",components:{VLoadMore:VLoadMore.default,VImageCell:VImageCell.default},props:{images:{default:function _default(){return[]}},showLoadMore:{type:Boolean,default:!0},fetchState:{required:!0}},computed:{isError:function isError(){return!!this.fetchState.fetchingError}},methods:{onLoadMore:function onLoadMore(){this.$emit("load-more")}}},componentNormalizer=(__webpack_require__("./src/components/VImageGrid/VImageGrid.vue?vue&type=style&index=0&id=55c17f85&scoped=true&lang=css&"),__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_css-loader@5.2.7/node_modules/vue-loader/lib/runtime/componentNormalizer.js")),component=Object(componentNormalizer.a)(VImageGrid_VImageGridvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("section",[_c("div",{staticClass:"image-grid flex flex-wrap gap-4"},_vm._l(_vm.images,(function(image,index){return _c("VImageCell",{key:index,attrs:{image:image}})})),1),_vm._v(" "),_vm.isError&&!_vm.fetchState.isFinished?_c("h5",{staticClass:"py-4"},[_vm._v("\n    "+_vm._s(_vm.fetchState.fetchingError)+"\n  ")]):_vm._e(),_vm._v(" "),_vm.showLoadMore?_c("footer",{staticClass:"pt-4"},[_c("VLoadMore")],1):_vm._e()])}),[],!1,null,"55c17f85",null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VImageCell:__webpack_require__("./src/components/VImageGrid/VImageCell.vue").default,VLoadMore:__webpack_require__("./src/components/VLoadMore.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"ImageGrid",exportName:"default",description:"",tags:{},props:[{name:"images",type:{name:"func"},defaultValue:{func:!0,value:"() => []"}},{name:"showLoadMore",description:"Whether to show the 'Load More' button.\nIs false for related images",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"fetchState",required:!0}],events:[{name:"load-more"}]}},"./src/components/VImageGrid/VImageGrid.vue?vue&type=style&index=0&id=55c17f85&scoped=true&lang=css&":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/.pnpm/vue-docgen-loader@1.5.0_4f483e0d3c950f846ed91d401997f598/node_modules/vue-docgen-loader/lib/index.js?!./node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js?!./node_modules/.pnpm/css-loader@5.2.7/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@15.9.8_559ffc97fd41de05d12663d7fb949156/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@4.3.0_postcss@8.4.12/node_modules/postcss-loader/dist/cjs.js?!./node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!./node_modules/.pnpm/vue-loader@15.9.8_css-loader@5.2.7/node_modules/vue-loader/lib/index.js?!./node_modules/.pnpm/unplugin@0.3.3/node_modules/unplugin/dist/webpack/loaders/transform.js?!./src/components/VImageGrid/VImageGrid.vue?vue&type=style&index=0&id=55c17f85&scoped=true&lang=css&")},"./src/components/VLoadMore.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var asyncToGenerator=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.16.5/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),dist_runtime=(__webpack_require__("./node_modules/.pnpm/regenerator-runtime@0.13.9/node_modules/regenerator-runtime/runtime.js"),__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.32.0_f76cbbf5da9c2936d5fdbb58483aa887/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs")),media=__webpack_require__("./src/stores/media/index.ts"),search=__webpack_require__("./src/stores/search.ts"),VButton=__webpack_require__("./src/components/VButton.vue"),VLoadMorevue_type_script_lang_ts_=Object(dist_runtime.b)({name:"VLoadMore",components:{VButton:VButton.default},setup:function setup(){var i18n=Object(dist_runtime.q)().i18n,mediaStore=Object(media.a)(),searchStore=Object(search.a)(),canLoadMore=Object(dist_runtime.a)((function(){return""!==searchStore.searchTerm&&mediaStore.fetchState.canFetch&&mediaStore.resultCount>0})),onLoadMore=function(){var _ref=Object(asyncToGenerator.a)(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(canLoadMore.value){_context.next=2;break}return _context.abrupt("return");case 2:return _context.next=4,mediaStore.fetchMedia({shouldPersistMedia:!0});case 4:case"end":return _context.stop()}}),_callee)})));return function onLoadMore(){return _ref.apply(this,arguments)}}(),isFetching=Object(dist_runtime.a)((function(){return mediaStore.fetchState.isFetching}));return{buttonLabel:Object(dist_runtime.a)((function(){return i18n.t("browse-page.load")})),isFetching:isFetching,onLoadMore:onLoadMore,canLoadMore:canLoadMore}}}),components_VLoadMorevue_type_script_lang_ts_=VLoadMorevue_type_script_lang_ts_,componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_css-loader@5.2.7/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(components_VLoadMorevue_type_script_lang_ts_,(function(){var _h=this.$createElement;return(this._self._c||_h)("VButton",{directives:[{name:"show",rawName:"v-show",value:this.canLoadMore,expression:"canLoadMore"}],attrs:{size:"large",variant:"full",disabled:this.isFetching,"data-testid":"load-more"},on:{click:this.onLoadMore}},[this._v("\n  "+this._s(this.buttonLabel)+"\n")])}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VButton:__webpack_require__("./src/components/VButton.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VLoadMore",exportName:"default",description:"",tags:{}}}}]);