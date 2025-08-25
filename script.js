// get the data. add more girl user data
let users = [
    {
        profilePic: "https://i.pinimg.com/736x/e7/6f/86/e76f86a7889232e98e2c6533d11f1c43.jpg",
        DisplayPic: "https://i.pinimg.com/736x/e7/6f/86/e76f86a7889232e98e2c6533d11f1c43.jpg",
        pendingMessage: 3,
        location: "USA, California",
        name: "Jane",
        age: 21,
        interests: [
            {
                icon: `<i class="text-sm ri-music-2-fill"></i>`,
                interests: "Music"
            },
            {
                icon: `<i class="text-sm ri-book-2-fill"></i>`,
                interests: "Reading"
            },
            {
                icon: `<i class="text-sm ri-movie-2-fill"></i>`,
                interests: "Movies"
            }
        ],
        bio: "In a committed relationship with headphones, the cinema, and the next chapter of a good book.",
        isFrineds: null
    },
    {
        profilePic: "https://i.pinimg.com/736x/7d/32/f9/7d32f9666082a3853f8f196c6c9ebb50.jpg",
        DisplayPic: "https://i.pinimg.com/736x/30/cd/1d/30cd1d698bf59586a52a703327fb00a7.jpg",
        pendingMessage: 5,
        location: "Mumbai, India",
        name: "Sayli",
        age: 21,
        interests: [
            {
                icon: `<i class="text-sm ri-music-2-fill"></i>`,
                interests: "Music"
            },
            {
                icon: `<i class="text-sm ri-book-2-fill"></i>`,
                interests: "Reading"
            }
        ],
        bio: "Love to explore new places and enjoy good music.",
        isFriends: null
    },
    {
        profilePic: "https://i.pinimg.com/736x/24/11/23/2411236492a3b72e153b91f7c60470ba.jpg",
        DisplayPic: "https://i.pinimg.com/736x/4d/ce/8b/4dce8bfb3935de3275787b21226c5aaf.jpg",
        pendingMessage: 2,
        location: "Delhi, India",
        name: "Ananya",
        age: 22,
        interests: [
            {
                icon: `<i class="ri-star-s-fill"></i>`,
                interests: "Dancing"
            },
            {
                icon: `<span class="material-symbols-outlined">chef_hat</span>`,
                interests: "Cooking"
            }
        ],
        bio: "Foodie and a dance enthusiast. Let's groove together! dancing is my passion. professional dancer.",
        isFriends: null
    },
    {
        profilePic: "https://i.pinimg.com/736x/6f/da/f7/6fdaf793b3e7b4857d005f0370e4d369.jpg",
        DisplayPic: "https://i.pinimg.com/1200x/19/25/bf/1925bfebe812da1ad1c9b76cae320a95.jpg",
        pendingMessage: 3,
        location: "Bangalore, India",
        name: "Priya",
        age: 23,
        interests: [
            {
                icon: `<i class="ri-suitcase-2-fill"></i>`,
                interests: "Traveling"
            },
            {
                icon: `<i class="text-sm ri-book-2-fill"></i>`,
                interests: "Reading"
            }
        ],
        bio: "Capturing moments and staying fit. Let's connect! love to explore new places. and love to try new cuisines.",
        isFriends: null
    },
    {
        profilePic: "https://i.pinimg.com/736x/b9/17/4c/b9174ce6ec4f5f20ab3714ff19c2e4e1.jpg",
        DisplayPic : "https://i.pinimg.com/736x/4b/a2/a0/4ba2a0286fc49124472da74c7585b59f.jpg",
        pendingMessage: 4,
        location: "Chennai, India",
        name: "Ankita",
        age: 24,
        interests: [
            {
                icon: `<span class="material-symbols-outlined">chef_hat</span>`,
                interests: "Cooking"
            },
            {
                icon: `<i class="ri-plane-fill"></i>`,
                interests: "Traveling"
            },
        ],
        bio: "A culinary enthusiast who loves to travel and practice yoga, love to make new friends.",
        isFriends: null
    }
];

let crr = 0;  // current profile 

(function setInitial() {
    document.querySelector(".maincard img").src = users[crr].DisplayPic;
    document.querySelector(".pro-img img").src = users[crr].profilePic;
    document.querySelector(".badge h5").textContent = users[crr].pendingMessage;
    document.querySelector(".location h3").textContent = users[crr].location;
    document.querySelector(".name-age h1:nth-child(1)").textContent = users[crr].name;
    document.querySelector(".name-age h1:nth-child(2)").textContent = users[crr].age;

    (function getInterests() {
     var clutter = "";
        users[crr].interests.forEach(function(interests) {
         clutter +=`
             <div class="tag flex items-center bg-white/30 px-3 py-1 gap-2 rounded-full">
               ${interests.icon}
               <h3 class="text-sm tracking-tight font-medium">${interests.interests}</h3>
             </div>`
        })
        document.querySelector(".tags").innerHTML = clutter;
    })();
    document.querySelector(".bio p").textContent = users[crr].bio;


    document.querySelector(".incomingcard img").src = users[crr+1].DisplayPic;
    crr = 2;
})();

function imageChange() {
    let tl = gsap.timeline({
        onComplete: function() {
            let main = document.querySelector(".maincard");
            let incoming = document.querySelector(".incomingcard");

            incoming.classList.remove("z-[2]");
            incoming.classList.add("z-[3]");
            incoming.classList.remove("incomingcard");

            main.classList.remove("z-[3]");
            main.classList.add("z-[2]");
            gsap.set(main, {
                scale: 1,
                opacity:1
            })
            main.classList.remove("maincard");
            
            incoming.classList.add("maincard");
            main.classList.add("incomingcard");
        }
    });

    tl.to(".maincard", {
        scale: 1.1,
        opacity: 0,
        ease: Circ,
        duration: 0.9
    }, "a")
    tl.from(".incomingcard", {
        scale: 0.9,
        opacity: 0,
        ease: Circ,
        duration: 1.1
    }, "a")
};

  let deny = document.querySelector(".deny");
  let accept = document.querySelector(".accept");

  deny.addEventListener("click", function() {
      imageChange();
  });