# Angular
#

# Prerequisites
Ensure node.js and npm is already install and available in current directory.

confirm it using: 

For Node.js : node --version

For npm : npm --version

#

# Initial Instructions
1> Download and install Angular with below command:
    
    npm install -g @angular/cli

2> Now, go to a folder in File Explorer where you want to create Angular project and press Shift + mouseRightClick, then click on "Open Powershell window here"

3> In powershell window, run below commands in sequence:

    ng new to_do_list

    cd to_do_list

    ng serve

4> Open browser and go to: 

5> If everything works fine and you see the project running on your browser than you can go to to_do_list folder to study further about Angular at

https://github.com/SidP919/Web-Development/tree/master/Angular/to_do_list#readme


Note: In case you get an error like below at step 3:

ng: File C:\Users\admin\AppData\Roaming\npm\ng.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.


Then, run below commands first before executing step 3 again:

set-ExecutionPolicy RemoteSigned -Scope CurrentUser

Get-ExecutionPolicy

Get-ExecutionPolicy -list


OUTPUT should be below:

        Scope ExecutionPolicy
        ----- ---------------

MachinePolicy       Undefined

   UserPolicy       Undefined

      Process       Undefined

  CurrentUser    RemoteSigned           //This line means now ng should work and we can go to step 3.

 LocalMachine       Undefined


#