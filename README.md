# Remindux

This is a Rails 5/React-Redux application to demonstrate the latest technologies and practices I've experienced thus far in my career.

# Technologies
Rails 5 for an API back-end, using [devise token auth](https://github.com/lynndylanhurley/devise_token_auth) for a single token Devise authentication.

React/Redux for the front-end, and using [jToker](https://github.com/lynndylanhurley/j-toker) in concert with the back-end auth.

[Rspec Api Documentation](https://github.com/zipmark/rspec_api_documentation) for API acceptance tests and documentation.

## Features

##### User authentication
For user authentication, I wanted to utilize Devise due to it's ubiquity. However, I wanted to demonstrate utilizing single token authentication, which had me utilize the [`devise_token_auth`](https://github.com/lynndylanhurley/devise_token_auth) gem. In my previous project, I implemented [`simple_token_authentication`](https://github.com/gonzalo-bulnes/simple_token_authentication) but opted for the richer features of devise token auth. However, for the front-end, I manually integrated the Redux frontend with the compliment technology [`jToker`](https://github.com/lynndylanhurley/j-toker); that required more coordination in handling of authentication exchanges between Rails and Redux.

##### API Documentation
My career thus far has primarily been back-end and specifically, RESTful JSON API implementation and documentation for external clients. Remindux is a project for me to explore React/Redux and to demonstrate my affinity for documentation. I'm a fan of [`rspec_api_documentation`](https://github.com/zipmark/rspec_api_documentation), which allows me to write acceptance tests that auto generates documentation. Feel free to check out Remindux's API documentation [here](http://remindux.herokuapp.com/api/docs).

##### Single Page Experience
I've been working with the React library and Flux for my previous [projects](https://github.com/holyoke/Smash-Goals) but wanted to take the time to explore Redux. I strived for a single page experience due to the design from iOS's own reminder application, so elements like live editing and seamless transitions are present. However, I've not much experience with visual designing - I opted to utilize [`React-Bootstrap`](https://react-bootstrap.github.io/) for a more familiar and trustworthy aesthetic, tweaking the CSS properties instead.

#### Next Steps

Currently looking to implement...

- a Drag and Drop sort with lists, reminders, and comments. There are variety of npm packages to explore for this.

- Image/Screenshot upload with `carrierwave` and `minimagick`.

- Integration testing that incorporates a Rails 5 / Redux setup.

- HTML5 web notifications
