require 'rspec_api_documentation/dsl'
require 'acceptance_helper'
require 'rails_helper'

resource "Comments" do
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

  post "/api/comments" do
    parameter :reminder_id, "ID for parent Reminder.", required: true
    parameter :body, "Body of text", scope: :comment, required: true
    parameter :active, "Boolean activity status", scope: :comment, required: true

    let(:body) { "New comment body" }
    let(:reminder_id) { user.reminders.first.id }
    let(:raw_post) { params.to_json }

    example "Creating a new comment" do
      explanation "Creates a new comment for a user's reminder. A Reminder `has many` comments`."
      do_request
      expect(status).to eq 201
    end
  end

  get "/api/comments" do
    parameter :reminder_id, "ID of parent Reminder", required: true
    let(:reminder_id) { user.reminders.first.id }

    example_request "Retrieving a list of comments based on their reminder" do
      explanation "Retrieves a reminder's comments"
      expect(status).to eq 200
    end
  end

  put "/api/comments/:id" do
    parameter :body, "Body of comment", :scope => :comment

    let(:id) { user.comments.last.id }
    let(:body) { "Updated body." }
    let(:active) { false }
    let(:raw_post) { params.to_json }

    example_request "Update a specified comment" do
      explanation "Updating a comment by id"
      expect(status).to eq 200
    end
  end

  delete "/api/comments/:id" do
    let(:id) { user.comments.last.id }
    example_request "Deleting a specified comment" do
      explanation "Deletes a Comment by id"
      expect(status).to eq 200
    end
  end
end
