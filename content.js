

chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
    
    


    if ( (msg.cmd == 'calcul') & (msg.reg != "") ) {
        

      var numOcc=0;
      var excludedTags = ["style","script","canvas","head","iframe","title"];
      var replaceTextInNode = function(parentNode,regInput){
          for(var i = parentNode.childNodes.length-1; i >= 0; i--){
              var node = parentNode.childNodes[i];
  
              if(node.nodeType == Element.TEXT_NODE){
                  
                  input = regInput;
                  
                  count = node.textContent.match(new RegExp(input,'igm'));
                  count = (count) ? count.length : 0;

                   

                  numOcc = numOcc + count;
  
              } else if(node.nodeType == Element.ELEMENT_NODE){
                  
                
                  if( excludedTags.indexOf(node.nodeName.toLowerCase()) ==-1){
                      replaceTextInNode(node,regInput);
                  }

              }
          }
      };

      replaceTextInNode(document.body,msg.reg);
      //alert(numOcc);
      sendResponse({
        response: numOcc
        });

      


    }
  });