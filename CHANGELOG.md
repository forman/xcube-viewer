
## Changes in version 0.2 (in dev.)

* Time-series are now loaded in increments so user see constantly growing time-series graph
  instead of doing nothing for tens of seconds until the server returns the complete series (#38)
* When animating through time, the index into a dataset's time coordinates array is incremented
  rather than incrementing current UI time by constant delta (#40)
* The viewer now allows for multiple time-series groups based on the variable's units (#27)
* Fixed a problem where selecting data points in time-series didn't show any data (#41)
* Added translation for Italiano and Rumeno (#25)
* Time-series are now plotted with standard deviation, if available e.g. for weekly means (#19)
* Colors of of time-series line charts are now synchronised with fill colors of points in map (#17)
* Map points and extracted time-series are now synchronised (#16):
  - When in "multi" mode, if all time-series are removed, also remove all related points in map
  - When not in "multi" mode, delete old point in map (if any) once new point is added
* It is now possible to switch between different servers (#14)

## Changes in version 0.1

Initial development version.