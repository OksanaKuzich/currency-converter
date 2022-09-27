export async function currencyRequest() {
  try {
    const response = await fetch(
      'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
    );
    const currency = await response.json();
    return currency;
  } catch (error) {
    console.log(error.message);
  }
}
