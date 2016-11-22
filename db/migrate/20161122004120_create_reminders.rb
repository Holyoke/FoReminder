class CreateReminders < ActiveRecord::Migration[5.0]
  def change
    create_table :reminders do |t|
      t.string :title
      t.string :body
      t.boolean :done
      t.datetime :remind_date

      t.timestamps
    end
  end
end
