"use strict"

const crypto = require('crypto');
const fs=require("fs")
const {argv}=require("process")
const minimist = require('minimist')

const algorithm = 'aes-192-cbc';
const iv = Buffer.from("93fbfe401ca163c72b806c687a064eda");
const getPassword=()=>(minimist(argv.slice(2)).password)

const password = getPassword()

let key = crypto.scryptSync(password, 'GfG', 24)

const encrypt = (text) => {
    const cipher = crypto.createCipheriv(algorithm, key, ivstring);
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex')
    };
};
var ivstring = iv.toString('hex').slice(0, 16);
const decrypt = (encryptedData) => {
    const encryptedText = Buffer.from(encryptedData, 'hex');
   
    const decipher = crypto.createDecipheriv(algorithm, key, ivstring);

    const decrypted = Buffer.concat([decipher.update(encryptedText), decipher.final()]);

    return decrypted.toString('utf-8');
};

module.exports = {
    encrypt,
    decrypt
};