# create a new repository on the command line

```
echo "# quangdacamera.com" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin git@github.com:LoaLoa-Tech/quangdacamera.com.git
git push -u origin master
```             

# push an existing repository from the command line

```
git remote add origin git@github.com:LoaLoa-Tech/quangdacamera.com.git
git branch -M master
git push -u origin master
```

## Running the Project.

To run this project first run `npm install`. Note: If you generated this project via the Keystone cli step this has been done for you \\o/.

Once running the Keystone Admin UI is reachable via: `localhost:3000/admin`.
