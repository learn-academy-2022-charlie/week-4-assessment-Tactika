# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# -------------------------- Question 1 -------------------------- #
# 1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7    # Expected output: '7 is odd'
num2 = 42   # Expected output: '42 is even'
num3 = 221  # Expected output: '221 is odd'

def is_odd number
    if number % 2 != 0
        "#{number} is odd"
    else
        "#{number} is even"
    end
end

# Test Cases 
p is_odd(num1)  # Output == '7 is odd'
p is_odd(num2)  # Output == '42 is even'
p is_odd(num3)  # Output == '221 is odd'

p ' --------- Refactor --------- '

# Refactor
def is_odd(num) = num % 2 == 0 ? "#{num} is odd" : "#{num} is even"

# Test Cases 
p is_odd(num1)  # Output == '7 is odd'
p is_odd(num2)  # Output == '42 is even'
p is_odd(num3)  # Output == '221 is odd'

# -------------------------- Question 2 -------------------------- #
#2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete


album1 = 'Rubber Soul'  # Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'   # Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'   # Expected output: 'bby Rd'

# -------------------------- Question 3 -------------------------- #
# 3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'  # Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'    # Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'  # Expected output: 'Rotator is a palindrome'
