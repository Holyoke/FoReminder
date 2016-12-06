Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :reminders, only: [:index, :show, :create, :destroy, :update]
  end
end
