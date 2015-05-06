Template.quad.events({
    'dblclick': function (e) {
        var data = Template.currentData();
        var template = Template.instance();
        var canvasIdAndIndexInGamesQuads = template.$('canvas').attr('id');

        bootbox.prompt("Whatcha want to say?", function (result) {
            if (result === null) {
            } else {
                var card = $("<div class='card'>").appendTo(template.$('.cards')).text(result);
                makeCardDraggable(card[0], data.id);
                Meteor.call('updateQuad', Session.get('gameId'), data.id, template.$(".cards").html())
            }
        });
    }
});

Template.quad.onRendered(function () {
    var data = Template.currentData();
    var template = Template.instance();

    template.$(".cards").html(Template.currentData().data);

    _.each(template.$(".cards .card"), function(card){ makeCardDraggable(card, data.id) });
});

function makeCardDraggable(card, quadId) {
    interact(card)
        .draggable({
            onmove: function (event) {
                window.dragMoveListener(event, quadId);
            },
            restrict: {
                restriction: '.cards',
                elementRect: { top: 0, left: 0, bottom: 0, right: 0 }
            }
        })
        .resizable({
            edges: {left: true, right: true, bottom: true, top: true},
            restrict: {
                restriction: '.cards',
                elementRect: { top: 0, left: 0, bottom: 0, right: 0 }
            }
        })
        .on('resizemove', function (event) {
            var target = event.target,
                x = (parseFloat(target.getAttribute('data-x')) || 0),
                y = (parseFloat(target.getAttribute('data-y')) || 0);

            // update the element's style
            target.style.width = event.rect.width + 'px';
            target.style.height = event.rect.height + 'px';

            // translate when resizing from top or left edges
            x += event.deltaRect.left;
            y += event.deltaRect.top;

            target.style.webkitTransform = target.style.transform =
                'translate(' + x + 'px,' + y + 'px)';

            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
        })
        .on('up', function(event) {
            var target = event.target;
            var html = $(target).closest(".cards").html();
            Meteor.call('updateQuad', Session.get('gameId'), quadId, html)
        });
}

function dragMoveListener(event, quadId) {
    var target = event.target,
    // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
        target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}

window.dragMoveListener = dragMoveListener;