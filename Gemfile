source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.0.0'
# Use postgresql as the database for Active Record
gem 'pg', '~> 0.18'
# Use Puma as the app server
gem 'puma', '~> 3.0', group: :production
gem 'webrick', group: :development

gem 'mailgun-ruby', '~> 1.1.0', require: 'mailgun'
# Use SCSS for stylesheets
gem 'bootstrap-sass', '~> 3.3.7'
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Use jquery as the JavaScript library
gem 'jquery-rails'
gem 'active_model_serializers', '~> 0.10.0'

#For imageuploading
gem 'carrierwave', '~> 0.10.0'
gem 'mini_magick', '~> 4.3'
gem 'fog'
gem 'fog-aws', '~> 0.11.0'

gem 'apitome'
gem 'database_cleaner'

gem 'figaro'

#auth
gem 'devise_token_auth'
gem 'omniauth'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'parallel_tests', group: [:development, :test]
  gem 'byebug', platform: :mri
  gem 'rspec-rails'
  gem 'factory_girl_rails'
  gem "letter_opener", "~> 1.4.1"
  gem "pry-rails"
  gem 'rspec_api_documentation'
end

group :test do
  gem 'faker'
  gem 'capybara'
  gem 'guard-rspec'
  gem 'launchy'
  gem 'shoulda-matchers'
  gem 'rails-controller-testing'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console'
  gem 'listen', '~> 3.0.5'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'annotate'

  #For fast and easy testing
  gem 'spring-commands-rspec'

  #For optimizing db queries
  gem 'bullet'
  gem 'lol_dba'

  #Common Debugging Gems
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'meta_request'
end

group :production do
  gem 'newrelic_rpm'
  gem 'rails_12factor' # error feedback
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
