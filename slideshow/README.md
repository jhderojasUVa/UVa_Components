# Slideshow Component

This component it's the typical slideshow who shows one image after another in a certain period of time. Well, the typical carrousel or slideshow. Nothing more.

# UX - Element behavior

We don't have any definitions here.

# UI - Element

## SCSS

## Javascript

The JS of this component is very easy. Only one function (showSlide) who need two parameters.

First, the name of the ID element who contains the slideshow.

Second, the optional parameters of the slideshow: number of the slideshow to init (if not it will be 0), and the timming in ms (default 2000).

The way who it works it's very easy. Every slide inside the ID element have a div with a certain class (slide). First we change the display to none in order to hide all elements. Then we change to "inline-block" the slide who must be show.

After that we call the slide function again with the options changed (new start slide) and it's done.
