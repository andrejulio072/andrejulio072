\git clone
Sally has created the remote repository, science-quizzes in the directory curriculum, which teachers on the school’s shared network have access to. In order to get your own replica of science-quizzes, you’ll need to clone it with:

git clone remote_location clone_name

In this command:
remote_location tells Git where to go to find the remote. This could be a web address, or a filepath, such as:
/Users/teachers/Documents/some-remote
clone_name is the name you give to the directory in which Git will clone the repository.
Instructions
1.
The Git remote Sally started is called:

science-quizzes
Enter the command to clone this remote. Name your clone:

my-quizzes
Notice the output:

cloning into 'my-quizzes'...
Git informs us that it’s copying everything from science-quizzes into the my-quizzes directory.

my-quizzes is your local copy of the science-quizzes Git project. If you commit changes to the project here, Sally will not know about them.
