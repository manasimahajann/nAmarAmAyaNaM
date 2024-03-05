let parent = document.querySelector("#list-items")
let playing = false
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
		name: "nAma rAmAyaNaM Complete.mp3",
	},
]
let prevId = 0
let Id = 0
obj.forEach((element) => {
	parent.innerHTML += ` <button id = "${
		element.id
	}" style="font-size:24px">${element.name
		.replace("mp3", "")
		.replace("_", " ")
		.replace(".", "")}<i class="fa fa-play-circle" id=${
		"p" + element.id
	} style="font-size:48px;color:red"></i></button> 
	`
})
var tl = gsap.timeline()

tl.from("#heading", {
	y: -50,
	opactity: 0,
	delay: 0.4,
	duration: 1,
	stagger: 0.4,
})
tl.from("button", {
	x: -1000,
	opactity: 0,
	delay: 0.2,
	duration: 1,
	stagger: 0.4,
	scale: 0.3,
})
let btns = document.querySelectorAll("button")

for (var btn = 0; btn < btns.length; btn++) {
	console.log("ASdffasd")

	btns[btn].addEventListener("click", (e) => {
		console.log(btns[btn])
		Id = e.target.id

		if (prevId === 0) {
			prevId = Id
		}
		if (prevId !== Id) {
			playing = false
			audio.pause()
			var pb = document.querySelector("#p" + prevId)

			pb.classList.remove("fa-pause-circle")

			pb.classList.add("fa-play-circle")
			playFunction(Id)
		} else {
			playFunction(Id)
		}
	})
}
function playFunction(id) {
	if (id) {
		item = obj.find((val) => val.id === id)
	}

	if (item) {
		var pb = document.querySelector("#p" + id)
		pb.classList.add("fa-pause-circle")
		pb.classList.remove("fa-play-circle")
		if (!playing) {
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
