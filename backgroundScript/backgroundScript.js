chrome.action.onClicked.addListener(function (activeTab) {
  var newURL = "chrome://newtab";
  chrome.tabs.create({
    url: newURL
  });
});

function navigate(url) {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    chrome.tabs.update(tabs[0].id, {
      url: url
    });
  });
}

// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener(
  function (text) {
    // Encode user input for special characters , / ? : @ & = + $ #
    if (text) {
      let searchEmailIn = text.trim().split(" ");
      let newURL;

      switch ( searchEmailIn[0] ) {
        case "gmail":
          newURL = 'https://mail.google.com/mail/#search/' + text.substring("gmail".length+1);
          break;
        case "yahoo":
          newURL = 'https://mail.yahoo.com/d/search/keyword=' + text.substring("yahoo".length+1);
          break;
        // case "outlook":
        //   newURL = 'https://mail.google.com/mail/#search/' + text.substring("outlook".length+1);
        //   break;
        default:
          newURL = 'https://mail.google.com/mail/#search/' + text;
      }

      chrome.tabs.create({
        url: newURL
      });
    }
});

// chrome.runtime.setUninstallURL("https://docs.google.com/forms/d/1Z5XnMWjFTd5D2lL7I4IRQ9CTqQJT3OAKnwOVlIo54wc", function(){});


// window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
// ga('create', 'UA-164070041-1', 'auto');
// ga('set', 'checkProtocolTask', null);
// ga('send', {'hitType':'pageview', 'page': '/background'});

// (function() {
//    var ga = document.createElement('script');
//    ga.type = 'text/javascript';
//    ga.async = true;
//    ga.src = 'https://www.google-analytics.com/analytics.js';
//    var s = document.getElementsByTagName('script')[0];
//    s.parentNode.insertBefore(ga, s);
// })();

// setInterval(()=>{
//    ga('send', {'hitType':'pageview', 'page': '/background'})
// }, 24*60*60*1000)