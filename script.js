var contact;

document.getElementById('start').onclick = function(){
  console.log('START');
  var pick = new MozActivity({
    name: "pick",
    data: {
      type: "webcontacts/contact"
    }
  });


  console.log(pick);

  pick.onsuccess = function () {
    console.log("got contact");
    contact = this.result;
    if( contact ){
      console.log( "Name " + contact.name + " number "+ contact.number );
    }
  };

  pick.onerror = function(){
    console.log(this);
  }

};

document.getElementById('send').onclick = function(){
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
      alert('contact sent');
    };
    sms.onerror = function(){
      console.log(this);
      alert('error');
    };
  }
};

