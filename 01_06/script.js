function count()
{
	var result=document.getElementById('result');
	var amount=document.getElementById('amount').value;
	var regular=document.getElementById('regular').checked;
	var price=0

	if(amount >=1 && amount<=40)
	{
		if(regular)
			price=amount*(3-0.30);
		else
			price=amount*3;
	}
	if(amount >=41)
	{
		if(regular)
			price=amount*(2-0.30);
		else
			price=amount*2;
	}
	result.innerHTML="Your adverts will cost: "+price+" PLN";
}