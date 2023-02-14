/**
 * BSD开源协议 && BSD open source agreement
 * Gitee: https://gitee.com/love915sss/js-nbed64-base64
 * GitHub： https://github.com/love915sss/js-nbed64-base64/
 * Author Blog: https://blog.csdn.net/qq_16661383?type=blog
 */



/**
 * Base64对二进制数据加密（ 本函数与 nbed64BinaryDecrypt()为一对 ）
 * @param {ByteArray} byteArr 原数据。二进制字节数组，如：视频、音频、图片、文件等。
 * @param {string} key 密钥。理论上密钥的长度与逆向的难度成正比关系。
 * @param {boolean} isRFC4648 是否采用RFC4648编码映射规范，默认为：true。采用RFC4648规范编码的Base64符合URL安全，可用于HTTP协议与Ajax请求。
 * @return string 加密结果
 */
nbed64BinaryEncrypt = function(byteArr, key, isRFC4648 = true) {
	const mapArr = _mapToByteArray(isRFC4648);
	const keyArr = _keyToByteArray(key);
	const kl = keyArr.length;
	const bl = byteArr.length;
	const rem = bl % 3;
	const num = bl % 3 === 0 ? parseInt(bl / 3) : parseInt(bl / 3) + 1;
	const base64Len = num * 4;
	let tempArr = new Uint8Array(3);
	let ba64Arr = new Uint8Array(base64Len);
	let i = 0,
		k = 0,
		v = 0;
	/* 加密并转换为字节数组 */
	for (let j = 0; base64Len > i; j++) {
		k = j % kl;
		tempArr[0] = byteArr[v + 0] ^ keyArr[k];
		tempArr[1] = byteArr[v + 1] ^ keyArr[k];
		tempArr[2] = byteArr[v + 2] ^ keyArr[k];
		ba64Arr[i + 0] = mapArr[tempArr[0] >> 2];
		ba64Arr[i + 1] = mapArr[((tempArr[0] & 0x03) << 4) + (tempArr[1] >> 4)];
		ba64Arr[i + 2] = mapArr[((tempArr[1] & 0x0F) << 2) + (tempArr[2] >> 6)];
		ba64Arr[i + 3] = mapArr[tempArr[2] & 0x3F];
		i = i + 4;
		v = v + 3;
	}
	/* 有余数时的尾部处理 */
	let rfc = 0;
	if (!isRFC4648) {
		if (rem === 1) {
			ba64Arr[base64Len - 2] = 0x3D;
			ba64Arr[base64Len - 1] = 0x3D;
		} else if (rem === 2) {
			ba64Arr[base64Len - 1] = 0x3D;
		}
	} else {
		if (rem === 1) {
			rfc = 2;
		} else if (rem === 2) {
			rfc = 1;
		} else {
			rfc = 0;
		}
	}
	/* byteArray转成String */
	let ba64String = "";
	for (let i = 0; i < base64Len - rfc; i++) {
		ba64String += String.fromCharCode(ba64Arr[i]);
	}
	return ba64String;
}

/**
 * Base64解密成二进制数据（ 本函数与 nbed64BinaryEncrypt()为一对 ）
 * @param {string} base64str base64格式的加密字符串
 * @param {string} key 密钥。本参数请保持与加密时的设置完全一致。
 * @return ByteArray 解密结果
 */
nbed64BinaryDecrypt = function(base64str, key) {
	const bl = base64str.length;
	const kl = key.length;
	const num = bl % 4;
	const rem = num === 0 ? 0 : 4 - num;
	const loop = rem === 0 ? parseInt(bl / 4) : parseInt(bl / 4) + 1;
	const nl = loop * 3;
	/* 填充被省略的'='字符'----为了遵循严谨的编程精神（JS中可选，其它语言中必须） */
	let fill = '';
	for (let i = 0; i < rem; i++) {
		fill += '=';
	}
	base64str += fill;
	/* 将字符串换为字节数组 */
	const keyArr = _keyToByteArray(key);
	const baseUint8Arr = _base64strToByteArray(base64str);
	let newArr = new Uint8Array(nl);
	let h = 0,
		i = 0,
		j = -1,
		k = 0;
	/* 解密并转换为字节数组 */
	for (let w = 0; w < loop; w++) {
		j++;
		k = j % kl;
		let tempArr = new Uint8Array(4);
		/* 本方式性能卓越，无需遍历base64映射表，直接计算映射关系 */
		for (let y = 0; y < 4; y++) {
			let n = 0;
			let p = w * 4 + y;
			let b = baseUint8Arr[p];
			if (b >= 65 && b <= 90) {
				/* ABCDEFGHIJKLMNOPQRSTUVWXYZ */
				n = b - 65;
			} else if (b >= 97 && b <= 122) {
				/* abcdefghijklmnopqrstuvwxyz */
				const shifting = 26;
				n = b - 97 + shifting;
			} else if (b >= 48 && b <= 57) {
				/* 0123456789 */
				const shifting = 52;
				n = b - 48 + shifting;
			} else if (b === 43 || b === 45) {
				/* '+' === 43 || '-' ==== 45 */
				n = 62;
			} else if (b === 47 || b === 95) {
				/* '/' === 47 || '_' === 95 */
				n = 63;
			} else {
				h++;
			}
			tempArr[y] = n;
		}
		let d1 = tempArr[0] << 2 | tempArr[1] >> 4;
		let d2 = (tempArr[1] & 15) << 4 | tempArr[2] >> 2;
		let d3 = (tempArr[2] & 3) << 6 | tempArr[3];
		newArr[i + 0] = d1 ^ keyArr[k];
		newArr[i + 1] = d2 ^ keyArr[k];
		newArr[i + 2] = d3 ^ keyArr[k];
		i += 3;
	}
	/* byteArray转成String----为跨平台的兼容性不使用Array.slice */
	let retLen = newArr.length - h;
	let retArr = new Uint8Array(retLen);
	for (let n = 0; n < retLen; n++) {
		retArr[n] = newArr[n];
	}
	return retArr;
}

/**
 * Base64对二进制数据加密的升级版，简称：二进制动态加密（ 本函数与 nbed64BinaryDecryptEx()为一对 ）
 * @param {ByteArray} byteArr 原数据。二进制字节数组，如：视频、音频、图片、文件等。
 * @param {string} key 密钥。理论上密钥的长度与逆向的难度成正比关系。
 * @param {number} maskNumber 掩码的数量。缺省为：32，范围：32 - 65535。当值小于32时为32，大于65535时为65535。
 * @return string 加密结果
 */
nbed64BinaryEncryptEx = function(byteArr, key, maskNumber = 32) {
	const maskArr = _maskToByteArray(maskNumber);
	const lenArr = _shortToByteArray(maskArr.length)
	const mapArr = _mapToByteArray(true);
	const keyArr = _keyToByteArray(key);
	const kl = keyArr.length;
	const bl = byteArr.length;
	const ml = maskArr.length;
	const rem = bl % 3;
	const num = bl % 3 === 0 ? parseInt(bl / 3) : parseInt(bl / 3) + 1;
	const base64Len = num * 4;
	let tempArr = new Uint8Array(3);
	let ba64Arr = new Uint8Array(base64Len);
	let i = 0,
		k = 0,
		m = 0,
		v = 0,
		mk = 0;
	/* 加密并转换为字节数组 */
	for (let j = 0; base64Len > i; j++) {
		k = j % kl;
		m = j % ml;
		mk = keyArr[k] + maskArr[m] | keyArr[k] | maskArr[m];
		tempArr[0] = byteArr[v + 0] ^ mk;
		tempArr[1] = byteArr[v + 1] ^ mk;
		tempArr[2] = byteArr[v + 2] ^ mk;
		ba64Arr[i + 0] = mapArr[tempArr[0] >> 2];
		ba64Arr[i + 1] = mapArr[((tempArr[0] & 0x03) << 4) + (tempArr[1] >> 4)];
		ba64Arr[i + 2] = mapArr[((tempArr[1] & 0x0F) << 2) + (tempArr[2] >> 6)];
		ba64Arr[i + 3] = mapArr[tempArr[2] & 0x3F];
		i = i + 4;
		v = v + 3;
	}
	/* 有余数时的尾部处理 */
	let rfc = rem === 1 ? 2 : rem === 2 ? 1 : 0;
	/* byteArray转成String */
	let ba64String = "";
	for (let i = 0; i < base64Len - rfc; i++) {
		ba64String += String.fromCharCode(ba64Arr[i]);
	}
	/* 编码掩码并插入到头部 */
	let topArr = new Uint8Array(maskArr.length + 2);
	for (let n = 0; n < maskArr.length; n++) {
		topArr[2 + n] = maskArr[n];
	}
	topArr[1] = lenArr[1];
	topArr[0] = lenArr[0];
	let ba64Top = nbed64BinaryEncrypt(topArr, key, true);
	return ba64Top + ba64String;
}

/**
 * Base64解密成二进制数据的升级版，简称：二进制动态解密（ 本函数与 nbed64BinaryEncryptEx()为一对 ）
 * @param {string} base64str base64格式的加密字符串
 * @param {string} key 密钥。本参数请保持与加密时的设置完全一致。
 * @return ByteArray 解密结果
 */
nbed64BinaryDecryptEx = function(base64str, key) {
	const topArr = nbed64BinaryDecrypt(base64str.slice(0, 4), key);
	const maskLen = _byteArrayGetShort(topArr);
	const maskRem = maskLen % 3;
	const maskMax = maskRem === 0 ? maskLen / 3 * 4 : maskLen / 3 * 4 + (3 - maskRem);
	const leftArr = nbed64BinaryDecrypt(base64str.slice(0, maskMax + 4), key);
	/* 提取掩饰的字节数组 */
	let maskArr = new Uint8Array(maskLen);
	for (let i = 0; i < maskLen; i++) {
		maskArr[i] = leftArr[i + 2]
	}
	let shift = maskRem === 1 ? 1 : 3;
	let dataStart = maskMax + shift;
	let dataStr = base64str.slice(dataStart, base64str.length);
	const bl = dataStr.length;
	const kl = key.length;
	const ml = maskArr.length;
	const num = bl % 4;
	const rem = num === 0 ? 0 : 4 - num;
	const loop = rem === 0 ? parseInt(bl / 4) : parseInt(bl / 4) + 1;
	const nl = loop * 3;
	/* 填充被省略的'='字符'----为了遵循严谨的编程精神（JS中可选，其它语言中必须） */
	let fill = '';
	for (let i = 0; i < rem; i++) {
		fill += '=';
	}
	dataStr += fill;
	/* 将字符串换为字节数组 */
	const keyArr = _keyToByteArray(key);
	const baseUint8Arr = _base64strToByteArray(dataStr);
	let newArr = new Uint8Array(nl);
	let h = 0,
		i = 0,
		k = 0,
		j = -1,
		m = -1,
		mk = 0;
	/* 解密并转换为字节数组 */
	for (let w = 0; w < loop; w++) {
		j++;
		k = j % kl;
		m = j % ml;
		mk = keyArr[k] + maskArr[m] | keyArr[k] | maskArr[m];
		let tempArr = new Uint8Array(4);
		/* 本方式性能卓越，无需遍历base64映射表，直接计算映射关系 */
		for (let y = 0; y < 4; y++) {
			let n = 0;
			let p = w * 4 + y;
			let b = baseUint8Arr[p];
			if (b >= 65 && b <= 90) {
				/* ABCDEFGHIJKLMNOPQRSTUVWXYZ */
				n = b - 65;
			} else if (b >= 97 && b <= 122) {
				/* abcdefghijklmnopqrstuvwxyz */
				const shifting = 26;
				n = b - 97 + shifting;
			} else if (b >= 48 && b <= 57) {
				/* 0123456789 */
				const shifting = 52;
				n = b - 48 + shifting;
			} else if (b === 43 || b === 45) {
				/* '+' === 43 || '-' ==== 45 */
				n = 62;
			} else if (b === 47 || b === 95) {
				/* '/' === 47 || '_' === 95 */
				n = 63;
			} else {
				h++;
			}
			tempArr[y] = n;
		}
		let d1 = tempArr[0] << 2 | tempArr[1] >> 4;
		let d2 = (tempArr[1] & 15) << 4 | tempArr[2] >> 2;
		let d3 = (tempArr[2] & 3) << 6 | tempArr[3];
		newArr[i + 0] = d1 ^ mk;
		newArr[i + 1] = d2 ^ mk;
		newArr[i + 2] = d3 ^ mk;
		i += 3;
	}
	/* byteArray转成String----为跨平台的兼容性不使用Array.slice */
	let retLen = newArr.length - h;
	let retArr = new Uint8Array(retLen);
	for (let n = 0; n < retLen; n++) {
		retArr[n] = newArr[n];
	}
	return retArr;
}

/**
 * Base64对字符串加密（ 本函数与 nbed64StringDecrypt()为一对 ）
 * @param {string} str 原数据。
 * @param {string} key 密钥。理论上密钥的长度与逆向的难度成正比关系。
 * @param {boolean} isUtf8 是否采用UTF-8编码格式。默认为：true。若设置为false，则使用UTF-16编码。
 * 注意：此处指的是加密前的编码，而非加密后的base64编码，base64是无须编码的。换句话来说，本参数指的是解密后的字符串编码。
 * JS的默认编码为UTF-16，但UTF-16并不友好，很多编程语言和服务端环境都不支持UTF-16。
 * @param {boolean} isRFC4648 是否采用RFC4648编码映射规范，默认为：true。采用RFC4648规范编码的Base64符合URL安全，可用于HTTP协议与Ajax请求。
 * @return string 加密结果
 */
nbed64StringEncrypt = function(str, key, isUtf8 = true, isRFC4648 = true) {
	const byteArr = isUtf8 ? _utf16ToUtf8ToByteArray(str, 4) : _strUtf16ToByteArray(str, 4);
	return nbed64BinaryEncrypt(byteArr, key, isRFC4648);
}

/**
 * Base64解密成字符串（ 本函数与 nbed64StringEncrypt()为一对 ）
 * @param {string} base64str base64格式的加密字符串
 * @param {string} key 密钥。本参数请保持与加密时的设置完全一致。
 * @param {boolean} isUtf8 是否采用UTF-8编码格式。本参数请保持与加密时的设置完全一致。
 * @return string 解密结果（UTF-16编码格式）。注意：为方便使用，解密结果会自动转换成当前程序语言的默认编码，以便开箱即用，省略二次编码。JS默认编码：UTF-16
 */
nbed64StringDecrypt = function(base64str, key, isUtf8 = true) {
	let retArr = nbed64BinaryDecrypt(base64str, key)
	let dataStr = isUtf8 ? _byteArrayToUtf8ToUtf16(retArr) : _byteArrayToUtf16(retArr);
	return dataStr;
}

/**
 * Base64对字符串加密的升级版，简称：字符串动态加密（ 本函数与 nbed64StringDecryptEx()为一对 ）
 * @param {string} str 原数据。
 * @param {string} key 密钥。理论上密钥的长度与逆向的难度成正比关系。
 * @param {boolean} isUtf8 是否采用UTF-8编码格式。默认为：true。若设置为false，则使用UTF-16编码。
 * 注意：此处指的是加密前的编码，而非加密后的base64编码，base64是无须编码的。换句话来说，本参数指的是解密后的字符串编码。
 * JS的默认编码为UTF-16，但UTF-16并不友好，很多编程语言和服务端环境都不支持UTF-16。
 * @param {number} maskNumber 掩码的数量。缺省为：32，范围：32 - 65535。当值小于32时为32，大于65535时为65535。
 * @return string 加密结果
 */
nbed64StringEncryptEx = function(str, key, isUtf8 = true, maskNumber = 32) {
	const byteArr = isUtf8 ? _utf16ToUtf8ToByteArray(str, 4) : _strUtf16ToByteArray(str, 4);
	return nbed64BinaryEncryptEx(byteArr, key, maskNumber);
}

/**
 * Base64解密成字符串的升级版，简称：字符串动态解密（ 本函数与 nbed64StringEncryptEx()为一对 ）
 * @param {string} base64str base64格式的加密字符串
 * @param {string} key 密钥。本参数请保持与加密时的设置完全一致。
 * @param {boolean} isUtf8 是否采用UTF-8编码格式。本参数请保持与加密时的设置完全一致。
 * @return string 解密结果（UTF-16编码格式）。注意：为方便使用，解密结果会自动转换成当前程序语言的默认编码，以便开箱即用，省略二次编码。JS默认编码：UTF-16
 */
nbed64StringDecryptEx = function(base64str, key, isUtf8 = true) {
	let retArr = nbed64BinaryDecryptEx(base64str, key)
	let dataStr = isUtf8 ? _byteArrayToUtf8ToUtf16(retArr) : _byteArrayToUtf16(retArr);
	return dataStr;
}

/**
 * Base64对二进制数据编码（ 注意：这是编码而非加密， 本函数与 nbed64BinaryDecode()为一对 ）
 * @param {ByteArray} byteArr 原数据。二进制字节数组，如：视频、音频、图片、文件等。
 * @param {boolean} isRFC4648 是否采用RFC4648编码映射规范，默认为：true。采用RFC4648规范编码的Base64符合URL安全，可用于HTTP协议与Ajax请求。
 * @return string 编码结果
 */
nbed64BinaryEncode = function(byteArr, isRFC4648 = true) {
	const mapArr = _mapToByteArray(isRFC4648);
	const bl = byteArr.length;
	const rem = bl % 3;
	const num = bl % 3 === 0 ? parseInt(bl / 3) : parseInt(bl / 3) + 1;
	const base64Len = num * 4;
	let ba64Arr = new Uint8Array(base64Len);
	let i = 0,
		v = 0;
	/* 编码并转换为字节数组 */
	for (let j = 0; base64Len > i; i = i + 4) {
		ba64Arr[i + 0] = mapArr[byteArr[v + 0] >> 2];
		ba64Arr[i + 1] = mapArr[((byteArr[v + 0] & 0x03) << 4) + (byteArr[v + 1] >> 4)];
		ba64Arr[i + 2] = mapArr[((byteArr[v + 1] & 0x0F) << 2) + (byteArr[v + 2] >> 6)];
		ba64Arr[i + 3] = mapArr[byteArr[v + 2] & 0x3F];
		v = v + 3;
	}
	/* 有余数时的尾部处理 */
	let rfc = 0;
	if (!isRFC4648) {
		if (rem === 1) {
			ba64Arr[base64Len - 2] = 0x3D;
			ba64Arr[base64Len - 1] = 0x3D;
		} else if (rem === 2) {
			ba64Arr[base64Len - 1] = 0x3D;
		}
	} else {
		if (rem === 1) {
			rfc = 2;
		} else if (rem === 2) {
			rfc = 1;
		} else {
			rfc = 0;
		}
	}
	/* byteArray转成String */
	let ba64String = "";
	for (let i = 0; i < base64Len - rfc; i++) {
		ba64String += String.fromCharCode(ba64Arr[i]);
	}
	return ba64String;
}

/**
 * Base64解码成二进制数据（ 注意：这是解码而非解密， 本函数与 nbed64BinaryEncode()为一对 ）
 * @param {string} base64str base64格式编码的字符串
 * @return ByteArray 解码结果
 */
nbed64BinaryDecode = function(base64str) {
	const bl = base64str.length;
	const num = bl % 4;
	const rem = num === 0 ? 0 : 4 - num;
	const loop = rem === 0 ? parseInt(bl / 4) : parseInt(bl / 4) + 1;
	const nl = loop * 3;
	/* 填充被省略的'='字符'----为了遵循严谨的编程精神（JS中可选，其它语言中必须） */
	let fill = '';
	for (let i = 0; i < rem; i++) {
		fill += '=';
	}
	base64str += fill;
	/* 将字符串换为字节数组 */
	const baseUint8Arr = _base64strToByteArray(base64str);
	let newArr = new Uint8Array(nl);
	let h = 0,
		i = 0;
	/* 解码并转换为字节数组 */
	for (let w = 0; w < loop; w++) {
		let tempArr = new Uint8Array(4);
		/* 本方式性能卓越，无需遍历base64映射表，直接计算映射关系 */
		for (let y = 0; y < 4; y++) {
			let n = 0;
			let p = w * 4 + y;
			let b = baseUint8Arr[p];
			if (b >= 65 && b <= 90) {
				/* ABCDEFGHIJKLMNOPQRSTUVWXYZ */
				n = b - 65;
			} else if (b >= 97 && b <= 122) {
				/* abcdefghijklmnopqrstuvwxyz */
				const shifting = 26;
				n = b - 97 + shifting;
			} else if (b >= 48 && b <= 57) {
				/* 0123456789 */
				const shifting = 52;
				n = b - 48 + shifting;
			} else if (b === 43 || b === 45) {
				/* '+' === 43 || '-' ==== 45 */
				n = 62;
			} else if (b === 47 || b === 95) {
				/* '/' === 47 || '_' === 95 */
				n = 63;
			} else {
				h++;
			}
			tempArr[y] = n;
		}
		newArr[i + 0] = tempArr[0] << 2 | tempArr[1] >> 4;
		newArr[i + 1] = (tempArr[1] & 15) << 4 | tempArr[2] >> 2;
		newArr[i + 2] = (tempArr[2] & 3) << 6 | tempArr[3];
		i += 3;
	}
	/* byteArray转成String----为跨平台的兼容性不使用Array.slice */
	let retLen = newArr.length - h;
	let retArr = new Uint8Array(retLen);
	for (let n = 0; n < retLen; n++) {
		retArr[n] = newArr[n];
	}
	return retArr;
}

/**
 * Base64对字符串编码（ 注意：这是编码而非加密， 本函数与 nbed64StringDecode()为一对 ）
 * @param {string} str 原数据。
 * @param {boolean} isUtf8 是否采用UTF-8编码格式。默认为：true。若设置为false，则使用UTF-16编码。
 * 注意：此处指的是编码前的编码，而非编码后的base64编码，base64是无须编码的。换句话来说，本参数指的是解码后的字符串编码。
 * JS的默认编码为UTF-16，但UTF-16并不友好，很多编程语言和服务端环境都不支持UTF-16。
 * @param {boolean} isRFC4648 是否采用RFC4648编码映射规范，默认为：true。采用RFC4648规范编码的Base64符合URL安全，可用于HTTP协议与Ajax请求。
 * @return string 编码结果
 */
nbed64StringEncode = function(str, isUtf8 = true, isRFC4648 = true) {
	const byteArr = isUtf8 ? _utf16ToUtf8ToByteArray(str, 4) : _strUtf16ToByteArray(str, 4);
	return nbed64BinaryEncode(byteArr, isRFC4648);
}

/**
 * Base64解码成字符串（ 注意：这是解码而非解密， 本函数与 nbed64StringEncode()为一对 ）
 * @param {string} base64str base64格式编码的字符串
 * @param {boolean} isUtf8 是否采用UTF-8编码格式。本参数请保持与编码时的设置完全一致。
 * @return string 解码结果（UTF-16编码格式）。注意：为方便使用，解码结果会自动转换成当前程序语言的默认编码，以便开箱即用，省略二次编码。JS默认编码：UTF-16
 */
nbed64StringDecode = function(base64str, isUtf8 = true) {
	let retArr = nbed64BinaryDecode(base64str)
	let dataStr = isUtf8 ? _byteArrayToUtf8ToUtf16(retArr) : _byteArrayToUtf16(retArr);
	return dataStr;
}

/**
 * string按Utf-8编码方式转为byteArray（字符串按Utf-8编码转为字节数组，注意：JS中字符串默认为UTF-16， 因此内部会先将UTF-16转成UTF-8，然后再转成byteArray ）。
 * @summary UTF-8为1至6字节可变长字符编码，但网络主流为4字节 UTF-8，未来很长时间可能都不会改变，因此本编码中采用了：1-4字节范围的主流方式。
 * @param {string} str 原字符串。JS的String类型默认为UTF-16编码。
 * @param {number} empty 尾部追加的空字节数量。默认值为：0，本参数仅为Base64加密时服务，用于修正ByteArray创建后的长度固化问题。尽管在JS中可以省略，但理应保持严谨的编写精神。当前JS允许对数组进行溢出访问，但那样并不安全，更无法保证未来是否会有新的标准规范限制！
 * @return ByteArray 转换结果
 */
_utf16ToUtf8ToByteArray = function(str, empty = 0) {
	let k = 0;
	let strLen = str.length;
	let byteArr = new Uint8Array(strLen * 4 + empty);
	for (let i = 0; i < strLen; i++) {
		let short = str.charCodeAt(i);
		if (short > 0xFFFF) {
			byteArr[k + 0] = (0xF0 | (0x07 & (short >> 18)));
			byteArr[k + 1] = (0x80 | (0x3F & (short >> 12)));
			byteArr[k + 2] = (0x80 | (0x3F & (short >> 6)));
			byteArr[k + 3] = (0x80 | (0x3F & short));
			k = k + 4;
		} else if (short > 0x7FF) {
			byteArr[k + 0] = (0xE0 | (0x0F & (short >> 12)));
			byteArr[k + 1] = (0x80 | (0x3F & (short >> 6)));
			byteArr[k + 2] = (0x80 | (0x3F & short));
			k = k + 3;
		} else if (short > 0x7F) {
			byteArr[k + 0] = (0xC0 | (0x1F & (short >> 6)));
			byteArr[k + 1] = (0x80 | (0x3F & short));
			k = k + 2;
		} else {
			byteArr[k] = short;
			k++;
		}
	}
	/* 为跨平台的兼容性不使用Array.slice */
	let rem = k % 3;
	let add = rem === 0 ? 0 : 3 - rem;
	let retLen = k + add;
	let retArr = new Uint8Array(retLen);
	for (let i = 0; i < retLen; i++) {
		retArr[i] = byteArr[i];
	}
	return retArr;
}

/**
 * byteArray按UTF8解码转成String（字节数组按UTF8解码成字符串，注意：JS中字符串默认编码为UTF-16， 而不是UTF-8 ）
 * 解码过程步骤：1.byteArray（按UTF8）转为UTF-16，2.UTF-16转字符串。
 * @param {Uint8Array} byteArr 原字符串。
 * @return String 转换结果
 */
_byteArrayToUtf8ToUtf16 = function(byteArr) {
	let i = 0,
		a = 0,
		b = 0,
		c = 0,
		d = 0,
		t = 0,
		short = 0;
	let utf16Str = '';
	let strLen = byteArr.length;
	while (strLen > i) {
		t = byteArr[i];
		if (t >> 3 === 0x1E) {
			a = byteArr[i + 0] % 0xF0;
			b = byteArr[i + 1] % 0x80;
			c = byteArr[i + 2] % 0x80;
			d = byteArr[i + 3] % 0x80;
			short = (a << 18) + (b << 12) + (c << 6) + d;
			i += 4;
		} else if (t >> 4 === 0x0E) {
			a = byteArr[i + 0] % 0xE0;
			b = byteArr[i + 1] % 0x80;
			c = byteArr[i + 2] % 0x80;
			short = (a << 12) + (b << 6) + c;
			i += 3;
		} else if (t >> 5 === 0x06) {
			a = byteArr[i + 0] % 0xC0;
			b = byteArr[i + 1] % 0x80;
			short = (a << 6) + b;
			i += 2;
		} else {
			short = byteArr[i + 0];
			i++;
		}
		utf16Str += String.fromCharCode(short);
	}
	return utf16Str;
}

/**
 * string按Utf-16编码方式转为byteArray（字符串按Utf-16编码转为字节数组）。
 * @summary ECMAScript明确规范：JavsScript中string类型统一为UTF-16编码。因此，任意字符均在内存中占用2个字节，不论英文、中文或其他外文
 * @param {string} str 原字符串。
 * @param {number} empty 尾部追加的空字节数量。默认值为：0，本参数仅为Base64加密时服务，用于修正ByteArray创建后的长度固化问题。尽管在JS中可以省略，但理应保持严谨的编写精神。当前JS允许对数组进行溢出访问，但那样并不安全，更无法保证未来是否会有新的标准规范限制！
 * @return ByteArray 转换结果
 */
_strUtf16ToByteArray = function(str, empty = 0) {
	let i = 0;
	let k = 0;
	let strLen = str.length;
	let utf16Len = str.length * 2 + empty;
	let byteArr = new Uint8Array(utf16Len);
	for (let i = 0; i < strLen; i++) {
		k = i * 2;
		let uint16 = str.charCodeAt(i);
		byteArr[k + 0] = uint16 & 0xFF;;
		byteArr[k + 1] = (uint16 - byteArr[k]) / 0x100;
	}
	return byteArr;
}

/**
 * byteArray按UTF16解码转成String（字节数组按UTF16解码成字符串 ）
 *  解码过程步骤：1.byteArray（按UTF16）转为UTF-16，2.UTF-16转字符串。
 * @param {Uint8Array} byteArr 原字符串。
 * @return String 转换结果
 */
_byteArrayToUtf16 = function(byteArr) {
	let i = 0;
	let short = 0;
	let utf16Str = '';
	let strLen = byteArr.length;
	while (strLen > i) {
		short = byteArr[i] + (byteArr[i + 1] << 8);
		utf16Str += String.fromCharCode(short);
		i += 2;
	}
	return utf16Str;
}

/**
 * ba64String转为byteArray（字符串转字节数组, base64专用）
 * @param {string} base64str base64格式的字符串
 * @return ByteArray 转换结果
 */
_base64strToByteArray = function(base64str) {
	const realLen = base64str.length;
	let byteArr = new Uint8Array(realLen);
	for (let i = 0; i < realLen; i++) {
		byteArr[i] = base64str.charCodeAt(i);
	}
	return byteArr;
}

/**
 * key转为byteArray（字符串转字节数组, 密钥专用）
 * @param {string} key 密钥
 * @return ByteArray 转换结果
 */
_keyToByteArray = function(key) {
	let byteArr = new Uint8Array(key.length);
	for (let i = 0; i < byteArr.length; i++) {
		byteArr[i] = key.charCodeAt(i);
	}
	return byteArr;
}

/**
 * 取随机掩码
 * @param {number} maskNumber 掩码的数量。缺省为：32，范围：32 - 65535。当值小于32时为32，大于65535时为65535。
 * @return ByteArray 转换结果
 */
_maskToByteArray = function(maskNumber) {
	maskNumber = maskNumber < 32 ? 32 : maskNumber;
	maskNumber = maskNumber > 65535 ? 65535 : maskNumber;
	let byteArr = new Uint8Array(maskNumber);
	for (let i = 0; i < byteArr.length; i++) {
		byteArr[i] = parseInt(Math.random() * 256);
	}
	return byteArr;
}

/**
 * short转为byteArray（短整数转字节数组）
 * @param {short} twoByte 短整数。
 * @return ByteArray 转换结果
 */
_shortToByteArray = function(twoByte) {
	let byteArr = new Uint8Array(2);
	byteArr[0] = twoByte & 0xFF;;
	byteArr[1] = (twoByte - byteArr[0]) / 0x100;
	return byteArr;
}

/**
 * 从base64中提取short（ 提取mask的长度 ）
 * @param {Uint8Array} byteArr base64头部字节数组。
 * @return short 表示mask的长度
 */
_byteArrayGetShort = function(byteArr) {
	let maskLen = (byteArr[1] << 8) + byteArr[0];
	return maskLen;
}

/**
 * key转为byteArray（字符串转字节数组, base64编码映射表专用）
 * @param {boolean} rfc4648 是否使用RFC4648映射标准，默认为：false
 * @return ByteArray 转换结果
 */
_mapToByteArray = function(rfc4648 = false) {
	let map = '';
	if (rfc4648) {
		/* 以'-_'结尾的映射表为RFC4648标准的安全URL国际规范，主要用与HTTP协议，如：Ajax请求 */
		map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
	} else {
		/* 以'+/'结尾的映射表为国际统一的原生标准。但URL请求中：+会被转成空格，/会被解析成路径，因此不符合URL安全 */
		map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	}
	let byteArr = new Uint8Array(map.length);
	for (let i = 0; i < byteArr.length; i++) {
		byteArr[i] = map.charCodeAt(i);
	}
	return byteArr;
}
