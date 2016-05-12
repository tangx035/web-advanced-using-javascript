# Assignment 2
# web advanced - javascript
# Nima Behravan

## Instructions

Using **only** JavaScript **without** any external libraries (that is, no jQuery, etc), you are to implement three separate interactions that are commonly included in web sites: a modal, a drop-down menu, and a side tray. All three should be implemented in the same page, and each of the interactions should transition smoothly over the course of 500 milliseconds (half a second) between pre- and post-triggered states. You may use any transition function you’d like.

The design of all three interactions is entirely up to you, so use this as an opportunity to practice your design skills.

### The Modal

The modal should be triggered when a user clicks the “Show Modal” UI element. The modal you create can be any shape you desire, but must be visibly distinguishable from other elements on the page. The background of the modal must create an opaque layer between the focused, front-most UI element and the rest of the page. An example is available [here](http://ui-patterns.com/users/1/collections/modal-windows/screenshots).

The background layer of your modal must obscure the entire contents of your page by filling the viewport, even if either the drop-down menu or the side tray is showing. If the viewport is re-sized, the background of your modal must follow and re-paint the viewport. The only way the user should be able to exit the modal is by clicking on the background layer or pressing the `esc` key.

### The Drop-Down Menu

The drop-down menu and the side tray version of the drop-down menu are mutually exclusive, dictated by a 736-pixel breakpoint (the iPhone 6 Plus). The drop-down menu should only be shown at screen widths above 736 pixels when the “Show Menu” UI element is clicked.

The drop-down menu you create must reveal and hide itself under the `header` in the template, behind the top of the viewport. The width of the drop-down menu should re-flow with the viewport.

### The Side Tray

The drop-down menu becomes a side tray at screen widths under 736 pixels. It should jut out of the page from the left. It may not scroll with the page. Design this as you’d like, but it should be clear to the user that what they’re seeing is a menu that is revealed and hidden from the left of the viewport.

### The Show Menu and Show Modal UI Elements

The UI elements that trigger the JavaScript interactions are two list items in the HTML under the ID `js-triggers`. Neither of the two should be obscured when either the drop-down menu or the left side tray is triggered. Both must be obscured by the modal.
