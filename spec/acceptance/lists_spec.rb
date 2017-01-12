require 'rspec_api_documentation/dsl'
require 'acceptance_helper'
require 'rails_helper'

resource "Lists" do
  header "Accept", "application/json"
  header "Content-Type", "application/json"

  # Authorization
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

  post "/api/lists" do
    parameter :title, "Title of list", scope: :list

    response_field :title, "list title", scope: :list

    let(:title) { "New list title" }
    let(:raw_post) { params.to_json }

    example "Creating a new list" do
      explanation "Creates a new list for user."
      do_request
      expect(status).to eq 201
    end
  end

  get "/api/lists" do
    example_request "Retrieving an index of lists" do
      explanation "Retrieves user's lists and their ids."
      expect(status).to eq 200
    end
  end

  get "api/lists/:id" do
    let(:id) { user.default_list.id }

    example_request "Retrieving a specified list" do
      explanation "Retrieves a list with reminders, by id"
      expect(status).to eq 200
    end
  end

  put "/api/lists/:id" do
    parameter :title, "Title of list", :scope => :list

    let(:id) { user.lists.last.id }
    let(:title) { "Updated title." }
    let(:raw_post) { params.to_json }

    example_request "Update a specified list" do
      explanation "Updating a list by id"
      expect(status).to eq 200
    end
  end

  delete "/api/lists/:id" do
    let(:id) { user.lists.last.id }
    example_request "Deleting a specified list" do
      explanation "Deletes a List by id"
      expect(status).to eq 200
    end
  end
end
