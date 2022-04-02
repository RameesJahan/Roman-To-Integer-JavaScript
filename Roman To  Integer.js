/*
*@param{String} s - input Roman
*@return{number} num - return integer of roman
*/
var romanToInt = function(s) {
    if(s == null){
      return -1;
    }
    var num = chrToInt(s.charAt(0));
    var cur,pre;
    for(var i = 1; i < s.length;i++)
    {
      cur = chrToInt(s.charAt(i));
      pre = chrToInt(s.charAt(i-1));
      if(cur <= pre){
        num += cur;
      }else{
        num = num - pre * 2 + cur;
      }
    }
    return num;
};

function chrToInt(c){
    switch (c){
            case 'I':return 1;
            case 'V':return 5;
            case 'X':return 10;
            case 'L':return 50;
            case 'C':return 100;
            case 'D':return 500;
            case 'M':return 1000;
            default:return-1;
    }

}
//This a sample input
console.log(romanToInt('MMXXII'));
/**
* Output of this code is 2022
*
**/
