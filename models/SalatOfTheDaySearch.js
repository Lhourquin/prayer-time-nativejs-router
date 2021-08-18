export default class SalatOfTheDaySearch {

    constructor(){
       this.url = 'https://api.aladhan.com/v1/timingsByCity?country=France&method=2';
    }

    searchByCity (city){
        //console.log(city);
        return fetch(`${this.url}&city=${city}`)
              .then(Response => Response.json())
              .then(obj => obj.data)
              .then(dataArray => dataArray =  {
                date :  dataArray.date.gregorian.date
                ,
               salat : {
                   fajr : dataArray.timings.Fajr,
                   shourouk : dataArray.timings.Sunrise,
                   dhor : dataArray.timings.Dhuhr,
                   asr : dataArray.timings.Asr,
                   maghreb : dataArray.timings.Maghrib,
                   icha : dataArray.timings.Isha,
                   midnight : dataArray.timings.Midnight
               }
              }
                   
                   
                  
               

                 
              )
              /*.then(dataArray => dataArray.map( data => {
                return {
                  date : {
                    gregorian : data.date.gregorian.date,
                    hijri : data.date.hijri.date
                  },
                  salat : {
                    fajr : data.timings.Fajr,
                    shourouk : data.timings.Sunrise,
                    dhor : data.timings.Dhuhr,
                    asr : data.timings.Asr,
                    maghreb : data.timings.Maghrib,
                    icha : data.timings.Isha,
                    midnight : data.timings.Midnight
                  }
                
                }
              })
              )*/
             // .then(console.log(dataArray));
              
              //dataArray.map(data => console.log(data.date.gregorian.date))
    
    
            
        
        
            
      }

}