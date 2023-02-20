import SimpleSchema from "simpl-schema";

const DiscountDescriptionByLanguage = new SimpleSchema({
  content: String,
  language: String
});

const ProductFilter = new SimpleSchema({
  attribute: String,
  operator: String,
  value: String
});


export const CartDiscount = new SimpleSchema({
  "_id": {
    type: String
  },
  "active": {
    type: Boolean,
    defaultValue: false
  },
  "name": {
    type: String
  },
  "description": {
    type: String
  },
  "cartDescription": {
    type: Array
  },
  "cartDescription.$": {
    type: DiscountDescriptionByLanguage
  },
  "discountCalculationType": {
    type: String,
    allowedValues: ["fixed", "percentage"]
  },
  "discountApplicationType": {
    type: String,
    allowedValues: ["item", "shipping", "cart"]
  },
  "discountValue": {
    type: Number
  },
  "reportAsTaxable": { // if the discounted amount should be reported as the taxable amount. false means the original amount is reported
    type: Boolean,
    defaultValue: true
  },
  "productFilters": {
    type: Array,
    optional: true
  },
  "productFilters.$": {
    type: ProductFilter
  }
});


export const Discount = new SimpleSchema({
  _id: {
    type: String
  },
  active: {
    type: Boolean,
    defaultValue: false
  },
  name: {
    type: String
  },
  description: {
    type: String
  },
  cartDescription: {
    type: String
  },
  discountCalculationType: {
    type: String,
    allowedValues: ["fixed", "percentage"]
  },
  discountValue: {
    type: Number
  },
  reportAsTaxable: { // if the discounted amount should be reported as the taxable amount. false means the original amount is reported
    type: Boolean,
    defaultValue: true
  },
  dateApplied: Date,
  dateExpires: {
    type: Date,
    optional: true
  }
});
