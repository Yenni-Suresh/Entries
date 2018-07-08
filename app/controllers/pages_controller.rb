class PagesController < ApplicationController
  def new
  end

  def create
    @page = Page.new(page_params)
    @page.save
    redirect_to :pages_index
  end

  def index
    @pages = Page.all
  end

  def show
    @page = Page.find(params[:id])
  end

  def destroy
    @page = Page.destroy(params[:id])
    redirect_to :pages_index
  end

  private

  def page_params
    params.require(:pages).permit(:title, :content, :tags)
  end
end
