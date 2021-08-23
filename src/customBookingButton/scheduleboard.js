'use strict';

/** Schedule Board Client Extension Container */
var sbclientExtension = {

    /** Overrides the required click events in the Booking element */
    override: {
        "Board.RenderHourlyBooking": function (requestContext, parentHandler) {
            setTimeout(function () {
                var custombookingButtons = $(".custombooking-button");
                if (custombookingButtons !== null && custombookingButtons !== 'undefined') {

                    /* Unbind the existing mouse click */
                    $(".custombooking-button").unbind('click');

                    /* Re-bind the mouse click on all the <img> tags to
                       display a Check In Questions for bookings */
                    for (var i = 0; i < custombookingButtons.length; i++) {
                        custombookingButtons[i].onclick = function (e) {

                            /* Get the value of the current booking being clicked on
                               as well as the value of the current workorder. */
                            var bookingId = e.currentTarget.attributes["booking-id"].value;
                            var woId = e.currentTarget.attributes["wo-id"].value;

                            /* Call our custom method to run the Check-In logic. */
                            sbclientExtension.runCustomButtonLogic(bookingId, woId);

                            e.stopPropagation();
                            return false;
                        };
                    }
                }
            }, 5000);
            return parentHandler.execute();
        }
    },

    /** Custom Booking-Logic */
    runCustomButtonLogic: function (bookingId, woId) {        
        alert("Hello World!");
    }
}

/** Registers the extension via the extensions mediator instance */
FPS.ClientExtensions.Mediator.register(sbclientExtension);