(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[1578,3137,628,7324,8162],{"./node_modules/@ariakit/react-core/esm/__chunks/F4M2DDED.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{A5:function(){return TabScopedContextProvider},Nt:function(){return useTabProviderContext},aq:function(){return useTabScopedContext}});var _X3ATWMYX_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/X3ATWMYX.js"),ctx=(0,__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/LFJDOMBA.js").re)([_X3ATWMYX_js__WEBPACK_IMPORTED_MODULE_1__.Lq],[_X3ATWMYX_js__WEBPACK_IMPORTED_MODULE_1__.al]),useTabScopedContext=(ctx.useContext,ctx.useScopedContext),useTabProviderContext=ctx.useProviderContext,TabScopedContextProvider=(ctx.ContextProvider,ctx.ScopedContextProvider)},"./node_modules/@ariakit/react-core/esm/__chunks/WWOEH5U6.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{z:function(){return useTabStore}});var VUP7S67H=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/VUP7S67H.js"),_2ID5JPOO=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/2ID5JPOO.js"),_2SMRF6AD=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/2SMRF6AD.js"),react=__webpack_require__("./node_modules/react/index.js"),FGW7QUD2=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/FGW7QUD2.js"),Q332EHXG=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/Q332EHXG.js"),GME4NYXR=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/GME4NYXR.js"),D23ES3Z4=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/D23ES3Z4.js"),_chunks_2SMRF6AD=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/2SMRF6AD.js");function createTabStore(props={}){var _a;const syncState=null==(_a=props.store)?void 0:_a.getState(),composite=(0,FGW7QUD2.t)((0,_chunks_2SMRF6AD.EZ)((0,_chunks_2SMRF6AD.ih)({},props),{orientation:(0,D23ES3Z4.LS)(props.orientation,null==syncState?void 0:syncState.orientation,"horizontal"),focusLoop:(0,D23ES3Z4.LS)(props.focusLoop,null==syncState?void 0:syncState.focusLoop,!0)})),panels=(0,Q332EHXG.h)(),initialState=(0,_chunks_2SMRF6AD.EZ)((0,_chunks_2SMRF6AD.ih)({},composite.getState()),{selectedId:(0,D23ES3Z4.LS)(props.selectedId,null==syncState?void 0:syncState.selectedId,props.defaultSelectedId,void 0),selectOnMove:(0,D23ES3Z4.LS)(props.selectOnMove,null==syncState?void 0:syncState.selectOnMove,!0)}),tab=(0,GME4NYXR.MT)(initialState,composite,props.store);return(0,GME4NYXR.cY)(tab,(()=>(0,GME4NYXR.Z_)(tab,["moves"],(()=>{const{activeId:activeId,selectOnMove:selectOnMove}=tab.getState();if(!selectOnMove)return;if(!activeId)return;const tabItem=composite.item(activeId);tabItem&&(tabItem.dimmed||tabItem.disabled||tab.setState("selectedId",tabItem.id))})))),(0,GME4NYXR.cY)(tab,(()=>(0,GME4NYXR.dC)(tab,["selectedId"],(state=>tab.setState("activeId",state.selectedId))))),(0,GME4NYXR.cY)(tab,(()=>(0,GME4NYXR.Z_)(tab,["selectedId","renderedItems"],(state=>{if(void 0!==state.selectedId)return;const{activeId:activeId,renderedItems:renderedItems}=tab.getState(),tabItem=composite.item(activeId);if(!tabItem||tabItem.disabled||tabItem.dimmed){const tabItem2=renderedItems.find((item=>!item.disabled&&!item.dimmed));tab.setState("selectedId",null==tabItem2?void 0:tabItem2.id)}else tab.setState("selectedId",tabItem.id)})))),(0,GME4NYXR.cY)(tab,(()=>(0,GME4NYXR.Z_)(tab,["renderedItems"],(state=>{const tabs=state.renderedItems;if(tabs.length)return(0,GME4NYXR.Z_)(panels,["renderedItems"],(state2=>{const items=state2.renderedItems;items.some((panel=>!panel.tabId))&&items.forEach(((panel,i)=>{if(panel.tabId)return;const tabItem=tabs[i];tabItem&&panels.renderItem((0,_chunks_2SMRF6AD.EZ)((0,_chunks_2SMRF6AD.ih)({},panel),{tabId:tabItem.id}))}))}))})))),(0,_chunks_2SMRF6AD.EZ)((0,_chunks_2SMRF6AD.ih)((0,_chunks_2SMRF6AD.ih)({},composite),tab),{panels:panels,setSelectedId:id=>tab.setState("selectedId",id),select:id=>{tab.setState("selectedId",id),composite.move(id)}})}function useTabStore(props={}){const[store,update]=(0,_2ID5JPOO.oR)(createTabStore,props);return function useTabStoreProps(store,update,props){store=(0,VUP7S67H.b)(store,update,props),(0,_2ID5JPOO.XS)(store,props,"selectedId","setSelectedId"),(0,_2ID5JPOO.XS)(store,props,"selectOnMove");const[panels]=(0,_2ID5JPOO.oR)((()=>store.panels),{});return(0,react.useMemo)((()=>(0,_2SMRF6AD.EZ)((0,_2SMRF6AD.ih)({},store),{panels:panels})),[])}(store,update,props)}},"./node_modules/@ariakit/react-core/esm/tab/tab-list.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{t:function(){return TabList}});var _chunks_F4M2DDED_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/F4M2DDED.js"),_chunks_7PHIY4AC_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/7PHIY4AC.js"),_chunks_LFJDOMBA_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/LFJDOMBA.js"),_chunks_6WEF4WY5_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/6WEF4WY5.js"),_chunks_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/2SMRF6AD.js"),_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/D23ES3Z4.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),useTabList=(0,_chunks_LFJDOMBA_js__WEBPACK_IMPORTED_MODULE_1__.Bi)((_a=>{var _b=_a,{store:store}=_b,props=(0,_chunks_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.S0)(_b,["store"]);const context=(0,_chunks_F4M2DDED_js__WEBPACK_IMPORTED_MODULE_3__.Nt)();store=store||context,(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__.kG)(store,!1);const orientation=store.useState((state=>"both"===state.orientation?void 0:state.orientation));return props=(0,_chunks_6WEF4WY5_js__WEBPACK_IMPORTED_MODULE_5__.OJ)(props,(element=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chunks_F4M2DDED_js__WEBPACK_IMPORTED_MODULE_3__.A5,{value:store,children:element})),[store]),props=(0,_chunks_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.ih)({role:"tablist","aria-orientation":orientation},props),props=(0,_chunks_7PHIY4AC_js__WEBPACK_IMPORTED_MODULE_6__.Q)((0,_chunks_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.ih)({store:store},props))})),TabList=(0,_chunks_LFJDOMBA_js__WEBPACK_IMPORTED_MODULE_1__.LM)((props=>{const htmlProps=useTabList(props);return(0,_chunks_LFJDOMBA_js__WEBPACK_IMPORTED_MODULE_1__.az)("div",htmlProps)}))},"./node_modules/@ariakit/react-core/esm/tab/tab-panel.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{x:function(){return TabPanel}});var _chunks_BY5KOAGY_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/BY5KOAGY.js"),_chunks_F4M2DDED_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/F4M2DDED.js"),_chunks_QUBURLUM_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/QUBURLUM.js"),_chunks_HJIEYVEO_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/HJIEYVEO.js"),_chunks_LFJDOMBA_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/LFJDOMBA.js"),_chunks_4ORPOXHX_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/4ORPOXHX.js"),_chunks_6WEF4WY5_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/6WEF4WY5.js"),_chunks_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/2SMRF6AD.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@ariakit/core/esm/utils/focus.js"),_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/D23ES3Z4.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),useTabPanel=(0,_chunks_LFJDOMBA_js__WEBPACK_IMPORTED_MODULE_2__.Bi)((_a=>{var _b=_a,{store:store,tabId:tabIdProp,getItem:getItemProp}=_b,props=(0,_chunks_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_3__.S0)(_b,["store","tabId","getItem"]);const context=(0,_chunks_F4M2DDED_js__WEBPACK_IMPORTED_MODULE_4__.Nt)();store=store||context,(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__.kG)(store,!1);const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),id=(0,_chunks_6WEF4WY5_js__WEBPACK_IMPORTED_MODULE_6__.Me)(props.id),[hasTabbableChildren,setHasTabbableChildren]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const element=ref.current;if(!element)return;const tabbable=(0,_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_7__.SI)(element);setHasTabbableChildren(!!tabbable.length)}),[]);const getItem=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((item=>{const nextItem=(0,_chunks_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_3__.EZ)((0,_chunks_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_3__.ih)({},item),{id:id||item.id,tabId:tabIdProp});return getItemProp?getItemProp(nextItem):nextItem}),[id,tabIdProp,getItemProp]);props=(0,_chunks_6WEF4WY5_js__WEBPACK_IMPORTED_MODULE_6__.OJ)(props,(element=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chunks_F4M2DDED_js__WEBPACK_IMPORTED_MODULE_4__.A5,{value:store,children:element})),[store]);const tabId=store.panels.useState((()=>{var _a2;return tabIdProp||(null==(_a2=null==store?void 0:store.panels.item(id))?void 0:_a2.tabId)})),open=store.useState((state=>!!tabId&&state.selectedId===tabId));props=(0,_chunks_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_3__.EZ)((0,_chunks_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_3__.ih)({id:id,role:"tabpanel","aria-labelledby":tabId||void 0},props),{ref:(0,_chunks_6WEF4WY5_js__WEBPACK_IMPORTED_MODULE_6__.qq)(ref,props.ref)});const disclosure=(0,_chunks_4ORPOXHX_js__WEBPACK_IMPORTED_MODULE_8__.M)({open:open});return props=(0,_chunks_HJIEYVEO_js__WEBPACK_IMPORTED_MODULE_9__.k)((0,_chunks_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_3__.ih)({focusable:!hasTabbableChildren},props)),props=(0,_chunks_QUBURLUM_js__WEBPACK_IMPORTED_MODULE_10__.fM)((0,_chunks_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_3__.ih)({store:disclosure},props)),props=(0,_chunks_BY5KOAGY_js__WEBPACK_IMPORTED_MODULE_11__.g)((0,_chunks_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_3__.EZ)((0,_chunks_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_3__.ih)({store:store.panels},props),{getItem:getItem}))})),TabPanel=(0,_chunks_LFJDOMBA_js__WEBPACK_IMPORTED_MODULE_2__.LM)((props=>{const htmlProps=useTabPanel(props);return(0,_chunks_LFJDOMBA_js__WEBPACK_IMPORTED_MODULE_2__.az)("div",htmlProps)}))},"./node_modules/@ariakit/react-core/esm/tab/tab.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{O:function(){return Tab}});var _chunks_CQCRBYV6_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/CQCRBYV6.js"),_chunks_F4M2DDED_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/F4M2DDED.js"),_chunks_LFJDOMBA_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/LFJDOMBA.js"),_chunks_6WEF4WY5_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/6WEF4WY5.js"),_chunks_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/2SMRF6AD.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/D23ES3Z4.js"),useTab=(0,_chunks_LFJDOMBA_js__WEBPACK_IMPORTED_MODULE_1__.Bi)((_a=>{var _b=_a,{store:store,accessibleWhenDisabled:accessibleWhenDisabled=!0,getItem:getItemProp}=_b,props=(0,_chunks_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.S0)(_b,["store","accessibleWhenDisabled","getItem"]);const context=(0,_chunks_F4M2DDED_js__WEBPACK_IMPORTED_MODULE_3__.aq)();store=store||context,(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__.kG)(store,!1);const defaultId=(0,_chunks_6WEF4WY5_js__WEBPACK_IMPORTED_MODULE_5__.Me)(),id=props.id||defaultId,dimmed=(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__.EE)(props),getItem=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((item=>{const nextItem=(0,_chunks_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.EZ)((0,_chunks_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.ih)({},item),{dimmed:dimmed});return getItemProp?getItemProp(nextItem):nextItem}),[dimmed,getItemProp]),onClickProp=props.onClick,onClick=(0,_chunks_6WEF4WY5_js__WEBPACK_IMPORTED_MODULE_5__.zX)((event=>{null==onClickProp||onClickProp(event),event.defaultPrevented||null==store||store.setSelectedId(id)})),panelId=store.panels.useState((state=>{var _a2;return null==(_a2=state.items.find((item=>item.tabId===id)))?void 0:_a2.id})),selected=store.useState((state=>!!id&&state.selectedId===id));return props=(0,_chunks_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.EZ)((0,_chunks_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.ih)({id:id,role:"tab","aria-selected":selected,"aria-controls":panelId||void 0},props),{onClick:onClick}),props=(0,_chunks_CQCRBYV6_js__WEBPACK_IMPORTED_MODULE_6__.E)((0,_chunks_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.EZ)((0,_chunks_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.ih)({store:store},props),{accessibleWhenDisabled:accessibleWhenDisabled,getItem:getItem,shouldRegisterItem:!!defaultId&&props.shouldRegisterItem}))})),Tab=(0,_chunks_LFJDOMBA_js__WEBPACK_IMPORTED_MODULE_1__.W5)((props=>{const htmlProps=useTab(props);return(0,_chunks_LFJDOMBA_js__WEBPACK_IMPORTED_MODULE_1__.az)("button",htmlProps)}))},"./node_modules/sprintf-js/src/sprintf.js":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var re={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[\+\-]/};function sprintf(key){return function sprintf_format(parse_tree,argv){var arg,i,k,match,pad,pad_character,pad_length,is_positive,sign,cursor=1,tree_length=parse_tree.length,output="";for(i=0;i<tree_length;i++)if("string"==typeof parse_tree[i])output+=parse_tree[i];else if(Array.isArray(parse_tree[i])){if((match=parse_tree[i])[2])for(arg=argv[cursor],k=0;k<match[2].length;k++){if(!arg.hasOwnProperty(match[2][k]))throw new Error(sprintf('[sprintf] property "%s" does not exist',match[2][k]));arg=arg[match[2][k]]}else arg=match[1]?argv[match[1]]:argv[cursor++];if(re.not_type.test(match[8])&&re.not_primitive.test(match[8])&&arg instanceof Function&&(arg=arg()),re.numeric_arg.test(match[8])&&"number"!=typeof arg&&isNaN(arg))throw new TypeError(sprintf("[sprintf] expecting number but found %T",arg));switch(re.number.test(match[8])&&(is_positive=arg>=0),match[8]){case"b":arg=parseInt(arg,10).toString(2);break;case"c":arg=String.fromCharCode(parseInt(arg,10));break;case"d":case"i":arg=parseInt(arg,10);break;case"j":arg=JSON.stringify(arg,null,match[6]?parseInt(match[6]):0);break;case"e":arg=match[7]?parseFloat(arg).toExponential(match[7]):parseFloat(arg).toExponential();break;case"f":arg=match[7]?parseFloat(arg).toFixed(match[7]):parseFloat(arg);break;case"g":arg=match[7]?String(Number(arg.toPrecision(match[7]))):parseFloat(arg);break;case"o":arg=(parseInt(arg,10)>>>0).toString(8);break;case"s":arg=String(arg),arg=match[7]?arg.substring(0,match[7]):arg;break;case"t":arg=String(!!arg),arg=match[7]?arg.substring(0,match[7]):arg;break;case"T":arg=Object.prototype.toString.call(arg).slice(8,-1).toLowerCase(),arg=match[7]?arg.substring(0,match[7]):arg;break;case"u":arg=parseInt(arg,10)>>>0;break;case"v":arg=arg.valueOf(),arg=match[7]?arg.substring(0,match[7]):arg;break;case"x":arg=(parseInt(arg,10)>>>0).toString(16);break;case"X":arg=(parseInt(arg,10)>>>0).toString(16).toUpperCase()}re.json.test(match[8])?output+=arg:(!re.number.test(match[8])||is_positive&&!match[3]?sign="":(sign=is_positive?"+":"-",arg=arg.toString().replace(re.sign,"")),pad_character=match[4]?"0"===match[4]?"0":match[4].charAt(1):" ",pad_length=match[6]-(sign+arg).length,pad=match[6]&&pad_length>0?pad_character.repeat(pad_length):"",output+=match[5]?sign+arg+pad:"0"===pad_character?sign+pad+arg:pad+sign+arg)}return output}(function sprintf_parse(fmt){if(sprintf_cache[fmt])return sprintf_cache[fmt];var match,_fmt=fmt,parse_tree=[],arg_names=0;for(;_fmt;){if(null!==(match=re.text.exec(_fmt)))parse_tree.push(match[0]);else if(null!==(match=re.modulo.exec(_fmt)))parse_tree.push("%");else{if(null===(match=re.placeholder.exec(_fmt)))throw new SyntaxError("[sprintf] unexpected placeholder");if(match[2]){arg_names|=1;var field_list=[],replacement_field=match[2],field_match=[];if(null===(field_match=re.key.exec(replacement_field)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(field_list.push(field_match[1]);""!==(replacement_field=replacement_field.substring(field_match[0].length));)if(null!==(field_match=re.key_access.exec(replacement_field)))field_list.push(field_match[1]);else{if(null===(field_match=re.index_access.exec(replacement_field)))throw new SyntaxError("[sprintf] failed to parse named argument key");field_list.push(field_match[1])}match[2]=field_list}else arg_names|=2;if(3===arg_names)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");parse_tree.push(match)}_fmt=_fmt.substring(match[0].length)}return sprintf_cache[fmt]=parse_tree}(key),arguments)}function vsprintf(fmt,argv){return sprintf.apply(null,[fmt].concat(argv||[]))}var sprintf_cache=Object.create(null);exports.sprintf=sprintf,exports.vsprintf=vsprintf,"undefined"!=typeof window&&(window.sprintf=sprintf,window.vsprintf=vsprintf,void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return{sprintf:sprintf,vsprintf:vsprintf}}.call(exports,__webpack_require__,exports,module))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))}()},"./node_modules/tannin/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var PRECEDENCE,OPENERS,TERMINATORS,PATTERN;__webpack_require__.d(__webpack_exports__,{Z:function(){return Tannin}}),PRECEDENCE={"(":9,"!":8,"*":7,"/":7,"%":7,"+":6,"-":6,"<":5,"<=":5,">":5,">=":5,"==":4,"!=":4,"&&":3,"||":2,"?":1,"?:":1},OPENERS=["(","?"],TERMINATORS={")":["("],":":["?","?:"]},PATTERN=/<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;var OPERATORS={"!":function(a){return!a},"*":function(a,b){return a*b},"/":function(a,b){return a/b},"%":function(a,b){return a%b},"+":function(a,b){return a+b},"-":function(a,b){return a-b},"<":function(a,b){return a<b},"<=":function(a,b){return a<=b},">":function(a,b){return a>b},">=":function(a,b){return a>=b},"==":function(a,b){return a===b},"!=":function(a,b){return a!==b},"&&":function(a,b){return a&&b},"||":function(a,b){return a||b},"?:":function(a,b,c){if(a)throw b;return c}};function compile(expression){var terms=function postfix(expression){for(var match,operator,term,element,terms=[],stack=[];match=expression.match(PATTERN);){for(operator=match[0],(term=expression.substr(0,match.index).trim())&&terms.push(term);element=stack.pop();){if(TERMINATORS[operator]){if(TERMINATORS[operator][0]===element){operator=TERMINATORS[operator][1]||operator;break}}else if(OPENERS.indexOf(element)>=0||PRECEDENCE[element]<PRECEDENCE[operator]){stack.push(element);break}terms.push(element)}TERMINATORS[operator]||stack.push(operator),expression=expression.substr(match.index+operator.length)}return(expression=expression.trim())&&terms.push(expression),terms.concat(stack.reverse())}(expression);return function(variables){return function evaluate(postfix,variables){var i,j,args,getOperatorResult,term,value,stack=[];for(i=0;i<postfix.length;i++){if(term=postfix[i],getOperatorResult=OPERATORS[term]){for(j=getOperatorResult.length,args=Array(j);j--;)args[j]=stack.pop();try{value=getOperatorResult.apply(null,args)}catch(earlyReturn){return earlyReturn}}else value=variables.hasOwnProperty(term)?variables[term]:+term;stack.push(value)}return stack[0]}(terms,variables)}}var DEFAULT_OPTIONS={contextDelimiter:"",onMissingKey:null};function Tannin(data,options){var key;for(key in this.data=data,this.pluralForms={},this.options={},DEFAULT_OPTIONS)this.options[key]=void 0!==options&&key in options?options[key]:DEFAULT_OPTIONS[key]}Tannin.prototype.getPluralForm=function(domain,n){var config,plural,pf,getPluralForm=this.pluralForms[domain];return getPluralForm||("function"!=typeof(pf=(config=this.data[domain][""])["Plural-Forms"]||config["plural-forms"]||config.plural_forms)&&(plural=function getPluralExpression(pf){var parts,i,part;for(parts=pf.split(";"),i=0;i<parts.length;i++)if(0===(part=parts[i].trim()).indexOf("plural="))return part.substr(7)}(config["Plural-Forms"]||config["plural-forms"]||config.plural_forms),pf=function pluralForms(expression){var evaluate=compile(expression);return function(n){return+evaluate({n:n})}}(plural)),getPluralForm=this.pluralForms[domain]=pf),getPluralForm(n)},Tannin.prototype.dcnpgettext=function(domain,context,singular,plural,n){var index,key,entry;return index=void 0===n?0:this.getPluralForm(domain,n),key=singular,context&&(key=context+this.options.contextDelimiter+singular),(entry=this.data[domain][key])&&entry[index]?entry[index]:(this.options.onMissingKey&&this.options.onMissingKey(singular,domain),0===index?singular:plural)}},"./packages/components/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{YF:function(){return useFloating},x7:function(){return arrow}});var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),_floating_ui_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js");const arrow=options=>({name:"arrow",options:options,fn(state){const{element:element,padding:padding}="function"==typeof options?options(state):options;return element&&function isRef(value){return{}.hasOwnProperty.call(value,"current")}(element)?null!=element.current?(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.x7)({element:element.current,padding:padding}).fn(state):{}:element?(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.x7)({element:element,padding:padding}).fn(state):{}}});var index="undefined"!=typeof document?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect;function deepEqual(a,b){if(a===b)return!0;if(typeof a!=typeof b)return!1;if("function"==typeof a&&a.toString()===b.toString())return!0;let length,i,keys;if(a&&b&&"object"==typeof a){if(Array.isArray(a)){if(length=a.length,length!=b.length)return!1;for(i=length;0!=i--;)if(!deepEqual(a[i],b[i]))return!1;return!0}if(keys=Object.keys(a),length=keys.length,length!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!{}.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){const key=keys[i];if(("_owner"!==key||!a.$$typeof)&&!deepEqual(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}function getDPR(element){if("undefined"==typeof window)return 1;return(element.ownerDocument.defaultView||window).devicePixelRatio||1}function roundByDPR(element,value){const dpr=getDPR(element);return Math.round(value*dpr)/dpr}function useLatestRef(value){const ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(value);return index((()=>{ref.current=value})),ref}function useFloating(options){void 0===options&&(options={});const{placement:placement="bottom",strategy:strategy="absolute",middleware:middleware=[],platform:platform,elements:{reference:externalReference,floating:externalFloating}={},transform:transform=!0,whileElementsMounted:whileElementsMounted,open:open}=options,[data,setData]=react__WEBPACK_IMPORTED_MODULE_0__.useState({x:0,y:0,strategy:strategy,placement:placement,middlewareData:{},isPositioned:!1}),[latestMiddleware,setLatestMiddleware]=react__WEBPACK_IMPORTED_MODULE_0__.useState(middleware);deepEqual(latestMiddleware,middleware)||setLatestMiddleware(middleware);const[_reference,_setReference]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),[_floating,_setFloating]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),setReference=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{node!=referenceRef.current&&(referenceRef.current=node,_setReference(node))}),[_setReference]),setFloating=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{node!==floatingRef.current&&(floatingRef.current=node,_setFloating(node))}),[_setFloating]),referenceEl=externalReference||_reference,floatingEl=externalFloating||_floating,referenceRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),floatingRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),dataRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(data),whileElementsMountedRef=useLatestRef(whileElementsMounted),platformRef=useLatestRef(platform),update=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{if(!referenceRef.current||!floatingRef.current)return;const config={placement:placement,strategy:strategy,middleware:latestMiddleware};platformRef.current&&(config.platform=platformRef.current),(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_3__.oo)(referenceRef.current,floatingRef.current,config).then((data=>{const fullData={...data,isPositioned:!0};isMountedRef.current&&!deepEqual(dataRef.current,fullData)&&(dataRef.current=fullData,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync((()=>{setData(fullData)})))}))}),[latestMiddleware,placement,strategy,platformRef]);index((()=>{!1===open&&dataRef.current.isPositioned&&(dataRef.current.isPositioned=!1,setData((data=>({...data,isPositioned:!1}))))}),[open]);const isMountedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);index((()=>(isMountedRef.current=!0,()=>{isMountedRef.current=!1})),[]),index((()=>{if(referenceEl&&(referenceRef.current=referenceEl),floatingEl&&(floatingRef.current=floatingEl),referenceEl&&floatingEl){if(whileElementsMountedRef.current)return whileElementsMountedRef.current(referenceEl,floatingEl,update);update()}}),[referenceEl,floatingEl,update,whileElementsMountedRef]);const refs=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({reference:referenceRef,floating:floatingRef,setReference:setReference,setFloating:setFloating})),[setReference,setFloating]),elements=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({reference:referenceEl,floating:floatingEl})),[referenceEl,floatingEl]),floatingStyles=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{const initialStyles={position:strategy,left:0,top:0};if(!elements.floating)return initialStyles;const x=roundByDPR(elements.floating,data.x),y=roundByDPR(elements.floating,data.y);return transform?{...initialStyles,transform:"translate("+x+"px, "+y+"px)",...getDPR(elements.floating)>=1.5&&{willChange:"transform"}}:{position:strategy,left:x,top:y}}),[strategy,transform,elements.floating,data.x,data.y]);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({...data,update:update,refs:refs,elements:elements,floatingStyles:floatingStyles})),[data,update,refs,elements,floatingStyles])}},"./packages/components/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{J:function(){return useReducedMotion}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_index_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs"),_state_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs");function useReducedMotion(){!_state_mjs__WEBPACK_IMPORTED_MODULE_1__.O.current&&(0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__.A)();const[shouldReduceMotion]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_state_mjs__WEBPACK_IMPORTED_MODULE_1__.n.current);return shouldReduceMotion}}}]);