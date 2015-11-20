require 'bundler'
Bundler.require()


get '/' do

  @array1 = [1, 2, 3, 4, 5]
  @array2 = [6, 7, 8, 9, 10]
  @array3 = [11, 12, 13, 14, 15]
  puts @array1

  erb :index
end
