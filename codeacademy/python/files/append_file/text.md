Appending to a File
So maybe completely deleting and overwriting existing files is something that bothers you. Isn’t there a way to just add a line to a file without completely deleting it? Of course there is! Instead of opening the file using the argument 'w' for write-mode, we open it with 'a' for append-mode. If we have a generated file with the following contents:

generated_file.txt

This was a popular file...
Then we can add another line to that file with the following code:

script.py

with open('generated_file.txt', 'a') as gen_file:
  gen_file.write("... and it still is")
In the code above we open a file object in the temporary variable gen_file. This variable points to the file generated_file.txt and, since it’s open in append-mode, adds the line ... and it still is as a new line to the file. If you were to open the file after running the script it would look like this:

generated_file.txt

This was a popular file...
... and it still is
Notice that opening the file in append-mode, with 'a' as an argument to open(), means that using the file object’s .write() method appends whatever is passed to the end of the file in a new line. If we were to run script.py again, this would be what generated_file.txt looks like:

generated_file.txt

This was a popular file...
... and it still is
... and it still is
Notice that we’ve appended "... and it still is" to the file a second time! This is because in script.py we opened generated_file.txt in append-mode.

Instructions
1.
We’ve got a file, cool_dogs.txt, filled with all the cool dogs we know. Somehow while compiling this list we forgot about one very cool dog. Let’s fix that problem by adding him to our cool_dogs.txt.

Open up our file cool_dogs.txt in append-mode and assign it to the file object cool_dogs_file.
