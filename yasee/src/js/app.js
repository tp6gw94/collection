var yaseeData = [
    {
        name: '瑞豐夜市',
        infoTime: '營業時間：每週二、四、五、六、日∕下午6:30至凌晨1:00',
        infoSite: '地址：高雄市左營區裕誠路和南屏路段',
        infoSummary:
            '瑞豐夜市位於高雄市左營區裕誠路和南屏路段，夜市佔地近千坪，且擁有20年的歷史，規模可說是高雄規模最大且管理最優的夜市，目前擺設攤位超過1000個攤位，每個攤位所販賣的東西更是五花八門，包括小吃、服飾、流行飾品及各項娛樂攤位等等，已成為高雄市區民眾夜晚品嚐小吃、宵夜的聚集地。',
        trainPublic: `大眾運輸
◎ 捷運：搭乘高雄捷運至巨蛋站，出站後走博愛二路，右轉裕誠路，約400公尺抵達夜市。
◎ 公車：於高雄火車站搭乘高雄市公車91、301、24號，於高雄市立三民家商下車，再步行即可到達瑞豐夜市。`,
        imgUrl: [
            'https://khh.travel/FileArtPic.ashx?id=2552&w=900&h=500',
            'https://foreignerintw.files.wordpress.com/2015/03/dsc_6079.jpg',
            'http://s2.buzzhand.net/uploads/ba/5/1012192/15009528866074.jpg'
        ]
    },
    {
        name: '武聖夜市',
        infoTime: '營業時間：二、四~日 17:00 — 1:00',
        infoSite: '地址：南市中西區武聖路69巷',
        infoSummary:
            '地點位於台南市中西區武聖路69巷42號，營業時間為每周三、六，晚上六點至凌晨一點三十分。[2] 武聖夜市佔地2400坪的面積，250個攤位，有6000坪的汽機車停車位，讓民眾不用擔心停車問題。[3] 武聖夜市與小北成功夜市是許多台南人的共同回憶。據瞭解旅美投手王建民從小最愛逛的夜市就是台南歷史悠久的「武聖夜市」，據說王建民逛夜市除了愛吃小吃，最喜歡的就是打彈珠。這種傳統的夜市遊戲，據說是王建民逛夜市的最愛。而他從小最常去的台南武聖夜市除了打彈珠，其實還有丟水球、射飛鏢、套圈套等大大小小的遊戲，不只小孩愛玩，大人也常來此花小錢試手氣，幸運的話還可以帶回不少獎品。',
        trainPublic: `大眾運輸
公車：台南車站正對面的台南市公車北站（國賓大樓前）搭乘3路－於「文賢路站」下車－往回走到武聖路右轉－見69巷(第一個紅綠燈)左轉直走約50公尺即可抵達。`,
        imgUrl: [
            'https://tainan.fun-taiwan.com/Images/PlayItemPhotos/418178.jpg',
            'http://pic.pimg.tw/sharon1974/1409975072-1029134064_l.jpg?v=1409975076',
            ' https://pic.pimg.tw/mimg47/1488768615-56003309.jpg'
        ]
    },
    {
        name: '逢甲夜市',
        infoTime: '營業時間：週一~週日 14:00 — 2:00',
        infoSite: '地址：台中市西屯區文華路',
        infoSummary:
            '早年此區域為眷村組成的臺中市郊偏遠地區。直到1963年逢甲工商學院（逢甲大學前身）自台中市北屯區搬遷至西屯區的現址，帶來2萬餘人學生的人潮，讓學校週邊的文華路開始發展成文華路夜市。又因鄰近中山高中港交流道與快官霧峰線的地利之便，而帶來大量的外地觀光旅客，使得文華路夜市的規模不斷擴大而形成逢甲商圈。',
        trainPublic: `大眾運輸
公車：台中客運：8、28、29、33、35、54、豐原客運：63（聯營）。`,
        imgUrl: [
            'http://t.cn/RmI9sCY',
            'http://t.cn/RmICAXt',
            'https://img.mimihan.tw/uploads/20171012182652_18.jpg'
        ]
    },
    {
        name: '東大門夜市',
        infoTime: '營業時間：週一~週日 18:00 — 0:00',
        infoSite: '地址：花蓮縣花蓮市中山路',
        infoSummary:
            '位於花蓮市的東大門夜市於2015年7月盛大開幕，占地約9公頃，區域包括「福町夜市」、「原住民一條街」、「大陸各省一條街」、「洄瀾之心(陽光電城)」等地，合計約400個攤位。東大門夜市以洄瀾之心(陽光電城)為中心點發散出去，步道地磚特以黑、白花崗岩鋪設而成，縣府以最大格局與寬闊氣勢精心打造東大門夜市，期盼能成為花蓮的新熱門景點。',
        trainPublic: `大眾運輸
火車：於花蓮火車站下，搭乘計程車或租車10分鐘或是步行33分鐘即可抵達。`,
        imgUrl: [
            'https://img.yoti.life/uploads/20171231141824_23.jpg',
            'https://www.dongdamen.com.tw/wp-content/uploads/2016/04/6_compressed.jpg',
            'https://f.share.photo.xuite.net/kopapa1116/1f51199/19750437/1114187380_o.jpg'
        ]
    }
]

// map
// 顧客當前位置
var clinet_url
// 商家位置
var store_url

var getLocation = new Promise((resolve, reject) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            var lat = position.coords.latitude
            var lon = position.coords.longitude
            resolve({
                lat,
                lon
            })
        })
    } else {
        reject('獲取位置失敗')
    }
})

getLocation.then(d => {

    clinet_url = `${d.lat.toString().trim()},${d.lon.toString().trim()}`
}, e => {
    console.log(e)
})

// 更新map的url
function mapUrl(clinet, store) {
    var map_url = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyDMvMeQTKhr4baY9dxrj4YmF2UiV0ORMs8&origin=${clinet}&destination=${store}&avoid=tolls|highways`

    $('#map').attr('src', map_url)
}

var boothData = []
var items = []
var change = true
var is_slide = false

$(document).ready(function () {
    /*Smooth Scroll*/
// Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                        ;
                    });
                }
            }
        });


    /*sticky nav*/

    $('.js--section-about').waypoint(function (direction) {
        if (window.innerWidth <= 700) return

        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '220px;'
    });


//    menu
    $('#menu').click(function() {
        $('.main-nav__list').slideToggle()
        change ? ($('#menu').html('close'), change = false) : ($('#menu').html('menu'), change = true)

        if (window.innerWidth <= 700) {
            $('.main-nav__item').click(function () {
                $('.main-nav__list').slideUp()
            })
            $('.main-nav__item').click(function() {
                $('#menu').html('menu')
                change = true
            })
        } 
    })

    

    $(window).resize(function() {
        var width = window.innerWidth
        if (width <= 700) {
            $('.main-nav__list').hide()
        } else {
            $('.main-nav__list').show()
        }
    })

//    search

    $('#searchBtn').click(function () {
        search()
        $('.search__result').show()
        $('#searchInput').val('')
    })

    $(window).keyup(function (e) {
        // console.log(e)
        if (e.key === 'Enter') {
            search()
            $('.search__result').show()
            $('#searchInput').val('')
        }
    })


    var ns = '#nav-search'
    var ni = '#nav-info'
    var nm = '#nav-map'
    var init = true

    function initSearch(init) {
        if (init) {
            $('.info').hide()
            $('.booth').hide()
            $('.search__result').hide()
            $('.pop').hide()
            if(window.innerWidth <= 700)
                $('.main-nav__list').hide()
        }
        init = false
    }

    initSearch(init)

// search Click

    $(ns).click(function () {
        navActive(this)
        displayReset('.search', '.booth', '.info')
    })

//    info Click

    $(ni).click(function () {
        navActive(this)
        displayReset('.info', '.search', '.booth')
    })

//    navMap click 
    $(nm).click(function () {
        navActive(this)
        displayReset('.booth', '.search', '.info')
    })


// sidebar
    $('#ruifeng').click(function () {
        sidebarActive(this)
        infoRest(yaseeData[0])
    })

    $('#sheng').click(function () {
        sidebarActive(this)
        infoRest(yaseeData[1])
    })

    $('#fengjia').click(function () {
        sidebarActive(this)
        infoRest(yaseeData[2])
    })

    $('#gate').click(function () {
        sidebarActive(this)
        infoRest(yaseeData[3])
    })

    $('.pop__close').click(function () {
        $('.pop').hide()
    })

});

function navActive(active) {
    $('*').removeClass('search-nav__active')
    $(active).addClass('search-nav__active')
}

function sidebarActive(active) {
    $('*').removeClass('sidebar__active')
    $(active).addClass('sidebar__active')
}


function displayReset(name1, name2, name3) {
    $(name1).show(300)
    $(name2).hide(300)
    $(name3).hide(300)
}

// 更新資訊

function infoRest(data) {
    $('.info__title').text(data.name)
    $('.info__time').text(data.infoTime)
    $('.info__site').text(data.infoSite)
    $('.info__content').text(data.infoSummary)
    $('.info__train').text(data.trainPublic)
    $('.info__photo--1').attr('src', data.imgUrl[0])
    $('.info__photo--2').attr('src', data.imgUrl[1])
    $('.info__photo--3').attr('src', data.imgUrl[2])
}

function search() {
    var inputSearch = $('#searchInput').val()
    var item = ''
    $('.search__list').html('')
    $.ajax({
        url: 'https://api.myjson.com/bins/g9xfy',
        dataType: 'json',
        type: 'GET'
    }).done(function (d) {
        // console.log(d[2].data);

        boothData = d[2].data;

        $.each(d[2].data, function (i, v) {
            if (v.name.indexOf(inputSearch) != -1) {
                // console.log(v.name)
                item = $(`<li class="search__item" 
                data-index="${v.id}" data-lat="${v['location.x']}" data-lng="${v['location.y']}">名稱: ${v.name} 位置: 第${v.line}排 第${v.number}間</li>`)

                //  給每個item 的點擊事件
                item.click(function () {
                    //  抓取id傳進popReset()
                    var selectId = $(this).data('index')
                    popReset(selectId)
                    // 商家的座標
                    var store_lat = $(this).data('lat')
                    var store_lon = $(this).data('lng')
                    
                    store_url = `${store_lat.toString().trim()},${store_lon.toString().trim()}`
                    mapUrl(clinet_url, store_url)
                })

                //  顯示item
                $('.search__list').append(item)
            }
        })

    })

}


// 更新pop
function popReset(id) {
    boothData.forEach((booth) => {
        if (id == booth.id) {
            $('.pop__title').text(booth.name)
            $('.pop__site').text(`第${booth.line}排 第${booth.number}`)
            $('.pop').show()
        }
    })
}


