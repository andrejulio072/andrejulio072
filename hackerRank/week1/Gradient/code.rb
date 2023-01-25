#!/bin/ruby

require 'json'
require 'stringio'

#
# Complete the 'gradingStudents' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts INTEGER_ARRAY grades as parameter.
#

def gradingStudents(grades)
    # Write your code here
    new_grades = []
    grades.each do |grade|
        if grade < 38
            new_grades << grade
        else
            new_grades << get_next_mult(grade)
        end 
    end
    new_grades
end

def get_next_mult(grade)
    count = 0
    new_num = grade
    loop do 
    # some code here
        break if grade % 5 == 0
        grade += 1
        count += 1
    end 
    
    count >= 3 ? new_num : grade
end

fptr = File.open(ENV['OUTPUT_PATH'], 'w')

grades_count = gets.strip.to_i

grades = Array.new(grades_count)

grades_count.times do |i|
    grades_item = gets.strip.to_i
    grades[i] = grades_item
end

result = gradingStudents grades

fptr.write result.join "\n"
fptr.write "\n"

fptr.close()
