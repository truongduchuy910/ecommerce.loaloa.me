export default function(allUsers) {
  return {
    payload: {
      template_type: "receipt",
      recipient_name: allUser[0].name,
      order_number: "<ORDER_NUMBER>",
      currency: "<CURRENCY_CODE>",
      payment_method: "<PAYMENT_METHOD_USED>",
      order_url: "<LINK_TO_ORDER_SUMMARY>",
      timestamp: "<ORDER_TIME_AS_POSIX_TIMESTAMP>",
      address: {
        street_1: "<SHIPPING_STREET_ADDRESS>",
        city: "<SHIPPING_CITY>",
        postal_code: "<SHIPPING_POSTAL_CODE>",
        state: "<SHIPPING_STATE>",
        country: "<SHIPPING_COUNTRY>"
      },
      summary: {
        subtotal: "<SUBTOTAL_AMOUNT>",
        shipping_cost: "SHIPPING_AMOUNT",
        total_tax: "TAX_AMOUNT",
        total_cost: "TOTAL_AMOUNT"
      },
      adjustments: [
        {
          name: "<ADJUSTMENT_NAME>",
          amount: "ADJUSTMENT_AMOUNT"
        }
      ],
      elements: [
        {
          title: "<ITEM_NAME>",
          subtitle: "<ITEM_DESCRIPTION_OR_DETAILS>",
          quantity: "QUANTITY",
          price: "ITEM_PRICE",
          currency: "<CURRENCY_ABBREVIATION",
          image_url: "<URL_IMAGE_TO_DISPLAY_FOR_ITEM>"
        }
      ]
    }
  };
}
