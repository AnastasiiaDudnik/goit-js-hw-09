function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var l=o("eWCmQ");const u=document.querySelector(".form");let i=1,s=0;u.addEventListener("submit",(function(t){t.preventDefault();const n=u.elements.delay.value;let r=u.elements.step.value;const o=u.elements.amount.value,a=setTimeout((()=>{const t=setInterval((()=>{clearTimeout(a),function(t,n){Math.random()>.3?e(l).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`):e(l).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}(i,r),i+=1,s+=1,r=Number(n)+Number(r),o!=s||clearInterval(t)}),Number(n)+Number(r))}),n)}));
//# sourceMappingURL=03-promises.d290a036.js.map
