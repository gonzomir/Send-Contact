var contact,
    startBut = document.getElementById('start'),
    sendBut = document.getElementById('send');

startBut.onclick = function(){
  console.log('START');
  var pick = new MozActivity({
    name: "pick",
    data: {
      type: "webcontacts/contact"
    }
  });

  pick.onsuccess = function () {
    contact = this.result;
    if( contact ){
      sendBut.removeAttribute('disabled');
    }
  };

  pick.onerror = function(){
    sendBut.setAttribute('disabled', 'disabled');
  }

};

sendBut.onclick = function(){
  if( contact ){
    var body = contact.name + ' ' + contact.number;
    var sms = new MozActivity({
      name: "new", // Possible compose-sms in future versions
      data: {
        type: "websms/sms",
        number: '',
        body: body
      }
    });
    sms.onsuccess = function(){
    };
    sms.onerror = function(){
      console.log(this);
      alert('Error');
    };
  }
};

