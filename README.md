# Nbed64.js

# README 语言 || Language || 言語 || 언어

　　　　CN : *自述文件支持以下语种，其中，中文为作者的母语，因此表达分歧最少！如果您有能力阅读中文，请尽量阅读中文版的 README.md。谢谢！！！*

　　　　EN : *The readme file supports the following languages, of which Chinese is the author's native language, so the expression differences are the least! If you have the ability to read Chinese, please try to read the Chinese version of README.md. thank you !!!*

	RU :  Самоописанные документы поддерживают следующие языки, из которых китайский является родным языком автора, поэтому выражают наименьшее количество разногласий!  Если вы умеете читать по - китайски, попробуйте прочитать китайскую версию README.md.  Спасибо. 

　　　　JP  : *Readmeファイルは次の言語をサポートしています、ここで、中国語は著者の母国語であり、そのため、表現の違いが最も少ない！中国語を読む能力があれば、できるだけ中国語版のREADME.mdを読んでください。ありがとうございます！！！*

　　　　KR : *자술문건은 다음과 같은 언어를 지원하는데 그중 중국어는 저자의 모국어이기에 표현의견상이가 가장 적다.중국어를 읽을 수 있는 능력이 있다면 가능한 한 중국어판 README.md를 읽으십시오.감사합니다 ! ! !*


+ [README.md] **这是简体中文版（默认）** ---------------> [Click To Read Chinese Version]
+ [README.EN.md] **This is the English version** ---------> [Click To Read English Version]
+ [README.RU.md] **Это русская версия.** --------------> [Click To Read Russia Version]
+ [README.JP.md] **これは日本語版です** -----------------> [Click To Read Japanese Version]
+ [README.KR.md] **한국어 버전입니다** ------------------> [Click To Read Korean Version]

[README.md]: https://github.com/love915sss/js-nbed64-base64/blob/master/README.md
[Click To Read Chinese Version]: https://github.com/love915sss/js-nbed64-base64/blob/master/README.md
[README.EN.md]: https://github.com/love915sss/js-nbed64-base64/blob/master/README.en.md
[Click To Read Russia Version]: https://github.com/love915sss/js-nbed64-base64/blob/master/README.ru.md
[README.RU.md]: https://github.com/love915sss/js-nbed64-base64/blob/master/README.ru.md
[Click To Read English Version]: https://github.com/love915sss/js-nbed64-base64/blob/master/README.en.md
[README.JP.md]: https://github.com/love915sss/js-nbed64-base64/blob/master/README.jp.md
[Click To Read Japanese Version]: https://github.com/love915sss/js-nbed64-base64/blob/master/README.jp.md
[README.KR.md]: https://github.com/love915sss/js-nbed64-base64/blob/master/README.kr.md
[Click To Read Korean Version]: https://github.com/love915sss/js-nbed64-base64/blob/master/README.kr.md



# Nbed64的设计初衷与特性

1. 在Nbed64问世之前，市面上早就不缺对称加密算法，像AES、DES、TDEA、RC4、RC5等...已如雷贯耳，那么设计Nbed64的意义在哪里？答案是：可读性 + 通用性 + 轻量级。传统加密算法均有一个共性：主要服务于二进制数据安全。加密的结果不能字符化，而不能字符化就意味着：没有输入性，也没有可读性，不方便打印，不方便调试，等等...这是不利于现代可视化交互的，尤其像JS、PHP等脚本语言操作二进制很不方便！在WEB应用中，以及基于WEB的APP中，传统加密都很不方便作数据交互。怎么办呢，人们通常有两个选择：1. 转换成十六进制文本，2. 转换成Base64 文本。于是，网上到处都是AES、DES转Base64的帖子。您看，转了一圈，问题又回来了----那么我们为什么不直接在Base64编码的基础上来实现加密呢？为什么要脱裤子放屁呢？！于是，打造一套轻量的、通用的、可读的、开箱即用的加密方案，这，就是作者设计Nbed64的初衷！

2. Nbed64是一套[多语言] + [跨平台]的加解密库，Nbed64现已开源的语种有：GO版、C#版、C/C++版、Java版、Python版、JavaScript版、PHP版、E版，以及其它即将问世的语种版。这意味着，在所有主流编程语言中，但凡使用Nbed64加解密的数据，都均可无障碍交互。对不同语言的开发者，Nbed64的函数名，参数数量，参数位置， 执行结果，都是一致的、统一的。换句话说：使用Nbed64，前后端的开发者不论使用什么语言，对结果的认识是统一的，是没有分歧的，是可以无障碍交互数据的。

3. Nbed64是Network Bridge Encrypt Decrypt Base64的缩写，它是一套通用的、开源的、跨语言的、跨平台的卓越加密方案库。这套库的算法最早由合肥网桥网络科技的CEO设计于2014年，当初仅有C++一个版本，随后在其公司的生产环境中不断扩充和迭代，发展成了今天的多语种版。因此nb指的就是网桥科技，ed指的是加密和解密，64指的是该算法基于Base64编码框架。请不要误以为nbed意指'非对称的...'，这样理解是错误的！强调一下， Nbed64是一套对称的加密方案，以及升级版的对称加密方案，人们很喜欢称之为：动态加密方案！

4. Nbed64对字符集的编码由内部算法实现，如：UTF-8，UTF-16，GBK等。它不依赖运行平台的API，不依赖运行环境的API。这意味着：在Windows、Linux、Unix、Mac、Android、Ios等不同的平台中运行的结果是一致的，安全的，稳定的。使用者使用跨平台语言开发时不必关心各系统平台之间的差异，也不必关心各种编码API在不同系统平台上使用的差异。开箱即用，编码问题与您无关。

5. Nbed64解密字符串时，会自动转换为当前语言的默认编码。如JavaScript环境中，被解密的字符串会自动转换为UTF-16，因为JavaScript的默认编码就是UTF-16，也只有UTF-16才不会乱码。强调一下，这里"自动"所指的意思是：不论原内容是UTF-8编码也好，是GBK编码也罢，只要在JS里解密字符串就必然是UTF-16，在C/C++里解密就必然是UTF-8。这样的设计很方便也很重要，众所周知，不同编程语言的默认编码是不同的，这意味着跨语言数据交互是需要彼此转换编码的，当彼此的默认编码不同时，开发者需要知已知彼才能转换编码，这是繁琐头疼的过程。而Nbed64解决了这样的尴尬，它在解密时扮演着自动翻译者的工作。这让开发者之间可以尽情的交互数据，而不必分散精力来处理彼此的编码问题。

6. Nbed64为何选择Base64作为加密框架呢？因为，二进制转成字符集的常用方案有两种：十六进制文本 和 Base64文本。其中十六进制需要两个字符表示一个字节，因此，十六进制占用内存的尺寸为：X * 2，所以，会有1倍的空间浪费。而Base64则用4个字符表示3个字节，因此，Base64占用内存的尺寸为：X / 3 * 4，所以，只有3分之1的空间浪费。在网络当道的今天，Nbed64只能选择更节约的Base64编码框架。同样能满足需求，当然要保持节约精神。

7. Nbed64的算法虽然基于Base64编码框架，但算法经过大量优化，性能远高于传统的Base64算法。作者曾在多平台下作过对比，各以10MB测试数据为例，Nbed64解密数据平均比传统的base64解码数据快100倍以上！主要原因是：传统的Base64解码时，通过遍历查找Base64映射表中的字符串来寻址，而Nbed64直接通过计算推导来寻址，因此少了一层for()循环，再加上其它各种优化，性能便有了极大的提升。经过压力测试，即使在移动浏览器中使用JavaScript编码512MB的数据也迅捷快速、毫无压力，其它语言和平台的性能自不必多说了。

8. Nbed64使用BSD开源协议----BSD是当今最友好的开源协议之一。这意味着：任何个人、组织、企业、机构都可以随意修改、转发、共享、商用 Nbed64加密库...


# Nbed64加解密方案的主要能力
### Nbed64共提供了12个API，分为3组，每组4个API。分别为：
1. 动态加解密API组
	* [nbed64StringEncryptEx()]  动态加密字符串，数据不变，密钥不变，**但加密结果不重复，次次都变**
	* [nbed64StringDecryptEx()]  动态解密字符串，与 nbed64StringEncryptEx()是一对
	* [nbed64BinaryEncryptEx()]  动态加密二进制，数据不变，密钥不变，**但加密结果不重复，次次都变**
	* [nbed64BinaryDecryptEx()]  动态解密二进制，与 nbed64BinaryEncryptEx()是一对

2. 对称加解密API组
	* [nbed64StringEncrypt()]  对称加密字符串，数据不变，密钥不变，**加密结果也不变，固定不变的**
	* [nbed64StringDecrypt()]  对称解密字符串，与 nbed64StringEncrypt()是一对
	* [nbed64BinaryEncrypt()]  对称加密二进制，数据不变，密钥不变，**加密结果也不变，固定不变的**
	* [nbed64BinaryDecrypt()]  对称解密二进制，与 nbed64BinaryEncrypt()是一对

3. 标准Base64编解码API组
	* [nbed64StringEncode()]  标准的Base64编码，用于编码字符串，支持RFC4648安全规范
	* [nbed64StringDecode()]  标准的Base64解码，用于解码字符串，支持RFC4648安全规范
	* [nbed64BinaryEncode()]  标准的Base64编码，用于编码二进制，支持RFC4648安全规范
	* [nbed64BinaryDecode()]  标准的Base64解码，用于解码二进制，支持RFC4648安全规范

*备注：动态加密是(传统)对称加密的升级版，但本质上，它还是对称加密，但它比传统的对称加密更加安全可靠。如果您对此有研究兴趣，请您移步 *[动态加密的作用和原理]*了解更多详情。*

[nbed64StringEncryptEx()]: https://github.com/love915sss/js-Nbed64-base64/#01-nbed64stringencryptex
[nbed64StringDecryptEx()]: https://github.com/love915sss/js-Nbed64-base64/#02-nbed64StringDecryptEx
[nbed64BinaryEncryptEx()]: https://github.com/love915sss/js-Nbed64-base64/#03-nbed64BinaryEncryptEx
[nbed64BinaryDecryptEx()]: https://github.com/love915sss/js-Nbed64-base64/#04-nbed64BinaryDecryptEx
[nbed64StringEncrypt()]: https://github.com/love915sss/js-Nbed64-base64/#05-nbed64StringEncrypt
[nbed64StringDecrypt()]: https://github.com/love915sss/js-Nbed64-base64/#06-nbed64StringDecrypt
[nbed64BinaryEncrypt()]: https://github.com/love915sss/js-Nbed64-base64/#07-nbed64BinaryEncrypt
[nbed64BinaryDecrypt()]: https://github.com/love915sss/js-Nbed64-base64/#08-nbed64BinaryDecrypt
[nbed64StringEncode()]: https://github.com/love915sss/js-Nbed64-base64/#09-nbed64StringEncode
[nbed64StringDecode()]: https://github.com/love915sss/js-Nbed64-base64/#10-nbed64StringDecode
[nbed64BinaryEncode()]: https://github.com/love915sss/js-Nbed64-base64/#11-nbed64BinaryEncode
[nbed64BinaryDecode()]: https://github.com/love915sss/js-Nbed64-base64/#12-nbed64BinaryDecode
[动态加密的作用和原理]: https://github.com/love915sss/js-Nbed64-base64/#动态加密的作用和原理


# 相关链接

### Nbed64 在GitHub上开源的其它语种版本
+ [C-Nbed64] 作者用 C/C++ 语言编写的版本
+ [Go-Nbed64] 作者用 Golang 语言编写的版本
+ [JS-Nbed64] 作者用 JavaScript 语言编写的版本
+ [VB-Nbed64] 作者用 Visual Basic 语言编写的版本
+ [CS-Nbed64] 作者用 C Sharp |  C# 语言编写的版本
+ [PHP-Nbed64] 作者用 PHP 语言编写的版本
+ [JAVA-Nbed64] 作者用 JAVA 语言编写的版本
+ [Python-Nbed64] 作者用 Python 语言编写的版本

*备注：由于编写Demo和README需要大量的时间和精力，因此作者无法在短期内将以上所有的语种版本全部Push。不过别担心，作者不会放松进度和改变计划，弥补空缺只是时间问题....*

[c-Nbed64]: https://github.com/love915sss/c-Nbed64-base64/
[Go-Nbed64]: https://github.com/love915sss/Go-Nbed64-base64/
[JS-Nbed64]: https://github.com/love915sss/JS-Nbed64-base64/
[VB-Nbed64]: https://github.com/love915sss/VB-Nbed64-base64/
[CS-Nbed64]: https://github.com/love915sss/CS-Nbed64-base64/
[PHP-Nbed64]: https://github.com/love915sss/PHP-Nbed64-base64/
[JAVA-Nbed64]: https://github.com/love915sss/JAVA-Nbed64-base64/
[Python-Nbed64]: https://github.com/love915sss/Python-Nbed64-base64/


# 安装与引入

## 安装

```shell
$ npm install --save js-nbed64
```
*如果您无法通过 npm 安装，没关系，以下任意一种方式效果都一样...*

## 引用

### 在浏览器中 

本地…您需要先在GitHub或官网上将nbed64.zip下载并解压，然后...

```html
<script src="nbed64.es5.all.js">/*完整版----研究环境时使用*/</script>
<script src="nbed64.es5.min.js">/*迷你版----生产环境时使用*/</script>
```

… 或直接从CDN。在这种方式下，您不必下载和安装。

```html
<script src="https://nbed64.oss-cn-hongkong.aliyuncs.com/nbed64.se5.all.js">/*完整版----研究环境时使用*/</script>
<script src="https://nbed64.oss-cn-hongkong.aliyuncs.com/nbed64.se5.min.js">/*迷你版----生产环境时使用*/</script>
```

*以上引用方式虽然很方便，但也很容易污染`window`，因此，我推荐您使用下面ES6规范标准的引入模式...*

### 作为ES6模块 来引入，浏览器 || nodejs || uin-app || APICloud

本地…您需要先在GitHub或官网上将nbed64.zip下载并解压，然后...

```javascript
	import * as nbed64 from 'Nbed64 .es6.min';
```

*或者*

```javascript
	import {
		nbed64StringEncryptEx,
		nbed64StringDecryptEx,
		nbed64BinaryEncryptEx,
		nbed64BinaryDecryptEx,
		nbed64StringEncrypt,
		nbed64StringDecrypt,
		nbed64BinaryEncrypt,
		nbed64BinaryDecrypt,
		nbed64StringEncode,
		nbed64StringDecode,
		nbed64BinaryEncode,
		nbed64BinaryDecode
	} from 'nbed64.es6.min';
```



… 或直接从CDN。在这种方式下，您不必下载和安装。


```javascript
	import * as nbed64 from 'https://nbed64.oss-cn-hongkong.aliyuncs.com/Nbed64 .es6.min';
```

*或者*

```javascript
	import {
		nbed64StringEncryptEx,
		nbed64StringDecryptEx,
		nbed64BinaryEncryptEx,
		nbed64BinaryDecryptEx,
		nbed64StringEncrypt,
		nbed64StringDecrypt,
		nbed64BinaryEncrypt,
		nbed64BinaryDecrypt,
		nbed64StringEncode,
		nbed64StringDecode,
		nbed64BinaryEncode,
		nbed64BinaryDecode
	} from 'https://nbed64.oss-cn-hongkong.aliyuncs.com/nbed64.es6.min';
```



# 函数原型 && DEMO

## 01. nbed64StringEncryptEx

### nbed64StringEncryptEx() 用于 动态加密字符串，数据不变，密钥不变，**但加密结果不重复**

函数原型：

```javascript
/**
 * nbed64对字符串加密的升级版，简称：字符串动态加密（ 本函数与 nbed64StringDecryptEx()为一对 ）
 * @param {string} str 原数据。
 * @param {string} key 密钥。理论上密钥的长度与逆向的难度成正比关系。
 * @param {boolean} isUtf8 是否采用UTF-8编码格式。默认为：true。若设置为false，则使用UTF-16编码。
 * 注意：此处指的是加密前的编码，而非加密后的base64编码，base64是无须编码的。换句话来说，本参数指的是解密后的字符串编码。
 * JS的默认编码为UTF-16，但UTF-16并不友好，很多编程语言和服务端环境都不支持UTF-16。
 * @param {number} maskNumber 掩码的数量。缺省为：32，范围：32 - 65535。当值小于32时为32，大于65535时为65535。
 * @return string 加密结果
 */
const nbed64StringEncryptEx = (str, key, isUtf8 = true, maskNumber = 32) => { ... }
```

DEMO：

```javascript
	let isUtf8 = true;
	let key = 'Key1234567890++';
	let text = '这是需要加密的字符串内容--123++bc...';
	let base64 = nbed64StringEncryptEx(text, key, isUtf8);
	console.log('这是动态加密的结果: ' + base64);
	//  声明： 动态加密的结果每次都会不一样...
	// console.log -> 这是动态加密的结果: a0uD4iPa_daMUeWm-FL44yEDTbQKG1PbuPE-37C0RWIdAzM2RCCXdAFmN_F1l-UzwWGlB5Gmd5EFhiGVJYG0dNH3x_HFdA19fLycjQFF1cVVVV
	console.log('再来一次对比试试--: ' + nbed64StringEncryptEx(text, key, isUtf8));
	// console.log -> 再来一次对比试试--: a0tu7dD78s0LxyfNAZYkHlQywUOtbZNuCDPltOT5W5Ku2Tl8DmC3VCFmN_F1l-WjUfElhxEWxyGlJomdLYG0dNnv3-GFNEW1tHTUxU1J2cYWFh
	let TextDec = nbed64StringDecryptEx(base64, key, isUtf8);
	console.log('这是动态解密的结果: ' + TextDec);
	// console.log -> 这是动态解密的结果: 这是需要加密的字符串内容--123++bc...
```



## 02. nbed64StringDecryptEx

### nbed64StringDecryptEx() 用于 动态解密字符串 本函数与 nbed64StringEncryptEx()为一对 

函数原型：

```javascript
/**
 * Base64解密成字符串的升级版，简称：字符串动态解密（ 本函数与 nbed64StringEncryptEx()为一对 ）
 * @param {string} base64str base64格式的加密字符串
 * @param {string} key 密钥。本参数请保持与加密时的设置完全一致。
 * @param {boolean} isUtf8 是否采用UTF-8编码格式。本参数请保持与加密时的设置完全一致。
 * @return string 解密结果（UTF-16编码格式）。注意：为方便使用，解密结果会自动转换成当前程序语言的默认编码，以便开箱即用，省略二次编码。JS默认编码：UTF-16
 */
const nbed64StringDecryptEx = (base64str, key, isUtf8 = true) => { ... }
```

DEMO：

```javascript
	let isUtf8 = true;
	let key = 'Key1234567890++';
	let text = '这是需要加密的字符串内容--123++bc...';
	let base64 = nbed64StringEncryptEx(text, key, isUtf8);
	console.log('这是动态加密的结果: ' + base64);
	//  声明： 动态加密的结果每次都会不一样...
	// console.log -> 这是动态加密的结果: a0uD4iPa_daMUeWm-FL44yEDTbQKG1PbuPE-37C0RWIdAzM2RCCXdAFmN_F1l-UzwWGlB5Gmd5EFhiGVJYG0dNH3x_HFdA19fLycjQFF1cVVVV
	console.log('再来一次对比试试--: ' + nbed64StringEncryptEx(text, key, isUtf8));
	// console.log -> 再来一次对比试试--: a0tu7dD78s0LxyfNAZYkHlQywUOtbZNuCDPltOT5W5Ku2Tl8DmC3VCFmN_F1l-WjUfElhxEWxyGlJomdLYG0dNnv3-GFNEW1tHTUxU1J2cYWFh
	let TextDec = nbed64StringDecryptEx(base64, key, isUtf8);
	console.log('这是动态解密的结果: ' + TextDec);
	// console.log -> 这是动态解密的结果: 这是需要加密的字符串内容--123++bc...
```



## 03. nbed64BinaryEncryptEx

### nbed64BinaryEncryptEx() 用于 动态加密二进制，数据不变，密钥不变，**但加密结果不重复**

函数原型：

```javascript
/**
 * Nbed64 对二进制数据加密的升级版，简称：二进制动态加密（ 本函数与 nbed64BinaryDecryptEx()为一对 ）
 * @param {ByteArray} byteArr 原数据。二进制字节数组，如：视频、音频、图片、文件等。
 * @param {string} key 密钥。理论上密钥的长度与逆向的难度成正比关系。
 * @param {number} maskNumber 掩码的数量。缺省为：32，范围：32 - 65535。当值小于32时为32，大于65535时为65535。
 * @return string 加密结果
 */
const nbed64BinaryEncryptEx = (byteArr, key, maskNumber = 32) => { ... }
```

DEMO：

```javascript
	let key = 'Key1234567890++';
	let mp4 = new Uint8Array([255, 254, 253, 252, 251, 250, 249, 248, 247, 246]);;
	let base64 = nbed64BinaryEncryptEx(mp4, key);
	console.log('这是动态加密的结果: ' + base64);
	// 声明： 动态加密的结果每次都会不一样...
	// console.log -> 这是动态加密的结果: a0tdkmEjI-6aJlp-aU6wWwtcfmuCBDg-GcRAvSfTu35NFDgIGCAwQFhIWKgX
	console.log('再来一次对比试试--: ' + nbed64BinaryEncryptEx(mp4, key));
	// console.log -> 再来一次对比试试--: a0tsO0Go7LbVeH1MaqljRsUo-uC0TOwjIGjCJEgtTwoU5zgIGCAwQFBAUKCf
	let byteArray = nbed64BinaryDecryptEx(base64, key);
	console.log('这是动态解密的结果: ' + byteArray);
	// console.log -> 这是动态解密的结果: 255,254,253,252,251,250,249,248,247,246
```



## 04. nbed64BinaryDecryptEx

### nbed64BinaryDecryptEx() 用于 动态解密二进制，与 nbed64BinaryEncryptEx()是一对

函数原型：

```javascript
/**
 * Base64解密成二进制数据的升级版，简称：二进制动态解密（ 本函数与 nbed64BinaryEncryptEx()为一对 ）
 * @param {string} base64str base64格式的加密字符串
 * @param {string} key 密钥。本参数请保持与加密时的设置完全一致。
 * @return ByteArray 解密结果
 */
const nbed64BinaryDecryptEx = (base64str, key) =>  { ... }
```

DEMO：

```javascript
	let key = 'Key1234567890++';
	let mp4 = new Uint8Array([255, 254, 253, 252, 251, 250, 249, 248, 247, 246]);;
	let base64 = nbed64BinaryEncryptEx(mp4, key);
	console.log('这是动态加密的结果: ' + base64);
	// 声明： 动态加密的结果每次都会不一样...
	// console.log -> 这是动态加密的结果: a0tdkmEjI-6aJlp-aU6wWwtcfmuCBDg-GcRAvSfTu35NFDgIGCAwQFhIWKgX
	console.log('再来一次对比试试--: ' + nbed64BinaryEncryptEx(mp4, key));
	// console.log -> 再来一次对比试试--: a0tsO0Go7LbVeH1MaqljRsUo-uC0TOwjIGjCJEgtTwoU5zgIGCAwQFBAUKCf
	let byteArray = nbed64BinaryDecryptEx(base64, key);
	console.log('这是动态解密的结果: ' + byteArray);
	// console.log -> 这是动态解密的结果: 255,254,253,252,251,250,249,248,247,246
```



## 05. nbed64StringEncrypt

### nbed64StringEncrypt() 用于 对称加密字符串，数据不变，密钥不变，**加密结果也不变**

函数原型：

```javascript
/**
/**
 * Nbed64 对字符串加密（ 本函数与 nbed64StringDecrypt()为一对 ）
 * @param {string} str 原数据。
 * @param {string} key 密钥。理论上密钥的长度与逆向的难度成正比关系。
 * @param {boolean} isUtf8 是否采用UTF-8编码格式。默认为：true。若设置为false，则使用UTF-16编码。
 * 注意：此处指的是加密前的编码，而非加密后的base64编码，base64是无须编码的。换句话来说，本参数指的是解密后的字符串编码。
 * JS的默认编码为UTF-16，但UTF-16并不友好，很多编程语言和服务端环境都不支持UTF-16。
 * @param {boolean} isRFC4648 是否采用RFC4648编码映射规范，默认为：true。采用RFC4648规范编码的Base64符合URL安全，可用于HTTP协议与Ajax请求。
 * @return string 加密结果
 */
const nbed64StringEncrypt = (str, key, isUtf8 = true, isRFC4648 = true) =>  { ... }
```

DEMO：

```javascript
	let isUtf8 = true;
	let isRFC4648 = true;
	let key = 'Key1234567890++';
	let text = '这是需要加密的字符串内容--123++bc...';
	let base64 = nbed64StringEncrypt(text, key, isUtf8, isRFC4648);
	console.log('这是对称加密的结果: ' + base64);
	// console.log -> 这是对称加密的结果: o_TSg_3KkOX52Zew17iS1py1066w0Jii0ZqQ04-F3b693JeAHR0BGRgAAElIZWVl
	console.log('再来一次对比试试--: ' + nbed64StringEncrypt(text, key, isUtf8, isRFC4648));
	// console.log -> 再来一次对比试试  : o_TSg_3KkOX52Zew17iS1py1066w0Jii0ZqQ04-F3b693JeAHR0BGRgAAElIZWVl
	let TextDec = nbed64StringDecrypt(base64, key, isUtf8);
	console.log('这是对称解密的结果: ' + TextDec);
	// console.log -> 这是对称解密的结果: 这是需要加密的字符串内容--123++bc...
```



## 06. nbed64StringDecrypt

### nbed64StringDecrypt() 用于 对称解密字符串，与 nbed64StringEncrypt()是一对

函数原型：

```javascript
/**
 * Base64解密成字符串（ 本函数与 nbed64StringEncrypt()为一对 ）
 * @param {string} base64str base64格式的加密字符串
 * @param {string} key 密钥。本参数请保持与加密时的设置完全一致。
 * @param {boolean} isUtf8 是否采用UTF-8编码格式。本参数请保持与加密时的设置完全一致。
 * @return string 解密结果（UTF-16编码格式）。注意：为方便使用，解密结果会自动转换成当前程序语言的默认编码，以便开箱即用，省略二次编码。JS默认编码：UTF-16
 */
const nbed64StringDecrypt = (base64str, key, isUtf8 = true) =>  { ... }
```

DEMO：

```javascript
	let isUtf8 = true;
	let isRFC4648 = true;
	let key = 'Key1234567890++';
	let text = '这是需要加密的字符串内容--123++bc...';
	let base64 = nbed64StringEncrypt(text, key, isUtf8, isRFC4648);
	console.log('这是对称加密的结果: ' + base64);
	// console.log -> 这是对称加密的结果: o_TSg_3KkOX52Zew17iS1py1066w0Jii0ZqQ04-F3b693JeAHR0BGRgAAElIZWVl
	console.log('再来一次对比试试  : ' + nbed64StringEncrypt(text, key, isUtf8, isRFC4648));
	// console.log -> 再来一次对比试试--: o_TSg_3KkOX52Zew17iS1py1066w0Jii0ZqQ04-F3b693JeAHR0BGRgAAElIZWVl
	let TextDec = nbed64StringDecrypt(base64, key, isUtf8);
	console.log('这是对称解密的结果: ' + TextDec);
	// console.log -> 这是对称解密的结果: 这是需要加密的字符串内容--123++bc...
```



## 07 nbed64BinaryEncrypt

### nbed64BinaryEncrypt() 用于 对称加密二进制，数据不变，密钥不变，**加密结果也不变**

函数原型：

```javascript
/**
 * Nbed64 对二进制数据加密（ 本函数与 nbed64BinaryDecrypt()为一对 ）
 * @param {ByteArray} byteArr 原数据。二进制字节数组，如：视频、音频、图片、文件等。
 * @param {string} key 密钥。理论上密钥的长度与逆向的难度成正比关系。
 * @param {boolean} isRFC4648 是否采用RFC4648编码映射规范，默认为：true。采用RFC4648规范编码的Base64符合URL安全，可用于HTTP协议与Ajax请求。
 * @return string 加密结果
 */
const nbed64BinaryDecrypt = (base64str, key) =>  { ... }
```

DEMO：

```javascript
	let isRFC4648 = true;
	let key = 'Key1234567890++';
	let mp3 = new Uint8Array([155, 154, 153, 152, 151, 150, 149, 148, 147, 146]);;
	let base64 = nbed64BinaryEncrypt(mp3, key, isRFC4648);
	console.log('这是对称加密的结果: ' + base64);
	// console.log -> 这是对称加密的结果: 0NHS_fLz7O3qoz
	console.log('再来一次对比试试  : ' + nbed64BinaryEncrypt(mp3, key, isRFC4648));
	// console.log -> 再来一次对比试试  : 0NHS_fLz7O3qoz
	let byteArray = nbed64BinaryDecrypt(base64, key);
	console.log('这是对称解密的结果: ' + byteArray);
	// console.log -> 155,154,153,152,151,150,149,148,147,146
```



## 08. nbed64BinaryDecrypt

### nbed64BinaryDecrypt() 用于 对称解密二进制，与 nbed64BinaryEncrypt()是一对

函数原型：

```javascript
/**
 * Base64解密成二进制数据（ 本函数与 nbed64BinaryEncrypt()为一对 ）
 * @param {string} base64str base64格式的加密字符串
 * @param {string} key 密钥。本参数请保持与加密时的设置完全一致。
 * @return ByteArray 解密结果
 */
const nbed64BinaryDecrypt = (base64str, key) =>  { ... }
```

DEMO：

```javascript
	let isRFC4648 = true;
	let key = 'Key1234567890++';
	let mp3 = new Uint8Array([155, 154, 153, 152, 151, 150, 149, 148, 147, 146]);;
	let base64 = nbed64BinaryEncrypt(mp3, key, isRFC4648);
	console.log('这是对称加密的结果: ' + base64);
	// console.log -> 这是对称加密的结果: 0NHS_fLz7O3qoz
	console.log('再来一次对比试试  : ' + nbed64BinaryEncrypt(mp3, key, isRFC4648));
	// console.log -> 再来一次对比试试  : 0NHS_fLz7O3qoz
	let byteArray = nbed64BinaryDecrypt(base64, key);
	console.log('这是对称解密的结果: ' + byteArray);
	// console.log -> 155,154,153,152,151,150,149,148,147,146
```



## 09. nbed64StringEncode

### nbed64StringEncode() 标准的Base64编码，用于编码字符串，支持RFC4648安全规范

函数原型：

```javascript
/**
 * Nbed64 对字符串编码（ 注意：这是编码而非加密， 本函数与 nbed64StringDecode()为一对 ）
 * @param {string} str 原数据。
 * @param {boolean} isUtf8 是否采用UTF-8编码格式。默认为：true。若设置为false，则使用UTF-16编码。
 * 注意：此处指的是编码前的编码，而非编码后的base64编码，base64是无须编码的。换句话来说，本参数指的是解码后的字符串编码。
 * JS的默认编码为UTF-16，但UTF-16并不友好，很多编程语言和服务端环境都不支持UTF-16。
 * @param {boolean} isRFC4648 是否采用RFC4648编码映射规范，默认为：true。采用RFC4648规范编码的Base64符合URL安全，可用于HTTP协议与Ajax请求。
 * @return string 编码结果
 */
const nbed64StringEncode = (str, isUtf8 = true, isRFC4648 = true) =>  { ... }
```

DEMO：

```javascript
	let isUtf8 = true;
	let isRFC4648 = true;
	let text = '这是需要编码的字符串内容--Base64...';
	let base64 = nbed64StringEncode(text, isUtf8, isRFC4648);
	console.log('这是Base64编码的结果: ' + base64);
	// console.log -> 这是Base64编码的结果: 6L-Z5piv6ZyA6KaB57yW56CB55qE5a2X56ym5Liy5YaF5a65LS1CYXNlNjQuLi4A
	let TextDec = nbed64StringDecode(base64, isUtf8);
	console.log('这是Base64解码的结果: ' + TextDec);
	// console.log -> 这是Base64解码的结果: 这是需要编码的字符串内容--Base64...
```



## 10. nbed64StringDecode

### nbed64StringDecode() 标准的Base64解码，用于解码字符串，支持RFC4648安全规范

函数原型：

```javascript
/**
 * Base64解码成字符串（ 注意：这是解码而非解密， 本函数与 nbed64StringEncode()为一对 ）
 * @param {string} base64str base64格式编码的字符串
 * @param {boolean} isUtf8 是否采用UTF-8编码格式。本参数请保持与编码时的设置完全一致。
 * @return string 解码结果（UTF-16编码格式）。注意：为方便使用，解码结果会自动转换成当前程序语言的默认编码，以便开箱即用，省略二次编码。JS默认编码：UTF-16
 */
const nbed64StringDecode = (base64str, isUtf8 = true) =>  { ... }
```

DEMO：

```javascript
	let isUtf8 = true;
	let isRFC4648 = true;
	let text = '这是需要编码的字符串内容--Base64...';
	let base64 = nbed64StringEncode(text, isUtf8, isRFC4648);
	console.log('这是Base64编码的结果: ' + base64);
	// console.log -> 这是Base64编码的结果: 6L-Z5piv6ZyA6KaB57yW56CB55qE5a2X56ym5Liy5YaF5a65LS1CYXNlNjQuLi4A
	let TextDec = nbed64StringDecode(base64, isUtf8);
	console.log('这是Base64解码的结果: ' + TextDec);
	// console.log -> 这是Base64解码的结果: 这是需要编码的字符串内容--Base64...
```



## 11. nbed64BinaryEncode

### nbed64BinaryEncode() 标准的Base64编码，用于编码二进制，支持RFC4648安全规范

函数原型：

```javascript
/**
 * Nbed64 对二进制数据编码（ 注意：这是编码而非加密， 本函数与 nbed64BinaryDecode()为一对 ）
 * @param {ByteArray} byteArr 原数据。二进制字节数组，如：视频、音频、图片、文件等。
 * @param {boolean} isRFC4648 是否采用RFC4648编码映射规范，默认为：true。采用RFC4648规范编码的Base64符合URL安全，可用于HTTP协议与Ajax请求。
 * @return string 编码结果
 */
const nbed64BinaryEncode = (byteArr, isRFC4648 = true) =>  { ... }
```

DEMO：

```javascript
	let isRFC4648 = true;
	let image = new Uint8Array([55, 54, 53, 52, 51, 50, 49, 48, 47, 46]);;
	let base64 = nbed64BinaryEncode(image, isRFC4648);
	console.log('这是Base64编码的结果: ' + base64);
	// console.log -> 这是Base64编码的结果: NzY1NDMyMTAvLg
	let byteArray = nbed64BinaryDecode(base64);
	console.log('这是Base64解码的结果: ' + byteArray);
	// console.log -> 这是Base64解码的结果: 55,54,53,52,51,50,49,48,47,46

```



## 12. nbed64BinaryDecode

### nbed64BinaryDecode() 标准的Base64解码，用于解码二进制，支持RFC4648安全规范

函数原型：

```javascript
/**
 * Nbed64 解码成二进制数据（ 注意：这是解码而非解密， 本函数与 nbed64BinaryEncode()为一对 ）
 * @param {string} base64str base64格式编码的字符串
 * @return ByteArray 解码结果
 */
const nbed64BinaryDecode = (base64str) => { ... }
```

DEMO：

```javascript
	let isRFC4648 = true;
	let image = new Uint8Array([55, 54, 53, 52, 51, 50, 49, 48, 47, 46]);;
	let base64 = nbed64BinaryEncode(image, isRFC4648);
	console.log('这是Base64编码的结果: ' + base64);
	// console.log -> 这是Base64编码的结果: NzY1NDMyMTAvLg
	let byteArray = nbed64BinaryDecode(base64);
	console.log('这是Base64解码的结果: ' + byteArray);
	// console.log -> 这是Base64解码的结果: 55,54,53,52,51,50,49,48,47,46
```


# 扩展知识阅读

## 动态加密的作用和原理？

+ 动态加密存在的作用和意义就是为了：保护Key，防逆向。注意，此处所指的防逆与非对称加密算法的本质不同。对称加密均有个缺陷：攻击者可通过网络抓包分析来逆向推算原始的Key! 如此一来，即使Key通过服务端非对称加密分发也仍然失去意义。简单的讲就是, 只要攻击者有输入窗口，无论你把key保护的多好也没有意义! 

+ 通常, 非对称传输密钥的目的是保护服务端分发Key的过程，却无法保护Key的计算结果，要想保护Key的计算结果以及Key本身不被逆向，就需要掩码算法的参与。简称：动态加密！此过程用文字描述比较抽象难懂，我们直接看推导吧：假设，已知加密为减法，解密为加法(注: 可互换, 这不是重点)，当攻击者输入了'A'，加密过程为：data=65, key=10，res=data-key, 结果=55，攻击者抓包可得到55，'A'已知为65，逆向所得：key = 65 -55，于是Key=10 被逆向了。

+ 您可能会问，若我的Data很长，key也很长，还能逆向吗？答案是：能，原理不变！当然，前提是攻击者有一个用于数据包捕获和分析的输入窗口！若我们把加减法改成位异或呢？没用，原理不变，这里用加减法仅为了方便推导。好了，现在我们来看看掩码是如何保护Key的--假定掩码为128，当攻击者输入了'A'，加密过程为：data=65, mask=128, key=10，则 res = data - (mask | key) , 结果=183，已知位或运算不可逆向, 现在key还能被逆向吗? 答案是: 不能! 当然不能! 

+ 读到这里, 您可能疑惑掩码参与为何又叫动态加密呢? 因为通常掩码就是随机数组, 且与被加密数据合并, 细心的读者可能已经明白-----data不变, Key也不变, 但加密后的结果却每次都变, 因为mask每次都会变呀! 每次都变, 还不够动态吗?! 如此一来, 不但key安全了, res也更安全啦!

+ 理论上，除量子密钥分发以外，不存在绝对的安全。密钥通过服务端分发的过程必然需要通过网络传输，这便给了攻击者抓包的机会，您可能会说，我通过非对称加密后再传输key不就安全了吗？答案是NO！攻击者可以通过代理人伪造证书来欺骗服务端，从而拿到key。您可能又会说，那我就不传输，直接在APP里面写死，这样抓包不到总安全了吧？答案还是NO！首先，不论key从服务端分发也罢，在APP内置也罢，如果您使用的是非动态加密，那么不好意，攻击者直接抓加密结果包就能逆向推导出key！其次即使使用动态加密，安不安全，那要问您给APP套的壳够不够硬？！至少理论上是没有绝对硬度的壳！

+ 现在，您是否非常的疑惑？既然怎么折腾都不安全，那我们还折腾个啥？！这，是个好问题！答案很简单：一切都是为了增加攻击者的代价和成本！虽然任何手段都非绝对安全，但毫无疑问，任何手段都会增加破译的成本！防护手段的叠加也必然会叠加破译的代价，当攻击者破译所付出的代价，远大与他的收益时，谁还会做亏本的买卖？他自然也就放弃了！当你破译某个系统可以获利一百万，但代价却要一个亿，除了放弃, 你还能怎样？！！！通常而言，破译的成本都远大于加密的成本，这，就是加密的作用和意义！



## RFC4648是什么？
+ 它是一套保障URL编码安全的规范。众所周知，在Ajax请求中，'/'、'+'均不可在GET参数中出现，否则需要URL编码。在URL规范中，'/'代表路径，'+'代表空格，'='代表解析，但Base64映射表中偏偏包含了这些字符，而采用RFC4648规范就可以解决这个问题。怎么解决？很简单：用'-'替换原来的'+'，用'_'替换原来的'/'，且尾部不填充'='

+ 于是大家在国际上约定好都使用这个方案，这，便是Base64的RFC4648编码规范的由来。用一句话来讲就是：大家先约定一个标准，然后都遵循这个标准，目的是为了解决问题。



## 在JavsScript中，String的默认编码是UTF-16，还是UTF-8？
+ 在ECMAScript规范和MDN中都明确指出：String为UTF-16编码，实事上也的确是UTF-16。因此，String类型中存放的任意字符均在内存中占用2个字节，不论英文、中文、德文、日文、阿拉伯文...均为2个字节。

## UTF-16的优点和缺点
+ UTF-16的优点：非英文场景中比UTF-8节省内存，以中文为例，UTF-8至少需要3个字节，而UTF-16只用两个字节。

+ UTF-16的缺点：不兼容ASCII编码规范，此为强调重点!这意味着表示英文字符也必须使用双字节，高位空比特[0,0,0,0,0,0,0,0]是必须存在的，任何时间，都不能因压缩需求而丢弃高位中的空字节！！！否则将会造成不可逆转的解码错误（此处划重点, 简单点讲就是: 会乱码，而且是不可逆的乱码）！

+ 注意事项：Ajax请求会根据页面编码类型的定义而自动转换，也就是您在HTML中定义了什么编码，浏览器就会自动转换。所以后端收到的字符串通常会是UTF-8，但，请不要误以为string类型默认编码就是UTF-8，这很重要！UTF-8表示中文需3个字节，UTF-16表示中文只需2个字节。

+ 建议：UTF-16可以减少网络传输成本，但前提是您熟悉UTF-16编码并能运用自如，否则，请使用简易通用的UTF-8。本知识点主要面向对本源码有二次变种开发的开发者，无二次开发需求的使用者可不必掌握。谢谢！！！



# 关于作者

### 作者的博客

+ 地址： https://blog.csdn.net/qq_16661383?type=blog 

+ **您有任何建议或疑问，均可来此留言。谢谢！！！**

### 作者的QQ

+ **267949** 
+ 添加时，请说明来意，谢谢！！！



