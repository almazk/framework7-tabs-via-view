export default {
   name: 'tabs',
   data() {
      return {
         activeTab: {
            index: 0,
            id: 'home'
         },
         tabs: [{id: 'home', title: 'Home', icon: 'f7:house_fill', main: true, url: '/'}] //initial main tab
      }
   },
   computed: {
      IDs() {
         let ids = [];
         for (let Index in this.tabs) {
            ids.push(this.tabs[Index]['id']);
         }
         return ids;
      }
   },
   methods: {
      Tab() {
         let {index: currentIndex} = this.activeTab;
         let lastIndex = this.tabs.length - 1;
         const ID_get = ($Index) => {
            return this.tabs[$Index]['id'];
         };
         const Index_Active_set = ($Index) => {
            // console.log('url:', ID_get($Index))
            this.activeTab = {
               index: parseInt($Index),
               id: ID_get($Index)
            };
            return true;
         };
         return {
            existsByID: ($TabID) => {
               return new Promise((resolve, reject) => {
                  return this.IDs.includes($TabID) ? resolve() : reject();
               });
            },
            add: ({id, title, icon, url, place = 'last'}) => {
               // console.log('url', url)
               return new Promise((resolve, reject) => {
                  let currentCount = this.tabs.length;
                  let newIndex = lastIndex;
                  let tmpTabs = this.tabs;
                  let tabInfo = {id, title, icon, url};
                  switch (place) {
                     //todo
                     case 'prev':                                       //добавляем новую вкладку перед текущием
                        newIndex = currentIndex;
                        tmpTabs.splice(newIndex, 0, tabInfo);
                        lastIndex++;
                        break;
                     //todo
                     case 'next':
                        newIndex = currentIndex + 1;                    //добавляем новую вкладку следующим за текущим
                        tmpTabs.splice(newIndex, 0, tabInfo);
                        // Index_Active_set(newIndex);
                        lastIndex++;
                        break;
                     case 'last':
                     default:                                           //добавляем новую вкладку в самый конец
                        lastIndex = tmpTabs.push(tabInfo);
                        break;
                  }
                  this.$set(this, 'tabs', tmpTabs);
                  // let status = Index_Active_set(newIndex);
                  return (currentCount <= lastIndex)
                     ? resolve({newIndex, currentCount, lastIndex})
                     : reject({newIndex, currentCount, lastIndex});
               });
            },
            getIndexByID: ($TabID) => {
               for (let Index in this.tabs) {
                  if ($TabID === this.tabs[Index]['id']) {
                     return parseInt(Index);
                  }
               }
               return null;
            },
            setActiveByIndex: ($Index) => {
               return new Promise((resolve, reject) => {
                  return (Index_Active_set($Index)) ? resolve() : reject();
               });
            },
            setActiveByID: ($TabID) => {
               return new Promise((resolve, reject) => {
                  let index = this.Tab().getIndexByID($TabID);
                  return (Index_Active_set(index)) ? resolve() : reject();
               });
            },
            isActive: ($TabID) => {
               return new Promise((resolve, reject) => {
                  return (this.Tab().getIndexByID($TabID) === currentIndex)
                     ? resolve(currentIndex)
                     : reject();
               });
            },
            /**
             * Блок навигации
             * @return {boolean}
             */
            hasNavigation: () => {
               return !!lastIndex;
            },
            count: () => {
               return this.tabs.length;
            },
            //Предыдущяя вкладка от активной
            prev: () => {
               if (currentIndex === 0) {                       //Если первая вкладка
                  Index_Active_set(lastIndex);                 //переходим на последнюю вкладку
               } else if (currentIndex > 0) {
                  Index_Active_set(currentIndex - 1);
               }
            },
            //Следующая вкладка от активной
            next: () => {
               if (currentIndex === lastIndex) {               //Если последняя вкладка
                  Index_Active_set(0);                 //переходим на первую
               } else if (currentIndex < lastIndex) {
                  Index_Active_set(currentIndex + 1);
               }
            },
            //Закрытие текущий активной или с указанием индекса
            close: ($Index = currentIndex) => {
               if (currentIndex !== 0) {                      //Если не главная вкладка, не первая
                  this.Tab().prev();
                  this.tabs.splice($Index, 1);
               }
            },
            //не работает
            initView: ($View) => {
               let {name, ...rest} = $View;
               console.log('View_init:', name)
            }
         }
      }
   },
   created() {
      // this.tabs.push()
   }
}
