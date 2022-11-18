def fizzBuzz
  counter = 1
  while counter <= 20
    if counter % 15 == 0
      puts "FizzBuzz"
    elsif counter % 3 == 0
      puts "Fizz"
    elsif counter % 5 == 0
      puts "Buzz"
    else
      puts counter
    end
    counter += 1
  end
end

puts fizzBuzz
