# == Schema Information
#
# Table name: lists
#
#  id      :integer          not null, primary key
#  title   :string
#  user_id :integer
#

require 'rails_helper'

RSpec.describe List, type: :model do
  it { should validate_presence_of :title }
  it { should belong_to :user }
  it { should have_many :reminders }
end
