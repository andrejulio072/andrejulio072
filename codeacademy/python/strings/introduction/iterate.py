def get_length(word):
  counter = 0
  for letter in word:
    counter += 1
  return counter
word="bla bla bla"
print(get_length(word))
