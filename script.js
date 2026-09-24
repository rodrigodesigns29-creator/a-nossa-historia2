const screens = [...document.querySelectorAll(".screen")];

function show(id){
  screens.forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}

function openGift(){
  show("giftScreen");
}

function openBox(){
  const wrap = document.querySelector(".gift-wrap");
  wrap.classList.add("open");
  document.getElementById("giftHint").textContent = "Espera... há memórias lá dentro ❤️";
  setTimeout(() => {
    buildPhotos();
    show("photosScreen");
  }, 1250);
}

function buildPhotos(){
  const cloud = document.getElementById("photoCloud");
  cloud.innerHTML = "";
  const positions = [
    [16,30,-12],[36,20,7],[58,28,-6],[79,22,12],
    [25,66,6],[49,70,-9],[73,67,5],[50,43,2]
  ];
  positions.forEach((p,i)=>{
    const card=document.createElement("div");
    card.className="photo";
    card.style.left=p[0]+"%";
    card.style.top=p[1]+"%";
    card.style.setProperty("--r",p[2]+"deg");
    card.style.animationDelay=(i*.09)+"s";
    const n=String(i+1);
    card.innerHTML=`<img src="fotos/foto${n}.jpg" alt="Memória ${n}" onerror="this.src='fotos/placeholder.svg'">`;
    cloud.appendChild(card);
  });
}

function showLetter(){ show("letterScreen"); burstHearts(5); }
function showFlowers(){ buildTulips(); show("flowersScreen"); burstHearts(10); }
function showReasons(){ show("reasonsScreen"); burstHearts(4); }
function showMusic(){ show("musicScreen"); burstHearts(4); }
function showFinal(){ show("finalScreen"); burstHearts(20); }

function buildTulips(){
  const box=document.getElementById("tulips");
  if(box.dataset.done) return;
  box.dataset.done="1";
  for(let i=0;i<15;i++){
    const t=document.createElement("div");
    t.className="tulip";
    const angle=-28+i*4;
    t.style.left=(145+Math.sin(i*1.8)*70)+"px";
    t.style.height=(160+Math.random()*80)+"px";
    t.style.transform=`rotate(${angle}deg)`;
    t.style.zIndex=i;
    t.style.opacity=.72+Math.random()*.28;
    box.appendChild(t);
  }
}

function burstHearts(n){
  const area=document.getElementById("hearts");
  for(let i=0;i<n;i++){
    const h=document.createElement("div");
    h.className="floating-heart";
    h.textContent=Math.random()>.5?"♥":"♡";
    h.style.left=(10+Math.random()*80)+"%";
    h.style.bottom=(-10-Math.random()*10)+"%";
    h.style.fontSize=(12+Math.random()*18)+"px";
    h.style.setProperty("--x",(Math.random()*140-70)+"px");
    h.style.animationDelay=(Math.random()*1.5)+"s";
    area.appendChild(h);
    setTimeout(()=>h.remove(),6500);
  }
}

function toggleMusic(){
  alert("Aqui podes colocar o teu link do Spotify/YouTube e substituir este botão.");
}

function goHome(){
  show("intro");
}
