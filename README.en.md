# Nbed64.js

# README Language | 语言 | 言語 | 언어

　　　　CN : *自述文件支持以下语种，其中，中文为作者的母语，因此表达分歧最少！如果您有能力阅读中文，请尽量阅读中文版的 README.md。谢谢！！！*

　　　　EN : *The readme file supports the following languages, of which Chinese is the author's native language, so the expression differences are the least! If you have the ability to read Chinese, please try to read the Chinese version of README.md. thank you !!!*

　　　　JP  : *Readmeファイルは次の言語をサポートしています、ここで、中国語は著者の母国語であり、そのため、表現の違いが最も少ない！中国語を読む能力があれば、できるだけ中国語版のREADME.mdを読んでください。ありがとうございます！！！*

　　　　KR : *자술문건은 다음과 같은 언어를 지원하는데 그중 중국어는 저자의 모국어이기에 표현의견상이가 가장 적다.중국어를 읽을 수 있는 능력이 있다면 가능한 한 중국어판 README.md를 읽으십시오.감사합니다 ! ! !*


+ [README.md] **这是简体中文版（默认）**                        [Click To Read Chinese Version]
+ [README.EN.md] **This is the English version**               [Click To Read English Version]
+ [README.JP.md] **これは日本語版です**                          [Click To Read Japanese Version]
+ [README.KR.md] **한국어 버전입니다**                           [Click To Read Korean Version]

[README.md]: https://github.com/love915sss/js-nbed64-base64/blob/master/README.md
[Click To Read Chinese Version]: https://github.com/love915sss/js-nbed64-base64/blob/master/README.md
[README.EN.md]: https://github.com/love915sss/js-nbed64-base64/blob/master/README.en.md
[Click To Read English Version]: https://github.com/love915sss/js-nbed64-base64/blob/master/README.en.md
[README.JP.md]: https://github.com/love915sss/js-nbed64-base64/blob/master/README.jp.md
[Click To Read Japanese Version]: https://github.com/love915sss/js-nbed64-base64/blob/master/README.jp.md
[README.KR.md]: https://github.com/love915sss/js-nbed64-base64/blob/master/README.kr.md
[Click To Read Korean Version]: https://github.com/love915sss/js-nbed64-base64/blob/master/README.kr.md




# Design intention and features of Nbed64

1. Before the advent of Nbed64, There are many symmetric encryption algorithms on the market, Like AES, DES, TDEA, RC4, RC5, etc.They are famous,So what is the significance of designing Nbed64?The answer is: readability+versatility+lightweight.Traditional encryption algorithms have one common feature:It mainly serves binary data security.The encrypted result cannot be stringed,But not stringing means:No input, no readability,It is not convenient for printing and debugging,wait...This is not conducive to modern visual interaction,Especially, it is inconvenient to operate binary data in script languages such as JS and PHP!In WEB applications, And in Web-based APP, Traditional encryption is not convenient for data interaction.What shall do? People usually have two choices:1. Convert to hexadecimal text, 2. Convert to Base64 text. As a result, posts from AES and DES to Base64 are everywhere on the Internet. You see, after a turn, the problem comes back----So why don't we implement encryption directly on the basis of Base64 encoding? Why take off your pants and fart( to overegg the pudding || to put butter on bacon )?! Therefore,Create a lightweight, universal, readable and out-of-the-box encryption scheme, This is the original intention of the author to design Nbed64!

2. Nbed64 is a set of [multilingual]+[cross-platform] encryption and decryption libraries, Nbed64 is now open source in the following languages: GO, C #, C/C++, Java, Python, JavaScript, PHP, E, And other upcoming programming language versions.This means that, In all major programming languages, Any data encrypted and decrypted using Nbed64,  Data can be exchanged without obstacles. For developers in different languages, Nbed64 function name, Parameter name, Encryption results, They are consistent and unified. let put it another way: Using Nbed64, No matter what language the front-end and back-end developers use, The understanding of the results is unified, There are no differences, No barriers, Data interaction is unified. 

3. Nbed64 is the abbreviation of Network Bridge Encrypt Decrypt Base64, It is a set of universal, open source, cross-language, cross-platform excellent encryption solution library. The origin of this set of algorithms, It was first designed by the CEO of China Network Bridge Network Technology in 2014, There was only one version of C++, Subsequently, it continued to expand and iterate in its company's production environment, It has developed into many language versions today. Therefore, 'nb' refers to the name of the Network Bridge company,  'ed' refers to encryption and decryption, '64' means that the algorithm is based on the Base64 encoding framework.  be careful, Please don't mistake 'nbed' for 'asymmetrical...', Please do not consider 'nbed' as' asymmetric... ' Encryption algorithm, This understanding is wrong! It is emphasized here that,  And the upgraded symmetric encryption scheme, People like to call it: Dynamic encryption scheme! 

4. Nbed64 encodes character sets by internal algorithms, For example: UTF-8, UTF-16, GBK, etc. It does not depend on the API of the running platform, It does not depend on the API of the running environment. This means: The results of running on different platforms such as Windows, Linux, Unix, Mac, Android and Ios are consistent, safe, stable. When you use cross-platform language development, Don't care about the differences between different system platforms, There is no need to care about various coding related API. You can use it out of the box, The coding problem has nothing to do with you. 

5. When Nbed64 decrypts a string, It is automatically converted to the default encoding of the current environment or current programming language. For example, in the JavaScript environment, The decrypted string will be automatically converted to UTF-16, Because the default encoding of JavaScript is UTF-16, Only UTF-16 will not garble. To emphasize, Here, "automatic" means: Whether the original content is UTF-8 encoding,  Or whetherGBK code, As long as you decrypt the string in JS,  it will always be UTF-16, Similarly, in C/C++, decryption is always UTF-8. This design is very convenient and important, as everyone knows, The default encoding of different programming languages is different, This means that cross-language data interaction needs to transform and encode each other, When the default encoding of each other is different, Developers need to know the other party's encoding to convert,  This process is tedious and painful. And Nbed64 has solved this awkward, Nbed64 plays the role of automatic translator in decryption. This allows developers to freely exchange data, You don't have to distract yourself from dealing with the other party's coding problem. 

6. Why does Nbed64 choose Base64 as the encryption framework? Because there are two common schemes for converting binary to character set: Hexadecimal text and Base64 text. Hexadecimal requires two characters to represent a byte, Therefore, the memory size occupied by hexadecimal is: X * 2, So, it will waste once as much space. Base64 uses 4 characters to represent 3 bytes, Therefore, the size of memory occupied by Base64 is: X/3 * 4, SO, only 1/3 of the space is wasted. In today's era of network dominance, Nbed64 can only choose the more economical Base64 encoding framework. On the premise of meeting the demand, Of course, we should maintain the spirit of thrift. 

7. Although the algorithm of Nbed64 is based on the Base64 encoding framework, However, the algorithm has been greatly optimized, The performance is much higher than the traditional Base64 algorithm. The author has made comparisons under multiple platforms, Take 10MB test data as an example, Nbed64 decrypted data is more than 100 times faster than the traditional base64 decoded data on average! The main reasons are: When traditional Base64 decoding, Find the index by traversing the string in the Base64 mapping table, Nbed64 directly deduces the index through calculation, Therefore, a layer of for () loop is reduced, Plus other optimizations, The performance has been greatly improved. After pressure test, Even in mobile browsers, Using nbed64.js to encrypt (encode) 512MB of data can also achieve fast results，In C/C++, JAVA and other languages, Performance is naturally faster and better.

8. Nbed64 uses BSD open source protocol----BSD is one of the most friendly open source protocols today. This means: Any individual, organization, enterprise or institution can modify it at will, Forwarding, sharing, commercial use Nbed64 encryption library.


# Nbed64 Main capabilities of encryption and decryption scheme
### Nbed64 A total of 12 APIs are provided, which are divided into 3 groups with 4 APIs in each group. Respectively:
1. Dynamic encryption and decryption API group
	* [nbed64StringEncryptEx()]  Dynamic encryption string, The data remains unchanged, The key remains unchanged, **However, the encryption results are not repeated,That is, the result of each execution will change**
	* [nbed64StringDecryptEx()]  Dynamic decryption string, And nbed64StringEncryptEx() It's a pair
	* [nbed64BinaryEncryptEx()]  Dynamically encrypt binary, The data remains unchanged, The key remains unchanged, **However, the encryption results are not repeated,That is, the result of each execution will change**
	* [nbed64BinaryDecryptEx()]  Dynamically decrypt binary, And nbed64BinaryEncryptEx() It's a pair

2. Symmetrical encryption and decryption API group
	* [nbed64StringEncrypt()]  Symmetrical encryption string, The data remains unchanged, The key remains unchanged, **The encryption result remains the same, changeless **
	* [nbed64StringDecrypt()]  Symmetrical decryption string, And nbed64StringEncrypt() It's a pair
	* [nbed64BinaryEncrypt()]  Symmetrically encrypted binary, The data remains unchanged, The key remains unchanged, **The encryption result remains the same, changeless **
	* [nbed64BinaryDecrypt()]  Symmetrically decrypt binary, And nbed64BinaryEncrypt() It's a pair

3. Standard Base64 encoding and decoding API group
	* [nbed64StringEncode()]  Standard Base64 encoding, Used as encoding string,  Support RFC4648 security specification
	* [nbed64StringDecode()]  Standard Base64 decoding, Used as decoding string, Support RFC4648 security specification
	* [nbed64BinaryEncode()]  Standard Base64 encoding, Used as encoding binary, Support RFC4648 security specification
	* [nbed64BinaryDecode()]  Standard Base64 decoding, Used as decode binary, Support RFC4648 security specification

*Statement: Dynamic encryption is an upgraded version of (traditional) symmetric encryption, But in essence, it is symmetric encryption, But in essence, it is still symmetric encryption, However, dynamic encryption is more secure and reliable than traditional symmetric encryption. If you are interested in this research, Please move *[Benefits and principles of dynamic encryption]*Learn more.*

[nbed64StringEncryptEx()]: https://github.com/love915sss/js-nbed64-base64/blob/master/#01-nbed64stringencryptex
[nbed64StringDecryptEx()]: https://github.com/love915sss/js-nbed64-base64/blob/master/#02-nbed64StringDecryptEx
[nbed64BinaryEncryptEx()]: https://github.com/love915sss/js-nbed64-base64/blob/master/#03-nbed64BinaryEncryptEx
[nbed64BinaryDecryptEx()]: https://github.com/love915sss/js-nbed64-base64/blob/master/#04-nbed64BinaryDecryptEx
[nbed64StringEncrypt()]: https://github.com/love915sss/js-nbed64-base64/blob/master/#05-nbed64StringEncrypt
[nbed64StringDecrypt()]: https://github.com/love915sss/js-nbed64-base64/blob/master/#06-nbed64StringDecrypt
[nbed64BinaryEncrypt()]: https://github.com/love915sss/js-nbed64-base64/blob/master/#07-nbed64BinaryEncrypt
[nbed64BinaryDecrypt()]: https://github.com/love915sss/js-nbed64-base64/blob/master/#08-nbed64BinaryDecrypt
[nbed64StringEncode()]: https://github.com/love915sss/js-nbed64-base64/blob/master/#09-nbed64StringEncode
[nbed64StringDecode()]: https://github.com/love915sss/js-nbed64-base64/blob/master/#10-nbed64StringDecode
[nbed64BinaryEncode()]: https://github.com/love915sss/js-nbed64-base64/blob/master/#11-nbed64BinaryEncode
[nbed64BinaryDecode()]: https://github.com/love915sss/js-nbed64-base64/blob/master/#12-nbed64BinaryDecode
[Benefits and principles of dynamic encryption]: https://github.com/love915sss/js-nbed64-base64/blob/master/#Benefits and principles of dynamic encryption


# 相关链接

### Nbed64 Open source programming language version on GitHub
+ [C-Nbed64] Authors use C/C++ Language version
+ [Go-Nbed64] Authors use Golang Language version
+ [JS-Nbed64] Authors use JavaScript Language version
+ [VB-Nbed64] Authors use Visual Basic Language version
+ [CS-Nbed64] Authors use C Sharp |  C# Language version
+ [PHP-Nbed64] Authors use PHP Language version
+ [JAVA-Nbed64] Authors use JAVA Language version
+ [Python-Nbed64] Authors use Python Language version

*Statement: Because writing Demo and README requires a lot of time and effort, Therefore, the author cannot Push all the above language versions in a short time. but don't worry, The author will not relax the schedule and change the plan,  It is only a matter of time to fill the vacancy.*

[c-Nbed64]: https://github.com/love915sss/c-Nbed64-base64/
[Go-Nbed64]: https://github.com/love915sss/Go-Nbed64-base64/
[JS-Nbed64]: https://github.com/love915sss/js-nbed64-base64/blob/master/
[VB-Nbed64]: https://github.com/love915sss/VB-Nbed64-base64/
[CS-Nbed64]: https://github.com/love915sss/CS-Nbed64-base64/
[PHP-Nbed64]: https://github.com/love915sss/PHP-Nbed64-base64/
[JAVA-Nbed64]: https://github.com/love915sss/JAVA-Nbed64-base64/
[Python-Nbed64]: https://github.com/love915sss/Python-Nbed64-base64/


# Install And Include

## install

```shell
$ npm install --save js-nbed64
```
*If you cannot install through npm, it doesn't matter. Any of the following methods will have the same effect...*

## Include

### In browser

Local... You need to download and decompress nbed64.zip on GitHub or official website, then...

```html
<script src="nbed64.es5.all.js">/*完整版----研究环境时使用*/</script>
<script src="nbed64.es5.min.js">/*迷你版----生产环境时使用*/</script>
```

… or Directly from CDN.In this way, you do not have to download and install.

```html
<script src="https://nbed64.oss-cn-hongkong.aliyuncs.com/nbed64.se5.all.js">/*Full version----Used when studying the environment*/</script>
<script src="https://nbed64.oss-cn-hongkong.aliyuncs.com/nbed64.se5.min.js">/*Compressed version---Used in production environment*/</script>
```

*Although the above embedding methods are very convenient, But it is also easy to pollute ` window`，So，It is recommended that you use the following ES6 standard embedding mode...*

### As an ES6 Module，browser || nodejs || uin-app || APICloud

Local... You need to download and decompress nbed64.zip on GitHub or official website, then...

```javascript
	import * as nbed64 from 'Nbed64 .es6.min';
```

*or*

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



… or Directly from CDN.In this way, you do not have to download and install.


```javascript
	import * as nbed64 from 'https://nbed64.oss-cn-hongkong.aliyuncs.com/Nbed64 .es6.min';
```

*or*

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



# Function Prototype && DEMO

## 01. nbed64StringEncryptEx

### nbed64StringEncryptEx() Be used as dynamic encryption string, The data remains unchanged, The key remains unchanged, **But the encryption result is not repeated**

Function Prototype:

```javascript
/**
 * Nbed64 An upgraded version of string encryption, Short name: string dynamic encryption （ This function And nbed64StringDecryptEx() It's a pair )
 * @param {string} str Source data.
 * @param {string} key Theoretically, the length of the key is proportional to the difficulty of the reverse.
 * @param {boolean} isUtf8 Whether to use UTF-8 encoding format. The default value is true. If set to false, UTF-16 encoding is used.
 * be careful:  This refers to the encoding before encryption, not the base64 encoding after encryption. Base64 does not need to be encoded. In other words, this parameter refers to the decrypted string encoding.
 * The default encoding of JS is UTF-16, but UTF-16 is not friendly. Many programming languages and server environments do not support UTF-16.
 * @param {number} maskNumber The number of masks. The default value is 32, Range: 32 - 65535. The lower limit is 32 and the upper limit is 65535.
 * @return string Encryption results in Base64 format
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
 */
```



## 02. nbed64StringDecryptEx

### nbed64StringDecryptEx() Be used as Dynamic decryption string （ This function And nbed64StringEncryptEx() It's a pair )

Function Prototype:

```javascript
/**
 * Base64 An upgraded version of string decrypted, Short name: Dynamic decryption strings（ This function And nbed64StringEncryptEx() It's a pair )
 * @param {string} base64str Encrypted string in base64 format
 * @param {string} key Please keep the settings exactly the same as the encryption settings.
 * @param {boolean} isUtf8 Whether to use UTF-8 encoding format. Please keep the settings exactly the same as the encryption settings.
 * @return string Decrypt result( UTF-16 encoding format ).be careful:  For ease of use, The decryption result will be automatically converted to the default encoding of the current program language, It is easy to use it out of the box, and the secondary coding is omitted. JS default encoding: UTF-16
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
 */
```



## 03. nbed64BinaryEncryptEx

### nbed64BinaryEncryptEx() Be used as Dynamically encrypt binary, The data remains unchanged, The key remains unchanged, **But the encryption result is not repeated**

Function Prototype:

```javascript
/**
 * Base64 An upgraded version of Binary decrypted,  Short name: Binary dynamic encryption（ This function And nbed64BinaryDecryptEx() It's a pair )
 * @param {ByteArray} byteArr Source data. Binary byte array, such as video, audio, pictures, files, etc.
 * @param {string} key Theoretically, the length of the key is proportional to the difficulty of the reverse.
 * @param {number} maskNumber The number of masks. The default value is 32, Range: 32 - 65535. The lower limit is 32 and the upper limit is 65535.
 * @return string Encryption results in Base64 format
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
 */
```



## 04. nbed64BinaryDecryptEx

### nbed64BinaryDecryptEx() Be used as Dynamically decrypt binary, And nbed64BinaryEncryptEx() It's a pair

Function Prototype:

```javascript
/**
 * Base64 An upgraded version of Binary decrypted,  Short name: Binary dynamic decryption（ This function And nbed64BinaryEncryptEx() It's a pair )
 * @param {string} base64str Encrypted string in base64 format
 * @param {string} key Please keep the settings exactly the same as the encryption settings.
 * @return ByteArray Decrypt result
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

### nbed64StringEncrypt() Be used as Symmetrical encryption string, The data remains unchanged, The key remains unchanged, **Encryption results in Base64 format也不变**

Function Prototype:

```javascript
/**
/**
 * Base64 Encrypt string（ This function And nbed64StringDecrypt() It's a pair )
 * @param {string} str Source data.
 * @param {string} key Theoretically, the length of the key is proportional to the difficulty of the reverse.
 * @param {boolean} isUtf8 Whether to use UTF-8 encoding format. The default value is true. If set to false, UTF-16 encoding is used.
 * be careful: This refers to the encoding before encryption, not the base64 encoding after encryption. Base64 does not need to be encoded.In other words, this parameter refers to the decrypted string encoding.
 * The default encoding of JS is UTF-16, but UTF-16 is not friendly. Many programming languages and server environments do not support UTF-16.
 * @param {boolean} isRFC4648 Whether to adopt RFC4648 coding mapping specification, The default value is true. Base64 encoded by RFC4648 conforms to URL security, It can be used for HTTP protocol and Ajax requests.
 * @return string Encryption results in Base64 format
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

### nbed64StringDecrypt() Be used as Symmetrical decryption string, And nbed64StringEncrypt() It's a pair

Function Prototype:

```javascript
/**
 * Base64 Decrypt to string（ This function And nbed64StringEncrypt() It's a pair )
 * @param {string} base64str Encrypted string in base64 format
 * @param {string} key Please keep the settings exactly the same as the encryption settings.
 * @param {boolean} isUtf8 Whether to use UTF-8 encoding format. Please keep the settings exactly the same as the encryption settings.
 * @return string Decrypt result( UTF-16 encoding format ).be careful:  For ease of use, The decryption result will be automatically converted to the default encoding of the current program language, It is easy to use it out of the box, and the secondary coding is omitted. JS default encoding: UTF-16
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

### nbed64BinaryEncrypt() Be used as Symmetrically encrypted binary, The data remains unchanged, The key remains unchanged, **Encryption results in Base64 format也不变**

Function Prototype:

```javascript
/**
 * Base64 Encrypt binary data（ This function And nbed64BinaryDecrypt() It's a pair )
 * @param {ByteArray} byteArr Source data. Binary byte array, such as video, audio, pictures, files, etc.
 * @param {string} key Theoretically, the length of the key is proportional to the difficulty of the reverse.
 * @param {boolean} isRFC4648 Whether to adopt RFC4648 coding mapping specification, The default value is true. Base64 encoded by RFC4648 conforms to URL security, It can be used for HTTP protocol and Ajax requests.
 * @return string Encryption results in Base64 format
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

### nbed64BinaryDecrypt() Be used as Symmetrically decrypt binary, And nbed64BinaryEncrypt() It's a pair

Function Prototype:

```javascript
/**
 * Base64 Decrypt to binary data（ This function And nbed64BinaryEncrypt() It's a pair )
 * @param {string} base64str Encrypted string in base64 format
 * @param {string} key Please keep the settings exactly the same as the encryption settings.
 * @return ByteArray Decrypt result
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

### nbed64StringEncode() Standard Base64 encoding, Used as encoding string, Support RFC4648 security specification

Function Prototype:

```javascript
/**
 * Nbed64  Encode string （ be careful: This is encoding, not encryption ， （ This function And nbed64StringDecode() It's a pair )
 * @param {string} str Source data.
 * @param {boolean} isUtf8 Whether to use UTF-8 encoding format. The default value is true. If set to false, UTF-16 encoding is used.
 * be careful: This refers to the encoding before encryption, not the base64 encoding after encryption. Base64 does not need to be encoded.In other words, this parameter refers to the decrypted string encoding.
 * The default encoding of JS is UTF-16, but UTF-16 is not friendly. Many programming languages and server environments do not support UTF-16.
 * @param {boolean} isRFC4648 Whether to adopt RFC4648 coding mapping specification, The default value is true. Base64 encoded by RFC4648 conforms to URL security, It can be used for HTTP protocol and Ajax requests.
 * @return string Encoding result
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

### nbed64StringDecode() Standard Base64 decoding, Used as decoding string, Support RFC4648 security specification

Function Prototype:

```javascript
/**
 * Nbed64 Decode to string（ be careful: This is decoding, not decryption， （ This function And nbed64StringEncode() It's a pair )
 * @param {string} base64str Encrypted string in base64 format
 * @param {boolean} isUtf8 Whether to use UTF-8 encoding format. The default value is true. If set to false, UTF-16 encoding is used.
 * @return string Decrypt result( UTF-16 encoding format ).be careful:  For ease of use, The decryption result will be automatically converted to the default encoding of the current program language, It is easy to use it out of the box, and the secondary coding is omitted. JS default encoding: UTF-16
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

### nbed64BinaryEncode() Standard Base64 encoding, Used as encoding binary, Support RFC4648 security specification

Function Prototype:

```javascript
/**
 * Nbed64 Encode binary data（ be careful: This is encoding, not encryption ， （ This function And nbed64BinaryDecode() It's a pair )
 * @param {ByteArray} byteArr Source data. Binary byte array, such as video, audio, pictures, files, etc.
 * @param {boolean} isRFC4648 Whether to adopt RFC4648 coding mapping specification, The default value is true. Base64 encoded by RFC4648 conforms to URL security, It can be used for HTTP protocol and Ajax requests.
 * @return string Encoding result
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

### nbed64BinaryDecode() Standard Base64 decoding, Used as decode binary, Support RFC4648 security specification

Function Prototype:

```javascript
/**
 * Nbed64 Decode to binary data（ be careful: This is decoding, not decryption， （ This function And nbed64BinaryEncode() It's a pair )
 * @param {string} base64str Encrypted string in base64 format
 * @return ByteArray Decoding result
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


# Extended knowledge reading

## Benefits and principles of dynamic encryption？

+ The purpose and significance of dynamic encryption is to: Protect the key and prevent reverse. Note that the essence of anti-inversion and asymmetric encryption algorithms mentioned here is different. Symmetric encryption usually has one flaw: Attackers can analyze packets through network, can calculate the original Key in reverse! In this way, Even if the key is distributed through asymmetric encryption on the server, Still meaningless. In short, as long as the attacker has an output window, no matter how well you protect the key, it is meaningless!

+ Generally, The purpose of asymmetric key transmission is to protect the process of key distribution by the server, However, the calculation result of Key cannot be protected, To protect the calculation result of the key and the key itself from being reversed, We need the mask algorithm to participate in it. Short name: Dynamic encryption!  This process is more abstract and difficult to understand in words, This process is very abstract and inconvenient to describe in words, 
Let's look at the derivation directly: Assume that encryption is known as subtraction and decryption is known as addition ( Statement: This is not the point. It is interchangeable ), When the attacker enters' A ', The encryption process is: data=65, key=10，res=data-key,  Result=55, Attackers can get 55 when capturing packets, Know that 'A' is 65, Reverse calculation: key = 65 -55，So, Key=10 Is computable.This is the disadvantage of traditional symmetric encryption!

+ You may ask, If my data is very long, The key is also very long, Can attackers reverse? The answer is: Yes, the principle remains the same! Of course, the premise is that the attacker has an input window for packet capturing and analysis! You may also ask, if we change addition and subtraction to XOR, can we defense it? It's useless. The principle remains the same. The addition and subtraction method is used here for the convenience of deduction. OK, now let's see how the mask protects the key----Assuming the mask is 128, when the attacker enters' A ', The encryption process is: data=65, mask=128, key=10，res = data - (mask | key) ,  Result=183，The known bit or operation cannot be reversed, Can key be reversed now? The answer is: No! Of course not! 

+ After reading this, you may wonder why mask participation is also called dynamic encryption?Because the mask is usually a random array and is combined with the encrypted data, the careful reader may have understood-----The data and key remain the same, but the encrypted result changes every time, because the mask changes every time! Every time it changes, isn't it dynamic enough?!  Is it appropriate to describe it with dynamic?  In this way, not only the key is safe, but also the result is safer!You may also think that I will not transmit it, but write it directly in the APP, so that the attacker cannot catch the data packet? The answer is still: NO! 

+ In theory, there is no absolute security except quantum key distribution. The process of key distribution through the server must be transmitted through the network, which gives attackers the opportunity to capture packets. You may wonder whether it is safe for me to transmit the key after using asymmetric encryption? The answer is: NO! The attacker can cheat the server by forging the certificate by the agent, thus obtaining the key. first, Whether the key is distributed from the server, Or built-in in APP, If you are using non-dynamic encryption, And the attacker has an input window, So sorry, Attackers can directly grab the encrypted result package and inversely derive the key! Then, even with dynamic encryption, How high is the safety factor? What's the hardness of the shell you gave the APP cover?! At least in theory, there is no absolute hardness shell in the world!

+ Now, are you very confused?Since it is not safe to toss and turn, What's the point of our tossing and turning?! Well, this is a good question! The answer is simple: Everything is to increase the price and cost of attackers! Although no means is absolutely safe, there is no doubt that any means will increase the cost of deciphering! The superposition of protective measures will inevitably add to the cost of cracking. When the cost of the attacker's cracking is far greater than his profit, who will do the business at a loss? He is bound to give up! When cracking a system can make a profit of one million dollars, but the cost is 100 million dollars, Besides giving up, do you have any other choice?!!! Generally speaking, the cost of cracking is far greater than the cost of encryption, This is the role and significance of encryption!



## What is RFC4648?
+ It is a set of specifications to ensure the security of URL encoding. As we all know, in Ajax requests, '/' And '+', None of them can appear in the GET parameter,Otherwise, URL encoding is required. In the URL specification, '/' represents the path, '+' represents the Spacebar, and '=' represents the analysis, However, these characters are included in the Base64 mapping table, The RFC4648 specification can solve this problem. How to solve it? Very simple: replace the original '+' with '-', and use '_' Replace the original '/', and the tail is not filled with '='

+ So everyone agreed to use this scheme internationally, which is the origin of Base64's RFC4648 encoding specification. Now, we have customized this standard. As long as we comply with this standard, the problem will be solved.



## In JavsScript, is the default encoding of String UTF-16 or UTF-8?
+ It is clearly stated in the ECMAScript specification and MDN: String is encoded for UTF-16, which is actually UTF-16. Therefore, any character stored in a String type occupies 2 bytes in memory, No matter English, Chinese, German, Japanese, Arabic Will occupy 2 bytes.

## Advantages and disadvantages of UTF-16
+ Advantages of UTF-16: In non-English scenarios, it saves memory than UTF-8. For example, in Chinese, UTF-8 requires at least 3 bytes, while UTF-16 only uses 2 bytes.

+ Disadvantages of UTF-16: it is not compatible with ASCII encoding specification, which is the emphasis! This means that the English characters must also use double bytes, and the high empty bits [0,0,0,0,0,0,0,0] must exist. At any time, the empty bytes in the high bits cannot be discarded due to the compression requirements!!! Otherwise, it will cause irreversible decoding error (highlight here, simply say: it will be garbled, and it is irreversible garbled)!

+ Note: Ajax requests will be automatically converted according to the definition of page encoding type, that is, the browser will automatically convert what encoding you define in HTML. So the string received by the backend will usually be UTF-8. However, it is important not to mistake the default encoding of string type for UTF-8! UTF-8 means 3 bytes for Chinese, and UTF-16 means only 2 bytes for Chinese.

+ Suggestion: UTF-16 can reduce network transmission costs, but only if you are familiar with UTF-16 coding and can use it freely, otherwise, please use simple and universal UTF-8. This knowledge point is mainly for developers who have secondary variant development of this source code. Users without secondary development requirements need not master it. thank you!!!



# About the author

### Author's blog

+  https://blog.csdn.net/qq_16661383?type=blog 

+ **If you have any suggestions or questions, you can leave a message here. thank you!!!**

### Author's QQ

+ **267949** 
+ Please explain your intention when adding, thank you!!!

### The author's prayer

+ May the world peace and technology have no borders...

