class Overrides::SessionsController < DeviseTokenAuth::SessionsController
  include ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  
  skip_before_action :protect_from_forgery
end
