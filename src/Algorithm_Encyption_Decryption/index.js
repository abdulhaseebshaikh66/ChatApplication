import CryptoJS from 'crypto-js';
// import NodeRSA from 'node-rsa';
// const rsa = new NodeRSA({b: 512}); //for rsa

// let user_message = 'This is Information Security Project testing.';

export const generate_type = () => {
  let stackon = '';
  for (i = 0; i < 3; i++) {
    rand = Math.floor(Math.random() * 4) + 1;
    stack = rand.toString();
    stackon = stackon.concat(stack);
  }
  // console.log('====================================');
  // console.log(stackon);
  // console.log('====================================');
  let enc_type = CryptoJS.AES.encrypt(stackon, 'A').toString();
  enc_type = enc_type.substr(10, enc_type.length);
  return enc_type;
};

const decrypt_type = type => {
  type = 'U2FsdGVkX1' + type;
  return CryptoJS.AES.decrypt(type, 'A').toString(CryptoJS.enc.Utf8);
};

export const generate_key = type => {
  return CryptoJS.SHA512(type).toString();
};

function AES(plaintext, publickey) {
  let encrypt = CryptoJS.AES.encrypt(plaintext, publickey).toString();
  return encrypt;
}

function AESdec(encrypted_text, publickey) {
  return CryptoJS.AES.decrypt(encrypted_text, publickey).toString(
    CryptoJS.enc.Utf8,
  );
}
function DES(string1, publickey) {
  let encrypt2 = CryptoJS.DES.encrypt(string1, publickey).toString();
  return encrypt2;
}
function DESdec(encrypted_text, publickey) {
  dec = CryptoJS.DES.decrypt(encrypted_text, publickey).toString(
    CryptoJS.enc.Utf8,
  );
  return dec;
}
function tripleDES(plaintext, publickey) {
  let encrypt2 = CryptoJS.TripleDES.encrypt(plaintext, publickey).toString();
  return encrypt2;
}
function tripleDESdec(encrypted_text, publickey) {
  return CryptoJS.TripleDES.decrypt(encrypted_text, publickey).toString(
    CryptoJS.enc.Utf8,
  );
}
// function RSA(plaintext) {
//   const text = plaintext;
//   const encrypted = rsa.encrypt(text, 'base64');
//   return encrypted;
// }
// function RSAdec(encrypted_text) {
//   const decrypted = rsa.decrypt(encrypted_text, 'utf8');
//   return decrypted;
// }
// CryptoJS.TripleDES
function rabbit(plaintext, publickey) {
  let encrypt3 = CryptoJS.Rabbit.encrypt(plaintext, publickey).toString();
  return encrypt3;
}
function rabbitdec(encrypted_text, publickey) {
  return CryptoJS.Rabbit.decrypt(encrypted_text, publickey).toString(
    CryptoJS.enc.Utf8,
  );
}
export const encrypt = function (plaintext, enc_type) {
  const key = generate_key(enc_type);
  const type = decrypt_type(enc_type);
  // console.log(type);
  let encryption = plaintext;
  for (i = 0; i < 3; i++) {
    rand = parseInt(type[i]);
    switch (rand) {
      case 1:
        encryption = AES(encryption, key);
        break;
      case 2:
        encryption = DES(encryption, key);
        break;
      case 3:
        encryption = tripleDES(encryption, key);
        break;
      case 4:
        encryption = rabbit(encryption, key);
        break;
      default:
    }
  }
  return encryption;
};
export const decrypt = function (text_to_decrypt, enc_type) {
  // console.log('Here');
  const key = generate_key(enc_type);
  const type = decrypt_type(enc_type);
  let decryption = text_to_decrypt;
  for (i = 0; i < 3; i++) {
    rand = parseInt(type[2 - i]);
    switch (rand) {
      case 1:
        decryption = AESdec(decryption, key);
        break;
      case 2:
        decryption = DESdec(decryption, key);
        break;
      case 3:
        decryption = tripleDESdec(decryption, key);
        break;
      case 4:
        decryption = rabbitdec(decryption, key);
        break;
      default:
      // code block
    }
  }
  // console.log('EndHere');
  return decryption;
};

// const type = generate_type();
// const key = generate_key(type);
// let enc_msg = enc(user_message);
// console.log('Encrypted: ' + type);
// console.log('\nEncrypted: ' + key);
// console.log(enc_msg);
// let encrypt_type = CryptoJS.AES.encrypt(type, 'A');
// console.log(encrypt_type.toString());
// console.log('------:\n', dec(enc_msg), enc_msg.length);
