$(function () {

  var techUSA = {
    company: "Tech USA",
    title: "Professional Recruiter",
    dateRange: "September 2011 - February 2012",
    items: [
     ]
  }

  var nCrowd = {
    company: "nCrowd",
    title: "Project Engineer",
    dateRange: "July 2012 - May 2013",
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
    title: "Favorite Tools",
    items: ["github", "linux", "javascript", "chrome inspector", "new relic" ]
  };

  var interests = {
    title: "Interests",
    items: ["music", "camping", "games"]
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

    "jQuery":
      "because document.getElementById gets old after a while ;-)",

    "Less":
      "Less is more! Less and Sass are both great, \
      though I wish they would combine the two projects.",

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
      "AWS is our fully-featured web host. Despite occasional outages last year, it's\
      been a great service that gives a lot of control over your server administration",

    "Jekyll":
      "This page was built with Jekyll! To view to source, visit\
      <a href='http://github.com/mwickman/mwickman.github.com'>Github</a>.",
    
    "linux":
      "I'm an Ubuntu + gtk user. Most comfortable in front of a command line.\
      And more productive on Linux than Windows or OSX",

    "javascript": "I like javascript because nothing puts you closer and more\
      in control of the user experience. Also, writing javascript is fun!",

    "chrome inspector": "This is great for tracking down bugs or just learning how a cool\
    web page works.",

    // Headers:
    "Matthew Wickman": "that's me!",

    "EventBooking.com":
      "My first `real' programming job. Loved working here, and had a lot of\
      talented developers to learn from.",

    "nCrowd":
      "The country's third largest deal-site behind Groupon and Living Social,\
      formerly known as Half Off Depot. nCrowd is Pause Break's biggest client at\
      the moment.",

    "Pause Break LLC":
      "We recently celebrated our 1 year anniversary!\
      <a href='http://pause-break.net'>Pause Break</a>\
      offers cutting edge web experiences to its clients. ",

    "Favorite Tools":
      "Here are some of my favorite tools to work with.",

    "Interests":
      "Technology has always been one of my greatest interestins, but I like other\
      thigs too!",

    "Contact Me": "the easiest way to get in touch is by email.",

    // Interests:
    "music":
      "I love both listening to and playing music. I've played the guitar for about 10\
      years, and also play a few flute instruments like the ocarina and irish tin whistle.\
      I generally prefer anything funky or jazzy as far as listening goes."
    "camping":
      "Proud Eagle Scout here! Growing up in the Smoky Mountains gave me\
      many opportunities to `rough it'. Backpacking is great fun. I also\
      spent four summers teaching outdoor skills at a camp.",

    "games":
      "I like RPGs and strategy games, like Starcraft II and Baldur's Gate.\
      Recently I played FTL and loved it!",

    // Contact Me:
    "github":"<a href='http://github.com/mwickman'>github.com/mwickman</a>",
    "twitter":"<a href='http://twitter.com/matthew_wickman'>twitter.com/matthew_wickman</a>",
    "email":"<a href='mailto:wickman.matthew@gmail.com'>wickman.matthew@gmail.com</a>",
    "phone": "865.254.3645",
    "linkedin": "<a href='www.linkedin.com/pub/matthew-wickman/1b/61b/b8/'>LinkedIn</a>",
    "skype": "mwickman88",

    // Miscellaneous:
    "Professional Recruiter":
      "During my time as a recruiter I had two account-breaking recruits with major clients.\
      I quickly realized though that I wanted to be building software, not recruiting for it.",

    "Project Engineer":
      "My profession of choice. I love getting my hands dirty in all parts of the development\
      cycle, and the ability to learn quickly is one of my greatest strengths.",

    "Co-Founder":
      "One of three. We have a couple first-party apps in the works, mostly at\
      alpha-prototype stage. That said, most of our time is occupied working\
      contract jobs.",

    // Timeline:
    "September 2011 - February 2012":
      "My first job out of school. Being a recruiter turned out to not be a great fit.",

    "July 2012 - May 2013": 
      "Moved to downtown Knoxville and really enjoyed being able to walk or bike to work!",

    "February 2012 - present":
      "It's been a great experience building a company with my two friends."
  }

  var jobTemplate = $("#job-template").html();
  $("#nCrowd").html(_.template(jobTemplate, nCrowd));
  $("#tech-usa").html(_.template(jobTemplate, techUSA));
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
