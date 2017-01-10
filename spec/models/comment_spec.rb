# == Schema Information
#
# Table name: comments
#
#  id          :integer          not null, primary key
#  body        :string
#  reminder_id :integer
#  active      :boolean          default(FALSE), not null
#

require 'rails_helper'

RSpec.describe Comment, type: :model do
  it { should validate_presence_of(:body) }
  it { should belong_to(:reminder) }
end
