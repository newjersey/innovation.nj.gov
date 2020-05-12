function getRadioVal(form, name) {
  var val;
  var radios = form.elements[name];
  
  for (var i=0, len=radios.length; i<len; i++) {
      if ( radios[i].checked ) {
          val = radios[i].value;
          break;
      }
  }
  return val;
}



var answer_correct = document.querySelectorAll('.answer-correct');
  var answer_wrong = document.querySelectorAll('.answer-wrong');
  var answer_partial = document.querySelectorAll('.answer-partial');
	var questions = document.querySelectorAll('.questions-form');
	var submit_index = document.querySelectorAll('.getVal');
	var buttonsCount = submit_index.length;
	var index = 0;
	var items=document.getElementsByName('questions-all-correct');
	var selectedItems=0;
	var buttons = document.getElementsByName("getVal");
	var buttonsCount = buttons.length;
	
	for (var i = 0; i <= buttonsCount; i += 1) {
	  buttons[i].onclick = function() {
	    index = parseInt(this.id)-1;
	
	  if(getRadioVal(this.form, 'questions') == "correct")
	  {
      answer_wrong[index].className="answer-wrong";
      answer_wrong[index].className="answer-wrong hide";
      answer_correct[index].className="answer_correct";
      answer_correct[index].className="answer_correct show";

	  //answer_wrong[index].classList.replace('show','hide');
	  //answer_correct[index].classList.replace('hide','show');
	
	  }
	
	  else{
      answer_correct[index].className="answer_correct";
      answer_correct[index].className="answer_correct hide";
      answer_wrong[index].className="answer_wrong";
      answer_wrong[index].className="answer_correct show";
	 // answer_correct[index].classList.replace('show','hide');
	 // answer_wrong[index].classList.replace('hide','show');
	
	  }
	  };
	}
function printChecked(id, req_corr){
 
  var flag = 0;
  var index = id-1;
  var selectedItems=0;
  var total_items = 0;
  var items=document.getElementsByName('questions-all-correct');
  var items_id = id;
  id = parseInt(id);


  for(var i=0; i<items.length; i++){
  
    if(items[i].id > id)
    {

    break;
    }
    
    else if(items[i].id < id)
    {
      continue;
     /*  total_items=0;
      if(items[i].type=='checkbox' && items[i].checked==true)
      selectedItems = 1;
      else if(items[i].type=='checkbox' && items[i].checked==false)
      {
      selectedItems = 0;
      total_items = 0;
      items_id = items[i].id;
      }*/
    }
    else if(id==items[i].id)
    {
      total_items+=1;
    if(items[i].type=='checkbox' && items[i].checked==true)
    {
      if (items[i].value=="correct")
      {
        selectedItems+=1;
      }
      else
      flag = 1;
    }
    }
    
  }
 
  if((selectedItems == req_corr) && flag == 0){
   
    answer_wrong[index].className="hide";
    answer_correct[index].className="show";
    answer_partial[index].className="hide";
    
    }
    else if((selectedItems < req_corr) && flag == 0){
   
      answer_wrong[index].className="hide";
      answer_partial[index].className="show";
      answer_correct[index].className="hide";
      
      }
    else {
      answer_wrong[index].className="show";
      answer_correct[index].className="hide";
      answer_partial[index].className="hide";
    }


  
}		


// disable submission of all forms on this page
for (var i=0, len=document.forms.length; i<len; i++) {
  document.forms[i].onsubmit = function() { return false; };
}

