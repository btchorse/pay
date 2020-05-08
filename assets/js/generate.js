const payto = location.hash.substr(1);
const url = new URL(payto);

const protocol = url.protocol.substr(1);
const params = url.searchParams;

switch(protocol) {
	case 'bitcoin':
		const name = 'bitcoin';
		const currency = '₿';
		const address = url.hostname;
		const amount = parseFloat(params.get('amount'));
		const label = decodeURI(params.get('label'));
		const message = decodeURI(params.get('message'));
		break;
	case 'litecoin':
		const name = 'litecoin';
		const currency = 'Ł';
		const address = url.hostname;
		const amount = parseFloat(params.get('amount'));
		const label = decodeURI(params.get('label'));
		const message = decodeURI(params.get('message'));
		break;
	case 'ethereum':
		const name = 'ethereum';
		const currency = 'Ξ';
		const address = url.hostname;
		const amount = parseFloat(params.get('value'));
		const label = '';
		const message = decodeURI(params.get('data'));
		break;
	case 'payto':
		const path = url.pathname.split('/');
		const pay = decodeURI(params.get('amount')).split(':');
		const currency = pay[0];
		const amount = parseFloat(pay[1]);
		const label = decodeURI(params.get('label'));
		const message = decodeURI(params.get('message'));
		break;
	default:
		const name = '';
		const currency = '';
		const address = '';
		const amount = 0;
		const label = '';
		const message = '';
		alert('No payment found!');
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

document.getElementById('paylink').href = payto;
document.getElementById('paytype').innerHTML = name + ' payment';
if (amount != null)
	document.getElementById('amount').innerHTML = amount + ' ' + currency;
if (address != null)
	document.getElementById('address').innerHTML = address.match(/.{1,4}/g).join(' ');
	document.getElementById('inputAddress').value = address;

var copyAddress = document.getElementById('address');
copyAddress.addEventListener('click', function () {
	var addressField = document.getElementById('inputAddress');
	addressField.select();
	document.execCommand('copy');
}, false);
