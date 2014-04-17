btoa-umd
==================


[![NPM version](https://badge.fury.io/js/btoa-umd.svg)](http://badge.fury.io/js/btoa-umd)
[![Dependency Status](https://david-dm.org/t1st3/btoa-umd.svg?theme=shields.io)](https://david-dm.org/t1st3/btoa-umd)
[![Build Status](https://travis-ci.org/T1st3/btoa-umd.svg?branch=master)](https://travis-ci.org/T1st3/btoa-umd)



About
---
You'll find all about this project on its **[project pages](http://t1st3.github.io/btoa-umd/)**


Links about UMD modules:

* [UMD definition](https://github.com/umdjs/umd)
* [Addy Osmani's post about modular JS](http://addyosmani.com/writing-modular-js/)




Installation for production
---
Installing depends on the context:

**Node.js**

`btoa-umd` is available on [NPM](https://www.npmjs.org/package/btoa-umd)
[![NPM](http://t1st3.github.io/btoa-umd/assets/img/vendor/npm-16x16.png)](https://www.npmjs.org/package/btoa-umd).
You can install it with the following command:

    npm install btoa-umd


**Browser globals and AMD**


`btoa-umd` is available on [Bower](http://bower.io/)
[![Bower](http://t1st3.github.io/btoa-umd/assets/img/vendor/bower-16x16.png)](http://bower.io/). 
To install it from Bower, just run 

    bower install btoa-umd

Published versions on both NPM and Bower should stay in sync:
[![NPM version](https://badge.fury.io/js/btoa-umd.svg)](http://badge.fury.io/js/btoa-umd)
[![NPM version](https://badge.fury.io/bo/btoa-umd.svg)](http://badge.fury.io/js/btoa-umd)



Installation for development
---
You also can download the whole project (and build it from its source; see below).

Either use `git clone` command to get it:

    git clone https://github.com/T1st3/btoa-umd.git

Or download the latest version of [the whole project](https://github.com/T1st3/btoa-umd/archive/master.zip).

Then, get the dependencies of the project:

    npm install
    bower install



Documentation
---
You can find fully functional examples, tests and documentation in the [JSDoc](http://usejsdoc.org/) format in the `docs` folder.

You can also browse these examples and tests online:

- [Demo (AMD)](http://t1st3.github.io/btoa-umd/)
- [Tests (AMD)](http://t1st3.github.io/btoa-umd/tests.html)
- [this README](http://t1st3.github.io/btoa-umd/readme.html)
- [JSDoc](http://t1st3.github.io/btoa-umd/jsdoc.html)



Build from source
---
First, see "Installation for development" above. 
Do not forget to get the dependencies!

Then, you also need to install [Grunt](http://gruntjs.com/) globally to build the project.

    npm install -g grunt-cli

See more at the ["Getting started with Grunt" page](http://gruntjs.com/getting-started).


---
You are now ready to build!

The source is located in the "src" folder; the built target is located in the "dist" folder.

To build, just run:

    grunt build

To test, you can use Grunt:

    grunt test

or you can use the npm command directly

    npm test


**Serve and livereload**

You can also use the `serve` task to load the `docs` pages in your browser.

    grunt serve

Once it has loaded the page in the browser, this task watches for any modification in the source.
If changes happen in the source, the task automatically reloads the page in the browser (livereload).



Build the docs & Github pages
---
The process of building the docs makes the following:

* import the `gh-pages` branch transpently into your master branch (see below)
* rebuild those gh-pages
* compile the gh-pages to the "docs" folder
* the "docs" folder will include all the pages of the [project pages](http://t1st3.github.io/btoa-umd/), viewable offline
* the "docs" folder can be served with the `grunt serve` task (see above)
* finally update the README.md file in the root folder with README.md from the gh-pages

Please note that this task has a few more dependencies:

* [Ruby](https://www.ruby-lang.org/) and [RubyGems](https://rubygems.org/)
* [Jekyll](http://jekyllrb.com/)
* [Kramdown](http://kramdown.gettalong.org/)


Once you have installed Ruby and RubyGems, 
you can get Jekyll and Kramdown "the RubyGem-way":

    gem install jekyll
    gem install kramdown

Note that on MacOS or GNU/Linux, 
you may want to install those Gems with `sudo` 
to install them globally on your system:

    sudo gem install jekyll
    sudo gem install kramdown



---
This part may appear tricky, 
since you will download the `gh-pages` branch of the project 
right inside the root folder of your current `master` branch.
But the process is quite transparent...


You first need to get the "gh-pages" branch of the project, 
and inject it in the project folder:

    git clone https://github.com/T1st3/btoa-umd.git
    mv btoa-umd gh-pages
    cd gh-pages
    git checkout --orphan gh-pages
    git rm -rf .
    git pull origin gh-pages
    cd ../

So, you should normally have created the `gh-pages` folder, along the `dist` and `src` folders.

Note that, even if you keep the `gh-pages` folder in the project, this folder:

* [will not be commited/pushed to GIT on master branch](https://github.com/T1st3/btoa-umd/blob/master/.gitignore)
* [will not be included in Bower releases](https://github.com/T1st3/btoa-umd/blob/master/bower.json)
* [will not be included in NPM releases](https://github.com/T1st3/btoa-umd/blob/master/.npmignore)


Building the docs will rebuild the `gh-pages`, and compile them to the `docs` folder, using the following Grunt tasks:

    grunt init
    grunt doc

And since you transparently have the `gh-pages` branch being updated by those tasks right in your project folder, 
you can commit and push to the `gh-pages` branch just with a couple of `cd`:

    cd gh-pages
    git add -A
    git commit -m 'from master branch'
    git push origin gh-pages
    cd ../



Credits
---
Status of dependencies:

[![Dependency Status](https://david-dm.org/t1st3/btoa-umd.svg?theme=shields.io)](https://david-dm.org/t1st3/btoa-umd)
[![devDependency Status](https://david-dm.org/t1st3/btoa-umd/dev-status.svg?theme=shields.io)](https://david-dm.org/t1st3/btoa-umd#info=devDependencies)


Beside the dependencies, this project also uses the following for its tests and examples:

* jQuery [Website](http://jquery.com/) / [MIT License](https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt)
* Bootstrap [Website](http://getbootstrap.com/) / [MIT License](https://github.com/twbs/bootstrap/blob/master/LICENSE-MIT)
* Modernizr [Website](http://modernizr.com/) / [MIT License](http://modernizr.com/license/)
* Font-Awesome [Website](http://fontawesome.io/) / [Sil OFL 1.1 + MIT License](http://fontawesome.io/license/)
* HTML5Boilerplate [Website](http://html5boilerplate.com/) / [MIT License](https://github.com/h5bp/html5-boilerplate/blob/master/LICENSE.md)
* Require.js [Website](http://requirejs.org/) / [new BSD or MIT License](https://github.com/jrburke/requirejs/blob/master/LICENSE)
* Mocha [Website](http://visionmedia.github.io/mocha/) / [MIT License](https://github.com/visionmedia/mocha/blob/master/LICENSE)
* Chai [Website](http://chaijs.com/) / [MIT License](https://github.com/chaijs/chai)
* Chai-jQuery [Website](https://github.com/chaijs/chai-jquery) / [MIT License](https://github.com/chaijs/chai-jquery/blob/master/LICENSE)
* CodeMirror [Website](http://codemirror.net/) / [MIT License](https://github.com/marijnh/CodeMirror/blob/master/LICENSE)
* Normalize.css [Website](http://necolas.github.io/normalize.css/) / [MIT License](https://github.com/necolas/normalize.css/blob/master/LICENSE.md)


They're all dependencies (in some way) of [T1st3-assets](https://github.com/t1st3/T1st3-assets/), 
which is my skeleton for documentation and `github pages`.

This project is [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/).



License
---
This piece of code is triple-licensed: [MIT / BSD / GPL licenses](https://github.com/T1st3/btoa-umd/blob/master/LICENSE.md)

You can also view it in a re-formatted fashion: [MIT / BSD / GPL licenses](http://t1st3.github.io/btoa-umd/license.html).



Author
---
[T1st3](https://github.com/T1st3/) 
[![T1st3](http://t1st3.github.io/btoa-umd/assets/img/gravatar-16x16.png)](https://github.com/T1st3/)
