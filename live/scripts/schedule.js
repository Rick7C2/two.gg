!function(e,t){var n="AIzaSyCEQZJe4W3caSDwB9bIh_9v5RbDqg1S7wI",a="mg877fp19824mj30g497frm74o@group.calendar.google.com",r=e(".schedule-container"),i=function(e,t){var n=gapi.client.calendar.events.list({calendarId:a,singleEvents:!0,orderBy:"startTime",timeMin:e.toISOString(),timeMax:t.toISOString()});return n},o=function(e){var t=new Date(e),n="am",a=t.getHours();a>=12&&(n="pm",a-=12),0===a&&(a="12");var r=t.getMinutes();return r<10&&(r="0"+r),a+":"+r+" "+n},u=function(t){var n=e("<ul/>");return t.forEach(function(t){var a=o(t.start.dateTime);e("<li/>",{text:a+" "+t.summary}).appendTo(n)}),n},c=function(t,n){var a;a="error"in n?e('<div>The schedule failed to load.<br><a href="/schedule">View full schedule.</a></div>'):u(n.items),t.append(a),r.removeClass("loading")},d=function(){var t=new Date,n=new Date;n.setHours(24,0,0,0);var a=new Date(n);a.setHours(24,0,0,0);var r=i(t,n),o=i(n,a);r.execute(c.bind(this,e(".schedule.today"))),o.execute(c.bind(this,e(".schedule.tomorrow")))};t.init=function(){gapi.client.setApiKey(n),gapi.client.load("calendar","v3").then(d)}}(jQuery,window);