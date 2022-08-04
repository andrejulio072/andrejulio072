grep II
$ grep -R Arctic /home/ccuser/workspace/geography

/home/ccuser/workspace/geography/deserts.txt:Arctic Desert
/home/ccuser/workspace/geography/oceans.txt:Arctic Ocean
grep -R searches all files in a directory and outputs filenames and lines containing matched results. -R stands for “recursive”. Above, grep -R searched the /home/ccuser/workspace/geography directory for the string “Arctic” and outputted filenames and lines with matching results.

$ grep -Rl Arctic /home/ccuser/workspace/geography

/home/ccuser/workspace/geography/deserts.txt
/home/ccuser/workspace/geography/oceans.txt
grep -Rl searches all files in a directory and outputs only filenames with matched results (so no lines). l (a lowercase L, not a capital i) stands for “files with matches.” Here grep -Rl searched the /home/ccuser/workspace/geography directory for the string “Arctic” and outputs filenames with matched results.
