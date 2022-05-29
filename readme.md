# Feeling Lazy?

## Content

* **Overview**

    Randomly fill all your lecturers assessment on the KNUST Lecturers Assessment Page(when it's available).
* ##  Usage :
    **❗❗make sure to be on the Assessment Page**
    - Copy the js code ([this](./assessment.js)) and run inside browser console. 
    ```javascript
    const lecturers=document.querySelectorAll("tr[data-coursecode]"),wait=(assessLecturer(lecturers),t=>new Promise(e=>setTimeout(e,t)));async function assessLecturer(r){return new Promise(function(e,t){try{for(const o of r)wait(2e3),!async function(e){let t=window.open(`
      ${window.location.href}/AssessmentForm?CourseCode=${e.attributes["data-coursecode"].textContent}
    `),o=this.document.querySelector("button[type=submit]"),r=Array.from(this.document.querySelectorAll(".form-group"));t.addEventListener("DOMContentLoaded",function(){let e=this.document.querySelector("form[action=SaveAssessment]");e.addEventListener("submit",function(e){e.preventDefault(),t.close()}),r.pop(),r.forEach(e=>{e.getElementsByClassName("radio-control")[Math.floor(5*Math.random())].checked=!0}),o.click()})}(o);e("Success")}catch(e){t(e+": Error in selection")}})}
    ```
    
    -  Save link as a bookmark with URL field being the code
        <details open>
        <summary>
        bookmark url 
        </summary>

        ```javascript
        javascript:(function()%7Bconst%20lecturers%3Ddocument.querySelectorAll(%22tr%5Bdata-coursecode%5D%22)%2Cwait%3D(assessLecturer(lecturers)%2Ce%3D%3Enew%20Promise((t%3D%3EsetTimeout(t%2Ce))))%3Basync%20function%20assessLecturer(e)%7Breturn%20new%20Promise((function(t%2Co)%7Btry%7Bfor(const%20t%20of%20e)wait(2e3)%2Casync%20function(e)%7Blet%20t%3Dwindow.open(%60%5Cn%20%20%20%20%20%20%24%7Bwindow.location.href%7D%2FAssessmentForm%3FCourseCode%3D%24%7Be.attributes%5B%22data-coursecode%22%5D.textContent%7D%5Cn%20%20%20%20%60)%2Co%3Dthis.document.querySelector(%22button%5Btype%3Dsubmit%5D%22)%2Cr%3DArray.from(this.document.querySelectorAll(%22.form-group%22))%3Bt.addEventListener(%22DOMContentLoaded%22%2C(function()%7Bthis.document.querySelector(%22form%5Baction%3DSaveAssessment%5D%22).addEventListener(%22submit%22%2C(function(e)%7Be.preventDefault()%2Ct.close()%7D))%2Cr.pop()%2Cr.forEach((e%3D%3E%7Be.getElementsByClassName(%22radio-control%22)%5BMath.floor(5*Math.random())%5D.checked%3D!0%7D))%2Co.click()%7D))%7D(t)%3Bt(%22Success%22)%7Dcatch(t)%7Bo(t%2B%22%3A%20Error%20in%20selection%22)%7D%7D))%7D%7D)()
        ```
        </details>
* ## Todo

- [ ] An extension probably 
