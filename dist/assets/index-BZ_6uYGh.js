(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelectorAll(".fade-in"),s={threshold:.1},o=new IntersectionObserver((r,e)=>{r.forEach(t=>{t.isIntersecting&&(t.target.classList.add("visible"),e.unobserve(t.target))})},s);i.forEach(r=>{o.observe(r)})});const u=document.getElementById("musicToggle"),l=document.getElementById("musicIcon"),c=document.getElementById("backgroundMusic");u.addEventListener("click",()=>{c.paused?(c.play(),l.className="fas fa-pause"):(c.pause(),l.className="fas fa-play")});