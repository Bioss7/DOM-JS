let frm = document.forms[0];

frm.user.onfocus = function(event) {
    frm.user.classList.remove('error');
};

frm.user.onblur = function(event) {
    if(frm.user.value.includes('#'))
        frm.user.classList.add('error');
    else frm.user.classList.remove('error');    
};