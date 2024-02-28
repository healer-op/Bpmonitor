let email
function submit(){
    email = document.getElementById('mail').value
    localStorage.setItem('email',email)
    
}


var Name;
let age;
let sex;
function details_submit(){
    Name=document.getElementById('name').value
    age=document.getElementById('age').value
    sex=document.getElementById('sex').value
    localStorage.setItem('name',Name)
    localStorage.setItem('age',Age)
    localStorage.setItem('sex',Sex)
    
}

let HR
let OS
let hours
let minutes
function measure_click (){
    date_data=new Date()
    hours=date_data.getHours()
    temp_minutes=date_data.getMinutes()
    minutes=temp_minutes.toString().padStart(2, '0');
    const min_heart=80
    const max_heart=100
    let heart_temp=Math.random() * (max_heart-min_heart) + min_heart
    let heart=heart_temp.toPrecision(3)
    const min_spo2=93
    const max_spo2=98
    let spo2_temp=Math.random() * (max_spo2-min_spo2) + min_spo2
    let spo2=spo2_temp.toPrecision(3)
    console.log(heart)
    console.log(spo2)
    HR=heart
    OS=spo2

    document.getElementById("email").innerText = localStorage.getItem('email')
    document.getElementById("name").innerText = localStorage.getItem('name')
    document.getElementById("age").innerText = localStorage.getItem('age')
    document.getElementById("sex").innerText = localStorage.getItem('sex')
    console.log(localStorage.getItem('sex'))
    document.getElementById("so").innerText = `${spo2}`
    document.getElementById("time").innerText = `${hours}:${minutes}`
    document.getElementById("bp").innerText = `${heart}`
    
  //   let innerHtml = `
      
  //   <div>
  //   <div class="value" style="color:wheat">${hours}:${minutes}</div>
  //   <div class="label" style="color:white">Time</div>
  // </div>
  // <div>
  //   <div class="value" style="color:wheat">${heart}</div>
  //   <div class="label" style="color:red">Heart Rate</div>
  // </div>
  // <div>
  //   <div class="value" style="color:wheat">${spo2}</div>
  //   <div class="label" style="color:white">SPO2</div>
  // </div>
  //   `;
  //   document.querySelector('.output_data').innerHTML = '<div class="label">LOADING...</div>';
  //   setTimeout(()=>{
  //       document.querySelector('.output_data').innerHTML = innerHtml;

  //   },5000)
    
  };

function mail(){
  

    id=localStorage.getItem('email')
    identification=localStorage.getItem('name')
    const mailtoLink = `mailto:${id}?subject=OXYMETER&body=dear ${identification},%0D%0A%0D%0A the time of recording was ${hours}:${minutes}%0D%0A%0D%0Ayour heart rate was ${HR} beats per minute%0D%0A%0D%0Aoxygen saturation was ${OS} percent`;

    window.location.href = mailtoLink;
    
}

$(document).ready(function(){
  $("#button").click(function(){
      domtoimage.toBlob(document.getElementById('showScroll'))
      .then(function (blob) {
          window.saveAs(blob, `${localStorage.getItem('name')}.png`);
      });
  })
})








