\git merge
Mesmo que os novos commits de Sally tenham sido buscados em sua cópia local do projeto Git, esses commits estão no origin/masterbranch. Sua ramificação local master ainda não foi atualizada, portanto, você não pode visualizar ou fazer alterações em nenhum trabalho que ela adicionou.

Na Lição III, Git Branching , aprendemos como mesclar branches. Agora vamos usar o git mergecomando para integrar origin/masterem sua masterramificação local. O comando:

git merge origin/master
vai fazer isso por nós.
