import {computed, Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {delay, of, tap} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class MemberService {
  List$: WritableSignal<string[]> = signal(['test user', 'test user2']);
  Detail$: WritableSignal<string> = signal('');




  setDetail() {
    return this.Detail$;
  }
}
