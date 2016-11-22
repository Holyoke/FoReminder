require 'rails_helper'

RSpec.describe Reminder, type: :model do
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:remind_date) }
end
