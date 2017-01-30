require 'rspec_api_documentation/dsl'
require 'acceptance_helper'
require 'rails_helper'
require 'byebug'

resource "Authorization" do
  header "Accept", "application/json"
  header "Content-Type", "application/json"

  # Authorization
  header "access-token", :access_token_header
  header "token-type", "Bearer"
  header "client", :client_header
  header "expiry", :expiry_header
  header "uid", :uid_header

  let!(:user) { FactoryGirl.create(:user) }

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

    example_request "Logging in via query params" do
      text = "This returns authorization headers for request validations"
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

  # sets up logging out test
  let(:auth_headers) { user.create_new_auth_token }
  let(:access_token_header) {  auth_headers["access-token"] }
  let(:client_header) {  auth_headers["client"] }
  let(:expiry_header) {  auth_headers["expiry"] }
  let(:uid_header) {  auth_headers["uid"] }

  delete "/auth/sign_out" do
    example_request "Logging out a user" do
      text = "Use this route to end the user's current session. This route will invalidate the user's authentication token. You must pass in uid, client, and access-token in the request headers."
      explanation text
      expect(status).to eq 200
    end
  end
end
