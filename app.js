let r = document.getElementById('r');
let o = document.getElementById('o');
let y = document.getElementById('y');
let g = document.getElementById('g'); 
let b = document.getElementById('b');
let u = document.getElementById('u');
let v = document.getElementById('v');
 
r.addEventListener('mouseover', () => {
 if (r.style.backgroundColor !== 'lightgrey') {
    r.style.backgroundColor = 'lightgrey';
  } else if (r.style.backgroundColor = 'lightgrey') {
     r.style.backgroundColor = '#f00';
  }
 });                     

o.addEventListener('mouseover', () => {
 if (o.style.backgroundColor !== 'grey') {
    o.style.backgroundColor = 'grey';
  } else if (o.style.backgroundColor = 'grey') {
     o.style.backgroundColor = '#fe6230'; 
  }
 }); 
 
y.addEventListener('mouseover', () => {
 if (y.style.backgroundColor !== 'lightgrey') {
    y.style.backgroundColor = 'lightgrey';
  } else if (y.style.backgroundColor = 'lightgrey') {
     y.style.backgroundColor = '#fef600';
  }
 }); 

g.addEventListener('mouseover', () => {
 if (g.style.backgroundColor !== 'grey') {
    g.style.backgroundColor = 'grey';
  } else if (g.style.backgroundColor = 'grey') {
     g.style.backgroundColor = '#00bc00';
  }
 }); 

b.addEventListener('mouseover', () => {
 if (b.style.backgroundColor !== 'lightgrey') {
    b.style.backgroundColor = 'lightgrey';
  } else if (b.style.backgroundColor = 'lightgrey') {
     b.style.backgroundColor = '#0048fe';
  }
 }); 

u.addEventListener('mouseover', () => {
 if (u.style.backgroundColor !== 'grey') {
    u.style.backgroundColor = 'grey';
  } else if (u.style.backgroundColor = 'grey') {
     u.style.backgroundColor = '#000083';
  }
 }); 

v.addEventListener('mouseover', () => {
 if (v.style.backgroundColor !== 'lightgrey') {
    v.style.backgroundColor = 'lightgrey';
  } else if (v.style.backgroundColor = '#lightgrey') {
     v.style.backgroundColor = '#30009b';
  }
 }); 
