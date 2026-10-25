const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// билетная касса
function ticketPrice(category) {
  switch (category) {
    case 1:
      return 300;
    case 2:
      return 500;
    case 3:
      return 900;
    default:
      return 0;
  }
}

function maxTickets(budget, price) {
  let count = 0;
  while (budget >= price) {
    budget = budget - price;
    count++;
  }
  return count;
}

function printTicketResult(category, budget) {
  let price = ticketPrice(category);
  if (price == 0) {
    console.log('неизвестная категория');
    return;
  }
  let count = maxTickets(budget, price);
  console.log('Категория ' + category + ', билет ' + price + ' руб., бюджет ' + budget + ' руб.: можно купить ' + count + ' шт.');
}

// доставка
function deliveryPrice(distance, total) {
  if (total >= 3000) {
    return 0;
  }
  if (distance <= 3) {
    return 0;
  }
  if (distance <= 10) {
    return 200;
  }
  return 200 + (distance - 10) * 25;
}

function printDelivery(distance, total) {
  let price = deliveryPrice(distance, total);
  console.log('Расстояние ' + distance + ' км, заказ ' + total + ' руб.: доставка ' + price + ' руб.');
}

// лестница
function printSteps(height) {
  let count = 0;
  for (let i = 1; i <= height; i++) {
    if (i == 4) {
      continue;
    }
    if (i > 10) {
      console.log('Дальше лестница не построена');
      break;
    }
    console.log('Ступень ' + i);
    count++;
  }
  console.log('Всего построено: ' + count);
}

console.log('Выберите задачу:');
console.log('1 — билетная касса');
console.log('2 — доставка заказа');
console.log('3 — лестница');

rl.question('Ваш выбор: ', function (choice) {
  if (choice == '1') {
    rl.question('Категория билета: ', function (category) {
      rl.question('Бюджет: ', function (budget) {
        printTicketResult(Number(category), Number(budget));
        rl.close();
      });
    });
  } else if (choice == '2') {
    rl.question('Расстояние: ', function (distance) {
      rl.question('Сумма заказа: ', function (total) {
        printDelivery(Number(distance), Number(total));
        rl.close();
      });
    });
  } else if (choice == '3') {
    rl.question('Высота лестницы: ', function (height) {
      printSteps(Number(height));
      rl.close();
    });
  } else {
    console.log('такой задачи нет');
    rl.close();
  }
});
