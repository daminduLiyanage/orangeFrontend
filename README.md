Setting up the backend

The backend will run on any UNIX based machine. Need Apache, MariaDB and PHP 7+.

Installation g1uide if using the vagrant machine:

But for the installation of setting up everything, the vagrant homestead can be used. 

Install vagrant.
https://www.vagrantup.com/downloads.html

Download all files from the below link and move to a new folder **. 
https://drive.google.com/drive/folders/1CcjqNSC_Uz43oBL2XxBPkc1uDNAAvjIO  

Go to a new folder with the terminal. 
Run the following commands
$ vagrant up
$ vagrant ssh
$ cd ../../vagrant/project2 && symfony server:start



To check if everything is working access the backend with the URL http://localhost:8001/employee with the browser. If everything works, you should be looking at the backend API showing the user data presented as JSON.

** Best practice for step 2 is to create the new folder in the home directory of the user and rename it as ‘Homestead’.



Setting up the front end



Since the front end is ReactJS it does not require a vagrant machine. But additional libraries are needed.

git clone the following repository
$ git clone git@github.com:daminduLiyanage/orangeFrontend.git

Run the following command. ***
$ cd orangeFrontend/
$ yarn && yarn start



It should redirect to the default page of the app (login screen). Please make sure the backend is working to avoid any errors.  Username: jon password: 123

*** if you prefer npm use npm install && npm start as the second command.


Running unit tests

Open the backend folder with the terminal. 
PHPUnit testing works with the following command
$ php bin/phpunit tests/

Hence this command would run all tests and show results. 
