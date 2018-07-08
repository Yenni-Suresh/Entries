Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get "pages/index"

  resources :pages

  root "pages#index"
end
