// инициализация вк
VK.init(, function() { 
     console.log('Init successful');
  }, function() { 
     console.log('Error init');
}, '5.73'); 

// функция дня изменения размера окна в зависимости от содержимого страницы
function autosize(width) {
    //Проверяем элемент body на наличие.
    if (!document.getElementById('body')) {
        alert('error');
        return;
    }
    // Успешно ли подключен ВК скрипт
    if (typeof VK.callMethod != 'undefined') {
        /*
        Вызываем функцию vk js api для управления окном.
        VK.callMethod('функция', параметры)
        В данном случае у нас - VK.callMethod('изменение_размеров_окна', ширина, высота);
        Так же добавляем еще 60 пикселей что бы было небольшое расстояние.
        */
        VK.callMethod('resizeWindow', 840, document.getElementById('body').clientHeight + 60);
    } else {
        alert('error #2');
    }
}

$(document).ready( function(){
    //Вызываем функцию регулировки высоты каждые пол секунды.
    setInterval('autosize(607)', 500); 
  
  $('#set-permission').on('click', function(e) {
    e.preventDefault();
    
    // запрос прав доступа для дальнейшего обновления данных посредством крона
    // после запрса создается ключ, который можно посмотреть на странице управления сообществом
    // его и нунжно будет применить для обновления данных в виджете через сервер
    // дока прав тут https://vk.com/dev/permissions
    // дока метода тут https://vk.com/dev/clientapi?f=3.+showGroupSettingsBox
    VK.callMethod("showGroupSettingsBox", 64);
  });
  
  $('#set-widget').on('click', function(e) {
    e.preventDefault();
    
    // запрос установки виджета
    // типы виджетов можно глянуть тут https://vk.com/dev/objects/appWidget
    // как подключить виджет можно глянуть тут https://vk.com/dev/apps_widgets
    VK.callMethod('showAppWidgetPreviewBox', 'text', 'return {' + 
      '"title": "Цитата",' + 
      '"text": "Текст цитаты"' + 
    '};');
    
    // типы событий, генерируемых после выполнения запроса на установку виджета можно глянуть тут https://vk.com/dev/apps_widgets
    // работа с событиями вк https://vk.com/dev/Javascript_SDK?f=4.1.+VK.addCallback
    VK.addCallback('onAppWidgetPreviewSuccess', function f(data){ 
      alert("Виджет успешно добавлен"); 
    });
  });	
});