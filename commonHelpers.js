import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as h,i as c}from"./assets/vendor-651d7991.js";const e={datetimePicker:document.querySelector("#datetime-picker"),startBtn:document.querySelector("[data-start]"),daysEl:document.querySelector(".value[data-days]"),hoursEl:document.querySelector(".value[data-hours]"),minutesEl:document.querySelector(".value[data-minutes]"),secondsEl:document.querySelector(".value[data-seconds]")};let o=null;const f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){o=t[0];const n=new Date;o.getTime()<=n.getTime()?(c.error({title:"Error",message:"Please choose a date in the future!",position:"topRight"}),e.startBtn.disabled=!0):(c.success({title:"Success",message:"Valid date!",position:"center"}),e.startBtn.disabled=!1)}};h(e.datetimePicker,f);const y={intervalId:null,start(){o&&(this.intervalId=setInterval(()=>{const t=Date.now(),n=o-t;if(n<0){clearInterval(this.intervalId);return}const r=a(n);p(r)},1e3))}};e.startBtn.addEventListener("click",()=>{o&&y.start()});function a(t){const l=s(Math.floor(t/864e5)),u=s(Math.floor(t%864e5/36e5)),d=s(Math.floor(t%864e5%36e5/6e4)),m=s(Math.floor(t%864e5%36e5%6e4/1e3));return{days:l,hours:u,minutes:d,seconds:m}}console.log(a(2e3));console.log(a(14e4));console.log(a(2414e4));function s(t){return String(t).padStart(2,"0")}function p({days:t,hours:n,minutes:r,seconds:i}){e.daysEl.textContent=t,e.hoursEl.textContent=n,e.minutesEl.textContent=r,e.secondsEl.textContent=i}
//# sourceMappingURL=commonHelpers.js.map