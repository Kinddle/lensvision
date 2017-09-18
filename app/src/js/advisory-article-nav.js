var tabsCarousel,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

tabsCarousel = (function() {
  function tabsCarousel(target) {
    this.target = target;
    this.unselectAllTabs = bind(this.unselectAllTabs, this);
    this.selectTab = bind(this.selectTab, this);
    this.initSlick = bind(this.initSlick, this);
    this.init = bind(this.init, this);
    this.init();
  }

  tabsCarousel.prototype.init = function() {
    var $activator, $tab, i, j, len, len1, ref, ref1;
    this.$target = document.querySelector(this.target);
    if (!this.$target) {
      return;
    }
    this.tabs = [];
    ref = this.$target.querySelectorAll('[data-tab]');
    for (i = 0, len = ref.length; i < len; i++) {
      $tab = ref[i];
      if (this.tabs.indexOf($tab.dataset.tab) === -1) {
        this.tabs.push($tab.dataset.tab);
      }
    }
    this.selectTab(this.tabs[0]);
    if (MobileDeviceDetector.userAgentIsMobile()) {
      this.slickFade = false;
    } else {
      this.slickFade = true;
    }
    this.initSlick();
    ref1 = this.$target.querySelectorAll('[data-target]');
    for (j = 0, len1 = ref1.length; j < len1; j++) {
      $activator = ref1[j];
      $activator.addEventListener('click', (function(_this) {
        return function(ev) {
          _this.selectTab(ev.target.dataset.target);
          return ev.preventDefault();
        };
      })(this));
      $activator.addEventListener('mouseover', (function(_this) {
        return function(ev) {
          if (!_this.slickFade) {
            _this.slickFade = true;
            return _this.initSlick();
          }
        };
      })(this));
    }
    $(document).on('afterChange', (function(_this) {
      return function(ev) {
        return _this.selectTab(_this.tabs[_this.$slick.slick('slickCurrentSlide')]);
      };
    })(this));
    $(document).on('swipe', (function(_this) {
      return function(ev) {
        if (_this.slickFade) {
          _this.slickFade = false;
          return _this.initSlick();
        }
      };
    })(this));
    return $(document).on('mouseover', '.js--advisory-articles-panes', (function(_this) {
      return function(ev) {
        if (_this.slickFade) {
          _this.slickFade = false;
          return _this.initSlick();
        }
      };
    })(this));
  };

  tabsCarousel.prototype.initSlick = function(callback) {
    if (callback == null) {
      callback = null;
    }
    if (this.$slick != null) {
      this.$slick.slick('destroy');
      this.$slick.html('');
      this.$slick.html(this.$slickCopyInner);
      this.$slick = $(this.$target).find('.js--advisory-articles-panes');
    } else {
      this.$slick = $(this.$target).find('.js--advisory-articles-panes');
      this.$slickCopyInner = '' + this.$slick.html();
    }
    if (callback) {
      this.$slick.on('init', callback);
    }
    return this.$slick.slick({
      infinite: true,
      fade: this.slickFade,
      dots: true,
      arrows: true,
      draggable: true,
      initialSlide: this.tabs.indexOf(this.currentTab),
      nextArrow: '<i class="fa fa-chevron-right arrow-next"></i>',
      prevArrow: '<i class="fa fa-chevron-left arrow-prev"></i>',
    });
  };

  tabsCarousel.prototype.selectTab = function(tab) {
    var $tab, i, index, j, k, last, len, len1, len2, next, prev, ref, ref1, ref2;
    this.unselectAllTabs();
    ref = this.$target.querySelectorAll('[data-tab="' + tab + '"]');
    console.log(tab)
    console.log(ref)
    for (i = 0, len = ref.length; i < len; i++) {
      $tab = ref[i];
      if (!$tab.classList.contains('active')) {
        $tab.classList.add('active');
      }
    }
    index = this.tabs.indexOf(tab);
    last = this.tabs.length - 1;
    if (index === 0) {
      prev = this.tabs[last];
      next = this.tabs[index + 1];
    } else if (index === last) {
      prev = this.tabs[index - 1];
      next = this.tabs[0];
    } else {
      prev = this.tabs[index - 1];
      next = this.tabs[index + 1];
    }
    ref1 = this.$target.querySelectorAll('[data-tab="' + prev + '"]');
    console.log(ref1)
    for (j = 0, len1 = ref1.length; j < len1; j++) {
      $tab = ref1[j];
      if (!$tab.classList.contains('prev')) {
        $tab.classList.add('prev');
      }
    }
    ref2 = this.$target.querySelectorAll('[data-tab="' + next + '"]');
    console.log(ref2)
    for (k = 0, len2 = ref2.length; k < len2; k++) {
      $tab = ref2[k];
      if (!$tab.classList.contains('next')) {
        $tab.classList.add('next');
      }
    }
    this.currentTab = tab;
    if (this.$slick && this.tabs[this.$slick.slick('slickCurrentSlide')] !== tab) {
      return setTimeout((function(_this) {
        return function() {
          return _this.$slick.slick('slickGoTo', index, 200);
        };
      })(this));
    }
  };

  tabsCarousel.prototype.unselectAllTabs = function() {
    var i, len, ref, results, tab;
    ref = this.$target.querySelectorAll('[data-tab]');
    console.log(ref)
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      tab = ref[i];
      tab.classList.remove('active');
      tab.classList.remove('next');
      results.push(tab.classList.remove('prev'));
    }
    return results;
  };

  return tabsCarousel;

})();

window.tabsCarousel = tabsCarousel;
