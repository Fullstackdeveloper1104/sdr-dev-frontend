// Current Date function
function displayFormattedDate(elementId) {
	const dateElement = document.getElementById(elementId);

	if (dateElement) {
		const currentDate = new Date();
		const options = { weekday: "long", month: "long", day: "numeric" };
		const formattedDate = currentDate.toLocaleDateString("en-US", options);
		dateElement.innerHTML = formattedDate;
	}
}

// Current Time function
function displayFormattedTime(elementId) {
	const timeElement = document.getElementById(elementId);

	if (timeElement) {
		const currentTime = new Date();

		const formattedTime = currentTime.toLocaleTimeString("en-US", {
			hour: "numeric",
			minute: "2-digit",
		});

		timeElement.innerHTML = formattedTime;
	}
}

// Function to update time in real-time
function updateTime() {
	displayFormattedTime("timeDisplay");
}

window.addEventListener("DOMContentLoaded", () => {
	// Animate on Scroll
	AOS.init({
		once: true,
	});

	// Display current date
	displayFormattedDate("currentDate");

	// Display current Time
	displayFormattedTime("currentTime");

	// Update the time every second
	setInterval(updateTime, 1000);

	// Team Sliders
	const teamSliders = document.querySelectorAll(".team-slider-container");

	if (teamSliders) {
		teamSliders.forEach((teamSlider) => {
			const slider = tns({
				container: teamSlider.querySelector(".team-slider"),
				items: 1,
				gutter: 30,
				autoHeight: false,
				controls: true,
				mouseDrag: true,
				swipeAngle: false,
				navPosition: "bottom",
				navContainer: teamSlider.querySelector(".slider-navs"),
				prevButton: teamSlider.querySelector(".slider-prev"),
				nextButton: teamSlider.querySelector(".slider-next"),
			});
		});
	}
});
