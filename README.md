# UVa_Components

This project is a repository of the basic components used and needed for all the projects made on the University of Valladolid website and subsites.

This project is not final. It's allways a working in progress like all the UX/UI ones. So if you find non complete components or non complete documentation don't cry at us.

## Before you start

This is based on HTML, SASS & JS. There's no suspicious way to have some React or Angular or any library based on Typescript or JS. All components must be done in vanilla JS in order not to depend on third parties.

Here you can find the UX documentation and the UI component made thanks the UX process and the structure of every directory will depend of the component itself.

Some documentation can be on spanish (sorry, we are from Spain) and we try to create the most on english but if you find something on spanish... sorry (for example the documentation inside the functions). It's the language we comunicate inside our work so for easy development somethings can be on spanish.

## Usual directory structure
```
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
  ux/
    component_name_ux.pdf (PDF with the UX of the component)
  index.html (example of the component runing)
  readme.md (documentation of the component)
js/
  sass.js (needed if you try to run scss directly without compiling it)
```
## Example of the component

On the index.html file is a running example of the component. This file can be related libraries like Bootstrap, Foundation or JQuery if needed in order to run the example so, all this "linked" libraries must be linked outside (CDN, Google Hosted Libraries...).

## UX of the component

Every component has included a directory called UX where is a PDF file where the UX of the component it's explained.

It must have the different sizes and how the component works explained on it.

The component can have different elements inside so there's a nomenclature in order to understand wich elements will show (or not) in the different sizes.

Elements in uppercase are always necessary. Elements in lowercase are optionals.

The name of the size will be on brackets.

Optional elements can be added or removed from one size to another.

Example:

Component 12abc: Have two necessary elements (1 and 2) and three optional elements (a, b, c).

12abc[PC]-bc[Tablet]+c[Movil]

This means that the component have all the elements in the PC size but we remove the b and c element on the tablet version but (from the tablet version), we add the element c for the mobile version, so, finally, the component will be:

PC: 12abc<br/>
Tablet: 12a<br/>
Mobile: 12ac

We use a graceful downgrade and its a mix between responsive and adaptive!

## Components with _

Sometimes you will see components that his SCSS begins with an underscore. That means that this component is basic for the others, for example font definitions or color definitions.

## Components without the structure

You can find components that don't use the usual directory structure. That component is a basic component and maybe don't need an example in order to run.

Basic components usually are imported on secondary in order to run.
