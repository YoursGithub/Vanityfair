(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[6602],{82582:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CollectionItem=void 0;const a=o(5556),r=o(96540),{useIntl:l}=o(37243),n=o(43393).default,{CollectionsDrawerCollectionItem:i}=o(42775),s=o(86157);t.CollectionItem=({collectionId:e,collectionName:t,image:o,totalBookmarkCount:a,onSave:s,isBookmarkDrawersEnabled:c})=>{const{formatMessage:d}=l();return r.createElement("div",{onClick:()=>s({collectionName:t,collectionId:e}),onKeyDown:o=>{"Enter"!==o.key&&" "!==o.key||s({collectionName:t,collectionId:e})},style:{cursor:"pointer"},tabIndex:0,role:"button"},r.createElement(i,{hasWrapperButtonRole:!1,dangerousHed:t,hasBorder:!1,hasRule:!1,image:o,metadataPrimary:d(n.bookmarkCountType,{count:a}),shouldVerticallyAlignHed:!0,url:"",emptyBoard:0===a,isBookmarkDrawersEnabled:c}))},t.CollectionItem.propTypes={collectionId:a.number.isRequired,collectionName:a.string.isRequired,image:a.shape(s.propTypes),isBookmarkDrawersEnabled:a.bool,onSave:a.func.isRequired,totalBookmarkCount:a.number.isRequired}},7105:(e,t,o)=>{const a=o(5556),r=o(96540),{useEffect:l}=o(96540),{useIntl:n}=o(37243),{trackComponent:i}=o(92716),{interactionResponse:s}=o(56187),c=o(43393).default,d=o(91180),{CollectionItem:u}=o(82582),{CollectionsDrawerBookmarkItem:m,CollectionsDrawerHeadingWrapper:p,CollectionsDrawerList:h,CollectionsDrawerListHeading:g,CollectionsDrawerListItem:k,CollectionsDrawerNewCollectionButton:C,CollectionsDrawerScrollableArea:f,CollectionsDrawerWrapper:b}=o(42775),{useCollections:y}=o(91637),{Circle:w}=o(62930),E=o(86157),{trackDrawerClose:v,trackDrawerSelectCollection:D,trackCreateCollectionDrawerOpen:B}=o(60880),{connector:_}=o(57744),{usePhotoBookmarkingContext:T}=o(50624),{addExistingBookmarksToACollection:S}=o(74139),O=({copilotID:e,featureFlags:{enableBookmarkDrawers:t},image:o,isLargeDevice:a,isOpen:E=!1})=>{l((()=>{(async()=>{await s(),i("CollectionsDrawer")})()}),[]);const{formatMessage:_}=n(),{federatedGraphqlUrl:O,closeAll:I,openCreateCollectionDrawer:M,openSaveAlertWithBoardName:N,organizationId:L}=T(),[A]=y({makeCall:E,federatedGraphqlUrl:O,organizationId:L}),P=({collectionName:t,collectionId:o})=>{S({organizationId:L,federatedGraphqlUrl:O,updateCollectionId:o,copilotIds:[e]}),N({collectionName:t}),D(t)};return r.createElement(b,{as:a?d.Right:d.Bottom,hideChannelNavigation:!0,hideDrawerScroll:!0,isLargeDevice:a,isOpen:E,onClose:()=>{v(),I()},showCloseButton:!0,isBookmarkDrawersEnabled:t},r.createElement(m,{dangerousHed:_(c.bookmarkSavedText),hasBorder:!1,hasRule:!1,image:o,shouldVerticallyAlignHed:!0,hasWrapperButtonRole:!1,url:"",isBookmarkDrawersEnabled:t}),r.createElement(f,null,r.createElement(p,null,r.createElement(g,null,_(c.collectionsListHeading)),r.createElement(C,{label:_(c.collectionsNewCollectionButtonLabel),btnStyle:"text",onClickHandler:()=>{M(),B("New Board")},isBookmarkDrawersEnabled:t})),0===A.length&&r.createElement(w,{"aria-label":"Loading",margin:"0",width:"100%"}),r.createElement(h,null,A.map((({collectionId:e,collectionName:o,totalBookmarkCount:a,coverImage:l})=>r.createElement(k,{key:e},r.createElement(u,{collectionId:e,collectionName:o,image:l,onSave:P,totalBookmarkCount:a,isBookmarkDrawersEnabled:t})))))))};O.propTypes={copilotID:a.string,featureFlags:a.object,image:a.shape(E.propTypes),isLargeDevice:a.bool.isRequired,isOpen:a.bool},e.exports=_(O,{keysToPluck:["featureFlags"],keysToSpread:["lastBookmarkedPhoto","featureFlags"]})},71648:function(e,t,o){var a=this&&this.__createBinding||(Object.create?function(e,t,o,a){void 0===a&&(a=o);var r=Object.getOwnPropertyDescriptor(t,o);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,a,r)}:function(e,t,o,a){void 0===a&&(a=o),e[a]=t[o]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&a(t,e,o);return r(t,e),t},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(o(5556)),s=l(o(96540)),c=o(37243),d=n(o(43393)),u=o(74139),m=o(57744),p=o(50624),h=o(39403),g=o(48165),k=o(11660),C=o(86902),f=o(60880),b=({copilotID:e,featureFlags:{enableBookmarkDrawers:t},isLargeDevice:o,shouldDisableSubmitButtonOnEmptyInput:a=!0})=>{const{formatMessage:r}=(0,c.useIntl)(),[l,n]=(0,s.useState)(""),{closeAll:i,federatedGraphqlUrl:m,openCollectionsDrawer:C,openSaveAlertWithBoardName:b,organizationId:y,showComponent:w,setHasCollections:E,hasCollections:v}=(0,p.usePhotoBookmarkingContext)(),D=w===h.showComponentType.CREATE_COLLECTION_DRAWER,B={[k.CREATE_COLLECTION_INPUT_NAME]:{valueMissing:r(d.default.createCollectionValueMissingError)}};return s.default.createElement(g.DrawerWithForm,{customInvalidityMessages:B,errorText:l,formName:k.CREATE_COLLECTION_FORM_NAME,hedText:r(d.default.createCollectionHeading),inputLabel:r(d.default.createCollectionInputLabel),inputName:k.CREATE_COLLECTION_INPUT_NAME,inputPlaceholder:r(d.default.createCollectionPlaceholderText),isOpen:D,isRequired:!0,onClose:async()=>{n(""),await i(),v&&C(),(0,f.trackCreateCollectionDrawerClose)()},onInput:()=>{n("")},onReset:()=>n(""),onSubmit:async t=>{if((e=>e.trim().length<1)(t))return void n(r(d.default.createCollectionNoTextError));const{errorType:o}=await(0,u.createCollection)({copilotIds:e?[e]:[],collectionName:t,federatedGraphqlUrl:m,organizationId:y});E(!0),o?n(r(o===u.errorType.DUPLICATE_NAME?d.default.createCollectionDuplicateNameError:d.default.createCollectionNotMadeError)):((0,f.trackCreateCollectionDrawerSave)(),e?b({collectionName:t}):i())},position:o?k.drawerPosition.RIGHT:k.drawerPosition.BOTTOM,resetButtonLabel:r(d.default.createCollectionResetButtonLabel),shouldDisableSubmitButtonOnEmptyInput:a,shouldHideValidationErrorText:!0,submitButtonLabel:r(d.default.createCollectionSubmitButtonLabel),isBookmarkDrawersEnabled:t})};b.propTypes={copilotID:i.default.string,featureFlags:i.default.object,isLargeDevice:i.default.bool.isRequired,shouldDisableSubmitButtonOnEmptyInput:i.default.bool},t.default=(0,m.connector)(b,{keysToPluck:["featureFlags"],keysToSpread:[C.photoBookmarkStateKey.LAST_BOOKMARKED_PHOTO]})},11660:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.drawerPosition=t.CREATE_COLLECTION_INPUT_NAME=t.CREATE_COLLECTION_FORM_NAME=void 0,t.CREATE_COLLECTION_FORM_NAME="createCollection",t.CREATE_COLLECTION_INPUT_NAME="collectionName",t.drawerPosition={RIGHT:"Right",BOTTOM:"Bottom"}},40416:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getCollections=void 0;const a=o(74139);t.getCollections=async({federatedGraphqlUrl:e,organizationId:t})=>{try{const o=await(0,a.getCollectionsWithoutBookmarks)({federatedGraphqlUrl:e,organizationId:t});return o?o.map((({id:e,collectionName:t,lastBookmark:o,totalBookmarkCount:a})=>({collectionId:e,collectionName:t,totalBookmarkCount:a,coverImage:o?{altText:o.content.altText||o.content.tout?.altText||`an image from collection ${t}`,sources:{lg:{url:"Photo"===o.documentType?o.content.bookMarkedUrl:o.content.tout?.url}}}:void 0}))):[]}catch(e){return console.error(e),[]}}},51285:(e,t,o)=>{e.exports=o(7105)},42775:(e,t,o)=>{const{default:a,createGlobalStyle:r}=o(75999),{BaseText:l}=o(76955),{calculateSpacing:n,getColorStyles:i,getTypographyStyles:s,minScreen:c,isInverted:d}=o(26865),u=o(88456),m=o(91180),{DrawerButton:p}=o(63967),h=o(74992),{SummaryItemHedBase:g}=o(36211),{SummaryItemMetadataPrimary:k,SummaryItemContent:C}=o(68116),{SummaryItemAssetContainer:f}=o(68116),{BREAKPOINTS:b}=o(96472),{SummaryItemImageLink:y}=o(14207),{CircleWrapper:w}=o(86286),{ButtonLabel:E}=o(18974),{ChannelNavigationWrapper:v,ChannelNavigationLinksWrapper:D}=o(63500),{SpanWrapper:B}=o(18117),_=r`
  html.html__drawer--open {
    overflow: unset;

    ${v} {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
    }

    ${D} {
      display: none;
    }
  }
`,T=a(h.SideBySideThirds).withConfig({displayName:"CollectionsDrawerSummaryItem"})`
  && {
    grid-template-columns: ${n(7)} 1fr;
    --grid-gap: ${n(2)};

    ${C}, ${C} * {
      margin: 0;
      padding: 0;
    }
  }

  ${f} {
    aspect-ratio: 2 / 3;

    ${y}, img, picture {
      height: 100%;
    }

    img {
      object-fit: cover;
    }
  }
`,S=a(T).withConfig({displayName:"CollectionsDrawerBookmarkItem"})`
  border-bottom: 1px solid;
  padding: 0 ${n(3)} ${n(2)};
  pointer-events: none;

  ${g} {
    ${({theme:e,isBookmarkDrawersEnabled:t})=>s(e,t?"typography.definitions.utility.label":"typography.definitions.utility.assistive-text")};
    ${({theme:e,isBookmarkDrawersEnabled:t})=>t&&i(e,"color","colors.interactive.base.brand-primary")};
  }
`,O=a.div.withConfig({displayName:"CollectionsDrawerScrollableArea"})`
  overflow-y: auto;
`,I=a.div.withConfig({displayName:"CollectionsDrawerHeadingWrapper"})`
  display: flex;
  padding: ${n(2)} ${n(3)};
`,M=a(l).withConfig({displayName:"CollectionsDrawerListHeading"})`
  flex: 1;
  text-align: start;
  ${s("typography.definitions.foundation.title-secondary")};
`,N=a(u.Utility).withConfig({displayName:"CollectionsDrawerNewCollectionButton"})`
  padding: 0;
  min-width: unset;
  height: unset;

  ${s("typography.definitions.foundation.link-secondary")};

  ${({theme:e,isBookmarkDrawersEnabled:t})=>t&&s(e,"typography.definitions.utility.label")};

  ${({theme:e,isBookmarkDrawersEnabled:t})=>t&&i(e,"color","colors.interactive.base.brand-primary")};

  ${E} {
    padding: 0;
  }
`,L=a.ul.withConfig({displayName:"CollectionsDrawerList"})`
  margin: 0;
  padding: 0;
  list-style: none;
`,A=a.li.withConfig({displayName:"CollectionsDrawerListItem"})`
  padding: ${n(1)} ${n(3)};
`,P=a(T).withConfig({displayName:"CollectionsDrawerCollectionItem"})`
  pointer-events: none;
`,R=a(m).withConfig({displayName:"CollectionsDrawerWrapper"})`
  display: flex;
  flex-direction: column;

  ${({theme:e,isBookmarkDrawersEnabled:t})=>i(e,"background-color",t?d(e)?"colors.discovery.body.dark.background":"colors.discovery.body.brand.background":d(e)?"colors.discovery.lead.primary.background":"colors.foundation.menu-bg.expanded")};

  &&& {
    padding-top: ${n(3)};
    width: ${({isLargeDevice:e})=>e?n(49):"100vw"};
    height: ${({isLargeDevice:e})=>e?"100vh":n(65)};

    ${({theme:e})=>d(e)&&i("background-color","colors.background.black")};

    * {
      ${({isBookmarkDrawersEnabled:e,theme:t})=>!e&&i(t,"color",d(t)?"colors.discovery.body.black.heading":"colors.discovery.body.light.heading")};
    }

    ${P} {
      ${g} {
        ${({isBookmarkDrawersEnabled:e})=>s(e?"typography.definitions.foundation.title-primary":"typography.definitions.discovery.hed-bulletin-primary")};
        ${({theme:e,isBookmarkDrawersEnabled:t})=>t&&i(e,"color",d(e)?"colors.interactive.base.white":"colors.interactive.base.black")};
      }
    }

    ${M} {
      ${({theme:e,isBookmarkDrawersEnabled:t})=>t&&i(e,"color",d(e)?"colors.interactive.base.white":"colors.interactive.base.black")};
    }

    ${p} {
      g,
      g:hover,
      g:focus {
        ${({theme:e})=>d(e)?i("stroke","colors.interactive.base.white"):i("stroke","colors.interactive.base.black")};
      }
    }

    ${w} {
      ${({theme:e})=>d(e)&&"path {\n          fill: #FFF;\n        }"}
    }

    ${T} {
      ${B} {
        ${({isBookmarkDrawersEnabled:e})=>e&&"\n            height: 100%;\n            "};
      }

      ${k} {
        ${({theme:e,isBookmarkDrawersEnabled:t})=>t&&s(e,"typography.definitions.foundation.meta-secondary")};

        ${({theme:e,isBookmarkDrawersEnabled:t})=>i(e,"color",t?d(e)?"colors.discovery.body.dark.syndication":"colors.discovery.body.light.syndication":d(e)?"colors.discovery.body.black.context-tertiary":"colors.discovery.body.light.context-tertiary")};
      }

      ${f} {
        ${({theme:e})=>d(e)?i("background-color","colors.interactive.base.deemphasized"):i("background-color","colors.interactive.base.light")};
      }
    }

    ${S} {
      ${({isBookmarkDrawersEnabled:e})=>e&&`\n          grid-template-columns: 5.2rem 1fr;\n          ${f} {\n            aspect-ratio: 1 / 1;\n          };\n          `}
      ${({theme:e})=>d(e)?i("border-bottom-color","colors.discovery.body.dark.divider"):i("border-bottom-color","colors.discovery.body.white.divider")};
    }

    ${c(b.md)} {
      ${A}:hover {
        ${({theme:e})=>d(e)?i("background-color","colors.interactive.base.brand-secondary"):i("background-color","colors.interactive.base.hover")};
      }
    }
  }
`;e.exports={CollectionsDrawerBookmarkItem:S,CollectionsDrawerCollectionItem:P,CollectionsDrawerGlobalStyles:_,CollectionsDrawerHeadingWrapper:I,CollectionsDrawerList:L,CollectionsDrawerListHeading:M,CollectionsDrawerListItem:A,CollectionsDrawerNewCollectionButton:N,CollectionsDrawerScrollableArea:O,CollectionsDrawerWrapper:R}},60880:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.trackCreateCollectionDrawerOpenFromBanner=t.trackCreateCollectionDrawerOpen=t.trackCreateCollectionDrawerClose=t.trackCreateCollectionDrawerSave=t.trackDrawerSelectCollection=t.trackDrawerClose=t.trackDrawerLinkClick=void 0;const{trackSaveEvent:a}=o(14307),r="board",l="board_create",n="click",i="close",s=(e,t,o={})=>a({subject:e,type:t,...o});t.trackDrawerLinkClick=e=>s(r,n,{label:e}),t.trackDrawerClose=()=>s(r,i),t.trackDrawerSelectCollection=e=>s(r,"select",{label:e}),t.trackCreateCollectionDrawerSave=()=>{s(l,"save")},t.trackCreateCollectionDrawerClose=()=>{s(l,i)},t.trackCreateCollectionDrawerOpen=e=>{s(l,"create",{label:e})},t.trackCreateCollectionDrawerOpenFromBanner=e=>{s(l,n,{label:e})}},43393:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});const a=o(37243);t.default=(0,a.defineMessages)({bookmarkCountType:{id:"CollectionsDrawer.bookmarkCountType",defaultMessage:"{count, plural, one {# image} other {# images}}",description:"The bookmark count for a collection"},bookmarkSavedText:{id:"CollectionsDrawer.bookmarkSavedText",defaultMessage:"Image saved",description:"Bookmark saved alert text"},collectionsListHeading:{id:"CollectionsDrawer.collectionsListHeading",defaultMessage:"Choose A Board",description:"Collections drawer list heading"},collectionsNewCollectionButtonLabel:{id:"CollectionsDrawer.collectionsNewCollectionButtonLabel",defaultMessage:"New Board",description:"Label to create a new collection"},createCollectionDuplicateNameError:{id:"CollectionsDrawer.createCollectionDuplicateNameError",defaultMessage:"You have already used this name",description:"Error message when a duplicate collection name is entered"},createCollectionNotMadeError:{id:"CollectionsDrawer.createCollectionNotMadeError",defaultMessage:"Collection not made, please try again",description:"Generic error message when a collection can not be made"},createCollectionValueMissingError:{id:"CreateCollectionDrawer.createCollectionValueMissingError",defaultMessage:"Please enter a collection name",description:"Error message when a collection name is not entered"},createCollectionHeading:{id:"CreateCollectionDrawer.createCollectionHeading",defaultMessage:"Create A Board",description:"Create collection form heading"},createCollectionInputLabel:{id:"CreateCollectionDrawer.createCollectionInputLabel",defaultMessage:"Board Name",description:"Create collection text input label"},createCollectionNoTextError:{id:"CreateCollectionDrawer.createCollectionNoTextError",defaultMessage:"Please enter some text",description:"Error message when a collection name only has spaces"},createCollectionPlaceholderText:{id:"CreateCollectionDrawer.createCollectionPlaceholderText",defaultMessage:"Example: “monochrome” or “fall inspo”",description:"Create collection placeholder text"},createCollectionResetButtonLabel:{id:"CreateCollectionDrawer.createCollectionResetButtonLabel",defaultMessage:"Reset Board Name",description:"Reset button label"},createCollectionSubmitButtonLabel:{id:"CreateCollectionDrawer.createCollectionSubmitButtonLabel",defaultMessage:"Create",description:"Create collection button label"}})},91637:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useCollections=void 0;const a=o(96540),r=o(40416);t.useCollections=({makeCall:e,federatedGraphqlUrl:t,organizationId:o})=>{const[l,n]=(0,a.useState)([]);return(0,a.useEffect)((()=>{e&&(async()=>{try{const e=await(0,r.getCollections)({federatedGraphqlUrl:t,organizationId:o});n(e)}catch(e){console.error("Please try again after some time.",e)}})()}),[e,t,o]),[l]}},65262:function(e,t,o){var a=this&&this.__createBinding||(Object.create?function(e,t,o,a){void 0===a&&(a=o);var r=Object.getOwnPropertyDescriptor(t,o);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,a,r)}:function(e,t,o,a){void 0===a&&(a=o),e[a]=t[o]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&a(t,e,o);return r(t,e),t},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DrawerWithForm=void 0;const i=n(o(5556)),s=l(o(96540)),c=n(o(98653)),d=o(89662),u=n(o(76399)),m=n(o(88456)),p=o(39207),h=n(o(72983)),g=e=>{const t=({className:t})=>s.default.createElement(m.default,{label:e,btnStyle:"text",ButtonIcon:u.default,className:t,inputKind:"reset",isIconButton:!0,size:"small"});return t.propTypes={className:i.default.string},t};t.DrawerWithForm=({customInvalidityMessages:e,errorText:t,hedText:o,formName:a,hideChannelNavigation:r=!0,inputLabel:l,inputName:n,inputPlaceholder:i,isOpen:u,isRequired:m,onClose:k,onInput:C,onReset:f,onSubmit:b,position:y="Bottom",resetButtonLabel:w,shouldDisableSubmitButtonOnEmptyInput:E,shouldHideValidationErrorText:v,submitButtonLabel:D,isBookmarkDrawersEnabled:B=!1})=>{const[_,T]=(0,s.useState)(""),S=c.default[y];return s.default.createElement(p.DrawerWithFormWrapper,{as:S,position:y,hideChannelNavigation:r,isOpen:u,onClose:k,showCloseButton:!0,isBookmarkDrawersEnabled:B},s.default.createElement(p.DrawerWithFormHed,null,o),s.default.createElement(h.default,{customInvalidityMessages:e,name:a,onSubmitHandler:()=>b(_),onResetHandler:()=>{f?.(),T("")},shouldHideValidationErrorText:v},s.default.createElement(d.SingleLine,{formName:a,errorText:t,label:l,name:n,onInputChange:(e,t)=>{T(t),C?.()},placeholder:i,isRequired:m,TrailingIcon:_?g(w):null}),s.default.createElement(p.DrawerWithFormSubmitButton,{label:D,inputKind:"submit",isDisabled:E&&!_.length})))},t.DrawerWithForm.propTypes={customInvalidityMessages:i.default.object,errorText:i.default.string,formName:i.default.string,hedText:i.default.string,hideChannelNavigation:i.default.bool,inputLabel:i.default.string,inputName:i.default.string,inputPlaceholder:i.default.string,isBookmarkDrawersEnabled:i.default.bool,isOpen:i.default.bool,isRequired:i.default.bool,onClose:i.default.func,onInput:i.default.func,onReset:i.default.func,onSubmit:i.default.func,position:i.default.oneOf(Object.keys(c.default)),resetButtonLabel:i.default.string,shouldDisableSubmitButtonOnEmptyInput:i.default.bool,shouldHideValidationErrorText:i.default.bool,submitButtonLabel:i.default.string}},48165:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DrawerWithForm=void 0;var a=o(65262);Object.defineProperty(t,"DrawerWithForm",{enumerable:!0,get:function(){return a.DrawerWithForm}})},39207:function(e,t,o){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DrawerWithFormWrapper=t.DrawerWithFormSubmitButton=t.DrawerWithFormHed=void 0;const r=a(o(75999)),l=a(o(91180)),n=o(76955),i=a(o(88456)),s=o(26865),c=o(60434),d=o(63967);t.DrawerWithFormHed=(0,r.default)(n.BaseText).withConfig({displayName:"DrawerWithFormHed"})`
  display: flex;
  justify-content: center;
  padding-bottom: ${(0,s.calculateSpacing)(3)};

  ${(0,s.getTypographyStyles)("typography.definitions.foundation.title-secondary")};
`,t.DrawerWithFormSubmitButton=(0,r.default)(i.default.Utility).withConfig({displayName:"DrawerWithFormSubmitButton"})`
  && {
    border: none;
    width: 100%;
  }
`,t.DrawerWithFormWrapper=(0,r.default)(l.default).withConfig({displayName:"DrawerWithFormWrapper"})`
  ${({theme:e,isBookmarkDrawersEnabled:t})=>t?(0,s.getColorStyles)(e,"background-color",(0,s.isInverted)(e)?"colors.discovery.body.dark.background":"colors.discovery.body.brand.background"):(0,s.getColorStyles)(e,"background-color",(0,s.isInverted)(e)?"colors.discovery.lead.primary.background":"colors.foundation.menu-bg.expanded")};

  &&& {
    padding: ${(0,s.calculateSpacing)(3)};
    width: ${({position:e})=>"Right"===e&&(0,s.calculateSpacing)(49)};
    height: ${({position:e})=>"Bottom"!==e&&"100vh"};

    ${({theme:e})=>(0,s.isInverted)(e)&&(0,s.getColorStyles)("background-color","colors.background.black")};

    ${d.DrawerButton}, ${c.TextFieldIcon} {
      border: none;
      background-color: transparent;

      g,
      g:hover,
      g:focus {
        ${({theme:e})=>(0,s.isInverted)(e)?(0,s.getColorStyles)("stroke","colors.interactive.base.white"):(0,s.getColorStyles)("stroke","colors.interactive.base.black")};
      }

      .icon-close {
        padding: ${(0,s.calculateSpacing)(.75)};
      }
    }
  }

  ${t.DrawerWithFormHed} {
    ${({theme:e})=>(0,s.isInverted)(e)?(0,s.getColorStyles)("color","colors.interactive.base.white"):(0,s.getColorStyles)("color","colors.interactive.base.black")};
  }

  ${c.TextFieldWrapper} {
    margin: 0;
    padding-bottom: ${(0,s.calculateSpacing)(3)};
  }

  ${c.TextFieldLabelText} {
    ${({theme:e})=>(0,s.isInverted)(e)?(0,s.getColorStyles)("color","colors.interactive.base.light"):(0,s.getColorStyles)("color","colors.interactive.base.dark")};
  }

  ${c.TextFieldInputContainer} input {
    border: 1px solid;
    background-color: transparent;

    ${({theme:e})=>(0,s.isInverted)(e)?(0,s.getColorStyles)("border-color","colors.interactive.base.light"):(0,s.getColorStyles)("border-color","colors.interactive.base.dark")};

    ${({theme:e})=>(0,s.isInverted)(e)?(0,s.getColorStyles)("color","colors.interactive.base.white"):(0,s.getColorStyles)("color","colors.interactive.base.black")};
  }

  ${t.DrawerWithFormSubmitButton} {
    &[aria-disabled='false'] {
      ${({theme:e})=>(0,s.isInverted)(e)?(0,s.getColorStyles)("background-color","colors.interactive.base.white"):(0,s.getColorStyles)("background-color","colors.interactive.base.black")};
      ${({theme:e})=>(0,s.isInverted)(e)?(0,s.getColorStyles)("color","colors.interactive.base.black"):(0,s.getColorStyles)("color","colors.interactive.base.white")};
    }
  }
`},74606:(e,t,o)=>{const a=o(5556),r=o(96540),{useState:l,useEffect:n}=o(96540),{connect:i}=o(67851),{BookmarkNew:s}=o(97504),{PhotoBookmarkMessageBannerWrapper:c,PhotoBookmarkMessageBannerMessage:d,PhotoMessageBannerContent:u,PhotoMessageBannerIcon:m}=o(62389),p=({channel:e,message:t,showPhotoBookmarkMessageBanner:o=!0,title:a})=>{const[i,p]=l(!1);return n((()=>{const t=`photoBookmarkBannerShownOn${e}`;window.localStorage.getItem(t)||!o?p(!1):(p(!0),window.localStorage.setItem(t,!0))}),[e,o]),i&&r.createElement(c,{shouldShowCloseButton:!0},r.createElement(u,null,r.createElement(m,{as:s,title:a}),r.createElement(d,null,t)))};p.propTypes={channel:a.string,message:a.string,showPhotoBookmarkMessageBanner:a.bool,title:a.string},p.displayName="PhotoBookmarkMessageBanner",e.exports=i((e=>{const{showPhotoBookmarkMessageBanner:t}=e;return{showPhotoBookmarkMessageBanner:t}}))(p,"PhotoBookmarkMessageBanner")},79822:(e,t,o)=>{const a=o(5556),r=o(96540),{useEffect:l}=o(96540),{connect:n}=o(67851),{useIntl:i}=o(37243),s=o(77463).default,{PhotoBookmarkMessageBannerWrapper:c,SaveBookmarkAlertButton:d,SaveBookmarkAlertLabel:u,SaveBookmarkAlertLink:m,SaveBookmarkAlertContent:p}=o(62389),h=o(86157),{photoBookmarkDispatchActions:g}=o(86902),{trackDrawerLinkClick:k,trackCreateCollectionDrawerOpenFromBanner:C}=o(60880),{usePhotoBookmarkingContext:f}=o(50624),b=({setLastBookmarkedPhoto:e,image:t,copilotID:o,contentType:a})=>{const{formatMessage:n}=i(),{openCreateCollectionDrawer:g,hasCollections:b,saveAlertMessage:{linkMessage:y,textMessage:w}}=f(),E=t||"photo"!==a&&o;if(l((()=>{let t;return E&&(t=setTimeout((()=>{e()}),5e3)),()=>{t&&clearTimeout(t)}}),[e,E]),!E)return null;const v=y||n(s.SaveBookmarkAlertLink);return r.createElement(c,null,r.createElement(p,null,t&&r.createElement(h,{...t}),r.createElement(u,{htmlFor:"message-banner"},w||n(s.SaveBookmarkAlertText)),b?r.createElement(m,{href:"/account/saved/images",onClick:()=>k(v)},v):r.createElement(d,{label:v,onClickHandler:()=>{g(),C(y)},btnStyle:"text"})))};b.propTypes={contentType:a.string,copilotID:a.string,image:a.shape(h.propTypes),setLastBookmarkedPhoto:a.func},b.displayName="PhotoBookmarkSaveAlert",e.exports=n((e=>{const{lastBookmarkedPhoto:{copilotID:t,image:o,contentType:a}={}}=e;return{copilotID:t,image:o,contentType:a}}),(e=>{const{setLastBookmarkedPhoto:t}=g(e);return{setLastBookmarkedPhoto:t}}))(b)},13483:function(e,t,o){var a=this&&this.__createBinding||(Object.create?function(e,t,o,a){void 0===a&&(a=o);var r=Object.getOwnPropertyDescriptor(t,o);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,a,r)}:function(e,t,o,a){void 0===a&&(a=o),e[a]=t[o]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&a(t,e,o);return r(t,e),t},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.PhotoBookmarking=void 0;const i=n(o(5556)),s=l(o(96540)),c=o(37243),d=n(o(79822)),u=n(o(51285)),m=n(o(74606)),p=o(96472),h=o(55030),g=n(o(77463)),k=n(o(71648)),C=o(42775),f=o(50624),b=o(39403),y=n(o(49235)),w={Runway:{mobileMessage:g.default.RunwayMobileMessageBannerText,desktopMessage:g.default.RunwayDesktopMessageBannerText},StreetStyle:{mobileMessage:g.default.GalleryMobileMessageBannerText,desktopMessage:g.default.GalleryDesktopMessageBannerText},Default:{mobileMessage:g.default.DefaultMobileMessageBannerText,desktopMessage:g.default.DefaultDesktopMessageBannerText}},E=()=>!!p.CAN_USE_DOM&&window.matchMedia(`(min-width: ${p.BREAKPOINTS.md})`).matches;t.PhotoBookmarking=({channel:e,theme:t="standard"})=>{const{formatMessage:o}=(0,c.useIntl)(),[a,r]=(0,s.useState)(E()),{showComponent:l}=(0,f.usePhotoBookmarkingContext)(),n=l===b.showComponentType.SAVE_ALERT,i=l===b.showComponentType.COLLECTIONS_DRAWER;(0,h.useResizeObserver)((()=>r(E())));const p=(({isLargeDevice:e,channel:t})=>{const{mobileMessage:o,desktopMessage:a}=w[t]||{};return e?a:o})({isLargeDevice:a,channel:e});return s.default.createElement(y.default,{palette:t},n&&s.default.createElement(d.default,null),s.default.createElement(u.default,{isLargeDevice:a,isOpen:i}),s.default.createElement(k.default,{isLargeDevice:a}),s.default.createElement(C.CollectionsDrawerGlobalStyles,null),p&&s.default.createElement(m.default,{channel:e,message:o(p),title:o(g.default.photoBookmarkSaveIconTitle)}))},t.PhotoBookmarking.propTypes={channel:i.default.oneOf(Object.keys(w)),theme:i.default.oneOf(["inverted","standard"])}},56602:function(e,t,o){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(o(96540)),l=a(o(5556)),n=o(50624),i=o(40667),s=o(13483),c=o(57744),d=({children:e,channel:t,federatedGraphqlUrl:o,isPhotoBookmarkingEnabled:a=!1,site:{orgId:l},theme:c})=>{const{actions:d,state:u}=(0,i.usePhotoBookmarkingState)(),[m,p]=(0,i.useHasCollections)({federatedGraphqlUrl:o,organizationId:l});if(!a)return e;const h={...d,...u,setHasCollections:p,hasCollections:m,federatedGraphqlUrl:o,organizationId:l};return r.default.createElement(n.PhotoBookmarkingContext.Provider,{value:h},r.default.createElement(s.PhotoBookmarking,{channel:t,theme:c}),e)};d.propTypes={channel:l.default.string,children:l.default.node,federatedGraphqlUrl:l.default.string,isPhotoBookmarkingEnabled:l.default.bool,site:l.default.shape({orgId:l.default.string}),theme:l.default.oneOf(["inverted","standard"])},t.default=(0,c.connector)(d,{keysToSpread:["userPlatform","coreDataLayer"]})},47242:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getDispatchActions=t.photoBookmarkActionType=void 0,t.photoBookmarkActionType={CLOSE_ALL:"closeAll",OPEN_COLLECTIONS_DRAWER:"openCollectionsDrawer",OPEN_CREATE_COLLECTION_DRAWER:"openCreateCollectionDrawer",OPEN_SAVE_ALERT:"openSaveAlert",OPEN_SAVE_ALERT_BOARD_NAME:"openSaveAlertWithBoardName"},t.getDispatchActions=function(e){return{openCollectionsDrawer:()=>e({type:t.photoBookmarkActionType.OPEN_COLLECTIONS_DRAWER}),closeAll:()=>{e({type:t.photoBookmarkActionType.CLOSE_ALL})},openCreateCollectionDrawer:()=>e({type:t.photoBookmarkActionType.OPEN_CREATE_COLLECTION_DRAWER}),openSaveAlert:()=>e({type:t.photoBookmarkActionType.OPEN_SAVE_ALERT}),openSaveAlertWithBoardName:({collectionName:o})=>{e({type:t.photoBookmarkActionType.OPEN_SAVE_ALERT_BOARD_NAME,name:o})}}}},40667:function(e,t,o){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useHasCollections=t.usePhotoBookmarkingState=void 0;const r=o(96540),l=o(37243),n=o(74139),i=a(o(77463)),s=o(39403),c=o(47242);t.usePhotoBookmarkingState=()=>{const{formatMessage:e}=(0,l.useIntl)(),t={showComponent:s.showComponentType.NONE,saveAlertMessage:{linkMessage:e(i.default.SaveBookmarkAlertLink),textMessage:e(i.default.SaveBookmarkAlertText)}},[o,a]=(0,r.useReducer)(((t,o)=>(0,s.reducer)(t,o,e)),t);return{actions:(0,c.getDispatchActions)(a),state:o}},t.useHasCollections=({federatedGraphqlUrl:e,organizationId:t})=>{const[o,a]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{(async()=>{const o=await(0,n.getCollectionCount)({federatedGraphqlUrl:e,organizationId:t});a(o>0)})()}),[e,t]),[o,a]}},39403:function(e,t,o){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.reducer=t.showComponentType=void 0;const r=o(47242),l=a(o(77463));t.showComponentType={COLLECTIONS_DRAWER:"CollectionsDrawer",CREATE_COLLECTION_DRAWER:"CreateCollectionDrawer",NONE:"none",SAVE_ALERT:"PhotoBookmarkSaveAlert"},t.reducer=(e,o,a)=>{switch(o.type){case r.photoBookmarkActionType.CLOSE_ALL:return{...e,showComponent:t.showComponentType.NONE};case r.photoBookmarkActionType.OPEN_COLLECTIONS_DRAWER:return{...e,showComponent:t.showComponentType.COLLECTIONS_DRAWER};case r.photoBookmarkActionType.OPEN_CREATE_COLLECTION_DRAWER:return{...e,showComponent:t.showComponentType.CREATE_COLLECTION_DRAWER};case r.photoBookmarkActionType.OPEN_SAVE_ALERT:return{...e,saveAlertMessage:{linkMessage:a(l.default.SaveBookmarkAlertLink),textMessage:a(l.default.SaveBookmarkAlertText)},showComponent:t.showComponentType.SAVE_ALERT};case r.photoBookmarkActionType.OPEN_SAVE_ALERT_BOARD_NAME:return{...e,saveAlertMessage:{linkMessage:a(l.default.SaveAlertSavedToBoardMessage),textMessage:`${a(l.default.SaveAlertWithBoardName)} ${o.name}`},showComponent:t.showComponentType.SAVE_ALERT};default:return e}}}}]);