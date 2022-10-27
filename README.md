# inject-webpack-plugin-head

## Installation

```bash
npm install --save-dev inject-webpack-plugin-head
```

```bash
yarn add --dev inject-webpack-plugin-head
```

## Example

#### Input

webpack.config.babel.js
```js
import HtmlWebpackPlugin from "html-webpack-plugin"
import InjectHeadPlugin from "inject-webpack-plugin-head"

export default {
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: "<html><head></head></html>"
    }),
    new InjectHeadPlugin({
      content: '<main id=root>Hi!</main>'
    }),
  ],
}
```

#### Output

index.html
```html
<html><head><main id=root>Hi!</main></head></html>
```

## Options

<table>
<tr>
<th></th>
<th>Type</th>
<th>Default</th>
<th>Info</th>
</tr>
<tr>
<td>content</td>
<td>string</td>
<td>&lt;div id=root/></td>
<td>The text that will be injected into the final HTML output.</td>
</tr>
<tr>
<td>position</td>
<td>string</td>
<td>start</td>
<td>If “start”, the content will be injected as close to the head opening tag as possible. If “end”, the content will be injected as close to the body ending tag as possible.</td>
</tr>
</table>

## Development

<details>
<summary><b>Development hints for maintaining and improving inject-webpack-plugin-head</b></summary>

Setting up:
```bash
git clone git@github.com:Emiyaa/inject-webpack-plugin-head.git
cd inject-webpack-plugin-head
npm install
```
Testing in production environment:
```bash
# 打包
npm run build
# 发包 
npm publish
```

</details>
