(()=>{var e,t,a,n={59331:(e,t,a)=>{const n=a(5556),o=a(96540),{Wrapper:r}=a(62077),{BundleBodyClamp:i,BundleBodyContainer:l}=a(62077),{trackComponent:s}=a(92716),{interactionResponse:d}=a(56187),c=({body:e,isCollapsible:t=!1,numberOfLinesToClamp:a=2,shouldOverrideSpacing:n=!1,shouldOverrideTypeToken:c=!1})=>(o.useEffect((()=>{(async()=>{await d(),s("BundleBody")})()}),[]),o.createElement(r,null,t?o.createElement(i,{isCollapsible:t,lines:a,className:"body__container"},o.createElement(l,{body:e,className:"article__body",shouldOverrideTypeToken:c,shouldOverrideSpacing:n})):o.createElement(l,{body:e,className:"body__container article__body",shouldOverrideTypeToken:c,shouldOverrideSpacing:n})));c.propTypes={body:n.array.isRequired,isCollapsible:n.bool,numberOfLinesToClamp:n.number,shouldOverrideSpacing:n.bool,shouldOverrideTypeToken:n.bool},c.displayName="BundleBody",e.exports=c},16339:(e,t,a)=>{const{asConfiguredComponent:n}=a(12892),o=a(59331);e.exports=n(o,"BundleBody")},67998:(e,t,a)=>{const n=a(96540),o=a(5556),{number:r,func:i}=a(5556),{asConfiguredComponent:l}=a(12892),{connector:s}=a(57744),{trackComponent:d}=a(92716),{interactionResponse:c}=a(56187),{FilterRow:u}=a(33776),p=a(69131),m=({contentModel:e,filterableBundleFilters:t,controlsRef:a})=>{if(n.useEffect((()=>{(async()=>{await c(),d("FilteredContentControls")})()}),[]),!e||!t)return null;const o=t?.map((e=>e.option_name||""))?.filter((e=>""!==e));return n.createElement(u,{rowRef:a},n.createElement(p,{contentModel:e,categoryNames:o}))};m.propTypes={contentModel:o.shape({totalCount:o.oneOfType([r,i]).isRequired,filterModel:o.object.isRequired}),controlsRef:o.shape({current:o.object}),filterableBundleFilters:o.array},m.displayName="FilteredContentControls",e.exports=s(l(m,"FilteredContentControls"),{})},92724:(e,t,a)=>{const n=a(67998);e.exports=n},33776:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.FilterSelectWrapper=t.FilterRow=void 0;const{default:n}=a(75999),{ZINDEX_MAP:o,BREAKPOINTS:r}=a(96472),{maxScreen:i,calculateSpacing:l}=a(26865),s=a(86659),d=a(66657);t.FilterRow=n(d).withConfig({displayName:"FilterRow"})``,t.FilterSelectWrapper=n(s.WithMargins).withConfig({displayName:"FilterSelectWrapper"})`
  && {
    // fix for icon-label-alignment
    .utility-selection-control__label {
      padding-top: 3px;
    }

    .dropdown__option {
      padding-top: ${l(1.3)};
    }

    position: relative;

    grid-template-columns: repeat(4, minmax(200px, 1fr));
    z-index: ${o.dropdown};

    ${i(r.lg)} {
      grid-template-columns: repeat(3, minmax(200px, 1fr));
    }

    ${i(r.md)} {
      grid-template-columns: 1fr;
    }
  }

  .dropdown__menu {
    .dropdown__menu-list {
      height: auto;
      max-height: ${l(52)};
    }
  }
`},69131:(e,t,a)=>{const n=a(96540),o=a(5556),{MultipleSelect:r}=a(79499),{FilterSelectWrapper:i}=a(33776),l=a(83345),{readSortFilterPageParams:s,writeSortFilterPageParams:d}=a(75486),c=({categoryLabel:e,categoryID:t,contentModel:a})=>{const[o,i]=n.useState(0),{filterModel:c}=a;if(!c)return null;const u=c.options[t].map((e=>({label:e.label,value:e.attrib})))||[],{filterWith:p}=c.active,m=p.length>0?u.filter((e=>p.includes(e.value))):[],g=u.sort(((e,t)=>e.label.localeCompare(t.label)));return g.length>0?n.createElement(r,{key:t,onInputChange:t=>{const n=t.map((e=>e.value)),r=c.active.filterWith,u=c.options[e].map((e=>e.attrib)),p=l({selectedCategoryFilters:n,categoryFilterOptions:u,activeFilters:r});c.active={filterWith:p};const m=s();m.filters=p,m.content_page=a.pageNum,d(m),i(o+1)},options:g,placeholderText:`${e} ${m.length>0?`(${m.length})`:""}`,selectedValue:m,shouldControlShowValue:!1,shouldCloseMenuOnSelect:!1,shouldRenderOptionWithCheckbox:!0,isInline:!1,configWidth:"100",isDisabled:!1,hasEnableGreyout:!0}):null};c.propTypes={categoryID:o.string,categoryLabel:o.string,contentModel:o.object};const u=({categoryNames:e,contentModel:t})=>t?n.createElement(i,null,e?.map((e=>n.createElement(c,{key:e,categoryID:e,categoryLabel:e,contentModel:t})))):null;u.propTypes={categoryNames:o.arrayOf(o.string),contentModel:o.object},e.exports=u},83345:e=>{e.exports=function({selectedCategoryFilters:e,categoryFilterOptions:t,activeFilters:a}){const n=[...a];return e.forEach((e=>{!a.includes(e)&&t.includes(e)&&n.push(e)})),n.map((a=>t.includes(a)?e.includes(a)?a:null:a)).filter((e=>null!==e))}},36319:(e,t,a)=>{const n=a(5556),o=a(96540),{connector:r}=a(57744),{trackComponent:i}=a(92716),{interactionResponse:l}=a(56187),{transformItems:s,setupFilter:d}=a(1976),c=a(92724),u=a(1148),p=a(48982),m=({filterableBundleContent:e,filterableBundleFilters:t,chunkSize:a=24,sort:n={type:"SimpleSortModel",setup:{active:{sortBy:"lastName"},options:{sortFields:["fullName","lastName","createdAt"]}}}})=>{o.useEffect((()=>{(async()=>{await l(),i("FilteredContent")})()}),[]);const r=o.useRef(null),m=s(e,t),g=u({sort:n,filter:d({filterableBundleFilters:t}),initial:{items:m,totalCount:m?.length||0,chunkSize:a,pageNum:1}});return o.createElement(o.Fragment,null,o.createElement(c,{contentModel:g,filterableBundleFilters:t,controlsRef:r}),o.createElement(p,{contentModel:g,controlsRef:r}))};m.propTypes={chunkSize:n.number,filterableBundleContent:n.array.isRequired,filterableBundleFilters:n.array,sort:n.object},m.displayName="FilteredContent",e.exports=r(m,{keysToPluck:["filterableBundleFilters","filterableBundleContent"]})},21047:(e,t,a)=>{const{asConfiguredComponent:n}=a(12892),o=a(36319);e.exports=n(o,"FilteredContent")},56473:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TotalCountWrapper=t.TotalCount=t.PaginationRowContent=t.PaginationRowWrapper=t.PaginationLabel=void 0;const n=a(76955),o=a(51908),r=a(75999).default,{calculateSpacing:i,getTypographyStyles:l,getColorStyles:s}=a(26865),{BREAKPOINTS:d}=a(96472),{BaseText:c}=a(76955),u=a(86659),{GridItem:p}=a(40653);t.PaginationLabel=o.PageSummary,t.PaginationRowWrapper=n.BaseWrap,t.PaginationRowContent=o.PaginationContent,t.TotalCount=r(c).withConfig({displayName:"TotalCount"})`
  display: block;
  padding: ${i(2)};
  width: 100%;
  text-align: right;
  @media (max-width: ${d.md}) {
    text-align: center;
  }
  ${({theme:e})=>l(e,"typography.definitions.globalEditorial.tags")};
  ${({theme:e,colorToken:t})=>s(e,"color",t)};
`,t.TotalCount.defaultProps={as:"div",colorToken:"colors.interactive.base.black",typeToken:"typography.definitions.utility.input-core"},t.TotalCountWrapper=r(u.WithMargins).withConfig({displayName:"TotalCountWrapper"})`
  ${({theme:e})=>s(e,"border-top-color","colors.consumption.body.standard.divider")};

  ${p} {
    grid-column: 1 / -1;
    margin-top: ${i(2)};
    border-top: 1px solid;
  }
`},61169:(e,t,a)=>{const n=a(5556),o=a(96540),{useIntl:r}=a(37243),i=a(31226),l=a(46035).A,{PaginationLabel:s,PaginationRowWrapper:d,PaginationRowContent:c}=a(56473),{PaginationButtonWrapper:u}=a(51908),{readSortFilterPageParams:p,writeSortFilterPageParams:m}=a(75486),g=({contentModel:e,controlsRef:t})=>{const{formatMessage:a}=r(),{isPreviousButtonDisabled:n,isNextButtonDisabled:g,previousButtonType:h,nextButtonType:f,NextButtonComponent:b,PreviousButtonComponent:y}=(e=>{const t=e.pageNum<=1,a=e.pageNum>=e.lastPage;return{isPreviousButtonDisabled:t,isNextButtonDisabled:a,previousButtonType:t?"text":"filled",nextButtonType:a?"text":"filled",NextButtonComponent:a?i.Utility:i.Primary,PreviousButtonComponent:t?i.Utility:i.Primary}})(e),v=()=>{t.current&&t.current.scrollIntoView({behavior:"smooth",block:"center"})};return o.createElement(d,null,o.createElement(c,null,o.createElement(u,{isDisabled:n},o.createElement(y,{btnStyle:h,inputKind:"button",isLinkDisabled:n,label:a(l.previousPage),onClickHandler:t=>{t.preventDefault();const a=Math.max(1,e.pageNum-1),n=p();n.content_page=a,m(n),e.pageNum=a,v()}})),o.createElement(s,null,`${e.pageNum} ${a(l.ofHed)} ${e.lastPage}`),o.createElement(u,{isDisabled:g},o.createElement(b,{btnStyle:f,inputKind:"button",isLinkDisabled:g,label:a(l.nextPage),onClickHandler:t=>{t.preventDefault();const a=Math.min(e.pageNum+1,e.lastPage),n=p();n.content_page=a,m(n),e.pageNum=a,v()}}))))};g.propTypes={contentModel:n.shape({lastPage:n.oneOfType([n.number,n.func]),pageNum:n.oneOfType([n.number,n.func])}),controlsRef:n.shape({current:n.object})},g.displayName="Pagination",e.exports=g},48982:(e,t,a)=>{const n=a(5556),o=a(96540),{useReactiveVar:r}=a(66663),{useIntl:i}=a(37243),{shouldRefreshContentVar:l}=a(91261),s=a(3771),d=a(84311),{PaginationModalWrapper:c}=a(53799),u=a(61169),p=a(60521),m=a(46035).A,{TotalCountWrapper:g,TotalCount:h}=a(56473),f=({contentModel:e,controlsRef:t})=>{const[a,n]=o.useState((()=>e&&e.getContent?e.getContent().items.map((e=>e.content||null)).filter((e=>null!==e)):[])),f=o.useCallback((()=>{try{if(e&&e.getContent){const t=e.getContent();t.items&&Array.isArray(t.items)&&n(t.items.map((e=>e.content||null)).filter((e=>null!==e)))}}catch(e){console.error("ERROR refreshing content",e)}}),[e,n]),{formatMessage:b}=i(),y=r(l);return o.useEffect((()=>{y&&(f(),l(!1))}),[y,f]),o.createElement(o.Fragment,null,o.createElement(g,null,o.createElement(h,null,e.totalCount||0," ",b(m.totalCount))),o.createElement(s,{key:"reactive-content",dataJourneyHook:"row-content"},e.totalCount>0?o.createElement(d,{items:a}):o.createElement(p,{dangerousHed:b(m.noResultHed),dangerousDek:b(m.noResultDek)}),o.createElement(c,null,e.totalCount>0&&o.createElement(u,{contentModel:e,controlsRef:t}))))};f.propTypes={contentModel:n.oneOfType([n.object,n.func]),controlsRef:n.shape({current:n.object})},f.displayName="ReactiveContentWrapper",e.exports=f},46035:(e,t,a)=>{const n=a(37243);t.A=(0,n.defineMessages)({noResultDek:{id:"FilterComponent.NoResultDek",defaultMessage:"Sorry, we can't display any results for those filtering options, please try again.",description:"Message when there is no result to display."},noResultHed:{id:"FilterComponent.NoResultHed",defaultMessage:"No Result",description:"Message when there is no result to display."},totalCount:{id:"FilterComponent.TotalCount",defaultMessage:"Results",description:"Suffix text to append to the total count"},nextPage:{id:"ContentPageControlRow.NextPage",defaultMessage:"Next",description:"The button label"},previousPage:{id:"ContentPageControlRow.PreviousPage",defaultMessage:"Previous",description:"The button label"},ofHed:{id:"ContentPageControlRow.ofHed",defaultMessage:"Of",description:"message between page numbers"}})},1976:(e,t)=>{function a(e,t){return t?Object.values(e).flat().filter((e=>{const a=e.hierarchy.join("/");return t.some((e=>{const t=e?.hierarchy;return t===a.substring(0,t?.length)}))})).map((e=>e.slug)):[]}Object.defineProperty(t,"__esModule",{value:!0}),t.transformItems=t.setupFilter=t.getFilterAttributes=void 0,t.getFilterAttributes=a,t.setupFilter=function({filterableBundleFilters:e=[]}){const t={};return e.forEach((e=>{t[e.option_name]=e.filter_params.map((({name:e,slug:t})=>({label:e,attrib:t})))})),{type:"FlatFilterModel",setup:{active:{filterWith:[]},options:t}}},t.transformItems=function(e,t){const n=e?.map((e=>{const n=e.id||e.copilotID,o=e.dangerousHed||"",r=o.split(" "),i=r[r.length-1]||"",{categories:l}=e,s=t?.map((e=>e.query)),d=a(l,s);return n?{id:n,fullName:o,lastName:i,createdAt:e.createdAt||"",attr:[...d],content:e}:null}));return n?.filter((e=>null!==e))}},91261:(e,t,a)=>{const{makeVar:n}=a(66663),o=n(!1);e.exports={shouldRefreshContentVar:o}},75486:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.writeSortFilterPageParams=t.readSortFilterPageParams=void 0,t.readSortFilterPageParams=function(){try{const e=decodeURIComponent(window.location.search);return"string"!=typeof e||e.length<1?{}:e.substr(1).split("&").reduce(((e,t)=>{const[a="",n=""]=t.split("="),o=a.trim(),r=n.trim();switch(o){case"sort_by":e.sort_by=r;break;case"content_page":e.content_page=parseInt(r,10);break;case"filter":e.filters?e.filters.push(r):e.filters=[r]}return e}),{})}catch(e){return console.log(e),{}}},t.writeSortFilterPageParams=function(e){try{const{href:t}=window.location,[a,n=""]=t.split("?"),o=decodeURIComponent(n).split("&").map((e=>{const[t="",a=""]=e.split("="),n=t.trim().toLowerCase(),o=a.trim().toLowerCase();switch(n){case"sort_by":case"filter":case"content_page":return"";default:return n.length>0?`${n}=${o}`:""}})).filter((e=>""!==e));return"sort_by"in e&&o.push(`sort_by=${e.sort_by}`),"filters"in e&&e.filters?.forEach((e=>o.push(`filter=${e}`))),"content_page"in e&&o.push(`content_page=${e.content_page}`),window.history.replaceState(null,"",o.length>0?`${a}?${o.join("&")}`:a),!0}catch(e){return console.log(e),!1}}},1148:(e,t,a)=>{const n=a(96540),{createContentModel:o}=a(85151),{shouldRefreshContentVar:r}=a(91261),{readSortFilterPageParams:i}=a(75486);e.exports=({sort:e,filter:t,sourceFunction:a,initial:l})=>{const s=n.useRef(o({sort:e,filter:t,sourceFunction:a,refreshCallback:()=>r(!0),initial:l})).current;try{const e=i();"filters"in e&&(s.filterModel.active={filterWith:e.filters}),"content_page"in e&&"number"==typeof e.content_page&&(s.pageNum=e.content_page)}catch(e){console.log(e)}return s}},8479:(e,t,a)=>{const n=a(96540),o=a(5556),r=a(16339),i=a(56167),{HomepageHeader:l,HomePageDisclaimerWrapper:s,HomePageDisclaimer:d}=a(94631),{trackComponent:c}=a(92716),{interactionResponse:u}=a(56187),p=e=>{n.useEffect((()=>{(async()=>{await u(),c("HeaderGroup")})()}),[]);const{bundle:{dangerousBundleDek:t,bundleTitle:a,lede:o,bundleBody:p,headerChipLinks:m,shouldEnableSubNavigation:g,shouldEnableLede:h,hasDefaultAffiliateDisclaimer:f,showDisclaimer:b},navigation:{subchannelLinks:y}}=e;return n.createElement(n.Fragment,null,n.createElement(l,{dangerousHed:a,subHed:t,lede:o,toggleChipsWithLink:m,shouldEnableSubNavigation:g,shouldEnableLede:h,type:"header"}),Boolean(p)&&n.createElement(r,{body:p}),f&&b&&n.createElement(s,null,n.createElement(d,null)),y?.length>0&&n.createElement(i,{links:y,hasBorders:!0,isCentered:!0,isSlim:!0}))};p.propTypes={bundle:o.object,navigation:o.shape({subchannelLinks:o.arrayOf(o.object)})},e.exports=p},86559:(e,t,a)=>{const{asConfiguredComponent:n}=a(12892),o=a(8479);e.exports=n(o,"HeaderGroup")},8193:(e,t,a)=>{const{asConfiguredComponent:n}=a(12892),o=a(97737);e.exports=n(o,"MultiPackages")},90367:function(e,t,a){const n=a(5556),o=a(96540),{useState:r}=a(96540),{useIntl:i}=a(37243),l=a(71792),s=a(10958),d=a(90506),{HomepageSearchInput:c,HomePageSearchFormGrid:u}=a(68327),{trackComponent:p}=a(92716),{interactionResponse:m}=a(56187),g=({url:e=""})=>{o.useEffect((()=>{(async()=>{await m(),p("SearchFilter")})()}),[]);const{formatMessage:t}=i();let a=new URLSearchParams(e);const[n,g]=r(a.get("q")?a.get("q"):"");return o.createElement(l,{hideDividers:!0},o.createElement("form",{action:"",method:"GET",ref:e=>{this.formRef=e},"data-testid":"SearchForm"},o.createElement(u,null,o.createElement(c,{defaultValue:n,formName:"search",type:"search",name:"q",label:t(s.searchInputAriaLabel),hasAttachedButton:!0,hideButtonInMobile:!0,hideLabel:!0,buttonInputKind:"submit",buttonLabel:t(s.searchButtonLabel),placeholder:"Search",shouldUseUppercase:!1,LeadingIcon:({className:e})=>o.createElement("div",{className:e},o.createElement(d,null)),onClickHandler:e=>{e.stopPropagation(),e.preventDefault();const t=this.formRef[0].value;(t||a.get("q")&&!t)&&(e=>{a=new URLSearchParams(window.location.search),g(e),a.delete("q"),a.delete("page"),"channels/artificial-intelligence"===a.get("filter")&&a.delete("filter");let t=a.toString();t?t+="&":t="?",t+=e?`q=${e}`:"",t+=a.get("filter")?"":"&filter=channels/artificial-intelligence",window.location.search=t})(t)}}))))};g.propTypes={url:n.string},e.exports=g},54821:(e,t,a)=>{const{asConfiguredComponent:n}=a(12892),o=a(90367);e.exports=n(o,"SearchFilter")},68327:(e,t,a)=>{const n=a(75999).default,{calculateSpacing:o,minScreen:r,minMaxScreen:i,maxScreen:l}=a(26865),{BREAKPOINTS:s}=a(96472),d=a(89662),c=a(60434),u=a(86659),{GridItem:p}=a(40653),m=n(d).withConfig({displayName:"HomepageSearchInput"})`
  ${r(s.md)} {
    margin: ${o(1.25)} 0 0;
  }

  ${c} {
    appearance: none;
  }

  input {
    border-color: #fff;
    width: 100%;
  }

  button,
  button:hover,
  button:focus {
    border: 1px solid white;
  }
`,g=n(u.WithMargins).withConfig({displayName:"HomePageSearchFormGrid"})`
  > ${p}:first-child {
    grid-column: 1 / span 5;

    ${l(s.lg)} {
      grid-column: 1 / span 5;
    }
  }
  > ${p}:last-child {
    grid-column: 1 / span 4;

    ${i(s.md,s.xl)} {
      grid-column: 1 / span 5;
    }
  }
`;e.exports={HomepageSearchInput:m,HomePageSearchFormGrid:g}},92927:(e,t,a)=>{const n=a(32485),o=a(5556),r=a(96540),{UtilityBarWrapper:i}=a(98708),{trackComponent:l}=a(92716),{interactionResponse:s}=a(56187),d=({children:e,className:t,hideDividers:a=!1,hasTopDivider:o,isMultiple:d})=>(r.useEffect((()=>{(async()=>{await s(),l("UtilityBar")})()}),[]),r.createElement(i,{className:n(t,"utility-bar"),"data-testid":"UtilityBar",hasTopDivider:o,hideDividers:a,isMultiple:d},e));d.propTypes={children:o.shape([o.arrayOf(o.node),o.node]),className:o.string,hasTopDivider:o.bool,hideDividers:o.bool,isMultiple:o.bool},e.exports=d},71792:(e,t,a)=>{e.exports=a(92927)},98708:(e,t,a)=>{const{default:n}=a(75999),{getColorStyles:o,calculateSpacing:r,getTypographyStyles:i}=a(26865),{BREAKPOINTS:l}=a(96472),s=n.div.withConfig({displayName:"UtilityBarWrapper"})`
  ${({hasTopDivider:e})=>e?"border-top: 1px solid;":""};

  &:only-child {
    ${({theme:e})=>o(e,"border-color","colors.consumption.body.standard.divider")};
  }

  border-bottom: 1px solid;
  ${({theme:e})=>o(e,"border-color","colors.consumption.body.standard.divider")};
  padding-bottom: 0;

  @media (min-width: ${l.md}) {
    padding: ${r(1.875)} 0;
  }

  @media (min-width: 0) and (max-width: ${l.md}) {
    margin-bottom: ${r(2.5)};
  }

  .dropdown {
    display: flex;
    align-items: center;

    @media (min-width: 0) and (max-width: ${l.md}) {
      margin-bottom: ${r(3.75)};
    }

    .dropdown__assistive-label {
      ${i("typography.definitions.utility.label")};
      padding: 0 ${r(2)} 0 0;
    }

    .dropdown__field {
      @media (min-width: 0) and (max-width: ${l.sm}) {
        margin-left: auto;
        width: ${r(21)};
      }
    }
  }

  ${({isMultiple:e})=>e&&`\n      .dropdown + .dropdown {\n        padding: ${r(2)} 0 0;\n      }\n\n      @media (min-width: ${l.sm}) and (max-width: ${l.md}) {\n        .dropdown__field {\n          margin-left: auto;\n          width: ${r(21)};\n        }\n      }\n\n      @media (min-width: ${l.md}) {\n        display: flex;\n\n        .dropdown {\n          display: inline-flex;\n\n          + .dropdown {\n            padding: 0 0 0 ${r(7)};\n          }\n        }\n      }\n    `}

  ${({hideDividers:e})=>e&&"\n      border-top: none;\n      border-bottom: none;\n    "}
`;e.exports={UtilityBarWrapper:s}},61077:(e,t,a)=>{const n=a(96540),o=a(5556),{connector:r}=a(57744),i=a(32933),l=a(86149),s=a(56093),d={commerceEvents:a(96118),packageBundle:l,directoryBundle:l,destinationBundle:s,podcastBundle:a(60057),versoUniversalBundle:a(25536),magazineBundle:a(20403),versoFilterableBundle:a(32315)},{trackComponent:c}=a(92716),{interactionResponse:u}=a(56187),p=e=>{n.useEffect((()=>{(async()=>{await u(),c("BundlePage")})()}),[]);const{bundle:{namespace:t},hasConsistentSpacing:a}=e,o=d[t];return o&&"function"==typeof o?n.createElement(o,{hasConsistentSpacing:a}):n.createElement(i,{hasConsistentSpacing:a})};p.propTypes={bundle:o.shape({namespace:o.string}).isRequired,hasConsistentSpacing:o.bool},e.exports=r(p,{keysToPluck:["bundle","hasConsistentSpacing"]})},26836:(e,t,a)=>{e.exports=a(61077)},62377:(e,t,a)=>{const n=a(5556),o=a(96540),{connector:r}=a(57744),i=a(14935),l=a(8193),s=a(16339),d=a(24125),{PaymentGateway:c}=a(92807),u=a(66657),p=a(19607),{CommerceEventsPageWrapper:m,CommerceEventsHeader:g,CommerceEventsPageDisclaimer:h,CommerceEventsRCAPageDisclaimer:f}=a(47965),b=e=>{const{attributes:t,bundle:{affiliateDisclaimer:a,bundleBody:n,containers:r,dangerousBundleDek:b,isInvertedTheme:y,bundleTitle:v,hasDefaultAffiliateDisclaimer:C,lede:S,rcaDisclaimer:P,showDisclaimer:w},hasConsistentSpacing:E,showBackgroundGradientColor:k,className:_,fullPageTheme:T="standard",spacingAboveAd:B,shouldUseBundleHeader:N=!1,shouldUseCommerceEventsHeader:x=!0,showBookmark:$=!1}=e;return o.createElement(m,{...t,fullPageTheme:y?"inverted":T,className:_,showBackgroundGradientColor:k,hasBaseAds:!0,isInverted:y},$&&o.createElement(i,{analyticsType:"commerce-events-bundle"}),C&&w&&o.createElement(h,{isInverted:y,disclaimerHtml:a}),x&&o.createElement(o.Fragment,null,o.createElement(g,{contentAlign:"center",isInverted:y},o.createElement("h1",null,v)),S&&o.createElement(d,{lede:S})),N&&o.createElement(d,{dangerousDek:b,hed:v,lede:S}),P&&o.createElement(f,{isInverted:y,disclaimerHtml:P}),n&&o.createElement(s,{body:n}),o.createElement(l,{containers:r,bundleProps:e,isInvertedTheme:y,hasStickyLinkBanner:!0,hasConsistentSpacing:E}),o.createElement(c,{group:"ads"},o.createElement(u,{bottomSpacing:7,topSpacing:B},o.createElement(p,{position:"footer",shouldHoldSpace:!0}))))};b.propTypes={attributes:n.object,bundle:n.shape({affiliateDisclaimer:n.string,containers:n.arrayOf(n.object),dangerousBundleDek:n.string,isInvertedTheme:n.bool,bundleBody:n.array,bundleTitle:n.string,lede:n.object,rcaDisclaimer:n.string,hasDefaultAffiliateDisclaimer:n.bool,showDisclaimer:n.bool}).isRequired,className:n.string,featureFlags:n.object,fullPageTheme:n.oneOf(["standard","inverted"]),hasConsistentSpacing:n.bool,shouldUseBundleHeader:n.bool,shouldUseCommerceEventsHeader:n.bool,showBackgroundGradientColor:n.bool,showBookmark:n.bool,spacingAboveAd:n.number},b.displayName="CommerceEventsBundlePage",e.exports=r(b,{keysToPluck:["bundle","featureFlags"]})},96118:(e,t,a)=>{const{asConfiguredComponent:n}=a(12892),o=a(62377);e.exports=n(o,"CommerceEventsBundlePage")},47965:(e,t,a)=>{const{default:n}=a(75999),{calculateSpacing:o,getColorStyles:r,getColorToken:i,getTypographyStyles:l,minScreen:s}=a(26865),{getPattern:d}=a(30),{BREAKPOINTS:c}=a(96472),u=a(30543),{asConfiguredComponent:p}=a(12892),{Disclaimer:m}=a(74307),g=a(62282),{MultiPackageContainer:h}=a(67275),{FireworkEmbedContainer:f}=a(1633),{SectionTitleHed:b}=a(33500),y=n(u).withConfig({displayName:"CommerceEventsPageWrapper"})`
  ${({showBackgroundGradientColor:e,theme:t})=>e&&d(t,"page-background")};

  ${({showBackgroundGradientColor:e})=>e&&"\n      position: static;\n  "};

  ${({shouldHidePadding:e})=>!e&&`\n      padding-top: ${o(8)};\n      @media (min-width: ${c.lg}) {\n        padding-top: ${o(21)}\n      }\n  `};

  ${h} {
    display: flex;
    flex-flow: row wrap;
    align-items: stretch;
    justify-content: center;

    > * {
      width: 100%;
    }

    ${f} {
      ${b} {
        ${({isInverted:e,theme:t})=>e?`color: ${i(t,"colors.background.brand")};\n              ${l(t,"typography.definitions.discovery.page-hed-section")} `:""}
      }
    }
  }
  ${({hasBackground:e,theme:t})=>e&&t&&d(t,"page-background")}
  .promo-box {
    border-top: none;
  }
`,v=n(g).withConfig({displayName:"CommerceEventsHeader"})`
  ${({isInverted:e,theme:t})=>e&&`\n    background: ${i(t,"colors.background.black")};\n    border-color: ${i(t,"colors.background.black")};\n    `}

  h1 {
    ${({theme:e})=>l(e,"typography.definitions.utility.assistive-text")}
    ${({isInverted:e,theme:t})=>e&&`\n      color: ${i(t,"colors.consumption.body.inverted.accent")};                \n    `}
  }
`,C=n(p(m.TextCenterNoTopRule,"Disclaimer")).withConfig({displayName:"CommerceEventsPageDisclaimer"})`
  grid-column: 1 / -1;
  justify-content: center;
  font-style: italic;
  ${({isInverted:e,theme:t})=>e&&`background: ${i(t,"colors.consumption.lead.inverted.background")};`}
  p {
    padding: 0 ${o(2)};
    line-height: 1.125rem;
    ${({isInverted:e,theme:t})=>e&&`color: ${i(t,"colors.consumption.lead.inverted.link")};`}
    ${l("typography.definitions.globalEditorial.context-secondary")};
  }

  ${s(c.md)} {
    grid-column: 3 / span 8;
  }
`,S=n(C).withConfig({displayName:"CommerceEventsRCAPageDisclaimer"})`
  ${({theme:e})=>`${r(e,"background","colors.discovery.body.light.background")};\n  `}

  p {
    ${l("typography.definitions.consumptionEditorial.citation")};
    font-style: italic;
  }
`;e.exports={CommerceEventsPageWrapper:y,CommerceEventsHeader:v,CommerceEventsPageDisclaimer:C,CommerceEventsRCAPageDisclaimer:S}},38922:(e,t,a)=>{const n=a(32485),o=a(96540),r=a(5556),{connector:i}=a(57744),l=a(30543),{DestinationBundleBodyWrapper:s}=a(41247),d=a(8193),c=a(6538),u=a(16339),p=a(24125),m=a(19607),{PaymentGateway:g}=a(92807),h=a(14935),{trackComponent:f}=a(92716),{interactionResponse:b}=a(56187),y=e=>{o.useEffect((()=>{(async()=>{await b(),f("DestinationBundlePage")})()}),[]);const{attributes:t,bundle:{bundleBody:a,bundleTitle:r,containers:i,hierarchy:y,headerPosition:v,isDestinationBundle:C,lede:S,shouldEnableBodyReadMore:P},className:w,hasConsistentSpacing:E,headerType:k="full-bleed-header",shouldDecorateHeader:_=!0,shouldOverrideTypeToken:T=!1,showBookmark:B=!1,showHeaderOnTop:N=!1}=e,x=y?y[y.length-1].name:"";return o.createElement(l,{...t,className:n("destination-bundle-page",w),hasBaseAds:!0},B&&o.createElement(h,{analyticsType:"destination-bundle"}),y&&o.createElement(c,{hierarchy:y}),o.createElement(p,{headerPosition:v,headerType:k,hed:r,isDestinationBundle:C,lede:S,shouldDecorateHeader:_,shouldOverrideTypeToken:T,showHeaderOnTop:N}),o.createElement(s,{shouldOverrideTypeToken:T},a&&o.createElement(u,{body:a,isCollapsible:P})),o.createElement(d,{containers:i,bundleProps:e,lowestHierarchy:x,hasConsistentSpacing:E}),o.createElement(g,{group:"ads"},o.createElement(m,{position:"footer",shouldHoldSpace:!0})))};y.propTypes={attributes:r.object,bundle:r.object,className:r.string,featureFlags:r.object,hasConsistentSpacing:r.bool,headerType:r.string,shouldDecorateHeader:r.bool,shouldOverrideTypeToken:r.bool,showBookmark:r.bool,showHeaderOnTop:r.bool},y.displayName="DestinationBundlePage",e.exports=i(y,{keysToPluck:["bundle","featureFlags"]})},56093:(e,t,a)=>{const n=a(38922),{asConfiguredComponent:o}=a(12892);e.exports=o(n,"DestinationBundlePage")},41247:(e,t,a)=>{const n=a(75999).default,{calculateSpacing:o,getTypographyStyles:r,getColorToken:i}=a(26865),{BREAKPOINTS:l}=a(96472),{BundleBodyContainer:s}=a(62077),d=n.div.withConfig({displayName:"DestinationBundleBodyWrapper"})`
  background-color: ${({theme:e})=>i(e,"colors.background.light")};
  padding-bottom: ${o(4)};

  .article__body {
    margin-bottom: 0;
  }

  .aricle__body div > p {
    margin-bottom: 0;
  }

  ${s} {
    color: ${({theme:e})=>i(e,"colors.consumption.body.standard.body")};
    ${({theme:e,shouldOverrideTypeToken:t})=>r(e,t?"typography.definitions.consumptionEditorial.subhed-aux-secondary":"typography.definitions.consumptionEditorial.description-core")}
  }

  ${s}

  p:first-child {
    margin-bottom: 0;
    padding-top: ${o(4)};

    @media (min-width: ${l.md}) {
      padding-top: ${o(5)};
    }
  }

  .button__icon-container {
    padding-left: ${o(.6)};
  }

  .button__label {
    ${({theme:e})=>r(e,"typography.definitions.utility.button-bulletin")};
  }
`;e.exports={DestinationBundleBodyWrapper:d}},15470:(e,t,a)=>{const n=a(96540),o=a(5556),{connector:r}=a(57744),i=a(21047),l=a(86559),s=a(19607),{PaymentGateway:d}=a(92807),{FilterableBundlePageWrapper:c}=a(26693),{trackComponent:u}=a(92716),{interactionResponse:p}=a(56187),m=a(8193),g=e=>{n.useEffect((()=>{(async()=>{await p(),u("FilterableBundlePage")})()}),[]);const{attributes:t,bundle:a,bundle:{containers:o},navigation:r,className:g,hasConsistentSpacing:h}=e;return n.createElement(c,{...t,className:g,hasBaseAds:!0,hasConsistentSpacing:h},n.createElement(l,{bundle:a,navigation:r}),n.createElement(i,null),n.createElement(m,{containers:o,bundleProps:e,hasStickyLinkBanner:!0,hasConsistentSpacing:h}),n.createElement(d,{group:"ads"},n.createElement(s,{position:"footer",shouldHoldSpace:!0})))};g.propTypes={attributes:o.object,bundle:o.object,className:o.string,featureFlags:o.object,hasConsistentSpacing:o.bool,navigation:o.shape({subchannelLinks:o.arrayOf(o.object)})},e.exports=r(g,{keysToPluck:["bundle","featureFlags","navigation","hasConsistentSpacing"]})},32315:(e,t,a)=>{const{asConfiguredComponent:n}=a(12892),o=a(15470);e.exports=n(o,"FilterableBundlePage")},26693:(e,t,a)=>{const n=a(75999).default,o=a(30543),{BREAKPOINTS:r}=a(96472),{MultiPackageContainer:i}=a(67275),{getSectionSpacingStyling:l}=a(16800),{getPattern:s}=a(30),{createMultipackageContainerStyles:d}=a(89085),c=n(o).withConfig({displayName:"FilterableBundlePageWrapper"})`
  ${({theme:e})=>s(e,"page-background")};
  ${d(i)}
  ${i} {
    ${({hasConsistentSpacing:e,theme:t})=>{const a=l(t,"gap-md");return e&&"0px"!==a?`\n        gap: ${a};\n        margin-top: ${a};\n      `:null}}

    @media (max-width: ${r.md}) {
      ${({hasConsistentSpacing:e,theme:t})=>{const a=l(t,"gap-sm");return e&&"0px"!==a?`\n          gap: ${a};\n          margin-top: ${a};\n        `:null}}
    }
  }
`;e.exports={FilterableBundlePageWrapper:c}},55853:(e,t,a)=>{const n=a(92437).default,o=a(32485),r=a(5556),i=a(96540),l=a(61127),s=a(19607),d=a(71656),{connector:c}=a(57744),u=a(66657),{PaymentGateway:p}=a(92807),m=a(6538),g=a(8193),h=a(9396),f=a(86659),b=a(31411),y=a(54821),v=a(48887),C=a(69389),S=a(56167),{default:P}=a(56602),{trackComponent:w}=a(92716),{interactionResponse:E}=a(56187),k=a(76935),{HomepageWrapper:_,HomepageHiddenContent:T,HomepageHeader:B,HomepageSubHeader:N,HomepageBodyWrapperGrid:x,HomePageGridNarrowContentWithWideAdRail:$,HomePageDisclaimerWrapper:H,HomePageDisclaimer:M,HomePageDisclaimerBorder:D,HomepageBundleBody:R,HomepageSectionTitle:A,BreadcrumbTrailComponent:F}=a(94631),O=a(24125),L=a(16339),j=a(19636),W=e=>{i.useEffect((()=>{(async()=>{await E(),w("HomePage")})()}),[]);const{attributes:t,bundle:{bundleBody:a,contributors:r,dangerousBundleDek:c,bundleTitle:W,containers:I,hasDefaultAffiliateDisclaimer:G,hierarchy:U,homepagePromoUnitOrder:V=[],isSubChannel:K,paginatedPage:z,publishDate:q,sponsoredContentHeaderProps:J,shouldEnableSubNavigation:X,shouldUseContentHeader:Y,showDisclaimer:Z,isSponsored:Q,lede:ee,seoHiddenHeader:te,showBreadCrumb:ae,hasGridFourColumnsLayout:ne,headerChipLinks:oe,footerChipLinks:re,dangerousMoreBeautyText:ie,affiliateDisclaimer:le},backgroundColorSettingForNewsletter:se,channelItems:{list:de=null,searchUrl:ce=""}={},channelFilter:ue=null,channelItemsTotal:pe=null,className:me,config:ge,isPaddingRequired:he,dispatch:fe,featureFlags:{hideHomepageHeader:be,excludedParams:ye,showBundleBodyOnChannels:ve,shouldRemoveBackgroundColor:Ce},hasBackground:Se=!1,hasFullBleedBackground:Pe=!1,hasReducedMargin:we=!1,headerIcon:Ee=null,tickerMarginTopType:ke="small",hideErrorTextPadding:_e=!1,hasVersoFeaturesReducedMargin:Te=!1,isNewsletterDisclaimerCenterAligned:Be=!1,shouldHideSidePadding:Ne=!1,hasConsistentSpacing:xe=!1,fullPageTheme:$e="standard",navigation:{subchannelLinks:He,hasChannelNavigation:Me},shouldCenterBundleBodyContent:De,shouldHidePadding:Re,shouldHidePaddingBottom:Ae=!1,shouldShowChannelFilter:Fe=!1,shouldShowFooterAdPadding:Oe=!1,shouldUseSectionTitle:Le=!1,showBundleBody:je=!1,showSearchFilter:We=!1,hasDisclaimerBackground:Ie=!0,hasDisclaimerBorderBottom:Ge=!1,showSubChannelHed:Ue=!1,spacingAboveAd:Ve,shouldUseBundleHeader:Ke=!1,shouldOverrideColorToken:ze=!1,hasTopStory:qe=!1,hasEvenSpacing:Je=!1,shouldHideAds:Xe=!1,peritextBundle:Ye}=e,Ze=ge.account?.bookmark,Qe=Ze?.enableCardLevelBookmark||!1;let et=me;et=he&&et?et.replace("ad--mid-content","ad--mid-content-with-padding"):me;const tt=I.filter((e=>V.indexOf(e.template)<0)),at=tt.find((e=>"verso-river"===e.template)),[nt,ot]=i.useState([]),rt=I.some((({template:e})=>"verso-pim-collection"===e)),it=!rt;i.useEffect((()=>{if(rt){const e=window?.location?.pathname,t=e.replace("/","").split("/"),a=t.shift(),n=[],o=t.map(((e,t)=>(n.push(e),{name:e.replaceAll("-"," "),slug:0===t?`/${a}`:`/${a}/${n.join("/")}`}))).splice(1);ot(o)}}),[rt]);const lt=f.NarrowContentWithWideAdRail;if(at&&(de&&de.length?at.items=de:at.noChannelItems=!0,ce&&(at.searchUrl=ce),pe&&(at.totalResults=pe),ue&&(at.filter=ue)),ye&&"undefined"!=typeof URLSearchParams){const e=new URLSearchParams(window.location.search);ye.forEach((t=>e.delete(t)));const t=""!==e.toString()?`${window.location.pathname}?${e.toString()}`:window.location.pathname;window.history.replaceState({},document.title,t)}const st=W||c;fe({type:"SET_KEY",key:"isHomepage",value:!0});const dt=De?x:$;return Ye?i.createElement(_,{...t,className:o("homepage",et),additionalNavigation:Me?i.createElement(d,null):null,fullPageTheme:$e,hasBackground:Se,hasFullBleedBackground:Pe,hasBaseAds:it,hideHeader:Me||qe,hideErrorTextPadding:_e,isNewsletterDisclaimerCenterAligned:Be,shouldHideSidePadding:Ne,shouldHidePadding:Re||qe,shouldOverrideColorToken:ze,backgroundColorSettingForNewsletter:se,shouldHidePaddingBottom:Ae,shouldShowFooterAdPadding:Oe,isHeroAdVisible:!qe,hasEvenSpacing:Je,shouldHideAds:Xe,shouldScrollToTopStory:qe},i.createElement(k,null,i.createElement(n,{value:Ye}))):i.createElement(_,{...t,className:o("homepage",et),additionalNavigation:Me?i.createElement(d,null):null,fullPageTheme:$e,hasBackground:Se,hasFullBleedBackground:Pe,hasBaseAds:it,hideHeader:Me||qe,hideErrorTextPadding:_e,isNewsletterDisclaimerCenterAligned:Be,shouldHideSidePadding:Ne,shouldHidePadding:Re||qe,shouldOverrideColorToken:ze,backgroundColorSettingForNewsletter:se,shouldHidePaddingBottom:Ae,shouldShowFooterAdPadding:Oe,isHeroAdVisible:!qe,hasEvenSpacing:Je,shouldHideAds:Xe,shouldScrollToTopStory:qe,hasConsistentSpacing:xe},i.createElement(P,{isPhotoBookmarkingEnabled:Qe},Qe&&i.createElement(j,null),nt&&rt&&i.createElement(F,{className:"plp-storefornt_breadcrumb",hierarchy:nt,shouldRemoveBackgroundColor:!0,shouldUseContentHeaderColorForLink:!1,hasMinimalVerticalSpacing:!0,separatorIcon:{name:"ChevronRight",type:"thin"}}),Q&&i.createElement(b,{...J,className:"light-theme"}),U&&U.length>1&&ae&&i.createElement(m,{hierarchy:U,shouldRemoveBackgroundColor:Ce,shouldUseContentHeaderColorForLink:Y}),te&&i.createElement(T,null,te),!be&&st&&!Y&&(Ke&&!ee||!Ke)&&i.createElement(B,{dangerousHed:W,subHed:Ue&&K?null:c,lede:ee,toggleChipsWithLink:oe,shouldEnableSubNavigation:X,hasConsistentSpacing:xe,type:"header"}),!be&&st&&Y&&!Ke&&i.createElement(C,{contributors:r,dangerousHed:W,dangerousDek:c,publishDate:q,showBreadCrumb:ae}),Ke&&st&&!Y&&ee&&i.createElement(O,{contributors:r,dangerousDek:c,hed:W,lede:ee}),Le&&st&&!Y&&!Ke&&i.createElement(A,{dangerousHed:W,dangerousDek:c,image:Ee,hasDividerAbove:!1,isFeatured:!0,shouldUseAlternateHedColor:!0}),je&&a&&i.createElement(R,null,i.createElement(L,{body:a})),G&&Z&&i.createElement(H,{hasGridFourColumnsLayout:ne,hasDisclaimerBackground:Ie},i.createElement(M,{disclaimerHtml:le}),Ge&&i.createElement(D,null)),ve&&1===z&&a&&i.createElement(v,{FullBleedContentWrapper:dt,GeneralContentWrapper:dt,shouldUsePaddingTopForHomePageBody:Y,RailContent:()=>i.createElement(p,{group:"ads"},i.createElement(s,{position:"rail"})),jsonml:a}),He?.length>0&&i.createElement(S,{links:He,hasBorders:!0,isCentered:!0,isSlim:!0}),K&&Ue&&!be&&st&&!Y&&i.createElement(N,{showSubChannelHed:Ue,dangerousHed:W,subHed:c,lede:ee,toggleChipsWithLink:oe,hasConsistentSpacing:xe,"data-testid":"HomepageSubHeader",type:"header"}),We&&i.createElement(y,{url:ce}),Fe&&i.createElement(h.Inverted,{storyCount:pe||0}),i.createElement(g,{containers:tt,bundleProps:e,hasVersoFeaturesReducedMargin:Te,tickerMarginTopType:ke,hasReducedMargin:we,hasEvenSpacingMultiPackageRow:Je,hasConsistentSpacing:xe}),re&&re.length>0&&i.createElement(B,{dangerousHed:ie,hasMinimalVerticalPadding:!0,toggleChipsWithLink:re,hasConsistentSpacing:xe,className:"footer-toggle-chip-links",type:"footer",hedTag:"h2"}),Z&&!Q&&i.createElement(l,{ContentWrapper:lt}),!Xe&&i.createElement(p,{group:"ads"},i.createElement(u,{bottomSpacing:7,topSpacing:Ve},i.createElement(s,{position:"footer",shouldHoldSpace:!0})))))};W.propTypes={attributes:r.object,backgroundColorSettingForNewsletter:r.string,bundle:r.shape({affiliateDisclaimer:r.string,bundleBody:r.array,bundleTitle:r.string,containers:r.arrayOf(r.object),contributors:r.object,dangerousBundleDek:r.string,hierarchy:r.array,homepagePromoUnitOrder:r.arrayOf(r.string),paginatedPage:r.number,seoHiddenHeader:r.string,showBreadCrumb:r.bool,showDisclaimer:r.bool,shouldEnableSubNavigation:r.bool,shouldUseContentHeader:r.bool,sponsoredContentHeaderProps:r.object,isSubChannel:r.bool,isSponsored:r.bool,lede:r.object,hasGridFourColumnsLayout:r.bool,headerChipLinks:r.array,footerChipLinks:r.array,dangerousMoreBeautyText:r.string,publishDate:r.string,hasTopStory:r.bool,hasDefaultAffiliateDisclaimer:r.bool}).isRequired,bundleTitle:r.string,channelFilter:r.string,channelItems:r.shape({list:r.array,searchUrl:r.string}),channelItemsTotal:r.number,className:r.string,config:r.object,dangerousBundleDek:r.string,dispatch:r.func,featureFlags:r.object,fullPageTheme:r.oneOf(["standard","inverted"]),hasBackground:r.bool,hasConsistentSpacing:r.bool,hasDisclaimerBackground:r.bool,hasDisclaimerBorderBottom:r.bool,hasEvenSpacing:r.bool,hasFullBleedBackground:r.bool,hasReducedMargin:r.bool,hasTopStory:r.bool,hasVersoFeaturesReducedMargin:r.bool,headerIcon:r.object,hideErrorTextPadding:r.bool,isNewsletterDisclaimerCenterAligned:r.bool,isPaddingRequired:r.bool,lede:r.object,navigation:r.shape({subchannelLinks:r.arrayOf(r.object),hasChannelNavigation:r.bool}).isRequired,newsletter:r.object,peritextBundle:r.object,shouldCenterBundleBodyContent:r.bool,shouldHideAds:r.bool,shouldHidePadding:r.bool,shouldHidePaddingBottom:r.bool,shouldHideSidePadding:r.bool,shouldOverrideColorToken:r.bool,shouldShowChannelFilter:r.bool,shouldShowFooterAdPadding:r.bool,shouldUseBundleHeader:r.bool,shouldUseSectionTitle:r.bool,showBundleBody:r.bool,showSearchFilter:r.bool,showSubChannelHed:r.bool,spacingAboveAd:r.number,tickerMarginTopType:r.oneOf(["small","none","large"])},W.displayName="HomePage",e.exports=c(W,{keysToPluck:["bundle","peritextBundle","channelFilter","channelItems","channelItemsTotal","featureFlags","navigation","newsletter","hasTopStory"]})},32933:(e,t,a)=>{const{asConfiguredComponent:n}=a(12892),o=a(55853);e.exports=n(o,"HomePage")},20574:(e,t,a)=>{const n=a(96540),o=a(5556),{useIntl:r}=a(37243),{connector:i}=a(57744),l=a(8193),s=a(16339),d=a(24125),{MagazineBundlePageWrapper:c,ButtonContainer:u,MultiPackageGrid:p,MultiPackageGridWithoutSideRail:m}=a(67133),{trackComponent:g}=a(92716),{interactionResponse:h}=a(56187),f=a(86659),b=a(73730),{PaymentGateway:y}=a(92807),v=a(19607),C=a(28433),S=a(87887).A,P=e=>{n.useEffect((()=>{(async()=>{await h(),g("MagazineBundlePage")})()}),[]);const{attributes:t,bundle:{containers:a=[],bundleTitle:o,dangerousBundleDek:i,bundleBody:P,relatedBundles:w={}},hasConsistentSpacing:E,shouldHideSideRail:k=!1,className:_}=e,{prevBundle:T,nextBundle:B}=w,N=T?.uri||B?.uri,{formatMessage:x}=r(),[$,...H]=a,M="verso-ticker"===$?.template,D=M?[{},...H]:a;return n.createElement(c,{...t,className:_,hasConsistentSpacing:E},n.createElement(d,{dangerousDek:o,hed:x(S.magazineHeading),subHed:i}),P&&n.createElement(s,{body:P}),N&&n.createElement(u,{"data-testid":"nav_button_container"},n.createElement(b,{inputKind:"link",btnStyle:T?.uri?"filled":"text",label:x(S.previousButton),href:T?.uri&&`/${T?.uri}`,isDisabled:!T?.uri}),n.createElement(b,{inputKind:"link",btnStyle:B?.uri?"filled":"text",label:x(S.nextButton),href:B?.uri&&`/${B?.uri}`,isDisabled:!B?.uri})),M&&n.createElement(l,{containers:[$],bundleProps:e,hasConsistentSpacing:E}),k?n.createElement(m,{as:f.ContentWithAdRail},n.createElement(l,{containers:D,bundleProps:e,hasConsistentSpacing:E})):n.createElement(p,{as:f.ContentWithAdRail},n.createElement(l,{containers:D,bundleProps:e,hasConsistentSpacing:E}),n.createElement(C,null,n.createElement("aside",null,n.createElement(y,{group:"ads"},n.createElement(v,{position:"rail",shouldHoldSpace:!0}))))),n.createElement(y,{group:"ads"},n.createElement(v,{position:"footer",shouldHoldSpace:!0})))};P.propTypes={attributes:o.object,bundle:o.object,className:o.string,featureFlags:o.object,hasConsistentSpacing:o.bool,shouldHideSideRail:o.bool},e.exports=i(P,{keysToPluck:["bundle","featureFlags"]})},20403:(e,t,a)=>{const{asConfiguredComponent:n}=a(12892),o=a(20574);e.exports=n(o,"MagazineBundlePage")},67133:(e,t,a)=>{const{default:n,css:o}=a(75999),r=a(30543),{BodyWrapper:i}=a(29912),{AssetEmbedWrapper:l}=a(41108),{SummaryListWrapper:s}=a(63637),{BREAKPOINTS:d}=a(96472),{getTypographyStyles:c,getColorStyles:u,calculateSpacing:p,minScreen:m,maxScreen:g}=a(26865),{BundleHeaderDekText:h,BundleHeaderHed:f}=a(71750),{CaptionWrapper:b,CaptionText:y}=a(38860),{PromoBoxButtonPrimary:v}=a(75697),{maxThresholds:C}=a(99906),{PromoBoxWrapper:S}=a(67275),{SummaryRiverWrapper:P}=a(15641),{ResponsiveCartoonCTA:w,ResponsiveCartoonCredit:E}=a(77527),k=n(r).withConfig({displayName:"MagazineBundlePageWrapper"})`
  ${i} {
    ${l} {
      margin-bottom: ${p(1)};
      padding-top: ${p(2)};
      max-width: 380px;
    }

    & div {
      text-align: center;

      &:first-child {
        margin-top: 0;
        padding-top: 0;
      }
    }

    a,
    a:not(.button) {
      &:link,
      &:visited {
        text-decoration: none;
      }

      &:hover {
        text-decoration: underline;
        text-underline-offset: 3px;
      }
    }

    a {
      display: inline-block;
    }
  }
  ${s} {
    .summary-item--layout-placement-side-by-side {
      .summary-item__hed {
        @media (min-width: ${d.md}) {
          ${c("typography.definitions.discovery.hed-core-primary")}
        }
      }
    }
  }

  ${s},${P} {
    --grid-margin: 0;
  }

  ${b} {
    ${c("typography.definitions.foundation.link-primary")};
    margin-top: 0;
    padding: ${p(2)} 0;
    text-align: center;

    > span {
      ${u("color","colors.interactive.base.black")};
      text-decoration: none;
    }
    ${y} {
      margin-right: 0;
    }
  }

  ${w} {
    margin-top: ${p(3)};
  }

  ${E} {
    margin-bottom: 0;
  }

  ${h} {
    ${c("typography.definitions.discovery.subhed-section-collection")};
  }

  ${f} {
    margin: ${p(5)} 0;
  }

  ${v} {
    ${u("color","colors.interactive.base.black")};
  }

  ${S} {
    ${g(`${C.lg}px`)} {
      --grid-margin: 0;
    }

    a:hover {
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  }
`,_=n.div.withConfig({displayName:"ButtonContainer"})`
  display: flex;
  justify-content: center;
  gap: ${p(1)};

  a {
    &[aria-disabled='true'] {
      ${({theme:e})=>o`
    cursor: default;
    pointer-events: none;

    ${u(e,"background","colors.interactive.base.light")};
    ${u(e,"border-color","colors.interactive.base.light")};
    ${u(e,"color","colors.interactive.base.white")};
  `}
    }
    min-width: ${p(10)};
    ${m(d.md)} {
      min-width: ${p(20)};
    }
  }
`,T=n.div.withConfig({displayName:"MultiPackageGrid"})`
  ${m(d.lg)} {
    & > .grid-layout__content {
      grid-column: span 7;
    }
  }
`,B=n.div.withConfig({displayName:"MultiPackageGrid"})`
  ${m(d.lg)} {
    & > .grid-layout__content {
      grid-column: span 12;
    }
  }
`;e.exports={ButtonContainer:_,MultiPackageGrid:T,MagazineBundlePageWrapper:k,MultiPackageGridWithoutSideRail:B}},87887:(e,t,a)=>{const n=a(37243);t.A=(0,n.defineMessages)({magazineHeading:{id:"MagazineBundlePage.magazineHeading",defaultMessage:"The Magazine",description:"Heading for magazine bundle page",isConfigurable:!0},nextButton:{id:"MagazineBundlePage.nextButton",defaultMessage:"Next",description:"Text for next button in magazine bundle page",isConfigurable:!0},previousButton:{id:"MagazineBundlePage.previousButton",defaultMessage:"Previous",description:"Text for previous button in magazine bundle page",isConfigurable:!0}})},41398:(e,t,a)=>{const n=a(96540),o=a(5556),{connector:r}=a(57744),i=a(8193),l=a(16339),s=a(24125),d=a(71656),c=a(19607),{PaymentGateway:u}=a(92807),{PackageBundlePageWrapper:p,PackageBundlePageSubchannelNavigation:m}=a(56839),{trackComponent:g}=a(92716),{interactionResponse:h}=a(56187),f=e=>{n.useEffect((()=>{(async()=>{await h(),g("PackageBundlePage")})()}),[]);const{attributes:t,bundle:{containers:a,dangerousBundleDek:o,directoryCategories:r,bundleTitle:f,lede:b,bundleBody:y,isDirectoryBundle:v,hideDirectoryAd:C},hasConsistentSpacing:S,navigation:{hasChannelNavigation:P,subchannelLinks:w},className:E}=e;return n.createElement(p,{...t,additionalNavigation:P?n.createElement(d,null):null,className:E,hasBaseAds:!0,hasConsistentSpacing:S},n.createElement(s,{dangerousDek:o,hed:f,lede:b,isDirectoryBundle:v,directoryCategories:r}),w?.length>0&&n.createElement(m,{links:w,hasBorders:!0,isCentered:!0,isSlim:!0}),v&&!C&&n.createElement(u,{group:"ads"},n.createElement(c,{position:"mid-content",shouldHoldSpace:!0,shouldDisplayLabel:!0})),y&&n.createElement(l,{body:y}),n.createElement(i,{containers:a,bundleProps:e,hasStickyLinkBanner:!0,hasConsistentSpacing:S}),n.createElement(u,{group:"ads"},n.createElement(c,{position:"footer",shouldHoldSpace:!0})))};f.propTypes={attributes:o.object,bundle:o.object,className:o.string,featureFlags:o.object,hasConsistentSpacing:o.bool,navigation:o.shape({hasChannelNavigation:o.bool,subchannelLinks:o.arrayOf(o.object)})},e.exports=r(f,{keysToPluck:["bundle","featureFlags","newsletter","navigation"]})},86149:(e,t,a)=>{e.exports=a(41398)},56839:(e,t,a)=>{const n=a(75999).default,{BREAKPOINTS:o}=a(96472),{calculateSpacing:r,minScreen:i}=a(26865),{SummaryCollectionGridSectionTitle:l}=a(4534),s=a(30543),d=a(56167),{getPattern:c}=a(30),{RubricLink:u}=a(6613),{maxThresholds:p}=a(99906),{NewsletterSubscribeFormWrapper:m}=a(69817),g=n(s).withConfig({displayName:"PackageBundlePageWrapper"})`
  ${l} {
    margin-top: ${r(2)};
  }

  ${i(o.md)} {
    ${l} {
      margin-top: 0;
    }
  }
  ${({theme:e})=>c(e,"page-background")}

  ${m} {
    grid-column: -1 / 1;
    margin-top: ${r(5)};
    margin-bottom: ${r(5)};

    ${i(o.lg)} {
      grid-column: 3 / span 8;
    }
  }

  .package-bundle-page__collection-grid-item {
    @media (max-width: ${p.md}px) {
      .summary-item__image-link {
        margin-bottom: auto;
      }
    }

    .summary-item__content {
      @media (max-width: ${p.md}px) {
        margin-bottom: auto;
        line-height: 0;

        .summary-item__dek {
          display: none;
        }
      }

      ${i(o.md)} {
        .summary-item__rubric {
          padding-top: ${r(2)};
        }
      }

      ${u} {
        &:link,
        &:visited {
          text-decoration: none;
        }

        &:active,
        &:focus,
        &:hover {
          text-decoration: underline;
        }
      }

      .summary-item__hed {
        margin-bottom: 0;
      }

      .summary-item__byline-date-icon {
        margin-top: ${r(1)};
      }
    }
  }
`,h=n(d).withConfig({displayName:"PackageBundlePageSubchannelNavigation"})`
  margin-bottom: ${r(2)};

  li {
    margin-bottom: 0;
  }
`;e.exports={PackageBundlePageWrapper:g,PackageBundlePageSubchannelNavigation:h}},2790:(e,t,a)=>{const n=a(96540),{useIntl:o}=a(37243),r=a(5556),{default:i}=a(1165),{connector:l}=a(57744),s=a(19607),{PaymentGateway:d}=a(92807),c=a(66657),{trackComponent:u}=a(92716),{interactionResponse:p}=a(56187),m=a(8193),g=a(39416),h=a(57885),f=a(51009),{processLinks:b,processSidebarHeadings:y}=a(74804),v=a(40133).A,{PodcastDetailPageWrapper:C,PodcastDetailBodyWrapperGrid:S,PodcastDetailChannelBody:P,PodcastRecircContextualHeader:w,PodcastDetailPageRecircItem:E,PodcastDetailPageGrid:k,PodcastDetailPageRecircWrapper:_,DekWrapper:T,PodcastDetailContentHeader:B,DekClamp:N,Dek:x}=a(52643),$=new i({a:b,h2:y,"inline-embed":f,blockquote:({props:e})=>({type:h,props:e})}),H=e=>{n.useEffect((()=>{(async()=>{await p(),u("PodcastDetailedPage")})()}),[]);const{formatMessage:t}=o(),{attributes:a,bundle:{id:r,bundleBody:i,dangerousBundleDek:l,bundleTitle:h,containers:f,bundleRubric:b,lede:y,paginatedPage:H,podcastPagePrimaryCta:M,podcastPagePrimaryCtaLabel:D,podcastContentHeaderTheme:R},fullPageTheme:A="standard",hasConsistentSpacing:F,spacingAboveAd:O,contentHeaderVariation:L="PodcastContentHeader"}=e;let j,W,I={};f.forEach((e=>{"verso-features"===e.template?W=e:"verso-river"===e.template?j=e:"verso-podcast-recirc"===e.template&&(I=e)}));const G=I.items&&I.items.length?I.items[0]:"",U=g[L]||g,V=n.createElement(x,{dangerouslySetInnerHTML:{__html:l}});return n.createElement(C,{...a,fullPageTheme:A,hasBaseAds:!0,hasFooterAd:!1,podcastContentHeaderTheme:R},1===H&&n.createElement(n.Fragment,null,n.createElement(B,{as:U,lede:y,rubric:b,dangerousHed:h,podcastPagePrimaryCta:M,podcastPagePrimaryCtaLabel:D,externalLinks:W?.items,theme:R,publishDate:""}),n.createElement(T,null,n.createElement(N,{lines:4,isCollapsible:!0,breakpoint:"xxxl"},V)),i&&n.createElement(S,{key:`podcast-detail${r}`},n.createElement(P,{className:"body__container article__body"},$.convert([...i]))),n.createElement(d,{group:"ads"},n.createElement(c,{bottomSpacing:7,topSpacing:O},n.createElement(s,{position:"mid-content",shouldDisplayLabel:!0,shouldHoldSpace:!0}))),G&&n.createElement(k,null,n.createElement(_,null,n.createElement(w,null,t(v.contextualHeader)),n.createElement(E,{dangerousDek:G.dangerousDek,dangerousHed:G.dangerousHed,rubric:G.rubric,image:G.image,hasBorder:!1,url:G.url,contextualHeader:t(v.contextualHeader)})))),j&&j.items.length>0&&n.createElement(n.Fragment,null,n.createElement(k,null,n.createElement(m,{containers:[j],bundleProps:e,hasVersoFeaturesReducedMargin:!1,hasReducedMargin:!1,hasConsistentSpacing:F}))),n.createElement(d,{group:"ads"},n.createElement(c,{bottomSpacing:7,topSpacing:7},n.createElement(s,{position:"footer",shouldHoldSpace:!0}))))};H.propTypes={attributes:r.object,bundle:r.shape({id:r.string,bundleBody:r.array,bundleTitle:r.string,bundleRubric:r.object,containers:r.arrayOf(r.object),dangerousBundleDek:r.string,lede:r.object,paginatedPage:r.number,podcastPagePrimaryCta:r.string,podcastPagePrimaryCtaLabel:r.string,podcastContentHeaderTheme:r.string}).isRequired,contentHeaderVariation:r.string,fullPageTheme:r.oneOf(["standard","inverted"]),hasConsistentSpacing:r.bool,spacingAboveAd:r.number,theme:r.string},e.exports=l(H,{keysToPluck:["bundle","featureFlags"]})},60057:(e,t,a)=>{const{asConfiguredComponent:n}=a(12892),o=a(2790);e.exports=n(o,"PodcastDetailedPage")},53799:(e,t,a)=>{const n=a(75999).default,{calculateSpacing:o,getColorToken:r,getTypographyStyles:i,minScreen:l,minMaxScreen:s}=a(26865),d=a(95291),c=a(86659),{BREAKPOINTS:u}=a(96472),{asConfiguredComponent:p}=a(12892),{Disclaimer:m}=a(74307),g=n.section.withConfig({displayName:"Wrapper"})`
  ${({hasPadding:e})=>e?`padding: ${o(4)} 0 ${o(4)};`:""}
`,h=n.section.withConfig({displayName:"ItemsInfo"})`
  ${({theme:e})=>i(e,"typography.definitions.globalEditorial.tags")};

  display: flex;
  justify-content: center;
  padding: ${o(1)};
`,f=n(c.EvenFour).withConfig({displayName:"AutomatedPLPGrid"})`
  &.grid-even.grid-items-4 {
    ${l(u.md)} {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &.grid-even {
    padding-right: ${o(4)};
    padding-left: ${o(4)};
    ${s(0,u.md)} {
      padding-right: ${o(3)};
      padding-left: ${o(3)};
    }
  }

  &.grid {
    row-gap: ${o(6)};
  }
`,b=n(d).withConfig({displayName:"ProductsShopHeader"})`
  color: ${({theme:e})=>r(e,"colors.discovery.body.white.heading")};

  ${({theme:e})=>i(e,"typography.definitions.discovery.page-hed-section")}
`,y=n.div.withConfig({displayName:"PaginationModalWrapper"})`
  display: flex;
  justify-content: center;
  padding-top: ${o(8)};
`,v=n(p(m.TextCenterNoTopRule,"Disclaimer")).withConfig({displayName:"ProductShopPageDisclaimer"})`
  p {
    ${i("typography.definitions.globalEditorial.context-secondary")};
  }
`;e.exports={Wrapper:g,ItemsInfo:h,ProductsShopHeader:b,AutomatedPLPGrid:f,PaginationModalWrapper:y,ProductShopPageDisclaimer:v}},10958:(e,t,a)=>{const{defineMessages:n}=a(37243);e.exports=n({noResultsHed:{id:"SearchPage.NoResultsHed",defaultMessage:"No stories found for your search",description:"Hed text when no results are found"},resultsHed:{id:"SearchPage.ResultsHed",defaultMessage:"Search stories from {brandName}",description:"Hed text when results are found"},resultswithWordHed:{id:"SearchPage.resultswithWordHed",defaultMessage:"Search results for ",description:"Hed text when results are found"},noResultsContentHed:{id:"SearchPage.noResultsContentHed",defaultMessage:"We didn't find any recipes, articles or videos for ",description:"SubHed text when no results are found"},noResultsCustomContentHed:{id:"SearchPage.noResultsCustomContentHed",defaultMessage:"We didn't find any results for",description:"SubHed alternate text when no results are found"},noResultsSubHed:{id:"SearchPage.noResultsSubHed",defaultMessage:"We didn't find any ",description:"SubHed text when no results are found"},searchInputAriaLabel:{id:"SearchPage.SearchInputAriaLabel",defaultMessage:"search",description:"ARIA label for the search box"},searchInputPlaceholder:{id:"SearchPage.SearchInputPlaceholder",defaultMessage:'Try "Racial justice"',description:"Placeholder text for the search box",isConfigurable:!0},searchButtonLabel:{id:"SearchPage.SearchButtonLabel",defaultMessage:"Search",description:"Label for the search button"},sortLabel:{id:"SearchPage.SortLabel",defaultMessage:"Sort by",description:"Label for the sort dropdown"},loadMoreButtonLabel:{id:"SearchPage.LoadMoreButtonLabel",defaultMessage:"More Stories",description:""},loadMoreLoadingLabel:{id:"SearchPage.LoadMoreLoadingLabel",defaultMessage:"Loading ...",description:""},clearAll:{id:"SearchPage.ClearAll",defaultMessage:"Clear All",description:"Text in SearchPage component to clear filters"},sortBy:{id:"SearchPage.SortBy",defaultMessage:"Sort By",description:"SearchPage component sort by text for sorting result"},noResultsFound:{id:"SearchPage.NoResultsFound",defaultMessage:"Sorry we can't display any results for those filtering options, please try again",description:"Message to be shown if no results are found when filtered."},filterResults:{id:"SearchPage.FilterResults",defaultMessage:"Filter Results",description:"SearchPage component filter results text"},loading:{id:"SearchPage.Loading",defaultMessage:"Loading ...",description:"SearchPage component loading text"},moreStories:{id:"SearchPage.MoreStories",defaultMessage:"More Stories",description:"SearchPage component more stories text"},showAllArtists:{id:"SearchPage.showAllArtists",defaultMessage:"SHOW ALL ARTISTS",description:"SearchPage component show all artist"},showAllAuthors:{id:"SearchPage.showAllAuthors",defaultMessage:"SHOW ALL AUTHORS",description:"SearchPage component show all author"},resultsHedForIssueDate:{id:"SearchPage.ResultsHedOnIssueDate",defaultMessage:" Search Results from {issueDate} issue",description:"Hed text when results are found for issueDate"},authorsTitle:{id:"SearchPage.AuthorTitle",defaultMessage:"{count, plural, one {Author} other {Authors} }",description:"Search Author titles with plurals"},reviewsTitle:{id:"SearchPage.ReviewTitle",defaultMessage:"{count, plural, one {Review} other {Reviews} }",description:"Search Review titles with plurals"},tracksTitle:{id:"SearchPage.TrackTitle",defaultMessage:"{count, plural, one {Track} other {Tracks} }",description:"Search track titles with plurals"},featuresTitle:{id:"SearchPage.FeatureTitle",defaultMessage:"{count, plural, one {Feature} other {Features} }",description:"Search feature titles with plurals"},videosTitle:{id:"SearchPage.VideoTitle",defaultMessage:"{count, plural, one {Video} other {Videos} }",description:"Search video titles with plurals"},artistsTitle:{id:"SearchPage.ArtistTitle",defaultMessage:"{count, plural, one {Artist} other {Artists} }",description:"Search artist titles with plurals"},newsTitle:{id:"SearchPage.NewsTitle",defaultMessage:"News",description:"Search news titles with plurals"},thepitchTitle:{id:"SearchPage.ThePitchTitle",defaultMessage:"The Pitch",description:"Search pitch titles with plurals"}})},906:(e,t,a)=>{const n=a(96540),o=a(5556),{connector:r}=a(57744),i=a(8193),l=a(19607),{PaymentGateway:s}=a(92807),{UniversalBundlePageWrapper:d}=a(33284),{componentsMapper:c}=a(21090),{trackComponent:u}=a(92716),{interactionResponse:p}=a(56187),m=e=>{n.useEffect((()=>{(async()=>{await p(),u("UniversalBundlePage")})()}),[]);const{attributes:t,bundle:a,bundle:{containers:o},navigation:r,className:m,universalLayout:g="default",componentConfig:h,hasConsistentSpacing:f}=e,b=(c[g]||c.default).header,y=h?.BundleHeader?.settings?.isInverted||!1;return n.createElement(d,{...t,className:m,hasBaseAds:!0,hasConsistentSpacing:f},(v=b)&&"function"==typeof v&&n.createElement(b,{bundle:a,navigation:r,isInverted:y}),n.createElement(i,{containers:o,bundleProps:e,hasStickyLinkBanner:!0,hasConsistentSpacing:f}),n.createElement(s,{group:"ads"},n.createElement(l,{position:"footer",shouldHoldSpace:!0})));var v};m.propTypes={attributes:o.object,bundle:o.object,className:o.string,componentConfig:o.object,featureFlags:o.object,hasConsistentSpacing:o.bool,navigation:o.shape({subchannelLinks:o.arrayOf(o.object)}),universalLayout:o.string},e.exports=r(m,{keysToPluck:["bundle","featureFlags","newsletter","navigation","universalLayout","componentConfig","hasConsistentSpacing"]})},21090:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.componentsMapper=void 0;const o=n(a(86559)),r=a(37867);t.componentsMapper={default:{header:o.default},"tentpole-events":{header:r},"tentpole-events-24":{header:r}}},25536:(e,t,a)=>{const{asConfiguredComponent:n}=a(12892),o=a(906);e.exports=n(o,"UniversalBundlePage")},33284:(e,t,a)=>{const n=a(75999).default,o=a(30543),{BREAKPOINTS:r}=a(96472),{MultiPackageContainer:i}=a(67275),{getSectionSpacingStyling:l}=a(16800),{getPattern:s}=a(30),{createMultipackageContainerStyles:d}=a(89085),c=n(o).withConfig({displayName:"UniversalBundlePageWrapper"})`
  ${({theme:e})=>s(e,"page-background")};
  ${d(i)}
  ${i} {
    ${({hasConsistentSpacing:e,theme:t})=>{const a=l(t,"gap-md");return e&&"0px"!==a?`\n        gap: ${a};\n        margin-top: ${a};\n      `:null}}

    @media (max-width: ${r.md}) {
      ${({hasConsistentSpacing:e,theme:t})=>{const a=l(t,"gap-sm");return e&&"0px"!==a?`\n          gap: ${a};\n          margin-top: ${a};\n        `:null}}
    }
  }
`;e.exports={UniversalBundlePageWrapper:c}},37867:(e,t,a)=>{const n=a(5556),o=a(96540),r=a(16339),{HomePageDisclaimerWrapper:i,HomePageDisclaimer:l}=a(94631),{trackComponent:s}=a(92716),{interactionResponse:d}=a(56187),{TentpoleHeaderHed:c,TentpoleHeaderGrid:u,TentpoleHeaderGridCol:p,TentpoleHeaderSection:m,TentpoleHeaderDekText:g,TentpoleHeaderWrapper:h}=a(3509),f=e=>{const{bundle:{bundleBody:t,dangerousBundleDek:a,bundleTitle:n,showDisclaimer:f,hasDefaultAffiliateDisclaimer:b,lede:y,affiliateDisclaimer:v},isInverted:C=!1}=e;return o.useEffect((()=>{(async()=>{await d(),s("TentpoleHeader")})()}),[]),o.createElement(h,null,y&&o.createElement(m,{lede:y,captionWidth:"fullbleed",hideLedeCaption:!0}),o.createElement(u,{isInverted:C},o.createElement(p,null,n&&o.createElement(c,{dangerouslySetInnerHTML:{__html:n},isInverted:C}),a&&o.createElement(g,{dangerouslySetInnerHTML:{__html:a},isInverted:C}),b&&f&&o.createElement(i,null,o.createElement(l,{disclaimerHtml:v})))),t&&o.createElement(r,{body:t}))};f.propTypes={bundle:n.object,isInverted:n.bool},f.displayName="TentpoleHeader",e.exports=f},3509:(e,t,a)=>{const{default:n}=a(75999),{calculateSpacing:o,minScreen:r,getColorToken:i}=a(26865),{BREAKPOINTS:l}=a(96472),{applyGridSpacing:s,cssVariablesGrid:d}=a(1123),{BaseText:c}=a(76955),u=a(92027),p=n.div.withConfig({displayName:"TentpoleHeaderWrapper"})`
  margin-bottom: ${o(4)};
`,m=n.header.withConfig({displayName:"TentpoleHeaderGrid"})`
  ${d()}

  display: grid;
  grid-column: 1;
  grid-row: 1;
  grid-template-columns: repeat(4, 1fr);
  ${r(l.lg)} {
    grid-template-columns: repeat(12, 1fr);
  }
  column-gap: var(--grid-gap);
  z-index: 1;
  width: 100%;
  row-gap: var(--grid-gap);
  ${s("padding")};

  ${({isInverted:e,theme:t})=>e&&`\n      background: ${i(t,"colors.consumption.lead.inverted.background")};\n    `}
`,g=n.div.withConfig({displayName:"TentpoleHeaderGridCol"})`
  grid-column: 1 / -1;
  text-align: center;
  ${r(l.lg)} {
    grid-column: 4 / -4;
  }
`,h=n(u).withConfig({displayName:"TentpoleHeaderSection"})``,f=n(c).withConfig({displayName:"TentpoleHeaderHed"})`
  margin-top: ${o(4)};
  margin-bottom: ${o(4)};

  ${({isInverted:e,theme:t})=>e&&`\n      color: ${i(t,"colors.consumption.lead.inverted.heading")} !important;\n    `}
`;f.defaultProps={as:"h1",colorToken:"colors.consumption.body.standard.body",typeIdentity:"typography.definitions.discovery.page-hed-section"};const b=n(c).withConfig({displayName:"TentpoleHeaderDekText"})`
  margin-bottom: ${o(1)};
  ${({isInverted:e,theme:t})=>e&&`\n      color: ${i(t,"colors.consumption.lead.inverted.heading")};\n      margin-bottom: ${o(4)};\n    `}
`;b.defaultProps={colorToken:"colors.consumption.body.standard.body",typeIdentity:"typography.definitions.discovery.description-page"},e.exports={TentpoleHeaderWrapper:p,TentpoleHeaderHed:f,TentpoleHeaderGrid:m,TentpoleHeaderGridCol:g,TentpoleHeaderSection:h,TentpoleHeaderDekText:b}},77573:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.NextPage=void 0;const o=n(a(96540)),r=a(37243),i=a(81372),l=a(67275),s=n(a(88456)),d=n(a(14439)),c=(0,i.asVariation)(s.default,"Primary",{typeStyle:"primary"});t.NextPage=({currentPage:e,limit:t,totalResults:a})=>{const n=(0,r.useIntl)().formatMessage(d.default.nextPage);if(e*t>=a)return null;const i=`?enablePeritext=true&page=${e+1}`;return o.default.createElement(l.MultiPackageReadMore,null,o.default.createElement(c,{inputKind:"link",href:i,label:n}))}},14439:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=a(37243);t.default=(0,n.defineMessages)({nextPage:{id:"PaginationRow.NextPage",defaultMessage:"Next Page",description:"The button label"}})},67727:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LineBreak=void 0;const o=n(a(75999));t.LineBreak=o.default.br.withConfig({displayName:"LineBreak"})``},67784:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Paragraph=void 0;const o=n(a(96540)),r=n(a(75999)).default.p.withConfig({displayName:"Paragraph"})``;t.Paragraph=function(e){return o.default.createElement(r,null,e.children)}},63980:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(a(96540)),r=n(a(75999)),i=a(92437),l=a(26865),s=a(76955),d=a(96472),c=n(a(49080)),u=n(a(66445)),p=n(a(37968)),m=r.default.div.withConfig({displayName:"RiverCardContent"})`
  padding: 1rem 0 2rem;
  display: flex;
  flex-direction: column;
`,g=r.default.div.withConfig({displayName:"DekWrapper"})`
  // Temp - p will be removed
  p {
    ${(0,l.getTypographyStyles)("typography.definitions.discovery.description-core")};
  }
`,h=r.default.div.withConfig({displayName:"ToutWrapper"})`
  overflow: hidden;
`,f=r.default.h3.withConfig({displayName:"HeroCardHedWrapper"})`
  margin: 8px 0 0 0;
  ${(0,l.getLinkStyles)("colors.discovery.body.white.heading",null,"global")}

  p {
    margin: 0;
    margin-bottom: 1rem;

    ${s.BaseLink} {
      margin-top: 0;
      ${(0,l.minScreen)(d.BREAKPOINTS.md)} {
        ${({theme:e})=>(0,l.getTypographyStyles)(e,"typography.definitions.discovery.hed-core-secondary")};
      }
      ${(0,l.getTypographyStyles)("typography.definitions.discovery.hed-break-out")};
    }
  }

  ::after {
    content: '';
    ${(0,l.minScreen)(d.BREAKPOINTS.md)} {
      display: block;
    }
    margin-bottom: ${(0,l.calculateSpacing)(2)};
    border-bottom: 1px solid
      ${(0,l.getColorToken)("colors.discovery.body.white.accent")};
    width: ${(0,l.calculateSpacing)(10)};
  }
`,b=(0,r.default)(u.default).withConfig({displayName:"HeroCardTout"}).attrs({aspectRatio:"4:3",width:1600})``,y=r.default.div.withConfig({displayName:"RiverCard"})`
  display: flex;
  flex-direction: column;
  margin: 0 4rem 2rem 4rem;
  padding-bottom: 2rem;
`,v=r.default.time.withConfig({displayName:"PublishDate"})`
  ${({theme:e})=>(0,l.getColorStyles)(e,"color","colors.consumption.lead.inverted.heading")}
  ${({theme:e})=>`${(0,l.getTypographyStyles)(e,"typography.definitions.globalEditorial.context-tertiary")};\n      `}
`;t.default=({contributors:e,dek:t,hed:a,rubric:n,tout:r,publishDate:l})=>{const s=new Date(l).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return o.default.createElement(i.ComponentProvider,{value:{blocks:{media:b}}},o.default.createElement(y,null,o.default.createElement(h,null,o.default.createElement(i.Slice,{value:r})),o.default.createElement(m,null,o.default.createElement(p.default,{className:"hero_card_rubric"},o.default.createElement(i.Slice,{value:n})),o.default.createElement(f,{className:"summary-item__hed"},o.default.createElement(i.Slice,{value:a})),o.default.createElement(g,null,o.default.createElement(i.Slice,{value:t})),o.default.createElement(c.default,{contributors:e}),o.default.createElement(v,null,s))))}},47332:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(a(96540)),r=n(a(75999)),i=a(92437),l=a(26865),s=a(76955),d=n(a(66445)),c=n(a(49080)),u=n(a(37968)),p=r.default.div.withConfig({displayName:"SummaryItemContent"})`
  padding: 0 0 0.75em 1.8em;
  align-content: center;
`,m=r.default.div.withConfig({displayName:"DekWrapper"})`
  // Temp - p will be removed
  p {
    ${(0,l.getTypographyStyles)("typography.definitions.discovery.description-core")};
    margin-bottom: 0;
  }
`,g=r.default.h3.withConfig({displayName:"HeroCardHedWrapper"})`
  ${(0,l.getLinkStyles)("colors.discovery.body.white.heading",null,"global")}
  margin: 0.4em 0;

  p {
    margin: 0;

    ${s.BaseLink} {
      ${(0,l.getTypographyStyles)("typography.definitions.discovery.hed-core-primary")}
      margin-top: 0;
    }
  }
`,h=r.default.div.withConfig({displayName:"RiverCard"})`
  display: flex;
  max-width: 75rem;
  padding-bottom: 2rem;
  margin: 0 2rem 2rem 4rem;
  border-bottom: 1px solid;
  border-bottom-color: rgba(33, 33, 33, 1);
`,f=(0,r.default)(d.default).withConfig({displayName:"RiverCardTout"}).attrs({aspectRatio:"1:1",width:640})``,b=r.default.div.withConfig({displayName:"ToutWrapper"})`
  // Temp fixed dimensions
  height: 282px;
  width: 282px;
  flex-shrink: 0;
`;t.default=({contributors:e,dek:t,hed:a,rubric:n,tout:r})=>o.default.createElement(i.ComponentProvider,{value:{blocks:{media:f}}},o.default.createElement(h,null,o.default.createElement(b,null,o.default.createElement(i.Slice,{value:r})),o.default.createElement(p,null,o.default.createElement(u.default,{className:"river_card_rubric"},o.default.createElement(i.Slice,{value:n})),o.default.createElement(g,{className:"summary-item__hed"},o.default.createElement(i.Slice,{value:a})),o.default.createElement(m,null,o.default.createElement(i.Slice,{value:t})),o.default.createElement(c.default,{contributors:e}))))},37968:function(e,t,a){var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var o=Object.getOwnPropertyDescriptor(t,a);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,o)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const i=r(a(75999)),l=a(26865),s=a(76955),d=a(6613),c=(0,i.default)(d.RubricWrapper).withConfig({displayName:"RubricWrapper"})`
  ${s.BaseLink} {
    display: inline-block;
    vertical-align: middle;
    text-decoration: none;
    ${({theme:e})=>(0,l.getColorStyles)(e,"color","colors.consumption.lead.standard.context-signature")};
    ${({hasBackground:e,isInverted:t,theme:a})=>(e||t)&&i.css`
        ${(0,l.getColorStyles)(a,"color","colors.consumption.lead.standard.context-texture")};
      `}
    ${({theme:e})=>(0,l.getTypographyStyles)(e,"typography.definitions.globalEditorial.context-primary")};

    &:hover {
      text-decoration: underline;
    }
  }
`;t.default=c},76935:(e,t,a)=>{const n=a(96540),o=a(5556),r=a(92437).ComponentProvider,{Bold:i}=a(53559),{Italic:l}=a(48768),{SmallCaps:s}=a(89460),{Strikethrough:d}=a(45661),{Subscript:c}=a(20827),{Superscript:u}=a(78122),{Link:p}=a(77232),{AdSlot:m}=a(68135),{Content:g}=a(66570),{CurationContainer:h}=a(35437),{Dek:f}=a(35760),{Hed:b}=a(39457),{LineBreak:y}=a(67727),{Newsletter:v}=a(56921),{NextPage:C}=a(77573),{Paragraph:S}=a(67784),{SubNav:P}=a(10015),{SummaryRiverSection:w}=a(95858),E={blocks:{"ad-slot":m,content:g,"curation-container":h,dek:f,hed:b,"line-break":y,newsletter:v,"next-page":C,paragraph:S,"sub-nav":P,"summary-river-section":w},marks:{bold:i,italic:l,link:p,"small-caps":s,strikethrough:d,subscript:c,superscript:u}},k=({children:e})=>n.createElement(r,{value:E},e);k.propTypes={children:o.node.isRequired},e.exports=k},66570:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Content=void 0;const o=n(a(96540)),r=n(a(75999)).default.div.withConfig({displayName:"Content"})`
  border: grey 2px solid;
  margin: 4px;
  padding: 4px;
`;t.Content=({children:e})=>o.default.createElement(r,null,e)},35437:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CurationContainer=void 0;const o=n(a(96540)),r=n(a(75999)),i=a(92437),l=n(a(47332)),s=n(a(63980));var d;!function(e){e.HeroCard="HeroCard",e.RiverCard="RiverCard"}(d||(d={}));const c={"verso-multi-package-feature":d.HeroCard,"verso-river":d.RiverCard},u={HeroCard:s.default,RiverCard:l.default},p=r.default.div.withConfig({displayName:"Curation Container"})``;t.CurationContainer=({children:e,type:t})=>{const a=(e=>c[e])(t),n=u[a];return o.default.createElement(p,null,o.default.createElement(i.ComponentProvider,{value:{blocks:{"summary-item":n}}},e))}},95858:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SummaryRiverSection=void 0;const o=n(a(96540)),r=n(a(75999)),i=a(56043),l=r.default.section.withConfig({displayName:"SummaryRiverSection"})``,s=r.default.div.withConfig({displayName:"GridWrapperAside"})`
  grid-column: 2;
`,d=r.default.div.withConfig({displayName:"GridWrapperContent"})`
  grid-column: 1;
`,c=r.default.div.withConfig({displayName:"GridWrapper"})`
  display: grid;
`;t.SummaryRiverSection=function({children:e}){return o.default.createElement(l,null,o.default.createElement(c,null,o.default.createElement(d,null,e),o.default.createElement(s,null,o.default.createElement(i.SideAdVariation,null,e))))}},53559:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Bold=void 0;const o=n(a(75999));t.Bold=o.default.strong.withConfig({displayName:"Bold"})`
  font-weight: bold;
`},48768:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Italic=void 0;const o=n(a(75999));t.Italic=o.default.em.withConfig({displayName:"Italic"})`
  font-style: italic;
`},77232:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Link=void 0;const o=n(a(96540)),r=a(60881);t.Link=e=>{const{children:t,url:a}=e;return o.default.createElement(r.BaseLink,{as:"a",href:a},t)}},89460:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SmallCaps=void 0;const o=n(a(75999));t.SmallCaps=o.default.em.withConfig({displayName:"SmallCaps"})`
  font-style: inherit;
  font-variant: all-small-caps;
`},45661:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Strikethrough=void 0;const o=n(a(75999));t.Strikethrough=o.default.del.withConfig({displayName:"Strikethrough"})``},20827:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Subscript=void 0;const o=n(a(75999));t.Subscript=o.default.sub.withConfig({displayName:"Subscript"})``},78122:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Superscript=void 0;const o=n(a(75999));t.Superscript=o.default.sup.withConfig({displayName:"Superscript"})``},68135:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AdSlot=void 0;const o=n(a(96540)),r=n(a(75999)),i=a(56043),l=a(84303),s=a(25079),d=r.default.div.withConfig({displayName:"AdSlot"})`
  height: 100%;
`,c={"mid-content-ad":s.MidContentAdVariation,"native-ad":l.NativeAdVariation,"side-ad":i.SideAdVariation};t.AdSlot=function(e){const t=c[e.view];return o.default.createElement(d,null,o.default.createElement(t,{...e}))}},25079:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MidContentAdVariation=void 0;const o=n(a(96540)),r=n(a(75999)),i=a(92807),l=a(15641),s=r.default.div.withConfig({displayName:"MidContentAdVariation"})``;t.MidContentAdVariation=function(e){return o.default.createElement(s,null,o.default.createElement(i.PaymentGateway,{group:"ads"},o.default.createElement(l.SummaryRiverAd,{position:"mid-content",shouldDisplayLabel:!0})))}},84303:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.NativeAdVariation=void 0;const o=n(a(96540)),r=n(a(75999)),i=a(92807),l=n(a(31850)),s=r.default.div.withConfig({displayName:"NativeAdVariation"})`
  padding: 4x;
`;t.NativeAdVariation=function(e){return o.default.createElement(s,null,o.default.createElement(i.PaymentGateway,{group:"ads"},o.default.createElement(l.default,{position:"promo"})))}},56921:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Newsletter=void 0;const o=n(a(96540)),r=n(a(75999)),i=a(67275),l=a(69817),s=a(89662),d=r.default.div.withConfig({displayName:"Newsletter"})``;t.Newsletter=({buttonLabel:e,dangerousDek:t,dangerousHed:a,dangerousDisclaimer:n,errors:r,formName:c,placeholder:u,textFieldLabel:p,textFieldName:m})=>o.default.createElement(d,null,o.default.createElement(i.MultiPackageRow,{className:"homepage__newsletter-row"},o.default.createElement(i.NewsletterWrapper,null,o.default.createElement(l.NewsletterSubscribeFormWrapper,{className:"newsletter-subscribe-form",hasAlternateNewsletterStyle:!0},o.default.createElement(l.NewsletterSubscribeFormHedDekWrapper,null,o.default.createElement(l.NewsletterSubscribeFormDangerousHed,{className:"newsletter-subscribe-form__hed",textColor:"light",textAlign:"center",newsletterPalette:"standard",noBottomPadding:!1,dangerouslySetInnerHTML:{__html:a}}),o.default.createElement(l.NewsletterSubscribeFormDek,{className:"newsletter-subscribe-form__dek",textColor:"light",dangerouslySetInnerHTML:{__html:t}})),o.default.createElement(l.NewsletterSubscribeFormInputsWrapper,null,o.default.createElement(l.NewsletterSubscribeFormValidation,{errors:r},o.default.createElement(s.SingleLine,{ariaDescribedBy:"privacy-text",buttonInputKind:"submit",buttonLabel:e,formName:c,hasAttachedButton:!0,isRequired:!0,label:p,name:m,placeholder:u,type:"email"}),o.default.createElement(l.NewsletterSubscribeFormDisclaimer,{disclaimerColor:"dark",hasAlternateNewsletterStyle:!0,textAlign:"center"},o.default.createElement("span",{dangerouslySetInnerHTML:{__html:n}}))))))))},56043:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SideAdVariation=void 0;const o=n(a(96540)),r=n(a(75999)),i=a(26865),l=a(92807),s=a(96472),d=n(a(28433)),c=n(a(31850)),u=(0,r.default)(d.default).withConfig({displayName:"SideAdVariation"})`
  ${(0,i.minScreen)(s.BREAKPOINTS.lg)} {
    top: ${(0,i.calculateSpacing)(16)};
  }
`;t.SideAdVariation=function(e){return o.default.createElement(u,null,o.default.createElement(l.PaymentGateway,{group:"ads"},o.default.createElement(c.default,{position:"rail"})))}},10015:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SubNav=void 0;const o=a(92437),r=n(a(96540)),i=a(79424);t.SubNav=function({children:e}){return r.default.createElement(o.ComponentProvider,{value:{marks:{link:i.NavLink}}},r.default.createElement(i.NavWrapper,{"data-testid":"ScrollingNavigation",isCentered:!0},r.default.createElement(i.NavListWrapper,null,r.default.createElement(i.NavList,null,e.map((e=>r.default.createElement(i.NavListItem,null,e)))))))}},49080:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(a(96540)),r=n(a(75999)),i=a(26865),l=r.default.span.withConfig({displayName:"Contributor"})`
  margin-bottom: 0.25rem;
  ${(0,i.getTypographyStyles)("typography.definitions.globalEditorial.accreditation-core")};
  color: ${(0,i.getColorToken)("colors.consumption.lead.standard.accreditation")};
`,s=r.default.span.withConfig({displayName:"BylineName"})``,d=r.default.span.withConfig({displayName:"BylinePreamble"})`
  text-transform: uppercase;
`,c={AUTHOR:"By",PHOTOGRAPHER:"Photography by"};t.default=({contributors:e})=>o.default.createElement(o.default.Fragment,null,Object.values(e).flatMap((e=>e.map((({name:e,type:t})=>{const a=c[t];return o.default.createElement(l,null,o.default.createElement(d,null,a," "),o.default.createElement(s,null,e))})))))},35760:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Dek=void 0;const o=n(a(96540)),r=n(a(75999)).default.div.withConfig({displayName:"Dek"})``;function i(e){return o.default.createElement(r,null,e.children)}t.Dek=i,i.displayName="Dek"},39457:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Hed=void 0;const o=n(a(96540)),r=n(a(75999)).default.h1.withConfig({displayName:"StyledHed"})`
  text-align: center;
`;t.Hed=function(e){return o.default.createElement(r,null,e.children)}},66445:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(a(96540)),r=n(a(75999)).default.img.withConfig({displayName:"ResponsiveImage"})`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;t.default=({aspectRatio:e,media:t,width:a=1200})=>{const{altText:n,bookMarkedUrl:i}=t,l=i.replace("/master/",`/${e??"master"}/`).replace("/pass/",`/w_${a},c_limit/`);return o.default.createElement(r,{loading:"lazy",alt:n,src:l})}},37515:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(a(26836));(0,n(a(41782)).default)(o.default)}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var a=o[e]={id:e,loaded:!1,exports:{}};return n[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=n,e=[],r.O=(t,a,n,o)=>{if(!a){var i=1/0;for(c=0;c<e.length;c++){for(var[a,n,o]=e[c],l=!0,s=0;s<a.length;s++)(!1&o||i>=o)&&Object.keys(r.O).every((e=>r.O[e](a[s])))?a.splice(s--,1):(l=!1,o<i&&(i=o));if(l){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[a,n,o]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);r.r(o);var i={};t=t||[null,a({}),a([]),a(a)];for(var l=2&n&&e;"object"==typeof l&&!~t.indexOf(l);l=a(l))Object.getOwnPropertyNames(l).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,r.d(o,i),o},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={5025:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var n,o,[i,l,s]=a,d=0;if(i.some((t=>0!==e[t]))){for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(s)var c=s(r)}for(t&&t(a);d<i.length;d++)o=i[d],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(c)},a=globalThis.webpackChunkverso=globalThis.webpackChunkverso||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),r.nc=void 0;var i=r.O(void 0,[9614,7571,6225,7810,3405,1782,6602,8230,1206],(()=>r(37515)));i=r.O(i)})();