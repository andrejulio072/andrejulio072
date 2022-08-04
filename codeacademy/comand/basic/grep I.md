grep I
$ grep America continents.txt
grep stands for “global regular expression print.” It searches files for lines that match a pattern and then returns the results. It is also case sensitive. Above, grep searched for anything that matched “America” in continents.txt.

$ grep -i America continents.txt
grep -i enables the command to be case insensitive. Here, grep searched for capital or lowercase strings that match “America” in continents.txt. Note that we don’t use quotes in our command.

The above commands are a great way to get started with grep. If you are familiar with regular expressions, you can also use regular expressions to search for patterns in files.
