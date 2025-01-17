import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from '../util/constants';
// import * as moment from 'moment';

@Pipe({
  name: 'DateFormatPipe',
})
export class DateTimeFormatPipe extends DatePipe implements PipeTransform {

  // override transform(value: any, args?: any): any {
  //   // const dateMoment: moment.Moment = moment(value, 'DD/MM/YYYY hh:mm:ss');
  //   // const dateJS: Date = dateMoment.toDate()

  //   return super.transform(value, Constants.DATE_TIME_FMT);
  // }

  override transform(value: any): any{
    let month = value.substring(0,2)
    let day = value.substring(3,5)
    let year = value.substring(6,10)
    let hour = value.substring(11,13)
    let minutes = value.substring(14,16)

    value = day + '/' + month + '/' + year + ' ' + hour + ':' + minutes;

    return super.transform(value, Constants.DATE_TIME_FMT);




  }

}
