//For one phone:
var PhonePrice = 119.95;

console.log(PhonePrice)
console.log(typeof(PhonePrice))//Dali ima potreba type-of sekogash da stavame ili ne bash vo situacijava?

var TaxRateCoeficient = 0.05;
console.log(TaxRateCoeficient)
console.log(typeof(TaxRateCoeficient))

var Tax = PhonePrice * TaxRateCoeficient;
console.log(Tax)
console.log(typeof(Tax))

//Prv nachin za krajna cena na eden tel+taxes

var FinalPricePerPhone = PhonePrice + Tax
console.log(FinalPricePerPhone)
console.log(typeof(FinalPricePerPhone))

//Vtor nachin za krajna cena na eden tel+taxes, za dali e tochno, zashto malku me zbuni na chas ova. :)

PhonePrice*=Tax
console.log(FinalPricePerPhone)
console.log(typeof(FinalPricePerPhone))

// For 30 phones:

var ThirtyPhones = 30;
console.log(ThirtyPhones)
console.log(typeof(ThirtyPhones))

var PriceFor30Phones = FinalPricePerPhone*ThirtyPhones
console.log(PriceFor30Phones)
console.log(typeof(PriceFor30Phones))





