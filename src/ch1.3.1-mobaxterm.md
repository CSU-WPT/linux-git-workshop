### How to Submit Assignments using MobaXterm on Windows

<iframe width="560" height="315" src="https://www.youtube.com/embed/HoHwSs5IW5k?si=MuFFw6-7c2C-gQKq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Guide
### Downloading

Go to https://mobaxterm.mobatek.net/ 

Click “Get MobaXterm Now!” 

Click “Download now” on the Home Edition 

Click the green “MobaXterm Home Edition vxx.x (Installer edition)” 

Move the .zip file to an empty folder, right click it, click “Extract All...”, and click “Extract”  

Run the .msi file 

Click “Next” 

Accept the terms and click “Next” 

Click “Next” 

Click “Install” and wait for it to install 

Click “Finish” 

### Copying the assignment over

Run the .exe file 

Click on “Session” in the top left 

Click “SSH” in the new window 

In “Remote host”, enter “grail.eecs.csuohio.edu” 

Enable “Specify username” and input your school Linux username. Your default user name should be the first 2 letters of your first name, followed by the first 6 letters of your last name. You might have a different user name depending on the length and popularity of your names. You should have gotten an email with your user name and password for your account. If you did not receive one, ask your instructor for assistance 

Click “OK” 

In “Password”, enter your student ID followed by the first letter of your last name, capitalized (ex. 1234567A) 

Decide whether to save your password or not 

You are now connected to the grail server. From here, it is recommended that you click the folder button “Create new directory” to create a new folder for you class (for organization) 

To copy a file from your home computer to the server, simply drag it into the list on the left and it will automatically copy over 

### Turning the assignment in

Once the file has been copied over, navigate to the directory that you put it in 

To navigate, type “cd directory_name” to go into a directory, or “cd ..” to go out of a directory 

When you are in the directory with the file you wish to turn in, type the turnin command that your instructor has told you to use. If you are unsure of this command, ask your instructor 

You should see a line in the terminal saying “Your files have been submitted to ‘class, homework’ for grading” indicating a successful turnin 
