\git remote -v
Nice work! We have a clone of Sally’s remote on our computer. One thing that Git does behind the scenes when you clone science-quizzes is give the remote address the name origin, so that you can refer to it more conveniently. In this case, Sally’s remote is origin.

You can see a list of a Git project’s remotes with the command:

git remote -v
Instructions
1.
Using the file navigator, examine the contents of the cloned Git project. There are a few quiz files here, which we will be working with during this lesson.

Open a file of your choice in the code editor.

Checkpoint 2 Passed
2.
Change directories into the my-quizzes directory, enter this command on the terminal:

cd my-quizzes
To learn more about cd, take a look at our command line course.

Checkpoint 3 Passed
3.
Enter git remote -v to list the remotes.

Notice the output:

origin    /home/ccuser/workspace/curriculum/science-quizzes (fetch)
origin    /home/ccuser/workspace/curriculum/science-quizzes (push)
Git lists the name of the remote, origin, as well as its location.
Git automatically names this remote origin, because it refers to the remote repository of origin. However, it is possible to safely change its name.
The remote is listed twice: once for (fetch) and once for (push). We’ll learn about these later in the lesson.
