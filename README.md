# LightPaint
###### *LightPaint* is a light-painting app built with Electron.

##### Running LightPaint
The OSX build of *LightPaint* can be found in `bin/LightPaint.app`, 
downloadable packages and builds for other environments are coming soon.

###### To capture Light Paintings

1. You can `upload` a light painting mp4 video or `record` one and record yourself painting with a light source.
2. Review the capture preview and `render` if you're heappy with the video.
3. The light painting will be rendered and previewed, you can `save` it as a png.

###### How it works

LightPaint captures every frame of the source video and overlays it on a black canvas.
When a frame is overlayed, only lighter pixels are drawn on top of the canvas, that's 
called a `lighter` blend-mode - meaning that dark frames don't hide the light source of previous frames. 
When the render is complete the contour of the light source's path in the video is captured as a light painting!

##### Building LightPaint
To run the development environment:

1. first install all node dependencies: `npm install`
2. Make sure [webpack](webpack.github.io) is installed: `npm install -g webpack`
3. Run the development version (Electron will be launched and auto-refresh): `webpack -w`

##### Mentions
*LightPaint* is built using [Electron](https://github.com/atom/electron), [React](https://github.com/facebook/react) & [Redux](https://github.com/rackt/redux)
