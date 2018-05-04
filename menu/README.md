# Menu Component

A solution for the SPA applications for the University of Valladolid.

## UX - Element behavior

The element have different behavior depending the size of the screen. So the size matters on how to use this element.

The most complex it's to understand how the element works by himself in order to create the proper javascript.

The element is divided in two sub elements, one of them it's the content and the other it's a decorator (banner, image, extra info).

In the content there is various sub elements where the navigation is. The first level and the others sub levels. *Important* it's that only the last level must be interactive, must be an href, the others the extent possible.

If there's a first navigation level that have more than three sub levels there's an error on the analysis but, if needed, this navigation element will be independent and show their sub levels.

The better way it's to see the PDF file.

### PC/TV size (big)

This work as commented before.

### Tablet/Mobile (medium)

It will show a typical hamburger menu.

## UI - Element

## SCSS

The common file.

```
scss/menu.scss (menu element)
```
## Javascript (working in progress)

For now, the only JS required it's for the typical hamburger menu.
