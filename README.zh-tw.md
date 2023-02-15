# Nbed64.js

## 下列為支持閱讀的其它語言：

+ [English] , [简体中文] , [繁體中文] , [日本語] , [한국어] , [Polski] , [Français] , [Español] , [Português] 

## 溫馨提示：

+  *自述文件支持以下語種，其中，中文為作者的母語，因此表達分歧最少！如果您有能力閱讀中文，請盡量閱讀中文版的 README.md。謝謝！！！* 

[English]: https://github.com/love915sss/js-nbed64-base64/blob/master/README.md
[简体中文]: https://github.com/love915sss/js-nbed64-base64/blob/master/README.zh-cn.md
[繁體中文]: https://github.com/love915sss/js-nbed64-base64/blob/master/README.zh-tw.md
[日本語]: https://github.com/love915sss/js-nbed64-base64/blob/master/README.ja.md
[한국어]: https://github.com/love915sss/js-nbed64-base64/blob/master/README.kr.md
[Polski]: https://github.com/love915sss/js-nbed64-base64/blob/master/README.pl.md
[Français]: https://github.com/love915sss/js-nbed64-base64/blob/master/README.fr.md
[Español]: https://github.com/love915sss/js-nbed64-base64/blob/master/README.es.md
[Português]: https://github.com/love915sss/js-nbed64-base64/blob/master/README.pt.md



# Nbed64加解密方案的主要能力

### Nbed64共提供了12個API，分為3組，每組4個API。分別為：

1. 動態加解密API組
	* [nbed64StringEncryptEx()]  動態加密字符串，數據不變，密鑰不變，**但加密結果不重復，次次都變**
	* [nbed64StringDecryptEx()]  動態解密字符串，與 nbed64StringEncryptEx()是一對
	* [nbed64BinaryEncryptEx()]  動態加密二進製，數據不變，密鑰不變，**但加密結果不重復，次次都變**
	* [nbed64BinaryDecryptEx()]  動態解密二進製，與 nbed64BinaryEncryptEx()是一對

2. 對稱加解密API組
	* [nbed64StringEncrypt()]  對稱加密字符串，數據不變，密鑰不變，**加密結果也不變，固定不變的**
	* [nbed64StringDecrypt()]  對稱解密字符串，與 nbed64StringEncrypt()是一對
	* [nbed64BinaryEncrypt()]  對稱加密二進製，數據不變，密鑰不變，**加密結果也不變，固定不變的**
	* [nbed64BinaryDecrypt()]  對稱解密二進製，與 nbed64BinaryEncrypt()是一對

3. 標準Base64編解碼API組
	* [nbed64StringEncode()]  標準的Base64編碼，用於編碼字符串，支持RFC4648安全規範
	* [nbed64StringDecode()]  標準的Base64解碼，用於解碼字符串，支持RFC4648安全規範
	* [nbed64BinaryEncode()]  標準的Base64編碼，用於編碼二進製，支持RFC4648安全規範
	* [nbed64BinaryDecode()]  標準的Base64解碼，用於解碼二進製，支持RFC4648安全規範

*備註：動態加密是(傳統)對稱加密的升級版，但本質上，它還是對稱加密，但它比傳統的對稱加密更加安全可靠。如果您對此有研究興趣，請您移步 *[動態加密的作用和原理]*了解更多詳情。*

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
[動態加密的作用和原理]: https://github.com/love915sss/js-Nbed64-base64/#動態加密的作用和原理



# Nbed64的設計初衷與特性

1. 在Nbed64問世之前，市面上早就不缺對稱加密算法，像AES、DES、TDEA、RC4、RC5等...已如雷貫耳，那麽設計Nbed64的意義在哪裏？答案是：可讀性 + 通用性 + 輕量級。傳統加密算法均有一個共性：主要服務於二進製數據安全。加密的結果不能字符化，而不能字符化就意味著：沒有輸入性，也沒有可讀性，不方便打印，不方便調試，等等...這是不利於現代可視化交互的，尤其像JS、PHP等腳本語言操作二進製很不方便！在WEB應用中，以及基於WEB的APP中，傳統加密都很不方便作數據交互。怎麽辦呢，人們通常有兩個選擇：1. 轉換成十六進製文本，2. 轉換成Base64 文本。於是，網上到處都是AES、DES轉Base64的帖子。您看，轉了一圈，問題又回來了----那麽我們為什麽不直接在Base64編碼的基礎上來實現加密呢？為什麽要脫褲子放屁呢？！於是，打造一套輕量的、通用的、可讀的、開箱即用的加密方案，這，就是作者設計Nbed64的初衷！

2. Nbed64是一套[多語言] + [跨平臺]的加解密庫，Nbed64現已開源的語種有：GO版、C#版、C/C++版、Java版、Python版、JavaScript版、PHP版、E版，以及其它即將問世的語種版。這意味著，在所有主流編程語言中，但凡使用Nbed64加解密的數據，都均可無障礙交互。對不同語言的開發者，Nbed64的函數名，參數數量，參數位置， 執行結果，都是一致的、統一的。換句話說：使用Nbed64，前後端的開發者不論使用什麽語言，對結果的認識是統一的，是沒有分歧的，是可以無障礙交互數據的。

3. Nbed64是Network Bridge Encrypt Decrypt Base64的縮寫，它是一套通用的、開源的、跨語言的、跨平臺的卓越加密方案庫。這套庫的算法最早由合肥網橋網絡科技的CEO設計於2014年，當初僅有C++一個版本，隨後在其公司的生產環境中不斷擴充和叠代，發展成了今天的多語種版。因此nb指的就是網橋科技，ed指的是加密和解密，64指的是該算法基於Base64編碼框架。請不要誤以為nbed意指'非對稱的...'，這樣理解是錯誤的！強調一下， Nbed64是一套對稱的加密方案，以及升級版的對稱加密方案，人們很喜歡稱之為：動態加密方案！

4. Nbed64對字符集的編碼由內部算法實現，如：UTF-8，UTF-16，GBK等。它不依賴運行平臺的API，不依賴運行環境的API。這意味著：在Windows、Linux、Unix、Mac、Android、Ios等不同的平臺中運行的結果是一致的，安全的，穩定的。使用者使用跨平臺語言開發時不必關心各系統平臺之間的差異，也不必關心各種編碼API在不同系統平臺上使用的差異。開箱即用，編碼問題與您無關。

5. Nbed64解密字符串時，會自動轉換為當前語言的默認編碼。如JavaScript環境中，被解密的字符串會自動轉換為UTF-16，因為JavaScript的默認編碼就是UTF-16，也只有UTF-16才不會亂碼。強調一下，這裏"自動"所指的意思是：不論原內容是UTF-8編碼也好，是GBK編碼也罷，只要在JS裏解密字符串就必然是UTF-16，在C/C++裏解密就必然是UTF-8。這樣的設計很方便也很重要，眾所周知，不同編程語言的默認編碼是不同的，這意味著跨語言數據交互是需要彼此轉換編碼的，當彼此的默認編碼不同時，開發者需要知已知彼才能轉換編碼，這是繁瑣頭疼的過程。而Nbed64解決了這樣的尷尬，它在解密時扮演著自動翻譯者的工作。這讓開發者之間可以盡情的交互數據，而不必分散精力來處理彼此的編碼問題。

6. Nbed64為何選擇Base64作為加密框架呢？因為，二進製轉成字符集的常用方案有兩種：十六進製文本 和 Base64文本。其中十六進製需要兩個字符表示一個字節，因此，十六進製占用內存的尺寸為：X * 2，所以，會有1倍的空間浪費。而Base64則用4個字符表示3個字節，因此，Base64占用內存的尺寸為：X / 3 * 4，所以，只有3分之1的空間浪費。在網絡當道的今天，Nbed64只能選擇更節約的Base64編碼框架。同樣能滿足需求，當然要保持節約精神。

7. Nbed64的算法雖然基於Base64編碼框架，但算法經過大量優化，性能遠高於傳統的Base64算法。作者曾在多平臺下作過對比，各以10MB測試數據為例，Nbed64解密數據平均比傳統的base64解碼數據快100倍以上！主要原因是：傳統的Base64解碼時，通過遍歷查找Base64映射表中的字符串來尋址，而Nbed64直接通過計算推導來尋址，因此少了一層for()循環，再加上其它各種優化，性能便有了極大的提升。經過壓力測試，即使在移動瀏覽器中使用JavaScript編碼512MB的數據也迅捷快速、毫無壓力，其它語言和平臺的性能自不必多說了。

8. Nbed64使用BSD開源協議----BSD是當今最友好的開源協議之一。這意味著：任何個人、組織、企業、機構都可以隨意修改、轉發、共享、商用 Nbed64加密庫...



# 相關鏈接

### Nbed64 在GitHub上開源的其它語種版本
+ [C-Nbed64] 作者用 C/C++ 語言編寫的版本
+ [Go-Nbed64] 作者用 Golang 語言編寫的版本
+ [JS-Nbed64] 作者用 JavaScript 語言編寫的版本
+ [VB-Nbed64] 作者用 Visual Basic 語言編寫的版本
+ [CS-Nbed64] 作者用 C Sharp |  C# 語言編寫的版本
+ [PHP-Nbed64] 作者用 PHP 語言編寫的版本
+ [JAVA-Nbed64] 作者用 JAVA 語言編寫的版本
+ [Python-Nbed64] 作者用 Python 語言編寫的版本

*備註：由於編寫Demo和README需要大量的時間和精力，因此作者無法在短期內將以上所有的語種版本全部Push。不過別擔心，作者不會放松進度和改變計劃，彌補空缺只是時間問題....*

[c-Nbed64]: https://github.com/love915sss/c-Nbed64-base64/
[Go-Nbed64]: https://github.com/love915sss/Go-Nbed64-base64/
[JS-Nbed64]: https://github.com/love915sss/JS-Nbed64-base64/
[VB-Nbed64]: https://github.com/love915sss/VB-Nbed64-base64/
[CS-Nbed64]: https://github.com/love915sss/CS-Nbed64-base64/
[PHP-Nbed64]: https://github.com/love915sss/PHP-Nbed64-base64/
[JAVA-Nbed64]: https://github.com/love915sss/JAVA-Nbed64-base64/
[Python-Nbed64]: https://github.com/love915sss/Python-Nbed64-base64/


# 安裝與引入

## 安裝

```shell
$ npm install --save js-nbed64
```
*如果您無法通過 npm 安裝，沒關系，以下任意一種方式效果都一樣...*

## 引用

### 在瀏覽器中 

本地…您需要先在GitHub或官網上將nbed64.zip下載並解壓，然後...

```html
<script src="nbed64.es5.all.js">/*完整版----研究環境時使用*/</script>
<script src="nbed64.es5.min.js">/*迷你版----生產環境時使用*/</script>
```

… 或直接從CDN。在這種方式下，您不必下載和安裝。

```html
<script src="https://nbed64.oss-cn-hongkong.aliyuncs.com/nbed64.se5.all.js">/*完整版----研究環境時使用*/</script>
<script src="https://nbed64.oss-cn-hongkong.aliyuncs.com/nbed64.se5.min.js">/*迷你版----生產環境時使用*/</script>
```

*以上引用方式雖然很方便，但也很容易汙染`window`，因此，我推薦您使用下面ES6規範標準的引入模式...*

### 作為ES6模塊 來引入，瀏覽器 || nodejs || uin-app || APICloud

本地…您需要先在GitHub或官網上將nbed64.zip下載並解壓，然後...

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



… 或直接從CDN。在這種方式下，您不必下載和安裝。


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



# 函數原型 && DEMO

## 01. nbed64StringEncryptEx

### nbed64StringEncryptEx() 用於 動態加密字符串，數據不變，密鑰不變，**但加密結果不重復**

函數原型：

```javascript
/**
 * nbed64對字符串加密的升級版，簡稱：字符串動態加密（ 本函數與 nbed64StringDecryptEx()為一對 ）
 * @param {string} str 原數據。
 * @param {string} key 密鑰。理論上密鑰的長度與逆向的難度成正比關系。
 * @param {boolean} isUtf8 是否采用UTF-8編碼格式。默認為：true。若設置為false，則使用UTF-16編碼。
 * 註意：此處指的是加密前的編碼，而非加密後的base64編碼，base64是無須編碼的。換句話來說，本參數指的是解密後的字符串編碼。
 * JS的默認編碼為UTF-16，但UTF-16並不友好，很多編程語言和服務端環境都不支持UTF-16。
 * @param {number} maskNumber 掩碼的數量。缺省為：32，範圍：32 - 65535。當值小於32時為32，大於65535時為65535。
 * @return string 加密結果
 */
const nbed64StringEncryptEx = (str, key, isUtf8 = true, maskNumber = 32) => { ... }
```

DEMO：

```javascript
	let isUtf8 = true;
	let key = 'Key1234567890++';
	let text = '這是需要加密的字符串內容--123++bc...';
	let base64 = nbed64StringEncryptEx(text, key, isUtf8);
	console.log('這是動態加密的結果: ' + base64);
	//  聲明： 動態加密的結果每次都會不一樣...
	// console.log -> 這是動態加密的結果: a0uD4iPa_daMUeWm-FL44yEDTbQKG1PbuPE-37C0RWIdAzM2RCCXdAFmN_F1l-UzwWGlB5Gmd5EFhiGVJYG0dNH3x_HFdA19fLycjQFF1cVVVV
	console.log('再來一次對比試試--: ' + nbed64StringEncryptEx(text, key, isUtf8));
	// console.log -> 再來一次對比試試--: a0tu7dD78s0LxyfNAZYkHlQywUOtbZNuCDPltOT5W5Ku2Tl8DmC3VCFmN_F1l-WjUfElhxEWxyGlJomdLYG0dNnv3-GFNEW1tHTUxU1J2cYWFh
	let TextDec = nbed64StringDecryptEx(base64, key, isUtf8);
	console.log('這是動態解密的結果: ' + TextDec);
	// console.log -> 這是動態解密的結果: 這是需要加密的字符串內容--123++bc...
```



## 02. nbed64StringDecryptEx

### nbed64StringDecryptEx() 用於 動態解密字符串 本函數與 nbed64StringEncryptEx()為一對 

函數原型：

```javascript
/**
 * Base64解密成字符串的升級版，簡稱：字符串動態解密（ 本函數與 nbed64StringEncryptEx()為一對 ）
 * @param {string} base64str base64格式的加密字符串
 * @param {string} key 密鑰。本參數請保持與加密時的設置完全一致。
 * @param {boolean} isUtf8 是否采用UTF-8編碼格式。本參數請保持與加密時的設置完全一致。
 * @return string 解密結果（UTF-16編碼格式）。註意：為方便使用，解密結果會自動轉換成當前程序語言的默認編碼，以便開箱即用，省略二次編碼。JS默認編碼：UTF-16
 */
const nbed64StringDecryptEx = (base64str, key, isUtf8 = true) => { ... }
```

DEMO：

```javascript
	let isUtf8 = true;
	let key = 'Key1234567890++';
	let text = '這是需要加密的字符串內容--123++bc...';
	let base64 = nbed64StringEncryptEx(text, key, isUtf8);
	console.log('這是動態加密的結果: ' + base64);
	//  聲明： 動態加密的結果每次都會不一樣...
	// console.log -> 這是動態加密的結果: a0uD4iPa_daMUeWm-FL44yEDTbQKG1PbuPE-37C0RWIdAzM2RCCXdAFmN_F1l-UzwWGlB5Gmd5EFhiGVJYG0dNH3x_HFdA19fLycjQFF1cVVVV
	console.log('再來一次對比試試--: ' + nbed64StringEncryptEx(text, key, isUtf8));
	// console.log -> 再來一次對比試試--: a0tu7dD78s0LxyfNAZYkHlQywUOtbZNuCDPltOT5W5Ku2Tl8DmC3VCFmN_F1l-WjUfElhxEWxyGlJomdLYG0dNnv3-GFNEW1tHTUxU1J2cYWFh
	let TextDec = nbed64StringDecryptEx(base64, key, isUtf8);
	console.log('這是動態解密的結果: ' + TextDec);
	// console.log -> 這是動態解密的結果: 這是需要加密的字符串內容--123++bc...
```



## 03. nbed64BinaryEncryptEx

### nbed64BinaryEncryptEx() 用於 動態加密二進製，數據不變，密鑰不變，**但加密結果不重復**

函數原型：

```javascript
/**
 * Nbed64 對二進製數據加密的升級版，簡稱：二進製動態加密（ 本函數與 nbed64BinaryDecryptEx()為一對 ）
 * @param {ByteArray} byteArr 原數據。二進製字節數組，如：視頻、音頻、圖片、文件等。
 * @param {string} key 密鑰。理論上密鑰的長度與逆向的難度成正比關系。
 * @param {number} maskNumber 掩碼的數量。缺省為：32，範圍：32 - 65535。當值小於32時為32，大於65535時為65535。
 * @return string 加密結果
 */
const nbed64BinaryEncryptEx = (byteArr, key, maskNumber = 32) => { ... }
```

DEMO：

```javascript
	let key = 'Key1234567890++';
	let mp4 = new Uint8Array([255, 254, 253, 252, 251, 250, 249, 248, 247, 246]);;
	let base64 = nbed64BinaryEncryptEx(mp4, key);
	console.log('這是動態加密的結果: ' + base64);
	// 聲明： 動態加密的結果每次都會不一樣...
	// console.log -> 這是動態加密的結果: a0tdkmEjI-6aJlp-aU6wWwtcfmuCBDg-GcRAvSfTu35NFDgIGCAwQFhIWKgX
	console.log('再來一次對比試試--: ' + nbed64BinaryEncryptEx(mp4, key));
	// console.log -> 再來一次對比試試--: a0tsO0Go7LbVeH1MaqljRsUo-uC0TOwjIGjCJEgtTwoU5zgIGCAwQFBAUKCf
	let byteArray = nbed64BinaryDecryptEx(base64, key);
	console.log('這是動態解密的結果: ' + byteArray);
	// console.log -> 這是動態解密的結果: 255,254,253,252,251,250,249,248,247,246
```



## 04. nbed64BinaryDecryptEx

### nbed64BinaryDecryptEx() 用於 動態解密二進製，與 nbed64BinaryEncryptEx()是一對

函數原型：

```javascript
/**
 * Base64解密成二進製數據的升級版，簡稱：二進製動態解密（ 本函數與 nbed64BinaryEncryptEx()為一對 ）
 * @param {string} base64str base64格式的加密字符串
 * @param {string} key 密鑰。本參數請保持與加密時的設置完全一致。
 * @return ByteArray 解密結果
 */
const nbed64BinaryDecryptEx = (base64str, key) =>  { ... }
```

DEMO：

```javascript
	let key = 'Key1234567890++';
	let mp4 = new Uint8Array([255, 254, 253, 252, 251, 250, 249, 248, 247, 246]);;
	let base64 = nbed64BinaryEncryptEx(mp4, key);
	console.log('這是動態加密的結果: ' + base64);
	// 聲明： 動態加密的結果每次都會不一樣...
	// console.log -> 這是動態加密的結果: a0tdkmEjI-6aJlp-aU6wWwtcfmuCBDg-GcRAvSfTu35NFDgIGCAwQFhIWKgX
	console.log('再來一次對比試試--: ' + nbed64BinaryEncryptEx(mp4, key));
	// console.log -> 再來一次對比試試--: a0tsO0Go7LbVeH1MaqljRsUo-uC0TOwjIGjCJEgtTwoU5zgIGCAwQFBAUKCf
	let byteArray = nbed64BinaryDecryptEx(base64, key);
	console.log('這是動態解密的結果: ' + byteArray);
	// console.log -> 這是動態解密的結果: 255,254,253,252,251,250,249,248,247,246
```



## 05. nbed64StringEncrypt

### nbed64StringEncrypt() 用於 對稱加密字符串，數據不變，密鑰不變，**加密結果也不變**

函數原型：

```javascript
/**
/**
 * Nbed64 對字符串加密（ 本函數與 nbed64StringDecrypt()為一對 ）
 * @param {string} str 原數據。
 * @param {string} key 密鑰。理論上密鑰的長度與逆向的難度成正比關系。
 * @param {boolean} isUtf8 是否采用UTF-8編碼格式。默認為：true。若設置為false，則使用UTF-16編碼。
 * 註意：此處指的是加密前的編碼，而非加密後的base64編碼，base64是無須編碼的。換句話來說，本參數指的是解密後的字符串編碼。
 * JS的默認編碼為UTF-16，但UTF-16並不友好，很多編程語言和服務端環境都不支持UTF-16。
 * @param {boolean} isRFC4648 是否采用RFC4648編碼映射規範，默認為：true。采用RFC4648規範編碼的Base64符合URL安全，可用於HTTP協議與Ajax請求。
 * @return string 加密結果
 */
const nbed64StringEncrypt = (str, key, isUtf8 = true, isRFC4648 = true) =>  { ... }
```

DEMO：

```javascript
	let isUtf8 = true;
	let isRFC4648 = true;
	let key = 'Key1234567890++';
	let text = '這是需要加密的字符串內容--123++bc...';
	let base64 = nbed64StringEncrypt(text, key, isUtf8, isRFC4648);
	console.log('這是對稱加密的結果: ' + base64);
	// console.log -> 這是對稱加密的結果: o_TSg_3KkOX52Zew17iS1py1066w0Jii0ZqQ04-F3b693JeAHR0BGRgAAElIZWVl
	console.log('再來一次對比試試--: ' + nbed64StringEncrypt(text, key, isUtf8, isRFC4648));
	// console.log -> 再來一次對比試試  : o_TSg_3KkOX52Zew17iS1py1066w0Jii0ZqQ04-F3b693JeAHR0BGRgAAElIZWVl
	let TextDec = nbed64StringDecrypt(base64, key, isUtf8);
	console.log('這是對稱解密的結果: ' + TextDec);
	// console.log -> 這是對稱解密的結果: 這是需要加密的字符串內容--123++bc...
```



## 06. nbed64StringDecrypt

### nbed64StringDecrypt() 用於 對稱解密字符串，與 nbed64StringEncrypt()是一對

函數原型：

```javascript
/**
 * Base64解密成字符串（ 本函數與 nbed64StringEncrypt()為一對 ）
 * @param {string} base64str base64格式的加密字符串
 * @param {string} key 密鑰。本參數請保持與加密時的設置完全一致。
 * @param {boolean} isUtf8 是否采用UTF-8編碼格式。本參數請保持與加密時的設置完全一致。
 * @return string 解密結果（UTF-16編碼格式）。註意：為方便使用，解密結果會自動轉換成當前程序語言的默認編碼，以便開箱即用，省略二次編碼。JS默認編碼：UTF-16
 */
const nbed64StringDecrypt = (base64str, key, isUtf8 = true) =>  { ... }
```

DEMO：

```javascript
	let isUtf8 = true;
	let isRFC4648 = true;
	let key = 'Key1234567890++';
	let text = '這是需要加密的字符串內容--123++bc...';
	let base64 = nbed64StringEncrypt(text, key, isUtf8, isRFC4648);
	console.log('這是對稱加密的結果: ' + base64);
	// console.log -> 這是對稱加密的結果: o_TSg_3KkOX52Zew17iS1py1066w0Jii0ZqQ04-F3b693JeAHR0BGRgAAElIZWVl
	console.log('再來一次對比試試  : ' + nbed64StringEncrypt(text, key, isUtf8, isRFC4648));
	// console.log -> 再來一次對比試試--: o_TSg_3KkOX52Zew17iS1py1066w0Jii0ZqQ04-F3b693JeAHR0BGRgAAElIZWVl
	let TextDec = nbed64StringDecrypt(base64, key, isUtf8);
	console.log('這是對稱解密的結果: ' + TextDec);
	// console.log -> 這是對稱解密的結果: 這是需要加密的字符串內容--123++bc...
```



## 07 nbed64BinaryEncrypt

### nbed64BinaryEncrypt() 用於 對稱加密二進製，數據不變，密鑰不變，**加密結果也不變**

函數原型：

```javascript
/**
 * Nbed64 對二進製數據加密（ 本函數與 nbed64BinaryDecrypt()為一對 ）
 * @param {ByteArray} byteArr 原數據。二進製字節數組，如：視頻、音頻、圖片、文件等。
 * @param {string} key 密鑰。理論上密鑰的長度與逆向的難度成正比關系。
 * @param {boolean} isRFC4648 是否采用RFC4648編碼映射規範，默認為：true。采用RFC4648規範編碼的Base64符合URL安全，可用於HTTP協議與Ajax請求。
 * @return string 加密結果
 */
const nbed64BinaryDecrypt = (base64str, key) =>  { ... }
```

DEMO：

```javascript
	let isRFC4648 = true;
	let key = 'Key1234567890++';
	let mp3 = new Uint8Array([155, 154, 153, 152, 151, 150, 149, 148, 147, 146]);;
	let base64 = nbed64BinaryEncrypt(mp3, key, isRFC4648);
	console.log('這是對稱加密的結果: ' + base64);
	// console.log -> 這是對稱加密的結果: 0NHS_fLz7O3qoz
	console.log('再來一次對比試試  : ' + nbed64BinaryEncrypt(mp3, key, isRFC4648));
	// console.log -> 再來一次對比試試  : 0NHS_fLz7O3qoz
	let byteArray = nbed64BinaryDecrypt(base64, key);
	console.log('這是對稱解密的結果: ' + byteArray);
	// console.log -> 155,154,153,152,151,150,149,148,147,146
```



## 08. nbed64BinaryDecrypt

### nbed64BinaryDecrypt() 用於 對稱解密二進製，與 nbed64BinaryEncrypt()是一對

函數原型：

```javascript
/**
 * Base64解密成二進製數據（ 本函數與 nbed64BinaryEncrypt()為一對 ）
 * @param {string} base64str base64格式的加密字符串
 * @param {string} key 密鑰。本參數請保持與加密時的設置完全一致。
 * @return ByteArray 解密結果
 */
const nbed64BinaryDecrypt = (base64str, key) =>  { ... }
```

DEMO：

```javascript
	let isRFC4648 = true;
	let key = 'Key1234567890++';
	let mp3 = new Uint8Array([155, 154, 153, 152, 151, 150, 149, 148, 147, 146]);;
	let base64 = nbed64BinaryEncrypt(mp3, key, isRFC4648);
	console.log('這是對稱加密的結果: ' + base64);
	// console.log -> 這是對稱加密的結果: 0NHS_fLz7O3qoz
	console.log('再來一次對比試試  : ' + nbed64BinaryEncrypt(mp3, key, isRFC4648));
	// console.log -> 再來一次對比試試  : 0NHS_fLz7O3qoz
	let byteArray = nbed64BinaryDecrypt(base64, key);
	console.log('這是對稱解密的結果: ' + byteArray);
	// console.log -> 155,154,153,152,151,150,149,148,147,146
```



## 09. nbed64StringEncode

### nbed64StringEncode() 標準的Base64編碼，用於編碼字符串，支持RFC4648安全規範

函數原型：

```javascript
/**
 * Nbed64 對字符串編碼（ 註意：這是編碼而非加密， 本函數與 nbed64StringDecode()為一對 ）
 * @param {string} str 原數據。
 * @param {boolean} isUtf8 是否采用UTF-8編碼格式。默認為：true。若設置為false，則使用UTF-16編碼。
 * 註意：此處指的是編碼前的編碼，而非編碼後的base64編碼，base64是無須編碼的。換句話來說，本參數指的是解碼後的字符串編碼。
 * JS的默認編碼為UTF-16，但UTF-16並不友好，很多編程語言和服務端環境都不支持UTF-16。
 * @param {boolean} isRFC4648 是否采用RFC4648編碼映射規範，默認為：true。采用RFC4648規範編碼的Base64符合URL安全，可用於HTTP協議與Ajax請求。
 * @return string 編碼結果
 */
const nbed64StringEncode = (str, isUtf8 = true, isRFC4648 = true) =>  { ... }
```

DEMO：

```javascript
	let isUtf8 = true;
	let isRFC4648 = true;
	let text = '這是需要編碼的字符串內容--Base64...';
	let base64 = nbed64StringEncode(text, isUtf8, isRFC4648);
	console.log('這是Base64編碼的結果: ' + base64);
	// console.log -> 這是Base64編碼的結果: 6L-Z5piv6ZyA6KaB57yW56CB55qE5a2X56ym5Liy5YaF5a65LS1CYXNlNjQuLi4A
	let TextDec = nbed64StringDecode(base64, isUtf8);
	console.log('這是Base64解碼的結果: ' + TextDec);
	// console.log -> 這是Base64解碼的結果: 這是需要編碼的字符串內容--Base64...
```



## 10. nbed64StringDecode

### nbed64StringDecode() 標準的Base64解碼，用於解碼字符串，支持RFC4648安全規範

函數原型：

```javascript
/**
 * Base64解碼成字符串（ 註意：這是解碼而非解密， 本函數與 nbed64StringEncode()為一對 ）
 * @param {string} base64str base64格式編碼的字符串
 * @param {boolean} isUtf8 是否采用UTF-8編碼格式。本參數請保持與編碼時的設置完全一致。
 * @return string 解碼結果（UTF-16編碼格式）。註意：為方便使用，解碼結果會自動轉換成當前程序語言的默認編碼，以便開箱即用，省略二次編碼。JS默認編碼：UTF-16
 */
const nbed64StringDecode = (base64str, isUtf8 = true) =>  { ... }
```

DEMO：

```javascript
	let isUtf8 = true;
	let isRFC4648 = true;
	let text = '這是需要編碼的字符串內容--Base64...';
	let base64 = nbed64StringEncode(text, isUtf8, isRFC4648);
	console.log('這是Base64編碼的結果: ' + base64);
	// console.log -> 這是Base64編碼的結果: 6L-Z5piv6ZyA6KaB57yW56CB55qE5a2X56ym5Liy5YaF5a65LS1CYXNlNjQuLi4A
	let TextDec = nbed64StringDecode(base64, isUtf8);
	console.log('這是Base64解碼的結果: ' + TextDec);
	// console.log -> 這是Base64解碼的結果: 這是需要編碼的字符串內容--Base64...
```



## 11. nbed64BinaryEncode

### nbed64BinaryEncode() 標準的Base64編碼，用於編碼二進製，支持RFC4648安全規範

函數原型：

```javascript
/**
 * Nbed64 對二進製數據編碼（ 註意：這是編碼而非加密， 本函數與 nbed64BinaryDecode()為一對 ）
 * @param {ByteArray} byteArr 原數據。二進製字節數組，如：視頻、音頻、圖片、文件等。
 * @param {boolean} isRFC4648 是否采用RFC4648編碼映射規範，默認為：true。采用RFC4648規範編碼的Base64符合URL安全，可用於HTTP協議與Ajax請求。
 * @return string 編碼結果
 */
const nbed64BinaryEncode = (byteArr, isRFC4648 = true) =>  { ... }
```

DEMO：

```javascript
	let isRFC4648 = true;
	let image = new Uint8Array([55, 54, 53, 52, 51, 50, 49, 48, 47, 46]);;
	let base64 = nbed64BinaryEncode(image, isRFC4648);
	console.log('這是Base64編碼的結果: ' + base64);
	// console.log -> 這是Base64編碼的結果: NzY1NDMyMTAvLg
	let byteArray = nbed64BinaryDecode(base64);
	console.log('這是Base64解碼的結果: ' + byteArray);
	// console.log -> 這是Base64解碼的結果: 55,54,53,52,51,50,49,48,47,46

```



## 12. nbed64BinaryDecode

### nbed64BinaryDecode() 標準的Base64解碼，用於解碼二進製，支持RFC4648安全規範

函數原型：

```javascript
/**
 * Nbed64 解碼成二進製數據（ 註意：這是解碼而非解密， 本函數與 nbed64BinaryEncode()為一對 ）
 * @param {string} base64str base64格式編碼的字符串
 * @return ByteArray 解碼結果
 */
const nbed64BinaryDecode = (base64str) => { ... }
```

DEMO：

```javascript
	let isRFC4648 = true;
	let image = new Uint8Array([55, 54, 53, 52, 51, 50, 49, 48, 47, 46]);;
	let base64 = nbed64BinaryEncode(image, isRFC4648);
	console.log('這是Base64編碼的結果: ' + base64);
	// console.log -> 這是Base64編碼的結果: NzY1NDMyMTAvLg
	let byteArray = nbed64BinaryDecode(base64);
	console.log('這是Base64解碼的結果: ' + byteArray);
	// console.log -> 這是Base64解碼的結果: 55,54,53,52,51,50,49,48,47,46
```


# 擴展知識閱讀

## 動態加密的作用和原理？

+ 動態加密存在的作用和意義就是為了：保護Key，防逆向。註意，此處所指的防逆與非對稱加密算法的本質不同。對稱加密均有個缺陷：攻擊者可通過網絡抓包分析來逆向推算原始的Key! 如此一來，即使Key通過服務端非對稱加密分發也仍然失去意義。簡單的講就是, 只要攻擊者有輸入窗口，無論你把key保護的多好也沒有意義! 

+ 通常, 非對稱傳輸密鑰的目的是保護服務端分發Key的過程，卻無法保護Key的計算結果，要想保護Key的計算結果以及Key本身不被逆向，就需要掩碼算法的參與。簡稱：動態加密！此過程用文字描述比較抽象難懂，我們直接看推導吧：假設，已知加密為減法，解密為加法(註: 可互換, 這不是重點)，當攻擊者輸入了'A'，加密過程為：data=65, key=10，res=data-key, 結果=55，攻擊者抓包可得到55，'A'已知為65，逆向所得：key = 65 -55，於是Key=10 被逆向了。

+ 您可能會問，若我的Data很長，key也很長，還能逆向嗎？答案是：能，原理不變！當然，前提是攻擊者有一個用於數據包捕獲和分析的輸入窗口！若我們把加減法改成位異或呢？沒用，原理不變，這裏用加減法僅為了方便推導。好了，現在我們來看看掩碼是如何保護Key的--假定掩碼為128，當攻擊者輸入了'A'，加密過程為：data=65, mask=128, key=10，則 res = data - (mask | key) , 結果=183，已知位或運算不可逆向, 現在key還能被逆向嗎? 答案是: 不能! 當然不能! 

+ 讀到這裏, 您可能疑惑掩碼參與為何又叫動態加密呢? 因為通常掩碼就是隨機數組, 且與被加密數據合並, 細心的讀者可能已經明白-----data不變, Key也不變, 但加密後的結果卻每次都變, 因為mask每次都會變呀! 每次都變, 還不夠動態嗎?! 如此一來, 不但key安全了, res也更安全啦!

+ 理論上，除量子密鑰分發以外，不存在絕對的安全。密鑰通過服務端分發的過程必然需要通過網絡傳輸，這便給了攻擊者抓包的機會，您可能會說，我通過非對稱加密後再傳輸key不就安全了嗎？答案是NO！攻擊者可以通過代理人偽造證書來欺騙服務端，從而拿到key。您可能又會說，那我就不傳輸，直接在APP裏面寫死，這樣抓包不到總安全了吧？答案還是NO！首先，不論key從服務端分發也罷，在APP內置也罷，如果您使用的是非動態加密，那麽不好意，攻擊者直接抓加密結果包就能逆向推導出key！其次即使使用動態加密，安不安全，那要問您給APP套的殼夠不夠硬？！至少理論上是沒有絕對硬度的殼！

+ 現在，您是否非常的疑惑？既然怎麽折騰都不安全，那我們還折騰個啥？！這，是個好問題！答案很簡單：一切都是為了增加攻擊者的代價和成本！雖然任何手段都非絕對安全，但毫無疑問，任何手段都會增加破譯的成本！防護手段的疊加也必然會疊加破譯的代價，當攻擊者破譯所付出的代價，遠大與他的收益時，誰還會做虧本的買賣？他自然也就放棄了！當你破譯某個系統可以獲利一百萬，但代價卻要一個億，除了放棄, 你還能怎樣？！！！通常而言，破譯的成本都遠大於加密的成本，這，就是加密的作用和意義！



## RFC4648是什麽？
+ 它是一套保障URL編碼安全的規範。眾所周知，在Ajax請求中，'/'、'+'均不可在GET參數中出現，否則需要URL編碼。在URL規範中，'/'代表路徑，'+'代表空格，'='代表解析，但Base64映射表中偏偏包含了這些字符，而采用RFC4648規範就可以解決這個問題。怎麽解決？很簡單：用'-'替換原來的'+'，用'_'替換原來的'/'，且尾部不填充'='

+ 於是大家在國際上約定好都使用這個方案，這，便是Base64的RFC4648編碼規範的由來。用一句話來講就是：大家先約定一個標準，然後都遵循這個標準，目的是為了解決問題。



## 在JavsScript中，String的默認編碼是UTF-16，還是UTF-8？
+ 在ECMAScript規範和MDN中都明確指出：String為UTF-16編碼，實事上也的確是UTF-16。因此，String類型中存放的任意字符均在內存中占用2個字節，不論英文、中文、德文、日文、阿拉伯文...均為2個字節。

## UTF-16的優點和缺點
+ UTF-16的優點：非英文場景中比UTF-8節省內存，以中文為例，UTF-8至少需要3個字節，而UTF-16只用兩個字節。

+ UTF-16的缺點：不兼容ASCII編碼規範，此為強調重點!這意味著表示英文字符也必須使用雙字節，高位空比特[0,0,0,0,0,0,0,0]是必須存在的，任何時間，都不能因壓縮需求而丟棄高位中的空字節！！！否則將會造成不可逆轉的解碼錯誤（此處劃重點, 簡單點講就是: 會亂碼，而且是不可逆的亂碼）！

+ 註意事項：Ajax請求會根據頁面編碼類型的定義而自動轉換，也就是您在HTML中定義了什麽編碼，瀏覽器就會自動轉換。所以後端收到的字符串通常會是UTF-8，但，請不要誤以為string類型默認編碼就是UTF-8，這很重要！UTF-8表示中文需3個字節，UTF-16表示中文只需2個字節。

+ 建議：UTF-16可以減少網絡傳輸成本，但前提是您熟悉UTF-16編碼並能運用自如，否則，請使用簡易通用的UTF-8。本知識點主要面向對本源碼有二次變種開發的開發者，無二次開發需求的使用者可不必掌握。謝謝！！！



# 關於作者

### 作者的博客

+ 地址： https://blog.csdn.net/qq_16661383?type=blog 

+ **您有任何建議或疑問，均可來此留言。謝謝！！！**

### 作者的QQ

+ **267949** 
+ 添加時，請說明來意，謝謝！！！



