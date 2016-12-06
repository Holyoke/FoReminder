class Api::RemindersController < ApplicationController
  before_action :set_reminder, only: [:show, :update, :destroy]

  def index
    @reminders = Reminder.all
    render json: @reminders
  end

  def show
    render json: @reminder
  end

  def create
    @reminder = Reminder.new(reminder_params)

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
      render json: @reminder.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @reminder.destroy
  end

  private
    def set_reminder
      @reminder = reminder.find(params[:id])
    end

    def reminder_params
      params.require(:reminder).permit(:title, :body, :remind_date, :done)
    end
end
