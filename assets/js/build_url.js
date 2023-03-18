function jiami(str, num) {
    var newStr = "";
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
        newStr += String.fromCharCode((str.charCodeAt(i) - 65 + num + 26) % 26 + 65)
      }
      else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
        newStr += String.fromCharCode((str.charCodeAt(i) - 97 + num + 26) % 26 + 97)
      }
      //特殊符号不做处理
      else newStr += String.fromCharCode(str.charCodeAt(i));
    }
    // console.log(newStr);
    return newStr;
  }

function jiemi(str, num) {
    var newStr = "";
    for (let i = 0; i < str.length; i++) {
        // str.chatCodeAt(i);
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
        newStr += String.fromCharCode((str.charCodeAt(i) - 65 - num + 26) % 26 + 65)
        }
        else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
        newStr += String.fromCharCode((str.charCodeAt(i) - 97 - num + 26) % 26 + 97)
        }
        //特殊符号不做处理
        else newStr += String.fromCharCode(str.charCodeAt(i));
    }
    // console.log(newStr);
    return newStr;
}

function build_url(){
    var url = encodeURI(document.querySelector('#url').value);
    url = document.location.href + 'api/?username=' + this.jiami(url,5);
    console.log(url)
    document.getElementById("b_url").innerHTML=`<a href=${url} target='_blank'>${url}</a>`;
}
