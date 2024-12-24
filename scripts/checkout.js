import {renderOrderSummary} from './checkuot/orderSummary.js';
import { renderPaymentSummary } from './checkuot/paymentSummary.js';
//import '../data/backend-practice.js';
import { loadProducts } from '../data/products.js';

loadProducts(()=>{
  renderOrderSummary();
  renderPaymentSummary();
});

