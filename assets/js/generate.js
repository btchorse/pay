var urlParams = new URLSearchParams(document.location.search.substring(1));
var address = document.location.hash.substring(1); // Payment address - parsed after hash sign #
var pay = urlParams.get('pay'); // Type of digital currency; short value (default: btc)
var amount = urlParams.get('amount'); // Amount to pay in crypto or fiat
var message = urlParams.get('message'); // Payment message
var label = urlParams.get('label'); // Payment label
var extra = urlParams.get('extra'); // Payment extra
var gas = urlParams.get('gas'); // Ethereum suggested gas
var data = urlParams.get('data'); // Ethereum bytecode
//var fiat = urlParams.get('fiat'); // Calculate value from FIAT currency

var name = null;
var symbol = null;
var link = null;

switch(pay) {
	case 'ltc':
		name = 'litecoin'; symbol = 'Ł';
		link = jsonToQueryString('litecoin',address,{
			'amount': amount,
			'message': message,
			'label': label,
			'extra': extra
		});
		break;
	case 'eth':
		name = 'ethereum'; symbol = 'Ξ';
		link = jsonToQueryString('ethereum',address,{
			'value': amount,
			'gas': gas,
			'data': data
		});
		break;
	default: // btc
		name = 'bitcoin'; symbol = '₿';
		link = jsonToQueryString('bitcoin',address,{
			'amount': amount,
			'message': message,
			'label': label,
			'extra': extra
		});
		break;
}

function jsonToQueryString(protocol,address,json) {
	Object.keys(json).forEach((key) => (json[key] == null) && delete json[key]);
	return protocol + ':' + address + ((Object.keys(json).length>0) ? '?' : '') + 
		Object.keys(json).map(function(key) {
			return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
		}).join('&');
}

var qr = new QRious({
	element: document.getElementById('qr'),
	size: 200,
	backgroundAlpha: 0,
	value: link
});

var qrimage = qr.toDataURL('image/jpeg');
var meta1 = document.createElement('meta');
meta1.setAttribute('property', 'og:image');;
meta1.setAttribute('content', qrimage);
document.getElementsByTagName('head')[0].appendChild(meta1);
var meta2 = document.createElement('meta');
meta2.setAttribute('property', 'twitter:image');
meta2.setAttribute('content', qrimage);
document.getElementsByTagName('head')[0].appendChild(meta2);

document.getElementById('paylink').href = link;
document.getElementById('paytype').innerHTML = name + ' payment';
if (amount != null)
	document.getElementById('amount').innerHTML = amount + ' ' + symbol;
if (address != null)
	document.getElementById('address').innerHTML = address.match(/.{1,4}/g).join(' ');
	document.getElementById('inputAddress').value = address;

var copyAddress = document.getElementById('address');
copyAddress.addEventListener('click', function () {
	var addressField = document.getElementById('inputAddress');
	addressField.select();
	document.execCommand('copy');
}, false);