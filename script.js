document.querySelectorAll('a.wa').forEach(link=>{
 const message=link.dataset.service?`Olá! Vi o site da Caçamba Joinville e gostaria de um orçamento para ${link.dataset.service}.`:'Olá! Vi o site da Caçamba Joinville e gostaria de consultar o aluguel de uma caçamba.';
 link.href='https://wa.me/5547992170020?text='+encodeURIComponent(message);
 link.target='_blank';link.rel='noopener noreferrer';
});
