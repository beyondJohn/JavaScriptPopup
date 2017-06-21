//Copyright John P. Piesco 2017 beyondlogical.com
//In the spirit of open source development, feel free to use/edit/copy/paste/fork/clone this code without restriction 

//declare a variable which will monitor if the message box is present on the page or not
var messageActive = 0;
//declare object construcor
function messageBox(parentId, width, height, message, id, border, bgColor, margin, fontfamily, fontsize, padding) {
    this.parentId = parentId;
    this.width = width;
    this.height = height;
    this.message = message;
    this.id = id;
    this.border = border;
    this.bgColor = bgColor;
    this.margin = margin;
    this.fontfamily = fontfamily;
    this.fontsize = fontsize;
    this.padding = padding;
    this.addMessage = function () {
        if (messageActive == 0) {
            //get div which will be the parent of the messageBox
            var parent = document.getElementById(this.parentId);
            //create message box div and add it to the parent div
            var divMessageBox = document.createElement('div');
            divMessageBox.id = this.id;
            divMessageBox.style.width = this.width;
            divMessageBox.style.height = this.height;
            divMessageBox.style.border = this.border;
            divMessageBox.style.backgroundColor = this.bgColor;
            divMessageBox.style.margin = this.margin;
            divMessageBox.style.position = 'relative';
            parent.appendChild(divMessageBox);
            //get the newly created message box DOM element
            var messageBox = document.getElementById(this.id);
            //create the circle used to close the message box and add it to the message box
            var divCircle = document.createElement('div');
            divCircle.style.backgroundColor = '#000';
            divCircle.style.color = '#fff';
            divCircle.style.borderRadius = '25px';
            divCircle.style.height = '25px';
            divCircle.style.width = '25px';
            divCircle.style.right = '-12px';
            divCircle.style.top = '-12px';
            divCircle.style.position = 'absolute';
            divCircle.style.color = "#fff";
            divCircle.style.cursor = "pointer";
            divCircle.onclick = function () {
                //remove the newly created message box DOM element on click event
                var msg = document.getElementById(this.parentNode.id);
                msg.parentNode.removeChild(msg);
                //let app know message box is not present on page
                messageActive = 0;
            }
            messageBox.appendChild(divCircle);
            //add a div to hold just the text of "X" inside of the closure circle
            var divX = document.createElement('div');
            divX.style.position = "relative";
            divX.style.top = "3px";
            divX.innerHTML = "X";
            divCircle.appendChild(divX);
            var divText = document.createElement('div');
            divText.style.position = "relative";
            divText.style.margin = "0px auto";
            divText.style.fontFamily = this.fontfamily;
            divText.style.fontSize = this.fontsize + "em";
            divText.innerHTML = this.message;
            //if padding not declared, set padding using parent height to center text
            if (this.padding == undefined) {
                //dynamically set "thank you!" to appear in center vertical of parent div, works well with 1.5em
                var centerHeight = parseInt(this.height) * .5;
                divText.style.padding = (centerHeight - 15) + "px 0px 0px";
            }
            else {
                divText.style.padding = this.padding;
            }
            messageBox.appendChild(divText);
            //let app know message box is present on screen
            messageActive = 1;
        }
    }
}
