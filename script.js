var btns = document.querySelectorAll("button")
var pause_1 = document.querySelector("#p1")
var pause_2 = document.querySelector("#p2")
let playing = false
let playingInside = true
var audio
obj = [
	{
		id: "1",
		name: "1_Bala Kandam.mp3",
	},
	{
		id: "2",
		name: "2_Ayodhya Kandam.mp3",
	},
	{
		id: "3",
		name: "3_Aranya Kandam.mp3",
	},
	{
		id: "4",
		name: "4_Kishkinda Kandam.mp3",
	},
	{
		id: "5",
		name: "5_Sundara Kandam.mp3",
	},
	{
		id: "6",
		name: "6_Yuddha Kandam.mp3",
	},
	{
		id: "7",
		name: "7_Uttara Kandam.mp3",
	},
	{
		id: "8",
		name: "nAma rAmAyaNaM_FullRecording_Bharathi Bhagini.mp3",
	},
]
var val
let prevId = 0
let Id = 0
for (var btn = 0; btn < btns.length; btn++) {
	btns[btn].addEventListener("click", (e) => {
		Id = e.target.id
		if (playing && !playingInside) {
			playing = false
			audio.pause()
		} else {
			playingInside = true
		}
		if (prevId === 0) {
			prevId = e.target.id
		}
		if (prevId !== Id) {
			playing = false
			audio.pause()
			var pb = document.querySelector("#p" + prevId)

			pb.classList.remove("fa-pause-circle")

			pb.classList.add("fa-play-circle")
			playFunction(e.target.id)
		} else {
			playFunction(e.target.id)
		}
	})
}
function playFunction(id) {
	if (id) {
		item = obj.find((val) => val.id === id)
	}

	if (item) {
		var pb = document.querySelector("#p" + id)

		// pb.classList.remove("fa-pause-circle")

		// pb.classList.add("fa-play-circle")
		pb.classList.add("fa-pause-circle")
		pb.classList.remove("fa-play-circle")
		if (!playing && playingInside) {
			audio = new Audio("./nAmarAmAyaNaMFiles/" + item.name)
			playing = true

			prevId = id
			audio.play()
		} else {
			playing = false
			pausebuttom = "pause_" + id
			var pb = document.querySelector("#p" + id)

			pb.classList.remove("fa-pause-circle")

			pb.classList.add("fa-play-circle")

			audio.pause()
		}
		audio.addEventListener("ended", function () {
			audio.currentTime = 0
			pb.classList.add("fa-play-circle")
			pb.classList.remove("fa-pause-circle")
			playing = false
		})
	}
}
