(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2584554a"],{"07c1":function(t,e,a){"use strict";var s=a("bc4e"),n=a.n(s);n.a},4110:function(t,e,a){"use strict";var s=a("b17b0"),n=a.n(s);n.a},"411f":function(t,e,a){t.exports=a.p+"img/hourglass.b1ced30d.svg"},"42a5":function(t,e,a){},"5b0a":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("print-modal",{ref:"printModal",attrs:{"json-string":t.raw}}),a("json-string-modal",{ref:"jsonStringModal",attrs:{"update-json-string":t.updateJson}}),a("div",{staticClass:"name-available-container"},[t.$route.fullPath.includes("auction")?a("div",{staticClass:"content-header"},[a("div",[a("h3",[t._v(t._s(t.domainName))]),a("p",[t._v(t._s(t.$t("dapps.domainIsAvailable")))])])]):t._e(),t.$route.fullPath.includes("bid")?a("div",{staticClass:"auction-started"},[a("div",[a("h3",[t._v(t._s(t.$t("dapps.auctionStarted"))+" "+t._s(t.domainName))])])]):t._e(),t.$route.fullPath.includes("reveal")?a("div",{staticClass:"auction-started"},[a("h3",[t._v("\n        "+t._s(t.$t("dapps.revealBid"))+" "+t._s(t.domainName)+"\n        "+t._s(t.$t("dapps.revealBidCont"))+". "),a("br"),t._v("\n        "+t._s(t.highestBidder)+" "+t._s(t.networkName)+" ("+t._s(t.$t("dapps.currentHighestBid"))+")\n      ")])]):t._e(),a("div",{staticClass:"timer-container"},[t.$route.fullPath.includes("bid")?a("timer",{attrs:{"date-number":t.auctionDateEnd,"date-type":"reveal"}}):t._e(),t.$route.fullPath.includes("bid")||t.$route.fullPath.includes("reveal")?a("timer",{style:{width:t.$route.fullPath.includes("reveal")?"100%":""},attrs:{"date-number":t.auctionDateEnd,"date-type":"auction"}}):t._e()],1),a("div",{attrs:{role:"tablist"}},[a("b-card-header",{class:[t.showDetail?"done":"","accordion-header"],attrs:{"header-tag":"header"}},[a("div",[a("span",[t._v(" 1 ")]),t._v("   "+t._s(t.$t("dapps.bidInfo")))]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showDetail,expression:"showDetail"}],staticClass:"edit",on:{click:t.editInputs}},[t._v("\n          "+t._s(t.$t("dapps.edit"))+"\n        ")])]),a("b-collapse",{attrs:{id:"bidAccordion",accordion:"bidAccordionCollection",role:"tabpanel"},model:{value:t.showInfo,callback:function(e){t.showInfo=e},expression:"showInfo"}},[a("div",{staticClass:"inputs-container"},[a("div",{staticClass:"input-container"},[a("label",{attrs:{for:"localBidAmount"}},[t._v(t._s(t.$t("dapps.actualBid")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.localBidAmount,expression:"localBidAmount"}],class:[t.localBidAmount<t.MIN_BID?"errored":""],attrs:{type:"number",name:"localBidAmount"},domProps:{value:t.localBidAmount},on:{input:function(e){e.target.composing||(t.localBidAmount=e.target.value)}}})]),a("div",{staticClass:"input-container"},[a("label",{attrs:{for:"localBidMask"}},[t._v(t._s(t.$t("dapps.bidMask")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.localBidMask,expression:"localBidMask"}],class:[t.localBidAmount>=t.localBidMask?"errored":""],attrs:{type:"number",name:"localBidMask"},domProps:{value:t.localBidMask},on:{input:function(e){e.target.composing||(t.localBidMask=e.target.value)}}}),a("p",{directives:[{name:"show",rawName:"v-show",value:t.localBidAmount>=t.localBidMask,expression:"localBidAmount >= localBidMask"}],staticClass:"erroredMsg"},[t._v("\n              "+t._s(t.$t("dapps.bidMaskDesc"))+"\n            ")])]),a("div",{staticClass:"input-container"},[a("label",{staticClass:"secret-phrase-label",attrs:{for:"localSecretPhrase"}},[a("span",{staticClass:"input-title"},[t._v("\n                "+t._s(t.$t("dapps.secretPhrase"))+"\n              ")]),a("button",{staticClass:"title-button",on:{click:function(e){return e.preventDefault(),t.generateKeyPhrase(e)}}},[a("i",{staticClass:"fa fa-lg fa-refresh"}),t._v(" "+t._s(t.$t("dapps.random"))+"\n              ")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.localSecretPhrase,expression:"localSecretPhrase"}],attrs:{type:"text",name:"localSecretPhrase"},domProps:{value:t.localSecretPhrase},on:{input:function(e){e.target.composing||(t.localSecretPhrase=e.target.value)}}})])])]),a("b-card-header",{class:[t.showInfo?"disable":"","accordion-header-details"],attrs:{"header-tag":"header"}},[a("div",[a("span",[t._v(" 2 ")]),t._v("   "+t._s(t.$t("dapps.details")))])]),a("b-collapse",{attrs:{id:"detailAccordion",accordion:"bidAccordionCollection",role:"tabpanel"},model:{value:t.showDetail,callback:function(e){t.showDetail=e},expression:"showDetail"}},[a("div",{staticClass:"inputs-container"},[t.$route.fullPath.includes("reveal")?t._e():a("div",{staticClass:"confirmation-warning"},[t._v("\n            "+t._s(t.$t("dapps.detailWarning"))+"\n          ")]),a("div",{staticClass:"detail-info",attrs:{id:"printableData"}},[a("div",{staticClass:"detail-info-item"},[a("span",{staticClass:"detail-title"},[t._v(t._s(t.$t("dapps.actualBid")))]),a("span",{staticClass:"detail-value"},[t._v(t._s(t.raw.bidAmount)+" "+t._s(t.networkName))])]),a("div",{staticClass:"detail-info-item"},[a("span",{staticClass:"detail-title"},[t._v(t._s(t.$t("dapps.secretPhrase")))]),a("span",{staticClass:"detail-value"},[t._v(t._s(t.raw.secretPhrase))])]),a("div",{staticClass:"detail-info-item"},[a("span",{staticClass:"detail-title"},[t._v(t._s(t.$t("dapps.revealDate")))]),a("span",{staticClass:"detail-value"},[t._v(t._s(t.formatDate(t.raw.revealDate)))])]),a("div",{staticClass:"detail-info-item"},[a("span",{staticClass:"detail-title"},[t._v(t._s(t.$t("dapps.bidMask")))]),a("span",{staticClass:"detail-value"},[t._v(t._s(t.raw.bidMask)+" "+t._s(t.networkName))])]),a("div",{staticClass:"detail-info-item"},[a("span",{staticClass:"detail-title"},[t._v(t._s(t.$t("dapps.auctionEnd")))]),a("span",{staticClass:"detail-value"},[t._v(t._s(t.formatDate(t.raw.auctionDateEnd)))])]),a("div",{staticClass:"json-container"},[a("div",{staticClass:"json-label-container"},[a("span",{staticClass:"json-title"},[t._v(t._s(t.$t("dapps.jsonString")))]),a("button",{staticClass:"title-button",on:{click:t.copyString}},[t._v("\n                  "+t._s(t.$t("common.copy"))+"\n                ")])]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.jsonText,expression:"jsonText"}],ref:"json",staticClass:"json-content",domProps:{value:t.jsonText},on:{input:function(e){e.target.composing||(t.jsonText=e.target.value)}}})])])])]),a("div",{staticClass:"buttons-container"},[t.$route.fullPath.includes("reveal")?a("button",{staticClass:"json-string",on:{click:function(e){return e.preventDefault(),t.openJsonModal(e)}}},[t._v("\n          "+t._s(t.$t("dapps.jsonString"))+"\n        ")]):t._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showInfo,expression:"showInfo"}],class:[t.validInputs?"":"disabled","submit-button large-round-button-green-filled"],on:{click:function(e){e.preventDefault(),t.$route.fullPath.includes("auction")?t.startAuctionAndBid():t.$route.fullPath.includes("bid")?t.sendBid():t.revealBid()}}},[t._v("\n          Next\n        ")]),a("button",{directives:[{name:"show",rawName:"v-show",value:t.showDetail,expression:"showDetail"}],staticClass:"submit",attrs:{role:"tab"},on:{click:function(e){return e.preventDefault(),t.send(e)}}},[t._v("\n          Submit\n        ")]),a("button",{directives:[{name:"show",rawName:"v-show",value:t.showDetail,expression:"showDetail"}],staticClass:"mid-round-button-green-border print-button",on:{click:t.download}},[t._v("\n          Print\n        ")])])],1)])],1)},n=[],i=(a("6b54"),a("7f7f"),a("f499")),o=a.n(i),r=(a("a481"),a("cebc")),l=(a("c5f6"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"timer"},[s("div",{staticClass:"actual-timer"},[s("div",[s("img",{attrs:{src:a("411f"),alt:""}}),s("span",{directives:[{name:"show",rawName:"v-show",value:"reveal"===t.dateType,expression:"dateType === 'reveal'"}]},[t._v("\n        "+t._s(t.$t("dapps.revealsBid"))+"\n      ")]),s("span",{directives:[{name:"show",rawName:"v-show",value:"auction"===t.dateType,expression:"dateType === 'auction'"}]},[t._v("\n        "+t._s(t.$t("dapps.auctionCloses"))+"\n      ")])]),s("b",[t._v(t._s(t.time))])]),s("span",{staticClass:"deadline"},[t._v(t._s(t.dateToText()))])])}),c=[],d=a("ce96"),u={props:{dateType:{type:String,default:""},dateNumber:{type:Number,default:0}},data:function(){return{text:"",time:"0 Day(s) --:--:--",timer:function(){}}},mounted:function(){0!==this.dateNumber&&this.startClock()},destroyed:function(){var t=this;clearInterval(t.timer)},methods:{dateToText:function(){var t=new Date(this.dateNumber),e=t.setDate(t.getDate()-2);return"reveal"===this.dateType?d["c"].formatDate(e):d["c"].formatDate(this.dateNumber)},startClock:function(){var t,e,a=this,s=new Date(this.dateNumber),n=s.setDate(s.getDate()-2),i="reveal"===this.dateType?new Date(n).getTime():new Date(this.dateNumber),o=0,r=0,l=0,c=0;this.timer=setInterval(function(){if(t=(new Date).getTime(),e=i-t,r=Math.floor(e%6e4/1e3),l=Math.floor(e%36e5/6e4),o=Math.floor(e%864e5/36e5),c=Math.floor(e/864e5),a.time="".concat(c," Day(s) ").concat(o<10?"0"+o:o,":").concat(l<10?"0"+l:l,":").concat(r<10?"0"+r:r),r<0){var s=a;a.time="Reveal bids on going.",clearInterval(s.timer)}},1e3)}}},p=u,m=(a("07c1"),a("2877")),v=Object(m["a"])(p,l,c,!1,null,"06e376aa",null),h=v.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{ref:"jsonString",staticClass:"bootstrap-modal json-string-modal",attrs:{title:t.$t("dapps.jsonString"),"hide-footer":"",centered:""}},[a("form",{staticClass:"json-string-form"},[a("div",{staticClass:"input-container"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.jsonText,expression:"jsonText"}],attrs:{placeholder:"{\n          'address': '0xf6827a968275bd62c8ca5fc08cf498b8711491c1',\n          'msg': 'hellow',\n          'sig': '0x32e4c6b54fb88487b1ea6b0bd41509aec82eb98969eec7127ecc8a1f1a8275724f3e97283ca3beb4692dd093150216cf602cd7a915605bfc3fb56f74f6e065d31c',\n          'version': '3',\n          'signer': 'MEW'\n        }"},domProps:{value:t.jsonText},on:{input:function(e){e.target.composing||(t.jsonText=e.target.value)}}})]),a("button",{staticClass:"submit-button large-round-button-green-filled",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.submitJson(e)}}},[t._v("\n      "+t._s(t.$t("dapps.confirm"))+"\n    ")]),a("interface-bottom-text",{attrs:{link:"mailto:support@myetherwallet.com","link-text":"https://kb.myetherwallet.com",question:"Having issues?"}})],1)])},b=[],w=a("539d"),g={components:{"interface-bottom-text":w["a"]},props:{updateJsonString:{type:Function,default:function(){return{}}}},data:function(){return{jsonText:""}},methods:{submitJson:function(){this.updateJsonString(this.jsonText),this.jsonText="",this.$refs.jsonString.hide()}}},_=g,C=(a("748b"),Object(m["a"])(_,f,b,!1,null,null,null)),y=C.exports,A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-modal",{ref:"print",staticClass:"nopadding print-mod",attrs:{title:"Print Preview","hide-footer":"",centered:"",size:"lg"}},[s("div",{ref:"printContainer",staticClass:"print-modal"},[s("div",{staticClass:"print-modal-header"},[s("div",{staticClass:"logo-container"},[s("img",{attrs:{src:a("9d64"),height:"35px"}}),s("span",{staticClass:"divider"}),s("p",[t._v("ENS Reveal Bid")])]),s("div",{staticClass:"date-container"},[t._v(t._s(t.todaysDate))])]),s("div",{staticClass:"print-modal-body"},[t._l(Object.keys(t.displayedData),function(e){return s("div",{key:e,staticClass:"print-item"},[s("p",{staticClass:"print-item-title"},[t._v(t._s(t.displayedData[e].title))]),s("p",[t._v(t._s(t.displayedData[e].info))])])}),s("div",{staticClass:"json-string-container"},[s("p",[t._v("JSON String")]),s("div",[t._v(t._s(t.jsonString))])]),s("div",{staticClass:"print-warning"},[s("div",{staticClass:"print-warning-img"},[s("img",{attrs:{src:a("b0b7")}})]),s("div",[s("b",[t._v("SAVE")]),t._v(" this information. When the auction ends in\n          "),s("b",[t._v("3")]),t._v(" days, you will have "),s("b",[t._v("48")]),t._v(" hours to reveal your bid.\n          When it's time, search the ENS domain on our site and enter your\n          Actual Bid Amount and Secret Phrase to reveal your bid. If you won,\n          you will be notified to finalize the process.\n        ")])])],2),s("div",{staticClass:"print-modal-footer"},[s("div",[s("img",{attrs:{src:a("7f1f")}}),s("span",[t._v("support@myetherwallet.com")])]),s("div",[s("img",{attrs:{src:a("9294")}}),s("span",[t._v("https://www.myetherwallet.com")])])])]),s("div",{staticClass:"button-container"},[s("div",{staticClass:"print-button",on:{click:t.print}},[s("i",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"fa fa-spinner fa-spin"}),s("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},[t._v("Print")])])])])},S=[],k=(a("96cf"),a("3b8d")),j=(a("28a5"),a("c0e9")),D=a.n(j),M=a("add5"),x=a.n(M),P=a("2f62"),N={props:{jsonString:{type:Object,default:function(){return{}}}},data:function(){return{todaysDate:(new Date).toDateString().split(" ").splice(1,3).join(" "),loading:!1}},computed:Object(r["a"])({},Object(P["b"])({network:"network"}),{displayedData:function(){var t=new Date(this.jsonString["revealDate"]),e=new Date(this.jsonString["auctionDateEnd"]),a={actualBid:{title:"Actual Bid",info:"".concat(this.jsonString["bidAmount"]," ").concat(this.network.type.name)},bidMask:{title:"Bid Mask",info:"".concat(this.jsonString["bidMask"]," ").concat(this.network.type.name)},revealDate:{title:"Reveal Date",info:"".concat(t.toGMTString()," / ").concat(t.toLocaleTimeString())},auctionEnd:{title:"Auction End",info:"".concat(e.toGMTString()," / ").concat(e.toLocaleTimeString())},secretPhrase:{title:"Secret Phrase",info:this.jsonString["secretPhrase"]}};return a}}),methods:{print:function(){var t=Object(k["a"])(regeneratorRuntime.mark(function t(){var e,a,s=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!this.loading,e=this.$refs.printContainer,t.next=4,D()(e,{async:!0,logging:!1});case 4:a=t.sent,this.loading=!this.loading,x()({printable:a.toDataURL("image/png"),type:"image",onPrintDialogClose:function(){s.$refs.print.hide()}});case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},B=N,I=(a("4110"),Object(m["a"])(B,A,S,!1,null,"7b19ef09",null)),$=I.exports,T=a("901e"),E=a.n(T),R={components:{timer:h,"print-modal":$,"json-string-modal":y},props:{domainName:{type:String,default:""},bidAmount:{type:Number,default:.01},bidMask:{type:Number,default:.02},loading:{type:Boolean,default:!1},generateKeyPhrase:{type:Function,default:function(){}},secretPhrase:{type:String,default:"random strings generated"},startAuctionAndBid:{type:Function,default:function(){}},sendBid:{type:Function,default:function(){}},revealBid:{type:Function,default:function(){}},auctionDateEnd:{type:Number,default:0},highestBidder:{type:String,default:""},tld:{type:String,default:""},networkName:{type:String,default:""},step:{type:Number,default:1},raw:{type:Object,default:function(){return{}}}},data:function(){return{localSecretPhrase:this.secretPhrase,localBidAmount:this.bidAmount,localBidMask:this.bidMask,localStep:this.step,showDetail:!1,showInfo:!0,formatDate:d["c"].formatDate,jsonText:"",MIN_BID:.01}},computed:Object(r["a"])({},Object(P["b"])({web3:"web3"}),{validInputs:function(){return this.secretPhrase.length>0&&new E.a(this.bidAmount).gte(this.MIN_BID)&&new E.a(this.bidMask).gte(this.bidAmount)},constructedRaw:function(){var t={data:this.raw["data"],from:this.raw["from"],to:this.raw["to"],value:this.raw["value"],gasPrice:this.raw["gasPrice"],gas:this.raw["gas"],nonce:this.raw["nonce"]};return t}}),watch:{localSecretPhrase:function(t){this.$emit("updateSecretPhrase",t)},localBidAmount:function(t){this.$emit("updateBidAmount",+t)},localBidMask:function(t){this.$emit("updateBidMask",+t)},secretPhrase:function(t){this.localSecretPhrase=t},localStep:function(t){this.showDetail=1!==t,this.showInfo=2!==t,this.$emit("updateStep",t)},step:function(t){this.localStep=t},raw:function(t){this.parseRaw(t)}},mounted:function(){"."===this.domainName&&this.$router.replace("/interface/dapps/manage-ens")},methods:{openJsonModal:function(){this.$refs.jsonStringModal.$refs.jsonString.show()},updateJson:function(t){var e=JSON.parse(t);this.localSecretPhrase=e["secretPhrase"],this.localBidAmount=e["bidAmount"],this.localBidMask=e["bidMask"]},parseRaw:function(t){this.jsonText=o()({name:"".concat(t.name,".eth"),nameSHA3:t.nameSHA3,bidAmount:t.bidAmount,bidMask:t.bidMask,value:this.web3.utils.toWei(t.bidAmount.toString(),"ether"),secretPhrase:t.secretPhrase,secretPhraseSHA3:t.secretPhraseSHA3})},editInputs:function(){this.localStep=1},copyString:function(){this.$refs["json"].select(),document.execCommand("copy"),window.getSelection().removeAllRanges()},send:function(){this.web3.eth.sendTransaction(this.constructedRaw).catch(function(t){d["d"].responseHandler(t,!1)})},download:function(){this.$refs.printModal.$refs.print.show()}}},J=R,O=(a("e725"),Object(m["a"])(J,s,n,!1,null,"7ccc7212",null)),Z=O.exports;a.d(e,"default",function(){return Z})},"748b":function(t,e,a){"use strict";var s=a("e64c"),n=a.n(s);n.a},9294:function(t,e,a){t.exports=a.p+"img/web-solution.82568ad8.svg"},"9d64":function(t,e,a){t.exports=a.p+"img/logo.5ed2dd34.png"},b0b7:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABsCAYAAACPZlfNAAADVklEQVR4nO2bvW4TQRSFxxiEIoFEQQESD4FA0IIoKHkbXgCJF4KKpKJ2Q4tAgESIkHARkaDwFxk5MMHZu7Ner+fnnPH5yps42rnfnrkb7+7IOedmz+64ipg1ljKqZWmjRxN33lT5aApqUpVAZmHLRIXwn6MUd85UOBgqa5EYfyM7bAmL3WS6tLEmbGNhEpZyC6PZHlmE5WgohTRtiWQwCMt55sOnTAkjA11YiTMeOmVKGBnIwkqe6bApU8LIQBWGcIZDpkwJIwNRGNKZDZcyJYwMNGGIcwPqmJQwMpCEIX/DAHNsShgZKMIY7kVBHKMSRgaCMKanl4ofqxJGRmlhjM8GFj1mJYyMksIon7z9R7FjV8LIKCWMOV2eImtQwsgoIayGdHmyr0UJIyO3sJrS5cm6JiWMjJwv9KU9E8dbr92tJ0emPmfy+KapxWWW66XAGl5K/8v44pG7di+1mOLk2hJrnF1NsqxRM4yMHMI2IV2e5GtVwshILWyT0uVJumYljIyUwjYxXZ5ka1fCyEglbJPT5UnSAyWMjBTCyqTr537711KfX74ytXxE74USRkZsYZpdlqg9UcLIiCmsfLq+fdw1ta9vDk0tP9F6U1fCDt5Nbe39b1MjJpYwza7lROmRZhgZMYQpXf1Zu1d1JezT9r6pTSdXTI2YdYUpXauzVs80w8hYR5jSNZzBvasrYYcf7HOWvw6umhoxQ4Vhpuv7l0umNju+YWoYDOqhZhgZQ4RpdsVj5V4qYWSsKgw7Xc27zmXvNvdlpZ4qYWTYy+AwHLPrxcP/qTr+sWV+jknv98vqeT/ME3oYpxL6bom6MkxPrx5rhpHRZ0vkSNdovOuuP3hr6nP2du6bGiZLZ1k9M+zC5am7/bRdzN6OKbGybEvU7MpPZ881w8joEtZpWiQl2PsuYQKQ0EVH0DAs83+Yn9+t6RxrvWJUwshoE6bZhYNx0SZMANMUZoyK4pxxooSRsShM6cLl1I0SRoYXpnThc+JICSNDwsiQMDIkjAwJI0PCyJAwMrwwc99FwHHiSAkjQ8LIWBSmbRGXUzdKGBlNYUoZHmectCVM0nAwLtqEubZfFNlpdRASJmllCfa+S5jr+qBIRmfPQ0/+hqTpznQaOiUJIbLgnPsDx+OYE4dZv0AAAAAASUVORK5CYII="},b17b0:function(t,e,a){},bc4e:function(t,e,a){},e64c:function(t,e,a){},e725:function(t,e,a){"use strict";var s=a("42a5"),n=a.n(s);n.a}}]);
//# sourceMappingURL=chunk-2584554a.a441428f.js.map