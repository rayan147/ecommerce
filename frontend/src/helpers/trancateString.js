const trancateString = (str='', maxLength=15)=>{
 if( str.length > maxLength){
     return   `${str.substring(0,maxLength)}...`
 }
 return str
}

export default trancateString