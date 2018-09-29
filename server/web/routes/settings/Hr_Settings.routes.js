module.exports = function(app){

   var Controller = require('../../controller/settings/Hr_Settings.controller.js');

   // Department
      app.post('/API/Hr_Settings/Department_AsyncValidate', Controller.Department_AsyncValidate);
      app.post('/API/Hr_Settings/Department_Create', Controller.Department_Create);
      app.post('/API/Hr_Settings/Department_List', Controller.Department_List);
      app.post('/API/Hr_Settings/Department_SimpleList', Controller.Department_SimpleList);
      app.post('/API/Hr_Settings/Department_Update', Controller.Department_Update);
      app.post('/API/Hr_Settings/Department_Delete', Controller.Department_Delete);

   // Earnings
      app.post('/API/Hr_Settings/Earnings_AsyncValidate', Controller.Earnings_AsyncValidate);
      app.post('/API/Hr_Settings/Earnings_Create', Controller.Earnings_Create);
      app.post('/API/Hr_Settings/Earnings_List', Controller.Earnings_List);
      app.post('/API/Hr_Settings/Earnings_SimpleList', Controller.Earnings_SimpleList);
      app.post('/API/Hr_Settings/Earnings_Update', Controller.Earnings_Update);
      app.post('/API/Hr_Settings/Earnings_Delete', Controller.Earnings_Delete);

   // Detections
      app.post('/API/Hr_Settings/Detections_AsyncValidate', Controller.Detections_AsyncValidate);
      app.post('/API/Hr_Settings/Detections_Create', Controller.Detections_Create);
      app.post('/API/Hr_Settings/Detections_List', Controller.Detections_List);
      app.post('/API/Hr_Settings/Detections_SimpleList', Controller.Detections_SimpleList);
      app.post('/API/Hr_Settings/Detections_Update', Controller.Detections_Update);
      app.post('/API/Hr_Settings/Detections_Delete', Controller.Detections_Delete);
};
