const payto = location.hash.substr(1);
const url = new URL(payto);

const protocol = url.protocol.substr(1);
const params = url.searchParams;

switch(protocol) {
	case 'bitcoin':
		let name = 'bitcoin';
		let currency = '₿';
		let address = url.hostname;
		let amount = parseFloat(params.get('amount'));
		let label = decodeURI(params.get('label'));
		let message = decodeURI(params.get('message'));
		break;
	case 'litecoin':
		let name = 'litecoin';
		let currency = 'Ł';
		let address = url.hostname;
		let amount = parseFloat(params.get('amount'));
		let label = decodeURI(params.get('label'));
		let message = decodeURI(params.get('message'));
		break;
	case 'ethereum':
		let name = 'ethereum';
		let currency = 'Ξ';
		let address = url.hostname;
		let amount = parseFloat(params.get('value'));
		let label = '';
		let message = decodeURI(params.get('data'));
		break;
	case 'payto':
		let path = url.pathname.split('/');
		let pay = decodeURI(params.get('amount')).split(':');
		let currency = pay[0];
		let amount = parseFloat(pay[1]);
		let label = decodeURI(params.get('label'));
		let message = decodeURI(params.get('message'));
		break;
	default:
		let name = '';
		let currency = '';
		let address = '';
		let amount = 0;
		let label = '';
		let message = '';
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
if (amount != null)
	document.getElementById('amount').innerHTML = amount + ' ' + currency;
if (address != null)
	document.getElementById('address').innerHTML = address.match(/.{1,4}/g).join(' ');
	document.getElementById('inputAddress').value = address;

let copyAddress = document.getElementById('address');
copyAddress.addEventListener('click', function () {
	let addressField = document.getElementById('inputAddress');
	addressField.select();
	document.execCommand('copy');
}, false);
