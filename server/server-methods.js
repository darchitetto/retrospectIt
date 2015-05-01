Meteor.methods({
  removeAllQuads: function(){
    return Quads.remove({});
  }
});