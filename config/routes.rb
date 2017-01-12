Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :reminders, only: [:index, :show, :create, :destroy, :update]
    resources :lists, only: [:index, :show, :create, :destroy, :update]
    resources :comments, only: [:index, :create, :destroy, :update]
  end
end
