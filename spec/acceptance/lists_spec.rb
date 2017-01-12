require 'rspec_api_documentation/dsl'
require 'acceptance_helper'
require 'rails_helper'

resource "Lists" do
  get "/api/lists" do
    example_request "Getting a list of lists unauthorized" do
      expect(status).to eq 401
    end
  end
end
