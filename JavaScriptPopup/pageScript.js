//Copyright John P. Piesco 2017 beyondlogical.com
//In the spirit of open source development, feel free to use/edit/copy/paste/fork/clone this code without restriction

function clickMe() {
    //instantiate messageBox object using "new" operator
    var myMessageBox = new messageBox("divBg",//parent div id
        "250px",//width
        "250px",//height
        "<span style=\"color:red;\">I Love JavaScript!</span>",//message text, can be aditional html as in this example
        "divTy",//message box div id
        "solid 1px #000",//border
        "#fff",//background color
        "25px auto 0px",//margin
        "serif, Tahoma, \"Times New Roman\"",//fontfamily
        "1.5"//fontsize
        //,"120px 0px 0px"//add optional padding property for text location
        );
    //invoke addMessage method withtin messageBox Object which will add the message box to the specified parent div 
    myMessageBox.addMessage();
}


