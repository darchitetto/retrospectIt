Template.dropdown.events({
    'click .dropdown a': function (e,t) {
      Meteor.call('removeAllQuads');

      for (var i = 0; i <  $(e.target).attr('value'); i++) {
        Quads.insert({quadName: "quad" + i});
      };
    }
  });