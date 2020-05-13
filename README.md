# Payment link
Minimalistic Payment link for crypto currencies provided directly from Github.

## Supported protocols

* bitcoin
* litecoin
* ethereum
* payto

## Syntax

`https://pay.btc.horse# + payment link`

## Supported parameters

<dl>
  <dt>bitcoin</dt>
  <dd>
    <kbd>address</kbd>
    <ul>
      <li>amount</li>
      <li>label</li>
      <li>message</li>
    </ul>
  </dd>
</dl>
<dl>
  <dt>litecoin</dt>
  <dd>
    <kbd>address</kbd>
    <ul>
      <li>amount</li>
      <li>label</li>
      <li>message</li>
    </ul>
  </dd>
</dl>
<dl>
  <dt>ethereum</dt>
  <dd>
    <kbd>address</kbd>
    <ul>
      <li>value</li>
      <li>gas</li>
      <li>data</li>
    </ul>
  </dd>
</dl>
<dl>
  <dt>payto</dt>
  <dd>
    <kbd>type/address</kbd>
    <ul>
      <li>amount (currency:unit)</li>
      <li>label</li>
      <li>message</li>
      <li>fee</li>
    </ul>
  </dd>
</dl>

## Examples

- `https://pay.btc.horse#bitcoin:<address>[?amount=<amount>][?label=<label>][?message=<message>]`
- `https://pay.btc.horse#litecoin:<address>[?amount=<amount>][?label=<label>][?message=<message>]`
- `https://pay.btc.horse#ethereum:<address>[?value=<value>][?gas=<suggestedGas>][?data=<bytecode>]`
- `https://pay.btc.horse#payto://<type>/<address>[?amount=<currency:unit>][?label=<label>][?message=<message>][?fee=<suggestedFee>]`

## Alternative domain at GitHub

- `https://btchorse.github.io/pay#bitcoin:<address>[?amount=<amount>][?label=<label>][?message=<message>]`
- `https://btchorse.github.io/pay#litecoin:<address>[?amount=<amount>][?label=<label>][?message=<message>]`
- `https://btchorse.github.io/pay#ethereum:<address>[?value=<value>][?gas=<suggestedGas>][?data=<bytecode>]`
- `https://btchorse.github.io/pay#payto://<type>/<address>[?amount=<currency:unit>][?label=<label>][?message=<message>][?fee=<suggestedFee>]`

## License

Licensed under [MIT](LICENSE)
