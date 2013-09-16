/***
 *
 * convert 
 *
 * **/

var hexArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function c10to16(data){
  var index = 0;
  var ret = [];
  while(data) {
    index = data % 16;
    data = +((data / 16) + '').split('.')[0];
    ret.unshift(hexArray[index]);
  }
  ret = ret.join('');
  return ret;
}

function c16to10(data){
  data = (data + '').split('');
  var len = data.length;
  var ret = 0;
  while(len){
    len--;
    var d = data.splice(0, 1)[0];
    ret += hexArray.indexOf(d) * Math.pow(16, len);
  }
  return ret;
}


