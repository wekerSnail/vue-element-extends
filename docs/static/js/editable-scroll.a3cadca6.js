(window["webpackJsonpVueElementExtends"]=window["webpackJsonpVueElementExtends"]||[]).push([["editable-scroll"],{"36f0":function(e,t,i){"use strict";var n=i("8532"),a=i.n(n);a.a},"4c6c":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"生成数据中，请稍后...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[i("p",{staticStyle:{color:"red","font-size":"12px"}},[e._v("启用滚动渲染，可以非常流畅的支撑大量数据")]),i("p",{staticStyle:{color:"red","font-size":"12px"}},[e._v("出于性能考虑：不支持滚动动画；不支持显示默认的索引列；只支持固定行高的表格")]),i("elx-editable",{ref:"elxEditable",staticClass:"scroll-table1",staticStyle:{width:"100%"},attrs:{border:"",data:e.list,"edit-config":{trigger:"manual",mode:"row",render:"scroll"}},on:{"update:data":function(t){e.list=t}}},[i("elx-editable-column",{attrs:{type:"selection",width:"55"}}),i("elx-editable-column",{attrs:{prop:"_index",label:"#",align:"center",width:"100"}}),i("elx-editable-column",{attrs:{prop:"name",label:"名字","show-overflow-tooltip":"","edit-render":{name:"ElInput"}}}),i("elx-editable-column",{attrs:{prop:"sex",label:"性别","edit-render":{name:"ElSelect",options:e.sexList}}}),i("elx-editable-column",{attrs:{prop:"age",label:"年龄","edit-render":{name:"ElInputNumber",attrs:{min:1,max:200}}}}),i("elx-editable-column",{attrs:{prop:"region",label:"地区",width:"200","edit-render":{name:"ElCascader",attrs:{options:e.regionList}}}}),i("elx-editable-column",{attrs:{prop:"date",label:"日期",width:"220","edit-render":{name:"ElDatePicker",attrs:{type:"datetime",format:"yyyy年MM月dd日 HH时ss分mm秒"}}}}),i("elx-editable-column",{attrs:{prop:"rate",label:"评分","edit-render":{type:"visible"}},scopedSlots:e._u([{key:"edit",fn:function(t){return[i("el-rate",{attrs:{"show-score":"","text-color":"#ff9900"},model:{value:t.row.rate,callback:function(i){e.$set(t.row,"rate",i)},expression:"scope.row.rate"}})]}}])}),i("elx-editable-column",{attrs:{prop:"updateTime",label:"更新时间",formatter:e.formatterDate}}),i("elx-editable-column",{attrs:{prop:"createTime",label:"创建时间",formatter:e.formatterDate}})],1)],1)},a=[],l=i("0a0d"),o=i.n(l),r=(i("c5f6"),i("c695")),s=i.n(r),c=i("628a"),d=i.n(c),f=i("5c96"),u={data:function(){return{loading:!1,list:[],sexList:[],regionList:[],isClearActiveFlag:!0}},created:function(){this.findList(),this.findSexList(),this.findRegionList()},methods:{findList:function(){var e=this;this.loading=!0,this.list=[];var t=Number(this.$route.params.number);setTimeout(function(){if(window["CACHE_LIST_".concat(t)])e.list=window["CACHE_LIST_".concat(t)].slice(0,t),e.loading=!1;else{var i=o()(),n=[],a=0,l=function l(){for(var o=0;o<4e3;o++)i+=5e3,a++,n.push({_index:a,id:"".concat(1e4+a),name:"name_".concat(a),date:i,sex:o%3?"0":"1",age:o%4===0?30:o%3===0?28:o%2===0?26:24,region:o%4===0?[19,199,1773]:o%3===0?[9,73,719]:[1,1,5],rate:o%4===0?4:o%3===0?3:o%2===0?2:1,updateTime:i,createTime:i});a>=t?(window["CACHE_LIST_".concat(t)]=n,e.list=n.slice(0,t),e.loading=!1):setTimeout(l,50)};l()}},500)},findSexList:function(){var e=this;d.a.doGet("/api/conf/sex/list").then(function(t){var i=t.data;e.sexList=i})},findRegionList:function(){var e=this;d.a.doGet("/api/conf/region/list").then(function(t){var i=t.data;e.regionList=i})},formatterDate:function(e,t,i,n){return s.a.toDateString(i,"yyyy-MM-dd HH:mm:ss")},insertEvent:function(){var e=this,t=this.$refs.elxEditable.getActiveRow(),i=this.$refs.elxEditable.getAllRecords(),n=i.insertRecords;t||n.length||this.$refs.elxEditable.insert({name:"New ".concat(o()()),age:26,flag:!1}).then(function(t){var i=t.row;e.$refs.elxEditable.setActiveRow(i)})},openActiveRowEvent:function(e){var t=this;this.$nextTick(function(){var i=t.$refs.elxEditable.getActiveRow();i&&i.isUpdate?(t.isClearActiveFlag=!1,f["MessageBox"].confirm("检测到未保存的内容，请确认操作?","温馨提示",{distinguishCancelAndClose:!0,confirmButtonText:"保存数据",cancelButtonText:"取消修改",type:"warning"}).then(function(){t.$refs.elxEditable.setActiveRow(e),t.saveRowEvent(i.row)}).catch(function(n){"cancel"===n&&(t.$refs.elxEditable.revert(i.row),t.$refs.elxEditable.setActiveRow(e))}).then(function(){t.isClearActiveFlag=!0})):t.$refs.elxEditable.setActiveRow(e)})},cancelRowEvent:function(e){var t=this;e.id?this.$refs.elxEditable.hasRowChange(e)?(this.isClearActiveFlag=!1,f["MessageBox"].confirm("检测到未保存的内容，是否取消修改?","温馨提示",{distinguishCancelAndClose:!0,confirmButtonText:"取消修改",cancelButtonText:"返回继续",type:"warning"}).then(function(i){t.$refs.elxEditable.clearActive(),t.$refs.elxEditable.revert(e)}).catch(function(i){"cancel"===i&&t.$refs.elxEditable.setActiveRow(e)}).then(function(){t.isClearActiveFlag=!0})):this.$refs.elxEditable.clearActive():(this.isClearActiveFlag=!1,f["MessageBox"].confirm("该数据未保存，是否移除?","温馨提示",{distinguishCancelAndClose:!0,confirmButtonText:"移除数据",cancelButtonText:"返回继续",type:"warning"}).then(function(i){"confirm"===i&&t.$refs.elxEditable.remove(e)}).catch(function(e){return e}).then(function(){t.isClearActiveFlag=!0}))},removeEvent:function(e){var t=this;e.id?(this.isClearActiveFlag=!1,f["MessageBox"].confirm("确定永久删除该数据?","温馨提示",{distinguishCancelAndClose:!0,confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){d.a.doDelete("/api/role/delete/".concat(e.id)).then(function(e){e.data;t.findList()}).catch(function(e){t.loading=!1})}).catch(function(e){return e}).then(function(){t.isClearActiveFlag=!0})):this.$refs.elxEditable.remove(e)},saveRowEvent:function(e){var t=this;this.$refs.elxEditable.validateRow(e,function(i){if(i){var n="/api/role/add";e.id&&(n="/api/role/update"),t.loading=!0,t.$refs.elxEditable.clearActive(),d.a.doPost(n,e).then(function(e){e.data;t.findList(),Object(f["Message"])({message:"保存成功",type:"success"})}).catch(function(e){t.loading=!1})}})},exportCsvEvent:function(){this.$refs.elxEditable.exportCsv()}},beforeRouteUpdate:function(e,t,i){i(),this.findList()}},m=u,v=(i("d4d5"),i("2877")),x=Object(v["a"])(m,n,a,!1,null,null,null);t["default"]=x.exports},"5baf":function(e,t,i){"use strict";var n=i("859b"),a=i.n(n);a.a},"64b1":function(e,t,i){},"74aa":function(e,t,i){},8532:function(e,t,i){},"859b":function(e,t,i){},"9abb":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"生成数据中，请稍后...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[i("p",{staticStyle:{color:"red","font-size":"12px"}},[e._v("启用滚动渲染，可以非常流畅的支撑大量数据")]),i("p",{staticStyle:{color:"red","font-size":"12px"}},[e._v("出于性能考虑：不支持滚动动画；不支持显示默认的索引列；只支持固定行高的表格")]),i("elx-editable",{ref:"elxEditable",staticClass:"scroll-table2",staticStyle:{width:"100%"},attrs:{border:"",size:"mini",data:e.list,"edit-config":{trigger:"click",mode:"cell",render:"scroll"}},on:{"update:data":function(t){e.list=t}}},[i("elx-editable-column",{attrs:{type:"selection",width:"55"}}),i("elx-editable-column",{attrs:{prop:"_index",label:"#",align:"center",width:"100"}}),i("elx-editable-column",{attrs:{prop:"name",label:"名字","show-overflow-tooltip":"","edit-render":{name:"ElInput"}}}),i("elx-editable-column",{attrs:{prop:"sex",label:"性别","edit-render":{name:"ElSelect",options:e.sexList}}}),i("elx-editable-column",{attrs:{prop:"age",label:"年龄","edit-render":{name:"ElInputNumber",attrs:{min:1,max:200}}}}),i("elx-editable-column",{attrs:{prop:"region",label:"地区",width:"200","edit-render":{name:"ElCascader",attrs:{options:e.regionList}}}}),i("elx-editable-column",{attrs:{prop:"date",label:"日期",width:"220","edit-render":{name:"ElDatePicker",attrs:{type:"datetime",format:"yyyy年MM月dd日 HH时ss分mm秒"}}}}),i("elx-editable-column",{attrs:{prop:"rate",label:"评分","edit-render":{type:"visible"}},scopedSlots:e._u([{key:"edit",fn:function(t){return[i("el-rate",{attrs:{"show-score":"","text-color":"#ff9900"},model:{value:t.row.rate,callback:function(i){e.$set(t.row,"rate",i)},expression:"scope.row.rate"}})]}}])}),i("elx-editable-column",{attrs:{prop:"updateTime",label:"更新时间",formatter:e.formatterDate}}),i("elx-editable-column",{attrs:{prop:"createTime",label:"创建时间",formatter:e.formatterDate}})],1)],1)},a=[],l=i("0a0d"),o=i.n(l),r=(i("c5f6"),i("c695")),s=i.n(r),c=i("628a"),d=i.n(c),f=i("5c96"),u={data:function(){return{loading:!1,list:[],sexList:[],regionList:[],isClearActiveFlag:!0}},created:function(){this.findList(),this.findSexList(),this.findRegionList()},methods:{findList:function(){var e=this;this.loading=!0,this.list=[];var t=Number(this.$route.params.number);setTimeout(function(){if(window["CACHE_LIST_".concat(t)])e.list=window["CACHE_LIST_".concat(t)].slice(0,t),e.loading=!1;else{var i=o()(),n=[],a=0,l=function l(){for(var o=0;o<4e3;o++)i+=5e3,a++,n.push({_index:a,id:"".concat(1e4+a),name:"name_".concat(a),date:i,sex:o%3?"0":"1",age:o%4===0?30:o%3===0?28:o%2===0?26:24,region:o%4===0?[19,199,1773]:o%3===0?[9,73,719]:[1,1,5],rate:o%4===0?4:o%3===0?3:o%2===0?2:1,updateTime:i,createTime:i});a>=t?(window["CACHE_LIST_".concat(t)]=n,e.list=n.slice(0,t),e.loading=!1):setTimeout(l,50)};l()}},500)},findSexList:function(){var e=this;d.a.doGet("/api/conf/sex/list").then(function(t){var i=t.data;e.sexList=i})},findRegionList:function(){var e=this;d.a.doGet("/api/conf/region/list").then(function(t){var i=t.data;e.regionList=i})},formatterDate:function(e,t,i,n){return s.a.toDateString(i,"yyyy-MM-dd HH:mm:ss")},insertEvent:function(){var e=this,t=this.$refs.elxEditable.getActiveRow(),i=this.$refs.elxEditable.getAllRecords(),n=i.insertRecords;t||n.length||this.$refs.elxEditable.insert({name:"New ".concat(o()()),age:26,flag:!1}).then(function(t){var i=t.row;e.$refs.elxEditable.setActiveRow(i)})},openActiveRowEvent:function(e){var t=this;this.$nextTick(function(){var i=t.$refs.elxEditable.getActiveRow();i&&i.isUpdate?(t.isClearActiveFlag=!1,f["MessageBox"].confirm("检测到未保存的内容，请确认操作?","温馨提示",{distinguishCancelAndClose:!0,confirmButtonText:"保存数据",cancelButtonText:"取消修改",type:"warning"}).then(function(){t.$refs.elxEditable.setActiveRow(e),t.saveRowEvent(i.row)}).catch(function(n){"cancel"===n&&(t.$refs.elxEditable.revert(i.row),t.$refs.elxEditable.setActiveRow(e))}).then(function(){t.isClearActiveFlag=!0})):t.$refs.elxEditable.setActiveRow(e)})},cancelRowEvent:function(e){var t=this;e.id?this.$refs.elxEditable.hasRowChange(e)?(this.isClearActiveFlag=!1,f["MessageBox"].confirm("检测到未保存的内容，是否取消修改?","温馨提示",{distinguishCancelAndClose:!0,confirmButtonText:"取消修改",cancelButtonText:"返回继续",type:"warning"}).then(function(i){t.$refs.elxEditable.clearActive(),t.$refs.elxEditable.revert(e)}).catch(function(i){"cancel"===i&&t.$refs.elxEditable.setActiveRow(e)}).then(function(){t.isClearActiveFlag=!0})):this.$refs.elxEditable.clearActive():(this.isClearActiveFlag=!1,f["MessageBox"].confirm("该数据未保存，是否移除?","温馨提示",{distinguishCancelAndClose:!0,confirmButtonText:"移除数据",cancelButtonText:"返回继续",type:"warning"}).then(function(i){"confirm"===i&&t.$refs.elxEditable.remove(e)}).catch(function(e){return e}).then(function(){t.isClearActiveFlag=!0}))},removeEvent:function(e){var t=this;e.id?(this.isClearActiveFlag=!1,f["MessageBox"].confirm("确定永久删除该数据?","温馨提示",{distinguishCancelAndClose:!0,confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){d.a.doDelete("/api/role/delete/".concat(e.id)).then(function(e){e.data;t.findList()}).catch(function(e){t.loading=!1})}).catch(function(e){return e}).then(function(){t.isClearActiveFlag=!0})):this.$refs.elxEditable.remove(e)},saveRowEvent:function(e){var t=this;this.$refs.elxEditable.validateRow(e,function(i){if(i){var n="/api/role/add";e.id&&(n="/api/role/update"),t.loading=!0,t.$refs.elxEditable.clearActive(),d.a.doPost(n,e).then(function(e){e.data;t.findList(),Object(f["Message"])({message:"保存成功",type:"success"})}).catch(function(e){t.loading=!1})}})},exportCsvEvent:function(){this.$refs.elxEditable.exportCsv()}},beforeRouteUpdate:function(e,t,i){i(),this.findList()}},m=u,v=(i("36f0"),i("2877")),x=Object(v["a"])(m,n,a,!1,null,null,null);t["default"]=x.exports},c3de:function(e,t,i){},cc66:function(e,t,i){"use strict";var n=i("c3de"),a=i.n(n);a.a},d4d5:function(e,t,i){"use strict";var n=i("64b1"),a=i.n(n);a.a},d5ae:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"生成数据中，请稍后...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[i("p",{staticStyle:{color:"red","font-size":"12px"}},[e._v("启用滚动渲染，可以非常流畅的支撑大量数据")]),i("p",{staticStyle:{color:"red","font-size":"12px"}},[e._v("出于性能考虑：不支持滚动动画；不支持显示默认的索引列；只支持固定行高的表格")]),i("elx-editable",{ref:"elxEditable",staticClass:"scroll-table5",staticStyle:{width:"100%"},attrs:{border:"",size:"medium",data:e.list,"edit-config":{trigger:"dblclick",mode:"row",render:"scroll"}},on:{"update:data":function(t){e.list=t}}},[i("elx-editable-column",{attrs:{type:"selection",width:"55"}}),i("elx-editable-column",{attrs:{prop:"_index",label:"#",align:"center",width:"100"}}),i("elx-editable-column",{attrs:{prop:"name",label:"名字","show-overflow-tooltip":"","edit-render":{name:"ElInput"}}}),i("elx-editable-column",{attrs:{prop:"sex",label:"性别","edit-render":{name:"ElSelect",options:e.sexList}}}),i("elx-editable-column",{attrs:{prop:"age",label:"年龄","edit-render":{name:"ElInputNumber",attrs:{min:1,max:200}}}}),i("elx-editable-column",{attrs:{prop:"region",label:"地区",width:"200","edit-render":{name:"ElCascader",attrs:{options:e.regionList}}}}),i("elx-editable-column",{attrs:{prop:"date",label:"日期",width:"220","edit-render":{name:"ElDatePicker",attrs:{type:"datetime",format:"yyyy年MM月dd日 HH时ss分mm秒"}}}}),i("elx-editable-column",{attrs:{prop:"rate",label:"评分","edit-render":{type:"visible"}},scopedSlots:e._u([{key:"edit",fn:function(t){return[i("el-rate",{attrs:{"show-score":"","text-color":"#ff9900"},model:{value:t.row.rate,callback:function(i){e.$set(t.row,"rate",i)},expression:"scope.row.rate"}})]}}])}),i("elx-editable-column",{attrs:{prop:"updateTime",label:"更新时间",formatter:e.formatterDate}}),i("elx-editable-column",{attrs:{prop:"createTime",label:"创建时间",formatter:e.formatterDate}})],1)],1)},a=[],l=i("0a0d"),o=i.n(l),r=(i("c5f6"),i("c695")),s=i.n(r),c=i("628a"),d=i.n(c),f=i("5c96"),u={data:function(){return{loading:!1,list:[],sexList:[],regionList:[],isClearActiveFlag:!0}},created:function(){this.findList(),this.findSexList(),this.findRegionList()},methods:{findList:function(){var e=this;this.loading=!0,this.list=[];var t=Number(this.$route.params.number);setTimeout(function(){if(window["CACHE_LIST_".concat(t)])e.list=window["CACHE_LIST_".concat(t)].slice(0,t),e.loading=!1;else{var i=o()(),n=[],a=0,l=function l(){for(var o=0;o<4e3;o++)i+=5e3,a++,n.push({_index:a,id:"".concat(1e4+a),name:"name_".concat(a),date:i,sex:o%3?"0":"1",age:o%4===0?30:o%3===0?28:o%2===0?26:24,region:o%4===0?[19,199,1773]:o%3===0?[9,73,719]:[1,1,5],rate:o%4===0?4:o%3===0?3:o%2===0?2:1,updateTime:i,createTime:i});a>=t?(window["CACHE_LIST_".concat(t)]=n,e.list=n.slice(0,t),e.loading=!1):setTimeout(l,50)};l()}},500)},findSexList:function(){var e=this;d.a.doGet("/api/conf/sex/list").then(function(t){var i=t.data;e.sexList=i})},findRegionList:function(){var e=this;d.a.doGet("/api/conf/region/list").then(function(t){var i=t.data;e.regionList=i})},formatterDate:function(e,t,i,n){return s.a.toDateString(i,"yyyy-MM-dd HH:mm:ss")},insertEvent:function(){var e=this,t=this.$refs.elxEditable.getActiveRow(),i=this.$refs.elxEditable.getAllRecords(),n=i.insertRecords;t||n.length||this.$refs.elxEditable.insert({name:"New ".concat(o()()),age:26,flag:!1}).then(function(t){var i=t.row;e.$refs.elxEditable.setActiveRow(i)})},openActiveRowEvent:function(e){var t=this;this.$nextTick(function(){var i=t.$refs.elxEditable.getActiveRow();i&&i.isUpdate?(t.isClearActiveFlag=!1,f["MessageBox"].confirm("检测到未保存的内容，请确认操作?","温馨提示",{distinguishCancelAndClose:!0,confirmButtonText:"保存数据",cancelButtonText:"取消修改",type:"warning"}).then(function(){t.$refs.elxEditable.setActiveRow(e),t.saveRowEvent(i.row)}).catch(function(n){"cancel"===n&&(t.$refs.elxEditable.revert(i.row),t.$refs.elxEditable.setActiveRow(e))}).then(function(){t.isClearActiveFlag=!0})):t.$refs.elxEditable.setActiveRow(e)})},cancelRowEvent:function(e){var t=this;e.id?this.$refs.elxEditable.hasRowChange(e)?(this.isClearActiveFlag=!1,f["MessageBox"].confirm("检测到未保存的内容，是否取消修改?","温馨提示",{distinguishCancelAndClose:!0,confirmButtonText:"取消修改",cancelButtonText:"返回继续",type:"warning"}).then(function(i){t.$refs.elxEditable.clearActive(),t.$refs.elxEditable.revert(e)}).catch(function(i){"cancel"===i&&t.$refs.elxEditable.setActiveRow(e)}).then(function(){t.isClearActiveFlag=!0})):this.$refs.elxEditable.clearActive():(this.isClearActiveFlag=!1,f["MessageBox"].confirm("该数据未保存，是否移除?","温馨提示",{distinguishCancelAndClose:!0,confirmButtonText:"移除数据",cancelButtonText:"返回继续",type:"warning"}).then(function(i){"confirm"===i&&t.$refs.elxEditable.remove(e)}).catch(function(e){return e}).then(function(){t.isClearActiveFlag=!0}))},removeEvent:function(e){var t=this;e.id?(this.isClearActiveFlag=!1,f["MessageBox"].confirm("确定永久删除该数据?","温馨提示",{distinguishCancelAndClose:!0,confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){d.a.doDelete("/api/role/delete/".concat(e.id)).then(function(e){e.data;t.findList()}).catch(function(e){t.loading=!1})}).catch(function(e){return e}).then(function(){t.isClearActiveFlag=!0})):this.$refs.elxEditable.remove(e)},saveRowEvent:function(e){var t=this;this.$refs.elxEditable.validateRow(e,function(i){if(i){var n="/api/role/add";e.id&&(n="/api/role/update"),t.loading=!0,t.$refs.elxEditable.clearActive(),d.a.doPost(n,e).then(function(e){e.data;t.findList(),Object(f["Message"])({message:"保存成功",type:"success"})}).catch(function(e){t.loading=!1})}})},exportCsvEvent:function(){this.$refs.elxEditable.exportCsv()}},beforeRouteUpdate:function(e,t,i){i(),this.findList()}},m=u,v=(i("fafb"),i("2877")),x=Object(v["a"])(m,n,a,!1,null,null,null);t["default"]=x.exports},eec0:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"生成数据中，请稍后...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[i("p",{staticStyle:{color:"red","font-size":"12px"}},[e._v("启用滚动渲染，可以非常流畅的支撑大量数据")]),i("p",{staticStyle:{color:"red","font-size":"12px"}},[e._v("出于性能考虑：不支持滚动动画；不支持显示默认的索引列；只支持固定行高的表格")]),i("elx-editable",{ref:"elxEditable",staticClass:"scroll-table3",staticStyle:{width:"100%"},attrs:{border:"",size:"small",data:e.list,"edit-config":{trigger:"dblclick",mode:"row",render:"scroll"}},on:{"update:data":function(t){e.list=t}}},[i("elx-editable-column",{attrs:{type:"selection",width:"55"}}),i("elx-editable-column",{attrs:{prop:"_index",label:"#",align:"center",width:"100"}}),i("elx-editable-column",{attrs:{prop:"name",label:"名字","show-overflow-tooltip":"","edit-render":{name:"ElInput"}}}),i("elx-editable-column",{attrs:{prop:"sex",label:"性别","edit-render":{name:"ElSelect",options:e.sexList}}}),i("elx-editable-column",{attrs:{prop:"age",label:"年龄","edit-render":{name:"ElInputNumber",attrs:{min:1,max:200}}}}),i("elx-editable-column",{attrs:{prop:"region",label:"地区",width:"200","edit-render":{name:"ElCascader",attrs:{options:e.regionList}}}}),i("elx-editable-column",{attrs:{prop:"date",label:"日期",width:"220","edit-render":{name:"ElDatePicker",attrs:{type:"datetime",format:"yyyy年MM月dd日 HH时ss分mm秒"}}}}),i("elx-editable-column",{attrs:{prop:"rate",label:"评分","edit-render":{type:"visible"}},scopedSlots:e._u([{key:"edit",fn:function(t){return[i("el-rate",{attrs:{"show-score":"","text-color":"#ff9900"},model:{value:t.row.rate,callback:function(i){e.$set(t.row,"rate",i)},expression:"scope.row.rate"}})]}}])}),i("elx-editable-column",{attrs:{prop:"updateTime",label:"更新时间",formatter:e.formatterDate}}),i("elx-editable-column",{attrs:{prop:"createTime",label:"创建时间",formatter:e.formatterDate}})],1)],1)},a=[],l=i("0a0d"),o=i.n(l),r=(i("c5f6"),i("c695")),s=i.n(r),c=i("628a"),d=i.n(c),f=i("5c96"),u={data:function(){return{loading:!1,list:[],sexList:[],regionList:[],isClearActiveFlag:!0}},created:function(){this.findList(),this.findSexList(),this.findRegionList()},methods:{findList:function(){var e=this;this.loading=!0,this.list=[];var t=Number(this.$route.params.number);setTimeout(function(){if(window["CACHE_LIST_".concat(t)])e.list=window["CACHE_LIST_".concat(t)].slice(0,t),e.loading=!1;else{var i=o()(),n=[],a=0,l=function l(){for(var o=0;o<4e3;o++)i+=5e3,a++,n.push({_index:a,id:"".concat(1e4+a),name:"name_".concat(a),date:i,sex:o%3?"0":"1",age:o%4===0?30:o%3===0?28:o%2===0?26:24,region:o%4===0?[19,199,1773]:o%3===0?[9,73,719]:[1,1,5],rate:o%4===0?4:o%3===0?3:o%2===0?2:1,updateTime:i,createTime:i});a>=t?(window["CACHE_LIST_".concat(t)]=n,e.list=n.slice(0,t),e.loading=!1):setTimeout(l,50)};l()}},500)},findSexList:function(){var e=this;d.a.doGet("/api/conf/sex/list").then(function(t){var i=t.data;e.sexList=i})},findRegionList:function(){var e=this;d.a.doGet("/api/conf/region/list").then(function(t){var i=t.data;e.regionList=i})},formatterDate:function(e,t,i,n){return s.a.toDateString(i,"yyyy-MM-dd HH:mm:ss")},insertEvent:function(){var e=this,t=this.$refs.elxEditable.getActiveRow(),i=this.$refs.elxEditable.getAllRecords(),n=i.insertRecords;t||n.length||this.$refs.elxEditable.insert({name:"New ".concat(o()()),age:26,flag:!1}).then(function(t){var i=t.row;e.$refs.elxEditable.setActiveRow(i)})},openActiveRowEvent:function(e){var t=this;this.$nextTick(function(){var i=t.$refs.elxEditable.getActiveRow();i&&i.isUpdate?(t.isClearActiveFlag=!1,f["MessageBox"].confirm("检测到未保存的内容，请确认操作?","温馨提示",{distinguishCancelAndClose:!0,confirmButtonText:"保存数据",cancelButtonText:"取消修改",type:"warning"}).then(function(){t.$refs.elxEditable.setActiveRow(e),t.saveRowEvent(i.row)}).catch(function(n){"cancel"===n&&(t.$refs.elxEditable.revert(i.row),t.$refs.elxEditable.setActiveRow(e))}).then(function(){t.isClearActiveFlag=!0})):t.$refs.elxEditable.setActiveRow(e)})},cancelRowEvent:function(e){var t=this;e.id?this.$refs.elxEditable.hasRowChange(e)?(this.isClearActiveFlag=!1,f["MessageBox"].confirm("检测到未保存的内容，是否取消修改?","温馨提示",{distinguishCancelAndClose:!0,confirmButtonText:"取消修改",cancelButtonText:"返回继续",type:"warning"}).then(function(i){t.$refs.elxEditable.clearActive(),t.$refs.elxEditable.revert(e)}).catch(function(i){"cancel"===i&&t.$refs.elxEditable.setActiveRow(e)}).then(function(){t.isClearActiveFlag=!0})):this.$refs.elxEditable.clearActive():(this.isClearActiveFlag=!1,f["MessageBox"].confirm("该数据未保存，是否移除?","温馨提示",{distinguishCancelAndClose:!0,confirmButtonText:"移除数据",cancelButtonText:"返回继续",type:"warning"}).then(function(i){"confirm"===i&&t.$refs.elxEditable.remove(e)}).catch(function(e){return e}).then(function(){t.isClearActiveFlag=!0}))},removeEvent:function(e){var t=this;e.id?(this.isClearActiveFlag=!1,f["MessageBox"].confirm("确定永久删除该数据?","温馨提示",{distinguishCancelAndClose:!0,confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){d.a.doDelete("/api/role/delete/".concat(e.id)).then(function(e){e.data;t.findList()}).catch(function(e){t.loading=!1})}).catch(function(e){return e}).then(function(){t.isClearActiveFlag=!0})):this.$refs.elxEditable.remove(e)},saveRowEvent:function(e){var t=this;this.$refs.elxEditable.validateRow(e,function(i){if(i){var n="/api/role/add";e.id&&(n="/api/role/update"),t.loading=!0,t.$refs.elxEditable.clearActive(),d.a.doPost(n,e).then(function(e){e.data;t.findList(),Object(f["Message"])({message:"保存成功",type:"success"})}).catch(function(e){t.loading=!1})}})},exportCsvEvent:function(){this.$refs.elxEditable.exportCsv()}},beforeRouteUpdate:function(e,t,i){i(),this.findList()}},m=u,v=(i("5baf"),i("2877")),x=Object(v["a"])(m,n,a,!1,null,null,null);t["default"]=x.exports},f25d:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"生成数据中，请稍后...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[i("p",{staticStyle:{color:"red","font-size":"12px"}},[e._v("启用滚动渲染，可以非常流畅的支撑大量数据")]),i("p",{staticStyle:{color:"red","font-size":"12px"}},[e._v("出于性能考虑：不支持滚动动画；不支持显示默认的索引列；只支持固定行高的表格")]),i("elx-editable",{ref:"elxEditable",staticClass:"scroll-table4",staticStyle:{width:"100%"},attrs:{border:"",size:"small",data:e.list,"edit-config":{trigger:"dblclick",mode:"cell",render:"scroll"}},on:{"update:data":function(t){e.list=t}}},[i("elx-editable-column",{attrs:{type:"selection",width:"55"}}),i("elx-editable-column",{attrs:{prop:"_index",label:"#",align:"center",width:"100"}}),i("elx-editable-column",{attrs:{prop:"name",label:"名字","show-overflow-tooltip":"","edit-render":{name:"ElInput"}}}),i("elx-editable-column",{attrs:{prop:"sex",label:"性别","edit-render":{name:"ElSelect",options:e.sexList}}}),i("elx-editable-column",{attrs:{prop:"age",label:"年龄","edit-render":{name:"ElInputNumber",attrs:{min:1,max:200}}}}),i("elx-editable-column",{attrs:{prop:"region",label:"地区",width:"200","edit-render":{name:"ElCascader",attrs:{options:e.regionList}}}}),i("elx-editable-column",{attrs:{prop:"date",label:"日期",width:"220","edit-render":{name:"ElDatePicker",attrs:{type:"datetime",format:"yyyy年MM月dd日 HH时ss分mm秒"}}}}),i("elx-editable-column",{attrs:{prop:"rate",label:"评分","edit-render":{type:"visible"}},scopedSlots:e._u([{key:"edit",fn:function(t){return[i("el-rate",{attrs:{"show-score":"","text-color":"#ff9900"},model:{value:t.row.rate,callback:function(i){e.$set(t.row,"rate",i)},expression:"scope.row.rate"}})]}}])}),i("elx-editable-column",{attrs:{prop:"updateTime",label:"更新时间",formatter:e.formatterDate}}),i("elx-editable-column",{attrs:{prop:"createTime",label:"创建时间",formatter:e.formatterDate}})],1)],1)},a=[],l=i("0a0d"),o=i.n(l),r=(i("c5f6"),i("c695")),s=i.n(r),c=i("628a"),d=i.n(c),f=i("5c96"),u={data:function(){return{loading:!1,list:[],sexList:[],regionList:[],isClearActiveFlag:!0}},created:function(){this.findList(),this.findSexList(),this.findRegionList()},methods:{findList:function(){var e=this;this.loading=!0,this.list=[];var t=Number(this.$route.params.number);setTimeout(function(){if(window["CACHE_LIST_".concat(t)])e.list=window["CACHE_LIST_".concat(t)].slice(0,t),e.loading=!1;else{var i=o()(),n=[],a=0,l=function l(){for(var o=0;o<4e3;o++)i+=5e3,a++,n.push({_index:a,id:"".concat(1e4+a),name:"name_".concat(a),date:i,sex:o%3?"0":"1",age:o%4===0?30:o%3===0?28:o%2===0?26:24,region:o%4===0?[19,199,1773]:o%3===0?[9,73,719]:[1,1,5],rate:o%4===0?4:o%3===0?3:o%2===0?2:1,updateTime:i,createTime:i});a>=t?(window["CACHE_LIST_".concat(t)]=n,e.list=n.slice(0,t),e.loading=!1):setTimeout(l,50)};l()}},500)},findSexList:function(){var e=this;d.a.doGet("/api/conf/sex/list").then(function(t){var i=t.data;e.sexList=i})},findRegionList:function(){var e=this;d.a.doGet("/api/conf/region/list").then(function(t){var i=t.data;e.regionList=i})},formatterDate:function(e,t,i,n){return s.a.toDateString(i,"yyyy-MM-dd HH:mm:ss")},insertEvent:function(){var e=this,t=this.$refs.elxEditable.getActiveRow(),i=this.$refs.elxEditable.getAllRecords(),n=i.insertRecords;t||n.length||this.$refs.elxEditable.insert({name:"New ".concat(o()()),age:26,flag:!1}).then(function(t){var i=t.row;e.$refs.elxEditable.setActiveRow(i)})},openActiveRowEvent:function(e){var t=this;this.$nextTick(function(){var i=t.$refs.elxEditable.getActiveRow();i&&i.isUpdate?(t.isClearActiveFlag=!1,f["MessageBox"].confirm("检测到未保存的内容，请确认操作?","温馨提示",{distinguishCancelAndClose:!0,confirmButtonText:"保存数据",cancelButtonText:"取消修改",type:"warning"}).then(function(){t.$refs.elxEditable.setActiveRow(e),t.saveRowEvent(i.row)}).catch(function(n){"cancel"===n&&(t.$refs.elxEditable.revert(i.row),t.$refs.elxEditable.setActiveRow(e))}).then(function(){t.isClearActiveFlag=!0})):t.$refs.elxEditable.setActiveRow(e)})},cancelRowEvent:function(e){var t=this;e.id?this.$refs.elxEditable.hasRowChange(e)?(this.isClearActiveFlag=!1,f["MessageBox"].confirm("检测到未保存的内容，是否取消修改?","温馨提示",{distinguishCancelAndClose:!0,confirmButtonText:"取消修改",cancelButtonText:"返回继续",type:"warning"}).then(function(i){t.$refs.elxEditable.clearActive(),t.$refs.elxEditable.revert(e)}).catch(function(i){"cancel"===i&&t.$refs.elxEditable.setActiveRow(e)}).then(function(){t.isClearActiveFlag=!0})):this.$refs.elxEditable.clearActive():(this.isClearActiveFlag=!1,f["MessageBox"].confirm("该数据未保存，是否移除?","温馨提示",{distinguishCancelAndClose:!0,confirmButtonText:"移除数据",cancelButtonText:"返回继续",type:"warning"}).then(function(i){"confirm"===i&&t.$refs.elxEditable.remove(e)}).catch(function(e){return e}).then(function(){t.isClearActiveFlag=!0}))},removeEvent:function(e){var t=this;e.id?(this.isClearActiveFlag=!1,f["MessageBox"].confirm("确定永久删除该数据?","温馨提示",{distinguishCancelAndClose:!0,confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){d.a.doDelete("/api/role/delete/".concat(e.id)).then(function(e){e.data;t.findList()}).catch(function(e){t.loading=!1})}).catch(function(e){return e}).then(function(){t.isClearActiveFlag=!0})):this.$refs.elxEditable.remove(e)},saveRowEvent:function(e){var t=this;this.$refs.elxEditable.validateRow(e,function(i){if(i){var n="/api/role/add";e.id&&(n="/api/role/update"),t.loading=!0,t.$refs.elxEditable.clearActive(),d.a.doPost(n,e).then(function(e){e.data;t.findList(),Object(f["Message"])({message:"保存成功",type:"success"})}).catch(function(e){t.loading=!1})}})},exportCsvEvent:function(){this.$refs.elxEditable.exportCsv()}},beforeRouteUpdate:function(e,t,i){i(),this.findList()}},m=u,v=(i("cc66"),i("2877")),x=Object(v["a"])(m,n,a,!1,null,null,null);t["default"]=x.exports},fafb:function(e,t,i){"use strict";var n=i("74aa"),a=i.n(n);a.a}}]);