class Api::ListsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_list, only: [:show, :update, :destroy]

  def index
    @lists = current_user.lists
    render json: @lists
  end

  def show
    render json: @list, include: :reminders
  end

  def create
    @list = current_user.lists.new(list_params)

    if @list.save
      render json: @list, status: :created
    else
      render json: @list.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    if @list.update(list_params)
      render json: @list
    else
      render json: @list.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @list.destroy
    render json: @list
  end

  private
    def set_list
      @list = current_user.lists.includes(:reminders).find(params[:id])
    end

    def list_params
      params.require(:list).permit(:title)
    end
end