const {
    encrypt,
    decrypt
    } = require("./sifra")
const fs=require("fs")
const PATH = "./word.txt"
const DECRYPTH_PATH = "ciphered.txt"


     fs.readFile(PATH,'utf8',function(err,data){
         if(!err){
            console.log(encrypt(data))
         }   
    })

    fs.readFile(DECRYPTH_PATH,'utf8',function(err,data){
        if(!err){
            console.log(decrypt(data))
        }
    })

