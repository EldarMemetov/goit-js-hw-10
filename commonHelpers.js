import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as h,i}from"./assets/vendor-651d7991.js";const e={datetimePicker:document.querySelector("#datetime-picker"),startBtn:document.querySelector("[data-start]"),daysEl:document.querySelector(".value[data-days]"),hoursEl:document.querySelector(".value[data-hours]"),minutesEl:document.querySelector(".value[data-minutes]"),secondsEl:document.querySelector(".value[data-seconds]")};let a=null,u=null;const f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){a=t[0];const n=new Date;a.getTime()<=n.getTime()?(i.error({title:"Error",message:"Please choose a date in the future!",position:"topRight"}),e.startBtn.disabled=!0):e.startBtn.disabled=!1}};h(e.datetimePicker,f);e.startBtn.addEventListener("click",()=>{a&&(e.startBtn.disabled=!0,u=setInterval(()=>{const t=Date.now(),n=a-t;if(n<0){clearInterval(u),i.success({title:"Countdown Finished",message:"The countdown has reached the end!",position:"center"}),e.startBtn.disabled=!1;return}const o=y(n);p(o)},1e3))});function y(t){const d=r(Math.floor(t/864e5)),c=r(Math.floor(t%864e5/36e5)),l=r(Math.floor(t%864e5%36e5/6e4)),m=r(Math.floor(t%864e5%36e5%6e4/1e3));return{days:d,hours:c,minutes:l,seconds:m}}function r(t){return String(t).padStart(2,"0")}function p({days:t,hours:n,minutes:o,seconds:s}){e.daysEl.textContent=t,e.hoursEl.textContent=n,e.minutesEl.textContent=o,e.secondsEl.textContent=s}
//# sourceMappingURL=commonHelpers.js.map