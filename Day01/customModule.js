exports.customModule=function(){
    var date=new Date().toLocaleString("en-US",{timeZone:"America/New_York"});
    //return new Date(date);
    return date;
}