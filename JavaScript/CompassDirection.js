/////////////////////////////////////////////////
// The Below function converts a float into
// a string depending on compass direction 
// of float decimal
/////////////////////////////////////////////////



function direction(data) {
  var direct;
  if (data >= 348.75 && data <= 360) {
    direct = "North";
  }
  if (data >= 0 && data <= 11.25){
    direct = "North";
  }
  if (data >= 11.25 && data <= 33.75){
    direct = "North by North East";
  };
  if (data >= 33.75 && data <= 56.25){
    direct = "North East";
  };
  if (data >= 56.25 && data <= 78.75){
    direct = "East by North East";
  };
  if (data >= 78.75 && data <= 101.25){
    direct = "East";
  };
  if (data >= 101.25 && data <= 123.75){
    direct = "East by South East";
  };
  if (data >= 123.75 && data <= 146.25){
    direct = "South East";
  };
  if (data >= 146.25 && data <= 168.75){
    direct = "South by South East";
  };
  if (data >= 168.75 && data <= 191.25){
    direct = "South";
  };
  if (data >= 191.25 && data <= 213.75){
    direct = "South by South West";
  };
  if (data >= 213.75 && data <= 236.25){
    direct = "South West";
  };
  if (data >= 236.25 && data <= 258.75){
    direct = "West by South West";
  };
  if (data >= 258.75 && data <= 281.25){
    direct = "West";
  };
  if (data >= 281.25 && data <= 303.75){
    direct = "West by North West";
  };
  if (data >= 303.75 && data <= 326.25){
    direct = "North West";
  };
  if (data >= 326.25 && data <= 348.75 ){
    direct = "North by North West";
  };
  return direct;
};