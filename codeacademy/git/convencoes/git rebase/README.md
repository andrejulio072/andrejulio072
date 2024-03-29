Git Rebase Off-Platform Project
In the following project, you will practice the commands associated with Git Rebase.

As a refresher, the Git rebase functionality helps branches keep up to date with the most recent changes in the main branch. We get a more linear history in the repository after rebasing. In this project, you will help two friends with their project of transcribing a story onto a GitHub repository.

Let’s start with a bit of back story; Viraj and Noah collaborate to transcribe the children’s story of “The Little Black Fish” and store the text in a Github repository. They have broken the story into two parts, with Viraj working on part 1 while Noah types part 2. They track their progress in a GitHub repository

They decided to work on separate branches to avoid conflicts in case there is any overlap. Viraj works in a branch named part_1, and Noah tracks his contributions in part_2. The main branch follows the most recent approved and merged work.


Screenshot: in the terminal, Git shows the most recent history of commits on the main branch.

Viraj and Noah started working on Monday and made some progress on their parts. They committed and pushed changes to their feature branches, part_1 and part_2, respectively.

Noah ends the day by creating a pull request and merging his changes to the main branch of the repository.


Similar to the commit history in the last screenshot, except the history now shows that changes from part_1 were merged into main.

Note that both main and part_2_Monday track the same progress and part_1_Monday tracks its isolated progress while staying behind from the most recent changes. So let’s help Viraj keep his branch up to date with the most recent changes using the git rebase command. Please note that Viraj could alternatively pull origin main and merge the changes into his branch if he didn’t care about maintaining all the interim commits. Nevertheless, we will proceed with rebasing to maintain the commits.

Let’s see if you can help them rebase the repository! Fork the repository to your Github account and clone it onto your local computer. Next, open a terminal and change your current directory to the directory of the local repository and visually observe the state of the branches:

> git checkout part_1_Monday
> git pull
> git checkout part_2_Monday
> git pull
You can use the following Git command to see a fuller picture of commits and progresses made in the branches:

> git log --graph --decorate --oneline --all
Now, check out Viraj’s branch:

> git checkout part_1_Monday
And rebase Viraj’s branch with main:

> git rebase main
Notice that the The Little Black Fish - Part 2 file in Viraj’s branch is updated with Noah’s changes.

Observe the new state of the branches, visually:

> git log --graph --decorate --oneline --all
Walkthrough
If you need any more guidance to complete this project, we have a project walkthrough video for you:


Conclusion
In this tutorial, you applied git rebase in a repository. Git rebase is an important feature for collaborating effectively in a development team. Using git rebase, you can keep your branches up to date with the most recent changes while keeping your in-progress changes isolated!
