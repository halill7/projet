import {effect, EffectRef, Injectable, signal, WritableSignal} from '@angular/core';
import {environment} from "../../../../environnements/environment.dev";
import {Token} from "./token.interface";
import {isNil} from "lodash";

@Injectable({
  providedIn: 'root'
})
export class TokenService{
  token: WritableSignal<Token> = signal(this.getToken());
  private readonly tokenSaveHandler: EffectRef = effect(() =>
    this.handleTokenChange(this.token()));
  public setToken(token: Token): void {
    if (token.token.trim().length > 0) {
      this.token.set(token);
    } else {
      this.token.set(this.getEmpty());
      localStorage.removeItem(environment.TOKEN_KEY);
    }
  }
  private handleTokenChange(token: Token): void {
    if (!token.isEmpty) {
      localStorage.setItem(environment.TOKEN_KEY, JSON.stringify(token));
    } else {
      localStorage.removeItem(environment.TOKEN_KEY);
    }
  }
  private getToken(): Token {
    const str = localStorage.getItem(environment.TOKEN_KEY);
    return !isNil(str) ? JSON.parse(str) as Token : this.getEmpty();
  }
  private getEmpty(): Token {
    return {token: '', refreshToken: '', isEmpty: true};
  }
}
