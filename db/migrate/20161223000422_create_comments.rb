class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.string :body
    end

    add_reference :comments, :reminder, foreign_key: true
  end
end
