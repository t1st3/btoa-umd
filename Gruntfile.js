'use strict';

var LIVERELOAD_PORT = 35729;
var SERVER_PORT = 9000;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
  
  require('load-grunt-tasks')(grunt, {
    scope: 'devDependencies',
    config: 'package.json',
    pattern: ['grunt-*']
  });
  
  require('time-grunt')(grunt);
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'src/**/*.js', 'test/unittests.js', 'test/functests.js', 'Gruntfile.js'
      ]
    },
    jscs: {
      src: [
        'src/**/*.js', 'test/unittests.js', 'test/functests.js', 'Gruntfile.js'
      ],
      options: {
        config: '.jscs.json'
      }
    },
    uglify: {
      options: {
        mangle: false,
        banner: '/** <%= pkg.name %> <%= pkg.version %> \n * <%= grunt.template.today(\'yyyy-mm-dd\') %>\n */\n',
        sourceMap: true,
        sourceMapName: 'dist/btoa-umd.min.map'
      },
      myTarget: {
        files: {
          'dist/btoa.min.js': ['src/btoa-umd.js']
        }
      }
    },
    copy: {
      build: {
        files: [
          {src: ['src/btoa-umd.js'], dest: 'dist/btoa-umd.js'}
        ]
      },
      docs: {
        files: [
          {src: ['dist/btoa-umd.js'], dest: 'gh-pages/lib/btoa-umd.js'}
        ]
      },
      init: {
        files: [
          {src: ['bower_components/jquery/dist/jquery.js'], dest: 'gh-pages/lib/jquery.js'},
          {src: ['bower_components/requirejs/require.js'], dest: 'gh-pages/require.js'},
          {src: ['bower_components/mocha/mocha.js'], dest: 'gh-pages/lib/mocha.js'},
          {src: ['bower_components/mocha/mocha.css'], dest: 'gh-pages/assets/css/mocha.css'},
          {src: ['bower_components/chai/chai.js'], dest: 'gh-pages/lib/chai.js'},
          {src: ['bower_components/chai-jquery/chai-jquery.js'], dest: 'gh-pages/lib/chai-jquery.js'},
          {src: ['bower_components/modernizr/modernizr.js'], dest: 'gh-pages/lib/modernizr.js'},
          {src: ['bower_components/bootstrap/dist/js/bootstrap.min.js'], dest: 'gh-pages/lib/bootstrap.min.js'},
          {src: ['bower_components/bootstrap/dist/css/bootstrap.min.css'], dest: 'gh-pages/assets/css/bootstrap.min.css'},
          {expand: true, flatten: true, src: ['bower_components/bootstrap/dist/fonts/*'], dest: 'gh-pages/assets/fonts/', filter: 'isFile'},
          {src: ['bower_components/font-awesome/css/font-awesome.min.css'], dest: 'gh-pages/assets/css/font-awesome.min.css'},
          {expand: true, flatten: true, src: ['bower_components/font-awesome/fonts/*'], dest: 'gh-pages/assets/fonts/', filter: 'isFile'},
          {src: ['bower_components/codemirror/lib/codemirror.css'], dest: 'gh-pages/assets/css/codemirror.css'},
          {src: ['bower_components/codemirror/lib/codemirror.js'], dest: 'gh-pages/lib/codemirror.js'},
          {src: ['bower_components/codemirror/mode/javascript/javascript.js'], dest: 'gh-pages/lib/codemirror/javascript.js'},
          
          {expand: true, flatten: false, cwd: 'bower_components/t1st3-assets/dist/assets/img/', src: ['**/*'], dest: 'gh-pages/assets/img/'},
          {src: ['bower_components/t1st3-assets/dist/assets/css/t1st3.css'], dest: 'gh-pages/assets/css/t1st3.min.css'},
          {src: ['bower_components/t1st3-assets/dist/assets/css/404.css'], dest: 'gh-pages/assets/css/404.min.css'},
          {src: ['bower_components/t1st3-assets/dist/umd_sitemap.xml'], dest: 'gh-pages/sitemap.xml'},
          {expand: true, flatten: false, cwd: 'bower_components/t1st3-assets/dist/_layouts/', src: ['**/umd_*'], dest: 'gh-pages/_layouts/'},
          {src: ['bower_components/t1st3-assets/dist/_includes/umd_bottom-menu.html'], dest: 'gh-pages/_includes/umd_bottom-menu.html'},
          {src: ['bower_components/t1st3-assets/dist/_includes/umd_head.html'], dest: 'gh-pages/_includes/umd_head.html'},
          {src: ['bower_components/t1st3-assets/dist/_includes/umd_header.html'], dest: 'gh-pages/_includes/umd_header.html'},
          {src: ['bower_components/t1st3-assets/dist/_includes/umd_footer.html'], dest: 'gh-pages/_includes/umd_footer.html'},
          
          {src: ['test/unittests.js'], dest: 'gh-pages/unittests.js'},
          {src: ['test/functests.js'], dest: 'gh-pages/functests.js'}
        ]
      },
      readme: {
        options: {
          process: function (content) {
            return content.replace(/\{\{ site.name \}\}/g, grunt.file.readJSON('package.json').name);
          }
        },
        files: [
          {src: ['gh-pages/readme.md'], dest: 'README.md'}
        ]
      }
    },
    template: {
      init: {
        options: {
          data: {
            ProjectName: '<%= pkg.name %>',
            ProjectVersion: '<%= pkg.version %>',
            ProjectDependencies: ''
          }
        },
        files: {
          'gh-pages/index.html': ['bower_components/t1st3-assets/dist/umd_index.html'],
          'gh-pages/404.html': ['bower_components/t1st3-assets/dist/umd_404.html'],
          'gh-pages/unittests_amd.html': ['bower_components/t1st3-assets/dist/umd_unittests_amd.html'],
          'gh-pages/unittests_global.html': ['bower_components/t1st3-assets/dist/umd_unittests_global.html'],
          'gh-pages/functests_amd.html': ['bower_components/t1st3-assets/dist/umd_functests_amd.html'],
          'gh-pages/functests_global.html': ['bower_components/t1st3-assets/dist/umd_functests_global.html'],
          'gh-pages/coverage.html': ['bower_components/t1st3-assets/dist/umd_coverage.html'],
          'gh-pages/jsdoc.html': ['bower_components/t1st3-assets/dist/umd_jsdoc.html'],
          'gh-pages/readme.md': ['bower_components/t1st3-assets/dist/umd_readme.md'],
          'gh-pages/license.md': ['bower_components/t1st3-assets/dist/umd_license.md'],
          'gh-pages/_config.yml': ['bower_components/t1st3-assets/dist/_umd_config.yml']
        }
      }
    },
    jekyll: {
      docsamd: {
        options: {
          config: 'gh-pages/_config.yml',
          src: 'gh-pages/',
          dest: 'docs/'
        }
      }
    },
    clean: {
      ghpages: [
        'gh-pages/_layouts', 'gh-pages/assets/', 'gh-pages/_config.yml', 'gh-pages/*.html', 'gh-pages/*.md', 'gh-pages/lib', 'gh-pages/_includes/umd_*', '!gh-pages/.git'
      ],
      docs: ['docs']
    },
    matter: {
      options: {
        strip: true
      },
      files: {
        src: 'README.md', dest: 'README.md'
      }
    },
    jsdoc : {
      dist : {
        src: ['src/**/*.js'],
        options: {
          destination: 'gh-pages/jsdoc'
        }
      }
    },
    version: {
      js: {
        options: {
          prefix: '@version\\s*'
        },
        src: ['src/**/*.js']
      },
      json: {
        options: {
          prefix: '"version":\\s"*'
        },
        src: ['bower.json']
      }
    },
    watch: {
      options: {
        nospawn: true,
        livereload: true
      },
      src: {
        files: ['src/**/*.js'],
        tasks: ['copy:docs'],
        options: {
          livereload: {
            port: LIVERELOAD_PORT
          }
        }
      }
    },
    connect: {
      options: {
        port: SERVER_PORT,
        hostname: 'localhost'
      },
      livereload: {
        options: {
          base: 'docs',
          middleware: function (connect) {
            return [
              lrSnippet,
              mountFolder(connect, 'docs')
            ];
          }
        }
      }
    },
    open: {
      server: {
        path: 'http://localhost:' + SERVER_PORT
      }
    },
    bower: {
      init: {
        options: {
          copy: false,
          install: true,
          verbose: true,
          cleanTargetDir: false,
          cleanBowerDir: false,
          bowerOptions: {}
        }
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          timeout: 30000,
          require: 'test/blanket'
        },
        src: ['test/unittests.js', 'test/functests.js']
      },
      coverage: {
        options: {
          reporter: 'html-cov',
          quiet: true,
          captureFile: 'gh-pages/coverage/index.html'
        },
        src: ['test/unittests.js']
      }
    },
    compress: {
      sitemap: {
        options: {
          mode: 'gzip'
        },
        expand: true,
        cwd: 'docs/',
        src: ['**/*sitemap.xml'],
        dest: 'docs/'
      },
      sitemapgh: {
        options: {
          mode: 'gzip'
        },
        expand: true,
        cwd: 'docs/',
        src: ['**/*sitemap.xml'],
        dest: 'gh-pages/'
      }
    }
  });

  grunt.registerTask('init', [
    'bower:init',
    'clean:ghpages',
    'copy:init',
    'template:init'
  ]);

  grunt.registerTask('build', [
    'version:js',
    'version:json',
    'jshint',
    'jscs',
    'copy:build'
  ]);

  grunt.registerTask('serve', [
    'connect:livereload',
    'open',
    'watch:amd'
  ]);

  grunt.registerTask('doc', [
    'clean:docs',
    'copy:docs',
    'jsdoc:dist',
    'mochaTest:test',
    'mochaTest:coverage',
    'jekyll:docsamd',
    'copy:readme',
    'compress:sitemap',
    'compress:sitemapgh',
    'matter'
  ]);
  
  grunt.registerTask('test', [
    'jshint',
    'jscs',
    'mochaTest:test'
  ]);
};