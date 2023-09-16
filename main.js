const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const main = $(".main");
const header = $(".header");
const homeProduct = $(".home-product");
const sidebarMenus = $$(".sidebar-item");
const musicOptions = $$(".music_option-item");
const playlist = $(".playlist");
const optionBtn = $(".song .option");
const songOption = $(".song_options");
const optionWrapper = $$(".option-wrapper");
const nextSongFirst = $(".nextSong_fist");
const nextSongFirsts = $$(".nextSong_fist .nextSong_fist-item");
const sliderBox = $('.option__all-song-slider');
const sliderItems = $$('.option__all-song-slider-img');
const songListLast = $(".nextSong_list-last");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const nameSong = $(".music_left-item .title");
const nameAuthor = $(".music_left-item .author");
const cdImg = $(".music_left-item .cdThumb");
const songPresent = $(".playlist .song");
const startTime =$(".music_control-progress-time-start");
const durationTime = $(".music_control-progress-time-duration");
const volumeInput = $("#volume");
const volumeUp = $(".volume-up");
const volumeMute = $(".volume-mute");
const songs = $$(".playlist .song");
const iconThem = $(".theme_modal-heading .icon-theme");
const themeList = $(".theme-list");
const iconHDTheme = $(".header-theme");
const layer = $(".layer");
const BgThemes = $$(".theme_modal-group-item");
const searchInput = $(".header_width-search input");
const searchSub = $(".header_width-search-sub");
const iconSetting = $(".header-setting");
const settingOverlay = $(".header_setting-overlay");
const zingcharSong = $(".zingchart_song-list");

const containerPertional = $(".main_container-pertional");
const containerDiscover = $(".main_container-discover");
const containerZingchart = $(".main_container-zingchart");

const personal = $(".sidebar-personal");
const discover = $(".sidebar-discover");
const zingChart = $(".sidebar-zingchart");

// Hiện search sub
searchInput.onclick = function() {
    searchSub.style.display = "block";
    layer.style.display = "block";
};
layer.onclick = function() {
    searchSub.style.display = "none";
    layer.style.display = "none";
};

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: {},
    songs: [
        {
          name: "Yêu 3 năm dại 1 giờ",
          singer: "Chu Thúy Quỳnh",
          path: "./src/music/Yêu 3 năm dại 1 giờ.mp3",
          image: "./src/img/songImg/chu_thuy_quynh.jpg"
        },
        {
          name: "Ánh nắng của anh",
          singer: "Đức phúc",
          path: "./src/music/Ánh nắng của anh.mp3",
          image:
            "./src/img/songImg/duc_phuc.jpg"
        },
        {
          name: "Phía sau em",
          singer: "Kay Trần",
          path:
            "./src/music/Phía sau em.mp3",
          image: "./src/img/songImg/kay_tran.jpg"
        },
        {
          name: "Skyler Theme Song",
          singer: "Sơn Tùng",
          path: "./src/music/Skyler Theme Song.mp3",
          image:
            "./src/img/songImg/son_tung.jpg"
        },
        {
          name: "Lưu số em đi",
          singer: "Huỳnh Văn & Vũ Phụng Tiên",
          path: "./src/music/Lưu số em đi.mp3",
          image:
            "./src/img/songImg/huynhvan_vuphungtien.jpg"
        },
        {
          name: "Gieo quẻ",
          singer: "Hoàng Thùy Linh",
          path:
            "./src/music/Gieo quẻ.mp3",
          image:
            "./src/img/songImg/hoang_thuy_linh.jpg"
        },
        {
          name: "Vui lắm nha",
          singer: "Hương Ly",
          path: "./src/music/Vui lắm nha.mp3",
          image:
            "./src/img/songImg/huong_ly.jpg"
        },
        {
          name: "Như một người dưng",
          singer: "Nguyễn Thạch Bảo Ngọc",
          path: "./src/music/Như một người dưng.mp3",
          image:
            "./src/img/songImg/nguyen_thach_bao_ngoc.jpg"
        },
        {
          name: "Sẵn sàng yêu em đi thôi",
          singer: "Woni & Minh tú",
          path: "./src/music/Sẵn sàng yêu em đi thôi.mp3",
          image:
            "./src/img/songImg/woni.jpg"
        }
      ],
      setConfig: function (key, value) {
        this.config[key] = value;
        
      },

      render: function() {
        const htmlsCT = this.songs.map((song, index) => {
            return `
                <div class="song ${
                    index === this.currentIndex ? "song-active" : ""
                  }" data-index="${index}">
                    <i class="icon_song fas fa-music"></i>
                    <div class="thumb"
                        style="background-image: url('${song.image}')">
                        <i class="fas fa-play"></i>
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="song_item-tym">
                        <i class="fas fa-heart"></i>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                    <div class="song_options">
                        <!-- option top -->
                        <ul class="song_option-list-top">
                            <li class="song_option-top-item">
                                <i class="fas fa-down-to-bracket"></i>
                                <span>Tải xuống</span>
                            </li>
                            <li class="song_option-top-item">
                                <i class="fas fa-pen-line"></i>
                                <span>Lời bài hát</span>
                            </li>
                            <li class="song_option-top-item">
                                <i class="fas fa-ban"></i>
                                <span>Chặn</span>
                            </li>
                        </ul>
                        <!-- option bottom -->
                        <ul class="song_option-list-bottom">
                            <li class="song_option-bottom-item">
                                <i class="fas fa-play"></i>
                                <span>Thêm vào danh sách phát</span>
                            </li>
                            <li class="song_option-bottom-item">
                                <i class="fas fa-play-circle"></i>
                                <span>Phát tiếp theo</span>
                            </li>
                            <li class="song_option-bottom-item">
                                <i class="fas fa-plus-circle"></i>
                                <span>Thêm vào playlist</span>
                                <i class="icon-right fas fa-angle-right"></i>
                            </li>
                            <li class="song_option-bottom-item">
                                <i class="fas fa-comment"></i>
                                <span>Bình luận</span>
                            </li>
                            <li class="song_option-bottom-item">
                                <i class="fas fa-link"></i>
                                <span>Sao chép link</span>
                            </li>
                            <li class="song_option-bottom-item">
                                <i class="fas fa-share"></i>
                                <span>Chia sẻ</span>
                                <i class="icon-right fas fa-angle-right"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            `;
        });
        playlist.innerHTML = htmlsCT.join("");
        zingcharSong.innerHTML = htmlsCT.join("");

        const htmlsR = this.songs.map((song, index) => {
            return `
                <div class="nextSong_fist-item ${
                    index === this.currentIndex ? "active" : ""
                  }" data-index="${index}">
                    <div class="thumb"
                        style="background-image: url('${song.image}')">
                        <i class="fas fa-play"></i>
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="song_item-tym">
                        <i class="fas fa-heart"></i>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>    
            `;
        });
        songListLast.innerHTML = htmlsR.join("");
    },

    // Phương thức định nghĩa ra một thuộc tính cho ra bài hát hiện tại
    // Object.defineProperty(object, propertyKey, attributes);

    defineProperties: function () {
        Object.defineProperty(this, "currentSong", {
          get: function () {
            return this.songs[this.currentIndex];
          }
        });
      },

    // Phương thức định nghĩa các sự kiện
    handleEvents: function () {
        const _this = this;
        const nextSongLists = $$(".nextSong_list-last .nextSong_fist-item");
        const nextSongList = $(".nextSong_list-last");
        const nextSongEnd = $(".nextSong_list-end");
        const nextSongFirsts = $(".nextSong_fist");
        const nextSongFirst = $(".nextSong_fist .nextSong_fist-item");
        const cdThumb = $(".cdThumb");
        const audio = $("#audio");
        const playBtn = $(".btn-toggle-play");
        const progress = $("#progress");
        const prevBtn = $(".btn-prev");
        const nextBtn = $(".btn-next");
        const randomBtn = $(".btn-random");
        const repeatBtn = $(".btn-repeat");
        const songPresent = $(".playlist .song");
        const sidebar_radio = $(".sidebar-item.sidebar_radio");
        const sidebar_follow = $(".sidebar-item.sidebar_follow");
        const playlist = $(".playlist");

        var sliderIndex = 1;
        var length = 0;
        var lengths = 0;
        var sliderIndex1 = 1;
        var sliderLenght = _this.songs.length;

        // Xử lý CD quay / dừng
        // Handle CD spins / stops

        const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
            duration: 10000, // 10 seconds
            iterations: Infinity, //Lặp vô hạn
        });
        cdThumbAnimate.pause();

        // Xử lý khi click play
        // Handle when click play
        playBtn.onclick = function () {
            if (_this.isPlaying) {
              audio.pause();
            } else {
              audio.play();
            }
        };

        // Khi song được play
        // When the song is played
        audio.onplay = function () {
            _this.isPlaying = true;
            console.log(audio.currentTime);
            main.classList.add("playing");
            cdThumbAnimate.play();
        };

        // Khi song bị pause
        // When the song is pause
        audio.onpause = function () {
            _this.isPlaying = false;
            main.classList.remove("playing");
            cdThumbAnimate.pause();
            songPresent.classList.remove("song-active");
        };

        // Khi tiến độ bài hát thay đổi
        // When the song progress changes
        audio.ontimeupdate = function (e) {
            // Hiển thị thời gian bài hát 
            startTime.textContent = _this.formatTime(audio.currentTime);
            if (!audio.duration) {
                    durationTime.textContent = "00:00";
            } else {
                durationTime.textContent = _this.formatTime(audio.duration);
            }
            // Tiến độ bài hát
            if (audio.duration) {
                const progressPercent = Math.floor(
                (audio.currentTime / audio.duration) * 100
            );
            progress.value = progressPercent;
            }
        };

        //Khi xử lý tua song
        progress.onchange = function(e) {
            const seekTime = (audio.duration * e.target.value /100);
            audio.currentTime = seekTime;
        };

        //Xử lý volume
        volumeInput.onchange = function(e) {
            audio.volume = e.target.value; 
            if (audio.volume == 0) {
                volumeUp.style.display = "none";
                volumeMute.style.display = "block";
            } else {
                volumeUp.style.display = "block";
                volumeMute.style.display = "none";
            } 
        };

        // next song
        nextBtn.onclick = function() {
            if (_this.isRandom) {
                _this.playRandomSong();
              } else {
                _this.nextSong();
              }
              audio.play();
              _this.render();
              _this.scrollToActiveSong();

        };

        // prevSong
        prevBtn.onclick = function() {
            if (_this.isRandom) {
                _this.playRandomSong();
              } else {
                _this.prevSong();
              }
              audio.play();
              _this.render();
              _this.scrollToActiveSong();
        };

        // Xử lý bật / tắt random song
        // Handling on / off random song
        randomBtn.onclick = function (e) {
            _this.isRandom = !_this.isRandom;
            _this.setConfig("isRandom", _this.isRandom);
            randomBtn.classList.toggle("active", _this.isRandom);
        };
  
        // Xử lý lặp lại một song
        // Single-parallel repeat processing
        repeatBtn.onclick = function (e) {
            _this.isRepeat = !_this.isRepeat;
            _this.setConfig("isRepeat", _this.isRepeat);
            repeatBtn.classList.toggle("active", _this.isRepeat);
        };
  
        // Xử lý next song khi audio ended
        // Handle next song when audio ended
        audio.onended = function () {
            if (_this.isRepeat) {
                audio.play();
            } else {
                nextBtn.click();
            }
        };

        // ẨN hiện theme list (icon header theme)
        iconHDTheme.addEventListener('click', function() {
            themeList.classList.add('show');
            // layer.classList.add('show');
            layer.style.display = "block";
        });
        iconThem.addEventListener('click', function() {
            themeList.classList.remove('show');
            // layer.classList.remove('show');
            layer.style.display = "none";
        });
        layer.addEventListener('click', function() {
            themeList.classList.remove('show');
            // layer.classList.remove('show');
            layer.style.display = "none";
        });

        // Thay đổi background cho app
        BgThemes.forEach(function(item, index) {
            item.onclick = function(e) {
                main.style.backgroundImage = `url('${e.target.src}')`;
            }
        });

        // Hiện search sub
        searchInput.addEventListener('click', function() {
            searchSub.style.display = "block";
            layer.style.display = "block";
        });
        layer.addEventListener('click', function() {
            searchSub.style.display = "none";
            layer.style.display = "none";
        });

        // Hiển thị header setting
        iconSetting.onclick = function() {
            settingOverlay.style.display = "block";
            layer.style.display = "block";
        };
        layer.onclick = function() {
            settingOverlay.style.display = "none";
            layer.style.display = "none";
        };


        // Chức năng bật ra thông báo cho những chức năng chưa và đang hoàn thiện //
        sidebar_radio.addEventListener('click', function() {
            createToast('warning');
        });
        sidebar_follow.addEventListener('click', function() {
            createToast('error');
        });

        // kich hoat item bên nextSong
        optionWrapper.forEach(function(item) {
            item.onclick = function() {
                $(".option-wrapper.active-wrapper").classList.remove("active-wrapper");
                item.classList.add("active-wrapper");
            }
        });

        // Ẩn hiện sự lựa chọn bên sidebar
        sidebarMenus.forEach(function(tab, index){
            tab.onclick = function() {
            $('.sidebar-item.sidebar_item-active').classList.remove('sidebar_item-active');
            tab.classList.add("sidebar_item-active");
            }
        });

        // Lựa chọn option trên thanh music option
        musicOptions.forEach(function(tab, index){
            tab.onclick = function() {
                $('.music_option-item.tab-item').classList.remove('tab-item');
                tab.classList.add("tab-item");
            }
        });

        // Thay đổi phần home product
        personal.addEventListener('click', function () {
            containerPertional.style.display = "block";
            containerDiscover.style.display = "none";
            containerZingchart.style.display = "none";
        });
        discover.addEventListener('click', function () {
            containerDiscover.style.display = "block";
            containerPertional.style.display = "none";
            containerZingchart.style.display = "none";
        });
        zingChart.addEventListener('click', function () {
            containerZingchart.style.display = "block";
            containerDiscover.style.display = "none";
            containerPertional.style.display = "none";
        });

        function createToast (status) {
            let templateInner;
                switch(status) {
                case 'warning':
                    templateInner = `<i class="fas fa-check-circle"></i>
                            <span>This function is in progress!</span>`
                    break;
                case 'error':
                    templateInner = `<i class="fas fa-exclamation-circle"></i>
                            <span>This function is not available yet!</span>`
                    break;
                }

            var toast = document.createElement('div');
            toast.classList.add('toast');
            toast.classList.add(status);
            toast.innerHTML = `${templateInner}
                        <span class="countdown"></span>`;

            var toastList = document.getElementById('toasts');
            toastList.appendChild(toast);

            setTimeout(function () {
                toast.style.animation = `slideHide 3s ease forwards`;
            }, 4000);
            setTimeout(function () {
                toast.remove();
            }, 6000);
        }

        // Lắng nghe hành vi click vào playlist center
        // Listen to playlist clicks
        playlist.onclick = function (e) {
            const songNode = e.target.closest(".song:not(.song-active)");
  
            if (songNode || e.target.closest(".option")) {
                // Xử lý khi click vào song
                // Handle when clicking on the song
                if (songNode) {
                    _this.currentIndex = Number(songNode.dataset.index);
                    _this.loadCurrentSong();
                    _this.render();
                    audio.play();
                }
  
                // Xử lý khi click vào song option
                // Handle when clicking on the song option
                if (e.target.closest(".option")) {
                }
            }
        },

        // Lắng nghe hành vi click vào playlist right
        // Listen to playlist clicks
        songListLast.onclick = function (e) {
            const songNodeR = e.target.closest(".nextSong_fist-item:not(.active)");
  
            if (songNodeR || e.target.closest(".option")) {
                // Xử lý khi click vào song
                // Handle when clicking on the song
                if (songNodeR) {
                    _this.currentIndex = Number(songNodeR.dataset.index);
                    _this.loadCurrentSong();
                    _this.render();
                    audio.play();
                }
  
                // Xử lý khi click vào song option
                // Handle when clicking on the song option
                if (e.target.closest(".option")) {
                }
            }
        },

        // Thay đổi hiệu ứng tab img
        changeImage = function() {
                sliderItems.forEach((item,index) => {
                    // index == sliderIndex ? sliderItems[index].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-first') : index == sliderIndex + 1 ?  sliderItems[index].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-second'):sliderItems[index].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-third');
                    if (index == sliderIndex) {
                        sliderItems[index].classList.replace('option__all-song-slider-img-third','option__all-song-slider-img-first');
                        sliderItems[index].classList.replace('option__all-song-slider-img-second','option__all-song-slider-img-first');
                    } else if (index == sliderIndex + 1) {
                        sliderItems[index].classList.replace('option__all-song-slider-img-first','option__all-song-slider-img-second');
                        sliderItems[index].classList.replace('option__all-song-slider-img-third','option__all-song-slider-img-second');
                    } else{
                        sliderItems[index].classList.replace('option__all-song-slider-img-first','option__all-song-slider-img-third');
                        sliderItems[index].classList.replace('option__all-song-slider-img-second','option__all-song-slider-img-third');
                    }
                     if (sliderIndex == sliderLenght - 1) {
                        sliderItems[0].classList.replace('option__all-song-slider-img-first','option__all-song-slider-img-second');
                        sliderItems[0].classList.replace('option__all-song-slider-img-third','option__all-song-slider-img-second');
                    }
                })
                sliderIndex++;
                if (sliderIndex >= sliderLenght) {
                    sliderIndex = 0;
                }
        }
        setInterval(changeImage, 2000);
        

        // CÒN LỖI FIX SAU
        // Thay đổi music bên next song list
        changeMusic = function() {
            nextSongLists.forEach((item, index) => {
                item.onclick = function() {
                    // item.remove();
                    item.style.display = "block";
                    length++;
                    console.log(length);
                    if (length == nextSongLists.length) {
                        nextSongEnd.style.display = "block";
                    };

                    // nextSongFirst.appendChild(item);
                    // lengths++;
                    // console.log(nextSongFirsts)
                    // nextSongFirsts.forEach((item, index) => {
                    //     console.log(nextSongFirsts);
                    //     console.log(nextSongFirsts.length);
                    //     item.onclick = function() {
                    //         item.remove();
                    //         nextSongList.appendChild(item);
                    //     }   
                    // });
                }   
            });
        },
        changeMusic();

    
    },

    scrollToActiveSong: function () {
        setTimeout(() => {
          $(".song.active").scrollIntoView({
            behavior: "smooth",
            block: "nearest"
          });
        }, 300);
      },

    // load song
    loadCurrentSong: function() {
        nameSong.textContent = this.currentSong.name;
        nameAuthor.textContent = this.currentSong.singer;
        cdImg.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
    },

    loadConfig: function () {
        this.isRandom = this.config.isRandom;
        this.isRepeat = this.config.isRepeat;
      },

    // next song
    nextSong: function() {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length - 1) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    }, 

    // prev song
    prevSong: function() {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    }, 

    // Random song
    playRandomSong: function () {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * this.songs.length);
        } while (newIndex === this.currentIndex);
    
        this.currentIndex = newIndex;
        this.loadCurrentSong();
      },

    // ĐỊNH DẠNG LẠI THỜI GIAN CHO ĐẸP
    formatTime : function(number) {
        const minutes = Math.floor(number / 60);
        const seconds = Math.floor(number - minutes * 60);
        return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    },


    // HIỂN THỊ REMAIN TIME TIME VÀO PLAYER
    // displayStartTime : function() {
    //     startTime.textContent = this.formatTime(audio.currentTime);
    //     // on mobile
    //     // $('.mobile-player__ctrl-progress-time-start').textContent = this.formatTime(audio.currentTime);
    // },

    // HIỂN THỊ VÀ DURATION TIME VÀO PLAYER
    // displayDurationTime : function() {
    //     // if (!audio.duration) {
    //     //     durationTime.textContent = "00:00";
    //     // } else {
    //     //     durationTime.textContent = this.formatTime(audio.duration);
    //     // }
    //     durationTime.textContent = this.currentSong.duration;
    //     // $('.mobile-player__ctrl-progress-time-duration').textContent = this.currentSong.duration;
    // },
    
    // Reload images
    // changeImage = function() {
    //     sliderItems.forEach((item,index) => {
    //             // index == sliderIndex ? sliderItems[index].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-first') : index == sliderIndex + 1 ?  sliderItems[index].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-second'):sliderItems[index].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-third');
    //         if (index == sliderIndex) {
    //             sliderItems[index].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-first');
    //             sliderItems[index].classList.replace('option-all__song-slider-img-second','option-all__song-slider-img-first');
    //         } else if (index == sliderIndex + 1) {
    //             sliderItems[index].classList.replace('option-all__song-slider-img-first','option-all__song-slider-img-second');
    //             sliderItems[index].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-second');
    //         } else {
    //             sliderItems[index].classList.replace('option-all__song-slider-img-first','option-all__song-slider-img-third');
    //             sliderItems[index].classList.replace('option-all__song-slider-img-second','option-all__song-slider-img-third');
    //         }
    //         if (sliderIndex == sliderLenght - 1) {
    //             sliderItems[0].classList.replace('option-all__song-slider-img-first','option-all__song-slider-img-second');
    //             sliderItems[0].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-second');
    //         }
    //     })
    //     sliderIndex++;
    //     if (sliderIndex >= sliderLenght) {
    //         sliderIndex = 0;
    //     }
    // }
    // setInterval(changeImage,2000);



    // sidebarMenus.forEach(function(tab, index){
    //     tab.onclick = function() {
    //         $('.sidebar-item.sidebar_item-active').classList.remove('sidebar_item-active');
    //         tab.classList.add("sidebar_item-active");
       
    //     }
    // }),

    start: function() {

        // Gán cấu hình từ config vào ứng dụng
        // Assign configuration from config to application
        this.loadConfig();
    
        // Lắng nghe / xử lý các sự kiện (Dom event)
        this.defineProperties();

        // Render playlist
        this.render();

        // Định nghĩa các thuộc tính cho object
        this.handleEvents();

        // load music
        this.loadCurrentSong();

        // hiển thị thời gian chạy và thời lượng của audio hiện tại
        // this.displayDurationTime();

        // Render playlist
        // this.render();

    }
};

app.start();

