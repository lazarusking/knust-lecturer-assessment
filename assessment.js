const lecturers = document.querySelectorAll("tr[data-coursecode]");

assessLecturer(lecturers);



const wait = (time) => {
	return new Promise((resolve) => setTimeout(resolve, time));
};

// for (const i of lec) {
// 	assessLecturer(i);
// 	break;
// }

/**
 * @type {NodeListOf<Element>} listOfLecturers 
 */
async function assessLecturer(listOfLecturers) {
	/**
	 * Uses the DOM elements of the various lecturer fields
	 * to open, fill(randomly) and close a window for a lecturer.
	 */
	async function parsePageData(data) {
		/** DOM manipulations of lecturer fields **/
		console.debug("__Waits___");
		console.debug(data.attributes["data-coursecode"]);
		let newWin = window.open(`
      ${window.location.href}/AssessmentForm?CourseCode=${data.attributes["data-coursecode"].textContent}
    `);
		let submitButton = this.document.querySelector("button[type=submit]");
		let list = Array.from(this.document.querySelectorAll(".form-group"));

		newWin.addEventListener("DOMContentLoaded", function () {
			let form = this.document.querySelector("form[action=SaveAssessment]");
			form.addEventListener("submit", function (event) {
				event.preventDefault();
				console.debug(event);
				newWin.close();
			});

			list.pop();
			console.debug(this.document.querySelectorAll("form"));

			list.forEach((item) => {
				item.getElementsByClassName("radio-control")[
					Math.floor(Math.random() * 5)
				].checked = true;
			});
			console.debug("Does this ever log?????");
			console.debug(submitButton);
			submitButton.click();
		});
	}
	return new Promise(function (resolve, reject) {
		//do stuff
		try {
			for (const i of listOfLecturers) {

				wait(2000);
				// setTimeout(function() {
				parsePageData(i);
			}

			resolve("Success");
		} catch (err) {
			reject(`${err}: Error in selection`);
		}
		return;
		// }, 2000);
		// resolve(result); //if the action succeeded
		// reject("Error"); //if the action did not succeed
	});
}