class CreateLists < ActiveRecord::Migration[5.0]
  def change
    create_table :lists do |t|
      t.string :title
    end

    add_reference :lists, :user, foreign_key: true
    add_reference :reminders, :list, foreign_key: true
  end
end
