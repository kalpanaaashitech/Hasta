// Default Modules
   import { NgModule } from '@angular/core';
   import { CommonModule} from '@angular/common';
   import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
   import { BrowserModule } from '@angular/platform-browser';
   import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
   import { FormsModule, ReactiveFormsModule } from '@angular/forms';
   import { HttpModule } from '@angular/http';
   import { HttpClientModule } from '@angular/common/http';
   import { RouterModule, Routes } from '@angular/router';

// Default Components
   import { AppComponent } from './app.component';

// Future Modules
import { ModalModule, AccordionModule, BsDropdownModule} from 'ngx-bootstrap';
import { CalendarModule} from 'primeng/calendar';
import { MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatSelectModule, MatCheckboxModule, MatMenuModule} from '@angular/material';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { NgxChartsModule } from '@swimlane/ngx-charts';

// Custom Modules
   import { AppRoutingModule } from './app.routing.module';
   import { AuthGuard } from './Authentication/auth.guard';

// Custom Components
   // Header Component
   import { HeaderComponent } from './Components/Common-Components/header/header.component';
   // delete-confirmation
   import { DeleteConfirmationComponent } from './Components/Common-Components/delete-confirmation/delete-confirmation.component';
   // Component Folder
      // DashBoard Component Folder
         import { DashboardComponent } from './Components/dashboard/dashboard.component';
      // Settings Folder
         // CRM Settings Folder
            import { MainCrmSettingsComponent } from './Components/Settings/CRM-Settings/main-crm-settings/main-crm-settings.component';
            // Sub Components Folder
               import { IndustryTypeCrmSettingsComponent } from './Components/Settings/CRM-Settings/Sub-Components/industry-type-crm-settings/industry-type-crm-settings.component';
               import { OwnerShipTypeCrmSettingsComponent } from './Components/Settings/CRM-Settings/Sub-Components/owner-ship-type-crm-settings/owner-ship-type-crm-settings.component';
               import { ActivityTypeCrmSettingsComponent } from './Components/Settings/CRM-Settings/Sub-Components/activity-type-crm-settings/activity-type-crm-settings.component';
               import { ActivityStatusTypeCrmSettingsComponent } from './Components/Settings/CRM-Settings/Sub-Components/activity-status-type-crm-settings/activity-status-type-crm-settings.component';
               import { ActivityPriorityTypeCrmSettingsComponent } from './Components/Settings/CRM-Settings/Sub-Components/activity-priority-type-crm-settings/activity-priority-type-crm-settings.component';
               import { ContactRoleTypeCrmSettingsComponent } from './Components/Settings/CRM-Settings/Sub-Components/contact-role-type-crm-settings/contact-role-type-crm-settings.component';
         // Hrms Settings Folder
            import { MainHrmsSettingsComponent } from './Components/Settings/HRMS-Settings/main-hrms-settings/main-hrms-settings.component';
            // Sub Components
               import { LeaveTypeHrmsSettingsComponent } from './Components/Settings/HRMS-Settings/SubComponents/leave-type-hrms-settings/leave-type-hrms-settings.component';
               import { ExpensesTypeHrmsSettingsComponent } from './Components/Settings/HRMS-Settings/SubComponents/expenses-type-hrms-settings/expenses-type-hrms-settings.component';
         // Hr Settings Folder
               import { MainHrSettingsComponent } from './Components/Settings/HR-Settings/main-hr-settings/main-hr-settings.component';
            // Sub Components
               import { EmployeeCategoryHrSettingsComponent } from './Components/Settings/HR-Settings/SubComponents/employee-category-hr-settings/employee-category-hr-settings.component';
               import { DepartmentHrSettingsComponent } from './Components/Settings/HR-Settings/SubComponents/department-hr-settings/department-hr-settings.component';
               import { DesignationHrSettingsComponent } from './Components/Settings/HR-Settings/SubComponents/designation-hr-settings/designation-hr-settings.component';
         // User Management And Permissions
            import { UserManagementListComponent } from './Components/Settings/UserManagement/user-management-list/user-management-list.component';
            import { ModelUserCreateUserManagementComponent } from './models/settings/user_management/model-user-create-user-management/model-user-create-user-management.component';
      // CRM Folder
         // Customers
            // crm-customers-list
               import { CrmCustomersListComponent } from './Components/CRM/Customers/crm-customers-list/crm-customers-list.component';
            // crm-customers-view
               // main crm customers view
                  import { MainCrmCustomersViewComponent } from './Components/CRM/Customers/Crm-Customers-View/main-crm-customers-view/main-crm-customers-view.component';
               // SubComponents
                  import { AboutCrmCustomersViewComponent } from './Components/CRM/Customers/Crm-Customers-View/SubComponents/about-crm-customers-view/about-crm-customers-view.component';
                  import { ContactCrmCustomersViewComponent } from './Components/CRM/Customers/Crm-Customers-View/SubComponents/contact-crm-customers-view/contact-crm-customers-view.component';
                  import { ActivityCrmCustomersViewComponent } from './Components/CRM/Customers/Crm-Customers-View/SubComponents/activity-crm-customers-view/activity-crm-customers-view.component';
                  import { InvoiceCrmCustomersViewComponent } from './Components/CRM/Customers/Crm-Customers-View/SubComponents/invoice-crm-customers-view/invoice-crm-customers-view.component';
            // crm-customer-create
                  import { CrmCustomersCreateComponent } from './Components/CRM/Customers/crm-customers-create/crm-customers-create.component';
         // Invoice
            // crm-invoice-create
               import { CrmInvoiceCreateComponent } from './Components/CRM/Invoice/crm-invoice-create/crm-invoice-create.component';
            // crm-invoice-List
               import { CrmInvoiceListComponent } from './Components/CRM/Invoice/crm-invoice-list/crm-invoice-list.component';
            // crm-invoice-View
               import { CrmInvoiceViewComponent } from './Components/CRM/Invoice/crm-invoice-view/crm-invoice-view.component';
         // Machines
               import { CrmMachinesListComponent } from './Components/CRM/Machines/crm-machines-list/crm-machines-list.component';
               import { CrmMachinesCreateComponent } from './Components/CRM/Machines/crm-machines-create/crm-machines-create.component';
               import { CrmMachinesViewComponent } from './Components/CRM/Machines/crm-machines-view/crm-machines-view.component';
               import { MachinesCrmCustomersViewComponent } from './Components/CRM/Customers/Crm-Customers-View/SubComponents/machines-crm-customers-view/machines-crm-customers-view.component';
         // Tickets
               import { CrmTicketsCreateComponent } from './Components/CRM/Tickets/crm-tickets-create/crm-tickets-create.component';
               import { CrmTicketsListComponent } from './Components/CRM/Tickets/crm-tickets-list/crm-tickets-list.component';
               import { CrmTicketsViewComponent } from './Components/CRM/Tickets/crm-tickets-view/crm-tickets-view.component';
               import { TicketsCrmCustomersViewComponent } from './Components/CRM/Customers/Crm-Customers-View/SubComponents/tickets-crm-customers-view/tickets-crm-customers-view.component';
      // HRMS folder
         // main hrms
            import { MainHrmsComponentsComponent } from './Components/HRMS/main-hrms-components/main-hrms-components.component';
         // SubComponents
            import { DashboardHrmsComponent } from './Components/HRMS/SubComponents/dashboard-hrms/dashboard-hrms.component';
            import { LeavesHrmsComponent } from './Components/HRMS/SubComponents/leaves-hrms/leaves-hrms.component';
            import { OndutyHrmsComponent } from './Components/HRMS/SubComponents/onduty-hrms/onduty-hrms.component';
            import { PermissionsHrmsComponent } from './Components/HRMS/SubComponents/permissions-hrms/permissions-hrms.component';
            import { AdvanceHrmsComponent } from './Components/HRMS/SubComponents/advance-hrms/advance-hrms.component';
      // Accounts Folder
         // Customer
            import { AccountsCustomerListComponent } from './Components/Accounts/Customer/accounts-customer-list/accounts-customer-list.component';
            import { AccountsCustomerInvoiceListComponent } from './Components/Accounts/customer-invoice/accounts-customer-invoice-list/accounts-customer-invoice-list.component';
            import { AccountsCustomerPaymentsListComponent } from './Components/Accounts/customer-payments/accounts-customer-payments-list/accounts-customer-payments-list.component';
            import { AccountsCustomerInvoiceViewComponent } from './Components/Accounts/customer-invoice/accounts-customer-invoice-view/accounts-customer-invoice-view.component';
            import { AccountsCustomerPaymentsViewComponent } from './Components/Accounts/customer-payments/accounts-customer-payments-view/accounts-customer-payments-view.component';
            import { CustomerPaymentsCreateComponent } from './Components/Accounts/customer-payments/customer-payments-create/customer-payments-create.component';
   // models
      // settings
         // company settings
            import { ModelCompanyinfoCompanysettingsComponent } from './models/settings/company_settings/model-companyinfo-companysettings/model-companyinfo-companysettings.component';
            import { ModelContactinfoCompanysettingsComponent } from './models/settings/company_settings/model-contactinfo-companysettings/model-contactinfo-companysettings.component';
            import { ModelDepartmentsCompanysettingsComponent } from './models/settings/company_settings/model-departments-companysettings/model-departments-companysettings.component';
            import { ModelBranchCompanysettingsComponent } from './models/settings/company_settings/model-branch-companysettings/model-branch-companysettings.component';
            import { ModelRegistrationinfoCompanysettingsComponent } from './models/settings/company_settings/model-registrationinfo-companysettings/model-registrationinfo-companysettings.component';
            import { ModelPfinfoCompanysettingsComponent } from './models/settings/company_settings/model-pfinfo-companysettings/model-pfinfo-companysettings.component';
            import { ModelEsiinfoCompanysettingsComponent } from './models/settings/company_settings/model-esiinfo-companysettings/model-esiinfo-companysettings.component';
            import { ModelPtinfoCompanysettingsComponent } from './models/settings/company_settings/model-ptinfo-companysettings/model-ptinfo-companysettings.component';
            import { ModelItinfoCompanysettingsComponent } from './models/settings/company_settings/model-itinfo-companysettings/model-itinfo-companysettings.component';
            import { ModelRegistrationtypeCompanysettingsComponent } from './models/settings/company_settings/model-registrationtype-companysettings/model-registrationtype-companysettings.component';
        // CRM Settings
            import { ModelIndustrytypeCrmsettingsComponent } from './models/settings/crm_settings/model-industrytype-crmsettings/model-industrytype-crmsettings.component';
            import { ModelOwnershipytypeCrmsettingsComponent } from './models/settings/crm_settings/model-ownershipytype-crmsettings/model-ownershipytype-crmsettings.component';
            import { ModelActivitytypeCrmsettingsComponent } from './models/settings/crm_settings/model-activitytype-crmsettings/model-activitytype-crmsettings.component';
            import { ModelActivitystatusCrmsettingsComponent } from './models/settings/crm_settings/model-activitystatus-crmsettings/model-activitystatus-crmsettings.component';
            import { ModelActivitypriorityCrmsettingsComponent } from './models/settings/crm_settings/model-activitypriority-crmsettings/model-activitypriority-crmsettings.component';
            import { ModelContactroleCrmsettingsComponent } from './models/settings/crm_settings/model-contactrole-crmsettings/model-contactrole-crmsettings.component';
         // HRMS settings
            import { ModelLeavetypeHrmssettingsComponent } from './models/settings/hrms_settings/model-leavetype-hrmssettings/model-leavetype-hrmssettings.component';
            import { ModelExpensestypeHrmssettingsComponent } from './models/settings/hrms_settings/model-expensestype-hrmssettings/model-expensestype-hrmssettings.component';
         // HR settings
            import { ModelEmployeecategoryHrsettingsComponent } from './models/settings/hr_settings/model-employeecategory-hrsettings/model-employeecategory-hrsettings.component';
            import { ModelDepartmentHrsettingsComponent } from './models/settings/hr_settings/model-department-hrsettings/model-department-hrsettings.component';
            import { ModelDesignationHrsettingsComponent } from './models/settings/hr_settings/model-designation-hrsettings/model-designation-hrsettings.component';
         // Account Settings
            import { ModelTaxesAccountsettingsComponent } from './models/settings/account_settings/model-taxes-accountsettings/model-taxes-accountsettings.component';
            import { ModelBankAccountsettingsComponent } from './models/settings/account_settings/model-bank-accountsettings/model-bank-accountsettings.component';
            import { ModelIncometypeAccountsettingsComponent } from './models/settings/account_settings/model-incometype-accountsettings/model-incometype-accountsettings.component';
            import { ModelAssettypeAccountsettingsComponent } from './models/settings/account_settings/model-assettype-accountsettings/model-assettype-accountsettings.component';
            import { ModelPaymenttermsAccountsettingsComponent } from './models/settings/account_settings/model-paymentterms-accountsettings/model-paymentterms-accountsettings.component';
      // HRMS
            import { ModelLeavesHrmsComponent } from './models/HRMS/model-leaves-hrms/model-leaves-hrms.component';
            import { ModelOndutyHrmsComponent } from './models/HRMS/model-onduty-hrms/model-onduty-hrms.component';
            import { ModelPermissionsHrmsComponent } from './models/HRMS/model-permissions-hrms/model-permissions-hrms.component';
            import { ModelAdvanceHrmsComponent } from './models/HRMS/model-advance-hrms/model-advance-hrms.component';
import { TicketTypeCrmSettingsComponent } from './Components/Settings/CRM-Settings/Sub-Components/ticket-type-crm-settings/ticket-type-crm-settings.component';
import { ModelTickettypeCrmsettingsComponent } from './models/settings/crm_settings/model-tickettype-crmsettings/model-tickettype-crmsettings.component';
import { EarningsHrSettingsComponent } from './Components/Settings/HR-Settings/SubComponents/earnings-hr-settings/earnings-hr-settings.component';
import { DetectionsHrSettingsComponent } from './Components/Settings/HR-Settings/SubComponents/detections-hr-settings/detections-hr-settings.component';
import { ModelEarningsHrsettingsComponent } from './models/settings/hr_settings/model-earnings-hrsettings/model-earnings-hrsettings.component';
import { ModelDetectionsHrsettingsComponent } from './models/settings/hr_settings/model-detections-hrsettings/model-detections-hrsettings.component';
import { ModelContactCrmCustomersViewComponent } from './models/CRM/Customers/model-contact-crm-customers-view/model-contact-crm-customers-view.component';
import { ModelAttendanceLogCreateComponent } from './models/HR/model-attendance-log-create/model-attendance-log-create.component';
import { ModelAttendanceReportCreateComponent } from './models/HR/model-attendance-report-create/model-attendance-report-create.component';
import { MainPayrollHrComponent } from './Components/HR/SubComponents/Payroll/main-payroll-hr/main-payroll-hr.component';
import { PayrollViewComponent } from './Components/HR/SubComponents/Payroll/payroll-view/payroll-view.component';
import { MainPayrollMasterHrComponent } from './Components/HR/SubComponents/Payroll-Master/main-payroll-master-hr/main-payroll-master-hr.component';
import { PayrollMasterCreateComponent } from './Components/HR/SubComponents/Payroll-Master/payroll-master-create/payroll-master-create.component';
import { ModelPayrollMasterViewComponent } from './models/HR/model-payroll-master-view/model-payroll-master-view.component';
import { ModelTicketsActivityCreateComponent } from './models/CRM/Tickets/model-tickets-activity-create/model-tickets-activity-create.component';
import { ModelTicketsCreateComponent } from './models/CRM/Machines/model-tickets-create/model-tickets-create.component';
import { ModelActivitiesCrmCustomersComponent } from './models/CRM/Customers/model-activities-crm-customers/model-activities-crm-customers.component';
import { ModelMachinesCrmCustomersComponent } from './models/CRM/Customers/model-machines-crm-customers/model-machines-crm-customers.component';
import { ModelTicketsCrmCustomersComponent } from './models/CRM/Customers/model-tickets-crm-customers/model-tickets-crm-customers.component';
import { ModelInvoicesCrmCustomersComponent } from './models/CRM/Customers/model-invoices-crm-customers/model-invoices-crm-customers.component';
import { LoginComponent } from './Components/Common-Components/login/login.component';
import { MachineTypeCrmSettingsComponent } from './Components/Settings/CRM-Settings/Sub-Components/machine-type-crm-settings/machine-type-crm-settings.component';
import { ControllerTypeCrmSettingsComponent } from './Components/Settings/CRM-Settings/Sub-Components/controller-type-crm-settings/controller-type-crm-settings.component';
import { ModelControllertypeCrmsettingsComponent } from './models/settings/crm_settings/model-controllertype-crmsettings/model-controllertype-crmsettings.component';
import { ModelMachinetypeCrmsettingsComponent } from './models/settings/crm_settings/model-machinetype-crmsettings/model-machinetype-crmsettings.component';
import { ModelMachinesStatusCrmCustomersComponent } from './models/CRM/Customers/model-machines-status-crm-customers/model-machines-status-crm-customers.component';
import { MachineStatusCrmCustomersViewComponent } from './Components/CRM/Customers/Crm-Customers-View/SubComponents/machine-status-crm-customers-view/machine-status-crm-customers-view.component';
import { CreateEmployeesComponent } from './Components/HR/Employees/create-employees/create-employees.component';
import { ListEmployeesComponent } from './Components/HR/Employees/list-employees/list-employees.component';
import { ViewEmployeesComponent } from './Components/HR/Employees/view-employees/view-employees.component';
import { MainAttendanceComponent } from './Components/HR/Attendance/main-attendance/main-attendance.component';
import { AttendanceLogHrComponent } from './Components/HR/Attendance/SubComponents/attendance-log-hr/attendance-log-hr.component';
import { AttendanceReportListComponent } from './Components/HR/Attendance/SubComponents/attendance-report-list/attendance-report-list.component';
import { AttendanceReportViewComponent } from './Components/HR/Attendance/SubComponents/attendance-report-view/attendance-report-view.component';
import { MachineMaintenancePartsComponent } from './Components/Settings/CRM-Settings/Sub-Components/machine-maintenance-parts/machine-maintenance-parts.component';
import { MachineScheduleActivityComponent } from './Components/Settings/CRM-Settings/Sub-Components/machine-schedule-activity/machine-schedule-activity.component';
import { ModelMachineScheduleActivityCrmsettingsComponent } from './models/settings/crm_settings/model-machine-schedule-activity-crmsettings/model-machine-schedule-activity-crmsettings.component';
import { ModelMachineMaintenancePartCrmsettingsComponent } from './models/settings/crm_settings/model-machine-maintenance-part-crmsettings/model-machine-maintenance-part-crmsettings.component';
import { ModelScheduleActivityCreateComponent } from './models/CRM/Machines/model-schedule-activity-create/model-schedule-activity-create.component';


@NgModule({
   declarations: [
      // Default Components
         AppComponent,
      // Custom Components
         // Component Folder
            // Common-Components Folder
              HeaderComponent,
            // Settings Folder
               // CRM Settings Folder
                  MainCrmSettingsComponent,
                  // Sub Components Folder
                     IndustryTypeCrmSettingsComponent,
                     OwnerShipTypeCrmSettingsComponent,
                     ActivityTypeCrmSettingsComponent,
                     ActivityStatusTypeCrmSettingsComponent,
                     ActivityPriorityTypeCrmSettingsComponent,
                     ContactRoleTypeCrmSettingsComponent,
                // Hrms Settings Folder
                 MainHrmsSettingsComponent,
                 // Sub Components
                    LeaveTypeHrmsSettingsComponent,
                    ExpensesTypeHrmsSettingsComponent,
                // Hr Settings Folder
                 MainHrSettingsComponent,
                 // Sub Components
                    EmployeeCategoryHrSettingsComponent,
                    DepartmentHrSettingsComponent,
                    DesignationHrSettingsComponent,
   // models
    // settings
        // company settings
            ModelCompanyinfoCompanysettingsComponent,
            ModelContactinfoCompanysettingsComponent,
            ModelDepartmentsCompanysettingsComponent,
            ModelBranchCompanysettingsComponent,
            ModelRegistrationinfoCompanysettingsComponent,
            ModelPfinfoCompanysettingsComponent,
            ModelEsiinfoCompanysettingsComponent,
            ModelPtinfoCompanysettingsComponent,
            ModelItinfoCompanysettingsComponent,
            ModelRegistrationtypeCompanysettingsComponent,
        // CRM Settings
            ModelIndustrytypeCrmsettingsComponent,
            ModelOwnershipytypeCrmsettingsComponent,
            ModelActivitytypeCrmsettingsComponent,
            ModelActivitystatusCrmsettingsComponent,
            ModelActivitypriorityCrmsettingsComponent,
            ModelContactroleCrmsettingsComponent,
        // HRMS settings
            ModelLeavetypeHrmssettingsComponent,
            ModelExpensestypeHrmssettingsComponent,
        // HR settings
            ModelEmployeecategoryHrsettingsComponent,
            ModelDepartmentHrsettingsComponent,
            ModelDesignationHrsettingsComponent,
       // Account Settings
            ModelTaxesAccountsettingsComponent,
            ModelBankAccountsettingsComponent,
            ModelIncometypeAccountsettingsComponent,
            ModelAssettypeAccountsettingsComponent,
            ModelPaymenttermsAccountsettingsComponent,
      // User Management and User Permissions
      UserManagementListComponent,
      ModelUserCreateUserManagementComponent,
   // Components
    // Common-Components
        // delete-confirmation
                 DeleteConfirmationComponent,
    // CRM Folder
        // Customers
            // crm-customers-list
                CrmCustomersListComponent,
                 // main crm customers view
                    MainCrmCustomersViewComponent,
                    // SubComponents
                    AboutCrmCustomersViewComponent,
                    ContactCrmCustomersViewComponent,
                    ActivityCrmCustomersViewComponent,
                     InvoiceCrmCustomersViewComponent,
                    CrmCustomersCreateComponent,
        // Invoice
        CrmInvoiceCreateComponent,
        CrmInvoiceListComponent,
        CrmInvoiceViewComponent,

    // models
    // HRMS Folder
        // main hrms
            MainHrmsComponentsComponent,
              // SubComponents
                DashboardHrmsComponent,
                LeavesHrmsComponent,
                OndutyHrmsComponent,
                PermissionsHrmsComponent,
                AdvanceHrmsComponent,
    // models
        // HRMS
                ModelLeavesHrmsComponent,
                ModelOndutyHrmsComponent,
                ModelPermissionsHrmsComponent,
                ModelAdvanceHrmsComponent,



   // Accounts Folder
        // Customer
            AccountsCustomerListComponent,
            AccountsCustomerInvoiceListComponent,
            AccountsCustomerPaymentsListComponent,
            AccountsCustomerInvoiceViewComponent,
            AccountsCustomerPaymentsViewComponent,
            CustomerPaymentsCreateComponent,

            DashboardComponent,
            CrmMachinesListComponent,
            CrmMachinesCreateComponent,
            CrmMachinesViewComponent,
            MachinesCrmCustomersViewComponent,
            TicketsCrmCustomersViewComponent,
            CrmTicketsCreateComponent,
            CrmTicketsListComponent,
            CrmTicketsViewComponent,
            TicketTypeCrmSettingsComponent,
            ModelTickettypeCrmsettingsComponent,
            EarningsHrSettingsComponent,
            DetectionsHrSettingsComponent,
            ModelEarningsHrsettingsComponent,
            ModelDetectionsHrsettingsComponent,
            ModelContactCrmCustomersViewComponent,
            ModelAttendanceLogCreateComponent,
            ModelAttendanceReportCreateComponent,
            MainPayrollHrComponent,
            PayrollViewComponent,
            MainPayrollMasterHrComponent,
            PayrollMasterCreateComponent,
            ModelPayrollMasterViewComponent,
            ModelTicketsActivityCreateComponent,
            ModelTicketsCreateComponent,
            ModelActivitiesCrmCustomersComponent,
            ModelMachinesCrmCustomersComponent,
            ModelTicketsCrmCustomersComponent,
            ModelInvoicesCrmCustomersComponent,
            LoginComponent,
            MachineTypeCrmSettingsComponent,
            ControllerTypeCrmSettingsComponent,
            ModelControllertypeCrmsettingsComponent,
            ModelMachinetypeCrmsettingsComponent,
            ModelMachinesStatusCrmCustomersComponent,
            MachineStatusCrmCustomersViewComponent,
            CreateEmployeesComponent,
            ListEmployeesComponent,
            ViewEmployeesComponent,
            MainAttendanceComponent,
           AttendanceLogHrComponent,
           AttendanceReportListComponent,
           AttendanceReportViewComponent,
           MachineMaintenancePartsComponent,
           MachineScheduleActivityComponent,
           ModelMachineScheduleActivityCrmsettingsComponent,
           ModelMachineMaintenancePartCrmsettingsComponent,
           ModelScheduleActivityCreateComponent












   ],
   imports: [
      // Default Modules
         BrowserModule,
         BrowserAnimationsModule,
         RouterModule,
         HttpModule,
         HttpClientModule,
         FormsModule,
         ReactiveFormsModule,
        // future modules
         ModalModule.forRoot(),
         AccordionModule.forRoot(),
         BsDropdownModule.forRoot(),
         NgxMaterialTimepickerModule.forRoot(),
         MatCheckboxModule,
         MatMenuModule,
         NgSelectModule,
         CalendarModule,
         MatButtonModule,
         MatFormFieldModule,
         MatSelectModule,
         MatDatepickerModule,
         MatNativeDateModule,
         NgxChartsModule,
      // Custom Modules
          AppRoutingModule,
   ],
   providers: [AuthGuard],
   entryComponents: [ModelCompanyinfoCompanysettingsComponent,
    ModelContactinfoCompanysettingsComponent,
    ModelDepartmentsCompanysettingsComponent,
    ModelBranchCompanysettingsComponent,
    ModelRegistrationinfoCompanysettingsComponent,
    ModelPfinfoCompanysettingsComponent,
    ModelEsiinfoCompanysettingsComponent,
    ModelPtinfoCompanysettingsComponent,
    ModelItinfoCompanysettingsComponent,
    ModelRegistrationtypeCompanysettingsComponent,
    ModelIndustrytypeCrmsettingsComponent,
    ModelOwnershipytypeCrmsettingsComponent,
    ModelActivitytypeCrmsettingsComponent,
    ModelActivitystatusCrmsettingsComponent,
    ModelActivitypriorityCrmsettingsComponent,
    ModelContactroleCrmsettingsComponent,
    ModelControllertypeCrmsettingsComponent,
    ModelMachinetypeCrmsettingsComponent,
    ModelUserCreateUserManagementComponent,
    ModelLeavetypeHrmssettingsComponent,
    ModelExpensestypeHrmssettingsComponent,
    ModelEmployeecategoryHrsettingsComponent,
    ModelDepartmentHrsettingsComponent,
    ModelDesignationHrsettingsComponent,
   ModelTaxesAccountsettingsComponent,
    ModelBankAccountsettingsComponent,
    ModelIncometypeAccountsettingsComponent,
    ModelAssettypeAccountsettingsComponent,
    ModelPaymenttermsAccountsettingsComponent,
    DeleteConfirmationComponent,
    ModelLeavesHrmsComponent,
    ModelOndutyHrmsComponent,
    ModelPermissionsHrmsComponent,
    ModelAdvanceHrmsComponent,
    ModelTickettypeCrmsettingsComponent,
    ModelEarningsHrsettingsComponent,
    ModelDetectionsHrsettingsComponent,
    ModelAttendanceLogCreateComponent,
    ModelAttendanceReportCreateComponent,
    ModelPayrollMasterViewComponent,
    ModelTicketsActivityCreateComponent,
    ModelTicketsCreateComponent,
    ModelContactCrmCustomersViewComponent,
    ModelActivitiesCrmCustomersComponent,
    ModelMachinesCrmCustomersComponent,
    ModelMachinesStatusCrmCustomersComponent,
    ModelTicketsCrmCustomersComponent,
    ModelMachineScheduleActivityCrmsettingsComponent,
    ModelMachineMaintenancePartCrmsettingsComponent,
    ModelScheduleActivityCreateComponent
    ],
   bootstrap: [AppComponent]
})
export class AppModule { }

