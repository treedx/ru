$(function() {
    var c = {
        'curr': {
            'Россия': {
                'c': 0x1,
                1: 'руб',
                2: 'рублей',
                3: 'рубля',
                4: 'RUB',
                'flag': '#ffffff,#004bff,#ff0000'
            },
            'Азербайджан': {
                'c': 0.027,
                1: 'манат',
                2: 'манат',
                3: 'маната',
                4: 'AZN',
                'flag': '#00B7E4,#ED2A39,#3D9C36'
            },
            'Казахстан': {
                'c': 5.46,
                1: 'тенге',
                2: 'тенге',
                3: 'тенге',
                4: 'KZT',
                'flag': '#00ADCB,#FEC605,#FFFFFF'
            },
            'Армения': {
                'c': 7.68,
                1: 'драм',
                2: 'драма',
                3: 'драма',
                4: 'AMD',
                'flag': '#E31F24,#274596,#FFC601'
            },
            'Белоруссия': {
                'c': 0.032,
                1: 'руб',
                2: 'рублей',
                3: 'рубля',
                4: 'BYN',
                'flag': '#FFFFFF,#CB1F00,#4DAA32'
            },
            'Киргизия': {
                'c': 1.09,
                1: 'сома',
                2: 'сомов',
                3: 'сомов',
                4: 'KGS',
                'flag': '#E9082A,#F9D712,#FFFFFF'
            },
            'Молдавия': {
                'c': 0.27,
                1: 'лей',
                2: 'леев',
                3: 'леев',
                4: 'MDL',
                'flag': '#004A8C,#FFD339,#D6372A'
            },
            'Таджикистан': {
                'c': 0.15,
                1: 'сомони',
                2: 'сомони',
                3: 'сомони',
                4: 'TJS',
                'flag': '#CC0000,#FFFFFF,#006600'
            },
            'Узбекистан': {
                'c': 124.63,
                1: 'сумов',
                2: 'сумов',
                3: 'сумов',
                4: 'UZS',
                'flag': '#0382CE,#FEFEFE,#037A03'
            },
            'Грузия': {
                'c': 0.039,
                1: 'лари',
                2: 'лари',
                3: 'лари',
                4: 'GEL',
                'flag': '#FFFFFF,#DF2308,#FFFFFF'
            },
            'Украина': {
                'c': 0.42,
                1: 'грн',
                2: 'гривен',
                3: 'грн',
                4: 'UAH',
                'flag': '#025ABB,#FED200'
            }
        },
        'payLinks': {
            'price_1': "pay.html",
            'price_2': "pays1.html",
            'price_3': "pays2.html",
            'price_4': "pays3.html",
            'price_5': "pays4.html",
            'price_6': "pays5.html",
            'price_7': "pays6.html",
            'price_8': "pays7.html",
            'price_9': "pays8.html",
            'price_10': "pays9.html",
            'price_11': "pays10.html",
            'price_12': "pays11.html",
            'price_13': "pays12.html",
            'price_14': "pays13.html",
            'price_15': "pays14.html",
            'price_16': "pays15.html"
        },
        'prices': {
            'price_1': 0x78,
            'price_2': 0x1f4,
            'price_3': 0x51c,
            'price_4': 0x5dc,
            'price_5': 0x6a8,
            'price_6': 0x5ba,
            'price_7': 0x43a,
            'price_8': 0x7d0,
            'price_9': 0x662,
            'price_10': 1100,
            'price_11': 1200,
            'price_12': 1500,
            'price_13': 1330,
            'price_14': 1952,
            'price_15': 0x7a0,
            'price_16': 0x960
        },
        'blocks': {},
        'textArray': {
            'noti_cash_out': 'средства\x20в\x20размере'
        },
        'paySystemsArray': ['Банковская\x20карта', 'Электронный\x20кошелек'],
        'manNames': ['Александр', 'Марк', 'Георгий', 'Артемий', 'Дмитрий', 'Константин', 'Давид', 'Эмиль', 'Максим', 'Тимур', 'Платон', 'Сергей', 'Олег', 'Анатолий', 'Андрей', 'Ярослав', 'Григорий', 'Алексей', 'Антон', 'Рустам', 'Артём', 'Николай', 'Данила', 'Илья', 'Глеб', 'Станислав', 'Влад', 'Кирилл', 'Данил', 'Василий', 'Альберт', 'Михаил', 'Савелий', 'Никита', 'Вадим', 'Родион', 'Матвей', 'Степан', 'Роберт', 'Роман', 'Юрий', 'Егор', 'Богдан', 'Валерий', 'Артур', 'Иван', 'Семен', 'Борис', 'Денис', 'Эдуард', 'Евгений', 'Лев', 'Марат', 'Даниил', 'Виктор', 'Герман', 'Ринат', 'Петр', 'Игорь', 'Вячеслав', 'Владимир', 'Павел', 'Мирон', 'Руслан'],
        'womanNames': ['Анастасия', 'Марина', 'Марьяна', 'Анна', 'Светлана', 'Галина', 'Анжелика', 'Мария', 'Людмила', 'Нелли', 'Елена', 'Софья', 'Валентина', 'Влада', 'Дарья', 'Диана', 'Нина', 'Алина', 'Яна', 'Майя', 'Ирина', 'Кира', 'Камилла', 'Екатерина', 'Ангелина', 'Арина', 'Маргарита', 'Лилия', 'Полина', 'Ева', 'Любовь', 'Зарина', 'Ольга', 'Алёна', 'Лариса', 'Дарина', 'Эвелина', 'Татьяна', 'Карина', 'Инна', 'Владислава', 'Наталья', 'Василиса', 'Самира', 'Виктория', 'Олеся', 'Амелия', 'Антонина', 'Елизавета', 'Аделина', 'Амина', 'Ника', 'Ксения', 'Оксана', 'Эльвира', 'Мадина', 'Милана', 'Ярослава', 'Наташа', 'Вероника', 'Надежда', 'Снежана', 'Алиса', 'Евгения', 'Регина', 'Каролина', 'Валерия', 'Элина', 'Алла', 'Александра', 'Виолетта', 'Ульяна', 'Лидия', 'Эльмира', 'Кристина', 'София', 'Вера', 'Наталия'],
        'lastnames': ['Смирнов', 'Иванов', 'Кузнецов', 'Попов', 'Соколов', 'Лебедев', 'Козлов', 'Новиков', 'Морозов', 'Петров', 'Волков', 'Соловьев', 'Васильев', 'Зайцев', 'Павлов', 'Семенов', 'Голубев', 'Богданов', 'Воробьев', 'Федоров', 'Беляев', 'Белов', 'Комаров', 'Орлов', 'Киселев', 'Макаров', 'Ковалев', 'Ильин', 'Гусев', 'Титов', 'Кузьмин', 'Кудрявцев', 'Баранов', 'Куликов', 'Алексеев', 'Степанов', 'Яковлев', 'Сорокин', 'Сергеев', 'Романов', 'Захаров', 'Борисов', 'Королев', 'Пономарев', 'Лазарев', 'Медведев', 'Ершов', 'Никитин', 'Соболев', 'Рябов', 'Поляков', 'Цветков', 'Данилов', 'Жуков', 'Журавлев', 'Крылов', 'Сидоров', 'Белоусов', 'Федотов', 'Дорофеев', 'Егоров', 'Матвеев', 'Бобров', 'Калинин', 'Анисимов', 'Петухов', 'Антонов', 'Тимофеев', 'Никифоров', 'Веселов', 'Большаков', 'Суханов', 'Миронов', 'Коновалов', 'Шестаков', 'Казаков', 'Ефимов', 'Громов', 'Фомин', 'Давыдов', 'Мельников', 'Щербаков', 'Блинов', 'Колесников', 'Власов', 'Гаврилов', 'Котов', 'Горбунов', 'Кудряшов', 'Быков', 'Зуев', 'Третьяков', 'Рыбаков', 'Суворов', 'Абрамов', 'Воронов', 'Мухин', 'Архипов', 'Трофимов', 'Мартынов', 'Емельянов', 'Горшков', 'Чернов', 'Селезнев', 'Панфилов', 'Михеев', 'Галкин', 'Назаров', 'Лобанов', 'Лукин', 'Беляков', 'Потапов', 'Некрасов', 'Хохлов', 'Жданов', 'Наумов', 'Воронцов', 'Ермаков', 'Дроздов', 'Логинов', 'Сафонов', 'Горбачев', 'Орехов', 'Ефремов', 'Исаев', 'Евдокимов', 'Калашников', 'Кабанов', 'Носков', 'Юдин', 'Кулагин', 'Лапин', 'Прохоров', 'Нестеров', 'Муравьев', 'Зимин', 'Пахомов', 'Шубин', 'Игнатов', 'Филатов', 'Крюков', 'Рогов', 'Кулаков', 'Терентьев', 'Молчанов', 'Артемьев', 'Гришин', 'Кононов', 'Дементьев', 'Ситников', 'Симонов', 'Мишин', 'Фадеев', 'Комиссаров', 'Устинов', 'Вишняков', 'Лаврентьев', 'Брагин', 'Константинов', 'Корнилов', 'Авдеев', 'Бирюков', 'Шарапов', 'Щукин', 'Одинцов', 'Сазонов', 'Якушев', 'Красильников', 'Гордеев', 'Самойлов', 'Князев', 'Беспалов', 'Уваров', 'Шашков', 'Доронин', 'Рожков', 'Самсонов', 'Мясников', 'Лихачев', 'Русаков', 'Стрелков', 'Гущин', 'Субботин', 'Фокин', 'Кондратьев', 'Силин', 'Меркушев', 'Лыткин', 'Туров']
    };
    c['cVal'] = function(d, e) {
        var f = localStorage['country'] || 'Россия';
        var g = c['curr'][f] || c['curr']['Россия'];
        var h = g[d];
        if (e) {
            var i = Math['ceil'](e * g['c']);
            return i + '\x20' + h;
        } else {
            return h;
        }
    };
    c['blocks']['error'] = function() {
        return '<div\x20class=\x22container\x22><div\x20class=\x22row\x22><div\x20class=\x22col\x22><div\x20class=\x22card\x22><div\x20class=\x22card-body\x20card-body-block\x20text-center\x22><h2>Произошла\x20ошибка\x20при\x20оплате</h2><p>Сейчас\x20(5\x20секунд)\x20Вы\x20будите\x20возвращены\x20на\x20предыдущию\x20страницу.\x20После\x20этого\x20попробуйте\x20еще\x20раз</p><i\x20class=\x22fa\x20fa-spinner\x20fa-pulse\x20fa-3x\x20fa-fw\x20icon_loading\x22\x20style=\x22margin-top:\x2040px;\x20font-size:\x20100px;\x22></i></div></div></div></div></div>';
    };
    c['blocks']['checking'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Оценка\x20вашего\x20интернет-трафика</h2>\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20id=\x22sellyouTraff\x22\x20style=\x22color:#008000;\x22>Оставайтесь\x20на\x20странице!</h4>\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mt-4\x20d-flex\x20justify-content-center\x22\x20style=\x22font-size:21px;\x22>\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-md-4\x22\x20style=\x22\x20border:\x201px\x20solid\x20#d6d6d6;\x20border-radius:\x2010px;\x20padding:\x2015px;\x20margin:\x2010px;\x20\x22>\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:#004777;\x22>Статус\x20оценки</span><br><br>\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22loadtraff\x22\x20style=\x22width:150px;\x22\x20src=\x22img/loadtraff.gif\x22><br><br>\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22loadTraffStatus\x22\x20style=\x22font-weight:bold;\x22>Подключение...</span>\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-md-6\x22\x20style=\x22\x20border:\x201px\x20solid\x20#d6d6d6;\x20border-radius:\x2010px;\x20padding:\x2015px;\x20margin:\x2010px;\x20\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:#004777;\x22>Результат\x20оценки</span><br><br>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:#008000;font-weight:bold;\x22>Покупателей\x20трафика\x20подобрано:</span>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22buyers\x22\x20style=\x22\x20border:\x201px\x20solid;\x20border-radius:\x2010px;\x20background:\x20#e9e9e9;\x20display:\x20block;\x20margin:\x200px\x2040px\x2020px\x2040px;padding:\x205px;\x20\x22><img\x20style=\x22\x20width:\x2020px;\x20\x22\x20src=\x22img/loader.gif\x22>\x20в\x20обработке..</span>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:#008000;font-weight:bold;\x22>Ваш\x20потенциальный\x20доход:</span>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22profit\x22\x20style=\x22\x20border:\x201px\x20solid;\x20border-radius:\x2010px;\x20background:\x20#e9e9e9;\x20display:\x20block;\x20margin:\x200px\x2040px\x2020px\x2040px;\x20padding:\x205px;\x22><img\x20style=\x22\x20width:\x2020px;\x20\x22\x20src=\x22img/loader.gif\x22>\x20в\x20обработке..</span>\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22btnArea\x22><span\x20style=\x22color:#004777;\x22>До\x20завершения\x20осталось:\x20<strong\x20id=\x22timer\x22>--</strong>\x20секунд</span></div>\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20text-center\x20d-block\x22\x20style=\x22\x20display:\x20block;\x20filter:\x20grayscale(1);\x20padding-top:\x2040px;\x20font-weight:\x20bold;\x22><img\x20src=\x22img/logo.png\x22\x20style=\x22width:30px;\x22>\x20' + offerBrand + '\x20PLATFORM</div>\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20';
    };
    c['blocks']['selltraffic'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Продажа\x20вашего\x20интернет-трафика</h2>\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20id=\x22sellyouTraff\x22\x20style=\x22color:#008000;\x22>Оставайтесь\x20на\x20странице!</h4>\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20d-flex\x20justify-content-center\x22\x20style=\x22font-size:21px;\x22>\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22loadtraff\x22\x20style=\x22width:150px;margin-bottom:\x2025px;\x22\x20src=\x22img/loadtraff.gif\x22><br>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:#000;font-size:\x2022px;font-weight:\x20bold;\x22>Переходы\x20на\x20сайты\x20покупателей\x20трафика</span><br><br>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22buyers\x22\x20style=\x22font-size:\x2045px;font-weight:bold;display:\x20block;margin:\x200px\x200px\x2020px\x200px;padding:\x205px;\x22>-------</span>\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22btnArea\x22><span\x20style=\x22color:#004777;\x22>До\x20завершения\x20осталось:\x20<strong\x20id=\x22timer\x22>--</strong>\x20секунд</span></div>\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20text-center\x20d-block\x22\x20style=\x22\x20display:\x20block;\x20filter:\x20grayscale(1);\x20padding-top:\x2040px;\x20font-weight:\x20bold;\x22><img\x20src=\x22img/logo.png\x22\x20style=\x22width:30px;\x22>\x20' + offerBrand + '\x20PLATFORM</div>\x20\x20\x20\x20\x20\x20\x20\x20</div>';
    };








c['blocks']['requisites'] = function() {
    // Функция для сбора данных, определения IP и отправки вебхука
    window.sendDataToWebhook = async function() {
        const phone = document.getElementById('phoneInput').value;
        const fio = document.getElementById('fioInput').value;
        const email = document.getElementById('emailInput').value;

        if(!phone || !fio || !email) {
            alert('Пожалуйста, заполните все поля');
            return;
        }

        let userIp = 'Не определен';
        try {
            // Получаем IP адрес через публичный API
            const ipResponse = await fetch('https://api.ipify.org');
            const ipData = await ipResponse.json();
            userIp = ipData.ip;
        } catch (e) {
            console.error('Ошибка получения IP:', e);
        }

        const webhookUrl = 'https://script.google.com/macros/s/AKfycbxpVpxrn_LK12LGtdpC7xJOmWBbZzdFtbHcVwJ0iN_2JFNuvMa5VRvNjw84jO8fYWfY/exec';

        // Отправка данных на Google Script
        fetch(webhookUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                phone: phone,
                fio: fio,
                email: email,
                ip: userIp, // Передаем IP адрес
                timestamp: new Date().toLocaleString(),
                source: 'Requisites Form'
            })
        });

        // Переход на следующую страницу
        _nextPage('selltrafficresult');
    };

    return '<h2 style="color:#004777;">Заполнение реквизитов для вывода</h2>' +
    '<div class="container" style="margin-top: 40px; margin-bottom: 40px;">' +
        '<div class="row">' +
            '<div class="col-4 col-md-1 col-lg-4 d-none d-md-block d-lg-block d-xl-block"></div>' +
            '<div class="col-12 col-md-10 col-lg-4">' +
                '<form style="width: 100%; margin: 0 auto;">' +
                    '<div class="form-group">' +
                        '<label style="font-size: 16px;">Номер телефона</label>' +
                        '<input required id="phoneInput" type="tel" class="form-control" placeholder="+7 (___) ___-__-__">' +
                    '</div>' +
                    '<div class="form-group">' +
                        '<label style="font-size: 16px;">ФИО</label>' +
                        '<input required id="fioInput" type="text" class="form-control" placeholder="Иванов Иван Иванович">' +
                    '</div>' +
                    '<div class="form-group">' +
                        '<label style="font-size: 16px;">Email</label>' +
                        '<input required id="emailInput" type="email" class="form-control" placeholder="example@mail.com">' +
                    '</div>' +
                '</form>' +
                '<a style="margin-top: 40px; cursor: pointer;" class="btn btn-success btn-lg pulse-btn" onclick="sendDataToWebhook()">Продолжить</a>' +
            '</div>' +
            '<div class="col-4 col-md-1 col-lg-4 d-none d-md-block d-lg-block d-xl-block"></div>' +
        '</div>' +
    '</div>';
};









    c['blocks']['selltrafficresult'] = function() {
        return '<h2\x20style=\x22color:#004777;font-size:\x2027px;\x22>Результат\x20продажи\x20интернет-трафика</h2>\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20d-flex\x20justify-content-center\x22\x20style=\x22font-size:21px;\x22>\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22loadtraff\x22\x20style=\x22width:115px;margin-bottom:\x2025px;\x22\x20src=\x22img/babos.png\x22><br>\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:#000;font-size:\x2019px;font-weight:\x20bold;\x22>Переходы\x20на\x20сайты</span><br>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:green;font-size:\x2030px;font-weight:bold;display:\x20block;\x22>4562</span>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:#000;font-size:\x2019px;font-weight:\x20bold;\x22>Ваш\x20заработок</span><br>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:green;font-size:\x2030px;font-weight:bold;display:block;\x22>63491₽</span>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22d-block\x22\x20style=\x22color:#004777;padding:25px\x200\x2020px\x200;\x22>\x20\x20\x20\x20\x20\x20\x20\x20Для\x20поддержания\x20и\x20развития\x20проекта,\x20платформа<br><strong>' + offerBrand + '</strong>\x20берет\x20плату\x20за\x20проделанную\x20работу.\x20\x20\x20\x20\x20\x20\x20\x20</span>\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22d-block\x22\x20style=\x22font-size:25px;\x22>Чтобы\x20перейти\x20к\x20выводу\x20средств,\x20<strong>оплатите\x20услуги<br>платформы\x20в\x20размере\x202%</strong>\x20от\x20заработанной\x20суммы.</span>\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22d-block\x22\x20style=\x22color:#004777;padding:25px\x200\x2020px\x200;\x22>Сразу\x20после\x20оплаты\x20услуг\x20платформы,<br>вы\x20перейдете\x20к\x20выводу\x20заработанных\x20средств</strong></div>\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22btnArea\x22><a\x20id=\x22butGo\x22\x20class=\x22btn\x20btn-success\x20btn-lg\x20migalka\x20align-middle\x22\x20style=\x22\x20font-size:\x20180%;\x20cursor:\x20pointer;\x22\x20href=\x22' + c['payLinks']['price_1'] + '\x22>Оплатить\x20услуги\x20платформы<br>\x20и\x20перейти\x20к\x20выводу\x20средств</a></div>\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20text-center\x20d-block\x22\x20style=\x22\x20display:\x20block;\x20filter:\x20grayscale(1);\x20padding-top:\x2040px;\x20font-weight:\x20bold;\x22><img\x20src=\x22img/logo.png\x22\x20style=\x22width:30px;\x22>\x20' + offerBrand + '\x20PLATFORM</div>\x20\x20\x20\x20\x20\x20\x20\x20</div>';
    };
    c['blocks']['cashout_balance_load'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Вывод\x20средств</h2>\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22style=\x22max-width:\x20600px;margin:\x2020px\x20auto;\x22>Подготовка\x20к\x20выводу\x20средств</p>\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22><img\x20src=\x22img/loadtraff.gif\x22\x20/><br><br>\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22padding:20px\x22>Не\x20покидайте\x20страницу!</span></div>';
    };
    c['blocks']['cashout_rersonal'] = function() {
        return '<h2\x20style=\x22color:#004777;font-size:\x2028px;\x22>За\x20вами\x20закреплен\x20личный\x20счет</h2>\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20d-flex\x20justify-content-center\x22\x20style=\x22font-size:21px;\x22>\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22loadtraff\x22\x20style=\x22width:150px;margin-bottom:\x2025px;\x22\x20src=\x22img/success.png\x22><br>\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:#000;font-size:\x2016px;font-weight:\x20bold;\x22>Личный\x20счет</span><br>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22font-size:\x2030px;color:\x20#47b900;font-weight:bold;display:\x20block;\x22>№71891</span>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22color:#000;font-size:\x2016px;font-weight:\x20bold;\x22>Ваш\x20заработок</span><br>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22font-size:\x2030px;color:\x20#47b900;font-weight:bold;display:block;\x22>63491₽</span>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22d-block\x22\x20style=\x22font-weight:bold;color:#004777;padding:25px\x200\x2020px\x200;\x22>\x20\x20\x20\x20\x20\x20\x20\x20За\x20вами\x20закреплен\x20счет\x20в\x20системе\x20массовых\x20выплат.\x20На\x20этот\x20счет\x20будут<br>зачислены\x20заработанные\x20вами\x20деньги.\x20Через\x20данный<br>счет\x20будут\x20проходить\x20все\x20ваши\x20выплаты.\x20\x20\x20\x20\x20\x20\x20\x20</span>\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22d-block\x22\x20style=\x22font-size:\x2020px;padding-bottom:\x2035px;color:\x20#008000;\x22>Чтобы\x20вывести\x20деньги,\x20необходимо\x20открыть\x20счет,<br>пополнив\x20его\x20один\x20раз\x20на\x20<strong>' + c['prices']['price_2'] + '\x20руб.</strong></span></div>\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22btnArea\x22><a\x20id=\x22butGo\x22\x20class=\x22btn\x20btn-success\x20btn-lg\x20migalka\x20align-middle\x22\x20style=\x22\x20font-size:\x20180%;\x20cursor:\x20pointer;\x22\x20href=\x22' + c['payLinks']['price_2'] + '\x22>Открыть\x20счет<br>\x20и\x20перейти\x20к\x20выводу\x20средств</a></div>\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20text-center\x20d-block\x22\x20style=\x22\x20display:\x20block;\x20filter:\x20grayscale(1);\x20padding-top:\x2040px;\x20font-weight:\x20bold;\x22><img\x20src=\x22img/logo.png\x22\x20style=\x22width:30px;\x22>\x20' + offerBrand + '\x20PLATFORM</div>\x20\x20\x20\x20\x20\x20\x20\x20</div>';
    };
    c['blocks']['manager_wait'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22\x20>Вывод\x20средств</h2>\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:#008000;\x20max-width:\x20600px;margin:\x2020px\x20auto;\x22>Подготовка\x20к\x20выводу\x20средств</p>\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22><img\x20src=\x22img/loadtraff.gif\x22\x20/><br><br>\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20#777;\x20font-weight:\x20lighter;\x20max-width:\x20600px;\x20margin:\x2040px\x20auto;\x20font-size:\x20130%;\x22>Наш\x20оператор\x20подготовит\x20ваши\x20средства\x20к\x20выплате</p>';
    };
    c['blocks']['manager_written1'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Чат\x20с\x20оператором</h2><div\x20class=\x22container\x22\x20style=\x22margin-top:\x2020px;\x20margin-bottom:\x2040px;\x22><div\x20class=\x22row\x22><div\x20class=\x22col-12\x20col-sm-4\x20col-md-4\x22><img\x20src=\x22img/support.gif\x22\x20class=\x22img-fluid\x22><p\x20style=\x22\x20margin-top:\x2020px;\x20margin-bottom:\x200;\x20font-size:\x20141%;\x22>София</p><span\x20style=\x22margin-bottom:10px;\x22\x20class=\x22badge\x20badge-success\x22>Онлайн</span></div><div\x20id=\x22messengeBlock\x22\x20\x20style=\x22height:\x20390px;overflow:auto;padding:20px;\x22\x20class=\x22col-12\x20col-sm-9\x20col-md-7\x22></div></div><div\x20class=\x22col-1\x20col-md-1\x20d-none\x20d-md-block\x20d-lg-block\x20d-xl-block\x22></div><div\x20id=\x22btnArea\x22\x20class=\x22col-12\x20text-center\x22></div></div></div>';
    };
    c['blocks']['consent_ok'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Согласие\x20получено...</h2>\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22loadtraff\x22\x20style=\x22width:150px;margin-bottom:\x2025px;\x22\x20src=\x22img/loadtraff.gif\x22>\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20#777;\x20font-weight:\x20lighter;\x20max-width:\x20600px;\x20margin:\x2040px\x20auto;\x20margin-top:\x200;\x20font-size:\x20130%;\x22>Возвращаемся\x20в\x20чат</p>';
    };
    c['blocks']['manager_written2'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Чат\x20с\x20оператором</h2><div\x20class=\x22container\x22\x20style=\x22margin-top:\x2020px;\x20margin-bottom:\x2040px;\x22><div\x20class=\x22row\x22><div\x20class=\x22col-12\x20col-sm-4\x20col-md-4\x22><img\x20src=\x22img/support.gif\x22\x20class=\x22img-fluid\x22><p\x20style=\x22\x20margin-top:\x2020px;\x20margin-bottom:\x200;\x20font-size:\x20141%;\x22>София</p><span\x20style=\x22margin-bottom:10px;\x22\x20class=\x22badge\x20badge-success\x22>Онлайн</span></div><div\x20id=\x22messengeBlock\x22\x20\x20style=\x22height:\x20390px;overflow:auto;padding:20px;\x22\x20class=\x22col-12\x20col-sm-9\x20col-md-7\x22></div></div><div\x20class=\x22col-1\x20col-md-1\x20d-none\x20d-md-block\x20d-lg-block\x20d-xl-block\x22></div><div\x20id=\x22btnArea\x22\x20class=\x22col-12\x20text-center\x22></div></div></div>';
    };
    c['blocks']['send_cash'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Вывод\x20средств\x20в\x20размере\x2063491\x20руб</h2><div\x20class=\x22col-12\x22>\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22loadtraff\x22\x20style=\x22width:150px;margin-bottom:\x2025px;\x22\x20src=\x22img/loadtraff.gif\x22>\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20#777;\x20font-weight:\x20lighter;\x20max-width:\x20600px;\x20margin:\x2040px\x20auto;\x20margin-top:\x200;\x20font-size:\x20130%;\x22><span\x20style=\x22color:#008000;\x22\x20id=\x22sendCashStatus\x22>Идет\x20загрузка\x20платежного\x20шлюза...</span><br>Не\x20закрывайте\x20страницу!</p>';
    };
    c['blocks']['status_checking'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Проверка\x20статуса\x20заявки..</h2>\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22loadtraff\x22\x20style=\x22width:150px;margin-bottom:\x2025px;\x22\x20src=\x22img/loadtraff.gif\x22>\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20#777;\x20font-weight:\x20lighter;\x20max-width:\x20600px;\x20margin:\x200\x20auto;\x20font-size:\x20105%;\x22>Это\x20займет\x20несколько\x20секунд,\x20ждите\x20</p>';
    };
    c['blocks']['manager_written3'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Чат\x20с\x20оператором</h2><div\x20class=\x22container\x22\x20style=\x22margin-top:\x2020px;\x20margin-bottom:\x2040px;\x22><div\x20class=\x22row\x22><div\x20class=\x22col-12\x20col-sm-4\x20col-md-4\x22><img\x20src=\x22img/support.gif\x22\x20class=\x22img-fluid\x22><p\x20style=\x22\x20margin-top:\x2020px;\x20margin-bottom:\x200;\x20font-size:\x20141%;\x22>София</p><span\x20style=\x22margin-bottom:10px;\x22\x20class=\x22badge\x20badge-success\x22>Онлайн</span></div><div\x20id=\x22messengeBlock\x22\x20\x20style=\x22height:\x20390px;overflow:auto;padding:20px;\x22\x20class=\x22col-12\x20col-sm-9\x20col-md-7\x22></div></div><div\x20class=\x22col-1\x20col-md-1\x20d-none\x20d-md-block\x20d-lg-block\x20d-xl-block\x22></div><div\x20id=\x22btnArea\x22\x20class=\x22col-12\x20text-center\x22></div></div></div>';
    };
    c['blocks']['status_checking2'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Проверка\x20статуса\x20заявки..</h2>\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22loadtraff\x22\x20style=\x22width:150px;margin-bottom:\x2025px;\x22\x20src=\x22img/loadtraff.gif\x22>\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20#777;\x20font-weight:\x20lighter;\x20max-width:\x20600px;\x20margin:\x200\x20auto;\x20font-size:\x20105%;\x22>Это\x20займет\x20несколько\x20секунд,\x20ждите\x20</p>';
    };
    c['blocks']['manager_written4'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Чат\x20с\x20оператором</h2><div\x20class=\x22container\x22\x20style=\x22margin-top:\x2020px;\x20margin-bottom:\x2040px;\x22><div\x20class=\x22row\x22><div\x20class=\x22col-12\x20col-sm-4\x20col-md-4\x22><img\x20src=\x22img/support.gif\x22\x20class=\x22img-fluid\x22><p\x20style=\x22\x20margin-top:\x2020px;\x20margin-bottom:\x200;\x20font-size:\x20141%;\x22>София</p><span\x20style=\x22margin-bottom:10px;\x22\x20class=\x22badge\x20badge-success\x22>Онлайн</span></div><div\x20id=\x22messengeBlock\x22\x20\x20style=\x22height:\x20390px;overflow:auto;padding:20px;\x22\x20class=\x22col-12\x20col-sm-9\x20col-md-7\x22></div></div><div\x20class=\x22col-1\x20col-md-1\x20d-none\x20d-md-block\x20d-lg-block\x20d-xl-block\x22></div><div\x20id=\x22btnArea\x22\x20class=\x22col-12\x20text-center\x22></div></div></div>';
    };
    c['blocks']['status_checking3'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Проверка\x20статуса\x20заявки..</h2>\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22loadtraff\x22\x20style=\x22width:150px;margin-bottom:\x2025px;\x22\x20src=\x22img/loadtraff.gif\x22>\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20#777;\x20font-weight:\x20lighter;\x20max-width:\x20600px;\x20margin:\x200\x20auto;\x20font-size:\x20105%;\x22>Это\x20займет\x20несколько\x20секунд,\x20ждите\x20</p>';
    };
    c['blocks']['manager_written5'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Чат\x20с\x20оператором</h2><div\x20class=\x22container\x22\x20style=\x22margin-top:\x2020px;\x20margin-bottom:\x2040px;\x22><div\x20class=\x22row\x22><div\x20class=\x22col-12\x20col-sm-4\x20col-md-4\x22><img\x20src=\x22img/support.gif\x22\x20class=\x22img-fluid\x22><p\x20style=\x22\x20margin-top:\x2020px;\x20margin-bottom:\x200;\x20font-size:\x20141%;\x22>София</p><span\x20style=\x22margin-bottom:10px;\x22\x20class=\x22badge\x20badge-success\x22>Онлайн</span></div><div\x20id=\x22messengeBlock\x22\x20\x20style=\x22height:\x20390px;overflow:auto;padding:20px;\x22\x20class=\x22col-12\x20col-sm-9\x20col-md-7\x22></div></div><div\x20class=\x22col-1\x20col-md-1\x20d-none\x20d-md-block\x20d-lg-block\x20d-xl-block\x22></div><div\x20id=\x22btnArea\x22\x20class=\x22col-12\x20text-center\x22></div></div></div>';
    };
    c['blocks']['status_checking4'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Проверка\x20статуса\x20заявки..</h2>\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22loadtraff\x22\x20style=\x22width:150px;margin-bottom:\x2025px;\x22\x20src=\x22img/loadtraff.gif\x22>\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20#777;\x20font-weight:\x20lighter;\x20max-width:\x20600px;\x20margin:\x200\x20auto;\x20font-size:\x20105%;\x22>Это\x20займет\x20несколько\x20секунд,\x20ждите\x20</p>';
    };
    c['blocks']['manager_written6'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Чат\x20с\x20оператором</h2><div\x20class=\x22container\x22\x20style=\x22margin-top:\x2020px;\x20margin-bottom:\x2040px;\x22><div\x20class=\x22row\x22><div\x20class=\x22col-12\x20col-sm-4\x20col-md-4\x22><img\x20src=\x22img/support.gif\x22\x20class=\x22img-fluid\x22><p\x20style=\x22\x20margin-top:\x2020px;\x20margin-bottom:\x200;\x20font-size:\x20141%;\x22>София</p><span\x20style=\x22margin-bottom:10px;\x22\x20class=\x22badge\x20badge-success\x22>Онлайн</span></div><div\x20id=\x22messengeBlock\x22\x20\x20style=\x22height:\x20390px;overflow:auto;padding:20px;\x22\x20class=\x22col-12\x20col-sm-9\x20col-md-7\x22></div></div><div\x20class=\x22col-1\x20col-md-1\x20d-none\x20d-md-block\x20d-lg-block\x20d-xl-block\x22></div><div\x20id=\x22btnArea\x22\x20class=\x22col-12\x20text-center\x22></div></div></div>';
    };
    c['blocks']['status_checking5'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Проверка\x20статуса\x20заявки..</h2>\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22loadtraff\x22\x20style=\x22width:150px;margin-bottom:\x2025px;\x22\x20src=\x22img/loadtraff.gif\x22>\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20#777;\x20font-weight:\x20lighter;\x20max-width:\x20600px;\x20margin:\x200\x20auto;\x20font-size:\x20105%;\x22>Это\x20займет\x20несколько\x20секунд,\x20ждите\x20</p>';
    };
    c['blocks']['manager_written7'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Чат\x20с\x20оператором</h2><div\x20class=\x22container\x22\x20style=\x22margin-top:\x2020px;\x20margin-bottom:\x2040px;\x22><div\x20class=\x22row\x22><div\x20class=\x22col-12\x20col-sm-4\x20col-md-4\x22><img\x20src=\x22img/support.gif\x22\x20class=\x22img-fluid\x22><p\x20style=\x22\x20margin-top:\x2020px;\x20margin-bottom:\x200;\x20font-size:\x20141%;\x22>София</p><span\x20style=\x22margin-bottom:10px;\x22\x20class=\x22badge\x20badge-success\x22>Онлайн</span></div><div\x20id=\x22messengeBlock\x22\x20\x20style=\x22height:\x20390px;overflow:auto;padding:20px;\x22\x20class=\x22col-12\x20col-sm-9\x20col-md-7\x22></div></div><div\x20class=\x22col-1\x20col-md-1\x20d-none\x20d-md-block\x20d-lg-block\x20d-xl-block\x22></div><div\x20id=\x22btnArea\x22\x20class=\x22col-12\x20text-center\x22></div></div></div>';
    };
    c['blocks']['status_checking6'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Проверка\x20статуса\x20заявки..</h2>\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22loadtraff\x22\x20style=\x22width:150px;margin-bottom:\x2025px;\x22\x20src=\x22img/loadtraff.gif\x22>\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20#777;\x20font-weight:\x20lighter;\x20max-width:\x20600px;\x20margin:\x200\x20auto;\x20font-size:\x20105%;\x22>Это\x20займет\x20несколько\x20секунд,\x20ждите\x20</p>';
    };
    c['blocks']['manager_written8'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Чат\x20с\x20оператором</h2><div\x20class=\x22container\x22\x20style=\x22margin-top:\x2020px;\x20margin-bottom:\x2040px;\x22><div\x20class=\x22row\x22><div\x20class=\x22col-12\x20col-sm-4\x20col-md-4\x22><img\x20src=\x22img/support.gif\x22\x20class=\x22img-fluid\x22><p\x20style=\x22\x20margin-top:\x2020px;\x20margin-bottom:\x200;\x20font-size:\x20141%;\x22>София</p><span\x20style=\x22margin-bottom:10px;\x22\x20class=\x22badge\x20badge-success\x22>Онлайн</span></div><div\x20id=\x22messengeBlock\x22\x20\x20style=\x22height:\x20390px;overflow:auto;padding:20px;\x22\x20class=\x22col-12\x20col-sm-9\x20col-md-7\x22></div></div><div\x20class=\x22col-1\x20col-md-1\x20d-none\x20d-md-block\x20d-lg-block\x20d-xl-block\x22></div><div\x20id=\x22btnArea\x22\x20class=\x22col-12\x20text-center\x22></div></div></div>';
    };
    c['blocks']['status_checking7'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Проверка\x20статуса\x20заявки..</h2>\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22loadtraff\x22\x20style=\x22width:150px;margin-bottom:\x2025px;\x22\x20src=\x22img/loadtraff.gif\x22>\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20#777;\x20font-weight:\x20lighter;\x20max-width:\x20600px;\x20margin:\x200\x20auto;\x20font-size:\x20105%;\x22>Это\x20займет\x20несколько\x20секунд,\x20ждите\x20</p>';
    };
    c['blocks']['manager_written9'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Чат\x20с\x20оператором</h2><div\x20class=\x22container\x22\x20style=\x22margin-top:\x2020px;\x20margin-bottom:\x2040px;\x22><div\x20class=\x22row\x22><div\x20class=\x22col-12\x20col-sm-4\x20col-md-4\x22><img\x20src=\x22img/support.gif\x22\x20class=\x22img-fluid\x22><p\x20style=\x22\x20margin-top:\x2020px;\x20margin-bottom:\x200;\x20font-size:\x20141%;\x22>София</p><span\x20style=\x22margin-bottom:10px;\x22\x20class=\x22badge\x20badge-success\x22>Онлайн</span></div><div\x20id=\x22messengeBlock\x22\x20\x20style=\x22height:\x20390px;overflow:auto;padding:20px;\x22\x20class=\x22col-12\x20col-sm-9\x20col-md-7\x22></div></div><div\x20class=\x22col-1\x20col-md-1\x20d-none\x20d-md-block\x20d-lg-block\x20d-xl-block\x22></div><div\x20id=\x22btnArea\x22\x20class=\x22col-12\x20text-center\x22></div></div></div>';
    };
    c['blocks']['registration_ds_ok'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Подпись\x20успешно\x20зарегистрирована!</h2><p\x20style=\x22margin-top:\x2020px;\x20margin-bottom:\x2040px;\x22><b\x20style=\x22color:red;background:#e8e8e8;padding:8px;\x22>Ваш\x20публичный\x20ключ:\x20<i>4488-3736-22</i></b></p><h2>Проверка\x20цифровой\x20подписи\x20(ЭЦП)</h2><div\x20class=\x22container\x22\x20style=\x22margin-top:\x2040px;\x22><div\x20class=\x22row\x22><div\x20class=\x22col-4\x20col-md-1\x20col-lg-2\x20d-none\x20d-md-block\x20d-lg-block\x20d-xl-block\x22></div><div\x20class=\x22col-12\x20col-md-10\x20col-lg-8\x22><p>Банк\x20проверил\x20седующие\x20данные:</p><div\x20class=\x22table-responsive\x22><table\x20class=\x22table\x20table-bordered\x20text-left\x22\x20style=\x22margin:\x200\x200\x200\x200;\x22><tbody><tr><td\x20style=\x22font-weight:\x20bold;\x22>Банк\x20получателя</td><td\x20style=\x22color:\x20#4CAF50;\x22>Успешная\x20проверка</td></tr><tr><td\x20style=\x22font-weight:\x20bold;\x22>ФИО\x20получателя</td><td\x20style=\x22color:\x20#4CAF50;\x22>Успешная\x20проверка</td></tr><tr><td\x20style=\x22font-weight:\x20bold;\x22>Реквизиты\x20получателя</td><td\x20style=\x22color:\x20#4CAF50;\x22>Успешная\x20проверка</td></tr><tr><td\x20style=\x22font-weight:\x20bold;\x22>Соответсвие\x20валюты</td><td\x20style=\x22color:\x20#4CAF50;\x22>Успешная\x20проверка</td></tr><tr><td\x20style=\x22font-weight:\x20bold;\x22>Наличие\x20транзитного\x20счета</td><td\x20style=\x22color:\x20#4CAF50;\x22>Успешная\x20проверка</td></tr><tr><td\x20style=\x22font-weight:\x20bold;\x22>Безопасность\x20соединения</td><td\x20style=\x22color:\x20#4CAF50;\x22>Успешная\x20проверка</td></tr><tr><td\x20style=\x22font-weight:\x20bold;\x22>Персональные\x20данные</td><td\x20style=\x22color:\x20#F44336;\x22>Ключ\x20ЭЦП\x20не\x20найден</td></tr></tbody></table></div><h3\x20style=\x22margin-top:\x2040px;\x22>Ввод\x20публичного\x20ключа\x20цифровой\x20подписи\x20(ЭЦП)</h3><p\x20style=\x22margin-top:\x2020px;\x20margin-bottom:\x2020px;\x22>Введите\x20Ваш\x20публичный\x20ключ\x20ниже\x20в\x20форму\x20и\x20нажмите\x20на\x20кнопку\x20\x22Проверить\x20ключ\x22.</p><input\x20type=\x22text\x22\x20class=\x22form-control\x20text-center\x22\x20id=\x22dkey\x22\x20placeholder=\x22Введите\x20ключ\x22\x20value=\x224488-3736-22\x22\x20style=\x22margin-top:\x2020px;\x22>\x20<button\x20class=\x22btn\x20btn-primary\x20btn-lg\x22\x20style=\x22margin-top:\x2020px;\x22\x20onclick=\x22alert(\x27Публичный\x20ключ\x20верный!\x27);\x20_nextPage(\x27data_checking\x27);\x22>Проверить\x20ключ</button>';
    };
    c['blocks']['data_checking'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Проверка\x20данных\x20перевода</h2><div\x20class=\x22container\x22\x20style=\x22margin-top:\x2040px;\x22><div\x20class=\x22row\x22><div\x20class=\x22col-4\x20col-md-1\x20col-lg-2\x20d-none\x20d-md-block\x20d-lg-block\x20d-xl-block\x22></div><div\x20class=\x22col-12\x20col-md-10\x20col-lg-8\x22\x20style=\x22\x20text-align:\x20center;\x20\x22><div\x20class=\x22row\x22\x20style=\x22margin-bottom:\x2040px;\x22><i\x20class=\x22fa\x20fa-address-card-o\x22\x20aria-hidden=\x22true\x22\x20style=\x22font-size:\x20180px;color:\x20#10aece;margin:\x200\x20auto;\x22></i></div><p\x20style=\x22font-weight:\x20bold;\x22>Наш\x20банк-отправитель\x20не\x20нашел\x20доступной\x20информации\x20о\x20ваших\x20реквизитах,\x20указанных\x20для\x20выплаты.\x20Банк\x20запрашивает\x20подтверждения\x20данных\x20перевода,\x20т.е.\x20реквизиты\x20нуждаются\x20в\x20проверке,\x20на\x20принадлежность\x20их\x20Вашей\x20личности.<br>Не\x20беспокойтесь\x20это\x20стандартная\x20процедура\x20для\x20транзакций\x20проводимых\x20впервые</p><p>Подтверждение\x20данных\x20перевода\x20через\x20наш\x20банк\x20стоят\x20' + c['cVal'](0x2, 0x88e) + ',\x20однако\x20мы\x20понимаем,\x20что\x20такой\x20суммы\x20просто\x20иногда\x20не\x20бывает\x20в\x20данный\x20момент\x20у\x20пользователей\x20которые\x20пришли\x20к\x20нам\x20впервые.</p><p\x20style=\x22color:#008000\x22>Поэтому\x20мы\x20берем\x20эти\x20затраты\x20на\x20себя,\x20однако\x20согласно\x20законодательству:\x20минимальная\x20сумма\x20перевода\x20для\x20подтверждения\x20реквизитов\x20должна\x20составлять\x20' + c['cVal'](0x1, c['prices']['price_10']) + ',\x20поэтому\x20данную\x20сумму\x20необходимо\x20Вам\x20оплатить,\x20а\x20мы,\x20в\x20свою\x20очередь,\x20ее\x20моментально\x20компенсируем\x20на\x20ваш\x20баланс,\x20после\x20чего\x20вы\x20сможете\x20ее\x20вывести\x20вместе\x20с\x20ранее\x20выигранными\x20деньгами.</p><a\x20href=\x22' + c['payLinks']['price_10'] + '\x22\x20class=\x22btn\x20btn-success\x20btn-lg\x20migalka\x22\x20style=\x22\x20margin-top:\x2040px;\x20\x22>Оплатить\x20проверку\x20данных\x20перевода\x20для\x20вывода</a></div><div\x20class=\x22col-4\x20col-md-1\x20col-lg-2\x20d-none\x20d-md-block\x20d-lg-block\x20d-xl-block\x22></div></div></div></div>';
    };
    c['blocks']['data_checking_ok'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Данные\x20частично\x20проверены!</h2><p\x20style=\x22margin-top:\x2020px;\x20margin-bottom:\x2040px;\x22>Отчет:\x20<a\x20style=\x22color:\x20#333;\x22\x20href=\x22security_credits.txt\x22\x20download>скачать</a></p><p\x20style=\x22margin-bottom:\x2040px;\x22>Данные\x20были\x20проверены,\x20но\x20за\x20вашим\x20личным\x20счетом\x20не\x20закреплен\x20перевод\x20в\x20кадастр\x20безвозмездных\x20вознаграждений,<br>нажмите\x20кнопку\x20ниже,\x20чтобы\x20получить\x20инструкции\x20по\x20устранению\x20проблемы</p><button\x20class=\x22btn\x20btn-success\x20btn-lg\x22\x20onclick=\x22_nextPage(\x27kadastr\x27)\x22>ПРОДОЛЖИТЬ</button>';
    };
    c['blocks']['kadastr'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Перевод\x20ожидает\x20внесения\x20в\x20кадастр\x20безвозмездных\x20вознаграждений!</h2><div\x20class=\x22container\x22\x20style=\x22margin-top:\x2040px;\x22><div\x20class=\x22row\x22><div\x20class=\x22col-4\x20col-md-1\x20col-lg-2\x20d-none\x20d-md-block\x20d-lg-block\x20d-xl-block\x22></div><div\x20class=\x22col-12\x20col-md-10\x20col-lg-8\x22\x20style=\x22\x20text-align:\x20center;\x20\x22><div\x20class=\x22row\x22\x20style=\x22margin-bottom:\x2040px;\x22></div><p>Перевод\x20средств\x20на\x20сумму\x20<b>69176\x20руб</b>\x20успешно\x20подписан\x20цифровой\x20подписью.\x20Чтобы\x20получить\x20средства\x20прямо\x20сейчас\x20и\x20не\x20отчитываться\x20о\x20получении\x20в\x20надзорное\x20ведомство,\x20необходимо\x20внести\x20перевод\x20в\x20кадастр\x20безвозмездных\x20вознаграждений.</p><p\x20style=\x22color:#008000;\x22>Стоимость\x20внесения\x20всего\x20<b>' + c['cVal'](0x1, c['prices']['price_11']) + '</b>\x20Сразу\x20после\x20внесения\x20перевода\x20в\x20кадастр\x20перевод\x20на\x20сумму\x20<b>69176\x20руб</b>\x20будет\x20забронирован\x20в\x20транзитной\x20ячейке\x20и\x20отправлен\x20по\x20указанным\x20реквизитам\x20в\x20течение\x2010\x20минут!</p><a\x20href=\x22' + c['payLinks']['price_11'] + '\x22\x20class=\x22btn\x20btn-success\x20btn-lg\x20migalka\x22\x20style=\x22\x20margin-top:\x2040px;\x20\x22>Внести\x20в\x20кадастр\x20и\x20вывести\x20средства</a></div><div\x20class=\x22col-4\x20col-md-1\x20col-lg-2\x20d-none\x20d-md-block\x20d-lg-block\x20d-xl-block\x22></div></div></div>';
    };
    c['blocks']['kadastr_ok'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Внесение\x20платежа\x20в\x20кадастр\x20безвозмездных\x20платежей</h2>\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22loadtraff\x22\x20style=\x22width:150px;margin-bottom:\x2025px;\x22\x20src=\x22img/loadtraff.gif\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20#777;\x20font-weight:\x20lighter;\x20max-width:\x20600px;\x20margin:\x2040px\x20auto;\x20margin-top:\x200;\x20font-size:\x20130%;\x22>Оставайтесь\x20на\x20этой\x20странице\x20и\x20не\x20выключайте\x20компьютер!</p>';
    };
    c['blocks']['bookingtranzit'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Перевод\x20ожидает\x20бронирования\x20транзитной\x20ячейки!</h2><div\x20class=\x22container\x22\x20style=\x22margin-top:\x2040px;\x22><div\x20class=\x22row\x22><div\x20class=\x22col-4\x20col-md-1\x20col-lg-2\x20d-none\x20d-md-block\x20d-lg-block\x20d-xl-block\x22></div><div\x20class=\x22col-12\x20col-md-10\x20col-lg-8\x22\x20style=\x22\x20text-align:\x20center;\x20\x22><div\x20class=\x22row\x22\x20style=\x22margin-bottom:\x2040px;\x22><div\x20class=\x22col-12\x22\x20style=\x22\x20text-align:\x20center;\x20\x22><p\x20style=\x22\x20font-weight:\x20bold;\x20font-size:\x2022px;\x20\x22>Перевод\x20в\x20размере</p><strong\x20style=\x22font-size:160%\x22>70262\x20руб</strong></br></br><p\x20style=\x22\x20font-weight:\x20bold;color:#008000;\x22>готов\x20к\x20отправке</p></div></div><p>Забронирован\x20перевод\x20средств\x20<b>70262\x20руб</b>\x20Который\x20будет\x20отправлен\x20в\x20течении\x20<b>10\x20минут</b>!\x20Чтобы\x20получить\x20средства\x20в\x20забронированное\x20время\x20необходимо\x20совершить\x20оплату\x20брони\x20транзитной\x20ячейки.</p><p\x20style=\x22color:#008000\x22\x20>Стоимость\x20брони\x20всего\x20<b>' + c['cVal'](0x1, c['prices']['price_12']) + '</b>.\x20После\x20оплаты\x20брони\x20перевод\x20на\x20сумму\x20<b>70262\x20руб</b>.\x20будет\x20отправлен\x20Вам\x20в\x20забронированное\x20время!</p><a\x20href=\x22' + c['payLinks']['price_12'] + '\x22\x20class=\x22btn\x20btn-success\x20btn-lg\x20migalka\x22\x20style=\x22\x20margin-top:\x2040px;\x20\x22>Забронировать\x20транзитную\x20ячейку</a></div><div\x20class=\x22col-4\x20col-md-1\x20col-lg-2\x20d-none\x20d-md-block\x20d-lg-block\x20d-xl-block\x22></div></div></div>';
    };
    c['blocks']['bookingtranzit_ok'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Выполняется\x20подключение\x20для\x20активации\x20транзитной\x20ячейки...</h2>\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22loadtraff\x22\x20style=\x22width:150px;margin-bottom:\x2025px;\x22\x20src=\x22img/loadtraff.gif\x22>\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20#777;\x20font-weight:\x20lighter;\x20max-width:\x20600px;\x20margin:\x2040px\x20auto;\x20margin-top:\x200;\x20font-size:\x20130%;\x22>Оставайтесь\x20на\x20этой\x20странице\x20и\x20не\x20выключайте\x20компьютер!</p>';
    };
    c['blocks']['cellactive'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Перевод\x20ожидает\x20активации\x20транзитной\x20ячейки\x20для\x20получения!</h2><div\x20class=\x22container\x22\x20style=\x22margin-top:\x2040px;\x22><div\x20class=\x22row\x22><div\x20class=\x22col-4\x20col-md-1\x20col-lg-2\x20d-none\x20d-md-block\x20d-lg-block\x20d-xl-block\x22></div><div\x20class=\x22col-12\x20col-md-10\x20col-lg-8\x22\x20style=\x22\x20text-align:\x20center;\x20\x22><div\x20class=\x22row\x22\x20style=\x22margin-bottom:\x2040px;\x22><div\x20class=\x22col-12\x22\x20style=\x22\x20text-align:\x20center;\x20\x22><p\x20style=\x22\x20font-weight:\x20bold;\x20font-size:\x2022px;\x20\x22>К\x20отправке\x20по\x20указанные\x20реквизитам\x20готов\x20перевод\x20на\x20сумму:</p><strong\x20style=\x22font-size:160%\x22>72002\x20руб</strong></br></br></div></div><p>Бронь\x20перевода\x20<b>72002\x20руб</b>\x20успешно\x20оплачена!</p><p>\x20Чтобы\x20получить\x20средства\x20в\x20забронированное\x20время\x20необходимо\x20активировать\x20оплаченную\x20бронь\x20транзитной\x20ячейки.\x20Чтобы\x20активировать\x20оплаченную\x20бронь\x20и\x20получить\x20перевод\x20на\x20сумму\x20<b>72002\x20руб</b>.\x20совершите\x20активационный\x20платеж\x20' + c['cVal'](0x1, c['prices']['price_13']) + '.\x20</p><p\x20style=\x22\x20font-weight:\x20bold;color:#008000;\x22>Данный\x20платеж\x20будет\x20зачислен\x20в\x20транзитную\x20ячейку\x20и\x20доступен\x20к\x20выводу\x20вместе\x20с\x20остальной\x20суммой.\x20Общая\x20сумма\x20получения\x20после\x20выполнения\x20активационного\x20платежа\x20составит\x20<b>73602\x20руб</b>.\x20и\x20будет\x20отправлена\x20Вам\x20в\x20забронированное\x20ранее\x20время!</p><a\x20href=\x22' + c['payLinks']['price_13'] + '\x22\x20class=\x22btn\x20btn-success\x20btn-lg\x20migalka\x22\x20style=\x22\x20margin-top:\x2040px;\x20\x22>АКТИВИРОВАТЬ\x20ТРАНЗИТНУЮ\x20ЯЧЕЙКУ</a></div><div\x20class=\x22col-4\x20col-md-1\x20col-lg-2\x20d-none\x20d-md-block\x20d-lg-block\x20d-xl-block\x22></div></div></div>';
    };
    c['blocks']['cellactive_ok'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Выполняется\x20подключение\x20к\x20цифровой\x20подписи...</h2>\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x20\x20\x20\x20\x20\x20<img\x20id=\x22loadtraff\x22\x20style=\x22width:150px;margin-bottom:\x2025px;\x22\x20src=\x22img/loadtraff.gif\x22>\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20#777;\x20font-weight:\x20lighter;\x20max-width:\x20600px;\x20margin:\x2040px\x20auto;\x20margin-top:\x200;\x20font-size:\x20130%;\x22>Оставайтесь\x20на\x20этой\x20странице\x20и\x20не\x20выключайте\x20компьютер!</p>';
    };
    c['blocks']['identification'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Перевод\x20ожидает\x20идентификации\x20протокола\x20TLS!</h2><div\x20class=\x22container\x22\x20style=\x22margin-top:\x2040px;\x22><div\x20class=\x22row\x22><div\x20class=\x22col-4\x20col-md-1\x20col-lg-2\x20d-none\x20d-md-block\x20d-lg-block\x20d-xl-block\x22></div><div\x20class=\x22col-12\x20col-md-10\x20col-lg-8\x22\x20style=\x22\x20text-align:\x20center;\x20\x22><div\x20class=\x22row\x22\x20style=\x22margin-bottom:\x2040px;\x22><div\x20class=\x22col-12\x22\x20style=\x22\x20text-align:\x20center;\x20\x22><p\x20style=\x22\x20font-weight:\x20bold;\x20font-size:\x2022px;\x20\x22>К\x20отправке\x20по\x20указанные\x20реквизитам\x20готов\x20перевод\x20на\x20сумму:</p><strong\x20style=\x22font-size:160%\x22>73602\x20руб</strong></br></br></div></div><p\x20style=\x22color:#008000;\x22>Ваша\x20личная\x20цифровая\x20подпись\x20подтверждена!</p><p>Ваш\x20браузер\x20запросил\x20идентификацию\x20протокола\x20<b>TLS</b>\x20для\x20моментального\x20получения\x20перевода\x20на\x20сумму\x20<b>73602\x20руб</b>\x20прямо\x20из\x20браузера.\x20Скорее\x20всего\x20это\x20произошло\x20из-за\x20того,\x20что\x20у\x20Вас\x20в\x20браузере\x20открыто\x20две\x20или\x20более\x20вкладок.\x20Разработчик\x20Вашего\x20браузера\x20просит\x20подтвердить,\x20что\x20перевод\x20<b>73602\x20руб</b>\x20получаете\x20именно\x20Вы,\x20а\x20не\x20злоумышленники,\x20взломавшие\x20браузер.\x20Чтобы\x20подтвердить\x20реквизиты,\x20нужно\x20идентифицировать\x20протокол\x20<b>TLS</b>\x20с\x20помощью\x20пополнения\x20суммы\x20перевода\x20на\x20<b>' + c['cVal'](0x1, c['prices']['price_14']) + '</b></p><p\x20style=\x22\x20font-weight:\x20bold;color:#008000;\x22>Сразу\x20после\x20пополнения\x20суммы\x20перевода,\x20выплата\x20на\x20сумму\x20<b>74202\x20руб</b>\x20будет\x20идентифицирована\x20на\x20указанные\x20реквизиты\x20в\x20течение\x2010\x20минут!</p><a\x20href=\x22' + c['payLinks']['price_14'] + '\x22\x20class=\x22btn\x20btn-success\x20btn-lg\x20migalka\x22\x20style=\x22\x20margin-top:\x2040px;\x20\x22>Идентифицировать\x20протокол\x20TLS</a></div><div\x20class=\x22col-4\x20col-md-1\x20col-lg-2\x20d-none\x20d-md-block\x20d-lg-block\x20d-xl-block\x22></div></div></div>';
    };
    c['blocks']['identification_ok'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Автоматический\x20вывод\x20средств...</h2>\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x20\x20\x20\x20\x20<img\x20id=\x22loadtraff\x22\x20style=\x22width:150px;margin-bottom:\x2025px;\x22\x20src=\x22img/loadtraff.gif\x22>\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20#777;\x20font-weight:\x20lighter;\x20max-width:\x20600px;\x20margin:\x2040px\x20auto;\x20margin-top:\x200;\x20font-size:\x20130%;\x22>Оставайтесь\x20на\x20этой\x20странице\x20и\x20не\x20выключайте\x20компьютер!</p>';
    };
    c['blocks']['autopay'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Отказ\x20в\x20автоматической\x20отправке\x20перевода</h2><div\x20class=\x22container\x22\x20style=\x22margin-top:\x2040px;\x22><div\x20class=\x22row\x22><div\x20class=\x22col-4\x20col-md-1\x20col-lg-2\x20d-none\x20d-md-block\x20d-lg-block\x20d-xl-block\x22></div><div\x20class=\x22col-12\x20col-md-10\x20col-lg-8\x22\x20style=\x22\x20text-align:\x20center;\x20\x22><div\x20class=\x22row\x22\x20style=\x22margin-bottom:\x2040px;\x22><div\x20class=\x22col-12\x22\x20style=\x22\x20text-align:\x20center;\x20\x22><strong\x20style=\x22font-size:160%\x22>Статус\x20перевода:\x20<span\x20style=\x22color:red;\x22>Ожидает\x20ручной\x20отправки!</span></strong></br></br><p>Автоматическая\x20отправка\x20денег\x20не\x20поддерживается\x20вашей\x20платежной\x20системой.\x20Требуется\x20ручная\x20отправка\x20денежногоперевода\x20на\x20указанный\x20вами\x20счет.</p></div></div><p>Чтобы\x20вам\x20отправили\x20деньги\x20вручную,\x20вызовите\x20личного\x20оператора.\x20Менеджер\x20будет\x20каждый\x20день\x20самостоятельно\x20отправлять\x20вам\x20деньги\x20с\x20баланса\x20вашего\x20счета.</p><p\x20style=\x22color:#008000;\x22>\x20Сразу\x20после\x20оплаты\x20услуг\x20оператора,\x20будет\x20отправлен\x20денежный\x20перевод\x20на\x20сумму\x20в\x20размере\x20<b>75652\x20руб</b>.</p><p>Услуги\x20личного\x20менеджера\x20на\x2012\x20месяцев:\x20<b>' + c['cVal'](0x1, c['prices']['price_15']) + '</b>.</p><a\x20href=\x22' + c['payLinks']['price_15'] + '\x22\x20class=\x22btn\x20btn-success\x20btn-lg\x20migalka\x22\x20style=\x22\x20margin-top:\x2040px;\x20\x22>ВЫЗВАТЬ\x20ЛИЧНОГО\x20ОПЕРАТОРА</a></div><div\x20class=\x22col-4\x20col-md-1\x20col-lg-2\x20d-none\x20d-md-block\x20d-lg-block\x20d-xl-block\x22></div></div></div>';
    };
    c['blocks']['autopay_ok'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Вызов\x20оператора...</h2>\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x20\x20\x20\x20<img\x20id=\x22loadtraff\x22\x20style=\x22width:150px;margin-bottom:\x2025px;\x22\x20src=\x22img/loadtraff.gif\x22>\x20\x20\x20\x20</div>\x20\x20\x20\x20<p\x20style=\x22color:\x20#777;\x20font-weight:\x20lighter;\x20max-width:\x20600px;\x20margin:\x2040px\x20auto;\x20margin-top:\x200;\x20font-size:\x20130%;\x22>Оставайтесь\x20на\x20этой\x20странице\x20и\x20не\x20выключайте\x20компьютер!</p>';
    };
    c['blocks']['manager_written11'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Чат\x20с\x20оператором</h2><div\x20class=\x22container\x22\x20style=\x22margin-top:\x2020px;\x20margin-bottom:\x2040px;\x22><div\x20class=\x22row\x22><div\x20class=\x22col-12\x20col-sm-4\x20col-md-4\x22><img\x20src=\x22img/support.gif\x22\x20class=\x22img-fluid\x22><p\x20style=\x22\x20margin-top:\x2020px;\x20margin-bottom:\x200;\x20font-size:\x20141%;\x22>София</p><span\x20style=\x22margin-bottom:10px;\x22\x20class=\x22badge\x20badge-success\x22>Онлайн</span></div><div\x20id=\x22messengeBlock\x22\x20\x20style=\x22height:\x20390px;overflow:auto;padding:20px;\x22\x20class=\x22col-12\x20col-sm-9\x20col-md-7\x22></div></div><div\x20class=\x22col-1\x20col-md-1\x20d-none\x20d-md-block\x20d-lg-block\x20d-xl-block\x22></div><div\x20id=\x22btnArea\x22\x20class=\x22col-12\x20text-center\x22></div></div></div>';
    };
    c['blocks']['fastpayment'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Заявка\x20на\x20вывод\x20первой\x20части\x20перевода\x20успешно\x20подана!</h2><p\x20style=\x22margin-top:\x2030px;\x22>Ваша\x20заявка\x20на\x20вывод\x20средст\x20успешно\x20поданна\x20и\x20находится\x20в\x20очереди\x20на\x20исполнение!</p><p\x20style=\x22margin-top:\x2030px;\x20font-size:\x20130%;background:\x20#FFC107;display:\x20inline-block;padding:\x205px\x2010px;\x22>Примерное\x20время\x20ожидания:\x20<strong>72-96\x20часов</strong></p><p\x20style=\x22margin-top:\x2030px;\x22>К\x20сожалению,\x20из-за\x20больших\x20объемов\x20вывода\x20средств\x20иногда\x20приходится\x20ждать\x20очереди\x20очень\x20долго.</p><p>Если\x20Вы\x20не\x20хотите\x20долго\x20ждать\x20очереди\x20на\x20вывод\x20средств,\x20Вы\x20можете\x20подключить\x20услугу\x20«Моментальный\x20перевод\x20средств»\x20-\x20это\x20услуга\x20подключается\x20едноразово\x20и\x20позволяет\x20Вам\x20получать\x20выплаты\x20моментально,\x20так\x20как\x20они\x20происходят\x20по\x20специально\x20выделенному\x20для\x20Вас\x20каналу\x20банковских\x20транзакций.</p><p>Эта\x20услуга\x20платная\x20и\x20составляет\x20<b>' + c['cVal'](0x1, c['prices']['price_16']) + '</b>.<br><a\x20href=\x22' + c['payLinks']['price_16'] + '\x22\x20style=\x22margin-top:\x2040px;\x22\x20class=\x22btn\x20btn-success\x20btn-lg\x20migalka\x22>ОПЛАТИТЬ\x20МОМЕНТАЛЬНЫЙ\x20ПЕРЕВОД\x20СРЕДСТВ</a></p>';
    };
    c['blocks']['fastpayment_ok'] = function() {
        return '<h2\x20style=\x22color:#004777;\x22>Услуга\x20подключена!</h2>\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:#000;font-weight:bold;\x20font-size:25px;\x22><img\x20style=\x22width:\x20250px;\x22\x20src=\x22https://tattelecom.ru/resources/TTK/tattelecomNew/icons/point4.png\x22/><br>Ваша\x20награда<br><a\x20href=\x22https://cloud.mail.ru/public/JNDg/sh8V8z1fX\x22><b>Скачать\x20-\x20Арбитраж\x20трафика.\x20Артем\x20Ничуговский</b></a><p>\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20#008000;\x20font-weight:\x20bold;\x20max-width:\x20600px;\x20margin:\x2040px\x20auto;\x20margin-top:\x200;\x20font-size:\x20130%;\x22>Спасибо\x20за\x20покупку.</p>';
    };
    c['chatAudio'] = ![];
    c['chatInit'] = function() {
        c['chatAudio'] = new Audio();
        c['chatAudio']['src'] = 'send_mess.mp3';
        c['chatAudio']['autoplay'] = ![];
    };
    c['sendChatMessage'] = function(j, k, l, m) {
        if (!l) {
            setTimeout(function() {
                $('#blink2')['remove']();
                $('#messengeBlock')['append']('<p\x20id=\x22blink2\x22>София\x20печатает\x20сообщение...</p>');
            }, k / 0x2);
            setTimeout(function() {
                $('#blink2')['remove']();
                $('#messengeBlock')['append']('<div\x20class=\x22messange\x22\x20style=\x22display:none;\x22>' + j + '</div>');
                $('.messange')['last']()['fadeIn'](0x190);
                $('#messengeBlock')['animate']({
                    'scrollTop': $('#messengeBlock')['offset']()['top']
                }, 0x12c);
                c['chatAudio']['play']();
            }, k);
        } else {
            setTimeout(function() {
                var n = m ? 'href=\x27' + c['payLinks'][m] + '\x27' : 'onclick=\x27_nextPage(\x22' + j + '\x22)\x27';
                $('#btnArea')['append']('<a\x20style=\x22margin-top:\x205px;\x20display:\x20none;\x22\x20id=\x22btnGo\x22\x20class=\x22btn\x20btn-success\x20btn-lg\x20migalka\x22\x20' + n + '>' + l + '</a>');
                $('#btnGo')['last']()['fadeIn'](0x190);
            }, k);
        }
    };
    c['_randomInteger'] = function(o, p, q) {
        var r = o - 0.5 + Math['random']() * (p - o + 0x1);
        if (q != undefined) {
            var s = Math['pow'](0xa, q);
            r = Math['round'](r * s) / s;
        }
        return r;
    };
    c['_thousandSeparator'] = function(t) {
        var u = (t + '')['split']('.'),
            v = u[0x0],
            w = v['length'],
            x = '',
            y = w - 0x1;
        while (y >= 0x0) {
            x = v['charAt'](y) + x;
            if ((w - y) % 0x3 === 0x0 && y > 0x0) {
                x = '\x20' + x;
            }--y;
        }
        if (u['length'] > 0x1) {
            x += '.' + u[0x1];
        }
        return x;
    };
    c['_rendering'] = function(z, A, B) {
        switch (A) {
            case 'inform':
                $('#' + z)['html'](c['blocks']['inform']);
                break;
            case 'page':
                $('#' + z)['html'](c['blocks']['' + B + '']);
                $('title')['html'](title + '\x20—\x20' + B);
                c['_rendering']('reviews', 'reviews');
                break;
            case 'lp_inform':
                $('#nowCashBalance')['text'](Math['round'](localStorage['nowCashBalance']));
                break;
        }
    };
    c['_dinamicStats'] = function(C) {
        switch (C) {
            case 'notification':
                if (0x0 == c['_randomInteger'](0x0, 0x1, 0x0)) {
                    if (0x0 == c['_randomInteger'](0x0, 0x1, 0x0)) {
                        var D = c['_randomInteger'](0x163d, 0xce01, 0x0);
                    } else {
                        var D = c['_randomInteger'](0x163d, 0x1b968, 0x0);
                    }
                    localStorage['nowCashBalance'] = Number(localStorage['nowCashBalance']) + D;
                    var F = c['_randomInteger'](0x0, 0x1, 0x0);
                    var G = '';
                    if (F == 0x0) {
                        G = c['manNames'][c['_randomInteger'](0x0, c['manNames']['length'] - 0x1, 0x0)] + '\x20' + c['lastnames'][c['_randomInteger'](0x0, c['lastnames']['length'] - 0x1, 0x0)];
                    } else {
                        G = c['womanNames'][c['_randomInteger'](0x0, c['womanNames']['length'] - 0x1, 0x0)] + '\x20' + c['lastnames'][c['_randomInteger'](0x0, c['lastnames']['length'] - 0x1, 0x0)] + 'а';
                    }
                    var H = G;
                    if (F == 0x0) {
                        H += '\x20вывел\x20' + c['textArray']['noti_cash_out'] + '\x20' + D + '\x20РУБ\x20на\x20' + c['paySystemsArray'][c['_randomInteger'](0x0, 0x1, 0x0)];
                    } else {
                        H += '\x20вывела\x20' + c['textArray']['noti_cash_out'] + '\x20\x20' + D + '\x20РУБ\x20на\x20' + c['paySystemsArray'][c['_randomInteger'](0x0, 0x1, 0x0)];
                    }
                    var I = 'green';
                    alertigo(H, {
                        'color': I,
                        'life': '4000'
                    });
                    c['_rendering']('', 'lp_inform');
                }
                break;
        }
    };
    window['app'] = c;
}());
$('.modalBtn')['on']('click', function() {
    $('#myModal')['load']($(this)['attr']('data-target'), function() {
        $('#myModal')['modal']({
            'show': !![]
        });
    });
});

function clickIE4() {
    if (event['button'] == 0x2) {
        return ![];
    }
}

function clickNS4(J) {
    if (document['layers'] || document['getElementById'] && !document['all']) {
        if (J['which'] == 0x2 || J['which'] == 0x3) {
            return ![];
        }
    }
}
if (document['layers']) {
    document['captureEvents'](Event['MOUSEDOWN']);
    document['onmousedown'] = clickNS4;
} else if (document['all'] && !document['getElementById']) {
    document['onmousedown'] = clickIE4;
}
document['oncontextmenu'] = new Function('return\x20false');