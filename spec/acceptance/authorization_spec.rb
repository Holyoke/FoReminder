require 'rspec_api_documentation/dsl'
require 'acceptance_helper'
require 'rails_helper'
require 'byebug'

resource "Authorization" do
  header "Accept", "application/json"
  header "Content-Type", "application/json"

  let(:user) { FactoryGirl.create(:user) }

  post "/auth/sign_in" do
    parameter :email, 'User email', :required => true
    parameter :password, 'User password', required: true

    let(:email) { user.email }
    let(:password) { 'passw0rd' }

    let(:raw_post) { params.to_json }

    let(:result) do
      {"data"=>
        {
         "id"=> user.id,
         "email"=> user.email,
         "provider"=> user.provider,
         "uid"=> user.uid
       }
      }
    end

    example_request "Logging in through query params" do
      text = "This returns authorization headers, in order to validate requests."
      text += "\n POST with the parameters to receive a response for the validation headers."

      explanation text

      expect(status).to eq 200
      response = JSON.parse(response_body)
      expect(response_headers["access-token"]).to be_present
      expect(response_headers["uid"]).to eq(user.uid)
      expect(response["data"]['email']).to eq(result["data"]["email"])
      expect(response["data"]['id']).to eq(result["data"]["id"])
    end
  end
end
