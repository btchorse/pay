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
    `address`
    - amount
    - label
    - message
  </dd>
</dl>
<dl>
  <dt>litecoin</dt>
  <dd>
    `address`
    - amount
    - label
    - message
  </dd>
</dl>
<dl>
  <dt>ethereum</dt>
  <dd>
    `address`
    - value
    - gas
    - data
  </dd>
</dl>
<dl>
  <dt>payto</dt>
  <dd>
    `type/address`
    - amount (currency:unit)
    - label
    - message
    - fee
  </dd>
</dl>

## Examples

- `https://pay.btc.horse#bitcoin:<address>[?amount=<amount>][?label=<label>][?message=<message>]`
- `https://pay.btc.horse#litecoin:<address>[?amount=<amount>][?label=<label>][?message=<message>]`
- `https://pay.btc.horse#ethereum:<address>[?value=<value>][?gas=<suggestedGas>][?data=<bytecode>]`
- `https://pay.btc.horse#payto://<type>/<address>[?amount=<currency:unit>][?label=<label>][?message=<message>][?fee=<suggestedFee>]`

## License

Licensed under [MIT](LICENSE)
