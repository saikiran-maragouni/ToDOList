module.exports.getDate = getDate;

function getDate(){
    const today = new Date();

const options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};
return today.toLocaleDateString("en-US", options);
}

//module.exports.getDay = getDay;  instead of this we can write in short cut
exports.getDay = getDay;

function getDay(){
    const today = new Date();

const options = {
  weekday: "long",
};

return today.toLocaleDateString("en-US", options);
}