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
  }
];
const list = document.querySelector('.list');
const regionSearch =  document.querySelector('.regionSearch');
const pointer = document.querySelector('.pointer');
const addInput = document.querySelectorAll('.addTicket_input');
const addBtn = document.querySelector('.btn');
// console.log(addInput[0].children[1].value);

regionSearch.addEventListener('change',filterArea);
addBtn.addEventListener('click',addTickets);

// 渲染畫面
function render(data){
  let str = '';
  data.forEach(item=>{
    str += `<li class="tickets">
    <span class="area">${item.area}</span>
    <div class="ticket_img">
      <img src=${item.imgUrl}>
    </div>
    <span class="ranks">${item.rate}</span>
    <div class="tickets_body">
      <a href="#">
        <h3 class="title">${item.name}</h3>
      </a>
      <hr>
      <p class="content">${item.description}</p>
    </div>
    <div class="tickets_footer">
      <div class="last_group">
        <p><i class="fas fa-exclamation-circle"></i> 剩下最後 ${item.group} 組</p>
      </div>
      <p class="show_price">TWD <span class="price"> $${item.price}</span></p>
    </div>
  </li>`
  })
  list.innerHTML = str;
  pointer.textContent = '';
}

// 篩選地區
function filterArea(e) {
  let filterData = [];
  switch(e.target.value){
    case '台北':
      filter('台北');
      break;
    case '台中':
      filter('台中');
      break;
    case '高雄':
      filter('高雄');
      break;
    case '':
      render(data);
      break;
  }
  function filter(area){
    filterData =  data.filter(item=>item.area === area);
    render(filterData);
    pointer.textContent = `本次搜尋共 ${filterData.length} 筆資料`;
  }
}

// 新增套票
function addTickets(e){
  let obj = {};
  addInput.forEach((item,index)=>{
    let addInfo = item.children[1].value;
    switch (index) {
      case 0:
        if (addInfo === '') {
          break;
        }
        obj.name = addInfo;
        break;
      case 1:
        if (addInfo === '') {
          break;
        }
        obj.imgUrl = addInfo;
        break;
      case 2:
        if (addInfo === '') {
          break;
        }
        obj.area = addInfo;
        break;
      case 3:
        if (addInfo === '') {
          break;
        }
        obj.price = addInfo;
        break;
      case 4:
        if (addInfo === '') {
          break;
        }
        obj.group = addInfo;
        break;
      case 5:
        if (addInfo === '') {
          break;
        }else if(addInfo < 1 || addInfo > 10){
          alert('請輸入1~10之間的數字');
          item.children[1].value = '';
          break;
        }
        obj.rate = addInfo;
        break;
      case 6:
        if (addInfo === '') {
          break;
        }
        obj.description = addInfo;
        break;
    }
    obj.id = data.length;
    item.children[1].value = '';
  })
  Object.values(obj).length === 8 ? data.push(obj) : alert('請重新輸入資料')
  render(data);
}

render(data);