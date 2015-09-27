A proof of concept app, showing async/await support with Babel working with Camo (https://github.com/scottwrobinson/camo).

Setup Babel file watcher with Webstorm or use gulp to generate the transpiled file.

For the Babel file watcher, use the following arguments:
--source-maps --out-file $FileDir$/$FileNameWithoutExtension$.js $FilePath$ --optional es7.asyncFunctions --blacklist es6.classes

In addition, for the Babel file watcher, the following Output paths to refresh:
$FileDir$/$FileNameWithoutExtension$.js:$FileDir$/$FileNameWithoutExtension$.js.map

Right-click on any of the .es7 files and choose "Associate file type".  From the window that pops up, choose JavaScript

To enable debugging, create a run configuration for Node, where:
 - the Node Parameters is "--harmony_proxies",
 - the working directory is the "server" directory, and
 - the JavaScript file is "index.js"


* * * *WARNING!* * * *
======================
You MUST use the --harmony_proxies node flag when running the application, or it will SILENTLY FAIL!
You can also run npm start, which has the flag already set.