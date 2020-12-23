import {Type} from "@tsed/core";
import {ClientMetadata, Configuration} from "oidc-provider";
import {OidcAdapter} from "./OidcAdapter";
import {OidcAccountsMethods} from "./OidcAccountsMethods";
import {OidcClientsMethods} from "./OidcClientsMethods";

export interface OidcSettings {
  /**
   * Issuer URI. By default Ts.ED create issuer with http://localhost:${httpPort}
   */
  issuer?: string;
  /**
   *
   */
  jwksPath?: string;
  /**
   * Secure keys.
   */
  secureKey?: string[];
  /**
   * Enable proxy.
   */
  proxy?: boolean;
  /**
   * Static clients lists
   */
  clients?: ClientMetadata[];
  /**
   * Oidc-provider Options
   */
  options?: Configuration;
  /**
   * Injectable service to manage database connexion
   */
  Adapter?: Type<OidcAdapter>;
  /**
   * Injectable service to manage accounts
   */
  Accounts?: Type<OidcAccountsMethods>;
  /**
   * Injectable service to manage clients
   */
  Clients?: Type<OidcClientsMethods>;
}

declare global {
  namespace TsED {
    interface Configuration {
      oidc: OidcSettings;
    }
  }
}
