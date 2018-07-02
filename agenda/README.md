# Agenda component

This component will show a "number" of elements that will be from a rest service in a kind of slideshow. We don't know the exact number but "we know" the colors of the elements (or something like)..

## UI

We only have the general view of the "slideshow", nothing more.

## UX

Nothing. Yes, really nothing!. No size, no way of work, no what can happend with different kind of text and sizes, no idea about responsive, nothing...

## SCSS

The agenda.scss on the scss directory have a mixin that creates the "element", and nothing more important. On this way, the element can be reutilizable (or not) and it's the best in the "functional programming" way of doing things.

## Javscript

We have taking the slideshow.js and "retouched it" in order to work showing more than one element. The number of elements are configurable via an array but you must rememeber to alter the DOM element to show the exact number.

It can be done all by the function (create the element, put the proper col or flex properties) but that's not been requested maybe because this element doesn't have UX at all. So we can't do magic without information.
