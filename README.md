# UVa_Components

This project is a repository of the basic components used and needed for all the projects made on the University of Valladolid website and subsites.

This project is not final. It's allways a working in progress like all the UX/UI ones. So if you find non complete components or non complete documentation don't cry at us.

## Before you start

This is based on HTML, SASS & JS. There's no suspicious way to have some React or Angular or any library based on Typescript or JS. All components must be done in vanilla JS in order not to depend on third parties.

Here you can find the UX documentation and the UI component made thanks the UX process and the structure of every directory will depend of the component itself.

## Usual directory structure

component_name/
  scss/
    component_name.scss (SCSS of the component)
  css/
    component_name.css (compiled version of the component)
  js/
    component_name.js (JS for the component)
  img/
    .... (images needed for the component -if needed-)
  psd/
    component_name.psd (PSD file with the UI of the component)
  index.html (example of the component runing)
  readme.md (documentation of the component)
js/
  sass.js (needed if you try to run scss directly without compiling it)

## Example of the component

On the index.html file is a running example of the component. This file can be related libraries like Bootstrap, Foundation or JQuery if needed in order to run the example so, all this "linked" libraries must be linked outside (CDN, Google Hosted Libraries...).

## Components with _

Sometimes you will see components that his SCSS begins with an underscore. That means that this component is basic for the others, for example font definitions or color definitions.

## Components without the structure

You can find components that don't use the usual directory structure. That component is a basic component and maybe don't need an example in order to run.
