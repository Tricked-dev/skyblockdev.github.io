let str = `   <link rel="manifest" href="/manifest.json" />
        <link href="/assets/icons/icon-48x48.png" rel="icon" type="image/png" sizes="48x48" />
        <link href="/assets/icons/icon-72x72.png" rel="icon" type="image/png" sizes="72x72" />
        <link rel="apple-touch-icon" href="/assets/icons/icon-512x512.png" />`;

let out = [];
for (i of str.split('\n').map((x) =>
	x
		.trim()
		.split(' ')
		.slice(1)
		.join(' ')
		.replace('/>', '')
		.trim()
		.split(' ')
		.map((x) => x.split('='))
)) {
	let obj = {};
	for (item of i) {
		obj[item[0]] = item[1];
	}
	out.push(obj);
}

console.log(out);
