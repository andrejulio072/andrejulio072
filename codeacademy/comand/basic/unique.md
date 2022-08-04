uniq
$ uniq deserts.txt
uniq stands for “unique.” It filters out adjacent, duplicate lines in a file. Here uniq deserts.txt filters out duplicates of "Sahara Desert", because its duplicate directly follows the previous instance. The “Kalahari Desert” duplicates are not adjacent, and thus remain.

$ sort deserts.txt | uniq
A more effective way to use uniq is to call sort to alphabetize a file, and “pipe” the standard output to uniq. By piping sort deserts.txt to uniq, all duplicate lines are alphabetized (and thereby made adjacent) and filtered out.

sort deserts.txt | uniq > uniq-deserts.txt
Here we simply send filtered contents to uniq-deserts.txt, which you can view with the cat command.
