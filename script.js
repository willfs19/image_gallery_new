        let fullView = document.querySelector(".fullView");
        let fullContainer = document.querySelector(".fullContainer");
        let imagemFull = document.querySelector(".imagemFull");
        let close = document.querySelector("#close");
        let gallery = document.querySelector(".gallery");

        let imgGallery = [...document.querySelectorAll(".imgGallery")];
        imgGallery.map((el, i)=> {
            el.addEventListener("click", (evt)=>{
                let el = evt.target;
                fullView.classList.add("_open");
                imagemFull.setAttribute("src", `./img/img0${i}.jpg`);
                document.documentElement.style.overflow = "hidden";
            })
        })

        function stopProp(event) {
            event.stopPropagation();
        }

        function closeFull() {
            fullView.classList.remove("_open");
            imagemFull.setAttribute("src", "");
            document.documentElement.style.overflow = "initial";
        }

        fullContainer.addEventListener("click", stopProp);
        fullView.addEventListener("click", closeFull);
        close.addEventListener("click", closeFull);