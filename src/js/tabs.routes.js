function TabRouting(routeTo, routeFrom, resolve, reject) {
   // console.warn('+++----- TabRouting -----+++')
   const {
      url,                          //ссылка на страницу
      context: {
         title,
         icon = 'f7:gear_fill',
         tabID,                     //идентификатор вкладки
         component                  //какой компонент открывать в случае успеха
      },
   } = routeTo;
   let TabID = tabID || url;
   let Title = (title)
      ? (typeof title === 'string')
         ? title
         : (typeof title === 'function')
            ? title(routeTo)
            : url.toUpperCase().slice(1)
      : url.toUpperCase().slice(1);
   const Tab = window.App.Tab;

   const Component_show = () => {
      resolve({
         component: component
      });
   };
   Tab().existsByID(TabID)                         //Вкладка существует?
      .then(() => {                                   //Да, существует
         Tab().isActive(TabID)                           //Проверка вкладки на активность?
            .then(($Index) => {                             //Активна
               Component_show();
            })
            .catch(() => {                                  //Не активна
               Tab().setActiveByID(TabID)                      //Активизируем вкладку
                  .then(() => {                                   //Удачно
                     Component_show();                               //и показываем содержимое вкладки
                  })
                  .catch(() => {                                  //Не удачно
                     reject();                                       //ничего не делаем
                  });
            });
      })
      .catch(() => {                                  //Нет, вкладка не существует :(
         let tabData = {
            id: TabID,
            title: Title,
            icon,
            url,
            place: 'last'  //todo not implemented yet
         };
         Tab().add(tabData)                              //Добавляем вкладку
            .then(($Result) => {                                   //Удачно добавили
               // console.warn('Tab_add SUCCESS:', $Result)
            })
            .catch(($Error) => {                                  //Не удачное добавление
               // console.error('Tab_add ERROR:', $Error)
               reject();
            });
      })
      .finally(() => {                       //Результирующие логи
         // console.warn('routeFrom:', routeFrom);
         // console.warn('routeTo:', routeTo);
      });
}

export default TabRouting;
