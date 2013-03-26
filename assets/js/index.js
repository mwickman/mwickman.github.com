$(function () {

  var eventBooking = {
    company: "EventBooking.com",
    title: "Engineer",
    dateRange: "May 2011 - October 2012",
    items: [
    ".NET", "Knockout.js", "jQuery", "Less", "MSSQL", "SVN" ]
  }

  var halfOffDepot = {
    company: "Half Off Depot",
    title: "Lead Programmer",
    dateRange: "October 2012 - present",
    items: [ "Ruby", "Rails", "MySQL", "Haml", "Sass", "Less", "Coffeescript",
    "underscore.js", "git", "AWS" ],
  }

  var pauseBreak = {
    company: "Pause Break LLC",
    title: "Co-Founder",
    dateRange: "February 2012 - present",
    items: [
      "underscore.js", "backbone.js", "meteor.js", "handlebars.js", "Rails",
      "git", "Heroku", "Jekyll" ]
  };


  var favoriteTools = {
    title: "Favorite Tools :-)",
    items: ["github", "vim", "linux", "javascript","chrome inspector" ]
  };

  var interests = {
    title: "Interests",
    items: ["bikes", "camping", "television", "games"]
  }

  var contactMe = {
    title: "Contact Me",
    items: [ "github", "email", "twitter", "phone", "linkedin", "skype" ]
  }

  var blurbs = {
    // Tech:
    "underscore.js":
      "my go-to javascript utility belt. As a ruby developer\
      I love the familiar collections methods that underscore provides.",

    "backbone.js":
      "A model-view-collection pattern for building javascript applications.\
      See a code sample of mine for a prototype application using underscore\
      on <a href='http://github.com/natively/buddy-balance-backbone'>\
      Github</a>",

    "meteor.js":
      "a node.js derivative for building server-client js applications.\
      See a code sample of mine for an application Pause Break is currently\
      building on\
      <a href='http://github.com/natively/meteorbalance'>Github.</a>",

    "handlebars.js":
      "a client-side templating engine. I use it with meteor.js.",

    "Rails":
      "As web frameworks go,\
      I'm strongest and have the longest / most experience with Rails.",

    "git":
      "I love git! Branching makes managing multiple remote coders \
      and their commits much easier.",

    "Heroku":
      "Heroku is a great way to get a your product online\
      without the hassle of server administration.",

    ".NET": "At Eventbooking, we ran a WebForms 2.0 stack, and after a \
      rewrite, a 4.0 MVC stack.",

    "Knockout.js":
      "An MVVM templating engine.\
      At Eventbooking, we chose Knockout for the product rewrite.",

    "jQuery":
      "because document.getElementById gets old after a while ;-)",

    "Less":
      "Less is more! Less and Sass are both great, \
      though I wish they would combine the two projects.",

    "MSSQL":
      "EB's database layer. I mostly used it through an ORM.",

    "SVN":
      "We used SVN through Tortoise at Eventbooking.\
      Simple to use, yet a robust VCS.",

    "Ruby":
      "Great scripting language. Great 'glue' language. \
      I use it for one-off operation-y scripts on a daily basis.",

    "MySQL":
      "Half Off Depot's database layer. You can often find me writing reports\
      for the operations team using Workbench,\
        or in Ruby with the Sequel gem.",

    "Haml":
      "A Ruby server side HTML templating language. Sister to Sass.",

    "Sass":
      "Another nestable, function-oriented CSS superset.",

    "Coffeescript":
      "allows me to avoid nasty habits like forgetting the var keyword.\
      The syntax is pretty, too. :-)",

    "AWS":
      "AWS is our fully-featured web host. Despite outages last year, it's\
      been a great service.",

    "Jekyll":
      "This page was built with Jekyll! To view to source, visit\
      <a href='http://github.com/natively/natively.github.com'>Github</a>.",

    "vim":
      "my favorite, most efficient editor. I wrote a simple\
      introduction to using vim, available on\
      <a href='http://github.com/natively/vim'>Github</a>",
    
    "linux":
      "I'm an Ubuntu + gtk user. Most comfortable in front of a command line.\
      And more productive on Linux than Windows or OSX",

    "javascript": "I like javascript because nothing puts you closer and more\
      in control of the user experience. Also, writing javascript is fun!",

    "chrome inspector": "I switched from Firebug last year and\
      haven't looked back",

    // Headers:
    "Alex Lewis": "that's me!",

    "EventBooking.com":
      "My first `real' programming job. Loved working here, and had a lot of\
      talented developers to learn from.",

    "Half Off Depot":
      "The country's third largest deal-site behind Groupon and Living Social.\
      HOD is Pause Break's biggest client at the moment.",

    "Pause Break LLC":
      "We recently celebrated our 1 year anniversary!\
      <a href='http://pause-break.net'>Pause Break</a>\
      offers cutting edge web experiences to its clients. ",

    "Favorite Tools :-)":
      "Here are some of my favorite tools to work with.",

    "Interests": "I'm not *just* a programmer. But mostly I am.",

    "Contact Me": "the easiest way to get in touch is by email.",

    // Interests:
    "bikes":"I got into biking in college, when I realized how convenient it \
      is for getting around in the city. Now I commute daily by bicyle.",

    "camping":
      "Proud Eagle Scout here! Growing up in the Smoky Mountains gave me\
      many opportunities to `rough it' :-). Backpacking is great fun. I also\
      spent five summers teaching outdoor skills at a camp.",

    "beer": "yum!",

    "television":
      "Joss Whedon, The Wire, Breaking Bad, Portlandia, Archer...",

    "games":
      "I like old cRPGs like Baldur's Gate and Fallout.",

    // Contact Me:
    "github":"<a href='http://github.com/natively'>github.com/natively</a>",
    "twitter":"<a href='http://twitter.com/nativelyhuman'>twitter.com/nativelyhuman</a>",
    "email":"<a href='mailto:alex@pause-break.net'>alex@pause-break.net</a>",
    "phone": "865.806.3485",
    "linkedin": "<a href='http://www.linkedin.com/pub/alex-lewis/23/837/1a3/'>LinkedIn</a>",
    "skype": "alex--lewis",

    // Miscellaneous:
    "Engineer":
      "Maintained various customer websites, built features for the main app,\
      fixed bugs",

    "Web Developer":
      "My profession of choice.",

    "Lead Programmer":
      "My first leadership position. With my Pause Break co-founder, have\
      managed a foreign consulting team, established and enforced best practices,\
      refactored and enhanced existing software and implemented a complete\
      site redesign.",

    "Co-Founder":
      "One of three. We have a couple first-party apps in the works, mostly at\
      alpha-prototype stage. That said, most of our time is occupied working\
      contract jobs.",

    // Timeline:
    "May 2011 - October 2012":
      "My first job out of CS school. About 18 months at EB.",

    "October 2012 - present": 
      "Moved back downtown, resumed biking everywhere.",

    "February 2012 - present":
      "It's been a great experience building a company with my two friends."
  }

  var jobTemplate = $("#job-template").html();
  $("#eventbooking").html(_.template(jobTemplate, eventBooking));
  $("#half-off-depot").html(_.template(jobTemplate, halfOffDepot));
  $("#pause-break").html(_.template(jobTemplate, pauseBreak));

  var otherTemplate = $("#other-template").html();
  $("#favorite-tools").html(_.template(otherTemplate, favoriteTools));
  $("#interests").html(_.template(otherTemplate, interests));
  $("#contact-me").html(_.template(otherTemplate, contactMe));

  var msgConsole = {
    log: function(txt) {
      var html =
        '<p>['
        + (new Date).toLocaleTimeString()
        + '] '
        + txt
        + '</p>';
      $('#messages').append(html);
      $('#messages').scrollTop(
        $('#messages')[0].scrollHeight
      );
    },

    logBlurb: function(key) {
      var blurb = blurbs[key];
      msgConsole.log('<strong>'+ key + '</strong>' + ': ' + blurb);
    }
  };

  msgConsole.log( "Hello, I'm Alex. I'm a programmer, cyclist and musician from Knoxville, TN." );
  _.delay(msgConsole.log, 1500, "Click around! Or don't!");
  $('.live').click(function (ev) {
    msgConsole.logBlurb( $(ev.target).attr('data-blurb') );
  });

})
