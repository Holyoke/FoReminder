require 'rspec_api_documentation/dsl'
require 'acceptance_helper'
require 'rails_helper'
require 'byebug'

resource "Lists" do
  header "Accept", "application/json"
  header "Content-Type", "application/json"
  header "access-token", :access_token_header
  header "token-type", "Bearer"
  header "client", :client_header
  header "expiry", :expiry_header
  header "uid", :uid_header

  let!(:user) { FactoryGirl.create(:user_with_lists_reminders_comments) }
  let(:auth_headers) { user.create_new_auth_token }
  let(:access_token_header) {  auth_headers["access-token"] }
  let(:client_header) {  auth_headers["client"] }
  let(:expiry_header) {  auth_headers["expiry"] }
  let(:uid_header) {  auth_headers["uid"] }

  get "/api/lists" do
    example_request "Getting an index of lists" do
      expect(status).to eq 200
    end
  end

end
