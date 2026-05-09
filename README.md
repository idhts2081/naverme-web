## Overview

`naverme-web` is a lightweight frontend built on top of `naverme-api`.

Just paste a URL, and the app will automatically:

- Generate a `naver.me` short link
- Copy the shortened link to your clipboard

## Website

```txt
https://naverme-web.vercel.app
````

## How It Works

1. Enter a URL into the input box
2. The app sends a request to:

```txt
https://naverme-shortener.vercel.app/shorten
```

3. A shortened `naver.me` link is generated
4. The link is automatically copied to your clipboard

## Example

### Input

```txt
https://example.com
```

### Output

```txt
https://naver.me/xxxxx
```

## API

This project uses:

```txt
https://github.com/idhts2081/naverme-api
```
