javascript:(()=>{const lecturers=document.querySelectorAll("tr[data-coursecode]"),wait=(assessLecturer(lecturers),t=>new Promise(e=>setTimeout(e,t)));async function assessLecturer(r){return new Promise(function(e,t){try{for(const o of r)wait(2e3),!async function(e){let r=window.open(`
      ${window.location.href}/AssessmentForm?CourseCode=${e.attributes["data-coursecode"].textContent}
    `);r.addEventListener("DOMContentLoaded",function(){let e=this.document.querySelector("form[action=SaveAssessment]"),t=this.document.querySelector("button[type=submit]"),o=Array.from(this.document.querySelectorAll(".form-group"));e.addEventListener("submit",function(e){e.preventDefault(),r.close()}),o.pop(),o.forEach(e=>{e.getElementsByClassName("radio-control")[Math.floor(5*Math.random())].checked=!0}),t.click()})}(o)}catch(e){t(e+": Error in selection")}e("Success")})}})();
