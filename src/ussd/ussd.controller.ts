/* eslint-disable prettier/prettier */
// ussd.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { UssdService } from './ussd.service';

@Controller('ussd')
export class UssdController {
  constructor(private readonly ussdService: UssdService) {}

    //NO THIRD PARTY
    @Post("/ussd_no_third_party")
  async handleNo3rdPartyRequest(@Body() body: any): Promise<string> {
    const { text } = body;
    let response: string;

    if (!text) {
      response =
        'Welcome to USSD Banking with Payyme. N20 will be deducted for this service. \n';
      response += '1. Continue \n';
      response += '2. Cancel';
    } else {
      response = await this.ussdService.getResponse(text);
    }

    return response;
    }
    
    


    //THIRD PARTY
    @Post("/ussd_no_third_party")
    async handle3rdPartyRequest(@Body() body: any): Promise<string> {
        const { text } = body;
        let response: string;

        if (!text) {
            response =
                'Welcome to USSD Banking with Payyme. N20 will be deducted for this service. \n';
            response += '1. Continue \n';
            response += '2. Cancel';
        } else {
            response = await this.ussdService.getResponse(text);
        }

        return response;
    }
}
