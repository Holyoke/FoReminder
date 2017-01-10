class AddsActiveToComments < ActiveRecord::Migration[5.0]
  def change
    add_column :comments, :active, :boolean, null: false, default: false
  end
end
