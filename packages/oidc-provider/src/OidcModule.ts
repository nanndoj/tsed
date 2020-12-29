import {Inject, InjectorService, PlatformApplication} from "@tsed/common";
import {Module} from "@tsed/di";
import {OidcAdapters} from "./services/OidcAdapters";
import {OidcJwks} from "./services/OidcJwks";
import {OidcProvider} from "./services/OidcProvider";

@Module({
  imports: [OidcProvider, OidcAdapters, OidcJwks]
})
export class OidcModule {
  @Inject()
  app: PlatformApplication;

  @Inject()
  oidcProvider: OidcProvider;

  @Inject()
  injector: InjectorService;

  async $onInit() {
    await this.oidcProvider.create();
  }

  async $afterRoutesInit() {
    const provider = this.oidcProvider.get();

    this.app.use(provider.callback);
  }

  $onReady() {
    const {injector} = this;
    const {httpsPort, httpPort} = injector.settings;

    const displayLog = (host: any) => {
      const url = typeof host.port === "number" ? `${host.protocol}://${host.address}:${host.port}` : "";

      injector.logger.info(`WellKnown is available on ${url}/.well-known/openid-configuration`);
    };

    if (httpsPort) {
      const host = injector.settings.getHttpsPort();
      displayLog({protocol: "https", ...host});
    } else if (httpPort) {
      const host = injector.settings.getHttpPort();
      displayLog({protocol: "http", ...host});
    }
  }
}
