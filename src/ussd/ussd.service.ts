/* eslint-disable prettier/prettier */
// ussd.service.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class UssdService {
    async getResponse(text: string): Promise<string> {
        let response: string;

        switch (text) {
            case '1':
                response = 'Please select your preferred language \n';
                response += '1. English \n';
                response += '2. Yoruba \n';
                response += '0. End \n';
                break;
            case '1*1':
                response = " You've selected English as your preferred language. \n";
                response += 'Please Enter 1 to confirm \n';
                break;
            case '1*0':
                response = " Your session has ended.";
                break;
            case '1*1*1':
                response = ' Please select your preferred Service \n';
                response += '1. Airtime \n';
                response += '2. Data \n';
                response += '3. Transfer \n';
                response += '4. Pay Bills \n';
                response += '0. End';
                break;
            case '1*1*1*1':
                response = " You request for Airtime has been received.";
                break;
            case '1*1*1*2':
                response = " You request for Data has been received.";
                break;
            case '1*1*1*3':
                response = " You request for Transfer has been received.";
                break;
            case '1*1*1*4':
                response = " You request for Pay Bills has been received.";
                break;
            case '1*1*1*0':
                response = " Your session has ended.";
                break;
            // Handle other cases similarly
            case '1*2':
                response = " O ti yan Yoruba gẹ́gẹ́ bí èdè tí o fẹ́ràn jù. \n";
                response += 'Jọwọ Tẹ 1 lati jẹrisi \n';
                break;
            case '1*2*1':
                response = ' Jọ̀wọ́ yan Iṣẹ́ tí o fẹ́ràn jù \n';
                response += '1. Airtime \n';
                response += '2. Data \n';
                response += '3. Transfer \n';
                response += '4. Pay Bills \n';
                response += '0. End';
                break;
            case '1*1*1*1':
                response = " O beere fun Airtime.";
                break;
            case '1*1*1*2':
                response = " O beere fun Data.";
                break;
            case '1*1*1*3':
                response = " O beere fun Transfer.";
                break;
            case '1*1*1*4':
                response = " O beere fun Pay Bills.";
                break;
            case '1*1*1*0':
                response = " Ìgbéyà rẹ ti parí..";
                break;
            default:
                response = ' Invalid input. Please try again.';
                break;
        }

        return response;
    }



    async thirdPartyResponse(text: string): Promise<string> {
        let response: string;

        switch (text) {
            case '1':
                response = 'Please select your preferred language \n';
                response += '1. English \n';
                response += '2. Yoruba \n';
                response += '0. End \n';
                break;
            case '1*1':
                response = "CON You've selected English as your preferred language. \n";
                response += 'Please Enter 1 to confirm \n';
                break;
            case '1*0':
                response = "END Your session has ended.";
                break;
            case '1*1*1':
                response = 'CON Please select your preferred Service \n';
                response += '1. Airtime \n';
                response += '2. Data \n';
                response += '3. Transfer \n';
                response += '4. Pay Bills \n';
                response += '0. End';
                break;
            case '1*1*1*1':
                response = "END You request for Airtime has been received.";
                break;
            case '1*1*1*2':
                response = "END You request for Data has been received.";
                break;
            case '1*1*1*3':
                response = "END You request for Transfer has been received.";
                break;
            case '1*1*1*4':
                response = "END You request for Pay Bills has been received.";
                break;
            case '1*1*1*0':
                response = "END Your session has ended.";
                break;
            // Handle other cases similarly
            case '1*2':
                response = "CON O ti yan Yoruba gẹ́gẹ́ bí èdè tí o fẹ́ràn jù. \n";
                response += 'Jọwọ Tẹ 1 lati jẹrisi \n';
                break;
            case '1*2*1':
                response = 'CON Jọ̀wọ́ yan Iṣẹ́ tí o fẹ́ràn jù \n';
                response += '1. Airtime \n';
                response += '2. Data \n';
                response += '3. Transfer \n';
                response += '4. Pay Bills \n';
                response += '0. End';
                break;
            case '1*1*1*1':
                response = "END O beere fun Airtime.";
                break;
            case '1*1*1*2':
                response = "END O beere fun Data.";
                break;
            case '1*1*1*3':
                response = "END O beere fun Transfer.";
                break;
            case '1*1*1*4':
                response = "END O beere fun Pay Bills.";
                break;
            case '1*1*1*0':
                response = "END Ìgbéyà rẹ ti parí..";
                break;
            default:
                response = 'END Invalid input. Please try again.';
                break;
            
        }
        return response;
    }
}
