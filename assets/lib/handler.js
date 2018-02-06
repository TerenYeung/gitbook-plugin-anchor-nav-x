require(["gitbook", "jquery"], function(gitbook, $) {
  function handler(e, config) {
    var toolTipMode = config['anchor-navigation-ex'].toolTipMode;
    function handlerClickTooltip() {
      var $toolTip = $('#anchor-navigation-ex-navbar')
      var $list = $toolTip.find('ul')

      $toolTip.on('click', function() {
        $list.toggleClass('tooltip-show')
      })
    }
    
    function handlerHoverTooltip() {
      var $toolTip = $('#anchor-navigation-ex-navbar')
      var $list = $toolTip.find('ul')

      $toolTip.on('mouseenter', function() {
        $list.addClass('tooltip-show')
      })
    
      $toolTip.on('mouseleave', function() {
        $list.removeClass('tooltip-show')
      })
    }

    if (toolTipMode == 'click')  {
      handlerClickTooltip();
    } else {
        handlerHoverTooltip();
    }
  }

  gitbook.events.bind('start', function (e) {
    var config = gitbook.state.config.pluginsConfig
    handler(e, config)
  })

  gitbook.events.bind('page.change', function (e) {
    var config = gitbook.state.config.pluginsConfig
    handler(e, config)
  })
})