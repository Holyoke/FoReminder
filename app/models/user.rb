# frozen_string_literal: true

class User < ActiveRecord::Base 
  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable
  include DeviseTokenAuth::Concerns::User

  has_many :lists, dependent: :destroy
  has_many :reminders, through: :lists
  has_many :comments, through: :reminders

  after_initialize :set_default_list

  def default_list
    self.lists.create(title: "Reminders") if self.lists.empty?
    self.lists.first
  end

  private
  def set_default_list
    self.lists.build(title: "Reminders") if self.new_record?
  end
end
