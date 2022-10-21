// Dynamically sets the background
(function () {
	// $('body').css({
	// 	backgroundImage: 'url("../../assets/imgs/bg.jpg")'
	// });
})();


(function () {
	function startTime() {
		var theDate = new Date();

		var time = theDate.toLocaleString('en-US', {
			hour: 'numeric',
			minute: 'numeric',
			hour12: true
		});

		var meridiem = time.substr(time.length - 2);
		time = time.substring(0, time.length - 3);
		document.getElementById('clock').innerHTML = time + '<span id="meridiem">' + meridiem.toLowerCase() + '</span>';
		var hour = theDate.getHours();

		var greetingEls = document.getElementById('customGreeting');
		if (hour > 6 && hour < 12) {
			// morning
			greetingEls.innerHTML = "Good Morning"
		} else if (hour >= 12 && hour < 18) {
			// afternoon
			greetingEls.innerText = "Good Afternoon"
		} else if (hour >= 18 && hour < 22) {
			// evening
			greetingEls.innerText = "Good Evening"
		}

		var t = setTimeout(startTime, 1000);
	}

	document.body.onload = function () {
		startTime();
	}
})();


(function () {	
	$("#btnSearchWeb").on( "click", function(e) {
		if ( $('#searchWebTextInput').val().trim() ) {
			document.location = "https://find.searchu.co/results.aspx?gd=SY1003728&searchsource=69&q="+encodeURIComponent($('#searchWebTextInput').val().trim());
		}
	});

	$("#searchWebTextInput").on( "keyup", function(e) {
		if (e.which == 13) {
			if ( $('#searchWebTextInput').val().trim() ) {
				document.location = "https://find.searchu.co/results.aspx?gd=SY1003728&searchsource=69&q="+encodeURIComponent($('#searchWebTextInput').val().trim());
			}
			return false;
		  }
	});
	
	$("#btnQuickEmailSearch").on( "click", function(e) {
		if ( $('#quickEmailSearchTxt').val().trim() ) {
			let searchEmailIn = $('#quickEmailSearchTxt').val().trim().split(" ");
			let newURL;

			switch ( searchEmailIn[0] ) {
				case "gmail":
				newURL = 'https://mail.google.com/mail/#search/' + $('#quickEmailSearchTxt').val().trim().substring("gmail".length+1);
				break;
				case "yahoo":
				newURL = 'https://mail.yahoo.com/d/search/keyword=' + $('#quickEmailSearchTxt').val().trim().substring("yahoo".length+1);
				break;
				// case "outlook":
				// newURL = 'https://mail.google.com/mail/#search/' + $('#quickEmailSearchTxt').val().trim().substring("outlook".length+1);
				// break;
				default:
				newURL = 'https://mail.google.com/mail/#search/' + $('#quickEmailSearchTxt').val().trim();
			}

			document.location = newURL;
		}
	});

	$("#frmQuickSearch").on( "submit", function(e) {
		e.preventDefault();
		if ( $('#quickEmailSearchTxt').val().trim() ) {
			let searchEmailIn = $('#quickEmailSearchTxt').val().trim().split(" ");
			let newURL;

			switch ( searchEmailIn[0] ) {
				case "gmail":
				newURL = 'https://mail.google.com/mail/#search/' + $('#quickEmailSearchTxt').val().trim().substring("gmail".length+1);
				break;
				case "yahoo":
				newURL = 'https://mail.yahoo.com/d/search/keyword=' + $('#quickEmailSearchTxt').val().trim().substring("yahoo".length+1);
				break;
				// case "outlook":
				// newURL = 'https://mail.google.com/mail/#search/' + $('#quickEmailSearchTxt').val().trim().substring("outlook".length+1);
				// break;
				default:
				newURL = 'https://mail.google.com/mail/#search/' + $('#quickEmailSearchTxt').val().trim();
			}
			document.location = newURL;
		}
	});
})();