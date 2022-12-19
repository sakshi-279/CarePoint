
function Ragister_data(e){  //function scope  
     //function calling in register page
     e.preventDefault(); //defaul behaviou ko rokta hai
      
      //console.log(name.value);
      let email=document.getElementById('email');
      //console.log(email.value);
      let fname=document.getElementById('fname');
      let lname=document.getElementById('lname');
      let fathername=document.getElementById('fathername');
      let mothername=document.getElementById('mothername');
      let date=document.getElementById('date');
      let age=document.getElementById('age');
      let number=document.getElementById('number');
     
      let cat=document.getElementById('cat');
      console.log(cat);
      let mar=document.getElementById('mar');
      let blood=document.getElementById('blood');
      let male=document.getElementById('male');
      let city=document.getElementById('city');
      let add=document.getElementById('add');
      let password=document.getElementById('password');
      //console.log(password.value);
      let obj={
          fname:fname.value,
          lname:lname.value,
          fathername:fathername.value,
          mothername:mothername.value,
          male:male.value,
          email:email.value,
          password:password.value,
          age:age.value,
          number:number.value,
          cat:cat.value,
          mar:mar.value,
          blood:blood.value,
          date:date.value,
          city:city.value,
          add:add.value,
          
      }
      let collection=JSON.parse(window.localStorage.getItem('register_patient_data')) || [];
      console.log(collection);
 
      
      collection.push(obj);
      window.localStorage.setItem('register_patient_data',JSON.stringify(collection));
      window.alert("Registration Successfull");
 }
 function Contact_data(e){ //function calling in contact page
     e.preventDefault();

     let fname=document.getElementById('fname');
     let lname=document.getElementById('lname');
     let number=document.getElementById('number');


      //console.log(name.value);
      let email=document.getElementById('email');
      //console.log(email.value);

      let message=document.getElementById('message');
      //console.log(message.value);
      let collection_data=JSON.parse(window.localStorage.getItem('contact_patient_us'))  || [];
      let obj={
          fname:fname.value,
          lname:lname.value,
          number:number.value,
          email:email.value,
          message:message.value,
      };
      collection_data.push(obj);
      window.localStorage.setItem('contact_patient_us',JSON.stringify(collection_data));
      window.alert('contact data send successfully');

 }
 function Page(first,second){
     if(first=='Logout'){
          window.confirm(second);
          window.localStorage.removeItem('session');
          window.location.pathname='/Login.html';
     }
 }
 
 function log_in(e){
     e.preventDefault();
     let email=document.getElementById('email');
     //console.log(email.value);
     let password=document.getElementById('password');
     //console.log(password.value);

     let user=JSON.parse(window.localStorage.getItem('register_patient_data'));
     //console.log(user.value);
     let thik=find_user(email,password,user);
     if(thik){
          let session={
               data:thik,
          }
          window.alert('login successfully');
          window.localStorage.setItem('session',JSON.stringify(session));
          window.location.pathname='/Dashboard.html';
     }else{
          window.alert('Invalid Username And Password');
     }



 }
 function find_user(email,password,user){
     let position=-1;
     let counter=0;
     try{
          for(;;){
               if(user[counter].email==email.value && user[counter].password==password.value){
                    position=counter;
                    break;
               }else{
                    counter++;
               }if(counter==user.length){
                    break;
               }
          }

     }catch(error){

     }if(position==-1){
          console.log('wrong');
          console.log(position);
          return;
     }else{
          return user[position];
     }
 }
 //IIfe 
 (function session(){
     let so=window.localStorage.getItem('session');
     
     if((so==null)|| (so=='object')){
          console.log('session nahi hai');
          if(window.location.pathname=='/Dashboard.html'){
               window.location.href='Login.html';

          }
     }else{
          console.log('session hai')
               if(window.location.pathname=='/Login.html'){
                    window.location.href='Dashboard.html';
          }
     }
    
})();
