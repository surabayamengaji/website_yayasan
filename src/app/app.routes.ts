import { Routes } from '@angular/router';
import { Programs } from './pages/programs/programs';
import { Finance } from './pages/reports/finance/finance';
import { Activities } from './pages/reports/activities/activities';
import { BankAccounts } from './pages/bank-accounts/bank-accounts';
import { Donations } from './pages/donations/donations';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: 'programs', loadComponent: () => Programs },
  { path: 'reports/finance', loadComponent: () => Finance },
  { path: 'reports/activities', loadComponent: () => Activities },
  { path: 'bank-accounts', loadComponent: () => BankAccounts },
  { path: 'donations', loadComponent: () => Donations },
  { path: 'contact', loadComponent: () => Contact },
];
