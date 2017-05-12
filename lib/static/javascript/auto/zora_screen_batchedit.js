//
// Function to show/hide the search and replace fields for batch edit
//

function EPJS_BatchEditActionSelect( selectPrefix, divPrefix )
{
        if (null != selectPrefix && null != divPrefix ) {
		var selectName =  selectPrefix+"_action";
		var selectObj = $(selectName);
		var divObj = $(divPrefix);
		if ( null != selectObj && null != divObj ) {
			var selectedIndex = selectObj.selectedIndex;
			var selectedVal = selectObj.options[selectedIndex].value;
            console.log("SelectedVal: ",selectedVal);
			if ( null != selectedVal && (selectedVal == "findreplace" || selectedVal == "findreplace_ignoreblanks")) {
				divObj.setStyle({visibility: 'visible'});
				divObj.setStyle({display: 'block'});
			} else {
				divObj.setStyle({visibility: 'hidden'});
				divObj.setStyle({display: 'none'});
			}
		}
        }
        return false;
}


