(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[1206],{5421:(e,n,o)=>{const t=o(5556),i=o(96540),a=o(62839),{trackComponent:r}=o(92716),{interactionResponse:d}=o(56187),{BundleHeaderHed:l,BundleHeaderWrapper:s,BundleHeaderSection:c,BundleHeaderHedDekGrid:g,BundleHeaderHedDekBlock:u,BundleHeaderDekText:p,SectionHeaderStyle:h,BundleHeaderFullBleedContainer:m,BundleHeaderFullBleedHedText:y,ButtonGroupWrapper:b,BundleHeaderBylines:$,BundleHeaderSubHed:B}=o(71750),f=o(52540),k=({contributors:e,dangerousDek:n,directoryCategories:o,hasTopMargin:t=!1,hasMarginBottom:f=!1,headerType:k="bundle-header",hed:S,subHed:w,hideLedeCaption:I=!1,shouldApplyDarkBackground:x,isDestinationBundle:H,isDirectoryBundle:v,isFullBleedForXXXL:T=!1,isInverted:M=!1,lede:C,headerPosition:D="top",overlayType:E="none",shouldAddBottomSpacing:O=!1,shouldDecorateHeader:L=!0,shouldHighlightDekText:A=!1,shouldOverrideBundleHeaderDekText:N=!1,shouldOverrideDirectoryBundle:_=!1,shouldOverrideTypeToken:R=!1,showByline:P=!1,showHeaderOnBottom:F=!1,showHeaderOnTop:X=!1})=>{i.useEffect((()=>{(async()=>{await d(),r("BundleHeader")})()}),[]);const j=i.createElement(g,{isDestinationBundle:H,isDirectoryBundle:v,headerPosition:D,isInverted:M},i.createElement(u,{showByline:P,showHeaderOnBottom:F,showHeaderOnTop:X,isInverted:M},S&&function(e,n,o,t,a,r){switch(e){case"bundle-header":return i.createElement(l,{shouldDecorateHeader:a,shouldOverrideTypeToken:r,dangerouslySetInnerHTML:{__html:n}});case"section-header":return i.createElement(h,{dangerousHed:n});case"full-bleed-header":return i.createElement(m,null,i.createElement(y,{isDestinationBundle:o,isDirectoryBundle:t,dangerouslySetInnerHTML:{__html:`${n}`}}));default:return null}}(k,S,H,v,L,R),w&&i.createElement(B,{dangerouslySetInnerHTML:{__html:w}}),n&&i.createElement(p,{isDestinationBundle:H,isDirectoryBundle:v,shouldOverrideTypeToken:R,dangerouslySetInnerHTML:{__html:A?n.replace("<strong>",'<strong style="color: white; font-weight: 500;">'):n},shouldOverrideBundleHeaderDekText:N,showByline:P,showHeaderOnBottom:F,showHeaderOnTop:X,isInverted:M,shouldAddBottomSpacing:O,shouldOverrideDirectoryBundle:_}),v&&i.createElement(b,null,i.createElement(a,null,o.map(((e,n)=>i.createElement("p",{key:n},i.createElement("a",{href:e.href,rel:"nofollow noreferrer"},e.text)))))),P&&e?i.createElement($,{contributors:e,isCompact:!1}):null));return i.createElement(i.Fragment,null,X&&!F&&j,i.createElement(s,{"data-testid":"BundleHeader",overlayType:E,isDestinationBundle:H,isDirectoryBundle:v,isFullBleedForXXXL:T,isInverted:M,hasMarginBottom:f},C&&i.createElement(c,{overlayType:E,lede:C,captionWidth:"fullbleed",hasTopMargin:t,hideLedeCaption:I,shouldApplyDarkBackground:x}),!X&&!F&&j),!X&&F&&j)};k.propTypes={contributors:t.shape(f.propTypes.contributors),dangerousDek:t.string,directoryCategories:t.array,hasMarginBottom:t.bool,hasTopMargin:t.bool,headerPosition:t.oneOf(["center","top"]),headerType:t.oneOf(["bundle-header","full-bleed-header","section-header"]),hed:t.string,hideLedeCaption:t.bool,isDestinationBundle:t.bool,isDirectoryBundle:t.bool,isFullBleedForXXXL:t.bool,isInverted:t.bool,lede:t.object,overlayType:t.oneOf(["none","gradient","solid"]),shouldAddBottomSpacing:t.bool,shouldApplyDarkBackground:t.bool,shouldDecorateHeader:t.bool,shouldHighlightDekText:t.bool,shouldOverrideBundleHeaderDekText:t.bool,shouldOverrideDirectoryBundle:t.bool,shouldOverrideTypeToken:t.bool,showByline:t.bool,showHeaderOnBottom:t.bool,showHeaderOnTop:t.bool,subHed:t.string},k.displayName="BundleHeader",e.exports=k},24125:(e,n,o)=>{const{asConfiguredComponent:t}=o(12892),i=o(5421);e.exports=t(i,"BundleHeader")},71750:(e,n,o)=>{const{default:t,css:i}=o(75999),{calculateSpacing:a,getColorToken:r,getTypographyStyles:d,minScreen:l,getColorStyles:s}=o(26865),{applyGridSpacing:c,cssVariablesGrid:g}=o(1123),{BaseText:u}=o(76955),{BREAKPOINTS:p}=o(96472),h=o(92027),m=o(95291),y=o(52540),{ResponsiveImageContainer:b}=o(7228),{ContentHeaderLeadAssetCaption:$,ContentHeaderLeadContentFullWidth:B,ContentHeaderLeadContentCaptionCredit:f,ContentHeaderResponsiveAsset:k,ContentHeaderLeadAsset:S}=o(5239),{ButtonCalloutWrapper:w}=o(65881),I=t.header.withConfig({displayName:"BundleHeaderWrapper"})`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  ${({hasMarginBottom:e})=>e&&`\n    margin-bottom: ${a(6)};\n  `}

  ${({isDestinationBundle:e,theme:n})=>e&&i`
      background: ${r(n,"colors.background.light")};
    `}

  ${({overlayType:e,isDirectoryBundle:n,isFullBleedForXXXL:o})=>"none"!==e&&!n&&!o&&`\n      ${S} {\n        @media (min-width: ${p.xxl}) {\n          width: ${p.xxl};\n          margin: 0 auto;\n        }\n      }\n    `}

  ${B} {
    grid-column: inherit;

    ${({isDestinationBundle:e,theme:n})=>e&&i`
        background: ${r(n,"colors.background.light")};

        ${f} {
          @media (min-width: ${p.xxl}) {
            padding-left: 0;
            padding-right: 0;
          }
        }
        ${$} {
          grid-column: 1/-1;
        }
      `}

    ${f} {
      margin-top: ${a(2)};

      @media (min-width: ${p.md}) {
        margin-top: ${a(2)};
      }

      ${$} {
        ${({isInverted:e,theme:n})=>e&&`\n              background: ${r(n,"colors.background.black")};\n            `}

        .caption__credit {
          ${({isInverted:e,theme:n})=>e&&`\n              color: ${r(n,"colors.consumption.lead.inverted.description")};\n            `}
        }
      }
    }
  }
`,x=t(h).withConfig({displayName:"BundleHeaderSection"})`
  grid-column: 1;
  grid-row: 1;
  background: ${({theme:e})=>r(e,"colors.background.light")};

  ${({shouldApplyDarkBackground:e,theme:n})=>e&&`\n      background: ${r(n,"colors.consumption.lead.inverted.background")};\n    `}

  ${({hasTopMargin:e})=>e&&`\n    ${l(p.lg)} {\n      margin-top: -8%;\n    }\n  `}
    
  ${({overlayType:e})=>"gradient"===e?i`
        &:after {
          background: linear-gradient(to top, rgb(0, 0, 0) 0, transparent 65%);
          content: '';
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
        }
      `:"solid"===e?i`
        &:after {
          background-color: rgba(
            ${r("colors.interactive.base.black",{rgbOnly:!0})},
            0.35
          );
          content: '';
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
        }
      `:""}

  .lead-asset__content__photo,
  ${k} ${b} {
    ${l(p.md)} {
      max-height: none;
    }
  }

  ${k},
  ${b} {
    width: 100%;
  }
`,H=t.div.withConfig({displayName:"BundleHeaderHedDekGrid"})`
  ${g()}

  display: grid;
  grid-column: 1;
  grid-row: 1;
  grid-template-columns: repeat(4, 1fr);
  column-gap: var(--grid-gap);
  z-index: 1;
  width: 100%;
  row-gap: var(--grid-gap);
  ${({isInverted:e,theme:n})=>e&&`\n      background: ${r(n,"colors.consumption.lead.inverted.background")};\n    `}

  ${c("padding")}
  ${({headerPosition:e})=>"center"===e?"place-items: center center;":"place-items: start center;"}

  ${l(p.md)} {
    grid-template-columns: repeat(12, 1fr);
  }
`,v=t.div.withConfig({displayName:"BundleHeaderHedDekBlock"})`
  grid-column: 1 / -1;
  text-align: center;
  @media (min-width: ${p.lg}) {
    ${({isDirectoryBundle:e})=>e?"grid-column: 4 / 10":"grid-column: 2 / -2;"}
    ${({showHeaderOnTop:e,showHeaderOnBottom:n})=>(e||n)&&"\n        grid-column: 3 / -3;\n      "}
  }
`,T=t(m).withConfig({displayName:"SectionHeaderStyle"})`
  margin-top: ${a(5)};
  margin-bottom: ${a(2)};

  color: ${({theme:e})=>r(e,"colors.discovery.body.white.heading")};

  ${({isInverted:e,theme:n})=>e&&`\n    color: ${r(n,"colors.discovery.body.white.heading")};\n      `}

  @media (min-width: ${p.xl}) {
    margin-top: ${a(8)};
    margin-bottom: ${a(4)};
  }
`,M=t(u).withConfig({displayName:"BundleHeaderHed"})`
  margin-top: ${a(5)};
  margin-bottom: ${a(2)};
  ${({theme:e,shouldDecorateHeader:n})=>n?`text-decoration: underline; text-decoration-color: ${r(e,"colors.discovery.lead.primary.accent")};`:"text-decoration: none"};
  ${({theme:e,shouldOverrideTypeToken:n})=>d(e,n?"typography.definitions.consumptionEditorial.hed-standard":"typography.definitions.consumptionEditorial.display-small")};

  @media (min-width: ${p.xl}) {
    margin-top: ${a(8)};
    margin-bottom: ${a(4)};
    ${({theme:e,shouldOverrideTypeToken:n})=>d(e,n?"typography.definitions.consumptionEditorial.hed-standard":"typography.definitions.discovery.hed-break-out")};
  }
`;M.defaultProps={as:"h1",colorToken:"colors.consumption.body.standard.body",typeIdentity:"typography.definitions.consumptionEditorial.body-core"};const C=t(u).withConfig({displayName:"BundleHeaderDekText"})`
  ${({isDestinationBundle:e,shouldOverrideDirectoryBundle:n,shouldOverrideTypeToken:o,theme:t})=>d(t,e||n||o?"typography.definitions.consumptionEditorial.description-core":"typography.definitions.consumptionEditorial.subhed-aux-secondary")};
  ${({shouldOverrideDirectoryBundle:e,isDirectoryBundle:n,shouldOverrideTypeToken:o,theme:t})=>!e&&!o&&d(t,n?"typography.definitions.consumptionEditorial.subhed-break-secondary":"typography.definitions.consumptionEditorial.subhed-aux-secondary")};

  margin-top: 0;
  color: ${({isDestinationBundle:e,theme:n})=>r(n,e?"colors.discovery.body.black.description":"colors.discovery.body.white.description")};

  ${({shouldOverrideDirectoryBundle:e,theme:n})=>e&&`\n        ${s(n,"color","colors.consumption.body.inverted.body-deemphasized")}\n    `}

  ${({isDirectoryBundle:e,theme:n})=>e?i`
          margin-bottom: ${a(4)};
          color: ${r(n,"colors.discovery.body.white.context-texture")};
          @media (max-width: ${p.lg}) {
            font-size: ${a(2)};
          }
        `:""};

  ${({showByline:e,showHeaderOnTop:n})=>!e&&n&&`\n        margin-bottom: ${a(5)};\n\n        @media (min-width: ${p.lg}) {\n          margin-bottom: ${a(6)};\n        }\n      `}

  ${({shouldOverrideBundleHeaderDekText:e})=>e&&`\n    @media (min-width: ${p.xl}) {\n      text-align: justify;\n      font-size: ${a(3.3,"px")};\n      margin-bottom: ${a(8,"px")};\n    }\n\n    @media (max-width: ${p.xl}) {\n      text-align: left;\n      font-size: ${a(2.75,"px")};\n      margin: ${a(6,"px")} 0 ${a(8,"px")} 0;\n    }\n  `}

  ${({shouldAddBottomSpacing:e})=>e&&`\n        margin-bottom: ${a(5)};\n\n        @media (min-width: ${p.lg}) {\n          margin-bottom: ${a(6)};\n        }\n    `}
`,D=t.div.withConfig({displayName:"BundleHeaderFullBleedContainer"})`
  display: grid;
  grid-column: -1 / 1;
  align-items: center;
  text-align: center;
  @media (min-width: ${p.lg}) {
    grid-column: 4 / 10;
  }
`,E=t(u).withConfig({displayName:"BundleHeaderFullBleedHedText"})`
  margin-bottom: ${a(1)};
  font-size: 2em;
  font-weight: bold;
  ${({isDestinationBundle:e,theme:n})=>!0===e?i`
          margin-bottom: 0;
          ${d(n,"typography.definitions.discovery.page-hed-section")};
        `:""}
  ${({isDirectoryBundle:e,theme:n})=>e?i`
          margin-bottom: ${a(2)};
          ${d(n,"typography.definitions.discovery.page-hed-subsection")};
          @media (max-width: ${p.lg}) {
            font-size: ${a(4)};
          }
        `:""}
`;E.defaultProps={as:"h1",colorToken:"colors.discovery.body.white.background",typeIdentity:"typography.definitions.consumptionEditorial.body-core"};const O=t.div.withConfig({displayName:"ButtonGroupWrapper"})`
  a {
    margin-right: ${a(2.5)};
    border: none;
    @media (max-width: ${p.lg}) {
      margin-right: 0;
      width: 100%;
    }
  }

  a:hover {
    border: none;
  }
  ${w} {
    justify-content: center;
    @media (max-width: ${p.lg}) {
      margin: ${a(2)} 0 ${a(.5)};
    }
  }
`,L=t(y).withConfig({displayName:"BundleHeaderBylines"})`
  margin-top: ${a(2)};
  margin-bottom: ${a(5)};

  @media (min-width: ${p.xl}) {
    margin-top: ${a(4)};
    margin-bottom: ${a(6)};
  }
`;L.defaultProps={colorToken:"colors.consumption.lead.standard.accreditation",typeIdentity:"typography.definitions.globalEditorial.accreditation-core"};const A=t(u).withConfig({displayName:"BundleHeaderSubHed"})`
  margin-bottom: ${a(2)};
`;A.defaultProps={colorToken:"colors.discovery.body.white.heading",typeIdentity:"typography.definitions.discovery.subhed-section-primary"},e.exports={BundleHeaderHed:M,BundleHeaderWrapper:I,BundleHeaderSection:x,BundleHeaderHedDekGrid:H,BundleHeaderHedDekBlock:v,BundleHeaderDekText:C,SectionHeaderStyle:T,BundleHeaderFullBleedContainer:D,BundleHeaderFullBleedHedText:E,ButtonGroupWrapper:O,BundleHeaderBylines:L,BundleHeaderSubHed:A}},19636:(e,n,o)=>{const t=o(5556),i=o(96540),{connect:a}=o(67851),{useIntl:r}=o(37243),d=o(90739).A,l=o(15822).default,s=o(76399),c=o(73275),{googleAnalytics:g}=o(90090),{asConfiguredComponent:u}=o(12892),{doCloseModal:p}=o(22509),{trackComponent:h}=o(92716),{interactionResponse:m}=o(56187),{trackUserAccountEvent:y}=o(14307),{SignInModalBaseWrapper:b,SignInModalCloseButton:$,SignInModalButtons:B,SignInModalDek:f,SignInModalHed:k,SignInModalEmail:S,SignInModalSignInSection:w,SignInModalSpotIllustration:I,SignInModalSignInLink:x,SignInModalHedSpanTag:H}=o(20761),v=({analyticsType:e,authSource:n="sign-in-modal",brandIdentityAssets:o,className:t,closeButtonCallback:a,dangerousDek:u,dangerousHed:v,dangerousHedSpanTag:T,hasLargeMargins:M=!1,hasRoundedCornersButtons:C,isVisible:D,redirectURL:E="/",shouldHideIllustration:O=!1,signInText:L,signInLinkText:A,snowplowData:N,source:_,type:R="default"})=>{i.useEffect((()=>{(async()=>{await m(),h("SignInModal")})()}),[]);const P=n=>g.emitGoogleTrackingEvent(n,{signInModalType:e});D&&P("signin-modal-impression");let F=`${l.oidcAuth}?redirectURL=${encodeURIComponent(E)}&skipAccountLink=true&authSource=${n}`;_&&(F=`${F}&source=${_}`);const X=o.signInModalAsset[R]||o.signInModalAsset.default,{formatMessage:j}=r(),z=e=>{P("signin-modal-oidc-sign-in-click");const n=N?.label||e.target.innerText;y({...N,label:n})},W=L||j(d.oidcSignInText),U=A||j(d.oidcSignInLinkText);return i.createElement(b,{className:t,hasLargeMargins:M,closeTimeoutMS:400,isOpen:D},i.createElement($,{isIconButton:!0,ariaLabel:j(d.closeButtonAriaLabel),label:j(d.closeButtonLabel),onClickHandler:()=>{p(),P("signin-modal-close"),a&&a()},role:"button",ButtonIcon:s}),i.createElement(k,null,v||j(d.hed),i.createElement(H,null,T||j(d.hedSpanTag))),!O&&i.createElement(I,null,i.createElement(c,{...X})),i.createElement(f,{dangerouslySetInnerHTML:{__html:u}}),i.createElement(B,{hasRoundedCornersButtons:C},i.createElement(S,{label:j(d.oidcSignUpButtonLabel),href:F,inputKind:"link",rel:"link",iconPosition:"before",onClickHandler:z,"data-testid":"SignInModalEmail"})),i.createElement(w,null,`${W} `,i.createElement(x,{href:F,onClick:z},U),"voting"===R&&i.createElement("div",null,"  »")))};v.displayName="SignInModal",v.propTypes={analyticsType:t.string.isRequired,authSource:t.string,brandIdentityAssets:t.shape({signInModalAsset:t.shape({default:t.object,crosswords:t.object,voting:t.object})}).isRequired,className:t.string,closeButtonCallback:t.func,dangerousDek:t.string,dangerousHed:t.string,dangerousHedSpanTag:t.string,hasLargeMargins:t.bool,hasRoundedCornersButtons:t.bool,isVisible:t.bool,redirectURL:t.string,shouldHideIllustration:t.bool,signInLinkText:t.string,signInText:t.string,snowplowData:t.object,source:t.string,type:t.oneOf(["default","crosswords","voting"])};const T=u(v,"SignInModal");e.exports=a((e=>{const{signInModalConfig:n,brandIdentityAssets:o}=e;return{brandIdentityAssets:o,...n}}))(T)},14935:(e,n,o)=>{e.exports=o(19636)},20761:(e,n,o)=>{const t=o(96540),i=o(20312),a=o(5556),{default:r,css:d}=o(75999),{BaseText:l,BaseLink:s}=o(76955),{calculateSpacing:c}=o(26865),{BREAKPOINTS:g,ZINDEX_MAP:u}=o(96472),p=o(73730),{getColorToken:h,getTypographyStyles:m}=o(26865),{ResponsiveImagePicture:y}=o(7228),{ButtonWrapper:b}=o(18974),$=r(l).withConfig({displayName:"SignInModalHed"})`
  text-align: center;
`;$.defaultProps={as:"div",colorToken:"colors.discover.body.white.heading",topSpacing:1,typeIdentity:"typography.definitions.consumptionEditorial.display-small"};const B=r.span.withConfig({displayName:"SignInModalHedSpanTag"})`
  display: block;
`,f=r.p.withConfig({displayName:"SignInModalDek"})`
  ${m("typography.definitions.consumptionEditorial.body-core")}
  text-align: center;
  color: ${h("colors.discover.body.white.description")};
  @media (max-width: ${g.md}) {
    margin-bottom: ${c(3)};
  }
`,k=r(l).withConfig({displayName:"SignInModalSpotIllustration"})`
  margin: ${c(1.5)} auto;
  text-align: center;

  ${y} {
    width: 200px;
    height: 170px;
  }
`;k.defaultProps={as:"div",typeIdentity:"typography.definitions.consumptionEditorial.body-core"};const S=r(p.Primary).withConfig({displayName:"SignInModalButtonPrimary"})`
  margin-bottom: ${c(1)};
  width: 100%;
`,w=r(p.Primary).withConfig({displayName:"SignInModalButtonPrimaryOutlined"})`
  width: 100%;
`,I=r(p.Utility).withConfig({displayName:"SignInModalCloseButton"})`
  position: absolute;
  top: ${c(1)};
  right: ${c(1)};
  padding: 0;
  fill: ${h("colors.discovery.body.light.context-tertiary")};

  .icon-close {
    padding: 8px;
  }

  &,
  &:focus,
  &:hover {
    border: 0;
    background-color: transparent;
  }
`,x=r(p.Utility).withConfig({displayName:"SignInModalEmail"})`
  margin-top: 0;
  padding: 0;
`,H=r.div.withConfig({displayName:"SignInModalButtons"})`
  display: flex;
  justify-content: center;
  margin: auto;
  padding-bottom: ${c(2)};
  width: 100%;

  ${x} {
    padding: 0;
    width: 100%;
  }

  ${({hasRoundedCornersButtons:e})=>e&&`\n    ${b} {\n      border-radius: 4px;\n    }\n  `}
`,v=d`
  &&& {
    padding: ${c(8)} ${c(5)};
    min-height: ${c(62)};
  }
  ${k} {
    margin: ${c(1.5)} auto;

    ${y} {
      width: 175px;
      height: 175px;
    }
  }

  ${f} {
    margin-bottom: ${c(2)};
  }

  ${H} {
    margin-bottom: ${c(4)};

    @media (max-width: ${g.md}) {
      padding-bottom: 0;
    }
  }
`;function T({className:e,...n}){const o=`${e}__content`,a=`${e}__overlay`;return t.createElement(i,{portalClassName:e,className:o,overlayClassName:a,...n})}T.propTypes={className:a.string};const M=r(T).withConfig({displayName:"SignInModalBaseWrapper"})`
  &__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${u.interstitialLayer};

    background-color: rgba(
      ${h("colors.background.black",{rgbOnly:!0})},
      0
    );

    &.ReactModal__Overlay--after-open {
      transition: background-color 750ms;
      opacity: 1;
      background-color: rgba(
        ${h("colors.background.black",{rgbOnly:!0})},
        0.4
      );
    }

    &.ReactModal__Overlay--after-close {
      transition: background-color 750ms;
      background-color: rgba(
        ${h("colors.background.black",{rgbOnly:!0})},
        0
      );
    }
  }

  &__content {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${h("colors.background.white")};
    padding: ${c(5)};
    width: ${c(60)};
    max-height: calc(100% - ${c(1,"px")});
    overflow-y: auto;

    @media (max-width: ${g.md}) {
      transform: translateY(-50%)
        translateX(calc(-50% - ${c(2,"px")}));

      margin: 0 ${c(2,"px")};
      padding: ${c(4)} ${c(5)}
        ${c(4)} ${c(5)};
      width: auto;
      min-width: ${c(38)};
      max-width: ${c(60)};
    }

    ${S}
    ${w}
    ${({hasLargeMargins:e})=>!0===e&&v}
  }
`,C=r(l).withConfig({displayName:"SignInModalSignInSection"})`
  display: flex;
  justify-content: center;
  width: 100%;
`;C.defaultProps={as:"div",colorToken:"colors.discovery.body.light.context-tertiary",typeIdentity:"typography.definitions.utility.assistive-text"};const D=r(s).withConfig({displayName:"SignInModalSignInLink"})`
  && {
    z-index: ${u.interstitialLayer};
    margin-left: 5px;
    text-decoration: underline;
  }
`;D.defaultProps={colorToken:"colors.interactive.base.black",typeToken:"typography.definitions.utility.assistive-text"},e.exports={SignInModalBaseWrapper:M,SignInModalCloseButton:I,SignInModalButtons:H,SignInModalDek:f,SignInModalEmail:x,SignInModalHed:$,SignInModalSignInSection:C,SignInModalSignInLink:D,SignInModalSpotIllustration:k,SignInModalHedSpanTag:B}},90739:(e,n,o)=>{const t=o(37243);n.A=(0,t.defineMessages)({oidcSignUpButtonLabel:{id:"SignInModal.OidcSignUpButtonLabel",defaultMessage:"Create account",description:"SignInModal component OIDC SignUp button label"},closeButtonLabel:{id:"SignInModal.CloseButtonLabel",defaultMessage:"Close Sign In Modal",description:"SignInModal component close button label"},closeButtonAriaLabel:{id:"SignInModal.CloseButtonAriaLabel",defaultMessage:"Close Sign In Modal",description:"SignInModal component close button aria label"},hed:{id:"SignInModal.Hed",defaultMessage:"Save stories ",description:"SignInModal component hed text",isConfigurable:!0},hedSpanTag:{id:"SignInModal.HedSpanTag",defaultMessage:"with an account",description:"SignInModal component hed spanTag text",isConfigurable:!0},oidcSignInText:{id:"SignInModal.OidcSignInText",defaultMessage:"Already have an account?",description:"SignInModal component OIDC SignIn Text"},oidcSignInLinkText:{id:"SignInModal.OidcSignInLinkText",defaultMessage:"Sign in",description:"SignInModal component OIDC SignIn Link Text"}})},15822:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.proxyApiRoutes=void 0,n.default=Object.freeze({oidcAuth:"/auth/initiate",oidcAuthSessionEnd:"/auth/session/end",oidcAuthRestart:"/auth/restart",oidcAccountSignOut:"/auth/end",oidcExchange:"/auth/exchange",oidcForgotPassword:"/auth/forgot",oidcLanding:"/auth/complete",oidcMagicLink:"/auth/request-link",oidcRefresh:"/auth/refresh",oidcRefreshRedirect:"/auth/refresh-redirect",oauth:{jwks:"/.well-known/jwks",oidcConfig:"/.well-known/openid-configuration",authorizationGrant:"/api/utility/oauth/authorization",tokenExchange:"/api/utility/oauth/token"}}),n.proxyApiRoutes=Object.freeze({authenticate:"/v2/authenticate",googleAuthenticate:"/v2/sso/google",marketingPermissions:"/v2/marketing-permissions",newsletterSubscriptions:"/v2/newsletter-subscriptions",sailthruNewsletterSubscriptions:"/v2/newsletter/sailthru",swgAuthenticate:"/v2/swg/authenticate",swgSubscribe:"/v2/swg/subscription",userDetails:"/v2/users",userLookup:"/v2/users/lookup"})}}]);