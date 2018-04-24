# Tab Component

This component it's the usual tab element. This component subidivides in two parts: normal and horizontal one.

The horizontal one is used for a site like Admision (http://admision.uva.es).

Every component must have it's own unique id that must be out thanks to the backend (on our case).

## UX - Element behavior

The element have different behavior deppending the size of the screen. So the size matters on how to use this element.

### PC/TV size (big)

This work as a common element, with an horizontal menu on the upper with links that change the down of it putting the content depending on the element you chose.

### Tablet (medium)

In a tablet this component will work like on the PC/TV size with an upper menu that changes the content area.

### Mobile (small)

On a mobile it show very different. The menu will be on the upper side of the element and if the menu is bigger than the width size of the screen the elements will be outside but you can swipe the menu in order to find what you need.

## UI - Element

## SCSS

We have two files depending of the component.

```
scss/\_tabs.scss (normal style)
scss/tabs_horizontal (horizontal tabs)
```
## Javascript (working in progress)

This component is made on ES2016 who have the querySelectorAll method (the most used in JQuery).

For touching purpouses (now) we must create variables to know where the "touch" begin and end in order to help the listener that put on the "ul" element (where the tab menu lies) and moves all the "ul" element right or left.

All it's made in one unique function called Create_Events_Tab who need the id of the tab element and have two parts. On the first we change the "active" that helps to know what are you looking (and put the necessary CSS), on the second create the addEventListener to the element and how it works when fire the event.

It's necesary to initialice the function with the id.
