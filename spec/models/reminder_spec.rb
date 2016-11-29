# == Schema Information
#
# Table name: reminders
#
#  id          :integer          not null, primary key
#  title       :string
#  body        :string
#  done        :boolean
#  remind_date :datetime
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'rails_helper'

RSpec.describe Reminder, type: :model do
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:remind_date) }

  it "should default done to false by default"
end
