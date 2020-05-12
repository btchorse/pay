(function(){
	const payto = location.hash.substr(1);
	if (!payto === true) {
		alert('No payment link found!');
		return;
	}
	const url = new URL(payto);
	const protocol = url.protocol.slice(0, -1);
	const params = url.searchParams;

	switch(protocol) {
		case 'bitcoin':
			var name = 'bitcoin';
			var currency = '₿';
			var address = url.pathname;
			var amount = parseFloat(params.get('amount'));
			var label = decodeURI(params.get('label'));
			var message = decodeURI(params.get('message'));
			break;
		case 'litecoin':
			var name = 'litecoin';
			var currency = 'Ł';
			var address = url.pathname;
			var amount = parseFloat(params.get('amount'));
			var label = decodeURI(params.get('label'));
			var message = decodeURI(params.get('message'));
			break;
		case 'ethereum':
			var name = 'ethereum';
			var currency = 'Ξ';
			var address = url.pathname;
			var amount = parseFloat(params.get('value'));
			var label = '';
			var message = decodeURI(params.get('data'));
			break;
		case 'payto':
			var path = url.pathname.substr(2).split('/');
			var name = path[0].toUpperCase();
			var address = path[1];
			var pay = decodeURI(params.get('amount')).split(':');
			var currency = pay[0];
			var amount = parseFloat(pay[1]);
			var label = decodeURI(params.get('label'));
			var message = decodeURI(params.get('message'));
			break;
		default:
			var name = '';
			var currency = '';
			var address = '';
			var amount = 0;
			var label = '';
			var message = '';
			alert('No payment instruction found!');
			break;
	}

	let qr = new QRious({
		element: document.getElementById('qr'),
		size: 200,
		backgroundAlpha: 0,
		value: payto
	});

	let qrimage = qr.toDataURL('image/jpeg');
	let meta1 = document.createElement('meta');
	meta1.setAttribute('property', 'og:image');;
	meta1.setAttribute('content', qrimage);
	document.getElementsByTagName('head')[0].appendChild(meta1);
	let meta2 = document.createElement('meta');
	meta2.setAttribute('property', 'twitter:image');
	meta2.setAttribute('content', qrimage);
	document.getElementsByTagName('head')[0].appendChild(meta2);

	document.getElementById('paylink').href = payto;
	document.getElementById('paytype').innerHTML = name + ' payment';

	if (amount && currency) {
		document.getElementById('inputAmount').value = amount;
		var amountTxt = currency + ' ' + amount.toLocaleString(undefined, { minimumFractionDigits: 2 });
		document.getElementById('amount').innerHTML = amountTxt;
	} else if (amount) {
		document.getElementById('inputAmount').value = amount;
		var amountTxt = amount.toLocaleString(undefined, { minimumFractionDigits: 2 });
		document.getElementById('amount').innerHTML = amountTxt;
	}

	if (!address === false)
		document.getElementById('address').innerHTML = address.match(/.{1,4}/g).join(' ');
		document.getElementById('inputAddress').value = address;

	let copyAddress = document.getElementById('address');
	copyAddress.addEventListener('click', function () {
		let addressField = document.getElementById('inputAddress');
		addressField.select();
		document.execCommand('copy');
	}, false);
	let copyAmount = document.getElementById('amount');
	copyAmount.addEventListener('click', function () {
		let amountField = document.getElementById('inputAmount');
		amountField.select();
		document.execCommand('copy');
	}, false);
})();
