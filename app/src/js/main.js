$( document ).ready(function() {
  //Collapse
  $('.collapse').collapse()

  $('.panel-group .panel-collapse.in').prev().addClass('active');
  $('.panel-group')
  .on('show.bs.collapse', function(e) {
    $(e.target).prev('.panel-heading').addClass('active');
  })
  .on('hide.bs.collapse', function(e) {
    $(e.target).prev('.panel-heading').removeClass('active');
  });


  //Dropdown
  $('.dropdown').hover(function(){
    $('.dropdown-toggle', this).trigger('click');
  });

  $('.TabbedContentBox__NavTabsItem a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    var selText = $(e.target).text();
    $('.js--categories-dropdown-button').text(selText);
    $(e.target).parent().siblings().removeClass('active');
    $(e.target).parent().addClass('active');
  });

  $('.js--search-trigger').on('click', function(e) {
    e.preventDefault();
    setTimeout(function() {
      $('.js--search-input').focus();
    }, 100);
    setTimeout(function() {
      $('.js--search-input').trigger('click');
    }, 200);
  });

  var snapper = new Snap({
      element: document.getElementById('content'),
      // dragger: document.getElementById('do-drag'),
      disable: 'right',
      transitionSpeed: 0.3
  });

  // Snapper for mobile only
  function snapperToggler() {
    if (MobileDeviceDetector.userAgentIsMobile()) {
      snapper.enable();
    } else {
      snapper.close();
      snapper.disable();
    }
  }

  snapperToggler();
  $(window).resize(function() {
    snapperToggler();
  });

  var addEvent = function addEvent(element, eventName, func) {

  if (element.addEventListener) {
      return element.addEventListener(eventName, func, false);
    } else if (element.attachEvent) {
      return element.attachEvent("on" + eventName, func);
    }
  };

  addEvent(document.getElementById('open-left'), 'click', function(){
    if( snapper.state().state=="left" ){
       snapper.close('left');
    }else {
        snapper.open('left');
    }
  });

  /* Prevent Safari opening links when viewing as a Mobile App */
  (function (a, b, c) {
    if(c in b && b[c]) {
      var d, e = a.location,
        f = /^(a|html)$/i;

      a.addEventListener("click", function (a) {
        d = a.target;
        while(!f.test(d.nodeName)) d = d.parentNode;
        "href" in d && (d.href.indexOf("http") || ~d.href.indexOf(e.host)) && (a.preventDefault(), e.href = d.href)
      }, !1)
    }
  })(document, window.navigator, "standalone");


  //Slick slider Home page
  $('.main-slider').slick({
    dots: true,
    mobileFirst: true,
    infinite: true,
    responsive: null,
    touchMove: true,
    nextArrow: '<i class="fa fa-chevron-right arrow-next"></i>',
    prevArrow: '<i class="fa fa-chevron-left arrow-prev"></i>',
  });


  //Copyright
  function copyrightYear() {
   var d = new Date();
   var y = d.getFullYear();
   document.getElementById("copyright").innerHTML = '&copy; ' + y + ' lensvision.ch';
  }
  //Ratings
  $('#input-1').rating({
    displayOnly: true,
    step: 0.5,
    emptyStar: '<i class="glyphicon glyphicon-star"></i>'
  });
  $('#input-2').rating({
    displayOnly: true,
    step: 0.5,
    emptyStar: '<i class="glyphicon glyphicon-star"></i>'
  });
  $('#input-3').rating({
    displayOnly: true,
    step: 0.5,
    emptyStar: '<i class="glyphicon glyphicon-star"></i>'
  });
  $('#input-4').rating({
    displayOnly: true,
    step: 0.5,
    emptyStar: '<i class="glyphicon glyphicon-star"></i>'
  });
  $('#input-5').rating({
    displayOnly: true,
    step: 0.5,
    emptyStar: '<i class="glyphicon glyphicon-star"></i>'
  });

  //popover
  $(".js--tooltipTrigger").popover({
    html: true,
    placement: "bottom",
    trigger: "hover",
    content: function() {
      var contentTarget = $(this).data("target");
      var $content = $(contentTarget);
      return $content.length > 0 ? $content.html() : '';
    }
  });

  copyrightYear();

  // Timeline
  var timelineBlocks = $('.Timeline__Block'),
    offset = -0.3;

  //hide timeline blocks which are outside the viewport
  hideBlocks(timelineBlocks, offset);

  //on scolling, show/animate timeline blocks when enter the viewport
  $('#content').on('scroll', function(){
    (!window.requestAnimationFrame)
      ? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
      : window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
  });

  function hideBlocks(blocks, offset) {
    blocks.each(function(){
      ( $(this).offset().top > $('#content').scrollTop()+$('#content').height()*offset ) && $(this).find('.Timeline__Wrap, .Timeline__Content').addClass('is-hidden');
    });
  }

  function showBlocks(blocks, offset) {
    blocks.each(function(){
      ( $(this).offset().top <= $('#content').scrollTop()+$('#content').height()*offset && $(this).find('.Timeline__Wrap').hasClass('is-hidden') ) && $(this).find('.Timeline__Wrap, .Timeline__Content').removeClass('is-hidden').addClass('bounce-in');
    });
  }

  //Social Share Kit
  SocialShareKit.init()

  //Show, hide read more button
  $(".js--show-content-trigger").on('click', function() {
    $(this).hide();
    $(".ReadMore__Content").removeClass('is-collapsed');
    $(".ReadMore__SubTitle--gradient").removeClass('is-collapsed');
  })

  /* initialize jPages on active tab */
  $(document).on('shown.bs.tab', function(e) {
    var currentTab = $(e.target).attr('href');
    var containerId = currentTab.substr(1) + '-jPage';
    if (window['jPagesInitialized'+currentTab] == true) {
      return true;
    }
    $(currentTab + " .js--holder-jPage").jPages({
      containerID: containerId,
      perPage: 5,
      links: "blank",
      previous: "",
      next: "",
    });
    window['jPagesInitialized'+currentTab] = true;
  });

  //Initialize Category TabbedContentBox__NavTabsList dropdown on mobile
  if (MobileDeviceDetector.userAgentIsMobile()) {
    $('.TabbedContentBox__NavTabsList').addClass('dropdown-menu');
  }

  //FloatL
  var floatlEls = document.querySelectorAll('.js--floatl');
  [].forEach.call(floatlEls, function(el) {
    new Floatl(el)
  });

  //Bootstrap Select
  $(".dropdown-menu li a").click(function(){
    var selText = $(this).text();
    $(this).parents('.FormElement').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
  });

  //BootstrapTimeDatePicker
  $(function () {
      $('#datetimepicker').datetimepicker({
        format: 'YYYY-MM-DD',
        viewMode: 'years'
      });
  });

});
