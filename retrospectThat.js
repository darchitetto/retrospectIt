Quads = new Mongo.Collection("quads");

if (Meteor.isClient) {

  Template.body.helpers({
    quads: function(){
        return Quads.find({});
    }
  });

  Template.body.events({
    'change select': function (e,t) {
      Meteor.call('removeAllQuads');

      for (var i = 0; i < e.target.value; i++) {
        Quads.insert({quadName: "quad" + i});
      };
    }
  });
}