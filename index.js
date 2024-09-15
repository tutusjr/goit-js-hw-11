import{i as n,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerPolicy&&(e.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?e.credentials="include":s.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(s){if(s.ep)return;s.ep=!0;const e=r(s);fetch(s.href,e)}})();const u="45998239-83277c8f1384b713dfba7e075",i=document.querySelector(".search-input"),m=document.querySelector(".search-btn"),l=document.querySelector(".images"),p=document.querySelector(".loading-message");m.addEventListener("click",async c=>{c.preventDefault(),i.value=i.value.trim(),l.innerHTML="",p.style.display="block";try{const t=await fetch(`https://pixabay.com/api/?key=${u}&q=${i.value}&image_type=photo`);if(!t.ok){n.error({title:"Error",message:`An error occurred: ${t.statusText}`,position:"topRight",backgroundColor:"red"});return}const r=await t.json();if(r.hits.length===0)n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});else{const o=r.hits.map(e=>`
        <li class="image">
            <a class="image-link" href="${e.largeImageURL}"><img class="img" src="${e.webformatURL}" alt="${e.tags}"></a>
            <div class="image-info">
              <p class="image-desc">
               <span class="desc title">Likes</span> 
               <span class="desc value">${e.likes}</span> 
              </p>
              <p class="image-desc">
               <span class="desc title">Views</span> 
               <span class="desc value">${e.views}</span> 
              </p>
              <p class="image-desc">
               <span class="desc title">Comments</span> 
               <span class="desc value">${e.comments}</span>
              </p>
              <p class="image-desc">
               <span class="desc title">Downloads</span> 
               <span class="desc value">${e.downloads}</span>
              </p>
            </div>
        </li>
        `).join("");l.insertAdjacentHTML("beforeend",o),new d(".image a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom",backgroundColor:"red"}).refresh()}}catch(t){n.error({title:"Error",message:`An error occurred: ${t.message}`,position:"topRight",backgroundColor:"red"})}finally{p.style.display="none"}});
//# sourceMappingURL=index.js.map
