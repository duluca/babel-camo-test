A proof of concept app, showing async/await support with Babel working with Camo (https://github.com/scottwrobinson/camo).

* * * *WARNING!* * * *
======================
You MUST use the ```--harmony_proxies``` node flag when running the application, or it will SILENTLY FAIL!
You can also run npm start, which has the flag already set.

Setup Babel file watcher with Webstorm or use gulp to generate the transpiled file.

For the Babel file watcher, create a new scope, with the following pattern:
```
file[babel-camo-test]:server//*.es7
```

For the Babel file watcher, use the following arguments:
```
--source-maps --out-file $FileDir$/$FileNameWithoutExtension$.js $FilePath$ --optional es7.asyncFunctions --blacklist es6.classes
```

For the Babel file watcher, the following Output paths to refresh:
```
$FileDir$/$FileNameWithoutExtension$.js:$FileDir$/$FileNameWithoutExtension$.js.map
```

Right-click on any of the .es7 files and choose "Associate file type".  From the window that pops up, choose JavaScript

###NOTE: Do not run gulp before this step, if you want watcher folding to work!
In WebStorm, select the server directory, press Ctrl+Shift+A (or Cmd+Shift+A on Mac) and type "Run file watchers", then press enter.
If you have already run gulp before this step, delete all of your *.js and *.js.map files, and try this step again.

To enable debugging, create a run configuration for Node, where:
 - the Node Parameters is ```--harmony_proxies```,
 - the working directory is the ```server``` directory, and
 - the JavaScript file is ```index.js```

_TIP:_ If you want WebStorm to stop putting squiggly lines under (and complaining about) async/await:
 go to Languages and Frameworks -> JavaScript and choose JSX Harmony as your Javascript language version.