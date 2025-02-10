(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[8230],{47454:(e,t,n)=>{const r=n(5556),a=n(96540),{asConfiguredComponent:i}=n(12892),o=n(76399),{CategoryFilterItemButton:l,CategoryFilterItemText:s,CategoryFilterItemWapper:d}=n(20009),{trackComponent:c}=n(92716),{interactionResponse:p}=n(56187),u=({dangerousText:e,Icon:t=o,onClickHandler:n,theme:r="standard"})=>{const i="inverted"===r;return a.useEffect((()=>{(async()=>{await p(),c("CategoryFilterItem")})()}),[]),a.createElement(d,{className:"item-wrapper"},a.createElement(l,{onClick:n,isInverted:i,"aria-label":"action button"},a.createElement(t,null)),a.createElement(s,{isInverted:i,dangerouslySetInnerHTML:{__html:e}}))};u.propTypes={dangerousText:r.string.isRequired,Icon:r.func,onClickHandler:r.func,theme:r.oneOf(["standard","inverted"])},u.displayName="CategoryFilterItem",e.exports=i(u,"CategoryFilterItem")},2196:(e,t,n)=>{e.exports=n(47454)},20009:(e,t,n)=>{const r=n(75999).default,{BaseText:a}=n(76955),{getColorToken:i,calculateSpacing:o,getTypographyStyles:l}=n(26865),s=r.div.withConfig({displayName:"CategoryFilterItemWapper"})`
  display: flex;
  flex-shrink: 0;
  padding: 0;
`,d=r.button.withConfig({displayName:"CategoryFilterItemButton"})`
  ${"\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"}
  margin-right: ${o(2)};
  outline: none;
  border: 1px solid ${i("colors.interactive.base.black")};
  border-radius: 50%;
  background: #fff;
  background-color: ${({isInverted:e,theme:t})=>i(t,e?"colors.consumption.lead.inverted.heading":"colors.consumption.lead.standard.heading")};
  padding: 0;
  width: 17px;
  height: 17px;

  .icon-close {
    padding: 4px;

    path {
      stroke: ${({isInverted:e,theme:t})=>i(t,e?"colors.interactive.base.black":"colors.interactive.base.white")};
    }
  }

  svg {
    fill: ${({isInverted:e,theme:t})=>i(t,e?"colors.interactive.base.black":"colors.interactive.base.white")};
  }

  &:hover {
    text-decoration: none;
  }
`,c=r(a).withConfig({displayName:"CategoryFilterItemText"})`
  ${({theme:e})=>l(e,"typography.definitions.utility.input-core")};

  color: ${({isInverted:e,theme:t})=>i(t,e?"colors.consumption.lead.inverted.heading":"colors.consumption.lead.standard.heading")};
`;e.exports={CategoryFilterItemButton:d,CategoryFilterItemText:c,CategoryFilterItemWapper:s}},52213:(e,t,n)=>{const r=n(5556),a=n(96540),{useState:i,useEffect:o,useImperativeHandle:l}=n(96540),{asConfiguredComponent:s}=n(12892),{asThemedComponent:d}=n(20223),{connector:c}=n(57744),{trackComponent:p}=n(92716),{interactionResponse:u}=n(56187),{FilterWrapper:m,ButtonUtilityInvertedWrapper:g,TriangleUpIconWrapper:h,ButtonUtilityWrapper:v,InvertedTriangleDownIconWrapper:f,WrapSelectedTokens:b}=n(16272),y=n(73730),{BaseWrap:x}=n(76955),C=n(86659),w=n(82652),k=n(26194),I=n(63756),N=({channelTree:e,storyCount:t,onFilterSaveCallback:n,saveButtonText:r,filterRef:s,variationName:d,hasEnableIcon:c=!1,hideStoryCount:N=!1,isGridLayout:S=!0,variations:T={isInverted:!1}})=>{a.useEffect((()=>{(async()=>{await u(),p("ChannelFilter",d)})()}),[d]);const[F,$]=i(!1),[W,E]=i({}),[B,O]=i(JSON.parse(JSON.stringify(e))),[D,A]=i([]),[M,R]=i([]),[U,_]=i(!1),[H,P]=i(!1),z=S?C.WithMargins:x;o((()=>{const e=new URLSearchParams(window.location.search);(e.get("q")||e.get("filter"))&&P(!0);const t=B?[...B]:[],n=[];t.forEach((e=>{let t=0;e.sub.forEach((e=>{e.selected&&(n.push(e),t++)})),e.text=t>0?`${e.originalText} (${t})`:e.originalText})),R(n),O(t)}),[]),l(s,(()=>({resetSelectedSubFilters:()=>{A([]),R([]),O((e=>e.map((e=>({...e,text:e.originalText,sub:e.sub.map((e=>({...e,selected:!1})))})))))}})));const L={filterData:B,finalSelectedSubFilters:M,isDirty:U,isGridLayout:S,overlayData:W,selectedSubFilters:D,setFilterData:O,setFinalSelectedSubFilters:R,onFilterSaveCallback:n,setIsDirty:_,setIsOverlayVisible:$,setSelectedSubFilters:A,variations:T,saveButtonText:r},G={filterData:B,finalSelectedSubFilters:M,setFilterData:O,setFinalSelectedSubFilters:R,onFilterSaveCallback:n,storyCount:t,hideStoryCount:N,variations:T};return a.createElement(z,{className:"channelfilter-wrapper"},a.createElement(m,null,B.map((e=>{const{ButtonComponent:t,ButtonWrapper:n,IconWrapper:r}={ButtonComponent:(i=e.text===e.originalText)?y.Utility:y.UtilityInverted,ButtonWrapper:i?v:g,IconWrapper:i?f:h};var i;return a.createElement(n,{key:e.id,isInverted:T.isInverted,className:"button-wrapper"},a.createElement(t,{id:e.id,label:e.text,title:e.text,iconPosition:"after",hasDarkBackground:!0,hasEnableIcon:c,onClickHandler:()=>{const t=e.sub.filter((e=>e.selected));A(t),$(!0),E(e)},ButtonIcon:()=>a.createElement(r,{isInverted:T.isInverted},a.createElement(w,null))}))})),F&&a.createElement(k,{...L})),a.createElement(b,null,H&&a.createElement(I,{...G})))};N.propTypes={channelTree:r.arrayOf(r.shape({id:r.string,text:r.string,originalText:r.string,sub:r.arrayOf(r.shape({id:r.string,text:r.string,selected:r.boolean,hierarchyString:r.string}))})),filterRef:r.shape({current:r.object}),hasEnableIcon:r.bool,hideStoryCount:r.bool,isGridLayout:r.bool,onFilterSaveCallback:r.func,saveButtonText:r.string,storyCount:r.number,variationName:r.string,variations:r.shape({isInverted:r.bool})},N.displayName="ChannelFilter",e.exports=c(d(s(N,"ChannelFilter")),{keysToPluck:["channelTree"]})},63756:(e,t,n)=>{const r=n(5556),a=n(96540),{useIntl:i}=n(37243),o=n(818).A,{SearchTokensContainer:l,SearchTokensInfoCount:s,SearchTokensinfoClearAllButton:d,SearchTokensInfoWapper:c,TokenWrapper:p}=n(16272),u=n(2196),{getUrlWithUpdatedFilters:m}=n(87098),g=({filterData:e,finalSelectedSubFilters:t,setFilterData:n,setFinalSelectedSubFilters:r,onFilterSaveCallback:g,storyCount:h,hideStoryCount:v,variations:f})=>{const{formatMessage:b}=i();return a.createElement(l,{isInverted:f.isInverted,className:"info-container"},a.createElement(c,{className:"info-wapper"},!v&&a.createElement(s,{isInverted:f.isInverted,className:"story-count"},b(o.storyCountText,{storyCount:h})),a.createElement(d,{isInverted:f.isInverted,onClick:()=>(()=>{const e=`${window.location.origin}${window.location.pathname}`;window.location=`${e}`})(),className:"clear-all-selected-filter"},b(o.clearAllFiltersText))),t.map((i=>a.createElement(p,{key:i.id,isInverted:f.isInverted,className:"selected-filter-token"},a.createElement(u,{onClickHandler:()=>(a=>{const i=[...e],o=(()=>{for(const e of i)for(const t of e.sub)if(t.id===a.id)return e;return{}})();let l=0;o.sub.forEach((e=>{a.id===e.id&&(e.selected=!1),e.selected&&l++})),o.text=0!==l?`${o.originalText} (${l})`:o.originalText;const s=t.filter((e=>e.id!==a.id));if(n(i),r(s),g)g(s);else{const{location:e}=window,t=m({filters:s,location:e});window.location=t}})(i),dangerousText:i.text,theme:f.isInverted?"inverted":"standard"})))))};g.propTypes={filterData:r.arrayOf(r.shape({id:r.string,text:r.string,originalText:r.string,sub:r.arrayOf(r.shape({id:r.string,text:r.string,selected:r.boolean,hierarchyString:r.string}))})),finalSelectedSubFilters:r.arrayOf(r.shape({id:r.string,text:r.string,selected:r.boolean,hierarchyString:r.string})),hideStoryCount:r.bool,onFilterSaveCallback:r.func,setFilterData:r.func,setFinalSelectedSubFilters:r.func,storyCount:r.number,variations:r.shape({isInverted:r.bool})},g.displayName="FilterInfo",e.exports=g},26194:(e,t,n)=>{const r=n(5556),a=n(96540),{useRef:i}=n(96540),{useIntl:o}=n(37243),{googleAnalytics:l}=n(90090),s=n(818).A,{ModalWrapper:d,OverlayWrapper:c,ModalDialogWrapper:p,HeaderTextWrapper:u,FilterOptionTextWrapper:m,FlexContainer:g,MobileFooterWrapper:h,HeaderButtonsWrapper:v,SaveButtonWrapper:f,FilterOptionsWrapper:b,HeaderWrapper:y,CloseIconWrapper:x,ClearAllTextWrapper:C,FilterOptionTokenWrapper:w}=n(16272),{BaseWrap:k}=n(76955),I=n(76399),N=n(76196),S=n(2196),{getUrlWithUpdatedFilters:T,useOutsideClick:F}=n(87098),$=({filterData:e,finalSelectedSubFilters:t,isDirty:n,isGridLayout:r,overlayData:$,selectedSubFilters:W,setFilterData:E,setFinalSelectedSubFilters:B,onFilterSaveCallback:O,setIsDirty:D,setIsOverlayVisible:A,setSelectedSubFilters:M,variations:R,saveButtonText:U})=>{const{formatMessage:_}=o(),H=i(null);F(H,A);const P=r?c:k,z=e=>{W.includes(e)?M(W.filter((t=>t!==e))):M([...W,e]),D(!0)};return a.createElement(d,{className:"modal-wrapper"},a.createElement(P,{className:"channelfilter-wrapper"},a.createElement(p,{isInverted:R.isInverted,ref:H},a.createElement(y,null,a.createElement(u,{isInverted:R.isInverted},`${_(s.filterPreamble)} ${$.text}`),a.createElement(x,{isInverted:R.isInverted,onClick:()=>{A(!1),D(!1),M([])}},a.createElement(I,null)),a.createElement(h,null,a.createElement(v,{isInverted:R.isInverted},a.createElement(C,{isInverted:R.isInverted,onClick:()=>(()=>{const e=W.filter((e=>{for(const t of $.sub)if(t.id===e.id)return!1;return!0}));M(e),D(!0)})(),className:"clear-all-filter"},_(s.clearAllText)),a.createElement(f,{id:"channel-filter-save",label:U||_(s.saveButtonText),title:_(s.saveButtonText),onClickHandler:()=>(()=>{const n=[...e];n.forEach((e=>{if(e.id===$.id){let t=0;e.sub.forEach((e=>{e.selected=!1,W.forEach((n=>{e.id===n.id&&(e.selected=!0,t++)}))})),e.text=0!==t?`${e.originalText} (${t})`:e.originalText}}));const r=[...t.filter((e=>{for(const t of $.sub)if(e.id===t.id)return!1;return!0})),...W];if((e=>{const t=W.map((e=>e.text)),n=`${$.originalText}: ${t.join(" | ")}`;l.emitGoogleTrackingEvent("channelfilter click-tracking",{"ai-hub-filter":n})})(),B(r),E(n),D(!1),M([]),A(!1),t.length>0||r.length>0)if(O)O(r);else{const{location:e}=window,t=T({filters:r,location:e});window.location=t}})(),isInverted:R.isInverted,className:"save-filter"})))),a.createElement(b,null,a.createElement(g,null,$.sub.map((e=>{const r=n?W:t;for(const t of r)if(e.id===t.id)return a.createElement(w,{key:e.id,isInverted:R.isInverted,onClick:()=>z(e),className:"token-wrapper"},a.createElement(S,{dangerousText:e.text,theme:R.isInverted?"standard":"inverted",Icon:N}));return a.createElement(m,{key:e.id,onClick:()=>z(e),className:"text-wrapper"},e.text)})))))))};$.propTypes={filterData:r.arrayOf(r.shape({id:r.string,text:r.string,originalText:r.string,sub:r.arrayOf(r.shape({id:r.string,text:r.string,selected:r.boolean,hierarchyString:r.string}))})),finalSelectedSubFilters:r.arrayOf(r.shape({id:r.string,text:r.string,selected:r.boolean,hierarchyString:r.string})),isDirty:r.bool,isGridLayout:r.bool,onFilterSaveCallback:r.func,overlayData:r.shape({id:r.string,text:r.string,originalText:r.string,sub:r.arrayOf(r.shape({id:r.string,text:r.string,selected:r.boolean,hierarchyString:r.string}))}),saveButtonText:r.string,selectedSubFilters:r.arrayOf(r.shape({id:r.string,text:r.string,selected:r.boolean,hierarchyString:r.string})),setFilterData:r.func,setFinalSelectedSubFilters:r.func,setIsDirty:r.func,setIsOverlayVisible:r.func,setSelectedSubFilters:r.func,variations:r.shape({isInverted:r.bool})},$.displayName="FilterOverlay",e.exports=$},9396:(e,t,n)=>{const r=n(67240);e.exports=r},16272:(e,t,n)=>{const r=n(75999).default,{BaseText:a}=n(76955),{BREAKPOINTS:i}=n(96472),o=n(86659),l=n(73730),{getColorToken:s,calculateSpacing:d,getTypographyStyles:c}=n(26865),p=r.div.withConfig({displayName:"FilterWrapper"})`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 0;
  padding: 15px 0 15px 0;
`,u=r.div.withConfig({displayName:"ButtonUtilityInvertedWrapper"})`
  padding: 0 20px 20px 0;

  .button {
    border-color: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.lead.inverted.heading":"colors.consumption.lead.inverted.background")};
    text-transform: capitalize;

    ${({theme:e})=>c(e,"typography.definitions.consumptionEditorial.subhed-aux-secondary")};

    &:hover,
    &:focus {
      background-color: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.lead.inverted.heading":"colors.consumption.lead.inverted.background")};
      color: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.lead.inverted.background":"colors.consumption.lead.inverted.heading")};
    }
  }
`,m=r(u).withConfig({displayName:"ButtonUtilityWrapper"})`
  .button {
    border-color: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.lead.inverted.heading":"colors.consumption.lead.inverted.background")};

    &:hover,
    &:focus {
      border-color: ${({isInverted:e,theme:t})=>e&&s(t,"colors.consumption.lead.inverted.heading")};
      background-color: ${({isInverted:e,theme:t})=>s(t,"colors.consumption.lead.inverted.background")};
      color: ${({theme:e})=>s(e,"colors.consumption.lead.inverted.heading")};
    }
  }
`,g=r.div.withConfig({displayName:"TriangleUpIconWrapper"})`
  height: 14px;

  .icon {
    width: 15px;
    height: 15px;
    stroke-width: 3;
  }
`,h=r.div.withConfig({displayName:"InvertedTriangleDownIconWrapper"})`
  height: 14px;

  .icon {
    width: 15px;
    height: 15px;
    stroke-width: 3;

    polyline {
      stroke: ${({theme:e})=>s(e,"colors.consumption.lead.inverted.heading")};
    }
  }
`,v=r.div.withConfig({displayName:"ModalWrapper"})`
  position: absolute;
  left: 0;
  z-index: 49;
  outline: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media (max-width: ${i.md}) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    overflow-y: scroll;
  }
`,f=r.div.withConfig({displayName:"ModalDialogWrapper"})`
  background: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.lead.inverted.heading":"colors.consumption.lead.inverted.background")};
  height: fit-content;

  @media (max-width: ${i.md}) {
    height: 100%;
  }
`,b=r(o.WithMargins).withConfig({displayName:"OverlayWrapper"})`
  min-height: 313px;

  @media (max-width: ${i.md}) {
    && {
      padding: 0;
    }
    height: 100vh;
  }
`,y=r.h1.withConfig({displayName:"HeaderTextWrapper"})`
  ${({theme:e})=>c(e,"typography.discover.hed.core.secondary")};

  float: left;
  line-height: 29px;
  color: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.lead.standard.heading":"colors.consumption.lead.inverted.heading")};

  font-size: 24px;
  @media (max-width: ${i.md}) {
    max-width: 70vw;
  }
`,x=r.div.withConfig({displayName:"HeaderWrapper"})`
  padding: 31px 69px 50px 67px;

  @media (max-width: ${i.md}) {
    padding: 31px 22px 31px 22px;
  }
`,C=r.div.withConfig({displayName:"FilterOptionTextWrapper"})`
  ${({theme:e})=>c(e,"typography.definitions.utility.input-core")};

  cursor: pointer;
  padding-right: 24px;
  padding-bottom: 32px;
  line-height: 40px;

  -webkit-text-fill-color: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.body.standard.body-deemphasized":"colors.consumption.body.inverted.body-deemphasized")};
  color: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.body.standard.body-deemphasized":"colors.consumption.body.inverted.body-deemphasized")};

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  @media (max-width: ${i.md}) {
    padding: 0 0 24px 0;
    line-height: 20px;
  }
`,w=r(C).withConfig({displayName:"FilterOptionTokenWrapper"})`
  margin-top: 10px;
  padding-bottom: 45px;
  text-decoration: underline;

  color: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.lead.inverted.background":"colors.consumption.lead.inverted.heading")};

  @media (max-width: ${i.md}) {
    margin-top: 0;
    padding-bottom: 25px;
  }
`,k=r(C).withConfig({displayName:"ClearAllTextWrapper"})`
  padding: 4px 30px;

  &:hover,
  &:focus {
    text-decoration: underline;
    color: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.lead.inverted.background":"colors.consumption.lead.inverted.heading")};
  }

  @media (max-width: ${i.md}) {
    padding: 15px 30px;
  }
`,I=r.div.withConfig({displayName:"FlexContainer"})`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: ${i.md}) {
    && {
      all: unset;
    }
  }
`,N=r.div.withConfig({displayName:"FilterOptionsWrapper"})`
  padding: 32px 69px 0 69px;

  @media (max-width: ${i.md}) {
    padding-top: 46px;
    padding-bottom: 70px;
    padding-left: 22px;
  }
`,S=r.div.withConfig({displayName:"MobileFooterWrapper"})`
  @media (max-width: ${i.md}) {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1000000;
    box-shadow: 0 4px 24px rgb(0 0 0 / 25%);
    width: 100%;
  }
`,T=r.div.withConfig({displayName:"HeaderButtonsWrapper"})`
  display: flex;
  float: right;

  @media (max-width: ${i.md}) {
    justify-content: center;
    float: none;
    background-color: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.lead.inverted.heading":"colors.consumption.lead.inverted.background")};
    padding: 10px;
  }
`,F=r(l.Utility).withConfig({displayName:"SaveButtonWrapper"})`
  border-radius: 3px;

  background-color: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.lead.inverted.background":"colors.consumption.lead.inverted.heading")};
  min-width: 100px;
  height: 47px;

  color: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.lead.inverted.heading":"colors.consumption.lead.inverted.background")};

  &:hover,
  &:focus {
    border-color: ${({theme:e})=>s(e,"colors.consumption.lead.inverted.background")};

    background-color: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.lead.inverted.background":"colors.consumption.lead.inverted.heading")};
    color: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.lead.inverted.heading":"colors.consumption.lead.inverted.background")};
  }
`,$=r.div.withConfig({displayName:"CloseIconWrapper"})`
  display: none;

  @media (max-width: ${i.md}) {
    display: block;
    float: right;
    margin-top: 15px;
    cursor: pointer;

    .icon-close {
      path {
        stroke: ${({isInverted:e,theme:t})=>e?"initial":s(t,"colors.interactive.base.white")};
      }
    }
  }
`,W=r.div.withConfig({displayName:"SearchTokensContainer"})`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: ${d(2)};

  ${({isInverted:e,theme:t})=>e&&`\n    background: ${s(t,"colors.consumption.lead.inverted.heading-background")};\n  `}
`,E=r(a).withConfig({displayName:"SearchTokensInfoWapper"})`
  margin: ${d(1)} 0 ${d(4)} 0;
  width: 100%;
  ${c("typography.definitions.utility.label")}
`,B=r.span.withConfig({displayName:"SearchTokensInfoCount"})`
  margin-right: ${d(1)};
  color: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.body.inverted.body-deemphasized":"colors.consumption.body.standard.body-deemphasized")};
`,O=r.button.withConfig({displayName:"SearchTokensinfoClearAllButton"})`
  outline: none;
  background: transparent;
  padding: 0;
  color: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.lead.inverted.heading":"colors.consumption.lead.standard.heading")};
  text-decoration-line: underline;
`,D=r.div.withConfig({displayName:"WrapSelectedTokens"})`
  margin-top: -40px;
`,A=r.hr.withConfig({displayName:"HorizontalLine"})`
  border-bottom: none;
  width: 100%;
`,M=r.div.withConfig({displayName:"TokenWrapper"})`
  margin-top: -10px;
  padding: 0 32px 16px 0;

  &:hover,
  &:focus {
    text-decoration: underline;
    color: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.lead.inverted.heading":"colors.consumption.lead.inverted.background")};
  }
`;e.exports={FilterWrapper:p,ButtonUtilityInvertedWrapper:u,TriangleUpIconWrapper:g,ModalWrapper:v,ModalDialogWrapper:f,OverlayWrapper:b,HeaderTextWrapper:y,FilterOptionTextWrapper:C,FlexContainer:I,MobileFooterWrapper:S,HeaderButtonsWrapper:T,SaveButtonWrapper:F,FilterOptionsWrapper:N,HeaderWrapper:x,CloseIconWrapper:$,ClearAllTextWrapper:k,ButtonUtilityWrapper:m,InvertedTriangleDownIconWrapper:h,SearchTokensContainer:W,SearchTokensInfoCount:B,SearchTokensinfoClearAllButton:O,SearchTokensInfoWapper:E,WrapSelectedTokens:D,HorizontalLine:A,TokenWrapper:M,FilterOptionTokenWrapper:w}},818:(e,t,n)=>{const r=n(37243);t.A=(0,r.defineMessages)({filterPreamble:{id:"ChannelFilter.FilterPreamble",defaultMessage:"Filter by",description:"ChannelFilter component filter preamble"},clearAllText:{id:"ChannelFilter.ClearAll",defaultMessage:"Clear All",description:"ChannelFilter component clear all text"},saveButtonText:{id:"ChannelFilter.Save",defaultMessage:"Save",description:"ChannelFilter component save button text"},storyCountText:{id:"ChannelFilter.StoryCount",defaultMessage:"Showing {storyCount, plural, one {# Story} other {# Stories}}",description:"ChannelFilter component story count text"},clearAllFiltersText:{id:"ChannelFilter.ClearAllFiltersText",defaultMessage:"Clear All Filters and Keywords",description:"ChannelFilter component clear all sub filter text"}})},67240:(e,t,n)=>{const{asVariation:r}=n(81372),a=n(52213);a.Inverted=r(a,"Inverted",{isInverted:!0}),e.exports=a},53051:(e,t,n)=>{const r=n(5556),a=n(96540),{SubNavigationCarousel:i,SubNavigationDropdown:o}=n(23913),l=({layout:e="SubNavigationCarousel",links:t,hasBackgroundColor:n=!1,hasBorders:r=!1,isCentered:l=!1,isSlim:s=!1,className:d="",trackingNamespace:c=""})=>a.createElement(a.Fragment,null,"SubNavigationCarousel"===e&&a.createElement(i,{hasBackgroundColor:n,className:d,hasBorders:r,isCentered:l,isSlim:s,links:t,trackingNamespace:c||"SubNavigation"}),"SubNavigationDropdown"===e&&a.createElement(a.Fragment,null,a.createElement(o,{hasBackgroundColor:n,trackingNamespace:c||"SubNavigation",className:d,links:t,layout:e}),a.createElement(i,{hasBackgroundColor:n,layout:e,className:d,hasBorders:r,isCentered:l,isSlim:s,links:t,trackingNamespace:c||"SubNavigation"})));l.displayName="SubNavigation",l.propTypes={className:r.string,hasBackgroundColor:r.bool,hasBorders:r.bool,isCentered:r.bool,isSlim:r.bool,layout:r.oneOf(["SubNavigationCarousel","SubNavigationDropdown"]),links:r.arrayOf(r.shape({text:r.string.isRequired,url:r.string.isRequired,isActive:r.bool})),trackingNamespace:r.string},e.exports=l},5002:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SUBNAVIGATIONBREAKPOINT=void 0;const{BREAKPOINTS:r}=n(96472);t.SUBNAVIGATIONBREAKPOINT=r.lg},56167:(e,t,n)=>{const{asConfiguredComponent:r}=n(12892),a=n(53051);e.exports=r(a,"SubNavigation")},23913:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SubNavigationDropdown=t.SubNavigationCarousel=void 0;const r=n(79424),{default:a,css:i}=n(75999),{calculateSpacing:o,getColorToken:l}=n(26865),{resolveMenuKey:s}=n(70698),d=n(14212),c=n(6662),{SUBNAVIGATIONBREAKPOINT:p}=n(5002),u=i`
  ${({hasBackgroundColor:e,theme:t})=>e?`background-color: ${l(t,s(t,"colors.foundation.menu-bg.collapsed"))};`:`&::after {\n          background: linear-gradient(90deg, rgba(${l(t,s(t,"colors.background.adContainer.standard"),{rgbOnly:!0})}, 0) 0%, rgba(${l(t,s(t,"colors.background.adContainer.standard"),{rgbOnly:!0})}, 1) 75%);\n        @media (max-width: ${p}) {\n          width: ${o(7)};\n          position: absolute;\n          content: '';\n        }\n        }`}
`;t.SubNavigationCarousel=a(d).withConfig({displayName:"SubNavigationCarousel"})`
  ${u};

  ${({layout:e})=>"SubNavigationDropdown"===e&&`\n      display: flex;\n      @media (max-width: ${p}) {\n        display: none;\n      }\n  `}
`,t.SubNavigationDropdown=a(c).withConfig({displayName:"SubNavigationDropdown"})`
  ${u};

  display: none;
  @media (max-width: ${p}) {
    display: block;

    ${r.NavLink} {
      display: inline-flex;
      align-items: center;
      height: 100%;
    }
  }
`},48592:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AnimatedDropdown=void 0;const r=n(96540),a=n(5556),{default:i}=n(75999),o="animated-dropdown-children-container",l=i.div.withConfig({displayName:"AnimatedDropdownContainer"})`
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 200ms ease-in-out;
  .${o} {
    overflow: hidden;
  }

  &.show {
    grid-template-rows: 1fr;
    transition: grid-template-rows 400ms ease-in-out;
  }
`;t.AnimatedDropdown=({children:e,className:t="",showChildren:n=!1})=>r.createElement(r.Fragment,null,r.createElement(l,{className:`${t??""} ${n?"show":"hide"}`},r.createElement("div",{className:o},e))),t.AnimatedDropdown.propTypes={children:a.node,className:a.string,showChildren:a.bool}},49115:(e,t,n)=>{const r=n(96540),{useRef:a}=n(96540),i=n(5556),{componentTracking:o}=n(90090),{trackComponent:l}=n(92716),{interactionResponse:s}=n(56187),{NavigationDropdownButton:d}=n(77906),{useSelectReducer:c,useCallbacks:p}=n(37690),{NavWrapper:u,NavDropdownWrapper:m}=n(60090),{NavListItem:g,NavLink:h}=n(79424),v=n(708),{AnimatedDropdown:f}=n(48592),{trackSnowplowEvent:b}=n(49938),y=({navLinks:e,shouldEnableBundleComponentAnalytics:t,optionsRefs:n,trackingNamespace:a})=>e.map((({onClick:e,isActive:i,text:l,url:s,showOnlyInBreakpoints:d},c)=>{let p={};return t&&(p=o.addDataSectionTitleAttribute(t,a,c)),r.createElement(g,{...p,key:l,isSlim:!0,isActive:i,showOnlyInBreakpoints:d},r.createElement(h,{ref:e=>{n.current[c]=e},tabIndex:"0",role:"link",href:s,onClick:e,isActive:i},r.createElement("span",null,l)))})),x={width:12,height:7},C=({links:e,shouldEnableBundleComponentAnalytics:t,trackingNamespace:n,className:i})=>{const o=a(null),g=a(null),C=a([]),[w,k]=c(),{onSelectOpen:I}=p(w,k,g,C);if(r.useEffect((()=>{(async()=>{await s(),l("DropdownNavigation")})()}),[]),!e?.length)return null;const N=e.find((e=>e.isActive))||e[0],S=N===e[0]?e.slice(1):e,T=w.isOpen?"opened-chevron":"";return r.createElement(u,{"data-testid":"DropdownNavigation",className:i},r.createElement(d,{ref:o,"aria-expanded":w.isOpen,"aria-haspopup":"true",onClick:I},r.createElement("span",{onClick:e=>b(e,"sub_header_menu_toggle"),onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||e.preventDefault()},tabIndex:"0",role:"link"},r.createElement(h,{tabIndex:"0",role:"link",href:N.url},r.createElement("span",null,N.text))),r.createElement("span",{"aria-hidden":"true",className:T,onClick:e=>b(e,"sub_header_menu_toggle")},r.createElement(v,{...x}))),r.createElement(f,{showChildren:w.isOpen},r.createElement(m,{ref:g,role:"menu",onClick:e=>b(e,"sub_header_menu_dropdown")},r.createElement(y,{navLinks:S,shouldEnableBundleComponentAnalytics:!!t,optionsRefs:C,trackingNamespace:n}))))};C.propTypes={className:i.string,links:i.array.isRequired,shouldEnableBundleComponentAnalytics:i.bool,trackingNamespace:i.string.isRequired},C.displayName="DropdownNavigation",e.exports=C},6662:(e,t,n)=>{e.exports=n(49115)},60090:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NavDropdownWrapper=t.NavWrapper=void 0;const{default:r}=n(75999),{getColorStyles:a,calculateSpacing:i,getColorToken:o}=n(26865),{resolveMenuKey:l}=n(70698),{SUBNAVIGATIONBREAKPOINT:s}=n(5002);t.NavWrapper=r.div.withConfig({displayName:"NavWrapper"})`
  display: none;
  position: relative;
  z-index: 1;
  border-width: 1px 0;
  border-style: solid;
  ${({theme:e})=>a(e,"border-color","colors.foundation.menu.dividers")};
  width: 100%;

  button {
    padding-left: ${i(3)};
    height: 48px;

    a {
      pointer-events: none;
    }
  }

  svg,
  button a span {
    ${({theme:e})=>a(e,"color",l(e,"colors.foundation.collapsed-menu.nav-link.hover"))};
  }

  svg {
    transition: transform 0.2s linear;
    stroke: ${o("colors.foundation.collapsed-menu.nav-link.hover")};
    stroke-width: 6px;
  }

  .opened-chevron svg {
    transform: rotate(180deg);
  }

  @media (max-width: ${s}) {
    display: block;
  }
`,t.NavDropdownWrapper=r.ul.withConfig({displayName:"NavDropdownWrapper"})`
  ${({theme:e})=>a(e,"background-color",l(e,"colors.foundation.menu-bg.expanded"))};

  margin: 0;
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 0 ${i(3)};

  @media (max-width: ${s}) {
    li:first-child,
    li + li {
      margin-left: ${i(1.5)};

      &::before {
        bottom: unset;
        left: -${i(1.5)};
        width: 4px;
        height: 100%;
      }
    }
  }
`}}]);