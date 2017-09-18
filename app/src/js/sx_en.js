var sxTemplates = function () {
    var self = this;

    self.container = '<div class="sxContainer sxTop ##MOBILE_INDICATOR## ##TABS## ##CURRENT_VIEW##">\
                            <div class="sxClear"></div>\
                        </div>';

    self.resultHeader = '<div class="sxResultHeader">\
                            <h1>\
                                <a id="sxTop" name="sxTop"></a>Die Suche nach "<span class="sxSearchQuery">##SEARCH_QUERY##</span>" ergab <span class="sxNumberOfResults">##PRODUCT_COUNT## Treffer</span> \
                            </h1>\
                            <div class="sxDesc">\
                            ##DESC##\
                            </div>\
                            <div class="sxClear"></div>\
                            <ul class="sxTabs">\
                                <li id="sxProductTab">##PRODUCT_COUNT## Produkte</li>\
                                <li id="sxContentTab">##CONTENT_COUNT## weitere Ergebnisse</li>\
                            </ul>\
                        </div>';

    self.filterContainer = '<div class="sxFilterContainer">\
                                <div class="sxFilterShow">\
                                    <span class="sxMsMore">Auswahl verfeinern</span><span class="sxMsLess">AuswahlmenÃ¼ schlieÃŸen</span><span class="sxMsMoreSign active"></span>\
                                </div>\
                                <div class="sxFilterHolder"></div>\
                            </div>';

    self.resultContent = '<div class="sxResultContent">\
                                <div class="sxRightContainer sxPaginationTop">##PAGINATION_HOLDER##</div>\
                                <div class="sxRightContainer sxOrderFilterHolder"></div>\
                                <div class="sxRightContainer sxResultHolder"><div class="sxLoadingIndicator"></div>##RESULT_HOLDER##</div>\
                                <div class="sxRightContainer sxResultFooter">##RESULT_FOOTER##</div>\
                            </div>';


    self.paginationHolderTop = '<div class="sxPaginationHolder">\
                                    <div class="sxPageSummary">\
                                    ##PRODUCT_COUNT##\
                                    </div>\
                                    <div class="sxResultsPerPage">\
                                        <select>\
                                        ##NUMBER_OF_PRODUCT_PER_PAGES##\
                                        </select>\
                                    </div>\
                                    <ul class="sxPagination">\
                                    ##NUMBER_OF_PAGES##\
                                    </ul>\
                                    <div style="clear:both;"></div>\
                                </div>';

    self.resultFooter = '   <div class="sxPaginationHolder">\
                                <div class="sxGotoTopHolder">\
                                    <a href="#sxTop" class="sxGotoTop">ZurÃ¼ck nach oben</a>\
                                </div>\
                                <div class="sxResultsPerPage">\
                                    <select>\
                                    ##NUMBER_OF_PRODUCT_PER_PAGES##\
                                    </select>\
                                </div>\
                                <ul class="sxPagination">\
                                ##NUMBER_OF_PAGES##\
                                </ul>\
                                <div style="clear:both;"></div>\
                            </div>';

    self.paginationItem = '<li><a href="###PAGE_NUMBER##" class="sxPaginationLink ##CURRENT_PAGE##" data-sxpagination="##PAGE_NUMBER##">##PAGE_NUMBER##</a></li>';

    //self.productCount = '<span>##PRODUCT_COUNT_LOW##</span> bis <span>##PRODUCT_COUNT_HIGH##</span> von <span>##PRODUCT_TOTAL_COUNT##</span> Produkten';

    self.productCount = 'Artikel <span>##PRODUCT_COUNT_LOW##</span> bis <span>##PRODUCT_COUNT_HIGH##</span> von <span>##PRODUCT_TOTAL_COUNT##</span>';

    self.rankingFlag = ' <div class="sxRankingFlag ##RANKING_FLAG_POSITION##" style="##RANKING_FLAG_CSS##">\
                            <div class="sxRankingFlagCorner"></div>\
                            ##RANKING_TEXT##\
                        </div>';

    self.sxFilterSliderTemplate = '<div class="sxFilterNode ##FILTER_SET## ##FILTER_TYPE##">\
                                    <div class="sxSliderHeader"><span class="sxMsHeaderTitle">##FILTER_NAME##</span> <span class="sxMsSelectedOptions">##FILTER_SELECTED_OPTIONS##</span></div>\
                                    ##SLIDER_CONTAINER##\
                                    <div class="sxSliderValues sxMFHiddenHolder">\
                                        <span class="sxLeftSliderValue"><span class="sxFrInput" contenteditable="true" tabindex="1">##SLIDER_MIN_VALUE##</span><span class="sxFrUnit">##SLIDER_UNIT_NAME##</span></span>\
                                    - <span class="sxRightSliderValue"><span class="sxFrInput" contenteditable="true" tabindex="1">##SLIDER_MAX_VALUE##</span><span class="sxFrUnit">##SLIDER_UNIT_NAME##</span></span><button>LOS</button>\
                                    </div>\
                                </div>';

    self.sxFilterMultiSelectTemplate = '<div class="sxFilterNode ##FILTER_SET## ##FILTER_TYPE##">\
                                            <div class="sxMsHeader"><span class="sxMsHeaderTitle">##FILTER_NAME##</span> <span class="sxMsSelectedOptions">##FILTER_SELECTED_OPTIONS##</span></div>\
                                            <div class="sxMsFilterOrderHolder ##FILTERORDER_DISABLER##"><div class="sxMsFilterHolder"><input class="sxMsFilter" type="search" name="sxMsFilter" value="" placeholder="##FILTER_NAME## suchen" autocomplete="off" /></div><ul class="sxMsOrderHolder"><li><label data-type="alpha"><span class="sxMsOrderLabelText">A-Z</span><span class="sxMsOrder sxMsOrderAsc"></span><span class="sxMsOrder sxMsOrderDesc"></span></label></li><li><label data-type="number"><span class="sxMsOrderLabelText">#1-9</span><span class="sxMsOrder sxMsOrderAsc"></span><span class="sxMsOrder sxMsOrderDesc"></span></label></li><li class="sxMsOrderResetHolder"><label class="sxMsOrderReset" data-type="reset">&times;</label></li></ul></div>\
                                            ##MS_CONTAINER##\
                                        </div>';

    self.sxFilterMultiSelectColorTemplate = '<div class="sxFilterNode sxFilterColor ##FILTER_SET## ##FILTER_TYPE##">\
                                                <div class="sxMsHeader"><span class="sxMsHeaderTitle">##FILTER_NAME##</span> <span class="sxMsSelectedOptions">##FILTER_SELECTED_OPTIONS##</span></div>\
                                                ##MS_CONTAINER##\
                                            </div>';

    self.sxFilterMultiSelectMoreTemplate = '<li class="sxMsCheckbox sxMsMoreHolder"><span class="sxMsMore">Mehr <span class="sxMsMoreCount">(##NUM_MORE_FILTERS## Filter)</span></span><span class="sxMsLess">Weniger</span><span class="sxMsMoreSign active"></span></li>';


    // ### ORDER FILTER
    self.sxOrderFilterContainerTemplate = '<ul class="sxOrderContainer"><li class="sxOrderHeader"><span class="sxOrderHeaderText">Sortieren nach:</span>  <span class="sxOrderSelectedOptions">##ORDER_SELECTED_OPTION##</span></li><li id="sxOrderFilter_relevance" class="sxOrderFilter sxMFHiddenHolder" data-relation="resetter">Relevanz</li>##ORDER_FILTERS##</ul>';
    self.sxOrderSelectContainerTemplate = '<li class="sxOrderSelect"><select></select></li>';
    self.sxOrderSelectOptionTemplate = '<option class="sxOrderSelectOption" value="##RELATION##" data-relation="##RELATION##">##RELATION_VIEW_NAME##</option>';
    self.sxOrderFilterTemplate = '<li id="sxOrderFilter_##RELATION_ID##" class="sxOrderFilter sxMFHiddenHolder" data-relation="##RELATION##" title="##RELATION_VIEW_NAME##">##RELATION_VIEW_NAME## <span class="sxOrderFilterAsc"></span><span class="sxOrderFilterDesc"></span></li>';
    self.sxOrderSelectMoreOptions = '<option selected="selected" disabled="disabled" hidden>Mehr</option>';

    // ### PRODUCTS PER PAGE
    self.sxProductsPerPage = '<option value="##RESULTS_PER_PAGE##">##RESULTS_PER_PAGE## Produkte pro Seite</option>';


    /* ############# CONTENT TEMPLATES ################ */
    self.sxPcoResultHeader = '<div class="sxResultHeader">\
            <h1>\
                <a id="sxTop" name="sxTop"></a>Die Suche nach "<span class="sxSearchQuery">##SEARCH_QUERY##</span>" ergab <span class="sxNumberOfResults">##PRODUCT_COUNT## Produkt-Treffer und ##CONTENT_COUNT## sonstige Ergebnisse</span>\
            </h1>\
            <div class="sxDesc">\
                ##DESC##\
            </div>\
            <div class="sxClear"></div>\
            <ul class="sxTabs">\
                <li id="sxProductTab">##PRODUCT_COUNT## Produkte</li>\
                <li id="sxContentTab">##CONTENT_COUNT## weitere Ergebnisse</li>\
            </ul>\
        </div>';

    self.sxPcoTextTheFollowingResultsCouldBeRelevant = 'Die folgenden Ergebnisse kÃ¶nnten jedoch relevant fÃ¼r die Suchanfrage sein';

    self.sxPcoResultContent = '<div class="sxResultContent">\
            <div class="sxRightContainer sxResultHolder"><div class="sxLoadingIndicator"></div>##PRODUCTS_HOLDER##</div>\
            <div class="sxRightContainer sxResultFooter">##PRODUCTS_FOOTER##</div>\
            <div class="sxRightContainer sxResultHolder"><div class="sxLoadingIndicator"></div><ul class="sxPcoProductGrid">##CONTENT_HOLDER##</ul></div>\
            <div class="sxRightContainer sxResultFooter">##CONTENT_FOOTER##</div>\
        </div>';
    self.sxPcoContentBox = '<li class="sxPcoContentBox ##CONTENT_BOX_TYPE## ##RENDER_IMG##" style="background-image: url(\'##CONTENT_IMG_SRC##\')"><a href="##CONTENT_LINK##"><h3>##CONTENT_TITLE##</h3><div class="sxPcoContentImgHolder">\
            <img src="##CONTENT_IMG_SRC##" alt="##CONTENT_TITLE##"></div></a><div class="sxPcoContentHolder"><a href="##CONTENT_LINK##">##CONTENT_LINK##</a><div class="sxPcoContent">##CONTENT##</div></div></li>';
    self.sxPcoProductFooter = '<div class="sxRightContainer sxResultFooter"><div class="sxPaginationHolder"><h2><a id="moreProducts" href="#products">Alle Produkte anzeigen</a></h2></div></div>';
    self.sxPcoContentFooter = '<div class="sxRightContainer sxResultFooter"><div class="sxPaginationHolder"><h2><a id="moreContent" href="#content">Alle weiteren Ergebnisse anzeigen</a></h2></div></div>';


    /* ############# CONTENT TEMPLATES ################ */
    self.sxContentResultHeader = '<div class="sxResultHeader">\
            <h1>\
                <a id="sxTop" name="sxTop"></a>Die Suche nach "<span class="sxSearchQuery">##SEARCH_QUERY##</span>" ergab <span class="sxNumberOfResults">##PRODUCT_COUNT## Treffer</span>\
            </h1>\
            <div class="sxClear"></div>\
            <ul class="sxTabs">\
                <li id="sxProductTab">##PRODUCT_COUNT## Produkte</li>\
                <li id="sxContentTab">##CONTENT_COUNT## weitere Ergebnisse</li>\
            </ul>\
        </div>';

    self.sxResultContent = '<div class="sxResultContent">\
            <div class="sxRightContainer sxResultHolder"><div class="sxLoadingIndicator"></div><ul class="sxPcoProductGrid">##CONTENT_HOLDER##</ul></div>\
            <div class="sxRightContainer sxResultFooter">##CONTENT_FOOTER##</div>\
        </div>';


    /* ############# SETTING PANEL ################ */
    self.settingsPanelHolder = '<div class="sxSPHolder"></div>';
    self.settingsPanelMessage = '<div class="sxSPMessage"></div>';
    self.settingsPanelLogin = '<div class="sxSPLogin">\
        <div class="sxSPMessenger">\
            <table border="0" cellpadding="0" cellspacing="0"><tr><td>User:</td><td><input id="sxSPUser" type="text" /></td></tr><tr><td>Password:</td><td><input id="sxSPPassword" type="password" /></td></tr></table>\
            <br/>\
            <div class="sxSPerrorMsg"></div>\
            <br/>\
            <button>Login</button>\
        </div></div>';
    self.settingsPanelSearchReport = '<div class="sxSPSrInfo">Query: &raquo;<span class="sxSPLastQuery">Smartphone</span>&laquo;, Status: <span class="sxSPStatus">unresolved</span></div>\
        <ul></ul>\
        <div class="sxSPMessenger">\
            <textarea></textarea>\
            <div class="sxSPerrorMsg"></div>\
            <button title="[ALT] + [S]">Send</button>\
        </div>';
    self.settingsPanel = '<div class="sxSettingsPanel"><div class="sxSPCloser">&times;</div><ul class="sxSPTabs"><li style="margin-left: 4px;" data-class="sxSPSearchReport">Search Report</li><li data-class="sxSPSettings">Settings</li></ul>\
        <div class="sxSPTabPanel sxSPSearchReport"></div>\
        <div class="sxSPTabPanel sxSPSettings">\
            <table border="0" cellpadding="0" cellspacing="0"><tbody>\
                <tr>\
                    <td>Internal Id:</td>\
                    <td><input id="sxSPInternalId" type="sx" placeholder="Internal Id" /></td>\
                    <td>The internal ID is used to mark queries from members of the company. Please enter some reference like Â´internalÂ´ or Â´name XYÂ´ to save it on this machine and send the id when searching.</td>\
                </tr>\
            </tbody></table>\
            <div class="sxSPMessenger">\
                <button title="[ALT] + [S]">Save</button>\
            </div>\
        </div></div>';


};

//# sourceMappingURL=manifest2.js.map
var UniBox=function(){function h(b){b=b||window.event;if(void 0!==b){var f=b.keyCode||b.which,c=k.val();if(27==f||13==f||9==f||c.length<I)a(b),13==f&&void 0!==S&&-1==g&&S.call(this,c),g=-1}else a(b),g=-1}function a(a){void 0!==f&&f.call(this,a,w.val());w.removeClass("uniboxActive");w.slideUp(H);m()}function c(a,b){var f=null;return function(){var c=this,d=arguments;clearTimeout(f);f=window.setTimeout(function(){a.apply(c,d)},b||50)}}function b(a,b){if(!aa)return a;var f=b.replace(/[^a-zA-Z0-9\u00e4\u00f6\u00fc\u00c4\u00d6\u00dc\u00df]|\s+|\r?\n|\r/gmi,
    " ").replace(/[^a-zA-Z0-9\u00e4\u00f6\u00fc\u00c4\u00d6\u00dc\u00df]/g," ").split(" ");f.sort(function(a,b){return b.length-a.length});var c={};jQuery.each(f,function(b,f){if(!(1>f.length)){var v=a.match(new RegExp("(("+f+")(?!#<##|-\\d+#<##))(?!.*\\1)","gi"));if(null!=v)for(var d=0;d<v.length;d++){var D=v[d],e=D.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");a=a.replace(new RegExp("("+e+")(?!#<##|-\\d+#<##)","g"),"##>#"+b+"-"+d+"#<##");c["##>#"+b+"-"+d+"#<##"]='<span class="unibox-highlight">'+
    D+"</span>"}}});for(var f=Object.keys(c).reverse(),d=0;d<f.length;d++){var D=f[d];a=a.replace(new RegExp(D,"gi"),c[D])}return a}function d(a){return a.replace(/[ "\u00a7$%&/(){}+*,.;|]/g,"_").toLowerCase()}function e(a){return String(a).replace(/[&<>"'\/]/g,function(a){return ha[a]})}function p(a){if(13==R)h();else{var f=k.val(),c=e(f);w.html("");var D=!1,f=!1,l=Object.keys(a.suggests);X&&0<X.length&&(l=X,jQuery.each(Object.keys(a.suggests),function(a,b){0>jQuery.inArray(b,l)&&l.push(b)}));jQuery.each(l,
    function(f,e){var g=a.suggests[e];if(!g||0==g.length)return!0;var k=0;jQuery.each(l,function(b,f){var c=a.suggests[f];if(!c||e===f||0==c.length)return!0;k+=c.length});var m=jQuery('<div class="unibox-suggest-cluster unibox-suggest-'+d(e)+" "+("unibox-"+g.length+"-entries")+" "+(0==k?"unibox-single-suggestion-block":"")+'"></div>');if(0<e.replace(/_/,"").length&&0<g.length){var t=jQuery("<h4>"+e+"</h4>");m.append(t)}jQuery.each(g,function(a,f){var d='<div class="unibox-selectable">';if(void 0!=f.image){var g=
        0===f.image.length&&z?z:0===f.image.length||0===f.image.indexOf("/")||0===f.image.indexOf("http")?f.image:y+f.image,d=d+('<div class="unibox-selectable-img-container"><img src="'+g+'"'),l=new Image;l.src=g;l.complete||(d+=' style="display: none;" onload="this.style.display=null;"');d+="/></div>"}void 0!=f.link&&""!=f.link?(d+='<a class="uniboxSearchContent" href="'+f.link+'">',d+=b(f.name,c),d+="</a>"):d+='<span class="uniboxSearchContent">'+b(f.name,c)+"</span>";if(void 0!=E){for(var g=E.match(/##(.*?)##/gi),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  l=E,k=!1,t=0;t<g.length;t++){var r=g[t];if(void 0!==r&&0!=r.length){var n=r.replace(/#/g,""),n=f[n];void 0==n?k=!0:l=l.replace(new RegExp(r,"g"),n)}}k||(d+='<div class="unibox-extra">'+l+"</div>")}d+='<div class="unibox-ca"></div></div>';void 0!==T&&(d=T.call(this,d,e,a,f));d=jQuery(d);m.append(d);D=!0});w.append(m)});B=t.find(".unibox-selectable");M&&0<M.length&&(B=[],jQuery.each(M,function(a,b){B=B.concat(t.find(".unibox-suggest-"+d(b)+":first .unibox-selectable").get())}),jQuery.each(jQuery.grep(Object.keys(a.suggests),
    function(a){if(0>M.indexOf(a))return!0}),function(a,b){B=B.concat(t.find(".unibox-suggest-"+d(b)+":first .unibox-selectable").get())}));g=-1;jQuery(B).mousedown(function(){var a=jQuery(this).find(".uniboxSearchContent:first").text();k.val(a);var b=void 0;try{b=jQuery(this).find("a:first").attr("href")}catch(f){}void 0!=L&&L.call(this,a,b);h()});t.find(".unibox-selectable .unibox-extra").click(function(a){a.stopPropagation()});if(void 0!=a.words){0<a.words.length&&0<U.length&&("all"==P||"bottom"==
P)&&(w.append("<h4>"+U+"</h4>"),D=!0);var m=[];jQuery.each(a.words,function(a,b){if("all"==P||"bottom"==P)void 0!=b.overlayImage?w.append('<img class="unibox-vis" src="'+y+b.overlayImage+'" style="background-image: url(\''+y+b.image+"');background-size: 75%;background-repeat: no-repeat;background-position: center;\">"):void 0!=b.image&&w.append('<img class="unibox-vis" src="'+y+b.image+'">');var f=t.find("#unibox-invisible");f.css("padding",k.css("padding"));f.html(c.replace(new RegExp(b.name,"gi"),
    "<span>"+b.name+"</span>"));"all"!=P&&"top"!=P||-1!=jQuery.inArray(b.image,F)?-1<jQuery.inArray(b.image,F)&&m.push(b.image):(f=t.find("#unibox-invisible span")[0],void 0!=f&&0<b.name.length&&void 0!=b.image&&(f=jQuery(f).position().left,visImage=jQuery('<div class="unibox-ivf"><img src="'+y+b.image+'" alt="'+b.name+'"></div>'),visImage.css("left",n().left+f-10),visImage.css("top",n().top-k.outerHeight()+q),t.append(visImage),setTimeout(function(){t.find(".unibox-ivf").find("img").addClass("l")},10),
    m.push(b.image)))});F=m}jQuery("img").on("error",function(){z?jQuery(this).attr("src",z):jQuery(this).hide()});r();void 0==V||D||(f=D=!0,w.append(V));D?(w.is(":visible")?(w.addClass("uniboxActive"),w.css("left",n().left),w.css("top",n().top)):w.slideDown(H,function(){w.addClass("uniboxActive");w.css("left",n().left);w.css("top",n().top)}),ca&&!f&&w.append(ca)):h()}}function n(){return{left:k.offset().left-t.offset().left,top:k.offset().top-t.offset().top+k.outerHeight()}}function l(){for(var a=t.find(".unibox-ivf img").map(function(){return jQuery(this).attr("src")}).get(),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     b=0;b<a.length;b++)-1==jQuery.inArray(a[b].replace(y,""),F)&&t.find('.unibox-ivf:has(img[src*="'+a[b]+'"])').remove()}function m(){F=[];t.find(".unibox-ivf").remove()}function G(a){1>=k.val().length&&m();void 0!=Y&&Y.call(this,a,k.val());if(37!=a.keyCode&&38!=a.keyCode&&39!=a.keyCode&&40!=a.keyCode&&13!=a.keyCode)l();else{if(38==a.keyCode&&0<g)g--;else if(40==a.keyCode)g++;else if(38==a.keyCode&&0>=g)g=(-1!=g?g-1:g)+B.length;else if((37==a.keyCode||39==a.keyCode)&&-1<g){g%=B.length;var b=jQuery(B[g]).closest(".unibox-suggest-cluster"),
    f;37==a.keyCode?f=b.prev():39==a.keyCode&&(f=b.next());f.hasClass("unibox-suggest-cluster")&&(b=f.find("div.unibox-selectable")[0],g=jQuery("#unibox-suggest-box div.unibox-selectable").index(b))}0<B.length&&-1<g&&(g%=B.length,jQuery(B).removeClass("active"),jQuery(B[g]).addClass("active"));if(13==a.keyCode){a.preventDefault();a.stopPropagation();if(void 0!=L){if(a=k.val(),b=void 0,-1!=g){a=t.find(".unibox-selectable.active .uniboxSearchContent:first").text();k.val(a);try{b=jQuery(t.find(".unibox-selectable.active")[0]).find("a").attr("href")}catch(c){}void 0!=
L&&L.call(this,a,b)}}else-1!=g&&(window.location.href=jQuery(t.find(".unibox-selectable.active")[0]).find("a").attr("href"));return!1}-1<g&&a.preventDefault()}}function u(a){18==R?R=a.keyCode:(R=a.keyCode,(37==a.keyCode||39==a.keyCode)&&-1<g||38==a.keyCode||40==a.keyCode||13==a.keyCode||9==a.keyCode||(a=k.val(),46==R&&0==a.length&&m(),a.length>=I&&(da=a,jQuery.ajax({usedQuery:a,url:J+encodeURIComponent(a),dataType:"json",success:function(a){this.usedQuery==da&&p(a)}}))))}function r(){var a=jQuery("#unibox-suggest-box"),
    b=a.css("border-width").replace("px","");a.css("min-width",k.outerWidth()-2*b);void 0==O?a.css("max-width",k.outerWidth()-2*b):a.css("max-width",O-2*b);a.css("left",n().left);a.css("top",n().top)}var g=-1,k,t,w,J="",y="",q=-80,z,x,B=[],aa=!0,E,T,H=300,U="",I=2,S,L,Y,D,f,Z,F=[],P="all",R=-1,da="",ea=!1,X=[],M=[],O=void 0,V=void 0,W=void 0,ca=void 0,ia=!0,ha={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};return{updateSuggests:function(a){p(a)},updateSuggestUrl:function(a){J=
    a},hideSuggestBox:function(){h()},setIvfImagePath:function(a){y=a;"/"!=y.charAt(y.length-1)&&(y+="/")},changeInstantVisualFeedbackState:function(a){P=a},render:function(){r()},getText:function(){return k.val()},init:function(b,d){k=b;t=d.searchBoxContainer;aa=d.highlight;E=d.extraHtml;T=d.lineCallback;J=d.suggestUrl;y=d.ivfImagePath;q=d.ivfImageOffset;z=d.missingErrorImage;x=d.throttleTime;H=d.animationSpeed;I=d.minChars;S=d.enterCallback;L=d.enterCallbackResult;Y=d.typeCallback;D=d.focusCallback;
    f=d.blurCallback;Z=d.placeholder;P=d.instantVisualFeedback;U=d.queryVisualizationHeadline;ea=d.showDeleteAllButton;X=d.suggestOrder;M=d.suggestSelectionOrder;O=d.maxWidth;V=d.noSuggests;W=d.emptyQuerySuggests;ca=d.showMoreResults;ia=d.disableEventPropagationHtml;k.attr("autocomplete","off");w=jQuery('<div id="unibox-suggest-box"></div>');t.prepend(w);"absolute"!=t.css("position")&&t.css("position","relative");var v=w.css("border-width").replace("px","");w.css("min-width",k.outerWidth()-2*v);w.css("max-width",
        d.maxWidth-2*v);k.keydown(G);k.keydown(c(u,x));k.keyup(h);k.focus(function(a){a=a||window.event;a.stopPropagation();0<jQuery(this).val().length?u({keyCode:-1}):void 0!=W&&p(W);void 0!==D&&D.call(this,a,jQuery(this).val())});w.mouseenter(function(){w.find(".unibox-selectable.active").removeClass("active")});jQuery("html").click(function(b){w.hasClass("uniboxActive")&&a(b)});k.keydown(function(b){b=b||window.event;9==(b.keyCode||b.which)&&a(b)});k.focusout(function(b){b=b||window.event;setTimeout(function(){0===
    jQuery(document.activeElement).parents("#unibox-suggest-box").length&&a(b)},10)});ia&&(k.click(function(a){a.stopPropagation()}),w.click(function(a){a.stopPropagation()}));(Z=(v=k.attr("placeholder"))&&0<v.length?v:Z)&&0<Z.length&&("placeholder"in document.createElement("input")||(k.focus(function(){var a=jQuery(this).attr("placeholder");a&&0<a.length&&""!=a&&jQuery(this).val()==a&&jQuery(this).val("").removeClass("hasPlaceholder")}).blur(function(){var a=jQuery(this).attr("placeholder");a&&0<a.length&&
    ""!=a&&(""==jQuery(this).val()||jQuery(this).val()==a)&&jQuery(this).val(a).addClass("hasPlaceholder")}),k.val(Z)),k.attr("placeholder",Z));v=jQuery('<div id="unibox-invisible">&nbsp;<span>&nbsp;</span></div>');t.append(v);if(ea){var e=jQuery('<div id="unibox-dab-holder"><div id="unibox-dab"></div></div>');t.append(e);jQuery(e).mousedown(function(a){(a||window.event).stopPropagation();k.val("");k.focus();return!1});k.focus(function(){0<k.val().length?e.show():e.hide()}).blur(function(){e.hide()}).keydown(function(){0<
    jQuery(this).val().length&&jQuery(e).show()});var g=parseInt(k.css("paddingTop").replace("px","").trim()),l=k.outerHeight(),v=parseInt(k.css("borderTopWidth").replace("px","").trim()),m=k.css("boxShadow").match(/\d{1,3}px/g),m=m&&2<m.length?parseInt(m[2].replace("px","").trim()):0;e.height(l-2*v-m-g);g=parseInt(k.css("paddingRight").replace("px","").trim());g=25<g?g:25;k.css("paddingRight",g);l=v+m+(k.offset().top-k.parent().offset().top-k.parent().scrollTop());v=Math.abs(k[0].getBoundingClientRect().left-
            k.parent()[0].getBoundingClientRect().left)+k.outerWidth()-e.outerWidth()-v-g;e.css("top",l);e.css("left",v)}"none"==P&&jQuery("#unibox-invisible").css("display","none")}}};
(function(h){h.fn.unibox=function(a){var c=this.map(function(b,c){c=h(c);var e=h.extend({suggestUrl:"",ivfImagePath:"",ivfImageOffset:-80,missingErrorImage:void 0,queryVisualizationHeadline:"",highlight:!0,throttleTime:50,animationSpeed:300,instantVisualFeedback:"all",enterCallback:void 0,enterCallbackResult:void 0,typeCallback:void 0,focusCallback:void 0,blurCallback:void 0,placeholder:void 0,extraHtml:void 0,lineCallback:void 0,noSuggests:void 0,emptyQuerySuggests:void 0,minChars:3,maxWidth:c.outerWidth(),
    showDeleteAllButton:!1,suggestOrder:[],suggestSelectionOrder:[]},a);e.searchBoxContainer=void 0==e.searchBoxContainerSelector?c.parent():h(e.searchBoxContainerSelector);var p=new UniBox;p.init(c,e);return p}),c=h.makeArray(c);return 1==c.length?c[0]:c}})(jQuery);
var sxUniboxWrapper=function(h){var a=this;a.uniboxObjs=void 0;a.searchConfig=h.searchConfig;a.uniboxConfig=h.uniboxConfig;a.initUnibox=function(c,b){a.uniboxConfig.suggestUrl=a.uniboxConfig.suggestUrl?a.uniboxConfig.suggestUrl:a.searchConfig.base+"/queries/semanticSuggest?apiKey="+a.searchConfig.apiKey+"&customerId="+a.searchConfig.customerId+(void 0!==a.uniboxConfig.limitSuggest?"&limit="+a.uniboxConfig.limitSuggest:"")+(void 0!==a.uniboxConfig.limitSearch?"&limitSearch="+a.uniboxConfig.limitSearch:
    "")+(void 0!==a.uniboxConfig.limitCategory?"&limitCategory="+a.uniboxConfig.limitCategory:"")+(void 0!==a.uniboxConfig.limitProduct?"&limitProduct="+a.uniboxConfig.limitProduct:"")+(void 0!==a.uniboxConfig.limitBrand?"&limitBrand="+a.uniboxConfig.limitBrand:"")+(void 0!==a.uniboxConfig.limitCategoryFeature?"&limitCategoryFeature="+a.uniboxConfig.limitCategoryFeature:"")+(void 0!==a.uniboxConfig.limitContent?"&limitContent="+a.uniboxConfig.limitContent:"")+(void 0!==a.searchConfig.userGroup?"&userGroup="+
a.searchConfig.userGroup:"")+"&query=";a.uniboxConfig.enterCallbackResult=function(a,c){void 0!==c&&0<c.length?window.location=c:(b.resetEverything(),b.prepareSearch(a));document.activeElement.blur()};a.uniboxConfig.enterCallback=function(a,c){void 0!==a&&""!=a&&0!==a.length&&(b.resetEverything(),b.prepareSearch(a),document.activeElement.blur())};a.uniboxConfig.ivfImagePath="//login.semknox.com/images/ivf/";c?(a.uniboxObjs=jQuery(c).unibox(a.uniboxConfig),console.log("sx: ..sxUniboxWrapper initializing done for one given node!")):
    (a.uniboxObjs=jQuery(a.searchConfig.searchField).unibox(a.uniboxConfig),console.log("sx: ..sxUniboxWrapper initializing done for "+jQuery(a.searchConfig.searchField).length+" given node(s)!"));void 0===window.sxUniboxes&&(sxUniboxes=[]);var d=c?jQuery(c):jQuery(a.searchConfig.searchField),d=jQuery.isArray(d)?d:[d];jQuery.each(d,function(a,b){sxUniboxes.push(b)});sxUniboxes=jQuery.unique(sxUniboxes);b&&b.cleanUniboxes();jQuery(document).trigger("sxUniboxReady");return a.uniboxObjs}};
(function(h){if("function"===typeof define&&define.amd)define("nouislider",[],h);else if("object"===typeof exports){var a=require("fs");module.exports=h();module.exports.css=function(){return a.readFileSync(__dirname+"/nouislider.min.css","utf8")}}else window.noUiSlider=h()})(function(){function h(a){return a.filter(function(a){return this[a]?!1:this[a]=!0},{})}function a(a){var b=a.getBoundingClientRect();a=a.ownerDocument.documentElement;var c=n();/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&
(c.x=0);return{top:b.top+c.y-a.clientTop,left:b.left+c.x-a.clientLeft}}function c(a){return"number"===typeof a&&!isNaN(a)&&isFinite(a)}function b(a,b,c){e(a,b);setTimeout(function(){p(a,b)},c)}function d(a){return Array.isArray(a)?a:[a]}function e(a,b){a.classList?a.classList.add(b):a.className+=" "+b}function p(a,b){a.classList?a.classList.remove(b):a.className=a.className.replace(new RegExp("(^|\\b)"+b.split(" ").join("|")+"(\\b|$)","gi")," ")}function n(){var a=void 0!==window.pageXOffset,b="CSS1Compat"===
    (document.compatMode||"");return{x:a?window.pageXOffset:b?document.documentElement.scrollLeft:document.body.scrollLeft,y:a?window.pageYOffset:b?document.documentElement.scrollTop:document.body.scrollTop}}function l(a,b){return 100*b/(a[1]-a[0])}function m(a,b){for(var c=1;a>=b[c];)c+=1;return c}function G(a,b,d){"number"===typeof b&&(b=[b]);if("[object Array]"!==Object.prototype.toString.call(b))throw Error("noUiSlider: 'range' contains invalid value.");a="min"===a?0:"max"===a?100:parseFloat(a);if(!c(a)||
    !c(b[0]))throw Error("noUiSlider: 'range' value isn't numeric.");d.xPct.push(a);d.xVal.push(b[0]);a?d.xSteps.push(isNaN(b[1])?!1:b[1]):isNaN(b[1])||(d.xSteps[0]=b[1])}function u(a,b,c){if(!b)return!0;c.xSteps[a]=l([c.xVal[a],c.xVal[a+1]],b)/(100/(c.xPct[a+1]-c.xPct[a]))}function r(a,b,c,d){this.xPct=[];this.xVal=[];this.xSteps=[d||!1];this.xNumSteps=[!1];this.snap=b;this.direction=c;var e;b=[];for(e in a)a.hasOwnProperty(e)&&b.push([a[e],e]);b.length&&"object"===typeof b[0][0]?b.sort(function(a,b){return a[0][0]-
    b[0][0]}):b.sort(function(a,b){return a[0]-b[0]});for(e=0;e<b.length;e++)G(b[e][1],b[e][0],this);this.xNumSteps=this.xSteps.slice(0);for(e=0;e<this.xNumSteps.length;e++)u(e,this.xNumSteps[e],this)}function g(a,b){if(!c(b))throw Error("noUiSlider: 'step' is not numeric.");a.singleStep=b}function k(a,b){if("object"!==typeof b||Array.isArray(b))throw Error("noUiSlider: 'range' is not an object.");if(void 0===b.min||void 0===b.max)throw Error("noUiSlider: Missing 'min' or 'max' in 'range'.");if(b.min===
    b.max)throw Error("noUiSlider: 'range' 'min' and 'max' cannot be equal.");a.spectrum=new r(b,a.snap,a.dir,a.singleStep)}function t(a,b){b=d(b);if(!Array.isArray(b)||!b.length||2<b.length)throw Error("noUiSlider: 'start' option is incorrect.");a.handles=b.length;a.start=b}function w(a,b){a.snap=b;if("boolean"!==typeof b)throw Error("noUiSlider: 'snap' option must be a boolean.");}function J(a,b){a.animate=b;if("boolean"!==typeof b)throw Error("noUiSlider: 'animate' option must be a boolean.");}function y(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 b){a.animationDuration=b;if("number"!==typeof b)throw Error("noUiSlider: 'animationDuration' option must be a number.");}function q(a,b){if("lower"===b&&1===a.handles)a.connect=1;else if("upper"===b&&1===a.handles)a.connect=2;else if(!0===b&&2===a.handles)a.connect=3;else if(!1===b)a.connect=0;else throw Error("noUiSlider: 'connect' option doesn't match handle count.");}function z(a,b){switch(b){case "horizontal":a.ort=0;break;case "vertical":a.ort=1;break;default:throw Error("noUiSlider: 'orientation' option is invalid.");
}}function x(a,b){if(!c(b))throw Error("noUiSlider: 'margin' option must be numeric.");if(0!==b&&(a.margin=a.spectrum.getMargin(b),!a.margin))throw Error("noUiSlider: 'margin' option is only supported on linear sliders.");}function B(a,b){if(!c(b))throw Error("noUiSlider: 'limit' option must be numeric.");a.limit=a.spectrum.getMargin(b);if(!a.limit)throw Error("noUiSlider: 'limit' option is only supported on linear sliders.");}function aa(a,b){switch(b){case "ltr":a.dir=0;break;case "rtl":a.dir=1;
    a.connect=[0,2,1,3][a.connect];break;default:throw Error("noUiSlider: 'direction' option was not recognized.");}}function E(a,b){if("string"!==typeof b)throw Error("noUiSlider: 'behaviour' must be a string containing options.");var c=0<=b.indexOf("tap"),d=0<=b.indexOf("drag"),e=0<=b.indexOf("fixed"),g=0<=b.indexOf("snap"),l=0<=b.indexOf("hover");if(d&&!a.connect)throw Error("noUiSlider: 'drag' behaviour must be used with 'connect': true.");a.events={tap:c||g,drag:d,fixed:e,snap:g,hover:l}}function T(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             b){var c;if(!1!==b)if(!0===b)for(a.tooltips=[],c=0;c<a.handles;c++)a.tooltips.push(!0);else{a.tooltips=d(b);if(a.tooltips.length!==a.handles)throw Error("noUiSlider: must pass a formatter for all handles.");a.tooltips.forEach(function(a){if("boolean"!==typeof a&&("object"!==typeof a||"function"!==typeof a.to))throw Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");})}}function H(a,b){a.format=b;if("function"===typeof b.to&&"function"===typeof b.from)return!0;throw Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
}function U(a,b){if(void 0!==b&&"string"!==typeof b&&!1!==b)throw Error("noUiSlider: 'cssPrefix' must be a string or `false`.");a.cssPrefix=b}function I(a,b){if(void 0!==b&&"object"!==typeof b)throw Error("noUiSlider: 'cssClasses' must be an object.");if("string"===typeof a.cssPrefix){a.cssClasses={};for(var c in b)b.hasOwnProperty(c)&&(a.cssClasses[c]=a.cssPrefix+b[c])}else a.cssClasses=b}function S(a){var b={margin:0,limit:0,animate:!0,animationDuration:300,format:Y},c;c={step:{r:!1,t:g},start:{r:!0,
    t:t},connect:{r:!0,t:q},direction:{r:!0,t:aa},snap:{r:!1,t:w},animate:{r:!1,t:J},animationDuration:{r:!1,t:y},range:{r:!0,t:k},orientation:{r:!1,t:z},margin:{r:!1,t:x},limit:{r:!1,t:B},behaviour:{r:!0,t:E},format:{r:!1,t:H},tooltips:{r:!1,t:T},cssPrefix:{r:!1,t:U},cssClasses:{r:!1,t:I}};var d={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",cssPrefix:"noUi-",cssClasses:{target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",
    horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",ltr:"ltr",rtl:"rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",stacking:"stacking",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",
    valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"}};Object.keys(c).forEach(function(e){if(void 0===a[e]&&void 0===d[e]){if(c[e].r)throw Error("noUiSlider: '"+e+"' is required.");return!0}c[e].t(b,void 0===a[e]?d[e]:a[e])});b.pips=a.pips;b.style=b.ort?"top":"left";return b}function L(c,f,g){function l(a,b){var c=document.createElement("div"),d=document.createElement("div"),v=[f.cssClasses.handleLower,f.cssClasses.handleUpper];a&&v.reverse();e(d,
    f.cssClasses.handle);e(d,v[b]);e(c,f.cssClasses.origin);c.appendChild(d);return c}function k(a,b){if(!f.tooltips[b])return!1;var c=document.createElement("div");c.className=f.cssClasses.tooltip;return a.firstChild.appendChild(c)}function m(){f.dir&&f.tooltips.reverse();var a=A.map(k);f.dir&&(a.reverse(),f.tooltips.reverse());ma("update",function(b,c,d){a[c]&&(a[c].innerHTML=!0===f.tooltips[c]?b[c]:f.tooltips[c].to(d[c]))})}function t(a,b,c){if("range"===a||"steps"===a)return C.xVal;if("count"===a){a=
    100/(b-1);var d,e=0;for(b=[];100>=(d=e++*a);)b.push(d);a="positions"}if("positions"===a)return b.map(function(a){return C.fromStepping(c?C.getStep(a):a)});if("values"===a)return c?b.map(function(a){return C.fromStepping(C.getStep(C.toStepping(a)))}):b}function r(a,b,c){var d=C.direction,e={},v=C.xVal[0],f=C.xVal[C.xVal.length-1],g=!1,l=!1,k=0;C.direction=0;c=h(c.slice().sort(function(a,b){return a-b}));c[0]!==v&&(c.unshift(v),g=!0);c[c.length-1]!==f&&(c.push(f),l=!0);c.forEach(function(d,v){var f,
    m,t,r=c[v+1],n,fa,p,q;"steps"===b&&(f=C.xNumSteps[v]);f||(f=r-d);if(!1!==d&&void 0!==r)for(m=d;m<=r;m=(m+f).toFixed(7)/1){n=C.toStepping(m);t=n-k;p=t/a;p=Math.round(p);q=t/p;for(t=1;t<=p;t+=1)fa=k+t*q,e[fa.toFixed(5)]=["x",0];p=-1<c.indexOf(m)?1:"steps"===b?2:0;!v&&g&&(p=0);m===r&&l||(e[n.toFixed(5)]=[m,p]);k=n}});C.direction=d;return e}function G(a,b,c){function d(a,b,c){var e=b===f.cssClasses.value;return'class="'+(b+" "+(e?m:t)[f.ort]+" "+(e?l:k)[c[1]])+'" style="'+f.style+": "+a+'%"'}var v=document.createElement("div"),
    g="",l=[f.cssClasses.valueNormal,f.cssClasses.valueLarge,f.cssClasses.valueSub],k=[f.cssClasses.markerNormal,f.cssClasses.markerLarge,f.cssClasses.markerSub],m=[f.cssClasses.valueHorizontal,f.cssClasses.valueVertical],t=[f.cssClasses.markerHorizontal,f.cssClasses.markerVertical];e(v,f.cssClasses.pips);e(v,0===f.ort?f.cssClasses.pipsHorizontal:f.cssClasses.pipsVertical);Object.keys(a).forEach(function(e){var v=e;e=a[e];C.direction&&(v=100-v);e[1]=e[1]&&b?b(e[0],e[1]):e[1];g+="<div "+d(v,f.cssClasses.marker,
        e)+"></div>";e[1]&&(g+="<div "+d(v,f.cssClasses.value,e)+">"+c.to(e[0])+"</div>")});v.innerHTML=g;return v}function u(a){var b=a.mode,c=a.density||1,d=a.filter||!1,e=t(b,a.values||!1,a.stepped||!1),b=r(c,b,e);return K.appendChild(G(b,d,a.format||{to:Math.round}))}function w(){var a=Q.getBoundingClientRect(),b="offset"+["Width","Height"][f.ort];return 0===f.ort?a.width||Q[b]:a.height||Q[b]}function q(a,b,c){var e;for(e=0;e<f.handles;e++)if(-1===N[e])return;void 0!==b&&1!==f.handles&&(b=Math.abs(b-
    f.dir));Object.keys(H).forEach(function(e){var v=e.split(".")[0];a===v&&H[e].forEach(function(a){a.call(L,d(ja()),b,d(y(Array.prototype.slice.call(I))),c||!1,N)})})}function y(a){return 1===a.length?a[0]:f.dir?a.reverse():a}function J(a,b,c,d){var e=function(b){if(K.hasAttribute("disabled"))return!1;var e=K,v=f.cssClasses.tap;if(e.classList?e.classList.contains(v):(new RegExp("\\b"+v+"\\b")).test(e.className))return!1;e=d.pageOffset;b.preventDefault();var v=0===b.type.indexOf("touch"),g=0===b.type.indexOf("mouse"),
    l=0===b.type.indexOf("pointer"),k,m;0===b.type.indexOf("MSPointer")&&(l=!0);v&&(k=b.changedTouches[0].pageX,m=b.changedTouches[0].pageY);e=e||n();if(g||l)k=b.clientX+e.x,m=b.clientY+e.y;b.pageOffset=e;b.points=[k,m];b.cursor=g||l;if(a===ba.start&&void 0!==b.buttons&&1<b.buttons||d.hover&&b.buttons)return!1;b.calcPoint=b.points[f.ort];c(b,d)},v=[];a.split(" ").forEach(function(a){b.addEventListener(a,e,!1);v.push([a,e])});return v}function x(a,b){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===
    a.buttons&&0!==b.buttonsProperty)return z(a,b);var c=b.handles||A,d,e=!1,e=100*(a.calcPoint-b.start)/b.baseSize,v=c[0]===A[0]?0:1;var f=b.positions;d=e+f[0];e+=f[1];1<c.length?(0>d&&(e+=Math.abs(d)),100<e&&(d-=e-100),d=[Math.max(Math.min(d,100),0),Math.max(Math.min(e,100),0)]):d=[d,e];e=ga(c[0],d[v],1===c.length);if(1<c.length){if(e=ga(c[1],d[v?0:1],!1)||e)for(c=0;c<b.handles.length;c++)q("slide",c)}else e&&q("slide",v)}function z(a,b){var c=Q.querySelector("."+f.cssClasses.active),d=b.handles[0]===
A[0]?0:1;null!==c&&p(c,f.cssClasses.active);a.cursor&&(document.body.style.cursor="",document.body.removeEventListener("selectstart",document.body.noUiListener));var e=document.documentElement;e.noUiListeners.forEach(function(a){e.removeEventListener(a[0],a[1])});p(K,f.cssClasses.drag);q("set",d);q("change",d);void 0!==b.handleNumber&&q("end",b.handleNumber)}function E(a,b){"mouseout"===a.type&&"HTML"===a.target.nodeName&&null===a.relatedTarget&&z(a,b)}function B(a,b){var c=document.documentElement;
    if(1===b.handles.length){if(b.handles[0].hasAttribute("disabled"))return!1;e(b.handles[0].children[0],f.cssClasses.active)}a.preventDefault();a.stopPropagation();var d=J(ba.move,c,x,{start:a.calcPoint,baseSize:w(),pageOffset:a.pageOffset,handles:b.handles,handleNumber:b.handleNumber,buttonsProperty:a.buttons,positions:[N[0],N[A.length-1]]}),v=J(ba.end,c,z,{handles:b.handles,handleNumber:b.handleNumber}),g=J("mouseout",c,E,{handles:b.handles,handleNumber:b.handleNumber});c.noUiListeners=d.concat(v,
        g);a.cursor&&(document.body.style.cursor=getComputedStyle(a.target).cursor,1<A.length&&e(K,f.cssClasses.drag),c=function(){return!1},document.body.noUiListener=c,document.body.addEventListener("selectstart",c,!1));void 0!==b.handleNumber&&q("start",b.handleNumber)}function v(c){var d=c.calcPoint,e=0,v;c.stopPropagation();A.forEach(function(b){e+=a(b)[f.style]});v=d<e/2||1===A.length?0:1;A[v].hasAttribute("disabled")&&(v=v?0:1);d-=a(Q)[f.style];d=100*d/w();f.events.snap||b(K,f.cssClasses.tap,f.animationDuration);
    if(A[v].hasAttribute("disabled"))return!1;ga(A[v],d);q("slide",v,!0);q("set",v,!0);q("change",v,!0);f.events.snap&&B(c,{handles:[A[v]]})}function fa(b){b=b.calcPoint-a(Q)[f.style];b=C.getStep(100*b/w());var c=C.fromStepping(b);Object.keys(H).forEach(function(a){"hover"===a.split(".")[0]&&H[a].forEach(function(a){a.call(L,c)})})}function ga(a,b,c){var d=a!==A[0]?1:0,v=N[0]+f.margin,g=N[1]-f.margin,l=N[0]+f.limit,k=N[1]-f.limit;1<A.length&&(b=d?Math.max(b,v):Math.min(b,g));!1!==c&&f.limit&&1<A.length&&
(b=d?Math.min(b,l):Math.max(b,k));b=C.getStep(b);b=Math.max(Math.min(b,100),0);if(b===N[d])return!1;window.requestAnimationFrame?window.requestAnimationFrame(function(){a.style[f.style]=b+"%"}):a.style[f.style]=b+"%";a.previousSibling||(p(a,f.cssClasses.stacking),50<b&&e(a,f.cssClasses.stacking));N[d]=b;I[d]=C.fromStepping(b);q("update",d);return!0}function na(a,c){var e,v=d(a);c=void 0===c?!0:!!c;f.dir&&1<f.handles&&v.reverse();f.animate&&-1!==N[0]&&b(K,f.cssClasses.tap,f.animationDuration);e=1<
A.length?3:1;1===v.length&&(e=1);var g,l,k;f.limit&&(e+=1);for(g=0;g<e;g+=1)l=g%2,k=v[l],null!==k&&!1!==k&&("number"===typeof k&&(k=String(k)),k=f.format.from(k),(!1===k||isNaN(k)||!1===ga(A[l],C.toStepping(k),g===3-f.dir))&&q("update",l));for(e=0;e<A.length;e++)null!==v[e]&&c&&q("set",e)}function ja(){var a,b=[];for(a=0;a<f.handles;a+=1)b[a]=f.format.to(I[a]);return y(b)}function ma(a,b){H[a]=H[a]||[];H[a].push(b);"update"===a.split(".")[0]&&A.forEach(function(a,b){q("update",b)})}var ba=window.navigator.pointerEnabled?
{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},K=c,N=[-1,-1],Q,A,C=f.spectrum,I=[],H={},L;if(K.noUiSlider)throw Error("Slider was already initialized.");Q=function(a,b,c){e(c,f.cssClasses.target);0===a?e(c,f.cssClasses.ltr):e(c,f.cssClasses.rtl);0===b?e(c,f.cssClasses.horizontal):e(c,f.cssClasses.vertical);a=document.createElement("div");
    e(a,f.cssClasses.base);c.appendChild(a);return a}(f.dir,f.ort,K);A=function(a,b,c){var d,e=[];for(d=0;d<a;d+=1)e.push(c.appendChild(l(b,d)));return e}(f.handles,f.dir,Q);(function(a,b,c){switch(a){case 1:e(b,f.cssClasses.connect);e(c[0],f.cssClasses.background);break;case 3:e(c[1],f.cssClasses.background);case 2:e(c[0],f.cssClasses.connect);case 0:e(b,f.cssClasses.background)}})(f.connect,K,A);f.pips&&u(f.pips);f.tooltips&&m();L={destroy:function(){for(var a in f.cssClasses)f.cssClasses.hasOwnProperty(a)&&
p(K,f.cssClasses[a]);for(;K.firstChild;)K.removeChild(K.firstChild);delete K.noUiSlider},steps:function(){var a=N.map(function(a,b){var c=C.getApplicableStep(a),d=String(c[2]).split("."),e=100===a?null:c[2],d=Number((I[b]-c[2]).toFixed(1<d.length?d[1].length:0));return[0===a?null:d>=c[1]?c[2]:c[0]||!1,e]});return y(a)},on:ma,off:function(a){var b=a&&a.split(".")[0],c=b&&a.substring(b.length);Object.keys(H).forEach(function(a){var d=a.split(".")[0],e=a.substring(d.length);b&&b!==d||c&&c!==e||delete H[a]})},
    get:ja,set:na,updateOptions:function(a,b){var c=ja(),d=S({start:[0,0],margin:a.margin,limit:a.limit,step:void 0===a.step?f.singleStep:a.step,range:a.range,animate:a.animate,snap:void 0===a.snap?f.snap:a.snap});["margin","limit","range","animate"].forEach(function(b){void 0!==a[b]&&(f[b]=a[b])});d.spectrum.direction=C.direction;C=d.spectrum;N=[-1,-1];na(a.start||c,b)},options:g,target:K,pips:u};(function(a){a.fixed||A.forEach(function(a,b){J(ba.start,a.children[0],B,{handles:[a],handleNumber:b})});
    a.tap&&J(ba.start,Q,v,{handles:A});a.hover&&J(ba.move,Q,fa,{hover:!0});if(a.drag){var b=[Q.querySelector("."+f.cssClasses.connect)];e(b[0],f.cssClasses.draggable);a.fixed&&b.push(A[b[0]===A[0]?1:0].children[0]);b.forEach(function(a){J(ba.start,a,B,{handles:A})})}})(f.events);return L}r.prototype.getMargin=function(a){return 2===this.xPct.length?l(this.xVal,a):!1};r.prototype.toStepping=function(a){var b=this.xVal,c=this.xPct;if(a>=b.slice(-1)[0])a=100;else{var d=m(a,b),e,g;e=b[d-1];g=b[d];b=c[d-1];
    c=c[d];e=[e,g];a=l(e,0>e[0]?a+Math.abs(e[0]):a-e[0]);a=b+a/(100/(c-b))}this.direction&&(a=100-a);return a};r.prototype.fromStepping=function(a){this.direction&&(a=100-a);var b;var c=this.xVal;b=this.xPct;if(100<=a)b=c.slice(-1)[0];else{var d=m(a,b),e,g;e=c[d-1];g=c[d];c=b[d-1];e=[e,g];b=100/(b[d]-c)*(a-c)*(e[1]-e[0])/100+e[0]}return b};r.prototype.getStep=function(a){this.direction&&(a=100-a);var b=this.xPct,c=this.xSteps,d=this.snap;if(100!==a){var e=m(a,b);d?(c=b[e-1],b=b[e],a=a-c>(b-c)/2?b:c):
    (c[e-1]?(c=c[e-1],b=b[e-1]+Math.round((a-b[e-1])/c)*c):b=a,a=b)}this.direction&&(a=100-a);return a};r.prototype.getApplicableStep=function(a){var b=m(a,this.xPct);a=100===a?2:1;return[this.xNumSteps[b-2],this.xVal[b-a],this.xNumSteps[b-a]]};r.prototype.convert=function(a){return this.getStep(this.toStepping(a))};var Y={to:function(a){return void 0!==a&&a.toFixed(2)},from:Number};return{create:function(a,b){if(!a.nodeName)throw Error("noUiSlider.create requires a single element.");var c=S(b,a),d=L(a,
    c,b);d.set(c.start);return a.noUiSlider=d}}});
(function(){function h(a,b){return a.substring(0,b.length)===b}function a(a,b,c){if((a[b]||a[c])&&a[b]===a[c])throw Error(b);}function c(a,b,c,d,e,g,k,t,n,p,h,q){k=q;var z,x=h="";g&&(q=g(q));if("number"!==typeof q||!isFinite(q))return!1;!1!==a&&0===parseFloat(q.toFixed(a))&&(q=0);0>q&&(z=!0,q=Math.abs(q));!1!==a&&(g=Math.pow(10,a),q=(Math.round(q*g)/g).toFixed(a));q=q.toString();-1!==q.indexOf(".")&&(a=q.split("."),q=a[0],c&&(h=c+a[1]));b&&(q=q.split("").reverse().join("").match(/.{1,3}/g),q=q.join(b.split("").reverse().join("")).split("").reverse().join(""));
    z&&t&&(x+=t);d&&(x+=d);z&&n&&(x+=n);x=x+q+h;e&&(x+=e);p&&(x=p(x,k));return x}function b(a,b,c,d,e,g,k,t,n,p,y,q){var z;a="";y&&(q=y(q));if(!q||"string"!==typeof q)return!1;t&&h(q,t)&&(q=q.replace(t,""),z=!0);d&&h(q,d)&&(q=q.replace(d,""));n&&h(q,n)&&(q=q.replace(n,""),z=!0);if(d=e)d=q.slice(-1*e.length)===e;d&&(q=q.slice(0,-1*e.length));b&&(q=q.split(b).join(""));c&&(q=q.replace(c,"."));z&&(a+="-");a=(a+q).replace(/[^0-9\.\-.]/g,"");if(""===a)return!1;a=Number(a);k&&(a=k(a));return"number"===typeof a&&
isFinite(a)?a:!1}function d(b){var c,d,e,r={};for(c=0;c<n.length;c+=1)if(d=n[c],e=b[d],void 0===e)r[d]="negative"!==d||r.negativeBefore?"mark"===d&&"."!==r.thousand?".":!1:"-";else if("decimals"===d)if(0<=e&&8>e)r[d]=e;else throw Error(d);else if("encoder"===d||"decoder"===d||"edit"===d||"undo"===d)if("function"===typeof e)r[d]=e;else throw Error(d);else if("string"===typeof e)r[d]=e;else throw Error(d);a(r,"mark","thousand");a(r,"prefix","negative");a(r,"prefix","negativeBefore");return r}function e(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          b,c){var d,e=[];for(d=0;d<n.length;d+=1)e.push(a[n[d]]);e.push(c);return b.apply("",e)}function p(a){if(!(this instanceof p))return new p(a);"object"===typeof a&&(a=d(a),this.to=function(b){return e(a,c,b)},this.from=function(c){return e(a,b,c)})}var n="decimals thousand mark prefix postfix encoder decoder negativeBefore negative edit undo".split(" ");window.wNumb=p})();
var localstore={s:window.localStorage,type:"localStorage",set:function(h,a){return this.s.setItem(h,JSON.stringify(a)),a},get:function(h){h=this.s.getItem(h);if("string"==typeof h)try{return JSON.parse(h)}catch(a){return h||void 0}},remove:function(h){this.s.removeItem(h)},removeAll:function(){this.s.clear()},getAll:function(){for(var h={},a=0;a<this.s.length;a++){var c=this.s.key(a);h[c]=this.get(c)}return h}},sessionstore={s:window.sessionStorage,type:"sessionStorage",set:localstore.set,get:localstore.get,
    remove:localstore.remove,removeAll:localstore.removeAll,getAll:localstore.getAll},cookiestore={s:document.cookie,type:"cookie",set:function(h,a,c,b,d){a=void 0!==a&&"object"==typeof a?JSON.stringify(a):encodeURIComponent(a);document.cookie=h+"="+a+(c?"; expires="+(new Date(c)).toUTCString():"")+"; path="+(b||"/")+(d?"; secure":"")},get:function(h){var a=this.getAllRawOrProcessed(!1);return a.hasOwnProperty(h)?this.processValue(a[h]):void 0},processValue:function(h){if("{"==h.substring(0,1))try{return JSON.parse(h)}catch(a){return h}return"undefined"==
h?void 0:decodeURIComponent(h)},getAllRawOrProcessed:function(h){var a=document.cookie.split("; "),c={};if(1===a.length&&""===a[0])return c;for(var b=0;b<a.length;b++){var d=a[b].split("=");c[d[0]]=h?this.processValue(d[1]):d[1]}return c},getAll:function(){return this.getAllRawOrProcessed(!0)},remove:function(h){this.set(h,"",-1)},removeAll:function(){var h=this.getAll(),a;for(a in h)this.remove(a);return this.getAll()}};window.store="undefined"!=typeof Storage?localstore:cookiestore;
(function(h){if("function"===typeof define&&define.amd){if("undefined"!==typeof requirejs){var a="[history"+(new Date).getTime()+"]",c=requirejs.onError;h.toString=function(){return a};requirejs.onError=function(b){-1===b.message.indexOf(a)&&c.call(requirejs,b)}}define([],h)}if("object"===typeof exports&&"undefined"!==typeof module)module.exports=h();else return h()})(function(){function h(){}function a(b,c,d){if(null==b||""===b||c){if(b=c?b:q.href,!E||d)b=b.replace(/^[^#]*/,"")||"#",b=q.protocol.replace(/:.*$|$/,
        ":")+"//"+q.host+F.basepath+b.replace(new RegExp("^#[/]?(?:"+F.type+")?"),"")}else{c=a();var e=t.getElementsByTagName("base")[0];!d&&e&&e.getAttribute("href")&&(e.href=e.href,c=a(e.href,null,!0));d=c._pathname;e=c._protocol;b=""+b;b=/^(?:\w+\:)?\/\//.test(b)?0===b.indexOf("/")?e+b:b:e+"//"+c._host+(0===b.indexOf("/")?b:0===b.indexOf("?")?d+b:0===b.indexOf("#")?d+c._search+b:d.replace(/[^\/]+$/g,"")+b)}P.href=b;b=/(?:([a-zA-Z0-9\-]+\:))?(?:\/\/(?:[^@]*@)?([^\/:\?#]+)(?::([0-9]+))?)?([^\?#]*)(?:(\?[^#]+)|\?)?(?:(#.*))?/.exec(P.href);
    c=b[2]+(b[3]?":"+b[3]:"");d=b[4]||"/";var e=b[5]||"",g="#"===b[6]?"":b[6]||"",k=d+e+g,f=d.replace(new RegExp("^"+F.basepath,"i"),F.type)+e;return{_href:b[1]+"//"+c+k,_protocol:b[1],_host:c,_hostname:b[2],_port:b[3]||"",_pathname:d,_search:e,_hash:g,_relative:k,_nohash:f,_special:f+g}}function c(){var a;try{a=k.sessionStorage,a.setItem("__historyAPI__t","1"),a.removeItem("__historyAPI__t")}catch(b){a={getItem:function(a){a=t.cookie.split(a+"=");return 1<a.length&&a.pop().split(";").shift()||"null"},
    setItem:function(a,b){var c={};if(c[q.href]=x.state)t.cookie=a+"="+y.stringify(c)}}}try{O=y.parse(a.getItem("__historyAPI__"))||{}}catch(b){O={}}D(I+"unload",function(){a.setItem("__historyAPI__",y.stringify(O))},!1)}function b(a,b,c,d){var e=0;c||(c={set:h},e=1);var g=!c.set,t=!c.get,n={configurable:!0,set:function(){g=1},get:function(){t=1}};try{H(a,b,n),a[b]=a[b],H(a,b,c)}catch(l){}if(!g||!t)if(a.__defineGetter__&&(a.__defineGetter__(b,n.get),a.__defineSetter__(b,n.set),a[b]=a[b],c.get&&a.__defineGetter__(b,
        c.get),c.set&&a.__defineSetter__(b,c.set)),!g||!t){if(e)return!1;if(a===k){try{var m=a[b];a[b]=null}catch(l){}if("execScript"in k)k.execScript("Public "+b,"VBScript"),k.execScript("var "+b+";","JavaScript");else try{H(a,b,{value:h})}catch(l){"onpopstate"===b&&(D("popstate",c=function(){f("popstate",c,!1);var b=a.onpopstate;a.onpopstate=null;setTimeout(function(){a.onpopstate=b},1)},!1),ea=0)}a[b]=m}else try{try{var r=J.create(a);H(J.getPrototypeOf(r)===a?r:a,b,c);for(var p in a)"function"===typeof a[p]&&
(r[p]=a[p].bind(a));try{d.call(r,r,a)}catch(l){}a=r}catch(l){H(a.constructor.prototype,b,c)}}catch(l){return!1}}return a}function d(a,b,c){c=c||{};a=a===la?q:a;c.set=c.set||function(c){a[b]=c};c.get=c.get||function(){return a[b]};return c}function e(a,b,c){a in V?V[a].push(b):3<arguments.length?D(a,b,c,arguments[3]):D(a,b,c)}function p(a,b,c){var d=V[a];if(d)for(a=d.length;a--;){if(d[a]===b){d.splice(a,1);break}}else f(a,b,c)}function n(a,c){var d=(""+("string"===typeof a?a:a.type)).replace(/^on/,
    ""),e=V[d];if(e){c="string"===typeof a?c:a;if(null==c.target)for(var g=["target","currentTarget","srcElement","type"];a=g.pop();)c=b(c,a,{get:"type"===a?function(){return d}:function(){return k}});ea&&(("popstate"===d?k.onpopstate:k.onhashchange)||h).call(k,c);for(var g=0,f=e.length;g<f;g++)e[g].call(k,c);return!0}return Z(a,c)}function l(){var a=t.createEvent?t.createEvent("Event"):t.createEventObject();a.initEvent?a.initEvent("popstate",!1,!1):a.type="popstate";a.state=x.state;n(a)}function m(b,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        c,d,e){E?R=q.href:(0===M&&(M=2),c=a(c,2===M&&-1!==(""+c).indexOf("#")),c._relative!==a()._relative&&(R=e,d?q.replace("#"+c._special):q.hash=c._special));!T&&b&&(O[q.href]=b);X=!1}function G(b){var c=R;R=q.href;if(c){da!==q.href&&l();b=b||k.event;var c=a(c,!0),d=a();b.oldURL||(b.oldURL=c._href,b.newURL=d._href);c._hash!==d._hash&&n(b)}}function u(a){setTimeout(function(){D("popstate",function(a){da=q.href;T||(a=b(a,"state",{get:function(){return x.state}}));n(a)},!1)},0);!E&&!0!==a&&"location"in x&&
(g(U.hash),X&&(X=!1,l()))}function r(b){b=b||k.event;var c;a:{for(c=b.target||b.srcElement;c;){if("A"===c.nodeName)break a;c=c.parentNode}c=void 0}var d="defaultPrevented"in b?b.defaultPrevented:!1===b.returnValue;c&&"A"===c.nodeName&&!d&&(d=a(),c=a(c.getAttribute("href",2)),d._href.split("#").shift()===c._href.split("#").shift()&&c._hash&&(d._hash!==c._hash&&(U.hash=c._hash),g(c._hash),b.preventDefault?b.preventDefault():b.returnValue=!1))}function g(a){var b=t.getElementById(a=(a||"").replace(/^#/,
    ""));b&&b.id===a&&"A"===b.nodeName&&(a=b.getBoundingClientRect(),k.scrollTo(w.scrollLeft||0,a.top+(w.scrollTop||0)-(w.clientTop||0)))}var k=("object"===typeof window?window:this)||{};if(!k.history||"emulate"in k.history)return k.history;var t=k.document,w=t.documentElement,J=k.Object,y=k.JSON,q=k.location,z=k.history,x=z,B=z.pushState,aa=z.replaceState,E=function(){var a=k.navigator.userAgent;return-1===a.indexOf("Android 2.")&&-1===a.indexOf("Android 4.0")||-1===a.indexOf("Mobile Safari")||-1!==
a.indexOf("Chrome")||-1!==a.indexOf("Windows Phone")?!!B:!1}(),T="state"in z,H=J.defineProperty,U=b({},"t")?{}:t.createElement("a"),I="",S=k.addEventListener?"addEventListener":(I="on","attachEvent"),L=k.removeEventListener?"removeEventListener":"detachEvent",Y=k.dispatchEvent?"dispatchEvent":"fireEvent",D=k[S],f=k[L],Z=k[Y],F={basepath:"/",redirect:0,type:"/",init:0},P=t.createElement("a"),R=q.href,da="",ea=1,X=!1,M=0,O={},V={},W=t.title,ca,ia={onhashchange:null,onpopstate:null},ha=function(a,b){var c=
    k.history!==z;c&&(k.history=z);a.apply(z,b);c&&(k.history=x)},ka={setup:function(a,b,c){F.basepath=(""+(null==a?F.basepath:a)).replace(/(?:^|\/)[^\/]*$/,"/");F.type=null==b?F.type:b;F.redirect=null==c?F.redirect:!!c},redirect:function(b,c){x.setup(c,b);c=F.basepath;if(k.top==k.self){var d=a(null,!1,!0)._relative,e=q.pathname+q.search;E?(e=e.replace(/([^\/])$/,"$1/"),d!=c&&(new RegExp("^"+c+"$","i")).test(e)&&q.replace(d)):e!=c&&(e=e.replace(/([^\/])\?/,"$1/?"),(new RegExp("^"+c,"i")).test(e)&&q.replace(c+
    "#"+e.replace(new RegExp("^"+c,"i"),F.type)+q.hash))}},pushState:function(a,b,c){var d=t.title;null!=W&&(t.title=W);B&&ha(B,arguments);m(a,c);t.title=d;W=b},replaceState:function(a,b,c){var d=t.title;null!=W&&(t.title=W);delete O[q.href];aa&&ha(aa,arguments);m(a,c,!0);t.title=d;W=b},location:{set:function(a){0===M&&(M=1);k.location=a},get:function(){0===M&&(M=1);return U}},state:{get:function(){return"object"===typeof O[q.href]?y.parse(y.stringify(O[q.href])):"undefined"!==typeof O[q.href]?O[q.href]:
    null}}},la={assign:function(a){E||0!==(""+a).indexOf("#")?q.assign(a):m(null,a)},reload:function(a){q.reload(a)},replace:function(a){E||0!==(""+a).indexOf("#")?q.replace(a):m(null,a,!0)},toString:function(){return this.href},origin:{get:function(){return void 0!==ca?ca:q.origin?q.origin:q.protocol+"//"+q.hostname+(q.port?":"+q.port:"")},set:function(a){ca=a}},href:E?null:{get:function(){return a()._href}},protocol:null,host:null,hostname:null,port:null,pathname:E?null:{get:function(){return a()._pathname}},
    search:E?null:{get:function(){return a()._search}},hash:E?null:{set:function(a){m(null,(""+a).replace(/^(#|)/,"#"),!1,R)},get:function(){return a()._hash}}};if(function(){var e=t.getElementsByTagName("script"),e=(e[e.length-1]||{}).src||"";(-1!==e.indexOf("?")?e.split("?").pop():"").replace(/(\w+)(?:=([^&]*))?/g,function(a,b,c){F[b]=(c||"").replace(/^(0|false)$/,"")});D(I+"hashchange",G,!1);var g=[la,U,ia,k,ka,x];T&&delete ka.state;for(var l=0;l<g.length;l+=2)for(var n in g[l])if(g[l].hasOwnProperty(n))if("object"!==
        typeof g[l][n])g[l+1][n]=g[l][n];else{e=d(g[l],n,g[l][n]);if(!b(g[l+1],n,e,function(a,b){b===x&&(k.history=x=g[l+1]=a)}))return f(I+"hashchange",G,!1),!1;g[l+1]===k&&(V[n]=V[n.substr(2)]=[])}x.setup();F.redirect&&x.redirect();F.init&&(M=1);!T&&y&&c();if(!E)t[S](I+"click",r,!1);"complete"===t.readyState?u(!0):(E||a()._relative===F.basepath||(X=!0),D(I+"load",u,!1));return!0}())return x.emulate=!E,k[S]=e,k[L]=p,k[Y]=n,x});
var sxFilterGenerator=function(h){var a=this;a.filterConfig=h.filterConfig;a.mobile=h.searchConfig.mobile;a.formattedFilters=[];a.setFilters={};a.initialRangeFilterValues={};a.lastRangeInputOnFocus=void 0;a.iconPath="//login.semknox.com/images/ivf/";a.lastReceivedFilters=void 0;a.lastReceivedFiltersSet=void 0;a.generateSearchFilters=function(){var c=[];for(filterObj in a.setFilters){var b=a.setFilters[filterObj];if(void 0===b.type){var d=jQuery.grep(a.lastReceivedFilters,function(a){return a.id==
    filterObj});0<d.length&&(b.type=d[0].type)}"RANGE"==b.type?c.push({id:filterObj,minValue:b.minValue,maxValue:b.maxValue,unitName:b.unitName}):"MULTI_SELECT"==b.type&&c.push({id:filterObj,values:b.optionsSet})}a.formattedFilters=c};a.reset=function(){a.formattedFilters=[];a.setFilters={};a.initialRangeFilterValues={};a.lastReceivedFilters=void 0;a.lastReceivedFiltersSet=void 0};a.renderFilter=function(c,b,d,e){jQuery(a.filterConfig.filterContainer).empty();a.formattedFilters=[];a.lastReceivedFilters=
    c;a.lastReceivedFiltersSet=b;c.sort(function(a,b){return a.position==b.position?0:a.position>b.position?1:-1});if(void 0!=c){jQuery.each(c,function(b,c){var m=jQuery('<div class="sxFilterNode"></div>');"RANGE"===c.type?m=a.renderRangeFilter(b,c,a.lastReceivedFiltersSet,d,e):"MULTI_SELECT"===c.type&&(m=void 0!==a.filterConfig.useSpecialColorFilter&&a.filterConfig.useSpecialColorFilter&&"Farbe"==c.viewName?a.renderSpecialColorFilter(b,c,a.lastReceivedFiltersSet,d,e):a.renderMultiSelectFilter(b,c,a.lastReceivedFiltersSet,
    d,e));m.find(".sxMsHeader, .sxSliderHeader").on("click",function(){var a=jQuery(".sxFilterNode.sxSelected");0<a.length?(a.toggleClass("sxSelected"),a.siblings().removeClass("sxSelectedReversed")):(a=jQuery(this).parent(),a.toggleClass("sxSelected"),a.siblings().addClass("sxSelectedReversed"),jQuery("body")[0].scrollTop=a.offset().top)});jQuery(a.filterConfig.filterContainer).append(m)});for(var p in b)break;p&&(p=jQuery('<div class="sxFilterNode"><div class="sxDeleteFilters">Alle Filter l\u00f6schen</div></div>'),
    p.on("mousedown",function(){a.reset();e()}),jQuery(a.filterConfig.filterContainer).append(p),a.mobile&&(jQuery(".sxFilterContainer:first").addClass("active"),jQuery(".sxFilterShow").addClass("active"),jQuery("body")[0].scrollTop=jQuery(".sxContainer .sxFilterNode:first").offset().top));jQuery(a.filterConfig.filterContainer).append('<div class="sxClear"></div>');c&&0<c.length&&jQuery(".sxContainer").css("minHeight",jQuery(".sxFilterContainer:first").height()+"px");a.setFilters={};void 0!==b&&(a.setFilters=
    b,a.generateSearchFilters());jQuery(document).trigger("sxFilterRenderingFinished")}};a.renderRangeFilter=function(c,b,d,e,p){var n=localTemplates.sxFilterSliderTemplate.replace(/##FILTER_TYPE##/g,"sxRangeFilter");c=b.min;var l=b.max,m=b.step;-1<m.toString().indexOf(".00")&&(m=parseInt(m));var h=0;-1<m.toString().indexOf(".")&&(h=2);jQuery.isEmptyObject(d)&&(a.initialRangeFilterValues[b.id]={min:c,max:l});var u=c,r=l;d&&d[b.id]&&r>d[b.id].minValue&&u<d[b.id].minValue&&(u=d[b.id].minValue);d&&d[b.id]&&
r>d[b.id].maxValue&&u<d[b.id].maxValue&&(r=d[b.id].maxValue);var g="";d&&d[b.id]&&(n=n.replace(/##FILTER_SET##/g,"sxFilterSet"),g+="("+d[b.id].minValue+" - "+r+" "+b.unitName+")");n=n.replace(/##FILTER_NAME##/g,b.viewName).replace(/##FILTER_SET##/g,"").replace(/##SLIDER_CONTAINER##/g,'<div class="sxSliderHolder sxMFHiddenHolder"></div>').replace(/##SLIDER_MIN_VALUE##/g,c).replace(/##SLIDER_MAX_VALUE##/g,l).replace(/##FILTER_SELECTED_OPTIONS##/g,g).replace(/##SLIDER_UNIT_NAME##/g,b.unitName);d=jQuery(n);
    var k=d.find(".sxSliderHolder:first"),n="drag",g=!1;c===l&&(c-=m,l+=m,n="fixed",g=!0);noUiSlider.create(k[0],{start:[u,r],connect:!0,step:m,behaviour:n,range:{min:c,max:l},format:wNumb({decimals:h})});g||(d.find(".sxLeftSliderValue, .sxRightSliderValue").on("mousedown",function(a){a.preventDefault();jQuery(this).find(".sxFrInput:first").focus()}),d.find(".sxLeftSliderValue .sxFrInput:first, .sxRightSliderValue .sxFrInput:first").on("mousedown keydown",function(a){a.stopPropagation();13==a.which&&
    (a.currentTarget.innerHTML=a.currentTarget.innerHTML.replace(",","."),jQuery(this).parents(".sxSliderValues:first").find("button").click())}),d.find("button").on("click",function(c){var d=jQuery(this).parents(".sxSliderValues:first");c=d.find(".sxLeftSliderValue .sxFrInput:first").text();d=d.find(".sxRightSliderValue .sxFrInput:first").text();jQuery.isNumeric(c)&&jQuery.isNumeric(d)&&(c=parseFloat(c),d=parseFloat(d),c<d&&0<=c&&0<=d&&(c===d&&(parseFloat(c)===parseFloat(b.min)?d=(parseFloat(d)+b.step).toString():
    parseFloat(d)===parseFloat(b.max)&&(c=(parseFloat(c)-b.step).toString())),a.setFilters[b.id]={minValue:c,maxValue:d,type:b.type,unitName:b.unitName},a.generateSearchFilters(),p(e)))}),k[0].noUiSlider.on("update",function(a,b){(b?jQuery(k[0]).parent().find(".sxRightSliderValue .sxFrInput:first"):jQuery(k[0]).parent().find(".sxLeftSliderValue .sxFrInput:first")).text(a[b])}),k[0].noUiSlider.on("set",function(c,d){var g=c[0],k=c[1];g===k&&(parseFloat(g)===parseFloat(b.min)?k=(parseFloat(k)+b.step).toString():
    parseFloat(k)===parseFloat(b.max)&&(g=(parseFloat(g)-b.step).toString()));a.setFilters[b.id]={minValue:g,maxValue:k,type:b.type,unitName:b.unitName};a.generateSearchFilters();p(e)}));return d};a.getRangeInputLength=function(a,b){var d=a.toString(),e=d.indexOf(".");-1<e&&2>=d.length-e?d+="0":0>e&&0<b?d+=".00":-1<e&&0===b&&(d=parseInt(Math.ceil(a).toString()));d=jQuery('<span class="sxInputSizeEstimator sxSliderValues">'+d+"</span>");jQuery("body").append(d);d=d[0].getBoundingClientRect().width;return Math.ceil(d)};
    a.renderMultiSelectFilter=function(c,b,d,e,p){c=localTemplates.sxFilterMultiSelectTemplate.replace(/##FILTER_TYPE##/g,"sxMultiselect");var n=d&&d[b.id],l=[],m=[];jQuery.each(b.options,function(a,c){n&&-1<jQuery.inArray(c.id,d[b.id].optionsSet)?(c.set=!0,l.push(c)):(c.set=!1,m.push(c))});l.sort(function(a,b){a=a.viewName;b=b.viewName;return a==b?0:a<b?-1:1});m.sort(function(a,b){a=a.position;b=b.position;return a==b?0:a<b?-1:1});var m=l.reduceRight(function(a,b){a.unshift(b);return a},m),h='<ul class="sxMsHolder sxMFHiddenHolder">',
        u=[];jQuery.each(m,function(a,c){c.set&&u.push(c.viewName);h+='<li class="sxMsCheckbox '+(7<a&&!c.set?"sxMsHidden":"")+'" data-count="'+(c.count&&0<c.count?c.count:0)+'" data-name="'+c.viewName+'" data-position="'+c.position+'">                                        <input type="checkbox" value="'+c.id+'" class="sxMsInputCheckbox" id="sxMs_'+b.id+"_"+c.id+'" name="'+b.id+'" '+(c.set?' checked="checked"':"")+'/>                                        <label for="sxMs_'+b.id+"_"+c.id+'"><span class="sxMsCheckboxStyle"><span>&nbsp;</span></span><span class="sxMsOptionName">'+
        c.viewName+(c.count&&0<c.count?'<span class="sxMsOptionCount">('+c.count+")</span>":"")+"</span></label>                                    </li>"});8<b.options.length&&(h+=localTemplates.sxFilterMultiSelectMoreTemplate.replace("##NUM_MORE_FILTERS##",b.options.length-8));h+="</ul>";0<u.length&&(c=c.replace(/##FILTER_SET##/g,"sxFilterSet"),u="("+u.join(", ")+")");c=c.replace(/##FILTER_NAME##/g,b.viewName).replace(/##FILTER_SET##/g,"").replace(/##MS_CONTAINER##/g,h).replace(/##FILTER_SELECTED_OPTIONS##/g,
        u).replace(/##FILTERORDER_DISABLER##/g,8<b.options.length?"":"sxMsFilterOrderDisabled");c=jQuery(c);c.find(".sxMsHolder :checkbox").change(function(){var c=jQuery(this).parents(".sxMsHolder:first").find(":checkbox:checked").map(function(a){return jQuery(this).val()}).get();0<c.length?a.setFilters[b.id]={optionsSet:c,type:b.type}:delete a.setFilters[b.id];a.generateSearchFilters();p(e)});c.find(".sxMsOrder, .sxMsOrderHolder label").click(function(a){a.stopPropagation();a=jQuery(this);var b=a.data("type"),
        c=!1;void 0===b?(a=a.parents("label:first"),b=a.data("type"),c=jQuery(this).hasClass("sxMsOrderAsc")?!0:!1,jQuery(".sxMsOrder.active").removeClass("active"),jQuery(this).addClass("active"),jQuery(".sxMsOrderReset").show()):"reset"==b?(jQuery(".sxMsOrder.active").removeClass("active"),jQuery(".sxMsOrderReset").hide(),c=!0):(c=a.hasClass("sxMsAscOrdered")?!1:!0,jQuery(".sxMsOrder.active").removeClass("active"),a.find(".sxMsOrder."+(c?"sxMsOrderAsc":"sxMsOrderDesc")).addClass("active"),jQuery(".sxMsOrderReset").show());
        jQuery(".sxMsAscOrdered").removeClass("sxMsAscOrdered");c&&"reset"!=b&&a.addClass("sxMsAscOrdered");var d="position";switch(b){case "alpha":d="name";break;case "number":d="count";break;default:d="position"}a=jQuery(this).parents(".sxMultiselect:first").find(".sxMsHolder:first");b=a.find('.sxMsCheckbox:not(".sxMsMoreHolder")');b.detach().sort(function(a,b){a=jQuery(a).data(d);b=jQuery(b).data(d);return a==b?0:a<b?c?-1:1:c?1:-1});b.removeClass("sxMsHidden").each(function(a,b){7<a&&jQuery(b).addClass("sxMsHidden")});
        a.prepend(b);return!1});c.find("input.sxMsFilter").on("input",function(){var a=jQuery(this).val().toLowerCase(),b=jQuery(this).parents(".sxMultiselect:first").find(".sxMsHolder:first"),c=b.find('.sxMsCheckbox:not(".sxMsMoreHolder")');0<a.length?(c.removeClass("sxMsHidden").each(function(b,c){0>jQuery(c).data("name").toLowerCase().indexOf(a)?jQuery(c).hide():jQuery(c).show()}),b.find(".sxMsMoreHolder:first").addClass("active")):(c.removeClass("sxMsHidden").each(function(a,b){jQuery(b).show();7<a&&
    jQuery(b).addClass("sxMsHidden")}),b.find(".sxMsMoreHolder:first").removeClass("active"))});c.find(".sxMsMoreHolder").on("click",function(){jQuery(this).hasClass("active")?(jQuery(this).parents(".sxMsHolder:first").find(".sxMsCheckbox:not(.sxMsMoreHolder)").slice(8).addClass("sxMsHidden"),jQuery(this).removeClass("active")):(jQuery(this).parents(".sxMsHolder:first").find(".sxMsHidden").removeClass("sxMsHidden"),jQuery(this).addClass("active"))});return c};a.renderSpecialColorFilter=function(c,b,d,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    e,p){c=localTemplates.sxFilterMultiSelectColorTemplate.replace(/##FILTER_TYPE##/g,"sxMultiselect");var n=d&&d[b.id],l=[],m=[];jQuery.each(b.options,function(a,c){n&&-1<jQuery.inArray(c.id,d[b.id].optionsSet)?(c.set=!0,l.push(c)):(c.set=!1,m.push(c))});l.sort(function(a,b){a=a.viewName;b=b.viewName;return a==b?0:a<b?-1:1});m.sort(function(a,b){a=a.position;b=b.position;return a==b?0:a<b?-1:1});var m=l.reduceRight(function(a,b){a.unshift(b);return a},m),h='<ul class="sxMsHolder sxMFHiddenHolder">',
        u=[];jQuery.each(m,function(c,d){d.set&&u.push(d.viewName);h+='<li class="sxMsColorbox '+(d.set?"active":n?"inactive":"")+" sxColorFilter_"+(d.value?d.value:b.id+"_"+d.id)+" "+(void 0==d.icon||-1<d.icon.indexOf("ffffff")?"sxColorFilterBordered":"")+'" title="'+d.viewName+'" data-name="'+d.viewName+'" data-position="'+d.position+'">                                        <input type="checkbox" value="'+d.id+'" class="sxMsInputCheckbox" id="sxMs_'+b.id+"_"+d.id+'" name="'+b.id+'" '+(d.set?' checked="checked"':
            "")+'/>                                        <label for="sxMs_'+b.id+"_"+d.id+'">'+d.viewName+'</label>                                        <span class="sxMsColorFilterIcon" style="background-image: url(\''+a.iconPath+d.icon+"')\"></span>                                    </li>"});h+="</ul>";0<u.length&&(c=c.replace(/##FILTER_SET##/g,"sxFilterSet"),u="("+u.join(", ")+")");c=c.replace(/##FILTER_NAME##/g,b.viewName).replace(/##FILTER_SET##/g,"").replace(/##FILTER_SELECTED_OPTIONS##/g,u).replace(/##MS_CONTAINER##/g,
        h);c=jQuery(c);c.find(".sxMsHolder :checkbox").change(function(){var c=jQuery(this).parents(".sxMsHolder:first").find(":checkbox:checked").map(function(a){return jQuery(this).val()}).get();0<c.length?a.setFilters[b.id]={optionsSet:c,type:b.type}:delete a.setFilters[b.id];a.generateSearchFilters();p(e)});return c}},sxOrderGenerator=function(h){var a=this;a.orderConfig=h.orderConfig;a.sxConfig=h;a.currentOrder={};a.formattedOrder={};a.lastReceivedOrders={};a.localCallbackOnOrdering=void 0;a.orderOptionToPlaceFirst=
    void 0;a.generateSearchOrder=function(){a.formattedOrder={};for(orderId in a.currentOrder)a.formattedOrder={},a.formattedOrder={id:orderId,direction:a.currentOrder[orderId]}};a.reset=function(){a.currentOrder={};a.formattedOrder={};a.lastReceivedOrders={};a.orderOptionToPlaceFirst=void 0};a.renderOrderFilter=function(c,b,d,e){a.localCallbackOnOrdering=e;jQuery(a.orderConfig.orderContainer).empty();0===Object.keys(a.lastReceivedOrders).length&&(a.lastReceivedOrders=c);b&&0<Object.keys(b).length&&(void 0===
a.orderOptionToPlaceFirst||-1===a.orderOptionToPlaceFirst)&&(a.orderOptionToPlaceFirst=parseInt(Object.keys(b)[0]));if(c&&0<c.length){var p=-1;jQuery.each(c,function(b,c){p=c.id===a.orderOptionToPlaceFirst?b:p});-1<p&&c.splice(0,0,c.splice(p,1)[0])}a.formattedOrder={};if(void 0!==c){var n="",l="",m=!1;jQuery.each(c,function(a,c){var d=localTemplates.sxOrderFilterTemplate,d=d.replace(/##RELATION_ID##/g,c.id).replace(/##RELATION##/g,c.id).replace(/##RELATION_VIEW_NAME##/g,c.viewName?c.viewName:c.id);
    b&&0<Object.keys(b).length&&void 0!==b[c.id]&&0<b[c.id].length&&(l="("+(void 0!==c.viewName?c.viewName:c.id)+("ASC"===b[c.id]?'<span class="sxOrderFilterAsc active"></span>':' <span class="sxOrderFilterDesc active"></span>')+")",m=!0);n+=d});var h=localTemplates.sxOrderFilterContainerTemplate,h=h.replace("##ORDER_FILTERS##",n).replace("##ORDER_SELECTED_OPTION##",l),u=jQuery(h);u.find(".sxOrderFilter").on("mousedown",function(b){a.setOrder(this,void 0,e,d)});jQuery(a.orderConfig.orderContainer).append(u);
    m&&$(".sxOrderContainer").addClass("sxOrderSet");u.find(".sxOrderHeader").on("mousedown",function(){var a=jQuery(".sxFilterNode.sxSelected, .sxOrderContainer.sxSelected");0<a.length?(a.toggleClass("sxSelected"),a.siblings().removeClass("sxSelectedReversed")):(a=jQuery(this).parent(),a.toggleClass("sxSelected"),a.siblings().addClass("sxSelectedReversed"),jQuery("body")[0].scrollTop=a.offset().top)});a.currentOrder={};if(b&&0<Object.keys(b).length){var h=void 0,r="ASC",g;for(g in b)h=g,r=b[h];g=u.find("#sxOrderFilter_"+
        h.replace(/\./g,"_"));h&&g&&0<g.length&&a.setOrder(g,r,void 0,d)}else u.find(".sxOrderFilter:first").addClass("active");a.renderOrderSelectBox(c,b,d,e)}};a.renderOrderSelectBox=function(c,b,d,e){var p=0,n=9999,l=[],m=void 0;c=jQuery.grep(jQuery(".sxOrderContainer:first li"),function(a){m=m?m:jQuery(a).parent().outerHeight();var b=jQuery(a).outerWidth();if(a.offsetTop>=m)return b<n&&(n=b),!0;p+=jQuery(a).outerWidth();l.push(a);return!1});var h="";if(0<c.length){jQuery.each(c,function(a,b){var c=localTemplates.sxOrderSelectOptionTemplate,
    d=jQuery(b).data("relation"),e=jQuery(b).attr("title");void 0!=d&&void 0!=e&&(h+=c.replace(/##RELATION##/g,d).replace("##RELATION_VIEW_NAME##",e))});h=localTemplates.sxOrderSelectMoreOptions+h;e=jQuery(localTemplates.sxOrderSelectContainerTemplate);c=e.find("select:first");c.html(h);jQuery(".sxOrderContainer:first").prepend(e);for(e=c.outerWidth();0>=jQuery(".sxOrderContainer:first").outerWidth()-(p+e)-8&&0!=l.length;){var u=l.pop(),r=jQuery(u).outerWidth(),p=p-r;r<n&&(n=r);var r=localTemplates.sxOrderSelectOptionTemplate,
    g=jQuery(u).data("relation"),u=jQuery(u).attr("title"),r=r.replace(/##RELATION##/g,g).replace("##RELATION_VIEW_NAME##",u);c.prepend(jQuery(r))}c.on("change",function(b){b=jQuery(this).find(":selected");a.orderOptionToPlaceFirst=jQuery(b).data("relation");a.setOrder(b,void 0,a.localCallbackOnOrdering,d)})}jQuery(document).trigger("sxOrderingReady",[b])};a.setOrder=function(c,b,d,e){var p=jQuery(c).data("relation");jQuery(".sxOrderFilter span").removeClass("active");jQuery(".sxOrderFilter").removeClass("active");
    a.currentOrder[p]?"ASC"==a.currentOrder[p]?(a.currentOrder[p]="DESC",jQuery(c).find(".sxOrderFilterDesc").addClass("active")):(a.currentOrder[p]="ASC",jQuery(c).find(".sxOrderFilterAsc").addClass("active")):"resetter"===p?a.currentOrder={}:(a.currentOrder={},"ASC"===b||void 0==b?(a.currentOrder[p]="ASC",jQuery(c).find(".sxOrderFilterAsc").addClass("active")):"DESC"===b&&(a.currentOrder[p]="DESC",jQuery(c).find(".sxOrderFilterDesc").addClass("active")));jQuery(c).addClass("active");a.generateSearchOrder();
    d&&d(e)}},sxUsageTracking=function(h){var a=this;a.trackingConfig=h;a.currentQueryId=void 0;a.startTime=void 0;a.page=1;a.initSearchTracking=function(c,b){a.currentQueryId=c?c:-1;a.page=b?b:1;a.startTime=(new Date).getTime();$.each(a.trackingConfig.trackingObjects,function(b,c){"search"==c.context?($(c.selector).off(c.event,a.trackSearchResult),$(c.selector).on(c.event,c,a.trackSearchResult)):"window"==c.context?($(window).off(c.event,a.sendImgTracking),$(window).on(c.event,c,a.sendImgTracking)):
    ($(c.selector).off(c.event,a.track),$(c.selector).on(c.event,c,a.track))});a.trackingConfig.debugLogging&&console.log("sx: ..sxUt engaged!")};a.trackSearchResult=function(c){c=c||window.event;var b=c.data;void 0!==b.unregisterOthers&&b.unregisterOthers&&$.each(a.trackingConfig.trackingObjects,function(c,d){b.type!==d.type&&b.event!==d.event&&b.selector!==d.selector&&("search"==d.context?$(d.selector).off(d.event,a.trackSearchResult):"window"==d.context?$(window).off(d.event,a.sendImgTracking):$(d.selector).off(d.event,
    a.track))});c={};var d=a.trackingConfig.selectorProductInList?a.trackingConfig.selectorProductInList:".sxTp",e=$(this).parents(d+":first");c.articleNumber=a.trackingConfig.dataSelectorArticleNumber?e.data(a.trackingConfig.dataSelectorArticleNumber):e.data("sxarticlenumber");c.queryId=a.currentQueryId;var p={};p.distanceFromTop=$(this).offset().top;p.page=a.page;d=$.inArray(e[0],$(d).toArray());p.productPos=void 0!=d&&-1<d?d+1:-1;p.productPos*=p.page;p.timeSinceSearch=(new Date).getTime()-a.startTime;
    p.type=b.type;c.meta=JSON.stringify(p);setTimeout(a.sendTracking(c),1)};a.track=function(c){c=c||window.event;if(void 0!==a.currentQueryId&&null!=a.currentQueryId){var b={articleNumber:"-1"};b.queryId=a.currentQueryId;c=c.data;var d={};d.distanceFromTop=$(this).offset().top;d.timeSinceTrackingInit=(new Date).getTime()-a.startTime;d.type=c.type;d.url=window.location?window.location.href:"";b.meta=JSON.stringify(d);setTimeout(a.sendTracking(b),1)}};a.sendTracking=function(c){navigator.sendBeacon=navigator.sendBeacon||
    function(a,b){var c=new XMLHttpRequest;c.open("POST",encodeURI(a),!1);c.setRequestHeader("Content-Type","application/x-www-form-urlencoded");c.send(encodeURI(b))};var b="customerId="+a.trackingConfig.customerId+"&apiKey="+a.trackingConfig.apiKey,d;for(d in c)b+="&"+d+"="+c[d];navigator.sendBeacon(a.trackingConfig.api.base+a.trackingConfig.api.eventLog,b)};a.sendImgTracking=function(c){c=c.data;var b=a.trackingConfig.api.eventLogImg,b=b.replace("##QUERYID##",a.currentQueryId).replace("##TIME##",(new Date).getTime().toString()).replace("##QUERY##",
    encodeURIComponent("-1")).replace("##TYPE##",encodeURIComponent(c.type)).replace("##PAGE##",a.page).replace("##TIMESINCESEARCH##",((new Date).getTime()-a.startTime).toString());(new Image(1,1)).src=a.trackingConfig.api.base+b+"?apiKey="+a.trackingConfig.apiKey};a.trackingConfig.queryId&&a.initSearchTracking(a.trackingConfig.queryId,a.trackingConfig.page)},sxSettingsPanel=function(h,a,c){self=this;self.keyMap=[];self.sxConfig=h;self.templates=a;self.searchPlugin=c;self.$settings=void 0;self.sxSRToken=
    void 0;self.searchReport=void 0;self.getSRToken=function(){return void 0!==self.sxSRToken&&0<self.sxSRToken.length?self.sxSRToken:store.get("sxSRToken")};self.open=function(){$(".sxSPHolder").remove();self.keyMap=[];self.$settings=$(self.templates.settingsPanelHolder);self.attach();self.renderSettings();self.renderSearchReports();self.$settings.find(".sxSPTabs li:first").addClass("active");self.$settings.find(".sxSPSearchReport:first").addClass("active");$("body").on("keyup",self.keyMapOff);$("body").on("keydown",
    self.keyMapOn)};self.close=function(){self.keyMap=[];$("body").off("keyup",self.keyMapOff);$("body").off("keydown",self.keyMapOn);self.$settings.remove()};self.attach=function(){self.$settings.append(self.templates.settingsPanel);$("body").append(self.$settings);self.$settings.find(".sxSPCloser").on("click",function(){self.close()});self.$settings.find(".sxSPTabs li").on("click",function(){self.$settings.find(".sxSPTabs li").removeClass("active");self.$settings.find(".sxSPTabPanel").removeClass("active");
    $(this).addClass("active");self.$settings.find("."+$(this).data("class")).addClass("active")})};self.renderSettings=function(){self.$settings.find(".sxSPSettings .sxSPMessenger button").on("click",function(){cookiestore.set("sxSource",$(this).parents(".sxSPSettings:first").find("#sxSPInternalId").val(),(new Date).getTime()+124416E7,"/");self.close()});$("#sxSPInternalId").val(cookiestore.get("sxSource"))};self.renderSearchReports=function(){void 0==self.getSRToken()?(self.$settings.find(".sxSPSearchReport").html($(self.templates.settingsPanelLogin)),
    self.$settings.find(".sxSPLogin button").click(function(){$.ajax({type:"GET",url:"https://login.semknox.com/Auth/searchReportToken",data:{username:self.$settings.find("#sxSPUser").val(),password:self.$settings.find("#sxSPPassword").val()},async:!0,success:function(a){console.log(a);void 0!==a&&!0===a.success?(self.sxSRToken=a.token,store.set("sxSRToken",a.token),self.renderSearchReports()):self.$settings.find(".sxSPerrorMsg").text(a.message)}})}),self.$settings.find("#sxSPUser").focus()):void 0===
window.sxSearchQuery||0===window.sxSearchQuery.length?self.$settings.find(".sxSPSearchReport").html($(self.templates.settingsPanelMessage).text("No query defined!")):$.ajax({type:"POST",url:"https://login.semknox.com/SearchReport/getExternalSearchReport",data:JSON.stringify({searchQuery:window.sxSearchQuery,sxToken:self.getSRToken(),customerId:self.sxConfig.searchConfig.customerId}),async:!0,contentType:"application/json; charset=utf-8",success:function(a){void 0!==a&&!0===a.success?(self.searchReport=
    a.sr,self.renderSearchReport()):void 0!==a&&!0!==a.success&&void 0===a.message?(self.searchReport=self.searchReportTemplate,self.searchReport.searchQuery=window.sxSearchQuery,self.renderSearchReport()):(store.remove("sxSRToken"),self.sxSRToken=void 0,self.renderSearchReports())}})};self.renderSearchReport=function(){self.$settings.find(".sxSPSearchReport").html(self.templates.settingsPanelSearchReport);self.$settings.find(".sxSPSearchReport .sxSPLastQuery").text(self.searchReport.searchQuery);self.$settings.find(".sxSPSearchReport .sxSPStatus").removeClass().addClass("sxSPStatus "+
    self.searchReport.status).text(self.searchReport.status);var a="";$.each(self.searchReport.comments,function(c,e){var p=self.getFromattedDate(e.lastUpdated);a+='<li><div class="sxSPUser"><span class="sxSPFirstLastName">'+e.firstName+" "+e.lastName+":</span><br/><span>"+p.date+"<br/>"+p.time+'</span></div>                <div class="sxSPMessageHolder"><div class="sxSPLogMessage">'+e.comment+"</div></div></li>"});self.$settings.find(".sxSPSearchReport ul").html(a);self.$settings.find(".sxSPSearchReport .sxSPMessenger button").on("click",
    function(){var a=$(this).parent().find("textarea").val();self.sendSearchReport(a)});self.$settings.find(".sxSPSearchReport textarea").focus()};self.sendSearchReport=function(a){var c=self.sxConfig.searchConfig.base.split(":"),e="80";2<c.length&&(e=c[2]);if(2==c.length){var p=c[1].replace("//","").match(/(.+)(?=\.semknox.com)/g);0<p.length&&(c=p[0])}$.ajax({type:"POST",url:"https://login.semknox.com/SearchReport/putExternalSearchReport",data:JSON.stringify({query:window.sxSearchQuery,sxToken:self.getSRToken(),
    desc:a,customerId:self.sxConfig.searchConfig.customerId,api:c+":"+e}),async:!0,contentType:"application/json; charset=utf-8",success:function(a){void 0!==a&&!0===a.success?(self.searchReport=a.sr,self.renderSearchReport()):self.$settings.find(".sxSPSearchReport .sxSPerrorMsg").text(a.message)}})};self.getFromattedDate=function(a){a=new Date(a);a.getDay();var c=a.getDate(),e=a.getMonth()+1,p=a.getFullYear(),n=a.getHours();a=a.getMinutes();10>c&&(c="0"+c);10>e&&(e="0"+e);10>a&&(a="0"+a);return{date:c+
"."+e+"."+p,time:n+":"+a}};self.initNewSearchReport=function(){return new searchReport(-1,self.userId,"unresolved",void 0,"",window.sxSearchQuery,self.sxConfig.searchConfig.customerId,-1,[],"",void 0)};self.initNewSearchReportComment=function(){return new searchReportComment(-1,"F\u00fcr diese Suchanfrage wurden keine guten Ergebnisse gefunden.",self.userId,-1,[],!1)};self.keyMapOff=function(a){self.keyMap=[];clearTimeout(self.timeout)};self.keyMapOn=function(a){a=a||window.event;self.keyMap[a.keyCode]=
    "keydown"==a.type;self.keyMap[18]&&self.keyMap[83]&&($(".sxSPTabPanel.active button").click(),a.preventDefault());self.keyMap[27]&&(self.close(),a.preventDefault());self.timeout=setTimeout(self.keyMapOff,1E3)};self.searchReportTemplate={id:-1,user:-1,status:"unresolved",lastUpdated:(new Date).getTime(),dateCreated:(new Date).getTime(),searchJson:"{}",searchQuery:"",searchCustomerId:self.sxConfig.searchConfig.customerId,api:"api:80",responsibleUser:-1,comments:[]}},localTemplates=new sxTemplates,sxSearchPlugin=
    function(h){var a=this;a.sxConfig=h;a.searchConfig=h.searchConfig;a.lastSearchQuery="";a.currentOffset=0;a.currentPage=1;a.currentResultsPerPage=10;a.maxPages=1;a.moreProductAvailable=!0;a.lastReceivedData=void 0;a.isCompletelyNew=!0;a.filterHandler=void 0;a.orderHandler=void 0;a.usageTracking=void 0;a.currentlyRestoringState=!1;a.multipleRankingFlags=!1;a.rankingVersion=void 0;a.renderView=a.searchConfig.initialView;a.disableAll=function(){jQuery(a.searchConfig.searchField).off("click dblclick blur change focus focusin focusout keydown keyup keypress mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup mousewheel paste");
        jQuery(a.searchConfig.searchFieldButton).off("click dblclick change focus focusin focusout keydown keyup keypress mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup mousewheel");var c=jQuery(a.searchConfig.searchField).parents("form:first");c.off("submit click dblclick change focus focusin focusout keydown keyup keypress mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup mousewheel");c.on("submit",function(a){a.preventDefault();a.stopPropagation();return!1})};a.emptyContainer=
        function(a){for(a=document.querySelector(a);a.lastChild;)a.removeChild(a.lastChild)};a.insertResults=function(c){var b=a.isCompletelyNew||a.lastReceivedData.interpretedQuery.original!==c.interpretedQuery.original;a.lastReceivedData=c;store.set("sxLatestQueryId",c.queryId);"products"===a.renderView&&0==a.lastReceivedData.groupedResultsAvailable&&0<a.lastReceivedData.contentSearchResults.length&&void 0!==a.searchConfig.activateTabs&&!0===a.searchConfig.activateTabs&&(a.renderView="content");"productsContentOverview"===
    a.renderView&&!0===a.searchConfig.contentSearchEnabled&&void 0!==a.lastReceivedData.contentSearchResults&&0<a.lastReceivedData.contentSearchResults.length?a.renderContentProductOverview(b):"content"===a.renderView&&!0===a.searchConfig.contentSearchEnabled&&void 0!==a.lastReceivedData.contentSearchResults&&0<a.lastReceivedData.contentSearchResults.length?a.renderContentResults(b):a.renderProductResults(b);a.sxConfig.methods.afterInsertion&&"function"===typeof a.sxConfig.methods.afterInsertion&&a.sxConfig.methods.afterInsertion(a.sxConfig,
        a);!0===a.isCompletelyNew&&jQuery(a.searchConfig.searchField).val(a.lastReceivedData.interpretedQuery.original);a.isCompletelyNew=!1;a.usageTracking&&a.usageTracking.initSearchTracking(a.lastReceivedData.queryId,a.currentPage)};a.cleanAreaAndReset=function(){a.emptyContainer(a.searchConfig.sxContainer);void 0!==a.sxConfig.methods.beforeInsertion&&"function"===typeof a.sxConfig.methods.beforeInsertion&&a.sxConfig.methods.beforeInsertion(a.sxConfig,a);var c=localTemplates.container,c=c.replace("##MOBILE_INDICATOR##",
        void 0!==a.searchConfig.mobile&&a.searchConfig.mobile?"sxMobile":"").replace("##CURRENT_VIEW##","view"+a.renderView);return c="productsContentOverview"!==a.renderView&&void 0!==a.searchConfig.activateTabs&&!0===a.searchConfig.activateTabs&&0<a.lastReceivedData.contentSearchResults.length?c.replace("##TABS##","sxTabsActive"):c.replace("##TABS##","")};a.renderContentResults=function(c){c=a.cleanAreaAndReset();c=jQuery(c);c.addClass("sxContent");jQuery(a.searchConfig.sxContainer).append(c);var b=!0===
    a.searchConfig.contentSearchEnabled&&!0===a.searchConfig.activateTabs&&0<a.lastReceivedData.contentSearchResults.length?localTemplates.sxPcoResultHeader:localTemplates.sxContentResultHeader,d=a.searchConfig.showDesc?a.lastReceivedData.interpretedQuery.explanation:"",b=b.replace(/##PRODUCT_COUNT##/g,a.lastReceivedData.groupedResultsAvailable).replace(/##CONTENT_COUNT##/g,!0===a.searchConfig.contentSearchEnabled&&0<a.lastReceivedData.contentSearchResults.length?a.lastReceivedData.contentSearchResults.length:
        "").replace(/##DESC##/g,d).replace(/##SEARCH_QUERY##/g,a.secureQuery(a.lastSearchQuery));c.prepend(b);b=a.renderContentBoxes(a.lastReceivedData.contentSearchResults,void 0);d=localTemplates.sxResultContent;d=d.replace(/##CONTENT_HOLDER##/g,b).replace(/##CONTENT_FOOTER##/g,"");c.append(d);a.registerProductsContentRenderingClicks(".sxTabs li")};a.renderContentProductOverview=function(c){c=a.cleanAreaAndReset();c=jQuery(c);c.addClass("sxProductContentOverview");jQuery(a.searchConfig.sxContainer).append(c);
        var b=localTemplates.sxPcoResultHeader,d=a.searchConfig.showDesc?a.lastReceivedData.interpretedQuery.explanation:"",d=0<a.lastReceivedData.searchResults.length?d:d+" "+localTemplates.sxPcoTextTheFollowingResultsCouldBeRelevant+":",b=b.replace(/##PRODUCT_COUNT##/g,a.lastReceivedData.groupedResultsAvailable).replace(/##CONTENT_COUNT##/g,a.lastReceivedData.contentSearchResults.length).replace(/##DESC##/g,d).replace(/##SEARCH_QUERY##/g,a.secureQuery(a.lastSearchQuery));c.prepend(b);0<a.lastReceivedData.searchResults.length?
            (b=a.renderProducts(a.lastReceivedData.searchResults,a.searchConfig.pcoNoProducts),b=a.searchConfig.productHolderTemplate.replace(/##PRODUCT_TEMPLATES##/g,b),d=a.lastReceivedData.searchResults.length<=a.searchConfig.pcoNoProducts?"":localTemplates.sxPcoProductFooter):d=b="";var e=a.renderContentBoxes(a.lastReceivedData.contentSearchResults,a.searchConfig.pcoNoContent),p=localTemplates.sxPcoContentFooter,n=localTemplates.sxPcoResultContent,n=n.replace(/##PRODUCTS_HOLDER##/g,b).replace(/##PRODUCTS_FOOTER##/g,
            d).replace(/##CONTENT_HOLDER##/g,e).replace(/##CONTENT_FOOTER##/g,p);c.append(n);a.registerProductsContentRenderingClicks(".sxResultFooter h2 a")};a.renderProductResults=function(c){if(!0===a.searchConfig.redirectOneProduct&&!0===a.isCompletelyNew&&1===a.lastReceivedData.groupedResultsAvailable&&void 0!==a.lastReceivedData.searchResults&&1==a.lastReceivedData.searchResults.length){var b=a.lastReceivedData.searchResults[0];if(void 0!==b&&0<b.length&&(b=b[0],void 0!==b&&void 0!==b.link)){window.location=
        b.link;return}}a.maxPages=Math.max(1,Math.ceil(a.lastReceivedData.groupedResultsAvailable/a.currentResultsPerPage));a.currentPage=a.currentOffset/a.currentResultsPerPage+1;a.moreProductAvailable=a.currentPage<a.maxPages;if(void 0!==a.searchConfig.endlessScrolling&&!0===a.searchConfig.endlessScrolling&&0<a.currentOffset){var d=a.renderProducts(a.lastReceivedData.searchResults,void 0);jQuery(d).insertAfter(jQuery(".sxPt:last"));jQuery(window).off("scroll",a.handleScrolls);jQuery(window).on("scroll",
        a.handleScrolls)}else{a.lastReceivedData.filters&&0<a.lastReceivedData.filters.length&&!(c&&-1!=a.searchConfig.disableFilterLessProducts&&a.lastReceivedData.searchResults.length<=a.searchConfig.disableFilterLessProducts)&&(jQuery(".sxContainer").addClass("sxShowFilter"),jQuery(".sxContainer").removeClass("sxHideFilter"),setTimeout(function(){a.filterHandler.renderFilter(a.lastReceivedData.filters,a.lastReceivedData.filtersSet,a,function(){a.currentOffset=0;a.requestResultPage(a.lastSearchQuery,a.currentOffset,
        a.currentResultsPerPage)})},1));setTimeout(function(){a.orderHandler.renderOrderFilter(a.lastReceivedData.order,a.lastReceivedData.orderSet,a,function(){a.currentOffset=0;a.requestResultPage(a.lastSearchQuery,a.currentOffset,a.currentResultsPerPage)})},1);b=a.cleanAreaAndReset();b=jQuery(b);jQuery(a.searchConfig.sxContainer).append(b);var e=jQuery(localTemplates.filterContainer);b.prepend(e);var p=!0===a.searchConfig.contentSearchEnabled&&!0===a.searchConfig.activateTabs&&0<a.lastReceivedData.contentSearchResults.length?
        localTemplates.sxPcoResultHeader:localTemplates.resultHeader,n=localTemplates.resultContent,d=localTemplates.paginationHolderTop,l=localTemplates.resultFooter,p=p.replace(/##PRODUCT_COUNT##/g,a.lastReceivedData.groupedResultsAvailable).replace(/##CONTENT_COUNT##/g,!0===a.searchConfig.contentSearchEnabled&&0<a.lastReceivedData.contentSearchResults.length?a.lastReceivedData.contentSearchResults.length:"").replace(/##DESC##/g,a.searchConfig.showDesc?a.lastReceivedData.interpretedQuery.explanation:"").replace(/##SEARCH_QUERY##/g,
        a.secureQuery(a.lastSearchQuery));if(void 0!==a.searchConfig.endlessScrolling&&!0===a.searchConfig.endlessScrolling)n=n.replace(/##PAGINATION_HOLDER##/g,""),l="",jQuery(window).off("scroll",a.handleScrolls),jQuery(window).on("scroll",a.handleScrolls);else{for(var m="",h=!1,u=1;u<=a.maxPages;u++)1==u||u==a.maxPages||u<a.currentPage+3&&u>a.currentPage-3||0>u-7&&5>a.currentPage||u+7>a.maxPages+2&&a.currentPage>a.maxPages-4?(m+=localTemplates.paginationItem.replace(/##PAGE_NUMBER##/g,u).replace(/##CURRENT_PAGE##/g,
        u==a.currentPage?"sxCurrentPageMarker":""),h=!1):h||(m+='<li><a href="#" class="sxPaginationDots">...<input type="text" maxlength="3"/></a></li>',h=!0);var m='<li><a href="#" class="sxPaginationArrow sxPaginationArrowLeft '+(0!=a.currentOffset?"":"sxPaginationArrowDisabled")+'" data-sxpagination="lt"><span>&laquo;</span></a></li>'+m,m=m+('<li><a href="#" class="sxPaginationArrow sxPaginationArrowRight '+(a.currentOffset<a.lastReceivedData.groupedResultsAvailable-a.currentResultsPerPage-2?"":"sxPaginationArrowDisabled")+
        '" data-sxpagination="gt"><span>&raquo;</span></a></li>'),d=d.replace(/##NUMBER_OF_PAGES##/g,m),l=l.replace(/##NUMBER_OF_PAGES##/g,m),h=0,u=a.currentOffset+1,m=Math.min(a.lastReceivedData.groupedResultsAvailable,a.currentOffset+a.currentResultsPerPage),h=a.lastReceivedData.groupedResultsAvailable,r="Keine Ergebnisse";1==a.lastReceivedData.groupedResultsAvailable?r="Ein exakt passendes Produkt":1<a.lastReceivedData.groupedResultsAvailable&&(r=localTemplates.productCount,r=r.replace(/##PRODUCT_COUNT_LOW##/g,
        u).replace(/##PRODUCT_COUNT_HIGH##/g,m).replace(/##PRODUCT_TOTAL_COUNT##/g,h));d=d.replace(/##PRODUCT_COUNT##/g,r);u=0;for(m="";u<a.searchConfig.resultsPerPage.length;m+=localTemplates.sxProductsPerPage.replace(/##RESULTS_PER_PAGE##/g,a.searchConfig.resultsPerPage[u]),u++);d=d.replace(/##NUMBER_OF_PRODUCT_PER_PAGES##/g,m);l=l.replace(/##NUMBER_OF_PRODUCT_PER_PAGES##/g,m);n=n.replace(/##PAGINATION_HOLDER##/g,d)}d=void 0!==a.searchConfig.customNoResultsTextFirst&&void 0!==a.searchConfig.customNoResultsTextSecond?
    '<div class="sxNoResultTextFirst">'+a.searchConfig.customNoResultsTextFirst.replace("##QUERY##",a.secureQuery(a.lastSearchQuery))+'</div><div class="sxNoResultTextSecond">'+a.searchConfig.customNoResultsTextSecond.replace("##QUERY##",a.secureQuery(a.lastSearchQuery))+"</div>":'<div style="text-align: center">Leider keine Ergebnisse</div>';0<a.lastReceivedData.searchResults.length?(d=a.renderProducts(a.lastReceivedData.searchResults,void 0),a.searchConfig.productTemplate&&a.searchConfig.productHolderTemplate?
        (u=a.searchConfig.productHolderTemplate,d=u.replace(/##PRODUCT_TEMPLATES##/g,d)):d+='<div style="clear:both"></div>'):(b.addClass("sxZeroResults"),void 0!==a.searchConfig.showZeroResults&&a.searchConfig.showZeroResults&&void 0!==a.lastReceivedData.zeroResults&&0<a.lastReceivedData.zeroResults.length&&(d="",void 0!==a.searchConfig.customNoResultsTextFirst&&void 0!==a.searchConfig.customNoResultsTextSecond&&(d='<div class="sxNoResultTextFirst">'+a.searchConfig.customNoResultsTextFirst.replace("##QUERY##",
            a.secureQuery(a.lastSearchQuery))+'</div><div class="sxNoResultTextSecond">'+a.searchConfig.customNoResultsTextSecond.replace("##QUERY##",a.secureQuery(a.lastSearchQuery))+"</div>"),d+=a.renderZeroProducts(a.lastReceivedData.zeroResults),u=a.searchConfig.productHolderTemplate,d=u.replace(/##PRODUCT_TEMPLATES##/g,d)));n=n.replace(/##RESULT_HOLDER##/g,d).replace(/##RESULT_FOOTER##/g,l);jQuery(n).insertAfter(e);b.prepend(p);a.applySxEvents(b);jQuery(a.searchConfig.sxContainer).css("visibility","visible");
        setTimeout(function(){jQuery(".sxProductHolder").css({opacity:1})},1);if(void 0===a.lastReceivedData.filters||0===a.lastReceivedData.filters.length||c&&a.lastReceivedData.searchResults.length<=a.searchConfig.disableFilterLessProducts&&-1!=a.searchConfig.disableFilterLessProducts)jQuery(".sxContainer").addClass("sxHideFilter"),jQuery(".sxContainer").removeClass("sxShowFilter");a.searchConfig.autoScrollToResults&&jQuery(".sxResultHolder:first")[0].scrollIntoView()}a.multipleRankingFlags&&(jQuery(".sxTp").each(function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  b){if(!jQuery(b).hasClass("sxRfMoved")){jQuery(b).addClass("sxRfMoved");var c=0,d=0,e=0;jQuery(b).find(".sxRankingFlag").each(function(a,b){0==a?(c=jQuery(b).outerHeight(),d=parseInt(jQuery(b).css("paddingTop").replace("px","").trim()),e=parseInt(jQuery(b).css("top").replace("px","").trim())):jQuery(b).css("top",a*(c+d)+(a+1)*e+"px")})}}),a.multipleRankingFlags=!1)};a.handleScrolls=function(){300>jQuery(".sxResultHolder:first").offset().top+jQuery(".sxResultHolder:first").outerHeight()-jQuery(document).scrollTop()-
    jQuery(window).outerHeight()&&a.moreProductAvailable&&!a.requestRunning&&(a.requestRunning=!0,jQuery(".sxResultFooter:first").addClass("sxFooterLoader"),a.currentPage>=a.maxPages?jQuery(window).off("scroll",a.handleScrolls):(a.currentOffset=Math.min(a.lastReceivedData.groupedResultsAvailable,a.currentOffset+a.currentResultsPerPage),a.requestResultPage(a.lastSearchQuery,a.currentOffset,a.currentResultsPerPage)))};a.applySxEvents=function(c){c.find("img").on("error",function(){jQuery(this).attr("src",
        "//login.semknox.com/assets/noImageAvailable.jpg")});c.find('.sxResultsPerPage option[value="'+a.currentResultsPerPage+'"]').attr("selected","selected");c.find(".sxResultsPerPage select").on("change",function(){a.currentResultsPerPage=jQuery(this).find("option:selected").val();a.currentOffset=0;a.currentPage=1;a.maxPages=Math.ceil(a.lastReceivedData.groupedResultsAvailable/a.selectedResultsPerPage);a.requestResultPage(a.lastSearchQuery,a.currentOffset,a.currentResultsPerPage)});c.find(".sxPagination .sxPaginationLink, .sxPagination .sxPaginationArrow").on("click dblclick",
        function(b){b.preventDefault();setTimeout(function(){jQuery(".sxProductHolder").css({opacity:0})},1);b=jQuery(this).data("sxpagination");var c=0;switch(b){case "lt":c=Math.max(0,a.currentOffset-a.currentResultsPerPage);a.currentPage=Math.max(0,--a.currentPage);break;case "gt":c=Math.min(a.lastReceivedData.groupedResultsAvailable,a.currentOffset+a.currentResultsPerPage);a.currentPage=Math.min(Math.ceil(a.lastReceivedData.groupedResultsAvailable/a.currentResultsPerPage),++a.currentPage);break;default:c=
            Math.min(a.lastReceivedData.groupedResultsAvailable,b*a.currentResultsPerPage-a.currentResultsPerPage),a.currentPage=b}a.currentOffset!=c&&c<a.lastReceivedData.groupedResultsAvailable&&(a.currentOffset=c,0<jQuery(this).parents(".sxResultFooter:first").length&&jQuery("html, body").animate({scrollTop:jQuery(".sxResultHolder:first").offset().top},300,function(){0<jQuery(".sxResultHolder:first").length&&a.requestRunning&&(jQuery(".sxLoadingIndicator").show(),jQuery(".sxLoadingIndicator").css("backgroundPositionY",
            jQuery(document).scrollTop()+jQuery(window).outerHeight()/2-jQuery(".sxResultHolder:first").offset().top+"px"))}),a.requestResultPage(a.lastSearchQuery,a.currentOffset,a.currentResultsPerPage));return!1});c.find(".sxPaginationDots").on("click dblclick",function(a){a.preventDefault();a.stopPropagation();jQuery(this).children("input").show().focus()});c.find(".sxPaginationDots input").on("blur",function(a){jQuery(this).hide()});c.find(".sxPaginationDots input").on("keydown",function(b){if(13==b.keyCode)return b=
        jQuery(this).val(),jQuery.isNumeric(b)&&(a.currentPage=Math.max(1,Math.min(Math.ceil(a.lastReceivedData.groupedResultsAvailable/a.currentResultsPerPage),b)),a.currentOffset=a.currentPage*a.currentResultsPerPage-a.currentResultsPerPage,a.requestResultPage(a.lastSearchQuery,a.currentOffset,a.currentResultsPerPage)),!1});c.find(".sxGotoTop").on("click",function(a){a.preventDefault();jQuery("html, body").animate({scrollTop:jQuery("#sxTop").offset().top},300);return!1});c.find(".sxFilterShow").on("click dblclick",
        function(a){a.preventDefault();a.stopPropagation();jQuery(this).parents(".sxFilterContainer:first").toggleClass("active");jQuery(this).toggleClass("active")});a.registerProductsContentRenderingClicks(".sxTabs li")};a.registerProductsContentRenderingClicks=function(c){$(c).on("click",function(b){b.stopPropagation();b.preventDefault();a.isCompletelyNew=!0;-1<$(this).attr("id").indexOf("Content")?a.renderView="content":a.renderView="products";a.insertResults(a.lastReceivedData);return!1})};a.renderProducts=
        function(c,b){var d="",e=a.searchConfig.productTemplate?a.searchConfig.productTemplate:localTemplates.productTemplate,p=a.searchConfig.variationTemplate?a.searchConfig.variationTemplate:localTemplates.variationTemplate,n=!0;jQuery.each(c,function(c,m){if(void 0!==b&&0>=b--)return!0;var h=e,u={variationArray:m,lastWasHeadProduct:n},h=a.renderSingleProduct(c,h,p,m[0],u);n=u.lastWasHeadProduct;d+=h});return d};a.renderZeroProducts=function(c){var b="",d=a.searchConfig.productTemplate?a.searchConfig.productTemplate:
        localTemplates.productTemplate,e=!0;jQuery.each(c,function(c,n){var l=d,m={variationArray:[],lastWasHeadProduct:e},l=a.renderSingleProduct(c,l,void 0,n,m);e=m.lastWasHeadProduct;b+=l});return b};a.renderSingleProduct=function(c,b,d,e,p){b=b.replace(/##PRODUCT_URL##/g,e.link?e.link:"#");b=b.replace(/##PRODUCT_NAME##/g,e.name.replace(/\"/g,"&quot;"));b=b.replace(/##PRODUCT_IMG##/g,e.image);b=b.replace(/##PRODUCT_ARTICLE_NO##/g,e.articleNumber);if(void 0!==e.properties&&0<e.properties.length)for(var n=
        0;n<e.properties.length;n++){var l=e.properties[n],m=new RegExp("##PROPERTY_VALUE_"+l.idName+"##","g");b=b.replace(m,l.value);var h=l.idName.replace(/([^_a-zA-Z0-9-])/g,"_"),m=new RegExp("##PROPERTY_IDNAME_"+l.idName+"##","g");b=b.replace(m,h)}if(void 0!==e.passOn&&0<e.passOn.length)for(n=0;n<e.passOn.length;n++)l=e.passOn[n],m=new RegExp("##PASSON_VALUE_"+l.key+"##","g"),b=b.replace(m,l.value),h=l.key.replace(/([^_a-zA-Z0-9-])/g,"_"),m=new RegExp("##PASSON_KEY_"+l.key+"##","g"),b=b.replace(m,h);
        m="";if(e.flags&&0<e.flags.length)for(n=0;n<e.flags.length;n++){var l=e.flags[n],h=localTemplates.rankingFlag,u="",r="";0<n&&(u="top: "+30*n+"px",a.multipleRankingFlags=!0,r="sxRfsorm");m+=h.replace(/##RANKING_TEXT##/g,l.value).replace(/##RANKING_FLAG_CSS##/g,u).replace(/##RANKING_FLAG_POSITION##/g,r)}b=b.replace(/##RANKING_FLAG##/g,m);if(void 0!==a.searchConfig.variationTemplate&&0<a.searchConfig.variationTemplate.length&&(1==p.variationArray.length&&1==a.searchConfig.showVariationWithOneVariation||
            1<p.variationArray.length)){var g="";jQuery.each(p.variationArray,function(b,c){var e=d,e=e.replace(/##PRODUCT_URL##/g,c.link?c.link:"#"),e=e.replace(/##PRODUCT_NAME##/g,c.name.replace(/\"/g,"&quot;")),e=e.replace(/##PRODUCT_IMG##/g,c.image),e=e.replace(/##PRODUCT_ARTICLE_NO##/g,c.articleNumber);if(void 0!==c.properties&&0<c.properties.length)for(var n=0;n<c.properties.length;n++)var l=c.properties[n],m=new RegExp("##PROPERTY_VALUE_"+l.idName+"##","g"),e=e.replace(m,l.value),h=l.idName.replace(/([^_a-zA-Z0-9-])/g,
            "_"),m=new RegExp("##PROPERTY_IDNAME_"+l.idName+"##","g"),e=e.replace(m,h);if(void 0!==c.passOn&&0<c.passOn.length)for(n=0;n<c.passOn.length;n++)l=c.passOn[n],m=new RegExp("##PASSON_VALUE_"+l.key+"##","g"),e=e.replace(m,l.value),h=l.key.replace(/([^_a-zA-Z0-9-])/g,"_"),m=new RegExp("##PASSON_KEY_"+l.key+"##","g"),e=e.replace(m,h);a.sxConfig.methods.variationStringReplacement&&"function"===typeof a.sxConfig.methods.variationStringReplacement&&(e=a.sxConfig.methods.variationStringReplacement(e,c,a.sxConfig,
            p.variationArray));g+=e});b=b.replace(/##VARIATIONS##/g,g)}a.sxConfig.methods.productStringReplacement&&"function"===typeof a.sxConfig.methods.productStringReplacement&&(b=a.sxConfig.methods.productStringReplacement(b,e,a.sxConfig,p.variationArray));b=b.replace(/##.+?##/g,"");0!==c||e.head||(p.lastWasHeadProduct=!1);p.lastWasHeadProduct&&!e.head&&a.searchConfig.headProductSeparatorTemplate&&0<a.searchConfig.headProductSeparatorTemplate.length&&0<c&&(p.lastWasHeadProduct=!1,b=a.searchConfig.headProductSeparatorTemplate+
            b);return b};a.renderContentBoxes=function(c,b){var d="",e=void 0!==a.searchConfig.sxPcoContentBox?a.searchConfig.sxPcoContentBox:localTemplates.sxPcoContentBox,h=a.secureQuery(a.lastSearchQuery).toLocaleLowerCase().split(/\s/g),h=h.sort(function(a,b){return b.length-a.length});h.forEach(function(a,b,c){c[b]=new RegExp(a,"g")});jQuery.each(c,function(c,l){if(void 0!==b&&0>=b--)return!0;var m=e,m=m.replace(/##CONTENT_LINK##/g,l.link).replace(/##CONTENT_IMG_SRC##/g,!0===a.searchConfig.showContentPictures?
        l.image:"").replace(/##CONTENT_TITLE##/g,l.name).replace(/##CONTENT_BOX_TYPE##/g,a.searchConfig.contentViewMode).replace(/##RENDER_IMG##/g,!0===a.searchConfig.showContentPictures?"":"sxNoContentPics").replace(/##CONTENT##/g,a.queryContentMatch(l.content,h));a.sxConfig.methods.contentStringReplacement&&"function"===typeof a.sxConfig.methods.contentStringReplacement&&(m=a.sxConfig.methods.contentStringReplacement(m,l,a.sxConfig));d+=m});return d};a.queryContentMatch=function(a,b){for(var d=a.toLocaleLowerCase().split(/\.(?!\.)/g),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   e=[],h=!1,n=0;n<d.length;n++){var l=d[n],m=[];if(0<l.length){for(var G=0,u=Array(l.length);G<l.length;)u[G++]=!0;for(G=0;G<b.length;G++)for(var r=b[G],g;g=r.exec(l);)if(-1< !u.slice(g.index,g.index+r.source.length).indexOf(!1)){for(var h=0,k=Array(r.source.length);h<r.source.length;)k[h++]=!1;u.splice.apply(u,[g.index,r.source.length].concat(k));m.push({start:g.index,end:g.index+r.source.length});h=!0}}e[n]=m}if(!0===h){d=a.split(/\.(?!\.)/g);m={idx:-1,count:-1};u={idx:-1,count:-1};r={idx:-1,count:-1};
        for(n=0;n<e.length;n++)0<e[n].length&&(e[n].length>m.count?(r=u,u=m,m={idx:n,count:e[n].length}):e[n].length>u.count&&e[n].length<=m.count?(r=u,u={idx:n,count:e[n].length}):e[n].length>r.count&&e[n].length<=u.count&&(r={idx:n,count:e[n].length}));g="";for(n=0;3>n;n++){l=void 0;switch(n){case 1:l=u;break;case 2:l=r;break;default:l=m}if(-1<l.count){for(var h=e[l.idx],k=l=d[l.idx],t=0,G=0;G<h.length;G++)k=k.substring(0,h[G].start+t)+'<span class="sxPcoMatch">'+l.substring(h[G].start,h[G].end)+"</span>"+
            l.substring(h[G].end,l.length),t+=32;g+=k+". "}}}else g=0<a.length?(a[0]===a[0].toUpperCase()?"":"&hellip;")+a.substring(0,300)+"&hellip;":"&hellip;";return g};a.requestResultPage=function(c,b,d){a.requestRunning=!0;0<jQuery(".sxResultHolder:first").length&&(jQuery(".sxLoadingIndicator").show(),jQuery(".sxLoadingIndicator").css("backgroundPositionY",jQuery(document).scrollTop()+jQuery(window).outerHeight()/2-jQuery(".sxResultHolder:first").offset().top+"px"));var e=a.searchConfig.base+"/products/search";
        b={apiKey:a.searchConfig.apiKey,customerId:a.searchConfig.customerId,offset:b,limit:d,query:c,order:JSON.stringify(a.orderHandler.formattedOrder),filters:JSON.stringify(a.filterHandler.formattedFilters),sessionId:a.searchConfig.sessionId};void 0!==a.rankingVersion&&(b.rankingVersion=a.rankingVersion);void 0!==a.searchConfig.userGroup&&(b.userGroup=a.searchConfig.userGroup);(d=a.readCookie("sxSource"))&&0<d.length&&(b.source=d);jQuery.ajax({type:"POST",data:b,url:e,async:!0,success:function(b){a.requestRunning=
            !1;jQuery(".sxLoadingIndicator").hide();void 0!=b.redirect?(a.lastReceivedData=void 0,window.location=b.redirect):(jQuery(".sxFooterLoader").removeClass("sxFooterLoader"),!a.currentlyRestoringState&&a.searchConfig.useHistoryApi&&a.setUrlForQuery(c,a.filterHandler.formattedFilters,a.orderHandler.formattedOrder),a.setTitleForQuery(c),a.currentlyRestoringState=!1,a.insertResults(b))},error:function(b,c,d){a.reportError(b,c,d)}})};a.prepareSearch=function(c,b,d){a.lastSearchQuery=c?c:jQuery(a.searchConfig.searchField).val();
        a.lastSearchQuery=a.lastSearchQuery.trim();window.sxSearchQuery=a.lastSearchQuery;sxUniboxes&&1<sxUniboxes.length&&(a.cleanUniboxes(),jQuery.each(sxUniboxes,function(b,c){jQuery(c).val(a.lastSearchQuery)}));void 0!==b&&(a.filterHandler.formattedFilters=b);void 0!==d&&(a.orderHandler.formattedOrder=d);a.currentOffset=0;a.requestResultPage(a.lastSearchQuery,a.currentOffset,a.currentResultsPerPage)};a.registerSxHandler=function(){jQuery(a.searchConfig.searchFieldButton).on("click dblclick",function(){void 0!==
    jQuery(a.searchConfig.searchField).val()&&0!==jQuery(a.searchConfig.searchField).val().length&&(a.resetEverything(),a.prepareSearch())})};a.settingsPanel=function(c){c.ctrlKey&&(c.altKey||c.metaKey)&&83===c.which&&(void 0===a.sxSettings&&(a.sxSettings=new sxSettingsPanel(a.sxConfig,localTemplates,a)),a.sxSettings.open())};a.readCookie=function(a){return(document.cookie.match("(^|; )"+a+"=([^;]*)")||0)[2]};a.resetEverything=function(){a.currentOffset=0;a.filterHandler.reset();a.orderHandler.reset();
        a.renderView=a.searchConfig.initialView;a.isCompletelyNew=!0};a.init=function(){void 0===a.searchConfig.sessionId||1>a.searchConfig.sessionId.length?store.get("sxUUID")?a.searchConfig.sessionId=store.get("sxUUID"):(a.searchConfig.sessionId=a.uuidGenerator(),store.set("sxUUID",a.searchConfig.sessionId)):store.set("sxUUID",a.searchConfig.sessionId);a.searchConfig.rankingVersions&&0<a.searchConfig.rankingVersions.length?(a.rankingVersion=cookiestore.get("sxRankingVersion"),void 0!==a.rankingVersion&&
    (a.rankingVersion=-1<a.searchConfig.rankingVersions.indexOf(a.rankingVersion)?a.rankingVersion:void 0),void 0===a.rankingVersion&&(a.rankingVersion=a.searchConfig.rankingVersions[parseInt(1337*Math.random())%a.searchConfig.rankingVersions.length],cookiestore.set("sxRankingVersion",a.rankingVersion,(new Date).getTime()+864E5,"/"))):a.rankingVersion=void 0;a.currentResultsPerPage=void 0!==a.searchConfig.standardResultsPerPage?a.searchConfig.standardResultsPerPage:void 0!==a.searchConfig.resultsPerPage&&
    0<a.searchConfig.resultsPerPage.length&&void 0!==a.searchConfig.resultsPerPage[0]?a.searchConfig.resultsPerPage[0]:12;a.filterHandler=new sxFilterGenerator(a.sxConfig);a.orderHandler=new sxOrderGenerator(a.sxConfig);a.usageTracking=a.sxConfig.trackingConfig.trackingObjects&&0<a.sxConfig.trackingConfig.trackingObjects.length?new sxUsageTracking(a.sxConfig.trackingConfig):void 0;jQuery(document).ready(function(){void 0!==a.sxConfig.methods.codeBeforeInit&&a.sxConfig.methods.codeBeforeInit(a.sxConfig,
        a);void 0!==a.searchConfig.deregisterAll&&!0===a.searchConfig.deregisterAll&&a.disableAll();a.registerSxHandler();jQuery(a.searchConfig.searchField).attr("autocomplete")||jQuery(a.searchConfig.searchField).attr("autocomplete","off");jQuery(window).on("keydown",a.settingsPanel);a.currentOffset=0;window.sxSearchTrigger?(a.lastSearchQuery=window.sxSearchQuery,a.lastSearchQuery=a.lastSearchQuery.trim(),a.requestResultPage(a.lastSearchQuery,a.currentOffset,a.currentResultsPerPage)):a.usageTracking&&a.usageTracking.initSearchTracking(store.get("sxLatestQueryId"),
        void 0);jQuery(document).trigger("sxSearchReady");console.log("sx: ..jquery-document-ready function done!");sxUniboxWrapper=new sxUniboxWrapper(a.sxConfig);sxUniboxWrapper.initUnibox(void 0,a)});if(a.searchConfig.useHistoryApi)jQuery(window).on("popstate",function(c){c&&c.originalEvent&&c.originalEvent.state&&c.originalEvent.state.query?(a.currentlyRestoringState=!0,a.prepareSearch(c.originalEvent.state.query,c.originalEvent.state.currentFilter,c.originalEvent.state.currentOrder)):c&&c.originalEvent&&
    (void 0===c.originalEvent.state||null===c.originalEvent.state)&&0>document.location.href.indexOf("#")&&window.location.reload(!1)});console.log("sx: ..sxSearchPlugin initializing done!")};a.reportError=function(a,b,d){console.log("########################################");console.log("ERROR while AJAX request!");console.log(a);console.log(b);console.log(d);console.log("########################################")};a.cleanUniboxes=function(){if(sxUniboxes)for(var a=sxUniboxes.length;a--;){var b=sxUniboxes[a];
        ("function"!==typeof document.contains||document.contains(b[0]))&&document.body.contains(b[0])||sxUniboxes.splice(a,1)}};a.secureQuery=function(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")};a.setUrlForQuery=function(c,b,d){var e=c,e=void 0!==a.searchConfig.urlEncodeSearchUrl&&a.searchConfig.urlEncodeSearchUrl?encodeURIComponent(e):e;void 0!==a.searchConfig.enableSemanticUrls&&a.searchConfig.enableSemanticUrls?
        (e=e.replace(/-/g,"~").replace(/\s/g,"-"),e="/"+a.searchConfig.searchUrlIndicator+e,void 0!==a.searchConfig.searchUrlAdditionalParam&&0<a.searchConfig.searchUrlAdditionalParam.length&&(e=e+"?"+a.searchConfig.searchUrlAdditionalParam)):(e="/"+a.searchConfig.searchUrlIndicator+"?"+a.searchConfig.searchUrlParam+"="+e,void 0!==a.searchConfig.searchUrlAdditionalParam&&0<a.searchConfig.searchUrlAdditionalParam.length&&(e=e+"&"+a.searchConfig.searchUrlAdditionalParam));history.pushState({query:c,url:e,currentFilter:b,
        currentOrder:d},c,e)};a.setTitleForQuery=function(c){document.title=a.searchConfig.customTitle&&0<a.searchConfig.customTitle.length?a.searchConfig.customTitle.replace("##QUERY##",c):'Ihre Suche nach "'+c+'"'};a.uuidGenerator=function(){function a(){return Math.random().toString(16).slice(-4)}return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+Date.now().toString()}};




console.log("sx: Starting SEMKNOX Semantic Product Search plugin..");

// ##### DO CONFIG
var sxConfig = {};

// general search config
sxConfig.searchConfig = {
    // general
    apiKey: '4237u4u50m93i6y2',
    customerId: '432',
    sessionId: undefined,
    base: 'https://api.semknox.com',
    mobile: false,

    // content search
    contentSearchEnabled: true,
    initialView: 'products',
    pcoNoProducts: '4',
    pcoNoContent: '3',
    activateTabs: true,
    showContentPictures: false,
    contentViewMode: 'sxContentLine',


    // search settings
    resultsPerPage:[48],
    redirectOneProduct: true,
    standardResultsPerPage: 48,
    disableFilterLessProducts: -1,
    useHistoryApi: true,
    searchUrlIndicator: 's-',
    searchUrlParam: undefined,
    searchUrlAdditionalParam: undefined,
    enableSemanticUrls: true,
    urlEncodeSearchUrl: true,
    customTitle: 'Suche nach ##QUERY## - online bestellen bei lensvision.ch',
    customNoResultsTextFirst: undefined,
    customNoResultsTextSecond: undefined,
    disableSearchfieldLookup: false,
    showZeroResults: false,
    endlessScrolling: false,
    showDesc: false,
    autoScrollToResults: false,
    rankingVersions: undefined,
    userGroup: undefined,
    showVariationWithOneVariation: true,

    // selectors
    sxContainer: '.content-wrapper .container_content #content',
    searchField: '.searchWrapper form .textbox',
    searchFieldButton: '',
    deregisterAll: true,

    productHolderTemplate: '<div>    <ul class="infogridView clear" id="searchList">        ##PRODUCT_TEMPLATES##    </ul></div>',
    productTemplate:  '<li class="productData grid_6 bgWitheProduct sxPt sxTp">    <form name="tobasketsearchList_3" action="https://www.lensvision.ch/index.php?" method="post">        <input type="hidden" name="listtype" value="search">        <input type="hidden" name="actcontrol" value="search">        <input type="hidden" name="searchparam" value=##QUERY##>        <input type="hidden" name="stoken" value="##STOKEN##">        <input type="hidden" name="lang" value="0">        <input type="hidden" name="pgNr" value="0">        <input type="hidden" name="cl" value="search">        <input type="hidden" name="fnc" value="tobasket">        <input type="hidden" name="aid" value="##DATA_ID##">        <input type="hidden" name="anid" value="##DATA_ID##">        <input type="hidden" name="am" value="1">        <div class="pictureBox gridPicture">            <a href="##PRODUCT_URL##&amp;listtype=search&amp;searchparam=##QUERY##" class="productLink trackProductClick" data-name="##PRODUCT_NAME##" data-id="##DATA_ID##" data-price="##PROPERTY_VALUE_cost.PRICE##" data-brand="##BRAND##" data-category="##CATEGORY##"><img src="##PRODUCT_IMG##" alt="##PRODUCT_NAME##"></a>        </div>        <div class="listDetails">            <div class="titleBox">                <a href="##PRODUCT_URL##&amp;listtype=search&amp;searchparam=##QUERY##" class="title productLink trackProductClick" title="##PRODUCT_NAME## " data-name="##PRODUCT_NAME##" data-id="##DATA_ID##" data-price="##PROPERTY_VALUE_cost.PRICE##" data-brand="##BRAND##" data-category="##CATEGORY##">                   <span>##PRODUCT_NAME_ADJUSTED##</span>                </a>            </div>            <div class="priceBox">                <div class="content">                    ##OLD_PRICE##                    <span class="price">                        <span>                                                                                                                                                       </span>                        <span>##PRICE## CHF</span>                        <span class="vat">Preis inkl. MwSt.</span>                    </span>                </div>            </div>            <div class="buttonBox">                <a class="BTN FXgradPink productLink trackProductClick" href="##PRODUCT_URL##&amp;listtype=search&amp;searchparam=##QUERY##" data-name="##PRODUCT_NAME##" data-id="##DATA_ID##" data-price="##PROPERTY_VALUE_cost.PRICE##" data-brand="##BRAND##" data-category="##CATEGORY##">Zum Produkt<div class="arrowBTNlist FXgradPink infogrid_new">â€º</div></a>            </div>        </div>    </form></li>',
    variationTemplate:  undefined,
    headProductSeparatorTemplate:  '<p class="sxHeadTailSeparator">Die folgenden Produkte sind ebenfalls fÃ¼r die Suchanfrage relevant</p>',

};

// unibox settings
sxConfig.uniboxConfig = {

    // these are configurable:
    instantVisualFeedback: 'none', // where the instant visual feedback should be shown, 'top', 'bottom', 'all', or 'none', default: 'all'
    throttleTime:  50, // the number of milliseconds before the suggest is triggered after finished input, default: 300ms
    extraHtml: undefined, // extra HTML code that is shown in each search suggest
    highlight: 'true', // whether matched words should be highlighted, default: true
    queryVisualizationHeadline: '', // A headline for the image visualization, default: empty
    animationSpeed: '400', // speed of the animations, default: 300ms
    enterCallback: undefined, // callback on what should happen when enter is pressed, default: undefined, meaning the link will be followed
    minChars: '3', // minimum number of characters before the suggests shows, default: 3
    maxWidth: '500', // the maximum width of the suggest box, default: as wide as the input box
    showDeleteAllButton: false,
    placeholder: "Sie suchen...",
    noSuggests: undefined,
    suggestOrder: ["Produkte", "Kategorien", "SuchvorschlÃ¤ge"],
    suggestSelectionOrder: ["Produkte", "Kategorien", "SuchvorschlÃ¤ge"],
    limitSuggest: 10,
    limitSearch: 5,
    limitCategory: 3,
    limitProduct: 8,
    limitBrand: 0,
    limitCategoryFeature: 0,
    limitContent: 3,
    focusCallback: undefined,
    blurCallback: undefined,
    typeCallback: undefined,
    lineCallback: undefined,

};

// filter settings
sxConfig.filterConfig = {
    enableFilter: true,
    useSpecialColorFilter: true,
    filterContainer:'.sxFilterHolder:first'
};
// ordering filter  settings
sxConfig.orderConfig = {
    enableFilter: true,
    orderContainer: '.sxOrderFilterHolder:first'
};

// tracking settings
sxConfig.trackingConfig = {
    apiKey: '4237u4u50m93i6y2',
    customerId: '432',
    api: {
        base: 'https://api.semknox.com',
        queryLog: '/queries/432/logQuery',
        eventLog: '/queries/432/clickfeedback',
        eventLogImg: '/queries/432/interaction/##QUERYID##/##TIME##/##QUERY##/##TYPE##/##PAGE##/##TIMESINCESEARCH##'
    },
    trackingObjects: [
        {
            context: 'search',
            event: 'click',
            selector: '.sxTp .pictureBox a, .sxTp .titleBox a, .sxTp .buttonBox a',
            type: 'sxProductClick'
        },
        {
            context: 'general',
            event: 'click',
            selector: '#toBasket',
            type: 'sxToShoppingBasket'
        }
    ],
    debugLogging: true,
};

// methods
sxConfig.methods = {
    codeBeforeInit: function(sxConfig){
        if(!document.contains){
            /* Polyfill so sxUniboxReady gets fired in Internet Explorer */
            Node.prototype.contains = function contains(node) {
                if (!(0 in arguments)) {
                    throw new TypeError('1 argument is required');
                }
                do {
                    if (this === node) {
                        return true;
                    }
                } while (node = node && node.parentNode);
                return false;
            };
        }
        var transparentColor = ["weiÃŸ","weiss","transparent","schwarz/weiÃŸ","schwarz/rot","transparent","rotbraun","aluminiumfarben","Granit","Perlmutt","schwarz/silber","pastell","in neutraler Farbe"];
        jQuery(document).bind("sxFilterRenderingFinished", function(){
            console.log("sxFilterRenderingFinished");
            jQuery(".sxContainer").css("minHeight","auto");
            //border for color filter with white icons
            jQuery(".sxMsColorbox").each(function(){
                if(!jQuery(this).hasClass("active")){
                    var colorName = jQuery(this).data("name");
                    if(transparentColor.indexOf(colorName)!=-1){
                        jQuery(this).addClass("sxHighlightWhiteFilter");
                    }
                }
            });
        });

        jQuery(document).bind("sxFilterRenderingFinished", function(){
            //border for color filter with white icons
            jQuery(".sxMsColorbox").each(function(){
                if(!jQuery(this).hasClass("active")){
                    var colorName = jQuery(this).data("name");
                    if(transparentColor.indexOf(colorName)!=-1){
                        jQuery(this).addClass("sxHighlightWhiteFilter")
                    }
                }
            });
        });

        var search = window.location.search;
        if(search.indexOf("searchparam") > -1 && search.indexOf("cl=search") > -1){
            sxSearchPlugin.lastSearchQuery = jQuery(sxSearchPlugin.searchConfig.searchField).val();
            sxSearchPlugin.requestResultPage(sxSearchPlugin.lastSearchQuery, sxSearchPlugin.currentOffset, sxSearchPlugin.currentResultsPerPage);
        }

    },
    codeAfterInit: undefined,
    beforeInsertion: undefined,
    afterInsertion: function(){
        //remove top banner (homepage)
        jQuery(".page-element.container-lv-start").remove();
        //adjust breadcrumb
        jQuery("#breadCrumb").empty();
        jQuery("#breadCrumb").append("<div id='breadCrumb'><span>Sie sind hier:</span>&nbsp;&gt;&nbsp;<a class='bca' href='"+window.location.href+"' title='Suche'>Suche</a></div>");
        if($("body").hasClass("active-navi-menu"))swipePageLeft();
        document.activeElement.blur();
    },
    productStringReplacement: function(productTemplateString, currentProduct, sxConfig, variationArray){
        var price = "";
        var oldPrice = "";
        for(var i = 0; i<currentProduct.properties.length;i++){
            var property = currentProduct.properties[i];
            if(property.idName=="cost.PRICE"){
                price = property.value;
            }
        }
        var name = currentProduct.name;
        name = name.split(" - ").join("<br>");
        productTemplateString = productTemplateString.split("##PRODUCT_NAME_ADJUSTED##").join(name);
        var priceString = price.toString().replace(",",".");
        if(price.length > 0 && !isNaN(parseFloat("")) && parseFloat(price)>=1000){
            var thousandSeparatorPosition = parseFloat(price).toFixed(0).length-3;
            priceString = priceString.substr(0,thousandSeparatorPosition) + '\'' + priceString.substr(thousandSeparatorPosition);
        }
        productTemplateString = productTemplateString.split("##PRICE##").join(priceString);
        var query = window.location.href.split(sxConfig.searchConfig.searchUrlIndicator)[1];
        if(query){
            query = query.split("?")[0];
            query = query.split("#")[0];
            query = decodeURI(query);
        }else{
            query = undefined;
        }
        productTemplateString = productTemplateString.split("##QUERY##").join(query);
        if(oldPrice && oldPrice.length > 0){
            productTemplateString = productTemplateString.split("##OLD_PRICE##").join("<span class='oldPrice'><del>"+oldPrice+"</del></span>");
            productTemplateString = productTemplateString.replace("class=\"price\"","class=\"priceAction\"");
        }
        //TODO: stoken?
        //TODO: replace ##BRAND## - Hersteller: Hersteller # Conil
        //TODO: replace ##CATEGORY##
        //TODO: data-id? 412_1: groupId # 628_1

        return productTemplateString;
    },
    contentStringReplacement: undefined,
    variationStringReplacement: undefined,
};


// init search plugin class
sxSearchPlugin = new sxSearchPlugin(sxConfig);


// ##### register sxEventSystem
jQuery(document).on('sxSearchReady sxUniboxReady sxFilterRenderingFinished sxOrderingReady', function(e){
    if(window['sxStartEvents'] === undefined){
        window['sxStartEvents'] = {};
    }

    if(window['sxStartEvents'][e.type] === undefined){
        window['sxStartEvents'][e.type] = true;
    }
    if( !!window['sxStartEvents']['sxSearchReady'] &&
        !!window['sxStartEvents']['sxUniboxReady'] &&
        !!window['sxStartEvents']['sxFilterRenderingFinished'] &&
        !!window['sxStartEvents']['sxOrderingReady']){
        // codeAfterInit
        if(sxConfig.methods.codeAfterInit !== undefined){
            sxConfig.methods.codeAfterInit(sxConfig, sxSearchPlugin);
        }
    }
});

// ##### init search
// check for a generic indicator in url if this is a linked search result page
// check url for encoded search
var combinedPath = window.location.pathname + window.location.search;
if(sxConfig.searchConfig.disableSearchfieldLookup && window.location.href.match(/(search|such)/) && jQuery(sxConfig.searchConfig.searchField) && jQuery(sxConfig.searchConfig.searchField).val().length > 0){
    window['sxSearchQuery'] = jQuery(sxConfig.searchConfig.searchField).val();
    window['sxSearchTrigger'] = true;
}else if(window.location !== undefined && (window.location.pathname.indexOf('/' + sxConfig.searchConfig.searchUrlIndicator) == 0 || combinedPath.indexOf('/' + sxConfig.searchConfig.searchUrlIndicator) > -1 && combinedPath.indexOf(sxConfig.searchConfig.searchUrlParam) > -1)){

    // check if semantic urls are enabled
    if(sxConfig.searchConfig.enableSemanticUrls !== undefined && !!sxConfig.searchConfig.enableSemanticUrls){
        var indicatorString = '/' + sxConfig.searchConfig.searchUrlIndicator;
        var pathname = window.location.pathname;
        pathname = pathname.substring(pathname.indexOf(indicatorString) + indicatorString.length, pathname.length);
        var searchQuery = pathname.replace(/-/g, ' ').replace(/~/g, '-').replace(/\/$/, '');
    }else{ // we have a real search parameter to use
        var splittedUrlParams = window.location.search.split('&');
        var searchQuery = '*';
        for(var i = 0; i < splittedUrlParams.length; i++){
            var singleParam = splittedUrlParams[i];
            if(singleParam.indexOf(sxConfig.searchConfig.searchUrlParam) > -1){
                searchQuery = singleParam.split('=')[1];
            }
        }
    }

    // always decode URI component because of Ã¤Ã¶Ã¼ÃŸ etc
    searchQuery = decodeURIComponent(searchQuery.replace(/\+/g, '%20'));

    if(searchQuery.indexOf('/') === searchQuery.length -1){
        searchQuery = searchQuery.substring(0, searchQuery.length-1);
    }

    window['sxSearchQuery'] = searchQuery;
    window['sxSearchTrigger'] = true;
}

sxSearchPlugin.init();


console.log("sx: ..started SEMKNOX Semantic Product Search plugin!");
