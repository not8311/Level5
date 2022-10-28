let data = [
  {
    "id": 0,
    "name": "肥宅心碎賞櫻3日",
    "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    "area": "高雄",
    "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    "group": 87,
    "price": 1400,
    "rate": 10
  },
  {
    "id": 1,
    "name": "貓空纜車雙程票",
    "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台北",
    "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    "group": 99,
    "price": 240,
    "rate": 2
  },
  {
    "id": 2,
    "name": "台中谷關溫泉會1日",
    "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台中",
    "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    "group": 20,
    "price": 1765,
    "rate": 7
  },{
    "id": 3,
    "name": "山林悠遊雙人套票",
    "imgUrl": "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_4.png?raw=true",
    "area": "台中",
    "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    "group": 0,
    "price": 880,
    "rate": 9.3
  },{
    "id": 4,
    "name": "漁樂碼頭釣魚體驗套票",
    "imgUrl": "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_5.png?raw=true",
    "area": "台中",
    "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    "group": 5,
    "price": 1280,
    "rate": 8.2
  },{
    "id": 5,
    "name": "熊森公園親子二日遊套票",
    "imgUrl": "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_6.png?raw=true",
    "area": "高雄",
    "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    "group": 3,
    "price": 2480,
    "rate": 8.6
  }
];
const list = document.querySelector('.list');

let str = '';

data.forEach(item=>{
  str += `<li class="tickets">
  <a href="#">
    <span class="area">${item.area}</span>
    <img src=${item.imgUrl}>
    <span class="ranks">${item.rate}</span>
    <div class="tickets_body">
      <h3 class="title">${item.name}</h3>
      <hr>
      <p class="content">${item.description}</p>
      <div class="tickets_footer">
        <div class="last_group">
          <p><i class="fas fa-exclamation-circle"></i> 剩下最後 ${item.group} 組</p>
        </div>
        <p class="show_price">TWD <span class="price"> $${item.price}</span></p>
      </div>
    </div>
  </a>
</li>`
})

list.innerHTML = str;