### How to Submit Assignments using PuTTY on Windows

<iframe width="560" height="315" src="https://www.youtube.com/embed/sVBYU9I_WA8?si=caW76f2D24HgEaAO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>o

## Guide
### Downloading

Go to https://www.putty.org/ 

Click “Download PuTTY” 

In the “Package files” section, download the .msi file next to “64-bit x86” 

Wait for the .exe to download, then run it 

Click “Next” 

Click “Next” 

Make sure “Put install directory on the PATH for command prompts” is selected, then click “Install” 

Click “Allow” if it asks to make changes on your device 

Click “Finish” 

Go to where it was installed and run putty.exe (or click the desktop icon if you chose that option) AND run pscsp.exe

### Copying the assignment over

Before turning in, you must copy your file to the remote server 

To do this, click on the Windows search bar and find “Command Prompt”. Open it 

Make sure the file you wish to transfer over is on your desktop 

Type “pscp “C:\Users\user\Desktop\file.extension” username@grail.eecs.csuohio.edu:” 

In the above command, “user” should be your Windows user file name, “file.extension” should be the file you wish to turn in, and “username” should be your school Linux username (first 2 letters of your first name, followed by the first 6 letters of your last name is the usual student user name) 

You might have a different user name depending on the length and popularity of your names. You should have gotten an email with your user name and password for your account. If you did not receive one, ask your instructor for assistance 

For your password, type your student ID followed by the first letter of your last name, capitalized (ex. 1234567A), then press enter. You will not see your password as you type it – this is intended 

The file should be successfully transferred over. Now go back to the putty.exe program that opened 

### Turning the assignment in

In “Host Name (or IP address)”, enter “grail.eecs.csuohio.edu” and click “Open” 

Click “Accept” 

Type your user name 

Type your password 

You should now be connected to grail. Type "ls” to check if your file was properly copied over 

Type the turnin command that your instructor has told you to use. If you are unsure of this command, ask your instructor 

You should see a line in the terminal saying “Your files have been submitted to ‘class, homework’ for grading” indicating a successful turnin 
