var info= {
	Title:'Ibtesam',
	Balance:1900,
	currency:'pkr',
	IBAN:"PKN123456",
	};
function displayinfo()
{
	document.getElementById("title").innerText=info.Title;
	document.getElementById("balance").innerText=info.Balance;
	document.getElementById("currency").innerText=info.currency;
	document.getElementById("IBAN").innerText=info.IBAN;
}

function deposit()
{
	document.getElementById("deposit").innerText=info.Balance;
}
function withdraw()
{
	document.getElementById("withdraw").innerText=info.Balance;
}
displayinfo();
deposit();
withdraw();		