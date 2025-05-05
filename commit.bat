@echo off

git init
git status
git add .

set /p comment=Entrez un commentaire:
git commit -m "%comment%"

git push origin master