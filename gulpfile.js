var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss');
    mix.sass('homepage.scss', 'public/css/homepage.css');
    mix.copy('node_modules/font-awesome/fonts', 'public/fonts');
    mix.browserify('dashboard-app/dashboard.js', 'public/js/admin-dashboard.js');
});
