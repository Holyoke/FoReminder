Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :reminders, only: [:index, :show, :create, :destroy, :update]
  end

  root "static_pages#root"
end
