# Payment link
Minimalistic Payment link for crypto currencies privided directly from Github.

## link structure

* pay - payment type; btc, ltc, eth (default btc)
* amount - amount to pay in crypto
* message - payment message
* label - payment label
* extra - payment extra
* gas - ethereum suggested gas
* data - ethereum bytecode
* &#35; - payment address; after hash

## example

```
https://link.btc.horse/?pay=btc&amount=3&message=donation#39QpeVBF8gep7nfYbt9u1DrqKR8dAM31CT
```
