import {Constant, PlatformContext, Provider, ProviderScope, Scope} from "@tsed/common";
import {Env} from "@tsed/core";
import {Inject, Injectable} from "@tsed/di";
import {Account, AnyObject, InteractionResults, PromptDetail} from "oidc-provider";
import {INTERACTION_CONTEXT} from "../constants";
import {OidcSession} from "../decorators";
import {OidcInteraction} from "../domain";
import {debug} from "../utils/debug";
import {OidcInteractions} from "./OidcInteractions";
import {OidcProvider} from "./OidcProvider";

@Injectable()
@Scope(ProviderScope.REQUEST)
export class OidcInteractionContext {
  @Constant("env")
  env: Env;

  @Inject()
  protected oidcProvider: OidcProvider;

  @Inject()
  protected oidcInteractions: OidcInteractions;

  @Inject()
  protected context: PlatformContext;

  protected raw: OidcInteraction;

  get session(): OidcSession | undefined {
    return this.raw.session as any;
  }

  get prompt(): PromptDetail {
    return this.raw.prompt;
  }

  get params(): AnyObject {
    return this.raw.params;
  }

  get uid(): string {
    return this.raw.uid;
  }

  $onInit() {
    this.context.set(INTERACTION_CONTEXT, this);
  }

  async runInteraction(name: string) {
    const handler = this.oidcInteractions.getInteractionHandler(name);

    if (handler) {
      await handler(this.context);
    }
  }

  async interactionDetails(): Promise<OidcInteraction> {
    this.raw = await this.oidcProvider.get().interactionDetails(this.context.getReq(), this.context.getRes());

    return this.raw;
  }

  interactionFinished(result: InteractionResults, options: {mergeWithLastSubmission?: boolean} = {mergeWithLastSubmission: false}) {
    return this.oidcProvider.get().interactionFinished(this.context.getReq(), this.context.getRes(), result, options);
  }

  interactionResult(result: InteractionResults, options: {mergeWithLastSubmission?: boolean} = {mergeWithLastSubmission: false}) {
    return this.oidcProvider.get().interactionResult(this.context.getReq(), this.context.getRes(), result, options);
  }

  setProviderSession(options: {
    account: string;
    ts?: number;
    remember?: boolean;
    clients?: string[];
    meta?: AnyObject;
  }): InstanceType<Provider["Session"]> {
    return this.oidcProvider.get().setProviderSession(this.context.getReq(), this.context.getRes(), options);
  }

  render(view: string, result: any) {
    return this.context.response.render(view, result);
  }

  save(ttl?: number) {
    return this.raw.save(ttl);
  }

  findClient(clientId?: string): InstanceType<Provider["Client"]> {
    if (clientId) {
      return this.oidcProvider.get().Client.find(clientId);
    }

    return this.oidcProvider.get().Client.find(this.params.client_id);
  }

  /**
   *
   * @param sub
   * @param token
   */
  async findAccount(sub?: string, token?: any): Promise<Account | undefined> {
    if (!sub && this.session) {
      sub = this.session.accountId() as any;
    }

    if (!sub) {
      return;
    }

    return this.oidcProvider.get().Account.findAccount(undefined as any, sub!, token);
  }

  debug(obj?: any): any {
    if (this.env === Env.PROD) {
      return;
    }

    if (obj) {
      return debug(obj);
    }

    return {
      session: this.session ? this.debug(this.session) : undefined,
      dbg: {
        params: this.debug(this.params),
        prompt: this.debug(this.prompt)
      }
    };
  }
}
