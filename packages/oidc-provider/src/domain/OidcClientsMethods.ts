import Provider from "oidc-provider";

export type Client = InstanceType<Provider["Client"]>;

export interface OidcClientsMethods {
  find(id: string): Promise<Client | undefined>;
}
