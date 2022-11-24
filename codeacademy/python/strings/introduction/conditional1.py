def letter_check(word, letter):
  for character in word:
    if character == letter:
      return True
  return False

word="this is a test"
letter="e"
print(word, letter)
