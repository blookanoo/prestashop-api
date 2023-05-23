/**
 * All prestashop's webservices endpoints.
 * See: https://devdocs.prestashop-project.org/8/webservice/resources/
 */
export enum Endpoint {
  addresses = 'addresses',
  attachments = 'attachments',
  carriers = 'carriers',
  cartRules = 'cart_rules',
  carts = 'carts',
  categories = 'categories',
  combinations = 'combinations',
  configurations = 'configurations',
  contacts = 'contacts',
  contentManagementSystem = 'content_management_system',
  countries = 'countries',
  currencies = 'currencies',
  customerMessages = 'customer_messages',
  customerThreads = 'customer_threads',
  customers = 'customers',
  customizations = 'customizations',
  deliveries = 'deliveries',
  employees = 'employees',
  groups = 'groups',
  guests = 'guests',
  imageTypes = 'image_types',
  images = 'images',
  languages = 'languages',
  manufacturers = 'manufacturers',
  messages = 'messages',
  orderCarriers = 'order_carriers',
  orderCartRules = 'order_cart_rules',
  orderDetails = 'order_details',
  orderHistories = 'order_histories',
  orderInvoices = 'order_invoices',
  orderPayments = 'order_payments',
  orderSlip = 'order_slip',
  orderStates = 'order_states',
  orders = 'orders',
  priceRanges = 'price_ranges',
  productCustomizationFields = 'product_customization_fields',
  productFeatureValues = 'product_feature_values',
  productFeatures = 'product_features',
  productOptionValues = 'product_option_values',
  productOptions = 'product_options',
  productSuppliers = 'product_suppliers',
  products = 'products',
  search = 'search',
  shopGroups = 'shop_groups',
  shopUrls = 'shop_urls',
  shops = 'shops',
  specificPriceRules = 'specific_price_rules',
  specificPrices = 'specific_prices',
  states = 'states',
  stockAvailables = 'stock_availables',
  stockMovementReasons = 'stock_movement_reasons',
  stockMovements = 'stock_movements',
  stockMvt = 'stock_mvt',
  stocks = 'stocks',
  stores = 'stores',
  suppliers = 'suppliers',
  supplyOrderDetails = 'supply_order_details',
  supplyOrderHistories = 'supply_order_histories',
  supplyOrderReceiptHistories = 'supply_order_receipt_histories',
  supplyOrderStates = 'supply_order_states',
  supplyOrders = 'supply_orders',
  tags = 'tags',
  taxRuleGroups = 'tax_rule_groups',
  taxRules = 'tax_rules',
  taxes = 'taxes',
  translatedConfigurations = 'translated_configurations',
  warehouseProductLocations = 'warehouse_product_locations',
  warehouses = 'warehouses',
  weightRanges = 'weight_ranges',
  zones = 'zones',
}
