import { Global, Module } from '@nestjs/common';
import { HeygenProvider } from '@signalcast/nestjs-libraries/3rdparties/heygen/heygen.provider';
import { ReelFarmProvider } from '@signalcast/nestjs-libraries/3rdparties/reelfarm/reelfarm.provider';
import { ThirdPartyManager } from '@signalcast/nestjs-libraries/3rdparties/thirdparty.manager';

@Global()
@Module({
  providers: [HeygenProvider, ReelFarmProvider, ThirdPartyManager],
  get exports() {
    return this.providers;
  },
})
export class ThirdPartyModule {}
