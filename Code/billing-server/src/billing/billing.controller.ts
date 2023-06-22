import { Controller, Post, Body } from '@nestjs/common';
import { BillingService } from './billing.service';
import { PerformAdvanceDto } from './dto/perform-advance.dto';

@Controller('billing')
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Post('/perform_advance')
  performAdvance(@Body() performAdvanceDto: PerformAdvanceDto) {
    return this.billingService.performAdvance(performAdvanceDto);
  }
}
