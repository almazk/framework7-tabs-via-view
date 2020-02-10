const delayTime = 800;
let list = [
   {type: 'link', data: {url: '/catalog'}},
   {type: 'link', data: {url: '/product/1', view: '/catalog'}},
   {type: 'link', data: {url: '/catalog', view: '/product/1'}},        //back
   {type: 'link', data: {url: '/product/2', view: '/catalog'}},
   {type: 'link', data: {url: '/catalog', view: '/product/2'}},        //back
   {type: 'link', data: {url: '/product/3', view: '/catalog'}},
   {type: 'link', data: {url: '/catalog', view: '/product/3'}},        //back
   {type: 'link', data: {url: '/product/1', view: '/catalog'}},
   {type: 'link', data: {url: '/catalog', view: '/product/1'}},        //back
   {type: 'link', data: {url: '/product/2', view: '/catalog'}},
   {type: 'link', data: {url: '/catalog', view: '/product/2'}},        //should be error
   // {type: 'link', data: {url: '/product/3'}},
   // {type: 'link', data: {url: '/catalog'}},
   // {type: 'link', data: {url: '/product/1'}},
   // {type: 'link', data: {url: '/catalog'}},
];

function Init() {
   let app = window.App;
   let tasks = [];
   for (let {type, data = {}} of list) {
      let task;
      let test;
      switch (type) {
         case 'link':
            let {url, view = 'main'} = data;
            task = () => {
               // console.log('executing task..')
               // console.log('url', url)
               return new Promise(resolve => {
                  // return resolve(app.$f7.view['current'].router.navigate(url));
                  // return resolve(app.$f7.view.main.router.navigate(url));
                  return resolve(app.$f7.view[view].router.navigate(url));
               });
            };
            test = () => {
               return app.Tab().existsByID(url);
            };
            break;
         case 'tab.close':
            break;
      }
      tasks.push({task, test})
   }

   const ExecuteTasks = (tasks, $Number = 0) => {
      if (tasks && tasks.length > 0) {
         let {task, test} = tasks[0];
         tasks.splice(0, 1);
         const ExecuteNext = () => {
            let nextNumber = $Number + 1;
            ExecuteTasks(tasks, nextNumber);
         };
         setTimeout(() => {
            // console.warn('EXECUTING TASK')
            task()
               .then(() => {
                  // console.log('TASK #', $Number, 'is DONE')
                  if (test) {
                     setTimeout(() => {
                        test()
                           .then(() => {
                              ExecuteNext();
                           })
                           .catch(() => {
                              alert('SOME ERROR IN TESTINGS');
                           });
                     }, 100);
                  } else {
                     ExecuteNext();
                  }
               })
               .catch(() => {
                  // console.log('SOME ERROR')
               });
         }, delayTime);
      } else {
         // console.warn('all tasks DONE #', $Number)
      }
   };
   ExecuteTasks(tasks);
}

module.exports = {
   init: Init
};
