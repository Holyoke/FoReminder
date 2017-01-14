class Api::RemindersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_list, only: [:index, :create]
  before_action :set_reminder, only: [:show, :update, :destroy]

  def index
    @reminders = @list.reminders
    render json: @reminders
  end

  def show
    render json: @reminder
  end

  def create
    @reminder = @list.reminders.new(reminder_params)

    if @reminder.save
      render json: @reminder, status: :created
    else
      render json: @reminder.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    if @reminder.update(reminder_params)
      render json: @reminder
    else
      render json: @reminder.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @reminder.destroy
    render json: @reminder
  end

  private
    def set_list
      if params[:list_id] == 'default' || params[:list_id].nil?
        @list = current_user.default_list
      else
        @list = current_user.lists.find(params[:list_id])
      end
    end

    def set_reminder
      @reminder = current_user.reminders.find(params[:id])
    end

    def reminder_params
      params.require(:reminder).permit(:title, :body, :remind_date, :done, :list_id)
    end
end
