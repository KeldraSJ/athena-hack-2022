let nav = 0;
let clicked = null;

const dt = new Date();




const calendar = document.getElementById('calendarBody');
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', ];

function eventStart(date) {
  clicked = date;

  const eventForDay = events.find(e => e.date === clicked);

  if (eventForDay) {
    eventCards.style.display = 'block';
  } else {
    eventCards.style.display = 'none';
  }  
}

function load() {

  if (nav !== 0) {
    dt.setMonth(new Date().getMonth() + nav);
  }

  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  const dateString = firstDayOfMonth.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
  });
  const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

  document.getElementById('monthName').innerText = 
    `${dt.toLocaleDateString('en-GB', { month: 'long' })} ${year}`;

  calendar.innerHTML = '';

  for(let i = 1; i <= paddingDays + daysInMonth; i++) {
    const daySquare = document.createElement('div');
    daySquare.classList.add('day');

    if (i > paddingDays) {
      daySquare.innerText = i - paddingDays;

      if (i - paddingDays === day && nav === 0) {
        daySquare.id = 'currentDay';
      }
      
    }else{
        daySquare.classList.add('padding');
    }

    calendar.appendChild(daySquare);    
  }
}

function initButtons() {
  document.getElementById('nextBttn').addEventListener('click', () => {
    nav++;
    load();
  });

  document.getElementById('backBttn').addEventListener('click', () => {
    nav--;
    load();
  });
}

// Event have been hard coded 
const eventContent = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <img src="./images/foodChar1.jpg" class="card-img-top" alt="Food Charity">
            <h5 class="card-title">Charity by Benefit Aid</h5>
            <h6>Date: ${(dt.getDate())+'/'+(dt.getMonth()+1)+'/'+ dt.getFullYear()}</h6>
            <h6 class="card-subtitle mb-2 text-muted">#FoodCharity #Refugee</h6>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor ultricies rhoncus. Mauris fermentum aliquet nulla ac porta. Ut consequat nulla et lectus convallis, ac pulvinar felis facilisis. Maecenas eget pretium eros, id pulvinar nibh. Praesent consequat tortor nec tortor semper dignissim. </p>
            <a href="#" class="card-link"><Address>Address: 10 South Pl, London EC2M 7EB</Address></a>
            
        </div>
    </div>
    
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <img src="./images/food-donations.jpg" class="card-img-top" alt="Food Charity">
            <h5 class="card-title">Admire Gifting </h5>
            <h6>Date: ${(dt.getDate())+'/'+(dt.getMonth()+1)+'/'+ dt.getFullYear()}</h6>
            <h6 class="card-subtitle mb-2 text-muted">#FoodCharity #Refugee</h6>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor ultricies rhoncus. Mauris fermentum aliquet nulla ac porta. Ut consequat nulla et lectus convallis, ac pulvinar felis facilisis. Maecenas eget pretium eros, id pulvinar nibh. Praesent consequat tortor nec tortor semper dignissim. </p>
            <a href="#" class="card-link"><Address>Address: 10 South Pl, Glasgow EC2M 7EB</Address></a>
            
        </div>
    </div>
`;

const eventCard = document.querySelector(".card");
const newEvent = document.createElement("div");
newEvent.classList.add("charEvents");
newEvent.innerHTML = eventContent;

eventCard.append(newEvent);

initButtons();
load();