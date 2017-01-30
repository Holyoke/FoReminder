require 'rspec_api_documentation/dsl'
require 'acceptance_helper'
require 'rails_helper'

resource "Reminders" do
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

  post "/api/reminders" do
    parameter :title, "Title of reminder", scope: :reminder, required: true
    parameter :remind_date, "Remind date for reminder.", scope: :reminder
    parameter :body, "Description body for reminder.", scope: :reminder
    parameter :list_id, "List assignment ID for reminder. If no list_id provided, then the user's Default list is used.", scope: :reminder
    response_field :title, "Title for reminder", scope: :reminder

    let(:title) { "New reminder title" }
    let(:raw_post) { params.to_json }

    example "Creating a new reminder" do
      explanation "Creates a new reminder for user."
      do_request
      expect(status).to eq 201
    end
  end

  get "/api/reminders" do
    example_request "Retrieving the default list of reminders for user." do
      expect(status).to eq 200
    end

    parameter :list_id, "id of List to fetch"
    example "Retrieving a specified list of reminders for user." do
      do_request(:list_id => user.lists.last.id)
      expect(status).to eq 200
    end
  end

  get "api/reminders/:id" do
    let(:id) { user.reminders.sample.id }

    example_request "Retrieving a specified reminder" do
      explanation "Retrieves a reminder by id"
      expect(status).to eq 200
    end
  end

  put "/api/reminders/:id" do
    parameter :title, "Title of reminder", :scope => :reminder

    let(:id) { user.reminders.last.id }
    let(:title) { "Updated title." }
    let(:body) { "Updated body." }
    let(:done) { true }
    let(:raw_post) { params.to_json }

    example_request "Update a specified reminder" do
      explanation "Updating a reminder by id"
      expect(status).to eq 200
    end
  end

  delete "/api/reminders/:id" do
    let(:id) { user.reminders.last.id }
    example_request "Deleting a specified reminder" do
      explanation "Deletes a Reminder by id"
      expect(status).to eq 200
    end
  end
end
