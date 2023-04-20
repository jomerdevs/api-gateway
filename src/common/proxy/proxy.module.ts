import { Module } from "@nestjs/common";
import { ClientProxyCrazyFlights } from "./client-proxy";

@Module({
    providers: [ClientProxyCrazyFlights],
    exports: [ClientProxyCrazyFlights],
})

export class ProxyModule {}