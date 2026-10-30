(function(){
  // লেআউট ফিক্স: কিবোর্ড ওঠা-নামার সময় হেডার/ট্যাব বার ডুপ্লিকেট দেখানো বন্ধ করে
  var s = document.createElement('style');
  s.textContent =
    'html,body{height:100%;overflow:hidden!important}' +
    'body{height:100dvh;display:flex;flex-direction:column}' +
    '#main{flex:1;min-height:0;overscroll-behavior:contain;transform:translateZ(0)}' +
    '.hd,.nav{flex:none}' +
    '.hd{position:relative!important}';
  document.head.appendChild(s);

  function fit(){ document.body.style.height = window.innerHeight + 'px'; }
  window.addEventListener('resize', fit);
  window.addEventListener('orientationchange', fit);
  fit();

  // সার্চ বক্সে Enter চাপলে কিবোর্ড বন্ধ হবে
  document.addEventListener('keydown', function(e){
    if(e.key === 'Enter' && e.target && e.target.id === 'q'){ e.target.blur(); }
  });
})();
