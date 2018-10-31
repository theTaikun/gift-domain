var new_domain = window.location.hostname;
if (new_domain.substr(0,3)==="www"){
	new_domain=new_domain.sbstr(4);
}

var examples = document.getElementsByClassName('example-domain');
for (i = 0; i < examples.length; i++) {
	    examples[i].innerHTML=new_domain;
} 
