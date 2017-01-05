class Api::RemindersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_reminder, only: [:show, :update, :destroy]

  def index
    @reminders = current_user.reminders
    render json: @reminders
  end

  def show
    render json: @reminder
  end

  def create
    @reminder = current_user.reminders.new(reminder_params)

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
    def set_reminder
      @reminder = current_user.reminders.find(params[:id])
    end

    def reminder_params
      params.require(:reminder).permit(:title, :body, :remind_date, :done)
    end
end
