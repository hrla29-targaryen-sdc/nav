const fs = require('fs');

const {	keyword , image1, image2 } = require('./randomGenerator.js');

// \copy nordstroms from 'C:\web_hr\sdc\nordstrom-server-nav\seed-data\pg_copy.csv' with (format csv, delimiter '|');

//copy nordstroms from '/home/ubuntu/projects/seed_func/pg_copy.csv' with (format csv, delimiter '|');

const writeStream = fs.createWriteStream('./seed-data/pg_copy.csv', {flags : 'a'}); 

let counter = 1
const sampleData = () => {
	let oneRow = ''
	oneRow += `${counter}|`
	oneRow += `${keyword()}|`
	oneRow += `{${image1()}}|`
	oneRow += `{${image2()}}`
	oneRow += '\n'

	counter++
	return oneRow
}

let loop = 10 // 10000000 - 1
const mainGenerator = async () => {
	if (loop % 1000 === 0) {
		process.stdout.write('.')
	}
	let ok = true
	while(ok && loop > 0) {
		loop--
		ok = await writeStream.write(sampleData(), 'utf-8')
	}
	if (loop > 0) {
		writeStream.once('drain', mainGenerator)
	}

	if (loop === 0) {
		//last time
		await writeStream.write(sampleData(), 'utf-8')
	}
}


process.stdout.write('processing.')
mainGenerator()
